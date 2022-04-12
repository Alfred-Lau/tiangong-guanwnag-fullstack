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

    return ctx.model.User.create(userCreateData);
  }

  async findById(id: string) {
    const result = await this.ctx.model.User.findById(id);
    if (result) {
      result._id;
    }
    return result;
  }
}

export default UserService;
