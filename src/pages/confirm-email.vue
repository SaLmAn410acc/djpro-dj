<script setup>
import authFeaturedImage from "@images/auth/auth-featured-image.jpg"
import siteLogo from "@images/logo-light.svg?raw"
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'

const logo = h('div', { innerHTML: siteLogo })
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
        :max-width="450"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText class="text-center">
          <svg
            width="64"
            height="63"
            viewBox="0 0 64 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mb-4"
          >
            <path
              d="M5.36856 63C3.91871 63 2.66148 62.4692 1.59686 61.4076C0.532285 60.3459 0 59.0921 0 57.6463V21.5825C0 20.6464 0.192715 19.7222 0.578146 18.8099C0.963577 17.8977 1.65191 17.162 2.64315 16.6028L29.2086 0.722556C29.6266 0.435577 30.0739 0.243395 30.5507 0.146007C31.0275 0.0486706 31.5075 0 31.9905 0C32.4736 0 32.9536 0.0486706 33.4304 0.146007C33.9071 0.243395 34.3545 0.435577 34.7725 0.722556L61.3379 16.6028C62.3692 17.162 63.0706 17.8977 63.4423 18.8099C63.8141 19.7222 64 20.6464 64 21.5825V57.6463C64 59.0921 63.4658 60.3459 62.3975 61.4076C61.3292 62.4692 60.0675 63 58.6125 63H5.36856ZM31.982 35.6656C32.2058 35.6656 32.4296 35.6344 32.6535 35.572C32.8773 35.5097 33.1069 35.4173 33.3421 35.295L58.1654 20.8035L33.3421 5.91922C33.1219 5.78437 32.9001 5.68887 32.6766 5.63271C32.4533 5.5766 32.2299 5.54855 32.0065 5.54855C31.7831 5.54855 31.5581 5.5766 31.3316 5.63271C31.1051 5.68887 30.8742 5.78437 30.639 5.91922L5.81566 20.8035L30.639 35.295C30.8628 35.4173 31.0867 35.5097 31.3105 35.572C31.5343 35.6344 31.7581 35.6656 31.982 35.6656ZM5.36856 57.6463H58.6125V26.0019L34.6937 40.003C34.2757 40.29 33.8446 40.479 33.4003 40.5701C32.9561 40.6613 32.4893 40.7069 31.9999 40.7069C31.5106 40.7069 31.045 40.6482 30.6033 40.5308C30.1615 40.4135 29.7229 40.2376 29.2874 40.003L5.36856 26.0019V57.6463Z"
              fill="#6A8AFA"
            />
          </svg>
          <h1 class="text-h1 mb-3">
            Check Your Email
          </h1>
          <p>
            We have sent a password recover instructions
            to your email.
          </p>
          <VBtn
            block
            density="default"
            rounded="lg"
            elevation="0"
            class="mb-3"
          >
            Open Email
          </VBtn>
          <p class="text-subtitle-2 mt-8">
            <strong>
              <a
                href="#"
                class="text-grey-900"
              >Skip, I'll confirm later</a>
            </strong>
          </p>
          <p class="text-body-2 mt-12 mt-lg-16 pt-md-16">
            Did not receive the email? Check your spam filter, or <a href="#">try another email address</a>
          </p>
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
