import { Service } from "egg";
import { Model } from "mongoose";
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
    const currentUserModel = this.ctx.app.mongoModel.User as Model<UserProps>;
    const result = await currentUserModel.findById(id);
    if (result) {
      result._id;
    }
    return result;
  }
}

export default UserService;
