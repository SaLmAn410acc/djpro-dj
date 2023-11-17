<script setup>
import avatarImage from "@images/placeholders/avatar-image-rounded.png";
import useAuth from "@/composables/useAuth.js";

import useToastPlugin from "@/composables/vue-toastification.js";
const $toast = useToastPlugin();
const $loading = inject("loadingOverlay");

const { updateUserData } = useAuth();

const props = defineProps({
  userData: {
    type: Object,
    required: false,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["submit", "update:isDialogVisible"]);

const changeAvatar = (file) => {
  const fileReader = new FileReader();
  const { files } = file.target;
  if (files && files.length) {
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = () => {
      if (typeof fileReader.result === "string")
        userInfo.value.image = fileReader.result;
    };
  }
};

const userInfo = ref(structuredClone(toRaw(props.userData)));

watch(props, () => {
  userInfo.value = structuredClone(toRaw(props.userData));
});

const onFormReset = () => {
  userInfo.value = structuredClone(toRaw(props.userData));
  emit("update:isDialogVisible", false);
};

const dialogModelValueUpdate = (val) => {
  emit("update:isDialogVisible", val);
};

const updateUser = async () => {
  let loading = $loading.show();

  await updateUserData(userInfo.value)
    .then(() => {
      $toast.success("User data updated successfully");
      emit("update:isDialogVisible", false);
      emit("submit", userInfo.value);
    })
    .catch(() => {
      $toast.error("User data update failed");
    })
    .finally(() => {
      loading.hide();
    });
};
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 650"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-8 pa-sm-10">
      <h3 class="text-center text-h4">Edit Personal Information</h3>
      <VForm class="mt-6" @submit.prevent="updateUser">
        <div class="user-profile-avatar text-center mb-6">
          <VAvatar
            class="mb-4"
            size="12em"
            :image="userInfo.image || avatarImage"
          />
          <VBtn
            color="primary"
            density="compact"
            rounded="sm"
            class="py-1 px-2"
            @click="$refs.refInputEl?.click()"
          >
            <VIcon icon="tabler-upload" />
          </VBtn>
          <input
            ref="refInputEl"
            type="file"
            name="file"
            accept=".jpeg,.png,.jpg,GIF"
            hidden
            @input="changeAvatar"
          />
        </div>
        <VRow>
          <!-- 👉 First Name -->
          <VCol cols="12" md="6">
            <AppTextField v-model="userInfo.firstName" label="First Name" />
          </VCol>

          <!-- 👉 Last Name -->
          <VCol cols="12" md="6">
            <AppTextField v-model="userInfo.lastName" label="Last Name" />
          </VCol>

          <!-- 👉 Email -->
          <VCol cols="12" md="6">
            <AppTextField v-model="userInfo.email" label="Email" />
          </VCol>

          <!-- 👉 Phone Number -->
          <VCol cols="12" md="6">
            <AppTextField v-model="userInfo.phoneNumber" label="Phone Number" />
          </VCol>

          <!-- 👉 Address -->
          <VCol cols="12" md="6">
            <AppTextField v-model="userInfo.address" label="Address" />
          </VCol>

          <!-- 👉 City -->
          <VCol cols="12" md="6">
            <AppTextField v-model="userInfo.city" chips multiple label="City" />
          </VCol>

          <!-- 👉 State -->
          <VCol cols="12" md="6">
            <AppTextField v-model="userInfo.state" label="State" />
          </VCol>

          <!-- 👉 Zip Code -->
          <VCol cols="12" md="6">
            <AppTextField v-model="userInfo.zip" label="Zip Code" />
          </VCol>

          <!-- 👉 Submit and Cancel -->
          <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
            <VRow>
              <VCol>
                <VBtn type="submit" block> Save Changes </VBtn>
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
