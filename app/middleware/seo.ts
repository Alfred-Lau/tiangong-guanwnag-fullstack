export default (options) => {
  return async (ctx, next) => {
    console.log("w我是中间件", options, ctx);
    await next();
  };
};
