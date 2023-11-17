const routes = [
  {
    path: "/invoicing",
    name: "invoicing",
    component: () => import("@/pages/invoicing/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Invoicing",
    },
  },
  {
    path: "/invoicing/create-invoice",
    name: "invoicing-create-invoice",
    component: () => import("@/pages/invoicing/CreateInvoice.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Invoicing",
    },
  },
];
export default routes;
