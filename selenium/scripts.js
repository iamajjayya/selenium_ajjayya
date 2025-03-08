const puppeteer = require("puppeteer");

(async () => {
    // ✅ Launch browser in headless mode
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // ✅ Function to check if script is loaded on a given page
    async function checkScript(url) {
        console.log(`🔍 Checking: ${url}`);

        // Intercept network requests
        await page.setRequestInterception(true);
        let scriptFound = false;

        page.on("request", (request) => {
            if (request.url().includes("https://rtbcdn.andbeyond.media/inline-2660649.js")) {
                scriptFound = true;
            }
            request.continue();
        });

        await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

        if (scriptFound) {
            console.log(`✅ Script found on: ${url}`);
        } else {
            console.log(`❌ Script NOT found on: ${url}`);
        }

        // Reset interception for the next page
        await page.setRequestInterception(false);
    }

    // ✅ Visit main page first
    await checkScript("https://www.olx.in/");

    // ✅ Extract all links from the main page
    const links = await page.evaluate(() =>
        Array.from(document.querySelectorAll("a"))
            .map((a) => a.href)
            .filter((href) => href.startsWith("https://www.olx.in/"))
    );

    console.log(`🔗 Found ${links.length} links to visit...`);

    // ✅ Check the script on each extracted page (up to 10 pages to avoid overload)
    for (let i = 0; i < Math.min(10, links.length); i++) {
        await checkScript(links[i]);
    }

    // ✅ Close browser
    await browser.close();
})();
