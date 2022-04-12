import { Controller } from "egg";

export default class RenderController extends Controller {
  public async render() {
    const { ctx } = this;
    // await ctx.render("index.html");
    ctx.body = ctx.params.pageId;
  }

  public async record() {
    const { ctx } = this;

    try {
      const dogs = await ctx.app.axiosInstance.get("/api/breeds/image/random");
      // console.log(dogs.data);
      ctx.logger.debug(dogs.data);
      // ctx.logger.info(dogs.data);
      // ctx.logger.warn(dogs.data);
      // ctx.logger.error(dogs.data);
      ctx.body = await ctx.mysqlModel.Render.findAll({});
    } catch (e) {
      ctx.body = ctx.formatControllerResponse(e as string, "error");
    }
  }

  public async getMongoPlayers() {
    const { ctx } = this;
    try {
      ctx.body = await ctx.service.render.showPlayers();
    } catch (error) {
      ctx.logger.error(error);
      ctx.body = ctx.formatControllerResponse(error as string, "error");
    }
  }

  public async snapshot() {
    const { ctx } = this;

    try {
      const { success, filepath } = await ctx.service.render.snapshot();
      if (success) {
        const uploadResult = await ctx.service.oss.upload(filepath);
        await ctx.service.render.insertRecords(uploadResult);
        ctx.body = await ctx.mysqlModel.Render.findAll({});
      } else {
        ctx.body = ctx.formatControllerResponse("截图失败", "error");
      }
    } catch (e) {
      ctx.logger.error(e);
    }
  }

  public async download() {
    const { ctx } = this;
    const { filename } = ctx.request.body;

    ctx._validate({
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
