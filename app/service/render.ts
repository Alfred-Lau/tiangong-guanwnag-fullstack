import { Service } from "egg";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs/promises";

class RenderService extends Service {
  async snapshot() {
    const { ctx } = this;

    const config = ctx.app.config.render;

    try {
      const filepath = await this.renderPageIntoHtmlFileAndSnapshot(config);
      return { filepath, success: true };
    } catch (e) {
      ctx.logger.error(e);
      return { filepath: "", success: false };
    }
  }

  async renderPageIntoHtmlFileAndSnapshot(config) {
    // 设置 pc 巡检的设备
    const { h5render } = this.ctx.app.config;
    try {
      const { site, basePath, pages } = config;
      const browser = await puppeteer.launch({
        headless: true,

        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
        ],
      });
      const page = await browser.newPage();
      await page.setViewport(h5render.device);

      const evaluateFn = async (body) => {
        const scrollBottom = (ms = 200) => {
          return new Promise<void>((resolve) => {
            let totalHeight = 0;
            const distance = 600;
            const timer = setInterval(() => {
              // eslint-disable-next-line
              window.scrollBy(0, distance);
              totalHeight += distance;
              // eslint-disable-next-line
              if (totalHeight >= document.body.scrollHeight) {
                clearInterval(timer);
                resolve();
              }
            }, ms);
          });
        };

        const appendMetaDataInfoHeader = async () => {};
        await scrollBottom();
        await appendMetaDataInfoHeader();

        return body.outerHTML;
      };
      await this.ctx.ensurePath(basePath);

      for (let i = 0; i < pages.length; i++) {
        const { path: pagePath, name } = pages[i];

        await page.goto(`${site}${pagePath}`, {
          waitUntil: "networkidle0",
        });

        await page.waitForTimeout(5000);

        // 获取上下文句柄
        const htmlHandle = await page.$("html");
        const htmlFile = path.join(basePath, name);
        const pngFile = path.join(basePath, name.replace(".html", ".png"));
        // // 执行计算
        const html = await page.evaluate(evaluateFn, htmlHandle);
        await fs.writeFile(htmlFile, html, { encoding: "utf8" });

        await page.screenshot({
          path: pngFile,
        });

        await htmlHandle!.dispose();
      }
      await page.close();
      await browser.close();
      return basePath;
    } catch (error) {
      this.ctx.logger.error(error);
      return null;
    }
  }

  async insertRecords(records) {
    const { ctx } = this;
    await ctx.model.Render.findAll({});
    const result = [] as any;
    try {
      for (const record of records) {
        const ret = await ctx.model.Render.create(record);
        result.push(ret);
      }
      console.log(result);
      return result;
    } catch (error) {
      return error;
    }
  }
}

export default RenderService;
