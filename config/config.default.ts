import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
import * as path from "path";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1638289748617_6665";

  config.security = {
    csrf: {
      enable: false,
      // queryName: "_csrf", // 通过 query 传递 CSRF token 的默认字段为 _csrf
      // bodyName: "_csrf", // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
  };

  // add your egg config in here
  config.middleware = ["seo"];

  config.view = {
    mapping: {
      ".html": "nunjucks",
    },
  };

  // seo 部分的支持
  config.seo = {
    site: "https://lazy-minus-your-intelligence.com",
    basePath: path.join(appInfo.baseDir, "app", "view"),
    // 需要 进行seo的页面 url 和 对应模板名称
    pages: [{ path: "/home", name: "home.html" }],
  };

  config.storage = {
    oss: {
      //大文件上传
    },
  };

  config.assets = {
    publicPath: "/public",
    devServer: {
      autoPort: true,
      command: "umi dev --port={port}",
      port: 8000,
      env: {
        APP_ROOT: process.cwd() + "/app/web",
        BROWSER: "none",
        // SOCKET_SERVER: "http://127.0.0.1:{port}",
      },
      debug: true,
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
