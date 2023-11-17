<template>
  <div class="dj-audio-players-wrap my-6">
    <AudioPlayer v-for="i in 5" :key="i" />
  </div>
</template>

<script setup>
import AudioPlayer from '@/components/AudioPlayer.vue'
</script>
