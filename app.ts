import { Application, IBoot } from "egg";
import dotenv from "dotenv";
dotenv.config();

export default class AppBootstrap implements IBoot {
  private readonly app: Application;
  constructor(app) {
    this.app = app;
  }
  async willReady() {
    this.app.logger.info("beforeStart");
  }
}
