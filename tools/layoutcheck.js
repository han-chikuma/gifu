/* =============================================================
   THE SPIRIT OF GIFU — layout check

   Playwright renders every page in every language at desktop and
   mobile width and looks for horizontal overflow, elements pushed
   off the right edge that are not inside a scrolling container,
   and pages that failed to build at all.

       node tools/layoutcheck.js

   Takes several minutes. Must be clean before a release.

   Adapted from the layout check of The Book of Sake
   (13studio-sudo/sake, MIT License).
   ============================================================= */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const LANGS = ["en", "ja", "zh"];
const VIEWS = [{ w: 1440, h: 900, tag: "desktop" }, { w: 390, h: 844, tag: "mobile" }];

function pageOrder() {
  const src = fs.readFileSync(path.join(ROOT, "assets/js/core.js"), "utf8");
  const i = src.indexOf("GIFU.NAV = [");
  const j = src.indexOf("\n  ];", i);
  const nav = eval(src.slice(i + 11, j + 4).replace(/;\s*$/, ""));
  const out = [];
  for (const g of nav) for (const it of g.items) out.push(it.href.replace(/\.html$/, ""));
  return out;
}

const PAGES = pageOrder();
const URL = "file://" + path.join(ROOT, "index.html");

(async () => {
  const exe = process.env.CHROMIUM || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
  const b = await chromium.launch(fs.existsSync(exe) ? { executablePath: exe } : {});
  let problems = 0, checked = 0;

  for (const v of VIEWS) {
    const p = await b.newPage({ viewport: { width: v.w, height: v.h } });
    for (const lang of LANGS) {
      /* One load per language, then walk the pages by hash. */
      await p.goto(URL + "?lang=" + lang);
      await p.waitForTimeout(400);
      for (const page of PAGES) {
        await p.evaluate(k => { window.location.hash = "#" + k; }, page);
        await p.waitForTimeout(90);
        const r = await p.evaluate(() => {
          const de = document.documentElement;
          const over = [];
          function scrollContained(el) {
            let n = el.parentElement;
            while (n && n !== document.body) {
              const cs = getComputedStyle(n);
              if (cs.overflowX === "auto" || cs.overflowX === "scroll" || cs.overflowX === "hidden") return true;
              n = n.parentElement;
            }
            return false;
          }
          document.querySelectorAll("main *").forEach(el => {
            const bb = el.getBoundingClientRect();
            if (bb.width > 0 && bb.right > window.innerWidth + 2 && !scrollContained(el)) {
              const t = el.tagName.toLowerCase() +
                (el.className && typeof el.className === "string" ? "." + el.className.split(" ")[0] : "");
              if (over.indexOf(t) < 0) over.push(t);
            }
          });
          const main = document.querySelector("main");
          return {
            bodyOverflow: de.scrollWidth - de.clientWidth,
            over: over.slice(0, 4),
            mainLen: main ? main.textContent.length : 0,
            railBuilt: !!document.querySelector(".rail a")
          };
        });
        checked++;
        const bad = [];
        if (r.bodyOverflow > 2) bad.push("body scrolls " + r.bodyOverflow + "px");
        if (r.over.length) bad.push("overflow: " + r.over.join(", "));
        if (r.mainLen < 1200) bad.push("main only " + r.mainLen + " chars");
        if (!r.railBuilt) bad.push("rail not built");
        if (bad.length) { problems++; console.log("  x " + page + " [" + lang + "/" + v.tag + "] " + bad.join(" · ")); }
      }
    }
    await p.close();
  }
  await b.close();
  console.log("layout check: " + checked + " page-renders, " + problems + " problems");
  process.exit(problems ? 1 : 0);
})();
