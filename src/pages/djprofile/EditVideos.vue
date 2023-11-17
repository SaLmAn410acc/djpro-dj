<template>
  <VCol cols="12" lg="8" class="edit-videos-wrap my-6">
    <div class="video-wrap mb-3" v-for="n in 2" :key="n">
      <iframe src="https://www.youtube-nocookie.com/embed/NpEaa2P7qZI?si=40D1RIU0O8P07wC2&amp;controls=0"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen style="width: 100%; height: 400px"></iframe>
      <VIcon class="remove-image-btn" size="20" color="#FFF" @click="isDialogVisible = !isDialogVisible">ph:x-circle
      </VIcon>
    </div>
    <VBtn density="compact" variant="text" color="black" size="x-small" @click="isDialogVisible = !isDialogVisible">
      <VIcon class="me-2">material-symbols:library-music-outline</VIcon>
      Upload New Videos
    </VBtn>
    <VDialog v-model="isDialogVisible" width="500">

      <!-- Dialog close btn -->
      <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

      <v-card class="pa-6 pa-lg-12">
        <v-card-text class="text-center">
          <v-icon size="70" color="error" class="mb-3">material-symbols:delete-outline</v-icon>
          <h2 class="text-h2 text-black mb-4">Do you want delete the Video?</h2>
          <p class="mb-6">After confirmation the video will be deleted</p>
          <v-row>
            <v-col>
              <VBtn color="error" size="x-large" block>
                Confirm
              </VBtn>
            </v-col>
            <v-col cols="auto">
              <VBtn variant="outlined" color="black" size="x-large">
                Cancel
              </VBtn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </VDialog>
  </VCol>
</template>

<script setup>
import { ref } from 'vue'

const isDialogVisible = ref(false)
</script>

<style>
.edit-videos-wrap .video-wrap {
  position: relative;
}

.edit-videos-wrap .video-wrap .remove-image-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  cursor: pointer;
  mix-blend-mode: luminosity;
}
</style>
