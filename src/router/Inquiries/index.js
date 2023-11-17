const routes = [
  {
    path: "/inquiries",
    name: "inquiries",
    component: () => import("@/pages/inquiries/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Inquiries",
    },
  },
 
  
  {
    path: "/inquiries/details",
    name: "inquiries-detail",
    component: () => import("@/pages/inquiries/Details.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Inquiries",
    },
  },

]

export default routes
