import { Controller } from "egg";
import puppeteer from "puppeteer";
const _platform = process.platform as string;
// import fs from "fs";
import path from "path";

const iPhone = puppeteer.devices["iPhone 8"];
const _conf =
  _platform === "darwin1"
    ? {
        headless: false,
      }
    : {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      };

export default class PreviewController extends Controller {
  public async preview() {
    const { ctx } = this;
    // await ctx.render("index.html");
    const { url } = ctx.params;
    // const domain = process.env.LOCAL_DOMAIN;

    await this.previewPage(url);

    ctx.body = {
      success: true,
      msg: "成功",
    };
  }

  private autoScroll(page: puppeteer.Page) {
    return page.evaluate(() => {
      return new Promise<void>((resolve) => {
        let totalHeight = 0;
        let distance = 500;
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
  }

  public async previewPage(url: string) {
    const browser = await puppeteer.launch(_conf);
    const page = await browser.newPage();
    await page.emulate(iPhone);
    await page.goto(url, { waitUntil: "networkidle2" });
    await this.autoScroll(page);
    await page.screenshot({
      path: path.resolve(__dirname, "../../screenshots/example.png"),
      fullPage: true,
    });

    // const content = await page.content();

    await page.close();
    await browser.close();
  }

  public async getH5BrowserOptions() {
    return {};
  }
}
