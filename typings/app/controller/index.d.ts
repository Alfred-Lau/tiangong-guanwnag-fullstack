// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFramework from '../../../app/controller/framework';
import ExportHome from '../../../app/controller/home';
import ExportToolsUpload from '../../../app/controller/tools/upload';

declare module 'egg' {
  interface IController {
    framework: ExportFramework;
    home: ExportHome;
    tools: {
      upload: ExportToolsUpload;
    }
  }
}
