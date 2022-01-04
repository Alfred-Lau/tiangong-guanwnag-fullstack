import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
import * as path from "path";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1638289748617_6665";

  // add your egg config in here
  config.middleware = [];
  config.view = {
    mapping: {
      ".html": "nunjucks",
    },
  };

  // seo 部分的支持
  config.seo = {
    site: "https://lazy-minus-your-intelligence.com/",
    basePath: path.join(appInfo.baseDir, "app", "view"),
    // 需要 进行seo的页面 url 和 对应模板名称
    pages: [{ path: "/", name: "home.html" }],
  };

  config.assets = {
    publicPath: "/public",
    devServer: {
      autoPort: true,
      command: "umi dev --port={port}",
      port: 7001,
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
