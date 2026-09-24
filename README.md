# The Spirit of Gifu — 岐阜の魂 · 岐阜之魂

A trilingual (English / 日本語 / 繁體中文) book on Gifu Prefecture, Japan:
its mountains, rivers and forests, its history and festivals, and the crafts
it is known for — wood and hinoki, the furniture of Hida, hand-made guitars,
the swords and knives of Seki, Mino paper, Mino ware, lanterns and umbrellas,
and sake. Seventy-one pages, fifty-six drawn figures, three directories
(seventeen breweries, thirteen makers, thirty museums and workshops), a
chronology, a glossary of a hundred and two terms, no image files, and no
build step required to read it.

Open `index.html` in a browser, or `bundle.html` for the whole book in one
file. Both work straight from `file://` — no server, no install.

**Edition v0.0.0.1**

---

## The files

    index.html               the only page — hash routing (#sword, #breweries/index)
    bundle.html              the whole book in one self-contained file — generated

    assets/css/base.css      the design system
    assets/js/core.js        i18n, block renderer, navigation, search, theme, GIFU.NAV

    data/01-foundations.js    5 pages
    data/02-land.js           7 pages
    data/03-history.js        9 pages
    data/04-culture.js        8 pages
    data/05-wood.js          12 pages
    data/06-metal.js          7 pages
    data/07-crafts.js         5 pages
    data/08-sake.js           6 pages
    data/09-reference.js     12 pages
    data/10-index.js         search, figure and directory indexes — generated

    tools/build.js           regenerates data/10-index.js and bundle.html
    tools/check.js           render, language and parity checks
    tools/layoutcheck.js     Playwright overflow check, every page × 3 languages × 2 widths

`GIFU.NAV` in `assets/js/core.js` is the single source of truth for which
pages exist and in what order.

## What it covers

| Part | Pages |
| --- | --- |
| Foundations | overview, where to start, the spirit in six words, the name “Gifu”, Mino and Hida |
| Land & Water | mountains, plains and rock; rivers and water; the forests; sacred peaks; hot springs; living things; heat and snow |
| History | history at a glance; ancient Mino and Hida; the Toki and the Saitō; Nobunaga's Gifu; Sekigahara; the Edo patchwork; taming the three rivers; Meiji to now; people |
| Culture | festivals and floats; cormorant fishing; shrines and temples; Shirakawa-gō; old towns; the Nakasendō and old roads; food; village kabuki |
| Wood | the land of wood; hinoki and the Kiso Five; logging and forestry; timber down the rivers; Hida no takumi; joinery; Hida furniture; carving and lacquer; Enkū's Buddhas; wood in everyday things; building in wood; hand-made guitars |
| Metal & Blades | metal in Gifu; Seki, town of blades; the Mino sword; making a sword; polish, mounts and fittings; the cutlery industry; the kitchen knife |
| Paper, Clay & Cloth | Mino washi; Mino ware; lanterns, umbrellas and fans; dye and cloth; crafts at a glance |
| Sake | the sake of Gifu; rice, water and yeast; brewing in Hida; breweries by region; a directory of Gifu sake; doburoku, masu and cups |
| Journeys & Reference | five regions; five journeys; museums and workshops; a directory of makers; industry and economy; the next twenty years; the whole chronology; reference tables; questions and answers; glossary; every diagram; sources |

## How it is put together

- Each page is a data module — a tree of typed blocks — rendered by
  `assets/js/core.js`. There is no framework and no transpilation; the
  JavaScript is ES5-safe and runs from `file://`.
- Every string is either a plain string (identical in all three languages) or
  `{ en, ja, zh }`, resolved at render time by `L()`.
- Every figure is a function `svg(lang, L)` that returns SVG, so a diagram is
  redrawn in the reader's language. Nothing in this repository is an image file.
- Repeating vocabulary — sake grades, rice varieties, the kinds of maker, the
  five regions and forty-two municipalities — is written once in `core.js`
  (`GIFU.GRADE`, `GIFU.RICE`, `GIFU.KIND`, `GIFU.REGION`, `GIFU.MUNI`) and
  referenced by key from the data.
- The directory cross-indexes — by municipality and by rice — are computed from
  the directories themselves by `tools/build.js`, so they cannot drift out of
  step with the entries they point at.
- Language and theme are switched at runtime; English and light are the
  defaults, `?lang=en|ja|zh` overrides the stored choice.
- Links are authored as `page.html#anchor` and rewritten to `#page/anchor` at
  render time, so the same data works in `index.html` and in the bundle.

## Build and check

    npm install                 # jsdom and playwright, for the checkers only

    node tools/build.js         # regenerate data/10-index.js and bundle.html
    node tools/check.js         # render + language + parity
    node tools/layoutcheck.js   # every page × 3 languages × desktop and mobile

All three are clean for this edition: 71 pages, no render errors, no language
or parity findings, and 426 page renders with no layout problems.

## Design

The visual design, the page structure and the runtime are those of
[The Book of Sake](https://github.com/13studio-sudo/sake) by 13STUDIO, reused
under the MIT License: square corners everywhere, a pale, warm, low-chroma
palette in both themes, hairline rules, no shadows or gradients, a drawn 3px
scrollbar, and figures legible in monochrome. The only change to the design
system is a fix for pages without an in-page contents list, which now keep a
single full-width column on phones.

## Editorial rules

- The three languages are written together. Traditional Chinese uses the
  traditional forms of place names (飛驒, 關, 惠那).
- Numbers carry their year and unit, and the source is named on the page or on
  the Sources page.
- Where sources disagree the disagreement is stated; schematic diagrams say so
  on their face.
- The directories are selections, not rankings. A founding year is the maker's
  own; a dash means none is given.

## Sources

Compiled from public sources — Gifu Prefecture and its municipalities, the
national ministries and agencies, universities, museums and the makers
themselves — consulted in September 2026. The Sources page in the book lists
them with links and explains which chapters rest most directly on primary
documents.

## Credits

Written, drawn and built by **han-chikuma** with **Claude**.
Design system and runtime from *The Book of Sake* by **13STUDIO** (MIT).
See `LICENSE` for both notices.
