import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  // 工具相关接口
  router.get(
    "tools/upload",
    "/api/v1/tools/upload",
    controller.tools.upload.uploadToOSS
  );

  // 框架相关接口
  router.get(
    "framework/features",
    "/api/v1/framework",
    controller.api.framework.getFramework
  );

  // 文档相关接口
  router.get(
    "获取目录列表",
    "/api/v1/doc/category",
    controller.api.doc.getCategory
  );

  // 上报相关接口
  router.post("log/postLog", "/api/v1/log", controller.api.log.postLog);

  // 工程化相关接口
  router.get(
    "engine/render",
    "/render/t/p/:pageId",
    controller.tools.render.render
  );
  router.get(
    "engine/preview",
    "/preview/:url",
    controller.tools.preview.preview
  );

  // 模板页面【该页面要生效，不可以使用 router.prefix 来进行前缀，这是全栈框架和api bff的区别】
  router.get("home", "*", controller.pages.home.index);
};
