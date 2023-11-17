<template>
  <div class="reviews-wrap my-6">
    <VCard variant="text" class="bg-grey-50 rounded-xxl pa-6 pa-lg-8 mb-6" v-for="n in 2" :key="n">
      <VRow class="mb-6 border-b pb-6">
        <VCol cols="6" lg="3">
          <p class="mb-1 text-body-2 font-weight-medium">
            Date
          </p>
          <div class="font-weight-medium text-body-1 text-black">
            10/14/2023
          </div>
        </VCol>
        <VCol cols="6" lg="3">
          <p class="mb-1 text-body-2 font-weight-medium">
            Event Type
          </p>
          <div class="font-weight-medium text-body-1 text-black">
            Private party
          </div>
        </VCol>
        <VCol cols="6" lg="2">
          <p class="mb-1 text-body-2 font-weight-medium">
            By
          </p>
          <div class="font-weight-medium text-body-1 text-black">
            Yanan X.
          </div>
        </VCol>
        <VCol cols="6" lg="4">
          <p class="mb-1 text-body-2 font-weight-medium">
            Location
          </p>
          <div class="font-weight-medium text-body-1 text-black">
            5010 Cass St suite k, Riverside, CA
          </div>
        </VCol>
      </VRow>
      <VRow class="mb-6 border-b pb-6">
        <VCol cols="12" md="3" lg="3">
          <p class="font-weight-medium text-body-1 text-black mb-2">
            Professionalism
          </p>
          <div class="star-rating">
            <VIcon v-for="n in 5" :key="n" color="yellow">mdi-star</VIcon>
          </div>
        </VCol>
        <VCol cols="12" md="3" lg="3">
          <p class="font-weight-medium text-body-1 text-black mb-2">
            Master of Ceremonies
          </p>
          <div class="star-rating">
            <VIcon v-for="n in 5" :key="n" color="yellow">mdi-star</VIcon>
          </div>
        </VCol>
        <VCol cols="12" md="3" lg="2">
          <p class="font-weight-medium text-body-1 text-black mb-2">
            Promptness
          </p>
          <div class="star-rating">
            <VIcon v-for="n in 5" :key="n" color="yellow">mdi-star</VIcon>
          </div>
        </VCol>
        <VCol cols="12" md="3" lg="2">
          <p class="font-weight-medium text-body-1 text-black mb-2">
            Sound Quality
          </p>
          <div class="star-rating">
            <VIcon v-for="n in 5" :key="n" color="yellow">mdi-star</VIcon>
          </div>
        </VCol>
        <VCol cols="12" md="3" lg="2">
          <p class="font-weight-medium text-body-1 text-black mb-2">
            Overall
          </p>
          <div class="star-rating">
            <VIcon v-for="n in 5" :key="n" color="yellow">mdi-star</VIcon>
          </div>
        </VCol>
      </VRow>
      <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.5498 6.87823H17.0213V2.11004H12.5498V6.87823ZM1.9718 6.87823H6.44323V2.11004H1.9718V6.87823ZM15.8806 14C15.3536 14 14.9576 13.7707 14.6926 13.312C14.4276 12.8533 14.4082 12.3755 14.6343 11.8786L15.9612 8.98087H12.5498C12.0028 8.98087 11.5374 8.77627 11.1537 8.36708C10.7699 7.95789 10.5781 7.46161 10.5781 6.87823V2.11004C10.5781 1.52463 10.7699 1.02661 11.1537 0.615976C11.5374 0.205325 12.0028 0 12.5498 0H17.0213C17.5703 0 18.0373 0.205325 18.4224 0.615976C18.8075 1.02661 19 1.52463 19 2.11004V8.65549C19 8.81426 18.9832 8.97254 18.9497 9.13033C18.9161 9.28812 18.8681 9.43711 18.8056 9.57731L17.1339 13.1707C17.0236 13.4266 16.8562 13.6287 16.6316 13.7772C16.4071 13.9257 16.1568 14 15.8806 14ZM5.30257 14C4.77601 14 4.37896 13.7707 4.11143 13.312C3.84392 12.8533 3.82551 12.3755 4.05621 11.8786L5.38308 8.98087H1.9718C1.42473 8.98087 0.959337 8.77627 0.575614 8.36708C0.191871 7.95789 0 7.46161 0 6.87823V2.11004C0 1.52463 0.191871 1.02661 0.575614 0.615976C0.959337 0.205325 1.42473 0 1.9718 0H6.44323C6.9903 0 7.4557 0.205325 7.83942 0.615976C8.22314 1.02661 8.415 1.52463 8.415 2.11004V8.65549C8.415 8.81426 8.39939 8.97305 8.36815 9.13184C8.33689 9.29062 8.29002 9.43911 8.22752 9.57731L6.55584 13.1707C6.44554 13.4266 6.27812 13.6287 6.0536 13.7772C5.82905 13.9257 5.57871 14 5.30257 14Z"
          fill="#C3C7CF" />
      </svg>
      <p class="text-subtitle-1 text-black font-italic">
        We did the last minute books but Anthony still pulled it off with over 300 songs from our playlist and did some
        tune and mixup~ their upstream light and projectors are awesome as well! Five star quality!
      </p>
    </VCard>
  </div>
</template>

<script setup>

</script>
