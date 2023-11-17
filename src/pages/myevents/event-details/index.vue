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
          <VBtn
            class="font-weight-regular"
            color="btn-color-prime"
          >
            <VIcon
              icon="icon-park-outline:dot"
              size="20"
              color="yellow"
              class="mr-1"
            />
            View New Edits
          </VBtn>
          <VBtn
            :to="{ path: '/disc-jockeys/' + id + '/edit' }"
            variant="outlined"
            color="black"
          >
            Edit Profile
          </VBtn>
        </div>
      </VCol>
    </VRow>
    <VRow
      class="border rounded-lg mt-6"
      no-gutters
    >
      <VCol
        cols="12"
        lg="4"
      >
        <VCard
          variant="text"
          class="pa-6 pa-lg-8 text-center"
        >
          <VAvatar
            size="150"
            class="mx-auto mb-4"
          >
            <VImg
              :src="user.image ?? placeholder"
              cover
            >
              <template #placeholder>
                <VRow
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <VProgressCircular
                    indeterminate
                    color="grey-lighten-5"
                  />
                </VRow>
              </template>
            </VImg>
          </VAvatar>
          <h3 class="text-h4 mb-2">
            {{ user?.firstName }} {{ user?.lastName }}
          </h3>
          <p class="text-body-1">
            {{ user?.customName }}
          </p>
          <ul
            v-if="user?.socialMedias?.length > 0"
            class="social-icons d-flex justify-center gap-x-4 list-none mb-6"
          >
            <li
              v-for="link in user?.socialMedias"
              :key="link.id"
            >
              <a :href="link.link">
                <VIcon :icon="'bi:' + link.type.toLowerCase()" />
              </a>
            </li>
          </ul>
          <VBtn block>
            Send a Message
          </VBtn>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        lg="5"
        class="border-s"
      >
        <div class="pa-6 pa-lg-8">
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <div class="border-b">
                <p class="text-body-2 text-black mb-1">
                  Email
                </p>
                <p class="font-weight-medium text-black mb-3">
                  {{ user?.email ?? "N/A" }}
                </p>
              </div>
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <div class="border-b">
                <p class="text-body-2 text-black mb-1">
                  Address
                </p>
                <p class="font-weight-medium text-black mb-3">
                  {{ user?.address ?? "N/A" }}
                </p>
              </div>
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <div class="border-b">
                <p class="text-body-2 text-black mb-1">
                  Member Status
                </p>
                <p class="font-weight-medium text-black mb-3">
                  Active
                </p>
              </div>
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <div class="border-b">
                <p class="text-body-2 text-black mb-1">
                  City
                </p>
                <p class="font-weight-medium text-black mb-3">
                  {{ user?.city ?? "N/A" }}
                </p>
              </div>
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <div class="border-b">
                <p class="text-body-2 text-black mb-1">
                  Registration Date
                </p>
                <p class="font-weight-medium text-black mb-3">
                  {{ user?.registrationDate ?? "N/A" }}
                </p>
              </div>
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <div class="border-b">
                <p class="text-body-2 text-black mb-1">
                  State
                </p>
                <p class="font-weight-medium text-black mb-3">
                  {{ user?.state ?? "N/A" }}
                </p>
              </div>
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <div class="border-b">
                <p class="text-body-2 text-black mb-1">
                  Phone Number
                </p>
                <p class="font-weight-medium text-black mb-3">
                  {{ user?.phoneNumber ?? "N/A" }}
                </p>
              </div>
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <div class="border-b mb-3">
                <p class="text-body-2 text-black mb-1">
                  ZIP Code
                </p>
                <p class="font-weight-medium text-black mb-3">
                  {{ user?.zip ?? "N/A" }}
                </p>
              </div>
            </VCol>
          </VRow>
        </div>
      </VCol>
      <VCol
        cols="12"
        lg="3"
        class="border-s"
      >
        <div class="pa-6 pa-lg-8">
          <h4 class="text-h4 mb-5">
            Event Types
          </h4>
          <PerfectScrollbar
            v-if="user && user?.eventTypes?.length"
            :settings="scrollbarSettings"
            class="event-types-wrapper"
          >
            <ul class="list-none">
              <li
                v-for="eventType in user?.eventTypes"
                :key="eventType"
                class="mb-3 text-black font-weight-medium"
              >
                {{ eventType }}
              </li>
            </ul>
          </PerfectScrollbar>
          <p
            v-else
            class="text-black font-weight-medium"
          >
            No Event Types
          </p>
        </div>
      </VCol>
    </VRow>
    <VRow>
      <VCol
        cols="12"
        lg="9"
      >
        <VCard variant="text">
          <VTabs v-model="currentTab">
            <VTab>Bio</VTab>
            <VTab>Customer Reviews</VTab>
            <VTab>Events</VTab>
            <VTab>Mixes</VTab>
            <VTab>Images</VTab>
            <VTab>Videos</VTab>
            <VTab>Packages</VTab>
          </VTabs>
          <VWindow v-model="currentTab">
            <VWindowItem>
              <!-- Bio -->
              <div class="pa-6 pa-lg-8">
                {{ user?.bio ?? "Nothing to show here." }}
              </div>
            </VWindowItem>
            <VWindowItem>
              <CustomReviews />
              <!-- Custom Reviews Component -->
            </VWindowItem>
            <VWindowItem>
              <Events />
              <!-- Events Component -->
            </VWindowItem>
            <VWindowItem>
              <!-- Mixes -->
              <Mixes />
            </VWindowItem>
            <VWindowItem>
              <!-- Images -->
              <VRow
                class="my-6"
                dense
              >
                <VCol
                  v-for="n in 8"
                  :key="n"
                  class="d-flex"
                  cols="6"
                  md="3"
                >
                  <VImg
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    cover
                    class="bg-grey-lighten-2"
                  >
                    <template #placeholder>
                      <VRow
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <VProgressCircular
                          indeterminate
                          color="grey-lighten-5"
                        />
                      </VRow>
                    </template>
                  </VImg>
                </VCol>
              </VRow>
            </VWindowItem>
            <VWindowItem>
              <!-- Videos -->
              <div class="my-6">
                <div
                  v-for="n in 2"
                  :key="n"
                  class="video-wrap mb-3"
                >
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/NpEaa2P7qZI?si=40D1RIU0O8P07wC2&amp;controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    style="width: 100%; height: 400px"
                  />
                </div>
              </div>
            </VWindowItem>
            <VWindowItem>
              <!-- Packages -->
              <Packages />
            </VWindowItem>
          </VWindow>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        lg="3"
      >
        <VCard
          variant="text"
          class="pa-5 border"
        >
          <h3 class="mb-4">
            Assigned Events
          </h3>
          <VCard
            variant="text"
            class="pa-3 border mb-3"
          >
            <small>02.22.2023</small>
            <h4 class="mb-2">
              Corporate Event
            </h4>
            <a
              href="#"
              class="text-body-2 text-decoration-underline text-primary"
            >View Details</a>
          </VCard>
          <VCard
            variant="text"
            class="pa-3 border mb-3"
          >
            <small>02.22.2023</small>
            <h4 class="mb-2">
              School Dance
            </h4>
            <a
              href="#"
              class="text-body-2 text-decoration-underline text-primary"
            >View Details</a>
          </VCard>
          <VCard
            variant="text"
            class="pa-3 border"
          >
            <small>02.22.2023</small>
            <h4 class="mb-2">
              Private Party
            </h4>
            <a
              href="#"
              class="text-body-2 text-decoration-underline text-primary"
            >View Details</a>
          </VCard>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<script setup>
import axios from "@axios"
import placeholder from "@images/placeholders/avatar-image-rounded.png"
import { PerfectScrollbar } from "vue3-perfect-scrollbar"
import CustomReviews from "./CustomReviews.vue"
import Events from "./Events.vue"
import Mixes from "./Mixes.vue"
import Packages from "./Packages.vue"

import useToastPlugin from "@/composables/vue-toastification.js"

const $toast = useToastPlugin()
const $loading = inject("loadingOverlay")

const scrollbarSettings = {
  wheelSpeed: 0.5,
  wheelPropagation: true,
  minScrollbarLength: 20,
  maxScrollbarLength: 40,
}

const route = useRoute()
const router = useRouter()

const id = route.params.slug

const currentTab = ref(0)

const user = ref({})

const fetchUser = async () => {
  let loader = $loading.show()
  try {
    const { data, status } = await axios.get(`/User/GetUser?id=${id}`)
    if (status === 200) {
      user.value = data
    }
    if (status === 204) {
      router.replace({ path: "/not-found" })
    }
  } catch (error) {
    $toast.error(error.response.message)
  } finally {
    loader.hide()
  }
}

const breadcrumbs = [
  {
    text: "Disc Jockeys",
    disabled: false,
    to: "/disc-jockeys",
  },
  {
    text: "DJ Profile",
    to: route.path,
  },
]

onMounted(() => {
  fetchUser()
})
</script>

<style>
.event-types-wrapper {
  max-height: 280px;
}
</style>
