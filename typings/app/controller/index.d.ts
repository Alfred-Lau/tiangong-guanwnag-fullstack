// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiDoc from '../../../app/controller/api/doc';
import ExportApiFramework from '../../../app/controller/api/framework';
import ExportApiLog from '../../../app/controller/api/log';
import ExportPagesHome from '../../../app/controller/pages/home';
import ExportToolsUpload from '../../../app/controller/tools/upload';

declare module 'egg' {
  interface IController {
    api: {
      doc: ExportApiDoc;
      framework: ExportApiFramework;
      log: ExportApiLog;
    }
    pages: {
      home: ExportPagesHome;
    }
    tools: {
      upload: ExportToolsUpload;
    }
  }
}
