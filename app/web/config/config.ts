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
  theme: {
    "@primary-color": "#1DA57A",
  },

  // extra configuration for egg
  runtimePublicPath: true,
  // hash: true,
  outputPath: "../public",
  title: "天工官网全栈框架",
  favicon:
    "https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/favicon.ico",
  // antd: {
  //   dark: true,
  // },

  //  性能优化部分
  // dynamicImport: {},
};
