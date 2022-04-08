import { Service } from "egg";
import OSS from "ali-oss";
import fs from "fs/promises";
import path from "path";

const OSS_REGION = "oss-cn-qingdao";
const OSS_BUCKET = "lazy-minus-your-intelligence";

class OssService extends Service {
  async upload(path: string) {
    const { basePath } = this.ctx.app.config.render;
    const client = this.init();
    const stat = await fs.stat(path);
    if (stat.isDirectory()) {
      //  目录上传

      const files = await fs.readdir(path);
      for (const file of files) {
        const pathname = `${basePath}/${file}`;
        await this.putFile(client, pathname);
      }

      return true;
    } else {
      //  文件上传
      const result = await this.putFile(client, path);

      return result;
    }
  }
  init() {
    const client = new OSS({
      // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
      region: OSS_REGION,
      // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
      accessKeyId: "yourAccessKeyId",
      accessKeySecret: "yourAccessKeySecret",
      // 填写Bucket名称。关于Bucket名称命名规范的更多信息，请参见Bucket。
      bucket: OSS_BUCKET,
    });

    return client;
  }

  async putFile(client: OSS, filepath: string) {
    try {
      // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
      // 如果本地文件的完整路径中未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
      const result = await client.put(
        "exampleobject.txt",
        path.normalize(filepath)
      );
      // const result = await client.put('exampleobject.txt', path.normalize('D:\\localpath\\examplefile.txt'), { headers });
      console.log(result);
    } catch (e) {
      this.ctx.logger.error(e);
    }
  }
}

export default OssService;
