<template>
  <div>
    <VRow
      class="border-b pb-6"
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
          <div>
            <VBtn            
              density="comfortable"
              class="add-package-btn me-0 me-md-3"
              color="#333848"
              height="45px"
              :to="{name: 'djprofile-custompackage'}"
            >
              <span class="text-white px-2 ">Create Custom Package</span>
            </VBtn>
          
            <VBtn
              color="primary"
              size="x-large"
              class="mx-3 mx-md-3"
              @click="saveChanges"
            >
              Confirm
            </VBtn>
            <VBtn
              variant="outlined"
              color="black"
              class="my-3 my-sm-0"
            >
              Cancel
            </VBtn>
          </div>
        </div>
      </VCol>
    </VRow>

    <VRow class="mt-6">
      <VCol
        cols="12"
        lg="8"
      >
        <h1 class="text-h2 mb-6 mb-lg-8">
          Packages
        </h1>
        <VCard
          v-for="y in 5"
          :key="y"
          class="package-selection-wrap position-relative mb-4 mb-lg-6"
          variant="outlined"
        >
          <VCardText>
            <div class="pa-lg-3">
              <VRow align="end">
                <VCol>
                  <h3 class="text-h3 mb-4">
                    Wedding
                  </h3>
                  <ul class="list-none text-black font-weight-medium mb-lg-n2">
                    <li class="mb-2">
                      Reception Package
                    </li>
                    <li class="mb-2">
                      Reception Package w/Dance Lighting
                    </li>
                    <li class="mb-2">
                      Reception Package w/Dance Lighting and 12 Uplights
                    </li>
                  </ul>
                </VCol>
                <VCol
                  cols="12"
                  lg="auto"
                >
                  <VBtn
                    variant="outlined"
                    color="black"
                    @click="isDrawerVisible = !isDrawerVisible"
                  >
                    Details
                  </VBtn>
                </VCol>
              </VRow>
              <VCheckbox />
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <Teleport to="#app">
      <VNavigationDrawer
        v-model="isDrawerVisible"
        class="package-details-drawer"
        :width="1200"
        sticky
        location="right"
        temporary
      >
        <div class="pa-6">
          <VListItem
            class="mb-6"
            nav
          >
            <h3 class="text-h3">
              Package Details
            </h3>
            <template #append>
              <VBtn
                variant="text"
                size="x-small"
                @click.stop="isDrawerVisible = !isDrawerVisible"
              >
                <VIcon
                  icon="ph:x"
                  color="black"
                  size="24"
                />
              </VBtn>
            </template>
          </VListItem>
          <VCard variant="outlined">
            <VCardText>
              <h4 class="text-h4 mb-8">
                Wedding DJ Packages
              </h4>
              <VTable
                class="packages-table mb-8 mb-lg-16"
                density="default"
              >
                <thead>
                  <tr>
                    <th>Product Photo</th>
                    <th>Product Name</th>
                    <th class="text-end">
                      Price (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="n in 5"
                    :key="n"
                    class="my-5"
                  >
                    <td>
                      <img
                        src="@images/packages/package.jpg"
                        class="rounded"
                      >
                    </td>
                    <td>
                      <h5 class="text-h5 mb-4">
                        Reception Package
                      </h5>
                      <ul class="text-black ps-5 text-body-2">
                        <li>
                          4 hours of Professional Wedding Reception DJ/MC
                          services
                        </li>
                        <li>Properly Dressed Wedding DJ</li>
                        <li>Professional Sound System with 2 Speakers</li>
                        <li>Wireless Microphone</li>
                        <li>
                          Custom Wedding Timeline and Itinerary-Unlimited Phone
                          And E-mail Consultation
                        </li>
                        <li>
                          Access to our planning form app which allows you to
                          invite friends and family to select music out for your
                          special day
                        </li>
                        <li>
                          Unlimited amounts of songs within or music database
                        </li>
                        <li>Free Set up and Break Down</li>
                      </ul>
                    </td>
                    <td class="text-end">
                      <h5 class="text-h5">
                        $995.00
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </VTable>
              <h4 class="text-h4 mb-3">
                Enhancements
              </h4>
              <VTable
                class="text-black"
                density="default"
              >
                <thead>
                  <tr>
                    <th style="width: 1px">
                      #
                    </th>
                    <th>Product Name</th>
                    <th class="text-end">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody class="">
                  <tr
                    v-for="x in 16"
                    :key="x"
                  >
                    <td style="width: 1px">
                      <strong>
                        {{ x }}
                      </strong>
                    </td>
                    <td>
                      <strong>Ceremony</strong>
                    </td>
                    <td class="text-end">
                      <strong>$250.00</strong>
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </VCardText>
          </VCard>
        </div>
      </VNavigationDrawer>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue"

const breadcrumbs = [
  {
    text: "Your Public Information",
    disabled: false,
    to: "/djprofile",
  },
  {
    text: "Add New Packages",
    to: "/djprofile/add-new-package",
  },
]


const isDrawerVisible= ref(false)
</script>

<style scoped>
.packages-wrap .package-item p:last-of-type {
  margin-bottom: 0;
}

.package-details-drawer {
  z-index: 1006 !important;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

.package-details-drawer + .v-navigation-drawer__scrim {
  z-index: 1005 !important;
  position: fixed;
}


.add-package-btn{
    background-color: #333848;
    border-radius: 10px;
}
</style>

<style lang="scss">
.package-selection-wrap {
  .v-checkbox {
    position: absolute;
    right: 30px;
    top: 30px;
  }
}


tbody tr td:first-of-type{
     width: 50px;
}



.v-table.packages-table {
  .v-table__wrapper {
    thead {
      th {
        white-space: nowrap;
        border-bottom: none;
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
</style>


