<script setup>
import axios from "@axios";
import authFeaturedImage from "@images/auth/auth-featured-image.jpg";
import siteLogo from "@images/logo-light.svg?raw";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { VForm } from "vuetify/components/VForm";
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
} from "@validators";
import useToastPlugin from "@/composables/vue-toastification.js";

const $loading = inject("loadingOverlay");
const $toast = useToastPlugin();

const logo = h("div", { innerHTML: siteLogo });

const isPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);
const refVForm = ref();
const registerForm = ref({
  firstName: "Developer",
  lastName: "Developer",
  email: "developer@eseospace.com",
  password: "Developer@123",
  confirmPassword: "Developer@123",
  rememberMe: false,
});
const submitHandler = () => {
  refVForm.value.validate().then(async ({ valid }) => {
    if (valid) {
      let loader = $loading.show();
      const response = await axios
        .post(
          "/Authentication/Register",
          {
            firstName: registerForm.value.firstName,
            lastName: registerForm.value.lastName,
            email: registerForm.value.email,
            password: registerForm.value.password,
            confirmPassword: registerForm.value.confirmPassword,
            rememberMe: registerForm.value.rememberMe,
          },
          {
            withCredentials: false,
          }
        )
        .then((response) => {
          if (response?.data?.message) {
            $toast.success(response.data.message);
          } else {
            $toast.success("User registered successfully");
          }
        })
        .catch((error) => {
          if (error.response?.data?.message) {
            $toast.error(error.response.data.message);
          } else {
            $toast.error("Something went wrong");
          }
        })
        .finally(() => {
          loader.hide();
        });
    } else {
      $toast.error("Please fill all the required fields");
    }
  });
};
</script>

<template>
  <VRow no-gutters class="auth-wrapper bg-surface">
    <VCol lg="6" class="d-none d-lg-flex">
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
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <h1 class="text-h1 mb-3">Sign Up</h1>
          <p>
            Welcome! Please fill your email and password to create your personal
            account
          </p>
          <VForm ref="refVForm" @submit.prevent="submitHandler">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="registerForm.firstName"
                  label="First Name"
                  type="text"
                  :rules="[requiredValidator]"
                  autofocus
                />
              </VCol>

              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="registerForm.lastName"
                  label="Last Name"
                  type="text"
                  :rules="[requiredValidator]"
                  autofocus
                />
              </VCol>

              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="registerForm.email"
                  label="Your Email"
                  type="email"
                  :rules="[emailValidator, requiredValidator]"
                  autofocus
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="registerForm.password"
                  label="Create Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  :rules="[passwordValidator, requiredValidator]"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="registerForm.confirmPassword"
                  label="Confirm Password"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  :rules="[
                    requiredValidator,
                    confirmedValidator(
                      registerForm.confirmPassword,
                      registerForm.password
                    ),
                  ]"
                  @click:append-inner="
                    isConfirmPasswordVisible = !isConfirmPasswordVisible
                  "
                />

                <div class="mt-2 mb-4">
                  <VCheckbox
                    v-model="registerForm.rememberMe"
                    label="Keep me logged in"
                  />
                </div>

                <VBtn
                  block
                  type="submit"
                  density="default"
                  rounded="lg"
                  elevation="0"
                  class="mb-3"
                >
                  Sign Up
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
                  Sign Up With Google
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol cols="12" class="text-center text-body-2 text-grey-500">
                <span>Already have an account? </span>
                <router-link class="text-primary" :to="{ name: 'login' }">
                  Sign In
                </router-link>
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
