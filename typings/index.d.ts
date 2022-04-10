import "egg";

declare module "egg" {
  interface Application {
    cache: any;
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
