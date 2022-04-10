import { Application } from "egg";
import { Schema } from "mongoose";

export default (app: Application) => {
  const UserSchema = new Schema(
    {
      name: { type: String },
      age: { type: Number },
      hobbies: { type: Array },
    },
    { collection: "users" }
  );

  return app.mongoose.model("User", UserSchema);
};
