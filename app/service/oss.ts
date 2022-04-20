import { Service } from "egg";
import OSS from "ali-oss";
import fs from "fs/promises";
import path from "path";

const OSS_REGION = "oss-cn-qingdao";
const OSS_BUCKET = "lazy-minus-your-intelligence";
const RAM_KEY = process.env.RAM_KEY || "";
const RAM_SECRET = process.env.RAM_SECRET || "";

class OssService extends Service {
  private client = null;
  // 下载
  async download(filename?: string) {
    const { ctx } = this;
    const { downloadPath } = ctx.app.config.download;
    await ctx.ensurePath(downloadPath);
    const downloadFilePath = `${downloadPath}/${filename}`;
    ctx.info(`文件下载地址：${downloadPath}`);
    if (!this.client) {
      this.init();
    }

    try {
      // 填写Object完整路径和本地文件的完整路径。Object完整路径中不能包含Bucket名称。
      // 如果指定的本地文件存在会覆盖，不存在则新建。
      // 如果未指定本地路径，则下载后的文件默认保存到示例程序所属项目对应本地路径中。
      let result = await (this.client as OSS)!.get(filename, downloadFilePath);
      ctx.info(result);
    } catch (e) {
      ctx.error({ errno: 0, msg: (e as Error).message });
    }
  }

  // 上传
  async upload(path: string) {
    const { basePath } = this.ctx.app.config.render;
    const stat = await fs.stat(path);

    if (!this.client) {
      this.client = this.init();
    }

    if (stat.isDirectory()) {
      //  文件目录上传
      const files = await fs.readdir(path);
      const result = [] as any;
      for (const file of files) {
        const pathname = `${basePath}/${file}`;
        const filename = file.replace(".html", ".png");
        const ret = await this.putFile(this.client, pathname, filename);
        result.push(ret);
      }

      return result;
    } else {
      //  单文件上传
      return await this.putFile(this.client, path);
    }
  }

  init() {
    const client = new OSS({
      // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
      region: OSS_REGION,
      // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
      accessKeyId: RAM_KEY,
      accessKeySecret: RAM_SECRET,
      // 填写Bucket名称。关于Bucket名称命名规范的更多信息，请参见Bucket。
      bucket: OSS_BUCKET,
    });
    this.client = client;

    return client;
  }

  async putFile(client: OSS, filepath: string, filename?: string) {
    try {
      // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
      // 如果本地文件的完整路径中未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
      const result = await client.put(filename, path.normalize(filepath));
      // const result = await client.put('exampleobject.', path.normalize('D:\\localpath\\examplefile.txt'), { headers });
      console.log(result);

      return result;
    } catch (e) {
      this.ctx.logger.error(e);
      return {};
    }
  }
}

export default OssService;
