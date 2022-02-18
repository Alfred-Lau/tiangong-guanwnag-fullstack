// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSeo from '../../../app/middleware/seo';

declare module 'egg' {
  interface IMiddleware {
    seo: typeof ExportSeo;
  }
}
