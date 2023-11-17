<script setup>
import axios from "@axios"
import authFeaturedImage from "@images/auth/auth-featured-image.jpg"
import siteLogo from "@images/logo-light.svg?raw"
import { VNodeRenderer } from "@layouts/components/VNodeRenderer"
import useAuth from "@/composables/useAuth.js"
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
} from "@validators"
import useToastPlugin from "@/composables/vue-toastification.js"

const { login } = useAuth()

const router = useRouter()

const logo = h("div", { innerHTML: siteLogo })
import { VForm } from "vuetify/components/VForm"

const isPasswordVisible = ref(false)
const refVForm = ref()

const loginForm = ref({
  email: "developer@eseospace.com",
  password: "Developer@123",
  rememberMe: false,
})

const $toast = useToastPlugin()
const $loading = inject("loadingOverlay")

const submitFormHandler = async () => {
  refVForm.value.validate().then(async ({ valid }) => {
    if (valid) {
      let loading = $loading.show()
      try {
        const response = await login({
          email: loginForm.value.email,
          password: loginForm.value.password,
          rememberMe: loginForm.value.rememberMe,
        })

        if (response) {
          $toast.success("Login successful")
          router.replace({ name: "dashboard" })
        }
      } catch (error) {
        if (error.response?.data?.message) {
          $toast.error(error.response.data.message)
        } else {
          console.log(error)
          $toast.error("Something went wrong")
        }
      } finally {
        loading.hide()
      }
    } else {
      $toast.error("Please fill all the required fields")
    }
  })
}
</script>

<template>
  <VRow
    no-gutters
    class="auth-wrapper bg-surface"
  >
    <VCol
      lg="6"
      class="d-none d-lg-flex"
    >
      <div class="position-relative bg-background rounded-lg w-100">
        <VImg
          :src="authFeaturedImage"
          style="inline-size: 100%; block-size: 100vh"
          cover
        />
        <div class="auth-featured-logo">
          <VNodeRenderer :nodes="logo" />
        </div>
      </div>
    </VCol>

    <VCol
      cols="12"
      lg="6"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <h1 class="text-h1 mb-3">
            Log In
          </h1>
          <p>
            Welcome! Please fill your email and password to sign in into your
            account
          </p>
          <VForm
            ref="refVForm"
            @submit.prevent="submitFormHandler"
          >
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="loginForm.email"
                  label="Your Email"
                  type="email"
                  :rules="[requiredValidator, emailValidator]"
                  autofocus
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="loginForm.password"
                  label="Your Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  :rules="[requiredValidator, passwordValidator]"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4">
                  <VCheckbox
                    v-model="loginForm.rememberMe"
                    label="Keep me logged in"
                  />
                  <RouterLink
                    :to="{ name: 'reset-password' }"
                    class="text-dark text-underline ms-2 mb-1"
                    href="#"
                  >
                    Forgot Password?
                  </RouterLink>
                </div>

                <VBtn
                  block
                  type="submit"
                  density="default"
                  rounded="lg"
                  elevation="0"
                  class="mb-3"
                >
                  Login
                </VBtn>
                <VBtn
                  block
                  type="button"
                  color="#272727"
                  density="default"
                  variant="outlined"
                  rounded="lg"
                  elevation="0"
                >
                  <VIcon
                    size="24"
                    icon="flat-color-icons:google"
                    class="mr-2"
                  />
                  Log In With Google
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol
                cols="12"
                class="text-center text-body-2 text-gray-500"
              >
                <span>Don't have an account?</span>

                <RouterLink
                  class="text-primary"
                  :to="{ name: 'sign-up' }"
                >
                  Sign Up
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
layout: blank
</route>
