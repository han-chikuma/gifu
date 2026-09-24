/* =============================================================
   THE SPIRIT OF GIFU — Journeys & Reference
   Page modules, concatenated. Each page is one
   GIFU.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ----------------------------------------------- regions */
GIFU.pages["regions"] = {
  kicker: { en: "Journeys & Reference · 01", ja: "旅と資料 · 01", zh: "旅程與資料 · 01" },
  title:  { en: "Five Regions", ja: "五つの圏域", zh: "五大圈域" },
  jp: "岐阜 · 西濃 · 中濃 · 東濃 · 飛騨",
  lede: {
    en: "For planning, the prefecture divides its forty-two municipalities into five regions: four in the old province of Mino — the Gifu area, Seinō in the west, Chūnō in the middle and Tōnō in the east — and Hida in the north. The regions are a practical way to hold the prefecture in the mind, and this page describes each in turn, lists its towns, and ends with an index of everything in this book's directories — breweries, makers and museums — by municipality.",
    ja: "県は計画のために四十二の市町村を五つの圏域に分けている。旧美濃国の四つ——岐阜圏域、西の西濃、中ほどの中濃、東の東濃——と、北の飛騨である。圏域は県を頭に収めるための実際的な枠であり、この頁では各圏域を順に述べ、市町村を挙げ、最後に本書の名鑑——蔵、作り手、博物館——のすべてを市町村別に並べた索引を置く。",
    zh: "為了規劃，縣把四十二個市町村分為五大圈域：舊美濃國的四個——岐阜圈域、西部的西濃、中部的中濃、東部的東濃——以及北部的飛驒。圈域是把全縣裝進腦中的實用框架；本頁依序介紹各圈域、列出其市町村，最後附上本書各名鑑——酒藏、製作者、博物館——依市町村排列的總索引。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The forty-two municipalities in their five regions, schematic: twenty-one cities, nineteen towns and two villages. Positions within each block follow the prefecture's own order, not the map. Hida covers about two-fifths of the land and holds about 7 per cent of the people.",
        ja:"五つの圏域とその四十二市町村（模式図）。市二十一、町十九、村二。各枠のなかの並びは地図ではなく県の定める順による。飛騨は県土の約五分の二を占め、人口の約7%を抱える。",
        zh:"五大圈域及其四十二個市町村（示意圖）：二十一市、十九町、二村。各框內的排列依縣的官方順序，而非地理位置。飛驒佔全縣土地約五分之二，人口約 7%。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var M = GIFU.MUNI, R = GIFU.REGION;
        var s = '<svg viewBox="0 0 760 452" role="img" aria-label="The five regions of Gifu and their municipalities">' +
          '<rect x="0.5" y="0.5" width="759" height="451" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FORTY-TWO MUNICIPALITIES", ja:"四十二の市町村", zh:"四十二個市町村" }) + '</text>';
        var boxes = {
          hida:  [40, 48, 680, 84, "#E0E6DB"],
          seino: [40, 144, 160, 258, "#F0EDE4"],
          gifu:  [206, 144, 150, 258, "#EDE5D2"],
          chuno: [362, 144, 176, 258, "#E7DFD2"],
          tono:  [544, 144, 176, 258, "#EEE1DF"]
        };
        function mark(x, y, kind) {
          if (kind === "c") return '<rect x="' + (x - 3) + '" y="' + (y - 7) + '" width="6" height="6" fill="#201E1B"/>';
          if (kind === "t") return '<circle cx="' + x + '" cy="' + (y - 4) + '" r="3" fill="#55504A"/>';
          return '<path d="M' + x + ',' + (y - 8) + ' L' + (x + 3.5) + ',' + (y - 1) + ' L' + (x - 3.5) + ',' + (y - 1) + ' Z" fill="#7C6B52"/>';
        }
        Object.keys(boxes).forEach(function (g) {
          var b = boxes[g];
          var list = Object.keys(M).filter(function (k) { return M[k].g === g; });
          var lab = L(R[g]);
          if (lang === "en") lab = lab.toUpperCase();
          s += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + b[3] + '" fill="' + b[4] + '" stroke="#CDC6B9"/>' +
               '<text x="' + (b[0] + 10) + '" y="' + (b[1] + 18) + '" ' + F + ' font-size="10.5" fill="#55504A" letter-spacing="1.4" font-weight="600">' +
               lab + ' · ' + list.length + '</text>';
          list.forEach(function (k, i) {
            var m = M[k], kind = /市$/.test(m.ja) ? "c" : (/村$/.test(m.ja) ? "v" : "t");
            var x, y;
            if (g === "hida") { x = b[0] + 20 + i * 165; y = b[1] + 52; }
            else { x = b[0] + 16; y = b[1] + 44 + i * 16.5; }
            s += mark(x, y, kind) + '<text x="' + (x + 9) + '" y="' + y + '" ' + F + ' font-size="10" fill="#201E1B">' + L(m) + '</text>';
          });
        });
        /* legend */
        var lx = 40, ly = 426;
        s += mark(lx + 4, ly, "c") + '<text x="' + (lx + 13) + '" y="' + ly + '" ' + F + ' font-size="10" fill="#55504A">' + L({ en:"city (21)", ja:"市（21）", zh:"市（21）" }) + '</text>' +
             mark(lx + 104, ly, "t") + '<text x="' + (lx + 113) + '" y="' + ly + '" ' + F + ' font-size="10" fill="#55504A">' + L({ en:"town (19)", ja:"町（19）", zh:"町（19）" }) + '</text>' +
             mark(lx + 204, ly, "v") + '<text x="' + (lx + 213) + '" y="' + ly + '" ' + F + ' font-size="10" fill="#55504A">' + L({ en:"village (2)", ja:"村（2）", zh:"村（2）" }) + '</text>' +
             '<text x="720" y="' + ly + '" text-anchor="end" ' + F + ' font-size="9.5" fill="#8B857C">' + L({ en:"SCHEMATIC — not a map.", ja:"模式図——地図ではない。", zh:"示意圖——非地圖。" }) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"gifu",
      title:{ en:"The Gifu area", ja:"岐阜圏域", zh:"岐阜圈域" }, jp:"岐阜 · 各務原 · 羽島 · 本巣",
      body:[
        { t:"p", text:{
          en:"The prefectural capital and its neighbours on the lower Nagara and the Kiso. <strong>Gifu</strong> city lies under Kinkazan, with the castle on its summit, the excavated site of Nobunaga's palace at its foot, the cormorant fishing on the Nagara and the lacquered Great Buddha of Shōhō-ji. <strong>Kakamigahara</strong> has its airfield and aircraft works, the Murakuni-za playhouse and the Hyakujūrō cherries; <strong>Hashima</strong> weaves wool and claims to be Enkū's birthplace; <strong>Motosu</strong> has the Usuzumi cherry and the fault scarp of the 1891 earthquake at Neo; <strong>Mizuho</strong> is the home of the Fuyū persimmon. See <a href=\"nobunaga.html\">Nobunaga's Gifu</a> and <a href=\"ukai.html\">Cormorant Fishing</a>.",
          ja:"県都と、長良川下流・木曽川沿いの近隣。<strong>岐阜市</strong>は金華山のふもとにあり、山頂に城、ふもとに信長の居館跡の発掘地、長良川に鵜飼、そして正法寺の乾漆の大仏がある。<strong>各務原</strong>には飛行場と航空機の工場、芝居小屋の村国座、百十郎桜がある。<strong>羽島</strong>は毛織物を織り、円空の生地を名のる。<strong>本巣</strong>には淡墨桜と、根尾の1891年の地震の断層崖がある。<strong>瑞穂</strong>は富有柿のふるさとである。<a href=\"nobunaga.html\">信長の岐阜</a>と<a href=\"ukai.html\">鵜飼</a>を参照。",
          zh:"縣府所在地及其位於長良川下游與木曾川沿岸的鄰近市町。<strong>岐阜市</strong>位於金華山下：山頂有城，山麓有信長居館的發掘遺址，長良川上有鵜飼，還有正法寺的乾漆大佛。<strong>各務原</strong>有機場與飛機工廠、戲棚村國座，以及百十郎櫻；<strong>羽島</strong>織造毛料，並自稱圓空出生地；<strong>本巢</strong>有淡墨櫻與根尾 1891 年地震的斷層崖；<strong>瑞穗</strong>是富有柿的故鄉。見<a href=\"nobunaga.html\">信長的岐阜</a>與<a href=\"ukai.html\">鵜飼</a>。" } }
      ]
    },

    { t:"section", id:"seino",
      title:{ en:"Seinō", ja:"西濃圏域", zh:"西濃圈域" }, jp:"大垣 · 関ケ原 · 養老 · 揖斐",
      body:[
        { t:"p", text:{
          en:"The western plain and the Ibi valley. <strong>Ōgaki</strong> is the water city of springs and the masu town, where Bashō ended the journey of <em>Oku no Hosomichi</em> in 1689; <strong>Tarui</strong> was the capital of Mino province and keeps the Nangū Taisha shrine of the metalworkers; <strong>Sekigahara</strong> is the gap where the battles of 672 and 1600 were fought; <strong>Yōrō</strong> has the waterfall of the sake legend; <strong>Kaizu</strong> lies among the ring levees at the bottom of the plain, where the Satsuma men of the Hōreki works are remembered. Up the Ibi are the pilgrims' temple of Tanigumi-san, the breweries of Ōno and Ikeda and the Tokuyama Dam. See <a href=\"sekigahara.html\">Sekigahara</a> and <a href=\"chisui.html\">Taming the Three Rivers</a>.",
          ja:"西の平野と揖斐の谷。<strong>大垣</strong>は湧き水の水都にして枡の町であり、芭蕉が1689年に『おくのほそ道』の旅を終えた地である。<strong>垂井</strong>は美濃国の国府が置かれた地で、金属の業の神をまつる南宮大社がある。<strong>関ケ原</strong>は672年と1600年の戦いが行われた狭間である。<strong>養老</strong>には酒の伝説の滝がある。<strong>海津</strong>は平野の底の輪中のなかにあり、宝暦治水の薩摩の人々がしのばれる。揖斐川をさかのぼれば、巡礼の寺・谷汲山、大野と池田の酒蔵、そして徳山ダムがある。<a href=\"sekigahara.html\">関ヶ原</a>と<a href=\"chisui.html\">木曽三川の治水</a>を参照。",
          zh:"西部平原與揖斐河谷。<strong>大垣</strong>是湧泉之城與枡之鄉，芭蕉於 1689 年在此結束《奧之細道》之旅；<strong>垂井</strong>曾是美濃國的國府所在，有祭祀金屬業之神的南宮大社；<strong>關原</strong>是 672 年與 1600 年兩場戰役的戰場隘口；<strong>養老</strong>有酒之傳說的瀑布；<strong>海津</strong>位於平原最低處的輪中之間，當地紀念寶曆治水的薩摩人。沿揖斐川上溯，有朝聖古寺谷汲山、大野與池田的酒藏，以及德山水壩。見<a href=\"sekigahara.html\">關原</a>與<a href=\"chisui.html\">木曾三川的治水</a>。" } }
      ]
    },

    { t:"section", id:"chuno",
      title:{ en:"Chūnō", ja:"中濃圏域", zh:"中濃圈域" }, jp:"関 · 美濃 · 郡上 · 可児",
      body:[
        { t:"p", text:{
          en:"The middle of the prefecture: the middle Nagara and its valleys, the lower Hida river and the Kiso. <strong>Seki</strong> is the town of blades, and the population centre of Japan lies in its hills; <strong>Mino</strong> is the town of paper and udatsu; <strong>Gujō</strong> has the summer dances of Gujō Hachiman and the springs and channels of its streets; <strong>Minokamo</strong> is where the Hida river joins the Kiso; <strong>Kani</strong> has a guitar workshop and the kiln site where Shino was shown to be Mino ware; <strong>Yaotsu</strong> made up the timber rafts of the Kiso and remembers Sugihara Chiune; <strong>Hichisō</strong> has the oldest stone. See <a href=\"seki.html\">Seki, Town of Blades</a> and <a href=\"washi.html\">Mino Washi</a>.",
          ja:"県の中央部——長良川中流とその谷、飛騨川下流と木曽川。<strong>関</strong>は刃物の町で、その丘に日本の人口重心がある。<strong>美濃</strong>は紙とうだつの町。<strong>郡上</strong>には郡上八幡の夏の踊りと、町なかの湧き水と水路がある。<strong>美濃加茂</strong>は飛騨川が木曽川に合う地。<strong>可児</strong>にはギター工房と、志野が美濃の焼き物だと明かされた窯跡がある。<strong>八百津</strong>は木曽川の筏を組んだ地で、杉原千畝をしのぶ。<strong>七宗</strong>には最古の石がある。<a href=\"seki.html\">刃物のまち・関</a>と<a href=\"washi.html\">美濃和紙</a>を参照。",
          zh:"全縣的中部：長良川中游及其河谷、飛驒川下游與木曾川。<strong>關</strong>是刀刃之城，日本的人口重心就在其山丘間；<strong>美濃</strong>是紙與卯建之鎮；<strong>郡上</strong>有郡上八幡的夏日舞蹈，以及街道間的湧泉與水道；<strong>美濃加茂</strong>是飛驒川匯入木曾川之處；<strong>可兒</strong>有吉他工坊，以及證明志野屬美濃燒的窯址；<strong>八百津</strong>是木曾川木筏的編組地，並紀念杉原千畝；<strong>七宗</strong>有最古老的石頭。見<a href=\"seki.html\">刀刃之城・關</a>與<a href=\"washi.html\">美濃和紙</a>。" } }
      ]
    },

    { t:"section", id:"tono",
      title:{ en:"Tōnō", ja:"東濃圏域", zh:"東濃圈域" }, jp:"多治見 · 土岐 · 瑞浪 · 恵那 · 中津川",
      body:[
        { t:"p", text:{
          en:"The pottery hills and the Nakasendō. <strong>Tajimi</strong>, <strong>Toki</strong> and <strong>Mizunami</strong> make most of Japan's everyday tableware, and Tajimi holds a national heat record; <strong>Ena</strong> has the castle town of Iwamura, the Ōi Dam on the Kiso and the agar fields of Yamaoka; <strong>Nakatsugawa</strong> has, since 2005, included Magome on the Nakasendō, and it holds the forest villages of Ura-Kiso — Kashimo, Tsukechi and Kawaue — whose hinoki goes to the shrines of Ise, and Sakashita, where Takamine guitars are made. See <a href=\"minoyaki.html\">Mino Ware</a> and <a href=\"hinoki.html\">Hinoki &amp; the Kiso Five</a>.",
          ja:"焼き物の丘と中山道。<strong>多治見</strong>、<strong>土岐</strong>、<strong>瑞浪</strong>は日本の日常の器の大半をつくり、多治見は国内の最高気温の記録を持つ。<strong>恵那</strong>には城下町の岩村、木曽川の大井ダム、山岡の寒天の干し場がある。<strong>中津川</strong>は2005年から中山道の馬籠を含み、伊勢の神宮へ檜を送る裏木曽の山の村——加子母、付知、川上——と、タカミネのギターがつくられる坂下を抱える。<a href=\"minoyaki.html\">美濃焼</a>と<a href=\"hinoki.html\">檜と木曽五木</a>を参照。",
          zh:"陶瓷丘陵與中山道。<strong>多治見</strong>、<strong>土岐</strong>與<strong>瑞浪</strong>生產日本大部分的日常餐具，多治見並保有日本的高溫紀錄；<strong>惠那</strong>有城下町岩村、木曾川上的大井水壩，以及山岡的寒天曬場；<strong>中津川</strong>自 2005 年起納入中山道的馬籠，並擁有把檜木送往伊勢神宮的裏木曾山村——加子母、付知與川上——以及製作 Takamine 吉他的坂下。見<a href=\"minoyaki.html\">美濃燒</a>與<a href=\"hinoki.html\">檜木與木曾五木</a>。" } }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"Hida", ja:"飛騨圏域", zh:"飛驒圈域" }, jp:"高山 · 飛騨 · 下呂 · 白川",
      body:[
        { t:"p", text:{
          en:"The mountains of the north, the old province of Hida in four municipalities. <strong>Takayama</strong>, the largest municipality in Japan by area, has its old merchant town, its spring and autumn festivals, its furniture makers and Oku-Hida's hot springs under the Northern Alps; <strong>Hida</strong> city has the canal town of Furukawa and, in the old Kamioka mine, the underground detectors of neutrino physics; <strong>Gero</strong> is the hot spring on the Hida river; <strong>Shirakawa</strong> village is Shirakawa-gō. Hida covers about two-fifths of the prefecture and holds about 7 per cent of its people. See <a href=\"provinces.html\">Mino and Hida</a> and <a href=\"journeys.html\">Five Journeys</a>.",
          ja:"北の山地、旧飛騨国の四市村。<strong>高山</strong>は面積で日本最大の市町村で、古い商人の町、春と秋の祭り、家具メーカー、そして北アルプスの下の奥飛騨温泉郷を抱える。<strong>飛騨市</strong>には水路の町・古川と、旧神岡鉱山のニュートリノ物理の地下検出器がある。<strong>下呂</strong>は飛騨川の温泉。<strong>白川村</strong>は白川郷である。飛騨は県土の約五分の二を占め、人口の約7%を抱える。<a href=\"provinces.html\">美濃と飛騨</a>と<a href=\"journeys.html\">五つの旅</a>を参照。",
          zh:"北部山地，舊飛驒國，由四個市村組成。<strong>高山</strong>是日本面積最大的市町村，擁有老商人町、春秋兩季祭典、家具製造商，以及北阿爾卑斯山下的奧飛驒溫泉鄉；<strong>飛驒市</strong>有水道之鎮古川，以及舊神岡礦山中微中子物理的地下偵測器；<strong>下呂</strong>是飛驒川畔的溫泉；<strong>白川村</strong>就是白川鄉。飛驒佔全縣約五分之二的土地，人口約 7%。見<a href=\"provinces.html\">美濃與飛驒</a>與<a href=\"journeys.html\">五段旅程</a>。" } }
      ]
    },

    { t:"section", id:"counts",
      title:{ en:"Cities, towns and villages", ja:"市・町・村の数", zh:"市、町、村的數目" }, jp:"市町村数",
      body:[
        { t:"table",
          caption:{en:"The forty-two municipalities by region, after the mergers of 2003–2006, which reduced the prefecture's ninety-nine municipalities to forty-two.",ja:"圏域別の四十二市町村。2003年から2006年の合併により、県の市町村は九十九から四十二に減った。",zh:"各圈域的四十二個市町村。2003 至 2006 年的合併，使全縣市町村由九十九個減為四十二個。"},
          cols:[{en:"Region",ja:"圏域",zh:"圈域"},{en:"Cities",ja:"市",zh:"市"},{en:"Towns",ja:"町",zh:"町"},{en:"Villages",ja:"村",zh:"村"},{en:"Total",ja:"計",zh:"合計"}],
          numCols:[1,2,3,4],
          rows:[
            [{en:"Gifu area",ja:"岐阜圏域",zh:"岐阜圈域"},"6","3","0","9"],
            [{en:"Seinō",ja:"西濃圏域",zh:"西濃圈域"},"2","9","0","11"],
            [{en:"Chūnō",ja:"中濃圏域",zh:"中濃圈域"},"5","7","1","13"],
            [{en:"Tōnō",ja:"東濃圏域",zh:"東濃圈域"},"5","0","0","5"],
            [{en:"Hida",ja:"飛騨圏域",zh:"飛驒圈域"},"3","0","1","4"],
            [{en:"Prefecture",ja:"県計",zh:"全縣"},"21","19","2","42"]
          ] }
      ]
    },

    { t:"section", id:"index",
      title:{ en:"Everything in the directories, by town", ja:"名鑑のすべてを市町村から", zh:"依市町村索引所有名鑑" }, jp:"総索引",
      body:[
        { t:"p", text:{
          en:"Every entry in the three directories of this book — <a href=\"directory.html\">sake</a>, <a href=\"makers.html\">makers</a> and <a href=\"museums.html\">museums and workshops</a> — arranged by municipality in the prefecture's own order. The count beside each town is the number of entries; each name links to its entry.",
          ja:"本書の三つの名鑑——<a href=\"directory.html\">酒</a>、<a href=\"makers.html\">作り手</a>、<a href=\"museums.html\">博物館と工房</a>——のすべての項目を、県の定める順に市町村ごとに並べた。町の横の数は項目数であり、名から各項目へ移動できる。",
          zh:"本書三份名鑑——<a href=\"directory.html\">酒</a>、<a href=\"makers.html\">製作者</a>、<a href=\"museums.html\">博物館與工坊</a>——的所有條目，依縣的官方順序按市町村排列。城鎮旁的數字是條目數；點選名稱可前往各條目。" } },
        { t:"muniindex" }
      ]
    },

    { t:"related", items:[
      { href:"provinces.html", why:{ en:"The two old provinces behind the five regions.", ja:"五つの圏域の背後にある二つの旧国。", zh:"五大圈域背後的兩個舊國。" } },
      { href:"journeys.html", why:{ en:"Routes through the regions.", ja:"圏域をめぐる道筋。", zh:"穿越各圈域的路線。" } },
      { href:"museums.html", why:{ en:"Where to see things, region by region.", ja:"圏域ごとの見どころ。", zh:"各圈域可參觀之處。" } },
      { href:"tables.html", why:{ en:"The numbers of the prefecture.", ja:"県の数字。", zh:"全縣的數字。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- journeys */
GIFU.pages["journeys"] = {
  kicker: { en: "Journeys & Reference · 02", ja: "旅と資料 · 02", zh: "旅程與資料 · 02" },
  title:  { en: "Five Journeys", ja: "五つの旅", zh: "五段旅程" },
  jp: "長良川 · 飛騨 · 中山道 · 檜の道 · 西の平野",
  lede: {
    en: "Five routes that string the places of this book together, each following something the prefecture is made of: a river, a mountain province, an old road, the path of the timber and the edge of the plain. Each can be done by train and bus in two to four days, and each is written as a sequence of stops with the pages that explain them. Timetables, opening days and festival dates change; check them before you travel.",
    ja: "本書の土地を、県をかたちづくるもの——一本の川、山の国、古い街道、木の運ばれた道、平野のへり——に沿ってつなぐ五つの道筋。いずれも鉄道とバスで二日から四日で回れ、立ち寄る場所と、それを説く頁とを順に記した。時刻表、開館日、祭りの日取りは変わるので、出かける前に確かめてほしい。",
    zh: "五條把本書各地串連起來的路線，各自沿著構成這個縣的某樣東西前進：一條河、一個山國、一條古道、木材走過的路，以及平原的邊緣。每條都可以搭火車與巴士在兩到四天內走完，並依序列出停留地點與說明它們的頁面。時刻表、開館日與祭典日期都會變動，出發前請先確認。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The five journeys on a schematic map of the prefecture. Positions are approximate and distances are not to scale; the routes follow the railways and roads described below.",
        ja:"県の模式図の上の五つの旅。位置はおおよそで、距離は縮尺どおりではない。道筋は下に記した鉄道と道路に沿う。",
        zh:"標示在全縣示意圖上的五段旅程。位置為概略，距離未按比例；路線依下文所述的鐵路與道路而行。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var P = {
          shirakawa:[372,70,{en:"Shirakawa-gō",ja:"白川郷",zh:"白川鄉"}],
          furukawa:[470,96,{en:"Furukawa",ja:"古川",zh:"古川"}],
          takayama:[500,138,{en:"Takayama",ja:"高山",zh:"高山"}],
          okuhida:[626,120,{en:"Oku-Hida",ja:"奥飛騨",zh:"奧飛驒"}],
          gero:[486,222,{en:"Gero",ja:"下呂",zh:"下呂"}],
          gujo:[332,238,{en:"Gujō Hachiman",ja:"郡上八幡",zh:"郡上八幡"}],
          mino:[318,292,{en:"Mino",ja:"美濃",zh:"美濃"}],
          seki:[302,322,{en:"Seki",ja:"関",zh:"關"}],
          gifu:[246,346,{en:"Gifu",ja:"岐阜",zh:"岐阜"}],
          ogaki:[176,356,{en:"Ōgaki",ja:"大垣",zh:"大垣"}],
          tarui:[136,346,{en:"Tarui",ja:"垂井",zh:"垂井"}],
          sekigahara:[98,352,{en:"Sekigahara",ja:"関ケ原",zh:"關原"}],
          yoro:[146,400,{en:"Yōrō",ja:"養老",zh:"養老"}],
          kaizu:[188,428,{en:"Kaizu",ja:"海津",zh:"海津"}],
          ibi:[146,286,{en:"Tanigumi",ja:"谷汲",zh:"谷汲"}],
          ota:[372,344,{en:"Minokamo",ja:"美濃加茂",zh:"美濃加茂"}],
          kani:[404,370,{en:"Kani",ja:"可児",zh:"可兒"}],
          yaotsu:[440,336,{en:"Yaotsu",ja:"八百津",zh:"八百津"}],
          mitake:[440,384,{en:"Mitake",ja:"御嵩",zh:"御嵩"}],
          hosokute:[498,392,{en:"Hosokute",ja:"細久手",zh:"細久手"}],
          tajimi:[446,420,{en:"Tajimi",ja:"多治見",zh:"多治見"}],
          ena:[560,376,{en:"Ena",ja:"恵那",zh:"惠那"}],
          iwamura:[574,414,{en:"Iwamura",ja:"岩村",zh:"岩村"}],
          nakatsugawa:[622,358,{en:"Nakatsugawa",ja:"中津川",zh:"中津川"}],
          magome:[668,336,{en:"Magome",ja:"馬籠",zh:"馬籠"}],
          kashimo:[618,280,{en:"Kashimo",ja:"加子母",zh:"加子母"}],
          sakashita:[660,306,{en:"Sakashita",ja:"坂下",zh:"坂下"}]
        };
        var routes = [
          { n:1, c:"#5E7780", dash:"",    pts:["gujo","mino","seki","gifu"] },
          { n:2, c:"#6F8A5E", dash:"",    pts:["gero","takayama","furukawa","shirakawa"] },
          { n:2, c:"#6F8A5E", dash:"4 3", pts:["takayama","okuhida"] },
          { n:3, c:"#7C6B52", dash:"",    pts:["magome","nakatsugawa","ena","hosokute","mitake","ota","gifu","ogaki","tarui","sekigahara"] },
          { n:3, c:"#7C6B52", dash:"4 3", pts:["ena","iwamura"] },
          { n:4, c:"#A0766A", dash:"", pts:["kashimo","sakashita","nakatsugawa","yaotsu","kani","tajimi"] },
          { n:5, c:"#8B857C", dash:"", pts:["ibi","ogaki","yoro","kaizu"] }
        ];
        var s = '<svg viewBox="0 0 760 470" role="img" aria-label="Schematic map of five journeys through Gifu">' +
          '<rect x="0.5" y="0.5" width="759" height="469" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FIVE JOURNEYS", ja:"五つの旅", zh:"五段旅程" }) + '</text>';
        /* the two provinces, very roughly */
        s += '<path d="M300,48 L700,48 L712,190 L640,250 L420,262 L300,212 Z" fill="#E0E6DB" stroke="#CDC6B9"/>' +
             '<path d="M300,212 L420,262 L640,250 L712,190 L720,440 L240,450 L150,450 L70,380 L80,300 L200,230 Z" fill="#F0EDE4" stroke="#CDC6B9"/>' +
             '<text x="690" y="70" text-anchor="end" ' + F + ' font-size="10.5" fill="#55504A" letter-spacing="1.6" font-weight="600">' + L({ en:"HIDA", ja:"飛騨", zh:"飛驒" }) + '</text>' +
             '<text x="90" y="438" ' + F + ' font-size="10.5" fill="#55504A" letter-spacing="1.6" font-weight="600">' + L({ en:"MINO", ja:"美濃", zh:"美濃" }) + '</text>';
        routes.forEach(function (r) {
          var d = r.pts.map(function (k, i) { return (i ? "L" : "M") + P[k][0] + "," + P[k][1]; }).join(" ");
          s += '<path d="' + d + '" fill="none" stroke="' + r.c + '" stroke-width="2.6"' + (r.dash ? ' stroke-dasharray="' + r.dash + '"' : '') + ' stroke-linejoin="round"/>';
        });
        var off = { furukawa:[8,-6], shirakawa:[-8,-8,"end"], gero:[8,4], gujo:[-8,-6,"end"], mino:[-8,2,"end"], seki:[-8,10,"end"],
                    gifu:[-4,16,"end"], ogaki:[6,-8], tarui:[0,-9,"middle"], sekigahara:[-6,14,"middle"], yoro:[-8,4,"end"], kaizu:[8,4],
                    ibi:[-8,-6,"end"], ota:[0,-9,"middle"], kani:[-6,14,"end"], yaotsu:[8,-4], mitake:[4,14,"middle"], hosokute:[6,14,"middle"],
                    tajimi:[8,6], ena:[0,-9,"middle"], iwamura:[8,6], nakatsugawa:[8,14], magome:[8,4], kashimo:[8,-4], sakashita:[8,4],
                    takayama:[-8,4,"end"], okuhida:[8,4] };
        Object.keys(P).forEach(function (k) {
          var p = P[k], o = off[k] || [8,4];
          s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3.4" fill="#FBFAF7" stroke="#201E1B" stroke-width="1.3"/>' +
               '<text x="' + (p[0] + o[0]) + '" y="' + (p[1] + o[1]) + '"' + (o[2] ? ' text-anchor="' + o[2] + '"' : '') + ' ' + F + ' font-size="9.5" fill="#201E1B">' + L(p[2]) + '</text>';
        });
        /* legend */
        var names = [
          [1,"#5E7780","",{en:"Down the Nagara",ja:"長良川をくだる",zh:"順長良川而下"}],
          [2,"#6F8A5E","",{en:"The Hida circle",ja:"飛騨をめぐる",zh:"飛驒環遊"}],
          [3,"#7C6B52","",{en:"The Nakasendō",ja:"中山道をゆく",zh:"走中山道"}],
          [4,"#A0766A","",{en:"The road of hinoki",ja:"檜の道",zh:"檜木之路"}],
          [5,"#8B857C","",{en:"The western plain",ja:"西の平野",zh:"西部平原"}]
        ];
        names.forEach(function (n, i) {
          var y = 60 + i * 17;
          s += '<line x1="30" y1="' + (y - 4) + '" x2="56" y2="' + (y - 4) + '" stroke="' + n[1] + '" stroke-width="2.6"' + (n[2] ? ' stroke-dasharray="' + n[2] + '"' : '') + '/>' +
               '<text x="62" y="' + y + '" ' + F + ' font-size="10" fill="#201E1B">' + n[0] + '. ' + L(n[3]) + '</text>';
        });
        s += '<text x="30" y="160" ' + F + ' font-size="9.5" fill="#8B857C">' + L({ en:"Dashed: side trips.", ja:"破線：寄り道。", zh:"虛線：支線。" }) + '</text>' +
             '<text x="740" y="460" text-anchor="end" ' + F + ' font-size="9.5" fill="#8B857C">' + L({ en:"SCHEMATIC — positions approximate.", ja:"模式図——位置はおおよそ。", zh:"示意圖——位置為概略。" }) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"nagara",
      title:{ en:"1. Down the Nagara", ja:"一　長良川をくだる", zh:"一、順長良川而下" }, jp:"郡上八幡 · 美濃 · 関 · 岐阜",
      body:[
        { t:"p", text:{
          en:"Two or three days following the clearest of the three great rivers from the mountains to the plain, by the Nagaragawa Railway, which runs up the valley from Minokamo through Seki and Mino to Gujō Hachiman, and then by train or bus to Gifu. Best from late spring to early autumn, when the dances, the fishing and the river are all at their height.",
          ja:"三大河川のうち最も清らかな川を、山から平野へたどる二、三日の旅。美濃加茂から関、美濃を経て郡上八幡へ谷をさかのぼる長良川鉄道を使い、そこから鉄道かバスで岐阜へ出る。踊りも鵜飼も川も盛りとなる晩春から初秋がよい。",
          zh:"兩三天的旅程，沿著三大河中最清澈的一條，從山區一路走到平原：搭乘長良川鐵道——它從美濃加茂出發，經關與美濃，溯谷而上到郡上八幡——再轉火車或巴士到岐阜。晚春到初秋最佳，那時舞蹈、鵜飼與河川都在最盛之時。" } },
        { t:"steps", items:[
          { title:{en:"Gujō Hachiman",ja:"郡上八幡",zh:"郡上八幡"}, jp:"郡上市",
            text:{en:"A castle town of springs, washing places and channels, whose Gujō Odori is danced on some thirty nights from mid-July to early September, all night long from 13 to 16 August. See <a href=\"towns.html#gujo\">Old Towns</a> and <a href=\"festivals.html\">Festivals &amp; Floats</a>.",ja:"湧き水と洗い場と水路の城下町。郡上おどりは七月中旬から九月上旬までの三十夜あまり踊られ、八月十三日から十六日は夜通し踊る。<a href=\"towns.html#gujo\">町並み</a>と<a href=\"festivals.html\">祭りと屋台</a>を参照。",zh:"湧泉、洗滌處與水道交織的城下町；郡上舞自七月中旬至九月上旬跳上三十多個夜晚，八月十三日至十六日更徹夜起舞。見<a href=\"towns.html#gujo\">老街町並</a>與<a href=\"festivals.html\">祭典與屋台</a>。"} },
          { title:{en:"Mino",ja:"美濃",zh:"美濃"}, jp:"美濃市",
            text:{en:"The paper merchants' town of udatsu firewalls, and upstream along the Itadori river the papermaking hamlets and the Mino Washi Museum. See <a href=\"washi.html\">Mino Washi</a>.",ja:"うだつの上がる紙問屋の町。板取川をさかのぼれば紙漉きの集落と美濃和紙の里会館がある。<a href=\"washi.html\">美濃和紙</a>を参照。",zh:"高築卯建的紙商之鎮；沿板取川上溯，有造紙聚落與美濃和紙之里會館。見<a href=\"washi.html\">美濃和紙</a>。"} },
          { title:{en:"Seki",ja:"関",zh:"關"}, jp:"関市",
            text:{en:"The swordsmiths' museum and its forging demonstrations, the cutlery outlets, and the Enkū museum by the river. See <a href=\"seki.html\">Seki, Town of Blades</a>.",ja:"鍛冶伝承館とその鍛錬の公開、刃物の直売所、川のほとりの円空館。<a href=\"seki.html\">刃物のまち・関</a>を参照。",zh:"刀匠博物館與其公開鍛刀、刀具直營店，以及河畔的圓空館。見<a href=\"seki.html\">刀刃之城・關</a>。"} },
          { title:{en:"Gifu",ja:"岐阜",zh:"岐阜"}, jp:"岐阜市",
            text:{en:"Kinkazan and its castle, Nobunaga's palace site, the Great Buddha of Shōhō-ji and, on summer evenings from 11 May to 15 October, the cormorant fishing on the Nagara. See <a href=\"ukai.html\">Cormorant Fishing</a>.",ja:"金華山とその城、信長の居館跡、正法寺の大仏、そして五月十一日から十月十五日までの夏の宵の長良川の鵜飼。<a href=\"ukai.html\">鵜飼</a>を参照。",zh:"金華山與其城、信長居館遺址、正法寺大佛，以及五月十一日至十月十五日夏夜長良川上的鵜飼。見<a href=\"ukai.html\">鵜飼</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"2. The Hida circle", ja:"二　飛騨をめぐる", zh:"二、飛驒環遊" }, jp:"下呂 · 高山 · 古川 · 白川郷",
      body:[
        { t:"p", text:{
          en:"Three or four days in the mountains, by the JR Takayama Line from Gifu or Nagoya up the Hida river gorge, and by bus from Takayama to Shirakawa-gō and to the hot springs of Oku-Hida. Each season has its reason to go: the spring festivals of Takayama and Furukawa in April, the autumn festival and the doburoku festivals in October, and snow on the gasshō roofs in winter.",
          ja:"山のなかの三、四日。岐阜や名古屋から飛騨川の峡谷をさかのぼるJR高山本線に乗り、高山からはバスで白川郷や奥飛騨の温泉へ向かう。季節ごとに訪ねる理由がある——四月の高山と古川の春祭り、十月の秋祭りとどぶろく祭、冬の合掌の屋根の雪。",
          zh:"在山中的三、四天：從岐阜或名古屋搭 JR 高山本線溯飛驒川峽谷而上，再由高山轉巴士前往白川鄉與奧飛驒溫泉。每個季節都有前往的理由：四月高山與古川的春季祭典、十月的秋季祭典與濁酒祭，以及冬天合掌屋頂上的雪。" } },
        { t:"steps", items:[
          { title:{en:"Gero",ja:"下呂",zh:"下呂"}, jp:"下呂市",
            text:{en:"The hot spring on the Hida river, counted since the seventeenth century among the three famous springs of Japan. See <a href=\"onsen.html\">Hot Springs</a>.",ja:"飛騨川の温泉で、十七世紀から日本三名泉の一つに数えられる。<a href=\"onsen.html\">温泉</a>を参照。",zh:"飛驒川畔的溫泉，自十七世紀起便名列日本三大名泉之一。見<a href=\"onsen.html\">溫泉</a>。"} },
          { title:{en:"Takayama",ja:"高山",zh:"高山"}, jp:"高山市",
            text:{en:"The merchant town, the Jin'ya, the breweries and the morning markets; the Kusakabe and Yoshijima houses; the festival floats; the Hida Folk Village; and the furniture showrooms. See <a href=\"towns.html#takayama\">Old Towns</a> and <a href=\"hidasake.html\">Brewing in Hida</a>.",ja:"商人の町、陣屋、酒蔵、朝市。日下部家と吉島家。祭りの屋台。飛騨の里。家具のショールーム。<a href=\"towns.html#takayama\">町並み</a>と<a href=\"hidasake.html\">飛騨の酒造り</a>を参照。",zh:"商人町、陣屋、酒藏與朝市；日下部家與吉島家；祭典屋台；飛驒之里；以及家具展示間。見<a href=\"towns.html#takayama\">老街町並</a>與<a href=\"hidasake.html\">飛驒的釀酒</a>。"} },
          { title:{en:"Hida-Furukawa",ja:"飛騨古川",zh:"飛驒古川"}, jp:"飛騨市",
            text:{en:"A quieter town of white-walled storehouses and carp-filled channels, two breweries a few doors apart, and the carpenters' museum. See <a href=\"joinery.html\">Joinery</a>.",ja:"白壁の土蔵と鯉の泳ぐ水路の静かな町。数軒を隔てて並ぶ二つの酒蔵と、匠の文化館がある。<a href=\"joinery.html\">継手と仕口</a>を参照。",zh:"一座較寧靜的小鎮：白牆倉庫、錦鯉悠游的水道、相隔數戶的兩家酒藏，以及木匠博物館。見<a href=\"joinery.html\">榫卯與接合</a>。"} },
          { title:{en:"Shirakawa-gō",ja:"白川郷",zh:"白川鄉"}, jp:"白川村",
            text:{en:"The gasshō houses of Ogimachi, a World Heritage Site since 1995. Stay a night in a farmhouse inn to see the village after the day visitors leave. See <a href=\"shirakawago.html\">Shirakawa-gō</a>.",ja:"1995年から世界遺産の荻町の合掌造り。日帰りの人が去ったあとの村を見るには、合掌の民宿に一泊するとよい。<a href=\"shirakawago.html\">白川郷</a>を参照。",zh:"荻町的合掌造，1995 年起列為世界遺產。不妨在農家民宿住一晚，看看當日遊客離去後的村莊。見<a href=\"shirakawago.html\">白川鄉</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"nakasendo",
      title:{ en:"3. The Nakasendō", ja:"三　中山道をゆく", zh:"三、走中山道" }, jp:"馬籠 · 中津川 · 大井 · 細久手 · 御嵩 · 関ケ原",
      body:[
        { t:"p", text:{
          en:"The old inland highway crossed Mino through sixteen post towns. Walkers usually take the stretch from Magome over the pass to Tsumago in Nagano, or the hill road of the “thirteen passes” from Ōi to Ōkute and on to Hosokute; the JR Chūō Line links the towns of the eastern half and the Tōkaidō Line the western. A side trip by the Akechi Railway from Ena reaches the castle town of Iwamura.",
          ja:"内陸の古い街道は、十六の宿場で美濃を横切った。歩く人はたいてい、馬籠から峠を越えて長野県の妻籠へ出る区間か、大井から大湫へ「十三峠」を越え、さらに細久手へ至る山道を選ぶ。東半分の町はJR中央本線が、西半分は東海道本線が結ぶ。恵那から明知鉄道に乗れば、城下町の岩村へ寄り道できる。",
          zh:"這條古老的內陸大道以十六個宿場穿越美濃。步行者通常選擇從馬籠翻越山口到長野縣妻籠的路段，或從大井翻越「十三峠」到大湫、再到細久手的山路；東半段各鎮以 JR 中央本線相連，西半段則以東海道本線相連。從惠那搭明知鐵道，可順道前往城下町岩村。" } },
        { t:"steps", items:[
          { title:{en:"Magome and Nakatsugawa",ja:"馬籠と中津川",zh:"馬籠與中津川"}, jp:"中津川市",
            text:{en:"The stone-paved hill station of Magome, in Gifu since 2005, and Nakatsugawa below it, a post town and the home of kuri-kinton, the chestnut sweet of autumn. See <a href=\"roads.html\">The Nakasendō &amp; Old Roads</a>.",ja:"石畳の坂の宿場・馬籠（2005年から岐阜県）と、その下の宿場で、秋の栗菓子・栗きんとんのふるさとである中津川。<a href=\"roads.html\">中山道と街道</a>を参照。",zh:"石板坡道的宿場馬籠（2005 年起屬岐阜縣），以及其下方的宿場中津川——秋季栗子點心栗金團的故鄉。見<a href=\"roads.html\">中山道與古道</a>。"} },
          { title:{en:"Ōi and Iwamura",ja:"大井と岩村",zh:"大井與岩村"}, jp:"恵那市",
            text:{en:"Ōi, one of the largest post towns in Mino and now the centre of Ena, with the right-angled turns that slowed an attacker; and by the side trip, the merchant street of Iwamura below its mountain castle. See <a href=\"towns.html\">Old Towns</a>.",ja:"美濃有数の大きな宿場で、攻め手の足を止める枡形の曲がり角を残す大井（いまの恵那の中心）。寄り道すれば、山城の下の岩村の商家の通り。<a href=\"towns.html\">町並み</a>を参照。",zh:"大井是美濃數一數二的大宿場，今為惠那市中心，保留著用來阻滯敵軍的直角轉彎「枡形」；若順道前往，還有山城下岩村的商家街。見<a href=\"towns.html\">老街町並</a>。"} },
          { title:{en:"The thirteen passes",ja:"十三峠",zh:"十三峠"}, jp:"大湫 · 細久手",
            text:{en:"The hill road through Ōkute to Hosokute, where an inn of the Edo period still takes guests.",ja:"大湫を経て細久手へ至る山道。細久手には江戸時代の旅籠がいまも客を泊める。",zh:"經大湫通往細久手的山路；細久手有一間江戶時代的旅籠至今仍接待住客。"} },
          { title:{en:"Mitake and Ōta",ja:"御嵩と太田",zh:"御嵩與太田"}, jp:"御嵩町 · 美濃加茂市",
            text:{en:"The temple town of Mitake and the river station of Ōta, where travellers crossed the Kiso by ferry at one of the road's hardest places.",ja:"寺の町・御嵩と、木曽川を渡し舟で越えた、街道屈指の難所の川の宿・太田。",zh:"寺院之鎮御嵩，以及河畔宿場太田——旅人在此乘渡船橫越木曾川，是這條路最艱難的地點之一。"} },
          { title:{en:"Akasaka, Tarui and Sekigahara",ja:"赤坂・垂井・関ケ原",zh:"赤坂、垂井、關原"}, jp:"大垣市 · 垂井町 · 関ケ原町",
            text:{en:"West of Gifu the road runs past the limestone of Kinshōzan to Tarui and the battlefield, and on to the border with Ōmi at Imasu. See <a href=\"sekigahara.html\">Sekigahara</a>.",ja:"岐阜の西では、道は金生山の石灰岩のかたわらを過ぎて垂井と古戦場へ、さらに今須で近江との国境へ至る。<a href=\"sekigahara.html\">関ヶ原</a>を参照。",zh:"岐阜以西，道路經過金生山的石灰岩，通往垂井與古戰場，再到今須與近江的國界。見<a href=\"sekigahara.html\">關原</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"hinoki",
      title:{ en:"4. The road of hinoki", ja:"四　檜の道", zh:"四、檜木之路" }, jp:"加子母 · 坂下 · 八百津 · 可児 · 多治見",
      body:[
        { t:"p", text:{
          en:"A route for readers of the wood chapters, following the timber of Ura-Kiso down the Kiso river, and ending among the kilns that the same forests once fired. It needs a car or careful use of buses in the forest villages; the rest is on the Chūō Line and local lines.",
          ja:"木の章を読んだ人のための道筋。裏木曽の木材を追って木曽川をくだり、かつて同じ森が火を焚いた窯場で終わる。森の村では車か、バスを念入りに使う必要がある。ほかは中央本線と地方の鉄道で回れる。",
          zh:"為讀過木之篇章的讀者所設的路線：追隨裏木曾的木材順木曾川而下，最後抵達昔日由同一片森林供應燃料的窯場。山林村落需要開車或仔細安排巴士；其餘路段可搭中央本線與地方鐵路。" } },
        { t:"steps", items:[
          { title:{en:"Kashimo and Tsukechi",ja:"加子母と付知",zh:"加子母與付知"}, jp:"中津川市",
            text:{en:"The forest villages of Ura-Kiso, whose national forest supplies hinoki for the rebuilding of the Ise shrines, and the Kashimo Meiji-za, a playhouse the villagers built of their own timber in 1894. See <a href=\"hinoki.html\">Hinoki &amp; the Kiso Five</a> and <a href=\"kabuki.html\">Village Kabuki</a>.",ja:"裏木曽の森の村。その国有林は伊勢の神宮の建て替えに檜を送る。村人が1894年に自分たちの木で建てた芝居小屋、かしも明治座もある。<a href=\"hinoki.html\">檜と木曽五木</a>と<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>を参照。",zh:"裏木曾的山林村落，其國有林為伊勢神宮的重建供應檜木；還有村民於 1894 年以自家木材建造的戲棚加子母明治座。見<a href=\"hinoki.html\">檜木與木曾五木</a>與<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>。"} },
          { title:{en:"Sakashita",ja:"坂下",zh:"坂下"}, jp:"中津川市",
            text:{en:"A Kiso valley town where Takamine guitars have been made since 1959. See <a href=\"guitars.html\">Hand-made Guitars</a>.",ja:"1959年からタカミネのギターがつくられている木曽谷の町。<a href=\"guitars.html\">手工ギター</a>を参照。",zh:"木曾谷的小鎮，自 1959 年起在此製作 Takamine 吉他。見<a href=\"guitars.html\">手工吉他</a>。"} },
          { title:{en:"Yaotsu",ja:"八百津",zh:"八百津"}, jp:"八百津町",
            text:{en:"Where the logs floated singly down the Kiso were caught and made up into rafts, and where the Sugihara Chiune Memorial Hall stands on a hill. See <a href=\"rafting.html\">Timber Down the Rivers</a>.",ja:"木曽川を一本ずつ流された木を受け止め、筏に組んだ地。丘の上に杉原千畝記念館が建つ。<a href=\"rafting.html\">川を下った木</a>を参照。",zh:"順木曾川單根漂流而下的原木在此被攔下、編成木筏；山丘上有杉原千畝紀念館。見<a href=\"rafting.html\">順流而下的木材</a>。"} },
          { title:{en:"Kani",ja:"可児",zh:"可兒"}, jp:"可児市",
            text:{en:"The K.Yairi guitar workshop, and in the hills the old kiln sites where Arakawa Toyozō found the Shino shard in 1930. See <a href=\"minoyaki.html\">Mino Ware</a>.",ja:"K.ヤイリのギター工房と、1930年に荒川豊蔵が志野の陶片を見つけた丘の古窯跡。<a href=\"minoyaki.html\">美濃焼</a>を参照。",zh:"K.Yairi 吉他工坊，以及 1930 年荒川豐藏發現志野陶片的山丘古窯址。見<a href=\"minoyaki.html\">美濃燒</a>。"} },
          { title:{en:"Tajimi",ja:"多治見",zh:"多治見"}, jp:"多治見市",
            text:{en:"The ceramics museums, the mosaic tile museum at Kasahara and Eihō-ji, whose Kannon hall of 1314 is one of the oldest timber buildings in the prefecture. See <a href=\"architecture.html\">Building in Wood</a>.",ja:"陶磁の美術館、笠原のモザイクタイルミュージアム、そして1314年の観音堂が県内最古級の木造建築である永保寺。<a href=\"architecture.html\">木の建築</a>を参照。",zh:"陶瓷美術館、笠原的馬賽克磁磚博物館，以及永保寺——其 1314 年的觀音堂是縣內最古老的木造建築之一。見<a href=\"architecture.html\">木造建築</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"west",
      title:{ en:"5. The western plain", ja:"五　西の平野", zh:"五、西部平原" }, jp:"谷汲 · 大垣 · 養老 · 海津",
      body:[
        { t:"p", text:{
          en:"Two days on the edge of the plain, where Mino meets Ōmi and Ise, by the Yōrō Railway and the Tarumi Railway from Ōgaki. It takes in water and wells, the three rivers and their levees, and the sake of the Ibi valley.",
          ja:"美濃が近江や伊勢と接する平野のへりの二日。大垣から養老鉄道と樽見鉄道を使う。湧き水と井戸、三つの川とその堤、そして揖斐の谷の酒をめぐる。",
          zh:"在美濃與近江、伊勢交界的平原邊緣走兩天，從大垣搭乘養老鐵道與樽見鐵道。行程涵蓋湧泉與水井、三條河川及其堤防，以及揖斐河谷的酒。" } },
        { t:"steps", items:[
          { title:{en:"Tanigumi-san and the Ibi valley",ja:"谷汲山と揖斐の谷",zh:"谷汲山與揖斐河谷"}, jp:"揖斐川町 · 大野町 · 池田町",
            text:{en:"The temple at the end of the Saigoku pilgrimage of thirty-three places, and the small breweries of Ōno and Ikeda. See <a href=\"faith.html\">Shrines &amp; Temples</a> and <a href=\"directory.html\">A Directory of Gifu Sake</a>.",ja:"西国三十三所の巡礼を結ぶ寺と、大野と池田の小さな酒蔵。<a href=\"faith.html\">社寺と信仰</a>と<a href=\"directory.html\">岐阜酒名鑑</a>を参照。",zh:"西國三十三所朝聖的終點寺院，以及大野與池田的小酒藏。見<a href=\"faith.html\">神社、寺院與信仰</a>與<a href=\"directory.html\">岐阜酒名鑑</a>。"} },
          { title:{en:"Ōgaki",ja:"大垣",zh:"大垣"}, jp:"大垣市",
            text:{en:"The water city of springs and canals, where Bashō's journey ended in 1689; masu workshops; cold <em>mizu-manjū</em> in summer. See <a href=\"everyday.html#masu\">Wood in Everyday Things</a> and <a href=\"food.html\">Food of Mino &amp; Hida</a>.",ja:"湧き水と運河の水都で、1689年に芭蕉の旅が終わった地。枡の工房。夏には冷たい水まんじゅう。<a href=\"everyday.html#masu\">暮らしの木</a>と<a href=\"food.html\">美濃と飛騨の食</a>を参照。",zh:"湧泉與運河之城，芭蕉之旅於 1689 年在此結束；有枡的工坊；夏天吃冰涼的水饅頭。見<a href=\"everyday.html#masu\">生活中的木</a>與<a href=\"food.html\">美濃與飛驒的飲食</a>。"} },
          { title:{en:"Yōrō",ja:"養老",zh:"養老"}, jp:"養老町",
            text:{en:"The waterfall of the sake legend, which gave an era its name in 717. See <a href=\"sake.html\">The Sake of Gifu</a>.",ja:"717年に年号の名となった、酒の伝説の滝。<a href=\"sake.html\">岐阜の酒</a>を参照。",zh:"酒之傳說中的瀑布，717 年成為年號之名。見<a href=\"sake.html\">岐阜的酒</a>。"} },
          { title:{en:"Kaizu",ja:"海津",zh:"海津"}, jp:"海津市",
            text:{en:"The ring-levee country at the bottom of the plain, a museum of the ring-levee villages and the shrine to the Satsuma men of the Hōreki works. See <a href=\"chisui.html\">Taming the Three Rivers</a>.",ja:"平野の底の輪中地帯。輪中の暮らしを伝える資料館と、宝暦治水の薩摩の人々をまつる社。<a href=\"chisui.html\">木曽三川の治水</a>を参照。",zh:"平原最低處的輪中地帶，介紹輪中村落生活的資料館，以及祭祀寶曆治水薩摩人的神社。見<a href=\"chisui.html\">木曾三川的治水</a>。"} }
        ] }
      ]
    },

    { t:"note", label:{ en:"Getting around", ja:"移動について", zh:"交通" }, text:{
      en:"Gifu is an hour or less from Nagoya by JR or Meitetsu, and Nagoya is the nearest airport and Shinkansen hub; Takayama is about two and a half hours from Nagoya by limited express, and Shirakawa-gō about an hour by bus from Takayama, a little more from Kanazawa. The mountain lines run less often than city trains, and buses in the forest villages may run only a few times a day.",
      ja:"岐阜は名古屋からJRか名鉄で一時間足らず。最寄りの空港と新幹線の拠点は名古屋である。高山は名古屋から特急でおよそ二時間半、白川郷は高山からバスでおよそ一時間、金沢からはそれより少しかかる。山の路線は都市の電車より本数が少なく、森の村のバスは一日に数本ということもある。",
      zh:"從名古屋搭 JR 或名鐵到岐阜不到一小時，名古屋也是最近的機場與新幹線樞紐；高山距名古屋搭特急約兩個半小時，白川鄉則從高山搭巴士約一小時，從金澤稍久一些。山區路線的班次少於都市電車，山林村落的巴士一天可能只有幾班。" } },

    { t:"related", items:[
      { href:"museums.html", why:{ en:"What to see at each stop.", ja:"各地の見どころ。", zh:"各站可參觀之處。" } },
      { href:"regions.html", why:{ en:"The regions the journeys cross.", ja:"旅が横切る圏域。", zh:"旅程穿越的圈域。" } },
      { href:"festivals.html", why:{ en:"When to time a journey.", ja:"旅の時期を選ぶ。", zh:"安排旅程的時機。" } },
      { href:"food.html", why:{ en:"What to eat on the way.", ja:"道中で食べるもの。", zh:"沿途吃什麼。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- museums */
GIFU.pages["museums"] = {
  kicker: { en: "Journeys & Reference · 03", ja: "旅と資料 · 03", zh: "旅程與資料 · 03" },
  title:  { en: "Museums & Workshops", ja: "博物館と工房", zh: "博物館與工坊" },
  jp: "見る · 触れる · 体験する",
  lede: {
    en: "Where to see what this book describes: castles and battlefields, the halls of swordsmiths and papermakers, ceramics museums, playhouses, open-air villages, and museums of insects, fossils and the oldest stone in Japan. The entries are grouped by theme and can be filtered; each says what the place shows and links to the page that tells its story. Opening days and hours change, and several places close in winter or on set weekdays, so check with the place itself before going.",
    ja: "本書が語るものを見られる場所——城と古戦場、刀匠や紙漉きの館、陶磁の美術館、芝居小屋、野外の村、そして昆虫や化石や日本最古の石の博物館。主題ごとにまとめ、絞り込めるようにした。各項目には何が見られるかを記し、その物語を語る頁へつないだ。開館日や時間は変わり、冬季や特定の曜日に閉まるところも少なくないので、出かける前に各施設に確かめてほしい。",
    zh: "本書所描述之物的觀賞之處：城堡與古戰場、刀匠與造紙者的館舍、陶瓷美術館、戲棚、露天村落，以及昆蟲、化石與日本最古老之石的博物館。條目依主題分組並可篩選；每一條說明該處可看什麼，並連到講述其故事的頁面。開館日與時間會變動，不少地方冬季或固定週間休館，出發前請先向各設施確認。"
  },
  body: [
    { t:"section", id:"list",
      title:{ en:"The places", ja:"施設", zh:"設施" }, jp:"一覧",
      body:[
      { t:"brands", placeholder:{ en:"Filter — try “castle”, “Takayama”, “paper”…", ja:"絞り込み——「城」「高山」「紙」など", zh:"篩選——試試「城」、「高山」、「紙」…" }, items:[

        { group:{ en:"History and castles", ja:"歴史と城", zh:"歷史與城堡" }, jp:"歴史", id:"g-history" },

        { jp:"岐阜城", r:"Gifu Castle", h:"岐阜市", hr:"Gifu City", muni:"gifu", kind:"museum", est:"",
          note:{ en:"A 1956 reconstruction of the keep on the summit of Kinkazan, reached by ropeway, with a small museum inside and a view across the Nōbi Plain. The excavated site of Nobunaga's palace is at the western foot of the mountain in Gifu Park. See <a href=\"nobunaga.html\">Nobunaga's Gifu</a>.",
            ja:"金華山の山頂に1956年に再建された天守で、ロープウェーで上る。内部は小さな資料館になっており、濃尾平野を一望できる。信長の居館跡の発掘地は、山の西麓の岐阜公園にある。<a href=\"nobunaga.html\">信長の岐阜</a>を参照。",
            zh:"金華山山頂 1956 年重建的天守，可搭纜車上山，內部設有小型展示館，可遠眺濃尾平原。信長居館的發掘遺址位於山西麓的岐阜公園。見<a href=\"nobunaga.html\">信長的岐阜</a>。" } },

        { jp:"岐阜市歴史博物館", r:"Gifu City Museum of History", h:"岐阜市", hr:"Gifu City", muni:"gifu", kind:"museum", est:"",
          note:{ en:"In Gifu Park at the foot of Kinkazan: the history of the city from ancient times, with the closest attention to the Saitō, to Nobunaga and to the castle town and its market.",
            ja:"金華山のふもとの岐阜公園にあり、古代からの岐阜の歴史を扱う。とりわけ斎藤氏、信長、そして城下町とその市に詳しい。",
            zh:"位於金華山麓的岐阜公園，介紹岐阜自古以來的歷史，對齋藤氏、信長以及城下町與其市集著墨最多。" } },

        { jp:"岐阜関ケ原古戦場記念館", r:"Gifu Sekigahara Battlefield Memorial Museum", h:"岐阜県", hr:"Gifu Prefecture", muni:"sekigahara", kind:"museum", est:"2020",
          note:{ en:"Opened in 2020 in the middle of the battlefield, with a theatre that puts the visitor inside the battle and a roof terrace from which the commanders' positions can be picked out. See <a href=\"sekigahara.html\">Sekigahara</a>.",
            ja:"2020年に古戦場のただなかに開館した。合戦のなかに身を置くような映像の部屋と、各武将の陣跡を見わたせる屋上の展望テラスがある。<a href=\"sekigahara.html\">関ヶ原</a>を参照。",
            zh:"2020 年開館，位於古戰場正中央，設有讓觀眾彷彿置身戰役之中的影像劇場，以及可辨認各武將陣地的屋頂展望台。見<a href=\"sekigahara.html\">關原</a>。" } },

        { jp:"高山陣屋", r:"Takayama Jin'ya", h:"岐阜県", hr:"Gifu Prefecture", muni:"takayama", kind:"museum", est:"",
          note:{ en:"The office from which the shogunate governed Hida for 176 years after 1692, and the only such intendant's office to survive in Japan: halls, offices, rice storehouses and an interrogation room. A morning market is held in front of it. See <a href=\"edo.html\">The Edo Patchwork</a>.",
            ja:"1692年から176年にわたり幕府が飛騨を治めた役所で、全国で唯一現存する郡代・代官の役所。広間、役所、御蔵、吟味所が残る。前では朝市が開かれる。<a href=\"edo.html\">江戸時代の美濃・飛騨</a>を参照。",
            zh:"1692 年起幕府統治飛驒 176 年的官署，也是全日本唯一現存的代官（郡代）官署：保留大廳、辦公處、米倉與審訊室。門前有朝市。見<a href=\"edo.html\">江戶時代的美濃與飛驒</a>。" } },

        { jp:"杉原千畝記念館", r:"Chiune Sugihara Memorial Hall", h:"八百津町", hr:"Yaotsu Town", muni:"yaotsu", kind:"museum", est:"",
          note:{ en:"On a hill above Yaotsu, the hall remembers the diplomat who in 1940 in Kaunas wrote transit visas that saved thousands of Jewish refugees. See <a href=\"people.html\">People</a>.",
            ja:"八百津の丘の上にあり、1940年にカウナスで通過査証を書いて数千人のユダヤ人難民を救った外交官を記念する。<a href=\"people.html\">人物</a>を参照。",
            zh:"位於八百津的山丘上，紀念 1940 年在考那斯簽發過境簽證、拯救了數千名猶太難民的外交官。見<a href=\"people.html\">人物</a>。" } },

        { jp:"岐阜かかみがはら航空宇宙博物館", r:"Gifu-Kakamigahara Air and Space Museum", h:"岐阜県・各務原市", hr:"Gifu Prefecture and Kakamigahara City", muni:"kakamigahara", kind:"museum", est:"",
          note:{ en:"Aircraft and spacecraft in a town where an army airfield opened in 1917 and aircraft have been built ever since, beside the airfield where they are tested.",
            ja:"1917年に陸軍の飛行場が開かれ、以来航空機をつくりつづけてきた町の、試験飛行の飛行場のかたわらにある、航空機と宇宙機の博物館。",
            zh:"航空器與太空器的博物館，位於一座自 1917 年開設陸軍機場以來便持續製造飛機的城鎮，就在試飛用的機場旁。" } },

        { group:{ en:"Blades, paper and clay", ja:"刃物・紙・土", zh:"刀具、紙與土" }, jp:"工芸", id:"g-crafts" },

        { jp:"関鍛冶伝承館", r:"Seki Traditional Swordsmith Museum", h:"関市", hr:"Seki City", muni:"seki", kind:"museum", est:"",
          note:{ en:"Swords and fittings by the Seki smiths, and on set days — the first forging of the year in January and the October cutlery festival among them — a licensed smith forging a blade in the old way. See <a href=\"forging.html\">Making a Sword</a>.",
            ja:"関の刀匠の刀と刀装具を展示し、正月の打ち初めや十月の刃物まつりなど定められた日には、刀匠が古式にのっとって鍛錬を公開する。<a href=\"forging.html\">作刀</a>を参照。",
            zh:"展示關的刀匠所鍛之刀與刀裝具；在固定的日子——包括一月的開年鍛刀與十月的刀具祭——有持證刀匠以古法公開鍛刀。見<a href=\"forging.html\">鍛刀</a>。" } },

        { jp:"美濃和紙の里会館", r:"Mino Washi Museum", h:"美濃市", hr:"Mino City", muni:"mino", kind:"museum", est:"",
          note:{ en:"By the Itadori river among the papermaking hamlets: the history and making of Mino paper, and a workshop where visitors form a sheet of their own. See <a href=\"washi.html\">Mino Washi</a>.",
            ja:"紙漉きの集落が並ぶ板取川のほとりにあり、美濃和紙の歴史と製法を伝え、訪れた人が自分で紙を漉ける工房を備える。<a href=\"washi.html\">美濃和紙</a>を参照。",
            zh:"位於造紙聚落沿岸的板取川畔，介紹美濃和紙的歷史與製法，並設有讓訪客親手抄紙的工坊。見<a href=\"washi.html\">美濃和紙</a>。" } },

        { jp:"美濃和紙あかりアート館", r:"Mino Washi Akari Art Gallery", h:"美濃市", hr:"Mino City", muni:"mino", kind:"museum", est:"",
          note:{ en:"In the udatsu district: prize-winning lamps from the town's October Akari Art Exhibition, shown in the dark all year.",
            ja:"うだつの町並みにあり、十月の「美濃和紙あかりアート展」の入賞作を、一年を通じて暗がりのなかに展示する。",
            zh:"位於卯建街區，全年在暗室中展出十月「美濃和紙燈光藝術展」的得獎燈具。" } },

        { jp:"岐阜県現代陶芸美術館", r:"Museum of Modern Ceramic Art, Gifu", h:"岐阜県", hr:"Gifu Prefecture", muni:"tajimi", kind:"museum", est:"2002",
          note:{ en:"Modern and contemporary ceramics from Japan and abroad, in the hills of Tajimi; part of a park devoted to ceramics. See <a href=\"minoyaki.html\">Mino Ware</a>.",
            ja:"多治見の丘陵にあり、国内外の近現代の陶芸を扱う。陶磁器をテーマとする公園の一角をなす。<a href=\"minoyaki.html\">美濃焼</a>を参照。",
            zh:"位於多治見的丘陵，收藏國內外近現代陶藝，是一座陶瓷主題公園的一部分。見<a href=\"minoyaki.html\">美濃燒</a>。" } },

        { jp:"多治見市モザイクタイルミュージアム", r:"Mosaic Tile Museum, Tajimi", h:"多治見市", hr:"Tajimi City", muni:"tajimi", kind:"museum", est:"2016",
          note:{ en:"At Kasahara, which makes most of Japan's mosaic tiles, in a building by the architect Fujimori Terunobu shaped like a hill of clay.",
            ja:"日本のモザイクタイルの大半をつくる笠原にあり、建築家・藤森照信による、粘土の山のような形の建物に収まる。",
            zh:"位於生產日本大部分馬賽克磁磚的笠原，建築由建築師藤森照信設計，外形宛如一座黏土山丘。" } },

        { jp:"多治見市美濃焼ミュージアム", r:"Mino Ceramic Art Museum, Tajimi", h:"多治見市", hr:"Tajimi City", muni:"tajimi", kind:"museum", est:"",
          note:{ en:"The history of Mino ware from the early kilns through the Momoyama tea wares to the modern potters.",
            ja:"初期の窯から桃山の茶陶、近代の陶芸家まで、美濃焼の歴史をたどる。",
            zh:"介紹美濃燒從早期窯場、桃山茶陶到近代陶藝家的歷史。" } },

        { jp:"土岐市美濃陶磁歴史館", r:"Toki City Mino Ceramic History Museum", h:"土岐市", hr:"Toki City", muni:"toki", kind:"museum", est:"",
          note:{ en:"Momoyama-period Mino ware from the kiln sites around Toki, near the Motoyashiki kiln site, one of the earliest climbing kilns in Mino.",
            ja:"土岐周辺の窯跡から出た桃山時代の美濃焼を収め、美濃で最も早い連房式登窯の一つ、元屋敷窯跡の近くにある。",
            zh:"收藏土岐周邊窯址出土的桃山時代美濃燒，鄰近美濃最早的連房式登窯之一——元屋敷窯址。" } },

        { group:{ en:"Wood, carving and the takumi", ja:"木と彫りと匠", zh:"木、雕刻與工匠" }, jp:"木", id:"g-wood" },

        { jp:"飛騨の里", r:"Hida Folk Village", h:"高山市", hr:"Takayama City", muni:"takayama", kind:"museum", est:"",
          note:{ en:"An open-air museum of farmhouses moved from across Hida, gasshō houses among them, set around a pond on the hills west of Takayama, with demonstrations of local crafts. See <a href=\"architecture.html\">Building in Wood</a>.",
            ja:"高山の西の丘に、飛騨各地から移築した農家——合掌造りを含む——を池のまわりに集めた野外博物館で、地元の手仕事の実演も見られる。<a href=\"architecture.html\">木の建築</a>を参照。",
            zh:"露天博物館，將飛驒各地遷建的農家——包括合掌造——圍繞池塘置於高山西側山丘，也有地方工藝示範。見<a href=\"architecture.html\">木造建築</a>。" } },

        { jp:"日下部民藝館", r:"Kusakabe Folk Museum", h:"日下部家", hr:"the Kusakabe family", muni:"takayama", kind:"museum", est:"",
          note:{ en:"The house of a Takayama merchant family, rebuilt in 1879 after a fire by the master carpenter Kawajiri Jisuke and now an Important Cultural Property: the great open hall with its exposed beams is the essential sight of Hida carpentry. See <a href=\"takumi.html\">Hida no Takumi</a>.",
            ja:"高山の商家の住まいで、大火のあと1879年に棟梁・川尻治助が建て直し、いまは重要文化財。梁をあらわにした吹き抜けの大空間は、飛騨の大工仕事の必見である。<a href=\"takumi.html\">飛騨の匠</a>を参照。",
            zh:"高山商家的宅邸，火災後於 1879 年由棟樑川尻治助重建，現為重要文化財：梁木外露的挑高大廳，是飛驒木工必看之處。見<a href=\"takumi.html\">飛驒工匠</a>。" } },

        { jp:"高山祭屋台会館", r:"Takayama Festival Floats Exhibition Hall", h:"櫻山八幡宮", hr:"Sakurayama Hachiman Shrine", muni:"takayama", kind:"museum", est:"",
          note:{ en:"In the precinct of the shrine of the autumn festival, several of its floats are shown in rotation through the year. See <a href=\"festivals.html\">Festivals &amp; Floats</a>.",
            ja:"秋の祭りの社である櫻山八幡宮の境内にあり、祭りの屋台のいくつかを入れ替えながら一年じゅう展示する。<a href=\"festivals.html\">祭りと屋台</a>を参照。",
            zh:"位於秋季祭典所屬的櫻山八幡宮境內，全年輪流展出數座祭典屋台。見<a href=\"festivals.html\">祭典與屋台</a>。" } },

        { jp:"飛騨の匠文化館", r:"Hida Takumi Culture Museum", h:"飛騨市", hr:"Hida City", muni:"hida", kind:"museum", est:"",
          note:{ en:"In Hida-Furukawa, a building made without nails that shows the carpenters' joints and lets visitors take a few of them apart. See <a href=\"joinery.html\">Joinery</a>.",
            ja:"飛騨古川にあり、釘を使わずに建てた館で大工の継手・仕口を見せ、いくつかは手にとって外してみられる。<a href=\"joinery.html\">継手と仕口</a>を参照。",
            zh:"位於飛驒古川，是一座不用釘子建成的館舍，展示木匠的榫接，部分可以讓訪客動手拆解。見<a href=\"joinery.html\">榫卯與接合</a>。" } },

        { jp:"関市円空館", r:"Seki City Enkū Museum", h:"関市", hr:"Seki City", muni:"seki", kind:"museum", est:"",
          note:{ en:"Near the site of Miroku-ji by the Nagara, where Enkū spent his last years and died. See <a href=\"enku.html\">Enkū's Buddhas</a>.",
            ja:"円空が晩年を過ごし没した長良川のほとりの弥勒寺跡の近くにある。<a href=\"enku.html\">円空仏</a>を参照。",
            zh:"位於長良川畔彌勒寺遺址附近——圓空在此度過晚年並辭世。見<a href=\"enku.html\">圓空佛</a>。" } },

        { jp:"羽島市歴史民俗資料館・円空資料館", r:"Hashima City History Museum and Enkū Museum", h:"羽島市", hr:"Hashima City", muni:"hashima", kind:"museum", est:"",
          note:{ en:"In one of the two places that claim to be Enkū's birthplace, with figures from the temples of the town.",
            ja:"円空の生地を名のる二つの土地の一つにあり、町の寺々の像を収める。",
            zh:"位於自稱圓空出生地的兩處之一，收藏當地各寺的造像。" } },

        { jp:"千光寺", r:"Senkō-ji", h:"千光寺", hr:"Senkō-ji temple", muni:"takayama", kind:"museum", est:"",
          note:{ en:"A mountain temple at Nyūkawa east of Takayama whose treasure hall keeps some sixty of Enkū's figures, among them his Ryōmen Sukuna.",
            ja:"高山の東、丹生川の山寺で、宝物館に円空仏六十体あまりを収め、そのなかに両面宿儺像がある。",
            zh:"高山以東丹生川的山寺，寶物館收藏約六十尊圓空佛，其中包括他的兩面宿儺像。" } },

        { group:{ en:"Stage, festival and village", ja:"舞台・祭り・村", zh:"舞台、祭典與村落" }, jp:"文化", id:"g-culture" },

        { jp:"かしも明治座", r:"Kashimo Meiji-za", h:"中津川市", hr:"Nakatsugawa City", muni:"nakatsugawa", kind:"museum", est:"1894",
          note:{ en:"A village playhouse of 1894 built of local hinoki by the villagers themselves, with a revolving stage; village kabuki is still performed there. See <a href=\"kabuki.html\">Village Kabuki</a>.",
            ja:"1894年に村人みずから地元の檜で建てた芝居小屋で、回り舞台を備え、いまも地歌舞伎が演じられる。<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>を参照。",
            zh:"1894 年由村民親手以當地檜木建造的戲棚，設有旋轉舞台，至今仍上演地歌舞伎。見<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>。" } },

        { jp:"村国座", r:"Murakuni-za", h:"各務原市", hr:"Kakamigahara City", muni:"kakamigahara", kind:"museum", est:"",
          note:{ en:"A playhouse of about 1877 in the precinct of Murakuni shrine, an Important Tangible Folk Cultural Property, still used for village kabuki in autumn. See <a href=\"kabuki.html\">Village Kabuki</a>.",
            ja:"村国神社の境内に1877年ごろ建てられた芝居小屋で、国の重要有形民俗文化財。いまも秋に地歌舞伎が上演される。<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>を参照。",
            zh:"約 1877 年建於村國神社境內的戲棚，為國家重要有形民俗文化財，至今秋天仍上演地歌舞伎。見<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>。" } },

        { jp:"長良川うかいミュージアム", r:"Nagara River Ukai Museum", h:"岐阜市", hr:"Gifu City", muni:"gifu", kind:"museum", est:"",
          note:{ en:"On the bank of the Nagara by the boat landing: the cormorants, the fishing and its history, for the months when the boats are not out. See <a href=\"ukai.html\">Cormorant Fishing</a>.",
            ja:"鵜飼の乗船場に近い長良川の岸にあり、鵜と漁とその歴史を伝える。舟の出ない季節にも鵜飼を知ることができる。<a href=\"ukai.html\">鵜飼</a>を参照。",
            zh:"位於長良川岸、鵜飼乘船處附近，介紹鸕鶿、捕魚方式及其歷史，讓人在不出船的月份也能認識鵜飼。見<a href=\"ukai.html\">鵜飼</a>。" } },

        { jp:"どぶろく祭の館", r:"Doburoku Festival Hall", h:"白川村", hr:"Shirakawa Village", muni:"shirakawamura", kind:"museum", est:"",
          note:{ en:"Beside Shirakawa Hachiman Shrine in Ogimachi: the doburoku festival, its lion dances and its songs, for the rest of the year. See <a href=\"doburoku.html\">Doburoku, Masu &amp; Cups</a>.",
            ja:"荻町の白川八幡神社のかたわらにあり、どぶろく祭とその獅子舞や唄を、祭りのない季節にも伝える。<a href=\"doburoku.html\">どぶろく・枡・酒器</a>を参照。",
            zh:"位於荻町白川八幡神社旁，在祭典以外的季節介紹濁酒祭及其獅子舞與歌謠。見<a href=\"doburoku.html\">濁酒、枡與酒器</a>。" } },

        { jp:"合掌造り民家園", r:"Gasshō-zukuri Minka-en", h:"白川村", hr:"Shirakawa Village", muni:"shirakawamura", kind:"museum", est:"",
          note:{ en:"Across the river from Ogimachi, an open-air museum of gasshō houses moved from villages of the district, several of them designated cultural properties. See <a href=\"shirakawago.html\">Shirakawa-gō</a>.",
            ja:"荻町の対岸にあり、郷内の集落から移築した合掌造りの家々を集めた野外博物館。いくつかは文化財に指定されている。<a href=\"shirakawago.html\">白川郷</a>を参照。",
            zh:"位於荻町對岸，是聚集從當地各聚落遷建而來之合掌造民家的露天博物館，其中數棟為指定文化財。見<a href=\"shirakawago.html\">白川鄉</a>。" } },

        { group:{ en:"Nature and science", ja:"自然と科学", zh:"自然與科學" }, jp:"自然", id:"g-nature" },

        { jp:"名和昆虫博物館", r:"Nawa Insect Museum", h:"名和昆虫研究所", hr:"Nawa Entomological Institute", muni:"gifu", kind:"museum", est:"1919",
          note:{ en:"Opened in 1919 in Gifu Park, the oldest insect museum in Japan, by the naturalist Nawa Yasushi, who in 1883 collected the Gifu butterfly and gave it its name; it is still run by his family. See <a href=\"wildlife.html\">Living Things</a>.",
            ja:"1919年に岐阜公園に開館した日本最古の昆虫博物館。1883年にギフチョウを採集してその名をつけた博物学者・名和靖が開き、いまも一族が営む。<a href=\"wildlife.html\">生きもの</a>を参照。",
            zh:"1919 年開設於岐阜公園，是日本最古老的昆蟲博物館，由 1883 年採集岐阜蝶並為其命名的博物學者名和靖創立，至今仍由其家族經營。見<a href=\"wildlife.html\">生物</a>。" } },

        { jp:"金生山化石館", r:"Kinshōzan Fossil Museum", h:"大垣市", hr:"Ōgaki City", muni:"ogaki", kind:"museum", est:"",
          note:{ en:"At the foot of the limestone mountain called the birthplace of Japanese palaeontology: fusulinids, giant bivalves and sea lilies from a Permian reef. See <a href=\"landform.html\">Mountains, Plains &amp; Rock</a>.",
            ja:"日本の古生物学発祥の地とされる石灰岩の山のふもとにあり、ペルム紀の礁から出たフズリナ、巨大な二枚貝、ウミユリを展示する。<a href=\"landform.html\">山と平野と岩</a>を参照。",
            zh:"位於被譽為日本古生物學發祥地的石灰岩山麓，展示二疊紀礁體中的紡錘蟲、巨型雙殼貝與海百合。見<a href=\"landform.html\">山、平原與岩石</a>。" } },

        { jp:"日本最古の石博物館", r:"Museum of Japan's Oldest Stone", h:"七宗町", hr:"Hichisō Town", muni:"hichiso", kind:"museum", est:"",
          note:{ en:"By the Hida river at Hichisō, where in 1970 pebbles in a conglomerate were found to be about two billion years old, the oldest rock then known in Japan.",
            ja:"七宗の飛騨川のほとりにある。1970年、この地の礫岩に含まれる礫が約二十億年前のものとわかり、当時知られていた日本最古の岩石となった。",
            zh:"位於七宗的飛驒川畔。1970 年，此地礫岩中的礫石被測定約有二十億年歷史，成為當時已知日本最古老的岩石。" } },

        { jp:"岐阜県博物館", r:"Gifu Prefectural Museum", h:"岐阜県", hr:"Gifu Prefecture", muni:"seki", kind:"museum", est:"",
          note:{ en:"In a hillside park in Seki: the natural history and human history of the prefecture under one roof, from rocks and fossils to folk life.",
            ja:"関の丘の公園にあり、県の自然史と人の歴史を、岩石や化石から民俗まで一つ屋根の下に扱う。",
            zh:"位於關市山丘上的公園，在同一屋簷下介紹全縣的自然史與人類史，從岩石、化石到民俗生活。" } },

        { jp:"アクア・トト ぎふ", r:"Aqua Totto Gifu", h:"世界淡水魚園水族館", hr:"World Freshwater Aquarium", muni:"kakamigahara", kind:"museum", est:"2004",
          note:{ en:"A freshwater aquarium on the Kiso that follows the Nagara from its source to the sea, with the giant salamander and the ayu, and then the great rivers of the world. See <a href=\"rivers.html\">Rivers &amp; Water</a>.",
            ja:"木曽川のほとりの淡水魚の水族館。長良川を源流から河口までたどり、オオサンショウウオや鮎を見せ、さらに世界の大河へと続く。<a href=\"rivers.html\">川と水</a>を参照。",
            zh:"位於木曾川畔的淡水水族館，從源頭到出海口追溯長良川，展示大鯢與香魚，再延伸到世界各大河。見<a href=\"rivers.html\">河川與水</a>。" } }

      ] }
    ] },

    { t:"section", id:"bytown",
      title:{ en:"The same list, read by town", ja:"町から引く", zh:"依城鎮索引" }, jp:"市町村別",
      body:[
        { t:"muniindex", kind:"museum" },
        { t:"tiny", text:{
          en:"Generated from the entries above; each name links to its entry.",
          ja:"上の項目から生成。名前から各項目へ移動できる。",
          zh:"由上方條目生成；點選名稱可前往各條目。" } }
      ] },

    { t:"note", label:{ en:"Workshops you can visit", ja:"訪ねられる工房", zh:"可參觀的工坊" }, text:{
      en:"Many working places take visitors too: breweries in the brewing season, masu makers in Ōgaki, papermakers along the Itadori river, knife makers' outlets and the swordsmiths' demonstrations in Seki, potters in the kiln villages of Tajimi and Toki, and several furniture showrooms in Takayama. Most ask for a booking; the directories — <a href=\"makers.html\">A Directory of Makers</a> and <a href=\"directory.html\">A Directory of Gifu Sake</a> — name some of them.",
      ja:"仕事場の多くも訪問者を受け入れている。仕込みの季節の酒蔵、大垣の枡屋、板取川沿いの紙漉き、関の刃物の直売所と刀匠の鍛錬公開、多治見や土岐の窯元の集落、高山のいくつかの家具のショールーム。たいていは予約が要る。<a href=\"makers.html\">作り手名鑑</a>と<a href=\"directory.html\">岐阜酒名鑑</a>にその一部を挙げた。",
      zh:"許多工作場所也接待訪客：釀造季節的酒藏、大垣的枡工坊、板取川沿岸的造紙者、關的刀具直營店與刀匠公開鍛刀、多治見與土岐窯元聚落的陶工，以及高山的幾家家具展示間。多數需要預約；<a href=\"makers.html\">製作者名鑑</a>與<a href=\"directory.html\">岐阜酒名鑑</a>列出了其中一部分。" } },

    { t:"related", items:[
      { href:"journeys.html", why:{ en:"The places strung into routes.", ja:"これらを道筋につなぐ。", zh:"把這些地方串成路線。" } },
      { href:"regions.html", why:{ en:"Everything in the book, town by town.", ja:"本書のすべてを町ごとに。", zh:"本書所有內容，依城鎮排列。" } },
      { href:"makers.html", why:{ en:"The workshops behind the crafts.", ja:"工芸の背後の工房。", zh:"工藝背後的工坊。" } },
      { href:"festivals.html", why:{ en:"When to go.", ja:"いつ行くか。", zh:"何時前往。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- makers */
GIFU.pages["makers"] = {
  kicker: { en: "Journeys & Reference · 04", ja: "旅と資料 · 04", zh: "旅程與資料 · 04" },
  title:  { en: "A Directory of Makers", ja: "作り手名鑑", zh: "製作者名鑑" },
  jp: "家具・刃物・楽器・紙・土",
  lede: {
    en: "The workshops and companies behind the crafts of this book: furniture makers of Takayama, blade makers of Seki, the guitar builders of Kani and Sakashita, the masu makers of Ōgaki, papermakers, lantern makers and a potters' kiln. Each entry gives the name, the town, the year the maker dates itself from and what it is known for. Like the sake directory it is a selection, chosen to show the range, and not a ranking or a shopping list.",
    ja: "本書の工芸の背後にある工房と会社——高山の家具、関の刃物、可児と坂下のギター、大垣の枡、紙漉き、提灯、そして一つの窯。名、所在の町、創業と称する年、何で知られるかを記した。酒の名鑑と同じく、幅を示すための抜粋であり、順位でも買い物案内でもない。",
    zh: "本書各項工藝背後的工坊與公司：高山的家具製造商、關的刀具製造商、可兒與坂下的吉他製作者、大垣的枡製造商、造紙者、燈籠製作者，以及一座陶窯。每個條目列出名稱、所在城鎮、自稱的創業年份，以及以什麼聞名。與酒的名鑑一樣，這是為呈現廣度而作的選錄，不是排名，也不是購物清單。"
  },
  body: [
    { t:"section", id:"howtoread",
      title:{ en:"How to read an entry", ja:"記載の読み方", zh:"條目的讀法" }, jp:"凡例",
      body:[
        { t:"p", text:{
          en:"The left column gives the name the maker is known by, in Japanese and in roman letters, the company or workshop behind it, the kind of maker, the municipality and the founding year the maker gives. A dash means no year is given here. The right column says what the maker is known for; the linked pages tell the history of each craft. The makers of sake are in their own directory, <a href=\"directory.html\">A Directory of Gifu Sake</a>, and the places where crafts can be seen are listed on <a href=\"museums.html\">Museums &amp; Workshops</a>.",
          ja:"左の欄には、作り手の通り名を日本語とローマ字で、その背後の会社や工房、作り手の種類、所在の市町村、そして作り手みずからが掲げる創業年を記した。ダッシュはここでは年を記していないことを示す。右の欄には何で知られるかを記し、各工芸の歴史はリンク先の頁が語る。酒の造り手は別の名鑑<a href=\"directory.html\">岐阜酒名鑑</a>に、工芸を見られる場所は<a href=\"museums.html\">博物館と工房</a>に挙げた。",
          zh:"左欄列出製作者通行的名稱（日文與羅馬字）、其背後的公司或工坊、製作者類別、所在市町村，以及製作者自稱的創業年份。破折號表示此處未記年份。右欄說明它以什麼聞名；各項工藝的歷史，見所連結的頁面。釀酒者另有名鑑<a href=\"directory.html\">岐阜酒名鑑</a>，可參觀工藝之處則列於<a href=\"museums.html\">博物館與工坊</a>。" } }
      ]
    },

    { t:"section", id:"list",
      title:{ en:"The directory", ja:"名鑑", zh:"名鑑" }, jp:"一覧",
      body:[
      { t:"brands", placeholder:{ en:"Filter — try “chair”, “Seki”, “1920”…", ja:"絞り込み——「椅子」「関」「1920」など", zh:"篩選——試試「椅子」、「關」、「1920」…" }, items:[

        { group:{ en:"Furniture and wood", ja:"家具と木", zh:"家具與木" }, jp:"家具・木工", id:"g-wood" },

        { jp:"飛騨産業", r:"Hida Sangyō", h:"飛騨産業", hr:"Hida Sangyō", muni:"takayama", kind:"furn", est:"1920",
          note:{ en:"Founded in 1920 by local investors as Chūō Mokkō to make bentwood chairs from Hida beech, and renamed Hida Mokkō in 1923; the first chairs imitated Thonet models, and it took years to master the steaming and bending. Its woodpecker trademark is among the best known in Japanese furniture, and it has developed furniture of compressed sugi, turning a soft plantation wood into a hard one. See <a href=\"furniture.html\">Hida Furniture</a>.",
            ja:"1920年、地元の出資者たちが、飛騨のブナで曲木の椅子を作るために中央木工として興し、1923年に飛騨木工と改めた。初期の椅子はトーネットの型をまねたもので、蒸して曲げる技を身につけるまでに年月を要した。キツツキの商標は日本の家具で最もよく知られたものの一つであり、柔らかな人工林の杉を圧縮して硬い材に変える家具も開発した。<a href=\"furniture.html\">飛騨の家具</a>を参照。",
            zh:"1920 年由當地出資者創立，名為中央木工，以飛驒山毛櫸製作曲木椅，1923 年改名飛驒木工；最初的椅子仿自索涅特（Thonet）款式，花了多年才掌握蒸煮與彎曲的技術。其啄木鳥商標是日本家具界最知名的標誌之一；它也開發了壓縮杉木家具，把柔軟的人工林木材變成堅硬的材料。見<a href=\"furniture.html\">飛驒家具</a>。" } },

        { jp:"柏木工", r:"Kashiwa", h:"柏木工", hr:"Kashiwa Mokkō", muni:"takayama", kind:"furn", est:"1943",
          note:{ en:"A Takayama maker of solid-wood chairs and tables, one of the core firms of the Hida furniture region.",
            ja:"無垢材の椅子とテーブルをつくる高山の家具メーカーで、飛騨の家具産地の中核をなす一社。",
            zh:"高山的實木椅與桌製造商，飛驒家具產地的核心企業之一。" } },

        { jp:"日進木工", r:"Nissin Mokkō", h:"日進木工", hr:"Nissin Mokkō", muni:"takayama", kind:"furn", est:"1946",
          note:{ en:"Chairs and sofas. In 2023 it began making casks of Japanese oak, a wood prized for ageing whisky — a return, in a new form, to the cooper's craft. See <a href=\"everyday.html\">Wood in Everyday Things</a>.",
            ja:"椅子とソファ。2023年からは、ウイスキーの熟成に珍重される国産オークの樽づくりを始めた。新しいかたちでの、桶樽職の技への回帰である。<a href=\"everyday.html\">暮らしの木</a>を参照。",
            zh:"椅子與沙發。2023 年起開始以日本橡木製作酒桶——這種木材在威士忌熟成上備受珍視——以新的形式重返桶匠的技藝。見<a href=\"everyday.html\">生活中的木</a>。" } },

        { jp:"シラカワ", r:"Shirakawa", h:"シラカワ", hr:"Shirakawa", muni:"takayama", kind:"furn", est:"1960",
          note:{ en:"Began as a sawmill in 1960 and has made furniture since 1971: solid-wood cabinets and tables.",
            ja:"1960年に製材所として始まり、1971年から家具をつくる。無垢材の収納家具とテーブル。",
            zh:"1960 年以製材廠起家，1971 年起製作家具：實木收納櫃與桌子。" } },

        { jp:"オークヴィレッジ", r:"Oak Village", h:"オークヴィレッジ", hr:"Oak Village", muni:"takayama", kind:"wood", est:"1974",
          note:{ en:"Founded in 1974 by five young people from Tokyo led by Inamoto Tadashi, who settled on a hillside at Kiyomi in 1976. It makes things of Japanese hardwoods “from bowls to buildings”, on the principle that a tree which took a hundred years to grow should become something that lasts a hundred years.",
            ja:"1974年、稲本正を中心とする東京の若者五人が興し、1976年に清見の山腹に移った。国産の広葉樹で「お椀から建物まで」をつくり、百年かけて育った木は百年使えるものにすべきだという考えを掲げる。",
            zh:"1974 年由以稻本正為首的五名東京年輕人創立，1976 年落腳清見的山坡。它以日本闊葉樹製作「從碗到建築」的各種物品，秉持的理念是：長了一百年的樹，應該做成能用一百年的東西。" } },

        { jp:"大橋量器", r:"Ōhashi Ryōki", h:"大橋量器", hr:"Ōhashi Ryōki", muni:"ogaki", kind:"wood", est:"1950",
          note:{ en:"A masu maker of Ōgaki, the town that makes about eight in ten of Japan's masu, all of Japanese hinoki. Like several of its neighbours it has a shop where visitors can assemble a masu or have one branded with a name. See <a href=\"everyday.html#masu\">Wood in Everyday Things</a>.",
            ja:"日本の枡のおよそ八割を、すべて国産の檜で作る大垣の枡屋の一つ。近隣の何軒かと同じく店を構え、訪れた人が枡を組み立てたり、名入れの焼印を押してもらったりできる。<a href=\"everyday.html#masu\">暮らしの木</a>を参照。",
            zh:"大垣的枡製造商之一——大垣生產日本約八成的枡，全部以日本檜木製成。與鄰近幾家一樣設有店舖，訪客可以自己組裝枡，或請店家烙上名字。見<a href=\"everyday.html#masu\">生活中的木</a>。" } },

        { group:{ en:"Blades", ja:"刃物", zh:"刀具" }, jp:"刃物", id:"g-blades" },

        { jp:"貝印", r:"Kai", h:"貝印", hr:"Kai Corporation", muni:"seki", kind:"blade", est:"1908",
          note:{ en:"Began in 1908 as a pocket-knife maker in Seki and grew into one of Japan's largest makers of kitchen knives, razors and beauty tools. Its Seki Magoroku range carries the name of the sixteenth-century swordsmith, and its Shun knives are sold around the world. See <a href=\"cutlery.html\">The Cutlery Industry</a>.",
            ja:"1908年に関でポケットナイフの製造から始まり、包丁・剃刀・美容用品の日本最大級のメーカーとなった。「関孫六」の銘は十六世紀の刀匠の名を負い、「旬」の包丁は世界で売られている。<a href=\"cutlery.html\">刃物産業</a>を参照。",
            zh:"1908 年在關以製造摺疊小刀起家，發展成日本最大的菜刀、剃刀與美容工具製造商之一。其「關孫六」系列承襲十六世紀刀匠之名，「旬」系列菜刀行銷全球。見<a href=\"cutlery.html\">刀具產業</a>。" } },

        { jp:"ミソノ刃物", r:"Misono", h:"ミソノ刃物", hr:"Misono Hamono", muni:"seki", kind:"blade", est:"",
          note:{ en:"A Seki maker known among professional cooks for Western-style kitchen knives. Like many firms in the town it combines machine work with hand grinding and edging, where the quality of a knife is decided. See <a href=\"knives.html\">The Kitchen Knife</a>.",
            ja:"洋包丁で料理人のあいだに知られる関の刃物メーカー。町の多くの会社と同じく、機械による工程と、刃物の良し悪しが決まる手での研ぎ・刃付けを組み合わせる。<a href=\"knives.html\">包丁</a>を参照。",
            zh:"關的刀具製造商，以西式菜刀在專業廚師之間享有名聲。與鎮上許多公司一樣，它把機械工序與決定刀具品質的手工研磨、開刃結合在一起。見<a href=\"knives.html\">廚刀</a>。" } },

        { group:{ en:"Instruments", ja:"楽器", zh:"樂器" }, jp:"ギター", id:"g-guitars" },

        { jp:"K.ヤイリ", r:"K.Yairi", h:"ヤイリギター", hr:"Yairi Guitar", muni:"kani", kind:"guitar", est:"1935",
          note:{ en:"Traces itself to 1935, when Yairi Giichi, who had worked at Suzuki's violin company, set up his own workshop in Nagoya; it moved to Imawatari, now part of Kani, in 1945 and became Yairi Guitar in 1965. The workshop builds as much as possible by hand, and makes ukuleles, harps and bouzoukis as well as guitars. See <a href=\"guitars.html\">Hand-made Guitars</a>.",
            ja:"1935年、鈴木バイオリンで働いた矢入儀一が名古屋に自らの工房を開いたのを始まりとする。1945年に今渡（現在の可児市）へ移り、1965年にヤイリギターとなった。できるかぎりを手でつくり、ギターのほかウクレレ、ハープ、ブズーキも手がける。<a href=\"guitars.html\">手工ギター</a>を参照。",
            zh:"其起源可追溯至 1935 年：曾在鈴木小提琴公司工作的矢入儀一在名古屋開設自己的工坊；1945 年遷至今渡（今屬可兒市），1965 年成為 Yairi Guitar。工坊盡可能以手工製作，除吉他外也做烏克麗麗、豎琴與布祖基琴。見<a href=\"guitars.html\">手工吉他</a>。" } },

        { jp:"タカミネ", r:"Takamine", h:"高峰楽器製作所", hr:"Takamine Gakki", muni:"nakatsugawa", kind:"guitar", est:"1959",
          note:{ en:"Began in 1959 at Sakashita in the Kiso valley, now part of Nakatsugawa, and took the name of the mountain above the town in 1962. Its under-saddle pickup of the late 1970s made the electro-acoustic guitar a stage instrument, and Takamines have been played by Bruce Springsteen's band and by Glenn Frey of the Eagles. See <a href=\"guitars.html\">Hand-made Guitars</a>.",
            ja:"1959年、木曽谷の坂下（現在の中津川市）で始まり、1962年に町の上にそびえる山の名をとった。1970年代末に開発したサドル下のピックアップはエレクトリック・アコースティック・ギターを舞台の楽器にし、ブルース・スプリングスティーンのバンドやイーグルスのグレン・フライが弾いてきた。<a href=\"guitars.html\">手工ギター</a>を参照。",
            zh:"1959 年創立於木曾谷的坂下（今屬中津川市），1962 年取鎮上方高峰山之名。其 1970 年代末開發的琴橋下拾音器，讓電木吉他成為舞台樂器；布魯斯·史普林斯汀的樂團與老鷹合唱團的格倫·佛萊都曾使用。見<a href=\"guitars.html\">手工吉他</a>。" } },

        { group:{ en:"Paper and lanterns", ja:"紙と提灯", zh:"紙與燈籠" }, jp:"紙・提灯", id:"g-paper" },

        { jp:"本美濃紙保存会", r:"Honminoshi Preservation Society", h:"本美濃紙保存会", hr:"Honminoshi Hozonkai", muni:"mino", kind:"paper", est:"",
          note:{ en:"The papermakers whose technique was designated an Important Intangible Cultural Property in 1969. Their paper, made only from Japanese kōzo, formed by swaying the mould both ways and dried on boards in the sun, was inscribed by UNESCO in 2014 with two other washi. See <a href=\"washi.html\">Mino Washi</a>.",
            ja:"1969年にその技術が重要無形文化財に指定された紙漉きたち。国産の楮だけを用い、簀桁を縦横に揺すって漉き、板に貼って天日で干すその紙は、2014年にほかの二つの和紙とともにユネスコの無形文化遺産に記載された。<a href=\"washi.html\">美濃和紙</a>を参照。",
            zh:"其技術於 1969 年獲指定為重要無形文化財的造紙者。他們的紙只用日本產的楮，抄紙時前後左右搖動抄紙框，貼在木板上以日光曬乾；2014 年與另兩種和紙一同列入聯合國教科文組織非物質文化遺產。見<a href=\"washi.html\">美濃和紙</a>。" } },

        { jp:"オゼキ", r:"Ozeki", h:"オゼキ", hr:"Ozeki", muni:"gifu", kind:"lantern", est:"",
          note:{ en:"A Gifu lantern maker, which has made Isamu Noguchi's AKARI lamps of mulberry paper and bamboo since he designed them in the 1950s, alongside the painted Bon lanterns of the Gifu tradition. See <a href=\"lanterns.html\">Lanterns, Umbrellas &amp; Fans</a>.",
            ja:"岐阜の提灯メーカー。1950年代にイサム・ノグチが楮紙と竹で考案した「AKARI」を当初からつくり続け、岐阜提灯の伝統である絵付けの盆提灯もつくる。<a href=\"lanterns.html\">提灯・和傘・団扇</a>を参照。",
            zh:"岐阜的燈籠製造商。自 1950 年代野口勇以楮紙與竹子設計出「AKARI」燈以來便一直製作，同時也做岐阜傳統的彩繪盆燈籠。見<a href=\"lanterns.html\">燈籠、和傘與團扇</a>。" } },

        { group:{ en:"Clay", ja:"土", zh:"土" }, jp:"窯", id:"g-clay" },

        { jp:"幸兵衛窯", r:"Kōbei Kiln", h:"幸兵衛窯", hr:"Kōbei-gama", muni:"tajimi", kind:"clay", est:"",
          note:{ en:"A family kiln at Ichinokura in Tajimi, the workshop of Katō Takuo (1917–2005), who was named a Living National Treasure in 1995 for lustre and three-colour wares revived from Persian models. See <a href=\"minoyaki.html\">Mino Ware</a>.",
            ja:"多治見・市之倉の家族の窯で、ペルシアの陶器にならって甦らせたラスター彩と三彩により1995年に人間国宝となった加藤卓男（1917–2005）の工房。<a href=\"minoyaki.html\">美濃焼</a>を参照。",
            zh:"多治見市之倉的家族窯，是加藤卓男（1917–2005）的工坊；他以仿波斯陶器復興的虹彩與三彩，於 1995 年獲認定為人間國寶。見<a href=\"minoyaki.html\">美濃燒</a>。" } }

      ] }
    ] },

    { t:"section", id:"bytown",
      title:{ en:"The same list, read by town", ja:"町から引く", zh:"依城鎮索引" }, jp:"市町村別",
      body:[
        { t:"p", text:{
          en:"The makers above, arranged by municipality. The complete cross-index — makers, breweries and museums together — is at the end of <a href=\"regions.html\">Five Regions</a>.",
          ja:"上の作り手を市町村ごとに並べた。作り手・蔵・博物館をあわせた完全な索引は<a href=\"regions.html\">五つの圏域</a>の末尾にある。",
          zh:"上列製作者依市町村排列。製作者、酒藏與博物館合併的完整索引，位於<a href=\"regions.html\">五大圈域</a>頁末。" } },
        { t:"muniindex", not:["sake","museum"] }
      ] },

    { t:"note", label:{ en:"What is not here", ja:"載せていないもの", zh:"未列入者" }, text:{
      en:"Hundreds of small workshops — swordsmiths, papermakers, carvers, lacquerers, potters, umbrella and fan makers, knife grinders — work under their own names and sell through shops, fairs and their own doors. They are not listed because a short list cannot be fair to them. The town and prefectural craft associations publish membership lists, and the October festivals of Seki and Mino and the pottery fairs of Tajimi and Toki are the easiest places to meet them.",
      ja:"刀匠、紙漉き、彫刻師、塗師、陶工、傘や団扇の職人、研ぎ師など、自分の名で仕事をし、店や市や自らの戸口で売る小さな工房は何百とある。短い一覧では公平を期せないので載せていない。町や県の工芸の組合が会員の一覧を公表しており、関と美濃の十月の祭りや、多治見と土岐の陶器まつりが、彼らに会う最も手軽な場である。",
      zh:"數以百計的小工坊——刀匠、造紙者、雕刻師、漆匠、陶工、傘與團扇職人、磨刀師——以自己的名義工作，透過店家、市集或自家門口販售。之所以未列入，是因為一份短清單無法公平對待他們。各城鎮與縣的工藝團體公布會員名單，而關與美濃的十月祭典、多治見與土岐的陶器市集，是與他們相遇最方便的場合。" } },

    { t:"related", items:[
      { href:"register.html", why:{ en:"All of Gifu's designated crafts.", ja:"岐阜の指定工芸品のすべて。", zh:"岐阜所有指定工藝品。" } },
      { href:"museums.html", why:{ en:"Where to see the crafts.", ja:"工芸を見られる場所。", zh:"哪裡看得到這些工藝。" } },
      { href:"directory.html", why:{ en:"The sake directory.", ja:"酒の名鑑。", zh:"酒的名鑑。" } },
      { href:"economy.html", why:{ en:"The industries behind the names.", ja:"名の背後にある産業。", zh:"名字背後的產業。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- economy */
GIFU.pages["economy"] = {
  kicker: { en: "Journeys & Reference · 05", ja: "旅と資料 · 05", zh: "旅程與資料 · 05" },
  title:  { en: "Industry & Economy", ja: "産業と経済", zh: "產業與經濟" },
  jp: "ものづくりの県",
  lede: {
    en: "Gifu earns its living by making things. It lies inside the industrial belt around Nagoya, and its largest employers make machinery, parts and aircraft; but it is also the country's leading maker of a surprising list of smaller things — plates and cups, kitchen knives, wooden measures, thin agar, food replicas — each tied to one town and to a resource or a skill that town has had for centuries. This page gathers the numbers that the rest of the book quotes, with their years and sources.",
    ja: "岐阜はものをつくって暮らしを立てる県である。名古屋をとりまく工業地帯のなかにあり、大きな雇い手は機械や部品や航空機をつくる。だが同時に、意外な品々——皿や碗、包丁、木の枡、細寒天、食品サンプル——で全国一の作り手でもあり、そのそれぞれが一つの町と、その町が何百年も持ってきた資源や技に結びついている。この頁には、本書のほかの頁が引く数字を、年と出典とともに集めた。",
    zh: "岐阜靠製造東西維生。它位於環繞名古屋的工業帶之中，最大的雇主製造機械、零件與飛機；但它同時也是一長串出人意料的小東西的全國第一產地——盤子與杯子、菜刀、木製量器、細寒天、食物模型——每一樣都與某個城鎮、以及那個城鎮擁有了數百年的資源或技藝相連。本頁彙整本書其他各頁所引用的數字，並附年份與出處。"
  },
  body: [
    { t:"grid", cols:3, cells:[
      { k:{en:"Western-style ceramic tableware",ja:"洋飲食器",zh:"西式陶瓷餐具"}, v:"71.1 %",
        d:{en:"Gifu's share of Japan's shipments; 44.8% for Japanese-style tableware. First among the prefectures in both (Gifu Prefecture, 2025).",ja:"全国出荷に占める岐阜県の割合。和飲食器は44.8%。いずれも全国一（岐阜県、2025年）。",zh:"岐阜縣在全國出貨量中的占比；和式餐具為 44.8%。兩者皆居全國之首（岐阜縣，2025 年）。"} },
      { k:{en:"Household knives",ja:"家庭用刃物",zh:"家用刀具"}, v:"55 %",
        d:{en:"Seki's share of Japan's household knife shipments by value; the city shipped ¥45.6 billion of cutlery in 2020, more than any other municipality.",ja:"出荷額で見た家庭用刃物に占める関市の割合。2020年の刃物出荷額456億円は全国の市町村で首位。",zh:"以出貨額計，關市在日本家用刀具中的占比；2020 年該市刀具出貨額 456 億日圓，居全國市町村之首。"} },
      { k:{en:"Masu",ja:"枡",zh:"枡"}, v:"≈ 80 %",
        d:{en:"Ōgaki's share of Japan's wooden masu, some two million a year, all of Japanese hinoki.",ja:"日本の木枡に占める大垣の割合。年に約二百万個、すべて国産の檜。",zh:"大垣在日本木枡中的占比；每年約兩百萬個，全部以日本檜木製成。"} },
      { k:{en:"Thin agar",ja:"細寒天",zh:"細寒天"}, v:"≈ 80 %",
        d:{en:"Yamaoka in Ena, where the strands are frozen at night and dried by day in winter fields.",ja:"恵那市山岡町。冬の田で夜に凍らせ昼に乾かしてつくる。",zh:"惠那市山岡町：冬季田野中，夜間冷凍、白天曬乾。"} },
      { k:{en:"Food replicas",ja:"食品サンプル",zh:"食物模型"}, v:"≈ 60 %",
        d:{en:"The share of Japan's plastic food replicas said to come from makers in Gujō, where the trade was pioneered in the 1930s.",ja:"日本の食品サンプルのうち郡上の作り手がつくるとされる割合。郡上は1930年代にこの商売を開いた地である。",zh:"據稱日本塑膠食物模型出自郡上製造者的比例；此行業於 1930 年代在郡上開創。"} },
      { k:{en:"Hydroelectric potential",ja:"包蔵水力",zh:"可開發水力"}, v:"13,861 GWh",
        d:{en:"A year of exploitable hydroelectric energy, the largest of any prefecture (Agency for Natural Resources and Energy).",ja:"開発可能な水力エネルギー量（年間）で、都道府県で最大（資源エネルギー庁）。",zh:"每年可開發的水力發電量，居各都道府縣之首（資源能源廳）。"} }
    ] },

    { t:"section", id:"making",
      title:{ en:"A prefecture of makers", ja:"ものづくりの県", zh:"製造之縣" }, jp:"製造業",
      body:[
        { t:"p", text:{
          en:"Southern Gifu belongs to the manufacturing region that has Nagoya at its centre, and much of its employment is in machinery, metal and plastic parts for the car and aircraft industries; many people in the southern cities also commute to work in Aichi. Beside this modern industry stand the older ones this book describes, each grown from a local advantage: clay and firewood made Tōnō the potters' country; charcoal, water and a sword guild made Seki; beech and carpenters made Takayama's furniture; hinoki made Ōgaki's masu; mulberry and clear water made Mino's paper. In the twentieth century several of these became industries in their own right, and in the twenty-first they are being remade again, towards smaller volumes, higher prices and exports.",
          ja:"岐阜の南部は名古屋を中心とする製造業の地域に属し、雇用の多くは自動車や航空機のための機械、金属・樹脂の部品にある。南部の市からは愛知へ通勤する人も多い。この近代の工業のかたわらに、本書が述べる古い産業が立っている。どれも土地の利から育った——土と薪が東濃を焼き物の国にし、炭と水と刀鍛冶の座が関をつくり、ブナと大工が高山の家具を、檜が大垣の枡を、楮と清らかな水が美濃の紙をつくった。二十世紀にそのいくつかは一つの産業となり、二十一世紀にはふたたびつくり直されつつある——少量に、高い値に、輸出へと。",
          zh:"岐阜南部屬於以名古屋為中心的製造業地帶，就業多集中在汽車與飛機產業所需的機械、金屬與塑膠零件；南部各市也有許多人通勤到愛知工作。在這些現代工業旁邊，矗立著本書所述的古老產業，每一項都源自在地的優勢：黏土與薪柴使東濃成為陶瓷之鄉；木炭、水與刀匠行會造就了關；山毛櫸與木匠造就了高山的家具；檜木造就了大垣的枡；楮與清水造就了美濃的紙。二十世紀時，其中數項各自發展成產業；到了二十一世紀，它們又再次被重塑——走向小量、高價與出口。" } },
        { t:"table",
          caption:{en:"The craft industries of this book, with the figures the other pages quote. The years are those of the source.",ja:"本書の工芸産業と、ほかの頁が引く数字。年は出典のもの。",zh:"本書所述的工藝產業，以及其他頁面引用的數字。年份為出處所載。"},
          cols:[{en:"Industry",ja:"産業",zh:"產業"},{en:"Centre",ja:"中心地",zh:"中心地"},{en:"Figure",ja:"数字",zh:"數字"},{en:"Page",ja:"頁",zh:"頁面"}],
          rows:[
            [{en:"Ceramic tableware",ja:"陶磁器の食器",zh:"陶瓷餐具"},{en:"Tajimi, Toki, Mizunami",ja:"多治見・土岐・瑞浪",zh:"多治見、土岐、瑞浪"},{en:"71.1% / 44.8% of national shipments (2025)",ja:"全国出荷の71.1%・44.8%（2025年）",zh:"全國出貨的 71.1% / 44.8%（2025 年）"},{en:"<a href=\"minoyaki.html\">Mino Ware</a>",ja:"<a href=\"minoyaki.html\">美濃焼</a>",zh:"<a href=\"minoyaki.html\">美濃燒</a>"}],
            [{en:"Cutlery",ja:"刃物",zh:"刀具"},{en:"Seki",ja:"関",zh:"關"},{en:"¥45.6 bn shipped; 55% of household knives (2020)",ja:"出荷額456億円、家庭用刃物の55%（2020年）",zh:"出貨 456 億日圓；家用刀具的 55%（2020 年）"},{en:"<a href=\"cutlery.html\">The Cutlery Industry</a>",ja:"<a href=\"cutlery.html\">刃物産業</a>",zh:"<a href=\"cutlery.html\">刀具產業</a>"}],
            [{en:"Furniture",ja:"家具",zh:"家具"},{en:"Takayama",ja:"高山",zh:"高山"},{en:"Regional collective trademarks since 2008",ja:"2008年から地域団体商標",zh:"2008 年起取得地域團體商標"},{en:"<a href=\"furniture.html\">Hida Furniture</a>",ja:"<a href=\"furniture.html\">飛騨の家具</a>",zh:"<a href=\"furniture.html\">飛驒家具</a>"}],
            [{en:"Masu",ja:"枡",zh:"枡"},{en:"Ōgaki",ja:"大垣",zh:"大垣"},{en:"≈ 80% of national supply",ja:"全国の約8割",zh:"全國約八成"},{en:"<a href=\"everyday.html\">Wood in Everyday Things</a>",ja:"<a href=\"everyday.html\">暮らしの木</a>",zh:"<a href=\"everyday.html\">生活中的木</a>"}],
            [{en:"Washi",ja:"和紙",zh:"和紙"},{en:"Mino",ja:"美濃",zh:"美濃"},{en:"Traditional craft since 1985; UNESCO 2014",ja:"1985年伝統的工芸品、2014年ユネスコ",zh:"1985 年傳統工藝品；2014 年聯合國教科文組織"},{en:"<a href=\"washi.html\">Mino Washi</a>",ja:"<a href=\"washi.html\">美濃和紙</a>",zh:"<a href=\"washi.html\">美濃和紙</a>"}],
            [{en:"Lanterns and umbrellas",ja:"提灯・和傘",zh:"燈籠與和傘"},{en:"Gifu city",ja:"岐阜市",zh:"岐阜市"},{en:"The largest national producer of Japanese umbrellas",ja:"和傘の全国最大の産地",zh:"日本最大的和傘產地"},{en:"<a href=\"lanterns.html\">Lanterns, Umbrellas &amp; Fans</a>",ja:"<a href=\"lanterns.html\">提灯・和傘・団扇</a>",zh:"<a href=\"lanterns.html\">燈籠、和傘與團扇</a>"}],
            [{en:"Apparel and wool",ja:"アパレル・毛織物",zh:"成衣與毛織"},{en:"Gifu city, Hashima",ja:"岐阜市・羽島",zh:"岐阜市、羽島"},{en:"Post-war wholesale district; Bishū wool",ja:"戦後の問屋街、尾州の毛織物",zh:"戰後批發街；尾州毛織"},{en:"<a href=\"textiles.html\">Dye &amp; Cloth</a>",ja:"<a href=\"textiles.html\">染めと織り</a>",zh:"<a href=\"textiles.html\">染與織</a>"}],
            [{en:"Guitars",ja:"ギター",zh:"吉他"},{en:"Kani, Sakashita",ja:"可児・坂下",zh:"可兒、坂下"},{en:"Two makers of world reputation",ja:"世界に名の通った二社",zh:"兩家享譽國際的製造商"},{en:"<a href=\"guitars.html\">Hand-made Guitars</a>",ja:"<a href=\"guitars.html\">手工ギター</a>",zh:"<a href=\"guitars.html\">手工吉他</a>"}]
          ] }
      ]
    },

    { t:"section", id:"land",
      title:{ en:"Farm, forest and river", ja:"田と森と川", zh:"田、林與河" }, jp:"一次産業",
      body:[
        { t:"p", text:{
          en:"About 81 per cent of the prefecture is forest, and its planted forests held about 100 million m³ of timber in 2019, growing every year; the difficulty is not the resource but the labour and the price. On the plain, the Fuyū persimmon of Mizuho and the dried Dōjō Hachiya persimmon of Minokamo, a registered geographical indication, are the best-known fruit; in the mountains, Hida beef, which must be raised in the prefecture for at least fourteen months. The ayu of the Nagara, with the river and the people who fish it, were recognised in 2015 as a Globally Important Agricultural Heritage System. See <a href=\"logging.html\">Logging &amp; Forestry</a> and <a href=\"food.html\">Food of Mino &amp; Hida</a>.",
          ja:"県土の約81%は森林で、人工林には2019年に約一億立方メートルの木が蓄えられ、毎年増えている。難しいのは資源ではなく、担い手と値段である。平野では瑞穂の富有柿と、地理的表示に登録された美濃加茂の干し柿「堂上蜂屋柿」がよく知られ、山では県内で十四か月以上育てることが条件の飛騨牛がある。長良川の鮎は、川とそこで漁をする人々とともに、2015年に世界農業遺産に認定された。<a href=\"logging.html\">林業</a>と<a href=\"food.html\">美濃と飛騨の食</a>を参照。",
          zh:"全縣約 81% 是森林，人工林在 2019 年蓄積約一億立方公尺的木材，且逐年增加；難處不在資源，而在人力與價格。平原上，瑞穗的富有柿與美濃加茂已登錄地理標示的「堂上蜂屋柿」柿餅最為知名；山區則有飛驒牛——必須在縣內飼養十四個月以上。長良川的香魚，連同這條河以及在河上捕魚的人們，於 2015 年獲認定為世界農業遺產。見<a href=\"logging.html\">林業</a>與<a href=\"food.html\">美濃與飛驒的飲食</a>。" } }
      ]
    },

    { t:"section", id:"visitors",
      title:{ en:"Visitors", ja:"観光", zh:"觀光" }, jp:"観光",
      body:[
        { t:"p", text:{
          en:"Tourism is concentrated in a few places — Takayama, Shirakawa-gō, Gero, Gujō Hachiman, the cormorant fishing at Gifu and the Nakasendō at Magome — and in a few seasons. The completion of the Tōkai-Hokuriku Expressway in 2008 and the growth of travel from abroad have brought far more day visitors to the Hida mountains, and Shirakawa-gō in particular now manages traffic and crowding as carefully as it manages fire. The rest of the prefecture is quiet, which for a visitor is its advantage. See <a href=\"journeys.html\">Five Journeys</a>.",
          ja:"観光はいくつかの場所——高山、白川郷、下呂、郡上八幡、岐阜の鵜飼、馬籠の中山道——と、いくつかの季節に集中している。2008年の東海北陸自動車道の全通と海外からの旅行の伸びは、飛騨の山にはるかに多くの日帰り客をもたらし、とりわけ白川郷はいま、火と同じほど念入りに車と混雑を管理している。県のほかの土地は静かであり、それは訪れる者にとっての利点である。<a href=\"journeys.html\">五つの旅</a>を参照。",
          zh:"觀光集中在少數地點——高山、白川鄉、下呂、郡上八幡、岐阜的鵜飼、馬籠的中山道——以及少數季節。東海北陸自動車道於 2008 年全線通車，加上海外旅客增加，為飛驒山區帶來遠多於以往的一日遊客；尤其白川鄉，如今管理車流與人潮之謹慎，不亞於防火。全縣其他地方則很安靜——對旅人而言，這正是它的好處。見<a href=\"journeys.html\">五段旅程</a>。" } }
      ]
    },

    { t:"section", id:"people",
      title:{ en:"People and work", ja:"人と仕事", zh:"人與工作" }, jp:"人口",
      body:[
        { t:"p", text:{
          en:"Gifu's population peaked at about 2.11 million at the census of 2000 and was about 1.95 million in 2025, with more than nine in ten living in Mino. Every craft industry in this book reports the same pattern — an ageing workforce, small firms without successors and fewer apprentices — and every one is answering it in part by selling to visitors and abroad what it once sold to the home market. See <a href=\"modern.html\">Meiji to Now</a> and <a href=\"future.html\">The Next Twenty Years</a>.",
          ja:"岐阜の人口は2000年の国勢調査で約211万人の頂点に達し、2025年には約195万人で、その九割以上が美濃に住む。本書のどの工芸産業も同じ型を報告している——働き手の高齢化、後継ぎのない小さな会社、少ない弟子。そしてどれもが、かつて国内に売っていたものを訪れる人と海外に売ることで、その一部に応えようとしている。<a href=\"modern.html\">近代から現代へ</a>と<a href=\"future.html\">これからの二十年</a>を参照。",
          zh:"岐阜人口在 2000 年國勢調查時達到約 211 萬的高峰，2025 年約為 195 萬，九成以上住在美濃。本書所述的每一項工藝產業都呈現同樣的模式——從業者高齡化、小企業後繼無人、學徒減少——而每一項也都部分以此回應：把過去賣給國內市場的東西，轉而賣給旅人與海外。見<a href=\"modern.html\">從明治到現在</a>與<a href=\"future.html\">未來二十年</a>。" } },
        { t:"note", label:{ en:"About the numbers", ja:"数字について", zh:"關於數字" }, text:{
          en:"The shares and values on this page come from the sources named with them — Gifu Prefecture's statistics office, Seki city's industrial statistics, the Agency for Natural Resources and Energy and the Forestry Agency — and are for the years stated. Shares for small industries such as masu, agar and food replicas are the industries' own estimates.",
          ja:"この頁の割合と金額は、それぞれに記した出典——岐阜県統計課、関市の工業統計、資源エネルギー庁、林野庁——により、記した年のものである。枡、寒天、食品サンプルのような小さな産業の割合は、業界自身の推計である。",
          zh:"本頁的占比與金額取自各自註明的出處——岐阜縣統計課、關市工業統計、資源能源廳與林野廳——並以所記年份為準。枡、寒天、食物模型等小型產業的占比，為業界自身的估計。" } }
      ]
    },

    { t:"related", items:[
      { href:"makers.html", why:{ en:"The companies behind the figures.", ja:"数字の背後の会社。", zh:"數字背後的公司。" } },
      { href:"future.html", why:{ en:"Where the industries are going.", ja:"産業のゆくえ。", zh:"產業的走向。" } },
      { href:"tables.html", why:{ en:"The prefecture in numbers.", ja:"数字で見る県。", zh:"數字中的岐阜。" } },
      { href:"register.html", why:{ en:"The designated crafts.", ja:"指定工芸品。", zh:"指定工藝品。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- future */
GIFU.pages["future"] = {
  kicker: { en: "Journeys & Reference · 06", ja: "旅と資料 · 06", zh: "旅程與資料 · 06" },
  title:  { en: "The Next Twenty Years", ja: "これからの二十年", zh: "未來二十年" },
  jp: "森 · 人 · 技 · 道",
  lede: {
    en: "What the rest of this book describes is changing, and some of it quickly. The population is falling, the planted forests have reached the age of harvest with too few people to harvest them, the crafts are losing their masters faster than they gain apprentices, and a maglev railway, new detectors under the mountains and hotter summers are all on the way. This page sets out the pressures and the answers already visible. It is not a forecast, and where it looks ahead it says so.",
    ja: "本書のほかの頁が描くものは変わりつつあり、その一部は速い。人口は減り、人工林は伐りどきを迎えたのに伐る人が足りず、工芸は弟子を得るより速く親方を失い、リニアの鉄道、山の下の新しい検出器、より暑い夏が近づいている。この頁は、その圧力と、すでに見えている応答とを並べる。予測ではなく、先を見るところではそうと断る。",
    zh: "本書其他各頁所描述的事物正在改變，其中一些變得很快。人口在減少；人工林已到了採伐的年齡，卻沒有足夠的人手去伐；工藝失去師傅的速度快過收到學徒的速度；而一條磁浮鐵路、山底下新的偵測器，以及更熱的夏天，都已在路上。本頁列出這些壓力，以及已經看得見的回應。這不是預測；凡是展望未來之處，都會明言。"
  },
  body: [
    { t:"section", id:"people",
      title:{ en:"Fewer people", ja:"減る人", zh:"人口減少" }, jp:"人口",
      body:[
        { t:"p", text:{
          en:"Gifu's population peaked at about 2.11 million in 2000 and has fallen at every census since, to about 1.95 million in 2025. The loss is uneven: the cities of the southern plain, within commuting distance of Nagoya, hold up best, while the mountain villages of Hida and the upper valleys of Mino lose people fastest and grow oldest. The prefecture expects the decline to continue for decades. For the subjects of this book that means fewer apprentices, fewer customers at home, fewer hands to keep up a thatched roof or a village playhouse — and, in the most remote places, the question of whether a festival or a craft can go on at all.",
          ja:"岐阜の人口は2000年に約211万人の頂点に達し、以後は国勢調査のたびに減って、2025年には約195万人となった。減り方は一様ではない。名古屋へ通える南の平野の市は持ちこたえ、飛騨の山村や美濃の奥の谷は最も速く人を失い、最も速く老いる。県は減少が何十年も続くと見込んでいる。本書の主題にとってそれは、弟子が減り、国内の客が減り、茅葺きの屋根や村の芝居小屋を守る手が減ることを意味する。最も奥まった土地では、祭りや工芸がそもそも続けられるのかという問いにもなる。",
          zh:"岐阜人口在 2000 年達到約 211 萬的高峰，此後每次國勢調查都在減少，2025 年約為 195 萬。減少並不平均：南部平原上、可通勤到名古屋的城市撐得最好；飛驒的山村與美濃深處的河谷則人口流失最快、老化也最快。縣府預期減少將持續數十年。對本書的主題而言，這意味著學徒更少、國內顧客更少、維護茅草屋頂或村落戲棚的人手更少——在最偏遠的地方，甚至會出現祭典或工藝是否還能延續的問題。" } }
      ]
    },

    { t:"section", id:"forest",
      title:{ en:"A forest ready to cut", ja:"伐りどきの森", zh:"到了採伐期的森林" }, jp:"森林",
      body:[
        { t:"p", text:{
          en:"The hinoki and sugi planted after the Second World War are now mostly more than fifty years old: a large, growing resource with too few people and too little profit to harvest and replant it. The answers are already in place. Since 2012 residents have paid the prefecture's forest and environment tax, and since 2024 a national one as well; a law of 2010, widened in 2021, pushes timber into public and then all buildings; laminated and cross-laminated timber let domestic wood compete for large buildings; and Japan's timber self-sufficiency, below a fifth around 2000, recovered to about two-fifths by the early 2020s. The Gifu Academy of Forest Science and Culture at Mino, opened in 2001, trains foresters, builders and woodworkers. Whether the forests are thinned, harvested and replanted in the next twenty years, or simply left to grow, is the largest open question in this book.",
          ja:"戦後に植えられた檜と杉は、いまその多くが五十年を超えた。大きく育ちつづける資源であるのに、伐って植え直すための人も利益も足りない。応答はすでに用意されている。2012年から県民は県の森林・環境税を、2024年からは国の森林環境税も納めている。2010年の法律は公共建築に、2021年からはあらゆる建築に木を使うよう促し、集成材やCLTは大きな建物で国産材が競えるようにした。2000年前後に二割を割った日本の木材自給率は、2020年代の初めにはおよそ四割まで戻った。2001年に美濃市に開かれた岐阜県立森林文化アカデミーは、林業家、建築家、木工家を育てている。これからの二十年で森が間伐され、伐られ、植え直されるのか、それともただ育つにまかされるのか——それが本書で最も大きな、答えの出ていない問いである。",
          zh:"戰後種下的檜木與杉木，如今大多已超過五十年：這是一份龐大且仍在增長的資源，卻沒有足夠的人手與利潤去採伐和重新造林。對策已經就位。自 2012 年起，縣民繳納縣的森林與環境稅，自 2024 年起再加上國家的森林環境稅；2010 年的一項法律推動公共建築使用木材，2021 年擴及所有建築；集成材與直交集成板（CLT）讓國產木材得以在大型建築上競爭；日本的木材自給率在 2000 年前後跌破兩成，到 2020 年代初回升到約四成。2001 年在美濃市開校的岐阜縣立森林文化學院，培育林業人、建築人與木工。未來二十年，這些森林會被疏伐、採伐、重新造林，還是任其生長——這是本書中最大、仍懸而未決的問題。" } }
      ]
    },

    { t:"section", id:"crafts",
      title:{ en:"Crafts that must find new buyers", ja:"新しい買い手を探す技", zh:"必須尋找新買家的工藝" }, jp:"工芸",
      body:[
        { t:"p", text:{
          en:"The pattern is the same in every craft of this book: masters ageing, small workshops without successors, a home market that buys less. The answers are also shared. Seki has moved up-market into premium kitchen knives for export, where “made in Seki” carries weight. Mino paper has found a world market in the conservation of books and paintings. The Hida furniture makers sell to hotels, offices and buyers abroad, and train newcomers in schools and workshops in Takayama. Mino ware, whose everyday plates face cheaper imports, sells design and craft instead. And almost every craft now sells itself as an experience — a forging demonstration, a sheet of paper made by hand, a masu branded with a name.",
          ja:"本書のどの工芸でも型は同じである。親方は老い、小さな工房には後継ぎがなく、国内の市場は買う量を減らしている。応答もまた共通している。関は高級な包丁へ移り、「関製」の名が効く輸出に向かった。美濃の紙は、書物や絵画の修復という世界の市場を見つけた。飛騨の家具はホテルや事務所や海外の買い手に売り、高山の学校や工房で新しい担い手を育てている。日常の器が安い輸入品と競う美濃焼は、かわりにデザインと手仕事を売る。そしてほとんどの工芸が、いまや体験としても自らを売っている——鍛錬の公開、手で漉く一枚の紙、名入れの焼印を押した枡。",
          zh:"本書每一項工藝的模式都相同：師傅老去、小工坊後繼無人、國內市場買得越來越少。對策也相通。關轉向高級菜刀並走向出口市場，在那裡「關製」這塊招牌有份量。美濃紙在書籍與繪畫修復領域找到了世界市場。飛驒家具賣給飯店、辦公室與海外買家，並在高山的學校與工坊培育新人。日常餐具面臨廉價進口品競爭的美濃燒，則改賣設計與手工。而幾乎每一項工藝，如今也把自己當成體驗來賣——一場公開鍛刀、一張親手抄的紙、一個烙上名字的枡。" } }
      ]
    },

    { t:"section", id:"sake",
      title:{ en:"Sake", ja:"酒", zh:"酒" }, jp:"酒",
      body:[
        { t:"p", text:{
          en:"There are fewer breweries than there were, and fewer every decade, as Japan drinks less sake. But the houses that remain have changed more since the 1990s than in the century before: toward junmai and ginjō, local rice such as Hida Homare and Ibi-no-homare, traditional starters, small batches and, in some houses, brewing all year round. In December 2024 UNESCO inscribed the traditional knowledge and skills of sake-making with kōji mould in Japan as intangible cultural heritage, which may help the small houses abroad. See <a href=\"sake.html\">The Sake of Gifu</a>.",
          ja:"日本人が日本酒を飲まなくなるにつれ、酒蔵は減り、十年ごとにさらに減っている。だが残った蔵は、1990年代以降、それまでの一世紀よりも大きく変わった——純米や吟醸へ、ひだほまれや揖斐の誉のような地元の米へ、伝統の酒母へ、小さな仕込みへ、そしていくつかの蔵では四季醸造へ。2024年12月、ユネスコは「日本の伝統的酒造り」を無形文化遺産に記載した。これは小さな蔵が海外に出る助けになるかもしれない。<a href=\"sake.html\">岐阜の酒</a>を参照。",
          zh:"隨著日本人喝的清酒越來越少，酒藏也比過去更少，而且每十年都在減少。但留下來的酒藏，自 1990 年代以來的改變比之前一個世紀還大：轉向純米與吟釀，使用飛驒譽、揖斐之譽等在地米，採用傳統酒母、小批量釀造，部分酒藏更全年釀造。2024 年 12 月，聯合國教科文組織將「日本傳統麴菌釀酒的知識與技藝」列入非物質文化遺產，這或許能幫助小酒藏走向海外。見<a href=\"sake.html\">岐阜的酒</a>。" } }
      ]
    },

    { t:"section", id:"ways",
      title:{ en:"Roads, rails and science", ja:"道と鉄道と科学", zh:"道路、鐵路與科學" }, jp:"交通 · 研究",
      body:[
        { t:"p", text:{
          en:"A station of the Chūō Shinkansen maglev line between Tokyo and Nagoya is under construction near Nakatsugawa, a few kilometres from the Nakasendō; the opening date is not yet fixed, and the 2030s are the earliest now spoken of. When it opens, eastern Mino will be about an hour from Tokyo. Under the mountains of Kamioka, where Kamiokande and Super-Kamiokande made Nobel-winning discoveries, the far larger Hyper-Kamiokande is being built. And tourism, which has grown fastest in the Hida mountains since the expressway arrived in 2008, is now managed as well as encouraged, most visibly at Shirakawa-gō.",
          ja:"東京と名古屋を結ぶ中央新幹線（リニア）の駅が、中山道から数キロの中津川の近くに建設されている。開業の年はまだ定まらず、いま語られる最も早い時期は2030年代である。開業すれば、東美濃は東京から一時間ほどになる。カミオカンデとスーパーカミオカンデがノーベル賞に結びつく発見をした神岡の山の下では、はるかに大きなハイパーカミオカンデの建設が進む。そして2008年に高速道路が通じてから飛騨の山で最も速く伸びた観光は、いまや促すと同時に管理するものとなった。それが最もよく見えるのが白川郷である。",
          zh:"連接東京與名古屋的中央新幹線（磁浮）車站，正在距中山道數公里的中津川附近興建；開業日期尚未確定，目前所說最早的時間是 2030 年代。一旦開通，東美濃到東京將只需約一小時。在神岡的山底下——神岡探測器與超級神岡探測器曾在此做出獲得諾貝爾獎的發現——規模大得多的頂級神岡探測器正在建造。而自 2008 年高速公路通達以來在飛驒山區成長最快的觀光，如今在鼓勵之外也需要管理，白川鄉就是最明顯的例子。" } }
      ]
    },

    { t:"section", id:"climate",
      title:{ en:"Heat, snow and water", ja:"暑さと雪と水", zh:"酷暑、大雪與水" }, jp:"気候",
      body:[
        { t:"p", text:{
          en:"The basins of southern Mino already hold national heat records — Tajimi in 2007, Kanayama in Gero in 2018 — and the summers are getting hotter; the snow of Hida, on which the gasshō roofs, the ski slopes and the water of the rivers all depend, is becoming less reliable from year to year. The three rivers, tamed over three centuries of levees and works, remain the prefecture's oldest risk, and the flood of 1976 is within living memory. None of this is new to a prefecture whose landscape has always been made by water; the question for the next twenty years is how quickly it changes. See <a href=\"climate.html\">Heat &amp; Snow</a> and <a href=\"chisui.html\">Taming the Three Rivers</a>.",
          ja:"美濃の南の盆地はすでに国内の最高気温の記録を持ち——2007年の多治見、2018年の下呂市金山——夏はさらに暑くなっている。合掌の屋根も、スキー場も、川の水もそれに頼る飛騨の雪は、年ごとに当てにしにくくなっている。三百年の堤と工事で馴らされた三つの川は、いまも県の最も古い危険であり、1976年の水害はまだ人々の記憶のうちにある。水によって形づくられてきた県にとって、どれも新しいことではない。これからの二十年の問いは、それがどれほど速く変わるかである。<a href=\"climate.html\">暑さと雪</a>と<a href=\"chisui.html\">木曽三川の治水</a>を参照。",
          zh:"美濃南部的盆地已保有日本的高溫紀錄——2007 年的多治見、2018 年下呂市的金山——而夏天正變得更熱；飛驒的雪——合掌屋頂、滑雪場與河川之水都仰賴它——一年比一年難以預期。歷經三百年堤防與工程馴服的三條河，至今仍是全縣最古老的風險，1976 年的水災仍在人們的記憶之中。對一個地景一向由水塑造的縣來說，這些都不新鮮；未來二十年的問題，是變化來得有多快。見<a href=\"climate.html\">酷暑與大雪</a>與<a href=\"chisui.html\">木曾三川的治水</a>。" } }
      ]
    },

    { t:"note", label:{ en:"On looking ahead", ja:"先を見ることについて", zh:"關於展望" }, text:{
      en:"Everything on this page that is in the past or present tense is documented on the pages it links to. Everything about the future is an expectation, and a book written in 2026 will be wrong about some of it.",
      ja:"この頁のうち、過去や現在の形で書いたことは、リンク先の頁に記録がある。未来についてのことはすべて見込みであり、2026年に書かれた本はそのいくつかについて誤るだろう。",
      zh:"本頁以過去式或現在式陳述的一切，皆記載於所連結的頁面。凡關於未來者皆屬預期，而一本寫於 2026 年的書，必定會在其中某些地方出錯。" } },

    { t:"related", items:[
      { href:"economy.html", why:{ en:"The industries as they are now.", ja:"いまの産業。", zh:"產業的現況。" } },
      { href:"logging.html", why:{ en:"The forest question in detail.", ja:"森の問いを詳しく。", zh:"詳述森林的問題。" } },
      { href:"modern.html", why:{ en:"How the present came about.", ja:"現在に至る道。", zh:"現在是如何形成的。" } },
      { href:"chronology.html", why:{ en:"Everything in order.", ja:"すべてを順に。", zh:"依序排列的一切。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- chronology */
GIFU.pages["chronology"] = {
  kicker: { en: "Journeys & Reference · 07", ja: "旅と資料 · 07", zh: "旅程與資料 · 07" },
  title:  { en: "The Whole Chronology", ja: "総年表", zh: "總年表" },
  jp: "二十億年から2033年まで",
  lede: {
    en: "Every date in this book in one sequence, from the oldest stone in Japan to the next rebuilding of the Ise shrines. Each entry says in a sentence what happened and links to the page that tells it properly. Where the date is a tradition rather than a document, or where sources disagree, the linked page says so.",
    ja: "本書のすべての年を一つの流れに並べた。日本最古の石から、次の伊勢の神宮の遷宮まで。各項目は何が起きたかを一文で述べ、それをきちんと語る頁へつなぐ。年が文書ではなく伝えによるもの、資料のあいだで食い違うものについては、リンク先の頁でそう断っている。",
    zh: "把本書中所有的年代排成一條序列，從日本最古老的石頭，到下一次伊勢神宮的重建。每個條目以一句話說明發生了什麼，並連到完整講述的頁面。凡年代出自傳說而非文獻、或各資料說法不一之處，所連頁面皆有說明。"
  },
  body: [
    { t:"section", id:"deep",
      title:{ en:"Deep time", ja:"地質の時間", zh:"地質時間" }, jp:"地質",
      body:[
        { t:"timeline", items:[
          { year:{en:"≈ 2 bn years ago",ja:"約20億年前",zh:"約 20 億年前"}, title:{en:"The oldest stone",ja:"最古の石",zh:"最古老的石頭"},
            text:{en:"Gneiss forms that will end up as pebbles in the Kamiaso conglomerate at Hichisō, found in 1970 to be the oldest rock then known in Japan. See <a href=\"landform.html\">Mountains, Plains &amp; Rock</a>.",ja:"のちに七宗の上麻生礫岩の礫となる片麻岩ができる。1970年に、当時知られていた日本最古の岩石とわかった。<a href=\"landform.html\">山と平野と岩</a>を参照。",zh:"日後成為七宗上麻生礫岩中礫石的片麻岩形成；1970 年被確認為當時已知日本最古老的岩石。見<a href=\"landform.html\">山、平原與岩石</a>。"} },
          { year:{en:"274–252 m years ago",ja:"2億7400万〜2億5200万年前",zh:"2.74 億至 2.52 億年前"}, title:{en:"A reef near the equator",ja:"赤道近くの礁",zh:"赤道附近的礁"},
            text:{en:"The Akasaka limestone of Kinshōzan grows as a reef in the open ocean, to be carried to Japan on the sea floor.",ja:"金生山の赤坂石灰岩が外洋の礁として育ち、のちに海底に乗って日本へ運ばれる。",zh:"金生山的赤坂石灰岩在遠洋中以礁體形式生長，之後隨海底被帶到日本。"} },
          { year:{en:"85–68 m years ago",ja:"8500万〜6800万年前",zh:"8500 萬至 6800 萬年前"}, title:{en:"The Nōhi rhyolite",ja:"濃飛流紋岩",zh:"濃飛流紋岩"},
            text:{en:"Enormous eruptions lay pyroclastic flows hundreds of metres thick across central Gifu.",ja:"巨大な噴火が、厚さ数百メートルの火砕流を岐阜の中央部に積もらせる。",zh:"巨大的火山噴發在岐阜中部堆積出厚達數百公尺的火山碎屑流。"} }
        ] }
      ]
    },

    { t:"section", id:"ancient",
      title:{ en:"Ancient Mino and Hida", ja:"古代", zh:"古代" }, jp:"古墳から平安",
      body:[
        { t:"timeline", items:[
          { year:{en:"late 4th c.",ja:"4世紀末",zh:"4 世紀末"}, title:{en:"Hirui Ōtsuka tumulus",ja:"昼飯大塚古墳",zh:"晝飯大塚古墳"},
            text:{en:"The largest keyhole tomb in Gifu, 150 m long, is built at Ōgaki. See <a href=\"ancient.html\">Ancient Mino &amp; Hida</a>.",ja:"岐阜県最大の前方後円墳（長さ150m）が大垣に築かれる。<a href=\"ancient.html\">古代の美濃と飛騨</a>を参照。",zh:"岐阜最大的前方後圓墳（長 150 公尺）在大垣築成。見<a href=\"ancient.html\">古代的美濃與飛驒</a>。"} },
          { year:"672", title:{en:"The Jinshin War",ja:"壬申の乱",zh:"壬申之亂"},
            text:{en:"Prince Ōama raises Mino and seizes the Fuwa pass on his way to the throne as Emperor Tenmu.",ja:"大海人皇子が美濃の兵を起こし、不破の道を押さえて天武天皇として即位への道を開く。",zh:"大海人皇子在美濃起兵、扼守不破隘口，由此登上天武天皇之位。"} },
          { year:"702", title:{en:"Registers on Mino paper",ja:"美濃紙の戸籍",zh:"美濃紙上的戶籍"},
            text:{en:"Household registers for six Mino villages, written on Mino paper, survive in the Shōsōin. See <a href=\"washi.html\">Mino Washi</a>.",ja:"美濃紙に書かれた美濃の六つの里の戸籍が正倉院に残る。<a href=\"washi.html\">美濃和紙</a>を参照。",zh:"以美濃紙書寫的美濃六個村落戶籍，至今保存在正倉院。見<a href=\"washi.html\">美濃和紙</a>。"} },
          { year:"717", title:{en:"The Yōrō era",ja:"養老改元",zh:"改元養老"},
            text:{en:"Empress Genshō visits the spring at Tagi and names a new era “nurturing the aged”. See <a href=\"sake.html\">The Sake of Gifu</a>.",ja:"元正天皇が多度山の泉を訪れ、年号を「養老」と改める。<a href=\"sake.html\">岐阜の酒</a>を参照。",zh:"元正天皇造訪多度山之泉，將年號改為「養老」。見<a href=\"sake.html\">岐阜的酒</a>。"} },
          { year:"718", title:{en:"Carpenters instead of taxes",ja:"税のかわりに匠",zh:"以工匠代稅"},
            text:{en:"Hida sends carpenters to the capital in place of the usual taxes. See <a href=\"takumi.html\">Hida no Takumi</a>.",ja:"飛騨は通常の税のかわりに匠を都へ送る。<a href=\"takumi.html\">飛騨の匠</a>を参照。",zh:"飛驒改派工匠赴京，以代替一般的賦稅。見<a href=\"takumi.html\">飛驒工匠</a>。"} },
          { year:"741", title:{en:"Provincial temples",ja:"国分寺",zh:"國分寺"},
            text:{en:"Emperor Shōmu orders a temple in every province; Mino's stands in what is now Ōgaki, Hida's in Takayama.",ja:"聖武天皇が国ごとの寺の建立を命じる。美濃の国分寺はいまの大垣に、飛騨の国分寺は高山に建つ。",zh:"聖武天皇詔令各國建寺；美濃國分寺位於今大垣，飛驒國分寺位於高山。"} },
          { year:"789", title:{en:"The barriers abolished",ja:"三関の廃止",zh:"廢除三關"},
            text:{en:"The Fuwa barrier and the other two great barriers are formally abolished.",ja:"不破関をはじめとする三関が正式に廃される。",zh:"不破關與另外兩座大關正式廢止。"} }
        ] }
      ]
    },

    { t:"section", id:"medieval",
      title:{ en:"The medieval centuries", ja:"中世", zh:"中世" }, jp:"鎌倉から戦国",
      body:[
        { t:"timeline", items:[
          { year:"1159", title:{en:"Sceptres of yew",ja:"位山の笏",zh:"紫杉之笏"},
            text:{en:"The first record of court sceptres made from the yews of Kuraiyama. See <a href=\"carving.html\">Carving &amp; Lacquer</a>.",ja:"位山のイチイで宮廷の笏をつくった最初の記録。<a href=\"carving.html\">彫りと塗り</a>を参照。",zh:"以位山紫杉製作宮廷之笏的最早紀錄。見<a href=\"carving.html\">雕刻與漆藝</a>。"} },
          { year:"1313", title:{en:"Eihō-ji",ja:"永保寺",zh:"永保寺"},
            text:{en:"Musō Soseki founds the Zen temple at Tajimi; its Kannon hall of 1314 is a National Treasure. See <a href=\"medieval.html\">The Toki &amp; the Saitō</a>.",ja:"夢窓疎石が多治見に禅寺を開く。1314年の観音堂は国宝。<a href=\"medieval.html\">土岐氏と斎藤氏</a>を参照。",zh:"夢窗疏石在多治見創建禪寺；其 1314 年的觀音堂為國寶。見<a href=\"medieval.html\">土岐氏與齋藤氏</a>。"} },
          { year:{en:"14th c.",ja:"14世紀",zh:"14 世紀"}, title:{en:"Smiths at Seki",ja:"関の刀鍛冶",zh:"關的刀匠"},
            text:{en:"Swordsmiths are recorded at Seki, the beginning of the Mino tradition. See <a href=\"sword.html\">The Mino Sword</a>.",ja:"関に刀鍛冶の記録があらわれ、美濃伝が始まる。<a href=\"sword.html\">美濃伝の刀</a>を参照。",zh:"關開始出現刀匠的紀錄，美濃傳由此發端。見<a href=\"sword.html\">美濃傳之刀</a>。"} },
          { year:"1408", title:{en:"Hida's National Treasure",ja:"飛騨の国宝",zh:"飛驒的國寶"},
            text:{en:"The sutra repository of Ankoku-ji in Takayama is built. See <a href=\"architecture.html\">Building in Wood</a>.",ja:"高山の安国寺経蔵が建てられる。<a href=\"architecture.html\">木の建築</a>を参照。",zh:"高山安國寺經藏落成。見<a href=\"architecture.html\">木造建築</a>。"} },
          { year:"1468", title:{en:"Zuiryū-ji",ja:"瑞龍寺",zh:"瑞龍寺"},
            text:{en:"Saitō Myōchin, who ran Mino for the Toki, founds a temple for his lord in Gifu.",ja:"土岐氏のために美濃を切り回した斎藤妙椿が、主君のための寺を岐阜に開く。",zh:"為土岐氏掌理美濃的齋藤妙椿，在岐阜為其主君創建寺院。"} },
          { year:{en:"late 15th c.",ja:"15世紀後半",zh:"15 世紀後半"}, title:{en:"“Gifu” in monks' writing",ja:"禅僧の詩文の「岐阜」",zh:"禪僧筆下的「岐阜」"},
            text:{en:"Zen monks use Giyō and Gifu as literary names for the place. See <a href=\"names.html\">The Name “Gifu”</a>.",ja:"禅僧が「岐陽」「岐阜」をこの地の雅称として用いる。<a href=\"names.html\">「岐阜」という名</a>を参照。",zh:"禪僧以「岐陽」、「岐阜」作為此地的雅稱。見<a href=\"names.html\">「岐阜」之名</a>。"} },
          { year:"1556", title:{en:"The Battle of the Nagara River",ja:"長良川の戦い",zh:"長良川之戰"},
            text:{en:"Saitō Dōsan is killed by his son Yoshitatsu.",ja:"斎藤道三が子の義龍に討たれる。",zh:"齋藤道三遭其子義龍所殺。"} },
          { year:"1567", title:{en:"Nobunaga takes Inabayama",ja:"信長、稲葉山を落とす",zh:"信長攻下稻葉山"},
            text:{en:"Oda Nobunaga takes the castle, calls the town Gifu and frees the market of Kanō from its guilds. See <a href=\"nobunaga.html\">Nobunaga's Gifu</a>.",ja:"織田信長が城を落とし、町を岐阜と名づけ、加納の市を楽市とする。<a href=\"nobunaga.html\">信長の岐阜</a>を参照。",zh:"織田信長攻下城池，將城下命名為岐阜，並令加納市場成為樂市。見<a href=\"nobunaga.html\">信長的岐阜</a>。"} },
          { year:"1569", title:{en:"Fróis at Gifu",ja:"フロイスの岐阜訪問",zh:"佛洛伊斯造訪岐阜"},
            text:{en:"The Jesuit Luís Fróis is shown Nobunaga's palace and describes its four storeys.",ja:"イエズス会のルイス・フロイスが信長の居館に案内され、その四層を書き留める。",zh:"耶穌會士路易斯·佛洛伊斯受邀參觀信長居館，記下其四層樓閣。"} },
          { year:"1585", title:{en:"Kanamori takes Hida",ja:"金森長近の飛騨入り",zh:"金森長近入飛驒"},
            text:{en:"Hideyoshi's general Kanamori Nagachika conquers Hida and makes Takayama his castle town.",ja:"秀吉の命を受けた金森長近が飛騨を平定し、高山を城下町とする。",zh:"奉秀吉之命的金森長近平定飛驒，並以高山為城下町。"} },
          { year:"1586", title:{en:"The Tenshō earthquake",ja:"天正地震",zh:"天正地震"},
            text:{en:"A landslide buries the Uchigashima and their castle at Kaerikumo in Shirakawa. See <a href=\"landform.html\">Mountains, Plains &amp; Rock</a>.",ja:"山崩れが白川の帰雲城を内ヶ島氏もろとも埋める。<a href=\"landform.html\">山と平野と岩</a>を参照。",zh:"山崩將白川的歸雲城連同內島氏一起掩埋。見<a href=\"landform.html\">山、平原與岩石</a>。"} },
          { year:"1600", title:{en:"Sekigahara",ja:"関ヶ原の戦い",zh:"關原之戰"},
            text:{en:"Gifu Castle falls to the eastern army; on 15 September the decisive battle is fought at Sekigahara. See <a href=\"sekigahara.html\">Sekigahara</a>.",ja:"岐阜城が東軍に落ち、九月十五日、関ヶ原で天下分け目の戦いが行われる。<a href=\"sekigahara.html\">関ヶ原</a>を参照。",zh:"岐阜城落入東軍之手；九月十五日，決定天下的一戰在關原展開。見<a href=\"sekigahara.html\">關原</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"edo",
      title:{ en:"The Edo period", ja:"江戸時代", zh:"江戶時代" }, jp:"近世",
      body:[
        { t:"timeline", items:[
          { year:"1601", title:{en:"Gifu Castle abandoned",ja:"岐阜城の廃城",zh:"岐阜城廢城"},
            text:{en:"The castle on Kinkazan is given up; a new one is built at Kanō.",ja:"金華山の城は廃され、加納に新しい城が築かれる。",zh:"金華山上的城被廢棄，另於加納築新城。"} },
          { year:"1615", title:{en:"Owari takes the Kiso forests",ja:"尾張藩、木曽の森を得る",zh:"尾張藩取得木曾森林"},
            text:{en:"The Kiso valley and the Ura-Kiso villages are given to the Owari domain. See <a href=\"hinoki.html\">Hinoki &amp; the Kiso Five</a>.",ja:"木曽谷と裏木曽の村々が尾張藩に与えられる。<a href=\"hinoki.html\">檜と木曽五木</a>を参照。",zh:"木曾谷與裏木曾各村劃歸尾張藩。見<a href=\"hinoki.html\">檜木與木曾五木</a>。"} },
          { year:"1635", title:{en:"The Toda at Ōgaki",ja:"戸田氏の大垣入封",zh:"戶田氏入主大垣"},
            text:{en:"The Toda family takes Ōgaki, at 100,000 koku the largest domain in Mino. See <a href=\"edo.html\">The Edo Patchwork</a>.",ja:"戸田氏が大垣に入る。十万石で美濃最大の藩である。<a href=\"edo.html\">江戸時代の美濃・飛騨</a>を参照。",zh:"戶田氏入主大垣，十萬石，為美濃最大的藩。見<a href=\"edo.html\">江戶時代的美濃與飛驒</a>。"} },
          { year:"1665", title:{en:"Closed forests",ja:"留山",zh:"封山"},
            text:{en:"Owari closes its reserved forests to entry, one of the earliest forest-protection regimes in Japan.",ja:"尾張藩が留山への立ち入りを禁じる。日本で最も早い森林保護の制度の一つである。",zh:"尾張藩禁止進入保留林，這是日本最早的森林保護制度之一。"} },
          { year:"1689", title:{en:"Bashō at Ōgaki",ja:"芭蕉、大垣へ",zh:"芭蕉抵大垣"},
            text:{en:"The poet ends the journey of <em>Oku no Hosomichi</em> at Ōgaki.",ja:"俳人が『おくのほそ道』の旅を大垣で結ぶ。",zh:"俳人芭蕉在大垣結束《奧之細道》之旅。"} },
          { year:"1692", title:{en:"Hida under the shogun",ja:"飛騨、天領となる",zh:"飛驒成為幕府直轄"},
            text:{en:"The shogunate moves the Kanamori away and governs Hida directly from the Takayama Jin'ya for 176 years.",ja:"幕府が金森氏を移し、以後176年にわたり高山陣屋から飛騨を直接治める。",zh:"幕府將金森氏移封，此後 176 年自高山陣屋直接統治飛驒。"} },
          { year:"1708", title:{en:"The Kiso Five",ja:"木曽五木",zh:"木曾五木"},
            text:{en:"Owari forbids the felling of hinoki, sawara, asunaro and kōyamaki throughout the valley, and adds nezuko in 1728.",ja:"尾張藩が谷じゅうで檜・椹・翌檜・高野槙の伐採を禁じ、1728年に鼠子を加える。",zh:"尾張藩禁止在整個河谷砍伐檜木、花柏、羅漢柏、高野槙，1728 年再加入鼠子。"} },
          { year:"1754–55", title:{en:"The Hōreki river works",ja:"宝暦治水",zh:"寶曆治水"},
            text:{en:"Satsuma men under Hirata Yukie build levees and cut-offs on the lower rivers at ruinous cost. See <a href=\"chisui.html\">Taming the Three Rivers</a>.",ja:"平田靱負ひきいる薩摩の人々が、莫大な費用をかけて下流に堤と締切を築く。<a href=\"chisui.html\">木曽三川の治水</a>を参照。",zh:"平田靱負率領的薩摩人，以驚人的代價在下游修築堤防與截流工程。見<a href=\"chisui.html\">木曾三川的治水</a>。"} },
          { year:"1754–58", title:{en:"The Gujō uprising",ja:"郡上一揆",zh:"郡上一揆"},
            text:{en:"Peasants' protests end with the lord's domain confiscated and senior shogunal officials dismissed.",ja:"百姓の訴えは、藩主の改易と幕府の重臣の罷免に終わる。",zh:"農民的抗爭以藩主遭沒收領地、幕府高官被罷免告終。"} },
          { year:"1771–89", title:{en:"The Ōhara disturbances",ja:"大原騒動",zh:"大原騷動"},
            text:{en:"Three waves of uprisings in Hida against the intendant Ōhara and his son.",ja:"郡代の大原父子に対し、飛騨で三度にわたり一揆が起こる。",zh:"飛驒針對代官大原父子先後爆發三波起義。"} },
          { year:{en:"early 19th c.",ja:"19世紀初め",zh:"19 世紀初"}, title:{en:"Ichii ittōbori",ja:"一位一刀彫",zh:"一位一刀雕"},
            text:{en:"Matsuda Sukenaga of Takayama establishes the unpainted carving of yew. See <a href=\"carving.html\">Carving &amp; Lacquer</a>.",ja:"高山の松田亮長が、彩色しないイチイの彫刻を確立する。<a href=\"carving.html\">彫りと塗り</a>を参照。",zh:"高山的松田亮長確立了不上彩的紫杉雕刻。見<a href=\"carving.html\">雕刻與漆藝</a>。"} },
          { year:"1832", title:{en:"The Gifu Great Buddha",ja:"岐阜大仏",zh:"岐阜大佛"},
            text:{en:"After thirty-eight years the dry-lacquer Buddha of Shōhō-ji is completed. See <a href=\"faith.html\">Shrines &amp; Temples</a>.",ja:"三十八年をかけて正法寺の乾漆の大仏が完成する。<a href=\"faith.html\">社寺と信仰</a>を参照。",zh:"歷時三十八年，正法寺的乾漆大佛完成。見<a href=\"faith.html\">神社、寺院與信仰</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"meiji",
      title:{ en:"Meiji to 1945", ja:"明治から1945年まで", zh:"從明治到 1945 年" }, jp:"近代",
      body:[
        { t:"timeline", items:[
          { year:"1871", title:{en:"Gifu Prefecture formed",ja:"岐阜県の成立",zh:"岐阜縣成立"},
            text:{en:"The domains of Mino are merged into one prefecture. See <a href=\"names.html\">The Name “Gifu”</a>.",ja:"美濃の諸藩が一つの県にまとめられる。<a href=\"names.html\">「岐阜」という名</a>を参照。",zh:"美濃各藩合併為一縣。見<a href=\"names.html\">「岐阜」之名</a>。"} },
          { year:"1874", title:{en:"The first fossil paper",ja:"最初の化石の論文",zh:"第一篇化石論文"},
            text:{en:"Gümbel describes fusulinids from Kinshōzan, the first scientific paper on a Japanese fossil.",ja:"ギュンベルが金生山のフズリナを記載する。日本の化石についての最初の学術論文である。",zh:"居姆貝爾記載金生山的紡錘蟲，這是關於日本化石的第一篇學術論文。"} },
          { year:"1876", title:{en:"Hida joins; swords banned",ja:"飛騨の編入、廃刀令",zh:"飛驒併入、廢刀令"},
            text:{en:"Hida becomes part of Gifu, and the ban on wearing swords turns the Seki smiths to knives, razors and scissors.",ja:"飛騨が岐阜県に加わる。廃刀令により関の鍛冶は包丁や剃刀や鋏へ向かう。",zh:"飛驒併入岐阜縣；廢刀令使關的刀匠轉而製作菜刀、剃刀與剪刀。"} },
          { year:"1879", title:{en:"The Kusakabe house",ja:"日下部家住宅",zh:"日下部家住宅"},
            text:{en:"The Takayama merchant house is rebuilt after a fire by Kawajiri Jisuke. See <a href=\"takumi.html\">Hida no Takumi</a>.",ja:"高山の商家が大火のあと川尻治助の手で建て直される。<a href=\"takumi.html\">飛騨の匠</a>を参照。",zh:"高山的商家在火災後由川尻治助重建。見<a href=\"takumi.html\">飛驒工匠</a>。"} },
          { year:"1883", title:{en:"The Gifu butterfly",ja:"ギフチョウ",zh:"岐阜蝶"},
            text:{en:"Nawa Yasushi collects the swallowtail he names the Gifu butterfly. See <a href=\"wildlife.html\">Living Things</a>.",ja:"名和靖がのちにギフチョウと名づけるアゲハを採集する。<a href=\"wildlife.html\">生きもの</a>を参照。",zh:"名和靖採集到他命名為岐阜蝶的鳳蝶。見<a href=\"wildlife.html\">生物</a>。"} },
          { year:"1887–1912", title:{en:"The three rivers separated",ja:"木曽三川分流工事",zh:"木曾三川分流工程"},
            text:{en:"Under the Dutch engineer Johannis de Rijke the Kiso, Nagara and Ibi are given separate beds.",ja:"オランダ人技師デ・レイケのもとで、木曽川・長良川・揖斐川がそれぞれの川筋に分けられる。",zh:"在荷蘭工程師德・雷克指導下，木曾川、長良川與揖斐川被分入各自的河道。"} },
          { year:"1889", title:{en:"Gifu becomes a city",ja:"岐阜市の誕生",zh:"岐阜市誕生"},
            text:{en:"The town under Kinkazan becomes one of Japan's first cities.",ja:"金華山のふもとの町が、日本で最初の市の一つとなる。",zh:"金華山下的城鎮成為日本最早的市之一。"} },
          { year:"1890", title:{en:"Masu in Ōgaki",ja:"大垣の枡",zh:"大垣之枡"},
            text:{en:"A craftsman trained with a Nagoya cooper begins making masu in Ōgaki. See <a href=\"everyday.html\">Wood in Everyday Things</a>.",ja:"名古屋の桶屋で修業した職人が大垣で枡をつくり始める。<a href=\"everyday.html\">暮らしの木</a>を参照。",zh:"一位在名古屋桶店學藝的職人，開始在大垣製作枡。見<a href=\"everyday.html\">生活中的木</a>。"} },
          { year:"1891", title:{en:"The Nōbi earthquake",ja:"濃尾地震",zh:"濃尾地震"},
            text:{en:"The largest inland earthquake in Japan's recorded history raises the Neodani fault scarp.",ja:"記録に残る日本最大の内陸地震が、根尾谷断層の崖をつくる。",zh:"日本有紀錄以來最大的內陸地震，造就了根尾谷斷層崖。"} },
          { year:"1894", title:{en:"Kashimo Meiji-za",ja:"かしも明治座",zh:"加子母明治座"},
            text:{en:"Villagers build their playhouse of local hinoki. See <a href=\"kabuki.html\">Village Kabuki</a>.",ja:"村人が地元の檜で芝居小屋を建てる。<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>を参照。",zh:"村民以當地檜木建造戲棚。見<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>。"} },
          { year:"1908", title:{en:"Kai",ja:"貝印",zh:"貝印"},
            text:{en:"A pocket-knife maker is founded at Seki that will grow into one of Japan's largest blade companies.",ja:"関でポケットナイフの製造所が生まれ、のちに日本最大級の刃物の会社となる。",zh:"關誕生了一家摺疊小刀製造商，日後成長為日本最大的刀具公司之一。"} },
          { year:"1917", title:{en:"An airfield at Kakamigahara",ja:"各務原の飛行場",zh:"各務原機場"},
            text:{en:"The army opens an airfield on the plain; aircraft manufacturing follows.",ja:"陸軍が原野に飛行場を開き、航空機の製造が続く。",zh:"陸軍在原野上開設機場，隨後發展出飛機製造業。"} },
          { year:"1919", title:{en:"Nawa Insect Museum",ja:"名和昆虫博物館",zh:"名和昆蟲博物館"},
            text:{en:"Japan's oldest insect museum opens in Gifu Park.",ja:"日本最古の昆虫博物館が岐阜公園に開く。",zh:"日本最古老的昆蟲博物館在岐阜公園開館。"} },
          { year:"1920", title:{en:"Bentwood in Takayama",ja:"高山の曲木",zh:"高山的曲木"},
            text:{en:"Chūō Mokkō, later Hida Sangyō, is founded to make bentwood chairs. See <a href=\"furniture.html\">Hida Furniture</a>.",ja:"のちの飛騨産業、中央木工が曲木の椅子をつくるために興される。<a href=\"furniture.html\">飛騨の家具</a>を参照。",zh:"為製作曲木椅而創立的中央木工（後來的飛驒產業）成立。見<a href=\"furniture.html\">飛驒家具</a>。"} },
          { year:"1930", title:{en:"The Shino shard",ja:"志野の陶片",zh:"志野陶片"},
            text:{en:"Arakawa Toyozō finds a Shino shard at Mutabora in Kani, proving that Shino was made in Mino. See <a href=\"minoyaki.html\">Mino Ware</a>.",ja:"荒川豊蔵が可児の牟田洞で志野の陶片を見つけ、志野が美濃で焼かれたことを証す。<a href=\"minoyaki.html\">美濃焼</a>を参照。",zh:"荒川豐藏在可兒的牟田洞發現志野陶片，證明志野是在美濃燒製的。見<a href=\"minoyaki.html\">美濃燒</a>。"} },
          { year:"1933", title:{en:"A wooden keep at Gujō",ja:"郡上八幡城の木造再建",zh:"郡上八幡城木造重建"},
            text:{en:"The oldest wooden reconstruction of a castle keep in Japan is built at Gujō Hachiman.",ja:"郡上八幡に、日本最古の木造再建天守が建つ。",zh:"郡上八幡建起日本最古老的木造重建天守。"} },
          { year:"1934", title:{en:"The Takayama Line",ja:"高山本線の全通",zh:"高山本線全線通車"},
            text:{en:"The railway through the Hida gorges is completed. See <a href=\"roads.html\">The Nakasendō &amp; Old Roads</a>.",ja:"飛騨の峡谷を抜ける鉄道が全通する。<a href=\"roads.html\">中山道と街道</a>を参照。",zh:"穿越飛驒峽谷的鐵路全線通車。見<a href=\"roads.html\">中山道與古道</a>。"} },
          { year:"1935", title:{en:"Yairi",ja:"ヤイリ",zh:"Yairi"},
            text:{en:"Yairi Giichi opens his instrument workshop in Nagoya; it moves to Kani in 1945. See <a href=\"guitars.html\">Hand-made Guitars</a>.",ja:"矢入儀一が名古屋に楽器の工房を開き、1945年に可児へ移る。<a href=\"guitars.html\">手工ギター</a>を参照。",zh:"矢入儀一在名古屋開設樂器工坊，1945 年遷至可兒。見<a href=\"guitars.html\">手工吉他</a>。"} },
          { year:"1945", title:{en:"Air raids",ja:"空襲",zh:"空襲"},
            text:{en:"Gifu city is burned on the night of 9 July; Ōgaki and the Kakamigahara aircraft works are also bombed. See <a href=\"modern.html\">Meiji to Now</a>.",ja:"七月九日の夜、岐阜市が焼かれる。大垣と各務原の航空機工場も爆撃を受ける。<a href=\"modern.html\">近代から現代へ</a>を参照。",zh:"七月九日夜，岐阜市遭焚毀；大垣與各務原的飛機工廠也遭轟炸。見<a href=\"modern.html\">從明治到現在</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"postwar",
      title:{ en:"After the war", ja:"戦後", zh:"戰後" }, jp:"1945–2000",
      body:[
        { t:"timeline", items:[
          { year:"1951", title:{en:"AKARI",ja:"AKARI",zh:"AKARI"},
            text:{en:"Isamu Noguchi designs his paper lamps for the Gifu lantern trade. See <a href=\"lanterns.html\">Lanterns, Umbrellas &amp; Fans</a>.",ja:"イサム・ノグチが岐阜の提灯のために紙の照明をデザインする。<a href=\"lanterns.html\">提灯・和傘・団扇</a>を参照。",zh:"野口勇為岐阜的燈籠業設計紙燈。見<a href=\"lanterns.html\">燈籠、和傘與團扇</a>。"} },
          { year:"1955", title:{en:"Living National Treasure",ja:"人間国宝",zh:"人間國寶"},
            text:{en:"Arakawa Toyozō is among the first potters to be named, for Shino and Seto-guro.",ja:"荒川豊蔵が志野と瀬戸黒で、最初の人間国宝の陶芸家の一人となる。",zh:"荒川豐藏以志野與瀨戶黑，成為首批人間國寶陶藝家之一。"} },
          { year:"1956", title:{en:"Gifu Castle rebuilt",ja:"岐阜城の再建",zh:"岐阜城重建"},
            text:{en:"A reconstruction of the keep is built on Kinkazan.",ja:"金華山に天守が再建される。",zh:"金華山上重建天守。"} },
          { year:"1959", title:{en:"The Ise Bay typhoon; Takamine",ja:"伊勢湾台風、タカミネ",zh:"伊勢灣颱風；Takamine"},
            text:{en:"The typhoon floods the lower plain for months; a guitar maker who suffered in it moves to Sakashita and begins again. See <a href=\"chisui.html\">Taming the Three Rivers</a>.",ja:"台風が下流の平野を何か月も水に沈める。被災したギター職人が坂下に移り、再出発する。<a href=\"chisui.html\">木曽三川の治水</a>を参照。",zh:"颱風使下游平原淹水數月；一位在颱風中受災的吉他師傅遷往坂下重新開始。見<a href=\"chisui.html\">木曾三川的治水</a>。"} },
          { year:"1960", title:{en:"The Shōkawa cherries",ja:"荘川桜",zh:"莊川櫻"},
            text:{en:"Two great cherry trees are lifted above the rising waters of the Miboro Dam. See <a href=\"rivers.html\">Rivers &amp; Water</a>.",ja:"御母衣ダムの湛水を前に、二本の大桜が水面の上へ移される。<a href=\"rivers.html\">川と水</a>を参照。",zh:"兩棵大櫻樹在御母衣水壩蓄水前被移到水位之上。見<a href=\"rivers.html\">河川與水</a>。"} },
          { year:"1964", title:{en:"Shinkansen and expressway",ja:"新幹線と名神高速",zh:"新幹線與名神高速"},
            text:{en:"The Tōkaidō Shinkansen and the Meishin Expressway cross the plain at Sekigahara.",ja:"東海道新幹線と名神高速道路が関ケ原で平野を横切る。",zh:"東海道新幹線與名神高速公路在關原穿越平原。"} },
          { year:"1969", title:{en:"Honminoshi",ja:"本美濃紙",zh:"本美濃紙"},
            text:{en:"The papermakers' technique is designated an Important Intangible Cultural Property.",ja:"本美濃紙の技術が重要無形文化財に指定される。",zh:"本美濃紙的技術獲指定為重要無形文化財。"} },
          { year:"1971", title:{en:"Sister prefectures",ja:"姉妹県",zh:"姐妹縣"},
            text:{en:"Gifu and Kagoshima become sister prefectures in memory of the Hōreki works.",ja:"宝暦治水の縁で、岐阜県と鹿児島県が姉妹県となる。",zh:"因寶曆治水之緣，岐阜縣與鹿兒島縣結為姐妹縣。"} },
          { year:"1974", title:{en:"Oak Village",ja:"オークヴィレッジ",zh:"Oak Village"},
            text:{en:"Five young people from Tokyo found a woodworking community in Takayama.",ja:"東京の若者五人が高山に木工の共同体を興す。",zh:"五名來自東京的年輕人在高山創立木工社群。"} },
          { year:"1976", title:{en:"Flood and preservation",ja:"水害と保存",zh:"水災與保存"},
            text:{en:"On 12 September the Nagara breaks its levee at Anpachi; the same year Ogimachi at Shirakawa-gō becomes one of Japan's first preservation districts.",ja:"九月十二日、長良川が安八で堤を切る。同じ年、白川郷の荻町は日本で最初の伝統的建造物群保存地区の一つとなる。",zh:"九月十二日，長良川在安八潰堤；同年，白川鄉荻町成為日本首批傳統建造物群保存地區之一。"} },
          { year:"1978", title:{en:"Mino ware designated",ja:"美濃焼の指定",zh:"美濃燒獲指定"},
            text:{en:"Mino ware becomes a national traditional craft; Mino washi follows in 1985.",ja:"美濃焼が国の伝統的工芸品となり、美濃和紙が1985年に続く。",zh:"美濃燒成為國家傳統工藝品；美濃和紙於 1985 年跟進。"} },
          { year:"1983", title:{en:"Kamiokande",ja:"カミオカンデ",zh:"神岡探測器"},
            text:{en:"A detector is built in the Kamioka mine; in February 1987 it catches neutrinos from a supernova. See <a href=\"metal.html\">Metal in Gifu</a>.",ja:"神岡鉱山に検出器が建設され、1987年2月、超新星からのニュートリノをとらえる。<a href=\"metal.html\">岐阜の金属</a>を参照。",zh:"神岡礦山內建成偵測器；1987 年 2 月捕捉到來自超新星的微中子。見<a href=\"metal.html\">岐阜的金屬</a>。"} },
          { year:"1995", title:{en:"World Heritage",ja:"世界遺産",zh:"世界遺產"},
            text:{en:"Shirakawa-gō is inscribed with Gokayama; the Nagara estuary barrage is completed. See <a href=\"shirakawago.html\">Shirakawa-gō</a>.",ja:"白川郷が五箇山とともに世界遺産に登録され、長良川河口堰が完成する。<a href=\"shirakawago.html\">白川郷</a>を参照。",zh:"白川鄉與五箇山一同列入世界遺產；長良川河口堰完工。見<a href=\"shirakawago.html\">白川鄉</a>。"} },
          { year:"1996", title:{en:"Super-Kamiokande",ja:"スーパーカミオカンデ",zh:"超級神岡探測器"},
            text:{en:"The larger detector begins; in 1998 it shows that neutrinos have mass.",ja:"より大きな検出器が動き出し、1998年にニュートリノに質量があることを示す。",zh:"更大的偵測器啟用；1998 年證明微中子具有質量。"} },
          { year:"2000", title:{en:"Population peaks",ja:"人口の頂点",zh:"人口高峰"},
            text:{en:"The census counts about 2.11 million people in Gifu, the most it has ever had.",ja:"国勢調査が岐阜の人口を約211万人と数える。これまでで最も多い。",zh:"國勢調查統計岐阜人口約 211 萬，為歷來最多。"} }
        ] }
      ]
    },

    { t:"section", id:"now",
      title:{ en:"The twenty-first century", ja:"二十一世紀", zh:"二十一世紀" }, jp:"2001–",
      body:[
        { t:"timeline", items:[
          { year:"2001", title:{en:"A forest academy",ja:"森林文化アカデミー",zh:"森林文化學院"},
            text:{en:"The Gifu Academy of Forest Science and Culture opens at Mino.",ja:"岐阜県立森林文化アカデミーが美濃市に開校する。",zh:"岐阜縣立森林文化學院在美濃市開校。"} },
          { year:"2005", title:{en:"Magome joins Gifu",ja:"馬籠、岐阜県へ",zh:"馬籠併入岐阜縣"},
            text:{en:"Yamaguchi village crosses the prefectural border to join Nakatsugawa.",ja:"山口村が県境を越えて中津川市と合併する。",zh:"山口村越過縣界併入中津川市。"} },
          { year:"2007", title:{en:"40.9 °C",ja:"40.9℃",zh:"40.9 °C"},
            text:{en:"Tajimi takes the national temperature record. See <a href=\"climate.html\">Heat &amp; Snow</a>.",ja:"多治見が国内の最高気温の記録を得る。<a href=\"climate.html\">暑さと雪</a>を参照。",zh:"多治見創下日本最高氣溫紀錄。見<a href=\"climate.html\">酷暑與大雪</a>。"} },
          { year:"2008", title:{en:"Through the mountains",ja:"山を抜ける道",zh:"穿越山嶺"},
            text:{en:"The Tōkai-Hokuriku Expressway is completed and the Tokuyama Dam, Japan's largest reservoir, is finished; Hida furniture gains its regional trademarks.",ja:"東海北陸自動車道が全通し、日本最大の貯水池・徳山ダムが完成する。飛騨の家具が地域団体商標を得る。",zh:"東海北陸自動車道全線通車，日本最大的水庫德山水壩完工；飛驒家具取得地域團體商標。"} },
          { year:"2011", title:{en:"Gifu Castle site",ja:"岐阜城跡",zh:"岐阜城跡"},
            text:{en:"About 209 ha of Kinkazan is designated a National Historic Site.",ja:"金華山の約209ヘクタールが国の史跡に指定される。",zh:"金華山約 209 公頃獲指定為國家史跡。"} },
          { year:"2012", title:{en:"A tax for the forest",ja:"森のための税",zh:"為森林而設的稅"},
            text:{en:"Residents begin paying the prefecture's forest and environment tax; Kitamachi in Gujō Hachiman becomes a preservation district. See <a href=\"logging.html\">Logging &amp; Forestry</a>.",ja:"県民が県の森林・環境税を納め始める。郡上八幡北町が伝統的建造物群保存地区となる。<a href=\"logging.html\">林業</a>を参照。",zh:"縣民開始繳納縣的森林與環境稅；郡上八幡北町成為傳統建造物群保存地區。見<a href=\"logging.html\">林業</a>。"} },
          { year:"2014", title:{en:"Ontake; washi",ja:"御嶽山、和紙",zh:"御嶽山；和紙"},
            text:{en:"Mount Ontake erupts without warning on 27 September; UNESCO inscribes washi, Honminoshi among it. See <a href=\"mountains.html\">Sacred Peaks</a>.",ja:"九月二十七日、御嶽山が前ぶれなく噴火する。ユネスコが本美濃紙を含む和紙を記載する。<a href=\"mountains.html\">霊峰と山岳信仰</a>を参照。",zh:"九月二十七日，御嶽山毫無預警地噴發；聯合國教科文組織將包括本美濃紙在內的和紙列入名錄。見<a href=\"mountains.html\">靈峰與山岳信仰</a>。"} },
          { year:"2015", title:{en:"Ayu, a roof of hinoki and a Nobel",ja:"鮎、檜の屋根、ノーベル賞",zh:"香魚、檜木屋頂與諾貝爾獎"},
            text:{en:"The Nagara's ayu become a Globally Important Agricultural Heritage System; Gifu Media Cosmos opens under its hinoki roof; Kajita Takaaki shares the Nobel Prize for the Super-Kamiokande result.",ja:"長良川の鮎が世界農業遺産となる。ぎふメディアコスモスが檜の屋根の下に開く。梶田隆章がスーパーカミオカンデの成果でノーベル賞を分かち合う。",zh:"長良川香魚獲認定為世界農業遺產；岐阜媒體宇宙在檜木屋頂下開館；梶田隆章以超級神岡探測器的成果共同獲得諾貝爾獎。"} },
          { year:"2016", title:{en:"Floats on UNESCO's list",ja:"屋台行事のユネスコ記載",zh:"屋台行事列入名錄"},
            text:{en:"The float festivals of Takayama, Furukawa and Ōgaki are inscribed as intangible cultural heritage. See <a href=\"festivals.html\">Festivals &amp; Floats</a>.",ja:"高山・古川・大垣の屋台行事が無形文化遺産に記載される。<a href=\"festivals.html\">祭りと屋台</a>を参照。",zh:"高山、古川與大垣的屋台行事列入非物質文化遺產。見<a href=\"festivals.html\">祭典與屋台</a>。"} },
          { year:"2018", title:{en:"41.0 °C",ja:"41.0℃",zh:"41.0 °C"},
            text:{en:"Kanayama in Gero reaches 41.0 °C; a Mizunami brewery moves to year-round brewing.",ja:"下呂市金山が41.0℃に達する。瑞浪の酒蔵が四季醸造に移る。",zh:"下呂市金山氣溫達 41.0 °C；瑞浪的一家酒藏改為四季釀造。"} },
          { year:"2020", title:{en:"A museum at Sekigahara",ja:"関ケ原の記念館",zh:"關原紀念館"},
            text:{en:"The Gifu Sekigahara Battlefield Memorial Museum opens.",ja:"岐阜関ケ原古戦場記念館が開館する。",zh:"岐阜關原古戰場紀念館開館。"} },
          { year:"2024", title:{en:"Sake on UNESCO's list",ja:"酒造りのユネスコ記載",zh:"釀酒列入名錄"},
            text:{en:"UNESCO inscribes the traditional knowledge and skills of sake-making with kōji mould in Japan; the national forest environment tax begins.",ja:"ユネスコが日本の伝統的酒造りを記載する。国の森林環境税が始まる。",zh:"聯合國教科文組織將日本傳統麴菌釀酒技藝列入名錄；國家森林環境稅開始徵收。"} },
          { year:"2025", title:{en:"Timber for 2033",ja:"2033年のための木",zh:"為 2033 年伐木"},
            text:{en:"On 5 June hinoki for the next rebuilding of the Ise shrines are felled in the national forest at Kashimo. See <a href=\"hinoki.html\">Hinoki &amp; the Kiso Five</a>.",ja:"六月五日、次の伊勢の神宮の遷宮のための檜が加子母の国有林で伐られる。<a href=\"hinoki.html\">檜と木曽五木</a>を参照。",zh:"六月五日，為下一次伊勢神宮重建所用的檜木在加子母國有林伐下。見<a href=\"hinoki.html\">檜木與木曾五木</a>。"} },
          { year:"2033", title:{en:"The next rebuilding",ja:"次の遷宮",zh:"下一次遷宮"},
            text:{en:"The sixty-third rebuilding of the Ise shrines is due, in part with Gifu hinoki.",ja:"伊勢の神宮の第六十三回の遷宮が予定され、その木の一部は岐阜の檜である。",zh:"伊勢神宮第六十三次遷宮預定舉行，所用木材有一部分是岐阜的檜木。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"history.html", why:{ en:"The same story told as prose.", ja:"同じ物語を文章で。", zh:"以文字講述同一段歷史。" } },
      { href:"people.html", why:{ en:"The people behind the dates.", ja:"年の背後の人々。", zh:"年代背後的人物。" } },
      { href:"figures.html", why:{ en:"Every diagram in the book.", ja:"本書のすべての図版。", zh:"本書所有圖表。" } },
      { href:"sources.html", why:{ en:"Where the dates come from.", ja:"年の出どころ。", zh:"年代的出處。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- tables */
GIFU.pages["tables"] = {
  kicker: { en: "Journeys & Reference · 08", ja: "旅と資料 · 08", zh: "旅程與資料 · 08" },
  title:  { en: "Reference Tables", ja: "早見表", zh: "速查表" },
  jp: "数字と一覧",
  lede: {
    en: "The numbers and lists of this book in one place: the prefecture at a glance, its rivers and peaks, its heritage listings and designated crafts, its preserved townscapes, its festival year and the old measures that still name a serving of sake. Every figure carries its year and source here as on the page it comes from, and each table links back to that page.",
    ja: "本書の数字と一覧を一か所に集めた。県の概要、川と山、遺産の登録と指定工芸品、保存された町並み、祭りの一年、そしていまも酒の一杯を名づける古い量の単位。どの数字も、出どころの頁と同じく年と出典を添え、各表はその頁へつないである。",
    zh: "把本書的數字與清單集中在一處：全縣概況、河川與山峰、遺產登錄與指定工藝品、保存的町並、祭典的一年，以及至今仍用來稱呼一杯酒的古老量制。每個數字都與其出處頁面一樣附上年份與來源，每張表也都連回該頁。"
  },
  body: [
    { t:"section", id:"glance",
      title:{ en:"The prefecture at a glance", ja:"県の概要", zh:"全縣概況" }, jp:"概要",
      body:[
        { t:"table",
          cols:[{en:"Measure",ja:"項目",zh:"項目"},{en:"Value",ja:"値",zh:"數值"},{en:"Year and source",ja:"年・出典",zh:"年份與來源"}],
          rows:[
            [{en:"Area",ja:"面積",zh:"面積"},{en:"10,621 km² (7th of 47)",ja:"10,621 km²（全国7位）",zh:"10,621 km²（全國第 7）"},{en:"Gifu Prefecture, 2025",ja:"岐阜県、2025年",zh:"岐阜縣，2025 年"}],
            [{en:"Population",ja:"人口",zh:"人口"},{en:"≈ 1.95 million; 184 per km²",ja:"約195万人、1 km²あたり184人",zh:"約 195 萬人；每 km² 184 人"},{en:"Gifu Prefecture, 2025",ja:"岐阜県、2025年",zh:"岐阜縣，2025 年"}],
            [{en:"Population peak",ja:"人口の頂点",zh:"人口高峰"},{en:"≈ 2.11 million",ja:"約211万人",zh:"約 211 萬人"},{en:"Census, 2000",ja:"国勢調査、2000年",zh:"國勢調查，2000 年"}],
            [{en:"Forest",ja:"森林",zh:"森林"},{en:"861,169 ha; 81% of the land (2nd after Kōchi)",ja:"861,169 ha、県土の81%（高知県に次ぐ2位）",zh:"861,169 ha；占土地 81%（僅次於高知）"},{en:"Forestry Agency, 31 March 2022",ja:"林野庁、2022年3月31日",zh:"林野廳，2022 年 3 月 31 日"}],
            [{en:"Highest point",ja:"最高地点",zh:"最高點"},{en:"Oku-Hotakadake, 3,190 m",ja:"奥穂高岳 3,190 m",zh:"奧穗高岳 3,190 m"},{en:"—",ja:"—",zh:"—"}],
            [{en:"Lowest land",ja:"最低地",zh:"最低地"},{en:"Below sea level, Kaizu",ja:"海面下（海津市）",zh:"海平面以下（海津市）"},{en:"—",ja:"—",zh:"—"}],
            [{en:"Municipalities",ja:"市町村",zh:"市町村"},{en:"42: 21 cities, 19 towns, 2 villages",ja:"42：21市・19町・2村",zh:"42：21 市、19 町、2 村"},{en:"Gifu Prefecture",ja:"岐阜県",zh:"岐阜縣"}],
            [{en:"Largest municipality",ja:"最大の市町村",zh:"最大的市町村"},{en:"Takayama, 2,178 km², the largest in Japan",ja:"高山市 2,178 km²（全国最大）",zh:"高山市 2,178 km²（全國最大）"},{en:"Takayama City",ja:"高山市",zh:"高山市"}],
            [{en:"Hydroelectric potential",ja:"包蔵水力",zh:"可開發水力"},{en:"13,861 GWh a year (1st)",ja:"年13,861 GWh（全国1位）",zh:"每年 13,861 GWh（全國第 1）"},{en:"Agency for Natural Resources and Energy",ja:"資源エネルギー庁",zh:"資源能源廳"}]
          ] },
        { t:"tiny", text:{
          en:"See <a href=\"index.html\">Overview</a>, <a href=\"forests.html\">The Forests</a> and <a href=\"landform.html\">Mountains, Plains &amp; Rock</a>.",
          ja:"<a href=\"index.html\">概観</a>、<a href=\"forests.html\">森林</a>、<a href=\"landform.html\">山と平野と岩</a>を参照。",
          zh:"見<a href=\"index.html\">總覽</a>、<a href=\"forests.html\">森林</a>與<a href=\"landform.html\">山、平原與岩石</a>。" } }
      ]
    },

    { t:"section", id:"rivers",
      title:{ en:"The three rivers", ja:"木曽三川", zh:"木曾三川" }, jp:"河川",
      body:[
        { t:"table",
          caption:{en:"Length and basin area of the three rivers (Ministry of Land, Infrastructure, Transport and Tourism). See <a href=\"rivers.html\">Rivers &amp; Water</a>.",ja:"三川の長さと流域面積（国土交通省）。<a href=\"rivers.html\">川と水</a>を参照。",zh:"三條河川的長度與流域面積（國土交通省）。見<a href=\"rivers.html\">河川與水</a>。"},
          cols:[{en:"River",ja:"川",zh:"河川"},{en:"Length",ja:"延長",zh:"長度"},{en:"Basin",ja:"流域面積",zh:"流域面積"},{en:"Source",ja:"源流",zh:"源頭"}],
          numCols:[1,2],
          rows:[
            [{en:"Kiso",ja:"木曽川",zh:"木曾川"},"229 km","5,275 km²",{en:"Mount Hachimori, Nagano",ja:"鉢盛山（長野県）",zh:"鉢盛山（長野縣）"}],
            [{en:"Nagara",ja:"長良川",zh:"長良川"},"166 km","1,985 km²",{en:"Dainichigatake, Gujō",ja:"大日ヶ岳（郡上市）",zh:"大日岳（郡上市）"}],
            [{en:"Ibi",ja:"揖斐川",zh:"揖斐川"},"121 km","1,840 km²",{en:"Kanmuriyama, Ibigawa",ja:"冠山（揖斐川町）",zh:"冠山（揖斐川町）"}]
          ] }
      ]
    },

    { t:"section", id:"peaks",
      title:{ en:"High peaks", ja:"高い山", zh:"高峰" }, jp:"山岳",
      body:[
        { t:"table",
          caption:{en:"Some of the high peaks on or near Gifu's borders. See <a href=\"mountains.html\">Sacred Peaks</a>.",ja:"岐阜の県境やその近くの高峰の一部。<a href=\"mountains.html\">霊峰と山岳信仰</a>を参照。",zh:"岐阜縣界上或附近的部分高峰。見<a href=\"mountains.html\">靈峰與山岳信仰</a>。"},
          cols:[{en:"Peak",ja:"山",zh:"山峰"},{en:"Height",ja:"標高",zh:"海拔"},{en:"Note",ja:"備考",zh:"備註"}],
          numCols:[1],
          rows:[
            [{en:"Oku-Hotakadake",ja:"奥穂高岳",zh:"奧穗高岳"},"3,190 m",{en:"Highest point in Gifu; third-highest in Japan",ja:"県内最高地点、日本第三位",zh:"岐阜最高點；日本第三高峰"}],
            [{en:"Ontake",ja:"御嶽山",zh:"御嶽山"},"3,067 m",{en:"Nagano border above Gero; erupted 2014",ja:"下呂の上の長野県境、2014年噴火",zh:"下呂上方的長野縣界；2014 年噴發"}],
            [{en:"Norikura (Kengamine)",ja:"乗鞍岳（剣ヶ峰）",zh:"乘鞍岳（劍峰）"},"3,026 m",{en:"A road reaches 2,702 m at Tatamidaira",ja:"畳平（2,702 m）まで道路が通じる",zh:"道路可達疊平（2,702 m）"}],
            [{en:"Kasagatake",ja:"笠ヶ岳",zh:"笠岳"},"2,898 m",{en:"Above Oku-Hida",ja:"奥飛騨の上",zh:"奧飛驒上方"}],
            [{en:"Hakusan",ja:"白山",zh:"白山"},"2,702 m",{en:"Ishikawa border; one of the three sacred mountains of Japan",ja:"石川県境、日本三霊山の一つ",zh:"石川縣界；日本三靈山之一"}]
          ] }
      ]
    },

    { t:"section", id:"heritage",
      title:{ en:"Heritage listings", ja:"遺産の登録", zh:"遺產登錄" }, jp:"世界遺産 · 無形文化遺産 · 農業遺産",
      body:[
        { t:"table",
          caption:{en:"International and national recognitions discussed in this book. See <a href=\"register.html\">Crafts at a Glance</a>.",ja:"本書で扱う国際的・全国的な登録と認定。<a href=\"register.html\">工芸一覧</a>を参照。",zh:"本書所論及的國際與全國性登錄與認定。見<a href=\"register.html\">工藝一覽</a>。"},
          cols:[{en:"What",ja:"対象",zh:"對象"},{en:"Listing",ja:"登録・認定",zh:"登錄或認定"},{en:"Year",ja:"年",zh:"年份"}],
          numCols:[2],
          rows:[
            [{en:"Shirakawa-gō (with Gokayama)",ja:"白川郷（五箇山とともに）",zh:"白川鄉（與五箇山一同）"},{en:"UNESCO World Heritage",ja:"ユネスコ世界遺産",zh:"聯合國教科文組織世界遺產"},"1995"],
            [{en:"Honminoshi paper",ja:"本美濃紙",zh:"本美濃紙"},{en:"Important Intangible Cultural Property; UNESCO (Washi)",ja:"重要無形文化財、ユネスコ（和紙）",zh:"重要無形文化財；聯合國教科文組織（和紙）"},"1969 · 2014"],
            [{en:"Ayu of the Nagara",ja:"清流長良川の鮎",zh:"清流長良川的香魚"},{en:"Globally Important Agricultural Heritage System",ja:"世界農業遺産",zh:"世界農業遺產"},"2015"],
            [{en:"Takayama, Furukawa and Ōgaki float festivals",ja:"高山・古川・大垣の祭り",zh:"高山、古川與大垣的祭典"},{en:"UNESCO (Yama, Hoko, Yatai)",ja:"ユネスコ（山・鉾・屋台行事）",zh:"聯合國教科文組織（山、鉾、屋台行事）"},"2016"],
            [{en:"The Hida takumi",ja:"飛騨の匠",zh:"飛驒工匠"},{en:"Japan Heritage story",ja:"日本遺産",zh:"日本遺產"},"2016"],
            [{en:"Gujō Odori; Kanzu no Kake-odori",ja:"郡上踊・寒水の掛踊",zh:"郡上舞；寒水掛舞"},{en:"UNESCO (Furyū-odori)",ja:"ユネスコ（風流踊）",zh:"聯合國教科文組織（風流舞）"},"2022"],
            [{en:"Sake-making with kōji mould",ja:"日本の伝統的酒造り",zh:"日本傳統麴菌釀酒"},{en:"UNESCO intangible heritage (national)",ja:"ユネスコ無形文化遺産（全国）",zh:"聯合國教科文組織非物質文化遺產（全國）"},"2024"]
          ] }
      ]
    },

    { t:"section", id:"crafts",
      title:{ en:"National traditional crafts", ja:"国の伝統的工芸品", zh:"國家傳統工藝品" }, jp:"伝統的工芸品",
      body:[
        { t:"table",
          caption:{en:"Gifu's six crafts designated under the national Traditional Craft Industries Act. See <a href=\"register.html\">Crafts at a Glance</a>.",ja:"国の伝統的工芸品産業振興法による岐阜の六品目。<a href=\"register.html\">工芸一覧</a>を参照。",zh:"依國家《傳統工藝品產業振興法》指定的岐阜六項工藝。見<a href=\"register.html\">工藝一覽</a>。"},
          cols:[{en:"Craft",ja:"品目",zh:"品項"},{en:"Where",ja:"産地",zh:"產地"},{en:"Designated",ja:"指定",zh:"指定"}],
          numCols:[2],
          rows:[
            [{en:"Hida Shunkei lacquerware",ja:"飛騨春慶",zh:"飛驒春慶"},{en:"Takayama, Hida",ja:"高山市・飛騨市",zh:"高山市、飛驒市"},"1975"],
            [{en:"Ichii ittōbori carving",ja:"一位一刀彫",zh:"一位一刀雕"},{en:"Takayama, Hida, Gero",ja:"高山市・飛騨市・下呂市",zh:"高山市、飛驒市、下呂市"},"1975"],
            [{en:"Mino ware",ja:"美濃焼",zh:"美濃燒"},{en:"Tajimi, Toki, Mizunami, Kani",ja:"多治見市・土岐市・瑞浪市・可児市",zh:"多治見市、土岐市、瑞浪市、可兒市"},"1978"],
            [{en:"Mino washi",ja:"美濃和紙",zh:"美濃和紙"},{en:"Mino",ja:"美濃市",zh:"美濃市"},"1985"],
            [{en:"Gifu lanterns",ja:"岐阜提灯",zh:"岐阜提燈"},{en:"Gifu city and around",ja:"岐阜市ほか",zh:"岐阜市及周邊"},"1995"],
            [{en:"Gifu wagasa umbrellas",ja:"岐阜和傘",zh:"岐阜和傘"},{en:"Gifu city (Kanō)",ja:"岐阜市（加納）",zh:"岐阜市（加納）"},{en:"most recent",ja:"最新",zh:"最新"}]
          ] }
      ]
    },

    { t:"section", id:"towns",
      title:{ en:"Preserved townscapes", ja:"重要伝統的建造物群保存地区", zh:"重要傳統建造物群保存地區" }, jp:"町並み",
      body:[
        { t:"table",
          caption:{en:"Gifu's national Important Preservation Districts for Groups of Traditional Buildings, in order of selection. See <a href=\"towns.html\">Old Towns</a>.",ja:"岐阜県の重要伝統的建造物群保存地区（選定順）。<a href=\"towns.html\">町並み</a>を参照。",zh:"岐阜縣的國家重要傳統建造物群保存地區（依選定順序）。見<a href=\"towns.html\">老街町並</a>。"},
          cols:[{en:"District",ja:"地区",zh:"地區"},{en:"Type",ja:"種別",zh:"類型"},{en:"Selected",ja:"選定",zh:"選定"}],
          numCols:[2],
          rows:[
            [{en:"Ogimachi, Shirakawa village",ja:"白川村荻町",zh:"白川村荻町"},{en:"Mountain village",ja:"山村集落",zh:"山村聚落"},"1976"],
            [{en:"Sanmachi, Takayama",ja:"高山市三町",zh:"高山市三町"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"1979"],
            [{en:"Honmachi, Iwamura (Ena)",ja:"恵那市岩村町本通り",zh:"惠那市岩村町本通"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"1998"],
            [{en:"Mino-machi, Mino",ja:"美濃市美濃町",zh:"美濃市美濃町"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"1999"],
            [{en:"Shimo-ninomachi & Ōshinmachi, Takayama",ja:"高山市下二之町大新町",zh:"高山市下二之町大新町"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"2004"],
            [{en:"Kitamachi, Gujō-Hachiman",ja:"郡上市郡上八幡北町",zh:"郡上市郡上八幡北町"},{en:"Castle town",ja:"城下町",zh:"城下町"},"2012"]
          ] }
      ]
    },

    { t:"section", id:"calendar",
      title:{ en:"The festival year", ja:"祭りの一年", zh:"祭典的一年" }, jp:"年中行事",
      body:[
        { t:"table",
          caption:{en:"Principal festivals and seasons. Dates are those usually observed; check each year. See <a href=\"festivals.html\">Festivals &amp; Floats</a>.",ja:"主な祭りと季節。日付は通例のもので、年ごとに確かめてほしい。<a href=\"festivals.html\">祭りと屋台</a>を参照。",zh:"主要祭典與季節。日期為慣例，請每年確認。見<a href=\"festivals.html\">祭典與屋台</a>。"},
          cols:[{en:"When",ja:"時期",zh:"時間"},{en:"What",ja:"行事",zh:"活動"},{en:"Where",ja:"場所",zh:"地點"}],
          rows:[
            [{en:"6 January",ja:"1月6日",zh:"1 月 6 日"},{en:"Nagataki Ennen",ja:"長滝の延年",zh:"長瀧延年"},{en:"Nagataki Hakusan Jinja, Gujō",ja:"郡上市・長滝白山神社",zh:"郡上市長瀧白山神社"}],
            [{en:"14–15 April",ja:"4月14〜15日",zh:"4 月 14–15 日"},{en:"Takayama festival (spring)",ja:"高山祭（春）",zh:"高山祭（春）"},{en:"Takayama",ja:"高山",zh:"高山"}],
            [{en:"19–20 April",ja:"4月19〜20日",zh:"4 月 19–20 日"},{en:"Furukawa festival",ja:"古川祭",zh:"古川祭"},{en:"Hida-Furukawa",ja:"飛騨古川",zh:"飛驒古川"}],
            [{en:"Weekend nearest 15 May",ja:"5月15日に近い土日",zh:"最接近 5 月 15 日的週末"},{en:"Ōgaki festival",ja:"大垣祭",zh:"大垣祭"},{en:"Ōgaki",ja:"大垣",zh:"大垣"}],
            [{en:"11 May – 15 October",ja:"5月11日〜10月15日",zh:"5 月 11 日至 10 月 15 日"},{en:"Cormorant fishing",ja:"鵜飼",zh:"鵜飼"},{en:"Gifu city; Oze, Seki",ja:"岐阜市・関市小瀬",zh:"岐阜市；關市小瀨"}],
            [{en:"Mid-July – early September",ja:"7月中旬〜9月上旬",zh:"7 月中旬至 9 月上旬"},{en:"Gujō Odori",ja:"郡上おどり",zh:"郡上舞"},{en:"Gujō-Hachiman",ja:"郡上八幡",zh:"郡上八幡"}],
            [{en:"9–10 October",ja:"10月9〜10日",zh:"10 月 9–10 日"},{en:"Takayama festival (autumn)",ja:"高山祭（秋）",zh:"高山祭（秋）"},{en:"Takayama",ja:"高山",zh:"高山"}],
            [{en:"October",ja:"10月",zh:"10 月"},{en:"Seki cutlery festival; Mino washi Akari Art Exhibition; doburoku festivals",ja:"関刃物まつり、美濃和紙あかりアート展、どぶろく祭",zh:"關刀具祭、美濃和紙燈光藝術展、濁酒祭"},{en:"Seki; Mino; Shirakawa-gō",ja:"関・美濃・白川郷",zh:"關、美濃、白川鄉"}]
          ] }
      ]
    },

    { t:"section", id:"measures",
      title:{ en:"The old measures", ja:"古い量の単位", zh:"古老的量制" }, jp:"尺貫法",
      body:[
        { t:"table",
          caption:{en:"The volume measures of the masu, still used for sake and rice. Metric values are approximate. See <a href=\"everyday.html#masu\">Wood in Everyday Things</a>.",ja:"枡の容量の単位。いまも酒と米に使われる。メートル法の値はおおよそ。<a href=\"everyday.html#masu\">暮らしの木</a>を参照。",zh:"枡的容量單位，至今仍用於酒與米。公制數值為概略值。見<a href=\"everyday.html#masu\">生活中的木</a>。"},
          cols:[{en:"Unit",ja:"単位",zh:"單位"},{en:"Equals",ja:"換算",zh:"換算"},{en:"About",ja:"約",zh:"約"},{en:"Today",ja:"いま",zh:"今日"}],
          numCols:[2],
          rows:[
            [{en:"gō",ja:"合",zh:"合"},{en:"—",ja:"—",zh:"—"},"180 ml",{en:"One serving of sake; a small tokkuri",ja:"酒一杯、小さな徳利",zh:"一份酒；小德利"}],
            [{en:"shō",ja:"升",zh:"升"},{en:"10 gō",ja:"10合",zh:"10 合"},"1.8 L",{en:"The large sake bottle, isshōbin",ja:"一升瓶",zh:"一升瓶"}],
            [{en:"to",ja:"斗",zh:"斗"},{en:"10 shō",ja:"10升",zh:"10 升"},"18 L",{en:"A celebration cask of sake often holds four to",ja:"鏡開きの酒樽は四斗樽が多い",zh:"鏡開用的酒樽多為四斗樽"}],
            [{en:"koku",ja:"石",zh:"石"},{en:"10 to = 100 shō",ja:"10斗＝100升",zh:"10 斗＝100 升"},"180 L",{en:"The old unit of a domain's wealth in rice",ja:"藩の石高の単位",zh:"藩國以米計算財富的單位"}]
          ] }
      ]
    },

    { t:"related", items:[
      { href:"chronology.html", why:{ en:"The dates in order.", ja:"年を順に。", zh:"依序排列的年代。" } },
      { href:"economy.html", why:{ en:"The industries' numbers.", ja:"産業の数字。", zh:"產業的數字。" } },
      { href:"glossary.html", why:{ en:"The words.", ja:"言葉。", zh:"詞彙。" } },
      { href:"sources.html", why:{ en:"Where the numbers come from.", ja:"数字の出どころ。", zh:"數字的出處。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- faq */
GIFU.pages["faq"] = {
  kicker: { en: "Journeys & Reference · 09", ja: "旅と資料 · 09", zh: "旅程與資料 · 09" },
  title:  { en: "Questions & Answers", ja: "よくある問い", zh: "常見問答" },
  jp: "率直な答え",
  lede: {
    en: "Short, direct answers to the questions a reader or a visitor is most likely to ask, each with a pointer to the page that treats it properly. Where the honest answer is that the sources disagree, this page says so.",
    ja: "読者や旅人が最も尋ねそうな問いへの、短く率直な答え。それぞれに、きちんと扱う頁への案内を添えた。正直な答えが「資料が食い違う」であるところでは、そう述べる。",
    zh: "針對讀者或旅人最可能提出的問題，給出簡短直接的答覆，並各自附上深入處理該主題的頁面。凡誠實的答案是「各資料說法不一」之處，本頁便如此直說。"
  },
  body: [
    { t:"section", id:"place",
      title:{ en:"The place", ja:"土地", zh:"土地" }, jp:"基本",
      body:[
        { t:"defs", items:[
          { term:{en:"How do you say “Gifu”, and what does it mean?",ja:"「岐阜」はどう読み、何を意味するのか。",zh:"「岐阜」怎麼唸？是什麼意思？"},
            def:{en:"Two short syllables, <em>Gi-fu</em>, evenly stressed. 岐 is the first character of Qishan, the mountain from which the Zhou dynasty rose, and 阜, “hill”, is the second of Qufu, the birthplace of Confucius. Tradition says Oda Nobunaga gave the town the name in 1567, but Zen monks had used it as a literary name decades before. See <a href=\"names.html\">The Name “Gifu”</a>.",ja:"「ぎふ」の短い二音で、強弱はない。「岐」は周の興った岐山の、「阜」（丘）は孔子の生地・曲阜の字である。伝えでは1567年に織田信長が町に名づけたとされるが、禅僧は何十年も前から雅称として用いていた。<a href=\"names.html\">「岐阜」という名</a>を参照。",zh:"兩個短音節「Gi-fu」，輕重平均。「岐」取自周朝興起的岐山，「阜」（山丘）取自孔子出生地曲阜。傳說 1567 年由織田信長為城鎮命名，但禪僧早在數十年前便已把它當作雅稱使用。見<a href=\"names.html\">「岐阜」之名</a>。"} },
          { term:{en:"Are Mino and Hida different places?",ja:"美濃と飛騨は別の土地なのか。",zh:"美濃與飛驒是不同的地方嗎？"},
            def:{en:"They were two provinces for twelve centuries and have been one prefecture only since 1876. Mino, in the south, is plain and river country, warm and populous; Hida, in the north, is mountains, snow and forest, with about two-fifths of the land and 7 per cent of the people. They still differ in dialect, food and outlook. See <a href=\"provinces.html\">Mino and Hida</a>.",ja:"十二世紀にわたって別々の国であり、一つの県になったのは1876年である。南の美濃は平野と川の土地で、暖かく人が多い。北の飛騨は山と雪と森の土地で、県土の約五分の二と人口の7%を占める。いまも言葉と食と気風が違う。<a href=\"provinces.html\">美濃と飛騨</a>を参照。",zh:"它們作為兩個國存在了十二個世紀，直到 1876 年才合為一縣。南邊的美濃是平原與河川之地，溫暖而人口稠密；北邊的飛驒是山、雪與森林之地，約占全縣五分之二的土地與 7% 的人口。兩地至今在方言、飲食與氣質上仍有差異。見<a href=\"provinces.html\">美濃與飛驒</a>。"} },
          { term:{en:"Is Seki the same place as Sekigahara?",ja:"関と関ケ原は同じ場所か。",zh:"關與關原是同一個地方嗎？"},
            def:{en:"No. Seki is the blade town in the middle of the prefecture; Sekigahara, “the plain of the barrier”, is the battlefield at the western edge, named after the Fuwa barrier of the ancient highway. Seki's own name is also said to come from a barrier, though the details are not documented. See <a href=\"seki.html\">Seki, Town of Blades</a> and <a href=\"sekigahara.html\">Sekigahara</a>.",ja:"違う。関は県の中央の刃物の町で、関ケ原（「関の原」）は西端の古戦場であり、古代の街道の不破関にちなむ。関の名もまた関所に由来するといわれるが、詳しいことは文書に残っていない。<a href=\"seki.html\">刃物のまち・関</a>と<a href=\"sekigahara.html\">関ヶ原</a>を参照。",zh:"不是。關是位於縣中部的刀刃之城；關原（「關之原」）是西端的古戰場，名稱來自古代大道上的不破關。關的地名據說也源自一座關卡，但詳情並無文獻記載。見<a href=\"seki.html\">刀刃之城・關</a>與<a href=\"sekigahara.html\">關原</a>。"} },
          { term:{en:"Why “the land of clear streams”?",ja:"なぜ「清流の国」なのか。",zh:"為何稱為「清流之國」？"},
            def:{en:"Because of the Nagara, routinely listed with the Shimanto and the Kakita as one of Japan's three great clear streams, and the many clear rivers that join the Kiso and the Ibi. The prefecture has taken the phrase as its own name in recent years. See <a href=\"rivers.html\">Rivers &amp; Water</a>.",ja:"四万十川・柿田川とともに日本三大清流の一つに数えられる長良川と、木曽川や揖斐川に注ぐ多くの清らかな川のゆえである。県は近年この言葉を自らの呼び名としている。<a href=\"rivers.html\">川と水</a>を参照。",zh:"因為長良川——它常與四萬十川、柿田川並列為日本三大清流——以及許多匯入木曾川與揖斐川的清澈河流。縣府近年以此作為自稱。見<a href=\"rivers.html\">河川與水</a>。"} },
          { term:{en:"How hot, and how snowy?",ja:"どれほど暑く、どれほど雪が降るのか。",zh:"有多熱？雪有多大？"},
            def:{en:"Both extremes. Tajimi reached 40.9 °C in 2007 and Kanayama in Gero 41.0 °C in 2018; Shirakawa in the north is a special heavy-snowfall area, where two to three metres on the ground is not unusual. See <a href=\"climate.html\">Heat &amp; Snow</a>.",ja:"両極端である。多治見は2007年に40.9℃、下呂市金山は2018年に41.0℃を記録した。北の白川は特別豪雪地帯で、積雪二、三メートルは珍しくない。<a href=\"climate.html\">暑さと雪</a>を参照。",zh:"兩個極端都有。多治見在 2007 年達 40.9 °C，下呂市金山在 2018 年達 41.0 °C；北部的白川屬特別豪雪地帶，積雪兩三公尺並不稀奇。見<a href=\"climate.html\">酷暑與大雪</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"history",
      title:{ en:"History", ja:"歴史", zh:"歷史" }, jp:"歴史",
      body:[
        { t:"defs", items:[
          { term:{en:"Why does Gifu matter in Japanese history?",ja:"なぜ岐阜は日本史で重要なのか。",zh:"岐阜在日本史上為何重要？"},
            def:{en:"Because the routes between east and west Japan pass through it. The gap at Sekigahara decided the war of 672 and the battle of 1600, and from Gifu Castle, taken in 1567, Nobunaga began the unification of the country. See <a href=\"history.html\">History at a Glance</a>.",ja:"東西の日本を結ぶ道がここを通るからである。関ケ原の狭間は672年の乱と1600年の戦いを決し、1567年に落とした岐阜城から信長は天下統一を始めた。<a href=\"history.html\">歴史の概観</a>を参照。",zh:"因為連接東西日本的道路都經過這裡。關原的隘口決定了 672 年的戰亂與 1600 年的戰役；信長則從 1567 年攻下的岐阜城開始統一天下。見<a href=\"history.html\">歷史概觀</a>。"} },
          { term:{en:"How big was the battle of Sekigahara?",ja:"関ヶ原の戦いの規模はどれほどか。",zh:"關原之戰的規模有多大？"},
            def:{en:"The figures usually quoted — about 80,000 on each side and six hours of fighting — come from accounts written after the event and are weak evidence. What is certain is that the eastern army won on 15 September 1600 and that Tokugawa Ieyasu ruled Japan afterwards. See <a href=\"sekigahara.html\">Sekigahara</a>.",ja:"よく引かれる数字——両軍それぞれ約八万、戦いは六時間——は後に書かれた記録によるもので、証拠としては弱い。確かなのは、1600年9月15日に東軍が勝ち、以後徳川家康が天下を治めたことである。<a href=\"sekigahara.html\">関ヶ原</a>を参照。",zh:"常被引用的數字——雙方各約八萬人、戰鬥六小時——出自事後寫成的記載，證據力薄弱。可以確定的是，東軍於 1600 年 9 月 15 日獲勝，此後由德川家康統治日本。見<a href=\"sekigahara.html\">關原</a>。"} },
          { term:{en:"Why are Gifu and Kagoshima sister prefectures?",ja:"なぜ岐阜県と鹿児島県は姉妹県なのか。",zh:"岐阜縣與鹿兒島縣為何是姐妹縣？"},
            def:{en:"Because in 1754–55 the shogunate made the Satsuma domain, far to the south, build levees and cut-offs on the lower rivers at its own ruinous cost; dozens of its men died, and their leader Hirata Yukie died when the work was done. The two prefectures have been sister prefectures since 1971. See <a href=\"chisui.html\">Taming the Three Rivers</a>.",ja:"1754年から55年にかけ、幕府は遠い南の薩摩藩に、自らの莫大な費用で下流の堤と締切を築かせた。数十人が亡くなり、総奉行の平田靱負も工事の完了後に没した。両県は1971年から姉妹県である。<a href=\"chisui.html\">木曽三川の治水</a>を参照。",zh:"因為 1754 至 55 年間，幕府令遠在南方的薩摩藩自費在下游修築堤防與截流工程，代價慘重；數十人喪生，總奉行平田靱負也在工程完成後身亡。兩縣自 1971 年起結為姐妹縣。見<a href=\"chisui.html\">木曾三川的治水</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"crafts",
      title:{ en:"Wood, blades, paper and clay", ja:"木・刃物・紙・土", zh:"木、刀、紙與土" }, jp:"工芸",
      body:[
        { t:"defs", items:[
          { term:{en:"Why so much woodwork?",ja:"なぜこれほど木の仕事が多いのか。",zh:"為何有這麼多木工？"},
            def:{en:"Because 81 per cent of the prefecture is forest, including some of the best hinoki in Japan, and because Hida sent carpenters to the capital in place of taxes from the eighth century. The skills passed from temples to merchant houses, festival floats, furniture, masu and guitars. See <a href=\"wood.html\">The Land of Wood</a>.",ja:"県の81%が森林で、そのなかに日本で最良の檜の一部があり、飛騨が八世紀から税のかわりに匠を都へ送ってきたからである。その技は寺から商家へ、祭りの屋台へ、家具、枡、ギターへと伝わった。<a href=\"wood.html\">木の国</a>を参照。",zh:"因為全縣 81% 是森林，其中有日本最好的檜木，也因為飛驒從八世紀起便以派遣工匠赴京代替賦稅。這些技藝從寺院傳到商家、祭典屋台，再到家具、枡與吉他。見<a href=\"wood.html\">木之國</a>。"} },
          { term:{en:"Are Seki kitchen knives made like swords?",ja:"関の包丁は刀のようにつくられるのか。",zh:"關的菜刀是像刀劍那樣做的嗎？"},
            def:{en:"The idea is the swordsmith's — a hard edge in a softer body — but most Seki knives are made from laminated stainless steel supplied by specialist mills, cut, hardened in controlled furnaces, then ground and sharpened, with hand work at the grinding and edging. Swords themselves are still forged from traditional steel by a few licensed smiths. See <a href=\"knives.html\">The Kitchen Knife</a> and <a href=\"forging.html\">Making a Sword</a>.",ja:"考え方は刀鍛冶のもの——柔らかな地に硬い刃——だが、関の包丁の多くは専門の製鋼所がつくる積層ステンレス鋼から切り出し、管理された炉で焼き入れし、研いで刃を付ける。研ぎと刃付けには手仕事が残る。刀そのものは、いまも少数の認可を受けた刀匠が伝統の鋼から鍛える。<a href=\"knives.html\">包丁</a>と<a href=\"forging.html\">作刀</a>を参照。",zh:"其構想來自刀匠——較軟的刀身夾著堅硬的刃——但多數關的菜刀是以專業鋼廠供應的複合不鏽鋼切割成形，在控溫爐中淬火，再研磨開刃，手工仍保留在研磨與開刃的工序。刀劍本身則仍由少數持證刀匠以傳統鋼材鍛造。見<a href=\"knives.html\">廚刀</a>與<a href=\"forging.html\">鍛刀</a>。"} },
          { term:{en:"Can I watch a sword being forged?",ja:"作刀を見られるか。",zh:"可以觀看鍛刀嗎？"},
            def:{en:"Yes, at the Seki Traditional Swordsmith Museum on its demonstration days, which include the first forging of the year in January and the October cutlery festival. Check the dates before going. See <a href=\"museums.html\">Museums &amp; Workshops</a>.",ja:"できる。関鍛冶伝承館の公開日——正月の打ち初めや十月の刃物まつりを含む——に見られる。出かける前に日取りを確かめてほしい。<a href=\"museums.html\">博物館と工房</a>を参照。",zh:"可以。在關鍛冶傳承館的公開日——包括一月的開年鍛刀與十月的刀具祭——即可觀看。出發前請確認日期。見<a href=\"museums.html\">博物館與工坊</a>。"} },
          { term:{en:"What makes Mino paper special?",ja:"美濃和紙は何が特別なのか。",zh:"美濃和紙有何特別？"},
            def:{en:"It is thin, even and strong, and has been made in the valley for at least thirteen centuries — the registers of 702 in the Shōsōin are written on it. Its strictest form, Honminoshi, uses only Japanese kōzo and traditional methods and was inscribed by UNESCO in 2014. See <a href=\"washi.html\">Mino Washi</a>.",ja:"薄く、むらがなく、強い。少なくとも十三世紀にわたりこの谷で漉かれ、正倉院の702年の戸籍もこの紙に書かれている。最も厳格な本美濃紙は国産の楮と伝統の製法だけを用い、2014年にユネスコの無形文化遺産に記載された。<a href=\"washi.html\">美濃和紙</a>を参照。",zh:"它輕薄、均勻而強韌，在這條河谷中至少已抄製了十三個世紀——正倉院 702 年的戶籍就寫在這種紙上。其最嚴格的形式「本美濃紙」只使用日本產楮與傳統製法，2014 年列入聯合國教科文組織非物質文化遺產。見<a href=\"washi.html\">美濃和紙</a>。"} },
          { term:{en:"Is Mino ware one style?",ja:"美濃焼は一つの様式なのか。",zh:"美濃燒是單一風格嗎？"},
            def:{en:"No. The name covers the Momoyama tea wares — Shino, Oribe, Ki-Seto, Seto-guro — and also most of the plain everyday plates and cups made in Japan: Gifu's share of the country's shipments is 71.1 per cent for Western-style tableware (2025). See <a href=\"minoyaki.html\">Mino Ware</a>.",ja:"違う。この名は桃山の茶陶——志野、織部、黄瀬戸、瀬戸黒——を指すとともに、日本でつくられる日常の皿や碗の大半をも含む。洋飲食器の全国出荷に占める岐阜の割合は71.1%（2025年）である。<a href=\"minoyaki.html\">美濃焼</a>を参照。",zh:"不是。這個名稱既包括桃山時代的茶陶——志野、織部、黃瀨戶、瀨戶黑——也涵蓋日本所產大部分的日常素面盤杯：岐阜在全國西式餐具出貨中占 71.1%（2025 年）。見<a href=\"minoyaki.html\">美濃燒</a>。"} },
          { term:{en:"Are Gifu guitars really hand-made?",ja:"岐阜のギターは本当に手づくりなのか。",zh:"岐阜的吉他真的是手工製作的嗎？"},
            def:{en:"At K.Yairi in Kani as much as possible is done by hand. Takamine at Sakashita is a larger maker, famous for the pickup it developed in the late 1970s. See <a href=\"guitars.html\">Hand-made Guitars</a>.",ja:"可児のK.ヤイリでは、できるかぎりを手で行う。坂下のタカミネはより大きなメーカーで、1970年代末に開発したピックアップで知られる。<a href=\"guitars.html\">手工ギター</a>を参照。",zh:"可兒的 K.Yairi 盡可能以手工製作。坂下的 Takamine 規模較大，以 1970 年代末開發的拾音器聞名。見<a href=\"guitars.html\">手工吉他</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"sake",
      title:{ en:"Sake", ja:"酒", zh:"酒" }, jp:"酒",
      body:[
        { t:"defs", items:[
          { term:{en:"What does Gifu sake taste like?",ja:"岐阜の酒はどんな味か。",zh:"岐阜的酒是什麼味道？"},
            def:{en:"There is no single style. The Hida houses tend to a clean, firm sake for rich mountain food; the Mino houses range from full and slightly sweet to the famously dry sake of Tajimi. See <a href=\"sake.html\">The Sake of Gifu</a> and <a href=\"directory.html\">A Directory of Gifu Sake</a>.",ja:"一つの型はない。飛騨の蔵は山の濃い料理に合う、きれいで締まった酒に傾き、美濃の蔵は、ふくよかでやや甘い酒から、多治見の名高い辛口まで幅がある。<a href=\"sake.html\">岐阜の酒</a>と<a href=\"directory.html\">岐阜酒名鑑</a>を参照。",zh:"沒有單一風格。飛驒的酒藏傾向潔淨緊實、搭配濃郁山區料理的酒；美濃的酒藏則從飽滿微甜，到多治見那著名的辛口都有。見<a href=\"sake.html\">岐阜的酒</a>與<a href=\"directory.html\">岐阜酒名鑑</a>。"} },
          { term:{en:"Can I drink doburoku?",ja:"どぶろくは飲めるのか。",zh:"喝得到濁酒嗎？"},
            def:{en:"Yes, at the Shirakawa-gō doburoku festivals in autumn, where the shrines brew it under a licence for ritual use and give it to everyone present, and from farm inns in the special zones that have allowed small-scale doburoku since 2003. Most of the cloudy sake in shops is nigori, which is strained and legally sake. See <a href=\"doburoku.html\">Doburoku, Masu &amp; Cups</a>.",ja:"飲める。秋の白川郷のどぶろく祭では、神社が神事の免許で醸し、居合わせた人すべてにふるまう。2003年から小規模などぶろくを認める特区の農家民宿でも飲める。店に並ぶ白く濁った酒の多くはにごり酒で、こしてあるので法律上は清酒である。<a href=\"doburoku.html\">どぶろく・枡・酒器</a>を参照。",zh:"喝得到。秋季白川鄉的濁酒祭，神社依祭儀許可釀造，並分送給在場的每一個人；自 2003 年起允許小規模釀造濁酒的特區裡，農家民宿也有供應。店裡多數的白濁酒其實是經過過濾、法律上屬於清酒的白濁清酒（にごり酒）。見<a href=\"doburoku.html\">濁酒、枡與酒器</a>。"} },
          { term:{en:"Why drink from a wooden box?",ja:"なぜ木の箱で飲むのか。",zh:"為何用木盒喝酒？"},
            def:{en:"The masu was Japan's measure of rice and sake before it was a cup; it survives as the vessel of celebration, and its name sounds like the word for “increase”. Ōgaki makes about eight in ten. See <a href=\"everyday.html#masu\">Wood in Everyday Things</a>.",ja:"枡は杯である前に米と酒の量りであった。いまは祝いの器として残り、その名は「増す」に通じる。大垣が約八割をつくる。<a href=\"everyday.html#masu\">暮らしの木</a>を参照。",zh:"枡在成為酒器之前，是日本量米與量酒的量器；如今作為喜慶之器留存下來，其名與「增加」同音。大垣生產約八成。見<a href=\"everyday.html#masu\">生活中的木</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"visiting",
      title:{ en:"Visiting", ja:"訪ねる", zh:"造訪" }, jp:"旅",
      body:[
        { t:"defs", items:[
          { term:{en:"When is the best time to go?",ja:"いつ行くのがよいか。",zh:"什麼時候去最好？"},
            def:{en:"April for the spring festivals of Takayama and Furukawa; May to October for the cormorant fishing; July to September for the Gujō dances; October for the autumn festival, the cutlery festival and the doburoku festivals; winter for snow on the gasshō roofs. See <a href=\"tables.html#calendar\">Reference Tables</a>.",ja:"四月は高山と古川の春祭り、五月から十月は鵜飼、七月から九月は郡上おどり、十月は秋の祭りと刃物まつりとどぶろく祭、冬は合掌の屋根の雪。<a href=\"tables.html#calendar\">早見表</a>を参照。",zh:"四月看高山與古川的春季祭典；五月到十月看鵜飼；七月到九月看郡上舞；十月有秋季祭典、刀具祭與濁酒祭；冬天看合掌屋頂上的雪。見<a href=\"tables.html#calendar\">速查表</a>。"} },
          { term:{en:"Can I stay in a gasshō house?",ja:"合掌造りに泊まれるか。",zh:"可以住在合掌造裡嗎？"},
            def:{en:"Yes: several farmhouses in Ogimachi are inns. A night there lets you see the village after the day visitors have gone. See <a href=\"shirakawago.html\">Shirakawa-gō</a>.",ja:"泊まれる。荻町のいくつかの農家が民宿を営んでいる。一泊すれば、日帰りの人が去ったあとの村を見られる。<a href=\"shirakawago.html\">白川郷</a>を参照。",zh:"可以：荻町有好幾戶農家經營民宿。住上一晚，就能看到當日遊客離去後的村莊。見<a href=\"shirakawago.html\">白川鄉</a>。"} },
          { term:{en:"How do I get around without a car?",ja:"車なしでどう回るか。",zh:"沒有車要怎麼移動？"},
            def:{en:"By the JR lines from Nagoya and Gifu, the local railways — Nagaragawa, Akechi, Yōrō and Tarumi — and buses. The forest villages are the hard part; their buses may run only a few times a day. See <a href=\"journeys.html\">Five Journeys</a>.",ja:"名古屋と岐阜から出るJR線、長良川鉄道・明知鉄道・養老鉄道・樽見鉄道などの地方鉄道、そしてバスで回れる。難しいのは森の村で、バスは一日に数本ということもある。<a href=\"journeys.html\">五つの旅</a>を参照。",zh:"可利用從名古屋與岐阜出發的 JR 路線、長良川鐵道、明知鐵道、養老鐵道與樽見鐵道等地方鐵路，以及巴士。比較困難的是山林村落，巴士一天可能只有幾班。見<a href=\"journeys.html\">五段旅程</a>。"} },
          { term:{en:"Is this book complete?",ja:"本書は網羅的か。",zh:"本書是完整的嗎？"},
            def:{en:"No. Its directories are selections, its figures carry the years they describe, and several subjects deserve books of their own. The <a href=\"sources.html\">Sources</a> page lists where to check and read further.",ja:"網羅的ではない。名鑑は抜粋であり、数字はそれが示す年のものであり、いくつかの主題はそれぞれ一冊の本に値する。確かめ、さらに読むための先は<a href=\"sources.html\">出典</a>に挙げた。",zh:"不是。它的名鑑是選錄，數字對應其所描述的年份，而好幾個主題都值得各自寫成一本書。<a href=\"sources.html\">資料來源</a>頁列出可供查證與延伸閱讀之處。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"start.html", why:{ en:"Where to start reading.", ja:"どこから読み始めるか。", zh:"從哪裡開始讀。" } },
      { href:"glossary.html", why:{ en:"The words in the answers.", ja:"答えに出てくる言葉。", zh:"答案中出現的詞彙。" } },
      { href:"journeys.html", why:{ en:"Routes for a visit.", ja:"訪ねるための道筋。", zh:"造訪的路線。" } },
      { href:"sources.html", why:{ en:"Where to check.", ja:"確かめる先。", zh:"查證之處。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- glossary */
(function () {
var LAND = { en:"Land & water", ja:"風土", zh:"風土" };
var HIST = { en:"History", ja:"歴史", zh:"歷史" };
var CULT = { en:"Culture", ja:"文化", zh:"文化" };
var WOOD = { en:"Wood", ja:"木", zh:"木" };
var METL = { en:"Metal & blades", ja:"金と刃", zh:"金屬與刀刃" };
var CRFT = { en:"Paper, clay & cloth", ja:"紙・土・布", zh:"紙・土・布" };
var SAKE = { en:"Sake", ja:"酒", zh:"酒" };

GIFU.pages["glossary"] = {
  kicker: { en: "Journeys & Reference · 10", ja: "旅と資料 · 10", zh: "旅程與資料 · 10" },
  title:  { en: "Glossary", ja: "用語集", zh: "詞彙表" },
  jp: "本書の言葉",
  lede: {
    en: "The Japanese words this book uses, with a short definition of each and the category it belongs to. Type in the box to filter by the word in roman letters, in Japanese, or by anything in its definition. Each word is explained more fully on the page where it appears; the search box at the top of every page finds it there.",
    ja: "本書が用いる日本語の言葉に、短い定義と分類を添えた。枠に打ち込めば、ローマ字でも日本語でも、定義のなかの語でも絞り込める。どの言葉も、それが出てくる頁でより詳しく説明しており、各頁の上の検索窓から探せる。",
    zh: "本書使用的日語詞彙，各附簡短定義與分類。在方框中輸入文字，即可依羅馬字、日文或定義中的任何字詞篩選。每個詞在其出現的頁面上都有更完整的說明，可從每頁上方的搜尋框找到。"
  },
  body: [
    { t:"glossary",
      placeholder: { en: "Filter — try “hinoki”, “刃”, “festival”…", ja: "絞り込み——「檜」「刃」「祭り」など", zh: "篩選——試試「檜」、「刃」、「祭」…" },
      items: [

/* ---------------- LAND & WATER ---------------- */
{ r:"Hisan nōsui", jp:"飛山濃水", cat:LAND,
  d:{en:"“The mountains of Hida, the waters of Mino”: the four-character phrase for the prefecture's two halves.",ja:"「飛騨の山、美濃の水」。県の二つの半分をいう四字の言葉。",zh:"「飛驒之山，美濃之水」：形容全縣南北兩半的四字語。"} },
{ r:"Kiso sansen", jp:"木曽三川", cat:LAND,
  d:{en:"The three rivers of the Nōbi Plain: the Kiso, the Nagara and the Ibi, separated into their present beds between 1887 and 1912.",ja:"濃尾平野の三つの川、木曽川・長良川・揖斐川。1887年から1912年にかけて現在の川筋に分けられた。",zh:"濃尾平原的三條河：木曾川、長良川與揖斐川，於 1887 至 1912 年間被分入今日的河道。"} },
{ r:"wajū", jp:"輪中", cat:LAND,
  d:{en:"A village or group of villages enclosed by a ring levee on the low delta of the three rivers.",ja:"三川の低い三角州で、輪のような堤に囲まれた村や村々。",zh:"三條河川低窪三角洲上，被環形堤防圍住的村落或村落群。"} },
{ r:"mizuya", jp:"水屋", cat:LAND,
  d:{en:"A storehouse raised on a high stone base inside a ring-levee village, where a family kept food and took refuge in a flood.",ja:"輪中の村で、高い石垣の上に建てた蔵。食べ物を蓄え、洪水のときには避難した。",zh:"輪中村落裡建在高石基上的倉屋，平時儲存糧食，洪水時供一家避難。"} },
{ r:"zero-mētoru chitai", jp:"ゼロメートル地帯", cat:LAND,
  d:{en:"Land below mean sea level; the lowest part of the Nōbi Plain is the largest such zone in Japan.",ja:"平均海面より低い土地。濃尾平野の最も低い部分は、日本最大のそれである。",zh:"低於平均海平面的土地；濃尾平原最低處是日本最大的這類地帶。"} },
{ r:"Ibuki-oroshi", jp:"伊吹おろし", cat:LAND,
  d:{en:"The cold, dry winter wind that pours through the gap at Sekigahara onto the plain, bringing snow that slows the Shinkansen.",ja:"関ケ原の狭間から平野へ吹き下ろす、冬の冷たく乾いた風。新幹線を遅らせる雪を運ぶ。",zh:"冬季經關原隘口灌入平原的乾冷之風，帶來讓新幹線減速的大雪。"} },
{ r:"Nōhi ryūmongan", jp:"濃飛流紋岩", cat:LAND,
  d:{en:"The rhyolite laid down by enormous eruptions at the end of the Cretaceous across central Gifu.",ja:"白亜紀の終わりに巨大な噴火が岐阜の中央部に積もらせた流紋岩。",zh:"白堊紀末期巨大火山噴發堆積在岐阜中部的流紋岩。"} },
{ r:"Neodani dansō", jp:"根尾谷断層", cat:LAND,
  d:{en:"The fault that moved in the Nōbi earthquake of 1891, leaving a scarp at Midori in Motosu.",ja:"1891年の濃尾地震で動いた断層。本巣市水鳥に断層崖を残した。",zh:"1891 年濃尾地震時錯動的斷層，在本巢市水鳥留下斷層崖。"} },
{ r:"ayu", jp:"鮎", cat:LAND,
  d:{en:"The sweetfish, which lives one year; the fish of the Nagara, of the cormorant fishermen and of the agricultural heritage listing of 2015.",ja:"一年で一生を終える魚。長良川の魚であり、鵜飼の魚であり、2015年の世界農業遺産の魚である。",zh:"一年即走完一生的香魚；長良川之魚、鵜飼之魚，也是 2015 年世界農業遺產之魚。"} },
{ r:"Gifu-chō", jp:"ギフチョウ", cat:LAND,
  d:{en:"The Gifu butterfly, a black-and-yellow swallowtail of early spring named by Nawa Yasushi in 1883.",ja:"早春の黒と黄のアゲハ。1883年に名和靖が名づけた。",zh:"早春的黑黃相間鳳蝶，1883 年由名和靖命名。"} },
{ r:"raichō", jp:"雷鳥", cat:LAND,
  d:{en:"The rock ptarmigan of the high peaks, the prefectural bird and a special natural monument.",ja:"高山のライチョウ。県の鳥で、特別天然記念物。",zh:"高山上的岩雷鳥，為縣鳥，也是特別天然紀念物。"} },
{ r:"ōsanshōuo", jp:"オオサンショウウオ", cat:LAND,
  d:{en:"The Japanese giant salamander of the upper rivers, a special natural monument.",ja:"川の上流にすむオオサンショウウオ。特別天然記念物。",zh:"棲息於河川上游的日本大鯢，為特別天然紀念物。"} },

/* ---------------- HISTORY ---------------- */
{ r:"Mino", jp:"美濃", cat:HIST,
  d:{en:"The southern of the two old provinces: the plain, the rivers and the hills of the south, about three-fifths of the prefecture.",ja:"二つの旧国の南のほう。南の平野と川と丘で、県の約五分の三。",zh:"兩個舊國中南邊的一個：南部的平原、河川與丘陵，約占全縣五分之三。"} },
{ r:"Hida", jp:"飛騨", cat:HIST,
  d:{en:"The northern of the two old provinces: mountains, snow and forest, joined to Gifu in 1876.",ja:"二つの旧国の北のほう。山と雪と森で、1876年に岐阜県に加わった。",zh:"兩個舊國中北邊的一個：山、雪與森林，於 1876 年併入岐阜縣。"} },
{ r:"Fuwa no seki", jp:"不破関", cat:HIST,
  d:{en:"One of the three great barriers guarding the approaches to the ancient capital, at Sekigahara; abolished in 789.",ja:"古代の都への道を守った三関の一つ。関ケ原にあり、789年に廃された。",zh:"守衛古都通道的三大關之一，位於關原；789 年廢止。"} },
{ r:"shugo", jp:"守護", cat:HIST,
  d:{en:"A provincial military governor of the medieval shogunate; the Toki held the office in Mino for two centuries.",ja:"中世の幕府の国ごとの軍事の長。美濃では土岐氏が二世紀にわたって務めた。",zh:"中世幕府派駐各國的軍事長官；土岐氏在美濃擔任此職達兩個世紀。"} },
{ r:"tenka fubu", jp:"天下布武", cat:HIST,
  d:{en:"The motto on the seal Nobunaga used from 1567, after taking Gifu: “to spread military order across the realm”.",ja:"信長が岐阜を得た1567年から用いた印の文句。「天下に武を布く」。",zh:"信長自 1567 年取得岐阜後所用印章上的文字：「以武布於天下」。"} },
{ r:"rakuichi rakuza", jp:"楽市楽座", cat:HIST,
  d:{en:"Free markets and free trade, released from guild monopolies; Nobunaga's decree of 1567 for the market at Kanō is a famous example.",ja:"座の独占から解き放たれた自由な市と商い。1567年の加納の市への信長の制札は名高い例である。",zh:"擺脫行會壟斷的自由市集與自由交易；信長 1567 年頒給加納市場的制札是著名的例子。"} },
{ r:"tenryō", jp:"天領", cat:HIST,
  d:{en:"Land held directly by the shogunate; Hida was such land from 1692.",ja:"幕府が直接治めた土地。飛騨は1692年からそうであった。",zh:"由幕府直接統治的領地；飛驒自 1692 年起即是如此。"} },
{ r:"jin'ya", jp:"陣屋", cat:HIST,
  d:{en:"The office of a shogunal intendant or a small domain; the Takayama Jin'ya is the only intendant's office that survives.",ja:"幕府の代官や小藩の役所。高山陣屋は現存する唯一の代官の役所である。",zh:"幕府代官或小藩的官署；高山陣屋是唯一留存至今的代官官署。"} },
{ r:"daikan · gundai", jp:"代官・郡代", cat:HIST,
  d:{en:"The shogun's intendant and the higher-ranking district intendant; Hida's was raised from the first to the second in 1777.",ja:"幕府の代官と、より格の高い郡代。飛騨のそれは1777年に代官から郡代に格上げされた。",zh:"幕府的代官與位階較高的郡代；飛驒的長官於 1777 年由代官升格為郡代。"} },
{ r:"koku", jp:"石", cat:HIST,
  d:{en:"A measure of rice, about 180 litres, in which a domain's revenue and rank were counted.",ja:"米の量の単位で約180リットル。藩の収入と格はこれで数えた。",zh:"米的量制單位，約 180 公升；藩的收入與地位以此計算。"} },
{ r:"ikki", jp:"一揆", cat:HIST,
  d:{en:"An uprising or league of protest; Gujō (1754–58) and Hida's Ōhara disturbances (1771–89) are the famous ones.",ja:"一揆。郡上（1754–58年）と飛騨の大原騒動（1771–89年）が名高い。",zh:"民眾的起義或抗爭同盟；郡上（1754–58）與飛驒的大原騷動（1771–89）最為知名。"} },
{ r:"Hōreki chisui", jp:"宝暦治水", cat:HIST,
  d:{en:"The river works of 1754–55 on the lower Kiso, Nagara and Ibi, imposed on the Satsuma domain at ruinous cost.",ja:"1754–55年の木曽・長良・揖斐川下流の治水工事。薩摩藩に莫大な負担を強いた。",zh:"1754–55 年在木曾、長良、揖斐三川下游進行的治水工程，令薩摩藩付出慘重代價。"} },
{ r:"Nakasendō", jp:"中山道", cat:HIST,
  d:{en:"The inland highway between Edo and Kyoto, which crossed Mino through sixteen post towns.",ja:"江戸と京を結ぶ内陸の街道で、美濃を十六の宿場で横切った。",zh:"連接江戶與京都的內陸大道，以十六個宿場穿越美濃。"} },
{ r:"shukuba", jp:"宿場", cat:HIST,
  d:{en:"A post town on a highway, with inns and a relay station for official horses and porters.",ja:"街道の宿場町。宿屋と、公用の人馬を継ぎ立てる問屋場があった。",zh:"大道上的驛站城鎮，設有旅店與替換公用人馬的問屋場。"} },
{ r:"Mino sanninshū", jp:"美濃三人衆", cat:HIST,
  d:{en:"The Mino Triumvirate: three leading retainers of the Saitō whose support Nobunaga won before he took Inabayama in 1567.",ja:"斎藤氏の有力な家臣三人。信長は1567年に稲葉山を落とす前に彼らを味方につけた。",zh:"美濃三人眾：齋藤氏的三名重要家臣；信長在 1567 年攻下稻葉山之前，先爭取到了他們的支持。"} },

/* ---------------- CULTURE ---------------- */
{ r:"yatai", jp:"屋台", cat:CULT,
  d:{en:"A festival float, richly carved and lacquered, drawn through the streets at Takayama, Furukawa and Ōgaki.",ja:"彫刻と漆で飾った祭りの山車。高山・古川・大垣で町を曳かれる。",zh:"雕刻與漆飾華麗的祭典花車，在高山、古川與大垣的街道上拉行。"} },
{ r:"karakuri", jp:"からくり", cat:CULT,
  d:{en:"Mechanical puppets worked by strings from inside a float.",ja:"屋台のなかから糸で操るからくり人形。",zh:"從花車內部以繩線操作的機關人偶。"} },
{ r:"ukai", jp:"鵜飼", cat:CULT,
  d:{en:"Cormorant fishing by night from boats lit by fires, on the Nagara from 11 May to 15 October.",ja:"かがり火をともした舟から夜に鵜を使って漁をする。長良川では5月11日から10月15日まで。",zh:"夜間在點著篝火的船上以鸕鶿捕魚；長良川為 5 月 11 日至 10 月 15 日。"} },
{ r:"ushō", jp:"鵜匠", cat:CULT,
  d:{en:"A cormorant master; those of the Nagara hold posts in the Imperial Household Agency.",ja:"鵜を使う漁師。長良川の鵜匠は宮内庁の職を持つ。",zh:"鸕鶿漁師；長良川的鵜匠在宮內廳任職。"} },
{ r:"gasshō-zukuri", jp:"合掌造り", cat:CULT,
  d:{en:"The steep thatched farmhouses of Shirakawa-gō, their roofs pitched at about sixty degrees like hands joined in prayer.",ja:"白川郷の急な茅葺きの民家。屋根はおよそ六十度で、合わせた手のようである。",zh:"白川鄉陡峭的茅草農家，屋頂約六十度，宛如合十的雙手。"} },
{ r:"yui", jp:"結", cat:CULT,
  d:{en:"Reciprocal labour among neighbours, still used to rethatch a gasshō roof.",ja:"近隣どうしの助け合いの労働。合掌の屋根の葺き替えにいまも生きる。",zh:"鄰里之間的互助勞動，至今仍用於翻修合掌屋頂。"} },
{ r:"Gujō Odori", jp:"郡上おどり", cat:CULT,
  d:{en:"The summer dance of Gujō Hachiman, danced by everyone in the street on some thirty nights, all night in mid-August.",ja:"郡上八幡の夏の踊り。三十夜あまり誰もが通りで踊り、八月半ばは夜通し踊る。",zh:"郡上八幡的夏季舞蹈，三十多個夜晚人人在街頭共舞，八月中旬更通宵達旦。"} },
{ r:"ji-kabuki", jp:"地歌舞伎", cat:CULT,
  d:{en:"Village kabuki performed by local people in their own playhouses; a survey of 1971 counted more rural stages in Gifu than in any other prefecture.",ja:"土地の人が自前の芝居小屋で演じる歌舞伎。1971年の調査では、岐阜の農村舞台の数は全国で最も多かった。",zh:"由當地居民在自家戲棚演出的歌舞伎；1971 年的調查顯示，岐阜的農村舞台數量居全國之冠。"} },
{ r:"ohineri", jp:"おひねり", cat:CULT,
  d:{en:"Coins twisted in paper and thrown onto the stage by the audience at a village kabuki performance.",ja:"紙にひねって包んだ小銭。地歌舞伎の客が舞台へ投げる。",zh:"以紙扭包的零錢，地歌舞伎的觀眾會把它拋上舞台。"} },
{ r:"udatsu", jp:"うだつ", cat:CULT,
  d:{en:"A raised firewall with a small roof between townhouses; the rich paper merchants of Mino built the finest.",ja:"町家のあいだに屋根をつけて立ち上げた防火の壁。美濃の裕福な紙問屋が最も立派なものを建てた。",zh:"町家之間加有小屋頂、高起的防火牆；美濃富裕的紙商所建者最為出色。"} },
{ r:"sarubobo", jp:"さるぼぼ", cat:CULT,
  d:{en:"“Monkey baby”: a faceless cloth doll of Hida, a charm for children and safe childbirth.",ja:"「猿の赤ん坊」。顔のない飛騨の布人形で、子どもと安産のお守り。",zh:"「猴寶寶」：飛驒沒有五官的布娃娃，是保佑孩子與順產的護身符。"} },
{ r:"hōba miso", jp:"朴葉味噌", cat:CULT,
  d:{en:"Miso with leeks and mushrooms grilled on a dried magnolia leaf over a charcoal brazier.",ja:"ねぎや茸を合わせた味噌を、乾いた朴の葉にのせて炭火で焼く。",zh:"拌入蔥與菇類的味噌，放在乾朴葉上以炭火烤製。"} },
{ r:"Enkū-butsu", jp:"円空仏", cat:CULT,
  d:{en:"The rough-hewn wooden Buddhas of the wandering monk Enkū (1632–1695), carved by the thousand.",ja:"遊行の僧・円空（1632–1695）が何千と刻んだ、荒削りの木の仏。",zh:"雲遊僧圓空（1632–1695）雕刻上千尊、粗獷的木佛。"} },
{ r:"Ryōmen Sukuna", jp:"両面宿儺", cat:CULT,
  d:{en:"A two-faced figure of Hida legend, a monster in the court chronicle and a hero in the local temples.",ja:"飛騨の伝説の二つの顔を持つ存在。朝廷の史書では怪物、土地の寺では英雄。",zh:"飛驒傳說中雙面的人物，在朝廷史書中是怪物，在當地寺院裡卻是英雄。"} },

/* ---------------- WOOD ---------------- */
{ r:"hinoki", jp:"檜", cat:WOOD,
  d:{en:"Japanese cypress: straight-grained, pale, fragrant and resistant to rot; the wood of shrines and temples.",ja:"木目がまっすぐで白く、香り高く、腐りにくい。社寺の木である。",zh:"日本扁柏：紋理筆直、色淺、芳香、耐腐，是寺社之木。"} },
{ r:"Kiso goboku", jp:"木曽五木", cat:WOOD,
  d:{en:"The five protected trees of the Kiso forests: hinoki, sawara, asunaro, kōyamaki and nezuko.",ja:"木曽の森の五つの保護された木。檜、椹、翌檜、高野槙、鼠子。",zh:"木曾森林受保護的五種樹：檜木、花柏、羅漢柏、高野槙與鼠子。"} },
{ r:"tomeyama", jp:"留山", cat:WOOD,
  d:{en:"A forest closed to entry; Owari closed its best Kiso forests in 1665.",ja:"立ち入りを禁じた森。尾張藩は1665年に木曽の最良の森を留山とした。",zh:"禁止進入的森林；尾張藩於 1665 年將木曾最好的森林列為留山。"} },
{ r:"Tōnō hinoki", jp:"東濃ひのき", cat:WOOD,
  d:{en:"The hinoki of eastern Mino and Ura-Kiso, sold as a regional brand for its fine, even rings.",ja:"東美濃と裏木曽の檜。細かくそろった年輪で知られ、地域の銘柄として売られる。",zh:"東美濃與裏木曾的檜木，以細密均勻的年輪聞名，作為地區品牌銷售。"} },
{ r:"kuda-nagashi", jp:"管流し", cat:WOOD,
  d:{en:"Floating logs singly down a mountain river, before they were caught and made up into rafts.",ja:"山の川に木を一本ずつ流すこと。のちに受け止めて筏に組んだ。",zh:"將原木一根根放入山區河流漂送，之後再攔下編成木筏。"} },
{ r:"tsunaba", jp:"綱場", cat:WOOD,
  d:{en:"A station where a rope across the river caught the floating logs; Nishikori at Yaotsu was the greatest on the Kiso.",ja:"川に張った綱で流れてくる木を受け止める場所。八百津の錦織が木曽川で最大であった。",zh:"以橫跨河面的繩索攔截漂流原木的場所；八百津的錦織是木曾川上最大的一處。"} },
{ r:"ikada", jp:"筏", cat:WOOD,
  d:{en:"A raft of logs, steered down the lower rivers to the timber yards of the coast.",ja:"木を組んだ筏。下流を海辺の木場まで操って下った。",zh:"以原木編成的木筏，沿下游河段撐往海岸的木材場。"} },
{ r:"Hida no takumi", jp:"飛騨の匠", cat:WOOD,
  d:{en:"The carpenters of Hida, sent to the capital in place of taxes from the eighth century, and the tradition named after them.",ja:"八世紀から税のかわりに都へ送られた飛騨の大工と、その名を負う伝統。",zh:"自八世紀起被派往京城以代替賦稅的飛驒木匠，以及以他們為名的傳統。"} },
{ r:"tsugite · shiguchi", jp:"継手・仕口", cat:WOOD,
  d:{en:"Joints that lengthen a timber and joints that meet timbers at an angle, cut without nails.",ja:"材を継ぎ足す継手と、材を角度をつけて組む仕口。釘を使わずに刻む。",zh:"接長木料的「繼手」，與以角度相接木料的「仕口」，皆不用釘子。"} },
{ r:"sashigane", jp:"差金", cat:WOOD,
  d:{en:"The carpenter's steel square, with a second scale longer by the square root of two for sizing beams from logs.",ja:"大工の曲尺。裏に√2倍の目盛りがあり、丸太から取れる角材の寸法がわかる。",zh:"木匠的曲尺，背面有長度為根號二倍的刻度，可從原木直徑讀出可取方材的尺寸。"} },
{ r:"sumitsubo", jp:"墨壺", cat:WOOD,
  d:{en:"The carpenter's ink pot and line, used to snap straight lines on timber.",ja:"大工の墨壺。材にまっすぐな線を打つ。",zh:"木匠的墨斗，用來在木料上彈出直線。"} },
{ r:"Hida Shunkei", jp:"飛騨春慶", cat:WOOD,
  d:{en:"Lacquerware of Takayama whose clear lacquer shows the grain of the wood beneath.",ja:"透漆で下の木目を見せる高山の漆器。",zh:"高山的漆器，以透明漆顯露底下的木紋。"} },
{ r:"ichii ittōbori", jp:"一位一刀彫", cat:WOOD,
  d:{en:"Unpainted carving in Japanese yew, established in Takayama in the early nineteenth century.",ja:"彩色しないイチイの彫刻。十九世紀初めに高山で確立した。",zh:"不上彩的紫杉雕刻，十九世紀初在高山確立。"} },
{ r:"shaku", jp:"笏", cat:WOOD,
  d:{en:"The flat sceptre held in ceremony, made for the court from the yews of Kuraiyama.",ja:"儀式で手に持つ平たい板。位山のイチイで宮廷のためにつくられた。",zh:"儀式中手持的扁平笏板，以位山紫杉為宮廷製作。"} },
{ r:"masu", jp:"枡", cat:WOOD,
  d:{en:"The square wooden measure, now the celebration cup of sake; Ōgaki makes about eight in ten.",ja:"四角い木の量り。いまは祝いの酒の器で、大垣が約八割をつくる。",zh:"方形的木製量器，如今是喜慶時的酒器；大垣生產約八成。"} },
{ r:"magegi", jp:"曲木", cat:WOOD,
  d:{en:"Bentwood: timber steamed and bent into curves, the technique that began Takayama's furniture industry in 1920.",ja:"蒸して曲げた木。1920年に高山の家具産業を始めた技術。",zh:"曲木：經蒸煮後彎成曲線的木材，1920 年高山家具產業即由此技術起步。"} },
{ r:"asshuku-sugi", jp:"圧縮杉", cat:WOOD,
  d:{en:"Compressed cedar: soft plantation sugi pressed hard enough to make furniture.",ja:"柔らかな人工林の杉を、家具にできるほど硬く圧縮した材。",zh:"壓縮杉：將柔軟的人工林杉木壓縮到足以製作家具的硬度。"} },

/* ---------------- METAL & BLADES ---------------- */
{ r:"Mino-den", jp:"美濃伝", cat:METL,
  d:{en:"The Mino tradition of swordmaking, centred on Seki, one of the five classical traditions.",ja:"関を中心とする美濃の作刀の伝統。五箇伝の一つ。",zh:"以關為中心的美濃鍛刀傳統，古典五大傳統之一。"} },
{ r:"Kanemoto · Kanesada", jp:"兼元・兼定", cat:METL,
  d:{en:"The two great Seki lines of the sixteenth century; the second Kanemoto was “Magoroku”, the second Kanesada “No-Sada”.",ja:"十六世紀の関の二つの名門。二代兼元は「孫六」、二代兼定は「之定」。",zh:"十六世紀關的兩大名門；第二代兼元即「孫六」，第二代兼定即「之定」。"} },
{ r:"tatara", jp:"たたら", cat:METL,
  d:{en:"The clay furnace in which iron sand and charcoal are smelted for three days and nights to make sword steel.",ja:"砂鉄と木炭を三日三晩かけて製錬し、刀の鋼をつくる土の炉。",zh:"以砂鐵與木炭連續冶煉三天三夜、製造刀劍用鋼的黏土爐。"} },
{ r:"tamahagane", jp:"玉鋼", cat:METL,
  d:{en:"The best steel from the tatara, used by licensed swordsmiths today.",ja:"たたらから得られる最良の鋼。いまも認可を受けた刀匠が用いる。",zh:"從たたら得到的最上等鋼材，至今仍為持證刀匠所用。"} },
{ r:"kawagane · shingane", jp:"皮鉄・心鉄", cat:METL,
  d:{en:"The hard outer steel and the softer core steel combined in a sword.",ja:"刀で組み合わせる、硬い外側の皮鉄と、柔らかな内側の心鉄。",zh:"刀劍中結合的堅硬外層「皮鐵」與較軟的內芯「心鐵」。"} },
{ r:"hamon", jp:"刃文", cat:METL,
  d:{en:"The pale hardened zone along the edge, formed by clay coating before quenching; its outline marks the school and maker.",ja:"焼き入れの前に土を置くことでできる、刃に沿った白い焼きの部分。その形が流派と作者を示す。",zh:"刃口沿線淬硬的淡色帶，由淬火前塗覆黏土而成；其輪廓標示流派與作者。"} },
{ r:"sanbon-sugi", jp:"三本杉", cat:METL,
  d:{en:"“Three cedars”: the repeating hamon of pointed peaks in groups of three, the mark of the Kanemoto line.",ja:"「三本の杉」。尖った山が三つずつ繰り返す刃文で、兼元の系統のしるし。",zh:"「三本杉」：以三個尖峰為一組反覆出現的刃文，是兼元一系的標誌。"} },
{ r:"masame", jp:"柾目", cat:METL,
  d:{en:"Straight grain in the steel of the blade, often seen in Mino work near the back.",ja:"刀の地鉄の、まっすぐな肌目。美濃物では棟寄りによく見られる。",zh:"刀身鋼材上筆直的紋理，美濃刀靠近刀背處常可見到。"} },
{ r:"mei", jp:"銘", cat:METL,
  d:{en:"The smith's signature, cut into the tang hidden in the hilt.",ja:"刀匠の銘。柄に隠れる茎に切る。",zh:"刀匠的落款，刻在藏於刀柄內的刀莖上。"} },
{ r:"koshirae", jp:"拵", cat:METL,
  d:{en:"The mounting of a sword: hilt, guard, scabbard and fittings.",ja:"刀の外装。柄、鍔、鞘、金具。",zh:"刀的外裝：刀柄、護手、刀鞘與各式配件。"} },
{ r:"Mino-bori", jp:"美濃彫", cat:METL,
  d:{en:"The Mino school of sword fittings, known for autumn grasses and insects carved in high relief in soft metals and gold.",ja:"美濃の刀装具の流派。柔らかな金属に金を差し、秋草や虫を高く彫り出すことで知られる。",zh:"美濃的刀裝具流派，以軟金屬與金飾高浮雕刻出秋草與昆蟲聞名。"} },
{ r:"hōchō", jp:"包丁", cat:METL,
  d:{en:"A kitchen knife; Seki shipped 55 per cent of Japan's household knives by value in 2020.",ja:"台所の刃物。2020年、関は家庭用刃物の出荷額の55%を占めた。",zh:"廚房用刀；2020 年關在日本家用刀具出貨額中占 55%。"} },
{ r:"gyūtō · santoku · deba · yanagiba", jp:"牛刀・三徳・出刃・柳刃", cat:METL,
  d:{en:"The chef's knife, the all-purpose knife, the heavy fish-cleaving knife and the long slicing knife for raw fish.",ja:"牛刀、万能の三徳、魚をおろす厚い出刃、刺身を引く長い柳刃。",zh:"主廚刀、萬用的三德刀、剖魚用的厚重出刃刀，以及切生魚片用的細長柳刃刀。"} },
{ r:"Seki Magoroku", jp:"関孫六", cat:METL,
  d:{en:"The name of the sixteenth-century smith, now a kitchen-knife brand made in Seki.",ja:"十六世紀の刀匠の名で、いまは関でつくられる包丁の銘柄。",zh:"十六世紀刀匠之名，如今是關出品的菜刀品牌。"} },

/* ---------------- PAPER, CLAY & CLOTH ---------------- */
{ r:"washi", jp:"和紙", cat:CRFT,
  d:{en:"Japanese hand-made paper, in Mino made chiefly from kōzo.",ja:"日本の手漉きの紙。美濃では主に楮でつくる。",zh:"日本手工紙，美濃主要以楮製作。"} },
{ r:"kōzo", jp:"楮", cat:CRFT,
  d:{en:"Paper mulberry, whose long inner-bark fibres make washi strong.",ja:"コウゾ。長い靭皮繊維が和紙を強くする。",zh:"構樹（楮），其內樹皮的長纖維使和紙強韌。"} },
{ r:"neri", jp:"ねり", cat:CRFT,
  d:{en:"The mucilage from the root of tororo-aoi that keeps the fibres suspended in the vat.",ja:"トロロアオイの根からとる粘り。漉き舟のなかで繊維を浮かせておく。",zh:"取自黃蜀葵根部的黏液，讓纖維懸浮在紙槽中。"} },
{ r:"Honminoshi", jp:"本美濃紙", cat:CRFT,
  d:{en:"“True Mino paper”, made to strict rules from Japanese kōzo; an Important Intangible Cultural Property (1969) inscribed by UNESCO in 2014.",ja:"国産の楮から厳しい決まりでつくる「本当の美濃紙」。重要無形文化財（1969年）で、2014年にユネスコに記載された。",zh:"以日本產楮依嚴格規範製作的「真正的美濃紙」；重要無形文化財（1969 年），2014 年列入聯合國教科文組織名錄。"} },
{ r:"Gifu chōchin", jp:"岐阜提灯", cat:CRFT,
  d:{en:"The painted lanterns of thin Mino paper on fine bamboo ribs, made above all for Bon.",ja:"細い竹ひごに薄い美濃紙を張り、絵付けした提灯。とりわけ盆のためのもの。",zh:"以細竹骨裱上薄美濃紙並施以彩繪的燈籠，主要為盂蘭盆節而製。"} },
{ r:"wagasa", jp:"和傘", cat:CRFT,
  d:{en:"The oiled-paper umbrella; Gifu makes more than anywhere else in Japan.",ja:"油を引いた紙の傘。岐阜が日本で最も多くつくる。",zh:"塗油的紙傘；岐阜的產量居日本之冠。"} },
{ r:"Minoyaki", jp:"美濃焼", cat:CRFT,
  d:{en:"The ceramics of Tōnō, from Momoyama tea wares to most of Japan's everyday tableware.",ja:"東濃の焼き物。桃山の茶陶から、日本の日常の器の大半まで。",zh:"東濃的陶瓷，從桃山茶陶到日本大部分的日常餐具。"} },
{ r:"Shino · Oribe · Ki-Seto · Seto-guro", jp:"志野・織部・黄瀬戸・瀬戸黒", cat:CRFT,
  d:{en:"The four Momoyama styles of Mino: thick white feldspar glaze, bold copper green, soft yellow, and black pulled hot from the kiln.",ja:"美濃の桃山の四つの様式。厚い白の長石釉、大胆な銅の緑、柔らかな黄、窯から熱いまま引き出す黒。",zh:"美濃的四種桃山樣式：厚白長石釉、大膽的銅綠、柔和的黃，以及趁熱從窯中取出的黑。"} },
{ r:"noborigama", jp:"登窯", cat:CRFT,
  d:{en:"The multi-chamber climbing kiln, which reached Mino from Karatsu around 1600.",ja:"連房式の登窯。1600年ごろ唐津から美濃へ伝わった。",zh:"多室相連的登窯，約 1600 年由唐津傳入美濃。"} },
{ r:"ningen kokuhō", jp:"人間国宝", cat:CRFT,
  d:{en:"“Living National Treasure”: the popular name for a holder of an Important Intangible Cultural Property.",ja:"重要無形文化財の保持者の通称。",zh:"「人間國寶」：重要無形文化財保持者的通稱。"} },
{ r:"Bishū", jp:"尾州", cat:CRFT,
  d:{en:"The wool-weaving district around Ichinomiya in Aichi and Hashima in Gifu, long Japan's largest.",ja:"愛知の一宮と岐阜の羽島を中心とする毛織物の産地。長く日本最大であった。",zh:"以愛知一宮與岐阜羽島為中心的毛織品產地，長期為日本最大。"} },

/* ---------------- SAKE ---------------- */
{ r:"sakagura · kura", jp:"酒蔵・蔵", cat:SAKE,
  d:{en:"A sake brewery; Gifu has about fifty.",ja:"酒をつくる蔵。岐阜にはおよそ五十ある。",zh:"釀酒的酒藏；岐阜約有五十家。"} },
{ r:"kuramoto · tōji", jp:"蔵元・杜氏", cat:SAKE,
  d:{en:"The owner of a brewery and the master brewer; in many small houses today they are the same person.",ja:"蔵の持ち主と酒造りの長。いまは多くの小さな蔵で同じ人である。",zh:"酒藏的主人與釀酒師傅；如今許多小酒藏裡兩者是同一人。"} },
{ r:"kōji", jp:"麹", cat:SAKE,
  d:{en:"Steamed rice grown with a mould that turns its starch into sugar.",ja:"麹菌を育てた蒸し米。でんぷんを糖に変える。",zh:"培養了麴菌的蒸米，能把澱粉轉化為糖。"} },
{ r:"shubo · moto", jp:"酒母・酛", cat:SAKE,
  d:{en:"The yeast starter from which the main mash is built.",ja:"醪をつくる元になる酵母の培養。",zh:"用來建立主醪的酵母酒母。"} },
{ r:"kimoto · yamahai", jp:"生酛・山廃", cat:SAKE,
  d:{en:"Traditional starters in which lactic acid is grown rather than added, taking about twice as long.",ja:"乳酸を加えるのではなく育てる伝統の酒母。倍ほどの時日がかかる。",zh:"不添加而是培養乳酸的傳統酒母，約需兩倍時間。"} },
{ r:"moromi", jp:"醪", cat:SAKE,
  d:{en:"The main fermenting mash, built up in three additions over four days.",ja:"発酵中の主な醪。四日かけて三段で仕込む。",zh:"發酵中的主醪，分三次、歷時四天投料建立。"} },
{ r:"junmai · ginjō · daiginjō", jp:"純米・吟醸・大吟醸", cat:SAKE,
  d:{en:"Legal grades: junmai has no added alcohol; ginjō and daiginjō are milled to 60 and 50 per cent or less.",ja:"法律上の区分。純米は醸造アルコールを加えず、吟醸と大吟醸はそれぞれ精米歩合60%以下・50%以下。",zh:"法定分級：純米不添加釀造酒精；吟釀與大吟釀的精米步合分別在 60% 與 50% 以下。"} },
{ r:"seimai buai", jp:"精米歩合", cat:SAKE,
  d:{en:"The polishing ratio: the percentage of each grain left after milling.",ja:"磨いたあとに残る米粒の割合。",zh:"精米步合：磨米後每粒米所剩的百分比。"} },
{ r:"Hida Homare", jp:"ひだほまれ", cat:SAKE,
  d:{en:"Gifu's own brewing rice, bred for the short, cool summers of the Hida highlands.",ja:"飛騨の高地の短く涼しい夏に合わせて育成された、岐阜独自の酒米。",zh:"岐阜自有的酒米，為適應飛驒高地短暫涼爽的夏季而育成。"} },
{ r:"Ibi-no-homare", jp:"揖斐の誉", cat:SAKE,
  d:{en:"A rice developed with farmers of the Ibi valley and grown nowhere else, brewed by one Ōno house.",ja:"揖斐の谷の農家とともに育て、よそでは作られない米。大野の一軒の蔵が醸す。",zh:"與揖斐河谷農家共同育成、他處不種的米，由大野的一家酒藏釀造。"} },
{ r:"sugidama", jp:"杉玉", cat:SAKE,
  d:{en:"The ball of cedar sprigs hung outside a brewery: green when the new sake is ready, brown by autumn.",ja:"酒蔵の軒に吊るす杉の葉の玉。新酒ができると青く、秋には茶色になる。",zh:"掛在酒藏屋簷下的杉葉球：新酒釀成時是綠色，到秋天變成褐色。"} },
{ r:"hiyaoroshi", jp:"ひやおろし", cat:SAKE,
  d:{en:"Sake stored over the summer and released in autumn without a second pasteurisation.",ja:"夏を越して秋に二度目の火入れをせずに出す酒。",zh:"經過一個夏天儲存、秋天不經第二次加熱殺菌即上市的酒。"} },
{ r:"koshu", jp:"古酒", cat:SAKE,
  d:{en:"Long-aged sake, amber to brown; prized in the Edo period and revived by a few houses, one in Gifu city.",ja:"長く熟成させた琥珀色から褐色の酒。江戸時代に珍重され、岐阜市の一軒を含むいくつかの蔵が甦らせた。",zh:"長期熟成、呈琥珀至褐色的酒；江戶時代備受珍視，由包括岐阜市一家在內的少數酒藏復興。"} },
{ r:"doburoku", jp:"どぶろく", cat:SAKE,
  d:{en:"Unstrained rice wine, legally not sake; brewed by the shrines of Shirakawa-gō for their autumn festivals.",ja:"こさない米の酒で、法律上は清酒ではない。白川郷の神社が秋の祭りのために醸す。",zh:"未經過濾的米酒，法律上不屬清酒；白川鄉的神社為秋季祭典釀造。"} },
{ r:"nigori", jp:"にごり酒", cat:SAKE,
  d:{en:"Cloudy sake, strained through a coarse mesh so that some lees remain; legally sake.",ja:"目の粗い布でこし、粕の一部を残した白い酒。法律上は清酒。",zh:"以粗網過濾、保留部分酒粕的白濁清酒；法律上屬於清酒。"} },
{ r:"kan", jp:"燗", cat:SAKE,
  d:{en:"Warmed sake, from hinata-kan at about 30 °C to tobikiri-kan at 55 °C and above.",ja:"温めた酒。約30℃の日向燗から55℃以上の飛び切り燗まで。",zh:"溫過的酒，從約 30 °C 的日向燗到 55 °C 以上的飛切燗。"} },
{ r:"tokkuri · guinomi · kiki-choko", jp:"徳利・ぐい呑み・利き猪口", cat:SAKE,
  d:{en:"The flask, the larger cup and the white tasting cup with its blue rings.",ja:"注ぐ徳利、大ぶりのぐい呑み、青い蛇の目の白い利き猪口。",zh:"酒壺、較大的ぐい呑杯，以及帶藍色蛇目圈的白色品酒杯。"} },
{ r:"mokkiri", jp:"もっきり", cat:SAKE,
  d:{en:"A glass stood in a masu or saucer and filled until it overflows, as a show of generosity.",ja:"枡や受け皿にグラスを立て、あふれるまで注ぐこと。気前のよさを示す。",zh:"把玻璃杯立在枡或小碟中，斟到滿溢，以示大方。"} },
{ r:"kagami-biraki", jp:"鏡開き", cat:SAKE,
  d:{en:"Breaking open the lid of a sake cask with wooden mallets at a celebration.",ja:"祝いの席で酒樽の蓋を木槌で割り開くこと。",zh:"在慶典上以木槌敲開酒樽蓋子的儀式。"} }

      ] },

    { t:"related", items:[
      { href:"faq.html", why:{ en:"The words in use.", ja:"使われる言葉。", zh:"實際使用中的詞彙。" } },
      { href:"tables.html", why:{ en:"The numbers.", ja:"数字。", zh:"數字。" } },
      { href:"chronology.html", why:{ en:"The dates.", ja:"年。", zh:"年代。" } },
      { href:"index.html", why:{ en:"Back to the beginning.", ja:"はじめに戻る。", zh:"回到開頭。" } }
    ] }
  ]
};
})();


/* ---- ----------------------------------------------- figures */
GIFU.pages["figures"] = {
  kicker: { en: "Journeys & Reference · 11", ja: "旅と資料 · 11", zh: "旅程與資料 · 11" },
  title:  { en: "Every Diagram", ja: "図版一覧", zh: "圖表總覽" },
  jp: "図版一覧",
  lede: {
    en: "The book's diagrams gathered in one list, page by page, each with the opening words of its caption and a link to where it sits. None is a photograph: every one was drawn for this book from the facts and figures in the text beside it, and the schematic ones — maps that keep places in order but not to scale, processes drawn as rows of boxes — say so on their face. For readers who take things in by eye, it is a quick way round the whole book.",
    ja: "本書の図を頁ごとに一覧にし、キャプションの書き出しと、その図の載る場所へのリンクを添えた。写真は一枚もない。どの図も、かたわらの本文の事実と数字からこの本のために描いたもので、模式図——場所の並びは保つが縮尺は保たない地図や、箱の列で表した工程——はそのことを図のなかに明記している。目でものをつかむ読者には、本書全体をすばやく見渡す道になる。",
    zh: "把本書的圖表依頁面彙整成一份清單，附上每張圖說的開頭，以及連到圖表所在之處的連結。這裡沒有照片：每一張都是根據旁邊文字中的事實與數字，專為本書繪製；示意圖——保留地點順序但不按比例的地圖、以一排方框表示的工序——都在圖上標明。對習慣用眼睛吸收資訊的讀者，這是快速瀏覽全書的一條路。"
  },
  body: [
    { t:"figindex" },

    { t:"note", label:{ en:"How they are made", ja:"どうつくられているか", zh:"它們是怎麼做出來的" }, text:{
      en:"Behind each diagram is a short function that draws it as SVG in whichever language the reader has chosen, so the Japanese and Chinese versions are drawn in those languages rather than being an English picture with a translated caption. Being text, the diagrams can be searched, read aloud by assistive software, enlarged and printed without losing sharpness, and there are no image files in the book. The approach is the one used in <em>The Book of Sake</em> by 13STUDIO, whose design this book follows.",
      ja:"どの図も、読者の選んだ言語でSVGとして描く短い関数から生まれる。日本語版や中国語版は、英語の絵に訳したキャプションを付けたものではなく、その言語で描かれている。図が文字でできているので、検索でき、読み上げソフトで読め、拡大しても印刷しても鮮明さを失わない。本書に画像ファイルはない。この方法は、本書がそのデザインを受け継いだ13STUDIOの『The Book of Sake』のものである。",
      zh:"每張圖表背後都是一段簡短的函式，依讀者所選的語言把它繪成 SVG；因此日文版與中文版是以該語言繪製，而不是在英文圖片上加翻譯圖說。由於圖表由文字構成，可以搜尋、可由輔助軟體朗讀，放大與列印都不失清晰；本書沒有任何圖片檔。這個做法來自本書沿用其設計的 13STUDIO《The Book of Sake》。" } },

    { t:"related", items:[
      { href:"index.html", why:{ en:"Start from the overview instead.", ja:"概観から始める。", zh:"改從總覽開始。" } },
      { href:"tables.html", why:{ en:"The numbers, gathered the same way.", ja:"数字を同じように集めたもの。", zh:"以同樣方式彙整的數字。" } },
      { href:"glossary.html", why:{ en:"The words, gathered the same way.", ja:"言葉を同じように集めたもの。", zh:"以同樣方式彙整的詞彙。" } },
      { href:"sources.html", why:{ en:"The sources behind the diagrams.", ja:"図の背後の資料。", zh:"圖表背後的資料來源。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- sources */
(function () {
/* A source link opens in a new tab; its title is the page's own,
   usually in Japanese, and is the same in all three languages.   */
function A(url, title) {
  return '<a href="' + url + '" target="_blank" rel="noopener">' + title + "</a>";
}
function list(items) {
  return '<span class="src-list">' + items.map(function (x) { return A(x[0], x[1]); }).join(" · ") + "</span>";
}
function entry(term, jp, desc, links) {
  var l = list(links);
  return { term: term, jp: jp, def: { en: desc.en + " " + l, ja: desc.ja + " " + l, zh: desc.zh + " " + l } };
}

GIFU.pages["sources"] = {
  kicker: { en: "Journeys & Reference · 12", ja: "旅と資料 · 12", zh: "旅程與資料 · 12" },
  title:  { en: "Sources", ja: "出典", zh: "資料來源" },
  jp: "出典と読書案内",
  lede: {
    en: "This book is compiled from public documents: the statistics and reports of Gifu Prefecture and its municipalities, the national ministries and agencies, universities and research institutes, museums, and the makers themselves. The official and primary sources come first so that any figure can be checked where it was published. Statistics move, so where a number matters the year is given with it. The links below were consulted in September 2026 and open in a new tab.",
    ja: "本書は公開資料から編んだ。岐阜県と市町村の統計や報告、国の省庁、大学と研究機関、博物館、そして作り手自身の資料である。どの数字も発表されたところで確かめられるよう、公的な一次資料を先に挙げる。統計は動くので、数字が意味を持つところでは年を添えた。以下のリンクは2026年9月に参照したもので、新しいタブで開く。",
    zh: "本書依據公開資料編纂：岐阜縣及其市町村的統計與報告、國家各省廳、大學與研究機構、博物館，以及製作者本身的資料。官方與一手資料列於最前，以便每個數字都能在其發布之處查證。統計會變動，因此凡數字重要之處，皆附上年份。以下連結於 2026 年 9 月查閱，會在新分頁開啟。"
  },
  body: [
    { t:"section", id:"prefecture",
      title:{ en:"Gifu Prefecture", ja:"岐阜県", zh:"岐阜縣" }, jp:"pref.gifu.lg.jp",
      body:[
        { t:"defs", items:[
          entry({en:"Statistics and administration",ja:"統計と行政",zh:"統計與行政"}, "統計課・市町村課",
            {en:"Area, population, municipalities and the prefecture's rankings, including the tableware and cutlery shares quoted throughout.",ja:"面積、人口、市町村、県の全国順位。本書で引く食器や刃物の割合を含む。",zh:"面積、人口、市町村與全縣的全國排名，包括本書各處引用的餐具與刀具占比。"},
            [["https://www.pref.gifu.lg.jp/uploaded/attachment/467282.pdf","統計からみた岐阜県の現状（2025年10月）"],
             ["https://www.pref.gifu.lg.jp/uploaded/attachment/467447.pdf","統計からみた岐阜県の特徴やじまん（2025年）"],
             ["https://www.pref.gifu.lg.jp/page/6058.html","岐阜県の市町村一覧"],
             ["https://www.pref.gifu.lg.jp/page/5129.html","岐阜県内の合併状況"],
             ["https://www.pref.gifu.lg.jp/page/10117.html","人口・世帯数"],
             ["https://www.pref.gifu.lg.jp/page/365413.html","岐阜県統計書"],
             ["https://www.pref.gifu.lg.jp/page/324278.html","飛騨地域の概要"],
             ["https://www.pref.gifu.lg.jp/page/111.html","岐阜県のシンボル"]]),
          entry({en:"Forests",ja:"森林",zh:"森林"}, "林政部",
            {en:"The forest resource, its age and ownership, the timber industry and the forest and environment tax.",ja:"森林資源、その齢級と所有、木材産業、森林・環境税。",zh:"森林資源及其林齡與所有權、木材產業，以及森林與環境稅。"},
            [["https://www.pref.gifu.lg.jp/uploaded/attachment/329260.pdf","岐阜県の林業・木材産業の現状"],
             ["https://www.pref.gifu.lg.jp/uploaded/attachment/290443.pdf","岐阜県の森林・林業の現状"],
             ["https://www.pref.gifu.lg.jp/uploaded/attachment/303417.pdf","岐阜県の森林・木材"],
             ["https://www.forest.rd.pref.gifu.lg.jp/pdf/bull0601.pdf","岐阜県におけるヒノキ天然生林の分布と地域特性（森林研究所）"],
             ["https://www.forest.ac.jp/about/philosophy/","岐阜県立森林文化アカデミー 沿革"],
             ["https://www.city.seki.lg.jp/cmsfiles/contents/0000000/446/02.pdf","清流の国ぎふ森林・環境税（広報せき 2012年）"],
             ["https://www.city.kaizu.lg.jp/kurashi/0000003060.html","森林環境税の課税開始について（海津市）"]]),
          entry({en:"Cultural properties and heritage",ja:"文化財と遺産",zh:"文化財與遺產"}, "文化伝承課ほか",
            {en:"Designated sites and properties, the preservation districts, the traditional crafts and the ayu of the Nagara.",ja:"指定の史跡や文化財、伝統的建造物群保存地区、伝統的工芸品、長良川の鮎。",zh:"指定史跡與文化財、傳統建造物群保存地區、傳統工藝品，以及長良川香魚。"},
            [["https://www.pref.gifu.lg.jp/page/304232.html","岐阜県の伝統的工芸品について"],
             ["https://www.pref.gifu.lg.jp/page/12418.html","重要伝統的建造物群保存地区"],
             ["https://www.pref.gifu.lg.jp/page/56640.html","世界農業遺産「清流長良川の鮎」"],
             ["https://www.pref.gifu.lg.jp/page/365968.html","昼飯大塚古墳"],
             ["https://www.pref.gifu.lg.jp/page/366357.html","美濃国府跡"],
             ["https://www.pref.gifu.lg.jp/page/355032.html","楽市楽座制札"],
             ["https://www.pref.gifu.lg.jp/page/365132.html","門和佐の舞台"],
             ["https://www.pref.gifu.lg.jp/page/5915.html","日本最古の石にふれるみち"],
             ["https://www.pref.gifu.lg.jp/page/3155.html","名水百選 宗祇水"],
             ["https://jishibai.pref.gifu.lg.jp/?lang=english","Gifu, “Land of Ji-Shibai” Web Museum"],
             ["https://sekigahara.pref.gifu.lg.jp/","岐阜関ケ原古戦場記念館"]]),
          entry({en:"Disasters, rivers and the rest",ja:"災害・川・その他",zh:"災害、河川及其他"}, "防災課・歴史資料館ほか",
            {en:"The 1976 flood, the Meiji river works, the ptarmigan survey, the Fuyū persimmon, Hida beef's founding bull and the maglev.",ja:"1976年の水害、明治の河川改修、ライチョウの調査、富有柿、飛騨牛の種雄牛、リニア。",zh:"1976 年水災、明治時期河川整治、岩雷鳥調查、富有柿、飛驒牛的種公牛，以及磁浮鐵路。"},
            [["https://www.pref.gifu.lg.jp/page/6965.html","9月12日豪雨災害（昭和51年）"],
             ["https://www.pref.gifu.lg.jp/page/2598.html","木曽長良揖斐三川改修計画書"],
             ["https://www.pref.gifu.lg.jp/page/17142.html","御嶽山ライチョウ生息状況調査"],
             ["https://www.pref.gifu.lg.jp/uploaded/attachment/5934.pdf","富有柿の由来"],
             ["https://www.livestock.rd.pref.gifu.lg.jp/SIR/SIRinfo/Yasufuku.html","「安福」の経歴（畜産研究所）"],
             ["https://www.pref.gifu.lg.jp/page/16609.html","リニア中央新幹線工事情報"]])
        ] }
      ]
    },

    { t:"section", id:"national",
      title:{ en:"National ministries and agencies", ja:"国の省庁と機関", zh:"國家各省廳與機關" }, jp:"go.jp",
      body:[
        { t:"defs", items:[
          entry({en:"Ministry of Land, Infrastructure, Transport and Tourism",ja:"国土交通省",zh:"國土交通省"}, "mlit.go.jp",
            {en:"The three rivers, their works and dams, and the old roads.",ja:"三川とその工事とダム、古い道。",zh:"三條河川及其工程與水壩，以及古道。"},
            [["https://www.cbr.mlit.go.jp/kisojyo/outline/pdf/r07_gaiyo.pdf","木曽三川の概要（木曽川上流河川事務所）"],
             ["https://www.mlit.go.jp/river/toukei_chousa/kasen/jiten/nihon_kawa/0509_kiso/0509_kiso_01.html","日本の川 木曽川・長良川・揖斐川"],
             ["https://www.cbr.mlit.go.jp/kisokaryu/gakusyu/ijin/15.html","ヨハニス・デ・レイケ"],
             ["https://www.cbr.mlit.go.jp/kisokaryu/sisetu/takasu.html","高須輪中排水機場"],
             ["https://www.mlit.go.jp/river/damc/action/dam121.html","徳山ダム"],
             ["https://www.cbr.mlit.go.jp/road/chubu-fukei/route/09.html","古道ロマン「東山道」"],
             ["https://www.cbr.mlit.go.jp/kikaku/mirai/05/02.htm","うだつの上がる町並みを生かしたまちづくり"]]),
          entry({en:"Forestry Agency",ja:"林野庁",zh:"林野廳"}, "rinya.maff.go.jp",
            {en:"Forest cover by prefecture, the Kiso hinoki forests and the Kiso Five, and forestry labour.",ja:"都道府県別の森林率、木曽ヒノキ林と木曽五木、林業の担い手。",zh:"各都道府縣森林率、木曾檜木林與木曾五木，以及林業人力。"},
            [["https://www.rinya.maff.go.jp/j/keikaku/genkyou/r4/1.html","都道府県別森林率・人工林率（令和4年3月31日現在）"],
             ["https://www.rinya.maff.go.jp/chubu/koho/kisohinoki/kisohinokirin.html","木曽ヒノキ林"],
             ["https://www.rinya.maff.go.jp/chubu/kiso/morigatari/kisogoboku.html","木曽五木"],
             ["https://www.rinya.maff.go.jp/chubu/tounou/attach/pdf/index-2.pdf","岐阜東濃の国有林"],
             ["https://www.rinya.maff.go.jp/j/routai/doukou/index.html","林業労働力の動向"],
             ["https://www.rinya.maff.go.jp/j/kikaku/toukei/youran_mokuzi2025.html","森林・林業統計要覧2025"]]),
          entry({en:"Ministry of Agriculture, Forestry and Fisheries",ja:"農林水産省",zh:"農林水產省"}, "maff.go.jp",
            {en:"The agricultural heritage listing, local dishes and the geographical indication of the Hachiya persimmon.",ja:"世界農業遺産、郷土料理、堂上蜂屋柿の地理的表示。",zh:"世界農業遺產、鄉土料理，以及堂上蜂屋柿的地理標示。"},
            [["https://www.maff.go.jp/j/pr/aff/2306/heritage01.html","旅する農業遺産「清流長良川の鮎」"],
             ["https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/38_10_gifu.html","うちの郷土料理 朴葉味噌"],
             ["https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/38_18_gifu.html","うちの郷土料理 水まんじゅう"],
             ["https://gi-act.maff.go.jp/register/entry/50.html","地理的表示 堂上蜂屋柿"]]),
          entry({en:"Agency for Cultural Affairs",ja:"文化庁",zh:"文化廳"}, "bunka.go.jp",
            {en:"Designated properties, World Heritage, the preservation districts and the Japan Heritage stories.",ja:"指定文化財、世界遺産、伝統的建造物群保存地区、日本遺産。",zh:"指定文化財、世界遺產、傳統建造物群保存地區與日本遺產。"},
            [["https://online.bunka.go.jp/special_content/hlink4","白川郷・五箇山の合掌造り集落"],
             ["https://online.bunka.go.jp/special_content/intangible/210010","高山祭の屋台行事"],
             ["https://online.bunka.go.jp/heritages/detail/170028","岐阜城跡"],
             ["https://online.bunka.go.jp/heritages/detail/138374","根尾谷断層"],
             ["https://online.bunka.go.jp/heritages/detail/205403","オオサンショウウオ生息地"],
             ["https://www.bunka.go.jp/seisaku/bunkazai/shokai/hozonchiku/","伝統的建造物群保存地区"],
             ["https://japan-heritage.bunka.go.jp/ja/stories/story006/","日本遺産「信長公のおもてなし」"],
             ["https://japan-heritage.bunka.go.jp/ja/stories/story029/","日本遺産「飛騨匠の技・こころ」"],
             ["https://bunka.nii.ac.jp/db/heritages/detail/201183","御野国加毛郡半布里大宝二年戸籍断簡"],
             ["https://bunka.nii.ac.jp/heritages/detail/208134","美濃の地歌舞伎衣裳"]]),
          entry({en:"Other national bodies",ja:"その他の国の機関",zh:"其他國家機關"}, "go.jp",
            {en:"Weather records, disaster reports, tax history, springs and great trees, hydro potential, dams, archives and trade.",ja:"気象の記録、災害の報告、税の歴史、名水と巨樹、包蔵水力、ダム、公文書、貿易。",zh:"氣象紀錄、災害報告、稅制史、名水與巨樹、水力蘊藏量、水壩、公文書與貿易。"},
            [["https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=52&block_no=47617&year=&month=&day=&view=","気象庁 高山の平年値"],
             ["https://www.bousai.go.jp/kyoiku/kyokun/kyoukunnokeishou/rep/1891_noubi_jishin/index.html","内閣府 1891 濃尾地震 報告書"],
             ["https://www.nta.go.jp/about/organization/ntc/sozei/quiz/1008/index.htm","国税庁 律令国家の免税（斐陀国）"],
             ["https://water-pub.env.go.jp/water-pub/mizu-site/meisui/data/index.asp?info=45","環境省 名水百選 宗祇水"],
             ["https://kyoju.biodic.go.jp/?_action=gtcontents&_command=column053","環境省 位山のイチイ"],
             ["https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/hydroelectric/database/energy_japan004/","資源エネルギー庁 日本の水力エネルギー量"],
             ["https://www.water.go.jp/chubu/tokuyama/gaiyo/index.html","水資源機構 徳山ダム"],
             ["https://www.stat.go.jp/info/guide/pdf/gifu.pdf","総務省統計局 岐阜県 日本の真ん中"],
             ["https://www.soumu.go.jp/main_sosiki/daijinkanbou/sensai/situation/state/tokai_01.html","総務省 岐阜市における戦災の状況"],
             ["https://crd.ndl.go.jp/reference/entry/index.php?page=ref_view&id=1000066031","国立国会図書館 レファレンス協同データベース 金華山"],
             ["https://www.jetro.go.jp/jetro/japan/gifu/company/takamine_gakki.html","ジェトロ岐阜 高峰楽器製作所"]])
        ] }
      ]
    },

    { t:"section", id:"municipal",
      title:{ en:"Cities, towns and villages", ja:"市町村", zh:"市町村" }, jp:"lg.jp",
      body:[
        { t:"defs", items:[
          entry({en:"Gifu, Ōgaki and the plain",ja:"岐阜・大垣と平野",zh:"岐阜、大垣與平原"}, "岐阜市・大垣市ほか",
            {en:"Cormorant fishing, Nobunaga's palace, the castle, the Media Cosmos, fossils, springs and the Yōrō legend.",ja:"鵜飼、信長の居館、城、メディアコスモス、化石、湧き水、養老の伝説。",zh:"鵜飼、信長居館、城、媒體宇宙、化石、湧泉與養老傳說。"},
            [["https://www.city.gifu.lg.jp/kankoubunka/kankou/1005099/1005111.html","ぎふ長良川の鵜飼 よくあるご質問"],
             ["https://www.city.gifu.lg.jp/kankoubunka/bunkazai/1005557/1005566.html","信長居館発掘調査案内所"],
             ["https://www.city.gifu.lg.jp/kankoubunka/kankou/1013051/1005097/1005098.html","岐阜城天守閣"],
             ["https://www.city.gifu.lg.jp/kankoubunka/kankou/1005049/1029653.html","みんなの森 ぎふメディアコスモス"],
             ["https://www.ukai-gifucity.jp/history.html","ぎふ長良川の鵜飼 1300年の歴史"],
             ["https://www.city.ogaki.lg.jp/0000000664.html","金生山化石館"],
             ["https://www.town.yoro.gifu.jp/tourism/culture/1002223/1002226.html","「養老」の由来"],
             ["https://www.city.mizuho.lg.jp/fuyuu/","富有柿発祥の地"],
             ["https://www.city.kakamigahara.lg.jp/kankobunka/1010039/murakuniza/1004876.html","村国座とは"],
             ["https://www.city.kaizu.lg.jp/shisei/cmsfiles/contents/0000001/1294/hariyohozonkanrikeikaku_an.pdf","津屋川水系清水池ハリヨ生息地 保存管理計画（海津市）"]]),
          entry({en:"Seki, Mino and the middle valleys",ja:"関・美濃と中ほどの谷",zh:"關、美濃與中部河谷"}, "関市・美濃市ほか",
            {en:"Cutlery statistics, the population centre, place names, paper, river ports, timber rafting and Sugihara Chiune.",ja:"刃物の統計、人口重心、地名、紙、川湊、筏流し、杉原千畝。",zh:"刀具統計、人口重心、地名、紙、河港、木筏漂流與杉原千畝。"},
            [["https://www.city.seki.lg.jp/cmsfiles/contents/0000004/4761/kogyo_R2.pdf","関市の工業（令和2年度）"],
             ["https://www.city.seki.lg.jp/0000003447.html","国勢調査からみた岐阜県関市"],
             ["https://www.city.seki.lg.jp/0000001408.html","各市町村の名称由来"],
             ["https://www.city.mino.gifu.jp/docs/1193.html","上有知湊"],
             ["https://www.town.yaotsu.lg.jp/1524.htm","錦織綱場"],
             ["https://www.town.yaotsu.lg.jp/sugihara-museum/","杉原千畝記念館"],
             ["https://www.city.minokamo.lg.jp/soshiki/12/1590.html","堂上蜂屋柿について"],
             ["https://www.city.motosu.lg.jp/0000001086.html","能郷の能・狂言"]]),
          entry({en:"Tōnō",ja:"東濃",zh:"東濃"}, "中津川市・多治見市・瑞浪市ほか",
            {en:"The Kiso Five, the Ise timber, the playhouses and costumes, Magome's move to Gifu and Eihō-ji.",ja:"木曽五木、伊勢の御用材、芝居小屋と衣裳、馬籠の越県、永保寺。",zh:"木曾五木、伊勢御用材、戲棚與戲服、馬籠越縣，以及永保寺。"},
            [["https://www.city.nakatsugawa.lg.jp/museum/n/topics/23420.html","木曽五木あれこれ"],
             ["https://www.city.nakatsugawa.lg.jp/kanko/oshirase/33666.html","第63回 伊勢神宮 式年遷宮"],
             ["https://www.city.nakatsugawa.lg.jp/soshikikarasagasu/kankoka/5/2/750.html","かしも明治座"],
             ["https://www.city.nakatsugawa.lg.jp/soshikikarasagasu/kankoka/bunka/6936.html","中津川の地歌舞伎"],
             ["https://www.city.nakatsugawa.lg.jp/soshikikarasagasu/yamaguchi/local/1152.html","山口地域の由来・歴史"],
             ["https://www.city.mizunami.lg.jp/kankou_bunka/bunkazai/1001295/1007624.html","美濃の地歌舞伎衣裳"],
             ["http://www.city.tajimi.lg.jp/bunkazai/bunkazai/eihoji/eihhoji.htm","永保寺の文化財"]]),
          entry({en:"Hida",ja:"飛騨",zh:"飛驒"}, "高山市・飛騨市・下呂市・白川村",
            {en:"Takayama's area and crafts, Gero's springs and playhouses, and Shirakawa-gō's heritage area, snow and fire drill.",ja:"高山の面積と工芸、下呂の温泉と芝居小屋、白川郷の世界遺産の区域と雪と放水訓練。",zh:"高山的面積與工藝、下呂的溫泉與戲棚，以及白川鄉的世界遺產區域、雪與放水演習。"},
            [["https://www.city.takayama.lg.jp/faq/1000073/1000158/1003220.html","高山市の面積"],
             ["https://www.city.takayama.lg.jp/shisei/1000067/1002790/1002815/1002816/1002819.html","一位一刀彫"],
             ["https://www.city.takayama.lg.jp/shisei/1000067/1002790/1002815/1002816/1002818.html","飛騨春慶"],
             ["https://www.city.gero.lg.jp/site/kanko/1258.html","下呂温泉の紹介"],
             ["https://www.city.gero.lg.jp/site/kanko/1384.html","芝居小屋（地歌舞伎）"],
             ["https://www.vill.shirakawa.lg.jp/1960.htm","世界遺産エリア"],
             ["https://www.vill.shirakawa.lg.jp/1195.htm","歳時記 冬"],
             ["https://www.vill.shirakawa.lg.jp/hidanichi/isseihousui/index.html","秋の一斉放水訓練"]])
        ] }
      ]
    },

    { t:"section", id:"research",
      title:{ en:"Universities, research and museums", ja:"大学・研究機関・博物館", zh:"大學、研究機構與博物館" }, jp:"ac.jp ほか",
      body:[
        { t:"defs", items:[
          entry({en:"Earth and sky",ja:"大地と空",zh:"大地與天空"}, "岐阜大学・東京大学ほか",
            {en:"The rocks of Gifu, the 2014 eruption of Ontake, the Norikura road and the heat record of 2007.",ja:"岐阜の岩石、2014年の御嶽山の噴火、乗鞍の道路、2007年の最高気温。",zh:"岐阜的岩石、2014 年御嶽山噴發、乘鞍道路，以及 2007 年的高溫紀錄。"},
            [["https://chigaku.ed.gifu-u.ac.jp/chigakuhp/html/kyo/chisitsu/gifunochigaku/rocks_and_minerals/oldest_rocks/index.html","岐阜の地学 日本最古の岩石（岐阜大学）"],
             ["https://chigaku.ed.gifu-u.ac.jp/chigakuhp/html/kyo/chisitsu/gifunochigaku/rocks_and_minerals/nobi_rhyolite/index.html","岐阜の地学 濃飛流紋岩"],
             ["https://www.eri.u-tokyo.ac.jp/eq/1893/","2014年9月27日御嶽山の噴火（東京大学地震研究所）"],
             ["https://www.icrr.u-tokyo.ac.jp/norikura/users_mycarkisei.html","乗鞍岳マイカー規制（東京大学宇宙線研究所）"],
             ["https://www.crl.nitech.ac.jp/?p=441","多治見で史上最高気温40.9℃（名古屋工業大学）"],
             ["https://committees.jsce.or.jp/heritage/node/1258","大井ダムならびに大井発電所（土木学会選奨土木遺産）"]]),
          entry({en:"History and society",ja:"歴史と社会",zh:"歷史與社會"}, "鹿児島大学・大阪経済大学ほか",
            {en:"The Hōreki works, the Gifu apparel district, the Gujō uprising, the village playhouses and Shirakawa-gō.",ja:"宝暦治水、岐阜のアパレル産地、郡上一揆、村の芝居小屋、白川郷。",zh:"寶曆治水、岐阜成衣產地、郡上一揆、村落戲棚與白川鄉。"},
            [["https://www.sci.kagoshima-u.ac.jp/oyo/advanced/engineering/horeki.html","宝暦治水（鹿児島大学）"],
             ["https://www.osaka-ue.ac.jp/file/general/19075","岐阜アパレル産地（大阪経済大学）"],
             ["https://www.jstage.jst.go.jp/article/jsds/2013/33/2013_17/_pdf/-char/ja","岐阜繊維問屋街の発展要因（J-STAGE）"],
             ["https://gakuen.gifu-net.ed.jp/~contents/syou_shyakai/h15/ikki/content/index.html","宝暦郡上一揆年表"],
             ["https://gijodai.jp/chibunken/chishibai/2015/08/post-10.html","地芝居（岐阜女子大学 地域文化研究所）"],
             ["http://dac.gijodai.ac.jp/db/sozai/03_sirakawagou/hp/housui/album03.html","白川郷 一斉放水（岐阜女子大学デジタルアーカイブ）"]]),
          entry({en:"Museums, shrines and associations",ja:"博物館・社寺・団体",zh:"博物館、寺社與團體"}, "",
            {en:"The Ise forests, the Shōkawa cherries, the Nomugi Pass, hot springs and mountain faith.",ja:"伊勢の森、荘川桜、野麦峠、温泉、山岳信仰。",zh:"伊勢之森、莊川櫻、野麥峠、溫泉與山岳信仰。"},
            [["https://www.isejingu.or.jp/sengu/forest.html","永遠の森（伊勢神宮）"],
             ["https://sake-museum.jp/sakura/780/","笹部さんの生涯 荘川桜と頌桜の碑（白鹿記念酒造博物館）"],
             ["https://museum.furusatonagawa.com/about.html","野麦峠ミュージアム 背景と歴史"],
             ["https://www.spa.or.jp/kokumin/1011/","奥飛騨温泉郷（日本温泉協会）"],
             ["https://www.hirayuonsen.or.jp/hot_springs4.php","平湯の伝説（平湯温泉観光協会）"],
             ["https://www.ontakekyo.or.jp/about/","御嶽山について（御嶽教）"]])
        ] }
      ]
    },

    { t:"section", id:"makers",
      title:{ en:"The makers", ja:"作り手", zh:"製作者" }, jp:"企業・工房",
      body:[
        { t:"defs", items:[
          entry({en:"Company histories",ja:"会社の沿革",zh:"公司沿革"}, "",
            {en:"Founding dates and histories are the makers' own, from their published histories.",ja:"創業年と沿革は、作り手みずからが公表しているものによる。",zh:"創業年份與沿革皆依製作者自行公布者。"},
            [["https://www.yairi.co.jp/about/outline.html","ヤイリギター 会社概要"],
             ["https://www.takamineguitars.co.jp/aboutus/ayumi.html","タカミネの歩み"],
             ["https://www.oakv.co.jp/company/history.html","オークヴィレッジ 会社沿革"],
             ["https://hidasangyo.com/company/history/","飛騨産業 沿革"],
             ["https://www.hidanokagu.jp/guide/outline.html","協同組合 飛騨木工連合会 概要"],
             ["https://www.masuza.co.jp/article/2273/","大垣の枡の歴史と大橋量器のお話"],
             ["https://www.jetro.go.jp/jetro/japan/gifu/company/nissin_furniture_crafters.html","日進木工（ジェトロ岐阜）"]]),
          { term:{en:"The Book of Sake",ja:"The Book of Sake",zh:"The Book of Sake"}, jp:"13STUDIO · MIT",
            def:{en:"The product lists for Tenryō, Kozaemon, Ibi, Takesuzume and Michisakari are taken from the directory of <em>The Book of Sake</em> by 13STUDIO, which compiled them from the breweries' own publications; this book also uses its design system and runtime under the MIT License. " + A("https://github.com/13studio-sudo/sake","github.com/13studio-sudo/sake"),
              ja:"天領、小左衛門、射美、竹雀、三千盛の定番の酒の一覧は、各蔵の公表資料から編まれた13STUDIOの『The Book of Sake』の名鑑による。本書はそのデザインの体系と実行の仕組みもMITライセンスのもとで用いている。 " + A("https://github.com/13studio-sudo/sake","github.com/13studio-sudo/sake"),
              zh:"天領、小左衛門、射美、竹雀與三千盛的常態酒款清單，取自 13STUDIO《The Book of Sake》依各酒藏公開資料編成的名鑑；本書亦依 MIT 授權使用其設計系統與執行架構。 " + A("https://github.com/13studio-sudo/sake","github.com/13studio-sudo/sake")} }
        ] }
      ]
    },

    { t:"section", id:"documents",
      title:{ en:"Historical documents", ja:"史料", zh:"史料" }, jp:"史料",
      body:[
        { t:"table",
          cols:[{en:"Document",ja:"文献",zh:"文獻"},{en:"Date",ja:"年代",zh:"年代"},{en:"What it gives this book",ja:"本書に与えるもの",zh:"本書由此所得"}],
          numCols:[1],
          rows:[
            [{en:"Mino household registers (Shōsōin)",ja:"御野国戸籍（正倉院）",zh:"御野國戶籍（正倉院）"},"702",{en:"Mino paper at the start of the eighth century, and early mentions of cormorant fishers",ja:"八世紀初めの美濃紙と、鵜飼の人々についての早い言及",zh:"八世紀初的美濃紙，以及關於鵜飼漁人的早期記載"}],
            [{en:"Nihon Shoki",ja:"日本書紀",zh:"日本書紀"},"720",{en:"The Jinshin War in Mino; Ryōmen Sukuna",ja:"美濃の壬申の乱、両面宿儺",zh:"美濃的壬申之亂；兩面宿儺"}],
            [{en:"Man'yōshū",ja:"万葉集",zh:"萬葉集"},{en:"c. 759",ja:"759年ごろ",zh:"約 759 年"},{en:"The poem whose pillow word names the Shiramayumi brewery",ja:"白真弓の銘のもととなった枕詞の歌",zh:"讓「白真弓」酒藏得名的枕詞和歌"}],
            [{en:"Engishiki",ja:"延喜式",zh:"延喜式"},"927",{en:"The ranks and districts of Mino and Hida",ja:"美濃と飛騨の国の等級と郡",zh:"美濃與飛驒的國等與郡"}],
            [{en:"Konjaku Monogatari",ja:"今昔物語集",zh:"今昔物語集"},{en:"12th c.",ja:"12世紀",zh:"12 世紀"},{en:"The tale of the Hida carpenter's contest with the painter Kudara no Kawanari",ja:"飛騨の工と絵師・百済川成の腕比べの話",zh:"飛驒工匠與畫師百濟川成比試技藝的故事"}],
            [{en:"Letter of Rokkaku Jōtei",ja:"六角承禎書写",zh:"六角承禎書信"},"1560",{en:"The two-generation account of the rise of Saitō Dōsan",ja:"斎藤道三の国盗りを父子二代とする記述",zh:"齋藤道三崛起為父子兩代之事的記述"}],
            [{en:"Luís Fróis, letters and <em>Historia</em>",ja:"ルイス・フロイスの書簡と『日本史』",zh:"路易斯·佛洛伊斯的書信與《日本史》"},"1569",{en:"The description of Nobunaga's palace at Gifu",ja:"岐阜の信長の居館の描写",zh:"對信長岐阜居館的描述"}],
            [{en:"Hayashi Razan",ja:"林羅山",zh:"林羅山"},{en:"17th c.",ja:"17世紀",zh:"17 世紀"},{en:"Gero named among the three famous springs",ja:"下呂を三名泉の一つに挙げた言葉",zh:"將下呂列為三大名泉之一的記述"}],
            [{en:"Bashō, <em>Oku no Hosomichi</em>",ja:"芭蕉『おくのほそ道』",zh:"芭蕉《奧之細道》"},"1689",{en:"The journey that ends at Ōgaki",ja:"大垣で結ぶ旅",zh:"在大垣結束的旅程"}],
            [{en:"Yamamoto Shigemi, <em>Ā Nomugi Tōge</em>",ja:"山本茂実『あゝ野麦峠』",zh:"山本茂實《啊，野麥峠》"},"1968",{en:"The Hida girls who crossed to the silk mills of Suwa",ja:"諏訪の製糸工場へ峠を越えた飛騨の娘たち",zh:"翻越山口前往諏訪製絲廠的飛驒少女"}]
          ] }
      ]
    },

    { t:"section", id:"method",
      title:{ en:"How this edition was researched", ja:"この版の調べ方", zh:"本版的研究方法" }, jp:"留保",
      body:[
        { t:"ul", items:[
          { en:"<strong>From public sources, in September 2026.</strong> The research was done by searching and reading the public web pages and documents of the bodies listed above. About two hundred searches were made; the sources listed are those relied on.",
            ja:"<strong>公開資料から、2026年9月に。</strong>調査は上に挙げた機関の公開のウェブページと文書を検索し読むことで行った。検索はおよそ二百回に及び、ここに挙げたのは依拠した資料である。",
            zh:"<strong>依據公開資料，於 2026 年 9 月進行。</strong>研究方式是搜尋並閱讀上列各機構公開的網頁與文件。共進行約兩百次搜尋；此處列出的是實際採用的資料。" },
          { en:"<strong>Unevenly.</strong> The land, history, culture and wood chapters rest most directly on the primary sources above. For parts of the metal, craft, sake and reference chapters fewer primary documents could be consulted in this edition, and the text relies more on established reference knowledge; there it is written cautiously, and its founding years and figures should be checked against the makers' and institutions' own publications before being quoted.",
            ja:"<strong>濃淡がある。</strong>風土、歴史、文化、木の章は、上の一次資料に最も直接に拠っている。金属、工芸、酒、資料の章の一部では、この版で参照できた一次文書が少なく、定まった参考知識に頼るところが多い。そこでは控えめに書いており、創業年や数字を引くときは、作り手や機関自身の刊行物で確かめてほしい。",
            zh:"<strong>程度不一。</strong>風土、歷史、文化與木的篇章，最直接地依據上列一手資料。金屬、工藝、酒與資料各篇的部分內容，本版可查閱的一手文件較少，較多仰賴既有的參考知識；那些地方寫得較為審慎，引用其中的創業年份與數字前，請先以製作者與機構自身的出版品查證。" },
          { en:"<strong>Figures are as at the latest published data.</strong> Population and industry figures are for 2020–2025 as stated; forest figures for 2019–2022. All of them move.",
            ja:"<strong>数字はそれぞれ、公表時点で最も新しいものである。</strong>人口と産業の数字は記した2020〜2025年のもの、森林の数字は2019〜2022年のもの。いずれも動く。",
            zh:"<strong>數字依最新公布資料。</strong>人口與產業數字為所註明的 2020–2025 年，森林數字為 2019–2022 年。這些都會變動。" },
          { en:"<strong>The lists are selections.</strong> The breweries, makers and museums in the directories were chosen to show how varied they are; leaving a name out says nothing about it.",
            ja:"<strong>一覧は抜き出したものである。</strong>名鑑の蔵、作り手、博物館は、その多様さを示すために選んだ。名を載せていないことは、何も意味しない。",
            zh:"<strong>清單是選錄。</strong>名鑑中的酒藏、製作者與博物館，是為了呈現其多樣而挑選；沒有列入，並不表示任何評價。" },
          { en:"<strong>Japanese is written in Hepburn romanisation</strong>, with macrons on long vowels — Ōgaki, Tōnō — unless a company or brand spells its name its own way.",
            ja:"<strong>日本語のローマ字表記はヘボン式</strong>とし、長音には長音記号を付けた（Ōgaki、Tōnō）。会社や銘柄が独自の綴りを用いる場合はそれに従う。",
            zh:"<strong>日文以黑本式羅馬字書寫</strong>，長音加上長音符號（如 Ōgaki、Tōnō）；公司或品牌若有自己的拼法則從之。" }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"figures.html", why:{ en:"The diagrams built from these sources.", ja:"これらの資料から描いた図版。", zh:"根據這些資料繪製的圖表。" } },
      { href:"tables.html", why:{ en:"The numbers in one place.", ja:"数字を一か所に。", zh:"集中一處的數字。" } },
      { href:"chronology.html", why:{ en:"The dates in order.", ja:"年を順に。", zh:"依序排列的年代。" } },
      { href:"index.html", why:{ en:"Back to the beginning.", ja:"はじめに戻る。", zh:"回到開頭。" } }
    ] }
  ]
};
})();
