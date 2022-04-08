import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  // 工具相关接口
  // 上传接口
  router.get("/api/v1/tools/upload", controller.tools.upload.uploadToOSS);

  // 框架相关接口
  // framework/features
  router.get("/api/v1/framework", controller.api.framework.getFramework);

  // 文档相关接口
  // 获取目录列表
  router.get("/api/v1/doc/category", controller.api.doc.getCategory);

  // 上报相关接口
  router.post("log/postLog", "/api/v1/log", controller.api.log.postLog);

  // 工程化相关接口
  // render 服务
  router.get("/api/render/t/p/:pageId", controller.tools.render.render);
  // 预览 服务
  router.get("/api/preview/:url", controller.tools.preview.preview);
  // 巡检服务 【定时触发、接口触发】
  router.get("/api/render/snapshot", controller.tools.render.snapshot);

  // 模板页面【该页面要生效，不可以使用 router.prefix 来进行前缀，这是全栈框架和api bff的区别】
  router.get("home", "*", controller.pages.home.index);
};
