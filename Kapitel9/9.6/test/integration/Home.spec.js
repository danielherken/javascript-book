const puppeteer = require('puppeteer');

let browser = null;
let page = null;

beforeEach(async () => {
  jest.setTimeout(30000);
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterEach(async () => {
  await browser.close();
});

describe('Home', () => {
  test('should display 5 posts', async () => {
    await page.goto('http://localhost:3000/');

    const posts = await page.$$('h2');
    expect(posts.length).toBe(5);
  });

  test('can switch between pages', async () => {
    await page.goto('http://localhost:3000/');

    const title = await page.$eval('h2', (e) => e.innerText);

    const buttons = await page.$$('button');

    // Go to next
    await buttons[1].click();

    const title2 = await page.$eval('h2', (e) => e.innerText);

    expect(title).not.toBe(title2);

    // Go back
    await buttons[0].click();

    const title3 = await page.$eval('h2', (e) => e.innerText);
    expect(title3).toBe(title);
  });

  test('can open the details of a post', async () => {
    await page.goto('http://localhost:3000/');

    const title = await page.$eval('h2', (e) => e.innerText);

    const links = await page.$$('h2');
    await links[0].click();

    const details = await page.$eval('h2', (e) => e.innerText);
    expect(details).toBe(title);
  });
});
