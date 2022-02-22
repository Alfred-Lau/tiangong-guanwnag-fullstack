// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportFramework from '../../../app/service/framework';
import ExportLog from '../../../app/service/log';
import ExportSeo from '../../../app/service/seo';

declare module 'egg' {
  interface IService {
    framework: AutoInstanceType<typeof ExportFramework>;
    log: AutoInstanceType<typeof ExportLog>;
    seo: AutoInstanceType<typeof ExportSeo>;
  }
}
