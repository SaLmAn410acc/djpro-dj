const routes = [
  {
    path: "/disc-jockeys",
    name: "disc-jockeys",
    component: () => import("@/pages/disc-jockeys/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Disc Jockeys",
    },
  },
  {
    path: "/disc-jockeys/:slug",
    name: "disc-jockey-view",
    component: () => import("@/pages/disc-jockeys/view/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Disc Jockeys",
    },
  },
  {
    path: "/disc-jockeys/:slug/edit",
    name: "disc-jockey-edit",
    component: () => import("@/pages/disc-jockeys/edit/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Disc Jockeys",
    },
  },
  {
    path: "/disc-jockeys/:slug/edit/packages",
    name: "disc-jockey-packages-edit",
    component: () => import("@/pages/disc-jockeys/edit/packages/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Disc Jockeys",
    },
  },
];
export default routes;
