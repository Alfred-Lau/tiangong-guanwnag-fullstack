import { Controller } from "egg";

export default class FrameworkController extends Controller {
  /**
   * 获取框架特性
   */
  public async getFramework() {
    const { ctx } = this;
    // 标准接口使用写法
    const createRule = {
      title: { type: "string" },
      content: { type: "string" },
    };
    // 校验参数
    ctx.validate(createRule);
    // 组装参数
    const author = ctx.session.userId;
    const req = Object.assign(ctx.request.body, { author });
    // 调用 Service 进行业务处理
    const result = await ctx.service.framework.getFramework(req);
    // 设置响应内容和响应状态码
    ctx.body = result;

    ctx.status = 200;
    ctx.set("Content-Type", "application/json;charset=UTF-8");
  }
}
