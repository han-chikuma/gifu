/* =============================================================
   THE SPIRIT OF GIFU — Paper, Clay & Cloth
   Page modules, concatenated. Each page is one
   GIFU.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ----------------------------------------------- washi */
GIFU.pages["washi"] = {
  kicker: { en: "Paper, Clay & Cloth · 01", ja: "紙・土・布 · 01", zh: "紙・土・布 · 01" },
  title:  { en: "Mino Washi", ja: "美濃和紙", zh: "美濃和紙" },
  jp: "本美濃紙 · 楮 · 流し漉き · 蕨生 · 牧谷 · ユネスコ無形文化遺産",
  lede: {
    en: "The oldest paper surviving in Japan is a set of household registers from the year 702, and some of them are from Mino. Thirteen centuries later the valleys of the Itadori river above the town of Mino still make paper by hand from the inner bark of the paper mulberry, and the finest of it, Honminoshi, is one of the three hand-made papers inscribed by UNESCO in 2014 as the intangible heritage of Japanese washi.",
    ja: "日本に現存する最古の紙は大宝2年（702年）の戸籍であり、そのなかには美濃のものがある。千三百年を経たいまも、美濃市の上流、板取川の谷では、楮の内皮から手で紙が漉かれている。その最高のものである本美濃紙は、2014年にユネスコ無形文化遺産「和紙：日本の手漉和紙技術」として記載された三つの紙の一つである。",
    zh: "日本現存最古老的紙，是 702 年的一批戶籍文書，其中有些來自美濃。一千三百年後，美濃市上游板取川的河谷仍以構樹的內皮手工抄紙；其中最精良的「本美濃紙」，是 2014 年列入聯合國教科文組織非物質文化遺產「和紙：日本手漉和紙技術」的三種紙之一。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"How Mino paper is made by hand, schematic. The inner bark of the paper mulberry, <em>kōzo</em>, is soaked, bleached in running water, cooked, picked clean of specks by hand and beaten into fibre. In the vat the fibre is mixed with water and <em>neri</em>, a slippery extract of the root of <em>tororo-aoi</em> that keeps the fibres suspended. The papermaker scoops and sways the mould back and forth and side to side — the Mino method — so that thin layers of fibre cross and lock, then the sheets are pressed and dried on boards.",
        ja:"美濃紙の手漉き（模式図）。楮の内皮（白皮）を水に浸し、流水にさらし、煮て、ちりを手で一つずつ取り除き、叩いて繊維にする。漉き舟では繊維を水とネリ——トロロアオイの根からとる粘液で、繊維を水中に散らばらせておく——に混ぜる。漉き手は簀桁で汲み、縦にも横にも揺する——美濃の漉き方——ので、薄い繊維の層が交差して絡み合う。漉いた紙は圧して水を切り、板に張って乾かす。",
        zh:"美濃紙的手工抄造（示意圖）。構樹的內皮（楮）經浸泡、在流水中漂白、蒸煮、以手逐一挑除雜質，再搥打成纖維。在紙槽中，纖維與水以及「黏液」（ネリ）——取自黃蜀葵根部、能使纖維懸浮的滑稠汁液——混合。抄紙師以簾框撈起紙漿，前後左右搖動——即美濃的抄法——讓一層層薄纖維交錯纏結，之後壓去水分，貼在木板上乾燥。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Steps of hand papermaking in Mino">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FROM BARK TO SHEET", ja:"皮から紙へ", zh:"從樹皮到紙張" }) + '</text>';
        var steps = [
          [{en:"Bark",ja:"楮の皮",zh:"楮皮"}, {en:"inner bark of kōzo",ja:"楮の白皮",zh:"構樹內皮"}],
          [{en:"Soak & bleach",ja:"さらす",zh:"浸泡漂白"}, {en:"in running water",ja:"流水で",zh:"在流水中"}],
          [{en:"Cook",ja:"煮る",zh:"蒸煮"}, {en:"with alkali",ja:"アルカリで",zh:"加鹼"}],
          [{en:"Pick clean",ja:"ちり取り",zh:"挑除雜質"}, {en:"by hand",ja:"冷水のなか手で",zh:"於冷水中手工"}],
          [{en:"Beat",ja:"叩解",zh:"搥打"}, {en:"into loose fibre",ja:"繊維をほぐす",zh:"打散成纖維"}],
          [{en:"Form",ja:"漉く",zh:"抄造"}, {en:"sway both ways",ja:"縦横に揺する",zh:"前後左右搖動"}],
          [{en:"Press & dry",ja:"圧す・干す",zh:"壓水與乾燥"}, {en:"on boards",ja:"板干し",zh:"貼板晾乾"}]
        ];
        steps.forEach(function (st, i) {
          var x = 40 + i * 100, y = 70;
          s += '<rect x="' + x + '" y="' + y + '" width="86" height="46" fill="' + (i === 5 ? "#E9ECEE" : "#F0EDE4") + '" stroke="#7C6B52"/>' +
               '<text x="' + (x + 43) + '" y="' + (y + 20) + '" text-anchor="middle" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L(st[0]) + '</text>' +
               '<text x="' + (x + 43) + '" y="' + (y + 36) + '" text-anchor="middle" ' + F + ' font-size="8.5" fill="#55504A">' + L(st[1]) + '</text>';
          if (i < 6) s += '<path d="M' + (x + 86) + ' ' + (y + 23) + ' L' + (x + 100) + ' ' + (y + 23) + '" stroke="#55504A"/>';
        });
        /* vat and mould detail */
        s += '<rect x="80" y="170" width="300" height="80" fill="#E0E7E9" stroke="#8FA6AE"/>' +
             '<text x="92" y="190" ' + F + ' font-size="10" fill="#5E7780">' + L({en:"vat: water + fibre + neri (tororo-aoi)",ja:"漉き舟：水＋繊維＋ネリ（トロロアオイ）",zh:"紙槽：水＋纖維＋黏液（黃蜀葵）"}) + '</text>' +
             '<rect x="150" y="200" width="160" height="10" fill="#EADCC1" stroke="#201E1B"/>' +
             '<text x="230" y="230" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"the mould (sugeta): a bamboo screen in a frame",ja:"簀桁：竹の簀を桁に挟んだもの",zh:"簾框：夾在框中的竹簾"}) + '</text>';
        /* arrows sway */
        s += '<path d="M470 200 L620 200" stroke="#201E1B" stroke-width="1.4"/><path d="M470 200 l8 -4 l0 8 z M620 200 l-8 -4 l0 8 z" fill="#201E1B"/>' +
             '<path d="M545 160 L545 240" stroke="#201E1B" stroke-width="1.4"/><path d="M545 160 l-4 8 l8 0 z M545 240 l-4 -8 l8 0 z" fill="#201E1B"/>' +
             '<text x="545" y="260" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"Mino sways the mould both ways",ja:"美濃は縦にも横にも揺する",zh:"美濃抄法：前後左右都搖動"}) + '</text>' +
             '<text x="545" y="274" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"fibres cross: thin, even, strong",ja:"繊維が交わり、薄く均一で強い",zh:"纖維交錯：薄、均勻而強韌"}) + '</text>' +
             '<text x="30" y="318" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — each workshop has its own practice; Honminoshi prescribes materials and methods strictly.",ja:"模式図——工房ごとにやり方がある。本美濃紙は原料と工程を厳しく定めている。",zh:"示意圖——各工坊做法不同；本美濃紙對原料與工序有嚴格規定。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"history",
      title:{ en:"Thirteen centuries of paper", ja:"千三百年の紙", zh:"一千三百年的紙" }, jp:"正倉院 · 美濃紙 · 上有知",
      body:[
        { t:"p", text:{
          en:"Among the treasures of the Shōsōin at Nara are household registers made in 702 for the provinces of Mino, Chikuzen and Buzen; they are the oldest paper that survives in Japan, and the Mino sheets are often said to be the finest of them. By the late Middle Ages Mino paper was traded at regular paper markets and carried to Kyoto and beyond, and in the Edo period, shipped down the Nagara from the river port of Kōzuchi, it became the standard paper of Japan: the size of a Mino sheet, <em>Mino-ban</em>, was a common paper format, and its thin, even, strong <em>shōji-gami</em> glazed the sliding screens of houses across the country. See <a href=\"towns.html\">Old Towns</a> for the merchants' street at Mino.",
          ja:"奈良の正倉院の宝物のなかに、702年に作られた御野（美濃）・筑前・豊前の戸籍がある。日本に現存する最古の紙であり、美濃の紙はそのなかで最も優れているとしばしばいわれる。中世の後期には美濃紙は定期の紙市で取引されて京やその先へ運ばれ、江戸時代には上有知の川湊から長良川を下って、日本の標準の紙となった。美濃紙の寸法「美濃判」は紙の一般的な規格となり、薄く均一で強い障子紙は全国の家の障子に張られた。美濃の商人の町については<a href=\"towns.html\">町並み</a>を参照。",
          zh:"奈良正倉院的寶物中，有 702 年為美濃（御野）、筑前、豐前三國製作的戶籍文書；它們是日本現存最古老的紙，而美濃的紙常被認為是其中最精良的。到了中世後期，美濃紙已在定期的紙市中交易，並運往京都乃至更遠之地；江戶時代，它從上有知的河港沿長良川而下，成為日本的標準用紙：美濃紙的尺寸「美濃判」是常見的紙張規格，其薄而均勻、強韌的障子紙，糊在全國住家的紙拉門上。美濃商人街請見<a href=\"towns.html\">老街町並</a>。" } }
      ]
    },

    { t:"section", id:"honmino",
      title:{ en:"Honminoshi", ja:"本美濃紙", zh:"本美濃紙" }, jp:"重要無形文化財 · 2014 ユネスコ",
      body:[
        { t:"p", text:{
          en:"<strong>Honminoshi</strong>, “true Mino paper”, is the strictly defined form of the craft. It must be made only from kōzo of a particular high-grade variety grown in Japan, with neri from tororo-aoi, by the traditional sequence of bleaching in water, cooking with an alkali, picking clean by hand and swaying the mould both ways, and dried on wooden boards in the sun. The technique of the Honminoshi preservation society was designated an Important Intangible Cultural Property of Japan in 1969, and in 2014 UNESCO inscribed <em>Washi, craftsmanship of traditional Japanese hand-made paper</em>, covering three papers — Honminoshi, Sekishū-banshi of Shimane and Hosokawa-shi of Saitama.",
          ja:"<strong>本美濃紙</strong>は、この技の最も厳しく定められた形である。原料は国内産の特定の良質な楮のみ、ネリはトロロアオイ、工程は水さらし、アルカリによる煮熟、手によるちり取り、縦横に揺する流し漉き、そして板干しによる天日乾燥という伝統の手順によらなければならない。本美濃紙保存会の技は1969年に国の重要無形文化財に指定され、2014年、ユネスコは本美濃紙・島根の石州半紙・埼玉の細川紙の三つを含む「和紙：日本の手漉和紙技術」を無形文化遺産に記載した。",
          zh:"<strong>本美濃紙</strong>是這門技藝定義最嚴格的形式。原料只能用日本國產的特定優質楮，黏液須取自黃蜀葵，並依循傳統工序：水中漂白、加鹼蒸煮、手工挑除雜質、前後左右搖動的流漉，最後貼在木板上日曬乾燥。本美濃紙保存會的技術於 1969 年獲指定為國家重要無形文化財；2014 年，聯合國教科文組織把「和紙：日本手漉和紙技術」列入非物質文化遺產，涵蓋本美濃紙、島根的石州半紙與埼玉的細川紙三種紙。" } }
      ]
    },

    { t:"section", id:"now",
      title:{ en:"Paper today", ja:"いまの紙", zh:"今日的紙" }, jp:"蕨生 · 牧谷 · あかりアート展",
      body:[
        { t:"p", text:{
          en:"Machine paper cut the number of hand-papermaking households in Mino from thousands at the start of the twentieth century to a few dozen at its end. The survivors are concentrated in the Warabi and Makidani districts along the Itadori river, a tributary of the Nagara, and they now make paper for shōji and lanterns, for calligraphy, for artists and designers, and for the conservation of books, prints and paintings, where thin, long-fibred Japanese tissue is used by restorers around the world. Mino washi was designated a national traditional craft in 1985. Each October the town's udatsu street is lined with lamps of Mino paper for the <strong>Mino Washi Akari Art Exhibition</strong>, and the Mino Washi no Sato museum by the Itadori river lets visitors try forming a sheet.",
          ja:"機械漉きの紙は、美濃の手漉きの家を、二十世紀の初めの数千から終わりには数十にまで減らした。残った工房は長良川の支流・板取川沿いの蕨生と牧谷に集まり、障子や提灯のための紙、書道の紙、芸術家やデザイナーのための紙、そして書物・版画・絵画の修復のための紙を漉いている。修復の分野では、薄く繊維の長い和紙が世界中の修復家に使われている。美濃和紙は1985年に国の伝統的工芸品に指定された。毎年十月には、うだつの町並みに美濃和紙の灯りが並ぶ<strong>美濃和紙あかりアート展</strong>が開かれ、板取川のほとりの美濃和紙の里会館では紙漉きを体験できる。",
          zh:"機器造紙使美濃的手漉紙戶，從二十世紀初的數千戶減少到世紀末的數十戶。倖存的工坊集中在長良川支流板取川沿岸的蕨生與牧谷，如今為紙拉門與燈籠、書法、藝術家與設計師，以及書籍、版畫與繪畫的修復而抄紙——在修復領域，輕薄且纖維長的日本紙被世界各地的修復師使用。美濃和紙於 1985 年獲指定為國家傳統工藝品。每年十月，<strong>美濃和紙燈光藝術展</strong>讓卯建街道排滿美濃紙燈；板取川畔的美濃和紙之里會館則可讓遊客體驗抄紙。" } }
      ]
    },

    { t:"note", label:{ en:"Telling hand-made paper", ja:"手漉きを見分ける", zh:"辨識手漉紙" }, text:{
      en:"Hold a sheet to the light. In hand-made washi the long kōzo fibres show as a fine web running every way, because the mould is rocked both back and forth and from side to side as the sheet forms; the edges are soft and uneven where it left the mould; and it tears with difficulty in any direction. Machine-made paper sold as “washi” is more uniform, its fibres lie mostly one way, and it tears much more easily along that line.",
      ja:"紙を光にかざしてみるとよい。手漉きの和紙では、楮の長い繊維があらゆる方向に走る細かな網目となって見える。漉くときに簀桁を前後にも左右にも揺するからである。縁は簀桁を離れたところで柔らかく不揃いになり、どの方向にも裂けにくい。「和紙」として売られる機械漉きの紙はより均一で、繊維がおおむね一方向にそろい、その向きにはずっと裂けやすい。",
      zh:"把紙舉向光源看看。手漉和紙中，楮樹的長纖維呈現為朝各個方向延伸的細密網紋，因為抄紙時抄紙框既前後搖動、也左右搖動；紙緣在離開抄紙框之處柔軟而參差；無論朝哪個方向都不易撕開。以「和紙」之名販售的機器紙則較為均勻，纖維大多朝同一方向排列，沿著那個方向撕就容易得多。" } },

    { t:"related", items:[
      { href:"lanterns.html", why:{ en:"What Gifu makes from Mino paper.", ja:"岐阜が美濃紙で作るもの。", zh:"岐阜以美濃紙製作的器物。" } },
      { href:"towns.html", why:{ en:"The paper merchants' street at Mino.", ja:"美濃の紙問屋の町並み。", zh:"美濃的紙商街道。" } },
      { href:"rivers.html", why:{ en:"The clear water paper needs.", ja:"紙に要る清らかな水。", zh:"造紙所需的清水。" } },
      { href:"register.html", why:{ en:"All of Gifu's designated crafts.", ja:"岐阜の指定工芸品のすべて。", zh:"岐阜所有指定工藝品。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- minoyaki */
GIFU.pages["minoyaki"] = {
  kicker: { en: "Paper, Clay & Cloth · 02", ja: "紙・土・布 · 02", zh: "紙・土・布 · 02" },
  title:  { en: "Mino Ware", ja: "美濃焼", zh: "美濃燒" },
  jp: "志野 · 織部 · 黄瀬戸 · 瀬戸黒 · 多治見 · 土岐 · 瑞浪 · 可児",
  lede: {
    en: "The low hills of Tōnō — Tajimi, Toki, Mizunami and Kani — hold the clays that made Gifu the largest producer of tableware in Japan. Their kilns created, in the late sixteenth century, the tea ceramics that define the Momoyama taste: the thick white of Shino, the copper green and wilful shapes of Oribe, the yellow of Ki-Seto and the black of Seto-guro. Today the same valleys make about seven in ten of the Western-style plates and cups made in Japan.",
    ja: "東濃の低い丘陵——多治見・土岐・瑞浪・可児——には、岐阜を日本最大の食器の産地にした粘土が眠っている。その窯は十六世紀後半、桃山の美意識を決定づける茶陶を生んだ。志野の厚い白、織部の銅の緑と奔放な形、黄瀬戸の黄、瀬戸黒の黒である。いま同じ谷は、日本で作られる洋食器のおよそ七割を作っている。",
    zh: "東濃的低矮丘陵——多治見、土岐、瑞浪與可兒——蘊藏著使岐阜成為日本最大餐具產地的黏土。十六世紀後期，這裡的窯場創造出定義桃山審美的茶陶：志野厚重的白、織部的銅綠與奔放造形、黃瀨戶的黃，以及瀨戶黑的黑。如今，同樣的河谷生產日本約七成的西式杯盤。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Left: the four great glazes of Momoyama Mino, schematic swatches. Right: Gifu's share of Japan's shipments of ceramic tableware, the largest of any prefecture in both categories (Gifu Prefecture statistics, 2025).",
        ja:"左：桃山の美濃の四つの代表的な釉（模式的な色見本）。右：日本の陶磁器食器の出荷に占める岐阜県の割合。いずれの分類でも都道府県で最大（岐阜県統計、2025年）。",
        zh:"左：桃山時代美濃四大代表釉色（示意色樣）。右：岐阜縣在日本陶瓷餐具出貨中所占比例，兩個類別皆為全國都道府縣之冠（岐阜縣統計，2025 年）。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Mino glazes and Gifu share of tableware shipments">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"GLAZES AND NUMBERS", ja:"釉と数字", zh:"釉色與數字" }) + '</text>';
        var cups = [
          [{en:"Shino",ja:"志野",zh:"志野"}, "#F6F2EA", "#EEE1DF", {en:"thick white feldspar glaze",ja:"厚い長石釉の白",zh:"厚長石釉之白"}],
          [{en:"Oribe",ja:"織部",zh:"織部"}, "#E0E6DB", "#FBFAF7", {en:"copper green, bold shapes",ja:"銅の緑と奔放な形",zh:"銅綠與奔放造形"}],
          [{en:"Ki-Seto",ja:"黄瀬戸",zh:"黃瀨戶"}, "#EADCC1", "#E0E6DB", {en:"soft yellow ash glaze",ja:"やわらかな黄の灰釉",zh:"柔和的黃色灰釉"}],
          [{en:"Seto-guro",ja:"瀬戸黒",zh:"瀨戶黑"}, "#55504A", "#55504A", {en:"black, pulled hot from the kiln",ja:"焼成中に引き出した黒",zh:"燒成中自窯取出的黑"}]
        ];
        cups.forEach(function (c, i) {
          var x = 40 + (i % 2) * 175, y = 60 + Math.floor(i / 2) * 130;
          s += '<path d="M' + (x + 20) + ' ' + (y + 20) + ' L' + (x + 110) + ' ' + (y + 20) + ' L' + (x + 102) + ' ' + (y + 80) + ' C' + (x + 90) + ' ' + (y + 90) + ' ' + (x + 40) + ' ' + (y + 90) + ' ' + (x + 28) + ' ' + (y + 80) + ' Z" fill="' + c[1] + '" stroke="#201E1B" stroke-width="1.2"/>';
          if (i === 0) s += '<path d="M' + (x + 44) + ' ' + (y + 44) + ' q8 -8 16 0 q8 8 16 0" fill="none" stroke="#7C6B52" stroke-width="1.2"/>';
          if (i === 1) s += '<path d="M' + (x + 20) + ' ' + (y + 20) + ' L' + (x + 70) + ' ' + (y + 20) + ' L' + (x + 60) + ' ' + (y + 88) + ' C' + (x + 44) + ' ' + (y + 90) + ' ' + (x + 34) + ' ' + (y + 86) + ' ' + (x + 28) + ' ' + (y + 80) + ' Z" fill="#7C9A7E" fill-opacity="0.55"/>' +
                           '<path d="M' + (x + 78) + ' ' + (y + 40) + ' l8 12 l8 -12 M' + (x + 80) + ' ' + (y + 60) + ' l12 0" stroke="#55504A" fill="none"/>';
          s += '<text x="' + (x + 128) + '" y="' + (y + 44) + '" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(c[0]) + '</text>';
          s += '<text x="' + (x + 20) + '" y="' + (y + 108) + '" ' + F + ' font-size="9.5" fill="#55504A">' + L(c[3]) + '</text>';
        });
        /* share bars */
        var X0 = 440, W = 280;
        s += '<text x="' + X0 + '" y="70" ' + F + ' font-size="10" fill="#8B857C" letter-spacing="1.4">' + L({en:"GIFU'S SHARE OF JAPAN'S SHIPMENTS",ja:"全国出荷に占める岐阜県の割合",zh:"岐阜占全國出貨比例"}) + '</text>';
        var bars = [[{en:"Western-style tableware",ja:"洋飲食器",zh:"西式餐具"}, 71.1], [{en:"Japanese-style tableware",ja:"和飲食器",zh:"日式餐具"}, 44.8]];
        bars.forEach(function (b, i) {
          var y = 100 + i * 80;
          s += '<text x="' + X0 + '" y="' + y + '" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(b[0]) + '</text>' +
               '<rect x="' + X0 + '" y="' + (y + 10) + '" width="' + W + '" height="24" fill="#F0EDE4" stroke="#CDC6B9"/>' +
               '<rect x="' + X0 + '" y="' + (y + 10) + '" width="' + (W * b[1] / 100).toFixed(1) + '" height="24" fill="#EADCC1" stroke="#7C6B52"/>' +
               '<text x="' + (X0 + W * b[1] / 100 + 8).toFixed(1) + '" y="' + (y + 27) + '" ' + F + ' font-size="11" fill="#201E1B">' + b[1] + '%</text>';
        });
        s += '<text x="' + X0 + '" y="276" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"First among the prefectures in both",ja:"いずれも全国一位",zh:"兩項皆居全國第一"}) + '</text>' +
             '<text x="30" y="318" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Swatches schematic; share figures from Gifu Prefecture, 2025.",ja:"色見本は模式。割合は岐阜県（2025年）による。",zh:"色樣為示意；比例數據出自岐阜縣（2025 年）。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"history",
      title:{ en:"A valley of kilns", ja:"窯の谷", zh:"窯之谷" }, jp:"須恵器 · 灰釉 · 山茶碗 · 大窯 · 登窯",
      body:[
        { t:"p", text:{
          en:"The clays of Tōnō were laid down in ancient lakes, and potters have used them for about thirteen centuries: first for Sue stoneware, then for ash-glazed wares, then for the plain “mountain bowls” of the Middle Ages. From the late fifteenth century larger single-chamber kilns, <em>ōgama</em>, were built on the hillsides, and in them the Mino potters made the tea ceramics of the Momoyama period. Around 1600 the multi-chamber climbing kiln, <em>noborigama</em>, arrived from Karatsu in Kyushu; the earliest in Mino, at Motoyashiki in Toki, is a national historic site. Through the Edo period the valleys made everyday ware for much of eastern Japan, from the nineteenth century porcelain as well, and after 1868 they became an industrial region making tableware for export and for the whole country.",
          ja:"東濃の粘土は太古の湖に積もったもので、陶工はそれを千三百年ほど使ってきた。はじめは須恵器、ついで灰釉陶器、そして中世の素朴な山茶碗である。十五世紀後半からは山腹に大きな単室の大窯が築かれ、そこで美濃の陶工は桃山時代の茶陶を焼いた。1600年ごろには九州の唐津から連房式の登窯が伝わった。美濃で最初のものである土岐の元屋敷の窯は国の史跡である。江戸時代を通じてこの谷は東日本の広い範囲に日用の器を送り、十九世紀からは磁器も作り、1868年以後は輸出と全国に向けて食器を作る工業地帯となった。",
          zh:"東濃的黏土沉積於遠古的湖泊中，陶工使用它們已約一千三百年：先是須惠器，再是灰釉陶，然後是中世素樸的「山茶碗」。十五世紀後期起，山坡上築起大型單室窯「大窯」，美濃陶工在其中燒出桃山時代的茶陶。約 1600 年，多室的登窯從九州唐津傳入；美濃最早的一座——土岐的元屋敷窯——是國家史跡。整個江戶時代，這些河谷為東日本廣大地區供應日常器皿，十九世紀起也燒製瓷器；1868 年以後，則成為為出口與全國市場生產餐具的工業地區。" } }
      ]
    },

    { t:"section", id:"styles",
      title:{ en:"The Momoyama styles", ja:"桃山の様式", zh:"桃山諸樣式" }, jp:"志野 · 織部 · 黄瀬戸 · 瀬戸黒",
      body:[
        { t:"defs", items:[
          { term:{en:"Shino",ja:"志野",zh:"志野"}, jp:"しの", def:{en:"The first white-glazed ware made in Japan: a thick, milky glaze of feldspar, often crawled and pitted, over simple iron-oxide drawings — grasses, a bridge, a crane — that show through as soft red or grey.",ja:"日本で初めて作られた白い釉の焼き物。長石の厚く乳白の釉がしばしば縮れ、ピンホールを見せ、その下の鉄絵——草、橋、鶴——がやわらかな赤や鼠色に透ける。",zh:"日本第一種白釉陶器：厚而乳白的長石釉常有縮釉與針孔，底下以鐵料畫出的簡單圖樣——草、橋、鶴——透出柔和的紅或灰色。"} },
          { term:{en:"Oribe",ja:"織部",zh:"織部"}, jp:"おりべ", def:{en:"Named after the warrior tea master Furuta Oribe (1543/44–1615), who was born in Mino: splashes of copper-green glaze beside painted geometric and textile patterns, on vessels deliberately distorted — squared, lobed, fan-shaped, asymmetric.",ja:"美濃出身の武将茶人・古田織部（1543/44〜1615年）にちなむ。銅緑の釉を掛け分け、その脇に幾何学や染織の文様を描き、器はわざと歪める——角、輪花、扇形、非対称。",zh:"得名於出身美濃的武將茶人古田織部（1543/44–1615）：在刻意變形——方形、瓣形、扇形、不對稱——的器物上，一側潑灑銅綠釉，一側繪上幾何與織物紋樣。"} },
          { term:{en:"Ki-Seto",ja:"黄瀬戸",zh:"黃瀨戶"}, jp:"きぜと", def:{en:"“Yellow Seto”: a soft, matt yellow ash glaze, often with incised plants touched with green copper and brown iron.",ja:"やわらかくつやの少ない黄色の灰釉。しばしば線彫りの草花に銅の緑や鉄の茶を点じる。",zh:"「黃瀨戶」：柔和、光澤低的黃色灰釉，常在刻劃的草花上點染銅綠與鐵褐。"} },
          { term:{en:"Seto-guro",ja:"瀬戸黒",zh:"瀨戶黑"}, jp:"せとぐろ", def:{en:"Tea bowls pulled from the kiln with tongs at full heat and cooled at once, which turns the iron glaze a deep black.",ja:"焼成の最中に窯から鉄鋏で引き出して急に冷まし、鉄釉を深い黒にした茶碗。",zh:"在高溫燒成中以鐵鉗從窯內取出、立即冷卻，使鐵釉轉為深黑的茶碗。"} }
        ] },
        { t:"p", text:{
          en:"For three centuries these wares were thought to come from Seto in Owari. In 1930 the potter Arakawa Toyozō found a shard of Shino with a bamboo-shoot design at an old kiln site at Mutabora in Kani, proving that Shino had been made in Mino; he rebuilt a kiln there and in 1955 became one of the first Living National Treasures, for Shino and Seto-guro. Later holders of the title from Tōnō include Suzuki Osamu for Shino (1994), Katō Takuo for Persian-inspired lustre and three-colour wares (1995) and Katō Kōzō for Seto-guro (2010).",
          ja:"三世紀のあいだ、これらの焼き物は尾張の瀬戸で作られたと考えられていた。1930年、陶芸家の荒川豊蔵は可児の牟田洞の古窯跡で筍の絵のある志野の陶片を見つけ、志野が美濃で焼かれたことを証した。彼はそこに窯を築き直し、1955年、志野と瀬戸黒で最初の人間国宝の一人となった。のちに東濃からは、志野の鈴木藏（1994年）、ペルシアに学んだラスター彩や三彩の加藤卓男（1995年）、瀬戸黒の加藤孝造（2010年）が同じ称号を受けている。",
          zh:"三百年來，人們一直以為這些陶器產自尾張的瀨戶。1930 年，陶藝家荒川豐藏在可兒牟田洞的古窯址發現一片繪有竹筍紋的志野陶片，證明志野是在美濃燒成的；他在當地重築窯場，並於 1955 年以志野與瀨戶黑成為首批人間國寶之一。之後，東濃又有以志野獲認定的鈴木藏（1994 年）、以受波斯啟發的虹彩與三彩陶獲認定的加藤卓男（1995 年），以及以瀨戶黑獲認定的加藤孝造（2010 年）。" } }
      ]
    },

    { t:"section", id:"now",
      title:{ en:"Japan's tableware maker", ja:"日本の食器の産地", zh:"日本的餐具產地" }, jp:"洋飲食器 · タイル · 陶器まつり",
      body:[
        { t:"p", text:{
          en:"Mino ware was designated a national traditional craft in 1978, but most of what the region makes is not traditional at all: it is the plain white plates, bowls and mugs of Japanese homes, restaurants and hotels, and Gifu's share of Japan's shipments — 71.1 per cent for Western-style tableware and 44.8 per cent for Japanese-style — is the largest of any prefecture. Kasahara in Tajimi makes most of Japan's mosaic tiles, celebrated since 2016 in a museum designed by the architect Fujimori Terunobu as a hill of earth. Pottery fairs in the spring draw crowds to Tajimi and Toki, and the International Ceramics Festival Mino, held every few years since 1986, brings ceramic artists from around the world.",
          ja:"美濃焼は1978年に国の伝統的工芸品に指定されたが、地域が作るものの大半はまったく伝統的ではない。日本の家庭や飲食店やホテルの白無地の皿や鉢やマグカップであり、全国の出荷に占める岐阜県の割合——洋飲食器71.1パーセント、和飲食器44.8パーセント——は都道府県で最大である。多治見の笠原は日本のモザイクタイルの大半を作り、2016年からは建築家・藤森照信が土の丘のように設計した博物館がそれを伝えている。春の陶器まつりは多治見や土岐に人を集め、1986年から数年ごとに開かれる国際陶磁器フェスティバル美濃は世界の陶芸家を呼び寄せる。",
          zh:"美濃燒於 1978 年獲指定為國家傳統工藝品，但這個地區生產的大多一點也不傳統：它們是日本家庭、餐廳與飯店裡素白的盤、碗與馬克杯；岐阜在全國出貨中的占比——西式餐具 71.1%、日式餐具 44.8%——是全國都道府縣之冠。多治見的笠原生產日本大部分的馬賽克磁磚，2016 年起由建築師藤森照信設計、宛如一座土丘的博物館展示其歷史。春季的陶器市集吸引人潮湧向多治見與土岐；自 1986 年起每隔數年舉辦的國際陶瓷節美濃，則匯聚世界各地的陶藝家。" } }
      ]
    },

    { t:"related", items:[
      { href:"doburoku.html", why:{ en:"Mino cups for sake.", ja:"酒のための美濃の器。", zh:"盛酒的美濃杯。" } },
      { href:"landform.html", why:{ en:"The ancient lakes that left the clay.", ja:"粘土を残した太古の湖。", zh:"留下黏土的遠古湖泊。" } },
      { href:"people.html", why:{ en:"Furuta Oribe and other Mino figures.", ja:"古田織部と美濃の人々。", zh:"古田織部與其他美濃人物。" } },
      { href:"register.html", why:{ en:"All of Gifu's designated crafts.", ja:"岐阜の指定工芸品のすべて。", zh:"岐阜所有指定工藝品。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- lanterns */
GIFU.pages["lanterns"] = {
  kicker: { en: "Paper, Clay & Cloth · 03", ja: "紙・土・布 · 03", zh: "紙・土・布 · 03" },
  title:  { en: "Lanterns, Umbrellas & Fans", ja: "提灯・和傘・団扇", zh: "燈籠、和傘與團扇" },
  jp: "岐阜提灯 · AKARI · 岐阜和傘 · 加納 · 岐阜うちわ · 水うちわ",
  lede: {
    en: "Mino paper and Mino bamboo meet in the crafts of Gifu city: painted paper lanterns for the Bon festival, oiled-paper umbrellas from the old castle town of Kanō, and flat fans, including the translucent “water fans” of summer. Gifu makes more lanterns and more Japanese umbrellas than anywhere else in Japan, and in 1951 its lantern makers gave Isamu Noguchi the material for the most famous modern lamp to come out of Japan.",
    ja: "美濃の紙と美濃の竹は、岐阜市の工芸で出会う。盆のための絵を描いた紙の提灯、旧城下町・加納の油紙の和傘、そして夏の透きとおる「水うちわ」を含む団扇である。岐阜は日本で最も多くの提灯と和傘を作り、1951年には、その提灯の職人がイサム・ノグチに、日本から生まれた最も名高い近代の照明の素材を与えた。",
    zh: "美濃的紙與美濃的竹，在岐阜市的工藝中相遇：盂蘭盆節用的彩繪紙燈籠、舊城下町加納的油紙和傘，以及團扇——包括夏天那種近乎透明的「水團扇」。岐阜生產的燈籠與和傘都是全日本最多的；1951 年，這裡的燈籠匠人還為野口勇提供了材料，造就了日本最著名的現代燈具。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Three things of paper and bamboo, schematic. A Gifu lantern is built on a wooden mould: fine bamboo ribs are wound on it, very thin paper is pasted over them, and the mould is taken apart and removed, leaving a shell that folds flat. A Japanese umbrella has long ribs hinged at a top hub and shorter struts running to a sliding hub; oiled paper is glued between the ribs. A flat fan is a single piece of bamboo split into fine ribs and faced with paper.",
        ja:"紙と竹の三つの品（模式図）。岐阜提灯は木の型の上で作る。細い竹ひごを型に掛け、ごく薄い紙を貼り、型を分解して抜くと、たためる火袋が残る。和傘は、頭ろくろに付いた長い親骨と、手元ろくろへのびる短い小骨からなり、骨のあいだに油をひいた紙を貼る。団扇は一本の竹を細かく割いて骨とし、紙を貼る。",
        zh:"三件紙與竹的器物（示意圖）。岐阜燈籠在木製模具上製作：細竹篾繞在模具上，糊上極薄的紙，再拆開模具取出，留下可以折疊壓平的燈罩。和傘的長傘骨鉸接在頂部轆轤上，較短的撐骨連到可滑動的下轆轤，傘骨之間糊上上過油的紙。團扇則是把一根竹子劈成細骨，再貼上紙面。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 340" role="img" aria-label="Structure of a lantern, an umbrella and a fan">' +
          '<rect x="0.5" y="0.5" width="759" height="339" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"PAPER AND BAMBOO", ja:"紙と竹", zh:"紙與竹" }) + '</text>';
        /* lantern */
        s += '<rect x="112" y="64" width="56" height="12" fill="#55504A"/><rect x="112" y="244" width="56" height="12" fill="#55504A"/>' +
             '<path d="M112 76 C70 110 70 210 112 244 L168 244 C210 210 210 110 168 76 Z" fill="#F6F2EA" stroke="#7C6B52"/>';
        for (var r = 0; r < 14; r++) {
          var y = 84 + r * 11.5, t = (y - 160) / 84, half = 28 + 56 * Math.sqrt(Math.max(0, 1 - t * t)) * 0.9;
          s += '<line x1="' + (140 - half).toFixed(1) + '" y1="' + y + '" x2="' + (140 + half).toFixed(1) + '" y2="' + y + '" stroke="#B4AC9C" stroke-width="0.8"/>';
        }
        s += '<path d="M112 150 q14 -18 28 0 q14 18 28 0" fill="none" stroke="#7C9A7E" stroke-width="1.6"/><path d="M104 190 q18 -14 36 0 q18 14 36 0" fill="none" stroke="#C49A98" stroke-width="1.4"/>' +
             '<text x="140" y="282" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Gifu lantern",ja:"岐阜提灯",zh:"岐阜燈籠"}) + '</text>' +
             '<text x="140" y="298" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"fine ribs, thin painted paper",ja:"細いひごと薄い絵紙",zh:"細竹篾，薄彩繪紙"}) + '</text>';
        /* umbrella */
        var ux = 380, uy = 110;
        s += '<path d="M' + (ux - 120) + ' ' + (uy + 70) + ' Q' + ux + ' ' + (uy - 40) + ' ' + (ux + 120) + ' ' + (uy + 70) + ' Z" fill="#EEE1DF" stroke="#201E1B" stroke-width="1.2"/>';
        for (var k = 0; k <= 12; k++) {
          var ex = ux - 120 + k * 20, ey = uy + 70 - (k === 0 || k === 12 ? 0 : 0);
          s += '<line x1="' + ux + '" y1="' + (uy + 12) + '" x2="' + ex + '" y2="' + ey + '" stroke="#7C6B52" stroke-width="0.8"/>';
        }
        s += '<line x1="' + ux + '" y1="' + (uy + 12) + '" x2="' + ux + '" y2="' + (uy + 152) + '" stroke="#201E1B" stroke-width="2.4"/>' +
             '<rect x="' + (ux - 5) + '" y="' + (uy + 8) + '" width="10" height="10" fill="#55504A"/>' +
             '<rect x="' + (ux - 5) + '" y="' + (uy + 110) + '" width="10" height="10" fill="#55504A"/>';
        [-80, -40, 40, 80].forEach(function (dx) { s += '<line x1="' + ux + '" y1="' + (uy + 115) + '" x2="' + (ux + dx) + '" y2="' + (uy + 58) + '" stroke="#8B857C" stroke-width="0.9"/>'; });
        s += '<text x="' + (ux + 18) + '" y="' + (uy + 14) + '" ' + F + ' font-size="9" fill="#55504A">' + L({en:"top hub",ja:"頭ろくろ",zh:"上轆轤"}) + '</text>' +
             '<text x="' + (ux + 18) + '" y="' + (uy + 120) + '" ' + F + ' font-size="9" fill="#55504A">' + L({en:"sliding hub",ja:"手元ろくろ",zh:"下轆轤"}) + '</text>' +
             '<text x="' + ux + '" y="282" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Wagasa (Kanō)",ja:"和傘（加納）",zh:"和傘（加納）"}) + '</text>' +
             '<text x="' + ux + '" y="298" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"ribs, struts, oiled paper",ja:"親骨・小骨・油紙",zh:"傘骨、撐骨、油紙"}) + '</text>';
        /* uchiwa */
        var fx = 620, fy = 200;
        s += '<ellipse cx="' + fx + '" cy="' + (fy - 70) + '" rx="72" ry="64" fill="#E9ECEE" fill-opacity="0.75" stroke="#201E1B" stroke-width="1.2"/>';
        for (var q = -6; q <= 6; q++) {
          var ang = q * 0.22, lx = fx + Math.sin(ang) * 70, ly = fy - 70 - Math.cos(ang) * 62;
          s += '<line x1="' + fx + '" y1="' + (fy - 16) + '" x2="' + lx.toFixed(1) + '" y2="' + ly.toFixed(1) + '" stroke="#7C6B52" stroke-width="0.7"/>';
        }
        s += '<rect x="' + (fx - 5) + '" y="' + (fy - 16) + '" width="10" height="70" fill="#EADCC1" stroke="#201E1B"/>' +
             '<text x="' + fx + '" y="282" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Uchiwa",ja:"団扇",zh:"團扇"}) + '</text>' +
             '<text x="' + fx + '" y="298" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"one bamboo, split into ribs",ja:"一本の竹を割いた骨",zh:"一根竹子劈成扇骨"}) + '</text>' +
             '<text x="30" y="328" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — not to scale; rib counts reduced.",ja:"模式図——縮尺不同。骨の数は省略。",zh:"示意圖——未按比例；骨數經簡化。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"chochin",
      title:{ en:"Gifu lanterns", ja:"岐阜提灯", zh:"岐阜燈籠" }, jp:"盆提灯 · 1995 伝統的工芸品",
      body:[
        { t:"p", text:{
          en:"The <strong>Gifu chōchin</strong> is a lantern of extreme lightness: very thin Mino paper on fine bamboo ribs, with turned and lacquered wooden rings at the top and bottom, painted by hand with autumn grasses, flowers and landscapes, and lit from inside. It has been made in Gifu since at least the eighteenth century and is above all a lantern for <em>Bon</em>, the summer festival of the dead, when families hang lanterns to guide the spirits of their ancestors home; many are given in the first summer after a death. Gifu makes more lanterns than any other prefecture, and the Gifu chōchin was designated a national traditional craft in 1995.",
          ja:"<strong>岐阜提灯</strong>は、きわめて軽い提灯である。ごく薄い美濃紙を細い竹ひごに張り、上下に挽いて塗った木の輪をつけ、手で秋草や花や風景を描き、内から灯す。少なくとも十八世紀から岐阜で作られ、何よりも盆——先祖の霊を家へ導くために家々が提灯を掲げる夏の祭り——のための提灯であり、故人の初めての夏に贈られることも多い。岐阜県は都道府県で最も多くの提灯を作り、岐阜提灯は1995年に国の伝統的工芸品に指定された。",
          zh:"<strong>岐阜燈籠</strong>極其輕巧：極薄的美濃紙糊在細竹篾上，上下裝有車製上漆的木環，以手工繪上秋草、花卉與風景，從內部點亮。至少從十八世紀起岐阜便製作這種燈籠，它首先是為「盂蘭盆」而做——在這個夏季祭祀亡者的節日，家家戶戶掛起燈籠，引導祖先的靈魂回家；許多燈籠是在親人過世後的第一個夏天送出的。岐阜縣生產的燈籠是全國最多的，岐阜燈籠於 1995 年獲指定為國家傳統工藝品。" } },
        { t:"p", text:{
          en:"In 1951 the Japanese-American sculptor <strong>Isamu Noguchi</strong>, visiting Gifu, watched the cormorant fishing by the light of the lantern-hung boats and was asked by the city to help revive its lantern trade. He designed a lamp of mulberry paper on a bamboo spiral that could fold flat for shipping and called it <strong>AKARI</strong>, “light”. The Gifu lantern maker Ozeki has made AKARI ever since, in dozens of shapes, and they have been widely imitated around the world.",
          ja:"1951年、日系アメリカ人の彫刻家<strong>イサム・ノグチ</strong>は岐阜を訪れ、提灯を下げた舟の明かりのもとで鵜飼を見て、市から提灯産業の復興への協力を求められた。彼は竹ひごに楮の紙を張り、輸送のために平たくたためる照明をデザインし、<strong>AKARI</strong>——「明かり」——と名づけた。岐阜の提灯の作り手オゼキは以来ずっとAKARIを作りつづけ、その形は数十に及び、世界中で広く模倣されている。",
          zh:"1951 年，日裔美國雕塑家<strong>野口勇</strong>造訪岐阜，在掛著燈籠的船隻燈光下觀賞鵜飼，並受市政府之邀協助振興燈籠產業。他設計了一款以竹篾撐起楮紙、可折疊壓平以便運送的燈具，取名 <strong>AKARI</strong>（「光」）。岐阜的燈籠製造商 Ozeki 從此一直生產 AKARI，形狀多達數十種，並在世界各地被廣泛仿效。" } }
      ]
    },

    { t:"section", id:"wagasa",
      title:{ en:"The umbrellas of Kanō", ja:"加納の和傘", zh:"加納的和傘" }, jp:"岐阜和傘 · 蛇の目 · 番傘",
      body:[
        { t:"p", text:{
          en:"In the Edo period the samurai of the small Kanō domain, beside Gifu, made umbrellas as a side trade encouraged by their lords, and Kanō became the largest umbrella town in Japan. A <strong>Gifu wagasa</strong> has a shaft and many split-bamboo ribs, hinged at a turned wooden hub at the top and supported by shorter struts from a sliding hub below, with Mino paper glued between the ribs and oiled or lacquered to keep out the rain. Styles range from the plain, sturdy <em>bangasa</em> to the <em>janome-gasa</em>, the “snake's-eye” umbrella with a ring of contrasting colour, and parasols and dance umbrellas. The work is divided among specialists — rib makers, hub makers, paper-hangers, oilers — and the few who remain are the core of the national production: Gifu still makes more Japanese umbrellas than anywhere else, and Gifu wagasa is the most recent of the prefecture's crafts to be designated a national traditional craft.",
          ja:"江戸時代、岐阜の隣の小藩・加納藩の武士は、藩主の奨励のもと内職として傘を作り、加納は日本最大の傘の町となった。<strong>岐阜和傘</strong>は、柄と多くの割竹の骨からなり、骨は頭の挽きものの木のろくろに蝶番のように付き、下の手元ろくろからの短い骨に支えられる。骨のあいだに美濃紙を貼り、雨をはじくように油や漆を引く。形は、素朴で丈夫な番傘から、色違いの輪をあしらった蛇の目傘、日傘や舞傘まである。仕事は骨屋・ろくろ屋・張り師・油引きなどの専門に分かれ、残るわずかな職人が国内生産の中心をなしている。岐阜はいまも日本で最も多くの和傘を作り、岐阜和傘は県の工芸のなかで最も新しく国の伝統的工芸品に指定された。",
          zh:"江戶時代，岐阜旁小藩加納藩的武士在藩主鼓勵下以製傘為副業，加納因此成為日本最大的製傘之鄉。<strong>岐阜和傘</strong>由傘柄與許多劈竹傘骨構成，傘骨鉸接在頂部車製的木轆轤上，並由下方可滑動轆轤伸出的短撐骨支撐；傘骨之間糊上美濃紙，再上油或漆以防雨。款式從樸實耐用的「番傘」，到飾有對比色圓環的「蛇之目傘」，以及陽傘與舞傘。工作分由不同專業師傅承擔——傘骨師、轆轤師、糊紙師、上油師——而僅存的少數師傅構成了全國生產的核心：岐阜至今仍是日本製作和傘最多的地方，岐阜和傘也是縣內最新獲指定為國家傳統工藝品的工藝。" } }
      ]
    },

    { t:"section", id:"uchiwa",
      title:{ en:"Fans", ja:"団扇", zh:"團扇" }, jp:"岐阜うちわ · 水うちわ",
      body:[
        { t:"p", text:{
          en:"Gifu's flat fans, <em>uchiwa</em>, are made like the lanterns from local bamboo and Mino paper. The most delicate are the <strong>mizu-uchiwa</strong>, “water fans”: faced with a very thin paper and varnished so that it becomes translucent, they look cool and glassy in the light of a summer evening, and are said once to have been dipped in water to cool the air they moved. Only a few makers in Gifu city still produce them.",
          ja:"岐阜の団扇は、提灯と同じく地元の竹と美濃紙で作られる。最も繊細なのが<strong>水うちわ</strong>である。ごく薄い紙を貼ってニスを引き、透きとおらせたもので、夏の夕べの光のなかでガラスのように涼しげに見え、かつては水にくぐらせて風を冷たくしたともいわれる。いまも作るのは、岐阜市のわずかな作り手だけである。",
          zh:"岐阜的團扇與燈籠一樣，以當地竹子與美濃紙製作。其中最纖細的是<strong>水團扇</strong>（水うちわ）：貼上極薄的紙並塗上清漆，使其變得半透明，在夏日黃昏的光線中宛如玻璃般清涼；據說從前還會把它浸入水中，讓搧出的風更涼。如今仍在製作的，只有岐阜市的少數幾家。" } }
      ]
    },

    { t:"note", label:{en:"Keeping paper things",ja:"紙の品を保つ",zh:"紙製品的保存"}, text:{
      en:"Paper lanterns and umbrellas last for many years if they are kept dry and out of strong sun. Fold a lantern flat into its box after the Bon season. After rain, open an umbrella halfway and dry it in the shade before closing it, and store it closed rather than hanging open.",
      ja:"紙の提灯や傘は、湿気と強い日差しを避ければ何年ももつ。提灯は盆が過ぎたらたたんで箱に納める。雨のあとの傘は半開きにして日陰で乾かしてから閉じ、開いたまま吊るさずに閉じてしまっておく。",
      zh:"紙燈籠與紙傘只要保持乾燥、避開強烈日照，就能使用很多年。盂蘭盆節過後，把燈籠折平收進盒中。雨後的紙傘要半開放在陰涼處晾乾再收起，收納時要合起來，不要張開懸掛。" } },

    { t:"related", items:[
      { href:"washi.html", why:{ en:"The paper.", ja:"紙そのもの。", zh:"紙本身。" } },
      { href:"ukai.html", why:{ en:"The lantern-lit boats that inspired AKARI.", ja:"AKARIに着想を与えた灯りの舟。", zh:"啟發 AKARI 的燈火之舟。" } },
      { href:"towns.html", why:{ en:"Kawaramachi and the old towns.", ja:"川原町と古い町並み。", zh:"川原町與老街。" } },
      { href:"register.html", why:{ en:"All of Gifu's designated crafts.", ja:"岐阜の指定工芸品のすべて。", zh:"岐阜所有指定工藝品。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- textiles */
GIFU.pages["textiles"] = {
  kicker: { en: "Paper, Clay & Cloth · 04", ja: "紙・土・布 · 04", zh: "紙・土・布 · 04" },
  title:  { en: "Dye & Cloth", ja: "染めと織り", zh: "染與織" },
  jp: "郡上本染 · 藍 · 鯉のぼり · 飛騨さしこ · さるぼぼ · 尾州 · 岐阜アパレル",
  lede: {
    en: "Gifu's cloth runs from the handmade to the industrial. In Gujō-Hachiman a dyehouse still colours carp streamers with indigo and rinses them in the snow-fed river in midwinter; in Hida, women stitched layered cotton for warmth and sewed faceless red dolls as charms; and on the plain, wool mills at Hashima and a post-war garment market beside Gifu station made the prefecture one of the great clothing centres of Japan.",
    ja: "岐阜の布は、手仕事から工業までにわたる。郡上八幡では染物屋がいまも鯉のぼりを藍で染め、真冬の雪解けの川でそれをさらす。飛騨では女たちが暖かさのために木綿を重ねて刺し、顔のない赤い人形をお守りとして縫った。そして平野では、羽島の毛織物工場と、戦後の岐阜駅前の衣料の市が、県を日本有数の衣服の産地にした。",
    zh: "岐阜的布料，從手工一路延伸到工業。在郡上八幡，一家染坊至今仍以藍染染製鯉魚旗，並在隆冬時節於雪水匯成的河中漂洗；在飛驒，婦女們為了保暖把層層棉布縫刺在一起，並縫製沒有臉的紅色娃娃當作護身符；而在平原上，羽島的毛織工廠與戰後岐阜站前的成衣市集，使這個縣成為日本重要的服裝產地之一。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Two Gifu textiles, schematic. Left: a <em>sarubobo</em>, the faceless cloth doll of Hida — red body, black hood and apron, arms and legs spread. Right: a carp streamer of the kind dyed by hand at Gujō-Hachiman, with indigo scales and a black outline; the finished streamers are rinsed in the cold water of the Yoshida river in the coldest weeks of winter.",
        ja:"岐阜の二つの布（模式図）。左：飛騨の顔のない布人形さるぼぼ——赤い体、黒い頭巾と腹掛け、広げた手足。右：郡上八幡で手染めされるような鯉のぼり。藍の鱗と黒い輪郭をもち、染め上がった鯉のぼりは冬の最も寒い時期に吉田川の冷たい水でさらされる。",
        zh:"岐阜的兩種布藝（示意圖）。左：飛驒沒有臉的布娃娃「猴寶寶」（さるぼぼ）——紅色身體、黑色頭巾與肚兜、張開的手腳。右：郡上八幡手工染製的那種鯉魚旗，有藍色魚鱗與黑色輪廓；染好的鯉魚旗會在冬季最寒冷的幾週，於吉田川冰冷的河水中漂洗。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="A sarubobo doll and a carp streamer">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"TWO CLOTHS", ja:"二つの布", zh:"兩種布藝" }) + '</text>';
        /* sarubobo */
        var cx = 170;
        s += '<ellipse cx="' + cx + '" cy="110" rx="34" ry="32" fill="#C9605A" stroke="#201E1B"/>' +
             '<path d="M' + (cx - 38) + ' 104 C' + (cx - 36) + ' 70 ' + (cx + 36) + ' 70 ' + (cx + 38) + ' 104 L' + (cx + 30) + ' 96 C' + (cx + 20) + ' 82 ' + (cx - 20) + ' 82 ' + (cx - 30) + ' 96 Z" fill="#201E1B"/>' +
             '<path d="M' + (cx - 26) + ' 146 L' + (cx - 86) + ' 150 L' + (cx - 84) + ' 166 L' + (cx - 24) + ' 170 Z" fill="#C9605A" stroke="#201E1B"/>' +
             '<path d="M' + (cx + 26) + ' 146 L' + (cx + 86) + ' 150 L' + (cx + 84) + ' 166 L' + (cx + 24) + ' 170 Z" fill="#C9605A" stroke="#201E1B"/>' +
             '<path d="M' + (cx - 30) + ' 142 L' + (cx + 30) + ' 142 L' + (cx + 34) + ' 206 L' + (cx - 34) + ' 206 Z" fill="#C9605A" stroke="#201E1B"/>' +
             '<path d="M' + (cx - 20) + ' 146 L' + (cx + 20) + ' 146 L' + (cx + 16) + ' 196 L' + (cx - 16) + ' 196 Z" fill="#201E1B"/>' +
             '<path d="M' + (cx - 30) + ' 204 L' + (cx - 58) + ' 262 L' + (cx - 38) + ' 266 L' + (cx - 8) + ' 206 Z" fill="#C9605A" stroke="#201E1B"/>' +
             '<path d="M' + (cx + 30) + ' 204 L' + (cx + 58) + ' 262 L' + (cx + 38) + ' 266 L' + (cx + 8) + ' 206 Z" fill="#C9605A" stroke="#201E1B"/>';
        s += '<text x="' + (cx + 70) + '" y="104" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"no face",ja:"顔がない",zh:"沒有臉"}) + '</text><path d="M' + (cx + 66) + ' 100 L' + (cx + 34) + ' 110" stroke="#B4AC9C"/>' +
             '<text x="' + (cx + 70) + '" y="186" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"black apron and hood",ja:"黒い腹掛けと頭巾",zh:"黑色肚兜與頭巾"}) + '</text><path d="M' + (cx + 66) + ' 182 L' + (cx + 18) + ' 176" stroke="#B4AC9C"/>' +
             '<text x="' + cx + '" y="292" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Sarubobo (Hida)",ja:"さるぼぼ（飛騨）",zh:"猴寶寶（飛驒）"}) + '</text>';
        /* koinobori */
        var x0 = 430, y0 = 120;
        s += '<line x1="' + (x0 - 20) + '" y1="60" x2="' + (x0 - 20) + '" y2="270" stroke="#55504A" stroke-width="3"/>' +
             '<path d="M' + x0 + ' ' + (y0 - 30) + ' C' + (x0 + 120) + ' ' + (y0 - 44) + ' ' + (x0 + 220) + ' ' + (y0 - 30) + ' ' + (x0 + 280) + ' ' + (y0 - 10) + ' L' + (x0 + 250) + ' ' + y0 + ' L' + (x0 + 290) + ' ' + (y0 + 20) + ' C' + (x0 + 220) + ' ' + (y0 + 40) + ' ' + (x0 + 120) + ' ' + (y0 + 44) + ' ' + x0 + ' ' + (y0 + 30) + ' Z" fill="#E0E7E9" stroke="#201E1B" stroke-width="1.4"/>';
        for (var r = 0; r < 4; r++) {
          for (var c = 0; c < 7; c++) {
            var sx = x0 + 70 + c * 24, sy = y0 - 22 + r * 14 + (c % 2) * 7;
            s += '<path d="M' + sx + ' ' + sy + ' q10 7 0 14" fill="none" stroke="#3C5A78" stroke-width="1.6"/>';
          }
        }
        s += '<circle cx="' + (x0 + 30) + '" cy="' + y0 + '" r="14" fill="#FBFAF7" stroke="#201E1B" stroke-width="1.4"/><circle cx="' + (x0 + 30) + '" cy="' + y0 + '" r="6" fill="#201E1B"/>' +
             '<path d="M' + x0 + ' ' + (y0 - 30) + ' L' + x0 + ' ' + (y0 + 30) + '" stroke="#201E1B" stroke-width="3"/>' +
             '<text x="' + (x0 + 150) + '" y="' + (y0 + 70) + '" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"indigo scales, black outline",ja:"藍の鱗と黒い輪郭",zh:"藍色魚鱗、黑色輪廓"}) + '</text>';
        /* river */
        s += '<path d="M' + (x0 - 10) + ' 240 C' + (x0 + 80) + ' 230 ' + (x0 + 200) + ' 250 ' + (x0 + 300) + ' 238" fill="none" stroke="#8FA6AE" stroke-width="10" stroke-opacity="0.6"/>' +
             '<text x="' + (x0 + 150) + '" y="272" text-anchor="middle" ' + F + ' font-size="10" font-style="italic" fill="#5E7780">' + L({en:"rinsed in the Yoshida river in midwinter",ja:"真冬の吉田川でさらす",zh:"隆冬於吉田川漂洗"}) + '</text>' +
             '<text x="' + (x0 + 150) + '" y="292" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Carp streamer (Gujō honzome)",ja:"鯉のぼり（郡上本染）",zh:"鯉魚旗（郡上本染）"}) + '</text>' +
             '<text x="30" y="320" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — designs vary; colours indicative.",ja:"模式図——意匠はさまざま。色は目安。",zh:"示意圖——圖案各異；顏色僅供參考。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"gujo",
      title:{ en:"Gujō honzome", ja:"郡上本染", zh:"郡上本染" }, jp:"藍染 · かちん染 · 寒ざらし",
      body:[
        { t:"p", text:{
          en:"In Gujō-Hachiman a family dyehouse has worked for centuries in two old techniques together known as <strong>Gujō honzome</strong>, “true dyeing of Gujō”. One is indigo, fermented in vats and built up in repeated dips from pale blue to near black. The other is <em>kachin-zome</em>, a resist technique in which soybean milk and soot are brushed onto the cloth to give a deep, fast black. The dyehouse is best known for its carp streamers, hung for Children's Day in May, and for <em>noren</em> curtains and banners. In the coldest weeks of January the finished streamers are rinsed in the Yoshida river, a scene that draws photographers every winter. The technique is protected by the prefecture as an intangible cultural property.",
          ja:"郡上八幡では、一軒の染物屋が何世紀にもわたって、あわせて<strong>郡上本染</strong>と呼ばれる二つの古い技を続けてきた。一つは藍染で、甕で発酵させた藍に何度も浸して、淡い水色から黒に近い紺まで重ねていく。もう一つはかちん染で、大豆の汁と墨を布に刷毛で引いて、深く色落ちしない黒を得る防染の技である。この染物屋は、五月の子どもの日に掲げる鯉のぼりと、のれんや幟でよく知られる。一月の最も寒い時期には、染め上がった鯉のぼりを吉田川でさらし、その光景は毎冬写真家を集める。技は県の無形文化財として守られている。",
          zh:"在郡上八幡，一家家族染坊數百年來一直從事兩種合稱<strong>郡上本染</strong>的古老技法。其一是藍染：在甕中發酵的藍液裡反覆浸染，從淺藍一路疊加到近乎黑色的深藍。其二是「褐染」（かちん染）：一種以刷子把豆漿與墨塗在布上、得到深沉而不褪色之黑的防染技法。這家染坊最出名的是五月兒童節懸掛的鯉魚旗，以及門簾（暖簾）與旗幟。一月最寒冷的時節，染好的鯉魚旗會在吉田川中漂洗，這幅景象每年冬天都吸引攝影師前來。這項技法已列為縣的無形文化財加以保護。" } }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"Stitching and charms in Hida", ja:"飛騨の刺し子とお守り", zh:"飛驒的刺子繡與護身符" }, jp:"飛騨さしこ · さるぼぼ",
      body:[
        { t:"p", text:{
          en:"In the long Hida winters cotton was precious, and women layered and stitched it with running stitches in white thread on indigo — <strong>sashiko</strong> — to make work clothes warmer and stronger and to make old cloth last. The geometric patterns of Hida sashiko, once practical, are now sewn on bags, cushions and table linen. The best-known Hida textile is a charm: the <strong>sarubobo</strong>, “baby monkey” in the Hida dialect, a small red doll without a face, its arms and legs spread. Grandmothers made them for their granddaughters as charms for a good marriage and an easy birth, and the word <em>saru</em> is also heard as “to go away”, so a sarubobo sends misfortune away. They are now sold in every colour in Takayama, but the red one is the original.",
          ja:"飛騨の長い冬、木綿は貴重であった。女たちは藍の布を重ね、白い糸で運針して刺した——<strong>刺し子</strong>である。仕事着を暖かく丈夫にし、古い布を長持ちさせるためであった。かつて実用であった飛騨さしこの幾何学模様は、いまは袋や座布団やテーブルクロスに刺されている。最もよく知られた飛騨の布ものはお守りである。<strong>さるぼぼ</strong>——飛騨の言葉で「猿の赤ん坊」——は、顔のない小さな赤い人形で、手足を広げている。祖母が孫娘のために、良縁と安産のお守りとして作った。「さる」は「去る」にも通じ、さるぼぼは災いを去らせる。いまは高山であらゆる色のものが売られているが、元は赤である。",
          zh:"在飛驒漫長的冬天，棉布十分珍貴，婦女們把藍布層層疊起，用白線以平針縫刺——即<strong>刺子繡</strong>——讓工作服更保暖、更耐用，也讓舊布用得更久。飛驒刺子繡的幾何圖樣原本是實用的，如今則繡在包袋、坐墊與桌布上。飛驒最知名的布藝卻是一種護身符：<strong>猴寶寶</strong>（さるぼぼ），在飛驒方言中意為「猴子的嬰兒」，是一個沒有臉、張開手腳的紅色小娃娃。祖母們為孫女縫製它，作為良緣與順產的護身符；「猴」（さる）的發音又與「離去」（去る）相同，因此猴寶寶能讓災厄離去。如今高山販售各種顏色的猴寶寶，但最初的是紅色。" } }
      ]
    },

    { t:"note", label:{ en:"Sarubobo today", ja:"いまのさるぼぼ", zh:"今日的猴寶寶" }, text:{
      en:"The traditional sarubobo is red, a colour once believed to keep illness away, and it was made at home for children and for daughters about to marry. Today it comes in many colours, each sold for a different wish, and hangs in every souvenir shop in Takayama — but the faceless red doll is still the one people mean.",
      ja:"昔ながらのさるぼぼは赤い。赤は病を遠ざける色と信じられ、子どもや嫁ぐ娘のために家でつくられた。いまはさまざまな色があり、色ごとに違う願いを託して売られ、高山のどの土産物屋にも吊るされている。それでも人がさるぼぼと言えば、やはり顔のない赤い人形のことである。",
      zh:"傳統的猴寶寶是紅色的——紅色曾被認為能驅離疾病——在家中為孩子與即將出嫁的女兒縫製。如今它有各種顏色，每種顏色寄託不同的心願，掛滿高山每一家紀念品店；但人們說起猴寶寶，指的仍是那個沒有五官的紅娃娃。" } },

    { t:"section", id:"plain",
      title:{ en:"Wool and clothing on the plain", ja:"平野の毛織物と衣料", zh:"平原上的毛織與成衣" }, jp:"尾州 · 羽島 · 岐阜駅前問屋町",
      body:[
        { t:"p", text:{
          en:"The Nōbi plain has woven cloth for centuries. In the twentieth century the area around Ichinomiya in Aichi and Hashima in Gifu, known together as <strong>Bishū</strong>, became Japan's largest centre of wool weaving, and it still supplies fine worsted and woollen cloth to fashion houses in Japan and abroad. In Gifu city another trade grew from nothing after the Second World War: people returning from Manchuria and the cities began selling second-hand and then new clothing from stalls in front of Gifu station. The market became a wholesale district of hundreds of firms, and for several decades Gifu was one of Japan's great ready-to-wear centres, with sewing workshops spread across the prefecture. Much of the sewing has since moved abroad, but the wholesale streets by the station remain.",
          ja:"濃尾平野は何世紀にもわたって布を織ってきた。二十世紀には、愛知県一宮と岐阜県羽島のあたり——あわせて<strong>尾州</strong>と呼ばれる——が日本最大の毛織物の産地となり、いまも国内外のファッションブランドに上質の梳毛・紡毛の生地を供している。岐阜市では第二次世界大戦後、もう一つの商いが無から育った。満州や都市から引き揚げてきた人々が、岐阜駅前の露店で古着を、やがて新しい衣服を売り始めたのである。その市は数百の会社が並ぶ問屋街となり、何十年ものあいだ岐阜は日本有数の既製服の産地であった。縫製の工房は県じゅうに広がっていた。縫製の多くはその後海外へ移ったが、駅前の問屋街はいまも残っている。",
          zh:"濃尾平原織布已有數百年歷史。二十世紀時，愛知縣一宮與岐阜縣羽島一帶——合稱<strong>尾州</strong>——成為日本最大的毛織產地，至今仍為國內外的時裝品牌供應精紡與粗紡的高級毛料。在岐阜市，戰後又有另一門生意從無到有地發展起來：從滿洲與各大城市歸來的人們，開始在岐阜站前的攤位販售舊衣，後來改賣新衣。這個市集發展成擁有數百家公司的批發街區，數十年間，岐阜是日本主要的成衣產地之一，縫製工坊遍布全縣。其後大部分縫製工作移往海外，但站前的批發街至今仍在。" } }
      ]
    },

    { t:"related", items:[
      { href:"towns.html", why:{ en:"Gujō-Hachiman, town of water.", ja:"水の町・郡上八幡。", zh:"水之町郡上八幡。" } },
      { href:"roads.html", why:{ en:"The Hida girls who went to the silk mills.", ja:"製糸工場へ向かった飛騨の娘たち。", zh:"前往製絲工廠的飛驒少女。" } },
      { href:"economy.html", why:{ en:"Gifu's industries in figures.", ja:"数字で見る岐阜の産業。", zh:"數字中的岐阜產業。" } },
      { href:"register.html", why:{ en:"All of Gifu's designated crafts.", ja:"岐阜の指定工芸品のすべて。", zh:"岐阜所有指定工藝品。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- register */
GIFU.pages["register"] = {
  kicker: { en: "Paper, Clay & Cloth · 05", ja: "紙・土・布 · 05", zh: "紙・土・布 · 05" },
  title:  { en: "Crafts at a Glance", ja: "工芸一覧", zh: "工藝一覽" },
  jp: "伝統的工芸品 · 重要無形文化財 · ユネスコ · 地域団体商標 · 日本遺産",
  lede: {
    en: "This page gathers the crafts of this book in one place: where each is made, what official recognition it has, and where to read about it. Six of Gifu's crafts are designated national traditional crafts; others are protected as intangible cultural properties, inscribed by UNESCO, registered as regional brands or recognised in the Japan Heritage stories. Many of the most important — Seki's cutlery, Ōgaki's masu, the guitars of Kani and Sakashita — have no designation at all.",
    ja: "この頁は、本書に出てくる工芸を一か所に集める。それぞれがどこで作られ、どのような公の認定を受け、どこで詳しく読めるか。岐阜の工芸のうち六つは国の伝統的工芸品に指定されている。ほかに、無形文化財として守られるもの、ユネスコに記載されたもの、地域団体商標に登録されたもの、日本遺産の物語に認められたものがある。そして最も重要なもののいくつか——関の刃物、大垣の枡、可児と坂下のギター——には、何の指定もない。",
    zh: "本頁把書中出現的工藝彙整在一起：各自在哪裡製作、獲得了哪些官方認定，以及可在何處詳讀。岐阜有六項工藝獲指定為國家傳統工藝品；其他則有列為無形文化財加以保護的、列入聯合國教科文組織名錄的、登錄為地區團體商標的，以及獲認定為日本遺產故事的。而其中一些最重要的——關的刀具、大垣的枡、可兒與坂下的吉他——卻沒有任何指定。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Where the crafts of Gifu are made, schematic, by the prefecture's five regions. Bold: designated national traditional crafts.",
        ja:"岐阜の工芸はどこで作られているか（模式図）。県の五つの圏域ごとに示す。太字は国の伝統的工芸品。",
        zh:"岐阜工藝的產地（示意圖），依縣內五大圈域劃分。粗體為國家指定傳統工藝品。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 440" role="img" aria-label="Schematic map of where Gifu crafts are made">' +
          '<rect x="0.5" y="0.5" width="759" height="439" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"WHERE THE CRAFTS ARE", ja:"工芸の地図", zh:"工藝地圖" }) + '</text>';
        var regions = [
          [40, 50, 680, 150, "#E0E6DB", {en:"HIDA",ja:"飛騨",zh:"飛驒"}],
          [40, 212, 160, 200, "#F0EDE4", {en:"SEINŌ",ja:"西濃",zh:"西濃"}],
          [206, 212, 150, 200, "#EDE5D2", {en:"GIFU",ja:"岐阜",zh:"岐阜"}],
          [362, 212, 176, 200, "#E7DFD2", {en:"CHŪNŌ",ja:"中濃",zh:"中濃"}],
          [544, 212, 176, 200, "#EEE1DF", {en:"TŌNŌ",ja:"東濃",zh:"東濃"}]
        ];
        regions.forEach(function (r) {
          s += '<rect x="' + r[0] + '" y="' + r[1] + '" width="' + r[2] + '" height="' + r[3] + '" fill="' + r[4] + '" stroke="#CDC6B9"/>' +
               '<text x="' + (r[0] + 10) + '" y="' + (r[1] + 18) + '" ' + F + ' font-size="10.5" fill="#55504A" letter-spacing="1.6" font-weight="600">' + L(r[5]) + '</text>';
        });
        function item(x, y, place, crafts) {
          var out = '<text x="' + x + '" y="' + y + '" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L(place) + '</text>';
          crafts.forEach(function (c, i) {
            out += '<text x="' + x + '" y="' + (y + 15 + i * 14) + '" ' + F + ' font-size="9.5" fill="' + (c[1] ? "#201E1B" : "#55504A") + '"' + (c[1] ? ' font-weight="700"' : '') + '>' + L(c[0]) + '</text>';
          });
          return out;
        }
        s += item(60, 96, {en:"Takayama",ja:"高山",zh:"高山"}, [[{en:"Ichii ittōbori",ja:"一位一刀彫",zh:"一位一刀雕"},1],[{en:"Hida Shunkei",ja:"飛騨春慶",zh:"飛驒春慶"},1],[{en:"Hida furniture",ja:"飛騨の家具",zh:"飛驒家具"},0],[{en:"sarubobo, sashiko",ja:"さるぼぼ・さしこ",zh:"猴寶寶、刺子繡"},0]]);
        s += item(330, 96, {en:"Kashimo & Ura-Kiso",ja:"加子母・裏木曽",zh:"加子母、裏木曾"}, [[{en:"Tōnō hinoki",ja:"東濃ひのき",zh:"東濃檜"},0],[{en:"timber for Ise",ja:"伊勢の御用材",zh:"伊勢御用材"},0]]);
        s += item(540, 96, {en:"Shirakawa-gō",ja:"白川郷",zh:"白川鄉"}, [[{en:"gasshō thatching",ja:"合掌の茅葺き",zh:"合掌茅葺"},0],[{en:"doburoku",ja:"どぶろく",zh:"濁酒"},0]]);
        s += item(56, 258, {en:"Ōgaki",ja:"大垣",zh:"大垣"}, [[{en:"masu",ja:"枡",zh:"枡"},0],[{en:"mizu-manjū",ja:"水まんじゅう",zh:"水饅頭"},0]]);
        s += item(56, 318, {en:"Tarui",ja:"垂井",zh:"垂井"}, [[{en:"Nangū, god of metals",ja:"南宮大社（金属の神）",zh:"南宮大社（金屬之神）"},0]]);
        s += item(220, 258, {en:"Gifu city",ja:"岐阜市",zh:"岐阜市"}, [[{en:"Gifu lanterns",ja:"岐阜提灯",zh:"岐阜燈籠"},1],[{en:"Gifu wagasa",ja:"岐阜和傘",zh:"岐阜和傘"},1],[{en:"uchiwa, apparel",ja:"団扇・アパレル",zh:"團扇、成衣"},0]]);
        s += item(220, 340, {en:"Hashima",ja:"羽島",zh:"羽島"}, [[{en:"Bishū wool",ja:"尾州の毛織物",zh:"尾州毛織"},0]]);
        s += item(376, 258, {en:"Mino",ja:"美濃",zh:"美濃"}, [[{en:"Mino washi",ja:"美濃和紙",zh:"美濃和紙"},1]]);
        s += item(376, 306, {en:"Seki",ja:"関",zh:"關"}, [[{en:"cutlery, swords",ja:"刃物・日本刀",zh:"刀具、日本刀"},0]]);
        s += item(460, 258, {en:"Gujō",ja:"郡上",zh:"郡上"}, [[{en:"honzome",ja:"郡上本染",zh:"郡上本染"},0],[{en:"food replicas",ja:"食品サンプル",zh:"食物模型"},0]]);
        s += item(558, 258, {en:"Tajimi, Toki, Mizunami",ja:"多治見・土岐・瑞浪",zh:"多治見、土岐、瑞浪"}, [[{en:"Mino ware",ja:"美濃焼",zh:"美濃燒"},1],[{en:"mosaic tiles",ja:"モザイクタイル",zh:"馬賽克磁磚"},0]]);
        s += item(558, 330, {en:"Kani, Nakatsugawa",ja:"可児・中津川",zh:"可兒、中津川"}, [[{en:"guitars",ja:"ギター",zh:"吉他"},0],[{en:"kuri-kinton",ja:"栗きんとん",zh:"栗金團"},0]]);
        s += '<text x="30" y="430" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — regions shown as blocks; places approximate.",ja:"模式図——圏域は区画で示し、位置はおおよそ。",zh:"示意圖——圈域以區塊表示，位置為概略。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"national",
      title:{ en:"National traditional crafts", ja:"国の伝統的工芸品", zh:"國家傳統工藝品" }, jp:"経済産業大臣指定",
      body:[
        { t:"p", text:{
          en:"Under a law of 1974, the Minister of Economy, Trade and Industry designates as <em>traditional crafts</em> products made mainly by hand, by techniques and from materials used for at least a century, in a place where a community of makers still works. Gifu has six.",
          ja:"1974年の法律にもとづき、経済産業大臣は、主として手で、百年以上続く技術と原材料によって、作り手の集団がいまも働く土地で作られる品を<em>伝統的工芸品</em>に指定する。岐阜には六つある。",
          zh:"依據 1974 年的一項法律，經濟產業大臣把主要以手工、以沿用至少一百年的技術與材料、在仍有製作者群體持續工作的地方製作的產品，指定為<em>傳統工藝品</em>。岐阜有六項。" } },
        { t:"table",
          cols:[{en:"Craft",ja:"工芸品",zh:"工藝品"},{en:"Where",ja:"産地",zh:"產地"},{en:"Designated",ja:"指定",zh:"指定"},{en:"Page",ja:"頁",zh:"頁面"}],
          rows:[
            [{en:"Hida Shunkei lacquerware",ja:"飛騨春慶",zh:"飛驒春慶"},{en:"Takayama, Hida",ja:"高山市・飛騨市",zh:"高山市、飛驒市"},"1975",{en:"<a href=\"carving.html\">Carving & Lacquer</a>",ja:"<a href=\"carving.html\">彫りと塗り</a>",zh:"<a href=\"carving.html\">雕刻與漆藝</a>"}],
            [{en:"Ichii ittōbori carving",ja:"一位一刀彫",zh:"一位一刀雕"},{en:"Takayama, Hida, Gero",ja:"高山市・飛騨市・下呂市",zh:"高山市、飛驒市、下呂市"},"1975",{en:"<a href=\"carving.html\">Carving & Lacquer</a>",ja:"<a href=\"carving.html\">彫りと塗り</a>",zh:"<a href=\"carving.html\">雕刻與漆藝</a>"}],
            [{en:"Mino ware",ja:"美濃焼",zh:"美濃燒"},{en:"Tajimi, Toki, Mizunami, Kani",ja:"多治見市・土岐市・瑞浪市・可児市",zh:"多治見市、土岐市、瑞浪市、可兒市"},"1978",{en:"<a href=\"minoyaki.html\">Mino Ware</a>",ja:"<a href=\"minoyaki.html\">美濃焼</a>",zh:"<a href=\"minoyaki.html\">美濃燒</a>"}],
            [{en:"Mino washi",ja:"美濃和紙",zh:"美濃和紙"},{en:"Mino",ja:"美濃市",zh:"美濃市"},"1985",{en:"<a href=\"washi.html\">Mino Washi</a>",ja:"<a href=\"washi.html\">美濃和紙</a>",zh:"<a href=\"washi.html\">美濃和紙</a>"}],
            [{en:"Gifu lanterns",ja:"岐阜提灯",zh:"岐阜燈籠"},{en:"Gifu city and around",ja:"岐阜市ほか",zh:"岐阜市等"},"1995",{en:"<a href=\"lanterns.html\">Lanterns, Umbrellas & Fans</a>",ja:"<a href=\"lanterns.html\">提灯・和傘・団扇</a>",zh:"<a href=\"lanterns.html\">燈籠、和傘與團扇</a>"}],
            [{en:"Gifu wagasa umbrellas",ja:"岐阜和傘",zh:"岐阜和傘"},{en:"Gifu city (Kanō)",ja:"岐阜市（加納）",zh:"岐阜市（加納）"},{en:"most recent",ja:"最新",zh:"最新"},{en:"<a href=\"lanterns.html\">Lanterns, Umbrellas & Fans</a>",ja:"<a href=\"lanterns.html\">提灯・和傘・団扇</a>",zh:"<a href=\"lanterns.html\">燈籠、和傘與團扇</a>"}]
          ] }
      ]
    },

    { t:"section", id:"other",
      title:{ en:"Other recognitions", ja:"そのほかの認定", zh:"其他認定" }, jp:"無形文化財 · ユネスコ · 商標 · 日本遺産 · 世界農業遺産",
      body:[
        { t:"table",
          cols:[{en:"What",ja:"対象",zh:"對象"},{en:"Recognition",ja:"認定",zh:"認定"},{en:"Year",ja:"年",zh:"年"}],
          rows:[
            [{en:"Honminoshi paper",ja:"本美濃紙",zh:"本美濃紙"},{en:"Important Intangible Cultural Property; UNESCO (Washi)",ja:"重要無形文化財／ユネスコ無形文化遺産（和紙）",zh:"重要無形文化財／聯合國教科文組織（和紙）"},"1969 · 2014"],
            [{en:"Takayama, Furukawa and Ōgaki float festivals",ja:"高山・古川・大垣の祭り",zh:"高山、古川、大垣祭典"},{en:"UNESCO (Yama, Hoko, Yatai)",ja:"ユネスコ（山・鉾・屋台行事）",zh:"聯合國教科文組織（山、鉾、屋台行事）"},"2016"],
            [{en:"Gujō Odori; Kanzu no Kake-odori",ja:"郡上踊・寒水の掛踊",zh:"郡上舞、寒水掛踊"},{en:"UNESCO (Furyū-odori)",ja:"ユネスコ（風流踊）",zh:"聯合國教科文組織（風流踊）"},"2022"],
            [{en:"Ayu of the Nagara",ja:"清流長良川の鮎",zh:"清流長良川的香魚"},{en:"Globally Important Agricultural Heritage System",ja:"世界農業遺産",zh:"世界農業遺產"},"2015"],
            [{en:"Hida furniture",ja:"飛騨の家具",zh:"飛驒家具"},{en:"Regional collective trademarks",ja:"地域団体商標",zh:"地區團體商標"},"2008"],
            [{en:"The Hida takumi",ja:"飛騨の匠",zh:"飛驒工匠"},{en:"Japan Heritage story",ja:"日本遺産",zh:"日本遺產"},"2016"],
            [{en:"Dōjō Hachiya-gaki",ja:"堂上蜂屋柿",zh:"堂上蜂屋柿"},{en:"Geographical indication (GI)",ja:"地理的表示（GI）",zh:"地理標示（GI）"},{en:"registered",ja:"登録",zh:"已登錄"}]
          ] },
        { t:"note", label:{en:"Without a designation",ja:"指定のないもの",zh:"沒有指定的"}, text:{
          en:"Designations follow history and paperwork, not importance. Seki's cutlery is the largest craft industry in the prefecture, Ōgaki makes most of Japan's masu, and the guitars of Kani and Sakashita are played on stages around the world; none is a designated traditional craft. See <a href=\"makers.html\">A Directory of Makers</a>.",
          ja:"指定は歴史と書類にしたがうもので、重要さにしたがうものではない。関の刃物は県で最大の工芸産業であり、大垣は日本の枡の大半を作り、可児と坂下のギターは世界の舞台で弾かれている。そのどれも伝統的工芸品の指定は受けていない。<a href=\"makers.html\">作り手名鑑</a>を参照。",
          zh:"指定依循的是歷史與文件，而不是重要性。關的刀具是縣內最大的工藝產業，大垣生產日本大部分的枡，可兒與坂下的吉他在世界各地的舞台上演奏；但它們都不是指定傳統工藝品。見<a href=\"makers.html\">製作者名鑑</a>。" } }
      ]
    },

    { t:"section", id:"book",
      title:{ en:"Every craft in this book", ja:"本書の工芸すべて", zh:"書中所有工藝" }, jp:"索引",
      body:[
        { t:"table",
          cols:[{en:"Craft",ja:"工芸",zh:"工藝"},{en:"Where",ja:"産地",zh:"產地"},{en:"Page",ja:"頁",zh:"頁面"}],
          rows:[
            [{en:"Cutlery and kitchen knives",ja:"刃物・包丁",zh:"刀具與菜刀"},{en:"Seki",ja:"関市",zh:"關市"},{en:"<a href=\"cutlery.html\">The Cutlery Industry</a>",ja:"<a href=\"cutlery.html\">刃物産業</a>",zh:"<a href=\"cutlery.html\">刀具產業</a>"}],
            [{en:"Japanese swords and fittings",ja:"日本刀と刀装具",zh:"日本刀與刀裝具"},{en:"Seki",ja:"関市",zh:"關市"},{en:"<a href=\"sword.html\">The Mino Sword</a>",ja:"<a href=\"sword.html\">美濃伝の刀</a>",zh:"<a href=\"sword.html\">美濃傳之刀</a>"}],
            [{en:"Furniture",ja:"家具",zh:"家具"},{en:"Takayama, Hida",ja:"高山市・飛騨市",zh:"高山市、飛驒市"},{en:"<a href=\"furniture.html\">Hida Furniture</a>",ja:"<a href=\"furniture.html\">飛騨の家具</a>",zh:"<a href=\"furniture.html\">飛驒家具</a>"}],
            [{en:"Masu",ja:"枡",zh:"枡"},{en:"Ōgaki",ja:"大垣市",zh:"大垣市"},{en:"<a href=\"everyday.html\">Wood in Everyday Things</a>",ja:"<a href=\"everyday.html\">暮らしの木</a>",zh:"<a href=\"everyday.html\">生活中的木</a>"}],
            [{en:"Acoustic guitars",ja:"アコースティックギター",zh:"木吉他"},{en:"Kani; Sakashita, Nakatsugawa",ja:"可児市・中津川市坂下",zh:"可兒市；中津川市坂下"},{en:"<a href=\"guitars.html\">Hand-made Guitars</a>",ja:"<a href=\"guitars.html\">手工ギター</a>",zh:"<a href=\"guitars.html\">手工吉他</a>"}],
            [{en:"Gasshō thatching",ja:"合掌造りの茅葺き",zh:"合掌造茅葺"},{en:"Shirakawa village",ja:"白川村",zh:"白川村"},{en:"<a href=\"shirakawago.html\">Shirakawa-gō</a>",ja:"<a href=\"shirakawago.html\">白川郷</a>",zh:"<a href=\"shirakawago.html\">白川鄉</a>"}],
            [{en:"Festival floats and karakuri",ja:"祭り屋台とからくり",zh:"祭典屋台與機關人偶"},{en:"Takayama, Furukawa, Ōgaki",ja:"高山・古川・大垣",zh:"高山、古川、大垣"},{en:"<a href=\"festivals.html\">Festivals & Floats</a>",ja:"<a href=\"festivals.html\">祭りと屋台</a>",zh:"<a href=\"festivals.html\">祭典與屋台</a>"}],
            [{en:"Kabuki costumes and playhouses",ja:"地歌舞伎の衣裳と芝居小屋",zh:"地歌舞伎戲服與戲棚"},{en:"Tōnō, Gero, Kakamigahara",ja:"東濃・下呂・各務原",zh:"東濃、下呂、各務原"},{en:"<a href=\"kabuki.html\">Village Kabuki</a>",ja:"<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>",zh:"<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>"}],
            [{en:"Indigo dyeing; sarubobo",ja:"藍染・さるぼぼ",zh:"藍染；猴寶寶"},{en:"Gujō-Hachiman; Hida",ja:"郡上八幡・飛騨",zh:"郡上八幡；飛驒"},{en:"<a href=\"textiles.html\">Dye & Cloth</a>",ja:"<a href=\"textiles.html\">染めと織り</a>",zh:"<a href=\"textiles.html\">染與織</a>"}],
            [{en:"Food replicas; kanten",ja:"食品サンプル・寒天",zh:"食物模型；寒天"},{en:"Gujō; Yamaoka, Ena",ja:"郡上・恵那市山岡",zh:"郡上；惠那市山岡"},{en:"<a href=\"towns.html\">Old Towns</a> · <a href=\"food.html\">Food</a>",ja:"<a href=\"towns.html\">町並み</a>・<a href=\"food.html\">食</a>",zh:"<a href=\"towns.html\">老街</a>・<a href=\"food.html\">飲食</a>"}],
            [{en:"Sake and doburoku",ja:"酒・どぶろく",zh:"清酒與濁酒"},{en:"Across the prefecture",ja:"県内各地",zh:"全縣各地"},{en:"<a href=\"sake.html\">The Sake of Gifu</a>",ja:"<a href=\"sake.html\">岐阜の酒</a>",zh:"<a href=\"sake.html\">岐阜的酒</a>"}]
          ] }
      ]
    },

    { t:"related", items:[
      { href:"makers.html", why:{ en:"The makers themselves.", ja:"作り手そのもの。", zh:"製作者本身。" } },
      { href:"museums.html", why:{ en:"Where to see the crafts made.", ja:"作るところを見られる場所。", zh:"可觀看製作過程之處。" } },
      { href:"spirit.html", why:{ en:"The crafts as six verbs.", ja:"六つの動詞で読む工芸。", zh:"以六個動詞讀工藝。" } },
      { href:"economy.html", why:{ en:"The crafts as industries.", ja:"産業としての工芸。", zh:"作為產業的工藝。" } }
    ] }
  ]
};
