import { Service } from "egg";

export default class SeoService extends Service {
  public get isSpider() {
    return this.ctx.isSpider();
  }

  public get isAPI() {
    return this.ctx.isAPI();
  }

  public async render() {
    console.log(this.isSpider, this.config.seo);
  }
}
