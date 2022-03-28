import { Service } from "egg";

export default class Framework extends Service {
  public async getFramework(params?: any): Promise<TianGong.FrameworkModel> {
    const features = [
      { id: 0, key: "/doc", title: "高级文档组件功能" },
      { id: 1, key: "/static", title: "静态页面生成" },
      { id: 2, key: "/genFile", title: "服务端文件生成能力" },
      { id: 3, key: "/file", title: "文件上传下载" },
      { id: 4, key: "/security", title: "接口基础防爬能力" },
    ];
    this.ctx.logger.info(params);
    return Promise.resolve({ features });
  }
}
