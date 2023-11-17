const routes = [
  {
    path: "/administrators",
    name: "administrators",
    component: () => import("@/pages/administrators/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Administrators",
    },
  },
  {
    path: "/administrators/:slug",
    name: "administrator-view",
    component: () => import("@/pages/administrators/view/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Administrators",
    },
  },
];
export default routes;
