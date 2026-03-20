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
  
  // Set a dark background so the rounded corners look good
  await page.evaluateOnNewDocument(() => {
    document.body.style.background = '#0a0a0a';
  });

  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  
  console.log("Navigating to http://localhost:5000/ ...");
  await page.goto('http://localhost:5000/', { waitUntil: 'networkidle2' });
  
  // Wait a bit for animations
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const element = await page.$('#whoami-card');
  if (element) {
    await element.screenshot({ 
        path: join(__dirname, '../client/public/opengraph.png'),
        omitBackground: true
    });
    console.log('Screenshot saved to client/public/opengraph.png');
  } else {
    console.error('Could not find #whoami-card');
  }
  
  await browser.close();
}

capture().catch(console.error);
