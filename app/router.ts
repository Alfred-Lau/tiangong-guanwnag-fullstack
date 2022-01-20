import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  router.prefix("/api");
  router.get("tools/upload", "/tools/upload", controller.home.index);

  router.get("/", controller.tools.upload.uploadToOSS);
};
