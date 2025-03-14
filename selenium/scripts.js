const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // Set true for automation
    const page = await browser.newPage();

    // Set viewport for proper rendering
    await page.setViewport({ width: 1366, height: 768 });

    // Go to the specific URL
    await page.goto('https://www.ndtv.com/india-news/26-11-accused-tahawwur-ranas-extradition-request-rejected-by-us-court-7866809?rtbpbjs_debug=true&adliveplustest=1', { waitUntil: 'networkidle2' });

    try {
        // Wait for the ad unit to appear
        await page.waitForSelector('#andbeyond9701', { timeout: 15000 });

        const adSize = await page.evaluate(() => {
            let adDiv = document.getElementById("andbeyond9701");
            if (adDiv) {
                let iframe = adDiv.querySelector("iframe");
                if (iframe) {
                    let rect = iframe.getBoundingClientRect();
                    return { width: rect.width, height: rect.height };
                }
            }
            return null;
        });

        console.log(adSize ? `Ad Size: ${adSize.width} x ${adSize.height}` : "Ad not found");

    } catch (error) {
        console.error("Error: Ad not found or took too long to load.");
    }

    await browser.close();
})();
