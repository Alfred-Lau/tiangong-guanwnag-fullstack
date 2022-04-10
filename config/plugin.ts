import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  // static: true,
  cors: {
    enable: true,
    package: "egg-cors",
  },
  nunjucks: {
    enable: true,
    package: "egg-view-nunjucks",
  },
  assets: {
    enable: true,
    package: "egg-view-assets",
  },
  sequelize: {
    enable: true,
    package: "egg-sequelize",
  },
};

export default plugin;
