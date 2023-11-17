const routes = [
  {
    path: "/dj-products",
    name: "dj-products",
    component: () => import("@/pages/dj-products/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Dj Products",
    },
  },
  {
    path: "/dj-products/product/:slug",
    name: "dj-product-edit",
    component: () => import("@/pages/dj-products/Product/edit.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Edit DJ Product",
    },
  },
  {
    path: "/dj-products/add-new",
    name: "dj-product-add",
    component: () => import("@/pages/dj-products/add-new.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Add New DJ Product",
    },
  },
  {
    path: "/dj-products/wedding/:slug",
    name: "dj-product-wedding",
    component: () => import("@/pages/dj-products/WeddingPackages/edit.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Wedding",
    },
  },

  {
    path: "/dj-products/quinceanera/:slug",
    name: "dj-product-quinceanera",
    component: () => import("@/pages/dj-products/QuinceaneraPackages/edit.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Quinceanera",
    },
  },
  {
    path: "/dj-products/school-dance/:slug",
    name: "dj-product-school-dance",
    component: () => import("@/pages/dj-products/SchoolDancePackages/edit.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "School Dance",
    },
  },
  {
    path: "/dj-products/private-party/:slug",
    name: "dj-product-private-party",
    component: () =>
      import("@/pages/dj-products/PrivatePartyPackages/edit.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Private Party",
    },
  },
  {
    path: "/dj-products/corporate/:slug",
    name: "dj-product-corporate",
    component: () => import("@/pages/dj-products/CorporatePackages/edit.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Corporate Packages",
    },
  },
  {
    path: "/dj-products/debuntante-ball/:slug",
    name: "dj-product-debuntante-ball",
    component: () =>
      import("@/pages/dj-products/DebutanteBallPackages/edit.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Debutante Ball",
    },
  },
];
export default routes;
