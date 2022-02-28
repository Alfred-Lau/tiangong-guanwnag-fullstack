import { Controller } from "egg";

export default class LogController extends Controller {
  public async postLog() {
    const { ctx } = this;
    const data = ctx.request.body;

    // 调用 Service 进行业务处理
    ctx.body = await ctx.service.log.postLog(data);

    // 设置响应内容和响应状态码
    ctx.status = 200;
    ctx.set("Content-Type", "application/json;charset=UTF-8");
  }
}
