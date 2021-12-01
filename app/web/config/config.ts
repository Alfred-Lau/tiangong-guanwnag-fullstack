import pageRoutes from "./router.config";

export default {
  // add for transfer to umi
  targets: {
    ie: 11,
  },
  define: {
    APP_TYPE: process.env.APP_TYPE || "",
  },
  // 路由配置
  routes: pageRoutes,
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn

  // extra configuration for egg
  runtimePublicPath: true,
  // hash: true,
  outputPath: "../public",
};
