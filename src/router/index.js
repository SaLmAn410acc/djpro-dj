import { setupLayouts } from "virtual:generated-layouts"
import { createRouter, createWebHistory } from "vue-router"
import DiscJockeys from "./DiscJockeys"
import Videographers from "./Videographers"
import Photographers from "./Photographers"
import DjProducts from "./DjProducts"
import PhotoBoothServices from "./PhotoBoothServices"
import Inquiries from "./Inquiries"
import Proposals from "./Proposals"
import Contracts from "./Contracts"
import Invoicing from "./Invoicing"
import Administrators from "./Administrators"
import Inbox from "./Inbox"
import useAuth from "@/composables/useAuth"
import MyEvent from './MyEvents'
import MyBills from './MyBills'
import Agreement from './Agreement'
import DjProfile from './DjProfile'

const { isAuthenticated } = useAuth()

const routes = [
  ...DiscJockeys,
  ...Videographers,
  ...Photographers,
  ...DjProducts,
  ...PhotoBoothServices,
  ...Inquiries,
  ...Proposals,
  ...Contracts,
  ...Invoicing,
  ...Administrators,
  ...Inbox,
  ...MyEvent,
  ...MyBills,
  ...Agreement,
  ...DjProfile,
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/pages/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Dashboard",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login.vue"),
    meta: {
      auth: false,
      redirectIfLoggedIn: true,
      layout: "blank",
      title: "Login",
    },
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("@/pages/sign-up.vue"),
    meta: {
      auth: false,
      redirectIfLoggedIn: true,
      layout: "blank",
      title: "Sign Up",
    },
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("@/pages/reset-password.vue"),
    meta: {
      auth: false,
      redirectIfLoggedIn: true,
      layout: "blank",
      title: "Reset Password",
    },
  },
  {
    path: "/create-new-password",
    name: "create-new-password",
    component: () => import("@/pages/create-new-password.vue"),
    meta: {
      auth: false,
      redirectIfLoggedIn: true,
      layout: "blank",
      title: "Create New Password",
    },
  },
  {
    path: "/personal-information",
    name: "peronal-information",
    component: () => import("@/pages/personal-information.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Personal Information",
    },
  },
  {
    path: "/events",
    name: "events",
    component: () => import("@/pages/calendar.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Events",
    },
  },
  {
    path: "/website",
    name: "website",
    component: () => import("@/pages/website.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Website",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/pages/not-found.vue"),
    meta: {
      auth: true,
      layout: "blank",
      title: "Not Found",
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...setupLayouts(routes)],
})

// check if is authenticated
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (isAuthenticated()) {
      next()
    } else {
      next({ name: "login" })
    }
  } else if (to.meta.redirectIfLoggedIn && isAuthenticated()) {
    next({ name: "dashboard" })
  } else {
    next()
  }
})

export default router

// import { setupLayouts } from 'virtual:generated-layouts'
// import { createRouter, createWebHistory } from 'vue-router'
// import routes from '~pages'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     ...setupLayouts(routes),
//   ],
// })

// // Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
// export default router
