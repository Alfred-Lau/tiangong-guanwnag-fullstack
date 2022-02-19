export default [
  {
    path: "/",
    component: "../layouts/BasicLayout",
    routes: [
      {
        path: "/",
        component: "home",
      },
      {
        path: "/about",
        component: "about",
      },
    ],
  },
  { component: "404" },
];
