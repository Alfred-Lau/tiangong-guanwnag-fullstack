import { Application } from "egg";
import { Schema } from "mongoose";

export interface UserProps {
  username: string;
  password: string;
  email?: string;
  nickName?: string;
  picture?: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export default (app: Application) => {
  const UserSchema = new Schema<UserProps>(
    {
      username: { type: String, unique: true, required: true },
      password: { type: String },
      email: { type: String },
      nickName: { type: String },
      picture: { type: String },
      phoneNumber: { type: String },
    },
    { timestamps: true }
  );

  return app.mongoose.model<UserProps>("User", UserSchema);
};
