import { Controller } from "egg";

export default class RenderController extends Controller {
  public async render() {
    const { ctx } = this;
    // await ctx.render("index.html");
    ctx.body = ctx.params.pageId;
  }
}
