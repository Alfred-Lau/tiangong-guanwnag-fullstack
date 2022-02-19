import { Context } from "egg";

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
};
