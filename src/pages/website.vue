<script setup>
import { useRoute, useRouter } from 'vue-router'
const location = useRoute();
const router = useRouter();
</script>

<template>
  <div>
    <nav :style="location.path === '/about' ? 'background: red' : ''">
      <div v-for="(route, index) in router.options.routes" :key="index">
        <ul class="list-none">
          <li>
            <router-link :to="route.path">
              {{ route.meta.title }} {{ route.path }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
