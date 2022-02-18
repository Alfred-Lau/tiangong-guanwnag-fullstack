// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportToolsUpload from '../../../app/controller/tools/upload';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    tools: {
      upload: ExportToolsUpload;
    }
  }
}
