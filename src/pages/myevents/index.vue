<template>
  <div>
    <VCard>
      <!-- `z-index: 0` Allows overlapping vertical nav on calendar -->
      <VLayout style="z-index: 0;">
        <!-- 👉 Navigation drawer -->
        <VNavigationDrawer
          v-model="isLeftSidebarOpen"
          width="292"
          absolute
          touchless
          location="start"
          class="calendar-add-event-drawer"
          :temporary="$vuetify.display.mdAndDown"
        >
          <div class="d-flex align-center justify-center pa-2 mb-3">
            <AppDateTimePicker
              :model-value="new Date().toJSON().slice(0, 10)"
              :config="{ inline: true }"
              class="calendar-date-picker"
              @input="jumpToDate($event.target.value)"
            />
          </div>
        </VNavigationDrawer>

        <VMain>
          <VCard flat>
            <FullCalendar
              ref="refCalendar"
              :options="calendarOptions"
            />
          </VCard>
        </VMain>
      </VLayout>
    </VCard>
    <CalendarEventHandler
      v-model:isDrawerOpen="isEventHandlerSidebarActive"
      :event="event"
      @add-event="addEvent"
      @update-event="updateEvent"
      @remove-event="removeEvent"
    />


   


    <!-- CALENDAR EVENT DETAILS DJ SELECTED START// --> 
    <VNavigationDrawer
      v-model="calendarEventDjSelectedDetails"
      temporary
      location="end"
      width="1600"
      class="drawer-above-application navigation-drawer-radius"
    >
      <div class="px-6 py-6 py-md-8 px-md-8">
        <VRow class="align-center ">
          <VCol class="ms-0 ps-0">
            <h3 class="text-h4 ">
              Event Details
            </h3>
          </VCol>
          <VCol class="text-end">
            <DialogCLoseBtn @click="calendarEventDjSelectedDetails = !calendarEventDjSelectedDetails" />
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
                  DJ Agreement
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
                  >
                    <span class="mx-5">Accept</span> 
                  </VBtn>
                  <VBtn
                        
                    
                    class="add-package-btn me-3 my-3 my-md-0" 
                    color="#333848"
                    size="x-large"
                    height="45px"
                  >
                    <span class="text-white px-2 ">Cancel</span>
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

        

        <VRow class="my-8">
          <VCard
            variant="flat"
            class="mx-auto border"
            width="1580"
          >
            <div class=" py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <VRow>
                <VCol
                  cols="12"
                  md="2"
                  class="my-5"
                >
                  <VRow align="center">
                    <div class="me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="41"
                          height="41"
                          rx="14.5"
                          stroke="#EEEEEE"
                        />
                        <path
                          d="M14.4888 30C14.0867 30 13.7381 29.8586 13.4428 29.5758C13.1476 29.293 13 28.9591 13 28.574V15.6869C13 15.3004 13.1476 14.9653 13.4428 14.6815C13.7381 14.3977 14.0867 14.2559 14.4888 14.2559H15.8621V13.7149C15.8621 13.5146 15.9347 13.3453 16.0799 13.2072C16.225 13.0691 16.4015 13 16.6094 13C16.8235 13 17.0041 13.0691 17.151 13.2072C17.2979 13.3453 17.3714 13.5146 17.3714 13.7149V14.2559H24.6234V13.7149C24.6234 13.5146 24.696 13.3453 24.8411 13.2072C24.9863 13.0691 25.1628 13 25.3707 13C25.5848 13 25.7653 13.0691 25.9122 13.2072C26.0592 13.3453 26.1326 13.5146 26.1326 13.7149V14.2559H27.506C27.9095 14.2559 28.2593 14.3977 28.5556 14.6815C28.8519 14.9653 29 15.3004 29 15.6869V28.574C29 28.9591 28.8519 29.293 28.5556 29.5758C28.2593 29.8586 27.9095 30 27.506 30H14.4888ZM14.4888 28.574H27.506V19.6187H14.4888V28.574ZM14.4888 18.3629H27.506V15.6869H14.4888V18.3629Z"
                          fill="#8E97A0"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 class="text-h6 font-weight-bold">
                        Event Date
                      </h4>
                      <h5 class="text-h6 font-weight-medium">
                        06/14/2023
                      </h5>
                    </div>
                  </VRow>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                  class="my-5"
                >
                  <VRow align="center">
                    <div class="me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="41"
                          height="41"
                          rx="14.5"
                          stroke="#EEEEEE"
                        />
                        <path
                          d="M22.2433 21.219V17.7472C22.2433 17.5502 22.1788 17.3872 22.0498 17.258C21.9209 17.1288 21.758 17.0643 21.5613 17.0643C21.3646 17.0643 21.2015 17.1288 21.0718 17.258C20.9421 17.3872 20.8773 17.5502 20.8773 17.7472V21.4925C20.8773 21.5862 20.8929 21.6727 20.9242 21.752C20.9554 21.8314 21.0023 21.9097 21.0648 21.9871L24.0187 25.0458C24.1586 25.1953 24.3291 25.2666 24.5304 25.2596C24.7317 25.2526 24.9018 25.1813 25.0407 25.0458C25.1797 24.9102 25.2491 24.7433 25.2491 24.5452C25.2491 24.3471 25.1797 24.1786 25.0407 24.0397L22.2433 21.219ZM21.4982 30C20.3335 30 19.2345 29.7771 18.2013 29.3313C17.168 28.8856 16.2658 28.2771 15.4945 27.5059C14.7232 26.7348 14.1146 25.8327 13.6688 24.7996C13.2229 23.7665 13 22.6677 13 21.5031C13 20.3384 13.2232 19.2393 13.6697 18.2057C14.1162 17.1721 14.7246 16.2702 15.4949 15.4999C16.2652 14.7297 17.1669 14.1204 18.2002 13.6723C19.2335 13.2241 20.3326 13 21.4975 13C22.6624 13 23.7614 13.2241 24.7947 13.6723C25.828 14.1204 26.7298 14.7297 27.5001 15.4999C28.2703 16.2702 28.8796 17.172 29.3277 18.2053C29.7759 19.2386 30 20.3376 30 21.5025C30 22.6674 29.7759 23.7665 29.3277 24.7998C28.8796 25.8331 28.2703 26.7348 27.5001 27.5051C26.7298 28.2754 25.8281 28.8838 24.795 29.3303C23.7618 29.7768 22.6629 30 21.4982 30ZM21.4949 28.574C23.4368 28.574 25.1013 27.8821 26.4884 26.4984C27.8754 25.1147 28.569 23.4502 28.569 21.505C28.569 19.5598 27.8756 17.8945 26.489 16.5091C25.1024 15.1237 23.4386 14.431 21.4975 14.431C19.554 14.431 17.8895 15.1235 16.5041 16.5085C15.1187 17.8935 14.426 19.5581 14.426 21.5025C14.426 23.4494 15.1187 25.1147 16.5041 26.4984C17.8894 27.8821 19.553 28.574 21.4949 28.574Z"
                          fill="#8E97A0"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 class="text-h6 font-weight-bold">
                        Start Time
                      </h4>
                      <h5 class="text-h6 font-weight-medium">
                        12:30 PM
                      </h5>
                    </div>
                  </VRow>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                  class="my-5"
                >
                  <VRow align="center">
                    <div class="me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="41"
                          height="41"
                          rx="14.5"
                          stroke="#EEEEEE"
                        />
                        <path
                          d="M22.2433 21.219V17.7472C22.2433 17.5502 22.1788 17.3872 22.0498 17.258C21.9209 17.1288 21.758 17.0643 21.5613 17.0643C21.3646 17.0643 21.2015 17.1288 21.0718 17.258C20.9421 17.3872 20.8773 17.5502 20.8773 17.7472V21.4925C20.8773 21.5862 20.8929 21.6727 20.9242 21.752C20.9554 21.8314 21.0023 21.9097 21.0648 21.9871L24.0187 25.0458C24.1586 25.1953 24.3291 25.2666 24.5304 25.2596C24.7317 25.2526 24.9018 25.1813 25.0407 25.0458C25.1797 24.9102 25.2491 24.7433 25.2491 24.5452C25.2491 24.3471 25.1797 24.1786 25.0407 24.0397L22.2433 21.219ZM21.4982 30C20.3335 30 19.2345 29.7771 18.2013 29.3313C17.168 28.8856 16.2658 28.2771 15.4945 27.5059C14.7232 26.7348 14.1146 25.8327 13.6688 24.7996C13.2229 23.7665 13 22.6677 13 21.5031C13 20.3384 13.2232 19.2393 13.6697 18.2057C14.1162 17.1721 14.7246 16.2702 15.4949 15.4999C16.2652 14.7297 17.1669 14.1204 18.2002 13.6723C19.2335 13.2241 20.3326 13 21.4975 13C22.6624 13 23.7614 13.2241 24.7947 13.6723C25.828 14.1204 26.7298 14.7297 27.5001 15.4999C28.2703 16.2702 28.8796 17.172 29.3277 18.2053C29.7759 19.2386 30 20.3376 30 21.5025C30 22.6674 29.7759 23.7665 29.3277 24.7998C28.8796 25.8331 28.2703 26.7348 27.5001 27.5051C26.7298 28.2754 25.8281 28.8838 24.795 29.3303C23.7618 29.7768 22.6629 30 21.4982 30ZM21.4949 28.574C23.4368 28.574 25.1013 27.8821 26.4884 26.4984C27.8754 25.1147 28.569 23.4502 28.569 21.505C28.569 19.5598 27.8756 17.8945 26.489 16.5091C25.1024 15.1237 23.4386 14.431 21.4975 14.431C19.554 14.431 17.8895 15.1235 16.5041 16.5085C15.1187 17.8935 14.426 19.5581 14.426 21.5025C14.426 23.4494 15.1187 25.1147 16.5041 26.4984C17.8894 27.8821 19.553 28.574 21.4949 28.574Z"
                          fill="#8E97A0"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 class="text-h6 font-weight-bold">
                        End Time
                      </h4>
                      <h5 class="text-h6 font-weight-medium">
                        04:00 PM
                      </h5>
                    </div>
                  </VRow>
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                  class="my-5"
                >
                  <VRow align="center">
                    <div class="me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="41"
                          height="41"
                          rx="14.5"
                          stroke="#EEEEEE"
                        />
                        <path
                          d="M21.0002 20.9475C21.4852 20.9475 21.9003 20.7715 22.2456 20.4196C22.5908 20.0677 22.7635 19.6447 22.7635 19.1506C22.7635 18.6564 22.5908 18.2335 22.2454 17.8817C21.9 17.53 21.4848 17.3541 20.9998 17.3541C20.5148 17.3541 20.0997 17.53 19.7544 17.8819C19.4092 18.2338 19.2365 18.6568 19.2365 19.151C19.2365 19.6451 19.4092 20.0681 19.7546 20.4199C20.1 20.7716 20.5152 20.9475 21.0002 20.9475ZM21 29.0983C23.1548 27.0961 24.7466 25.2801 25.7752 23.6503C26.8038 22.0205 27.3181 20.5871 27.3181 19.3501C27.3181 17.4055 26.7084 15.8133 25.4889 14.5734C24.2694 13.3335 22.7735 12.7136 21.0013 12.7136C19.2291 12.7136 17.7328 13.3336 16.5125 14.5738C15.2921 15.8139 14.6819 17.4064 14.6819 19.3514C14.6819 20.5893 15.2086 22.0222 16.262 23.65C17.3154 25.2778 18.8947 27.0939 21 29.0983ZM21.0109 31C20.8852 31 20.7641 30.9802 20.6477 30.9406C20.5312 30.9011 20.426 30.8418 20.3319 30.7627C17.8757 28.5543 16.0397 26.5089 14.8238 24.6266C13.6079 22.7442 13 20.986 13 19.352C13 16.8057 13.8041 14.7771 15.4123 13.2662C17.0206 11.7554 18.8829 11 20.9995 11C23.116 11 24.9785 11.7554 26.5871 13.2662C28.1957 14.7771 29 16.8057 29 19.352C29 20.9825 28.3921 22.7398 27.1762 24.6239C25.9603 26.508 24.1243 28.5543 21.6681 30.7627C21.574 30.8418 21.4724 30.9011 21.3632 30.9406C21.254 30.9802 21.1365 31 21.0109 31Z"
                          fill="#8E97A0"
                        />
                      </svg>
                    </div>

                    <div>
                      <h4 class="text-h6 font-weight-bold">
                        Address
                      </h4>
                      <h5 class="text-h6 font-weight-medium">
                        5010 Cass St suite k, Riverside, CA. 92109
                      </h5>
                    </div>
                  </VRow>
                </VCol>
              </VRow>
            </div>
          </VCard>
        </VRow>

        

        <VRow class="my-8">
          <VCard
            variant="flat"
            class="mx-auto border"
            width="1580"
          >
            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h1 class="text-h3">
                Client’s Contact Information
              </h1>
            </div>
            <div class=" py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <VRow>
                <VCol
                  cols="12"
                  md="3"
                >
                  <AppTextField
                    v-model="firstName"
                    label="First Name"
                    density="comfortable"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="3"
                >
                  <AppTextField
                    v-model="lastName"
                    label="Last Name"
                    density="comfortable"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="4"
                >
                  <AppTextField
                    v-model="email"
                    label="Email"
                    density="comfortable"
                    
                    type="email"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <AppTextField
                    v-model="phone_no"
                    label="Phone Number"
                    density="comfortable"
                  />
                </VCol>
              </VRow>
            </div>
          </VCard>
        </VRow>

        <VRow class="my-8">
          <VCard
            variant="flat"
            class="mx-auto border"
            width="1580"
            color="#FCFCFC"
          >
            <div class=" py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h3 class="text-h4 font-weight-bold">
                Wedding
              </h3>
              <VRow>
                <VCol
                  cols="12"
                  md="3"
                  class="my-3"
                >
                  <h4 class="text-lighten font-weight-medium text-h6">
                    Start Date and Time
                  </h4>
                  
                  <div class="d-flex my-2">
                    <h5 class="text-h6 mr-4">
                      06/14/2023
                    </h5>
                    <h5 class="text-h6 ">
                      12:30 PM
                    </h5>
                  </div>
                </VCol>
                <VCol
                  cols="12"
                  md="3"
                  class="my-3"
                >
                  <h4 class="text-lighten font-weight-medium text-h6">
                    End Date and Time
                  </h4>
                  
                  <div class="d-flex my-2">
                    <h5 class="text-h6 mr-4">
                      06/15/2023
                    </h5>
                    <h5 class="text-h6 ">
                      04:00 PM
                    </h5>
                  </div>
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                  class="my-2"
                >
                  <div class="d-flex justify-space-between">
                    <div>
                      <h4 class="text-lighten font-weight-medium text-h6">
                        CLient
                      </h4>
                      <h5 class="text-h6 mr-4 my-2">
                        Jeremy Sanderson
                      </h5>
                      <h5 class="text-h6">
                        jeremysanderson@gmail.com
                      </h5>
                    </div>

                    <div>
                      <VBtn
                        
                        density="comfortable"
                        class="view-contact-btn"
                        color="#333848"
                        height="45px"
                      >
                        <span class="text-white px-2 ">View Contract</span>
                      </VBtn>
                    </div>
                  </div>
                </VCol>
              </VRow>
            </div>
          </VCard>
        </VRow>


       
        <VRow class="mb-10 mt-5 mt-sm-0 my-8">
          <VCol
            cols="12"
            md="4"
            class="border text-center py-8 "
          >
            <!-- <img :src="clientImg"> -->
            
            
            <VImg
              :width="133"
              :src="clientImg"
              class="rounded-circle mx-auto"
            /> 
            
           
            <h3 class="text-h3 font-weight-bold">
              John Doe
            </h3>
            <h6 class="text-h5">
              Client
            </h6>
            

            
            <VBtn
              variant="flat"
              class="my-3 accpedtedBtn px-8"
            >
              <span class="px-8">Send Message</span>
            </VBtn>
          </VCol>
               
          <VCol
            cols="12"
            md="8"
            class="border pa-8"
          >
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <div class="pe-15">
                  <h1 class="font-weight-medium pe-15 mb-6">
                    Half Room Uplighting 12
                  </h1>
                  <img :src="uplighting">
                </div>
              </VCol>
              
              <VCol
                cols="12"
                md="6"
              >
                <h1 class="font-weight-medium mb-6">
                  Animated Monogram & Gobo
                </h1>
                <img :src="birthday">
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </div>
    </VNavigationDrawer>
    <!-- CALENDAR EVENT DETAILS DJ SELECTED STOP -->
  </div>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import {
  blankEvent,
  useCalendar,
} from '@/views/apps/calendar/useCalendar'
import { useCalendarStore } from '@/store/useCalendarStore'
import { useResponsiveLeftSidebar } from '@core/composable/useResponsiveSidebar'

import DialogCLoseBtn from '@/@core/components/DialogCloseBtn.vue'

import CustomReviews from "./event-details/CustomReviews.vue"
import Events from "./event-details/Events.vue"
import Mixes from "./event-details/Mixes.vue"
import Packages from "./event-details/Packages.vue"





// Components
import CalendarEventHandler from '@/views/apps/calendar/CalendarEventHandler.vue'
import { ref } from 'vue'


const status =  ref(null)

// const status =  ref('accepted')

// const status =  ref('rejected')


//NAvigations drawers events start

const calendarEventDjSelectedDetails  = ref(true)


//NAvigations drawers events stop

//Modals Start
const djSelect= ref(false)
const eventSelect= ref(false)

//Modals Stop

const showDjDetails = ()=>{
  djDetails.value = !djDetails.value
  calendarEventDetails.value = !calendarEventDetails.value
}

const backToAllEventDetails = ()=>{
  djDetails.value = false
  calendarEventDetails.value = true
}


//DJ SELECTED DETAILS START
import uplighting from "@images/calender-dj/uplighting.png"
import beach from "@images/calender-dj/beach.png"
import birthday from "@images/calender-dj/birthday.png"

//DJ SELECTED DETAILS STOP



//DJ DETAILS START
import djimage from "@images/calender-dj/dj-image.png"
import djlogo from "@images/calender-dj/djfirst.png"

import clientImg from "@images/event-images/client.png"

const currentTab = ref(0)

//DJ DETAILS STOP

const picker = ref(null)

const name1 = ref('')
const name2 = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone_no = ref('')



const store = useCalendarStore()

console.log(store.value)

// 👉 Event
const event = ref(structuredClone(blankEvent))
const isEventHandlerSidebarActive = ref(false)

watch(isEventHandlerSidebarActive, val => {
  if (!val)
    event.value = structuredClone(blankEvent)
})

const { isLeftSidebarOpen } = useResponsiveLeftSidebar()
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent, jumpToDate } = useCalendar(event, isEventHandlerSidebarActive, isLeftSidebarOpen)

// 👉 Check all
const checkAll = computed({
  get: () => store.selectedCalendars.length === store.availableCalendars.length,
  set: val => {
    if (val)
      store.selectedCalendars = store.availableCalendars.map(i => i.label)
    else if (store.selectedCalendars.length === store.availableCalendars.length)
      store.selectedCalendars = []
  },
})
</script>



<style lang="scss" scoped>
.v-layout {
  overflow: visible !important;

  .v-card {
    overflow: visible;
  }
}

.add-package-btn{
    background-color: #333848;
    border-radius: 10px;
}


.finishBtn{
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
}

.accpedtedBtn{
  border-radius: 10px;
}

.view-contact-btn{
    background-color: #333848;
    border-radius: 10px;
}

.blackBtn.v-btn--variant-outlined:not([class*=text-]) {
    border-color:  #000;
    border-radius: 10px;
}

.name-field-wrapper{
  max-width: 180px;
      width: 100%;
    
}



.select-dj-btn{
  border-radius: 10px;
}

.navigation-drawer-radius{
 border-top-left-radius:  25px;
 border-bottom-left-radius:  25px;
}

// .name-field-wrapper .v-field__field{
//   height: 40px;
// }


// .field-wrapper-height.v-field.v-field--center-affix.v-field--no-label.v-field--variant-outlined.v-theme--light.v-locale--is-ltr {
//     height: 41px;
// }

// .field-wrapper-height .v-input .v-input__control {
//     height: 41px;
// }

.custom-date-picker-sec{
    position: relative;
     display: inline-block; /* Adjust display property based on your layout */
      max-width: 180px;
      width: 100%;
}

.arrow2 {
  position: absolute;
      top: 56%;
    right: 10px;/* Adjust the value based on your design */
  width: 0;
  height: 0;
  border: 6px solid transparent;
      border-top-color: #000; /* Adjust the color based on your design */
  transform: translateY(-50%);
}

.dj-details-img{
  border-radius: 5px
}
</style>


<style lang="scss">
@use "@core/scss/template/libs/full-calendar";


.datepicker .v-field.v-field--center-affix.v-field--no-label.v-field--variant-outlined.v-theme--light.v-locale--is-ltr{
  height: 47px;
}

.edit-gallery-images-wrap .gallery-image-edit {
  position: relative;
}



.edit-gallery-images-wrap .gallery-image-edit .remove-image-btn {
    position: absolute;
       top: 10px;
    right: 10px;
    cursor: pointer;

}

.calendars-checkbox {
  .v-label {
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
    opacity: var(--v-high-emphasis-opacity);
  }
}

.calendar-add-event-drawer {
  &.v-navigation-drawer:not(.v-navigation-drawer--temporary) {
    border-end-start-radius: 0.375rem;
    border-start-start-radius: 0.375rem;
  }
}

.calendar-date-picker {
  display: none;

  +.flatpickr-input {
    +.flatpickr-calendar.inline {
      border: none;
      box-shadow: none;

      .flatpickr-months {
        border-block-end: none;
      }
    }
  }

  &~.flatpickr-calendar .flatpickr-weekdays {
    margin-block: 0 4px;
  }
}
</style>

