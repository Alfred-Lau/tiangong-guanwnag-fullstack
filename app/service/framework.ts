import { Service } from "egg";

export default class Framework extends Service {
  public async getFramework(params?: any): Promise<TianGong.FrameworkModel> {
    const features = [
      "静态页面生成",
      "服务端文件生成能力",
      "文件上传下载",
      "接口基础防爬能力",
    ];
    this.ctx.logger.info(params);
    return Promise.resolve({ features });
  }
}
