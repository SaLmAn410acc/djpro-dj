<template>
  <div class="add-product-wrap my-6">
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
      />
    </VRow>
    <VRow>
      <!-- Assign to -->
      <VCol v-if="inquiry">
        <p class="text-black font-weight-semibold text-body-1">
          Assign to
        </p>
        <div class="mb-6 mb-lg-8">
          <VMenu>
            <template #activator="{ props }">
              <VBtn
                variant="text"
                color="black"
                size="x-small"
                class="rounded"
                append-icon="tabler:caret-down-filled"
                v-bind="props"
              >
                <VImg
                  v-if="
                    inquiry?.performer && inquiry?.performer?.image !== null
                  "
                  :src="inquiry?.performer?.image"
                  :width="30"
                  :height="30"
                  cover
                  class="rounded-circle"
                />
                <VIcon
                  v-else
                  icon="carbon:user-avatar-filled"
                  :size="30"
                  class="rounded-circle"
                />
                <span
                  v-if="inquiry?.performer"
                  class="d-inline-block ms-2"
                >
                  {{
                    inquiry?.performer?.firstName +
                      " " +
                      inquiry?.performer?.lastName
                  }}
                </span>
                <span
                  v-else
                  class="d-inline-block ms-2"
                >Select User</span>
              </VBtn>
            </template>
            <VList>
              <VListItem
                v-for="user_item in usersList"
                :key="user_item.userId"
                @click="updateUser(user_item)"
              >
                <template #prepend>
                  <VImg
                    v-if="user_item?.photoUrl !== null"
                    :src="user_item?.photoUrl"
                    :width="30"
                    :height="30"
                    color="black"
                    cover
                    class="rounded-circle"
                  />
                  <VIcon
                    v-else
                    icon="carbon:user-avatar-filled"
                    :size="30"
                    class="rounded-circle"
                  />
                </template>

                <VListItemTitle>
                  {{
                    user_item.firstName + " " + user_item.lastName
                  }}
                </VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </div>
        <p class="text-black font-weight-semibold text-body-1">
          Notes
        </p>
        <VCard
          variant="outlined"
          class="mb-6 mb-lg-8"
        >
          <VCardText class="pa-0">
            <div class="border-b">
              <VTextarea
                v-model="notes1"
                variant="plain"
                rows="3"
                class="w-100 px-3 text-black"
                placeholder="Type your notes here..."
                value="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their "
              />
              <span class="text-body-2 px-3 py-2 d-inline-block">
                <small>12:30 PM 06/23/2023</small>
              </span>
            </div>


            <div class="border-b">
              <VTextarea
                v-model="notes2"
                variant="plain"
                rows="3"
                class="w-100 px-3 text-black"
                placeholder="Type your notes here..."
                value="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their "
              />
              <span class="text-body-2 px-3 py-2 d-inline-block">
                <small>12:30 PM 06/23/2023</small>
              </span>
            </div>



            <div>
              <VTextarea
                v-model="notes3"
                variant="plain"
                rows="4"
                class="w-100 px-3 text-black"
                placeholder="Type your notes here..."
              />
              <!--
                <span class="text-body-2 px-3 py-2 d-inline-block">
                <small>12:30 PM 06/23/2023</small>
                </span> 
              -->
            </div>
          </VCardText>
        </VCard>
      </VCol>
      <!-- Assign to -->
    </VRow>
    <VRow
      class="py-4"
      align="center"
    >
      <VCol>
        <h1 class="text-h2 mb-3">
          Wedding
        </h1>
      </VCol>
      <VCol>
        <p class="text-black text-end mb-3">
          <strong>Performer Requested:</strong> Anthony Perez
        </p>
      </VCol>
    </VRow>
    <VCard
      v-if="inquiry"
      variant="outlined"
      class="mx-auto"
    >
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          Contact Information
        </h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <div class="d-flex flex-wrap justify-space-between gap-3">
          <div>
            <p class="text-lighten">
              First Name
            </p>
            <p class="text-black font-weight-semibold">
              Jeremy
            </p>
          </div>
          <div>
            <p class="text-lighten">
              Last Name
            </p>
            <p class="text-black font-weight-semibold">
              Sanderson
            </p>
          </div>
          <div>
            <p class="text-lighten">
              Email
            </p>
            <p class="text-black font-weight-semibold">
              jeremysanderson@gmail.com
            </p>
          </div>
          <div>
            <p class="text-lighten">
              Phone Number
            </p>
            <p class="text-black font-weight-semibold">
              (239) 555-0108
            </p>
          </div>

          <div>
            <p class="text-lighten">
              Event date
            </p>
            <p class="text-black font-weight-semibold">
              23 November, 2023
            </p>
          </div>
        </div>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          Event Information
        </h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <div class="d-flex flex-wrap justify-space-between gap-3">
          <div>
            <p class="text-lighten">
              Event Date
            </p>
            <p class="text-black font-weight-semibold">
              23 November, 2023
            </p>
          </div>
          <div>
            <p class="text-lighten">
              Venue Name
            </p>
            <p class="text-black font-weight-semibold">
              La Jolla
            </p>
          </div>
          <div>
            <p class="text-lighten">
              Venue Address
            </p>
            <p class="text-black font-weight-semibold">
              2750 Torrey Pines Rd, La Jolla, CA 92037, United States
            </p>
          </div>
          <div>
            <p class="text-lighten">
              Referral Source
            </p>
            <p class="text-black font-weight-semibold">
              Google
            </p>
          </div>
        </div>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          DJ Services for Ceremony and Reception
        </h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <div class="d-flex flex-wrap justify-space-between gap-3 v-col-md-6 v-col-lg-4 pa-0">
          <div>
            <p class="text-lighten">
              Ceremony Start Time
            </p>
            <p class="text-black font-weight-semibold">
              09:00 PM
            </p>
          </div>
          <div>
            <p class="text-lighten">
              Reception End Time
            </p>
            <p class="text-black font-weight-semibold">
              05:00 AM
            </p>
          </div>
        </div>
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
      
      <div class="border-t py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <div class="d-flex gap-4 justify-end">
          <h4 class="text-h4 font-weight-bold">
            Total
          </h4>
          <h4 class="text-h4 font-weight-bold">
            $1995.00
          </h4>
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
import weddingDj from "@images/proposals/wedding-dj.png"

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
  {
    text: "Private Party",
    disabled: true,
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
