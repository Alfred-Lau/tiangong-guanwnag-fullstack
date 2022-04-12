import { Controller } from "egg";

const UserCreateRules = {
  username: "email",
  password: { type: "password", min: 9 },
};

class UserController extends Controller {
  public async createByEmail() {
    const { ctx, service, app } = this;
    //  validate 是要放在 controller 上面进行的
    // ctx.validate(UserCreateRules);  // 方法一
    const errors = app.validator.validate(UserCreateRules, ctx.request.body);
    if (errors) {
      return ctx.error({ errno: 10001, msg: errors });
    }

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
