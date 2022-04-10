import "egg";
import { Connection, Model } from "mongoose";

declare module "egg" {
  interface Application {
    cache: any;
    mongoose: Connection;
    mongoModel: {
      [key: string]: Model<any>;
    };
  }
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
