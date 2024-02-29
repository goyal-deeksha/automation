import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.com/");
  //   await page.screenshot({
  //     path: "google.png",
  //     type: "png",
  //     fullPage: true,
  //   });

  await page.waitForSelector("textarea[title='Search']", { visible: true });

  await page.type("textarea[title='Search']", "https://www.amazon.in");

  await page.keyboard.press("Enter");

  await page.waitForSelector(".yuRUbf a[href='https://www.amazon.in/']", {
    visible: true,
  });

  await page.click(".yuRUbf a[href='https://www.amazon.in/']");

  await page.waitForSelector("input[id='twotabsearchtextbox']", {
    visible: true,
  });

  await page.type("input[id='twotabsearchtextbox']", "micromax mobile");

  await page.keyboard.press("Enter");

  await page.waitForSelector(
    "img[src='https://m.media-amazon.com/images/I/71uR-euc1GL._AC_UY218_.jpg']",
    { visible: true }
  );

  //   await page.click(document.querySelectorAll("h2").innerText);

  console.log("amazon");
  //   await browser.close();
  //   await chrome.kill();
})();
