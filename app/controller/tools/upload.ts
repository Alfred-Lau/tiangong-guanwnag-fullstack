import { Controller } from "egg";

export default class Upload extends Controller {
  async uploadToOSS() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.logger.info(body);
  }
}
