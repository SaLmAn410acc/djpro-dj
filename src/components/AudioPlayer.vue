<template>
  <div
    class="dj-audio-player overflow-hidden rounded mb-3"
    :class="playState ? 'playing' : ''"
  >
    <div class="pa-3">
      <VRow align="center">
        <VCol cols="auto">
          <VBtn
            variant="text"
            size="x-small"
            :color="playState ? 'primary' : 'black'"
            @click="playState = !playState"
          >
            <VIcon
              size="30"
              :icon="!playState ? 'octicon:play-16' : 'icon-park-outline:pause-one'"
            />
          </VBtn>
        </VCol>
        <VCol
          cols="auto"
          class="d-none d-sm-block"
        >
          <p class="mb-0 text-body-2 font-weight-semibold">
            01
          </p>
        </VCol>
        <VCol>
          <p class="mb-0 text-subtitle-1 font-weight-bold text-black">
            Old School Mix
          </p>
          <p class="mb-0 text-body-2 font-weight-semibold d-block d-sm-none">
            DJ Tony One
          </p>
        </VCol>
        <VCol
          cols="4"
          class="d-none d-sm-block"
        >
          <p class="mb-0 text-body-2 font-weight-semibold">
            DJ Tony One
          </p>
        </VCol>
        <VCol cols="auto">
          <p class="mb-0 text-body-2 font-weight-semibold px-5">
            03:22
          </p>
        </VCol>
      </VRow>
    </div>
    <div class="dj-audio-player-progress">
      <span style="width: 25%;" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const playState = ref(false)
</script>

<style>
.dj-audio-players-wrap .dj-audio-player {
  border-radius: 5px;
  background: #F8F8FA;
}

.dj-audio-players-wrap .dj-audio-player.playing {
  background: #F2F2F8;
}

.dj-audio-players-wrap .dj-audio-player .dj-audio-player-progress {
  height: 3px;
  background: #E2E2E2;
  border-radius: 5px;
}

.dj-audio-players-wrap .dj-audio-player .dj-audio-player-progress span {
  display: block;
  height: 100%;
  background: #6A8AFA;
  border-radius: 5px;
}
</style>
