// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLog from '../../../app/middleware/log';
import ExportSeo from '../../../app/middleware/seo';

declare module 'egg' {
  interface IMiddleware {
    log: typeof ExportLog;
    seo: typeof ExportSeo;
  }
}
