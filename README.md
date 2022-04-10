# tiangong-guanwang-fullstack

> 适用于企业级大型官网场景开发的全栈框架，基于业界最新技术栈构建，同时提供多种业务场景的完善解决方案


TODO:
- 提供一个服务端基类给到业务方

## 介绍

### 提供能力
- 子页面静态生成能力 TODO 本周完成 done
- 基础接口防爬能力  TODO 本周完成乞丐版本
- 服务端文件生成能力【pdf， img】 TODO 本周完成， puptter已集成
- 大文件上传下载 服务端方案 / 客户端方案 TODO： 本周完成
- 
- 零成本接入数据能力
- 文件上传，下载
- 集成 天工日志 工具对前后端请求无缝埋点
- 本地页面搭建能力

- IM 方案


### 待完善

- 对应配置后台 Schema 搭建
- 站内搜索
- 直播能力
- 用户系统能力
- 文档系统能力

### 系统设计文档

### 开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### 部署

```bash
$ npm run tsc
$ npm start
```

### 启动脚本

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### 系统要求

- Node.js 8.x, Node.js 17.x 目前有 bug
- Typescript 2.8+


http://dev.tiangong.net:7001/preview/https%3A%2F%2Fpre.oceanbase.com%2F


```js
"ci": "eslint . && NODE_ENV=test npx sequelize db:migrate && egg-bin cov",

```