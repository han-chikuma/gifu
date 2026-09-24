/* =============================================================
   THE SPIRIT OF GIFU — checks

   Three passes over the same data:

     1. RENDER   jsdom builds index.html once, then renders every page
                 in every language and inspects the result: short pages,
                 duplicate ids, malformed tables, inline rounded corners,
                 a rail or footer that failed to build.
     2. LANGUAGE script and orthography hygiene — simplified forms in the
                 Chinese text, Chinese-only forms in the Japanese, stray
                 Cyrillic or Greek.
     3. PARITY   do the three texts carry the same content? Weight parity,
                 and years mentioned in two languages but not the third.

   Pass 1 must be clean before a release. Passes 2 and 3 are advisory and
   carry a small standing baseline of deliberate findings.

       node tools/check.js             summary
       VERBOSE=1 node tools/check.js   every warning and finding

   Adapted from the checks of The Book of Sake (13studio-sudo/sake,
   MIT License).
   ============================================================= */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { JSDOM, VirtualConsole } = require("jsdom");

const ROOT = path.join(__dirname, "..");
const LANGS = ["en", "ja", "zh"];
const VERBOSE = !!process.env.VERBOSE;
const GROUPS = [
  "01-foundations", "02-land", "03-history", "04-culture", "05-wood",
  "06-metal", "07-crafts", "08-sake", "09-reference"
];

const errors = [], warns = [], stats = [];

/* ---- load the page data in a sandbox ------------------------- */

function pageOrder() {
  const src = fs.readFileSync(path.join(ROOT, "assets/js/core.js"), "utf8");
  const i = src.indexOf("GIFU.NAV = [");
  const j = src.indexOf("\n  ];", i);
  const nav = eval(src.slice(i + 11, j + 4).replace(/;\s*$/, ""));
  const out = [];
  for (const g of nav) for (const it of g.items) out.push(it.href.replace(/\.html$/, ""));
  return out;
}

function loadPages() {
  const sandbox = { GIFU: { pages: {} } };
  vm.createContext(sandbox);
  for (const g of GROUPS) {
    const f = path.join(ROOT, "data", g + ".js");
    vm.runInContext(fs.readFileSync(f, "utf8"), sandbox, { filename: f });
  }
  return sandbox.GIFU.pages;
}

const PAGES = pageOrder();
const DATA = loadPages();
const KNOWN = new Set(PAGES);

function strip(s) {
  return String(s == null ? "" : s).replace(/<[^>]+>/g, " ")
    .replace(/&#?[a-zA-Z0-9]+;/g, " ").replace(/\s+/g, " ").trim();
}

/* ---- data-level: missing translations and internal links ----- */

function walkStrings(node, cb, trail) {
  if (node == null) return;
  if (Array.isArray(node)) { node.forEach((n, i) => walkStrings(n, cb, trail + "[" + i + "]")); return; }
  if (typeof node !== "object") return;
  const keys = Object.keys(node);
  if (keys.length > 0 && keys.every(k => LANGS.includes(k))) { cb(node, trail); return; }
  keys.forEach(k => { if (typeof node[k] === "object") walkStrings(node[k], cb, trail + "." + k); });
}

function linkCheck(key) {
  const src = JSON.stringify(DATA[key], (k, v) => (typeof v === "function" ? "" : v));
  const re = /href=\\?"([a-z0-9_-]+)\.html/g;
  let m;
  while ((m = re.exec(src))) {
    if (!KNOWN.has(m[1])) errors.push(key + ": link to unknown page \"" + m[1] + "\"");
  }
}

/* ---- pass 1: render ------------------------------------------ */

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function renderPass() {
  const vc = new VirtualConsole();
  /* jsdom has no layout, so window.scrollTo is unimplemented; the site calls
     it on every render. That is a harness gap, not a fault in the page. */
  vc.on("jsdomError", e => {
    if (/Not implemented/.test(e.message)) return;
    errors.push("index.html: JS error — " + e.message);
  });

  const file = path.join(ROOT, "index.html");
  const dom = new JSDOM(fs.readFileSync(file, "utf8"), {
    url: "file://" + file,
    runScripts: "dangerously",
    resources: "usable",
    virtualConsole: vc,
    pretendToBeVisual: true
  });

  const w = dom.window, d = w.document;
  w.scrollTo = function () {};
  for (let i = 0; i < 600; i++) {
    if (w.GIFU && w.GIFU.pages && Object.keys(w.GIFU.pages).length >= PAGES.length && w.GIFU.render) break;
    await sleep(25);
  }
  if (!w.GIFU || !w.GIFU.render) { errors.push("index.html: GIFU never finished loading"); return; }

  const loaded = Object.keys(w.GIFU.pages).length;
  if (loaded < PAGES.length) errors.push("index.html: only " + loaded + " of " + PAGES.length + " pages loaded");

  for (const key of PAGES) {
    const page = w.GIFU.pages[key];
    if (!page) { errors.push("no page data for \"" + key + "\""); continue; }

    let missing = 0, total = 0;
    walkStrings(page, (o, p) => {
      total++;
      LANGS.forEach(l => { if (!o[l] || !String(o[l]).trim()) { missing++; warns.push(key + ": missing " + l + " at " + p); } });
    }, key);
    linkCheck(key);

    const per = {};
    for (const l of LANGS) {
      w.location.hash = "#" + key;
      w.GIFU.lang = l;
      w.GIFU.render();

      const main = d.querySelector("main");
      const chars = main.textContent.replace(/\s+/g, " ").trim().length;
      per[l] = chars;
      if (chars < 1200) errors.push(key + " [" + l + "]: main is short (" + chars + " chars)");
      if (d.documentElement.lang !== w.GIFU.HTMLLANG[l]) errors.push(key + " [" + l + "]: html lang not set");
      if (!d.querySelector(".rail a")) errors.push(key + " [" + l + "]: rail did not build");
      if (!d.querySelector(".foot .foot-in")) errors.push(key + " [" + l + "]: footer did not build");

      const ids = {}, dupes = [];
      d.querySelectorAll("main [id]").forEach(n => { if (ids[n.id]) dupes.push(n.id); ids[n.id] = 1; });
      if (dupes.length) warns.push(key + " [" + l + "]: duplicate ids — " + [...new Set(dupes)].join(", "));

      d.querySelectorAll("main [style]").forEach(n => {
        if (/border-radius\s*:\s*(?!0)/.test(n.getAttribute("style") || ""))
          errors.push(key + ": inline border-radius on <" + n.tagName.toLowerCase() + ">");
      });

      d.querySelectorAll("main table").forEach((tb, ti) => {
        const cols = tb.querySelectorAll("thead th").length;
        tb.querySelectorAll("tbody tr").forEach((tr, ri) => {
          if (cols && tr.children.length !== cols)
            errors.push(key + " [" + l + "]: table " + ti + " row " + ri + " has " + tr.children.length + " cells, header has " + cols);
        });
      });
    }
    stats.push({ page: key, i18nNodes: total, missing, en: per.en, ja: per.ja, zh: per.zh });
  }
  w.close();
}

/* ---- pass 2: language hygiene -------------------------------- */

const SIMP = new Set(("为个们东车马鸟龙点对会体来从让议认识记语讲论国关门时这说发产术达边华汉战实现应类单众无与买卖书长风飞机" +
  "电话见观点热爱亲师农业乐样办处队张陈刘杨赵孙钱难题标价钱级历经济营养卫").split(""));
const CYR = /[Ѐ-ӿ]/;
const GRK = /[Ͱ-Ͽ]/g;
const GRKOK = /^[αβγδμΩ°]$/;
const ZHONLY = /[參們麼嗎呢咱國關與說發產邊戰實應單眾賣觀點樂樣辦處價錢歷經濟營圖團廣專轉傳體來從讓對兩滿舊藝豐醫鐵灣縣屬續總齡齒兒檢險驗覺舉擇溫淨緣綠錄釀麴藏鑄鹽醬據黃勵齊獨獻壓隱寫鄉鋁碎當黨閱歲]/;
const JA_NAMES = ["鈴木藏"];

let langChecked = 0;
const langIssues = [];

function langWalk(v, trail, key) {
  if (v == null || typeof v === "string" || typeof v === "function") return;
  if (Array.isArray(v)) { v.forEach((x, i) => langWalk(x, trail + "[" + i + "]", key)); return; }
  if (typeof v !== "object") return;
  for (const k of Object.keys(v)) {
    const val = v[k];
    if (typeof val === "string") {
      langChecked++;
      if (CYR.test(val)) langIssues.push({ key, trail: trail + "." + k, what: "cyrillic", val });
      const gm = val.match(GRK);
      if (gm && gm.some(c => !GRKOK.test(c))) langIssues.push({ key, trail: trail + "." + k, what: "greek", val });
      if (key === "names") continue;            /* the page about the name quotes Chinese places */
      if (k === "zh") {
        /* the titles of cited Japanese documents are quoted as they are */
        const own = val.replace(/<span class="src-list">[\s\S]*?<\/span>/g, "");
        const bad = [...own].filter(c => SIMP.has(c));
        if (bad.length) langIssues.push({ key, trail: trail + ".zh", what: "simplified: " + [...new Set(bad)].join(""), val });
      }
      if (k === "ja") {
        /* proper names that are really written with an old form, e.g. the potter 鈴木藏 */
        const m = JA_NAMES.reduce((acc, n) => acc.split(n).join(""), val).match(ZHONLY);
        if (m) langIssues.push({ key, trail: trail + ".ja", what: "zh-form: " + m[0], val });
      }
    } else langWalk(val, trail + "." + k, key);
  }
}

/* ---- pass 3: parity ------------------------------------------ */

function weight(s) {
  s = strip(s);
  let cjk = 0;
  for (const ch of s) {
    const c = ch.codePointAt(0);
    if ((c >= 0x2e80 && c <= 0x9fff) || (c >= 0xf900 && c <= 0xfaff) || (c >= 0x3040 && c <= 0x30ff)) cjk++;
  }
  const latin = (s.replace(/[⺀-鿿぀-ヿ豈-﫿]/g, " ").match(/[A-Za-z0-9'’.\-]+/g) || []).length;
  return cjk * 1.0 + latin * 1.75;
}

const CJKD = { "〇": "0", "零": "0", "一": "1", "二": "2", "三": "3", "四": "4",
               "五": "5", "六": "6", "七": "7", "八": "8", "九": "9" };
const ERA = { "令和": 2018, "平成": 1988, "昭和": 1925, "大正": 1911, "明治": 1867 };

function kanjiNum(t) {
  if (t === "元") return 1;
  if (/^[0-9]+$/.test(t)) return parseInt(t, 10);
  if (/^[\uff10-\uff19]+$/.test(t)) return parseInt(t.replace(/[\uff10-\uff19]/g, c => String(c.charCodeAt(0) - 0xff10)), 10);
  const d = "〇一二三四五六七八九";
  if (!/^[一二三四五六七八九十]+$/.test(t)) return NaN;
  const i = t.indexOf("十");
  if (i < 0) return t.length === 1 ? d.indexOf(t) : NaN;
  const tens = i === 0 ? 1 : d.indexOf(t[0]);
  const ones = i === t.length - 1 ? 0 : d.indexOf(t[t.length - 1]);
  if (tens < 1 || ones < 0) return NaN;
  return tens * 10 + ones;
}

function years(s) {
  const t = strip(s).replace(/[0-9][0-9,.]*\s*(?:mL|ml|kL|kl|L\b|kg|g\b|°|%|\u30df\u30ea|\u30ea\u30c3\u30c8\u30eb|\u516c\u5347|\u516c\u79e4|\u6beb\u5347)/g, " ");
  const out = new Set();
  for (const m of t.match(/\b(?:1[0-9]{3}|20[0-9]{2})(?:s|\u2019s)?\b/g) || []) out.add(m.slice(0, 4));
  for (const run of t.match(/[〇零一二三四五六七八九]{4}/g) || []) {
    let d = "";
    for (const ch of run) d += CJKD[ch];
    if (/^(1[0-9]{3}|20[0-9]{2})$/.test(d)) out.add(d);
  }
  const era = /(令和|平成|昭和|大正|明治)\s*(元|[0-9\uff10-\uff19一二三四五六七八九十]{1,3})/g;
  let e;
  while ((e = era.exec(t))) {
    const n = kanjiNum(e[2]);
    if (!isNaN(n) && n > 0) out.add(String(ERA[e[1]] + n));
  }
  return out;
}

let triples = 0, lightN = 0, yearN = 0;
const parityFindings = [];

function parityVisit(page, node, trail) {
  if (node == null) return;
  if (Array.isArray(node)) { node.forEach((v, i) => parityVisit(page, v, trail + "[" + i + "]")); return; }
  if (typeof node !== "object") return;

  const isTriple = typeof node.en === "string" && typeof node.ja === "string" && typeof node.zh === "string";
  if (isTriple) {
    triples++;
    const w = { en: weight(node.en), ja: weight(node.ja), zh: weight(node.zh) };
    const med = [w.en, w.ja, w.zh].sort((a, b) => a - b)[1];
    if (med >= 90) {
      for (const k of LANGS) {
        if (w[k] < med * 0.58) {
          lightN++;
          parityFindings.push({ kind: "light", page, trail,
            note: k + " is " + Math.round((w[k] / med) * 100) + "% of the median weight",
            sample: strip(node[k]).slice(0, 90) });
        }
      }
    }
    const f3 = /\.(era|eraJp)$/.test(trail)
      ? { en: new Set(), ja: new Set(), zh: new Set() }
      : { en: years(node.en), ja: years(node.ja), zh: years(node.zh) };
    const miss = [];
    for (const k of LANGS) {
      const others = LANGS.filter(x => x !== k);
      for (const tok of f3[others[0]]) if (f3[others[1]].has(tok) && !f3[k].has(tok)) miss.push(k + " lacks " + tok);
    }
    if (miss.length) {
      yearN++;
      parityFindings.push({ kind: "year", page, trail, note: miss.join(", "), sample: strip(node.en).slice(0, 90) });
    }
  }
  for (const k of Object.keys(node)) {
    if (isTriple && LANGS.includes(k)) continue;
    parityVisit(page, node[k], trail + "." + k);
  }
}

/* ---- run ----------------------------------------------------- */

(async () => {
  await renderPass();
  for (const p of PAGES) { langWalk(DATA[p], p, p); parityVisit(p, DATA[p], p); }

  const pad = (s, n) => String(s).padEnd(n);
  console.log("\n=== 1. RENDER ===\n");
  console.log(pad("page", 16) + pad("i18n", 7) + pad("miss", 6) + pad("EN chars", 10) + pad("JA chars", 10) + "ZH chars");
  console.log("-".repeat(64));
  let tEn = 0, tJa = 0, tZh = 0, tN = 0;
  stats.slice().sort((a, b) => a.page.localeCompare(b.page)).forEach(s => {
    tEn += s.en || 0; tJa += s.ja || 0; tZh += s.zh || 0; tN += s.i18nNodes;
    console.log(pad(s.page, 16) + pad(s.i18nNodes, 7) + pad(s.missing, 6) + pad(s.en, 10) + pad(s.ja, 10) + s.zh);
  });
  console.log("-".repeat(64));
  console.log(pad("TOTAL", 16) + pad(tN, 7) + pad("", 6) + pad(tEn, 10) + pad(tJa, 10) + tZh);
  console.log("\npages: " + stats.length + "   errors: " + errors.length + "   warnings: " + warns.length);
  errors.slice(0, 60).forEach(e => console.log("  x " + e));
  if (VERBOSE) warns.slice(0, 200).forEach(e => console.log("  ! " + e));
  else if (warns.length) console.log("  (VERBOSE=1 to list warnings)");

  console.log("\n=== 2. LANGUAGE ===\n");
  if (VERBOSE) langIssues.forEach(f => console.log("  ! " + f.key + " " + f.trail + " — " + f.what + "\n      " + f.val.slice(0, 110)));
  else langIssues.slice(0, 12).forEach(f => console.log("  ! " + f.key + " " + f.trail + " — " + f.what));
  console.log("language: " + langChecked + " strings checked, " + langIssues.length + " issues"
    + (!VERBOSE && langIssues.length > 12 ? "  (VERBOSE=1 for all)" : ""));

  console.log("\n=== 3. PARITY ===\n");
  const shown = VERBOSE ? parityFindings : parityFindings.slice(0, 12);
  shown.forEach(f => console.log("  ! [" + f.kind + "] " + f.page + " " + f.trail + " — " + f.note));
  console.log("parity: " + triples + " triples checked, " + lightN + " light, " + yearN + " year mismatches"
    + (!VERBOSE && parityFindings.length > 12 ? "  (VERBOSE=1 for all)" : ""));

  console.log("");
  process.exit(errors.length ? 1 : 0);
})();
