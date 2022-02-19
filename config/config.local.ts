import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
import path from "path";

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {};
  // seo 部分的支持
  config.seo = {
    site: "http://localhost:8000",
    basePath: path.join(appInfo.baseDir, "app", "view"),
    // 需要 进行seo的页面 url 和 对应模板名称
    pages: [{ path: "/home", name: "home.html" }],
  };
  return config;
};
