<template>
  <!--
    <VRow class="mx-auto justify-center align-center">
    <p class="font-weight-bold my-5 view-para">
    This page is a view-only version
    </p>

    <VBtn
    variant="outlined"
    color="#000"
    class="blackBtn mx-5 my-5"
    >
    Back
    </VBtn>

    <VBtn
    variant="outlined"
    class="rejectedBtn mx-5 my-5"
    color="#FF334B"
    >
    Reject a Proposal
    </VBtn>

    <VBtn
    variant="flat"
    class="my-5 accpedtedBtn"
    >
    Accept a Proposal
    </VBtn>
    </VRow> 
  -->

  <div class="add-product-wrap my-6">
    <div
      class="mx-auto"
      style="max-width: 1200px;"
    >
      <VRow class="my-6">
        <VCol
          cols="12"
          :md="status=='accepted' ? 7 : 6"
          class="d-flex gap-x-3 align-center justify-center justify-md-end"
        >
          <p class="text-black font-weight-medium mb-0">
            This page is a view-only version
          </p>
          <VBtn
            variant="outlined"
            color="#000"
            class="blackBtn me-2 ms-4 my-3"
            density="comfortable"
          >
            Back
          </VBtn>
        </VCol>
        <VCol
          cols="12"
          :md="status ? 6 : 5"
          class="d-flex gap-x-3 align-center justify-center justify-md-start"
        >
          <template v-if="status == 'notaccepted'">
            <VBtn
              variant="flat"
              class="my-3 accpedtedBtn"
              density="comfortable"
              v-bind="props"
            >
              Make Payment
            </VBtn>
          </template>
        </VCol>
      </VRow>
    </div>   

    <VCard
      color="#F8F8FA"
      variant="flat"
      class="mx-auto cardBg"
      :max-width="1200"
    >
      <!--
        <VRow
        class="
        border-b
        py-6
        py-md-8
        py-lg-12
        px-6
        px-md-8
        px-lg-12
        mb-6"
        >
        <VCol md="8">
        <div>
        <img
        :src="logo"
        alt=""
        >
        </div>

        <h1 class="my-4 text-h2 font-weight-bold">
        Wedding
        </h1>
        <p class="text-black text-body-2 font-weight-medium ">
        23 November, 2023
        </p>

        <h5 class="mt-5">
        La Jolla
        </h5>
        <p>2750 Torrey Pines Rd, La Jolla, CA 92037, United States</p>
        </VCol>

        <VCol md="4">
        2
        </VCol>
        </VRow> 
      -->

      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <VRow>
          <VCol cols="8">
            <VImg
              :src="logo"
              width="162"
            />
          </VCol>
          <VCol>
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
        </VRow>
        <VRow>
          <VCol cols="8">
            <h4 class="text-h5">
              Invoice #21341
            </h4>
            <h1 class="mb-4 text-h2 font-weight-bold">
              Wedding
            </h1>
          </VCol>
          <VCol>
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
      </div>

      <div class=" border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          DJ Services for Ceremony and Reception
        </h4>
      </div>

      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <VRow>
          <VCol
            cols="4"
            lg="3"
          >
            <p class="text-lighten">
              Ceremony Start Time
            </p>
            <p class="text-black font-weight-semibold">
              09:00 PM
            </p>
          </VCol>
          <VCol
            cols="4"
            lg="3"
          >
            <p class="text-lighten">
              Reception End Time
            </p>
            <p class="text-black font-weight-semibold">
              05:00 AM
            </p>
          </VCol>
        </VRow>
      </div>

      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          DJ Scheduling
        </h4>
      </div>

      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <VRow>
          <VCol
            cols="4"
            lg
          >
            <p class="text-lighten">
              Start Date
            </p>
            <p class="text-black font-weight-semibold">
              06/13/2023
            </p>
          </VCol>
          <VCol
            cols="4"
            lg
          >
            <p class="text-lighten">
              Start Time
            </p>
            <p class="text-black font-weight-semibold">
              12:30 PM
            </p>
          </VCol>
          <VCol
            cols="4"
            lg
          >
            <p class="text-lighten">
              End Time
            </p>
            <p class="text-black font-weight-semibold">
              08:30 PM
            </p>
          </VCol>
          <VCol
            cols="12"
            lg="7"
          >
            <p class="text-lighten">
              Total
            </p>
            <div class="d-flex flex-wrap gap-x-3">
              <p class="text-black font-weight-semibold">
                8 hours
              </p>
              <p class="text-body-2">
                <small><span class="text-black font-weight-semibold">+4 additional hours</span>
                  Will charge $150 for each additional hour over 4 hours for the
                  event</small>
              </p>
            </div>
          </VCol>
        </VRow>
      </div>

      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          Wedding DJ Packages
        </h4>
      </div>

      <div class="px-6 px-md-8 px-lg-12 mb-6">
        <VTable
          class="packages-table mb-8 mb-lg-16"
          density="default"
          style="background: transparent"
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
            <tr>
              <td>
                <img
                  :src="weddingDj"
                  class="rounded"
                >
              </td>
              <td>
                <h5 class="text-h5 mb-4">
                  Reception Package w/Dance Lighting
                </h5>
                <ul class="text-black ps-5 text-body-2">
                  <li>4 hours of Professional Wedding Reception DJ/MC services</li>
                  <li>Properly Dressed Wedding DJ</li>
                  <li> Professional Sound System with 2 Speakers</li>
                  <li>Wireless Microphone</li>
                  <li>Lighting Stands or Lighting Truss System</li>
                  <li>Dance Lighting</li>
                  <li>Fog Machine</li>
                  <li>Custom Wedding Timeline and Itinerary</li>
                  <li>Unlimited Phone And E-mail Consultation</li>
                  <li>Access to our planning form app which allows you to invite friends and family to select music out for your special day</li>
                  <li>Unlimited amounts of songs within or music database</li>
                  <li>Free Set up and Break Down</li>
                </ul>
              </td>
              <td class="text-end">
                <h5 class="text-h5">
                  $1195.00
                </h5>
              </td>
            </tr>
          </tbody>
        </VTable>
      </div>
      
      <div class="border-t border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          Enhancements
        </h4>
      </div>
      
      <div class="px-6 px-md-8 px-lg-12">
        <VTable
          class="text-black"
          density="default"
          style="background: transparent"
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
            <tr>
              <td style="width: 1px">
                <strong>
                  1	
                </strong>
              </td>
              <td>
                <strong>Additional Hour (DJ)	</strong>
              </td>
              <td class="text-end">
                <strong>$100.00
                </strong>
              </td>
            </tr>


            <tr>
              <td style="width: 1px">
                <strong>
                  2	
                </strong>
              </td>
              <td>
                <strong>Slide Show Creation	</strong>
              </td>
              <td class="text-end">
                <strong>$300.00
                </strong>
              </td>
            </tr>


            <tr>
              <td style="width: 1px">
                <strong>
                  3	
                </strong>
              </td>
              <td>
                <strong>Static Monogram & Gobo	</strong>
              </td>
              <td class="text-end">
                <strong>$150.00
                </strong>
              </td>
            </tr>

            <tr>
              <td style="width: 1px">
                <strong>
                  4	
                </strong>
              </td>
              <td>
                <strong>Animated Monogram & Gobo	</strong>
              </td>
              <td class="text-end">
                <strong>$200.00 
                </strong>
              </td>
            </tr>

            <tr>
              <td style="width: 1px">
                <strong>
                  5	
                </strong>
              </td>
              <td>
                <strong>42 Inch or Bigger Flat Screen T.V.	</strong>
              </td>
              <td class="text-end">
                <strong>$150.00
                </strong>
              </td>
            </tr>

            <tr>
              <td style="width: 1px">
                <strong>
                  6
                </strong>
              </td>
              <td>
                <strong>Projector & Screen</strong>
              </td>
              <td class="text-end">
                <strong>$250.00
                </strong>
              </td>
            </tr>

            <tr>
              <td style="width: 1px">
                <strong>
                  7
                </strong>
              </td>
              <td>
                <strong>Half Room Uplighting 12</strong>
              </td>
              <td class="text-end">
                <strong>$300.00
                </strong>
              </td>
            </tr>
          </tbody>
        </VTable>
      </div>

      <div class="border-t border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          Photo Booth Packages
        </h4>
      </div>

      <div class="px-6 px-md-8 px-lg-12 mb-6">
        <VTable
          class="packages-table mb-8 mb-lg-16"
          density="default"
          style="background: transparent"
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
            <tr>
              <td>
                <img
                  :src="weddingDj"
                  class="rounded"
                >
              </td>
              <td>
                <h5 class="text-h5 mb-4">
                  Fundamental Package
                </h5>
                <ul class="text-black ps-5 text-body-2">
                  <li>
                    2 Hours Must Be Booked Mon-Friday(any me) or Fri-Sun event must end by 4pm
                  </li>
                  <li>
                    Unlimited 2x6 High Quality Photo Strip
                  </li>
                  <li>
                    Custom Design Layout (2 Revision)
                  </li>
                  <li>
                    Prop Box, funning hats, Glasses, Mustaches..Etc.
                  </li>
                  <li>
                    Fun & Professional On Site Photo Booth Technician
                  </li>
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
      </div>

      <div class="px-6 px-md-8 px-lg-12">
        <VTable
          class="text-black"
          density="default"
          style="background: transparent"
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
            <tr>
              <td style="width: 1px">
                <strong>
                  1	
                </strong>
              </td>
              <td>
                <strong>4x6 Prints	</strong>
              </td>
              <td class="text-end">
                <strong>$100.00
                </strong>
              </td>
            </tr>


            <tr>
              <td style="width: 1px">
                <strong>
                  2	
                </strong>
              </td>
              <td>
                <strong>Green Screen	</strong>
              </td>
              <td class="text-end">
                <strong>$300.00
                </strong>
              </td>
            </tr>
          </tbody>
        </VTable>
      </div>

      <div class="border-t border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          Photography Reception Packages
        </h4>
      </div>

      <div class="px-6 px-md-8 px-lg-12 mb-6">
        <VTable
          class="packages-table mb-8 mb-lg-16"
          density="default"
          style="background: transparent"
        >
          <thead class="table-header-wrapper">
            <tr>
              <th>Product Photo</th>
              <th>Product Name</th>
              <th class="text-end">
                Price (USD)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  :src="weddingDj"
                  class="rounded"
                >
              </td>
              <td>
                <h5 class="text-h5 mb-4">
                  Ruby Package
                </h5>
                <ul class="text-black ps-5 text-body-2">
                  <li>
                    4 hours of Professional Photography
                  </li>
                  <li>
                    Full Reprinting Rights all of pictures
                  </li>
                  <li>
                    25 Digitally re-touched and edited photos
                  </li>
                  <li>
                    Pictures Delivered on Thumb drive 4-6 weeks
                  </li>
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
      </div>
      
      <div class="border-t py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
        <VRow>
          <VCol>
            <h4 class="text-h3">
              Total Amount
            </h4>
          </VCol>
          <VCol cols="auto">
            <h4 class="text-h3">
              $3400.00
            </h4>
          </VCol>
        </VRow>
      </div>

      <div class="border-t py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <div class="text-center">
          <VBtn
            color="primary"
            size="x-large"
            class="px-xl-16"
            height="65"
          >
            <span class="px-8 ">Make Payment</span>
          </VBtn>
        </div>
      </div>
    </VCard>
  </div>
</template>

<script setup>
import axios from "@axios"
import { useRoute } from "vue-router"
import productPlaceholder from "@images/add-product/product-placeholder.png"
import avatar from "@images/avatars/avatar-1.png"
import logo from "@images/proposals/logo-black.png"
import weddingDj from "@images/proposals/wedding-dj.png"

const acceptedValue = ref(false)
const rejectedValue = ref(false)

// const status = ref(null)

// const status = ref('accepted')

const status = ref('notaccepted')

const route = useRoute()

const updateUser = user_item => {
  inquiry.value.performer = inquiry.value.performer ?? {}
  inquiry.value.performer.firstName = user_item.firstName
  inquiry.value.performer.lastName = user_item.lastName
  inquiry.value.performer.image = user_item.photoUrl
  inquiry.value.performer.id = user_item.userId
}

const usersList = ref([])

const getUsers = async () => {
  try {
    const res = await axios.get("/User/GetList?role=Dj")

    usersList.value = res.data
  } catch (error) {
    console.log(error)
  }
}

const notes1 = ref("")
const notes2 = ref("")
const notes3 = ref("")

const inquiry = ref({})

const getInquiry = async () => {
  try {
    const res = await axios.get("/Inquiry/GetInquiry?id=" + route.params.slug)

    inquiry.value = res.data
    breadcrumbs.value.push({
      text: inquiry.value?.eventType?.name ?? "Event Type",
      to: "/inquiries/details/" + route.params.slug,
    })
  } catch (error) {
    console.log(error)
  }
}

const updateInquriy = async () => {
  try {
    const res = await axios.post("/Inquiry/Update", inquiry.value)

    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

const breadcrumbs = ref([
  {
    text: "Inquiries",
    disabled: false,
    to: "/inquiries",
  },

  // {
  //   text: inquiry.value?.eventType?.name ?? "Event Type",
  //   to: "/inquiries/private-party/" + route.params.slug,
  // },
])

// onMounted(() => {
//   getUsers()
//   getInquiry()
// })
</script>

<style>
.packages-wrap .package-item p:last-of-type {
  margin-bottom: 0;
}
</style>

<style lang="scss">
.view-para{
  margin-block-end: 0;
}


// .proposal-btn .v-btn__content{
//   padding: 0px 45px;
// }


// .modal-card-wrapper.v-card{
//   padding: 60px;
// }

.top-message{
  max-width: 1200px;
}

.rejectedBtn.v-btn--variant-outlined:not([class*=text-]) {
    border-color:  #FF334B;
    border-radius: 10px;
}

.blackBtn.v-btn--variant-outlined:not([class*=text-]) {
    border-color:  #000;
    border-radius: 10px;
}

.accpedtedBtn{
  border-radius: 10px;
}

.add-product-wrap .cardBg{
  background: #F8F8FA;
  border-radius: none;
}

// .table-header-wrapper th{
//   border-bottom: none;
// }

// .v-table__wrapper .v-table .v-table__wrapper > table > thead > tr > th {
//     border-bottom: none;
// }

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
