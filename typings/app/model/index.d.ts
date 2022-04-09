// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRender from '../../../app/model/render';

declare module 'egg' {
  interface IModel {
    Render: ReturnType<typeof ExportRender>;
  }
}
