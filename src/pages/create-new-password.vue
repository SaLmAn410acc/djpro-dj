<script setup>
import authFeaturedImage from '@images/auth/auth-featured-image.jpg'
import siteLogo from "@images/logo-light.svg?raw"
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

const logo = h('div', { innerHTML: siteLogo })
import { VForm } from 'vuetify/components/VForm'

const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const refVForm = ref()
const email = ref('admin@demo.com')
const password = ref('admin')
const confirmPassword = ref('admin')
const rememberMe = ref(false)
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
          style="inline-size: 100%; block-size: 100vh;"
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
            Create New Password
          </h1>
          <p>
            Your new password must be different from previous
            used password
          </p>
          <VForm
            ref="refVForm"
            @submit="() => { }"
          >
            <VRow>
              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="password"
                  label="Create Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="confirmPassword"
                  label="Confirm Password"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <VBtn
                  block
                  type="submit"
                  density="default"
                  rounded="lg"
                  elevation="0"
                  class="mb-3"
                >
                  Reset Password
                </VBtn>
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
