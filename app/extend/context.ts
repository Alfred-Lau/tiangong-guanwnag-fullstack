import { Context } from "egg";

export default {
  isAPI(this: Context) {
    console.log(this.path);
  },
  isSpider(this: Context) {
    console.log(this.headers["user-agent"]);
  },
};
