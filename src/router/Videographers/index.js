const routes = [
  {
    path: "/videographers",
    name: "videographers",
    component: () => import("@/pages/videographers/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Videographers",
    },
  },
  {
    path: "/videographers/:slug",
    name: "videographer-view",
    component: () => import("@/pages/videographers/view/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Videographers",
    },
  },
  {
    path: "/videographers/:slug/edit",
    name: "videographer-edit",
    component: () => import("@/pages/videographers/edit/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Videographers",
    },
  },
];
export default routes;
