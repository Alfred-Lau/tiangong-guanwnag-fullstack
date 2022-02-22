import { Service } from "egg";

export default class LogService extends Service {
  public async postLog(data: any) {
    return {
      ...data,
    };
  }
}
