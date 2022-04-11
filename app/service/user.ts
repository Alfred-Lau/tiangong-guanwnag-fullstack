import { Service } from "egg";
import { UserProps } from "../mongoModel/user";

class UserService extends Service {
  public async createByEmail(payload: UserProps) {
    const { ctx } = this;
    const { password, username } = payload;
    const userCreateData: Partial<UserProps> = {
      username,
      password,
      email: username,
    };

    return ctx.app.mongoModel.User.create(userCreateData);
  }

  async findById(id: string) {
    return this.ctx.app.mongoModel.User.findById(id);
  }
}

export default UserService;
