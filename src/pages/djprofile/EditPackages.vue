<template>
  <VCol
    cols="12"
    lg="8"
    class="packages-wrap my-6"
  >
    <VCard
      variant="outlined"
      class="package-item rounded-xxl pa-6 pa-lg-8 mb-6"
    >
      <VRow align="center">
        <VCol>
          <h3 class="text-h4 mb-6">
            Wedding
          </h3>
          <p class="text-body-1 font-weight-medium text-black">
            Reception Package
          </p>
          <p class="text-body-1 font-weight-medium text-black">
            Reception Package w/Dance Lighting
          </p>
          <p class="text-body-1 font-weight-medium text-black">
            Reception Package w/Dance Lighting and 12 Uplights
          </p>
        </VCol>
        <VCol cols="auto text-end">
          <div class="mb-4">
            <VBtn
              variant="outlined"
              color="black"
              size="x-large"
              @click="isDrawerVisible = !isDrawerVisible"
            >
              Details
            </VBtn>
          </div>
          <div>
            <VBtn
              color="error"
              size="x-large"
            >
              Remove Package
            </VBtn>
          </div>
        </VCol>
      </VRow>
    </VCard>
    <VCard
      variant="outlined"
      class="package-item rounded-xxl pa-6 pa-lg-8 mb-6"
    >
      <VRow align="center">
        <VCol>
          <h3 class="text-h4 mb-6">
            Quinceanera
          </h3>
          <p class="text-body-1 font-weight-medium text-black">
            Padrino Package
          </p>
          <p class="text-body-1 font-weight-medium text-black">
            Madrina Package
          </p>
          <p class="text-body-1 font-weight-medium text-black">
            The Dream Quince Package
          </p>
        </VCol>
        <VCol cols="auto text-end">
          <div class="mb-4">
            <VBtn
              variant="outlined"
              color="black"
              size="x-large"
              @click="isDrawerVisible = !isDrawerVisible"
            >
              Details
            </VBtn>
          </div>
          <div>
            <VBtn
              color="error"
              size="x-large"
            >
              Remove Package
            </VBtn>
          </div>
        </VCol>
      </VRow>
    </VCard>
    <VCard
      variant="outlined"
      class="package-item rounded-xxl pa-6 pa-lg-8 mb-6"
    >
      <VRow align="center">
        <VCol>
          <h3 class="text-h4 mb-6">
            Corporate Event
          </h3>
          <p class="text-body-1 font-weight-medium text-black">
            Manager Package
          </p>
          <p class="text-body-1 font-weight-medium text-black">
            CEO Package
          </p>
        </VCol>
        <VCol cols="auto text-end">
          <div class="mb-4">
            <VBtn
              variant="outlined"
              color="black"
              size="x-large"
              @click="isDrawerVisible = !isDrawerVisible"
            >
              Details
            </VBtn>
          </div>
          <div>
            <VBtn
              color="error"
              size="x-large"
            >
              Remove Package
            </VBtn>
          </div>
        </VCol>
      </VRow>
    </VCard>
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
                <tbody>
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
    <VBtn
      density="compact"
      variant="text"
      color="black"
      size="x-small"
      :to="{ path: '/disc-jockeys/' + route.params.slug + '/edit/packages' }"
    >
      <VIcon class="me-2">
        material-symbols:package-outline
      </VIcon>
      Select Packages
    </VBtn>
  </VCol>
</template>

<script setup>
import { ref, onMounted } from "vue"

const isDrawerVisible = ref(false)


const route = useRoute()

const TogglePackageDetails = () => {
  // this.emitter.emit('toggleDrawer')
}
</script>

<style>
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
</style>
