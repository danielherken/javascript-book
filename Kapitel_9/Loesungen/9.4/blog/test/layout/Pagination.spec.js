// Importiert jest-image-snapshot und fügt dieses zu Jest hinzu
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

// Importiert Puppeteer
const puppeteer = require('puppeteer');

let browser = null;
let page = null;

// Start des Browsers vor jedem Test 
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
  test('layout first page is correct', async () => {
    // Aufrufen der Seite im Browser
    await page.goto(
      'http://localhost:3000/test/pagination?page=0&count=30&perpage=10'
    );

    // Erstellen des Screenshots
    const image = await page.screenshot();

    // Vergleichen mit Referenz
    expect(image).toMatchImageSnapshot({
      failureThreshold: '0.01',
      failureThresholdType: 'percent'
    });
  });

  test('layout middle page is correct', async () => {
    // Aufrufen der Seite im Browser
    await page.goto(
      'http://localhost:3000/test/pagination?page=1&count=30&perpage=10'
    );

    // Erstellen des Screenshots
    const image = await page.screenshot();

    // Vergleichen mit Referenz
    expect(image).toMatchImageSnapshot({
      failureThreshold: '0.01',
      failureThresholdType: 'percent'
    });
  });

  test('layout last page is correct', async () => {
    // Aufrufen der Seite im Browser
    await page.goto(
      'http://localhost:3000/test/pagination?page=2&count=30&perpage=10'
    );

    // Erstellen des Screenshots
    const image = await page.screenshot();

    // Vergleichen mit Referenz
    expect(image).toMatchImageSnapshot({
      failureThreshold: '0.01',
      failureThresholdType: 'percent'
    });
  });
});
