<template>
  <div class="py-8">
    <VForm class="mt-6 mt-lg-0">
      <VRow>
        <VCol
          cols="12"
          sm="6"
          lg="3"
        >
          <label class="font-weight-semibold text-black mb-2 d-inline-block">DJ Name</label>
          <VTextField
            v-model="userData.customName"
            density="comfortable"
            variant="outlined"
            :rules="[requiredValidator]"
          />
        </VCol>
      </VRow>
      <VRow
        class="mt-6"
        align="end"
      >
        <VCol
          cols="12"
          sm="6"
          lg="3"
        >
          <label class="font-weight-semibold text-black mb-2 d-inline-block">Event Types</label>
          <VTextField
            v-model="userData.eventType"
            density="comfortable"
            variant="outlined"
            placeholder="Type Event Title"
          >
            <template #append-inner>
              <VBtn
                variant="text"
                class="px-2"
                density="compact"
                @click="addEventItemInArray"
              >
                <VIcon
                  color="primary"
                  size="24"
                >
                  ph:plus-square
                </VIcon>
              </VBtn>
            </template>
          </VTextField>
        </VCol>
        <VCol
          
          cols="auto"
          class="px-2"
        >
          <VBtn
            color="#F8F8FA"
            variant="flat"
            class="text-black"
            @click="removeEventItemFromArray(index)"
          >
            <span>Wedding Ceremony</span>
            <VIcon class="ms-3">
              ph:x-bold
            </VIcon>
          </VBtn>

          <VBtn
            color="#F8F8FA"
            variant="flat"
            class="text-black"
            @click="removeEventItemFromArray(index)"
          >
            <span>Wedding Reception </span>
            <VIcon class="ms-3">
              ph:x-bold
            </VIcon>
          </VBtn>

          <VBtn
            color="#F8F8FA"
            variant="flat"
            class="text-black"
            @click="removeEventItemFromArray(index)"
          >
            <span>Engagement Party </span>
            <VIcon class="ms-3">
              ph:x-bold
            </VIcon>
          </VBtn>

          <VBtn
            color="#F8F8FA"
            variant="flat"
            class="text-black"
            @click="removeEventItemFromArray(index)"
          >
            <span>Renewal of Vows</span>
            <VIcon class="ms-3">
              ph:x-bold
            </VIcon>
          </VBtn>

          <VBtn
            color="#F8F8FA"
            variant="flat"
            class="text-black"
            @click="removeEventItemFromArray(index)"
          >
            <span>Anniversary</span>
            <VIcon class="ms-3">
              ph:x-bold
            </VIcon>
          </VBtn>
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <label class="font-weight-semibold text-black mb-2 d-inline-block">Bio</label>
          <VTextarea
            v-model="userData.bio"
            density="comfortable"
            variant="outlined"
            rows="16"
            :rules="[requiredValidator]"
          />
        </VCol>
      </VRow>
      <VRow class="mt-6">
        <VCol cols="12">
          <h3 class="text-h5">
            Social Media
          </h3>
        </VCol>
        <VCol
          cols="12"
          lg="7"
        >
          <VCard
            class="mb-3"
            variant="outlined"
          >
            <VCardText class="pa-3">
              <VRow
                align="center"
                dense
              >
                <VCol>
                  <div class="d-flex align-center gap-x-3 font-weight-semibold text-black text-body-2">
                    <VIcon size="30">
                      ic:baseline-facebook
                    </VIcon>
                    <span>Facebook</span>
                  </div>
                </VCol>
                <VCol cols="auto">
                  <div class="d-flex align-center text-black gap-x-3 text-body-2">
                    <span>@https://www.facebook.com/profile.php?id=104039450043515</span>
                    <VIcon
                      size="20"
                      @click="() => {}"
                    >
                      ph:x-bold
                    </VIcon>
                  </div>
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
          <VCard
            class="mb-3"
            variant="outlined"
          >
            <VCardText class="pa-3">
              <VRow
                align="center"
                dense
              >
                <VCol>
                  <div class="d-flex align-center gap-x-3 font-weight-semibold text-black text-body-2">
                    <VIcon size="30">
                      ri:pinterest-fill
                    </VIcon>
                    <span>Pinterest</span>
                  </div>
                </VCol>
                <VCol cols="auto">
                  <VBtn
                    color="primary"
                    density="compact"
                    size="x-large"
                  >
                    <span class="font-weight-medium">Link</span>
                  </VBtn>
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
          <VCard
            class="mb-3"
            variant="outlined"
          >
            <VCardText class="pa-3">
              <VRow
                align="center"
                dense
              >
                <VCol>
                  <div class="d-flex align-center gap-x-3 font-weight-semibold text-black text-body-2">
                    <VIcon size="30">
                      ri:instagram-line
                    </VIcon>
                    <span>Instagram</span>
                  </div>
                </VCol>
                <VCol cols="auto">
                  <VBtn
                    color="primary"
                    density="compact"
                    size="x-large"
                  >
                    <span class="font-weight-medium">Link</span>
                  </VBtn>
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VForm>
  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "@axios"
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
} from "@validators"

import useToastPlugin from "@/composables/vue-toastification.js"

const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})

const $toast = useToastPlugin()
const $loading = inject("loadingOverlay")

const roleTypes = ["Dj", "Videographer", "Photographer", "Administrator"]

const addEventItemInArray = () => {
  if (props.userData.eventType) {
    props.userData.eventTypes.push(props.userData.eventType)
    props.userData.eventType = ""
  }
}

const removeEventItemFromArray = index => {
  props.userData.eventTypes.splice(index, 1)
}

const socialMediaOptions = [
  "facebook",
  "pinterest",
  "instagram",
  "youtube",
  "twitter",
  "linkedin",
]
</script>
