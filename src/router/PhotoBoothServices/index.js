const routes = [
  {
    path: "/photo-booth-services",
    name: "photo-booth-services",
    component: () => import("@/pages/photo-booth-services/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Photo Booth Services",
    },
  },
  {
    path: "/photo-booth-services/add-new",
    name: "photo-booth-service-add",
    component: () => import("@/pages/photo-booth-services/add-new.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Add New Photo Booth Service",
    },
  },
  {
    path: "/photo-booth-services/product/:slug",
    name: "photo-booth-service-product",
    component: () => import("@/pages/photo-booth-services/Product/edit.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Photo Booth Service",
    },
  },
];
export default routes;
