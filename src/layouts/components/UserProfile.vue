<script setup>
import avatar1 from "@images/avatars/avatar-16.png"
import useAuth from "@/composables/useAuth.js"
import useToastPlugin from "@/composables/vue-toastification.js"

const { logout } = useAuth()

const $toast = useToastPlugin()
const $loading = inject("loadingOverlay")
const router = useRouter()

const logoutUser = async () => {
  let loading = $loading.show()
  await logout()
  $toast.success("Logout successful")
  loading.hide()
  router.push({ name: "login" })
}
</script>

<template>
  <VMenu
    width="230"
    location="bottom end"
    offset="14px"
  >
    <template #activator="{ props }">
      <VBtn
        type="button"
        color="#272727"
        density="default"
        variant="outlined"
        rounded="lg"
        elevation="0"
        class="px-3"
        v-bind="props"
      >
        <VAvatar
          class="cursor-pointer"
          color="primary"
          variant="tonal"
        >
          <VImg :src="avatar1" />
        </VAvatar>
        <div class="text-left ms-3">
          <strong class="d-block text-body-2 font-weight-semibold">Jeremy Sanderson</strong>
          <small class="d-block font-weight-regular">Client</small>
        </div>
      </VBtn>
    </template>
    <VList>
      <!-- 👉 User Avatar & Name -->
      <VListItem>
        <template #prepend>
          <VListItemAction start>
            <VBadge
              dot
              location="bottom right"
              offset-x="3"
              offset-y="3"
              color="success"
            >
              <VAvatar
                color="primary"
                variant="tonal"
              >
                <VImg :src="avatar1" />
              </VAvatar>
            </VBadge>
          </VListItemAction>
        </template>

        <VListItemTitle class="font-weight-semibold">
          Jeremy Sanderson
        </VListItemTitle>
        <VListItemSubtitle>Client</VListItemSubtitle>
      </VListItem>

      <VDivider class="my-2" />

      <!-- 👉 Profile -->
      <VListItem
        link
        :to="{ name: 'peronal-information' }"
      >
        <template #prepend>
          <VIcon
            class="me-2"
            icon="tabler-user"
            size="22"
          />
        </template>

        <VListItemTitle>Profile</VListItemTitle>
      </VListItem>

      <!-- 👉 Settings -->
      <VListItem link>
        <template #prepend>
          <VIcon
            class="me-2"
            icon="tabler-settings"
            size="22"
          />
        </template>

        <VListItemTitle>Settings</VListItemTitle>
      </VListItem>

      <!-- 👉 Pricing -->
      <VListItem link>
        <template #prepend>
          <VIcon
            class="me-2"
            icon="tabler-currency-dollar"
            size="22"
          />
        </template>

        <VListItemTitle>Pricing</VListItemTitle>
      </VListItem>

      <!-- 👉 FAQ -->
      <VListItem link>
        <template #prepend>
          <VIcon
            class="me-2"
            icon="tabler-help"
            size="22"
          />
        </template>

        <VListItemTitle>FAQ</VListItemTitle>
      </VListItem>

      <!-- Divider -->
      <VDivider class="my-2" />

      <!-- 👉 Logout -->
      <VListItem
        link
        @click="logoutUser"
      >
        <template #prepend>
          <VIcon
            class="me-2"
            icon="tabler-logout"
            size="22"
          />
        </template>

        <VListItemTitle>Logout</VListItemTitle>
      </VListItem>
    </VList>
  </VMenu>
</template>
