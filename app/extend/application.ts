import { Application } from "egg";

export default {
  echo(this: Application, msg: string) {
    console.log(msg, this.config);
  },
};
