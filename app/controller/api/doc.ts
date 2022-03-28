import { Controller } from "egg";

export default class DocController extends Controller {
  /**
   * 获取框架特性
   */
  public async getCategory(): Promise<TianGong.Category> {
    return this.ctx.curl<TianGong.Category>("", {
      dataType: "json",
    });
  }
}
