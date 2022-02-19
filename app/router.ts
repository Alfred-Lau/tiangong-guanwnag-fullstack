import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  // 工具相关接口
  router.get("tools/upload", "/api/v1/tools/upload", controller.home.index);

  // 框架相关接口
  router.get(
    "framework/features",
    "/api/v1/framework",
    controller.framework.getFramework
  );

  // 模板页面【该页面要生效，不可以使用 router.prefix 来进行前缀，这是全栈框架和api bff的区别】
  router.get("home", "*", controller.home.index);
};
