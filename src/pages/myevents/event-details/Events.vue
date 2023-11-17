<template>
  <div class="events-wrap my-6">
    <VCard variant="outlined" class="pa-4 mb-5" v-for="n in 3" :key="n">
      <VRow align="center" no-gutters>
        <VCol cols="12" lg="4">
          <div class="mr-8 mb-4 mb-lg-0 border-right-lg">
            <h4 class="text-h4 mb-3">Wedding</h4>
            <div class="d-flex">
              <VAvatar size="40" class="mr-3">
                <v-img src="../src/assets/images/avatars/avatar-1.png"></v-img>
              </VAvatar>
              <div class="user-info">
                <h5 class="text-h6">Patricia Sanderson</h5>
                <h6 class="text-subtitle-2">Videographer</h6>
              </div>
            </div>
          </div>
        </VCol>
        <VCol cols="12" lg="8">
          <VRow align="center">
            <VCol cols="12" md="4">
              <VRow no-gutters>
                <VCol cols="6" lg="12">
                  <div class="d-flex gap-x-2 icon-box">
                    <VIcon size="20" class="flex-0-0">carbon:calendar</VIcon>
                    <div class="font-weight-medium text-subtitle-2 text-lg-subtitle-1 text-black">
                      06/14/2023
                    </div>
                  </div>
                </VCol>
                <VCol cols="6" lg="12">
                  <div class="d-flex gap-x-2 icon-box">
                    <VIcon size="20" class="flex-0-0">ph:clock</VIcon>
                    <div class="font-weight-medium text-subtitle-2 text-lg-subtitle-1 text-black">
                      06/14/2023
                    </div>
                  </div>
                </VCol>
              </VRow>
            </VCol>
            <VCol cols="12" md="5">
              <div class="d-flex gap-x-2 icon-box">
                <VIcon size="20" class="flex-0-0">carbon:location</VIcon>
                <div class="font-weight-medium text-subtitle-2 text-lg-subtitle-1 text-black">
                  5010 Cass St suite k,
                  Riverside, California. 92109
                </div>
              </div>
            </VCol>
            <VCol cols="12" md="3">
              <div class="text-end">
                <VBtn variant="outlined" color="black" block>
                  Details
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </VCol>
      </VRow>
    </VCard>
  </div>
</template>

<script setup>
</script>

<style scoped>
.icon-box {
  line-height: 2;
}

.icon-box div {
  line-height: inherit;
}

.icon-box svg {
  margin-top: 5px;
}

@media (min-width: 1279px) {
  .border-right-lg {
    border-right: 1px solid #e0e0e0;
  }
}
</style>
