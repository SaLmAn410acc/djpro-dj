const routes = [
  {
    path: "/inbox",
    name: "inbox",
    component: () => import("@/pages/inbox/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Inbox",
    },
  },
];
export default routes;
