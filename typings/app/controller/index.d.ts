// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiDoc from '../../../app/controller/api/doc';
import ExportApiFramework from '../../../app/controller/api/framework';
import ExportApiLog from '../../../app/controller/api/log';
import ExportApiUser from '../../../app/controller/api/user';
import ExportPagesHome from '../../../app/controller/pages/home';
import ExportToolsPreview from '../../../app/controller/tools/preview';
import ExportToolsRender from '../../../app/controller/tools/render';
import ExportToolsUpload from '../../../app/controller/tools/upload';

declare module 'egg' {
  interface IController {
    api: {
      doc: ExportApiDoc;
      framework: ExportApiFramework;
      log: ExportApiLog;
      user: ExportApiUser;
    }
    pages: {
      home: ExportPagesHome;
    }
    tools: {
      preview: ExportToolsPreview;
      render: ExportToolsRender;
      upload: ExportToolsUpload;
    }
  }
}
