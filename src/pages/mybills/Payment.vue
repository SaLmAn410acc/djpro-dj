<template>
  <VDialog
    v-model="rejectedValue"
    width="500"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="rejectedValue = !rejectedValue" />

    <!-- Dialog Content -->
    <VCard class="modal-card-wrapper pa-8 pa-md-8 pa-lg-10 pa-xl-14 pa-xxl-16">
      <div class="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <path
            d="M29.9858 45.2252C30.7966 45.2252 31.4713 44.9606 32.0098 44.4316C32.5483 43.9025 32.8176 43.2325 32.8176 42.4217C32.8176 41.6109 32.5501 40.9333 32.0151 40.3889C31.4802 39.8444 30.8073 39.5722 29.9965 39.5722C29.1857 39.5722 28.511 39.844 27.9725 40.3876C27.4339 40.9311 27.1646 41.6083 27.1646 42.4192C27.1646 43.23 27.4321 43.9003 27.9671 44.4303C28.5021 44.9602 29.175 45.2252 29.9858 45.2252ZM30.2257 33.4985C30.9397 33.4985 31.5355 33.2567 32.0131 32.773C32.4905 32.2894 32.7293 31.6924 32.7293 30.982V17.0247C32.7293 16.3143 32.4862 15.7173 32.0001 15.2337C31.5139 14.75 30.9138 14.5082 30.1998 14.5082C29.4858 14.5082 28.89 14.75 28.4125 15.2337C27.935 15.7173 27.6962 16.3143 27.6962 17.0247V30.982C27.6962 31.6924 27.9393 32.2894 28.4255 32.773C28.9116 33.2567 29.5117 33.4985 30.2257 33.4985ZM30.0132 60C25.8663 60 21.9746 59.215 18.3381 57.645C14.7016 56.075 11.5211 53.9277 8.79667 51.2033C6.0722 48.4788 3.92496 45.2973 2.35495 41.6587C0.784983 38.0202 0 34.1254 0 29.9743C0 25.8233 0.784983 21.9277 2.35495 18.2875C3.92496 14.6473 6.07127 11.477 8.79386 8.77649C11.5165 6.07606 14.6975 3.93821 18.337 2.36293C21.9764 0.787643 25.8722 0 30.0242 0C34.1762 0 38.073 0.787199 41.7146 2.3616C45.3562 3.93594 48.5268 6.07257 51.2263 8.77147C53.9259 11.4704 56.0631 14.6441 57.6378 18.2925C59.2126 21.9411 60 25.8399 60 29.9892C60 34.1377 59.2123 38.0301 57.6371 41.6664C56.0618 45.3027 53.9239 48.4778 51.2235 51.1918C48.523 53.9058 45.3496 56.0523 41.7032 57.6313C38.0568 59.2104 34.1601 60 30.0132 60ZM30.0281 54.9669C36.9497 54.9669 42.8336 52.5352 47.6799 47.6717C52.5261 42.8083 54.9492 36.9083 54.9492 29.9719C54.9492 23.0503 52.5307 17.1663 47.6937 12.3201C42.8567 7.47385 36.9529 5.05074 29.9823 5.05074C23.0794 5.05074 17.1954 7.46925 12.3305 12.3063C7.46551 17.1433 5.03302 23.0471 5.03302 30.0177C5.03302 36.9206 7.46475 42.8045 12.3282 47.6694C17.1917 52.5344 23.0916 54.9669 30.0281 54.9669Z"
            fill="#FF334B"
          />
        </svg>

        <h2 class="text-h3  pt-5 text-black ">
          Sorry something went wrong
        </h2>
        <p class="text-body-2 my-5 pb-4">
          Please wait for a few minutes then try again
        </p>

        <VBtn
          size="large"
          class="proposal-btn"
          height="55px"
          @click="rejectedValue = false"
        >
          <span class="px-5">
            Back to the payment screen
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
    <VCard class="modal-card-wrapper pa-8 pa-md-10 pa-lg-12 pa-xl-14 pa-xxl-16">
      <div class="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="61"
          viewBox="0 0 49 61"
          fill="none"
        >
          <path
            d="M21.0529 41.28L14.8156 35.0448C14.5919 34.8314 14.3532 34.6716 14.0996 34.5655C13.8461 34.4594 13.5832 34.4093 13.3111 34.4153C13.0389 34.4213 12.7695 34.4806 12.5027 34.5932C12.236 34.7059 12.0019 34.8809 11.8004 35.1182C11.3736 35.556 11.1602 36.0703 11.1602 36.661C11.1602 37.2517 11.374 37.7639 11.8016 38.1975L19.2236 45.6149C19.5 45.8881 19.7909 46.087 20.0963 46.2117C20.4016 46.3363 20.7185 46.3986 21.047 46.3986C21.3754 46.3986 21.6885 46.3363 21.9863 46.2117C22.284 46.087 22.5707 45.8881 22.8463 45.6149L36.9023 31.5637C37.315 31.1338 37.5213 30.6233 37.5213 30.0323C37.5213 29.4412 37.3106 28.9335 36.8891 28.509C36.4675 28.0844 35.9582 27.8721 35.3611 27.8721C34.764 27.8721 34.2526 28.0849 33.827 28.5103L21.0529 41.28ZM5.11866 61C3.7363 61 2.53759 60.4927 1.52253 59.478C0.507508 58.4633 0 57.265 0 55.8831V5.13493C0 3.74814 0.507508 2.54564 1.52253 1.52741C2.53759 0.50914 3.7363 0 5.11866 0H30.129C30.8375 0 31.5128 0.143151 32.1549 0.429452C32.7969 0.715702 33.3482 1.08905 33.8088 1.54949L47.45 15.1859C47.9106 15.6464 48.2841 16.1975 48.5704 16.8394C48.8568 17.4812 49 18.1563 49 18.8645V55.8831C49 57.265 48.4907 58.4633 47.4721 59.478C46.4535 60.4927 45.2506 61 43.8633 61H5.11866ZM29.6636 16.546V5.13493H5.11866V55.8831H43.8633V19.1045H32.2229C31.5005 19.1045 30.8933 18.8586 30.4014 18.3669C29.9095 17.8752 29.6636 17.2682 29.6636 16.546Z"
            fill="#6A8AFA"
          />
        </svg>

        <h1 class="text-h3  pt-5">
          Invoice paid successfully
        </h1>
        <p class="text-body-2 my-3 pb-4 px-20">
          You can manage all your bills on the  “By Bills” screen
        </p>

        <VBtn
          size="large"
          class="proposal-btn"
          height="55px"
          @click="acceptedValue = false"
        >
          <span class="px-10">
            Go to My Bills
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
  <div>
    <VRow
      class="border-b pb-6 mb-6"
      align="center"
      no-gutters
    >
      <VCol cols="12">
        <VBreadcrumbs
          :items="breadcrumbs"
          
          active-class="text-darken"
        >
          <template #divider>
            <VIcon icon="quill:arrow-right" />
          </template>
        </VBreadcrumbs>
      </VCol>
    </VRow>
  </div>

  <VRow>
    <VCol
      cols="12"
      md="8"
    >
      <div class="payment-div py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
        <h4 class="text-h5">
          Invoice #21341
        </h4>

        <h3 class="text-h4 font-weight-bold mt-3 mb-6">
          Wedding
        </h3>

        <h1 class="text-h1">
          $12.400.00
        </h1>

        <p class="text-lighten mb-10  ">
          Due June 22,2023
        </p>

        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <p class="mb-2 text-lighten">
              From
            </p>
            <p class="mb-2 font-weight-semibold text-black">
              On The Go DJ Pro
            </p>
            <p class="mb-2 font-weight-semibold text-black">
              onthegodjpro@gmail.com
            </p>
          </VCol>
  
          <VCol
            cols="12"
            md="6"
          >
            <p class="mb-2 text-lighten">
              To
            </p>
            <p class="mb-2 font-weight-semibold text-black">
              Jeremy Sanderson
            </p>
            <p class="mb-2 font-weight-semibold text-black">
              jeremysanderson@gmail.com
            </p>
          </VCol>
        </VRow>


        <VDivider class="my-10" />

        <a
          href="#"
          class="text-primary font-weight-medium"
        >View Invoice Details</a>
      </div>
    </VCol>


    

    <VCol
      cols="12"
      md="4"
    >
      <div class="payment-div py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
        <h3 class="font-weight-medium text-h5 text-black pb-5">
          Card Information
        </h3>

        <VTextField
          label="Credit Card"
          hide-details="auto"
        />

        <VRow>
          <VCol>
            <VTextField
              label="Date"
              hide-details="auto"
              class="my-5"
            />
          </VCol>

          <VCol>
            <VTextField
              label="CVC"
              hide-details="auto"
              class="my-5"
            />
          </VCol>
        </VRow>

        <VCheckbox
          label="Save my card for faster checkout"
          class="font-weight-medium text-black"
        />

        <VBtn
          density="comfortable"
          block
          height="60px"
          class="mt-10"
          @click="acceptedValue = !acceptedValue"
        >
          Pay $12.400.00
        </VBtn>
      </div>
    </VCol>
  </VRow>
</template>

<script setup>
const breadcrumbs = ref([
  {
    text: "My Bills",
    disabled: false,
    to: "/bills",
  },
  {
    text: "Make Payment",
    disabled: true,
    to: "/inquiries",
  },

  // {
  //   text: inquiry.value?.eventType?.name ?? "Event Type",
  //   to: "/inquiries/private-party/" + route.params.slug,
  // },
])

const acceptedValue = ref(false)
const rejectedValue = ref(false)
</script>

<style scoped>
.layout-page-content {
    padding-inline: 0px;
}

.payment-div{
  background-color: #F8F8FA;
}
</style>


