<template>
  <div class="dj-audio-players-wrap my-6">
    <VCol
      cols="12"
      lg="6"
    >
      <div
        v-for="i in 5"
        :key="i"
        class="d-flex align-center gap-x-3"
      >
        <div class="flex-1-0">
          <AudioPlayer />
        </div>
        <VBtn
          density="compact"
          size="x-small"
          variant="text"
          color="black"
          class="mb-3"
          @click="isDialogVisible = !isDialogVisible"
        >
          <VIcon size="20">
            ph:x-bold
          </VIcon>
        </VBtn>
      </div>
    </VCol>
    <VCol cols="12">
      <VBtn
        density="compact"
        variant="text"
        color="black"
        size="x-small"
      >
        <VIcon class="me-2">
          material-symbols:library-music-outline
        </VIcon>
        Upload New Mix
      </VBtn>
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
            Do you want delete the Music Track?
          </h2>
          <p class="mb-6">
            After confirmation music track will be deleted
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
import { ref } from 'vue'
import AudioPlayer from '@/components/AudioPlayer.vue'

const isDialogVisible = ref(false)
</script>
