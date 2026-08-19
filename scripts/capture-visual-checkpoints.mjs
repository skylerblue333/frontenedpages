import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.BASE_URL ?? "http://localhost:5173";
const routes = process.argv.slice(2);
if (routes.length === 0) throw new Error("Provide one or more routes");

const outDir = path.resolve(process.env.OUT_DIR ?? "docs/visual-checkpoints");
await fs.mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];

for (const route of routes) {
  const slug = route.replace(/^\//, "").replace(/[^a-z0-9-]+/gi, "-") || "home";
  for (const [name, viewport] of Object.entries({
    desktop: { width: 1440, height: 1000 },
    mobile: { width: 390, height: 844 },
  })) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(outDir, `${slug}-${name}.png`), fullPage: true });
    results.push({ route, viewport: name, width: viewport.width, height: viewport.height, errors });
    await page.close();
  }
}

await fs.writeFile(path.join(outDir, "capture-results.json"), JSON.stringify(results, null, 2) + "\n");
await browser.close();
console.log(JSON.stringify(results, null, 2));
