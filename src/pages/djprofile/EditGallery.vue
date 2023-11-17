<template>
  <div class="edit-gallery-images-wrap my-6">
    <VCol
      cols="12"
      lg="9"
    >
      <VRow dense>
        <VCol
          v-for="n in 8"
          :key="n"
          class="gallery-image-edit"
          cols="6"
          md="3"
        >
          <VImg
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            cover
            class="rounded-lg bg-grey-lighten-2"
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
          <VIcon
            class="remove-image-btn"
            size="20"
            color="#FFF"
            @click="isDialogVisible = !isDialogVisible"
          >
            ph:x-circle
          </VIcon>
        </VCol>
      </VRow>
    </VCol>
    <VCol cols="12">
      <VBtn
        density="compact"
        variant="text"
        color="black"
        size="x-small"
        @click="$refs.fileInput.click()"
      >
        <VIcon class="me-2">
          material-symbols:library-music-outline
        </VIcon>
        Upload New Image
      </VBtn>
      <input
        ref="fileInput"
        type="file"
        class="d-none"
        accept="image/*"
        @change="uploadFile"
      >
    </VCol>
    <VDialog
      v-model="isDialogVisible"
      width="500"
    >
      <!-- Dialog close btn -->
      <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

      <VCard class="pa-6 pa-lg-12">
        <VCardText class="text-center">
          <VIcon
            size="70"
            color="error"
            class="mb-3"
          >
            material-symbols:delete-outline
          </VIcon>
          <h2 class="text-h2 text-black mb-4">
            Do you want delete the Picture?
          </h2>
          <p class="mb-6">
            After confirmation the picture will be deleted
          </p>
          <VRow>
            <VCol>
              <VBtn
                color="error"
                size="x-large"
                block
              >
                Confirm
              </VBtn>
            </VCol>
            <VCol cols="auto">
              <VBtn
                variant="outlined"
                color="black"
                size="x-large"
                @click="isDialogVisible = !isDialogVisible"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VDialog>
  </div>
</template>

<script setup>
import axios from "@axios"
import { ref } from "vue"

import useToastPlugin from "@/composables/vue-toastification.js"

const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})

const $toast = useToastPlugin()
const $loading = inject("loadingOverlay")

const isDialogVisible = ref(false)

const uploadFile = event => {
  let loading = $loading.show()
  let file = event.target.files[0]
  let formData = new FormData()
  formData.append("file", file)
  axios
    .post("User/UploadFile?type=Image&userId=" + props.userData.id, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(res => {
      $toast.success("File uploaded successfully")
    })
    .catch(err => {
      $toast.error(err.response.data.message)
    })
    .finally(() => {
      loading.hide()
    })
}
</script>

<style>
.edit-gallery-images-wrap .gallery-image-edit {
  position: relative;
}

.edit-gallery-images-wrap .gallery-image-edit .remove-image-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  cursor: pointer;
  mix-blend-mode: luminosity;
}
</style>
