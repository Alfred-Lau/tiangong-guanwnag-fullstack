import { Controller } from "egg";
import puppeteer from "puppeteer";
// import fs from "fs";
import path from "path";

export default class PreviewController extends Controller {
  public async preview() {
    const { ctx } = this;
    // await ctx.render("index.html");
    const { url } = ctx.params;
    // const domain = process.env.LOCAL_DOMAIN;

    await this.previewPage(url);

    // ctx.body = ctx.params.url;
  }

  public async previewPage(url: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log("---", url);

    await page.goto(url);
    await page.screenshot({
      path: path.resolve(__dirname, "../../screenshots/example.png"),
    });

    // const content = await page.content();

    await page.close();
    await browser.close();
  }

  public async getH5BrowserOptions() {
    return {};
  }
}
