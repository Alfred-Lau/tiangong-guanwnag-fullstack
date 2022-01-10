export default {
  schedule: {
    interval: "1m", // 1 分钟间隔
    type: "all", // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    const res = await ctx.curl("https://jsonplaceholder.typicode.com/todos/1", {
      dataType: "json",
    });
    ctx.app.cache = res.data;
  },
};
