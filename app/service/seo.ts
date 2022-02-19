import { Service } from "egg";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

export default class SeoService extends Service {
  public get isSpider() {
    return this.ctx.isSpider();
  }

  public get isAPI() {
    return this.ctx.isAPI();
  }

  public async renderStaticPage() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const { pages = [], site } = this.ctx.app.config.seo;

    for (const item of pages) {
      const { path: pathname, name } = item;
      await page.goto(`${site}${pathname}`);
      const content = await page.content();
      const dest = path.join(this.ctx.app.baseDir, "app/view/seo", name);
      fs.writeFileSync(dest, content, { encoding: "utf-8" });
    }
    await page.close();
    await browser.close();
  }
}
