export default [
  {
    path: "/",
    component: "../layouts/BasicLayout",
    routes: [
      {
        path: "/",
        component: "index",
      },
      {
        path: "/about",
        component: "about",
      },
    ],
  },
  { component: "404" },
];
