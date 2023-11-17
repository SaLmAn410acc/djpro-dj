<script setup>
import axios from "@axios"
import { VDataTable } from "vuetify/labs/VDataTable"

const filters = ref(["all", "read", "unread", "assigned"])

// watch filters array for changes
watch(
  filters,
  (newVal, oldVal) => {
    if (newVal.includes("all")) {
      filters.value = ["all", "read", "unread", "assigned"]
    }
    if (newVal.length === 3 && newVal.includes("all")) {
      filters.value = newVal.filter(item => item !== "all")
    }

    if (newVal.length === 3 && !newVal.includes("all")) {
      filters.value = ["all", ...newVal]
    }
  },
  { deep: true },
)

const loading = ref(false)
const data = ref([])

const getData = async () => {
  try {
    loading.value = true

    const res = await axios.get("/Inquiry/GetList")

    data.value = res.data
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

// onMounted(() => {
//   getData()
// })

const items = [
  { id: 1, status: 'Accepted',  contract_type: 'Private Party', start_date: "06/22/2023", end_date: '09/22/2023', client: 'Jeremy Sanderson', view_edit_profile: 'link1' },
  { id: 2, status: 'Pending',  contract_type: 'Private Party', start_date: "06/22/2023", end_date: '09/22/2023', client: 'John Doe', view_edit_profile: 'link1' },
  { id: 3, status: 'Rejected',  contract_type: 'Private Party', start_date: "06/22/2023", end_date: '09/22/2023', client: 'DJ Tony One', view_edit_profile: 'link1'  },


]


const headers = [
  {
    title: "#",
    key: "id",
  },
  {
    title: "Status",
    key: "status",
  },
  {
    title: "Contract Type",
    key: "contract_type",
  },
  {
    title: "Start Date",
    key: "start_date",
  },
  {
    title: "End Date",
    key: "end_date",
  },
  
  {
    title: "Client",
    key: "client",
  },
  {
    title: "View",
    key: "view_edit_profile",
    sortable: false,
    align: "center",
  },
]

const itemPerPageOptions = [
  {
    title: "12",
    value: 12,
  },
  {
    title: "24",
    value: 24,
  },
  {
    title: "36",
    value: 36,
  },
  {
    title: "$vuetify.dataFooter.itemsPerPageAll",
    value: -1,
  },
]

const formatDate = dateString => {
  const date = new Date(dateString)
  
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}
</script>

<template>
  <div class="main-service-wrap">
    <VRow align="center">
      <VCol>
        <h1 class="text-h2 mb-6">
          Agreements
        </h1>
      </VCol>
    </VRow>
    <VDataTable
      :headers="headers"
      :items="items"
      :items-per-page="12"
      items-per-page-text="Show"
      :loading="loading"
      :items-per-page-options="itemPerPageOptions"
      :sort-by="[{ key: 'id', order: 'desc' }]"
    >
      <template #item.status="{ item }">
        <span
          v-if="item.raw.status === 'Accepted'"
          class="text-primary"
        >{{ item.raw.status }}</span>

        <span
          v-else-if="item.raw.status === 'Rejected'"
          
          style="color: #FF334B"
        >{{ item.raw.status }}</span>

        <span
          v-else-if="item.raw.status === 'Pending'"
         
          style="color: #8E97A0"
        >{{ item.raw.status }}</span>
      </template>
      
      <template #item.id="{ item }">
        <div class="d-flex align-center">
          <span
            class="circle-dot"
            :style="{ backgroundColor: item.raw.color }"
          />
          <span class="font-weight-medium">{{ item.raw.id ?? "-" }}</span>
        </div>
      </template>
      <template #item.performer="{ item }">
        <div class="d-flex align-center">
          <VImg
            v-if="item?.raw?.performer?.imageFile"
            :src="item?.raw?.performer?.imageFile"
            :lazy-src="item?.raw?.performer?.imageFile"
            width="40"
            height="40"
            class="flex-0-1 mr-3 rounded-circle"
          />
          <span class="font-weight-medium">{{ item?.raw?.performer?.firstName }}
            {{ item?.raw?.performer?.lastName }}</span>
        </div>
      </template>
     
      <template #item.view_edit_profile="{ item }">
        <VBtn
          
          variant="plain"
          color="#000"
          size="none"
          density="comfortable"
          class="px-2"
          :to="{name: 'agreement-details'}"
        >
          <VIcon
            icon="heroicons:eye"
            size="30"
          />
        </VBtn>
        <VMenu
          transition="scale-transition"
          :close-on-content-click="false"
        />
      </template>
    </VDataTable>
  </div>
</template>

<style lang="scss">
.circle-dot {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #E8B840;
  margin-right: 10px;

  @media (max-width: 767px) {
    width: 10px;
    height: 10px;
  }
}

.new-highlight{
  color: #E8B840;
}

.notes-sec{
  max-width: 500px;
  width: 100%;
}
</style>
