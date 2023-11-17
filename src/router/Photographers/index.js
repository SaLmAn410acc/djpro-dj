const routes = [
  {
    path: "/photographers",
    name: "photographers",
    component: () => import("@/pages/photographers/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Photographers",
    },
  },
  {
    path: "/photographers/:slug",
    name: "photographer-view",
    component: () => import("@/pages/photographers/view/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Photographers",
    },
  },
  {
    path: "/photographers/:slug/edit",
    name: "photographer-edit",
    component: () => import("@/pages/photographers/edit/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Photographers",
    },
  },
  {
    path: "/photographers/:slug/edit/packages",
    name: "photographer-packages-edit",
    component: () => import("@/pages/photographers/edit/packages/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Photographers",
    },
  },
];
export default routes;
