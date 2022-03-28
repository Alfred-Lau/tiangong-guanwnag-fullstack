export default [
  {
    path: "/",
    name: "BasicLayout",
    component: "../layouts/BasicLayout",
    routes: [
      {
        path: "/",
        name: "home",
        component: "home",
      },
      {
        path: "/about",
        name: "about",
        component: "about",
      },
      {
        path: "/doc",
        name: "doc",
        component: "doc",
      },
    ],
  },
  { component: "404" },
];
