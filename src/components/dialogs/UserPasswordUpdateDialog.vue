<script setup>
import {
  requiredValidator,
  passwordValidator,
  confirmedValidator,
} from "@validators";
import axios from "@axios";
import useToastPlugin from "@/composables/vue-toastification.js";

const $loading = inject("loadingOverlay");

const $toast = useToastPlugin();

const props = defineProps({
  userData: {
    type: Object,
    required: false,
  },
  isPasswordDialogVisible: {
    type: Boolean,
    required: true,
  },
});

const auth = ref({
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
});

const emit = defineEmits(["submit", "update:isPasswordDialogVisible"]);

const userData = ref(structuredClone(toRaw(props.userData)));

watch(props, () => {
  userData.value = structuredClone(toRaw(props.userData));
});

const passwordForm = ref(null);

const onFormSubmit = async () => {
  passwordForm.value.validate().then(async ({ valid }) => {
    if (valid) {
      let loading = $loading.show();
      try {
        let response = await axios.post("/Authentication/ChangePassword", {
          email: userData.value.email,
          ...auth.value,
        });
        const { data } = response;
        $toast.success(data.message);
        emit("update:isPasswordDialogVisible", false);
        loading.hide();
        auth.value = {
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        };
      } catch (error) {
        $toast.error(error.response.data.message);
      } finally {
        loading.hide();
      }
    }
  });
};

const onFormReset = () => {
  userData.value = structuredClone(toRaw(props.userData));
  emit("update:isPasswordDialogVisible", false);
};

const dialogModelValueUpdate = (val) => {
  emit("update:isPasswordDialogVisible", val);
};

const isPassword1Visible = ref(false);
const isPassword2Visible = ref(false);
const isPassword3Visible = ref(false);
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 500"
    :model-value="props.isPasswordDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-8 pa-sm-10">
      <h3 class="text-center text-h4">Change Password</h3>
      <VForm ref="passwordForm" class="mt-6" @submit.prevent="onFormSubmit">
        <VRow>
          <!-- 👉 First Name -->
          <VCol cols="12">
            <AppTextField
              v-model="auth.oldPassword"
              label="Change Password"
              class="mb-5"
              :type="isPassword1Visible ? 'text' : 'password'"
              :append-inner-icon="
                isPassword1Visible ? 'tabler-eye-off' : 'tabler-eye'
              "
              :rules="[requiredValidator, passwordValidator]"
              @click:append-inner="isPassword1Visible = !isPassword1Visible"
            />
            <h3 class="font-weight-semibold mb-2">Create New Password</h3>
            <p class="text-grey-500">
              Your new password must be different from previous used password
              and must be at least 10 characters
            </p>
            <AppTextField
              v-model="auth.newPassword"
              label="New Password"
              class="mb-3"
              :type="isPassword2Visible ? 'text' : 'password'"
              :append-inner-icon="
                isPassword2Visible ? 'tabler-eye-off' : 'tabler-eye'
              "
              :rules="[requiredValidator, passwordValidator]"
              @click:append-inner="isPassword2Visible = !isPassword2Visible"
            />
            <AppTextField
              v-model="auth.confirmNewPassword"
              label="Confirm New Password"
              class="mb-3"
              :type="isPassword3Visible ? 'text' : 'password'"
              :append-inner-icon="
                isPassword3Visible ? 'tabler-eye-off' : 'tabler-eye'
              "
              :rules="[
                requiredValidator,
                confirmedValidator(auth.newPassword, auth.confirmNewPassword),
              ]"
              @click:append-inner="isPassword3Visible = !isPassword3Visible"
            />
          </VCol>

          <!-- 👉 Submit and Cancel -->
          <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
            <VRow>
              <VCol>
                <VBtn type="submit" block> Confirm </VBtn>
              </VCol>
              <VCol cols="auto">
                <VBtn
                  color="black"
                  :width="150"
                  border
                  variant="outlined"
                  @click="onFormReset"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VForm>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.user-profile-avatar {
  width: max-content;
  position: relative;
  margin: 0 auto;
  .v-avatar {
    margin: 0 auto;
    margin-bottom: 1.5rem;
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
