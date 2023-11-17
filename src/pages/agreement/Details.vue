<template>
  <div>
    <VDialog
      v-model="rejectedValue"
      width="500"
    >
      <!-- Dialog close btn -->
      <DialogCloseBtn @click="rejectedValue = !rejectedValue" />

      <!-- Dialog Content -->
      <VCard class="modal-card-wrapper pa-8 pa-md-10 pa-lg-12 pa-xl-14 ">
        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M20 23.6021L4.37138 39.2308C3.8585 39.7436 3.25814 40 2.57031 40C1.88248 40 1.28213 39.7436 0.769246 39.2308C0.256416 38.7179 0 38.1175 0 37.4297C0 36.7419 0.256416 36.1415 0.769246 35.6286L16.3979 20L0.769246 4.37138C0.256416 3.8585 0 3.25814 0 2.57031C0 1.88248 0.256416 1.28213 0.769246 0.769246C1.28213 0.256416 1.88248 0 2.57031 0C3.25814 0 3.8585 0.256416 4.37138 0.769246L20 16.3979L35.6286 0.769246C36.1415 0.256416 36.7419 0 37.4297 0C38.1175 0 38.7179 0.256416 39.2308 0.769246C39.7436 1.28213 40 1.88248 40 2.57031C40 3.25814 39.7436 3.8585 39.2308 4.37138L23.6021 20L39.2308 35.6286C39.7436 36.1415 40 36.7419 40 37.4297C40 38.1175 39.7436 38.7179 39.2308 39.2308C38.7179 39.7436 38.1175 40 37.4297 40C36.7419 40 36.1415 39.7436 35.6286 39.2308L20 23.6021Z"
              fill="#FF334B"
            />
          </svg>

          <h1 class="text-h2 px-5 pt-5 text-black ">
            The DJ Agreement has been rejected
          </h1>
          <p class="text-body-2 my-5 pb-4 px-12">
            You can reach out to the Super Admin to clarify details about the event. You can also discuss new conditions for the event
          </p>

          <VBtn
            size="large"
            class="proposal-btn"
            @click="rejectedValue = false"
          >
            <span class="px-5">
              Go to My Agreements
            </span>
          </VBtn>
        </div>
        

        <!--
          <VCardText class="d-flex justify-end">
          <VBtn @click="rejectedValue = false">
          I accept
          </VBtn>
          </VCardText> 
        -->
      </VCard>
    </VDialog>


    <VDialog
      v-model="acceptedValue"
      width="500"
    >
      <!-- Dialog close btn -->
      <DialogCloseBtn @click="acceptedValue = !acceptedValue" />

      <!-- Dialog Content -->
      <VCard class="modal-card-wrapper pa-8 pa-md-10 pa-lg-12 pa-xl-14 ">
        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="37"
            viewBox="0 0 66 37"
            fill="none"
          >
            <path
              d="M15.7219 36.1702L0.806625 21.55C0.248834 21.0032 -0.0196682 20.3498 0.00112042 19.5897C0.021909 18.8297 0.311199 18.1763 0.868991 17.6296C1.42678 17.0828 2.09339 16.8095 2.8688 16.8095C3.64422 16.8095 4.31082 17.0828 4.86861 17.6296L17.6807 30.2686L21.6802 34.189L19.6787 36.1702C19.1078 36.7298 18.4451 37.0063 17.6906 36.9999C16.9359 36.9935 16.2797 36.7169 15.7219 36.1702ZM29.6526 35.7085L14.7176 21.069C14.1598 20.5223 13.8947 19.869 13.922 19.1089C13.9494 18.3488 14.2484 17.689 14.8193 17.1294C15.3771 16.5955 16.0437 16.3286 16.8191 16.3286C17.5945 16.3286 18.2545 16.5955 18.7992 17.1294L31.631 29.7877L61.1638 0.85858C61.7085 0.311826 62.3686 0.0352338 63.144 0.0287988C63.9194 0.0224176 64.5925 0.292576 65.1633 0.839276C65.7211 1.38603 66 2.04266 66 2.80916C66 3.57562 65.7211 4.23222 65.1633 4.77897L33.6094 35.7085C33.0516 36.2552 32.3921 36.5286 31.631 36.5286C30.8698 36.5286 30.2104 36.2552 29.6526 35.7085ZM31.631 23.4927L27.651 19.5723L46.7818 0.82005C47.3396 0.273351 48.0062 0 48.7816 0C49.557 0 50.2236 0.273351 50.7814 0.82005C51.3261 1.3668 51.5984 2.02022 51.5984 2.78029C51.5984 3.54036 51.3261 4.18734 50.7814 4.72122L31.631 23.4927Z"
              fill="#6A8AFA"
            />
          </svg>

          <h1 class="text-h2 px-5 pt-5">
            The DJ Agreement has been accepted
          </h1>
          <p class="text-body-2 my-5 pb-4 px-12">
            You'll find all the details about the event in the contract details and event page
          </p>

          <VBtn
            size="large"
            class="proposal-btn"
            @click="acceptedValue = false"
          >
            <span class="px-5">
              Go to My Agreements
            </span>
          </VBtn>
        </div>
        

        <!--
          <VCardText class="d-flex justify-end">
          <VBtn @click="rejectedValue = false">
          I accept
          </VBtn>
          </VCardText> 
        -->
      </VCard>
    </VDialog>

    
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
    </VRow>

    <VCard
      variant="outlined"
      class="mx-auto my-12"
    >
      <div class=" py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
        <VRow
          class=" pb-6 mb-0 mb-md-5"
          align="center"
          no-gutters
        >
          <VCol
            cols="12"
            md="6"
          >
            <h1 class="text-h2">
              Your Public Information
            </h1>
          </VCol>
          <VCol
            cols="12"
            md="6"
          >
            <div
              v-if="status === null"
              class="d-flex justify-md-end gap-x-4"
            >
              <VBtn
                color="primary"
                size="x-large"
                class="my-3 my-md-0"
                @click="acceptedValue = !acceptedValue"
              >
                <span class="mx-5">Accept</span> 
              </VBtn>
              <VBtn
                variant="outlined"
                color="#FF334B"
                class="rejectedBtn my-3 my-md-0"
                @click="rejectedValue = !rejectedValue"
              >
                <span class="mx-5">Reject</span>
              </VBtn>
            </div>

            <div
              v-else
              class="d-flex justify-md-end gap-x-4"
            >
              <template v-if="status == 'accepted'">
                <strong class="text-primary my-3 my-md-0">Accepted</strong>
              </template>
              <template v-else-if="status == 'rejected'">
                <strong class="text-error my-3 my-md-0">Rejected</strong>
              </template>
            </div>
          </VCol>
        </VRow>

        <VRow
          class="pb-6"
          align="center"
          no-gutters
        >
          <VCol
            cols="12"
            lg="5"
            class="mb-5 mb-lg-0"
          >
            <h4 class="text-h3 mb-3">
              Location
            </h4>
            <div class="d-flex flex-wrap">
              <div class="me-8">
                <p class="mb-1 text-lighten">
                  Address
                </p>
                <p class="mb-3 mb-lg-2 font-weight-semibold text-black">
                  5010 Cass St suite k
                </p>
              </div>

              <div class="me-8">
                <p class="mb-1 text-lighten">
                  City
                </p>
                <p class="mb-3 mb-lg-2 font-weight-semibold text-black">
                  Riverside
                </p>
              </div>

              <div class="me-8">
                <p class="mb-1 text-lighten">
                  State
                </p>
                <p class="mb-2 font-weight-semibold text-black">
                  California
                </p>
              </div>

              <div class="me-8">
                <p class="mb-1 text-lighten">
                  ZIP Code
                </p>
                <p class="mb-2 font-weight-semibold text-black">
                  92109
                </p>
              </div>
            </div>
          </VCol>

          <VCol
            cols="12"
            lg="4"
            class="mb-5 mb-lg-0"
          >
            <h4 class="text-h3 mb-3">
              Time
            </h4>
            <div class="d-flex">
              <div class="me-8">
                <p class="mb-1 text-lighten">
                  Event Date
                </p>
                <p class="mb-2 font-weight-semibold text-black">
                  07 Apr, 2024
                </p>
              </div>

              <div class="me-8">
                <p class="mb-1 text-lighten">
                  Start Time
                </p>
                <p class="mb-2 font-weight-semibold text-black">
                  12:30 PM
                </p>
              </div>

              <div class="me-8  ">
                <p class="mb-1 text-lighten">
                  End Time
                </p>
                <p class="mb-2 font-weight-semibold text-black">
                  04:00 PM
                </p>
              </div>
            </div>
          </VCol>


          <VCol
            cols="12"
            lg="3"
            class="mb-3 mb-lg-0"
          >
            <h4 class="text-h3 mb-3">
              Payment
            </h4>
            <div class="d-flex">
              <div class="me-8">
                <p class="mb-1 text-lighten">
                  Base Pay
                </p>
                <p class="mb-2 font-weight-semibold text-black">
                  $1000.00
                </p>
              </div>

              <div class="me-8">
                <p class="mb-1 text-lighten">
                  Equipment Pay
                </p>
                <p class="mb-2 font-weight-semibold text-black">
                  $1000.00
                </p>
              </div>
            </div>
          </VCol>
        </VRow>

        <div class="d-flex align-center mb-3">
          <h4 class="font-weight-medium">
            Total Compensation
          </h4>

          <h2 class="font-weight-bold text-primary ms-3">
            $2300.00
          </h2>
        </div>

        <div>
          <h4 class="text-h5 mb-5">
            DJ pay break down for mileage
          </h4>
        </div>
      </div>
    </VCard>


    <VCard
      variant="outlined"
      class="mx-auto my-12 card-bg"
    >
      <div class=" py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
        <VRow
          class=" pb-6"
          align="center"
          no-gutters
        >
          <VCol
            cols="12"
            md="3"
          >
            <h1 class="text-h3 font-weight-bold">
              Private Party
            </h1>
          </VCol>
          <VCol
            cols="12"
            md="7"
          >
            <div class="my-8 my-md-0">
              <p class="mb-2 text-lighten">
                Client
              </p>
              <p class="mb-2 font-weight-semibold text-black">
                Jeremy Sanderson
              </p>
              <p class="mb-2 font-weight-semibold text-black">
                jeremysanderson@gmail.com
              </p>
            </div>
          </VCol>
          <VCol
            cols="12"
            md="2"
          >
            <div class="d-flex justify-lg-end gap-x-4">
              <VBtn
                        
                density="comfortable"
                class="add-package-btn me-3"
                color="#333848"
                height="45px"
              >
                <span class="text-white px-2 ">View Contract</span>
              </VBtn>
            </div>
          </VCol>
        </VRow>
      </div>
    </VCard>
  </div>
</template>


<script setup>
import { ref } from "vue"

const status =  ref(null)

// const status =  ref('accepted')

// const status =  ref('rejected')


const acceptedValue = ref(false)
const rejectedValue = ref(false)

const breadcrumbs = [
  {
    text: "Your Public Information",
    disabled: false,
    to: "/agreement",
  },
  {
    text: "Add New Packages",
    to: "/djprofile/add-new-package",
  },
]


const isDrawerVisible= ref(false)
</script>


<style scoped>
.add-package-btn{
    background-color: #333848;
    border-radius: 10px;
}

.card-bg{
  background-color: #FCFCFC;
}

.rejectedBtn.v-btn--variant-outlined:not([class*=text-]) {
    border-color:  #FF334B;
    border-radius: 10px;
}
</style>
