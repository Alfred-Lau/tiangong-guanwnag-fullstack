import { Context } from "egg";

export default {
  isAPI(this: Context) {},
  isSpider(this: Context) {
    // console.log(this.headers["user-agent"]);
  },
};
