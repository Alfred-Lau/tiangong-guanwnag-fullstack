import { Context } from "egg";
import fs from "fs/promises";

const API_REG = /^\/api\//;
const BAIDU_SPIDER = /^BAIDU_SPIDER/;

export default {
  isAPI(this: Context) {
    return API_REG.test(this.path);
  },
  isSpider(this: Context) {
    const ua = this.headers["user-agent"] || "";
    return BAIDU_SPIDER.test(ua);
  },
  validate(params: Record<string, any>): boolean {
    let flag = false;
    for (const key in params) {
      const { type } = params[key];
      if (typeof key === type) {
        flag = true;
      }
    }
    return flag;
  },

  formatControllerResponse(result: any, type: "success" | "error") {
    if (type === "success") {
      return {
        success: true,
        errMsg: null,
        data: result,
      };
    } else {
      return {
        success: false,
        errMsg: result,
        data: null,
      };
    }
  },

  async ensurePath(basePath: string) {
    await fs.rm(basePath, {
      recursive: true,
      force: true,
    });

    try {
      await fs.access(basePath);
    } catch (e) {
      await fs.mkdir(basePath);
    }
  },
  info(this: Context, msg: string) {
    this.logger.info(msg);
  },
  error(this: Context, msg: string) {
    this.logger.error(msg);
  },
  warn(this: Context, msg: string) {
    this.logger.warn(msg);
  },
};
