/* =============================================================
   GIFU — core runtime · The Spirit of Gifu / 岐阜の魂
   i18n resolver + block renderer + navigation + TOC
   Plain ES5-safe browser JS. No build step. Works from file://

   Adapted from the runtime of The Book of Sake
   (github.com/13studio-sudo/sake), © 2026 13studio-sudo,
   MIT License. The renderer, navigation, search, theme and
   scrollbar code are that book's; the vocabulary, the page
   model and the chrome text are this one's.
   ============================================================= */
(function (global) {
  "use strict";

  var GIFU = global.GIFU = global.GIFU || {};
  GIFU.pages = GIFU.pages || {};
  GIFU.LANGS = ["en", "ja", "zh"];
  GIFU.HTMLLANG = { en: "en", ja: "ja", zh: "zh-Hant" };

  /* ---------------------------------------------------------- */
  /* Language state                                             */
  /* ---------------------------------------------------------- */
  var KEY = "gifu.lang";

  function readStored() {
    try { return global.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function writeStored(v) {
    try { global.localStorage.setItem(KEY, v); } catch (e) { /* ignore */ }
  }
  function fromQuery() {
    var m = /[?&]lang=(en|ja|zh)\b/.exec(global.location.search);
    return m ? m[1] : null;
  }
  /* English is the default. The browser's own language setting is
     deliberately not consulted: a reader who wants Japanese or Chinese
     picks it from the menu, and the choice then persists. ?lang= still
     overrides everything, for linking straight into one language. */
  GIFU.lang = fromQuery() || readStored() || "en";
  if (GIFU.LANGS.indexOf(GIFU.lang) < 0) GIFU.lang = "en";

  /* ---------------------------------------------------------- */
  /* Theme state                                                */
  /* ---------------------------------------------------------- */
  var TKEY = "gifu.theme";

  function readTheme() {
    try { return global.localStorage.getItem(TKEY); } catch (e) { return null; }
  }
  function writeTheme(v) {
    try { global.localStorage.setItem(TKEY, v); } catch (e) { /* ignore */ }
  }
  /* Light is the default. The operating system's preference is deliberately
     not consulted: the book is designed on pale paper, and a reader who wants
     the dark ground chooses it from the menu. The choice then persists. */
  var storedTheme = readTheme();
  GIFU.theme = (storedTheme === "dark") ? "dark" : "light";

  function applyTheme() {
    if (document.documentElement) {
      document.documentElement.setAttribute("data-theme", GIFU.theme);
    }
  }
  applyTheme();

  GIFU.setTheme = function (t) {
    if (t !== "dark" && t !== "light") return;
    var y = global.scrollY;
    GIFU.theme = t;
    writeTheme(t);
    applyTheme();
    GIFU.render();
    global.scrollTo(0, y);
  };

  /* Figures are authored once, in the pale palette, as hard hex values.
     Rather than maintain a second copy of every diagram, the dark
     theme inverts each colour's lightness and keeps its hue: a warm pale
     fill becomes a warm dark one, near-black ink becomes warm paper, and
     mid-tones stay where they are. Contrast is preserved because the
     transform is monotonic. */
  var darkCache = {};

  function hsl2hex(h, s, l) {
    function hue(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }
    var r, g, b, q, p;
    if (s === 0) { r = g = b = l; }
    else {
      q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      p = 2 * l - q;
      r = hue(p, q, h + 1 / 3); g = hue(p, q, h); b = hue(p, q, h - 1 / 3);
    }
    function ch(v) {
      var x = Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16);
      return x.length < 2 ? "0" + x : x;
    }
    return "#" + ch(r) + ch(g) + ch(b);
  }

  function darkHex(hex) {
    var key = hex.toLowerCase();
    if (darkCache[key]) return darkCache[key];
    var r = parseInt(hex.substr(1, 2), 16) / 255,
        g = parseInt(hex.substr(3, 2), 16) / 255,
        b = parseInt(hex.substr(5, 2), 16) / 255;
    var mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    var l = (mx + mn) / 2, d = mx - mn, h = 0, s = 0;
    if (d) {
      s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
      if (mx === r) h = (g - b) / d + (g < b ? 6 : 0);
      else if (mx === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h /= 6;
    }
    /* Invert lightness, then compress into the dark theme's range so
       that paper white lands on the page ground rather than pure black. */
    var out = hsl2hex(h, Math.min(s * 0.92, 0.42), 0.055 + (1 - l) * 0.80);
    darkCache[key] = out;
    return out;
  }

  GIFU.themeSvg = function (svg) {
    if (GIFU.theme !== "dark" || typeof svg !== "string") return svg;
    return svg.replace(/#[0-9A-Fa-f]{6}\b/g, darkHex);
  };

  /* Resolve a localised value. Accepts a plain string (identical in all
     languages — proper nouns, numbers) or {en, ja, zh}. */
  function L(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    if (typeof v === "object") {
      if (v[GIFU.lang] != null) return String(v[GIFU.lang]);
      if (v.en != null) return String(v.en);
      if (v.ja != null) return String(v.ja);
    }
    return "";
  }
  GIFU.L = L;

  /* ---------------------------------------------------------- */
  /* Tiny DOM helpers                                           */
  /* ---------------------------------------------------------- */
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (attrs[k] == null) continue;
      if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    if (html != null) n.innerHTML = html;
    return n;
  }
  function slug(s) {
    return String(s).toLowerCase()
      .replace(/<[^>]+>/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "").slice(0, 60) || "s";
  }
  GIFU.el = el;


  /* ---------------------------------------------------------- */
  /* Routing — multi-file by default, hash routing when bundled  */
  /* ---------------------------------------------------------- */
  function parseHash() {
    var h = (global.location.hash || "").replace(/^#/, "");
    if (!h) return { page: "index", anchor: "" };
    var i = h.indexOf("/");
    if (i < 0) return { page: h, anchor: "" };
    return { page: h.slice(0, i), anchor: h.slice(i + 1) };
  }

  GIFU.currentPage = function () {
    if (GIFU.bundle) {
      var r = parseHash();
      return GIFU.pages[r.page] ? r.page : "index";
    }
    var k = document.body.getAttribute("data-page");
    if (k) return k;
    var f = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    return f.replace(/\.html$/, "") || "index";
  };

  /* Build an href for a page key plus optional anchor. */
  GIFU.href = function (page, anchor) {
    if (GIFU.bundle) return "#" + page + (anchor ? "/" + anchor : "");
    return page + ".html" + (anchor ? "#" + anchor : "");
  };

  /* Rewrite an authored "page.html#anchor" link for the current mode. */
  function rewriteHref(h) {
    if (!GIFU.bundle || !h) return h;
    if (/^(https?:|mailto:|#)/.test(h)) return h;
    var m = /^([a-z0-9_-]+)\.html(?:#(.*))?$/i.exec(h);
    if (!m) return h;
    return GIFU.href(m[1], m[2] || "");
  }

  function navItem(href) {
    var a, c;
    for (a = 0; a < GIFU.NAV.length; a++) {
      for (c = 0; c < GIFU.NAV[a].items.length; c++) {
        if (GIFU.NAV[a].items[c].href === href) return GIFU.NAV[a].items[c];
      }
    }
    return null;
  }

  function rewriteLinks(root) {
    if (!GIFU.bundle || !root) return;
    var as = root.querySelectorAll("a[href]");
    for (var i = 0; i < as.length; i++) {
      var h = as[i].getAttribute("href");
      var n = rewriteHref(h);
      if (n !== h) as[i].setAttribute("href", n);
    }
  }

  /* ---------------------------------------------------------- */
  /* Block renderer                                             */
  /* ---------------------------------------------------------- */
  var figSeq = 0;

  function cellText(c) {
    if (c == null) return "";
    if (typeof c === "object" && c.t === "chip") {
      return '<span class="chip ' + (c.k || "") + '">' + L(c.text) + "</span>";
    }
    return L(c);
  }


  /* ---------------------------------------------------------- */
  /* Directory vocabulary                                       */
  /*                                                            */
  /* Designation, method and rice names for the sake directory, */
  /* the kinds of maker, and the forty-two municipalities of    */
  /* the prefecture are written once here and referenced by key */
  /* from the data, so that sixty entries do not each carry     */
  /* their own translation of "Takayama" or "junmai ginjō".     */
  /* ---------------------------------------------------------- */
  var GRADE = GIFU.GRADE = {
    jd:  { en: "Junmai daiginjō",    ja: "純米大吟醸",   zh: "純米大吟釀" },
    jg:  { en: "Junmai ginjō",       ja: "純米吟醸",     zh: "純米吟釀" },
    tj:  { en: "Tokubetsu junmai",   ja: "特別純米",     zh: "特別純米" },
    j:   { en: "Junmai",             ja: "純米",         zh: "純米" },
    dg:  { en: "Daiginjō",           ja: "大吟醸",       zh: "大吟釀" },
    g:   { en: "Ginjō",              ja: "吟醸",         zh: "吟釀" },
    thj: { en: "Tokubetsu honjōzō",  ja: "特別本醸造",   zh: "特別本釀造" },
    hj:  { en: "Honjōzō",            ja: "本醸造",       zh: "本釀造" },
    f:   { en: "Futsūshu",           ja: "普通酒",       zh: "普通酒" },
    lq:  { en: "Liqueur",            ja: "リキュール",   zh: "利口酒" },
    nd:  { en: "Undeclared",         ja: "名称なし",     zh: "未標示" }
  };
  var GMOD = GIFU.GMOD = {
    kimoto:  { en: "kimoto",       ja: "生酛",       zh: "生酛" },
    yamahai: { en: "yamahai",      ja: "山廃",       zh: "山廢" },
    nama:    { en: "nama",         ja: "生酒",       zh: "生酒" },
    genshu:  { en: "genshu",       ja: "原酒",       zh: "原酒" },
    muroka:  { en: "muroka",       ja: "無濾過",     zh: "無濾過" },
    nigori:  { en: "nigori",       ja: "にごり",     zh: "濁酒" },
    spark:   { en: "sparkling",    ja: "発泡",       zh: "氣泡" },
    shizuku: { en: "shizuku-pressed", ja: "雫取り",  zh: "雫取" },
    aged:    { en: "aged",         ja: "熟成",       zh: "熟成" }
  };
  var RICE = GIFU.RICE = {
    yamada:     { jp: "山田錦",     r: "Yamada Nishiki" },
    gohyaku:    { jp: "五百万石",   r: "Gohyakumangoku" },
    hidahomare: { jp: "ひだほまれ", r: "Hida Homare" },
    ibi:        { jp: "揖斐の誉",   r: "Ibi-no-homare" },
    miyama:     { jp: "美山錦",     r: "Miyama Nishiki" },
    omachi:     { jp: "雄町",       r: "Omachi" },
    aiyama:     { jp: "愛山",       r: "Aiyama" },
    hatsushimo: { jp: "ハツシモ",   r: "Hatsushimo" },
    local:      { jp: "地元産米",   r: "locally grown rice" },
    domestic:   { jp: "国産米",     r: "domestic rice" },
    brewing:    { jp: "酒造好適米", r: "brewing rice" }
  };

  /* The kinds of maker a directory entry can be. */
  var KIND = GIFU.KIND = {
    sake:    { en: "Sake brewery",   ja: "酒蔵",     zh: "酒藏" },
    sword:   { en: "Swordsmith",     ja: "刀匠",     zh: "刀匠" },
    blade:   { en: "Cutlery maker",  ja: "刃物メーカー", zh: "刀具製造商" },
    furn:    { en: "Furniture maker", ja: "家具メーカー", zh: "家具製造商" },
    guitar:  { en: "Guitar maker",   ja: "ギター工房", zh: "吉他工坊" },
    wood:    { en: "Woodworker",     ja: "木工",     zh: "木工" },
    paper:   { en: "Papermaker",     ja: "紙漉き",   zh: "造紙" },
    clay:    { en: "Potter",         ja: "窯元",     zh: "窯元" },
    lantern: { en: "Lantern & umbrella maker", ja: "提灯・和傘", zh: "燈籠・和傘" },
    museum:  { en: "Museum",         ja: "博物館",   zh: "博物館" }
  };

  /* The five regions (圏域) the prefecture uses for planning, and
     its forty-two municipalities, in the prefecture's own order.
     Japanese names take 市・町・村; the Chinese keep the same
     characters, with the traditional forms where they differ.    */
  var REGION = GIFU.REGION = {
    gifu:  { en: "Gifu area", ja: "岐阜圏域", zh: "岐阜圈域" },
    seino: { en: "Seinō",     ja: "西濃圏域", zh: "西濃圈域" },
    chuno: { en: "Chūnō",     ja: "中濃圏域", zh: "中濃圈域" },
    tono:  { en: "Tōnō",      ja: "東濃圏域", zh: "東濃圈域" },
    hida:  { en: "Hida",      ja: "飛騨圏域", zh: "飛驒圈域" }
  };
  var MUNI = GIFU.MUNI = {
    gifu:         { en: "Gifu",          ja: "岐阜市",     zh: "岐阜市",     g: "gifu" },
    hashima:      { en: "Hashima",       ja: "羽島市",     zh: "羽島市",     g: "gifu" },
    kakamigahara: { en: "Kakamigahara",  ja: "各務原市",   zh: "各務原市",   g: "gifu" },
    yamagata:     { en: "Yamagata",      ja: "山県市",     zh: "山縣市",     g: "gifu" },
    mizuho:       { en: "Mizuho",        ja: "瑞穂市",     zh: "瑞穗市",     g: "gifu" },
    motosu:       { en: "Motosu",        ja: "本巣市",     zh: "本巢市",     g: "gifu" },
    ginan:        { en: "Ginan",         ja: "岐南町",     zh: "岐南町",     g: "gifu" },
    kasamatsu:    { en: "Kasamatsu",     ja: "笠松町",     zh: "笠松町",     g: "gifu" },
    kitagata:     { en: "Kitagata",      ja: "北方町",     zh: "北方町",     g: "gifu" },
    ogaki:        { en: "Ōgaki",         ja: "大垣市",     zh: "大垣市",     g: "seino" },
    kaizu:        { en: "Kaizu",         ja: "海津市",     zh: "海津市",     g: "seino" },
    yoro:         { en: "Yōrō",          ja: "養老町",     zh: "養老町",     g: "seino" },
    tarui:        { en: "Tarui",         ja: "垂井町",     zh: "垂井町",     g: "seino" },
    sekigahara:   { en: "Sekigahara",    ja: "関ケ原町",   zh: "關原町",     g: "seino" },
    godo:         { en: "Gōdo",          ja: "神戸町",     zh: "神戶町",     g: "seino" },
    wanouchi:     { en: "Wanouchi",      ja: "輪之内町",   zh: "輪之內町",   g: "seino" },
    anpachi:      { en: "Anpachi",       ja: "安八町",     zh: "安八町",     g: "seino" },
    ibigawa:      { en: "Ibigawa",       ja: "揖斐川町",   zh: "揖斐川町",   g: "seino" },
    ono:          { en: "Ōno",           ja: "大野町",     zh: "大野町",     g: "seino" },
    ikeda:        { en: "Ikeda",         ja: "池田町",     zh: "池田町",     g: "seino" },
    seki:         { en: "Seki",          ja: "関市",       zh: "關市",       g: "chuno" },
    mino:         { en: "Mino",          ja: "美濃市",     zh: "美濃市",     g: "chuno" },
    minokamo:     { en: "Minokamo",      ja: "美濃加茂市", zh: "美濃加茂市", g: "chuno" },
    kani:         { en: "Kani",          ja: "可児市",     zh: "可兒市",     g: "chuno" },
    gujo:         { en: "Gujō",          ja: "郡上市",     zh: "郡上市",     g: "chuno" },
    sakahogi:     { en: "Sakahogi",      ja: "坂祝町",     zh: "坂祝町",     g: "chuno" },
    tomika:       { en: "Tomika",        ja: "富加町",     zh: "富加町",     g: "chuno" },
    kawabe:       { en: "Kawabe",        ja: "川辺町",     zh: "川邊町",     g: "chuno" },
    hichiso:      { en: "Hichisō",       ja: "七宗町",     zh: "七宗町",     g: "chuno" },
    yaotsu:       { en: "Yaotsu",        ja: "八百津町",   zh: "八百津町",   g: "chuno" },
    shirakawacho: { en: "Shirakawa (town)", ja: "白川町", zh: "白川町",     g: "chuno" },
    higashishirakawa: { en: "Higashishirakawa", ja: "東白川村", zh: "東白川村", g: "chuno" },
    mitake:       { en: "Mitake",        ja: "御嵩町",     zh: "御嵩町",     g: "chuno" },
    tajimi:       { en: "Tajimi",        ja: "多治見市",   zh: "多治見市",   g: "tono" },
    nakatsugawa:  { en: "Nakatsugawa",   ja: "中津川市",   zh: "中津川市",   g: "tono" },
    mizunami:     { en: "Mizunami",      ja: "瑞浪市",     zh: "瑞浪市",     g: "tono" },
    ena:          { en: "Ena",           ja: "恵那市",     zh: "惠那市",     g: "tono" },
    toki:         { en: "Toki",          ja: "土岐市",     zh: "土岐市",     g: "tono" },
    takayama:     { en: "Takayama",      ja: "高山市",     zh: "高山市",     g: "hida" },
    hida:         { en: "Hida",          ja: "飛騨市",     zh: "飛驒市",     g: "hida" },
    gero:         { en: "Gero",          ja: "下呂市",     zh: "下呂市",     g: "hida" },
    shirakawamura:{ en: "Shirakawa (village)", ja: "白川村", zh: "白川村",   g: "hida" }
  };

  function muniName(v) {
    if (typeof v === "string" && MUNI[v]) return L(MUNI[v]);
    return L(v);
  }
  GIFU.muniName = muniName;

  function riceName(k) {
    var v = RICE[k];
    if (!v) return k;
    return GIFU.lang === "en" ? v.r : v.jp;
  }

  function gradeName(p) {
    var out = [], i;
    if (p.g) out.push(L(GRADE[p.g] || { en: p.g, ja: p.g, zh: p.g }));
    if (p.m) for (i = 0; i < p.m.length; i++) {
      out.push(L(GMOD[p.m[i]] || { en: p.m[i], ja: p.m[i], zh: p.m[i] }));
    }
    return out.join(" ");
  }

  /* The designation carries the weight; the starter method and the
     finishing state sit beside it in a quieter hand.              */
  function gradeHtml(p) {
    var g = p.g ? L(GRADE[p.g] || { en: p.g, ja: p.g, zh: p.g }) : "";
    var mods = [], i;
    if (p.m) for (i = 0; i < p.m.length; i++) {
      mods.push(L(GMOD[p.m[i]] || { en: p.m[i], ja: p.m[i], zh: p.m[i] }));
    }
    var html = g ? "<b>" + g + "</b>" : "";
    if (mods.length) html += (html ? " " : "") + '<span class="bp-m">' + mods.join(" ") + "</span>";
    return html || DASH;
  }

  /* An em dash in a spec means the maker does not publish the   */
  /* figure, not that we failed to look it up. The page says so. */
  var DASH = '<span class="bp-u">—</span>';

  /* A sake is specified by designation, rice and polishing ratio.
     Anything else — a knife, a chair, a guitar — carries its own
     short specification line, written in all three languages.   */
  function specLine(p) {
    if (p.s != null && !p.g && !p.rice && !p.mill) {
      var parts = (p.s instanceof Array) ? p.s : [p.s], out = [], i;
      for (i = 0; i < parts.length; i++) {
        out.push(i === 0 ? "<b>" + L(parts[i]) + "</b>" : L(parts[i]));
      }
      return out.join('<span class="bp-sep">·</span>');
    }
    var bits = [], rr, rn, j;
    bits.push(gradeHtml(p));
    if (p.rice) {
      rr = (typeof p.rice === "string") ? [p.rice] : p.rice;
      rn = [];
      for (j = 0; j < rr.length; j++) rn.push(riceName(rr[j]));
      bits.push(rn.join(" / "));
    } else bits.push(DASH);
    bits.push(p.mill ? '<span class="num">' + p.mill + "</span>" : DASH);
    return bits.join('<span class="bp-sep">·</span>');
  }

  /* The anchor an index entry links to. tools/build.js derives
     the same string from the same data; keep the two in step.     */
  function brandAnchor(e) {
    return "b-" + String(e.r || e.jp).toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  /* Two makers can romanise identically. The second one met gets
     a numeric suffix, and tools/build.js walks the same list in
     the same order, so the indexes point at the right entry.     */
  function uniqueAnchor(base, seen) {
    if (!seen[base]) { seen[base] = 1; return base; }
    seen[base] += 1;
    return base + "-" + seen[base];
  }

  function houseLine(e) {
    var k = e.kind && KIND[e.kind] ? ' <span class="bp-u">· ' + L(KIND[e.kind]) + "</span>" : "";
    if (GIFU.lang === "en" && e.hr) return e.hr + ' <span class="t-jp">' + e.h + "</span>" + k;
    return '<span class="t-jp">' + e.h + "</span>" + k;
  }

  function brandHay(e) {
    var s2 = e.jp + " " + e.r + " " + (e.h || "") + " " + (e.hr || "") + " " +
             muniName(e.muni) + " " + (MUNI[e.muni] ? MUNI[e.muni].en + " " + MUNI[e.muni].ja : "") + " " +
             (e.kind && KIND[e.kind] ? L(KIND[e.kind]) : "") + " " +
             (e.est || "") + " " + L(e.note || ""), i, p;
    if (e.p) for (i = 0; i < e.p.length; i++) {
      p = e.p[i];
      s2 += " " + p.jp + " " + (p.r || "") + " " + gradeName(p) + " " + L(p.d || "");
      if (p.s) s2 += " " + ((p.s instanceof Array) ? p.s.map(L).join(" ") : L(p.s));
      if (p.rice) {
        var rr = (typeof p.rice === "string") ? [p.rice] : p.rice;
        for (var q2 = 0; q2 < rr.length; q2++) {
          s2 += " " + (RICE[rr[q2]] ? RICE[rr[q2]].jp + " " + RICE[rr[q2]].r : rr[q2]);
        }
      }
    }
    return s2.toLowerCase();
  }

  function renderBlocks(blocks, host) {
    if (!blocks) return;
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];
      if (!b) continue;
      var n = renderBlock(b);
      if (n) host.appendChild(n);
    }
  }

  function renderBlock(b) {
    var t = b.t;

    if (t === "h2" || t === "h3" || t === "h4") {
      var h = el(t, null,
        L(b.text) + (b.jp ? ' <span class="' + (t === "h2" ? "h2-jp" : "t-jp") + '">' + b.jp + "</span>" : ""));
      if (t === "h2") h.setAttribute("data-toc", "2");
      if (t === "h3") h.setAttribute("data-toc", "3");
      h.id = b.id || slug(b.text && b.text.en ? b.text.en : L(b.text));
      return h;
    }

    if (t === "p")     return el("p", null, L(b.text));
    if (t === "lede")  return el("p", { "class": "lede" }, L(b.text));
    if (t === "tiny")  return el("p", { "class": "tiny" }, L(b.text));
    if (t === "html")  { var d = el("div"); d.innerHTML = L(b.text); return d; }
    if (t === "hr")    return el("hr", { "class": "sep" });

    if (t === "ul" || t === "ol") {
      var list = el(t === "ul" ? "ul" : "ol", b.plain ? { "class": "plain" } : null);
      for (var j = 0; j < b.items.length; j++) list.appendChild(el("li", null, L(b.items[j])));
      return list;
    }

    if (t === "defs") {
      var dl = el("dl", { "class": "defs" });
      for (var d2 = 0; d2 < b.items.length; d2++) {
        var it = b.items[d2];
        dl.appendChild(el("dt", null,
          L(it.term) + (it.jp ? ' <span class="t-jp">' + it.jp + "</span>" : "") +
          (it.romaji ? ' <span class="romaji">' + it.romaji + "</span>" : "")));
        dl.appendChild(el("dd", null, L(it.def)));
      }
      return dl;
    }

    if (t === "table") {
      var wrap = el("div", { "class": "tablewrap", "data-hint": L(UI.scrollHint) });
      var tb = el("table");
      if (b.caption) tb.appendChild(el("caption", null, L(b.caption)));
      var thead = el("thead"), tr = el("tr");
      for (var c = 0; c < b.cols.length; c++) {
        tr.appendChild(el("th", (b.numCols && b.numCols.indexOf(c) >= 0) ? { "class": "num" } : null, L(b.cols[c])));
      }
      thead.appendChild(tr); tb.appendChild(thead);
      var tbody = el("tbody");
      for (var r = 0; r < b.rows.length; r++) {
        var row = el("tr");
        for (var q = 0; q < b.rows[r].length; q++) {
          var cls = [];
          if (q === 0 && b.keyCol !== false) cls.push("t-key");
          if (b.jpCols && b.jpCols.indexOf(q) >= 0) cls.push("t-jp");
          if (b.numCols && b.numCols.indexOf(q) >= 0) cls.push("num");
          row.appendChild(el("td", cls.length ? { "class": cls.join(" ") } : null, cellText(b.rows[r][q])));
        }
        tbody.appendChild(row);
      }
      tb.appendChild(tbody); wrap.appendChild(tb);
      return wrap;
    }

    if (t === "panel") {
      var p = el("div", { "class": "panel" + (b.tint ? " tint-" + b.tint : "") });
      if (b.title) p.appendChild(el("h4", null, L(b.title)));
      renderBlocks(b.body, p);
      return p;
    }

    if (t === "note") {
      return el("div", { "class": "note" },
        ((b.label || b.title) ? '<span class="note-label">' + L(b.label || b.title) + "</span>" : "") + L(b.text));
    }

    if (t === "quote") {
      return el("blockquote", null,
        L(b.text) + (b.cite ? "<cite>" + L(b.cite) + "</cite>" : ""));
    }

    if (t === "grid") {
      var g = el("div", { "class": "grid c" + (b.cols || 3) });
      for (var k = 0; k < b.cells.length; k++) {
        var cc = b.cells[k], cell = el("div", { "class": "cell" });
        if (cc.k) cell.appendChild(el("div", { "class": "cell-k" }, L(cc.k)));
        if (cc.v) cell.appendChild(el("div", { "class": "cell-v" }, L(cc.v)));
        if (cc.h) cell.appendChild(el("h4", null, L(cc.h) + (cc.jp ? ' <span class="t-jp">' + cc.jp + "</span>" : "")));
        if (cc.d) cell.appendChild(el("p", null, L(cc.d)));
        if (cc.body) renderBlocks(cc.body, cell);
        g.appendChild(cell);
      }
      return g;
    }

    if (t === "chips") {
      var ch = el("div", { "class": "chips" });
      for (var m = 0; m < b.items.length; m++) {
        var itm = b.items[m];
        ch.appendChild(el("span", { "class": "chip " + (itm.k || "") }, L(itm.text != null ? itm.text : itm)));
      }
      return ch;
    }

    if (t === "figure") {
      var f = el("figure", { id: "fig" + (++figSeq) });
      var fr = el("div", { "class": "figframe", "data-hint": L(UI.scrollHint) });
      fr.innerHTML = GIFU.themeSvg(typeof b.svg === "function" ? b.svg(GIFU.lang, L) : L(b.svg));
      f.appendChild(fr);
      if (b.caption) f.appendChild(el("figcaption", null, L(b.caption)));
      return f;
    }

    if (t === "timeline") {
      var tlw = el("div", { "class": "timeline" });
      for (var ti = 0; ti < b.items.length; ti++) {
        var iv = b.items[ti];
        var row2 = el("div", { "class": "tl-item" });
        var whn = el("div", { "class": "tl-when" });
        whn.appendChild(el("div", { "class": "tl-year" }, L(iv.year)));
        if (iv.era) whn.appendChild(el("div", { "class": "tl-era" },
          L(iv.era) + (iv.eraJp ? '<span class="t-jp">' + iv.eraJp + "</span>" : "")));
        row2.appendChild(whn);
        var bod = el("div", { "class": "tl-body" });
        if (iv.title) bod.appendChild(el("h4", null,
          L(iv.title) + (iv.jp ? ' <span class="t-jp">' + iv.jp + "</span>" : "")));
        if (iv.text) bod.appendChild(el("p", null, L(iv.text)));
        if (iv.body) renderBlocks(iv.body, bod);
        row2.appendChild(bod);
        tlw.appendChild(row2);
      }
      return tlw;
    }

    if (t === "steps") {
      var sw = el("div", { "class": "steps" });
      for (var si = 0; si < b.items.length; si++) {
        var sv = b.items[si];
        var st = el("div", { "class": "step" });
        st.appendChild(el("div", { "class": "step-n" }, sv.n != null ? String(sv.n) : String(si + 1)));
        var sb = el("div", { "class": "step-b" });
        sb.appendChild(el("h4", null,
          L(sv.title) + (sv.jp ? ' <span class="t-jp">' + sv.jp + "</span>" : "") +
          (sv.romaji ? ' <span class="romaji">' + sv.romaji + "</span>" : "")));
        if (sv.meta) sb.appendChild(el("p", { "class": "step-meta" }, L(sv.meta)));
        if (sv.text) sb.appendChild(el("p", null, L(sv.text)));
        if (sv.body) renderBlocks(sv.body, sb);
        st.appendChild(sb);
        sw.appendChild(st);
      }
      return sw;
    }

    if (t === "scale") {
      var sc = el("div", { "class": "scale" });
      if (b.title) sc.appendChild(el("div", { "class": "cell-k" }, L(b.title)));
      var bar = el("div", { "class": "scale-bar" });
      var acc = 0, tot = 0, k2;
      for (k2 = 0; k2 < b.segs.length; k2++) tot += (b.segs[k2].w || 1);
      for (k2 = 0; k2 < b.segs.length; k2++) {
        var sg = b.segs[k2], wpc = (sg.w || 1) / tot * 100;
        var seg = el("div", { "class": "scale-seg", style: "left:" + acc + "%;width:" + wpc + "%;background:" + (sg.fill || "transparent") });
        seg.appendChild(el("span", { "class": "scale-lab" }, L(sg.label)));
        bar.appendChild(seg);
        acc += wpc;
      }
      sc.appendChild(bar);
      var lg = el("div", { "class": "scale-legend" });
      for (k2 = 0; k2 < b.segs.length; k2++) {
        var sg2 = b.segs[k2];
        var lgi = el("span", { "class": "scale-lgi" });
        lgi.appendChild(el("i", { style: "background:" + (sg2.fill || "transparent") }));
        lgi.appendChild(document.createTextNode(L(sg2.label)));
        lg.appendChild(lgi);
      }
      sc.appendChild(lg);
      if (b.ticks) {
        var tk = el("div", { "class": "scale-ticks" });
        for (k2 = 0; k2 < b.ticks.length; k2++) tk.appendChild(el("span", null, L(b.ticks[k2])));
        sc.appendChild(tk);
      }
      if (b.note) sc.appendChild(el("div", { "class": "scale-note" }, L(b.note)));
      return sc;
    }

    if (t === "figindex") {
      var fx = el("div", { "class": "figindex" });
      var list = GIFU.FIGINDEX || [], gi3, cur = null, box = null;
      for (gi3 = 0; gi3 < list.length; gi3++) {
        var e2 = list[gi3];
        if (e2.p !== cur) {
          cur = e2.p;
          box = el("div", { "class": "figindex-group" });
          var nv = navItem(cur + ".html");
          box.appendChild(el("div", { "class": "figindex-page" },
            '<a href="' + cur + '.html">' + (nv ? L(nv.label) : cur) + "</a>" +
            (nv && nv.jp ? ' <span class="t-jp rel-jp">' + nv.jp + "</span>" : "")));
          fx.appendChild(box);
        }
        var li3 = el("div", { "class": "figindex-item" });
        li3.innerHTML = '<a href="' + e2.p + ".html#fig" + e2.n + '">' + L(e2.c) + "</a>";
        box.appendChild(li3);
      }
      rewriteLinks(fx);
      return fx;
    }

    if (t === "related") {
      var rw = el("div", { "class": "related" });
      rw.appendChild(el("div", { "class": "related-h" },
        L(b.title || { en: "Where to go next", ja: "次に読むなら", zh: "接下來讀什麼" })));
      var rl = el("ul", { "class": "related-list" });
      for (var ri = 0; ri < (b.items || []).length; ri++) {
        var rit = b.items[ri], rnav = navItem(rit.href), rli = el("li");
        rli.innerHTML = '<a href="' + rit.href + '">' + (rnav ? L(rnav.label) : rit.href) + "</a>" +
          (rnav && rnav.jp ? ' <span class="t-jp rel-jp">' + rnav.jp + "</span>" : "") +
          '<span class="rel-why">' + L(rit.why) + "</span>";
        rl.appendChild(rli);
      }
      rw.appendChild(rl);
      rewriteLinks(rw);
      return rw;
    }

    if (t === "sitemap") {
      var smw = el("div", { "class": "grid c" + (b.cols || 2) });
      for (var gi2 = 0; gi2 < GIFU.NAV.length; gi2++) {
        var grp = GIFU.NAV[gi2], gcell = el("div", { "class": "cell" });
        gcell.appendChild(el("div", { "class": "cell-k" }, L(grp.group)));
        var ul2 = el("ul", { "class": "plain" });
        for (var gj = 0; gj < grp.items.length; gj++) {
          var itm2 = grp.items[gj];
          var li2 = el("li");
          li2.innerHTML = '<a href="' + itm2.href + '">' + L(itm2.label) + "</a>" +
            (itm2.jp ? ' <span class="t-jp" style="font-size:11.5px;color:var(--ink-4)">' + itm2.jp + "</span>" : "");
          ul2.appendChild(li2);
        }
        gcell.appendChild(ul2);
        smw.appendChild(gcell);
      }
      var ncols = (b.cols || 2);
      while (smw.children.length % ncols !== 0) smw.appendChild(el("div", { "class": "cell" }));
      rewriteLinks(smw);
      return smw;
    }

    if (t === "compare") {
      var cw = el("div", { "class": "compare", style: "grid-template-columns:repeat(" + (b.cols || b.items.length) + ",minmax(0,1fr))" });
      for (var ci = 0; ci < b.items.length; ci++) {
        var cv = b.items[ci], cb2 = el("div");
        cb2.appendChild(el("h4", null, L(cv.title) + (cv.jp ? ' <span class="t-jp">' + cv.jp + "</span>" : "")));
        if (cv.text) cb2.appendChild(el("p", null, L(cv.text)));
        if (cv.body) renderBlocks(cv.body, cb2);
        cw.appendChild(cb2);
      }
      return cw;
    }

    if (t === "glossary") {
      var gw = el("div");
      var filt = el("div", { "class": "gloss-filter" });
      var inp = el("input", { type: "search", "aria-label": "filter" });
      inp.setAttribute("placeholder", L(b.placeholder || { en: "Filter terms…", ja: "用語を絞り込む…", zh: "篩選詞彙…" }));
      var cnt = el("span", { "class": "gloss-count" });
      filt.appendChild(inp); filt.appendChild(cnt);
      gw.appendChild(filt);
      var list = el("div", { "class": "gloss-list" });
      var rows = [];
      for (var gi = 0; gi < b.items.length; gi++) {
        var g = b.items[gi];
        var r2 = el("div", { "class": "gloss-row" });
        r2.appendChild(el("div", { "class": "gloss-term" },
          '<span class="g-r">' + L(g.r) + "</span>" +
          (g.jp ? '<span class="g-j">' + g.jp + "</span>" : "") +
          (g.cat ? '<span class="gloss-cat">' + L(g.cat) + "</span>" : "")));
        r2.appendChild(el("div", { "class": "gloss-def" }, L(g.d)));
        list.appendChild(r2);
        rows.push({ node: r2, hay: (L(g.r) + " " + (g.jp || "") + " " + L(g.d) + " " + L(g.cat || "")).toLowerCase() });
      }
      gw.appendChild(list);
      var apply = function () {
        var q = inp.value.trim().toLowerCase(), n = 0;
        for (var i2 = 0; i2 < rows.length; i2++) {
          var ok = !q || rows[i2].hay.indexOf(q) >= 0;
          rows[i2].node.style.display = ok ? "" : "none";
          if (ok) n++;
        }
        cnt.textContent = n + " / " + rows.length;
      };
      inp.addEventListener("input", apply);
      apply();
      return gw;
    }

    if (t === "brands") {
      var bw = el("div", { "class": "brands" });
      var bEnt = [], bGrp = [], gIdx = -1, binp = null, bcnt = null, bSeen = {};

      if (b.filter !== false) {
        var bf = el("div", { "class": "gloss-filter" });
        binp = el("input", { type: "search", "aria-label": "filter" });
        binp.setAttribute("placeholder", L(b.placeholder || UI.brandFilter));
        bcnt = el("span", { "class": "gloss-count" });
        bf.appendChild(binp); bf.appendChild(bcnt);
        bw.appendChild(bf);
      }

      var blist = el("div", { "class": "brandlist" });
      for (var bi = 0; bi < b.items.length; bi++) {
        var e = b.items[bi];
        if (!e) continue;

        if (e.group) {
          /* In Japanese the label and the kanji gloss are the same
             string; printing both would just repeat it.            */
          var glab = L(e.group);
          var gh = el("h3", { "class": "brandgroup" },
            glab + ((e.jp && e.jp !== glab) ? ' <span class="t-jp">' + e.jp + "</span>" : ""));
          gh.setAttribute("data-toc", "3");
          gh.id = e.id || slug(L(e.group));
          blist.appendChild(gh);
          bGrp.push({ node: gh });
          gIdx = bGrp.length - 1;
          continue;
        }

        var brow = el("div", { "class": "kura" });
        brow.id = uniqueAnchor(brandAnchor(e), bSeen);
        var idc = el("div", { "class": "kura-id" });
        idc.appendChild(el("div", { "class": "bn" },
          '<span class="bn-j">' + e.jp + '</span> <span class="bn-r">' + e.r + "</span>"));
        idc.appendChild(el("div", { "class": "bh" }, houseLine(e)));
        idc.appendChild(el("div", { "class": "bm" },
          "<span>" + muniName(e.muni) + "</span>" +
          '<span class="best num">' + (e.est ? e.est : "—") + "</span>"));
        brow.appendChild(idc);

        var bbody = el("div", { "class": "kura-body" });
        if (e.note) bbody.appendChild(el("p", { "class": "bnote" }, L(e.note)));
        if (e.p && e.p.length) {
          var pl = el("ul", { "class": "bprods" });
          for (var pi = 0; pi < e.p.length; pi++) {
            var pr = e.p[pi];
            pl.appendChild(el("li", null,
              '<span class="bp-n">' + pr.jp +
                (pr.r ? ' <i class="bp-r">' + pr.r + "</i>" : "") + "</span>" +
              '<span class="bp-s">' + specLine(pr) + "</span>" +
              (pr.d ? '<span class="bp-d">' + L(pr.d) + "</span>" : "")));
          }
          bbody.appendChild(pl);
        }
        brow.appendChild(bbody);
        blist.appendChild(brow);
        bEnt.push({ node: brow, g: gIdx, hay: brandHay(e) });
      }
      bw.appendChild(blist);

      if (binp) {
        var bapply = function () {
          var q = binp.value.trim().toLowerCase(), n = 0, i3, counts = [];
          for (i3 = 0; i3 < bGrp.length; i3++) counts[i3] = 0;
          for (i3 = 0; i3 < bEnt.length; i3++) {
            var ok = !q || bEnt[i3].hay.indexOf(q) >= 0;
            bEnt[i3].node.style.display = ok ? "" : "none";
            if (ok) { n++; if (bEnt[i3].g >= 0) counts[bEnt[i3].g]++; }
          }
          for (i3 = 0; i3 < bGrp.length; i3++) {
            bGrp[i3].node.style.display = counts[i3] ? "" : "none";
          }
          bcnt.textContent = n + " / " + bEnt.length;
          if (GIFU.syncScrollbars) GIFU.syncScrollbars();
        };
        binp.addEventListener("input", bapply);
        bapply();
      }
      return bw;
    }

    /* Cross-indexes computed by tools/build.js from the directory
       entries themselves: by municipality, and — for the sake
       directory — by rice. Each row links back to the entry on
       whichever directory page it lives.                          */
    if (t === "muniindex") {
      var pw = el("div", { "class": "riceidx" });
      var pdata = GIFU.MUNIINDEX || [];
      for (var pi2 = 0; pi2 < pdata.length; pi2++) {
        var pr2 = pdata[pi2];
        var pn = [];
        for (var pb = 0; pb < pr2.b.length; pb++) {
          if (b.kind && pr2.b[pb].k !== b.kind) continue;
          pn.push('<a href="' + pr2.b[pb].p + '.html#' + pr2.b[pb].id + '">' + pr2.b[pb].jp + "</a>");
        }
        if (!pn.length) continue;
        var prow = el("div", { "class": "riceidx-row" });
        var pv = MUNI[pr2.k];
        var plabel = pv ? L(pv) : pr2.k;
        prow.appendChild(el("div", { "class": "ri-k" },
          '<span class="ri-j">' + plabel + "</span>" +
          ((GIFU.lang === "en" && pv) ? '<span class="ri-r">' + pv.ja + "</span>" : "") +
          '<span class="ri-n num">' + pn.length + "</span>"));
        prow.appendChild(el("div", { "class": "ri-b" }, pn.join('<span class="ri-sep">·</span>')));
        pw.appendChild(prow);
      }
      rewriteLinks(pw);
      return pw;
    }

    if (t === "riceindex") {
      var rw2 = el("div", { "class": "riceidx" });
      var data = GIFU.RICEINDEX || [];
      var min = b.min || 1;
      for (var ri = 0; ri < data.length; ri++) {
        var rr2 = data[ri];
        if (rr2.b.length < min) continue;
        var row2 = el("div", { "class": "riceidx-row" });
        var v = RICE[rr2.k];
        row2.appendChild(el("div", { "class": "ri-k" },
          '<span class="ri-j">' + (v ? v.jp : rr2.k) + "</span>" +
          '<span class="ri-r">' + (v ? v.r : "") + "</span>" +
          '<span class="ri-n num">' + rr2.b.length + "</span>"));
        var names = [];
        for (var bi2 = 0; bi2 < rr2.b.length; bi2++) {
          var bb = rr2.b[bi2];
          names.push('<a href="' + bb.p + '.html#' + bb.id + '">' + bb.jp + "</a>");
        }
        row2.appendChild(el("div", { "class": "ri-b" }, names.join('<span class="ri-sep">·</span>')));
        rw2.appendChild(row2);
      }
      rewriteLinks(rw2);
      return rw2;
    }
    if (t === "section") {
      var s = el("section", { "class": "block", id: b.id || slug(L(b.title)) });
      if (b.title) {
        var h2 = el("h2", null, L(b.title) + (b.jp ? ' <span class="h2-jp">' + b.jp + "</span>" : ""));
        h2.setAttribute("data-toc", "2");
        h2.id = (b.id || slug(L(b.title))) + "-h";
        s.appendChild(h2);
      }
      renderBlocks(b.body, s);
      return s;
    }

    return null;
  }
  GIFU.renderBlocks = renderBlocks;

  /* ---------------------------------------------------------- */
  /* Navigation model                                           */
  /* ---------------------------------------------------------- */
  GIFU.NAV = [
    {
      group: { en: "Foundations", ja: "基礎", zh: "基礎" },
      items: [
        { href: "index.html", jp: "概観", label: { en: "Overview", ja: "概観", zh: "總覽" } },
        { href: "start.html", jp: "始め方", label: { en: "Where to Start", ja: "始め方", zh: "從何開始" } },
        { href: "spirit.html", jp: "六つの言葉", label: { en: "The Spirit in Six Words", ja: "六つの言葉で読む魂", zh: "六個字讀岐阜之魂" } },
        { href: "names.html", jp: "地名", label: { en: "The Name “Gifu”", ja: "「岐阜」という名", zh: "「岐阜」之名" } },
        { href: "provinces.html", jp: "美濃と飛騨", label: { en: "Mino and Hida", ja: "美濃と飛騨", zh: "美濃與飛驒" } }
      ]
    },
    {
      group: { en: "Land & Water", ja: "風土", zh: "風土" },
      items: [
        { href: "landform.html", jp: "地形と地質", label: { en: "Mountains, Plains & Rock", ja: "山と平野と岩", zh: "山、平原與岩石" } },
        { href: "rivers.html", jp: "川と水", label: { en: "Rivers & Water", ja: "川と水", zh: "河川與水" } },
        { href: "forests.html", jp: "森林", label: { en: "The Forests", ja: "森林", zh: "森林" } },
        { href: "mountains.html", jp: "霊峰", label: { en: "Sacred Peaks", ja: "霊峰と山岳信仰", zh: "靈峰與山岳信仰" } },
        { href: "onsen.html", jp: "温泉", label: { en: "Hot Springs", ja: "温泉", zh: "溫泉" } },
        { href: "wildlife.html", jp: "生きもの", label: { en: "Living Things", ja: "生きもの", zh: "生物" } },
        { href: "climate.html", jp: "暑さと雪", label: { en: "Heat & Snow", ja: "暑さと雪", zh: "酷暑與大雪" } }
      ]
    },
    {
      group: { en: "History", ja: "歴史", zh: "歷史" },
      items: [
        { href: "history.html", jp: "歴史", label: { en: "History at a Glance", ja: "歴史の概観", zh: "歷史概觀" } },
        { href: "ancient.html", jp: "古代", label: { en: "Ancient Mino & Hida", ja: "古代の美濃と飛騨", zh: "古代的美濃與飛驒" } },
        { href: "medieval.html", jp: "中世", label: { en: "The Toki & the Saitō", ja: "土岐氏と斎藤氏", zh: "土岐氏與齋藤氏" } },
        { href: "nobunaga.html", jp: "信長", label: { en: "Nobunaga's Gifu", ja: "信長の岐阜", zh: "信長的岐阜" } },
        { href: "sekigahara.html", jp: "関ヶ原", label: { en: "Sekigahara", ja: "関ヶ原", zh: "關原" } },
        { href: "edo.html", jp: "江戸", label: { en: "The Edo Patchwork", ja: "江戸時代の美濃・飛騨", zh: "江戶時代的美濃與飛驒" } },
        { href: "chisui.html", jp: "治水", label: { en: "Taming the Three Rivers", ja: "木曽三川の治水", zh: "木曾三川的治水" } },
        { href: "modern.html", jp: "近現代", label: { en: "Meiji to Now", ja: "近代から現代へ", zh: "從明治到現在" } },
        { href: "people.html", jp: "人物", label: { en: "People", ja: "人物", zh: "人物" } }
      ]
    },
    {
      group: { en: "Culture", ja: "文化", zh: "文化" },
      items: [
        { href: "festivals.html", jp: "祭り", label: { en: "Festivals & Floats", ja: "祭りと屋台", zh: "祭典與屋台" } },
        { href: "ukai.html", jp: "鵜飼", label: { en: "Cormorant Fishing", ja: "鵜飼", zh: "鵜飼" } },
        { href: "faith.html", jp: "社寺", label: { en: "Shrines & Temples", ja: "社寺と信仰", zh: "神社、寺院與信仰" } },
        { href: "shirakawago.html", jp: "白川郷", label: { en: "Shirakawa-gō", ja: "白川郷", zh: "白川鄉" } },
        { href: "towns.html", jp: "町並み", label: { en: "Old Towns", ja: "町並み", zh: "老街町並" } },
        { href: "roads.html", jp: "街道", label: { en: "The Nakasendō & Old Roads", ja: "中山道と街道", zh: "中山道與古道" } },
        { href: "food.html", jp: "食", label: { en: "Food of Mino & Hida", ja: "美濃と飛騨の食", zh: "美濃與飛驒的飲食" } },
        { href: "kabuki.html", jp: "地歌舞伎", label: { en: "Village Kabuki", ja: "地歌舞伎と芝居小屋", zh: "地歌舞伎與芝居小屋" } }
      ]
    },
    {
      group: { en: "Wood", ja: "木", zh: "木" },
      items: [
        { href: "wood.html", jp: "木の国", label: { en: "The Land of Wood", ja: "木の国", zh: "木之國" } },
        { href: "hinoki.html", jp: "檜", label: { en: "Hinoki & the Kiso Five", ja: "檜と木曽五木", zh: "檜木與木曾五木" } },
        { href: "logging.html", jp: "林業", label: { en: "Logging & Forestry", ja: "林業", zh: "林業" } },
        { href: "rafting.html", jp: "川下げ", label: { en: "Timber Down the Rivers", ja: "川を下った木", zh: "順流而下的木材" } },
        { href: "takumi.html", jp: "飛騨の匠", label: { en: "Hida no Takumi", ja: "飛騨の匠", zh: "飛驒工匠" } },
        { href: "joinery.html", jp: "継手仕口", label: { en: "Joinery", ja: "継手と仕口", zh: "榫卯與接合" } },
        { href: "furniture.html", jp: "家具", label: { en: "Hida Furniture", ja: "飛騨の家具", zh: "飛驒家具" } },
        { href: "carving.html", jp: "彫りと塗り", label: { en: "Carving & Lacquer", ja: "彫りと塗り", zh: "雕刻與漆藝" } },
        { href: "enku.html", jp: "円空", label: { en: "Enkū's Buddhas", ja: "円空仏", zh: "圓空佛" } },
        { href: "everyday.html", jp: "暮らしの木", label: { en: "Wood in Everyday Things", ja: "暮らしの木", zh: "生活中的木" } },
        { href: "architecture.html", jp: "木の建築", label: { en: "Building in Wood", ja: "木の建築", zh: "木造建築" } },
        { href: "guitars.html", jp: "手工ギター", label: { en: "Hand-made Guitars", ja: "手工ギター", zh: "手工吉他" } }
      ]
    }
  ];

  GIFU.flatNav = function () {
    var out = [];
    for (var i = 0; i < GIFU.NAV.length; i++)
      for (var j = 0; j < GIFU.NAV[i].items.length; j++) out.push(GIFU.NAV[i].items[j]);
    return out;
  };

  /* ---------------------------------------------------------- */
  /* Chrome: topbar, rail, footer, pager                        */
  /* ---------------------------------------------------------- */
  /* The edition this build is. tools/build.js stamps the same
     string into bundle.html, and the colophon shows it, so a file
     found on its own can still say which version it is.          */
  GIFU.EDITION = "0.0.0.1";
  GIFU.BUILT   = "2026-09-24";

  var SITE = GIFU.SITE = {
    name:  { en: "The Spirit of Gifu", ja: "岐阜の魂", zh: "岐阜之魂" },
    mark:  { en: "The Spirit of Gifu", ja: "岐阜の魂", zh: "岐阜之魂" },
    jp:    "岐阜の魂"
  };

  var UI = GIFU.UI = {
    tagline:  { en: "A study of Gifu — land, craft and spirit", ja: "岐阜の風土と技と心", zh: "岐阜的風土、技藝與精神" },
    menu:     { en: "Menu", ja: "メニュー", zh: "選單" },
    appearance:{ en: "Appearance", ja: "表示", zh: "顯示" },
    light:    { en: "Light", ja: "明るい", zh: "亮色" },
    dark:     { en: "Dark", ja: "暗い", zh: "暗色" },
    scrollHint:{ en: "Scroll sideways to see all of it", ja: "横にスクロールすると全体が見えます", zh: "左右滑動可看到全部" },
    brandFilter:{ en: "Filter by name, maker, town or rice…", ja: "銘柄・作り手・市町村・米で絞り込む…", zh: "以名稱、製作者、市町村或米種篩選…" },
    colophon: { en: "Colophon", ja: "奥付", zh: "版權" },
    closeMenu:{ en: "Close menu", ja: "メニューを閉じる", zh: "關閉選單" },
    language: { en: "Language", ja: "言語", zh: "語言" },
    sections: { en: "Sections", ja: "目次", zh: "章節" },
    contents: { en: "On this page", ja: "目次", zh: "本頁目次" },
    search:   { en: "Search  /", ja: "検索  /", zh: "搜尋  /" },
    noHits:   { en: "No matches.", ja: "該当なし。", zh: "沒有相符項目。" },
    prev:     { en: "Previous", ja: "前へ", zh: "上一頁" },
    next:     { en: "Next", ja: "次へ", zh: "下一頁" },
    designBy: { en: "Design: The Book of Sake", ja: "意匠：酒の書", zh: "設計：酒之書" },
    footNote: {
      en: "An independent reference. Compiled from public sources — see Sources.",
      ja: "独立した参考資料。公開情報に基づく。出典を参照。",
      zh: "獨立參考資料。依據公開資訊編纂，請參見資料來源。"
    },
    drink: {
      en: "Please drink responsibly. Alcohol is for adults of legal drinking age.",
      ja: "適量を守ってお楽しみください。飲酒は法定年齢に達した成人に限ります。",
      zh: "請適量飲酒。飲酒僅限法定年齡以上之成人。"
    }
  };

  /* ---------------------------------------------------------- */
  /* Cross-page search                                          */
  /* ---------------------------------------------------------- */
  var KINDLABEL = {
    page:    { en: "page",    ja: "頁",   zh: "頁" },
    section: { en: "section", ja: "節",   zh: "節" },
    heading: { en: "section", ja: "節",   zh: "節" },
    term:    { en: "term",    ja: "語",   zh: "詞" },
    brand:   { en: "directory", ja: "名鑑", zh: "名鑑" },
    row:     { en: "entry",   ja: "項",   zh: "項" }
  };
  var KINDRANK = { page: 0, section: 1, heading: 1, brand: 2, term: 2, row: 3 };

  function pageLabel(key) {
    var flat = GIFU.flatNav();
    for (var i = 0; i < flat.length; i++) {
      if (flat[i].href === key + ".html") return L(flat[i].label);
    }
    return key;
  }

  function searchIndex(q) {
    var idx = GIFU.searchIndex || [];
    q = q.trim().toLowerCase();
    if (!q) return [];
    var out = [];
    for (var i = 0; i < idx.length; i++) {
      var e = idx[i];
      var label = (e.t[GIFU.lang] || e.t.en || "");
      var hay = (label + " " + (e.t.en || "") + " " + (e.j || "")).toLowerCase();
      var pos = hay.indexOf(q);
      if (pos < 0) continue;
      var score = (label.toLowerCase().indexOf(q) === 0 ? 0 : (pos === 0 ? 1 : 2)) * 10
                + (KINDRANK[e.k] == null ? 4 : KINDRANK[e.k]);
      out.push({ e: e, label: label, score: score });
    }
    out.sort(function (a, b) { return a.score - b.score || a.label.length - b.label.length; });
    return out.slice(0, 40);
  }

  function buildSearch() {
    var wrap = el("div", { "class": "searchwrap" });
    var inp = el("input", { type: "search", "class": "searchbox", "aria-label": L(UI.search), autocomplete: "off", spellcheck: "false" });
    inp.setAttribute("placeholder", L(UI.search));
    var panel = el("div", { "class": "results", hidden: "hidden" });
    wrap.appendChild(inp);
    wrap.appendChild(panel);

    var hits = [], sel = -1;

    function close() { panel.hidden = true; sel = -1; }

    function draw() {
      panel.innerHTML = "";
      if (!hits.length) {
        panel.appendChild(el("div", { "class": "r-empty" }, L(UI.noHits)));
        panel.hidden = false;
        return;
      }
      for (var i = 0; i < hits.length; i++) {
        var h = hits[i], e = h.e;
        var href = GIFU.href(e.p, e.a);
        var a = el("a", { href: href, "data-i": String(i) },
          '<span class="r-t">' + h.label +
          (e.j ? '<span class="r-j">' + e.j + "</span>" : "") + "</span>" +
          '<span class="r-p">' + pageLabel(e.p) + " · " + L(KINDLABEL[e.k] || KINDLABEL.row) + "</span>");
        panel.appendChild(a);
      }
      panel.hidden = false;
      mark();
    }

    function mark() {
      var links = panel.querySelectorAll("a");
      for (var i = 0; i < links.length; i++) links[i].classList.toggle("sel", i === sel);
      if (sel >= 0 && links[sel] && links[sel].scrollIntoView) links[sel].scrollIntoView({ block: "nearest" });
    }

    inp.addEventListener("input", function () {
      if (!inp.value.trim()) { close(); return; }
      hits = searchIndex(inp.value);
      sel = hits.length ? 0 : -1;
      draw();
    });

    inp.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") { inp.value = ""; close(); inp.blur(); return; }
      if (panel.hidden || !hits.length) return;
      if (ev.key === "ArrowDown") { ev.preventDefault(); sel = (sel + 1) % hits.length; mark(); }
      else if (ev.key === "ArrowUp") { ev.preventDefault(); sel = (sel - 1 + hits.length) % hits.length; mark(); }
      else if (ev.key === "Enter") {
        ev.preventDefault();
        var links = panel.querySelectorAll("a");
        if (links[sel]) { close(); inp.blur(); global.location.href = links[sel].getAttribute("href"); }
      }
    });

    inp.addEventListener("blur", function () { setTimeout(close, 160); });
    inp.addEventListener("focus", function () { if (inp.value.trim()) { hits = searchIndex(inp.value); draw(); } });

    return wrap;
  }

  document.addEventListener("keydown", function (ev) {
    if (ev.key !== "/" || ev.metaKey || ev.ctrlKey || ev.altKey) return;
    var t = ev.target, tag = t && t.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || (t && t.isContentEditable)) return;
    var box = document.querySelector(".searchbox");
    if (box) { ev.preventDefault(); box.focus(); }
  });

  var ICON_MENU  = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M1 3.5h14M1 8h14M1 12.5h14"/></svg>';
  var ICON_CLOSE = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/></svg>';

  function buildTopbar() {
    var bar = document.querySelector(".topbar-in");
    if (!bar) return;
    bar.innerHTML = "";

    bar.appendChild(el("a", { "class": "brand", href: GIFU.href("index", "") },
      '<span class="brand-masu" aria-hidden="true"></span>' +
      '<span class="brand-mark">' + L(SITE.mark) + '</span>' +
      (GIFU.lang === "en" ? '<span class="brand-jp">' + SITE.jp + '</span>' : '')));

    bar.appendChild(buildSearch());

    var tog = el("button", {
      "class": "iconbtn menubtn", type: "button",
      "aria-label": L(UI.menu), "aria-expanded": "false", "aria-controls": "sidemenu"
    }, ICON_MENU);
    tog.addEventListener("click", function () { toggleMenu(); });
    bar.appendChild(tog);
  }

  /* ---------------------------------------------------------- */
  /* Side menu — language switch and the full section index      */
  /* ---------------------------------------------------------- */
  function buildSideMenu() {
    var host = document.querySelector(".sidemenu");
    if (!host) {
      host = el("aside", { "class": "sidemenu", id: "sidemenu", "aria-label": L(UI.menu) });
      document.body.appendChild(host);
    }
    host.innerHTML = "";

    var lang = el("div", { "class": "menu-group" });
    lang.appendChild(el("h5", null, L(UI.language)));
    var names = { en: "English", ja: "日本語", zh: "繁體中文" };
    var sub   = { en: "EN", ja: "JA", zh: "ZH-TW" };
    GIFU.LANGS.forEach(function (code) {
      var b = el("button", {
        type: "button", "class": "langrow" + (code === GIFU.lang ? " is-on" : ""),
        "aria-pressed": String(code === GIFU.lang), "data-lang": code
      }, '<span class="langrow-n">' + names[code] + '</span><span class="langrow-c">' + sub[code] + "</span>");
      b.addEventListener("click", function () { GIFU.setLang(code); });
      lang.appendChild(b);
    });
    host.appendChild(lang);

    /* Appearance */
    var ICON_SUN = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">' +
      '<circle cx="8" cy="8" r="3.1"/><path d="M8 .9v2M8 13.1v2M.9 8h2M13.1 8h2M3 3l1.4 1.4M11.6 11.6L13 13M13 3l-1.4 1.4M4.4 11.6L3 13"/></svg>';
    var ICON_MOON = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">' +
      '<path d="M13.4 9.6A5.7 5.7 0 0 1 6.4 2.6 5.8 5.8 0 1 0 13.4 9.6Z"/></svg>';

    var appear = el("div", { "class": "menu-group" });
    appear.appendChild(el("h5", null, L(UI.appearance)));
    [["light", ICON_SUN, UI.light], ["dark", ICON_MOON, UI.dark]].forEach(function (row) {
      var t = row[0];
      var tb = el("button", {
        type: "button", "class": "themerow" + (t === GIFU.theme ? " is-on" : ""),
        "aria-pressed": String(t === GIFU.theme), "data-theme-set": t
      }, row[1] + '<span class="themerow-n">' + L(row[2]) + "</span>");
      tb.addEventListener("click", function () { GIFU.setTheme(t); });
      appear.appendChild(tb);
    });
    host.appendChild(appear);

    var here = GIFU.currentPage();
    var idx = el("div", { "class": "menu-nav" });
    GIFU.NAV.forEach(function (g) {
      var box = el("div", { "class": "menu-group" });
      box.appendChild(el("h5", null, L(g.group)));
      g.items.forEach(function (it) {
        var key = it.href.replace(/\.html$/, "");
        var a = el("a", { href: GIFU.href(key, "") },
          L(it.label) + (it.jp && GIFU.lang !== "ja" ? '<span class="rail-jp">' + it.jp + "</span>" : ""));
        if (key === here) a.className = "is-active";
        a.addEventListener("click", function () { toggleMenu(false); });
        box.appendChild(a);
      });
      idx.appendChild(box);
    });
    host.appendChild(idx);

    host.appendChild(buildColophon());
  }

  /* ---------------------------------------------------------- */
  /* Colophon — who made it, and where it lives                  */
  /* ---------------------------------------------------------- */
  var CREDIT = {
    en: "Written, drawn and built by han-chikuma with Claude.",
    ja: "文と図と造りは、han-chikuma と Claude による。",
    zh: "文字、圖表與建構，由 han-chikuma 與 Claude 共同完成。"
  };
  var DESIGN = {
    en: "The design system and runtime are those of The Book of Sake by 13STUDIO, used under the MIT licence.",
    ja: "意匠と実行部は 13STUDIO『酒の書』のものを MIT ライセンスのもとで用いている。",
    zh: "設計系統與執行程式沿用 13STUDIO《酒之書》，依 MIT 授權使用。"
  };
  var RIGHTS = {
    en: "© 2026 han-chikuma. MIT licence.",
    ja: "© 2026 han-chikuma. MIT ライセンス。",
    zh: "© 2026 han-chikuma. MIT 授權。"
  };

  function buildColophon() {
    var c = el("div", { "class": "colophon" });
    c.appendChild(el("div", { "class": "colo-t" }, L(SITE.name)));
    c.appendChild(el("p", null, L(CREDIT)));
    c.appendChild(el("p", null, L(DESIGN)));
    c.appendChild(el("p", null, L(RIGHTS)));
    c.appendChild(el("p", { "class": "colo-ed" },
      "v" + GIFU.EDITION + " · " + GIFU.BUILT));
    var links = el("div", { "class": "colo-links" });
    [["https://github.com/han-chikuma/gifu", "github.com/han-chikuma/gifu"],
     ["https://github.com/13studio-sudo/sake", "github.com/13studio-sudo/sake"]].forEach(function (row) {
      var line = el("div");
      line.appendChild(el("a", {
        href: row[0], target: "_blank", rel: "noopener noreferrer"
      }, row[1]));
      links.appendChild(line);
    });
    c.appendChild(links);
    return c;
  }

  GIFU.menuOpen = false;

  function toggleMenu(force) {
    var host = document.querySelector(".sidemenu");
    var btn = document.querySelector(".menubtn");
    if (!host) return;
    var open = (force === undefined) ? !GIFU.menuOpen : !!force;
    GIFU.menuOpen = open;
    host.classList.toggle("is-open", open);
    if (btn) {
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", L(open ? UI.closeMenu : UI.menu));
      btn.innerHTML = open ? ICON_CLOSE : ICON_MENU;
    }
    toggleScrim(open);
    if (open) {
      var first = host.querySelector("button, a");
      if (first && first.focus) first.focus();
    } else if (btn && btn.focus) {
      btn.focus();
    }
  }
  GIFU.toggleMenu = toggleMenu;

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && GIFU.menuOpen) toggleMenu(false);
  });

  function toggleScrim(on) {
    var ex = document.querySelector(".scrim");
    if (on && !ex) {
      var sc = el("div", { "class": "scrim" });
      sc.addEventListener("click", function () { toggleMenu(false); });
      document.body.appendChild(sc);
    } else if (!on && ex) {
      ex.parentNode.removeChild(ex);
    }
  }

  function buildRail() {
    var rail = document.querySelector(".rail");
    if (!rail) return;
    rail.innerHTML = "";
    var here = GIFU.currentPage();

    GIFU.NAV.forEach(function (g) {
      var box = el("div", { "class": "rail-group" });
      box.appendChild(el("h5", null, L(g.group)));
      g.items.forEach(function (it) {
        var key = it.href.replace(/\.html$/, "");
        var a = el("a", { href: GIFU.href(key, "") },
          L(it.label) + (it.jp && GIFU.lang !== "ja" ? '<span class="rail-jp">' + it.jp + "</span>" : ""));
        if (key === here) a.className = "is-active";
        box.appendChild(a);
      });
      rail.appendChild(box);
    });
  }

  function buildFooter() {
    var f = document.querySelector(".foot");
    if (!f) return;
    f.innerHTML = '<div class="foot-in wrap">' +
      "<div>" + L(SITE.name) + ' · <span class="jp">美濃 · 飛騨</span> · ' + L(UI.tagline) + "</div>" +
      "<div>" + L(UI.footNote) + "</div>" +
      "<div>" + L(UI.drink) + "</div>" +
      '<div>' + L(RIGHTS) + ' · <a href="https://github.com/han-chikuma/gifu" target="_blank" rel="noopener noreferrer">GitHub</a>' +
      ' · <a href="https://github.com/13studio-sudo/sake" target="_blank" rel="noopener noreferrer">' + L(UI.designBy) + "</a></div>" +
      "</div>";
  }

  function buildPager() {
    var host = document.querySelector(".pager");
    if (!host) return;
    var flat = GIFU.flatNav();
    var here = GIFU.currentPage();
    var idx = -1;
    for (var i = 0; i < flat.length; i++) if (flat[i].href.replace(/\.html$/, "") === here) idx = i;
    host.innerHTML = "";
    var prev = idx > 0 ? flat[idx - 1] : null;
    var next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;
    host.appendChild(prev
      ? el("a", { href: GIFU.href(prev.href.replace(/\.html$/, ""), ""), "class": "prev" }, '<span class="pg-k">' + L(UI.prev) + '</span><span class="pg-t">' + L(prev.label) + "</span>")
      : el("span", { "class": "empty" }, ""));
    host.appendChild(next
      ? el("a", { href: GIFU.href(next.href.replace(/\.html$/, ""), ""), "class": "next" }, '<span class="pg-k">' + L(UI.next) + '</span><span class="pg-t">' + L(next.label) + "</span>")
      : el("span", { "class": "empty" }, ""));
  }

  /* ---------------------------------------------------------- */
  /* Table of contents (right rail)                             */
  /* ---------------------------------------------------------- */
  function buildTOC() {
    var toc = document.querySelector(".toc");
    var main = document.querySelector("main");
    if (!toc || !main) return;
    toc.innerHTML = "";
    var heads = main.querySelectorAll("[data-toc]");
    var shell = document.querySelector(".shell");
    if (!heads.length) {
      toc.style.display = "none";
      if (shell) shell.classList.add("no-toc");
      return;
    }
    toc.style.display = "";
    if (shell) shell.classList.remove("no-toc");
    toc.appendChild(el("h5", null, L(UI.contents)));
    var links = [];
    for (var i = 0; i < heads.length; i++) {
      var h = heads[i];
      if (!h.id) h.id = slug(h.textContent) + "-" + i;
      var clone = h.cloneNode(true);
      var jp = clone.querySelectorAll(".h2-jp, .t-jp, .romaji");
      for (var z = 0; z < jp.length; z++) jp[z].parentNode.removeChild(jp[z]);
      var a = el("a", { href: "#" + h.id, "class": h.getAttribute("data-toc") === "3" ? "lvl3" : "" },
        clone.textContent.replace(/\s+/g, " ").trim());
      toc.appendChild(a);
      links.push({ a: a, h: h });
    }
    if (!("IntersectionObserver" in global)) return;
    var seen = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { seen[e.target.id] = e.isIntersecting; });
      var active = null;
      for (var k = 0; k < links.length; k++) if (seen[links[k].h.id]) { active = links[k]; break; }
      links.forEach(function (l) { l.a.classList.toggle("is-active", l === active); });
    }, { rootMargin: "-70px 0px -72% 0px", threshold: 0 });
    links.forEach(function (l) { io.observe(l.h); });
  }

  /* ---------------------------------------------------------- */
  /* Page bootstrap                                             */
  /* ---------------------------------------------------------- */
  function renderPage() {
    figSeq = 0;
    var key = GIFU.currentPage();
    var page = GIFU.pages[key];
    var main = document.querySelector("main");
    if (!page || !main) return;

    main.innerHTML = "";

    var head = el("header", { "class": "pagehead" });
    if (page.kicker) head.appendChild(el("div", { "class": "kicker" }, L(page.kicker)));
    head.appendChild(el("h1", null, L(page.title)));
    if (page.jp) head.appendChild(el("div", { "class": "sub" }, page.jp));
    if (page.lede) head.appendChild(el("p", { "class": "lede" }, L(page.lede)));
    main.appendChild(head);

    renderBlocks(page.body, main);

    main.appendChild(el("nav", { "class": "pager" }));
    rewriteLinks(main);

    document.title = L(page.title) + " — " + L(SITE.name);
  }

  /* ---------------------------------------------------------- */
  /* Scrollbars                                                 */
  /*                                                            */
  /* No browser lets a native scrollbar be squared — Chromium    */
  /* rounds the thumb, Firefox exposes only a colour, and        */
  /* Windows adds arrow buttons on top. So base.css hides the    */
  /* native bar and this draws one instead: a 3px line, one      */
  /* fixed element per scrolling container, its geometry taken   */
  /* from that container on every scroll and resize.             */
  /* ---------------------------------------------------------- */
  var SB_W = 3;      /* the ink: a 3px line */
  var SB_HIT = 6;    /* transparent margin each side — the grab strip */
  var SB_GAP = 3;    /* space between the ink and the container edge */
  var SB_PAD = 4;    /* space at each end of the run */
  var SB_MIN = 32;   /* shortest the bar is allowed to get */
  var sbars = [];

  function sbMetrics(c, axis) {
    var doc = c === document.documentElement;
    var r, view, pos, size, total;
    if (doc) {
      r = { top: 0, left: 0, right: global.innerWidth, bottom: global.innerHeight };
      view = axis === "v" ? global.innerHeight : global.innerWidth;
      pos = axis === "v" ? (global.pageYOffset || c.scrollTop) : (global.pageXOffset || c.scrollLeft);
      total = axis === "v" ? c.scrollHeight : c.scrollWidth;
    } else {
      r = c.getBoundingClientRect();
      view = axis === "v" ? c.clientHeight : c.clientWidth;
      pos = axis === "v" ? c.scrollTop : c.scrollLeft;
      total = axis === "v" ? c.scrollHeight : c.scrollWidth;
    }
    size = axis === "v" ? (r.bottom - r.top) : (r.right - r.left);
    return { r: r, view: view, pos: pos, total: total, size: size };
  }

  function sbPaint(b) {
    var m = sbMetrics(b.c, b.axis), st = b.el.style;
    /* nothing to scroll, or scrolled out of sight: take the bar away */
    if (m.total - m.view <= 1 || m.size <= 0 ||
        m.r.bottom < 0 || m.r.top > global.innerHeight ||
        m.r.right < 0 || m.r.left > global.innerWidth) {
      st.display = "none";
      return;
    }
    st.display = "block";
    var run = Math.max(0, m.size - SB_PAD * 2);
    var len = Math.max(SB_MIN, Math.round(run * (m.view / m.total)));
    if (len > run) len = run;
    var frac = m.total - m.view > 0 ? m.pos / (m.total - m.view) : 0;
    if (frac < 0) frac = 0;
    if (frac > 1) frac = 1;
    var off = Math.round((run - len) * frac);
    b.run = run; b.len = len;

    /* The element is SB_HIT wider than the ink on each side, so it is
       offset by that much to keep the visible line where it belongs. */
    if (b.axis === "v") {
      st.top = (m.r.top + SB_PAD + off) + "px";
      st.height = len + "px";
      st.left = (m.r.right - SB_GAP - SB_W - SB_HIT) + "px";
    } else {
      st.left = (m.r.left + SB_PAD + off) + "px";
      st.width = len + "px";
      st.top = (m.r.bottom - SB_GAP - SB_W - SB_HIT) + "px";
    }
  }

  function sbPaintAll() {
    for (var i = 0; i < sbars.length; i++) sbPaint(sbars[i]);
  }

  function sbDrag(b) {
    b.el.addEventListener("pointerdown", function (ev) {
      if (ev.button) return;
      ev.preventDefault();
      var m = sbMetrics(b.c, b.axis);
      var start = b.axis === "v" ? ev.clientY : ev.clientX;
      var from = m.pos, span = m.total - m.view, room = b.run - b.len;
      b.el.classList.add("is-drag");
      try { b.el.setPointerCapture(ev.pointerId); } catch (e) { /* ignore */ }

      function move(e2) {
        if (room <= 0) return;
        var now = b.axis === "v" ? e2.clientY : e2.clientX;
        var to = from + ((now - start) / room) * span;
        if (b.c === document.documentElement) {
          if (b.axis === "v") global.scrollTo(0, to); else global.scrollTo(to, 0);
        } else {
          if (b.axis === "v") b.c.scrollTop = to; else b.c.scrollLeft = to;
        }
        sbPaint(b);
      }
      function up(e2) {
        b.el.classList.remove("is-drag");
        try { b.el.releasePointerCapture(e2.pointerId); } catch (e) { /* ignore */ }
        b.el.removeEventListener("pointermove", move);
        b.el.removeEventListener("pointerup", up);
        b.el.removeEventListener("pointercancel", up);
      }
      b.el.addEventListener("pointermove", move);
      b.el.addEventListener("pointerup", up);
      b.el.addEventListener("pointercancel", up);
    });
  }

  function sbAdd(c, axis) {
    if (!c) return;
    var b = {
      c: c, axis: axis, run: 0, len: 0,
      el: el("div", { "class": "sbar sbar-" + axis, "aria-hidden": "true" })
    };
    document.body.appendChild(b.el);
    sbDrag(b);
    sbars.push(b);
    if (c !== document.documentElement) c.addEventListener("scroll", function () { sbPaint(b); });
    sbPaint(b);
  }

  /* Rebuilt after every render, because most of the scrolling
     containers on the page are themselves rebuilt. */
  function sbSync() {
    for (var i = 0; i < sbars.length; i++)
      if (sbars[i].el.parentNode) sbars[i].el.parentNode.removeChild(sbars[i].el);
    sbars = [];
    sbAdd(document.documentElement, "v");
    var sel = [".rail", ".toc", ".sidemenu", ".results"], k, n;
    for (k = 0; k < sel.length; k++) {
      n = document.querySelector(sel[k]);
      if (n) sbAdd(n, "v");
    }
    var wide = document.querySelectorAll("main .figframe, main .tablewrap");
    for (k = 0; k < wide.length; k++) sbAdd(wide[k], "h");
    sbPaintAll();
  }
  GIFU.syncScrollbars = sbSync;

  global.addEventListener("scroll", sbPaintAll, true);
  global.addEventListener("resize", sbPaintAll);

  GIFU.render = function () {
    document.documentElement.lang = GIFU.HTMLLANG[GIFU.lang];
    buildTopbar();
    buildSideMenu();
    buildRail();
    renderPage();
    buildPager();
    buildFooter();
    buildTOC();
    rewriteLinks(document.querySelector(".pager"));
    if (GIFU.menuOpen) toggleMenu(true);
    sbSync();
    if (GIFU.afterRender) { try { GIFU.afterRender(); } catch (e) { /* ignore */ } }
  };

  GIFU.setLang = function (code) {
    if (GIFU.LANGS.indexOf(code) < 0) return;
    var y = global.scrollY;
    GIFU.lang = code;
    writeStored(code);
    GIFU.render();
    global.scrollTo(0, y);
  };

  function onRoute() {
    GIFU.render();
    var r = parseHash();
    if (r.anchor) {
      var target = document.getElementById(r.anchor);
      if (target && target.scrollIntoView) { target.scrollIntoView(); return; }
    }
    global.scrollTo(0, 0);
  }

  if (GIFU.bundle) global.addEventListener("hashchange", onRoute);

  function boot() { if (GIFU.bundle) onRoute(); else GIFU.render(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

})(window);
