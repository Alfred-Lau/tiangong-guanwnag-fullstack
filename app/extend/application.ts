import { Application } from "egg";
import Axios, { AxiosInstance } from "axios";

const AXIOS = Symbol("Application#Axios");

export default {
  // 对于方法的扩展
  echo(this: Application, msg: string) {
    console.log(msg, this.config);
  },
  // 对于属性的扩展，需要缓存
  get axiosInstance(): AxiosInstance {
    if (!this[AXIOS]) {
      this[AXIOS] = Axios.create({
        baseURL: "https://dog.ceo/",
        timeout: 5000,
      });
    }

    return this[AXIOS];
  },
};
