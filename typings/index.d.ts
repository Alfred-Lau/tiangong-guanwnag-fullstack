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
