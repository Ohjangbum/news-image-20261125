// Render build/page.html to entry.png at exactly 1024x1024 with Playwright.
// Run from ~/workspace/makefun/news-image with the shot-tool's node_modules linked:
//   ln -s ~/workspace/makefun/token-radar/shot-tool/node_modules node_modules
//   node entry/build/render.mjs
import { chromium } from 'playwright-core';
import { statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const shell = '/home/hatch/.cache/ms-playwright/chromium_headless_shell-1187/chrome-linux/headless_shell';

const browser = await chromium.launch({ executablePath: shell, args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
page.on('pageerror', (e) => console.log('PAGE ERROR:', String(e).slice(0, 300)));
await page.goto('file://' + join(root, 'build', 'page.html'), { waitUntil: 'load' });
await page.waitForTimeout(400);
const overflow = await page.evaluate(() => {
  const el = document.querySelector('.page');
  return { scrollH: el.scrollHeight, clientH: el.clientHeight, scrollW: el.scrollWidth, clientW: el.clientWidth };
});
console.log('page box:', JSON.stringify(overflow));
await page.screenshot({ path: join(root, 'entry.png') });
await browser.close();
console.log('entry.png', statSync(join(root, 'entry.png')).size, 'bytes');
