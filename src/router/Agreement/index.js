const routes = [
  {
    path: "/agreement",
    name: "agreement",
    component: () => import("@/pages/agreement/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Agreement",
    },
  },
  {
    path: "/agreement/details",
    name: "agreement-details",
    component: () => import("@/pages/agreement/Details.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Agreement",
    },
  },
    
]
  
export default routes
  