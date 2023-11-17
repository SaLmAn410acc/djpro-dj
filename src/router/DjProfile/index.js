const routes = [
  {
    path: "/djprofile",
    name: "djprofile",
    component: () => import("@/pages/djprofile/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "djprofile",
    },
  },
  {
    path: "/djprofile/add-new-package",
    name: "djprofile-addnewpackage",
    component: () => import("@/pages/djprofile/PackageDetails.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "djprofile",
    },
  },
  {
    path: "/djprofile/custompackage",
    name: "djprofile-custompackage",
    component: () => import("@/pages/djprofile/CreateCustomPackage.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "djprofile",
    },
  },
      
]
    
export default routes
    