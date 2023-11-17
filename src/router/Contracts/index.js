const routes = [
  {
    path: "/contracts",
    name: "contracts",
    component: () => import("@/pages/contracts/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Contracts",
    },
  },
  {
    path: "/contract/details",
    name: "contract-details",
    component: () => import("@/pages/contracts/Details.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Contracts",
    },
  },
  
]

export default routes
