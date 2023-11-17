const routes = [
  {
    path: "/myevents",
    name: "myevents",
    component: () => import("@/pages/myevents/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "My Events",
    },
  },
  {
    path: "/myevents/details",
    name: "myevents-details",
    component: () => import("@/pages/myevents/Details.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "My Events Details",
    },
  },
]

export default routes
  