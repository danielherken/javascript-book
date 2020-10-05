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

    // Aktuell angezeigten Titel merken
    const title = await page.$eval('h2', (e) => e.innerText);

    // Buttons herrausfiltern
    const buttons = await page.$$('button');

    // Auf die zweite Seite wechseln
    await buttons[1].click();

    // Prüfen, ob der Titel des ersten angezeigten Beitrages 
    // nun abweicht
    const title2 = await page.$eval('h2', (e) => e.innerText);
    expect(title).not.toBe(title2);

    // Zurück auf die erste Seite wechseln
    await buttons[0].click();

    // Prüfen, ob der angezeigte Titel nun wieder mit dem 
    // gespeicherten übereinstimmt
    const title3 = await page.$eval('h2', (e) => e.innerText);
    expect(title3).toBe(title);
  });

  test('can open the details of a post', async () => {
    await page.goto('http://localhost:3000/');
  });
});
