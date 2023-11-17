<template>
  <VForm
    ref="refVForm"
    class="add-product-wrap my-6"
    @submit.prevent="onSubmit"
  >
    <VRow
      class="border-b pb-6 mb-6"
      align="center"
      no-gutters
    >
      <VCol
        cols="12"
        lg="6"
      >
        <VBreadcrumbs
          :items="breadcrumbs"
          class="px-0"
          active-class="text-darken"
        >
          <template #divider>
            <VIcon icon="quill:arrow-right" />
          </template>
        </VBreadcrumbs>
      </VCol>
      <VCol
        cols="12"
        lg="6"
      >
        <div class="d-flex justify-lg-end gap-x-4">
          <VBtn
            v-if="!isCreationDisabled"
            type="submit"
            class="font-weight-regular"
            color="primary"
            size="x-large"
          >
            <span class="px-5">Create</span>
          </VBtn>
          <VBtn
            v-else
            type="submit"
            class="font-weight-regular"
            color="primary"
            size="x-large"
            disabled
          >
            <span class="px-5">Create</span>
          </VBtn>
          <VBtn
            :to="{ path: '/dj-products' }"
            variant="outlined"
            color="black"
          >
            Cancel
          </VBtn>
        </div>
      </VCol>
    </VRow>
    <VCard variant="outlined">
      <div class="title-header pa-6 pa-lg-8 border-b">
        <h4 class="text-h4">
          <input
            v-model="product.name"
            type="text"
            class="editable-product-field"
            placeholder="Title"
          >
        </h4>
      </div>
      <div class="pa-6 pa-lg-8">
        <VTable
          class="packages-table mb-6"
          density="default"
        >
          <thead>
            <tr>
              <th>Product Photo</th>
              <th>Product Name</th>
              <th>Price For Additional Hour (USD)</th>
              <th class="text-end">
                Price (USD)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(packageDetail, index) in product.packages"
              :key="packageDetail.id"
            >
              <td style="width: 1px">
                <label class="image-uploader">
                  <input
                    type="file"
                    @change="onFileChange($event, index)"
                  >
                  <img
                    :src="packageDetail.photoUrl ?? productPlaceholder"
                    class="rounded"
                  >
                </label>
              </td>
              <td style="width: 100%">
                <h5 class="text-h5 mb-4">
                  <input
                    v-model="packageDetail.name"
                    type="text"
                    class="editable-product-field"
                    placeholder="Title"
                  >
                </h5>
                <div class="text-body-2">
                  <textarea
                    v-model="packageDetail.description"
                    class="editable-product-field"
                    placeholder="Description"
                    :rows="
                      Math.max(
                        calculateTextareaRows(packageDetail.description),
                        5
                      )
                    "
                  />
                </div>
              </td>
              <td>
                <h5 class="text-h5">
                  <input
                    v-model="packageDetail.additionalHourPrice"
                    type="text"
                    class="editable-product-field"
                    placeholder="0.00"
                  >
                </h5>
              </td>
              <td
                class="text-end"
                style="width: 1px"
              >
                <h5 class="text-h5">
                  <input
                    v-model="packageDetail.price"
                    type="text"
                    class="editable-product-field"
                    placeholder="0.00"
                  >
                </h5>
              </td>
            </tr>
          </tbody>
        </VTable>
        <VBtn
          density="compact"
          variant="text"
          color="black"
          size="x-small"
          @click="addPackage"
        >
          <VIcon class="me-2">
            material-symbols:library-add-outline
          </VIcon>
          Add an Option
        </VBtn>
      </div>
      <div class="title-header pa-6 pa-lg-8 border-b">
        <h4 class="text-h4 mb-3">
          Enhancements
        </h4>
      </div>
      <div class="pa-6 pa-lg-8">
        <VTable
          class="packages-table mb-6"
          density="default"
        >
          <thead>
            <tr>
              <th>Product Name</th>
              <th class="text-end">
                Price (USD)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(enhancement, index) in product.enhancements"
              :key="enhancement.id"
            >
              <td style="width: 100%">
                <h5 class="text-h5 mb-4">
                  <input
                    v-model="enhancement.name"
                    type="text"
                    class="editable-product-field"
                    placeholder="Item Name"
                  >
                </h5>
                <div class="text-body-2">
                  <textarea
                    v-model="enhancement.description"
                    class="editable-product-field"
                    placeholder="Item description (optional)"
                    :rows="calculateTextareaRows(enhancement.description)"
                  />
                </div>
              </td>
              <td
                class="text-end"
                style="width: 1px"
              >
                <h5 class="text-h5">
                  <input
                    v-model="enhancement.price"
                    type="text"
                    class="editable-product-field"
                    placeholder="0.00"
                  >
                </h5>
              </td>
            </tr>
          </tbody>
        </VTable>
        <VBtn
          density="compact"
          variant="text"
          color="black"
          size="x-small"
          @click="addEnhancement"
        >
          <VIcon class="me-2">
            material-symbols:library-add-outline
          </VIcon>
          Add an Option
        </VBtn>
      </div>
    </VCard>
  </VForm>
</template>

<script setup>
import axios from "@axios"
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import productPlaceholder from "@images/add-product/product-placeholder.png"
import { requiredValidator } from "@validators"
import useToastPlugin from "@/composables/vue-toastification.js"

const $toast = useToastPlugin()
const $loading = inject("loadingOverlay")

const breadcrumbs = [
  {
    text: "Your Public Information",
    disabled: false,
    to: "/djprofile",
  },
  {
    text: "Add New Packages",
    to: "djprofile-addnewpackage",
    disabled: false,
  },
  {
    text: "Create Custom Package",
    to: "djprofile-custompackage",
   
  },
]

const product = ref({
  name: "",
  productType: "DjProduct",
  packages: [
    {
      id: 1,
      name: "",
      description: "",
      price: 0,
      additionalHourPrice: 0,
      photoUrl: null,
    },
  ],
  enhancements: [
    // {
    //   id: 1,
    //   name: "",
    //   description: "",
    //   price: 0,
    // },
  ],
})

const onFileChange = (event, index) => {
  const file = event.target.files[0]
  const reader = new FileReader()

  reader.onload = e => {
    product.value.packages[index].photoUrl = e.target.result
  }

  reader.readAsDataURL(file)
}

const calculateTextareaRows = text => {
  if (!text) {
    return 1
  }
  const lines = text.split("\n")
  
  return lines.length
}

const addPackage = () => {
  product.value.packages.push({
    id: product.value.packages.length + 1,
    name: "",
    description: "",
    price: 0,
    additionalHourPrice: 0,
    photoUrl: null,
  })
}

const addEnhancement = () => {
  product.value.enhancements.push({
    id: product.value.enhancements.length + 1,
    name: "",
    description: "",
    price: 0,
  })
}

const isCreationDisabled = ref(true)

watch(
  () => product.value,
  product => {
    if (product.name) {
      isCreationDisabled.value = false
    } else {
      isCreationDisabled.value = true
    }
  },
  { deep: true },
)

const refVForm = ref()

const onSubmit = () => {
  refVForm.value.validate().then(async ({ valid }) => {
    if (valid) {
      let loading = $loading.show()
      try {
        const response = await axios.post("/Product/Create", product.value)
        const { data } = response

        $toast.success("Product created successfully")
        product.value = {
          name: "",
          productType: "DjProduct",
          packages: [
            {
              id: 1,
              name: "",
              description: "",
              price: 0,
              additionalHourPrice: 0,
              photoUrl: null,
            },
          ],
          enhancements: [
            {
              id: 1,
              name: "",
              description: "",
              price: 0,
            },
          ],
        }
      } catch (error) {
        $toast.error("Error creating product")
        console.error(error)
      } finally {
        loading.hide()
      }
    } else {
      $toast.error("Please fill all the required fields")
    }
  })
}
</script>

<style>
.packages-wrap .package-item p:last-of-type {
  margin-bottom: 0;
}
</style>

<style lang="scss">
.v-table.packages-table {
  .v-table__wrapper {
    thead {
      th {
        white-space: nowrap;
      }
    }

    tbody {
      tr {
        td {
          vertical-align: top;
          padding: 32px 16px;
          border-bottom: 1px solid #edeeef;
        }
      }
    }
  }
}

.editable-product-field {
  width: 100%;
  padding: 4px 8px;
  border-radius: 5px;
  outline: none;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #edeeef;
  }

  &:focus {
    border: 1px solid #6a8afa;
    background: #f7f7f7;
  }

  &::placeholder {
    color: #aaaaaa;
  }
}

.image-uploader {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  background: radial-gradient(circle at center, #ffffff 0%, #edeeef 100%);

  input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
