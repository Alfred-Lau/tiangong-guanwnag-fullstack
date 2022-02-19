import { Controller } from "egg";

export default class BaseController extends Controller {
  public success(data) {
    return {
      success: true,
      data,
    };
  }
}
