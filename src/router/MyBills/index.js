const routes = [
  {
    path: "/mybills",
    name: "mybills",
    component: () => import("@/pages/mybills/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "My Bills",
    },
  },
  {
    path: "/mybill/invoice",
    name: "mybill-invoice",
    component: () => import("@/pages/mybills/Invoice.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "My Bills",
    },
  },
  {
    path: "/mybill/payment",
    name: "mybill-payment",
    component: () => import("@/pages/mybills/Payment.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "My Bills",
    },
  },
]
  
export default routes
    