import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { chromium } from "@playwright/test";

function parseJsonEnv(name, fallback) {
  const raw = process.env[name];
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function sanitizeRoute(route) {
  if (route === "/") return "home";
  return route.replace(/[^\w-]+/g, "_").replace(/^_+/, "").replace(/_+$/, "") || "route";
}

function toMd(report) {
  const lines = [];
  lines.push("# Responsive Audit Report");
  lines.push("");
  lines.push(`Base URL: ${report.baseUrl}`);
  lines.push(`Run: ${report.runId}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Pages: ${report.pages.length}`);
  lines.push(`- Viewports per page: ${report.viewports.length}`);
  lines.push(`- Total checks: ${report.pages.reduce((acc, p) => acc + p.viewports.length, 0)}`);
  lines.push(
    `- Overflow failures: ${report.pages.reduce((acc, p) => acc + p.viewports.filter((v) => v.overflow?.hasOverflow).length, 0)}`
  );
  lines.push("");
  lines.push("## Details");
  lines.push("");

  for (const page of report.pages) {
    lines.push(`### ${page.route}`);
    lines.push("");
    for (const vp of page.viewports) {
      const { width, height } = vp.viewport;
      const status = vp.overflow?.hasOverflow ? "FAIL" : "PASS";
      const extra = vp.overflow?.hasOverflow
        ? ` (scrollWidth=${vp.overflow.scrollWidth}, clientWidth=${vp.overflow.clientWidth})`
        : "";
      lines.push(`- ${width}x${height}: ${status}${extra} (${vp.screenshot})`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

export default async function responsiveAudit() {
  const baseUrl = (process.env.BASE_URL || "http://localhost:3000").replace(/\/+$/, "");
  const runId = new Date().toISOString().replace(/[:.]/g, "-");

  const viewports = parseJsonEnv("VIEWPORTS", [
    { width: 320, height: 720 },
    { width: 360, height: 760 },
    { width: 375, height: 800 },
    { width: 390, height: 844 },
    { width: 414, height: 896 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
    { width: 2560, height: 1440 },
  ]);

  const routes = parseJsonEnv("ROUTES", [
    "/",
    "/colleges",
    "/colleges/engineering",
    "/colleges/engineering/departments/mechanical-engineering",
    "/colleges/management-sciences",
    "/colleges/management-sciences/departments/business-administration",
    "/colleges/natural-and-applied-sciences",
    "/colleges/natural-and-applied-sciences/departments/physical-sciences",
    "/colleges/computing",
    "/colleges/computing/departments/computing",
    "/colleges/food-agric-science-and-technology",
    "/colleges/food-agric-science-and-technology/departments/food-science-and-technology",
    "/colleges/environmental-sciences",
    "/colleges/environmental-sciences/departments/architecture",
  ]);

  const outDir = path.join(process.cwd(), "reports", "responsive", runId);
  await fs.mkdir(outDir, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext();

  const report = {
    baseUrl,
    runId,
    viewports,
    routes,
    pages: [],
  };

  let failureCount = 0;

  for (const route of routes) {
    const routeDir = sanitizeRoute(route);
    await fs.mkdir(path.join(outDir, routeDir), { recursive: true });

    const page = await context.newPage();
    const pageEntry = { route, viewports: [] };

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      const url = `${baseUrl}${route}`;
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

      const overflow = await page.evaluate(() => {
        const root = document.documentElement;
        const clientWidth = root.clientWidth;
        const scrollWidth = root.scrollWidth;
        const hasOverflow = scrollWidth > clientWidth + 1;
        const offenders = [];

        const elements = Array.from(document.querySelectorAll("*"));
        for (const el of elements) {
          const rect = el.getBoundingClientRect();
          const score = Math.max(0, rect.right - clientWidth);
          if (score <= 1) continue;
          offenders.push({
            tag: el.tagName.toLowerCase(),
            id: el.id || null,
            className: el.className ? String(el.className) : null,
            width: rect.width,
            left: rect.left,
            right: rect.right,
            score,
          });
        }

        offenders.sort((a, b) => b.score - a.score);
        return {
          clientWidth,
          scrollWidth,
          hasOverflow,
          innerWidth: window.innerWidth,
          visualViewportWidth: window.visualViewport ? window.visualViewport.width : null,
          metaViewport: document.querySelector("meta[name='viewport']")?.getAttribute("content") || null,
          offenders: offenders.slice(0, 12),
        };
      });

      const screenshotName = `${viewport.width}x${viewport.height}.png`;
      const screenshotRel = `${routeDir}/${screenshotName}`;
      await page.screenshot({ path: path.join(outDir, screenshotRel), fullPage: true });

      if (overflow.hasOverflow) failureCount += 1;

      pageEntry.viewports.push({
        viewport,
        url,
        screenshot: screenshotRel,
        overflow,
      });
    }

    await page.close();
    report.pages.push(pageEntry);
  }

  await context.close();
  await browser.close();

  await fs.writeFile(path.join(outDir, "report.json"), JSON.stringify(report, null, 2), "utf8");
  await fs.writeFile(path.join(outDir, "report.md"), toMd(report), "utf8");

  if (failureCount > 0) {
    process.exitCode = 1;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  responsiveAudit();
}
