import "egg";
import sequelize from "sequelize";
import { Connection, Model } from "mongoose";
import { UserProps } from "../app/mongoModel/user";

declare module "egg" {
  interface Application {
    cache: any;
    mongoose: Connection;
    model: MongooseModels;
    mysqlModel: IModel;
  }

  interface Context {
    model: MongooseModels;
  }

  interface MongooseModels {
    User: Model<UserProps>;
  }

  interface IModel extends sequelize.Sequelize, PlainObject {}
}

declare global {
  namespace NodeJS {
    interface Process {
      client: boolean;
    }
  }
}

declare module "egg-mock" {
  interface MockApplication {
    model: any;
    factory: any;
  }
}
