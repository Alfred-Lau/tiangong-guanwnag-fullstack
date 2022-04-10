import { MockApplication } from "egg-mock";
import { factory } from "factory-girl";

export default (app: MockApplication) => {
  // 可以通过 app.factory 访问 factory 实例
  app.factory = factory;

  // 定义 render 和默认数据
  factory.define("render", app.model.Render, {
    name: factory.sequence("Render.name", (n) => `name_${n}`),
    url: factory.sequence("Render.url", (n) => `https://${n}`),
  });
};
