import { Context } from "egg";

export default {
  schedule: {
    interval: "10s", // 1 分钟间隔
    type: "all", // 指定所有的 worker 都需要执行
  },
  async task(ctx: Context) {
    const res = await ctx.curl("https://jsonplaceholder.typicode.com/todos/1", {
      dataType: "json",
    });
    await ctx.service.seo.renderStaticPage();
    ctx.app.cache = res.data;
  },
};
