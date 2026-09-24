/* =============================================================
   THE SPIRIT OF GIFU — Sake
   Page modules, concatenated. Each page is one
   GIFU.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ----------------------------------------------- sake */
GIFU.pages["sake"] = {
  kicker: { en: "Sake · 01", ja: "酒 · 01", zh: "酒 · 01" },
  title:  { en: "The Sake of Gifu", ja: "岐阜の酒", zh: "岐阜的酒" },
  jp: "地酒 · 飛騨 · 美濃 · 杉玉 · 養老の滝",
  lede: {
    en: "Gifu has about fifty sake breweries, and two brewing cultures. In Hida, small merchant houses in Takayama and Furukawa brew through winters cold enough to freeze the rivers, and hang a ball of cedar outside when the new sake is pressed. On the Mino plain, breweries fed by the Nagara, Kiso and Ibi supplied the thirsty market of Nagoya, and some of them have made names for sake far drier than their neighbours'. The oldest story about sake in the prefecture is older than any brewery: a spring that turned to sake, and gave an era its name.",
    ja: "岐阜には五十ほどの酒蔵があり、二つの酒造りの文化がある。飛騨では、高山と古川の小さな商家の蔵が川も凍るほどの冬に酒を醸し、新酒が搾られると軒先に杉玉を掲げる。美濃の平野では、長良川・木曽川・揖斐川の水に養われた蔵が名古屋という大きな酒の市場を潤し、そのなかには隣の蔵よりもはるかに辛い酒で名を上げたところもある。県で最も古い酒の物語は、どの蔵よりも古い。酒に変わった泉が、一つの元号に名を与えたのである。",
    zh: "岐阜約有五十家酒藏，並有兩種釀酒文化。在飛驒，高山與古川的小型商家酒藏，在冷到河川都會結冰的冬天釀酒，新酒榨成時便在屋簷下掛起杉玉。在美濃平原，由長良川、木曾川與揖斐川滋養的酒藏供應著名古屋這個嗜酒的大市場，其中有些更以遠比鄰近酒藏辛口的酒闖出名號。縣內最古老的酒故事，比任何一家酒藏都要古老：一眼化為酒的泉水，還為一個年號命了名。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"A brewing year, schematic. Rice is harvested in autumn and brewing runs through the cold months, when low temperatures keep the long fermentation clean. The first pressings of the season are sold fresh as <em>shinshu</em>, “new sake”, and a green cedar ball, the <em>sugidama</em>, is hung outside to announce them; it browns through the year. Sake stored over the summer and released in autumn without a second pasteurisation is <em>hiyaoroshi</em>.",
        ja:"酒造りの一年（模式図）。米は秋に収穫され、造りは寒い月々に行われる。低い気温が長い発酵をきれいに保つのである。季節の最初の搾りは新酒として生のまま売られ、それを告げる青い杉玉が軒先に吊るされる。杉玉は一年をかけて茶色くなっていく。夏を越して貯蔵し、秋に二度目の火入れをせずに出す酒がひやおろしである。",
        zh:"釀酒的一年（示意圖）。稻米在秋季收成，釀造則在寒冷的月份進行，低溫讓漫長的發酵保持潔淨。當季最早榨出的酒以「新酒」之名鮮售，屋簷下掛起青綠的杉玉作為宣告；杉玉會在一年中逐漸轉為褐色。貯藏過夏、秋季出貨且不做第二次加熱殺菌的酒，稱為「冷卸」（ひやおろし）。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 320" role="img" aria-label="Schematic brewing calendar">' +
          '<rect x="0.5" y="0.5" width="759" height="319" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"A BREWING YEAR", ja:"酒造りの一年", zh:"釀酒的一年" }) + '</text>';
        var X0 = 230, W = 40;
        /* months starting from September */
        var ms = { en:["S","O","N","D","J","F","M","A","M","J","J","A"], ja:["9","10","11","12","1","2","3","4","5","6","7","8"], zh:["9","10","11","12","1","2","3","4","5","6","7","8"] };
        var ml = ms[lang] || ms.en;
        for (var m = 0; m < 12; m++) {
          s += '<text x="' + (X0 + m * W + W / 2) + '" y="62" text-anchor="middle" ' + F + ' font-size="10" fill="#8B857C">' + ml[m] + '</text>';
          if (m > 0) s += '<line x1="' + (X0 + m * W) + '" y1="70" x2="' + (X0 + m * W) + '" y2="262" stroke="#EAE6DD"/>';
        }
        s += '<rect x="' + X0 + '" y="70" width="' + (12 * W) + '" height="192" fill="none" stroke="#DFDAD0"/>';
        /* rows: [label, [startIdx, endIdx(exclusive, fractional)], fill] index 0 = September */
        var rows = [
          [{en:"Rice harvest",ja:"稲刈り",zh:"稻米收成"}, [[0, 2]], "#EADCC1"],
          [{en:"Polishing, steaming",ja:"精米・蒸米",zh:"精米、蒸米"}, [[1, 6]], "#F0EDE4"],
          [{en:"Brewing (kanzukuri)",ja:"仕込み（寒造り）",zh:"釀造（寒造）"}, [[2, 7]], "#E9ECEE"],
          [{en:"New sake, green sugidama",ja:"新酒・青い杉玉",zh:"新酒、青綠杉玉"}, [[3.3, 7]], "#E0E6DB"],
          [{en:"Storage and maturing",ja:"貯蔵・熟成",zh:"貯藏與熟成"}, [[6, 12]], "#E6E4E0"],
          [{en:"Hiyaoroshi released",ja:"ひやおろし",zh:"冷卸上市"}, [[0, 2]], "#EEE1DF"]
        ];
        rows.forEach(function (r, i) {
          var y = 80 + i * 30;
          s += '<text x="30" y="' + (y + 14) + '" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L(r[0]) + '</text>';
          r[1].forEach(function (g) {
            s += '<rect x="' + (X0 + g[0] * W).toFixed(1) + '" y="' + (y + 3) + '" width="' + ((g[1] - g[0]) * W).toFixed(1) + '" height="16" fill="' + r[2] + '" stroke="#7C6B52" stroke-width="0.8"/>';
          });
        });
        /* sugidama icons: green -> brown */
        var cols = ["#9DB592", "#B2B98C", "#C2AE84", "#B8966C"];
        cols.forEach(function (c, i) {
          var x = X0 + (4 + i * 2.4) * W;
          s += '<circle cx="' + x.toFixed(1) + '" cy="288" r="9" fill="' + c + '" stroke="#55504A" stroke-width="0.8"/>';
        });
        s += '<text x="' + (X0 - 10) + '" y="292" text-anchor="end" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"the sugidama browns",ja:"杉玉は茶色くなる",zh:"杉玉逐漸轉褐"}) + '</text>' +
             '<text x="30" y="312" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — many breweries now brew for longer seasons, some all year.",ja:"模式図——造りの期間を延ばす蔵、通年で造る蔵も増えている。",zh:"示意圖——如今許多酒藏延長釀造季，也有全年釀造者。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"two",
      title:{ en:"Two brewing countries", ja:"二つの酒の国", zh:"兩個釀酒之國" }, jp:"飛騨 · 美濃",
      body:[
        { t:"p", text:{
          en:"Hida's sake belongs to its merchant towns. In the Edo period Takayama, under the shogun's direct rule, had many breweries, owned by the same families that dealt in timber and lent money, and several of their houses and storehouses still stand on the old streets with a <em>sugidama</em> hanging from the eaves. The winters are long and very cold, which suits slow, clean fermentation, and the local brewing rice is Hida Homare. Mino's sake belongs to its rivers and its roads: breweries grew up along the Nakasendō and the Minoji, in the castle towns of Ōgaki and Iwamura, and in the valleys of the Ibi and Nagara, and much of their sake went to Nagoya. See <a href=\"hidasake.html\">Brewing in Hida</a> and <a href=\"breweries.html\">Breweries by Region</a>.",
          ja:"飛騨の酒は商人の町のものである。江戸時代、幕府直轄の高山には多くの造り酒屋があり、材木を商い金を貸した同じ家々がそれを営んだ。その家や蔵のいくつかはいまも古い通りに立ち、軒に杉玉を下げている。冬は長く厳しく寒く、ゆっくりときれいな発酵に向き、地元の酒米はひだほまれである。美濃の酒は川と道のものである。蔵は中山道や美濃路沿い、大垣や岩村の城下町、揖斐川や長良川の谷に育ち、その酒の多くは名古屋へ向かった。<a href=\"hidasake.html\">飛騨の酒造り</a>と<a href=\"breweries.html\">地域別の蔵</a>を参照。",
          zh:"飛驒的酒屬於它的商人之城。江戶時代，由幕府直轄的高山有許多酒坊，經營者正是那些做木材生意、放貸的家族；他們的一些宅邸與酒藏至今仍立在老街上，屋簷下掛著杉玉。這裡的冬天漫長而嚴寒，適合緩慢而潔淨的發酵，當地的酒米是飛驒譽。美濃的酒則屬於它的河流與道路：酒藏沿著中山道與美濃路、在大垣與岩村等城下町、在揖斐川與長良川的河谷中發展起來，大部分的酒運往名古屋。見<a href=\"hidasake.html\">飛驒的釀酒</a>與<a href=\"breweries.html\">各地酒藏</a>。" } }
      ]
    },

    { t:"section", id:"yoro",
      title:{ en:"A spring of sake", ja:"酒の泉", zh:"化酒之泉" }, jp:"養老の滝 · 元正天皇 · 717",
      body:[
        { t:"p", text:{
          en:"The best-known sake story in Gifu comes from Yōrō, on the western edge of the plain. A poor woodcutter, the legend says, found a spring in the hills whose water tasted of sake, and brought it home to his old father, who grew young again drinking it. In 717 the Empress Genshō visited the spring at Tagi in Mino, bathed in its water and, declaring that it restored the old, changed the name of the era to <em>Yōrō</em>, “nurturing the aged”. The waterfall and spring are still there in Yōrō Park, and a Yōrō brewery calls its sake after the old word for a spring of sweet water.",
          ja:"岐阜で最もよく知られた酒の物語は、平野の西の端、養老から来る。伝説によれば、貧しい木こりが山中で酒の味のする泉を見つけ、老いた父に持ち帰ると、父はそれを飲んで若返った。717年、元正天皇は美濃の多芸の泉に行幸してその水を浴び、老いを養う水であるとして元号を「養老」と改めた。滝と泉はいまも養老公園にあり、養老の蔵は、甘い水の湧く泉を指す古い言葉を酒の名にしている。",
          zh:"岐阜最著名的酒故事，來自平原西緣的養老。傳說一位貧窮的樵夫在山中發現一眼泉水，水嚐起來有酒味，他把水帶回家給年老的父親，父親喝了之後竟返老還童。717 年，元正天皇行幸美濃多藝的泉水，以泉水沐浴，宣稱此水能滋養老者，遂把年號改為「養老」。瀑布與泉水至今仍在養老公園中，而養老的一家酒藏，便以古語中「甘泉」一詞為酒命名。" } }
      ]
    },

    { t:"section", id:"style",
      title:{ en:"What Gifu sake tastes like", ja:"岐阜の酒の味", zh:"岐阜清酒的滋味" }, jp:"辛口 · 甘口 · 地酒",
      body:[
        { t:"p", text:{
          en:"There is no single Gifu style. For much of the twentieth century the prefecture's breweries, like those of neighbouring Aichi, made full, slightly sweet sake for the Nagoya market; a few went the other way, and one Tajimi house became famous for keeping its sake uncompromisingly dry through the decades when the rest of Japan was sweetening. The Hida breweries tend to a clean, firm style suited to the rich food of the mountains. Since the 1990s a new generation has turned many small Mino and Hida houses toward <em>junmai</em> and <em>ginjō</em> sake, local rice, traditional starters and year-round brewing. The directory of this part lists the houses and some of their sake: see <a href=\"directory.html\">A Directory of Gifu Sake</a>.",
          ja:"岐阜の酒に一つの様式はない。二十世紀の多くの期間、県の蔵は、隣の愛知の蔵と同じく、名古屋の市場向けにふくよかでやや甘い酒を造った。逆の道を行った蔵もわずかにあり、多治見の一軒は、戦後に世の酒が甘口へ流れた時代にも辛口を守り、それで名を上げた。飛騨の蔵は、山の濃い味の料理に合う、きれいで締まった酒に傾く。1990年代からは新しい世代が、美濃と飛騨の多くの小さな蔵を、純米や吟醸、地元の米、伝統的な酒母、四季醸造へと向けてきた。この部の名鑑は蔵とその酒の一部を挙げる。<a href=\"directory.html\">岐阜酒名鑑</a>を参照。",
          zh:"岐阜並沒有單一的風格。二十世紀的大部分時間裡，縣內酒藏與鄰縣愛知一樣，為名古屋市場釀造飽滿、略甜的酒；也有少數反其道而行，多治見的一家便在全日本口味轉甜的數十年間堅持毫不妥協的辛口而聲名大噪。飛驒的酒藏傾向潔淨而緊實的風格，適合山區濃郁的飲食。1990 年代以來，新一代把美濃與飛驒許多小酒藏導向純米與吟釀、在地米、傳統酒母與全年釀造。本部分的名鑑列出了這些酒藏及其部分酒款：見<a href=\"directory.html\">岐阜酒名鑑</a>。" } }
      ]
    },

    { t:"section", id:"part",
      title:{ en:"This part of the book", ja:"この部の構成", zh:"本部分的內容" }, jp:"酒の部",
      body:[
        { t:"defs", items:[
          { term:{en:"Rice, Water & Yeast",ja:"米と水と酵母",zh:"米、水與酵母"}, jp:"原料",
            def:{en:"The grades of sake, Gifu's own rice varieties, its soft water and the yeasts and starters its brewers use. <a href=\"sakeland.html\">Read</a>.",ja:"酒の特定名称、岐阜独自の米、軟らかな水、蔵人の使う酵母と酒母。<a href=\"sakeland.html\">読む</a>。",zh:"清酒的特定名稱、岐阜自有的米種、軟水，以及釀酒人使用的酵母與酒母。<a href=\"sakeland.html\">閱讀</a>。"} },
          { term:{en:"Brewing in Hida",ja:"飛騨の酒造り",zh:"飛驒的釀酒"}, jp:"造り",
            def:{en:"How sake is made, step by step, and how the merchant houses of Takayama and Furukawa came to brew it. <a href=\"hidasake.html\">Read</a>.",ja:"酒造りの手順と、高山と古川の商家がどのように酒を醸すようになったか。<a href=\"hidasake.html\">読む</a>。",zh:"清酒的釀造步驟，以及高山與古川的商家如何走上釀酒之路。<a href=\"hidasake.html\">閱讀</a>。"} },
          { term:{en:"Breweries by Region",ja:"地域別の蔵",zh:"各地酒藏"}, jp:"地図",
            def:{en:"The houses of this book on a map of the five regions, with an index by town. <a href=\"breweries.html\">Read</a>.",ja:"本書の蔵を五つの圏域の地図に置き、市町村別の索引を添えた。<a href=\"breweries.html\">読む</a>。",zh:"將本書的酒藏標在五大圈域地圖上，並附依市町村排列的索引。<a href=\"breweries.html\">閱讀</a>。"} },
          { term:{en:"A Directory of Gifu Sake",ja:"岐阜酒名鑑",zh:"岐阜酒名鑑"}, jp:"名鑑",
            def:{en:"Seventeen houses, their brands and some of their sake, with an index by rice. <a href=\"directory.html\">Read</a>.",ja:"十七の蔵とその銘柄、酒のいくつか。米からの索引つき。<a href=\"directory.html\">読む</a>。",zh:"十七家酒藏、其品牌與部分酒款，並附依米種排列的索引。<a href=\"directory.html\">閱讀</a>。"} },
          { term:{en:"Doburoku, Masu & Cups",ja:"どぶろく・枡・酒器",zh:"濁酒、枡與酒器"}, jp:"器",
            def:{en:"The festival brew of Shirakawa-gō, the masu of Ōgaki and the sake vessels of the Mino kilns. <a href=\"doburoku.html\">Read</a>.",ja:"白川郷の祭りの酒、大垣の枡、美濃の窯の酒器。<a href=\"doburoku.html\">読む</a>。",zh:"白川鄉的祭典之酒、大垣的枡，以及美濃窯燒製的酒器。<a href=\"doburoku.html\">閱讀</a>。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"sakeland.html", why:{ en:"Rice, water and yeast.", ja:"米と水と酵母。", zh:"米、水與酵母。" } },
      { href:"hidasake.html", why:{ en:"Brewing in the cold of Hida.", ja:"飛騨の寒さのなかの酒造り。", zh:"飛驒嚴寒中的釀酒。" } },
      { href:"directory.html", why:{ en:"The houses and their sake.", ja:"蔵とその酒。", zh:"酒藏與其酒款。" } },
      { href:"food.html", why:{ en:"What to eat with it.", ja:"合わせて食べるもの。", zh:"佐酒之食。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- sakeland */
GIFU.pages["sakeland"] = {
  kicker: { en: "Sake · 02", ja: "酒 · 02", zh: "酒 · 02" },
  title:  { en: "Rice, Water & Yeast", ja: "米と水と酵母", zh: "米、水與酵母" },
  jp: "酒造好適米 · ひだほまれ · ハツシモ · 精米歩合 · 軟水 · 生酛",
  lede: {
    en: "Sake is made from three things — rice, water and the microbes that turn one into the other — and Gifu supplies all of them from its own ground. Its highland farms grow Hida Homare, a brewing rice bred for the cold; its plains grow Hatsushimo, a late-ripening table rice that some brewers use; its mountains and alluvial fans yield soft water; and a growing number of its breweries have gone back to the slow, traditional ways of raising yeast.",
    ja: "酒は三つのもの——米、水、そしてその一方を他方に変える微生物——から造られ、岐阜はそのすべてを自らの土地から供している。高地の田はひだほまれ——寒冷地のために育てられた酒米——を育て、平野は一部の蔵が使う晩生の飯米ハツシモを育てる。山と扇状地は軟らかな水を生み、そして酵母を育てる伝統のゆっくりとした方法へ戻る蔵が増えている。",
    zh: "清酒由三樣東西釀成——米、水，以及把前者轉化為酒的微生物——而岐阜從自己的土地上提供了全部三樣。高地的田裡種著「飛驒譽」，一種為寒冷地區培育的酒米；平原上種著晚熟的食用米「初霜」，也有酒藏拿來釀酒；山地與沖積扇湧出軟水；而越來越多的酒藏，正回歸以傳統慢工培養酵母的方法。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Polishing rice, schematic. Brewers mill away the outer layers of the grain, which carry protein, fat and minerals that can make sake coarse, to reach the starchy centre. The polishing ratio, <em>seimai buai</em>, is the percentage of the grain that remains: the law requires 70 per cent or less for honjōzō, 60 per cent or less for ginjō and 50 per cent or less for daiginjō.",
        ja:"米を磨く（模式図）。蔵人は、酒を粗くしかねないたんぱく質・脂質・ミネラルを含む米粒の外側を削り、でんぷんの多い中心へ近づく。精米歩合は残った米の割合で、法律上、本醸造は70パーセント以下、吟醸は60パーセント以下、大吟醸は50パーセント以下でなければならない。",
        zh:"精米（示意圖）。釀酒師把米粒外層磨去——那裡含有會使酒味粗糙的蛋白質、脂肪與礦物質——以取得富含澱粉的中心。精米步合是磨後剩下的米粒比例：法規要求本釀造在 70% 以下、吟釀在 60% 以下、大吟釀在 50% 以下。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 276" role="img" aria-label="Rice polishing ratios and sake grades">' +
          '<rect x="0.5" y="0.5" width="759" height="275" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"POLISHING THE GRAIN", ja:"米を磨く", zh:"研磨米粒" }) + '</text>';
        var grains = [
          [100, {en:"brown rice",ja:"玄米",zh:"糙米"}, {en:"100%",ja:"100%",zh:"100%"}],
          [70,  {en:"honjōzō",ja:"本醸造",zh:"本釀造"}, {en:"≤70%",ja:"70%以下",zh:"≤70%"}],
          [60,  {en:"ginjō",ja:"吟醸",zh:"吟釀"}, {en:"≤60%",ja:"60%以下",zh:"≤60%"}],
          [50,  {en:"daiginjō",ja:"大吟醸",zh:"大吟釀"}, {en:"≤50%",ja:"50%以下",zh:"≤50%"}],
          [35,  {en:"some top daiginjō",ja:"一部の最上の大吟醸",zh:"部分頂級大吟釀"}, {en:"~35%",ja:"35%前後",zh:"約 35%"}]
        ];
        grains.forEach(function (g, i) {
          var cx = 100 + i * 140, cy = 108;
          var k = Math.pow(g[0] / 100, 1 / 3);
          var rx = 46 * k, ry = 30 * k;
          s += '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (46).toFixed(1) + '" ry="30" fill="none" stroke="#DFDAD0" stroke-dasharray="3 3"/>' +
               '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx.toFixed(1) + '" ry="' + ry.toFixed(1) + '" fill="' + (i === 0 ? "#EADCC1" : "#FBFAF7") + '" stroke="#7C6B52" stroke-width="1.2"/>' +
               '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (rx * 0.45).toFixed(1) + '" ry="' + (ry * 0.45).toFixed(1) + '" fill="#E6E4E0" stroke="none"/>' +
               '<text x="' + cx + '" y="172" text-anchor="middle" ' + F + ' font-size="12" fill="#201E1B" font-weight="600">' + L(g[2]) + '</text>' +
               '<text x="' + cx + '" y="190" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + L(g[1]) + '</text>';
        });
        s += '<text x="100" y="222" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"Grey centre: the starchy white core (shinpaku) prized in brewing rice. Dashed: the original grain.",ja:"灰色の中心：酒米で重んじられるでんぷん質の心白。破線：もとの米粒。",zh:"灰色中心：酒米所重視的澱粉質「心白」。虛線：原本的米粒。"}) + '</text>' +
             '<text x="30" y="262" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — grain drawn to scale by volume; junmai has no legal polishing minimum.",ja:"模式図——米粒は体積に比例して描く。純米には法定の精米歩合の基準はない。",zh:"示意圖——米粒依體積按比例繪製；純米酒沒有法定精米步合下限。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"rice",
      title:{ en:"Rice", ja:"米", zh:"米" }, jp:"ひだほまれ · ハツシモ · 山田錦 · 揖斐の誉",
      body:[
        { t:"p", text:{
          en:"Brewing rice, <em>shuzō kōteki-mai</em>, differs from eating rice in having large grains with a soft, opaque white core of starch, the <em>shinpaku</em>, and relatively little protein, so that it can be polished hard without breaking and dissolves evenly in the mash. <strong>Hida Homare</strong> is Gifu's own brewing rice, bred for the short, cool growing season of the Hida highlands, and it is the backbone of much Hida and Mino sake. Gifu's brewers also buy in the great national varieties — Yamada Nishiki, Gohyakumangoku, Omachi, Miyama Nishiki — and some use the prefecture's signature table rice, <strong>Hatsushimo</strong>, a large-grained, late-ripening rice whose name means “first frost”. In the hills of Ōno one small brewery brews only with <em>Ibi-no-homare</em>, a variety it developed with the farmers of its own valley.",
          ja:"酒造好適米は、粒が大きく、やわらかで不透明なでんぷんの白い芯——心白——を持ち、たんぱく質が比較的少ない点で飯米と違う。そのため割れずに深く磨くことができ、醪のなかで均一に溶ける。<strong>ひだほまれ</strong>は岐阜自身の酒米で、飛騨高地の短く冷涼な生育期間のために育成され、飛騨と美濃の多くの酒の土台となっている。岐阜の蔵は全国の代表的な品種——山田錦、五百万石、雄町、美山錦——も買い入れ、県を代表する飯米<strong>ハツシモ</strong>——大粒の晩生で、名は「初霜」を意味する——を使う蔵もある。大野の山あいのある小さな蔵は、自らの谷の農家とともに育てた揖斐の誉だけで酒を醸す。",
          zh:"酒造好適米（酒米）與食用米的差別，在於顆粒大、中心有柔軟不透明的白色澱粉核「心白」，且蛋白質相對較少，因此能大幅研磨而不碎裂，並在醪中均勻溶解。<strong>飛驒譽</strong>是岐阜自己的酒米，為飛驒高地短暫而涼爽的生長季培育，是許多飛驒與美濃清酒的骨幹。岐阜的酒藏也購入全國知名品種——山田錦、五百萬石、雄町、美山錦——有些還使用縣內代表性的食用米<strong>初霜</strong>（ハツシモ），一種大粒晚熟、名字意為「初霜」的稻米。在大野的山間，一家小酒藏只用「揖斐之譽」釀酒——那是它與自家山谷的農家共同培育的品種。" } },
        { t:"table",
          caption:{en:"Sake grades and their legal definitions",ja:"特定名称酒とその定義",zh:"特定名稱酒及其法定定義"},
          cols:[{en:"Grade",ja:"名称",zh:"名稱"},{en:"Added alcohol",ja:"醸造アルコール",zh:"添加釀造酒精"},{en:"Polishing ratio",ja:"精米歩合",zh:"精米步合"}],
          rows:[
            [{en:"Junmai daiginjō",ja:"純米大吟醸",zh:"純米大吟釀"},{en:"none",ja:"なし",zh:"無"},{en:"≤50%",ja:"50%以下",zh:"≤50%"}],
            [{en:"Daiginjō",ja:"大吟醸",zh:"大吟釀"},{en:"a little",ja:"少量",zh:"少量"},{en:"≤50%",ja:"50%以下",zh:"≤50%"}],
            [{en:"Junmai ginjō",ja:"純米吟醸",zh:"純米吟釀"},{en:"none",ja:"なし",zh:"無"},{en:"≤60%",ja:"60%以下",zh:"≤60%"}],
            [{en:"Ginjō",ja:"吟醸",zh:"吟釀"},{en:"a little",ja:"少量",zh:"少量"},{en:"≤60%",ja:"60%以下",zh:"≤60%"}],
            [{en:"Tokubetsu junmai / honjōzō",ja:"特別純米・特別本醸造",zh:"特別純米・特別本釀造"},{en:"none / a little",ja:"なし／少量",zh:"無／少量"},{en:"≤60% or a special method",ja:"60%以下または特別な製法",zh:"≤60% 或特殊製法"}],
            [{en:"Junmai",ja:"純米",zh:"純米"},{en:"none",ja:"なし",zh:"無"},{en:"no minimum",ja:"規定なし",zh:"無規定"}],
            [{en:"Honjōzō",ja:"本醸造",zh:"本釀造"},{en:"a little",ja:"少量",zh:"少量"},{en:"≤70%",ja:"70%以下",zh:"≤70%"}]
          ] }
      ]
    },

    { t:"section", id:"water",
      title:{ en:"Water", ja:"水", zh:"水" }, jp:"軟水 · 伏流水 · 自噴水",
      body:[
        { t:"p", text:{
          en:"About eighty per cent of sake is water, and much more water is used in washing, soaking and cleaning. Gifu's is mostly soft — low in the minerals that feed yeast — because it runs off granite and old metamorphic rock in the mountains and filters through the gravels of the great alluvial fans on the plain, where Ōgaki's artesian wells rise. Soft water ferments slowly and gently and tends to give a lighter, finer sake than the hard water of Nada; brewers work with it by keeping their mashes cold and their fermentation long.",
          ja:"酒のおよそ八割は水であり、洗米・浸漬・洗浄にはさらに多くの水を使う。岐阜の水はおおむね軟水——酵母の栄養となるミネラルが少ない——である。山の花崗岩や古い変成岩から流れ出し、平野の大きな扇状地の礫層を通って濾されるからで、大垣の自噴井もそこに湧く。軟水はゆっくりおだやかに発酵し、灘の硬水よりも軽くきめ細かな酒になりやすい。蔵人は醪を低温に保ち、発酵を長くとることでそれを生かす。",
          zh:"清酒約有八成是水，而洗米、浸米與清潔用掉的水更多。岐阜的水大多是軟水——供養酵母的礦物質含量低——因為它從山區的花崗岩與古老變質岩流出，再經平原上大型沖積扇的礫石層過濾，大垣的自噴井便湧現於此。軟水發酵緩慢溫和，釀出的酒往往比灘的硬水之酒更輕盈細緻；釀酒師則以低溫醪與長時間發酵來駕馭它。" } }
      ]
    },

    { t:"section", id:"yeast",
      title:{ en:"Kōji, yeast and the starter", ja:"麹と酵母と酒母", zh:"麴、酵母與酒母" }, jp:"生酛 · 山廃 · 速醸",
      body:[
        { t:"p", text:{
          en:"Rice has no sugar for yeast to eat. The brewer first grows <em>kōji</em> mould on steamed rice in a warm room; its enzymes turn starch into sugar, while yeast turns sugar into alcohol, both at once in the same tank — the “multiple parallel fermentation” that lets sake reach higher strength than wine. Before the main mash the brewer raises a concentrated yeast starter, the <em>shubo</em>. Most breweries add lactic acid to protect it (<em>sokujō</em>, “quick”). The older methods, <em>kimoto</em> and <em>yamahai</em>, let natural lactic bacteria acidify the starter over several weeks; they take longer and give deeper, more acidic sake, and several small Gifu breweries have returned to them.",
          ja:"米には酵母が食べる糖がない。蔵人はまず暖かい麹室で蒸米に麹菌を育てる。その酵素がでんぷんを糖に変え、同時に同じタンクのなかで酵母が糖をアルコールに変える——並行複発酵であり、そのおかげで酒はワインより高い度数に達する。本仕込みの前に、蔵人は酵母を濃く育てた酒母をつくる。多くの蔵は乳酸を加えてそれを守る（速醸）。より古い生酛や山廃は、自然の乳酸菌に数週間かけて酒母を酸性にさせる方法で、時間はかかるが、深く酸のある酒になる。岐阜のいくつかの小さな蔵がそこへ戻っている。",
          zh:"稻米中沒有可供酵母取食的糖。釀酒師先在溫暖的麴室裡，讓麴菌在蒸米上生長；麴菌的酵素把澱粉轉化為糖，酵母同時在同一個槽中把糖轉化為酒精——這種「並行複式發酵」使清酒能達到比葡萄酒更高的酒精度。正式投料前，釀酒師會先培養高濃度的酵母——即「酒母」。大多數酒藏會加入乳酸加以保護（速釀）；較古老的生酛與山廢，則讓天然乳酸菌花數週時間使酒母酸化，耗時較長，但釀出的酒更深沉、酸度更高，岐阜有好幾家小酒藏已重拾這些方法。" } }
      ]
    },

    { t:"related", items:[
      { href:"sake.html", why:{ en:"The sake of Gifu, in brief.", ja:"岐阜の酒の概観。", zh:"岐阜清酒概覽。" } },
      { href:"rivers.html", why:{ en:"Where the water comes from.", ja:"水はどこから来るか。", zh:"水從何而來。" } },
      { href:"directory.html", why:{ en:"Which rice each house uses.", ja:"どの蔵がどの米を使うか。", zh:"各酒藏使用的米。" } },
      { href:"hidasake.html", why:{ en:"Brewing in the cold.", ja:"寒さのなかの酒造り。", zh:"嚴寒中的釀造。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- hidasake */
GIFU.pages["hidasake"] = {
  kicker: { en: "Sake · 03", ja: "酒 · 03", zh: "酒 · 03" },
  title:  { en: "Brewing in Hida", ja: "飛騨の酒造り", zh: "飛驒的釀酒" },
  jp: "高山 · 古川 · 下呂 · 寒造り · 杉玉 · 酒蔵めぐり",
  lede: {
    en: "In Takayama the breweries are part of the townscape: dark, latticed merchant houses with a ball of cedar under the eaves and storehouses behind. Hida's cold, dry winters are ideal for brewing, and its merchant families — timber dealers and moneylenders under the shogun's direct rule — made sake for three centuries. Several breweries still work on the old streets of Takayama and Furukawa, and one in Gero takes its name from the shogun's land.",
    ja: "高山では、酒蔵は町並みの一部である。軒下に杉玉を下げた黒い格子の商家と、その奥の蔵。飛騨の寒く乾いた冬は酒造りにうってつけで、幕府直轄のもとで材木を商い金を貸した商人の家々は、三百年にわたって酒を醸してきた。いまも高山と古川の古い通りでいくつもの蔵が酒を造り、下呂の一軒は幕府の直轄地にちなむ名を持つ。",
    zh: "在高山，酒藏就是街景的一部分：屋簷下掛著杉玉的深色格子商家，後方是一座座倉庫。飛驒寒冷乾燥的冬天最適合釀酒，而在幕府直轄下經營木材、放貸的商人家族，三百年來一直在釀酒。如今高山與古川的老街上仍有好幾家酒藏在釀造，下呂的一家更以幕府直轄地為名。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Inside a brewery, schematic. Polished rice is washed, soaked and steamed; part becomes kōji in a warm room, part feeds the yeast starter, and the rest goes into the main mash, added in three stages over four days so that the yeast is never swamped. After three to five weeks the mash is pressed; the new sake is filtered, usually pasteurised, stored to mature and bottled.",
        ja:"酒蔵のなか（模式図）。磨いた米を洗い、浸し、蒸す。一部は暖かい麹室で麹となり、一部は酒母を養い、残りは本仕込みの醪に入る。醪は四日間に三回に分けて仕込み（三段仕込み）、酵母が負けないようにする。三〜五週間後に醪を搾り、新酒を濾過し、多くは火入れし、貯蔵して熟成させ、瓶に詰める。",
        zh:"酒藏內部（示意圖）。精磨後的米經洗米、浸米與蒸米；一部分在溫暖的麴室中製成麴，一部分用來培養酒母，其餘投入主醪——分四天三次投料（三段式投料），讓酵母不至於被稀釋。三至五週後壓榨醪液；新酒經過濾，多數再加熱殺菌，貯藏熟成後裝瓶。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 340" role="img" aria-label="Schematic flow inside a sake brewery">' +
          '<rect x="0.5" y="0.5" width="759" height="339" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"INSIDE A BREWERY", ja:"酒蔵のなか", zh:"酒藏之內" }) + '</text>';
        function box(x, y, w, t, sub, fill) {
          return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="46" fill="' + fill + '" stroke="#7C6B52"/>' +
                 '<text x="' + (x + w / 2) + '" y="' + (y + 20) + '" text-anchor="middle" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L(t) + '</text>' +
                 '<text x="' + (x + w / 2) + '" y="' + (y + 36) + '" text-anchor="middle" ' + F + ' font-size="9" fill="#55504A">' + L(sub) + '</text>';
        }
        function arrow(x1, y1, x2, y2) {
          var a = Math.atan2(y2 - y1, x2 - x1), hx = x2 - 7 * Math.cos(a), hy = y2 - 7 * Math.sin(a);
          return '<path d="M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 + '" stroke="#55504A"/>' +
                 '<path d="M' + x2 + ' ' + y2 + ' L' + (hx - 4 * Math.sin(a)).toFixed(1) + ' ' + (hy + 4 * Math.cos(a)).toFixed(1) + ' L' + (hx + 4 * Math.sin(a)).toFixed(1) + ' ' + (hy - 4 * Math.cos(a)).toFixed(1) + ' Z" fill="#55504A"/>';
        }
        s += box(30, 60, 120, {en:"Polish",ja:"精米",zh:"精米"}, {en:"mill the grain",ja:"米を磨く",zh:"研磨米粒"}, "#F0EDE4") +
             box(180, 60, 120, {en:"Wash, soak",ja:"洗米・浸漬",zh:"洗米、浸米"}, {en:"timed to the second",ja:"秒単位で計る",zh:"精確計時"}, "#E0E7E9") +
             box(330, 60, 120, {en:"Steam",ja:"蒸米",zh:"蒸米"}, {en:"firm outside, soft inside",ja:"外硬内軟",zh:"外硬內軟"}, "#F0EDE4");
        s += box(500, 40, 110, {en:"Kōji room",ja:"麹室",zh:"麴室"}, {en:"mould on rice",ja:"米に麹菌",zh:"米上培麴"}, "#EDE5D2") +
             box(500, 100, 110, {en:"Starter",ja:"酒母",zh:"酒母"}, {en:"yeast multiplies",ja:"酵母を増やす",zh:"酵母增殖"}, "#E6E2EC");
        s += box(250, 180, 260, {en:"Main mash (moromi)",ja:"醪（もろみ）",zh:"主醪（醪）"}, {en:"added in 3 stages over 4 days; ferments 3–5 weeks",ja:"四日で三段に仕込み、三〜五週間発酵",zh:"四天分三次投料；發酵三至五週"}, "#E9ECEE");
        s += box(30, 270, 130, {en:"Press",ja:"上槽",zh:"壓榨"}, {en:"sake from lees",ja:"酒と粕に分ける",zh:"分離酒與酒粕"}, "#F0EDE4") +
             box(190, 270, 130, {en:"Filter, pasteurise",ja:"濾過・火入れ",zh:"過濾、加熱殺菌"}, {en:"or sell fresh (nama)",ja:"生のまま出すことも",zh:"或以生酒出貨"}, "#F0EDE4") +
             box(350, 270, 130, {en:"Store",ja:"貯蔵",zh:"貯藏"}, {en:"mature for months",ja:"数か月熟成",zh:"熟成數月"}, "#E6E4E0") +
             box(510, 270, 130, {en:"Bottle",ja:"瓶詰め",zh:"裝瓶"}, {en:"and hang the sugidama",ja:"そして杉玉を掲げる",zh:"並掛上杉玉"}, "#E0E6DB");
        s += arrow(150, 83, 180, 83) + arrow(300, 83, 330, 83) + arrow(450, 76, 500, 63) + arrow(450, 90, 500, 123) +
             arrow(555, 86, 555, 100) + arrow(555, 146, 470, 180) + arrow(390, 106, 380, 180) +
             arrow(300, 226, 110, 270) + arrow(160, 293, 190, 293) + arrow(320, 293, 350, 293) + arrow(480, 293, 510, 293);
        s += '<text x="30" y="332" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — the classic sequence; timings vary by brewery and grade.",ja:"模式図——典型的な流れ。期間は蔵と酒の種類によって異なる。",zh:"示意圖——典型流程；時程因酒藏與酒款而異。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"town",
      title:{ en:"A merchant town's sake", ja:"商人の町の酒", zh:"商人之城的酒" }, jp:"天領 · 造り酒屋 · 杉玉",
      body:[
        { t:"p", text:{
          en:"Brewing in the Edo period required a licence, and in Takayama the licences were held by the town's richest merchant families, who brewed alongside dealing in timber, rice and money. With the castle gone and the shogun's intendant in the Jin'ya, their houses were the town's grandest buildings, and many of the latticed façades on the old streets belong to breweries past or present. Hida's winters — long, dry and well below freezing at night — are what every brewer wants: cold keeps the mash clean and the fermentation slow. Several breweries still work in the old town of Takayama, each with a <em>sugidama</em> hanging outside, and in the brewing season they take turns opening their storehouses to visitors.",
          ja:"江戸時代、酒造りには株（許可）が要り、高山ではそれを町で最も富んだ商人の家々が持ち、材木や米や金の商いのかたわら酒を醸した。城がなくなり幕府の郡代が陣屋にいた町で、その家々は町で最も立派な建物であり、古い通りの格子の表構えの多くは、いまの、あるいはかつての造り酒屋のものである。長く乾き、夜は氷点下を大きく下回る飛騨の冬は、どの蔵人も望むものである。寒さが醪をきれいに保ち、発酵をゆっくりにする。高山の古い町ではいまもいくつもの蔵が酒を造り、どこにも杉玉が下がり、造りの季節には順に蔵を開いて客を迎える。",
          zh:"江戶時代釀酒需要執照（酒株），在高山，這些執照掌握在鎮上最富有的商人家族手中，他們在經營木材、稻米與金錢生意的同時釀酒。城堡已拆、幕府代官坐鎮陣屋，他們的宅邸便是鎮上最氣派的建築；老街上許多格子門面，屬於今日或昔日的造酒屋。飛驒的冬天漫長乾燥、夜裡遠低於冰點，正是每位釀酒師夢寐以求的：寒冷讓醪保持潔淨，讓發酵緩慢進行。高山老城區至今仍有好幾家酒藏在釀酒，家家門外掛著杉玉，釀造季節裡還輪流開放酒藏迎接訪客。" } }
      ]
    },

    { t:"section", id:"furukawa",
      title:{ en:"Furukawa and Gero", ja:"古川と下呂", zh:"古川與下呂" }, jp:"蓬莱 · 白真弓 · 天領",
      body:[
        { t:"p", text:{
          en:"In Hida-Furukawa, the small castle town north of Takayama, two old breweries stand a few doors apart on the same street: Watanabe, whose sake is Hōrai, and Kaba, whose sake is Shiramayumi. South of Takayama, in the Hida river valley at Gero, Tenryō Shuzō, founded in 1680, mills its own rice and brews with Hida Homare; its name, <em>tenryō</em>, is the word for land held directly by the shogun, which this district was. See <a href=\"directory.html\">A Directory of Gifu Sake</a>.",
          ja:"高山の北の小さな城下町・飛騨古川では、二軒の古い蔵が同じ通りに数軒を隔てて並ぶ。蓬莱の渡辺酒造店と、白真弓の蒲酒造場である。高山の南、飛騨川の谷の下呂では、1680年創業の天領酒造が自ら米を磨き、ひだほまれで酒を醸す。その名「天領」は幕府の直轄地を指す言葉であり、この地がまさにそうであった。<a href=\"directory.html\">岐阜酒名鑑</a>を参照。",
          zh:"在高山以北的小城下町飛驒古川，同一條街上相隔幾戶便有兩家老酒藏：出品「蓬萊」的渡邊酒造店，以及出品「白真弓」的蒲酒造場。在高山以南、飛驒川河谷的下呂，創立於 1680 年的天領酒造自行精米，以飛驒譽釀酒；其名「天領」指的是幕府直轄的領地，此地正是如此。見<a href=\"directory.html\">岐阜酒名鑑</a>。" } },
        { t:"note", label:{en:"Visiting a brewery",ja:"蔵を訪ねる",zh:"參訪酒藏"}, text:{
          en:"Many Hida breweries have a shop at the front of the house where you can taste before you buy. Brewing rooms are usually closed to visitors during the season to keep the kōji and yeast clean; don't eat natto before a brewery visit — its bacteria are the brewer's enemy.",
          ja:"飛騨の多くの蔵は、母屋の表に試飲して買える店を構えている。造りの季節は、麹や酵母を清潔に保つため、仕込み蔵にはふつう入れない。蔵を訪ねる前には納豆を食べないこと——納豆菌は蔵人の敵である。",
          zh:"飛驒許多酒藏在主屋前設有店面，可以先試飲再購買。釀造季節期間，為保持麴與酵母的潔淨，釀造室通常不對外開放；參訪酒藏前別吃納豆——納豆菌是釀酒師的大敵。" } }
      ]
    },

    { t:"section", id:"people",
      title:{ en:"The people who brew", ja:"醸す人びと", zh:"釀酒的人" }, jp:"蔵元と杜氏",
      body:[
        { t:"p", text:{
          en:"Sake was seasonal work. In the old system the owner of a brewery, the <em>kuramoto</em>, hired a master brewer, the <em>tōji</em>, who arrived after the harvest with a team of farmers from his home district, brewed through the winter and went home to plant rice in spring. Guilds of such brewers grew up in the snow country — the best known from Nanbu, Echigo, Tanba and Noto — and hired themselves out across Japan. The system has been shrinking for decades as the old tōji retire. Many Gifu houses now brew with their own year-round staff, and in several of the small ones the owner is also the brewer, a <em>kuramoto-tōji</em>.",
          ja:"酒造りは季節の仕事であった。古いしくみでは、蔵の持ち主である蔵元が杜氏を雇い、杜氏は稲刈りのあとに郷里の農民たちを連れてやって来て、冬のあいだ酒を醸し、春には田植えのために帰っていった。こうした酒造りの集団は雪国に育ち——南部、越後、丹波、能登のものがよく知られる——日本じゅうの蔵に雇われた。このしくみは、年老いた杜氏が退くにつれ、何十年も縮みつづけている。いまでは岐阜の多くの蔵が通年の自前の蔵人で醸し、小さな蔵のいくつかでは持ち主みずからが醸す「蔵元杜氏」である。",
          zh:"釀酒原是季節性的工作。在舊有的體制中，酒藏的主人「藏元」聘請釀酒師傅「杜氏」；杜氏在秋收之後帶著家鄉的一班農民前來，整個冬天釀酒，春天再回家插秧。這樣的釀酒集團在雪國發展起來——以南部、越後、丹波與能登最為知名——受雇於全日本的酒藏。隨著老杜氏陸續退休，這套體制已萎縮了數十年。如今岐阜許多酒藏以自家全年雇用的人手釀酒，其中幾家小酒藏更是由主人親自釀造，即所謂「藏元杜氏」。" } }
      ]
    },

    { t:"section", id:"table",
      title:{ en:"Sake at the Hida table", ja:"飛騨の食卓の酒", zh:"飛驒餐桌上的酒" }, jp:"肴",
      body:[
        { t:"defs", items:[
          { term:{en:"Hōba miso",ja:"朴葉味噌",zh:"朴葉味噌"}, jp:"朴葉味噌",
            def:{en:"Miso mixed with leeks and mushrooms, set on a dried magnolia leaf over a small charcoal brazier until it bubbles: the classic companion to warm sake in a Hida winter.",ja:"刻んだ葱や茸を合わせた味噌を、乾いた朴の葉にのせ、小さな七輪の炭火でふつふつとさせる。飛騨の冬、燗酒の傍らの定番である。",zh:"將拌入蔥與菇類的味噌放在乾燥的朴樹葉上，置於小炭爐上烤到冒泡：飛驒冬日溫酒旁的經典下酒菜。"} },
          { term:{en:"Tsukemono steak",ja:"漬物ステーキ",zh:"醃菜煎蛋（漬物牛排）"}, jp:"漬物ステーキ",
            def:{en:"Pickles gone sour at the end of winter — usually Chinese cabbage — fried and bound with egg: a thrifty dish that became a Hida bar staple.",ja:"冬の終わりに酸っぱくなった漬物——たいていは白菜——を炒めて卵でとじる。始末の料理が、飛騨の酒場の定番になった。",zh:"把冬末變酸的醃菜——通常是白菜——下鍋炒過，再以蛋液收攏：一道惜物的家常菜，後來成了飛驒酒館的招牌。"} },
          { term:{en:"Hida beef",ja:"飛騨牛",zh:"飛驒牛"}, jp:"飛騨牛",
            def:{en:"Often grilled on a magnolia leaf too. Its richness is one reason many drinkers here reach for the firmer, drier bottles. See <a href=\"food.html\">Food of Mino &amp; Hida</a>.",ja:"これも朴葉の上で焼くことが多い。その濃さゆえに、この地の酒飲みの多くは締まった辛口の瓶に手を伸ばす。<a href=\"food.html\">美濃と飛騨の食</a>を参照。",zh:"也常放在朴葉上燒烤。正因其濃郁，此地許多愛酒人偏好較緊實、較辛口的酒。見<a href=\"food.html\">美濃與飛驒的飲食</a>。"} },
          { term:{en:"Warm sake",ja:"燗酒",zh:"溫酒"}, jp:"燗",
            def:{en:"Hida winters are long, and much of the local sake is drunk warm. The names of the temperatures, from “sun-warm” to “piping hot”, are on <a href=\"doburoku.html#cups\">Doburoku, Masu &amp; Cups</a>.",ja:"飛騨の冬は長く、地の酒の多くは燗で飲まれる。「日向燗」から「飛び切り燗」までの温度の呼び名は<a href=\"doburoku.html#cups\">どぶろく・枡・酒器</a>にある。",zh:"飛驒的冬天漫長，當地的酒多半溫熱了喝。從「日向燗」到「飛切燗」的各級溫度名稱，見<a href=\"doburoku.html#cups\">濁酒、枡與酒器</a>。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"towns.html", why:{ en:"The merchant houses of Takayama.", ja:"高山の商家。", zh:"高山的商家。" } },
      { href:"climate.html", why:{ en:"The cold that makes the sake.", ja:"酒を造る寒さ。", zh:"成就清酒的嚴寒。" } },
      { href:"sakeland.html", why:{ en:"Rice, water and yeast.", ja:"米と水と酵母。", zh:"米、水與酵母。" } },
      { href:"doburoku.html", why:{ en:"Shirakawa's festival brew.", ja:"白川の祭りの酒。", zh:"白川的祭典之酒。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- breweries */
GIFU.pages["breweries"] = {
  kicker: { en: "Sake · 04", ja: "酒 · 04", zh: "酒 · 04" },
  title:  { en: "Breweries by Region", ja: "地域別の蔵", zh: "各地酒藏" },
  jp: "飛騨 · 岐阜 · 西濃 · 中濃 · 東濃",
  lede: {
    en: "Gifu's breweries are spread across all five of its regions, from the merchant houses of Takayama to the plain around Ōgaki and the pottery towns of Tōnō. This page walks through them region by region and ends with an index, generated from the directory, of every house in this book by municipality.",
    ja: "岐阜の蔵は、高山の商家から大垣のまわりの平野、東濃の焼き物の町まで、県の五つの圏域すべてに散らばっている。この頁では圏域ごとにそれをたどり、最後に、名鑑から作った、本書に出てくるすべての蔵の市町村別索引を置く。",
    zh: "岐阜的酒藏分布在全縣五大圈域，從高山的商家、大垣周邊的平原，到東濃的陶瓷之鄉。本頁逐一介紹各圈域，最後附上一份由名鑑生成、依市町村排列的本書所有酒藏索引。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The breweries of this book on a schematic map of Gifu's five regions. The directory is a selection, not a census; the prefecture has about fifty breweries in all.",
        ja:"本書に出てくる蔵を、岐阜の五つの圏域の模式図に置いたもの。名鑑は抜粋であり、網羅ではない。県内の蔵は全部で五十ほどある。",
        zh:"本書收錄的酒藏，標示在岐阜五大圈域的示意圖上。名鑑為選錄而非普查；全縣共約五十家酒藏。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 384" role="img" aria-label="Schematic map of Gifu breweries by region">' +
          '<rect x="0.5" y="0.5" width="759" height="383" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"BREWERIES IN THIS BOOK", ja:"本書の蔵", zh:"本書收錄的酒藏" }) + '</text>';
        var regions = [
          [40, 50, 680, 96, "#E0E6DB", {en:"HIDA",ja:"飛騨",zh:"飛驒"}],
          [40, 158, 160, 190, "#F0EDE4", {en:"SEINŌ",ja:"西濃",zh:"西濃"}],
          [206, 158, 150, 190, "#EDE5D2", {en:"GIFU",ja:"岐阜",zh:"岐阜"}],
          [362, 158, 176, 190, "#E7DFD2", {en:"CHŪNŌ",ja:"中濃",zh:"中濃"}],
          [544, 158, 176, 190, "#EEE1DF", {en:"TŌNŌ",ja:"東濃",zh:"東濃"}]
        ];
        regions.forEach(function (r) {
          s += '<rect x="' + r[0] + '" y="' + r[1] + '" width="' + r[2] + '" height="' + r[3] + '" fill="' + r[4] + '" stroke="#CDC6B9"/>' +
               '<text x="' + (r[0] + 10) + '" y="' + (r[1] + 18) + '" ' + F + ' font-size="10.5" fill="#55504A" letter-spacing="1.6" font-weight="600">' + L(r[5]) + '</text>';
        });
        function town(x, y, name, brands) {
          var out = '<rect x="' + (x - 3) + '" y="' + (y - 8) + '" width="6" height="6" fill="#201E1B"/>' +
                    '<text x="' + (x + 8) + '" y="' + (y - 2) + '" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L(name) + '</text>';
          brands.forEach(function (b, i) {
            out += '<text x="' + (x + 8) + '" y="' + (y + 13 + i * 14) + '" ' + F + ' font-size="10" fill="#55504A">' + b + '</text>';
          });
          return out;
        }
        s += town(70, 90, {en:"Takayama",ja:"高山",zh:"高山"}, ["久寿玉 Kusudama · 山車 Sansha", "深山菊 Miyamagiku · 鬼ころし Onikoroshi"]);
        s += town(360, 90, {en:"Hida-Furukawa",ja:"飛騨古川",zh:"飛驒古川"}, ["蓬莱 Hōrai · 白真弓 Shiramayumi"]);
        s += town(560, 90, {en:"Gero",ja:"下呂",zh:"下呂"}, ["天領 Tenryō"]);
        s += town(56, 204, {en:"Ōgaki",ja:"大垣",zh:"大垣"}, ["白川郷 Shirakawa-gō", "道三 Dōsan"]);
        s += town(56, 258, {en:"Yōrō",ja:"養老",zh:"養老"}, ["醴泉 Reisen"]);
        s += town(56, 306, {en:"Ōno · Ikeda",ja:"大野・池田",zh:"大野・池田"}, ["射美 Ibi", "竹雀 Takesuzume"]);
        s += town(222, 204, {en:"Kakamigahara",ja:"各務原",zh:"各務原"}, ["百十郎 Hyakujūrō"]);
        s += town(222, 250, {en:"Gifu city",ja:"岐阜市",zh:"岐阜市"}, ["達磨正宗 Daruma"]);
        s += town(378, 204, {en:"Mino",ja:"美濃",zh:"美濃"}, ["百春 Hyakushun"]);
        s += town(560, 204, {en:"Tajimi",ja:"多治見",zh:"多治見"}, ["三千盛 Michisakari"]);
        s += town(560, 250, {en:"Mizunami",ja:"瑞浪",zh:"瑞浪"}, ["小左衛門 Kozaemon"]);
        s += town(560, 296, {en:"Iwamura, Ena",ja:"恵那・岩村",zh:"惠那・岩村"}, ["女城主 Onna-jōshu"]);
        s += '<text x="30" y="374" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — a selection of houses; positions approximate.",ja:"模式図——蔵は抜粋。位置はおおよそ。",zh:"示意圖——酒藏為選錄；位置為概略。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"hida",
      title:{ en:"Hida", ja:"飛騨", zh:"飛驒" }, jp:"高山 · 古川 · 下呂",
      body:[
        { t:"p", text:{
          en:"The densest cluster is in <strong>Takayama</strong>, where several breweries work in the old merchant quarter within a few minutes' walk of one another — among them the makers of Kusudama, Sansha, Miyamagiku and Onikoroshi. <strong>Hida-Furukawa</strong> has two, Hōrai and Shiramayumi, and <strong>Gero</strong> has Tenryō in the Hida river valley. Their water is cold and soft, their rice often Hida Homare, and their style mostly clean and firm. See <a href=\"hidasake.html\">Brewing in Hida</a>.",
          ja:"最も密に集まるのは<strong>高山</strong>で、古い商人の町で歩いて数分の範囲にいくつもの蔵が酒を造っている——久寿玉、山車、深山菊、鬼ころしの造り手などである。<strong>飛騨古川</strong>には蓬莱と白真弓の二軒、<strong>下呂</strong>には飛騨川の谷に天領がある。水は冷たく軟らかく、米はしばしばひだほまれで、酒はおおむねきれいで締まっている。<a href=\"hidasake.html\">飛騨の酒造り</a>を参照。",
          zh:"酒藏最密集的地方是<strong>高山</strong>：老商人街區裡，步行幾分鐘範圍內就有好幾家酒藏——包括「久壽玉」、「山車」、「深山菊」與「鬼殺」的釀造者。<strong>飛驒古川</strong>有「蓬萊」與「白真弓」兩家，<strong>下呂</strong>的飛驒川河谷則有「天領」。它們的水冷而軟，米多用飛驒譽，風格大多潔淨緊實。見<a href=\"hidasake.html\">飛驒的釀酒</a>。" } }
      ]
    },

    { t:"section", id:"mino",
      title:{ en:"The Mino regions", ja:"美濃の圏域", zh:"美濃各圈域" }, jp:"西濃 · 岐阜 · 中濃 · 東濃",
      body:[
        { t:"defs", items:[
          { term:{en:"Seinō",ja:"西濃",zh:"西濃"}, jp:"大垣 · 養老 · 揖斐",
            def:{en:"The western plain and the Ibi valley: Ōgaki's water-city breweries, including the maker of the thick Shirakawa-gō nigori; Reisen at Yōrō, named for the sweet spring of the old legend; and, in the hills of the Ibi district, two small houses that have become famous among sake lovers — Ibi at Ōno and Takesuzume at Ikeda.",ja:"西の平野と揖斐の谷。水都・大垣の蔵——濃厚なにごり酒「白川郷」の造り手を含む——、古い伝説の甘い泉にちなむ養老の醴泉、そして揖斐郡の山あいで酒好きのあいだに名を知られるようになった二つの小さな蔵、大野の射美と池田の竹雀がある。",zh:"西部平原與揖斐河谷：水都大垣的酒藏——包括濃厚白濁清酒「白川鄉」的釀造者；以古老傳說中甘泉為名的養老「醴泉」；以及揖斐郡山間兩家在愛酒人之間聲名鵲起的小酒藏——大野的「射美」與池田的「竹雀」。"} },
          { term:{en:"Gifu area",ja:"岐阜圏域",zh:"岐阜圈域"}, jp:"各務原 · 岐阜",
            def:{en:"The city and its neighbours on the Nagara and Kiso: Daruma Masamune in Gifu city, a pioneer of long-aged sake, and Hyakujūrō at Kakamigahara, named after a kabuki actor born in the town.",ja:"長良川と木曽川に面した岐阜市とその周辺。長期熟成酒の草分けである岐阜市の達磨正宗、町に生まれた歌舞伎役者にちなむ名をもつ各務原の百十郎などの蔵がある。",zh:"長良川與木曾川畔的岐阜市及其周邊：例如長期熟成酒的先驅、岐阜市的「達磨正宗」，以及以當地出身的歌舞伎演員為名的各務原「百十郎」。"} },
          { term:{en:"Chūnō",ja:"中濃",zh:"中濃"}, jp:"美濃 · 郡上 · 関",
            def:{en:"The middle Nagara and its valleys: Hyakushun in the udatsu district of Mino, and small houses in Gujō and around Seki and Minokamo.",ja:"長良川中流とその谷。美濃のうだつの町並みの百春、郡上や関・美濃加茂のまわりの小さな蔵がある。",zh:"長良川中游及其河谷：美濃卯建街區的「百春」，以及郡上、關與美濃加茂周邊的小酒藏。"} },
          { term:{en:"Tōnō",ja:"東濃",zh:"東濃"}, jp:"多治見 · 瑞浪 · 恵那",
            def:{en:"The pottery towns and the Nakasendō: Michisakari in Tajimi, famous for dryness; Kozaemon in Mizunami, brewing all year since 2018; Onna-jōshu in the castle town of Iwamura, named after the woman who held its castle.",ja:"焼き物の町と中山道。辛口で名高い多治見の三千盛、2018年から四季醸造に移った瑞浪の小左衛門、城を守った女性にちなむ名を持つ城下町岩村の女城主がある。",zh:"陶瓷之鄉與中山道：以辛口聞名的多治見「三千盛」；自 2018 年起全年釀造的瑞浪「小左衛門」；以及以守城女子為名、位於城下町岩村的「女城主」。"} }
        ] }
      ]
    },

    { t:"section", id:"age",
      title:{ en:"The houses by age", ja:"蔵の古さ", zh:"酒藏的年歲" }, jp:"創業年順",
      body:[
        { t:"table",
          caption:{en:"The houses in this book that give a founding year, oldest first. The years are the houses' own; the earliest rest partly on family tradition.",ja:"本書の蔵のうち創業年を掲げるものを、古い順に並べた。年は蔵みずからの言であり、最も古いものは一部を家の伝えに拠る。",zh:"本書中標示創業年份的酒藏，依年代由古至今排列。年份為酒藏自己的說法；最早的幾家部分憑藉家族傳承。"},
          cols:[{en:"House",ja:"蔵元",zh:"酒藏"},{en:"Brand",ja:"銘柄",zh:"品牌"},{en:"Town",ja:"所在",zh:"所在地"},{en:"Since",ja:"創業",zh:"創業"}],
          numCols:[3],
          rows:[
            [{en:"Hirase Shuzōten",ja:"平瀬酒造店",zh:"平瀨酒造店"},"久寿玉",{en:"Takayama",ja:"高山市",zh:"高山市"},"1623"],
            [{en:"Tenryō Shuzō",ja:"天領酒造",zh:"天領酒造"},"天領",{en:"Gero",ja:"下呂市",zh:"下呂市"},"1680"],
            [{en:"Nakashima Jōzō",ja:"中島醸造",zh:"中島釀造"},"小左衛門",{en:"Mizunami",ja:"瑞浪市",zh:"瑞浪市"},"1702"],
            [{en:"Kosaka Shuzōjō",ja:"小坂酒造場",zh:"小坂酒造場"},"百春",{en:"Mino",ja:"美濃市",zh:"美濃市"},"1772"],
            [{en:"Iwamura Jōzō",ja:"岩村醸造",zh:"岩村釀造"},"女城主",{en:"Ena (Iwamura)",ja:"恵那市（岩村）",zh:"惠那市（岩村）"},"1787"],
            [{en:"Gyokusendō Shuzō",ja:"玉泉堂酒造",zh:"玉泉堂酒造"},"醴泉",{en:"Yōrō",ja:"養老町",zh:"養老町"},"1805"],
            [{en:"Shiraki Tsunesuke Shōten",ja:"白木恒助商店",zh:"白木恒助商店"},"達磨正宗",{en:"Gifu",ja:"岐阜市",zh:"岐阜市"},"1835"],
            [{en:"Miwa Shuzō",ja:"三輪酒造",zh:"三輪酒造"},"白川郷",{en:"Ōgaki",ja:"大垣市",zh:"大垣市"},"1837"],
            [{en:"Harada Shuzōjō",ja:"原田酒造場",zh:"原田酒造場"},"山車",{en:"Takayama",ja:"高山市",zh:"高山市"},"1855"],
            [{en:"Watanabe Shuzōten",ja:"渡辺酒造店",zh:"渡邊酒造店"},"蓬莱",{en:"Hida (Furukawa)",ja:"飛騨市（古川）",zh:"飛驒市（古川）"},"1870"],
            [{en:"Ōtsuka Shuzō",ja:"大塚酒造",zh:"大塚酒造"},"竹雀",{en:"Ikeda",ja:"池田町",zh:"池田町"},"1886"],
            [{en:"Sugihara Shuzō",ja:"杉原酒造",zh:"杉原酒造"},"射美",{en:"Ōno",ja:"大野町",zh:"大野町"},"1892"]
          ] },
        { t:"p", text:{
          en:"Twelve of the seventeen houses in the directory are more than a century old, and five date themselves to before 1800. Several of the others are no younger; they simply do not put a year forward. Age is not quality — some of the most talked-about sake in the prefecture comes from a house that nearly closed around 1990 and was rebuilt by its next generation — but it does explain the buildings: the oldest houses brew behind the latticed fronts of the streets that <a href=\"towns.html\">Old Towns</a> describes.",
          ja:"名鑑の十七の蔵のうち十二は百年を超え、五つは1800年より前の創業を称する。残りのいくつかも若いわけではなく、年を掲げていないだけである。古さは質ではない——県で最も話題になる酒のいくつかは、1990年前後に閉じかけ、次の世代が立て直した蔵から出ている——が、建物のことは説明する。最も古い蔵は、<a href=\"towns.html\">町並み</a>が描く通りの格子の奥で醸している。",
          zh:"名鑑的十七家酒藏中，有十二家超過百年，五家自稱創業於 1800 年以前。其餘幾家也未必年輕，只是沒有標出年份。歷史悠久不等於品質——縣內最受討論的一些酒，出自一家在 1990 年前後幾乎歇業、由下一代重建的酒藏——但它說明了建築：最古老的酒藏，就在<a href=\"towns.html\">老街町並</a>所描述的那些街道的格子門面後方釀酒。" } }
      ]
    },

    { t:"section", id:"index",
      title:{ en:"Index by municipality", ja:"市町村別索引", zh:"依市町村索引" }, jp:"名鑑より",
      body:[
        { t:"muniindex", kind:"sake" },
        { t:"tiny", text:{
          en:"Generated from <a href=\"directory.html\">A Directory of Gifu Sake</a>; each name links to its entry.",
          ja:"<a href=\"directory.html\">岐阜酒名鑑</a>から生成。名前から各項目へ移動できる。",
          zh:"由<a href=\"directory.html\">岐阜酒名鑑</a>生成；點選名稱可前往各條目。" } }
      ]
    },

    { t:"related", items:[
      { href:"directory.html", why:{ en:"The full entries.", ja:"各項目の詳細。", zh:"完整條目。" } },
      { href:"regions.html", why:{ en:"The five regions.", ja:"五つの圏域。", zh:"五大圈域。" } },
      { href:"sake.html", why:{ en:"The sake of Gifu in brief.", ja:"岐阜の酒の概観。", zh:"岐阜清酒概覽。" } },
      { href:"journeys.html", why:{ en:"Routes that pass the breweries.", ja:"蔵をめぐる道筋。", zh:"途經酒藏的路線。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- directory */
GIFU.pages["directory"] = {
  kicker: { en: "Sake · 05", ja: "酒 · 05", zh: "酒 · 05" },
  title:  { en: "A Directory of Gifu Sake", ja: "岐阜酒名鑑", zh: "岐阜酒名鑑" },
  jp: "岐阜の蔵と銘柄",
  lede: {
    en: "Seventeen Gifu breweries, from the merchant houses of Takayama to the small valley houses of the Ibi and the pottery towns of Tōnō. For each there is the brand, the company that owns it, its town and the year it counts from, a few lines on what makes it distinct, and — for some — a handful of regular bottles with grade, rice and polish as the brewery publishes them. The choice is meant to show the range of the prefecture, not to rank it: keep this page open when a Gifu label is unfamiliar.",
    ja: "高山の商家の蔵から、揖斐の谷の小さな蔵、東濃の焼き物の町まで、岐阜の十七の蔵。それぞれに銘柄、それを持つ会社、町、蔵が数える創業の年、そしてどこが独特かを数行で記し、いくつかの蔵には、蔵が公表するとおりの区分・米・磨きとともに定番の酒を添えた。県の幅を示すための選び方であって、順位ではない。見慣れない岐阜の酒標に出会ったら、この頁を開いてほしい。",
    zh: "從高山的商家酒藏、揖斐河谷的小酒藏，到東濃的陶瓷之鄉，共十七家岐阜酒藏。每家列出品牌、擁有它的公司、所在城鎮與其起算的創業年份，並以數行說明它的獨到之處；部分酒藏另附數款常態酒，依酒藏公布的內容列出等級、用米與精米程度。這份選錄意在呈現全縣的廣度，而非排名：遇到陌生的岐阜酒標時，不妨打開這一頁。"
  },
  body: [

    { t:"section", id:"howtoread",
      title:{ en:"How to read an entry", ja:"記載の読み方", zh:"條目的讀法" }, jp:"凡例",
      body:[
        { t:"defs", items:[
          { term:{en:"Name and house",ja:"銘柄と蔵元",zh:"品牌與酒藏"}, jp:"銘柄・蔵元",
            def:{en:"Each entry opens with the brand as it appears on the front label, in Japanese and in roman letters. Under it is the brewing company — often under quite another name, and the one printed on the back label — then the town, and the year the house gives for its founding. For the oldest houses that year rests on family records and tradition rather than on documents that can be checked; a dash means no year is given here.",
              ja:"各項目は、表の酒標にあるとおりの銘柄を、日本語とローマ字で掲げるところから始まる。その下に醸造元の会社——しばしばまったく別の名で、裏の酒標に刷られているのはこちら——、次に町、そして蔵が創業とする年。最も古い蔵については、その年は確かめうる文書よりも家の記録と言い伝えに拠っている。ダッシュは、ここでは年を記していないことを示す。",
              zh:"每個條目開頭是正面酒標上的品牌名稱，附日文與羅馬字。其下是釀造公司——名稱往往完全不同，背標上印的正是它——接著是所在城鎮，以及酒藏自述的創業年份。最古老的幾家，其年份依據的是家族紀錄與傳承，而非可查證的文書；破折號表示此處未記年份。"} },
          { term:{en:"The bottles",ja:"酒",zh:"酒款"}, jp:"特定名称・米・精米歩合",
            def:{en:"Where a house's own figures could be confirmed, a few of its regular bottles are listed with three facts: the legal grade, with the starter or style where the house makes a point of it; the rice; and how much of each grain is left after polishing — 50% means half of it was ground away. The grades are explained on <a href=\"sakeland.html\">Rice, Water &amp; Yeast</a>. A dash means no figure is given here.",
              ja:"蔵みずからの数値を確かめられたものに限り、定番の酒をいくつか、三つの事柄とともに挙げた。法律上の区分（蔵が強調する場合は酒母や型を添える）、米、そして磨いたあとに米粒がどれだけ残るか——50%なら半分を削ったことになる。区分は<a href=\"sakeland.html\">米と水と酵母</a>で説明した。ダッシュは、ここでは数値を記していないことを示す。",
              zh:"凡能確認酒藏自身數據者，列出其數款常態酒，附三項資訊：法定等級（酒藏特別強調時，另附酒母或風格）、原料米，以及精米後每粒米剩下多少——50% 即表示磨去了一半。等級的說明見<a href=\"sakeland.html\">米、水與酵母</a>。破折號表示此處未記該數值。"} },
          { term:{en:"Left out",ja:"載せていないもの",zh:"未收錄的資訊"}, jp:"日本酒度・酸度・価格",
            def:{en:"Readings of sweetness and acidity are left out: they vary from batch to batch, and one bottling's numbers say little about a brand. Prices are left out because they change. The makers of knives, furniture, guitars and other crafts have their own directory, <a href=\"makers.html\">A Directory of Makers</a>.",
              ja:"甘辛や酸の数値は載せていない。仕込みごとに変わり、ある一本の数字は銘柄についてほとんど何も語らない。価格も変わるので載せていない。刃物・家具・ギターなど工芸の作り手は、別の名鑑<a href=\"makers.html\">作り手名鑑</a>にまとめた。",
              zh:"不列甜辛度與酸度數值：它們每批都不同，單一批次的數字說明不了一個品牌。價格也會變動，因此不列。刀具、家具、吉他等工藝的製作者，另見名鑑<a href=\"makers.html\">製作者名鑑</a>。"} }
        ] },
        { t:"note", label:{en:"On completeness",ja:"網羅について",zh:"關於完整性"}, text:{
          en:"Gifu has about fifty sake breweries, and this directory has seventeen. They were chosen to show the range rather than to rank: the merchant houses of Takayama and Furukawa, the oldest houses of the Mino plain, the pioneers of aged and cloudy sake, and the small houses whose revival since the 1990s has made Gifu a name among specialist shops. The Gifu Sake Brewers Association publishes the full membership.",
          ja:"岐阜の酒蔵はおよそ五十、この名鑑に載るのは十七である。順位のためではなく幅を示すために選んだ——高山と古川の商家の蔵、美濃の平野の古い蔵、熟成酒とにごり酒の草分け、そして1990年代からの立て直しによって専門店のあいだで岐阜の名を上げた小さな蔵。全蔵の一覧は岐阜県酒造組合連合会が公表している。",
          zh:"岐阜約有五十家酒藏，本名鑑收錄十七家。選錄的目的在於呈現其廣度而非排名：高山與古川的商家酒藏、美濃平原的古老酒藏、熟成酒與白濁清酒的先驅，以及自 1990 年代起重新振作、讓岐阜在專門酒舖之間打響名號的小酒藏。完整名單由岐阜縣酒造組合聯合會公布。" } }
      ]
    },

    { t:"section", id:"list",
      title:{ en:"The directory", ja:"名鑑", zh:"名鑑" }, jp:"一覧",
      body:[

      { t:"brands", items:[

        { group:{ en:"Gifu area", ja:"岐阜圏域", zh:"岐阜圈域" }, jp:"岐阜圏域", id:"g-gifu" },

        { jp:"達磨正宗", r:"Daruma Masamune", h:"白木恒助商店", hr:"Shiraki Tsunesuke Shōten", muni:"gifu", kind:"sake", est:"1835",
          note:{ en:"A small family house in Gifu city that has made long-aged sake its speciality since the early 1970s, laying down each year's brew and releasing blends and single vintages that run from pale gold to the brown of old sherry. Aged sake was prized in the Edo period and all but disappeared after the Meiji state began taxing sake by the quantity brewed, which made keeping it expensive; this is one of the houses that brought it back.",
            ja:"岐阜市の小さな家族の蔵で、1970年代の初めから長期熟成酒を専らとしてきた。毎年の酒を寝かせ、淡い金色から古いシェリーのような褐色まで、ブレンドや単一年度の古酒を出す。熟成酒は江戸時代には珍重されたが、明治の国家が造った量に応じて酒に課税するようになると、寝かせておくことが高くつき、ほとんど姿を消した。この蔵はそれを甦らせた蔵の一つである。",
            zh:"岐阜市內一家小型家族酒藏，自 1970 年代初期起專攻長期熟成酒，逐年窖藏當年的酒，推出從淡金色到老雪莉般褐色的調和古酒與單一年份古酒。熟成酒在江戶時代備受珍視；明治國家改依釀造量對酒課稅後，存放變得昂貴，熟成酒幾乎絕跡。這家酒藏是讓它復興的酒藏之一。" } },

        { jp:"百十郎", r:"Hyakujūrō", h:"林本店", hr:"Hayashi Honten", muni:"kakamigahara", kind:"sake", est:"",
          note:{ en:"Named after Ichikawa Hyakujūrō, a kabuki actor born in Kakamigahara, who paid for the cherry trees along the town's Shin-sakai river — still called the Hyakujūrō cherries. Sake and theatre were close companions in Mino, where villages built their own playhouses; see <a href=\"kabuki.html\">Village Kabuki</a>.",
            ja:"各務原に生まれた歌舞伎役者、市川百十郎にちなむ名である。百十郎は町の新境川の堤に桜を寄進し、その桜はいまも百十郎桜と呼ばれる。村々が自前の芝居小屋を建てた美濃では、酒と芝居は近しい連れであった。<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>を参照。",
            zh:"以出身各務原的歌舞伎演員市川百十郎為名；他出資在鎮上新境川的堤岸種植櫻花，至今仍稱「百十郎櫻」。在村村自建戲棚的美濃，酒與戲一向是親密的夥伴；見<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>。" } },

        { group:{ en:"Seinō", ja:"西濃圏域", zh:"西濃圈域" }, jp:"西濃圏域", id:"g-seino" },

        { jp:"白川郷", r:"Shirakawa-gō", h:"三輪酒造", hr:"Miwa Shuzō", muni:"ogaki", kind:"sake", est:"1837",
          note:{ en:"An Ōgaki house, on the plain and a long way from the mountain village whose name it borrows. Its thick, sweet <em>junmai nigori</em>, named for Shirakawa-gō and its festival doburoku, made it one of the best-known makers of cloudy sake in Japan; it is strained, so legally it is sake and not doburoku — see <a href=\"doburoku.html\">Doburoku, Masu &amp; Cups</a>. The house also brews the Dōsan range, named after the lord of Mino.",
            ja:"大垣の蔵であり、名を借りた山の村からは遠い平野にある。白川郷とその祭りのどぶろくにちなむ濃く甘い純米にごり酒で、日本で最もよく知られたにごり酒の造り手の一つとなった。こしてあるので、法律上はどぶろくではなく清酒である——<a href=\"doburoku.html\">どぶろく・枡・酒器</a>を参照。美濃の国主の名をとった「道三」の銘柄も醸す。",
            zh:"大垣的酒藏，位於平原，離它借用其名的山村很遠。以白川鄉及其祭典濁酒為名、濃稠甜口的「純米白濁清酒」，使它成為日本最知名的白濁酒釀造者之一；此酒經過過濾，在法律上屬於清酒而非濁酒——見<a href=\"doburoku.html\">濁酒、枡與酒器</a>。該藏也釀造以美濃國主為名的「道三」系列。" },
          p:[
            { jp:"白川郷 純米にごり酒", g:"j", m:["nigori"] }
          ] },

        { jp:"醴泉", r:"Reisen", h:"玉泉堂酒造", hr:"Gyokusendō Shuzō", muni:"yoro", kind:"sake", est:"1805",
          note:{ en:"At the foot of the Yōrō range, brewing with its water. <em>Reisen</em> is the classical word for a spring of sweet water — the word the edict of 717 used for the spring at Tagi that gave the Yōrō era its name (see <a href=\"sake.html\">The Sake of Gifu</a>). The house is best known for its ginjō.",
            ja:"養老山地のふもとにあり、その水で醸す。「醴泉」は甘い水の湧く泉をいう古い言葉であり、717年の詔が、養老の年号のもととなった多度山の泉を呼んだ言葉でもある（<a href=\"sake.html\">岐阜の酒</a>を参照）。とりわけ吟醸で知られる蔵である。",
            zh:"位於養老山地山腳，以當地之水釀酒。「醴泉」是古語中甘美泉水之稱，也是 717 年詔書用來稱呼多度山那處泉水的字眼——養老年號即由此泉而來（見<a href=\"sake.html\">岐阜的酒</a>）。此藏尤以吟釀聞名。" } },

        { jp:"射美", r:"Ibi", h:"杉原酒造", hr:"Sugihara Shuzō", muni:"ono", kind:"sake", est:"1892",
          note:{ en:"A tiny house in the Ibi valley — it calls itself the smallest brewery in Japan — brewing from Ibi-no-homare, a rice bred with the farmers of its own valley and grown only there (see <a href=\"sakeland.html\">Rice, Water &amp; Yeast</a>). Its sake goes to a few shops by allocation and is seldom seen on an open shelf.",
            ja:"揖斐の谷の小さな蔵で、みずから日本一小さい蔵と名のる。自らの谷の農家とともに育て、そこでしか作られない米「揖斐の誉」で醸す（<a href=\"sakeland.html\">米と水と酵母</a>を参照）。酒は限られた店に割り当てられ、棚に並ぶことはまれである。",
            zh:"揖斐河谷的小酒藏——自稱日本最小的酒藏——以與自家河谷農家共同育成、只在當地種植的米「揖斐之譽」釀酒（見<a href=\"sakeland.html\">米、水與酵母</a>）。其酒只配給少數店家，很少出現在一般貨架上。" },
          p:[
            { jp:"射美 特別純米", g:"tj", rice:"ibi" },
            { jp:"射美 純米吟醸", g:"jg", rice:"ibi" }
          ] },

        { jp:"竹雀", r:"Takesuzume", h:"大塚酒造", hr:"Ōtsuka Shuzō", muni:"ikeda", kind:"sake", est:"1886",
          note:{ en:"Came close to closing around 1990. The sixth generation brought it back by the harder route: the traditional <em>kimoto</em> and <em>yamahai</em> starters, rice polished only lightly, and small batches.",
            ja:"1990年ごろ廃業の寸前までいった。六代目は、手間のかかる道——伝統の生酛と山廃の酒母、軽く磨いただけの米、小さな仕込み——を選んで蔵を立て直した。",
            zh:"1990 年前後幾乎歇業。第六代選擇了費工的路來重振酒藏：傳統的生酛與山廢酒母、只輕度精磨的米，以及小批量釀造。" },
          p:[
            { jp:"竹雀 生もと純米 岐阜県産山田錦", g:"j", m:["kimoto"], rice:"yamada", mill:"70%" },
            { jp:"竹雀 山廃純米 雄町70", g:"j", m:["yamahai"], rice:"omachi", mill:"70%" }
          ] },

        { group:{ en:"Chūnō", ja:"中濃圏域", zh:"中濃圈域" }, jp:"中濃圏域", id:"g-chuno" },

        { jp:"百春", r:"Hyakushun", h:"小坂酒造場", hr:"Kosaka Shuzōjō", muni:"mino", kind:"sake", est:"1772",
          note:{ en:"In the udatsu district of Mino, the old paper-merchants' town, since 1772. The house itself, with its raised firewalls and deep eaves, is a national Important Cultural Property — a brewery that is also one of the best buildings on the street. See <a href=\"towns.html#mino\">Old Towns</a>.",
            ja:"美濃紙の商人の町、美濃のうだつの町並みで1772年から醸す。うだつを上げ、軒の深いその家屋は国の重要文化財であり、通りで最もすぐれた建物の一つがそのまま蔵でもある。<a href=\"towns.html#mino\">町並み</a>を参照。",
            zh:"自 1772 年起在美濃的卯建街區釀酒——那是昔日紙商的城鎮。其宅邸高築卯建、出簷深遠，是國家重要文化財；這座酒藏本身就是街上最出色的建築之一。見<a href=\"towns.html#mino\">老街町並</a>。" } },

        { group:{ en:"Tōnō", ja:"東濃圏域", zh:"東濃圈域" }, jp:"東濃圏域", id:"g-tono" },

        { jp:"三千盛", r:"Michisakari", h:"三千盛", hr:"Michisakari", muni:"tajimi", kind:"sake", est:"",
          note:{ en:"A Tajimi house whose name has long stood for dryness. When most of Japan's sake grew sweeter after the war it declined to follow, a choice that lost it customers at the time and has earned it a reputation since, not least at sushi counters.",
            ja:"辛口の代名詞として長く知られる多治見の蔵。戦後、日本の酒の多くが甘くなっていくなかでそれに従わず、その選択は当時は客を遠ざけたが、のちには評判を呼んだ。鮨屋のカウンターではとりわけ重んじられてきた。",
            zh:"多治見的酒藏，長久以來就是辛口的代名詞。戰後日本多數清酒日趨甘甜時，它不肯跟進；這個選擇當時讓它流失了顧客，後來卻為它贏得名聲，在壽司店的吧台尤其受到青睞。" },
          p:[
            { jp:"三千盛 特級酒", g:"nd", mill:"50%",
              d:{ en:"Keeps on its label a grade from the classification system abolished in 1992.", ja:"1992年に廃止された級別制度の名を、いまも酒標に残す。", zh:"酒標上仍保留 1992 年廢止之級別制度的名稱。" } },
            { jp:"三千盛 純米大吟醸", g:"jd" }
          ] },

        { jp:"小左衛門", r:"Kozaemon", h:"中島醸造", hr:"Nakashima Jōzō", muni:"mizunami", kind:"sake", est:"1702",
          note:{ en:"Made ordinary sake for most of three centuries before changing course in 1997 toward special-designation sake from named rice. Since 2018 it has brewed through the whole year rather than only in winter, so that each tank is made close to the time it will be drunk.",
            ja:"三百年近く並の酒を造ってきたが、1997年に名のある米による特定名称酒へと舵を切った。2018年からは冬だけでなく一年を通して仕込み、それぞれのタンクを飲まれる時期に近いところで造っている。",
            zh:"近三百年來都在釀造普通酒，1997 年才轉向以具名酒米釀造的特定名稱酒。自 2018 年起不再只在冬季、而是全年釀造，讓每一槽酒都在接近飲用的時候釀成。" },
          p:[
            { jp:"小左衛門 瑞ノ盞", g:"jd", rice:["aiyama","yamada"], mill:"40%" },
            { jp:"小左衛門 備前雄町", g:"jg", rice:"omachi", mill:"55%" },
            { jp:"小左衛門 信濃美山錦", g:"tj", rice:"miyama", mill:"55%" },
            { jp:"小左衛門 播州山田錦", g:"j", rice:"yamada", mill:"65%" }
          ] },

        { jp:"女城主", r:"Onna-jōshu", h:"岩村醸造", hr:"Iwamura Jōzō", muni:"ena", kind:"sake", est:"1787",
          note:{ en:"In the castle town of Iwamura, on the street of merchant houses below the mountain castle. The name, “the woman lord of the castle”, recalls Lady Otsuya, Nobunaga's aunt, who held Iwamura in the 1570s; the old brewery on the main street is one of the sights of the town. See <a href=\"towns.html\">Old Towns</a>.",
            ja:"岩村の城下町、山城の下の商家の通りにある。「女城主」の名は、1570年代に岩村城を守った信長の叔母、おつやの方にちなむ。本通りの古い蔵は町の見どころの一つである。<a href=\"towns.html\">町並み</a>を参照。",
            zh:"位於岩村城下町、山城下方的商家街上。「女城主」之名，紀念 1570 年代守住岩村城的信長姑母阿艷夫人（おつやの方）；主街上的老酒藏是鎮上的景點之一。見<a href=\"towns.html\">老街町並</a>。" } },

        { group:{ en:"Hida", ja:"飛騨圏域", zh:"飛驒圈域" }, jp:"飛騨圏域", id:"g-hida" },

        { jp:"久寿玉", r:"Kusudama", h:"平瀬酒造店", hr:"Hirase Shuzōten", muni:"takayama", kind:"sake", est:"1623",
          note:{ en:"Dates itself to 1623, which would make it the oldest of the Takayama houses. The name is written with characters for long life and a jewel — a play on the <em>kusudama</em>, the ball of flowers hung up for luck and broken open at celebrations.",
            ja:"創業を1623年とし、そうであれば高山で最も古い蔵となる。銘は長寿と玉を表す字で書かれ、縁起物として吊るされ、祝いの席で割られる花の玉「くす玉」に掛けてある。",
            zh:"自稱創業於 1623 年；若然，便是高山最古老的酒藏。品牌以表示長壽與寶玉的字寫成，借用「藥玉（くす玉）」的讀音——那種為祈福而懸掛、在慶典上打開的花球。" } },

        { jp:"山車", r:"Sansha", h:"原田酒造場", hr:"Harada Shuzōjō", muni:"takayama", kind:"sake", est:"1855",
          note:{ en:"Founded in 1855 in the old merchant quarter and named after the festival floats that are Takayama's pride (see <a href=\"festivals.html\">Festivals &amp; Floats</a>). Like several of its neighbours it keeps a shop at the front of the house where visitors can taste before they buy.",
            ja:"1855年に古い町人の町で創業し、高山の誇りである祭りの屋台にちなんで名づけられた（<a href=\"festivals.html\">祭りと屋台</a>を参照）。隣の蔵のいくつかと同じく、家の表に店を構え、買う前に試飲ができる。",
            zh:"1855 年創立於老商人街區，以高山引以為傲的祭典屋台為名（見<a href=\"festivals.html\">祭典與屋台</a>）。與鄰近幾家酒藏一樣，在宅邸門面設有店舖，訪客可以先試飲再購買。" } },

        { jp:"深山菊", r:"Miyamagiku", h:"舩坂酒造店", hr:"Funasaka Shuzōten", muni:"takayama", kind:"sake", est:"",
          note:{ en:"A house in the old merchant quarter of Takayama whose name means “chrysanthemum of the deep mountains”. It is one of the breweries that take turns opening their storehouses to visitors in the brewing season.",
            ja:"高山の古い町人の町にある蔵で、名は「深い山の菊」を意味する。酒造りの季節に順番で蔵を開く蔵の一つである。",
            zh:"位於高山老商人街區的酒藏，其名意為「深山之菊」。它是釀酒季節裡輪流開放酒窖供人參觀的酒藏之一。" } },

        { jp:"鬼ころし", r:"Onikoroshi", h:"老田酒造店", hr:"Oita Shuzōten", muni:"takayama", kind:"sake", est:"",
          note:{ en:"One of the old Takayama houses. “Demon-killer” is a name that many breweries across Japan give to very dry sake; this house's Hida Onikoroshi is among the best known of them.",
            ja:"高山の古い蔵の一つ。「鬼ころし」は全国の多くの蔵がとりわけ辛い酒につける名であり、この蔵の「飛騨の鬼ころし」はそのなかでも最もよく知られたものの一つである。",
            zh:"高山的老酒藏之一。「鬼殺」是日本各地許多酒藏為極辛口之酒所取的名字；這家的「飛驒鬼殺」是其中最知名者之一。" } },

        { jp:"蓬莱", r:"Hōrai", h:"渡辺酒造店", hr:"Watanabe Shuzōten", muni:"hida", kind:"sake", est:"1870",
          note:{ en:"In the old town of Hida-Furukawa since 1870, a few doors from Kaba. Hōrai is the mountain island of the immortals in Chinese legend, a name often given to things meant to bring long life.",
            ja:"1870年から飛騨古川の古い町で醸し、蒲酒造場とは数軒を隔てるのみである。蓬莱は中国の伝説にいう不老不死の仙人の山の島で、長寿を願うものによくつけられる名である。",
            zh:"自 1870 年起在飛驒古川的老街釀酒，與蒲酒造場僅隔數戶。蓬萊是中國傳說中仙人居住的海上仙山，常被用來為祈求長壽之物命名。" } },

        { jp:"白真弓", r:"Shiramayumi", h:"蒲酒造場", hr:"Kaba Shuzōjō", muni:"hida", kind:"sake", est:"",
          note:{ en:"An Edo-period house on the same street in Furukawa. Its name, “white spindle-wood bow”, is the pillow word that leads into the name Hida (斐太) in a poem of the eighth-century <em>Man'yōshū</em>.",
            ja:"古川の同じ通りにある江戸時代からの蔵。名の「白真弓」は、八世紀の『万葉集』の歌で「斐太（ひだ）」を導く枕詞である。",
            zh:"位於古川同一條街上、江戶時代以來的酒藏。其名「白真弓」（以衛矛木製成的白弓）是八世紀《萬葉集》一首和歌中，引出「斐太（飛驒）」之名的枕詞。" } },

        { jp:"天領", r:"Tenryō", h:"天領酒造", hr:"Tenryō Shuzō", muni:"gero", kind:"sake", est:"1680",
          note:{ en:"A Gero house in the Hida river valley that polishes its own rice. Its name, <em>tenryō</em>, is the word for land ruled directly by the shogunate, as Hida was from 1692; much of its range is brewed with the prefecture's own rice, Hida Homare.",
            ja:"飛騨川の谷、下呂の蔵で、米を自ら磨く。名の「天領」は幕府が直に治めた土地をいう言葉で、飛騨は1692年からそうであった。品揃えの多くを県独自の米ひだほまれで醸す。",
            zh:"下呂飛驒川河谷的酒藏，自行精米。其名「天領」指幕府直接統治的土地——飛驒自 1692 年起即是如此；產品多以本縣自有的酒米飛驒譽釀造。" },
          p:[
            { jp:"天領 特別純米 飛切り", g:"tj", rice:"hidahomare" },
            { jp:"天領 純米吟醸 ひだほまれ", g:"jg", rice:"hidahomare", mill:"50%" },
            { jp:"天領 天禄拝領", g:"jd", rice:"yamada", mill:"35%" }
          ] }

      ] }
    ] },

    { t:"section", id:"byrice",
      title:{ en:"The same list, read by rice", ja:"米から引く", zh:"由米索藏" }, jp:"品種索引",
      body:[
        { t:"p", text:{
          en:"Read from the other side, the directory becomes a list of grains: for each rice variety, the houses above that list a regular bottle made from it, with a count, and each name linking back to its entry. It covers only the bottles listed here, so it is a sample rather than a census.",
          ja:"反対側から読むと、名鑑は米の一覧になる。品種ごとに、その米でつくる定番の酒を挙げた上の蔵を数とともに並べ、名から各項目へ戻れるようにした。ここに載せた酒だけを数えているので、全数ではなく見本である。",
          zh:"從另一側讀，名鑑就成了一份米的清單：每個品種之下，列出上方以該米釀造常態酒款的酒藏與家數，點選名稱可回到各條目。它只計入此處列出的酒款，因此是樣本而非普查。" } },
        { t:"riceindex" },
        { t:"note", label:{ en:"By town", ja:"市町村から", zh:"依市町村" }, text:{
          en:"The same houses, arranged by municipality, are indexed at the end of <a href=\"breweries.html#index\">Breweries by Region</a>, which also places them on a map of the five regions.",
          ja:"同じ蔵を市町村ごとに並べた索引は<a href=\"breweries.html#index\">地域別の蔵</a>の末尾にあり、そこでは五つの圏域の地図の上にも置いてある。",
          zh:"同樣這些酒藏依市町村排列的索引，位於<a href=\"breweries.html#index\">各地酒藏</a>頁末，該頁也將它們標示在五大圈域的地圖上。" } }
      ] },

    { t:"related", items:[
      { href:"breweries.html", why:{ en:"The houses on a map, region by region.", ja:"圏域ごとに地図の上の蔵。", zh:"逐一圈域、標在地圖上的酒藏。" } },
      { href:"sakeland.html", why:{ en:"The rice, water and yeast behind the specifications.", ja:"仕様の背後にある米・水・酵母。", zh:"規格背後的米、水與酵母。" } },
      { href:"hidasake.html", why:{ en:"How the Hida houses brew.", ja:"飛騨の蔵の造り。", zh:"飛驒酒藏如何釀酒。" } },
      { href:"makers.html", why:{ en:"The other directory: knives, furniture, guitars and crafts.", ja:"もう一つの名鑑——刃物・家具・ギター・工芸。", zh:"另一份名鑑：刀具、家具、吉他與工藝。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- doburoku */
GIFU.pages["doburoku"] = {
  kicker: { en: "Sake · 06", ja: "酒 · 06", zh: "酒 · 06" },
  title:  { en: "Doburoku, Masu & Cups", ja: "どぶろく・枡・酒器", zh: "濁酒、枡與酒器" },
  jp: "どぶろく祭 · 枡 · 美濃の酒器",
  lede: {
    en: "Three ways Gifu serves its sake outside the bottle: the thick, unstrained doburoku that the shrines of Shirakawa-gō brew for their autumn festivals; the square hinoki masu that Ōgaki makes for the whole country; and the flasks and cups of the Mino kilns, which make most of Japan's everyday tableware and a good share of its finest sake cups.",
    ja: "瓶の外で岐阜が酒をふるまう三つのかたち——白川郷の神社が秋の祭りのために醸す、こさない濃いどぶろく。大垣が国じゅうのために作る檜の四角い枡。そして、日本の日常の器の大半と、最上の盃の少なからぬ部分を焼く美濃の窯の徳利と盃である。",
    zh: "岐阜在酒瓶之外端出酒的三種形式：白川鄉神社為秋季祭典釀造、未經過濾的濃稠濁酒；大垣為全國製作的方形檜木枡；以及美濃窯燒製的酒壺與酒杯——日本日常餐具的大半出自這些窯，最上等的酒杯也有不少出自這裡。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"One mash, three drinks, schematic. Left unstrained, the fermented mash is doburoku; strained through a coarse mesh that lets some of the lees through, it is <em>nigori</em>, cloudy sake; pressed and filtered, it is clear sake. Only the last two are <em>seishu</em>, sake, in law.",
        ja:"一つの醪から三つの酒（模式図）。発酵した醪をこさずに飲めばどぶろく、粕の一部が抜ける目の粗い布でこせばにごり酒、搾って濾過すれば澄んだ清酒になる。法律上「清酒」であるのは後の二つだけである。",
        zh:"同一醪，三種酒（示意圖）。發酵後的酒醪不經過濾即為濁酒（どぶろく）；以讓部分酒粕通過的粗網過濾，便是白濁清酒（にごり酒）；壓榨並過濾，則成清澈的清酒。在法律上，只有後兩者屬於「清酒」。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 300" role="img" aria-label="One mash, three drinks: doburoku, nigori and clear sake">' +
          '<rect x="0.5" y="0.5" width="759" height="299" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"ONE MASH, THREE DRINKS", ja:"一つの醪から三つの酒", zh:"同一醪，三種酒" }) + '</text>';
        /* the tank of fermenting mash */
        s += '<rect x="40" y="62" width="130" height="178" fill="#EDE5D2" stroke="#8B857C"/>' +
             '<rect x="36" y="56" width="138" height="8" fill="#E7DFD2" stroke="#8B857C"/>';
        var seed = 7;
        function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
        for (var i = 0; i < 70; i++) {
          s += '<circle cx="' + (48 + rnd() * 114).toFixed(1) + '" cy="' + (74 + rnd() * 158).toFixed(1) + '" r="1.8" fill="#8B857C"/>';
        }
        s += '<text x="105" y="258" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' +
             L({ en:"Fermented mash", ja:"醪（もろみ）", zh:"發酵酒醪" }) + '</text>' +
             '<text x="105" y="273" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' +
             L({ en:"moromi: rice, kōji, water, yeast", ja:"米・麹・水・酵母", zh:"米、麴、水、酵母" }) + '</text>';
        /* three routes */
        var rows = [
          { y: 96, how:{en:"not strained",ja:"こさない",zh:"不過濾"}, dots: 26, fill:"#EDE5D2",
            name:{en:"Doburoku",ja:"どぶろく",zh:"濁酒（どぶろく）"}, jp:"どぶろく",
            law:{en:"grains and lees left in · legally not seishu",ja:"米粒も粕も残る · 法律上は清酒ではない",zh:"米粒與酒粕皆留 · 法律上不屬清酒"} },
          { y: 158, how:{en:"coarse mesh",ja:"目の粗い布でこす",zh:"以粗網過濾"}, dots: 9, fill:"#F0EDE4",
            name:{en:"Nigori",ja:"にごり酒",zh:"白濁清酒（にごり酒）"}, jp:"にごり酒",
            law:{en:"some lees pass the mesh · legally seishu",ja:"粕の一部が布を抜ける · 法律上は清酒",zh:"部分酒粕穿過濾網 · 法律上屬清酒"} },
          { y: 220, how:{en:"pressed and filtered",ja:"搾って濾過する",zh:"壓榨並過濾"}, dots: 0, fill:"#FBFAF7",
            name:{en:"Clear sake",ja:"清酒",zh:"清酒"}, jp:"清酒",
            law:{en:"lees pressed out as sake kasu · seishu",ja:"粕は酒粕として搾り分ける · 清酒",zh:"酒粕壓出另作他用 · 清酒"} }
        ];
        rows.forEach(function (r) {
          s += '<line x1="172" y1="' + r.y + '" x2="318" y2="' + r.y + '" stroke="#55504A" stroke-width="1.2"/>' +
               '<path d="M318,' + (r.y - 4) + ' L326,' + r.y + ' L318,' + (r.y + 4) + ' Z" fill="#55504A"/>' +
               '<text x="246" y="' + (r.y - 7) + '" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + L(r.how) + '</text>';
          /* a cup */
          var cx = 356, top = r.y - 24, bot = r.y + 22;
          s += '<path d="M' + (cx - 20) + ',' + top + ' L' + (cx - 15) + ',' + bot + ' L' + (cx + 15) + ',' + bot + ' L' + (cx + 20) + ',' + top + ' Z" fill="' + r.fill + '" stroke="#55504A"/>';
          for (var k = 0; k < r.dots; k++) {
            var fy = top + 6 + rnd() * (bot - top - 9);
            var half = 15 + 5 * (bot - fy) / (bot - top) - 4;
            s += '<circle cx="' + (cx - half + rnd() * half * 2).toFixed(1) + '" cy="' + fy.toFixed(1) + '" r="1.6" fill="#8B857C"/>';
          }
          if (!r.dots) s += '<line x1="' + (cx - 12) + '" y1="' + (top + 10) + '" x2="' + (cx - 9) + '" y2="' + (bot - 8) + '" stroke="#DFDAD0" stroke-width="2"/>';
          s += '<text x="398" y="' + (r.y - 3) + '" ' + F + ' font-size="12" fill="#201E1B" font-weight="600">' + L(r.name) +
               (lang === "en" ? ' <tspan font-weight="400" fill="#55504A">' + r.jp + '</tspan>' : '') + '</text>' +
               '<text x="398" y="' + (r.y + 14) + '" ' + F + ' font-size="10" fill="#55504A">' + L(r.law) + '</text>';
        });
        s += '<text x="30" y="292" ' + F + ' font-size="9.5" fill="#8B857C">' +
             L({ en:"SCHEMATIC — legal categories under Japan's Liquor Tax Act.", ja:"模式図——法律上の区分は酒税法による。", zh:"示意圖——法律分類依日本《酒稅法》。" }) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"doburoku",
      title:{ en:"What doburoku is", ja:"どぶろくとは", zh:"何謂濁酒" }, jp:"濁酒",
      body:[
        { t:"p", text:{
          en:"Doburoku is the oldest way of drinking Japanese rice wine and the simplest: steamed rice, kōji and water are left to ferment, and the mash is drunk as it is, never pressed. It is thick and white, sweet and sour at once, often faintly fizzing because the yeast is still at work, and it does not keep. The word may come from <em>dakurō</em>, an old Chinese-derived term for turbid, unstrained wine.",
          ja:"どぶろくは、日本の米の酒の最も古く、最も簡素な飲み方である。蒸した米と麹と水を発酵させ、その醪を搾らずにそのまま飲む。白く濃く、甘さと酸っぱさが同時にあり、酵母がまだ働いているためにしばしばかすかに泡立ち、日持ちはしない。語は、濁った搾らない酒をいう漢語「濁醪（だくろう）」から来たともいわれる。",
          zh:"濁酒（どぶろく）是日本米酒最古老、也最簡單的喝法：將蒸米、米麴與水放著發酵，酒醪不經壓榨便直接飲用。它白而濃稠，甜酸兼具，由於酵母仍在作用，常帶著細微氣泡，也無法久存。其名據說源自漢語「濁醪」——杜甫所謂「濁醪有妙理」的那種混濁未濾之酒。" } },
        { t:"p", text:{
          en:"Under the Liquor Tax Act sake, <em>seishu</em>, must be strained, so doburoku is legally not sake at all but “other brewed alcohol”. For most of the twentieth century it was also illegal to make at home: in 1899 the state, which then drew a large part of its revenue from the tax on liquor, banned home brewing, and village doburoku became a moonshine that tax inspectors hunted. A few shrines kept licences to brew it for their own rites. Since 2003 the “doburoku special zones” of the national structural-reform programme have let farmers who run inns or restaurants brew it in small quantities from their own rice, and dozens of districts have used them.",
          ja:"酒税法では清酒は「こしたもの」でなければならず、どぶろくは法律上清酒ではなく「その他の醸造酒」にあたる。二十世紀の大半、家で造ることも違法であった。1899年、当時歳入の大きな部分を酒税に頼っていた国家は自家醸造を禁じ、村のどぶろくは税務署の役人が摘発する密造酒となった。わずかな神社だけが、みずからの神事のために醸す免許を保った。2003年からは、国の構造改革特区の「どぶろく特区」によって、民宿や飲食店を営む農家が自分の米で少量のどぶろくを造れるようになり、各地の数十の地域がこれを用いている。",
          zh:"依《酒稅法》，清酒必須「經過過濾」，因此濁酒在法律上根本不是清酒，而屬於「其他釀造酒」。二十世紀的大半時間裡，在家釀造它也是違法的：1899 年，當時歲入有很大一部分仰賴酒稅的國家禁止自家釀酒，村裡的濁酒於是成了稅務官員查緝的私酒。只有少數神社保留了為自身祭儀釀造的許可。自 2003 年起，國家結構改革特區制度下的「濁酒特區」，讓經營民宿或餐館的農家得以用自家的米少量釀造濁酒，全國已有數十個地區採用。" } }
      ]
    },

    { t:"section", id:"festival",
      title:{ en:"The doburoku festivals of Shirakawa-gō", ja:"白川郷のどぶろく祭", zh:"白川鄉的濁酒祭" }, jp:"どぶろく祭",
      body:[
        { t:"p", text:{
          en:"In Shirakawa-gō the shrines brew. Each autumn, chiefly in October, the shrines of the village hold their doburoku festivals one after another, to thank the gods for the harvest and to pray for the safety of the village. The doburoku is brewed in advance in a storehouse in the shrine grounds, offered to the gods, and then poured for everyone present, villagers and visitors alike, while lion dances and folk songs go on around it. The best known is the festival of Shirakawa Hachiman Shrine in Ogimachi, in mid-October; beside the shrine, the Doburoku Festival Hall shows the festival for the rest of the year. See <a href=\"shirakawago.html\">Shirakawa-gō</a>.",
          ja:"白川郷では神社が酒を醸す。毎年秋、主に十月に、村の神社が次々にどぶろく祭を行い、実りを神に感謝し、村の平安を祈る。どぶろくは前もって境内の酒蔵で仕込まれ、神に供えられたのち、獅子舞や民謡がにぎわうなかで、村人にも訪れた者にも分け隔てなく注がれる。最もよく知られるのは十月半ばの荻町・白川八幡神社の祭りで、神社の隣の「どぶろく祭の館」が、祭りのない季節にもその様子を伝えている。<a href=\"shirakawago.html\">白川郷</a>を参照。",
          zh:"在白川鄉，釀酒的是神社。每年秋天，主要在十月，村中各神社依序舉行濁酒祭，感謝神明賜予收成，並祈求村落平安。濁酒事先在神社境內的酒倉釀好，先供奉神明，再在獅子舞與民謠的熱鬧之中，不分村民或訪客，斟給在場的每一個人。最知名的是十月中旬荻町白川八幡神社的祭典；神社旁的「濁酒祭之館」在一年其餘時間展示祭典的樣貌。見<a href=\"shirakawago.html\">白川鄉</a>。" } },
        { t:"p", text:{
          en:"Most of the cloudy sake sold in the village's shops is something else: <em>nigori</em>, strained and legally sake, brewed on the plain. The best known of these, named after the village, comes from a brewery in Ōgaki — see <a href=\"directory.html#b-shirakawa-go\">A Directory of Gifu Sake</a>.",
          ja:"村の店で売られている白く濁った酒の多くは、これとは別のもの——こしてあって法律上は清酒の、平野で醸されたにごり酒——である。なかでも最もよく知られた、村の名を冠した一本は、大垣の蔵の酒である。<a href=\"directory.html#b-shirakawa-go\">岐阜酒名鑑</a>を参照。",
          zh:"村裡商店販售的白濁酒，多半是另一回事：經過過濾、法律上屬於清酒、在平原上釀造的白濁清酒（にごり酒）。其中最知名、以村名為名的一款，出自大垣的一家酒藏——見<a href=\"directory.html#b-shirakawa-go\">岐阜酒名鑑</a>。" } },
        { t:"note", label:{ en:"At the festival", ja:"祭りでは", zh:"在祭典上" }, text:{
          en:"Festival doburoku is brewed under a licence for ritual use: it is given, not sold, and it is meant to be drunk in the shrine grounds. It is sweeter and stronger than it tastes. Each shrine fixes its own days, and the village publishes them every year.",
          ja:"祭りのどぶろくは神事のための免許で醸される。売るものではなくふるまうものであり、境内で飲むためのものである。口当たりより甘く、そして強い。日取りは神社ごとに定まり、村が毎年公表している。",
          zh:"祭典濁酒是依祭儀用途的許可釀造的：它是分送而非販賣，也應在神社境內飲用。它比入口時感覺的更甜、也更烈。各神社自訂日期，村公所每年公布。" } }
      ]
    },

    { t:"section", id:"masu",
      title:{ en:"The masu", ja:"枡", zh:"枡" }, jp:"大垣の枡",
      body:[
        { t:"p", text:{
          en:"The square hinoki box that Ōgaki makes for the whole country — about eight in ten of Japan's masu — is the vessel of celebration. At weddings, openings and the New Year the lid of a sake cask is broken open with wooden mallets, <em>kagami-biraki</em>, and the sake ladled out into masu. In bars the pour called <em>mokkiri</em> is a show of generosity: a glass is set inside the box, or on a small dish, and the sake is poured past its brim; you drink the glass down a little, then tip in what spilled or sip it from a corner of the box. The history of the masu as Japan's measure, and how Ōgaki became its town, is on <a href=\"everyday.html#masu\">Wood in Everyday Things</a>.",
          ja:"大垣が国じゅうのために作る——日本の枡のおよそ八割を占める——檜の四角い箱は、祝いの器である。婚礼や開店や正月には、酒樽の蓋を木槌で割る「鏡開き」をして、酒を枡に汲み分ける。酒場では枡や受け皿にグラスを立て、あふれるまで注ぐ。これを「もっきり」といい、気前のよさを示す。まずグラスから飲み、あふれた分をグラスに戻すか、枡の角から啜る。枡が日本の量りであった歴史と、大垣が枡の町になったいきさつは<a href=\"everyday.html#masu\">暮らしの木</a>にある。",
          zh:"大垣為全國製作的方形檜木箱——約佔日本枡的八成——是喜慶的酒器。婚禮、開幕與新年時，人們以木槌敲開酒樽的蓋子，稱為「鏡開」，再把酒舀進枡裡分給眾人。在酒館裡，則把玻璃杯立在枡或小碟上，一直斟到滿溢，稱為「もっきり」，以示大方：先從杯中喝，再把溢出的酒倒回杯裡，或從枡角啜飲。枡作為日本量器的歷史，以及大垣如何成為枡之鄉，見<a href=\"everyday.html#masu\">生活中的木</a>。" } }
      ]
    },

    { t:"section", id:"cups",
      title:{ en:"Flasks and cups from Mino", ja:"美濃の徳利と盃", zh:"美濃的酒壺與酒杯" }, jp:"酒器",
      body:[
        { t:"p", text:{
          en:"Most of Japan's everyday tableware comes from the kilns of Tōnō, and sake vessels with it: the flasks and small cups of bars and homes, the white tasting cups of breweries and competitions, and, at the other end, hand-made <em>guinomi</em> that collectors pay a great deal for. The glazes of the Momoyama tea potters who made Mino famous — Shino, Oribe, Ki-Seto, Seto-guro — are now a collector's standard for sake cups too, and a thick white Shino cup blushed with red is, to many drinkers, the ideal one. See <a href=\"minoyaki.html\">Mino Ware</a>.",
          ja:"日本の日常の器の大半は東濃の窯から出ており、酒器もそのなかにある。酒場や家庭の徳利や小さな猪口、酒蔵や品評会の白い利き猪口、そしてもう一方の端には、蒐集家が高い値をつける手づくりのぐい呑み。美濃の名を高めた桃山の茶陶の釉——志野、織部、黄瀬戸、瀬戸黒——は、いまや盃においても蒐集の規範であり、赤みのさした厚い白の志野のぐい呑みを理想の一つとする酒好きは多い。<a href=\"minoyaki.html\">美濃焼</a>を参照。",
          zh:"日本日常餐具的大半出自東濃的窯，酒器也在其中：酒館與家庭用的酒壺與小杯，酒藏與品評會用的白色品酒杯，而在另一端，則是收藏家肯出高價的手作「ぐい呑」。讓美濃聲名大噪的桃山茶陶釉色——志野、織部、黃瀨戶、瀨戶黑——如今也是酒杯收藏的標準；對許多愛酒人而言，一只厚實潔白、透著紅暈的志野杯，便是理想之杯。見<a href=\"minoyaki.html\">美濃燒</a>。" } },

        { t:"figure",
          caption:{
            en:"Seven ways to hold sake, schematic and not to scale. The <em>kiki-choko</em>, the tasting cup, has two blue rings, the <em>janome</em> or snake's eye, painted on white inside it so that the taster can judge the colour and clarity of the sake against them.",
            ja:"酒を受ける七つの器（模式図・縮尺不同）。利き猪口の内側には白地に二重の青い輪「蛇の目」が描かれ、利き手はそれを背景に酒の色と冴えを見る。",
            zh:"盛酒的七種器物（示意圖，未按比例）。品酒杯（利き猪口）內側的白底上畫有兩道藍色圓圈，稱為「蛇目」，品酒者以此為背景判斷酒的色澤與清澈度。" },
          svg: function (lang, L) {
            var F = 'font-family="system-ui,sans-serif"';
            var S = 'stroke="#55504A" stroke-width="1.2"';
            var s = '<svg viewBox="0 0 760 300" role="img" aria-label="Seven sake vessels">' +
              '<rect x="0.5" y="0.5" width="759" height="299" fill="none" stroke="#DFDAD0"/>' +
              '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
              L({ en:"SEVEN VESSELS", ja:"七つの酒器", zh:"七種酒器" }) + '</text>';
            var y0 = 186;
            s += '<line x1="24" y1="' + (y0 + 0.5) + '" x2="736" y2="' + (y0 + 0.5) + '" stroke="#DFDAD0"/>';
            var X = [70, 175, 280, 385, 490, 595, 700];
            /* tokkuri */
            var c = X[0];
            s += '<path d="M' + (c - 8) + ',' + (y0 - 112) + ' C' + (c - 8) + ',' + (y0 - 92) + ' ' + (c - 9) + ',' + (y0 - 86) + ' ' + (c - 15) + ',' + (y0 - 74) +
                 ' C' + (c - 36) + ',' + (y0 - 50) + ' ' + (c - 36) + ',' + (y0 - 6) + ' ' + (c - 22) + ',' + y0 +
                 ' L' + (c + 22) + ',' + y0 + ' C' + (c + 36) + ',' + (y0 - 6) + ' ' + (c + 36) + ',' + (y0 - 50) + ' ' + (c + 15) + ',' + (y0 - 74) +
                 ' C' + (c + 9) + ',' + (y0 - 86) + ' ' + (c + 8) + ',' + (y0 - 92) + ' ' + (c + 8) + ',' + (y0 - 112) + ' Z" fill="#E0E7E9" ' + S + '/>' +
                 '<rect x="' + (c - 11) + '" y="' + (y0 - 116) + '" width="22" height="5" fill="#E0E7E9" ' + S + '/>';
            /* katakuchi */
            c = X[1];
            s += '<path d="M' + (c - 46) + ',' + (y0 - 56) + ' L' + (c - 30) + ',' + (y0 - 48) + ' L' + (c - 32) + ',' + (y0 - 38) + ' Z" fill="#E0E6DB" ' + S + '/>' +
                 '<path d="M' + (c - 34) + ',' + (y0 - 48) + ' Q' + (c - 32) + ',' + (y0 - 4) + ' ' + c + ',' + (y0 - 4) + ' Q' + (c + 32) + ',' + (y0 - 4) + ' ' + (c + 34) + ',' + (y0 - 48) + ' Z" fill="#E0E6DB" ' + S + '/>' +
                 '<rect x="' + (c - 12) + '" y="' + (y0 - 4) + '" width="24" height="4" fill="#E0E6DB" ' + S + '/>';
            /* choko */
            c = X[2];
            s += '<path d="M' + (c - 17) + ',' + (y0 - 36) + ' L' + (c - 12) + ',' + y0 + ' L' + (c + 12) + ',' + y0 + ' L' + (c + 17) + ',' + (y0 - 36) + ' Z" fill="#F0EDE4" ' + S + '/>';
            /* guinomi: Shino white with iron-red marks */
            c = X[3];
            s += '<path d="M' + (c - 25) + ',' + (y0 - 48) + ' Q' + (c - 28) + ',' + (y0 - 10) + ' ' + (c - 20) + ',' + y0 + ' L' + (c + 20) + ',' + y0 + ' Q' + (c + 28) + ',' + (y0 - 10) + ' ' + (c + 25) + ',' + (y0 - 48) + ' Q' + c + ',' + (y0 - 52) + ' ' + (c - 25) + ',' + (y0 - 48) + ' Z" fill="#FBFAF7" ' + S + '/>' +
                 '<path d="M' + (c - 12) + ',' + (y0 - 30) + ' q6,-8 12,0 t12,0" fill="none" stroke="#C9A99A" stroke-width="2"/>' +
                 '<path d="M' + (c - 18) + ',' + (y0 - 14) + ' L' + (c + 16) + ',' + (y0 - 18) + '" stroke="#EEE1DF" stroke-width="5"/>';
            /* sakazuki */
            c = X[4];
            s += '<path d="M' + (c - 44) + ',' + (y0 - 28) + ' Q' + (c - 22) + ',' + (y0 - 11) + ' ' + c + ',' + (y0 - 11) + ' Q' + (c + 22) + ',' + (y0 - 11) + ' ' + (c + 44) + ',' + (y0 - 28) + ' Z" fill="#EEE1DF" ' + S + '/>' +
                 '<path d="M' + (c - 9) + ',' + (y0 - 11) + ' L' + (c - 12) + ',' + y0 + ' L' + (c + 12) + ',' + y0 + ' L' + (c + 9) + ',' + (y0 - 11) + ' Z" fill="#EEE1DF" ' + S + '/>';
            /* kiki-choko: side view and the view from above */
            c = X[5];
            s += '<path d="M' + (c - 26) + ',' + (y0 - 46) + ' L' + (c - 22) + ',' + y0 + ' L' + (c + 22) + ',' + y0 + ' L' + (c + 26) + ',' + (y0 - 46) + ' Z" fill="#FBFAF7" ' + S + '/>' +
                 '<circle cx="' + c + '" cy="' + (y0 - 94) + '" r="24" fill="#FBFAF7" ' + S + '/>' +
                 '<circle cx="' + c + '" cy="' + (y0 - 94) + '" r="14" fill="none" stroke="#5E7780" stroke-width="3.5"/>' +
                 '<circle cx="' + c + '" cy="' + (y0 - 94) + '" r="5.5" fill="none" stroke="#5E7780" stroke-width="3.5"/>' +
                 '<text x="' + (c + 29) + '" y="' + (y0 - 112) + '" ' + F + ' font-size="9" fill="#8B857C">' + L({ en:"from above", ja:"上から", zh:"俯視" }) + '</text>';
            /* masu with a glass standing in it, poured to overflowing */
            c = X[6];
            s += '<path d="M' + (c - 15) + ',' + (y0 - 76) + ' L' + (c - 11) + ',' + (y0 - 4) + ' L' + (c + 11) + ',' + (y0 - 4) + ' L' + (c + 15) + ',' + (y0 - 76) + ' Z" fill="#E9ECEE" ' + S + '/>' +
                 '<path d="M' + (c + 15) + ',' + (y0 - 76) + ' q2,10 1,22" fill="none" stroke="#8FA6AE" stroke-width="2"/>' +
                 '<rect x="' + (c - 32) + '" y="' + (y0 - 42) + '" width="64" height="42" fill="#EADCC1" ' + S + '/>' +
                 '<path d="M' + (c - 28) + ',' + (y0 - 32) + ' q16,-4 30,0 t26,-2 M' + (c - 28) + ',' + (y0 - 18) + ' q14,3 28,0 t28,1" fill="none" stroke="#CDB68F" stroke-width="1"/>';
            var items = [
              { n:{en:"Tokkuri",ja:"徳利",zh:"德利"}, jp:"徳利", r:{en:["flask; warmed","in hot water"],ja:["注ぐ器。湯煎で","燗をつける"],zh:["酒壺；","隔水溫酒"]} },
              { n:{en:"Katakuchi",ja:"片口",zh:"片口"}, jp:"片口", r:{en:["lipped bowl","for pouring"],ja:["口のついた","注ぐ鉢"],zh:["帶嘴的","注酒缽"]} },
              { n:{en:"Choko",ja:"猪口",zh:"豬口"}, jp:"猪口", r:{en:["small","everyday cup"],ja:["日常の","小さな盃"],zh:["日常","小杯"]} },
              { n:{en:"Guinomi",ja:"ぐい呑み",zh:"ぐい呑"}, jp:"ぐい呑み", r:{en:["larger cup; a","collector's piece"],ja:["大ぶりの盃。","蒐集の対象"],zh:["較大的杯，","收藏的對象"]} },
              { n:{en:"Sakazuki",ja:"盃",zh:"盃"}, jp:"盃", r:{en:["shallow cup for","ceremonies"],ja:["儀礼に用いる","平たい盃"],zh:["儀式用的","淺杯"]} },
              { n:{en:"Kiki-choko",ja:"利き猪口",zh:"品酒杯"}, jp:"利き猪口", r:{en:["tasting cup; rings","show clarity"],ja:["蛇の目で","色と冴えを見る"],zh:["以蛇目圈看","色澤與清澈"]} },
              { n:{en:"Masu",ja:"枡",zh:"枡"}, jp:"枡", r:{en:["glass in a masu,","poured to overflow"],ja:["枡にグラスを立て","あふれるまで注ぐ"],zh:["枡中立杯，","斟至滿溢"]} }
            ];
            items.forEach(function (it, i) {
              var x = X[i];
              s += '<text x="' + x + '" y="' + (y0 + 22) + '" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(it.n) + '</text>';
              if (lang === "en") s += '<text x="' + x + '" y="' + (y0 + 37) + '" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + it.jp + '</text>';
              var r = it.r[lang] || it.r.en, base = y0 + (lang === "en" ? 53 : 39);
              r.forEach(function (line, j) {
                s += '<text x="' + x + '" y="' + (base + j * 13) + '" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + line + '</text>';
              });
            });
            s += '<text x="30" y="292" ' + F + ' font-size="9.5" fill="#8B857C">' +
                 L({ en:"SCHEMATIC — not to scale; a tokkuri usually holds one or two gō (about 180 or 360 ml).", ja:"模式図——縮尺不同。徳利はふつう一合か二合（約180または360ml）入り。", zh:"示意圖——未按比例；德利通常容量為一合或二合（約 180 或 360 毫升）。" }) + '</text></svg>';
            return s;
          }
        },

        { t:"table",
          caption:{en:"The names of sake temperatures. The figures are conventional and approximate; sake is warmed by standing the tokkuri in hot water.",ja:"酒の温度の呼び名。数字は慣用のおおよその目安である。燗は徳利を湯に立ててつける。",zh:"清酒溫度的名稱。數字為慣用的大略標準；溫酒的方法是把德利立在熱水中。"},
          cols:[{en:"Name",ja:"呼び名",zh:"名稱"},{en:"Meaning",ja:"意味",zh:"意思"},{en:"About",ja:"目安",zh:"約"}],
          numCols:[2],
          rows:[
            [{en:"Yuki-bie",ja:"雪冷え",zh:"雪冷"},{en:"snow-chilled",ja:"雪のように冷たい",zh:"如雪般冰涼"},"5 °C"],
            [{en:"Hana-bie",ja:"花冷え",zh:"花冷"},{en:"blossom-chilled",ja:"花どきの冷え",zh:"花季的微寒"},"10 °C"],
            [{en:"Suzu-bie",ja:"涼冷え",zh:"涼冷"},{en:"cool",ja:"涼しい冷え",zh:"清涼"},"15 °C"],
            [{en:"Hinata-kan",ja:"日向燗",zh:"日向燗"},{en:"sun-warm",ja:"日なたの温もり",zh:"如曬過太陽般溫"},"30 °C"],
            [{en:"Hitohada-kan",ja:"人肌燗",zh:"人肌燗"},{en:"skin-warm",ja:"人の肌の温もり",zh:"如人肌般溫"},"35 °C"],
            [{en:"Nuru-kan",ja:"ぬる燗",zh:"溫燗"},{en:"lukewarm",ja:"ぬるめ",zh:"微溫"},"40 °C"],
            [{en:"Jō-kan",ja:"上燗",zh:"上燗"},{en:"well warmed",ja:"ほどよい燗",zh:"恰到好處的溫熱"},"45 °C"],
            [{en:"Atsu-kan",ja:"熱燗",zh:"熱燗"},{en:"hot",ja:"熱い燗",zh:"熱"},"50 °C"],
            [{en:"Tobikiri-kan",ja:"飛び切り燗",zh:"飛切燗"},{en:"piping hot",ja:"とびきり熱い燗",zh:"滾燙"},"55 °C +"]
          ] },

        { t:"note", label:{ en:"Where to see them", ja:"見られる場所", zh:"哪裡看得到" }, text:{
          en:"Mino sake vessels old and new can be seen in the ceramics museums of Tajimi and Toki, and bought in their kiln towns and at the pottery fairs held there through the year; masu in the workshops and shops of Ōgaki; doburoku at the Doburoku Festival Hall in Shirakawa-gō. See <a href=\"museums.html\">Museums &amp; Workshops</a>.",
          ja:"美濃の酒器は、新旧とも多治見や土岐の陶磁の美術館・博物館で見られ、窯元の町や年間を通じて開かれる陶器まつりで買える。枡は大垣の工房や店で、どぶろくは白川郷の「どぶろく祭の館」で。<a href=\"museums.html\">博物館と工房</a>を参照。",
          zh:"新舊美濃酒器可在多治見與土岐的陶瓷美術館、博物館觀賞，並可在窯元聚落及當地全年舉辦的陶器市集購得；枡可在大垣的工坊與店舖看到；濁酒則在白川鄉的「濁酒祭之館」。見<a href=\"museums.html\">博物館與工坊</a>。" } }
      ]
    },

    { t:"related", items:[
      { href:"shirakawago.html", why:{ en:"The village of the doburoku festivals.", ja:"どぶろく祭の村。", zh:"濁酒祭之村。" } },
      { href:"everyday.html", why:{ en:"The masu and how Ōgaki came to make it.", ja:"枡と、大垣が枡の町になったいきさつ。", zh:"枡，以及大垣如何成為枡之鄉。" } },
      { href:"minoyaki.html", why:{ en:"The kilns that make the cups.", ja:"盃を焼く窯。", zh:"燒製酒杯的窯。" } },
      { href:"directory.html", why:{ en:"The breweries and their sake.", ja:"蔵とその酒。", zh:"酒藏與其酒。" } },
      { href:"festivals.html", why:{ en:"The festival year.", ja:"祭りの一年。", zh:"祭典的一年。" } }
    ] }
  ]
};
