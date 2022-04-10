import { Application, IBoot } from "egg";
import { createConnection } from "mongoose";
import assert from "assert";
import dotenv from "dotenv";
dotenv.config();

export default class AppBootstrap implements IBoot {
  private readonly app: Application;
  //  参数 的类型必须传递，否则推导出来的 app 是 any
  constructor(app: Application) {
    this.app = app;
    const { url } = this.app.config.mongoose;
    assert(url, "[egg-mongoose] url is required in config");

    //  使用 createConnection 而不是用 connect 的原因：可以对 app 的扩展
    const db = createConnection(url);
    db.on("connected", () => {
      app.logger.info(`[egg-mongoose] ${url} connected successfully`);
    });

    app.mongoose = db;
  }

  configWillLoad() {
    this.app.config.coreMiddleware.unshift("log");
  }
  async willReady() {
    // this.app.logger.info("enable willReady", this.app.config.coreMiddleware);
  }

  async didReady() {
    // const ctx = await this.app.createAnonymousContext();
    // const res = await ctx.model.Render.findAll({});
    // ctx.logger.debug(res);
  }
}
