<script setup>
import navItems from "@/navigation/vertical"
import { useThemeConfig } from "@core/composable/useThemeConfig"

// Components
import Footer from "@/layouts/components/Footer.vue"
import NavbarThemeSwitcher from "@/layouts/components/NavbarThemeSwitcher.vue"
import UserProfile from "@/layouts/components/UserProfile.vue"

// @layouts plugin
import { VerticalNavLayout } from "@layouts"

const { appRouteTransition, isLessThanOverlayNavBreakpoint } = useThemeConfig()
const { width: windowWidth } = useWindowSize()
</script>

<template>
  <VerticalNavLayout :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <IconBtn
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          id="vertical-nav-toggle-btn"
          class="ms-n3"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon
            size="26"
            icon="tabler-menu-2"
          />
        </IconBtn>
        <!-- <NavbarThemeSwitcher /> -->

        <!--
          <VBtn
          type="button"
          color="#272727"
          density="default"
          variant="outlined"
          rounded="lg"
          elevation="0"
          :to="{ name: 'events' }"
          >
          <VIcon
          size="26"
          icon="tabler-calendar"
          color="primary"
          class="mr-2"
          />
          May 03, 2023
          </VBtn>
        -->

        

        <VBtn
          type="button"
          color="#272727"
          density="default"
          variant="outlined"
          rounded="lg"
          elevation="0"
          class="mr-3"
        >
          <VBadge
            dot
            color="primary"
          >
            <VIcon
              size="30"
              icon="tabler-mail"
              color="#272727"
            />
          </VBadge>
        </VBtn>

        <VSpacer />

        <UserProfile />
      </div>
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>
