import { Controller } from "egg";

export default class RenderController extends Controller {
  public async render() {
    const { ctx } = this;
    // await ctx.render("index.html");
    ctx.body = ctx.params.pageId;
  }

  public async snapshot() {
    const { ctx } = this;
    const { basePath } = ctx.app.config.render;
    ctx.logger.info("basePath", basePath);
  }
}
