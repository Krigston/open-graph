import core from 'puppeteer';

export async function getScreenshot(html: string) {
    const browser = await core.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 630});
    await page.setContent(html);
    return await page.screenshot({ type: 'png' });
}
