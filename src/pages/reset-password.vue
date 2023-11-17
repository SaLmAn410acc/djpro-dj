<script setup>
import axios from "@axios";
import authFeaturedImage from "@images/auth/auth-featured-image.jpg";
import siteLogo from "@images/logo-light.svg?raw";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import useToastPlugin from "@/composables/vue-toastification.js";
import { requiredValidator, emailValidator } from "@validators";

const $toast = useToastPlugin();
const $loading = inject("loadingOverlay");

const router = useRouter();

const logo = h("div", { innerHTML: siteLogo });
import { VForm } from "vuetify/components/VForm";

const refVForm = ref();
const email = ref("developer@eseospace.com");

const resetPassword = async () => {
  refVForm.value.validate().then(async ({ valid }) => {
    if (valid) {
      let loading = $loading.show();
      try {
        const response = await axios.post("/Authentication/ForgotPassword", {
          email: email.value,
        });
        const { data } = response;
        $toast.success(data.message);
        router.push({ name: "login" });
      } catch (error) {
        $toast.error(error.response.data.message);
      } finally {
        loading.hide();
      }
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
          <h1 class="mb-3">Reset Password</h1>
          <p>
            Enter the email associated with your account and we'll send an email
            with instructions to reset your password
          </p>
          <VForm ref="refVForm" @submit.prevent="resetPassword">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="email"
                  label="Your Email"
                  type="email"
                  autofocus
                  :rules="[requiredValidator, emailValidator]"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VBtn
                  block
                  type="submit"
                  density="default"
                  rounded="lg"
                  elevation="0"
                  class="mb-3"
                >
                  Send Instructions
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
