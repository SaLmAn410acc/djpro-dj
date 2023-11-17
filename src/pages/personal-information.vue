<script setup>
import { ref, onBeforeMount } from "vue"
import avatarImage from "@images/placeholders/avatar-image-rounded.png"
import useToastPlugin from "@/composables/vue-toastification.js"
import useAuth from "@/composables/useAuth.js"
import UserInfoEditDialog from "@/components/dialogs/UserInfoEditDialog.vue"
import UserPasswordUpdateDialog from "@/components/dialogs/UserPasswordUpdateDialog.vue"

const { fetchUser, logout } = useAuth()

const $toast = useToastPlugin()
const $loading = inject("loadingOverlay")
const router = useRouter()

onBeforeMount(async () => {
  let loading = $loading.show()
  const response = await fetchUser()
  const { data } = response

  form.value = data
  loading.hide()
})

const isDialogVisible = ref(false)
const isPasswordDialogVisible = ref(false)

const form = ref({})

const logoutUser = async () => {
  let loading = $loading.show()
  await logout()
  $toast.success("Logout successful")
  loading.hide()
  router.push({ name: "login" })
}
</script>

<template>
  <div class="dashboard-fillables-theme">
    <h1 class="text-h3 mb-4">
      Personal Information
    </h1>
    <VCard
      elevation="0"
      class="pa-6 pa-lg-8 px-xl-10"
      border
    >
      <div class="text-center">
        <VAvatar
          size="12em"
          :image="form.image || avatarImage"
        />
      </div>
      <VRow class="mt-8">
        <VCol
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <VTextField
            v-model="form.firstName"
            density="comfortable"
            label="First Name"
            variant="underlined"
            readonly
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <VTextField
            v-model="form.lastName"
            density="comfortable"
            label="Last Name"
            variant="underlined"
            readonly
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <VTextField
            v-model="form.email"
            density="comfortable"
            label="Email"
            variant="underlined"
            readonly
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <VTextField
            v-model="form.phoneNumber"
            density="comfortable"
            label="Phone Number"
            variant="underlined"
            readonly
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <VTextField
            v-model="form.address"
            density="comfortable"
            label="Address"
            variant="underlined"
            readonly
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <VTextField
            v-model="form.city"
            density="comfortable"
            label="City"
            variant="underlined"
            readonly
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <VTextField
            v-model="form.state"
            density="comfortable"
            label="State"
            variant="underlined"
            readonly
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <VTextField
            v-model="form.zip"
            density="comfortable"
            label="Zip Code "
            variant="underlined"
            readonly
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="auto">
          <VBtn
            density="default"
            rounded="lg"
            color="black"
            border
            variant="outlined"
            class="mt-6"
            @click="isDialogVisible = true"
          >
            Edit Personal Info
          </VBtn>
        </VCol>
        <VCol>
          <VBtn
            density="default"
            rounded="lg"
            color="black"
            border
            class="mt-6"
            @click="isPasswordDialogVisible = true"
          >
            Change Password
          </VBtn>
        </VCol>
        <VCol cols="auto">
          <VBtn
            density="default"
            rounded="lg"
            color="secondary "
            class="mt-6"
            @click="logoutUser"
          >
            Log Out
          </VBtn>
        </VCol>
      </VRow>
    </VCard>
    <UserInfoEditDialog
      v-model:is-dialog-visible="isDialogVisible"
      :user-data="form"
    />
    <UserPasswordUpdateDialog
      v-model:is-password-dialog-visible="isPasswordDialogVisible"
      :user-data="form"
    />
  </div>
</template>
