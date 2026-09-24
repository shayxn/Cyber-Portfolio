import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function capture() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  
  console.log("Navigating to http://localhost:5000/ ...");
  await page.goto('http://localhost:5000/', { waitUntil: 'networkidle2' });

  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({
    content: `
      .home-hero { min-height: 0 !important; height: 630px !important; padding: 110px 0 10px !important; }
      .hero-title { font-size: 4.6rem !important; margin: 12px 0 16px !important; }
      .hero-copy { font-size: .95rem !important; line-height: 1.55 !important; }
      .hero-meta { margin-top: 14px !important; }
      .hero-actions { margin-top: 18px !important; }
      .hero-secondary-links { margin-top: 11px !important; }
      .hero-portrait { max-width: 350px !important; }
      .portrait-frame { padding: 10px 10px 0 !important; }
      .portrait-image-wrap { height: 330px !important; }
      .portrait-caption { padding: 10px 2px !important; }
      .hero-margin-note, .hero-stamp, .scroll-cue { display: none !important; }
    `
  });
  await new Promise(resolve => setTimeout(resolve, 2000));

  await page.screenshot({
    path: join(__dirname, '../client/public/opengraph.png'),
    type: 'png'
  });
  console.log('Screenshot saved to client/public/opengraph.png');

  await browser.close();
}

capture().catch(console.error);
