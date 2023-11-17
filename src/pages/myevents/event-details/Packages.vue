<template>
  <div class="packages-wrap my-6">
    <VCard variant="outlined" class="package-item rounded-xxl pa-6 pa-lg-8 mb-6">
      <VRow align="center">
        <VCol>
          <h3 class="text-h4 mb-6">Wedding</h3>
          <p class="text-body-1 font-weight-medium text-black">Reception Package</p>
          <p class="text-body-1 font-weight-medium text-black">Reception Package w/Dance Lighting</p>
          <p class="text-body-1 font-weight-medium text-black">Reception Package w/Dance Lighting and 12 Uplights</p>
        </VCol>
        <VCol cols="auto">
          <VBtn variant="outlined" color="black" size="x-large">Details</VBtn>
        </VCol>
      </VRow>
    </VCard>
    <VCard variant="outlined" class="package-item rounded-xxl pa-6 pa-lg-8 mb-6">
      <VRow align="center">
        <VCol>
          <h3 class="text-h4 mb-6">Quinceanera</h3>
          <p class="text-body-1 font-weight-medium text-black">Padrino Package</p>
          <p class="text-body-1 font-weight-medium text-black">Madrina Package</p>
          <p class="text-body-1 font-weight-medium text-black">The Dream Quince Package</p>
        </VCol>
        <VCol cols="auto">
          <VBtn variant="outlined" color="black" size="x-large">Details</VBtn>
        </VCol>
      </VRow>
    </VCard>
    <VCard variant="outlined" class="package-item rounded-xxl pa-6 pa-lg-8 mb-6">
      <VRow align="center">
        <VCol>
          <h3 class="text-h4 mb-6">Corporate Event</h3>
          <p class="text-body-1 font-weight-medium text-black">Manager Package</p>
          <p class="text-body-1 font-weight-medium text-black">CEO Package</p>
        </VCol>
        <VCol cols="auto">
          <VBtn variant="outlined" color="black" size="x-large" @click="isDrawerVisible = true">Details</VBtn>
        </VCol>
      </VRow>
    </VCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDrawerVisible = ref(false)
</script>

<style>
.packages-wrap .package-item p:last-of-type {
  margin-bottom: 0;
}
</style>
