import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
import path from "path";

const d = new Date();
const folderName = `${d.getDay()}-${d.getHours()}`;

function join(...args) {
  return path.join(...args);
}

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

  config.cors = {
    origin: "*",
  };

  // add your egg config in here
  config.middleware = ["log", "seo"];

  config.view = {
    mapping: {
      ".html": "nunjucks",
    },
  };

  config.logger = {
    consoleLevel: "DEBUG",
  };

  config.sequelize = {
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "liujian10086",
    port: 3306,
    database: "tiangongtest",
  };

  config.assets = {
    templatePath: path.join(appInfo.baseDir, "app/view/index.html"),
    // templateViewEngine: "nunjucks",
    publicPath: "/public",
    devServer: {
      autoPort: true,
      command: "umi dev --port={port}",
      port: 8000,
      env: {
        APP_ROOT: process.cwd() + "/app/web",
        BROWSER: "none",
        // SOCKET_SERVER: "http://127.0.0.1:{port}",
        SOCKET_SERVER: "http://127.0.0.1:8000",
        PUBLIC_PATH: "http://127.0.0.1:8000",
      },
      debug: true,
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    log: {
      level: "error",
      match: "/api",
    },
    // seo 部分的支持

    seo: {
      site: "https://lazy-minus-your-intelligence.com",
      basePath: join(appInfo.baseDir, "app", "view"),
      // 需要 进行seo的页面 url 和 对应模板名称
      pages: [{ path: "/", name: "index.html" }],
    },

    // render 基础的配置
    render: {
      basePath: join(appInfo.baseDir, "app", "public", folderName),
      site: "https://lazy-minus-your-intelligence.com",
      pages: [{ path: "/", name: "index.html" }],
    },

    h5render: {
      device: {
        height: 3000,
        width: 1800,
      },
    },

    storage: {
      oss: {
        //大文件上传
      },
    },

    // 下载配置
    download: {
      downloadPath: join(appInfo.baseDir, "app/download"),
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...(config as {}),
    ...bizConfig,
  };
};
