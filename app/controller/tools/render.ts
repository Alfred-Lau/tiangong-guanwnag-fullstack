import { Controller } from "egg";

export default class RenderController extends Controller {
  public async render() {
    const { ctx } = this;
    // await ctx.render("index.html");
    ctx.body = ctx.params.pageId;
  }

  public async snapshot() {
    const { ctx } = this;

    let uploadResult;

    try {
      const { success, filepath } = await ctx.service.render.snapshot();
      if (success) {
        uploadResult = await ctx.service.oss.upload(filepath);
        // TODO: 上传数据传入数据库
        const insertResult = await ctx.service.render.insertRecords(
          uploadResult
        );

        ctx.info(insertResult as string);
      } else {
        uploadResult = null;
      }
    } catch (e) {
      ctx.logger.error(e);
    }

    ctx.body = uploadResult;
  }

  public async download() {
    const { ctx } = this;
    const { filename } = ctx.request.body;

    ctx.validate({
      filename: "string",
    });

    try {
      const result = await ctx.service.oss.download(filename);
      ctx.body = ctx.formatControllerResponse(result, "success");
    } catch (e) {
      ctx.body = ctx.formatControllerResponse(e, "error");
    }
  }
}
