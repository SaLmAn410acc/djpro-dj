const routes = [
  {
    path: "/proposals",
    name: "proposals",
    component: () => import("@/pages/proposals/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Proposals",
    },
  },
  {
    path: "/proposal/:id",
    name: "proposal-details",
    component: () => import("@/pages/proposals/Details.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Proposal",
    },
  },
]

export default routes
