import { Context } from "egg";

export default {
  isAPI(this: Context) {
    console.log(this.path);
  },
};
