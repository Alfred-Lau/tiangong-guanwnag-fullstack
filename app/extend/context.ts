import { Context } from "egg";
import fs from "fs/promises";

const API_REG = /^\/api\//;
const BAIDU_SPIDER = /^BAIDU_SPIDER/;

type ErrorResponseType = {
  errno: number;
  msg?: any;
};

type SuccessResponseType = {
  data: any;
  msg?: any;
};

export default {
  isAPI(this: Context) {
    return API_REG.test(this.path);
  },
  isSpider(this: Context) {
    const ua = this.headers["user-agent"] || "";
    return BAIDU_SPIDER.test(ua);
  },
  _validate(params: Record<string, any>): boolean {
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

  success(this: Context, { data, msg }: SuccessResponseType) {
    this.logger.error(msg);
    this.body = {
      data,
      msg: msg ? msg : "验证成功",
    };
    this.status = 200;
  },
  error(this: Context, { errno, msg }: ErrorResponseType) {
    this.logger.error(msg);
    this.body = {
      errno,
      msg: msg ? msg : "验证失败",
    };
    this.status = 200;
  },
  warn(this: Context, msg: string) {
    this.logger.warn(msg);
  },
};
