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
        <h1 class="text-h2">
          Your Public Information
        </h1>
      </VCol>
      <VCol
        cols="12"
        lg="6"
      >
        <div class="d-flex justify-lg-end gap-x-4">
          <template v-if="currentTab == '4'">
            <VBtn
                        
              density="comfortable"
              class="add-package-btn me-3 my-3 my-md-0" 
              color="#333848"
              height="45px"
              :to="{name: 'djprofile-addnewpackage'}"
            >
              <span class="text-white px-2 ">Add Package</span>
            </VBtn>
          </template>
          <VBtn
            color="primary"
            size="x-large"
            
            class="my-3 my-md-0"
          >
            <span>Save Changes</span>
          </VBtn>
          <VBtn
            variant="outlined"
            color="black"
            class="my-3 my-md-0"
          >
            <span>Cancel</span>
          </VBtn>
        </div>
      </VCol>
    </VRow>
    
    <VRow>
      <VCol cols="12">
        <VCard variant="text">
          <VTabs v-model="currentTab">
            <VTab>For the Web Page</VTab>
            <VTab>Mixes</VTab>
            <VTab>Images</VTab>
            <VTab>Videos</VTab>
            <VTab>Packages</VTab>
          </VTabs>
          <VWindow v-model="currentTab">
            <!-- For the Web Page -->
            <VWindowItem>
              <ForTheWebPage v-model:userData="user" />
            </VWindowItem>
            <!-- For the Web Page -->

            <!-- Mixes -->
            <VWindowItem>
              <EditMixes v-model:userData="user" />
            </VWindowItem>
            <!-- Mixes -->

            <!-- Gallery -->
            <VWindowItem>
              <EditGallery v-model:userData="user" />
            </VWindowItem>
            <!-- Gallery -->

            <VWindowItem>
              <EditVideos v-model:userData="user" />
            </VWindowItem>

            <VWindowItem>
              <EditPackages v-model:userData="user" />
            </VWindowItem>
          </VWindow>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<script setup>
import axios from "@axios"
import { ref } from "vue"

import ForTheWebPage from "./ForTheWebPage.vue"
import EditMixes from "./EditMixes.vue"
import EditGallery from "./EditGallery.vue"
import EditVideos from "./EditVideos.vue"
import EditPackages from "./EditPackages.vue"

import useToastPlugin from "@/composables/vue-toastification.js"

const $toast = useToastPlugin()
const $loading = inject("loadingOverlay")

const route = useRoute()
const router = useRouter()

const id = route.params.slug

const currentTab = ref(0)

const user = ref({})

const fetchUser = async () => {
  let loader = $loading.show()
  try {
    const { data, status } = await axios.get(`/User/GetUser?id=${id}`)

    user.value = data
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
    to: "/disc-jockeys/" + id,
  },
  {
    text: "Edit Profile",
    to: "/disc-jockeys/" + id + "/edit",
  },
]

const saveChanges = () => {
  updateProfile()
}

onMounted(() => {
  fetchUser()
})

const updateProfile = async () => {
  let loading = $loading.show()
  try {
    let response = await axios.put(
      `/User/UpdateProfile/?id=${user.value.id}`,
      user.value,
    )
    if (response.status === 200) {
      $toast.success("Profile updated successfully")
    }
  } catch (error) {
    console.log(error)
    $toast.error("An error occurred")
  } finally {
    loading.hide()
  }
}
</script>

<style>
.event-types-wrapper {
  max-height: 280px;
}
</style>

<style lang="scss">
.add-package-btn{
    background-color: #333848;
    border-radius: 10px;
}

.user-profile-avatar {
  width: max-content;
  position: relative;
  margin: 0 auto;

  .v-avatar {
    margin: 0 auto;
    margin-bottom: 1.5rem;
    position: relative;
  }

  .v-btn {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);

    .v-icon {
      font-size: 1rem;
    }
  }
}
</style>
