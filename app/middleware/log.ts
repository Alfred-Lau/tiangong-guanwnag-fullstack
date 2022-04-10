import { Application, Context, EggAppConfig } from "egg";
import path from "path";
import fs from "fs";

export default (options: EggAppConfig["log"], app: Application) => {
  return async (ctx: Context, next: () => Promise<any>) => {
    const { pages, basePath } = options;
    const url = ctx.path;
    try {
      if (!ctx.isAPI()) {
        if (url && ctx.isSpider()) {
          const target = pages.find((p) => p.path === url);

          if (target) {
            const { name } = target;
            const file = path.join(basePath, name);
            if (fs.existsSync(file))
              ctx.body = await ctx.view.render(`seo/${name}`, {
                name: "青岛湖",
              });
            return;
          }
        }
      }
    } catch (e) {
      ctx.logger.error(e);
    }

    await next();
  };
};
