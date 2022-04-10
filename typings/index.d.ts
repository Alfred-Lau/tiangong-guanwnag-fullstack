import "egg";
import { Connection } from "mongoose";

declare module "egg" {
  interface Application {
    cache: any;
    mongoose: Connection;
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
