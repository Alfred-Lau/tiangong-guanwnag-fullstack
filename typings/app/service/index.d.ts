// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportFramework from '../../../app/service/framework';
import ExportImage from '../../../app/service/image';
import ExportLog from '../../../app/service/log';
import ExportOss from '../../../app/service/oss';
import ExportRender from '../../../app/service/render';
import ExportSeo from '../../../app/service/seo';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    framework: AutoInstanceType<typeof ExportFramework>;
    image: AutoInstanceType<typeof ExportImage>;
    log: AutoInstanceType<typeof ExportLog>;
    oss: AutoInstanceType<typeof ExportOss>;
    render: AutoInstanceType<typeof ExportRender>;
    seo: AutoInstanceType<typeof ExportSeo>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
