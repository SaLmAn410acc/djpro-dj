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
  { invoice_id: '#21341', status: 'Pending',  due_date: '06/12/2023', date_paid: "-", event_type: 'Wedding', total_amount: '$12.300.00 USD', view_edit_profile: 'link1' },
  { invoice_id: '#21341', status: 'Paid',  due_date: '06/12/2023', date_paid: "05/10/2023", event_type: 'Private Party', total_amount: '$8.000.00 USD', view_edit_profile: 'link1' },
]


const headers = [
  {
    title: "Invoice#",
    key: "invoice_id",
  },
  {
    title: "Status",
    key: "status",
  },
  {
    title: "Due Date",
    key: "due_date",
  },
  {
    title: "Due Paid",
    key: "date_paid",
  },
  {
    title: "Event",
    key: "event_type",
  },
  {
    title: "Total",
    key: "total_amount",
  },
  {
    key: 'payment',
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
          Billing
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
          v-if="item.raw.status === 'Paid'"
          class="text-primary"
        >{{ item.raw.status }}</span>

        <span
          v-else-if="item.raw.status === 'Pending'"
          
          style="color: #E8B840"
        >{{ item.raw.status }}</span>
      </template>
      
      <template #item.invoice_id="{ item }">
        <div class="d-flex align-center">
          <span class="font-weight-medium">{{ item.raw.invoice_id ?? "-" }}</span>
        </div>
      </template>

      <template #item.total_amount="{ item }">
        <div class="d-flex align-center">
          <span class="font-weight-medium">{{ item.raw.total_amount }}</span>
        </div>
      </template>

      <template #item.payment="{ item }">
        <div class="d-flex align-center justify-end">
          <VBtn
            class="ms-5 payment-btn"
            variant="flat"
              
            density="comfortable"
          >
            Make Payment
          </VBtn>
        </div>
      </template>
      
      
     
      <template #item.view_edit_profile="{ item }">
        <div class="d-flex align-center">
          <VBtn
            :to="{ name: 'inquiries-detail', params: { slug: item.raw.invoice_id } }"
            variant="plain"
            color="#000"
            size="none"
            density="comfortable"
            class="px-2 ms-3"
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
        </div>
      </template>
    </VDataTable>
  </div>
</template>

<style lang="scss">
.payment-btn{
    border-radius: 10px;
  }

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
