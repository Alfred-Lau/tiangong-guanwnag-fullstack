import { Context } from "egg";

export default {
  schedule: {
    interval: "1d", // 10s 间隔
    type: "all", // 指定所有的 worker 都需要执行
  },
  async task(ctx: Context) {
    // const res = await ctx.curl("http://localhost:7002/api/todo", {
    //   dataType: "json",
    // });
    const res = { data: [] };

    if (ctx.app.config.env === "local") {
      ctx.logger.info(`本地环境开始静态生成页面`);
      await ctx.service.seo.renderStaticPage();
      ctx.app.cache = res.data;
    }
  },
};
