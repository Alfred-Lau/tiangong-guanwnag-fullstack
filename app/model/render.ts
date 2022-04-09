import { Application } from "egg";

export default (app: Application) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Render = app.model.define("render", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    url: STRING(100),
    created_at: DATE,
    updated_at: DATE,
  });

  return Render;
};
