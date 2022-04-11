import { Controller } from "egg";

class UserController extends Controller {
  public async createByEmail() {
    const { ctx, service } = this;
    const userData = await service.user.createByEmail(ctx.request.body);
    ctx.body = ctx.formatControllerResponse(userData, "success");
  }

  async show() {
    const { ctx, service } = this;
    const userData = await service.user.findById(ctx.params.id);
    ctx.body = ctx.formatControllerResponse(userData, "success");
  }
}

export default UserController;
