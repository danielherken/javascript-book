// Importiert jest-image-snapshot und fügt dieses zu Jest hinzu
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

// Importiert puppeteer
const puppeteer = require('puppeteer');

let browser = null;
let page = null;

// Vor jedem Test: Starten des  Browsers
// und Öffnen eines neuen Tabs
beforeEach(async () => {
  jest.setTimeout(30000);
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

// Nach jedem Test: Schließen des  Browsers
afterEach(async () => {
  await browser.close();
});

describe('Pagination', () => {
  test('layout is correct', async () => {
    // Aufrufen der Seite im Browser
    await page.goto('http://localhost:3000/test/pagination');

    // Erstellen des Screenshots
    const image = await page.screenshot();

    // Vergleichen mit Referenz
    expect(image).toMatchImageSnapshot({
      failureThreshold: '0.01',
      failureThresholdType: 'percent'
    });
  });
});
