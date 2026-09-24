/* =============================================================
   THE SPIRIT OF GIFU — Wood
   Page modules, concatenated. Each page is one
   GIFU.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ----------------------------------------------- wood */
GIFU.pages["wood"] = {
  kicker: { en: "Wood · 01", ja: "木 · 01", zh: "木 · 01" },
  title:  { en: "The Land of Wood", ja: "木の国", zh: "木之國" },
  jp: "木の国・山の国 · 檜 · 杉 · 橅 · 一位",
  lede: {
    en: "Gifu is four-fifths forest, and for thirteen centuries it has lived by what its people could make from trees. It sent carpenters instead of taxes to build the ancient capitals, grew the hinoki that rebuilds the shrines of Ise, floated timber down three rivers to the sea, built its festival floats and merchant houses, learned to bend beech into chairs, and now makes most of Japan's masu and some of its best-known guitars. This part follows the wood from the standing tree to the finished thing.",
    ja: "岐阜は県土の五分の四が森であり、千三百年にわたって、木から作れるものによって生きてきた。税の代わりに大工を送って古代の都を建て、伊勢の社を建て替える檜を育て、三つの川に材木を流して海へ送り、祭りの屋台と商家を建て、橅を曲げて椅子にすることを学び、いまは日本の枡の大半と、名の知られたギターのいくつかを作る。この部では、立っている木から出来上がった品までを追う。",
    zh: "岐阜縣土五分之四是森林，一千三百年來，它靠人們能從樹木做出的東西過活。它以木匠代替稅賦，派去建造古代的都城；種出重建伊勢神宮的檜木；把木材順著三條河流送往大海；建造祭典屋台與商家；學會把山毛櫸彎成椅子；如今更製造日本大部分的枡與幾款知名的吉他。本部分追隨木材，從挺立的樹一直到完成的器物。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Which wood, for what: the main timbers of Gifu, where they grow and what is made from them. Guitars are the exception — their tonewoods are mostly imported, and what Gifu supplies is the skill.",
        ja:"どの木を、何に。岐阜の主な木材と、その産地、そこから作られるもの。ギターは例外で、音響材の多くは輸入材であり、岐阜が供するのは技である。",
        zh:"何種木材，做什麼用：岐阜的主要木材、產地與用途。吉他是例外——其音材大多為進口，岐阜提供的是技藝。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 400" role="img" aria-label="Main timbers of Gifu and their uses">' +
          '<rect x="0.5" y="0.5" width="759" height="399" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"WHICH WOOD, FOR WHAT", ja:"どの木を、何に", zh:"何種木材，做什麼用" }) + '</text>';
        var head = [[30,{en:"TIMBER",ja:"木",zh:"木材"}],[250,{en:"WHERE",ja:"産地",zh:"產地"}],[430,{en:"MADE INTO",ja:"用途",zh:"用途"}]];
        head.forEach(function (h) { s += '<text x="' + h[0] + '" y="58" ' + F + ' font-size="9.5" fill="#8B857C" letter-spacing="1.4">' + L(h[1]) + '</text>'; });
        s += '<line x1="30" y1="66" x2="730" y2="66" stroke="#B4AC9C"/>';
        var rows = [
          [{en:"Hinoki",ja:"檜（ひのき）",zh:"檜木"}, "#EDE5D2", {en:"Tōnō, Ura-Kiso",ja:"東濃・裏木曽",zh:"東濃、裏木曾"}, {en:"shrines and temples, houses, masu, baths, a library roof",ja:"社寺・住宅・枡・風呂・図書館の屋根",zh:"社寺、住宅、枡、浴桶、圖書館屋頂"}],
          [{en:"Sugi",ja:"杉（すぎ）",zh:"杉木"}, "#E0E6DB", {en:"Nagara valley, Gujō",ja:"長良川流域・郡上",zh:"長良川流域、郡上"}, {en:"house frames, boards, compressed-cedar chairs",ja:"住宅の軸組・板・圧縮杉の椅子",zh:"住宅骨架、板材、壓縮杉木椅"}],
          [{en:"Sawara",ja:"椹（さわら）",zh:"花柏"}, "#E9ECEE", {en:"Ura-Kiso",ja:"裏木曽",zh:"裏木曾"}, {en:"shingle roofs, tubs, Hida Shunkei lacquerware",ja:"榑葺きの屋根・桶・飛騨春慶",zh:"木片屋頂、木桶、飛驒春慶漆器"}],
          [{en:"Beech and oak",ja:"橅・楢",zh:"山毛櫸、楢木"}, "#E7DFD2", {en:"Hida",ja:"飛騨",zh:"飛驒"}, {en:"bentwood chairs, tables, cabinets",ja:"曲木の椅子・テーブル・箱物",zh:"曲木椅、桌子、櫃類"}],
          [{en:"Japanese yew (ichii)",ja:"一位（いちい）",zh:"紫杉（一位）"}, "#EEE1DF", {en:"Kuraiyama, Hida",ja:"飛騨・位山",zh:"飛驒位山"}, {en:"court sceptres, Ichii ittōbori carving",ja:"笏・一位一刀彫",zh:"笏、一位一刀雕"}],
          [{en:"Spruce, rosewood, mahogany",ja:"スプルース・ローズウッド・マホガニー",zh:"雲杉、玫瑰木、桃花心木"}, "#E6E2EC", {en:"imported",ja:"輸入材",zh:"進口"}, {en:"acoustic guitars, made in Kani and Sakashita",ja:"可児と坂下で作るアコースティックギター",zh:"在可兒與坂下製作的木吉他"}]
        ];
        rows.forEach(function (r, i) {
          var y = 76 + i * 46;
          s += '<rect x="30" y="' + y + '" width="12" height="30" fill="' + r[1] + '" stroke="#7C6B52" stroke-width="0.8"/>' +
               '<text x="52" y="' + (y + 20) + '" ' + F + ' font-size="11.5" fill="#201E1B" font-weight="600">' + L(r[0]) + '</text>' +
               '<text x="250" y="' + (y + 20) + '" ' + F + ' font-size="10.5" fill="#55504A">' + L(r[2]) + '</text>' +
               '<text x="430" y="' + (y + 20) + '" ' + F + ' font-size="10.5" fill="#201E1B">' + L(r[3]) + '</text>' +
               '<line x1="30" y1="' + (y + 40) + '" x2="730" y2="' + (y + 40) + '" stroke="#EAE6DD"/>';
        });
        s += '<text x="30" y="388" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — main uses only; every timber has many more.",ja:"模式図——主な用途のみ。どの木にもほかに多くの用途がある。",zh:"示意圖——僅列主要用途；每種木材都另有許多用途。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"forest",
      title:{ en:"Four-fifths forest", ja:"県土の八割が森", zh:"八成是森林" }, jp:"森林 · 人工林 · 木材生産",
      body:[
        { t:"p", text:{
          en:"About 860,000 hectares of Gifu — some 81 per cent of the prefecture — is forest. Of the privately owned forest, about 680,000 hectares, some 45 per cent is planted, overwhelmingly with hinoki and sugi set out after the Second World War; the rest is natural or regrown broadleaf and conifer woodland. The prefecture produced about 576,000 cubic metres of timber in 2020. The forests themselves, their trees and their ownership are described in <a href=\"forests.html\">The Forests</a>; this part is about the use of what they grow.",
          ja:"岐阜県の約86万ヘクタール、県土のおよそ81パーセントが森林である。民有林約68万ヘクタールのうち約45パーセントが人工林で、その大半は第二次世界大戦後に植えられた檜と杉である。残りは天然林や、再生した広葉樹林・針葉樹林である。県の木材生産量は2020年に約57万6千立方メートルであった。森そのもの、その木々と所有については<a href=\"forests.html\">森林</a>の頁に述べた。この部は、森が育てるものの使い道についてである。",
          zh:"岐阜約有 86 萬公頃——約占全縣 81%——是森林。約 68 萬公頃的民有林中，約 45% 是人工林，絕大多數是第二次世界大戰後種下的檜木與杉木；其餘為天然或再生的闊葉樹林與針葉樹林。2020 年全縣木材產量約 57.6 萬立方公尺。森林本身、其樹種與所有權，請見<a href=\"forests.html\">森林</a>頁；本部分談的是森林所產之物的用途。" } }
      ]
    },

    { t:"section", id:"line",
      title:{ en:"A long line of wood", ja:"木の長い系譜", zh:"木的漫長譜系" }, jp:"年表",
      body:[
        { t:"timeline", items:[
          { year:"718", title:{en:"Carpenters instead of taxes",ja:"税の代わりに匠",zh:"以工匠代稅"}, text:{en:"The Yōrō code excuses Hida from taxes in kind and requires ten craftsmen a year from every village unit instead — the <a href=\"takumi.html\">Hida no Takumi</a>.",ja:"養老令が飛騨の庸・調を免じ、代わりに里ごとに毎年十人の匠丁を出させる——<a href=\"takumi.html\">飛騨の匠</a>。",zh:"《養老令》免除飛驒的庸與調，改為每里每年派出十名工匠——即<a href=\"takumi.html\">飛驒工匠</a>。"} },
          { year:"1408", title:{en:"Hida's national treasure",ja:"飛騨の国宝",zh:"飛驒的國寶"}, text:{en:"The sutra repository of Ankoku-ji is built near Takayama, with the oldest revolving sutra case in Japan inside.",ja:"高山近くに安国寺経蔵が建つ。内部には日本最古の輪蔵がある。",zh:"高山附近建成安國寺經藏，內有日本最古老的旋轉經架（輪藏）。"} },
          { year:"1665", title:{en:"Closed forests",ja:"留山",zh:"封山"}, text:{en:"The Owari domain closes the Kiso forests; by 1728 five conifers are protected — see <a href=\"hinoki.html\">Hinoki</a>.",ja:"尾張藩が木曽の森を留山とする。1728年までに五種の針葉樹が保護される——<a href=\"hinoki.html\">檜</a>を参照。",zh:"尾張藩封閉木曾森林；至 1728 年共有五種針葉樹受到保護——見<a href=\"hinoki.html\">檜木</a>。"} },
          { year:"1890", title:{en:"Masu in Ōgaki",ja:"大垣の枡",zh:"大垣的枡"}, text:{en:"A cooper trained in Nagoya starts making hinoki measuring boxes in Ōgaki; the town now makes about 80 per cent of Japan's.",ja:"名古屋で修業した職人が大垣で檜の枡を作り始める。いま大垣は全国の枡の約八割を作る。",zh:"一位在名古屋學藝的桶匠在大垣開始製作檜木枡；如今大垣生產全日本約八成的枡。"} },
          { year:"1920", title:{en:"Bentwood in Takayama",ja:"高山の曲木",zh:"高山的曲木"}, text:{en:"Local investors found a company to bend Hida's unwanted beech into Western chairs — the start of <a href=\"furniture.html\">Hida furniture</a>.",ja:"地元の出資者が、使い道のなかった飛騨の橅を曲げて洋家具を作る会社を興す——<a href=\"furniture.html\">飛騨の家具</a>の始まり。",zh:"當地出資者創立公司，把飛驒無人要的山毛櫸彎成西式椅子——<a href=\"furniture.html\">飛驒家具</a>由此開始。"} },
          { year:"1945 · 1959", title:{en:"Guitars",ja:"ギター",zh:"吉他"}, text:{en:"A Nagoya instrument maker moves to Kani to escape the air raids; in 1959 another sets up at Sakashita — see <a href=\"guitars.html\">Hand-made Guitars</a>.",ja:"名古屋の楽器工房が空襲を避けて可児へ移る。1959年には別の工房が坂下に開かれる——<a href=\"guitars.html\">手工ギター</a>を参照。",zh:"一家名古屋樂器工坊為躲避空襲遷往可兒；1959 年另一家在坂下創立——見<a href=\"guitars.html\">手工吉他</a>。"} },
          { year:"2015", title:{en:"A roof of hinoki",ja:"檜の屋根",zh:"檜木屋頂"}, text:{en:"Gifu's new city library opens under a rippling lattice roof of Tōnō hinoki — see <a href=\"architecture.html\">Building in Wood</a>.",ja:"岐阜市の新しい図書館が、波打つ東濃ひのきの格子屋根の下に開館する——<a href=\"architecture.html\">木の建築</a>を参照。",zh:"岐阜市新圖書館在起伏的東濃檜木格子屋頂下開館——見<a href=\"architecture.html\">木造建築</a>。"} },
          { year:"2025", title:{en:"Timber for 2033",ja:"2033年のための木",zh:"為 2033 年伐木"}, text:{en:"In June, hinoki for the 63rd rebuilding of the Ise shrines is felled with axes in the Ura-Kiso forest at Kashimo.",ja:"6月、第63回伊勢神宮式年遷宮のための檜が、加子母の裏木曽の森で斧によって伐られる。",zh:"6 月，為伊勢神宮第 63 次式年遷宮所用的檜木，在加子母的裏木曾森林以斧頭伐下。"} }
        ] }
      ]
    },

    { t:"section", id:"guide",
      title:{ en:"How this part is arranged", ja:"この部の構成", zh:"本部分的架構" }, jp:"頁の案内",
      body:[
        { t:"table",
          cols:[{en:"Page",ja:"頁",zh:"頁面"},{en:"What it covers",ja:"内容",zh:"內容"}],
          rows:[
            [{en:"<a href=\"hinoki.html\">Hinoki & the Kiso Five</a>",ja:"<a href=\"hinoki.html\">檜と木曽五木</a>",zh:"<a href=\"hinoki.html\">檜木與木曾五木</a>"},{en:"The tree, the Owari domain's protection of it, and the timber for the Ise shrines",ja:"木そのもの、尾張藩による保護、伊勢神宮の用材",zh:"樹木本身、尾張藩的保護，以及伊勢神宮的用材"}],
            [{en:"<a href=\"logging.html\">Logging & Forestry</a>",ja:"<a href=\"logging.html\">林業</a>",zh:"<a href=\"logging.html\">林業</a>"},{en:"Growing, felling and extracting timber today, and the people who do it",ja:"いまの育林・伐採・搬出と、それを担う人々",zh:"今日的育林、伐採與集材，以及從事者"}],
            [{en:"<a href=\"rafting.html\">Timber Down the Rivers</a>",ja:"<a href=\"rafting.html\">川を下った木</a>",zh:"<a href=\"rafting.html\">順流而下的木材</a>"},{en:"Three centuries of floating logs to the sea",ja:"三百年にわたり丸太を海へ流した仕組み",zh:"三百年間把原木漂送入海的系統"}],
            [{en:"<a href=\"takumi.html\">Hida no Takumi</a> · <a href=\"joinery.html\">Joinery</a>",ja:"<a href=\"takumi.html\">飛騨の匠</a>・<a href=\"joinery.html\">継手と仕口</a>",zh:"<a href=\"takumi.html\">飛驒工匠</a>・<a href=\"joinery.html\">榫卯與接合</a>"},{en:"The carpenters of Hida and how they joined wood",ja:"飛騨の大工と木の組み方",zh:"飛驒的木匠及其接合木材的方法"}],
            [{en:"<a href=\"furniture.html\">Hida Furniture</a> · <a href=\"everyday.html\">Wood in Everyday Things</a>",ja:"<a href=\"furniture.html\">飛騨の家具</a>・<a href=\"everyday.html\">暮らしの木</a>",zh:"<a href=\"furniture.html\">飛驒家具</a>・<a href=\"everyday.html\">生活中的木</a>"},{en:"Chairs, tables, masu, tubs and toys",ja:"椅子・テーブル・枡・桶・玩具",zh:"椅子、桌子、枡、木桶與玩具"}],
            [{en:"<a href=\"carving.html\">Carving & Lacquer</a> · <a href=\"enku.html\">Enkū's Buddhas</a>",ja:"<a href=\"carving.html\">彫りと塗り</a>・<a href=\"enku.html\">円空仏</a>",zh:"<a href=\"carving.html\">雕刻與漆藝</a>・<a href=\"enku.html\">圓空佛</a>"},{en:"Yew carving, Shunkei lacquer and a monk's hatchet",ja:"一位一刀彫、春慶塗、そして僧の鉈",zh:"紫杉雕刻、春慶漆器與一位僧人的柴刀"}],
            [{en:"<a href=\"architecture.html\">Building in Wood</a> · <a href=\"guitars.html\">Hand-made Guitars</a>",ja:"<a href=\"architecture.html\">木の建築</a>・<a href=\"guitars.html\">手工ギター</a>",zh:"<a href=\"architecture.html\">木造建築</a>・<a href=\"guitars.html\">手工吉他</a>"},{en:"Seven centuries of timber buildings, and the instrument makers of Kani and Sakashita",ja:"七百年の木の建築と、可児・坂下の楽器づくり",zh:"七百年的木造建築，以及可兒與坂下的樂器製作"}]
          ] },
        { t:"p", text:{
          en:"Read in order, the pages follow a tree from the forest to the market: how it is grown and protected, how it was cut and moved, who worked it, and what it became. Each page stands on its own, and the diagrams are collected on <a href=\"figures.html\">Every Diagram</a>.",
          ja:"順に読めば、これらの頁は一本の木を森から市場まで追う。どう育てられ守られるか、どう伐られ運ばれたか、誰が加工したか、そして何になったか。どの頁も単独で読むことができ、図版は<a href=\"figures.html\">図版一覧</a>にまとめてある。",
          zh:"依序閱讀，這些頁面會追隨一棵樹從森林走到市場：它如何被培育與保護、如何被砍伐與搬運、由誰加工，以及最後成為什麼。每一頁都可獨立閱讀，圖表則彙整於<a href=\"figures.html\">圖表總覽</a>。" } }
      ]
    },

    { t:"related", items:[
      { href:"hinoki.html", why:{ en:"The tree at the centre of it all.", ja:"すべての中心にある木。", zh:"一切的核心之樹。" } },
      { href:"logging.html", why:{ en:"How the trees are grown and cut today.", ja:"いま木はどう育てられ、伐られるか。", zh:"今日樹木如何培育與採伐。" } },
      { href:"takumi.html", why:{ en:"Thirteen centuries of carpenters.", ja:"千三百年の大工の系譜。", zh:"一千三百年的木匠傳統。" } },
      { href:"guitars.html", why:{ en:"The newest woodcraft in the prefecture.", ja:"県で最も新しい木の手仕事。", zh:"縣內最新的木工藝。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- hinoki */
GIFU.pages["hinoki"] = {
  kicker: { en: "Wood · 02", ja: "木 · 02", zh: "木 · 02" },
  title:  { en: "Hinoki & the Kiso Five", ja: "檜と木曽五木", zh: "檜木與木曾五木" },
  jp: "東濃ひのき · 裏木曽 · 木曽五木 · 式年遷宮",
  lede: {
    en: "Hinoki, the Japanese cypress, is the timber of Japan's temples and shrines: straight-grained, pale, fragrant, easy to work and slow to rot. The best of it grows in the Kiso valley and in the Ura-Kiso forests on the Gifu side of the mountains, where the Owari domain guarded it for two centuries on pain of death. Every twenty years the Ise shrines are rebuilt from it, and the timber for the next rebuilding, due in 2033, was felled in 2025 — partly in Gifu.",
    ja: "檜は日本の社寺の木である。木目がまっすぐで、白く、香り高く、加工しやすく、腐りにくい。その最良のものは木曽谷と、山を越えた岐阜側の裏木曽の森に育ち、尾張藩は二百年にわたり死罪をもってそれを守った。二十年ごとに伊勢神宮はこの木で建て替えられ、2033年の次の遷宮のための木は、2025年に——一部は岐阜で——伐られた。",
    zh: "檜木（日本扁柏）是日本寺社的木材：紋理筆直、色淺、芳香、易於加工、不易腐朽。最好的檜木生長在木曾谷，以及翻過山的岐阜一側的裏木曾森林；尾張藩曾以死刑為代價守護它兩百年。伊勢神宮每二十年以它重建一次，預定於 2033 年舉行的下一次重建所需的木材，已於 2025 年伐下——其中一部分在岐阜。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Left: how hinoki's strength changes after felling, after the wood scientist Obara Jirō — it grows stiffer and harder for about two centuries, then declines so slowly that timbers more than a thousand years old are about as strong as new wood. The curve is schematic. Right: the five conifers of the Kiso forests that the Owari domain forbade anyone to cut.",
        ja:"左：伐採後の檜の強さの変化（木材学者・小原二郎による）。約二百年のあいだ剛性と硬さを増し、その後はきわめてゆっくり衰えるため、千年を超える古材も新材とほぼ同じ強さを保つ。曲線は模式的なもの。右：尾張藩が伐ることを禁じた木曽の森の五種の針葉樹。",
        zh:"左：檜木伐採後強度的變化（依木材學者小原二郎）——約兩百年間剛性與硬度持續增加，之後衰減極其緩慢，使得千年以上的古材強度仍與新材相當。曲線為示意。右：尾張藩禁止任何人砍伐的木曾森林五種針葉樹。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 360" role="img" aria-label="Hinoki strength after felling, and the five protected Kiso trees">' +
          '<rect x="0.5" y="0.5" width="759" height="359" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"HINOKI AFTER FELLING", ja:"伐ったあとの檜", zh:"伐下之後的檜木" }) + '</text>';
        /* axes */
        var X0 = 70, X1 = 440, Y0 = 290, Y1 = 70;
        s += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#55504A"/>' +
             '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X0 + '" y2="' + Y1 + '" stroke="#55504A"/>';
        /* y: 80..130 ; x: 0..1300 years */
        function px(yr) { return X0 + (yr / 1300) * (X1 - X0); }
        function py(v) { return Y0 - ((v - 80) / 50) * (Y0 - Y1); }
        [0, 200, 500, 1000, 1300].forEach(function (yr) {
          s += '<line x1="' + px(yr) + '" y1="' + Y0 + '" x2="' + px(yr) + '" y2="' + (Y0 + 4) + '" stroke="#55504A"/>' +
               '<text x="' + px(yr) + '" y="' + (Y0 + 16) + '" text-anchor="middle" ' + F + ' font-size="9.5" fill="#8B857C">' + yr + '</text>';
        });
        s += '<text x="' + ((X0 + X1) / 2) + '" y="' + (Y0 + 32) + '" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"years after felling",ja:"伐採後の年数",zh:"伐採後年數"}) + '</text>';
        [100, 120].forEach(function (v) {
          s += '<line x1="' + (X0 - 4) + '" y1="' + py(v) + '" x2="' + X1 + '" y2="' + py(v) + '" stroke="#EAE6DD"/>' +
               '<text x="' + (X0 - 8) + '" y="' + (py(v) + 3.5) + '" text-anchor="end" ' + F + ' font-size="9.5" fill="#8B857C">' + v + '</text>';
        });
        s += '<text x="' + X0 + '" y="' + (Y1 - 10) + '" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"strength, new timber = 100",ja:"強さ（新材＝100）",zh:"強度（新材＝100）"}) + '</text>';
        var pts = [[0,100],[50,108],[100,114],[150,118],[200,120],[300,119],[500,114],[800,107],[1000,103],[1300,100]];
        var d = "M" + pts.map(function (p) { return px(p[0]).toFixed(1) + " " + py(p[1]).toFixed(1); }).join(" L");
        s += '<path d="' + d + '" fill="none" stroke="#7C6B52" stroke-width="2.2"/>';
        s += '<circle cx="' + px(1300) + '" cy="' + py(100) + '" r="4" fill="#201E1B"/>' +
             '<text x="' + (px(1300) - 6) + '" y="' + (py(100) + 18) + '" text-anchor="end" ' + F + ' font-size="9.5" fill="#201E1B">' + L({en:"Hōryū-ji timbers",ja:"法隆寺の古材",zh:"法隆寺古材"}) + '</text>' +
             '<text x="' + (px(200) + 4) + '" y="' + (py(120) - 8) + '" ' + F + ' font-size="9.5" fill="#201E1B">' + L({en:"about +20% at ~200 years",ja:"約200年で約2割増",zh:"約 200 年時約增 20%"}) + '</text>';
        /* right: Kiso five */
        var R = 490;
        s += '<text x="' + R + '" y="70" ' + F + ' font-size="10" fill="#8B857C" letter-spacing="1.4">' + L({en:"THE KISO FIVE",ja:"木曽五木",zh:"木曾五木"}) + '</text>';
        var five = [
          [{en:"Hinoki",ja:"ヒノキ（檜）",zh:"檜木"}, {en:"Japanese cypress",ja:"",zh:"日本扁柏"}],
          [{en:"Sawara",ja:"サワラ（椹）",zh:"花柏"}, {en:"sawara cypress",ja:"",zh:"日本花柏"}],
          [{en:"Asunaro",ja:"アスナロ（翌檜）",zh:"羅漢柏"}, {en:"hiba arborvitae",ja:"",zh:"翌檜"}],
          [{en:"Nezuko",ja:"ネズコ（鼠子）",zh:"日本香柏"}, {en:"Japanese thuja",ja:"",zh:"鼠子"}],
          [{en:"Kōyamaki",ja:"コウヤマキ（高野槙）",zh:"日本金松"}, {en:"umbrella pine",ja:"",zh:"高野槙"}]
        ];
        five.forEach(function (f, i) {
          var y = 100 + i * 36;
          s += '<path d="M' + R + ' ' + (y + 2) + ' l6 -12 l6 12 z" fill="#E0E6DB" stroke="#7C6B52"/>' +
               '<text x="' + (R + 20) + '" y="' + y + '" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(f[0]) + '</text>';
          var sub = L(f[1]);
          if (sub) s += '<text x="' + (R + 20) + '" y="' + (y + 14) + '" ' + F + ' font-size="9.5" fill="#8B857C">' + sub + '</text>';
        });
        s += '<text x="' + R + '" y="292" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"4 banned 1708; nezuko added 1728",ja:"1708年に四種、1728年にネズコを追加",zh:"1708 年禁伐四種；1728 年加入鼠子"}) + '</text>' +
             '<text x="30" y="346" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — curve after Obara Jirō's published summary; not measured data.",ja:"模式図——曲線は小原二郎の公表した要旨による。実測値ではない。",zh:"示意圖——曲線依小原二郎發表的概要繪製，並非實測數據。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"why",
      title:{ en:"Why hinoki", ja:"なぜ檜なのか", zh:"為何是檜木" }, jp:"材の性質",
      body:[
        { t:"p", text:{
          en:"Hinoki grows slowly into a tall, straight trunk with few branches low down. Its wood is fine, even and pale, with a pink or yellow cast in the heart; it planes to a lustrous surface that needs no finish, smells clean and resinous for decades, and resists decay and insects better than most softwoods. It is also unusual in how it ages. The wood scientist Obara Jirō, working with the temple carpenter Nishioka Tsunekazu on the timbers of Hōryū-ji, reported that hinoki keeps growing stiffer and harder for about two hundred years after it is cut — by roughly a fifth — and then weakens so slowly that the thirteen-hundred-year-old pillars of Hōryū-ji are about as strong as new wood. It is the reason carpenters say a building of good hinoki should last as long as the tree took to grow.",
          ja:"檜はゆっくりと育ち、下枝の少ない、高くまっすぐな幹になる。材はきめ細かく均質で白く、心材はわずかに桃色や黄色を帯びる。鉋をかけると仕上げのいらない艶のある面になり、何十年も清らかな脂の香りを放ち、多くの針葉樹よりも腐朽と虫に強い。年の取り方も独特である。木材学者・小原二郎は、宮大工・西岡常一とともに法隆寺の古材を調べ、檜は伐られてから約二百年のあいだ剛性と硬さを増しつづけ——およそ二割——、その後はきわめてゆっくり衰えるため、千三百年を経た法隆寺の柱も新材とほぼ同じ強さを保っていると報告した。良い檜で建てた建物は、その木が育つのにかかった年月だけもつ、と大工が言うのはそのためである。",
          zh:"檜木生長緩慢，長成下部少枝、高而筆直的樹幹。木材細緻、均勻、色淺，心材略帶粉紅或黃色；刨光後即呈現無需塗裝的光澤表面，數十年間散發清新的樹脂香氣，抗腐朽與蟲害的能力也勝過多數針葉材。它的老化方式也很特別。木材學者小原二郎與宮大工西岡常一一同研究法隆寺的古材，指出檜木在伐下後約兩百年間會持續變得更剛、更硬——約增加兩成——之後衰減極其緩慢，使得歷經一千三百年的法隆寺柱子，強度仍與新材相當。這正是木匠常說「好檜木造的建築，能存續與樹木生長同樣久的歲月」的原因。" } }
      ]
    },

    { t:"section", id:"five",
      title:{ en:"One tree, one head", ja:"檜一本、首一つ", zh:"一棵樹，一顆頭" }, jp:"木曽五木 · 停止木 · 留山",
      body:[
        { t:"p", text:{
          en:"The castles, temples and cities of the early seventeenth century were built at a terrible cost to the forests of central Japan, and by the middle of the century the Kiso valley, which had passed to the Owari branch of the Tokugawa in 1615, had been cut over. In 1665 the domain closed its best forests entirely — the <em>tomeyama</em>, closed mountains, and <em>suyama</em>, kept for the goshawks of the lord's falconry. In 1708 it forbade the felling of four conifers throughout the valley, hinoki, sawara, asunaro and kōyamaki, and in 1728 added nezuko: the five were known as the <strong>Kiso Five Trees</strong>, <em>Kiso goboku</em>, or simply as the forbidden trees. The penalty was summed up in a saying — <em>ki ippon, kubi hitotsu</em>, a tree for a head — and even if executions for felling were rare, the protection held. Much of the natural hinoki left in Japan today survives because of it.",
          ja:"十七世紀初めの城や寺や町は、中部日本の森に大きな犠牲を強いて建てられ、1615年に尾張徳川家の領となった木曽谷も、世紀の半ばには伐り尽くされていた。1665年、尾張藩は最良の森を完全に閉ざした——留山と、藩主の鷹狩りの鷹の巣を守る巣山である。1708年には谷の全域で檜・椹・翌檜・高野槙の四種の伐採を禁じ、1728年に鼠子を加えた。この五種が<strong>木曽五木</strong>、あるいは停止木である。罰は「木一本、首一つ」という言葉に要約された。伐採による処刑は実際には稀であったとしても、保護は守られた。いま日本に残る天然の檜の多くは、そのおかげで生き延びている。",
          zh:"十七世紀初期的城郭、寺院與城市，是以中部日本森林的慘重代價建成的；1615 年歸屬尾張德川家的木曾谷，到了世紀中葉已被砍伐殆盡。1665 年，尾張藩將最好的森林全面封閉——即「留山」（封山），以及為藩主鷹獵保護鷹巢的「巢山」。1708 年，又在全谷禁止砍伐檜木、花柏、羅漢柏、高野槙四種針葉樹，1728 年再加入鼠子：這五種便是<strong>木曾五木</strong>，也稱「停止木」。懲罰濃縮為一句俗語——「木一本，首一顆」；即使真正因伐木而處死的例子很少，這項保護依然得到遵守。今日日本殘存的天然檜木，許多正因此而得以倖存。" } },
        { t:"p", text:{
          en:"The forests on the western, Mino side of the Kiso mountains — the <strong>Ura-Kiso</strong>, “behind Kiso”, around the villages of Tsukechi, Kawaue and Kashimo, now all in Nakatsugawa — were part of the same Owari forests under the same rules. Their timber is sold today as <strong>Tōnō hinoki</strong>. Grown slowly on thin, dry soils in a climate of hot days and cold nights, it has narrow, even, almost perfectly round growth rings two to three millimetres apart, a faint pink colour and a high oil content. Across the ridge in Nagano the same wood is called Kiso hinoki. The most famous stand on the Gifu side, the Kiso Hinoki Reserve Forest at Kashimo, is described on <a href=\"forests.html\">The Forests</a>.",
          ja:"木曽の山の西、美濃側の森——付知・川上・加子母の村々のあたりで、いまはみな中津川市に属する<strong>裏木曽</strong>——も、同じ尾張藩の森として同じ掟のもとにあった。その木はいま<strong>東濃ひのき</strong>として売られる。痩せて乾いた土に、昼暑く夜冷える気候のなかでゆっくりと育つため、年輪は二〜三ミリの幅で細かく均一で、ほとんど真円を描き、かすかな桃色を帯び、脂分が多い。尾根を越えた長野側では、同じ木が木曽ひのきと呼ばれる。岐阜側で最も名高い加子母の木曽ひのき備林については<a href=\"forests.html\">森林</a>の頁を参照。",
          zh:"木曾山脈西側、美濃一側的森林——即位於付知、川上、加子母諸村一帶、如今都屬中津川市的<strong>裏木曾</strong>（意為「木曾之後」）——同屬尾張藩的森林，受同樣規則管轄。其木材今日以<strong>東濃檜</strong>之名販售。它在貧瘠乾燥的土壤、晝熱夜寒的氣候中緩慢生長，年輪細密均勻、間距二至三公釐，幾乎是正圓，帶淡粉紅色，油分含量高。山脊另一側的長野，同樣的木材稱為木曾檜。岐阜一側最著名的林分——加子母的木曾檜備林——請見<a href=\"forests.html\">森林</a>頁。" } }
      ]
    },

    { t:"section", id:"ise",
      title:{ en:"Timber for Ise", ja:"伊勢へ送る木", zh:"送往伊勢的木材" }, jp:"式年遷宮 · 御杣山 · 御樋代木",
      body:[
        { t:"p", text:{
          en:"Every twenty years the Inner and Outer Shrines of Ise and their many subsidiary shrines are rebuilt, identical, on the plot beside the old ones — the <em>Shikinen Sengū</em>. Each rebuilding takes about 8,500 cubic metres of hinoki, roughly ten thousand trees. The mountains that supply it are called <em>misoma-yama</em>; since the Edo period they have been the Kiso forests, and today they are the national forests of Agematsu in Nagano and of Ura-Kiso in Gifu. Since the rebuilding of 2013, part of the timber has again come from the shrines' own forest at Ise, planted from the 1920s for the purpose.",
          ja:"二十年ごとに、伊勢の内宮と外宮、そして多くの別宮・摂社が、古い社殿の隣の敷地にまったく同じ姿で建て替えられる——式年遷宮である。一度の遷宮には約8,500立方メートル、およそ一万本の檜を要する。それを出す山を御杣山という。江戸時代以来それは木曽の森であり、いまは長野県上松町と岐阜県の裏木曽の国有林である。2013年の遷宮からは、1920年代からそのために育ててきた神宮の宮域林から、再び用材の一部が伐り出されている。",
          zh:"每隔二十年，伊勢的內宮與外宮及其眾多別宮、攝社，會在舊社殿旁的地塊上以完全相同的樣貌重建——這就是「式年遷宮」。每次重建需要約 8,500 立方公尺的檜木，約一萬棵樹。供應木材的山稱為「御杣山」；自江戶時代起一直是木曾的森林，如今則是長野縣上松町與岐阜縣裏木曾的國有林。自 2013 年的遷宮起，部分用材再度取自神宮自有的宮域林——那是從 1920 年代起專為此目的而種植的森林。" } },
        { t:"p", text:{
          en:"The rebuilding due in 2033, the sixty-third, began in the forests. In June 2025 two great hinoki were felled with axes in the Kiso forest at Agematsu, and on 5 June a felling ceremony for the Ura-Kiso timber was held in the national forest at Kashimo. The trees are brought down by the old <em>mitsu-himo-giri</em> method, cut in from three sides so that three “cords” of wood hold the tree until the last is severed. Their timber becomes the <em>mihishiro</em>, the vessels that hold the deity's emblem, and is carried in procession through Nakatsugawa and the towns on the way to Ise.",
          ja:"2033年に予定される第六十三回の遷宮は、森から始まった。2025年6月、上松町の木曽の森で二本の大檜が斧で伐られ、6月5日には加子母の国有林で裏木曽御用材の伐採式が行われた。木は古式の「三ツ紐伐り」で倒される。三方から斧を入れ、三本の紐のように残した部分で木を支え、最後の一本を断って倒す。その材は御神体を納める御樋代となり、中津川市内から伊勢への道中の町々を奉曳されていく。",
          zh:"預定於 2033 年舉行的第六十三次遷宮，是從森林開始的。2025 年 6 月，兩棵巨大的檜木在上松町的木曾森林以斧頭伐下；6 月 5 日，加子母的國有林也舉行了裏木曾御用材的伐採儀式。樹木以古老的「三紐伐」法放倒：從三個方向砍入，留下三道如繩索般的木質撐住樹身，直到砍斷最後一道。其木材將製成安放神體的「御樋代」，並以遊行方式運經中津川市內及前往伊勢沿途的城鎮。" } }
      ]
    },

    { t:"related", items:[
      { href:"forests.html", why:{ en:"The Kiso Hinoki Reserve Forest at Kashimo.", ja:"加子母の木曽ひのき備林。", zh:"加子母的木曾檜備林。" } },
      { href:"logging.html", why:{ en:"How hinoki is grown and felled today.", ja:"いま檜はどう育てられ、伐られるか。", zh:"今日檜木如何培育與採伐。" } },
      { href:"rafting.html", why:{ en:"How the Kiso timber reached the sea.", ja:"木曽の木はどう海へ出たか。", zh:"木曾的木材如何抵達大海。" } },
      { href:"kabuki.html", why:{ en:"A theatre built from Kashimo's forest.", ja:"加子母の森で建てた芝居小屋。", zh:"以加子母森林建成的戲棚。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- logging */
GIFU.pages["logging"] = {
  kicker: { en: "Wood · 03", ja: "木 · 03", zh: "木 · 03" },
  title:  { en: "Logging & Forestry", ja: "林業", zh: "林業" },
  jp: "植林 · 下刈り · 間伐 · 主伐 · 葉枯らし · 架線集材",
  lede: {
    en: "A plantation of hinoki is a crop that takes a lifetime: planted by one generation, weeded, pruned and thinned by the next, and harvested by a third. Gifu's post-war forests have now reached harvesting age at a time when few people work in the mountains and timber is cheap. How the prefecture grows, cuts and moves its trees — on some of the steepest forest land in Japan — decides what every other page in this part has to work with.",
    ja: "檜の人工林は、一生がかりの作物である。ある世代が植え、次の世代が下刈りをし、枝を打ち、間伐し、三つ目の世代が収穫する。岐阜の戦後の森はいま伐期に達したが、山で働く人は少なく、木は安い。日本でも有数の急峻な森林で、県がどのように木を育て、伐り、運ぶかが、この部のほかのすべての頁の材料を決めている。",
    zh: "檜木人工林是一種耗費一生的作物：由一代人種下，下一代除草、修枝、疏伐，再由第三代收成。岐阜戰後種下的森林如今已達可伐年齡，但在山裡工作的人很少，木材又便宜。這個縣如何在日本數一數二陡峭的林地上培育、採伐與搬運樹木，決定了本部分其他各頁所能使用的材料。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The life of a conifer plantation, schematic. Seedlings are planted close together, weeded every summer for the first years, cleaned of vines and unwanted trees, pruned for knot-free timber, and thinned several times before the final harvest; then the ground is replanted. Timings are typical and vary with species, site and aim — hinoki for fine timber is often grown well past eighty years.",
        ja:"人工林の一生（模式図）。苗木を密に植え、はじめの数年は毎夏下刈りをし、つるや不要な木を除き、節のない材をとるために枝を打ち、何度か間伐したうえで主伐する。その後、地拵えをして植え直す。時期は典型的なもので、樹種・立地・目的によって変わる。良材をとる檜はしばしば八十年をはるかに超えて育てられる。",
        zh:"針葉樹人工林的一生（示意圖）。苗木密植，最初幾年每個夏天除草，清除藤蔓與不要的樹，修枝以取得無節良材，在最終主伐前進行多次疏伐；之後整地重新造林。時間為典型值，會因樹種、立地與目的而異——培育良材的檜木常養到遠超過八十年。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 380" role="img" aria-label="Schematic life of a conifer plantation">' +
          '<rect x="0.5" y="0.5" width="759" height="379" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"A PLANTATION'S LIFE", ja:"人工林の一生", zh:"人工林的一生" }) + '</text>';
        var X0 = 210, X1 = 720;
        function px(y) { return X0 + (y / 100) * (X1 - X0); }
        /* growing trees along top */
        [[2,8],[10,16],[25,30],[45,44],[70,56],[95,62]].forEach(function (t) {
          var x = px(t[0]), h = t[1];
          s += '<path d="M' + x + ' 116 L' + (x - h / 4) + ' ' + (116 - h * 0.25) + ' L' + x + ' ' + (116 - h) + ' L' + (x + h / 4) + ' ' + (116 - h * 0.25) + ' Z" fill="#E0E6DB" stroke="#7C6B52"/>' +
               '<line x1="' + x + '" y1="116" x2="' + x + '" y2="122" stroke="#7C6B52"/>';
        });
        s += '<line x1="' + X0 + '" y1="122" x2="' + X1 + '" y2="122" stroke="#B4AC9C"/>';
        /* axis */
        [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].forEach(function (y) {
          s += '<line x1="' + px(y) + '" y1="330" x2="' + px(y) + '" y2="334" stroke="#55504A"/>' +
               '<text x="' + px(y) + '" y="346" text-anchor="middle" ' + F + ' font-size="9.5" fill="#8B857C">' + y + '</text>';
          if (y > 0) s += '<line x1="' + px(y) + '" y1="132" x2="' + px(y) + '" y2="328" stroke="#F0EDE4"/>';
        });
        s += '<line x1="' + X0 + '" y1="330" x2="' + X1 + '" y2="330" stroke="#55504A"/>' +
             '<text x="' + X1 + '" y="362" text-anchor="end" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"years after planting",ja:"植えてからの年数",zh:"種植後年數"}) + '</text>';
        var rows = [
          [{en:"Plant",ja:"植え付け",zh:"種植"}, {en:"a few thousand seedlings per ha",ja:"1ヘクタールに数千本",zh:"每公頃數千株"}, [[0, 1.2]], "#E0E6DB"],
          [{en:"Weed",ja:"下刈り",zh:"除草"}, {en:"every summer",ja:"毎夏",zh:"每年夏季"}, [[1, 7]], "#EDE5D2"],
          [{en:"Clean",ja:"つる切り・除伐",zh:"除蔓、除伐"}, {en:"vines, unwanted trees",ja:"つる・不要木",zh:"藤蔓、不要的樹"}, [[8, 16]], "#E6E4E0"],
          [{en:"Prune",ja:"枝打ち",zh:"修枝"}, {en:"for knot-free timber",ja:"無節の材のため",zh:"為取得無節材"}, [[10, 28]], "#E9ECEE"],
          [{en:"Thin",ja:"間伐",zh:"疏伐"}, {en:"several times",ja:"数回",zh:"數次"}, [[18, 22], [28, 32], [38, 42], [52, 56]], "#EADCC1"],
          [{en:"Harvest",ja:"主伐",zh:"主伐"}, {en:"then replant",ja:"のち再造林",zh:"之後再造林"}, [[50, 100]], "#EEE1DF"]
        ];
        rows.forEach(function (r, i) {
          var y = 140 + i * 31;
          s += '<text x="30" y="' + (y + 11) + '" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L(r[0]) + '</text>' +
               '<text x="30" y="' + (y + 23) + '" ' + F + ' font-size="9" fill="#8B857C">' + L(r[1]) + '</text>';
          r[2].forEach(function (g) {
            s += '<rect x="' + px(g[0]).toFixed(1) + '" y="' + (y + 3) + '" width="' + (px(g[1]) - px(g[0])).toFixed(1) + '" height="16" fill="' + r[3] + '" stroke="#7C6B52" stroke-width="0.8"' + (i === 5 ? ' stroke-dasharray="4 2"' : '') + '/>';
          });
        });
        s += '<text x="' + (px(50) + 6) + '" y="' + (140 + 5 * 31 + 15) + '" ' + F + ' font-size="9" fill="#55504A">' + L({en:"standard from ~50 yrs; fine hinoki often 80–100+",ja:"標準は50年ごろから。良材の檜は80〜100年超も",zh:"一般約 50 年起；良材檜木常養 80–100 年以上"}) + '</text>' +
             '<text x="30" y="362" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — typical timings",ja:"模式図——典型的な時期",zh:"示意圖——典型時程"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"growing",
      title:{ en:"Growing a crop that takes a lifetime", ja:"一生がかりの作物を育てる", zh:"培育一種耗費一生的作物" }, jp:"育林",
      body:[
        { t:"p", text:{
          en:"The work of a plantation is mostly done long before any timber is sold. Seedlings are set out closely, so that the young trees compete, grow straight and shed their lower branches. For the first several summers the grass, bamboo grass and shrubs around them are cut by hand — <em>shitagari</em>, the hardest and hottest work in forestry. Vines are cut and unwanted trees removed; the trunks of trees meant for fine timber are pruned high, so that the wood laid down afterwards is free of knots. From about twenty years, stands are thinned again and again to give the best trees room, and the thinnings are sold if a market can be found. Clear-felling usually comes after fifty years or more; hinoki meant for temples, fine interiors or Ise may be left to grow for a century.",
          ja:"人工林の仕事の大半は、木材が売れるずっと前に行われる。苗木は密に植えられ、若木は互いに競って、まっすぐ伸び、下枝を落とす。はじめの数年の夏は、まわりの草やササや低木を手で刈る——下刈りで、林業でいちばんつらく、暑い仕事である。つるを切り、不要な木を除き、良材にする木は幹の高いところまで枝を打って、その後に育つ部分に節が入らないようにする。二十年ほどからは、良い木に場所をあけるため繰り返し間伐し、買い手があれば間伐材を売る。皆伐はふつう五十年以上たってからで、社寺や上等な内装や伊勢に向ける檜は百年も育てることがある。",
          zh:"人工林的工作，大多在任何木材出售之前很久就已完成。苗木密植，讓幼樹相互競爭、長得筆直並自然脫落下枝。最初幾年的夏天，要以人工割除周圍的雜草、矮竹與灌木——這就是「下刈」，林業中最辛苦、最炎熱的工作。接著砍除藤蔓、清除不要的樹；打算培育成良材的樹要修枝到很高處，讓之後長出的木材沒有節。大約二十年起，要一再疏伐，給最好的樹騰出空間，疏伐材若能找到買主便出售。皆伐通常在五十年以上之後；要用於寺社、高級室內裝修或伊勢的檜木，可能會養上一百年。" } }
      ]
    },

    { t:"section", id:"cutting",
      title:{ en:"Cutting on steep ground", ja:"急斜面で伐る", zh:"在陡坡上採伐" }, jp:"伐倒 · 葉枯らし · 架線集材 · 高性能林業機械",
      body:[
        { t:"p", text:{
          en:"A tree is felled with a chainsaw: a notch cut on the side it is to fall towards, then a back cut that leaves a strip of uncut wood as a hinge to steer it down. Some Tōnō and Kiso cutters still practise <strong>leaf-seasoning</strong>, <em>hagarashi</em>: the felled tree is left on the slope with its crown on for a season, so that the leaves go on drawing water out of the trunk. The wood dries slowly and evenly, cracks less, and keeps a better colour and smell than wood dried fast in a kiln.",
          ja:"木はチェーンソーで倒す。倒したい側に受け口を切り、反対から追い口を入れ、切り残した「つる」を蝶番のようにして倒れる向きを導く。東濃や木曽の伐り手のなかには、いまも<strong>葉枯らし</strong>をする者がいる。倒した木を枝葉をつけたまま一季節斜面に置き、葉に幹の水を吸い出させるのである。材はゆっくりむらなく乾き、割れが少なく、窯で急いで乾かした材よりも色と香りがよく残る。",
          zh:"樹木以鏈鋸伐倒：先在預定倒下的一側鋸出切口，再從另一側鋸入追口，留下一條未鋸斷的木質作為鉸鏈，引導樹身倒下的方向。東濃與木曾的一些伐木者至今仍實行<strong>葉枯乾燥</strong>（葉枯らし）：伐倒的樹連同樹冠在坡上放置一季，讓葉子繼續把樹幹裡的水分吸出。木材因此緩慢而均勻地乾燥，較少開裂，色澤與香氣也比窯中快速乾燥的木材保存得更好。" } },
        { t:"p", text:{
          en:"Getting the logs out is the expensive part. On gentle ground a network of forest roads lets machines work — a harvester that fells, strips and cuts to length in one pass, and a forwarder that carries the logs to the roadside. Much of Gifu is too steep for that, and there the logs are lifted out on cables strung across the valley from a tower or from a crane on the road, a method called <em>kasen shūzai</em>. Before roads and trucks the rivers did the carrying — see <a href=\"rafting.html\">Timber Down the Rivers</a>.",
          ja:"丸太を運び出すところに費用がかかる。緩やかな斜面では林道網のおかげで機械が働ける。伐倒・枝払い・玉切りを一度にこなすハーベスタと、丸太を道端まで運ぶフォワーダである。岐阜の多くはそれには急すぎ、そこでは谷を渡して張ったワイヤーでタワーや道路上のクレーンから丸太を吊り出す。架線集材である。道とトラックの前には、川が運び手であった——<a href=\"rafting.html\">川を下った木</a>を参照。",
          zh:"把原木運出山外才是花錢的部分。在較緩的坡地上，林道網讓機械得以作業——一次完成伐倒、去枝、截段的收穫機，以及把原木運到路邊的集材車。岐阜大部分地方太陡，無法如此，只能從塔架或路上的吊車拉設跨越山谷的鋼索，把原木吊出，稱為「架線集材」。在道路與卡車出現之前，運送的工作由河流擔任——見<a href=\"rafting.html\">順流而下的木材</a>。" } }
      ]
    },

    { t:"section", id:"industry",
      title:{ en:"After the long fall", ja:"長い低迷のあとで", zh:"漫長低迷之後" }, jp:"木材価格 · 自給率 · 担い手",
      body:[
        { t:"p", text:{
          en:"When imports of timber were freed in the 1960s, cheaper wood from North America, South-East Asia and later Europe took the market, and the price of Japanese logs fell for decades. Owners stopped thinning; the people who had planted the forests grew old. Japan's timber self-sufficiency, which had fallen below a fifth around the turn of the century, recovered to about two-fifths by the early 2020s, helped by new uses for domestic wood — laminated timber and cross-laminated panels, plywood from thinnings, and wood-fired power — and by the price shocks of imported timber. Gifu produced about 576,000 cubic metres of timber in 2020.",
          ja:"1960年代に木材の輸入が自由化されると、北米や東南アジア、のちには欧州からのより安い木が市場を奪い、国産材の丸太価格は何十年も下がり続けた。所有者は間伐をやめ、森を植えた人々は年老いた。世紀の変わり目のころ二割を切っていた日本の木材自給率は、2020年代初めには約四割まで回復した。集成材やCLT、間伐材からの合板、木質バイオマス発電といった国産材の新しい使い道と、輸入材の価格高騰が後押しした。岐阜県の木材生産量は2020年に約57万6千立方メートルであった。",
          zh:"1960 年代木材進口自由化後，來自北美、東南亞以及後來歐洲的較便宜木材奪走了市場，日本原木價格連續下跌數十年。林主停止疏伐；當年種下森林的人們也逐漸老去。日本的木材自給率在世紀之交一度跌破兩成，到 2020 年代初已回升至約四成——這得益於國產材的新用途，例如集成材與直交集成板（CLT）、以疏伐材製成的合板、木質生質能發電，以及進口木材價格的劇烈波動。岐阜縣 2020 年的木材產量約為 57.6 萬立方公尺。" } },
        { t:"p", text:{
          en:"The harder shortage is people. Fewer than fifty thousand people now work in forestry across Japan. A national programme begun in 2003, <em>Midori no Koyō</em> — “green employment” — pays for the training of new recruits and has raised the number of newcomers to the trade by more than half. Gifu trains its own at the <a href=\"forests.html\">Gifu Academy of Forest Science and Culture</a> in Mino, and since 2024 most residents of Japan have paid a national forest environment tax of ¥1,000 a year, on top of Gifu's own forest tax, much of it spent on thinning neglected plantations.",
          ja:"より深刻なのは人手の不足である。いま日本全体で林業に従事する人は五万人に満たない。2003年に始まった国の「緑の雇用」事業は、新たな就業者の研修費を支え、新規就業者の数を五割以上増やした。岐阜県は美濃市の<a href=\"forests.html\">岐阜県立森林文化アカデミー</a>で自ら担い手を育て、2024年からは日本の住民の多くが年1,000円の国の森林環境税を、岐阜県独自の森林税に加えて納めている。その多くは手入れの遅れた人工林の間伐に使われる。",
          zh:"更嚴重的短缺是人力。如今全日本從事林業的人不到五萬。2003 年開始的國家計畫「綠色雇用」（緑の雇用）負擔新進人員的培訓費用，使入行新人增加了五成以上。岐阜縣在美濃市的<a href=\"forests.html\">岐阜縣立森林文化學院</a>培養自己的人才；自 2024 年起，日本大多數居民除了岐阜縣自己的森林稅之外，每年還須繳納 1,000 日圓的國家森林環境稅，其中大部分用於疏伐疏於照料的人工林。" } }
      ]
    },

    { t:"related", items:[
      { href:"forests.html", why:{ en:"The forests being managed.", ja:"管理される森そのもの。", zh:"被經營的森林本身。" } },
      { href:"hinoki.html", why:{ en:"The tree most worth growing slowly.", ja:"ゆっくり育てる価値のある木。", zh:"最值得慢慢培育的樹。" } },
      { href:"furniture.html", why:{ en:"New uses for thinned cedar.", ja:"間伐した杉の新しい使い道。", zh:"疏伐杉木的新用途。" } },
      { href:"future.html", why:{ en:"What the next twenty years may bring.", ja:"これからの二十年。", zh:"未來二十年的展望。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- rafting */
GIFU.pages["rafting"] = {
  kicker: { en: "Wood · 04", ja: "木 · 04", zh: "木 · 04" },
  title:  { en: "Timber Down the Rivers", ja: "川を下った木", zh: "順流而下的木材" },
  jp: "管流し · 綱場 · 筏 · 錦織 · 下麻生 · 白鳥貯木場",
  lede: {
    en: "For three hundred years the timber of Kiso, Ura-Kiso and Hida came out of the mountains on the rivers. Logs were floated down the gorges one by one, caught at great rope booms across the river, lashed into rafts and steered to the sea at Kuwana and Atsuta. The Owari domain and the shogunate ran the system like a state enterprise, with magistrates, inspectors and hundreds of workers. Railways, dams and trucks ended it within living memory.",
    ja: "三百年にわたって、木曽・裏木曽・飛騨の木は川に乗って山を出た。丸太は峡谷を一本ずつ流され、川を横切る大きな綱で受け止められ、筏に組まれ、桑名や熱田の海まで操られていった。尾張藩と幕府は、奉行や役人と数百の働き手を抱えて、この仕組みを国の事業のように運営した。鉄道とダムとトラックが、人々の記憶のうちにそれを終わらせた。",
    zh: "三百年間，木曾、裏木曾與飛驒的木材是乘著河流出山的。原木在峽谷中一根一根漂流而下，被橫跨河面的巨大繩索攔住，綁成木筏，再撐向桑名與熱田的海邊。尾張藩與幕府像經營國營事業一樣管理這套系統，設有奉行、檢查官與數以百計的工人。鐵路、水壩與卡車在人們仍記得的年代裡終結了它。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"How timber reached the sea, schematic. In the upper valleys logs were floated loose, one at a time (<em>kuda-nagashi</em>). At the <em>tsunaba</em>, rope-boom stations, they were stopped, counted and inspected and made into rafts: Nishikori on the Kiso for the Owari domain's timber, and Shimohara and Shimo-asō on the Hida river for the timber of Hida. The rafts went down to Kuwana, or along the coast to the Owari timber yard at Shiratori in Atsuta.",
        ja:"木はどう海へ出たか（模式図）。上流の谷では丸太を一本ずつばらで流した（管流し）。綱場で止めて数え、改め、筏に組んだ。尾張藩の材は木曽川の錦織で、飛騨の材は飛騨川の下原と下麻生で。筏は桑名へ、あるいは海沿いに熱田の尾張藩白鳥貯木場へ下った。",
        zh:"木材如何抵達大海（示意圖）。在上游河谷，原木一根一根散放漂流（管流）。在「綱場」——攔木繩站——原木被攔下、清點、檢查，再綁成木筏：尾張藩的木材在木曾川的錦織，飛驒的木材在飛驒川的下原與下麻生。木筏順流而下到桑名，或沿海岸前往熱田的尾張藩白鳥貯木場。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 430" role="img" aria-label="Schematic of timber floated down the Kiso and Hida rivers">' +
          '<rect x="0.5" y="0.5" width="759" height="429" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"TIMBER TO THE SEA", ja:"木を海へ", zh:"木材入海" }) + '</text>';
        /* sea */
        s += '<rect x="30" y="384" width="700" height="28" fill="#E0E7E9"/>' +
             '<text x="600" y="402" ' + F + ' font-size="10" font-style="italic" fill="#5E7780">' + L({en:"Ise Bay",ja:"伊勢湾",zh:"伊勢灣"}) + '</text>';
        /* source boxes */
        s += '<rect x="560" y="52" width="170" height="40" fill="#E0E6DB" stroke="#7C6B52"/>' +
             '<text x="645" y="76" text-anchor="middle" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"KISO · URA-KISO",ja:"木曽・裏木曽",zh:"木曾・裏木曾"}) + '</text>' +
             '<rect x="250" y="52" width="140" height="40" fill="#E0E6DB" stroke="#7C6B52"/>' +
             '<text x="320" y="76" text-anchor="middle" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"HIDA",ja:"飛騨",zh:"飛驒"}) + '</text>';
        /* rivers: loose section dashed, raft section double */
        var loose = 'fill="none" stroke="#8FA6AE" stroke-width="2" stroke-dasharray="6 4"';
        var raft = 'fill="none" stroke="#8FA6AE" stroke-width="5"';
        s += '<path d="M645 92 C630 130 590 170 520 204" ' + loose + '/>' +
             '<path d="M520 204 C490 216 460 226 432 236" ' + raft + '/>' +
             '<path d="M320 92 C322 120 326 140 332 156 C340 176 360 196 382 206" ' + loose + '/>' +
             '<path d="M382 206 C400 216 416 228 432 236" ' + raft + '/>' +
             '<path d="M432 236 C390 260 330 290 270 324 C230 346 196 364 172 384" ' + raft + '/>' +
             '<path d="M172 384 C230 392 290 394 340 392" fill="none" stroke="#7C6B52" stroke-width="1.4" stroke-dasharray="2 3"/>';
        /* river names */
        s += '<text x="610" y="150" ' + F + ' font-size="10" font-style="italic" fill="#5E7780">' + L({en:"Kiso",ja:"木曽川",zh:"木曾川"}) + '</text>' +
             '<text x="342" y="126" ' + F + ' font-size="10" font-style="italic" fill="#5E7780">' + L({en:"Hida River",ja:"飛騨川",zh:"飛驒川"}) + '</text>';
        /* Nishikori boom */
        s += '<path d="M512 188 L528 220" stroke="#201E1B" stroke-width="2"/>' +
             '<circle cx="516" cy="196" r="2.4" fill="#201E1B"/><circle cx="520" cy="204" r="2.4" fill="#201E1B"/><circle cx="524" cy="212" r="2.4" fill="#201E1B"/>' +
             '<text x="540" y="214" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"Nishikori (Yaotsu)",ja:"錦織綱場（八百津）",zh:"錦織綱場（八百津）"}) + '</text>' +
             '<text x="540" y="229" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"Owari rope boom; rafts made",ja:"尾張藩の綱場。筏に組む",zh:"尾張藩綱場；在此編筏"}) + '</text>';
        /* Hida stations */
        s += '<path d="M324 156 L340 156" stroke="#201E1B" stroke-width="2"/>' +
             '<text x="316" y="152" text-anchor="end" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"Shimohara (Kanayama)",ja:"下原綱場（金山）",zh:"下原綱場（金山）"}) + '</text>' +
             '<text x="316" y="166" text-anchor="end" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"logs stopped and inspected",ja:"材を止め改める",zh:"攔木檢查"}) + '</text>' +
             '<path d="M376 200 L388 212" stroke="#201E1B" stroke-width="2"/>' +
             '<text x="366" y="218" text-anchor="end" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"Shimo-asō (Kawabe)",ja:"下麻生綱場（川辺）",zh:"下麻生綱場（川邊）"}) + '</text>' +
             '<text x="366" y="232" text-anchor="end" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"rafts made",ja:"筏に組む",zh:"在此編筏"}) + '</text>';
        /* confluence and ends */
        s += '<circle cx="432" cy="236" r="3.5" fill="#FBFAF7" stroke="#201E1B"/>' +
             '<text x="442" y="256" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"Minokamo — the rivers join",ja:"美濃加茂——二川合流",zh:"美濃加茂——兩河匯流"}) + '</text>' +
             '<circle cx="172" cy="384" r="4" fill="#201E1B"/>' +
             '<text x="164" y="378" text-anchor="end" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"Kuwana",ja:"桑名",zh:"桑名"}) + '</text>' +
             '<rect x="336" y="386" width="8" height="8" fill="#201E1B"/>' +
             '<text x="352" y="370" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"Atsuta — Shiratori timber yard",ja:"熱田・白鳥貯木場",zh:"熱田——白鳥貯木場"}) + '</text>';
        /* legend */
        s += '<line x1="30" y1="300" x2="58" y2="300" stroke="#8FA6AE" stroke-width="2" stroke-dasharray="6 4"/>' +
             '<text x="64" y="304" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"loose logs (kuda-nagashi)",ja:"管流し（ばら流し）",zh:"散漂原木（管流）"}) + '</text>' +
             '<line x1="30" y1="318" x2="58" y2="318" stroke="#8FA6AE" stroke-width="5"/>' +
             '<text x="64" y="322" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"rafts",ja:"筏",zh:"木筏"}) + '</text>' +
             '<text x="30" y="424" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — not to scale. Northern Hida timber went the other way, down the Takahara and Jinzū to Toyama.",ja:"模式図——縮尺不同。飛騨北部の材は逆に高原川・神通川を下って富山へ出た。",zh:"示意圖——未按比例。飛驒北部的木材則反向沿高原川、神通川而下運往富山。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"loose",
      title:{ en:"Loose logs", ja:"ばらの丸太", zh:"散漂的原木" }, jp:"管流し",
      body:[
        { t:"p", text:{
          en:"In the upper valleys the rivers were too narrow, steep and rocky for rafts. Felled trees were cut into logs, dragged or slid down chutes to the water and released to float one at a time — <em>kuda-nagashi</em>, “pipe-floating”. Gangs of log drivers followed them downstream along the banks and in the water, freeing jams with hooked poles. Drives were made in the low-water months after the harvest, when the farm work was done and the rivers were least dangerous; a sudden flood could scatter a season's timber or carry it away.",
          ja:"上流の谷の川は、筏を通すには狭く、急で、岩が多すぎた。伐った木は丸太に切られ、引きずられたり修羅（木の滑り道）を滑らされたりして水辺に下ろされ、一本ずつ流された——管流しである。川狩りの人夫の組が岸や水のなかを下流へ追い、鳶口で詰まった丸太をほぐした。流しは取り入れを終えた渇水期に行われた。野良仕事が一段落し、川が最もおだやかな時期である。突然の出水は一季節分の材を散らし、流し去ることもあった。",
          zh:"在上游河谷，河道過窄、過陡、岩石過多，無法通行木筏。伐下的樹被截成原木，拖曳或沿木滑道（修羅）滑到水邊，再一根一根放流——這就是「管流」。一隊隊的放木工沿著河岸或在水中跟隨原木向下游走，用鉤竿疏通堵塞。放流在秋收後的枯水期進行，此時農事已告段落，河流也最不危險；一場突如其來的洪水，可能把一季的木材沖散或捲走。" } }
      ]
    },

    { t:"section", id:"nishikori",
      title:{ en:"Nishikori", ja:"錦織綱場", zh:"錦織綱場" }, jp:"八百津町 · 尾張藩",
      body:[
        { t:"p", text:{
          en:"Where the Kiso leaves its gorges at Yaotsu, the Owari domain stretched a great rope boom across the river at Nishikori and in 1665 set up an office there with its own timber magistrate. The loose logs from Kiso and Ura-Kiso were stopped at the boom, counted, checked for the domain's hammer marks and made into rafts, about 300,000 pieces a year, in a season running from the autumn to the spring equinox. Raftsmen then took the rafts down to Kuwana, or along the coast to the domain's timber yard at Shiratori in Atsuta, where the timber was sold to merchants; the yard is today a Japanese garden in Nagoya.",
          ja:"木曽川が八百津で峡谷を出るところ、錦織に尾張藩は川を横切る大綱を張り、1665年、材木奉行を置く役所を設けた。木曽・裏木曽からばらで流れてきた丸太は綱で止められ、数えられ、藩の極印を改められて筏に組まれた。その数は年に約三十万本、季節は秋の彼岸から春の彼岸までである。筏師は筏を桑名へ、あるいは海沿いに熱田の藩の白鳥貯木場へ運び、材はそこで商人に売られた。白鳥の跡はいま名古屋の日本庭園になっている。",
          zh:"在木曾川於八百津流出峽谷之處，尾張藩在錦織橫跨河面拉起巨大的攔木繩，並於 1665 年在此設立官署，派駐材木奉行。從木曾與裏木曾散漂而下的原木在繩前被攔下、清點、查驗藩的烙印，再綁成木筏，每年約三十萬根，作業季節從秋分到春分。筏師再把木筏撐到桑名，或沿海岸送到藩設在熱田的白鳥貯木場，木材在那裡賣給商人；貯木場舊址如今是名古屋的一座日本庭園。" } }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"Hida's timber", ja:"飛騨の材", zh:"飛驒的木材" }, jp:"下原綱場 · 下麻生綱場",
      body:[
        { t:"p", text:{
          en:"Hida's forests were cut for the market from the time of the Kanamori lords, and after 1692 for the shogunate, which took Hida under direct rule largely for its timber. Logs from the south of the province went down the Hida river and its tributary the Maze. At Shimohara in Kanayama they were stopped at a rope boom so that officials could inspect and record them; lower down, at Shimo-asō in Kawabe, they were made into rafts before joining the Kiso at Minokamo. Timber from the north of Hida went the other way, down the Takahara and the Jinzū to Toyama and the Sea of Japan.",
          ja:"飛騨の森は金森氏の時代から売るために伐られ、1692年以後は幕府のために伐られた。幕府が飛騨を直轄にしたのは、主にその木のためであった。国の南部の丸太は飛騨川とその支流の馬瀬川を下った。金山の下原では綱で止められ、役人が改めて記録した。さらに下流の川辺の下麻生で筏に組まれ、美濃加茂で木曽川に合わさった。飛騨北部の材は逆に、高原川と神通川を下って富山と日本海へ出た。",
          zh:"飛驒的森林從金森氏時代起就為市場而砍伐，1692 年後則為幕府而伐——幕府把飛驒收為直轄，很大程度上正是為了它的木材。飛驒南部的原木順著飛驒川及其支流馬瀨川而下。在金山的下原，原木被攔木繩攔住，由官員檢查登錄；更下游的川邊下麻生，則把原木綁成木筏，之後在美濃加茂匯入木曾川。飛驒北部的木材則反向沿高原川與神通川而下，前往富山與日本海。" } }
      ]
    },

    { t:"section", id:"end",
      title:{ en:"The end of the drives", ja:"流送の終わり", zh:"放流的終結" }, jp:"鉄道 · ダム · トラック",
      body:[
        { t:"p", text:{
          en:"Floating was slow, seasonal and lossy, and in the twentieth century everything turned against it. The Chūō line came up the Kiso valley in the 1900s, and forest railways were pushed into the Kiso forests from the 1910s. Hydro-electric dams, beginning with the Ōi dam at Ena, completed in 1924 for Fukuzawa Momosuke's Daidō Electric Power, cut the river into lakes. Trucks and forest roads did the rest; after the Second World War the rafts were no longer seen. The site of the Nishikori boom is marked beside the river at Yaotsu.",
          ja:"流送は遅く、季節に縛られ、損失も多く、二十世紀にはあらゆるものがそれに背を向けた。1900年代には中央線が木曽谷をのぼり、1910年代からは木曽の森に森林鉄道が延びた。福沢桃介の大同電力のために1924年に完成した恵那の大井ダムをはじめとする水力発電のダムが、川を湖に分断した。トラックと林道が残りを引き受け、第二次世界大戦後には筏はもう見られなくなった。錦織綱場の跡は八百津の川辺に記されている。",
          zh:"放流緩慢、受季節限制、損耗又多，到了二十世紀，一切都對它不利。1900 年代中央線沿木曾谷而上，1910 年代起森林鐵道也延伸進木曾的森林。水力發電水壩——從 1924 年為福澤桃介的大同電力竣工的惠那大井水壩開始——把河流切割成一座座湖泊。卡車與林道完成了其餘的轉變；第二次世界大戰後，木筏便再也不見蹤影。錦織綱場的遺址標示在八百津的河邊。" } }
      ]
    },

    { t:"related", items:[
      { href:"hinoki.html", why:{ en:"The timber the rafts carried.", ja:"筏が運んだ木。", zh:"木筏所載的木材。" } },
      { href:"rivers.html", why:{ en:"The three rivers themselves.", ja:"三つの川そのもの。", zh:"三條河流本身。" } },
      { href:"edo.html", why:{ en:"Owari, the shogunate and the Edo forests.", ja:"尾張藩と幕府と江戸の森。", zh:"尾張藩、幕府與江戶時代的森林。" } },
      { href:"roads.html", why:{ en:"The roads the timber did not take.", ja:"木が通らなかった道。", zh:"木材沒有走的道路。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- takumi */
GIFU.pages["takumi"] = {
  kicker: { en: "Wood · 05", ja: "木 · 05", zh: "木 · 05" },
  title:  { en: "Hida no Takumi", ja: "飛騨の匠", zh: "飛驒工匠" },
  jp: "飛騨工 · 匠丁 · 養老令 · 日本遺産「飛騨匠の技・こころ」",
  lede: {
    en: "Hida was too poor and too mountainous to pay the ancient state its taxes in rice or cloth, so from the eighth century it paid in carpenters. About a hundred men a year went to the capital to build palaces and temples, and over five centuries tens of thousands served. The “Hida no Takumi”, the craftsmen of Hida, became a byword for skill in wood, and the tradition runs on through the temples, merchant houses and festival floats of Takayama to the furniture workshops of today.",
    ja: "飛騨は米や布で古代国家に税を納めるにはあまりに貧しく山深かったので、八世紀から大工で納めた。毎年百人ほどの男が都へ上って宮殿や寺を建て、五百年のあいだに何万人もが務めた。「飛騨の匠」は木の技の代名詞となり、その伝統は高山の寺や商家や祭り屋台を経て、今日の家具工房まで続いている。",
    zh: "飛驒太窮、山太深，無法以稻米或布匹向古代國家繳稅，因此從八世紀起改以木匠納稅。每年約有一百名男子前往都城建造宮殿與寺院，五個世紀間服役者達數萬人。「飛驒工匠」成為木工技藝的代名詞，這項傳統延續下來，經過高山的寺院、商家與祭典屋台，一直到今天的家具工坊。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Tax paid in carpenters, schematic. Under the Yōrō code, other provinces sent rice, cloth and local products to the capital; Hida was excused taxes in kind and instead each village unit of fifty households chose ten craftsmen to serve for a year, while the rest of the unit supplied rice to feed them. With about ten units, Hida sent about a hundred men a year.",
        ja:"大工で納める税（模式図）。養老令のもとで、ほかの国は米・布・特産物を都へ送った。飛騨は庸・調を免じられ、代わりに五十戸からなる里ごとに十人の匠丁を一年の任で選び、残りの戸は彼らを養う米を出した。里はおよそ十あったので、飛騨は毎年百人ほどを送った。",
        zh:"以木匠納稅（示意圖）。依《養老令》，其他各國向都城送交稻米、布匹與地方產物；飛驒則免除庸與調，改由每個五十戶組成的「里」選出十名工匠服役一年，里中其餘各戶則出米供養他們。飛驒約有十個里，每年約派出一百人。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 360" role="img" aria-label="How Hida paid its taxes in craftsmen">' +
          '<rect x="0.5" y="0.5" width="759" height="359" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"TAX PAID IN CARPENTERS", ja:"大工で納める税", zh:"以木匠納稅" }) + '</text>';
        /* left: ordinary province */
        s += '<rect x="30" y="60" width="200" height="120" fill="#F0EDE4" stroke="#CDC6B9"/>' +
             '<text x="130" y="82" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Other provinces",ja:"ほかの国",zh:"其他各國"}) + '</text>' +
             '<text x="130" y="110" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + L({en:"rice · cloth · local goods",ja:"米・布・特産物",zh:"稻米・布匹・地方產物"}) + '</text>' +
             '<text x="130" y="128" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + L({en:"(so · yō · chō)",ja:"（租・庸・調）",zh:"（租・庸・調）"}) + '</text>';
        /* right: Hida */
        s += '<rect x="30" y="200" width="200" height="130" fill="#E0E6DB" stroke="#7C6B52"/>' +
             '<text x="130" y="222" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Hida",ja:"飛騨",zh:"飛驒"}) + '</text>' +
             '<text x="130" y="242" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + L({en:"excused yō and chō",ja:"庸・調を免除",zh:"免除庸與調"}) + '</text>';
        /* one ri: 50 households → 10 craftsmen */
        for (var i = 0; i < 50; i++) {
          var cx = 48 + (i % 17) * 10, cy = 258 + Math.floor(i / 17) * 12;
          s += '<rect x="' + cx + '" y="' + cy + '" width="7" height="7" fill="' + (i < 10 ? "#201E1B" : "#FBFAF7") + '" stroke="#7C6B52" stroke-width="0.6"/>';
        }
        s += '<text x="130" y="310" text-anchor="middle" ' + F + ' font-size="9.5" fill="#201E1B">' + L({en:"one ri = 50 households → 10 craftsmen",ja:"一里＝五十戸 → 匠丁十人",zh:"一里＝五十戶 → 工匠十人"}) + '</text>' +
             '<text x="130" y="323" text-anchor="middle" ' + F + ' font-size="9" fill="#8B857C">' + L({en:"the other households feed them",ja:"ほかの戸は彼らの食料を出す",zh:"其餘各戶供應其糧食"}) + '</text>';
        /* arrows to capital */
        s += '<path d="M232 120 L420 170" stroke="#B4AC9C" stroke-width="1.5"/><path d="M420 170 l-9 -6 l1 9 z" fill="#B4AC9C"/>' +
             '<path d="M232 265 L420 205" stroke="#7C6B52" stroke-width="3"/><path d="M420 205 l-11 -1 l5 9 z" fill="#7C6B52"/>' +
             '<text x="320" y="258" text-anchor="middle" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"~100 men a year",ja:"年に約百人",zh:"每年約百人"}) + '</text>' +
             '<text x="320" y="274" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"one-year terms, for ~500 years",ja:"任期一年、約五百年",zh:"任期一年，約五百年"}) + '</text>';
        /* capital */
        s += '<rect x="424" y="140" width="306" height="100" fill="#EDE5D2" stroke="#201E1B"/>' +
             '<text x="577" y="164" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"The capital",ja:"都",zh:"都城"}) + '</text>' +
             '<text x="577" y="186" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + L({en:"Heijō-kyō (Nara) · Heian-kyō (Kyoto)",ja:"平城京・平安京",zh:"平城京（奈良）・平安京（京都）"}) + '</text>' +
             '<text x="577" y="206" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + L({en:"palaces; Tōdai-ji, Yakushi-ji,",ja:"宮殿、東大寺・薬師寺・",zh:"宮殿；東大寺、藥師寺、"}) + '</text>' +
             '<text x="577" y="222" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + L({en:"the Yumedono of Hōryū-ji",ja:"法隆寺夢殿など",zh:"法隆寺夢殿等"}) + '</text>' +
             '<text x="577" y="272" text-anchor="middle" ' + F + ' font-size="10.5" fill="#201E1B">' + L({en:"in all, perhaps 40,000–50,000 men",ja:"総数は四万〜五万人ともいう",zh:"總計或達四萬至五萬人"}) + '</text>' +
             '<text x="30" y="350" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — numbers are the usual estimates, not a count.",ja:"模式図——数は通常の推計であり、実数ではない。",zh:"示意圖——數字為一般估計，並非實際統計。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"code",
      title:{ en:"A province that paid in skill", ja:"技で納めた国", zh:"以技藝納稅的國" }, jp:"養老令 賦役令 斐陀国条",
      body:[
        { t:"p", text:{
          en:"The Yōrō code of 718, the law of the Nara state, contains a clause about a single province. Hida — written 斐陀 in the code — was excused the <em>yō</em> and <em>chō</em>, the taxes paid in labour-substitute cloth and local products, and instead each <em>ri</em>, a unit of fifty households, was to choose ten craftsmen, <em>shōchō</em>, to serve a year in the capital, while the other men of the unit paid rice to feed them. With about ten units in the province, the usual contingent was about a hundred men a year, and sometimes nearly twice that when a great project was under way. The system lasted about five centuries, to the end of the Heian period; by the usual estimate forty to fifty thousand men served in all.",
          ja:"奈良時代の国家の法である718年の養老令には、ただ一つの国についての条文がある。斐陀（飛騨）は庸と調——布や特産物で納める税——を免じられ、代わりに五十戸からなる里ごとに十人の匠丁を選んで一年都で務めさせ、里のほかの男たちは彼らを養う米を出すことと定められた。国にはおよそ十の里があったので、ふつうは毎年百人ほど、大きな造営があるときにはその倍近くが務めた。この制度は平安時代の終わりまで約五百年続き、通常の推計では、総数は四万から五万人にのぼる。",
          zh:"奈良時代國家法典——718 年的《養老令》——中有一條只針對單一國的條文。飛驒（令文寫作「斐陀」）免除「庸」與「調」，即以布匹與地方產物繳納的稅，改由每個五十戶組成的「里」選出十名工匠（匠丁）赴都城服役一年，里中其他男子則繳米供養他們。全國約有十個里，因此通常每年約派一百人，遇到大型工程時有時接近兩倍。這套制度延續約五百年，直到平安時代末期；依一般估計，總共有四萬至五萬人曾經服役。" } },
        { t:"p", text:{
          en:"The craftsmen of Hida worked on the palaces and official buildings of Heijō-kyō and Heian-kyō and on the great temples — Tōdai-ji, Yakushi-ji and the Yumedono of Hōryū-ji are among those traditionally named. Their reputation passed into literature: the <em>Konjaku Monogatari</em> of the late Heian period tells of a Hida craftsman who built a small hall so cunningly that its doors swung shut in the face of anyone who tried to enter. In 2016 the story of the takumi was recognised by the Agency for Cultural Affairs as a Japan Heritage, “The skill and spirit of the Hida takumi”.",
          ja:"飛騨の匠たちは、平城京と平安京の宮殿や官衙、そして大寺院——伝えられるところでは東大寺、薬師寺、法隆寺の夢殿など——の造営に携わった。その名声は文学にも入った。平安後期の『今昔物語集』は、入ろうとする者の前で戸がひとりでに閉まってしまう小堂を巧みに建てた飛騨の工の話を伝える。2016年、匠の物語は文化庁によって日本遺産「飛騨匠の技・こころ」に認定された。",
          zh:"飛驒工匠參與了平城京與平安京的宮殿、官署，以及大寺院的建造——傳統上列舉的有東大寺、藥師寺與法隆寺夢殿等。他們的聲名也進入了文學：平安後期的《今昔物語集》講述一位飛驒工匠建了一座小堂，設計之巧，使得任何人想進去時，門都會自己在他面前關上。2016 年，工匠的故事由文化廳認定為日本遺產「飛驒工匠的技與心」。" } }
      ]
    },

    { t:"section", id:"home",
      title:{ en:"At home in Hida", ja:"飛騨の地で", zh:"在飛驒本地" }, jp:"安国寺経蔵 · 飛騨国分寺 · 屋台 · 町家",
      body:[
        { t:"p", text:{
          en:"Hida's own buildings show the same hands. The sutra repository of <strong>Ankoku-ji</strong>, built in 1408, is the only National Treasure building in Hida, and inside it stands the oldest surviving <em>rinzō</em> in Japan — an octagonal revolving bookcase for the scriptures, which a believer could turn to gain the merit of reading them all. The three-storey pagoda of the <strong>Hida Kokubun-ji</strong> in Takayama, the only pagoda in Hida, was rebuilt in 1821 after a storm brought down its predecessor in 1791.",
          ja:"飛騨の地の建物にも同じ手が見える。1408年に建てられた<strong>安国寺経蔵</strong>は飛騨で唯一の国宝建造物で、なかには日本最古の輪蔵——経典を納める八角形の回転書架で、回せばすべての経を読んだのと同じ功徳があるとされる——が立つ。高山の<strong>飛騨国分寺</strong>の三重塔は飛騨で唯一の塔で、1791年の大風で倒れたのち、1821年に再建された。",
          zh:"飛驒本地的建築，也顯現出同一雙手。1408 年建成的<strong>安國寺經藏</strong>是飛驒唯一的國寶建築，內有日本現存最古老的「輪藏」——一座安放經典的八角形旋轉書架，信眾轉動它，便可得到讀遍全部經典的功德。高山<strong>飛驒國分寺</strong>的三重塔是飛驒唯一的塔，1791 年舊塔被暴風吹倒後，於 1821 年重建。" } },
        { t:"p", text:{
          en:"In the Edo period, with Takayama rich from timber and trade, the town's carpenters, carvers, lacquerers and metalworkers turned to the merchant houses and to the festival floats, each built by a neighbourhood as a showpiece of all the trades together — see <a href=\"festivals.html\">Festivals & Floats</a>. The Meiji-era houses of the Kusakabe (1879) and the Yoshijima (1907), both Important Cultural Properties, are often called the finest merchant houses in Japan: the Kusakabe house with its massive, dark-polished beams, the Yoshijima with its lighter, more delicate framing under a high open roof.",
          ja:"江戸時代、材木と商いで富んだ高山では、町の大工・彫師・塗師・金工が商家と祭りの屋台に力を注いだ。屋台は町内ごとに、すべての職の技を合わせた見せ場として造られた——<a href=\"festivals.html\">祭りと屋台</a>を参照。明治の日下部家住宅（1879年）と吉島家住宅（1907年）はともに重要文化財で、しばしば日本で最も美しい町家と呼ばれる。日下部家は黒く磨かれた豪壮な梁で、吉島家は高い吹き抜けの下の軽やかで繊細な架構で知られる。",
          zh:"江戶時代，高山因木材與商業而富裕，鎮上的木匠、雕刻師、漆匠與金工把心力投注在商家與祭典屋台上；屋台由各町內建造，是集合各行技藝的展示品——見<a href=\"festivals.html\">祭典與屋台</a>。明治時期的日下部家住宅（1879 年）與吉島家住宅（1907 年）都是重要文化財，常被稱為日本最美的町家：日下部家以粗壯、磨得黝黑的樑柱著稱，吉島家則以高聳挑空屋頂下輕巧細緻的架構聞名。" } }
      ]
    },

    { t:"section", id:"now",
      title:{ en:"Takumi today", ja:"いまの匠", zh:"今日的工匠" }, jp:"家具 · 工房 · 学校",
      body:[
        { t:"p", text:{
          en:"The modern heirs of the takumi are mostly furniture makers. Since 1920 Takayama has been one of Japan's great furniture towns — see <a href=\"furniture.html\">Hida Furniture</a> — and it trains its own: the furniture maker Hida Sangyō has run a school for furniture craftsmen, the Hida Shokunin Gakusha, since 2014, and the woodworking school Mori no Takumi Juku, founded in 1991 by the craftsman and writer Inamoto Tadashi of Oak Village, takes students from across Japan. Carpenters for temples, houses and restorations still work throughout the region, and the prefecture's forestry academy in Mino teaches timber building alongside forestry.",
          ja:"匠の現代の後継者の多くは家具職人である。1920年以来、高山は日本有数の家具のまちであり——<a href=\"furniture.html\">飛騨の家具</a>を参照——、職人を自ら育てている。家具メーカーの飛騨産業は2014年から家具職人の学校「飛騨職人学舎」を運営し、オークヴィレッジの木工家・作家の稲本正が1991年に開いた「森林たくみ塾」は全国から塾生を受け入れる。社寺・住宅・修復の大工はいまも地域じゅうで働き、美濃市の県立森林文化アカデミーは林業とあわせて木造建築を教えている。",
          zh:"工匠在現代的傳人，大多是家具職人。自 1920 年起，高山一直是日本重要的家具之城——見<a href=\"furniture.html\">飛驒家具</a>——並自行培養人才：家具製造商飛驒產業自 2014 年起經營家具職人學校「飛驒職人學舍」；由 Oak Village 的木工家兼作家稻本正於 1991 年創辦的木工學校「森林工匠塾」，則招收來自全國的學員。寺社、住宅與修復工程的木匠至今仍在整個地區工作，而美濃市的縣立森林文化學院也在林業之外教授木造建築。" } }
      ]
    },

    { t:"related", items:[
      { href:"joinery.html", why:{ en:"How the takumi joined wood without nails.", ja:"匠は釘を使わずどう木を組んだか。", zh:"工匠如何不用釘子接合木材。" } },
      { href:"festivals.html", why:{ en:"Floats as showpieces of every trade.", ja:"あらゆる職の見せ場としての屋台。", zh:"集各行技藝之大成的屋台。" } },
      { href:"towns.html", why:{ en:"The merchant houses of Takayama.", ja:"高山の商家。", zh:"高山的商家。" } },
      { href:"architecture.html", why:{ en:"Building in wood, then and now.", ja:"昔といまの木の建築。", zh:"昔與今的木造建築。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- joinery */
GIFU.pages["joinery"] = {
  kicker: { en: "Wood · 06", ja: "木 · 06", zh: "木 · 06" },
  title:  { en: "Joinery", ja: "継手と仕口", zh: "榫卯與接合" },
  jp: "継手 · 仕口 · 鎌継ぎ · 蟻継ぎ · 追掛大栓継ぎ · 千鳥",
  lede: {
    en: "The carpenters of Hida built with joints rather than nails: timbers cut to lock into one another, held by their own shape, by wooden pegs and by the weight of the building. Joints let wood move with the seasons, let a frame flex in an earthquake, and let a building be taken apart, repaired and put back together. A toy sold in Takayama, three notched sticks that lock at a single point, shows the idea in the palm of a hand — and gave an architect the structure of a building.",
    ja: "飛騨の大工は釘ではなく継手と仕口で建てた。互いに組み合うように刻んだ木を、その形と木の栓と建物の重さで保つ。継手があれば木は季節とともに動くことができ、骨組みは地震のときにしなり、建物は解体して修理し、組み直すことができる。高山で売られている玩具——一点で組み合う、刻みを入れた三本の棒——は、その考えを掌のなかに示し、ある建築家に一つの建物の構造を与えた。",
    zh: "飛驒的木匠以榫卯而非鐵釘建造：木料被切割成能彼此卡合的形狀，靠自身的形狀、木栓與建築的重量固定。榫卯讓木材能隨季節伸縮，讓骨架在地震中能夠彎曲，也讓建築可以拆解、修理後再重新組裝。高山販售的一種玩具——三根刻有凹口、在一點相互卡住的木棒——把這個理念放在掌心之中，也為一位建築師提供了一棟建築的結構。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Four ways to join wood, schematic. The gooseneck and the dovetail are seen from above: one beam's shaped end drops into a matching socket in the next, and cannot pull out. The pegged scarf is seen from the side: two long sloping faces with a small step, locked by two hardwood pegs, strong enough to join beams between supports. The chidori is Takayama's toy: three square sticks, each notched, that twist together into a knot that holds without glue.",
        ja:"木の四つの組み方（模式図）。鎌継ぎと蟻継ぎは上から見たところで、一方の材の端の形が他方の同じ形の穴に落とし込まれ、抜けなくなる。追掛大栓継ぎは横から見たところで、目違いのある長い斜めの面を二本の堅木の栓で締め、支点のあいだで梁をつなげるほど強い。千鳥は高山の玩具で、刻みを入れた三本の角棒をひねり合わせると、接着剤なしで固まる。",
        zh:"四種接合木材的方式（示意圖）。鎌繼與蟻繼為俯視圖：一根樑端部的造型落入另一根樑上形狀相同的凹槽，就無法拔出。追掛大栓繼為側視圖：兩道帶有小段差的長斜面，以兩根硬木栓鎖緊，強度足以在支點之間接續樑材。千鳥是高山的玩具：三根各有凹口的方木棒，扭合後形成一個不需膠水便能固定的結。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var A = 'fill="#EADCC1" stroke="#201E1B" stroke-width="1.2"';
        var B = 'fill="#F0EDE4" stroke="#201E1B" stroke-width="1.2"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Four Japanese wood joints">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FOUR JOINTS", ja:"四つの組み方", zh:"四種接合" }) + '</text>';
        function title(x, t, sub) {
          s += '<text x="' + x + '" y="72" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(t) + '</text>' +
               '<text x="' + x + '" y="88" text-anchor="middle" ' + F + ' font-size="9.5" fill="#8B857C">' + L(sub) + '</text>';
        }
        /* 1 gooseneck (kama) — plan */
        title(115, {en:"Gooseneck",ja:"腰掛鎌継ぎ",zh:"鎌繼"}, {en:"koshikake kama-tsugi · plan",ja:"平面",zh:"平面"});
        s += '<path d="M110 150 L190 150 L190 190 L110 190 L110 176 L122 176 L122 181 L142 185 L142 155 L122 159 L122 164 L110 164 Z" ' + B + '/>' +
             '<path d="M40 150 L110 150 L110 164 L122 164 L122 159 L142 155 L142 185 L122 181 L122 176 L110 176 L110 190 L40 190 Z" ' + A + '/>';
        /* 2 dovetail (ari) — plan */
        title(300, {en:"Dovetail",ja:"腰掛蟻継ぎ",zh:"蟻繼"}, {en:"koshikake ari-tsugi · plan",ja:"平面",zh:"平面"});
        s += '<path d="M290 150 L370 150 L370 190 L290 190 L290 177 L314 184 L314 156 L290 163 Z" ' + B + '/>' +
             '<path d="M226 150 L290 150 L290 163 L314 156 L314 184 L290 177 L290 190 L226 190 Z" ' + A + '/>';
        /* 3 pegged scarf (okkake daisen) — elevation */
        title(475, {en:"Pegged scarf",ja:"追掛大栓継ぎ",zh:"追掛大栓繼"}, {en:"okkake daisen-tsugi · side",ja:"側面",zh:"側面"});
        s += '<path d="M440 190 L440 184 L470 178 L470 170 L510 162 L510 150 L556 150 L556 190 Z" ' + B + '/>' +
             '<path d="M396 150 L510 150 L510 162 L470 170 L470 178 L440 184 L440 190 L396 190 Z" ' + A + '/>' +
             '<circle cx="458" cy="170" r="4.5" fill="#7C6B52" stroke="#201E1B"/><circle cx="494" cy="170" r="4.5" fill="#7C6B52" stroke="#201E1B"/>';
        /* 4 chidori — sketch */
        title(655, {en:"Chidori",ja:"千鳥",zh:"千鳥"}, {en:"Takayama toy · three sticks",ja:"高山の玩具・三本の棒",zh:"高山玩具・三根木棒"});
        s += '<path d="M612 204 L622 214 L700 136 L690 126 Z" fill="#E0E6DB" stroke="#201E1B" stroke-width="1.2"/>' +
             '<rect x="600" y="163" width="110" height="14" fill="#EDE5D2" stroke="#201E1B" stroke-width="1.2"/>' +
             '<rect x="648" y="115" width="14" height="110" fill="#E9ECEE" stroke="#201E1B" stroke-width="1.2"/>';
        /* notes */
        var notes = [
          [115, {en:"the head drops in and",ja:"頭を落とし込むと",zh:"頭部落入後"}, {en:"cannot pull out",ja:"抜けない",zh:"便無法拔出"}],
          [300, {en:"the simplest locking",ja:"最も簡単な",zh:"最簡單的"}, {en:"end joint",ja:"引き抜けない継手",zh:"防拔接頭"}],
          [475, {en:"two pegs (daisen)",ja:"二本の大栓で締める",zh:"以兩根大栓鎖緊"}, {en:"lock the long scarf",ja:"長い継ぎ",zh:"固定長斜接"}],
          [655, {en:"notched sticks twist",ja:"刻みを入れた棒を",zh:"刻有凹口的木棒"}, {en:"into one knot",ja:"ひねって一つに",zh:"扭合成一個結"}]
        ];
        notes.forEach(function (n) {
          s += '<text x="' + n[0] + '" y="252" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L(n[1]) + '</text>' +
               '<text x="' + n[0] + '" y="266" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L(n[2]) + '</text>';
        });
        s += '<text x="30" y="316" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — proportions indicative; darker piece = the end being inserted.",ja:"模式図——比率は目安。濃い色が差し込む側の材。",zh:"示意圖——比例僅供參考；深色為插入的一端。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"why",
      title:{ en:"Why join rather than nail", ja:"なぜ釘でなく組むのか", zh:"為何用榫卯而不用釘" }, jp:"継手と仕口",
      body:[
        { t:"p", text:{
          en:"Wood swells and shrinks with the humidity of the Japanese year; an iron nail does not, and in time it rusts and splits the wood around it. A joint cut in the timber itself moves with it, and a frame of jointed posts and beams can rack a little in an earthquake and settle back. Joints can also be undone. Japanese temples and shrines are repaired by taking them apart — <em>kaitai shūri</em>, dismantling repair — replacing or patching the decayed pieces and reassembling the rest, which is how many timber buildings in Japan have lasted for centuries. Carpenters divide joints into two families: <strong>tsugite</strong>, which join two timbers end to end to make a longer one, and <strong>shiguchi</strong>, which join timbers at an angle, a post to a beam or one beam across another.",
          ja:"木は日本の一年の湿気とともに膨らみ、縮む。鉄の釘はそうはならず、やがて錆び、まわりの木を割る。材そのものに刻んだ継手は木とともに動き、組まれた柱と梁の骨組みは地震のときにわずかに傾き、また元に戻る。継手はほどくこともできる。日本の寺社は解体修理によって直される——いったんばらし、傷んだ部材を取り替えたり繕ったりして、残りを組み直す。日本の木造建築の多くが何世紀も持ちこたえてきたのはそのためである。大工は組み方を二つに分ける。二本の材を端と端でつないで長くする<strong>継手</strong>と、柱と梁のように、あるいは梁と梁を交差させて、角度をもって組む<strong>仕口</strong>である。",
          zh:"木材會隨著日本一年四季的濕度膨脹收縮；鐵釘不會，而且日久會生鏽，使周圍的木材裂開。直接在木料上切出的榫卯會與木材一起伸縮；以榫卯組成的柱樑骨架在地震中能稍微變形，之後再回復原位。榫卯也能拆開。日本的寺社是靠「解體修理」來修復的——先拆散，更換或修補腐朽的構件，再把其餘部分重新組裝；日本許多木造建築能屹立數百年，正是因此。木匠把接合分成兩大類：把兩根木料首尾相接以延長的<strong>繼手</strong>，以及以角度結合木料——如柱與樑、或兩根樑交叉——的<strong>仕口</strong>。" } },
        { t:"p", text:{
          en:"The tools are few and old: pull-saws, chisels, planes, an ink line for marking — the <em>sumitsubo</em> — and the carpenter's steel square, the <em>sashigane</em>. The back of the square carries a second scale whose units are longer by the square root of two, so that a carpenter who measures the diameter of a log on it reads off directly the side of the largest square beam the log will give.",
          ja:"道具は少なく、古い。引いて切る鋸、鑿、鉋、墨付けのための墨壺、そして大工の鋼の定規である曲尺である。曲尺の裏には、単位が表の√2倍長い目盛り——角目——が刻まれ、丸太の直径をそれで測れば、その丸太からとれる最大の角材の一辺がそのまま読み取れる。",
          zh:"工具不多，而且古老：拉鋸、鑿子、刨刀、畫線用的墨斗（墨壺），以及木匠的鋼製角尺「曲尺」。曲尺背面刻有第二組刻度，其單位長度是正面的√2倍（稱為角目），木匠用它量出原木的直徑，便能直接讀出這根原木所能取出的最大方樑邊長。" } }
      ]
    },

    { t:"section", id:"joints",
      title:{ en:"A few of the joints", ja:"いくつかの継手・仕口", zh:"幾種接合" }, jp:"鎌 · 蟻 · 追掛大栓 · 金輪 · 枘 · 渡りあご",
      body:[
        { t:"defs", items:[
          { term:{en:"Kama-tsugi",ja:"鎌継ぎ",zh:"鎌繼"}, jp:"かまつぎ",
            def:{en:"Gooseneck joint. One end is cut to a narrow neck and a flared head — the shape Japanese calls <em>kama-kubi</em>, a snake's raised head — and dropped into a matching socket; the joint cannot pull apart. With a <em>koshikake</em>, a seat, under it, it is the standard end joint for sills and beams.",ja:"一方の端を細い首と広がった頭——鎌首の形——に刻み、同じ形の穴に落とし込む。引いても抜けない。下に腰掛を付けた腰掛鎌継ぎは、土台や梁の標準的な継手である。",zh:"把一端切成細頸與外擴的頭部——即日語所謂「鎌首」（蛇昂起的頭）的形狀——落入形狀相同的凹槽，拉不開。下方加上承座（腰掛）的腰掛鎌繼，是地檻與樑的標準接頭。"} },
          { term:{en:"Ari-tsugi",ja:"蟻継ぎ",zh:"蟻繼"}, jp:"ありつぎ",
            def:{en:"Dovetail joint, named for the shape of an ant's head: a simple flared tenon dropped into a socket. Quick to cut and used where loads are light.",ja:"蟻の頭の形から名づけられた、末広がりの枘を穴に落とし込む簡単な継手。刻みが早く、荷重の軽いところに使う。",zh:"以螞蟻頭部形狀命名：將簡單的外擴榫頭落入凹槽。切削快速，用於載重較輕之處。"} },
          { term:{en:"Okkake daisen-tsugi",ja:"追掛大栓継ぎ",zh:"追掛大栓繼"}, jp:"おっかけだいせんつぎ",
            def:{en:"A long scarf joint with two sloping faces and a step, slid together sideways and locked with two hardwood pegs driven through. Strong enough to join a beam between supports; common in traditional frames and in restoration.",ja:"段のある二つの斜めの面をもつ長い継手で、横から滑り合わせ、貫通させた二本の堅木の栓で締める。支点のあいだで梁を継げるほど強く、伝統的な架構や修復でよく用いられる。",zh:"一種有兩道斜面與段差的長斜接，從側面滑入結合，再以兩根貫穿的硬木栓鎖緊。強度足以在支點之間接續樑材；常見於傳統架構與修復工程。"} },
          { term:{en:"Kanawa-tsugi",ja:"金輪継ぎ",zh:"金輪繼"}, jp:"かなわつぎ",
            def:{en:"A scarf closed by a wedge-shaped key driven across the joint. Because the pieces slide together from the side rather than end-on, it is used to replace the rotten foot of a post in a standing building.",ja:"継ぎ目に楔形の栓（込栓）を打って締める継手。材を横から差し合わせて組めるため、建ったままの建物で、腐った柱の根元を取り替える根継ぎに使われる。",zh:"以楔形木栓橫打入接合處鎖緊的斜接。因為構件是從側面而非端部滑入組合，常用於在建築仍然矗立時，更換柱子腐朽的柱腳（根繼）。"} },
          { term:{en:"Hozo",ja:"枘（ほぞ）",zh:"榫頭"}, jp:"ほぞ",
            def:{en:"The mortise and tenon, basic to <em>shiguchi</em>: a tongue on one timber fits a hole in the other, often pinned or wedged. Also the basic joint of chairs and tables.",ja:"仕口の基本となる枘と枘穴。一方の材の突起を他方の穴に差し込み、しばしば込栓や楔で留める。椅子やテーブルの基本の組み方でもある。",zh:"仕口的基本形式——榫頭與榫眼：一根木料上的凸舌插入另一根的孔中，常以木銷或楔子固定。也是椅子與桌子的基本接合方式。"} }
        ] }
      ]
    },

    { t:"section", id:"chidori",
      title:{ en:"From toy to building", ja:"玩具から建築へ", zh:"從玩具到建築" }, jp:"千鳥 · 組木",
      body:[
        { t:"p", text:{
          en:"In the souvenir shops of Takayama you can buy a <strong>chidori</strong> for a few hundred yen: three square sticks of wood, each notched, which can be twisted together into a single node that holds without nails or glue, and taken apart again. Kengo Kuma built on the same principle at a much larger scale. His GC Prostho Museum Research Center, completed in 2010 in Kasugai in neighbouring Aichi, is a three-dimensional lattice of wooden sticks six centimetres square, assembled without nails or adhesive, that serves as the building's structure and as the shelving of its museum.",
          ja:"高山の土産物屋では、数百円で<strong>千鳥</strong>が買える。刻みを入れた三本の角棒で、ひねり合わせると釘も接着剤もなしに一つの結び目となり、またばらすこともできる。隈研吾は同じ原理をはるかに大きな規模で用いた。2010年に隣の愛知県春日井市に完成したGCプロソミュージアム・リサーチセンターは、6センチ角の木の棒を釘も接着剤も使わずに組んだ立体格子で、建物の構造であると同時に博物館の棚でもある。",
          zh:"在高山的紀念品店裡，花幾百日圓就能買到一個<strong>千鳥</strong>：三根各有凹口的方木棒，扭合後成為一個不用釘子或膠水便能固定的節點，也可以再拆開。建築師隈研吾以同樣的原理做出規模大得多的作品。他於 2010 年在鄰縣愛知的春日井市完成的 GC Prostho 博物館研究中心，是以六公分見方的木棒、不用釘子與黏著劑組成的立體格子，既是建築的結構，也是博物館的展示架。" } },
        { t:"p", text:{
          en:"Hand-cut joinery is now the exception rather than the rule. Most new timber houses in Japan are framed with joints cut by computer-controlled machines in pre-cut factories, to the same traditional patterns. Joints cut by hand survive in temple and shrine work, in the restoration of old buildings, in custom houses by carpenters who still mark and cut their own timber — and in the furniture of Hida, where the mortise and tenon is still the basic joint of every chair.",
          ja:"手刻みの継手はいまや例外である。日本の新築の木造住宅の多くは、プレカット工場でコンピュータ制御の機械が同じ伝統の形に刻んだ継手で組まれる。手刻みが生きているのは、社寺の仕事、古い建物の修復、自ら墨付けし刻む大工が建てる注文住宅——そして椅子の基本の組み方がいまも枘である、飛騨の家具である。",
          zh:"手工切削的榫卯如今已是例外而非常態。日本新建的木造住宅，大多以預切工廠中電腦數控機械依同樣傳統樣式切出的榫卯組裝。手工榫卯留存於寺社工程、老建築的修復、仍自行墨線與切削木料的木匠所建的訂製住宅——以及飛驒的家具之中，那裡每一張椅子的基本接合仍是榫頭與榫眼。" } }
      ]
    },

    { t:"related", items:[
      { href:"takumi.html", why:{ en:"The carpenters who cut these joints.", ja:"これらの継手を刻んだ大工たち。", zh:"切出這些榫卯的木匠。" } },
      { href:"shirakawago.html", why:{ en:"Roofs lashed together, not nailed.", ja:"釘でなく縄で結んだ屋根。", zh:"以繩綁紮而非釘合的屋頂。" } },
      { href:"furniture.html", why:{ en:"Joinery at the scale of a chair.", ja:"椅子の大きさの継手。", zh:"椅子尺度的榫卯。" } },
      { href:"architecture.html", why:{ en:"Timber frames old and new.", ja:"新旧の木の架構。", zh:"新舊木構架。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- furniture */
GIFU.pages["furniture"] = {
  kicker: { en: "Wood · 07", ja: "木 · 07", zh: "木 · 07" },
  title:  { en: "Hida Furniture", ja: "飛騨の家具", zh: "飛驒家具" },
  jp: "曲木 · 橅 · 圧縮杉 · 飛騨の家具® · 脚物",
  lede: {
    en: "In 1920, before the railway reached Hida, two travellers told the businessmen of Takayama that in the West furniture was made by bending beech — a tree Hida had in abundance and no use for. A company was founded to try it. A century later Takayama is one of Japan's five great furniture regions, known above all for chairs and tables, and its makers have found a way to make the soft cedar of Japan's neglected plantations hard enough to sit on.",
    ja: "1920年、まだ飛騨に鉄道が通じていなかったころ、二人の旅人が高山の実業家たちに、西洋では橅を曲げて家具を作ると語った。橅は飛騨にいくらでもあり、使い道のない木であった。それを試すために会社が興された。百年後、高山は日本の五大家具産地の一つとなり、とりわけ椅子とテーブルで知られ、その作り手たちは、手入れの遅れた日本の人工林の柔らかな杉を、座れるほど硬くする方法を見つけた。",
    zh: "1920 年，鐵路還沒通到飛驒時，兩位旅人告訴高山的商人們：在西方，家具是把山毛櫸彎曲做成的——而這種樹飛驒多的是，卻毫無用處。於是有人創立一家公司來嘗試。一個世紀後，高山成為日本五大家具產地之一，尤其以椅子與桌子聞名；它的製造者們還找到了方法，讓日本疏於照料的人工林中柔軟的杉木，變得硬到足以坐人。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Bending wood, schematic. A straight-grained beech blank is turned, softened in steam, and bent round a form with a steel strap clamped along its outer face, so that the wood compresses on the inside of the curve instead of tearing on the outside; it is left on the form to dry and keeps its shape. Hida Sangyō adapted the same heat-and-pressure know-how to compress soft cedar into a harder, denser wood for chairs.",
        ja:"木を曲げる（模式図）。木目のまっすぐな橅の材を丸く削り、蒸気で柔らかくし、外側の面に鋼の帯金を沿わせて型に巻きつける。こうすると木は曲がりの外側で裂けるかわりに内側で縮む。型につけたまま乾かすと、その形を保つ。飛騨産業は同じ熱と圧力の技を応用して、柔らかな杉を圧縮し、椅子に使えるほど硬く密な材にした。",
        zh:"彎曲木材（示意圖）。紋理筆直的山毛櫸坯料先車圓，再以蒸氣軟化，然後在外側面夾上一條鋼帶，繞著模具彎曲——如此木材會在彎曲內側壓縮，而不是在外側撕裂；在模具上放置乾燥後，便能保持形狀。飛驒產業把同樣的加熱與加壓技術加以應用，將柔軟的杉木壓縮成更硬、更緻密、可用於椅子的木材。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="How bentwood and compressed cedar are made">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"BENDING AND PRESSING", ja:"曲げる・圧す", zh:"彎曲與壓縮" }) + '</text>';
        var steps = [
          [85,  {en:"1 · turn",ja:"1 · 削る",zh:"1 · 車圓"}, {en:"straight-grained beech",ja:"木目の通った橅",zh:"直紋山毛櫸"}],
          [230, {en:"2 · steam",ja:"2 · 蒸す",zh:"2 · 蒸軟"}, {en:"until it softens",ja:"柔らかくなるまで",zh:"直到軟化"}],
          [390, {en:"3 · bend",ja:"3 · 曲げる",zh:"3 · 彎曲"}, {en:"on a form, steel strap outside",ja:"型に、外側に帯金",zh:"沿模具彎，外側夾鋼帶"}],
          [540, {en:"4 · dry",ja:"4 · 乾かす",zh:"4 · 乾燥"}, {en:"the curve stays",ja:"曲がりが残る",zh:"彎度保持"}],
          [675, {en:"compressed cedar",ja:"圧縮杉",zh:"壓縮杉"}, {en:"heat + pressure",ja:"熱と圧力",zh:"加熱加壓"}]
        ];
        steps.forEach(function (st) {
          s += '<text x="' + st[0] + '" y="70" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(st[1]) + '</text>' +
               '<text x="' + st[0] + '" y="270" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + L(st[2]) + '</text>';
        });
        /* 1 rod */
        s += '<rect x="45" y="160" width="80" height="14" rx="7" fill="#EADCC1" stroke="#201E1B"/>' +
             '<line x1="52" y1="164" x2="118" y2="164" stroke="#7C6B52" stroke-width="0.6"/><line x1="52" y1="170" x2="118" y2="170" stroke="#7C6B52" stroke-width="0.6"/>';
        /* 2 steam box */
        s += '<rect x="180" y="140" width="100" height="56" fill="#E9ECEE" stroke="#201E1B"/>' +
             '<rect x="192" y="162" width="76" height="12" rx="6" fill="#EADCC1" stroke="#201E1B"/>' +
             '<path d="M200 136 C194 126 206 120 200 110 M230 136 C224 126 236 120 230 110 M260 136 C254 126 266 120 260 110" fill="none" stroke="#8B857C"/>';
        /* 3 form + strap */
        s += '<path d="M330 220 L330 170 A60 60 0 0 1 450 170 L450 220 Z" fill="#E6E4E0" stroke="#55504A"/>' +
             '<path d="M318 220 L318 170 A72 72 0 0 1 462 170 L462 220" fill="none" stroke="#EADCC1" stroke-width="10"/>' +
             '<path d="M312 220 L312 170 A78 78 0 0 1 468 170 L468 220" fill="none" stroke="#201E1B" stroke-width="2.4"/>' +
             '<text x="390" y="200" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"form",ja:"型",zh:"模具"}) + '</text>' +
             '<text x="474" y="120" ' + F + ' font-size="9.5" fill="#201E1B">' + L({en:"steel strap",ja:"帯金",zh:"鋼帶"}) + '</text>' +
             '<path d="M472 116 L450 128" stroke="#B4AC9C"/>';
        /* 4 dried curve */
        s += '<path d="M490 220 L490 180 A50 50 0 0 1 590 180 L590 220" fill="none" stroke="#EADCC1" stroke-width="10"/>' +
             '<path d="M490 220 L490 180 A50 50 0 0 1 590 180 L590 220" fill="none" stroke="#201E1B" stroke-width="0.8" stroke-dasharray="2 2"/>';
        /* 5 compressed cedar */
        s += '<rect x="640" y="130" width="70" height="36" fill="#E0E6DB" stroke="#201E1B"/>' +
             '<path d="M675 172 L675 188" stroke="#201E1B"/><path d="M675 190 l-5 -8 l10 0 z" fill="#201E1B"/>' +
             '<rect x="640" y="196" width="70" height="16" fill="#E0E6DB" stroke="#201E1B"/>';
        for (var k = 0; k < 6; k++) {
          s += '<line x1="' + (646 + k * 11) + '" y1="134" x2="' + (646 + k * 11) + '" y2="162" stroke="#7C6B52" stroke-width="0.6"/>' +
               '<line x1="' + (646 + k * 11) + '" y1="199" x2="' + (646 + k * 11) + '" y2="209" stroke="#7C6B52" stroke-width="0.6"/>';
        }
        s += '<path d="M130 167 L170 167" stroke="#B4AC9C"/><path d="M285 167 L305 167" stroke="#B4AC9C"/><path d="M472 190 L484 190" stroke="#B4AC9C"/>' +
             '<text x="30" y="316" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — the principle only; each maker's process differs.",ja:"模式図——原理のみ。工程は作り手ごとに異なる。",zh:"示意圖——僅示原理；各製造者工序不同。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"beech",
      title:{ en:"Beech that nobody wanted", ja:"使い道のなかった橅", zh:"沒人要的山毛櫸" }, jp:"曲木 · 中央木工 · 飛騨木工",
      body:[
        { t:"p", text:{
          en:"Hida's mountains were full of beech, <em>buna</em>, a wood that warps and rots easily and was used for little more than charcoal and the teeth of wooden clogs; its Japanese character is written with the radical for tree beside the character for “nothing”. The Western bentwood chair — perfected by the Thonet firm in Vienna in the mid-nineteenth century and made in millions from steamed beech — offered a use for it. In 1920 local investors founded Chūō Mokkō, renamed Hida Mokkō in 1923 and later Hida Sangyō, to make bentwood chairs; the first products were imitations of Thonet models, and it took years to master the steaming and bending. The company's woodpecker trademark is now among the best known in Japanese furniture.",
          ja:"飛騨の山には橅があふれていた。反りやすく腐りやすいこの木は、薪炭や下駄の歯くらいにしか使われず、字も木偏に「無」と書く。西洋の曲木椅子——十九世紀半ばにウィーンのトーネット社が完成させ、蒸した橅から何百万脚も作られた——は、その使い道を示した。1920年、地元の出資者たちは曲木椅子を作るために中央木工を設立した。1923年に飛騨木工と改め、のちに飛騨産業となる。最初の製品はトーネットの型の模倣で、蒸しと曲げを会得するまでに何年もかかった。キツツキの商標は、いまや日本の家具で最もよく知られたものの一つである。",
          zh:"飛驒的山裡滿是山毛櫸（橅）——一種容易翹曲、容易腐朽的木材，只用來燒炭或做木屐的齒；其漢字寫作木字旁加上「無」字。西方的曲木椅——十九世紀中葉由維也納的 Thonet 公司完善，以蒸過的山毛櫸生產了數以百萬計——為它提供了用途。1920 年，當地出資者創立「中央木工」來製作曲木椅，1923 年改名「飛驒木工」，後來成為飛驒產業。最初的產品是模仿 Thonet 款式，花了好幾年才掌握蒸煮與彎曲的技術。該公司的啄木鳥商標，如今是日本家具界最知名的商標之一。" } }
      ]
    },

    { t:"section", id:"town",
      title:{ en:"A town of chairmakers", ja:"椅子づくりの町", zh:"椅子匠人之城" }, jp:"飛騨木工連合会 · 飛騨の家具®",
      body:[
        { t:"p", text:{
          en:"Other makers followed, and Takayama became one of the five places usually named as Japan's great furniture regions, with Asahikawa in Hokkaidō, Shizuoka, Tokushima and Ōkawa in Fukuoka. Where Ōkawa is known for chests and cabinets, Hida's strength is <em>ashimono</em>, “legged things” — chairs and tables, which demand the most exact joinery and bending. The makers of Takayama and Hida city belong to a cooperative federation, and since January 2008 their work has carried two regional collective trademarks, “Hida furniture” and “Hida-Takayama furniture”. Each year the town holds a Hida furniture festival, at which the makers show and sell their new designs.",
          ja:"ほかの作り手が続き、高山は、北海道の旭川、静岡、徳島、福岡の大川とともに日本の五大家具産地に数えられるようになった。大川が箪笥や箱物で知られるのに対し、飛騨の強みは脚物——最も精密な組みと曲げを要する椅子とテーブル——である。高山市と飛騨市の作り手は協同組合に加わり、2008年1月からその製品は「飛騨の家具」と「飛騨・高山の家具」という二つの地域団体商標を掲げている。毎年、町では飛騨の家具フェスティバルが開かれ、作り手が新作を披露し、販売する。",
          zh:"其他製造者相繼跟進，高山成為常被列為日本五大家具產地的地方之一，另外四處是北海道的旭川、靜岡、德島與福岡的大川。大川以衣櫃與箱櫃類著稱，飛驒的強項則是「腳物」——需要最精確接合與彎曲技術的椅子與桌子。高山市與飛驒市的製造者組成協同組合，自 2008 年 1 月起，其產品掛上「飛驒家具」與「飛驒・高山家具」兩個地區團體商標。每年鎮上舉辦飛驒家具節，製造者在會中展示並販售新設計。" } },
        { t:"table",
          caption:{en:"Some of the Hida makers",ja:"飛騨の主な作り手",zh:"部分飛驒家具製造者"},
          cols:[{en:"Maker",ja:"作り手",zh:"製造者"},{en:"Founded",ja:"創業",zh:"創立"},{en:"Known for",ja:"特徴",zh:"特色"}],
          rows:[
            [{en:"Hida Sangyō (Chūō Mokkō)",ja:"飛騨産業（中央木工）",zh:"飛驒產業（中央木工）"},"1920",{en:"Bentwood; compressed-cedar furniture",ja:"曲木、圧縮杉の家具",zh:"曲木；壓縮杉家具"}],
            [{en:"Kashiwa",ja:"柏木工",zh:"柏木工"},{en:"1943",ja:"1943年",zh:"1943 年"},{en:"Solid-wood chairs and tables",ja:"無垢材の椅子とテーブル",zh:"實木椅與桌"}],
            [{en:"Nissin Mokkō",ja:"日進木工",zh:"日進木工"},{en:"1946",ja:"1946年",zh:"1946 年"},{en:"Chairs and sofas; oak casks",ja:"椅子とソファ、オーク樽",zh:"椅子與沙發；橡木桶"}],
            [{en:"Shirakawa",ja:"シラカワ",zh:"Shirakawa"},{en:"1960 (sawmill); furniture from 1971",ja:"1960年（製材）、1971年から家具",zh:"1960 年（製材）；1971 年起製作家具"},{en:"Solid-wood cabinets and tables",ja:"無垢材の収納とテーブル",zh:"實木收納與桌子"}],
            [{en:"Oak Village",ja:"オークヴィレッジ",zh:"Oak Village"},{en:"1974",ja:"1974年",zh:"1974 年"},{en:"Japanese oak; “from bowls to buildings”",ja:"国産のナラ、「お椀から建物まで」",zh:"日本產楢木；「從碗到建築」"}]
          ] },
        { t:"p", text:{
          en:"Oak Village was founded in 1974 by five young people led by Inamoto Tadashi, who moved from Tokyo to a farm barn in Takayama and then, in 1976, to a hillside at Kiyomi. Their motto, that a tree which took a hundred years to grow should be made into something that lasts a hundred years, anticipated the forestry arguments of the next half-century.",
          ja:"オークヴィレッジは1974年、稲本正を中心とする五人の若者によって創業された。彼らは東京から高山の農家の納屋に移り、1976年に清見の山腹に移った。「百年かかって育った木は、百年使えるものに」というその標語は、その後半世紀の林業をめぐる議論を先取りしていた。",
          zh:"Oak Village 由稻本正領頭的五位年輕人於 1974 年創立，他們從東京搬到高山一座農家的穀倉，1976 年再遷到清見的山坡上。他們的座右銘——「花了一百年長成的樹，就該做成能用一百年的東西」——預示了其後半個世紀關於林業的種種論辯。" } }
      ]
    },

    { t:"section", id:"cedar",
      title:{ en:"Cedar made hard", ja:"硬くした杉", zh:"變硬的杉木" }, jp:"圧縮杉 · 森のことば",
      body:[
        { t:"p", text:{
          en:"Japan's post-war plantations are full of sugi, a light, soft wood that dents under a thumbnail — ideal for house frames, useless for chair legs. Using the steaming and pressing know-how of bentwood, Hida Sangyō developed a way to compress sugi into a denser, harder material, and in 2001 launched a range of furniture made from it, <em>Mori no Kotoba</em>, “words of the forest”, which became its best-selling line. Furniture from domestic cedar gives a use and a price to the thinnings that the plantations need, and it has become one of the clearest examples of how a craft industry can answer a forestry problem.",
          ja:"日本の戦後の人工林は杉であふれている。軽く柔らかく、爪で押せばへこむ木で、家の骨組みには理想的だが、椅子の脚には向かない。飛騨産業は曲木で培った蒸しと圧縮の技を用いて、杉を密で硬い材に圧縮する方法を開発し、2001年にそれを使った家具のシリーズ「森のことば」を発売した。これは同社の最も売れる製品となった。国産の杉の家具は、人工林に必要な間伐材に用途と値段を与える。それは、工芸の産業が林業の問題にどう答えうるかを示す、最もわかりやすい例の一つとなっている。",
          zh:"日本戰後的人工林裡滿是杉木——一種輕而軟、指甲一按就會凹陷的木材，做住宅骨架很理想，做椅腳卻不行。飛驒產業運用曲木累積的蒸煮與加壓技術，開發出把杉木壓縮成更緻密、更堅硬材料的方法，並於 2001 年推出以此製作的家具系列「森之語」（森のことば），成為該公司最暢銷的產品線。以國產杉木製作家具，為人工林必需的疏伐材提供了用途與價格；這已成為工藝產業如何回應林業問題最清楚的範例之一。" } }
      ]
    },

    { t:"related", items:[
      { href:"joinery.html", why:{ en:"The joints inside every chair.", ja:"どの椅子にもある継手。", zh:"每張椅子裡的榫卯。" } },
      { href:"logging.html", why:{ en:"Why the plantations need thinning.", ja:"人工林になぜ間伐が要るのか。", zh:"人工林為何需要疏伐。" } },
      { href:"takumi.html", why:{ en:"Thirteen centuries of Hida craftsmen.", ja:"千三百年の飛騨の匠。", zh:"一千三百年的飛驒工匠。" } },
      { href:"museums.html", why:{ en:"Where to see the workshops.", ja:"工房を見られる場所。", zh:"可參觀工坊之處。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- carving */
GIFU.pages["carving"] = {
  kicker: { en: "Wood · 08", ja: "木 · 08", zh: "木 · 08" },
  title:  { en: "Carving & Lacquer", ja: "彫りと塗り", zh: "雕刻與漆藝" },
  jp: "一位一刀彫 · 位山 · 笏 · 飛騨春慶 · 透漆",
  lede: {
    en: "Two of Gifu's six nationally designated traditional crafts are Hida woodcrafts, both designated in 1975 and both built on showing the wood rather than hiding it. Ichii ittōbori carves the Japanese yew with chisels alone and leaves it unpainted, so that its red heart and white sapwood do the colouring. Hida Shunkei lacquerware coats cypress with a lacquer so clear that the grain shines through. Both began with the Takayama craftsmen of the Edo period, and both are still made there.",
    ja: "岐阜県の国指定の伝統的工芸品六品目のうち二つは飛騨の木の工芸で、ともに1975年に指定され、ともに木を隠すのではなく見せることで成り立っている。一位一刀彫はイチイを鑿だけで彫り、彩色せず、赤い心材と白い辺材に色を任せる。飛騨春慶は檜や椹に透きとおった漆を塗り、木目を輝かせる。どちらも江戸時代の高山の職人に始まり、いまもそこで作られている。",
    zh:"岐阜縣六項國家指定傳統工藝品中，有兩項是飛驒的木工藝，兩者都在 1975 年獲指定，也都建立在「展現木材而非掩蓋木材」之上。一位一刀雕只用鑿刀雕刻日本紫杉（一位），不上顏色，讓紅色的心材與白色的邊材自行呈現色彩。飛驒春慶漆器則在扁柏或花柏上塗以極為清透的漆，讓木紋透光而出。兩者都始於江戶時代的高山工匠，至今仍在當地製作。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Left: a log of Japanese yew in section. The carver of Ichii ittōbori plans each piece so that the dark red heartwood and the pale sapwood fall where they are wanted — a white face, a red robe — and leaves the surface as the chisel left it. Right: Hida Shunkei in section. The wood is tinted yellow or red and then coated with transparent lacquer, so that the grain remains visible through it.",
        ja:"左：イチイの丸太の断面。一位一刀彫の彫師は、濃い赤の心材（赤太）と淡い辺材（白太）が望むところ——白い顔、赤い衣——に来るように木取りし、鑿の跡のままに仕上げる。右：飛騨春慶の断面。木地を黄や紅に色づけし、その上に透漆を塗り重ねるので、木目が透けて見える。",
        zh:"左：日本紫杉原木的剖面。一位一刀雕的雕刻師會規劃每件作品，讓深紅色的心材與淺色的邊材落在想要的位置——白色的臉、紅色的衣袍——並保留鑿刀留下的表面。右：飛驒春慶的剖面。木胎先染成黃色或紅色，再塗上透明的漆，因此木紋依然清晰可見。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Yew heartwood and sapwood; layers of Hida Shunkei lacquer">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"SHOWING THE WOOD", ja:"木を見せる", zh:"讓木材現身" }) + '</text>';
        /* yew section */
        s += '<text x="190" y="62" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Ichii (yew), in section",ja:"イチイの断面",zh:"紫杉剖面"}) + '</text>' +
             '<circle cx="190" cy="170" r="92" fill="#F0EDE4" stroke="#7C6B52" stroke-width="1.4"/>' +
             '<circle cx="190" cy="170" r="66" fill="#EEE1DF" stroke="#7C6B52"/>';
        [18, 30, 42, 54, 74, 84].forEach(function (r) { s += '<circle cx="190" cy="170" r="' + r + '" fill="none" stroke="#B4AC9C" stroke-width="0.6"/>'; });
        /* carving block outline straddling heart and sap */
        s += '<rect x="176" y="92" width="40" height="112" fill="none" stroke="#201E1B" stroke-width="1.4" stroke-dasharray="4 3"/>' +
             '<text x="232" y="98" ' + F + ' font-size="9.5" fill="#201E1B">' + L({en:"block for one figure",ja:"一体分の木取り",zh:"一件作品的取材"}) + '</text>' +
             '<text x="44" y="96" ' + F + ' font-size="10" fill="#55504A">' + L({en:"sapwood (white)",ja:"白太（辺材）",zh:"白太（邊材）"}) + '</text>' +
             '<path d="M92 100 L112 116" stroke="#B4AC9C"/>' +
             '<text x="44" y="250" ' + F + ' font-size="10" fill="#55504A">' + L({en:"heartwood (red)",ja:"赤太（心材）",zh:"赤太（心材）"}) + '</text>' +
             '<path d="M110 244 L150 210" stroke="#B4AC9C"/>';
        /* shunkei layers */
        var X = 460, W = 270;
        s += '<text x="' + (X + W / 2) + '" y="62" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Hida Shunkei, in section",ja:"飛騨春慶の断面",zh:"飛驒春慶剖面"}) + '</text>';
        s += '<rect x="' + X + '" y="112" width="' + W + '" height="16" fill="#EADCC1" fill-opacity="0.55" stroke="#7C6B52"/>' +
             '<rect x="' + X + '" y="128" width="' + W + '" height="10" fill="#EDE5D2" stroke="#7C6B52"/>' +
             '<rect x="' + X + '" y="138" width="' + W + '" height="90" fill="#E7DFD2" stroke="#201E1B"/>';
        for (var g = 0; g < 7; g++) {
          s += '<path d="M' + X + ' ' + (148 + g * 12) + ' C' + (X + 80) + ' ' + (140 + g * 12) + ' ' + (X + 180) + ' ' + (158 + g * 12) + ' ' + (X + W) + ' ' + (146 + g * 12) + '" fill="none" stroke="#7C6B52" stroke-width="0.7"/>';
        }
        var lab = [
          [120, {en:"clear lacquer, several coats",ja:"透漆を数回塗り重ねる",zh:"透明漆，多層塗布"}],
          [133, {en:"tint: yellow or red",ja:"着色：黄または紅",zh:"著色：黃或紅"}],
          [186, {en:"wood: sawara or hinoki",ja:"木地：椹や檜",zh:"木胎：花柏或檜木"}]
        ];
        lab.forEach(function (a) {
          s += '<text x="' + (X - 8) + '" y="' + (a[0] + 4) + '" text-anchor="end" ' + F + ' font-size="9.5" fill="#201E1B">' + L(a[1]) + '</text>';
        });
        s += '<text x="' + (X + W / 2) + '" y="252" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + L({en:"the grain shows through the lacquer",ja:"木目が漆を透して見える",zh:"木紋透過漆層顯現"}) + '</text>' +
             '<text x="30" y="318" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — layer thicknesses exaggerated.",ja:"模式図——層の厚みは誇張している。",zh:"示意圖——各層厚度經誇大表示。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"ichii",
      title:{ en:"Ichii ittōbori", ja:"一位一刀彫", zh:"一位一刀雕" }, jp:"イチイ · 位山 · 松田亮長",
      body:[
        { t:"p", text:{
          en:"The Japanese yew is called <em>ichii</em>, “first rank”, and the name is said to come from its use at court. On <strong>Kuraiyama</strong>, a sacred mountain of 1,529 metres above the Miya valley, grow yews from which the court's <em>shaku</em> — the flat sceptres held by nobles and by the emperor in ceremony — have been made since at least 1159, when the Minashi shrine, the first shrine of Hida, presented a pair to the court. The custom continues: for the enthronement ceremonies of 2019 a sceptre was carved from a Kuraiyama yew about three hundred years old.",
          ja:"イチイは「一位」と書き、その名は宮中での用い方に由来するといわれる。宮川の谷の上にそびえる標高1,529メートルの霊山<strong>位山</strong>にはイチイが育ち、そこから宮中の笏——儀式のとき貴族や天皇が手にする板——が、少なくとも1159年から作られてきた。その年、飛騨一宮水無神社が一対のイチイの笏を朝廷に献上している。慣わしはいまも続き、2019年の即位の礼に際しても、樹齢三百年ほどの位山のイチイから笏が作られた。",
          zh:"日本紫杉稱為「一位」（第一品位），其名據說來自它在宮廷中的用途。宮川河谷上方有一座海拔 1,529 公尺的聖山<strong>位山</strong>，山上生長的紫杉，至少從 1159 年起就被用來製作宮廷的「笏」——貴族與天皇在儀式中手持的扁平板——那一年，飛驒一宮水無神社向朝廷獻上了一對紫杉笏。這項習俗延續至今：2019 年的即位儀式中，也以位山一棵約三百年的紫杉製作了笏。" } },
        { t:"p", text:{
          en:"The carving that takes the tree's name was established in the early nineteenth century by Matsuda Sukenaga of Takayama, a carver of <em>netsuke</em>, the toggles worn on the sash, who found that yew needed no paint. <strong>Ichii ittōbori</strong>, “single-knife carving”, is worked with chisels alone and left unpainted and unpolished, with the facets of the cuts showing; the carver plans each figure so that the dark red heartwood and the white sapwood fall where they are wanted. Owls, the gods of fortune, the animals of the zodiac, tea things and festival dolls are the usual subjects. Freshly cut, the heartwood is a pale reddish brown; with years of light and handling it darkens to a deep, lustrous red. It was designated a national traditional craft in 1975.",
          ja:"木の名を冠したこの彫刻は、十九世紀初め、根付師であった高山の松田亮長によって確立された。彼はイチイには彩色がいらないことに気づいたのである。<strong>一位一刀彫</strong>は鑿だけで彫り、彩色も磨きもせず、刃の切り口の面を残す。彫師は、濃い赤の心材と白い辺材が望むところに来るように一体ごとに木取りをする。梟、七福神、干支の動物、茶道具、雛人形などが主な題材である。彫りたての心材は淡い赤茶色だが、年月とともに光と手に触れて、深く艶のある赤に変わっていく。1975年に国の伝統的工芸品に指定された。",
          zh:"冠上這種樹名的雕刻，是在十九世紀初由高山的松田亮長確立的。他原是雕刻「根付」（繫在腰帶上的墜飾）的工匠，發現紫杉根本不需要上色。<strong>一位一刀雕</strong>只以鑿刀雕刻，不上色、不打磨，保留刀痕的切面；雕刻師會規劃每件作品，讓深紅的心材與白色的邊材落在想要的位置。貓頭鷹、七福神、生肖動物、茶道具與節慶人偶是常見題材。剛雕好時心材是淡紅褐色，經年累月的光照與手觸後，會轉為深沉而有光澤的紅色。1975 年獲指定為國家傳統工藝品。" } }
      ]
    },

    { t:"section", id:"shunkei",
      title:{ en:"Hida Shunkei", ja:"飛騨春慶", zh:"飛驒春慶" }, jp:"透漆 · 慶長年間 · 高橋喜左衛門",
      body:[
        { t:"p", text:{
          en:"The story of Hida Shunkei begins in the Keichō era, around 1600, when the Kanamori lords were building the temples and shrines of their new castle town. A carpenter, Takahashi Kizaemon, split a board of sawara and was struck by the grain along the break; he made it into a tray and presented it to Kanamori Shigechika, the lord's heir, who had it coated with transparent lacquer by the lacquerer Narita Sanemon. Its colour recalled a famous tea caddy attributed to the potter Shunkei, and the ware took his name.",
          ja:"飛騨春慶の物語は慶長年間、1600年ごろ、金森氏が新しい城下町の社寺を建てていたころに始まる。大工の高橋喜左衛門が椹の板を割り、その割れ目に現れた木目の美しさに打たれた。彼はそれで盆を作り、藩主の世子・金森重近に献じた。重近は塗師の成田三右衛門に命じて透漆を塗らせた。その色合いが、陶工・春慶の作と伝わる名高い茶入を思わせたので、この塗りは春慶の名で呼ばれるようになった。",
          zh:"飛驒春慶的故事始於慶長年間，約 1600 年，當時金森氏正在新城下町興建寺社。一位名叫高橋喜左衛門的木匠劈開一塊花柏木板，被斷面上的木紋所打動；他把木板做成托盤，獻給藩主的繼承人金森重近，重近命漆匠成田三右衛門為它塗上透明的漆。其色澤令人想起一件傳為陶工春慶所作的著名茶入，這種漆器便以春慶為名。" } },
        { t:"p", text:{
          en:"Shunkei ware is made in two workshops' skills: the <em>kiji-shi</em>, who makes the wooden body from thin boards of sawara or hinoki, often bent and pinned into round boxes and trays, and the <em>nushi</em>, who tints the wood yellow or red and builds up coats of transparent lacquer thin enough to show every line of the grain. Trays, tiered food boxes, bowls and tea utensils are the usual forms. The finish is light and warm rather than glossy black, and it deepens with use. Hida Shunkei was designated a national traditional craft in 1975, the same year as Ichii ittōbori.",
          ja:"春慶塗は二つの職の技で作られる。椹や檜の薄板で木地を作り、しばしば曲げて留めて丸い箱や盆にする木地師と、木地を黄や紅に色づけし、木目の一筋一筋が見えるほど薄く透漆を塗り重ねる塗師である。盆、重箱、椀、茶道具がおもな形である。仕上がりは黒い艶ではなく軽く温かな色で、使うほどに深まる。飛騨春慶は一位一刀彫と同じ1975年に国の伝統的工芸品に指定された。",
          zh:"春慶漆器由兩種工坊的技藝完成：用花柏或檜木薄板製作木胎——常彎曲釘合成圓盒與托盤——的「木地師」，以及把木胎染成黃色或紅色、再層層塗上薄到能看見每一道木紋的透明漆的「塗師」。托盤、多層食盒、碗與茶道具是常見的器形。成品不是光亮的黑色，而是輕盈溫暖的色調，越用越深。飛驒春慶與一位一刀雕同樣在 1975 年獲指定為國家傳統工藝品。" } }
      ]
    },

    { t:"section", id:"floats",
      title:{ en:"The carvers of the floats", ja:"屋台の彫刻", zh:"屋台的雕刻" }, jp:"屋台彫刻 · からくり",
      body:[
        { t:"p", text:{
          en:"The richest work of Hida's carvers is on the festival floats of Takayama and Furukawa: dragons, lions, phoenixes and waves in the panels, brackets and railings, some carved by nineteenth-century masters such as Taniguchi Yoroku, and the <em>karakuri</em> puppets whose strings are worked from inside the floats. Because each float belongs to a neighbourhood that has repaired and repainted it for generations, the floats are also a record of how the town's woodworkers have kept their skills alive — see <a href=\"festivals.html\">Festivals & Floats</a>.",
          ja:"飛騨の彫師の最も豊かな仕事は、高山と古川の祭り屋台にある。羽目板や組物や勾欄を飾る龍・獅子・鳳凰・波——なかには谷口与鹿のような十九世紀の名工の作もある——と、屋台の内側から糸で操るからくり人形である。どの屋台も、代々修理し塗り直してきた町内のものであるため、屋台は町の木工職人がどのように技をつないできたかの記録でもある。<a href=\"festivals.html\">祭りと屋台</a>を参照。",
          zh:"飛驒雕刻師最豐富的作品，在高山與古川的祭典屋台上：鑲板、斗栱與欄杆上的龍、獅、鳳凰與波浪——其中有些出自谷口與鹿等十九世紀名匠之手——以及從屋台內部以繩線操縱的機關人偶。由於每台屋台都屬於世代修繕、重新上漆的町內，這些屋台也記錄了鎮上的木工如何延續自己的技藝——見<a href=\"festivals.html\">祭典與屋台</a>。" } }
      ]
    },

    { t:"related", items:[
      { href:"enku.html", why:{ en:"A monk who carved with a hatchet.", ja:"鉈で彫った僧。", zh:"以柴刀雕刻的僧人。" } },
      { href:"register.html", why:{ en:"All of Gifu's designated crafts.", ja:"岐阜の指定工芸品のすべて。", zh:"岐阜所有指定工藝品。" } },
      { href:"festivals.html", why:{ en:"The floats and their carvings.", ja:"屋台とその彫刻。", zh:"屋台及其雕刻。" } },
      { href:"everyday.html", why:{ en:"Wood in ordinary things.", ja:"ふだんの品のなかの木。", zh:"日常器物中的木。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- enku */
GIFU.pages["enku"] = {
  kicker: { en: "Wood · 09", ja: "木 · 09", zh: "木 · 09" },
  title:  { en: "Enkū's Buddhas", ja: "円空仏", zh: "圓空佛" },
  jp: "円空 · 鉈彫り · 木っ端仏 · 千光寺 · 弥勒寺",
  lede: {
    en: "Enkū was a wandering monk from Mino who, in the second half of the seventeenth century, walked from Hokkaidō to the Kinki region carving Buddhas from whatever wood he found — with a hatchet, fast, and without polish. He is said to have vowed to make 120,000. About 5,400 have been found, more than 1,600 of them in Gifu, many still kept by the villages and small temples he gave them to. Their split faces and slight smiles have made him one of the most loved sculptors in Japan.",
    ja: "円空は美濃出身の遊行僧で、十七世紀後半、北海道から近畿まで歩きながら、見つけた木で仏を彫った。鉈で、速く、磨くことなく。十二万体を彫ると誓ったと伝えられる。これまでに約五千四百体が見つかり、うち千六百体以上が岐阜県にあり、多くはいまも彼が贈った村や小さな寺に守られている。割れ目の残る顔とかすかな微笑みによって、円空は日本で最も愛される彫刻家の一人となった。",
    zh: "圓空是出身美濃的雲遊僧人，十七世紀後半，他從北海道一路走到近畿，用隨處找到的木頭雕刻佛像——用柴刀，快速，不加打磨。據說他曾發願雕刻十二萬尊。迄今已發現約五千四百尊，其中一千六百尊以上在岐阜縣，許多至今仍由當年受贈的村落與小寺守護著。那些留有劈裂痕的臉與淡淡的微笑，使他成為日本最受喜愛的雕刻家之一。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Where Enkū's figures are, and when he made them. About 5,400 have been identified; more than 3,000 are in Aichi — over a thousand at a single Nagoya temple — and more than 1,600 in Gifu; the rest are scattered from Hokkaidō and Aomori to Mie and Nara. Counts rise as new figures are found. Dates on the timeline are those given in the usual accounts of his life.",
        ja:"円空仏はどこにあり、いつ彫られたか。確認されているのは約五千四百体。愛知県に三千体以上——名古屋の一つの寺だけで千体を超える——、岐阜県に千六百体以上があり、残りは北海道・青森から三重・奈良まで散らばる。新たな発見につれて数は増えていく。年表の年は、生涯についての通常の記述による。",
        zh:"圓空佛像的分布，以及製作年代。已確認的約有五千四百尊；愛知縣超過三千尊——名古屋一座寺院就有一千尊以上——岐阜縣超過一千六百尊；其餘散布在北海道、青森直到三重、奈良。隨著新發現，數字仍在增加。年表上的年份依一般的生平記述。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 340" role="img" aria-label="Distribution of Enku statues and his life">' +
          '<rect x="0.5" y="0.5" width="759" height="339" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"ABOUT 5,400 FIGURES", ja:"約五千四百体", zh:"約五千四百尊" }) + '</text>';
        var bars = [
          [{en:"Aichi",ja:"愛知県",zh:"愛知縣"}, 3000, "3,000+", "#EDE5D2"],
          [{en:"Gifu",ja:"岐阜県",zh:"岐阜縣"}, 1600, "1,600+", "#EADCC1"],
          [{en:"elsewhere",ja:"その他",zh:"其他地區"}, 800, "~800", "#E6E4E0"]
        ];
        var X0 = 150, SC = 0.17;
        bars.forEach(function (b, i) {
          var y = 60 + i * 38;
          s += '<text x="' + (X0 - 10) + '" y="' + (y + 16) + '" text-anchor="end" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(b[0]) + '</text>' +
               '<rect x="' + X0 + '" y="' + y + '" width="' + (b[1] * SC) + '" height="22" fill="' + b[3] + '" stroke="#7C6B52"/>' +
               '<text x="' + (X0 + b[1] * SC + 8) + '" y="' + (y + 16) + '" ' + F + ' font-size="10.5" fill="#201E1B">' + b[2] + '</text>';
        });
        /* timeline */
        var T0 = 60, T1 = 700, Y = 250;
        function tx(yr) { return T0 + (yr - 1630) / (1700 - 1630) * (T1 - T0); }
        s += '<line x1="' + T0 + '" y1="' + Y + '" x2="' + T1 + '" y2="' + Y + '" stroke="#55504A" stroke-width="1.4"/>';
        [1630, 1640, 1650, 1660, 1670, 1680, 1690, 1700].forEach(function (yr) {
          s += '<line x1="' + tx(yr) + '" y1="' + (Y - 3) + '" x2="' + tx(yr) + '" y2="' + (Y + 3) + '" stroke="#55504A"/>' +
               '<text x="' + tx(yr) + '" y="' + (Y + 16) + '" text-anchor="middle" ' + F + ' font-size="9" fill="#8B857C">' + yr + '</text>';
        });
        s += '<rect x="' + tx(1663) + '" y="' + (Y - 12) + '" width="' + (tx(1695) - tx(1663)) + '" height="8" fill="#EADCC1" stroke="#7C6B52" stroke-width="0.8"/>' +
             '<text x="' + ((tx(1663) + tx(1695)) / 2) + '" y="' + (Y - 18) + '" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"carving years, about age 32 to 64",ja:"造像の時期（約32〜64歳）",zh:"造像時期（約 32 至 64 歲）"}) + '</text>';
        var ev = [
          [1632, {en:"born in Mino",ja:"美濃に生まれる",zh:"生於美濃"}, 1],
          [1666, {en:"Aomori, then Hokkaidō",ja:"青森から北海道へ",zh:"青森，再至北海道"}, 2],
          [1680, {en:"1680s: Hida, Mino",ja:"1680年代：飛騨・美濃",zh:"1680 年代：飛驒、美濃"}, 1],
          [1695, {en:"dies at Seki",ja:"関で没す",zh:"卒於關"}, 2]
        ];
        ev.forEach(function (e) {
          var x = tx(e[0]), yy = e[2] === 1 ? Y + 40 : Y + 62;
          s += '<circle cx="' + x + '" cy="' + Y + '" r="4" fill="#201E1B"/>' +
               '<line x1="' + x + '" y1="' + (Y + 20) + '" x2="' + x + '" y2="' + (yy - 11) + '" stroke="#B4AC9C"/>' +
               '<text x="' + x + '" y="' + yy + '" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L(e[1]) + '</text>';
        });
        s += '<text x="30" y="330" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Counts approximate and rising; “elsewhere” is the remainder of the total.",ja:"数は概数で、増えつつある。「その他」は総数からの残り。",zh:"數字為約數且持續增加；「其他地區」為總數扣除後的餘數。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"life",
      title:{ en:"A wandering monk", ja:"遊行の僧", zh:"雲遊之僧" }, jp:"修験 · 伊吹山 · 蝦夷地",
      body:[
        { t:"p", text:{
          en:"Enkū was born in Mino in 1632. Two places claim him — Hashima on the Nōbi plain and Minami in the upper Nagara valley of Gujō — and the question is still argued. He became a <em>shugen</em> ascetic, one of the mountain monks who trained on sacred peaks, and is associated especially with Mount Ibuki on the border of Ōmi. From his early thirties he travelled almost constantly and carved as he went. In 1666 he crossed from Aomori to the Matsumae domain in the south of Hokkaidō, where more than forty of his figures survive; in the following decades he worked through the mountains of Hida and Mino, and in villages from the Kantō to the Kinki.",
          ja:"円空は1632年、美濃に生まれた。生地を名乗る地は二つある——濃尾平野の羽島と、郡上の長良川上流の美並——で、いまも議論が続いている。彼は修験者、すなわち霊峰で修行する山の僧となり、とりわけ近江との境の伊吹山と結びつけて語られる。三十代の初めから彼はほとんど絶えず旅をし、行く先々で彫った。1666年には青森から北海道南部の松前藩へ渡り、そこには四十体を超える像が残っている。その後の数十年、彼は飛騨と美濃の山々を、そして関東から近畿までの村々を巡って彫りつづけた。",
          zh:"圓空於 1632 年生於美濃。有兩個地方自稱是他的出生地——濃尾平原上的羽島，以及郡上長良川上游的美並——至今仍有爭論。他成為修驗者，即在靈峰修行的山岳僧侶，尤其與近江交界的伊吹山有關。從三十出頭起，他幾乎不停地旅行，走到哪裡便雕到哪裡。1666 年，他從青森渡海到北海道南部的松前藩，那裡至今留有四十多尊他的作品；之後數十年，他走遍飛驒與美濃的山地，以及從關東到近畿的村落。" } },
        { t:"p", text:{
          en:"He is said to have vowed to carve 120,000 Buddhas. In his last years he restored the temple of Miroku-ji on the Nagara at Seki, and he died there in 1695. Tradition says that, knowing his end was near, he had himself buried alive by the river in meditation — the practice called <em>nyūjō</em>; whether or not it happened, the story is part of how he is remembered.",
          ja:"彼は十二万体の仏を彫ると誓ったと伝えられる。晩年には関の長良川のほとりの弥勒寺を再興し、1695年にそこで没した。伝承では、死期を悟った円空は川辺で瞑想のまま自らを土に埋めさせた——入定——という。それが実際にあったかどうかは別として、その物語は彼がどう記憶されているかの一部である。",
          zh:"據說他曾發願雕刻十二萬尊佛像。晚年他重興了關市長良川畔的彌勒寺，1695 年在那裡圓寂。傳說他自知大限將至，便在河邊於禪定中讓人將自己活埋——即所謂「入定」；無論此事是否屬實，這個故事都已成為人們記憶他的方式之一。" } }
      ]
    },

    { t:"section", id:"hatchet",
      title:{ en:"The hatchet and the smile", ja:"鉈と微笑み", zh:"柴刀與微笑" }, jp:"鉈彫り · 木っ端仏",
      body:[
        { t:"p", text:{
          en:"Enkū worked mostly with a hatchet and a few chisels, in the manner called <em>natabori</em>, “hatchet carving”. He often split a log with wedges and carved a figure into each piece, leaving the flat split faces as the backs and sides, and many figures keep the grain, the knots and the cracks of the wood. The faces are cut in a few strokes and often smile. Alongside large figures of Kannon, Fudō and the gods of the mountains he made thousands of <em>koppa-butsu</em>, “splinter Buddhas” a few centimetres tall carved from offcuts, which he is said to have given to villagers to place beside the sick or carry as charms. The style was so far from the polished Buddhist sculpture of the workshops that for two centuries his figures were little regarded outside the villages that kept them; in the twentieth century they were rediscovered and admired as among the most original sculpture of the Edo period.",
          ja:"円空はおもに鉈と数本の鑿で彫った。鉈彫りである。丸太を楔で割り、その一片ずつに像を彫って、割った平らな面を背や側面に残すことが多く、多くの像には木目や節や割れがそのまま残っている。顔は数回の刃で刻まれ、しばしば微笑んでいる。観音や不動、山の神々の大きな像とならんで、彼は端材から高さ数センチの「木っ端仏」を何千も彫った。村人に与え、病人のそばに置かせたり、お守りとして持たせたりしたと伝えられる。その作風は工房の磨き上げられた仏像からあまりに遠かったため、二百年のあいだ、それを守る村の外ではほとんど顧みられなかった。二十世紀になって再発見され、江戸時代で最も独創的な彫刻の一つとして称賛されるようになった。",
          zh:"圓空主要使用一把柴刀與幾支鑿子，這種手法稱為「鉈雕」（柴刀雕）。他常用楔子把原木劈開，在每一塊上各雕一尊像，保留劈開的平面作為背面與側面，許多作品都留著木紋、木節與裂痕。臉只用幾刀刻成，往往帶著微笑。除了觀音、不動明王與山神等大型佛像外，他還用邊角料雕了數以千計、高僅數公分的「木端佛」；據說他把它們送給村民，放在病人身旁，或當作護身符隨身攜帶。這種風格與工坊中精雕細磨的佛像相去甚遠，因此兩百年間，除了守護它們的村子之外，幾乎無人重視；到了二十世紀才被重新發現，並被譽為江戶時代最具原創性的雕刻之一。" } }
      ]
    },

    { t:"section", id:"see",
      title:{ en:"Where to see them", ja:"どこで見られるか", zh:"何處可見" }, jp:"千光寺 · 関市円空館 · 羽島",
      body:[
        { t:"grid", cols:2, cells:[
          { k:{en:"Senkō-ji, Takayama",ja:"千光寺（高山市丹生川町）",zh:"千光寺（高山市丹生川町）"}, jp:"円空仏寺宝館",
            body:{en:"A mountain temple of the Shingon school in Nyūkawa, east of Takayama, whose treasure hall shows 64 of Enkū's figures — among them a two-faced <em>Ryōmen Sukuna</em>, the local hero-demon of Hida legend who is said to have founded the temple.",ja:"高山の東、丹生川町の真言宗の山寺。寺宝館に円空仏六十四体を展示し、そのなかには、寺を開いたと伝わる飛騨の伝説の英雄・鬼神、二つの顔を持つ両面宿儺の像もある。",zh:"位於高山東邊丹生川町的真言宗山寺，其寺寶館展示六十四尊圓空佛——其中有一尊雙面的「兩面宿儺」，他是飛驒傳說中亦英雄亦鬼神的人物，據說開創了這座寺院。"} },
          { k:{en:"Seki",ja:"関市",zh:"關市"}, jp:"円空館 · 弥勒寺跡",
            body:{en:"The Enkū museum stands near the site of Miroku-ji by the Nagara, where he spent his last years and died.",ja:"晩年を過ごし没した長良川のほとりの弥勒寺跡の近くに、円空館がある。",zh:"圓空館位於長良川畔彌勒寺遺址附近，那是他度過晚年並圓寂之處。"} },
          { k:{en:"Hashima and Gujō",ja:"羽島市と郡上市",zh:"羽島市與郡上市"}, jp:"生誕地",
            body:{en:"Both places that claim his birth keep collections of his figures and museums devoted to him.",ja:"生地を名乗る二つの地は、いずれも円空仏を守り、円空を記念する資料館を持つ。",zh:"兩個自稱為其出生地的地方，都收藏其作品並設有紀念館。"} },
          { k:{en:"Across the border",ja:"県境を越えて",zh:"越過縣界"}, jp:"荒子観音",
            body:{en:"The largest single collection is outside Gifu, at Arako Kannon in Nagoya, which keeps more than a thousand figures, most of them tiny.",ja:"最大のまとまりは岐阜の外、名古屋の荒子観音にあり、千体を超える像——その多くはごく小さい——を守っている。",zh:"數量最多的單一收藏在岐阜之外——名古屋的荒子觀音保存了一千多尊，大多非常小。"} }
        ] }
      ]
    },

    { t:"section", id:"recognise",
      title:{ en:"How to recognise an Enkū", ja:"円空仏の見分け方", zh:"如何辨認圓空佛" }, jp:"特徴",
      body:[
        { t:"ul", items:[
          { en:"<strong>The wood shows.</strong> Split faces, the pith of the log, knots and cracks are left in; many backs are the flat face of a split.", ja:"<strong>木がそのまま見える。</strong>割れた面、丸太の芯、節や割れが残され、背の多くは割った平らな面である。", zh:"<strong>木頭的本色清晰可見。</strong>劈開面、原木的髓心、木節與裂痕都被保留；許多背面就是劈開的平面。" },
          { en:"<strong>Few, bold cuts.</strong> Hatchet and chisel marks are not smoothed away; drapery is a handful of parallel strokes.", ja:"<strong>少なく、大胆な刃。</strong>鉈や鑿の跡をならさず、衣文は数本の平行な刻みで表す。", zh:"<strong>刀數少而大膽。</strong>柴刀與鑿子的痕跡不加修平；衣褶只是幾道平行的刻痕。" },
          { en:"<strong>The smile.</strong> Eyes are often narrow crescents and the mouth turns up at the corners, even on fierce deities.", ja:"<strong>微笑み。</strong>目はしばしば細い三日月形で、口角は上がる。恐ろしい姿の神仏でさえそうである。", zh:"<strong>微笑。</strong>眼睛常是細長的新月形，嘴角上揚——即使是面貌兇猛的神佛也不例外。" },
          { en:"<strong>Writing on the back.</strong> Many figures carry ink inscriptions — a Sanskrit seed syllable for the deity, sometimes a date, a place or a verse.", ja:"<strong>背の墨書。</strong>多くの像には、尊格を表す梵字、ときには年紀や地名や歌が墨で書かれている。", zh:"<strong>背面的墨書。</strong>許多佛像背面有墨書——代表該尊的梵文種子字，有時還有年份、地名或詩句。" }
        ] },
        { t:"note", label:{en:"Visiting",ja:"訪ねるとき",zh:"參訪須知"}, text:{
          en:"Many figures are in small village temples and halls that open only by arrangement or on festival days; the museums at Seki and Hashima and the treasure hall of Senkō-ji are the easiest places to see a good number together.",
          ja:"多くの像は、予約や祭りの日にしか開かない村の小さな寺や堂にある。まとまった数を見やすいのは、関市と羽島市の資料館と、千光寺の寺宝館である。",
          zh:"許多佛像收藏在村中的小寺與小堂，只在預約或節慶日開放；要一次看到較多作品，最方便的是關市與羽島市的紀念館，以及千光寺的寺寶館。" } }
      ]
    },

    { t:"related", items:[
      { href:"carving.html", why:{ en:"Hida's other carvers.", ja:"飛騨のほかの彫師。", zh:"飛驒的其他雕刻家。" } },
      { href:"faith.html", why:{ en:"The mountain faiths Enkū belonged to.", ja:"円空が属した山の信仰。", zh:"圓空所屬的山岳信仰。" } },
      { href:"seki.html", why:{ en:"The town where he died.", ja:"彼が没した町。", zh:"他圓寂的城鎮。" } },
      { href:"mountains.html", why:{ en:"The sacred peaks of Gifu.", ja:"岐阜の霊峰。", zh:"岐阜的靈峰。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- everyday */
GIFU.pages["everyday"] = {
  kicker: { en: "Wood · 10", ja: "木 · 10", zh: "木 · 10" },
  title:  { en: "Wood in Everyday Things", ja: "暮らしの木", zh: "生活中的木" },
  jp: "枡 · 桶と樽 · 檜の道具 · 木育",
  lede: {
    en: "Most of the wood that Gifu works never becomes a temple or a chair. It becomes boxes, tubs, trays, toys and measures — and above all the <em>masu</em>, the square wooden box that was once Japan's official measure of rice and is now how sake is served at a celebration. The city of Ōgaki makes about eight in ten of the masu sold in Japan, all of them from Japanese hinoki.",
    ja: "岐阜が加工する木の大半は、寺にも椅子にもならない。箱や桶や盆や玩具や量りになる——そして何より枡になる。四角い木の箱である枡は、かつて日本の米の公式の量りであり、いまは祝いの席で酒を注ぐ器である。大垣市は日本で売られる枡のおよそ八割を作り、そのすべてが国産の檜である。",
    zh: "岐阜加工的木材，大多數從未變成寺院或椅子。它們變成箱子、木桶、托盤、玩具與量器——尤其是「枡」：這種方形木盒曾是日本稻米的官方量器，如今是喜慶場合盛酒的器具。大垣市生產日本市面上約八成的枡，全部使用日本國產檜木。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The masu family, schematic, seen from above and drawn to scale by volume: one <em>gō</em> is about 180 ml, the usual serving of sake; ten gō make one <em>shō</em>, about 1.8 litres, the size of a large sake bottle. Inset: the corners are joined with interlocking fingers cut by machine and glued, then the bottom is fitted and the sides are planed.",
        ja:"枡の一族（模式図）。上から見て、容積に合わせた縮尺で描く。一合は約180ミリリットルで、酒の一杯の量。十合で一升、約1.8リットル、一升瓶の量である。挿図：四隅は機械で刻んだ組手を糊で組み、底を付けてから側面を削る。",
        zh:"枡的家族（示意圖），俯視，並依容積按比例繪製：一「合」約 180 毫升，是一杯清酒的常見份量；十合為一「升」，約 1.8 公升，即一大瓶清酒的容量。插圖：四角以機械切出的指接榫相互咬合並上膠，之後裝上底板、刨削側面。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 340" role="img" aria-label="Masu sizes to scale and the corner joint">' +
          '<rect x="0.5" y="0.5" width="759" height="339" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"THE MASU FAMILY", ja:"枡の一族", zh:"枡的家族" }) + '</text>';
        /* side ∝ cube root of volume; 1 go = 60px */
        var sizes = [
          [0.5, {en:"5 shaku · ~90 ml",ja:"五勺 · 約90ml",zh:"五勺 · 約 90ml"}],
          [1,   {en:"1 gō · ~180 ml",ja:"一合 · 約180ml",zh:"一合 · 約 180ml"}],
          [2.5, {en:"2.5 gō · ~450 ml",ja:"二合半 · 約450ml",zh:"二合半 · 約 450ml"}],
          [5,   {en:"5 gō · ~900 ml",ja:"五合 · 約900ml",zh:"五合 · 約 900ml"}],
          [10,  {en:"1 shō · ~1.8 L",ja:"一升 · 約1.8L",zh:"一升 · 約 1.8L"}]
        ];
        var x = 40, base = 290;
        sizes.forEach(function (z) {
          var side = 60 * Math.pow(z[0], 1 / 3);
          var slot = Math.max(side, 100), bx = x + (slot - side) / 2;
          s += '<rect x="' + bx.toFixed(1) + '" y="' + (base - side).toFixed(1) + '" width="' + side.toFixed(1) + '" height="' + side.toFixed(1) + '" fill="#EDE5D2" stroke="#7C6B52" stroke-width="1.2"/>' +
               '<rect x="' + (bx + 5).toFixed(1) + '" y="' + (base - side + 5).toFixed(1) + '" width="' + (side - 10).toFixed(1) + '" height="' + (side - 10).toFixed(1) + '" fill="#F0EDE4" stroke="#B4AC9C" stroke-width="0.8"/>' +
               '<text x="' + (x + slot / 2).toFixed(1) + '" y="' + (base + 18) + '" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L(z[1]) + '</text>';
          x += slot + 16;
        });
        /* corner joint inset */
        var cx = 40, cy = 70;
        s += '<text x="' + (cx + 130) + '" y="' + (cy + 13) + '" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"corner joint",ja:"隅の組手",zh:"角落指接"}) + '</text>';
        s += '<rect x="' + cx + '" y="' + cy + '" width="120" height="18" fill="#EADCC1" stroke="#201E1B"/>' +
             '<rect x="' + cx + '" y="' + cy + '" width="18" height="120" fill="#EDE5D2" stroke="#201E1B"/>';
        for (var k = 0; k < 3; k++) {
          s += '<rect x="' + cx + '" y="' + (cy + 18 + k * 34) + '" width="18" height="17" fill="#EADCC1" stroke="#201E1B" stroke-width="0.8"/>';
        }
        s += '<text x="' + (cx + 30) + '" y="' + (cy + 44) + '" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"fingers cut by machine,",ja:"機械で刻んだ組手を",zh:"機械切出的指榫"}) + '</text>' +
             '<text x="' + (cx + 30) + '" y="' + (cy + 58) + '" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"glued by hand",ja:"手で糊付けして組む",zh:"以手工上膠組合"}) + '</text>' +
             '<text x="30" y="330" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — sides scaled to the cube root of volume; board thickness exaggerated.",ja:"模式図——一辺は容積の立方根に比例。板厚は誇張。",zh:"示意圖——邊長與容積的立方根成比例；板厚經誇大表示。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"masu",
      title:{ en:"Masu", ja:"枡", zh:"枡" }, jp:"大垣 · 一合 · 一升",
      body:[
        { t:"p", text:{
          en:"For centuries the square wooden masu was the measure of rice, oil, salt and sake, and the unit of wealth itself: a domain's revenue was counted in <em>koku</em> of rice, and a koku is a hundred shō. The sizes varied from place to place until the Edo shogunate made the Kyoto measure the national standard in the seventeenth century. Metric units replaced the old measures in trade in the twentieth century, but the masu survived as a vessel: sake is poured into it at weddings, openings and festivals, often into a glass standing in the masu until it overflows; roasted beans are thrown from it at <em>Setsubun</em>; and its name, a homophone of the word for “increase”, makes it a lucky gift.",
          ja:"何世紀ものあいだ、四角い木の枡は米・油・塩・酒の量りであり、富そのものの単位であった。藩の収入は米の石高で数えられ、一石は百升である。枡の大きさは土地ごとに違ったが、十七世紀に江戸幕府が京枡を全国の基準とした。二十世紀になって取引ではメートル法が古い単位に代わったが、枡は器として生き残った。結婚式や開店や祭りでは酒が注がれ、しばしば枡の中に立てたグラスからあふれるまで注がれる。節分には炒り豆を枡から撒く。そして「増す」に通じる名のために、縁起のよい贈り物になっている。",
          zh:"數百年間，方形木枡是稻米、油、鹽與酒的量器，也是財富本身的單位：一個藩的收入以稻米的「石」計算，而一石等於一百升。枡的大小原本各地不一，直到十七世紀江戶幕府以京都的枡為全國標準。二十世紀時，公制在交易中取代了舊單位，但枡作為器具留存了下來：婚禮、開幕與祭典時用它盛酒，常常是把玻璃杯立在枡中，一直倒到溢出來；節分時從枡中撒出炒豆；而它的名稱與「增加」（増す）同音，使它成為吉祥的贈禮。" } },
        { t:"p", text:{
          en:"Ōgaki became the masu town in 1890, when a craftsman who had trained with a cooper in Nagoya came home and began to make them. The town had the hinoki of Kiso and Tōnō within reach by water and the whole country within reach by rail, and today a handful of makers there turn out some two million masu a year — about 80 per cent of the national supply — every one of Japanese hinoki. The boards are cut to size, the corner joints are cut by machine and glued by hand, the bottom is fitted, the sides and edges are planed smooth, and many are branded with a name or a crest for a gift.",
          ja:"大垣が枡の町になったのは1890年、名古屋の桶屋で修業した職人が帰郷して枡を作り始めたときである。木曽や東濃の檜は水運で手の届くところにあり、全国へは鉄道で届いた。いま大垣の数社の作り手は年に約二百万個——全国の供給のおよそ八割——の枡を作り、そのすべてが国産の檜である。板を寸法に切り、四隅の組手を機械で刻んで手で糊付けし、底を付け、側面と縁をなめらかに削り、多くは贈り物のために名前や紋の焼印を押す。",
          zh:"大垣在 1890 年成為枡的故鄉：那一年，一位在名古屋跟隨桶匠學藝的工匠返鄉，開始製作枡。木曾與東濃的檜木可經水路運到，全國市場則有鐵路相連；如今鎮上幾家製造商每年生產約兩百萬個枡——約占全國供應量的八成——全部使用日本國產檜木。木板裁切成尺寸後，以機械切出四角的指接榫，再以手工上膠組合，裝上底板，把側面與邊緣刨光，許多還會為禮品烙上名字或家紋。" } }
      ]
    },

    { t:"section", id:"other",
      title:{ en:"Tubs, casks, boards and toys", ja:"桶・樽・板・玩具", zh:"木桶、酒桶、砧板與玩具" }, jp:"桶 · 樽 · 檜風呂 · 木育",
      body:[
        { t:"grid", cols:2, cells:[
          { k:{en:"Tubs and barrels",ja:"桶と樽",zh:"木桶與木樽"}, jp:"結物",
            body:{en:"Coopering — staves of sugi or sawara held by hoops of bamboo — once made every bath, washtub, rice tub and sake cask in Japan. Few coopers remain, but in 2023 the Takayama furniture maker Nissin Mokkō began making casks of Japanese oak, a wood prized for ageing whisky.",ja:"杉や椹の側板を竹の箍で締める結物は、かつて日本のあらゆる風呂・盥・飯櫃・酒樽を作った。桶屋はわずかになったが、2023年には高山の家具メーカー日進木工が、ウイスキーの熟成に珍重される国産オークの樽づくりを始めた。",zh:"以竹箍束緊杉木或花柏側板的「結物」（箍桶工藝），曾製作日本所有的浴桶、洗衣盆、飯桶與酒樽。如今桶匠所剩無幾，但 2023 年，高山的家具製造商日進木工開始以日本橡木製作酒桶——這種木材在威士忌熟成上備受珍視。"} },
          { k:{en:"Hinoki in the house",ja:"家のなかの檜",zh:"家中的檜木"}, jp:"東濃ひのき",
            body:{en:"The sawmills and workshops of Tōnō and Ura-Kiso turn their offcuts and small logs into bath tubs and stools, cutting boards, rice tubs, boxes and bath-salt chips, sold on the scent of the wood as much as on its durability.",ja:"東濃や裏木曽の製材所と工房は、端材や小径木を風呂桶や風呂椅子、まな板、飯櫃、箱、入浴用のチップに変える。木の耐久性と同じくらい、その香りが売り物である。",zh:"東濃與裏木曾的製材所與工坊，把邊角料與小徑木做成浴桶與浴凳、砧板、飯桶、木盒與泡澡用木片，賣點除了木材的耐久，也在於它的香氣。"} },
          { k:{en:"Toys and mokuiku",ja:"玩具と木育",zh:"玩具與木育"}, jp:"木育",
            body:{en:"Gifu promotes <em>mokuiku</em>, “wood education”, teaching children about forests through wooden toys and play spaces; part of the prefecture's forest tax pays for wooden toys and teaching materials.",ja:"岐阜県は、木の玩具や遊び場を通じて子どもに森を伝える「木育」を進めており、県の森林税の一部は木のおもちゃや教材に充てられている。",zh:"岐阜縣推動「木育」，透過木製玩具與遊戲空間讓孩子認識森林；縣森林稅的一部分用於木製玩具與教材。"} },
          { k:{en:"Chopsticks to bowls",ja:"箸から椀まで",zh:"從筷子到木碗"}, jp:"お椀から建物まで",
            body:{en:"Hida's woodworkers turn bowls, spoons and chopsticks from the offcuts of furniture-making; Oak Village's motto, “from bowls to buildings”, is a description of what a single tree can become.",ja:"飛騨の木工職人は、家具づくりの端材から椀や匙や箸を挽き、削る。オークヴィレッジの標語「お椀から建物まで」は、一本の木が何になりうるかを言い表している。",zh:"飛驒的木工職人用製作家具剩下的邊角料車製木碗、湯匙與筷子；Oak Village 的標語「從碗到建築」，說的正是一棵樹可以變成什麼。"} }
        ] }
      ]
    },

    { t:"section", id:"sizes",
      title:{ en:"Masu sizes and uses", ja:"枡の大きさと使い道", zh:"枡的尺寸與用途" }, jp:"勺 · 合 · 升",
      body:[
        { t:"table",
          caption:{en:"Traditional volumes; 1 gō ≈ 180 ml",ja:"伝統の容量。一合は約180ミリリットル",zh:"傳統容量；一合約 180 毫升"},
          cols:[{en:"Size",ja:"大きさ",zh:"尺寸"},{en:"Volume",ja:"容量",zh:"容量"},{en:"Typical use today",ja:"いまの主な使い道",zh:"今日的主要用途"}],
          numCols:[1],
          rows:[
            [{en:"5 shaku (half a gō)",ja:"五勺（半合）",zh:"五勺（半合）"},{en:"~90 ml",ja:"約90ml",zh:"約 90ml"},{en:"Tasting cups; small gifts",ja:"利き酒の器、小さな贈り物",zh:"試飲杯；小禮品"}],
            [{en:"8 shaku",ja:"八勺",zh:"八勺"},{en:"~145 ml",ja:"約145ml",zh:"約 145ml"},{en:"Sake at restaurants, often with a glass set inside",ja:"飲食店の酒。しばしばグラスを中に立てる",zh:"餐廳盛酒，常在其中放一個玻璃杯"}],
            [{en:"1 gō",ja:"一合",zh:"一合"},{en:"~180 ml",ja:"約180ml",zh:"約 180ml"},{en:"The standard serving of sake; rice for one meal",ja:"酒の一杯の基準。一食分の米",zh:"清酒的標準份量；一餐份的米"}],
            [{en:"2.5 gō",ja:"二合半",zh:"二合半"},{en:"~450 ml",ja:"約450ml",zh:"約 450ml"},{en:"Beans for Setsubun; display",ja:"節分の豆まき、飾り",zh:"節分撒豆；陳設"}],
            [{en:"5 gō",ja:"五合",zh:"五合"},{en:"~900 ml",ja:"約900ml",zh:"約 900ml"},{en:"Measuring rice; ceremonial sake",ja:"米の計量、祝いの酒",zh:"量米；典禮用酒"}],
            [{en:"1 shō",ja:"一升",zh:"一升"},{en:"~1.8 L",ja:"約1.8L",zh:"約 1.8L"},{en:"The old unit of trade; used at openings and festivals",ja:"かつての取引の単位。開店や祭りの祝いに",zh:"昔日的交易單位；用於開幕與祭典"}]
          ] },
        { t:"p", text:{
          en:"A masu is made to hold a measure exactly, so its inside dimensions, not its outside, are fixed; the thickness of the boards varies with the maker. New hinoki masu smell strongly of the wood, and the scent passes to the sake — which is why some drinkers prefer to drink from the corner of the box and others from a glass set inside it.",
          ja:"枡は量を正確に量るために作られるので、決まっているのは外寸ではなく内寸であり、板の厚みは作り手によって異なる。新しい檜の枡は木の香りが強く、その香りが酒に移る。枡の角から飲むのを好む人もいれば、中に立てたグラスで飲むのを好む人もいるのはそのためである。",
          zh:"枡是為了精確量取一定容量而做的，因此固定的是內部尺寸而非外部尺寸，木板厚度則因製作者而異。新的檜木枡木香濃郁，香氣會轉移到酒中——這就是為什麼有些人喜歡從枡的角落直接喝，有些人則偏好用放在枡中的玻璃杯喝。" } }
      ]
    },

    { t:"note", label:{en:"Making your own",ja:"自分で作る",zh:"親手製作"}, text:{
      en:"Several Ōgaki masu makers run shops and workshops where visitors can assemble a masu from cut boards or have one branded with a name, and the town sells them at its festivals. A masu to keep should be dried after use and kept away from direct heat, which cracks the joints.",
      ja:"大垣の枡の作り手のなかには、店や工房を開き、刻んだ板から枡を組み立てたり、名入れの焼印を押してもらえたりするところがいくつかあり、町の祭りでも売られる。手元に置く枡は、使ったあとに乾かし、組手が割れるので直火や熱の近くに置かないこと。",
      zh:"大垣有幾家枡製造商設有店鋪與工坊，遊客可以用裁好的木板親手組裝枡，或請店家烙上名字；鎮上的祭典也有販售。想長久保存的枡，用後要晾乾，並遠離直火與熱源，否則接榫處會開裂。" } },

    { t:"related", items:[
      { href:"doburoku.html", why:{ en:"The masu at the sake table.", ja:"酒席の枡。", zh:"酒席上的枡。" } },
      { href:"hinoki.html", why:{ en:"The wood every masu is made of.", ja:"すべての枡の材。", zh:"每個枡所用的木材。" } },
      { href:"furniture.html", why:{ en:"The furniture makers of Hida.", ja:"飛騨の家具の作り手。", zh:"飛驒的家具製造者。" } },
      { href:"forests.html", why:{ en:"The forest tax that pays for toys.", ja:"玩具をまかなう森林税。", zh:"為玩具出資的森林稅。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- architecture */
GIFU.pages["architecture"] = {
  kicker: { en: "Wood · 11", ja: "木 · 11", zh: "木 · 11" },
  title:  { en: "Building in Wood", ja: "木の建築", zh: "木造建築" },
  jp: "永保寺 · 安国寺経蔵 · 町家 · 芝居小屋 · ぎふメディアコスモス",
  lede: {
    en: "Gifu's timber buildings span seven centuries: Zen halls of the fourteenth century that are National Treasures, a fifteenth-century sutra library with a revolving bookcase inside, the gasshō farmhouses and merchant houses of the Edo and Meiji periods, a village theatre raised by volunteers — and, since 2015, a public library whose whole roof is a rippling lattice of thin boards of Tōnō hinoki.",
    ja: "岐阜の木の建物は七世紀にわたる。国宝である十四世紀の禅の堂、回転する書架を内に納めた十五世紀の経蔵、江戸・明治の合掌造りと商家、村人が有志で建てた芝居小屋——そして2015年からは、屋根全体が東濃ひのきの薄板を編んだ波打つ格子である公共図書館。",
    zh: "岐阜的木造建築橫跨七個世紀：屬國寶的十四世紀禪宗殿堂、內藏旋轉書架的十五世紀經藏、江戶與明治時期的合掌造農家與商家、由村民自發興建的鄉村戲棚——以及 2015 年起，一座整個屋頂由東濃檜木薄板編成起伏格子的公共圖書館。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Seven centuries of building in wood in Gifu, a selection. Dates are of the present buildings; National Treasure and Important Cultural Property are national designations.",
        ja:"岐阜の木の建築七百年（抜粋）。年は現存する建物のもの。国宝・重要文化財は国の指定。",
        zh:"岐阜木造建築七百年（選錄）。年份為現存建築的年代；國寶與重要文化財皆為國家指定。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 420" role="img" aria-label="Timeline of timber buildings in Gifu">' +
          '<rect x="0.5" y="0.5" width="759" height="419" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"SEVEN CENTURIES OF WOOD", ja:"木の七百年", zh:"木構七百年" }) + '</text>';
        var rows = [
          ["1314 · 1352", {en:"Eihō-ji, Kannon-dō and Kaisan-dō",ja:"永保寺 観音堂・開山堂",zh:"永保寺 觀音堂・開山堂"}, {en:"Tajimi · Zen halls · National Treasures",ja:"多治見・禅宗の堂・国宝",zh:"多治見・禪宗殿堂・國寶"}, "#EDE5D2"],
          ["1408", {en:"Ankoku-ji sutra repository",ja:"安国寺経蔵",zh:"安國寺經藏"}, {en:"Takayama · oldest revolving sutra case · National Treasure",ja:"高山・日本最古の輪蔵・国宝",zh:"高山・日本最古輪藏・國寶"}, "#EDE5D2"],
          ["1700s–1800s", {en:"Gasshō farmhouses",ja:"合掌造りの民家",zh:"合掌造民家"}, {en:"Shirakawa-gō · World Heritage 1995",ja:"白川郷・1995年世界遺産",zh:"白川鄉・1995 年世界遺產"}, "#E0E6DB"],
          ["1821", {en:"Hida Kokubun-ji pagoda",ja:"飛騨国分寺三重塔",zh:"飛驒國分寺三重塔"}, {en:"Takayama · the only pagoda in Hida",ja:"高山・飛騨唯一の塔",zh:"高山・飛驒唯一的塔"}, "#EDE5D2"],
          ["1879 · 1907", {en:"Kusakabe and Yoshijima houses",ja:"日下部家・吉島家住宅",zh:"日下部家・吉島家住宅"}, {en:"Takayama · merchant houses · Important Cultural Properties",ja:"高山・町家・重要文化財",zh:"高山・町家・重要文化財"}, "#E7DFD2"],
          ["1894", {en:"Kashimo Meiji-za",ja:"かしも明治座",zh:"加子母明治座"}, {en:"Nakatsugawa · village playhouse",ja:"中津川・芝居小屋",zh:"中津川・戲棚"}, "#E7DFD2"],
          ["1933", {en:"Gujō-Hachiman castle keep",ja:"郡上八幡城天守",zh:"郡上八幡城天守"}, {en:"Gujō · oldest wooden reconstructed keep",ja:"郡上・木造再建天守で最古",zh:"郡上・最古老的木造重建天守"}, "#E6E4E0"],
          ["2015", {en:"Minna no Mori Gifu Media Cosmos",ja:"みんなの森 ぎふメディアコスモス",zh:"大家的森林 岐阜媒體宇宙"}, {en:"Gifu · library under a hinoki lattice roof",ja:"岐阜・檜の格子屋根の図書館",zh:"岐阜・檜木格子屋頂下的圖書館"}, "#E9ECEE"]
        ];
        var X = 150;
        s += '<line x1="' + X + '" y1="60" x2="' + X + '" y2="392" stroke="#201E1B" stroke-width="1.6"/>';
        rows.forEach(function (r, i) {
          var y = 72 + i * 42;
          s += '<text x="' + (X - 14) + '" y="' + (y + 4) + '" text-anchor="end" ' + F + ' font-size="10.5" fill="#55504A">' + r[0] + '</text>' +
               '<rect x="' + (X - 5) + '" y="' + (y - 5) + '" width="10" height="10" fill="' + r[3] + '" stroke="#201E1B"/>' +
               '<text x="' + (X + 18) + '" y="' + (y + 4) + '" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(r[1]) + '</text>' +
               '<text x="' + (X + 18) + '" y="' + (y + 19) + '" ' + F + ' font-size="9.5" fill="#8B857C">' + L(r[2]) + '</text>';
        });
        s += '<text x="30" y="410" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"A SELECTION — many more timber buildings are designated.",ja:"抜粋——指定を受けた木造建築はほかにも多い。",zh:"選錄——獲指定的木造建築還有許多。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"medieval",
      title:{ en:"Zen halls and a turning library", ja:"禅の堂と回る経蔵", zh:"禪堂與旋轉的經藏" }, jp:"永保寺 · 安国寺",
      body:[
        { t:"p", text:{
          en:"The oldest timber buildings in the prefecture stand at <strong>Eihō-ji</strong> in Tajimi, a Zen temple on a bend of the Toki river founded by the monk Musō Soseki, who also laid out its garden. Its Kannon Hall, dated by record to 1314, and its Founder's Hall of 1352 are both National Treasures; the Founder's Hall is counted the oldest of its kind in any Zen temple in Japan. In Hida, the sutra repository of <strong>Ankoku-ji</strong>, built in 1408, is the province's only National Treasure building, and houses the oldest surviving revolving sutra case in Japan — see <a href=\"takumi.html\">Hida no Takumi</a>.",
          ja:"県内で最も古い木造建築は、多治見の<strong>永保寺</strong>にある。土岐川の曲がりにある禅寺で、夢窓疎石が開き、庭もみずから作った。記録で1314年とされる観音堂と、1352年の開山堂はともに国宝であり、開山堂は日本の禅寺に現存する開山堂で最古とされる。飛騨では、1408年に建てられた<strong>安国寺経蔵</strong>がこの国で唯一の国宝建造物で、日本最古の輪蔵を納める——<a href=\"takumi.html\">飛騨の匠</a>を参照。",
          zh:"縣內最古老的木造建築，位於多治見的<strong>永保寺</strong>——一座坐落在土岐川河灣的禪寺，由夢窗疏石開創，庭園也出自他的設計。記載為 1314 年的觀音堂與 1352 年的開山堂都是國寶；開山堂被視為日本禪寺中現存最古老的同類建築。在飛驒，1408 年建成的<strong>安國寺經藏</strong>是當地唯一的國寶建築，內有日本現存最古老的旋轉經架——見<a href=\"takumi.html\">飛驒工匠</a>。" } }
      ]
    },

    { t:"section", id:"houses",
      title:{ en:"Houses, theatres and a castle", ja:"家と芝居小屋と城", zh:"民宅、戲棚與城" }, jp:"合掌造り · 町家 · 芝居小屋 · 木造天守",
      body:[
        { t:"p", text:{
          en:"The great vernacular buildings are described in their own pages: the thatched <a href=\"shirakawago.html\">gasshō houses</a> of Shirakawa-gō, whose roofs are lashed rather than nailed; the <a href=\"towns.html\">merchant houses</a> of Takayama, Mino and Gujō-Hachiman; the <a href=\"kabuki.html\">village playhouses</a> of Tōnō and Gero with their revolving stages. At Gujō-Hachiman the keep on the castle hill, rebuilt in wood in 1933 on the model of Ōgaki's, is the oldest wooden reconstruction of a castle keep in Japan; most of the country's reconstructed keeps are concrete.",
          ja:"大きな民家建築は、それぞれの頁に述べた。縄で結い、釘を使わない屋根をもつ白川郷の<a href=\"shirakawago.html\">合掌造り</a>、高山・美濃・郡上八幡の<a href=\"towns.html\">町家</a>、回り舞台をもつ東濃や下呂の<a href=\"kabuki.html\">芝居小屋</a>である。郡上八幡の城山の天守は、1933年に大垣城を手本に木造で再建されたもので、木造の再建天守としては日本最古である。国内の再建天守の多くはコンクリートである。",
          zh:"那些重要的民間建築，各有專頁介紹：以繩綁紮、不用釘子的白川鄉<a href=\"shirakawago.html\">合掌造</a>；高山、美濃與郡上八幡的<a href=\"towns.html\">町家</a>；東濃與下呂設有旋轉舞台的<a href=\"kabuki.html\">戲棚</a>。郡上八幡城山上的天守，於 1933 年仿大垣城以木材重建，是日本最古老的木造重建天守；全國重建的天守大多是混凝土造。" } }
      ]
    },

    { t:"section", id:"cosmos",
      title:{ en:"A roof of hinoki", ja:"檜の屋根", zh:"檜木屋頂" }, jp:"みんなの森 ぎふメディアコスモス · 伊東豊雄",
      body:[
        { t:"p", text:{
          en:"<strong>Minna no Mori Gifu Media Cosmos</strong> — “everyone's forest” — opened in July 2015 in the centre of Gifu city as its main library and a civic centre. The architect Toyo Ito covered the whole upper floor, a single room without walls, with an undulating roof built as a lattice of thin laminae of Tōnō hinoki, laid in three directions and stacked in layers so that the boards bend with the roof's hills and hollows; the ceiling rises to about six metres. From it hang large translucent “globes”, eight to fourteen metres across, which gather light and air and mark out reading areas beneath. Because the roof curves, no two crossing points of the lattice are alike; the builders computed some 23,000 positions, tested the assembly on a full-size mock-up, and brought carpenters from across Japan to put it together by hand.",
          ja:"<strong>みんなの森 ぎふメディアコスモス</strong>は、2015年7月、岐阜市の中心に市の中央図書館と市民活動の拠点として開館した。建築家・伊東豊雄は、壁のない一室の二階全体を、東濃ひのきの薄いラミナを三方向に重ねて編んだ波打つ格子屋根で覆った。板は屋根の起伏に沿ってしなり、天井高は約六メートルに達する。そこから直径八〜十四メートルの半透明の「グローブ」が吊り下げられ、光と風を集め、その下に閲覧の場所を区切る。屋根が曲面であるため、格子の交点は一つとして同じではない。施工者は約二万三千の座標を割り出し、実物大の模型で組み立てを確かめ、全国から大工を集めて手で組み上げた。",
          zh:"<strong>大家的森林 岐阜媒體宇宙</strong>於 2015 年 7 月在岐阜市中心開館，作為該市的中央圖書館與市民活動中心。建築師伊東豐雄以一座起伏的屋頂覆蓋整個沒有隔牆的二樓大空間——屋頂是以東濃檜木薄板（層板）朝三個方向交錯、層層疊合而成的格子，木板隨著屋頂的起伏彎曲，天花板最高約六公尺。屋頂下垂掛著直徑八至十四公尺的半透明「球罩」，匯集光線與空氣，並在下方界定出閱讀區。由於屋頂是曲面，格子的交點沒有兩個是相同的；施工團隊計算出約兩萬三千個座標，用實物大模型測試組裝，並從全國召集木匠以手工組成。" } },
        { t:"p", text:{
          en:"The building is the best-known example of a wider turn back to wood in Japanese public architecture. A national law of 2010 committed the government to promoting timber in public buildings, and in 2021 it was widened to cover buildings of every kind. Gifu, with its large and maturing plantations, encourages the use of prefectural timber in schools, halls and offices, and the laminated timber, plywood and cross-laminated panels that make larger timber buildings possible are the new markets its forests most need — see <a href=\"logging.html\">Logging & Forestry</a>.",
          ja:"この建物は、日本の公共建築が木へと立ち返る、より大きな流れの最もよく知られた例である。2010年の法律は公共建築物で木材の利用を促進することを定め、2021年には対象があらゆる建築物に広げられた。大きく育ちつつある人工林をもつ岐阜県は、学校や会館や庁舎に県産材を使うことを勧めており、大きな木造建築を可能にする集成材・合板・CLTは、その森が最も必要とする新しい市場である——<a href=\"logging.html\">林業</a>を参照。",
          zh:"這座建築是日本公共建築重返木材這一更大趨勢中最著名的例子。2010 年的一項國家法律規定政府須在公共建築中推動使用木材，2021 年更擴大到所有類型的建築。擁有龐大且日漸成熟人工林的岐阜縣，鼓勵在學校、會館與辦公廳舍中使用縣產木材；而讓大型木造建築成為可能的集成材、合板與直交集成板，正是其森林最需要的新市場——見<a href=\"logging.html\">林業</a>。" } }
      ]
    },

    { t:"related", items:[
      { href:"takumi.html", why:{ en:"The carpenters' tradition.", ja:"大工の伝統。", zh:"木匠的傳統。" } },
      { href:"joinery.html", why:{ en:"How the frames are held together.", ja:"架構はどう組まれるか。", zh:"骨架如何接合。" } },
      { href:"hinoki.html", why:{ en:"The timber of the Media Cosmos roof.", ja:"メディアコスモスの屋根の木。", zh:"媒體宇宙屋頂的木材。" } },
      { href:"museums.html", why:{ en:"Buildings you can visit.", ja:"訪ねられる建物。", zh:"可參觀的建築。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- guitars */
GIFU.pages["guitars"] = {
  kicker: { en: "Wood · 12", ja: "木 · 12", zh: "木 · 12" },
  title:  { en: "Hand-made Guitars", ja: "手工ギター", zh: "手工吉他" },
  jp: "K.ヤイリ · 可児 · タカミネ · 中津川市坂下 · 鈴木バイオリン",
  lede: {
    en: "Two of Japan's best-known acoustic guitar makers work in Gifu: Yairi Guitar in Kani, whose K.Yairi instruments are built largely by hand, and Takamine in Sakashita, whose stage guitars have been played by Bruce Springsteen and the Eagles. Both grew out of the instrument workshops of Nagoya, which began when a shamisen maker taught himself to build violins in the 1880s. The tonewoods are mostly imported; what Gifu adds is the hands, and a century of woodworking around them.",
    ja: "日本で最もよく知られたアコースティックギターの作り手のうち二つが岐阜で仕事をしている。可児市のヤイリギター——そのK.ヤイリの楽器は大部分が手で作られる——と、中津川市坂下のタカミネ——そのステージ用ギターはブルース・スプリングスティーンやイーグルスに弾かれてきた——である。どちらも、1880年代に一人の三味線職人が独学でバイオリンを作り始めたことに始まる名古屋の楽器工房から育った。音響材の多くは輸入材である。岐阜が加えるのは手であり、それを囲む百年の木工である。",
    zh: "日本最知名的兩家木吉他製造商都在岐阜：可兒市的 Yairi Guitar——其 K.Yairi 吉他大部分以手工製作——以及中津川市坂下的 Takamine——其舞台吉他曾由布魯斯・史普林斯汀與老鷹樂團彈奏。兩者都源自名古屋的樂器工坊，而那段歷史始於 1880 年代一位三味線職人自學製作小提琴。音材大多為進口；岐阜所添加的，是雙手，以及圍繞著這雙手的百年木工傳統。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"A steel-string acoustic guitar and its woods, schematic. The top, or soundboard, is usually spruce or cedar, braced underneath with thin carved struts that are shaped and tapped by ear; the back and sides are usually rosewood or mahogany, the sides bent to shape against a hot iron; the neck is mahogany with an ebony or rosewood fingerboard; the nut and saddle are bone. Every one of these steps can be done by hand, and at a workshop like K.Yairi most of them are.",
        ja:"スチール弦のアコースティックギターとその材（模式図）。表板（響板）はふつうスプルースかシダーで、裏には耳で聴きながら削り、叩いて調える細い力木が張られる。裏板と側板はふつうローズウッドかマホガニーで、側板は熱した鉄に当てて曲げる。ネックはマホガニーで指板はエボニーかローズウッド、ナットとサドルは骨である。これらの工程はすべて手で行うことができ、K.ヤイリのような工房ではその大半が手で行われる。",
        zh:"鋼弦木吉他及其用材（示意圖）。面板（音板）通常是雲杉或雪松，底下黏著細長的音梁，由師傅邊聽邊削、敲擊調整；背板與側板通常是玫瑰木或桃花心木，側板靠在加熱的鐵管上彎曲成形；琴頸為桃花心木，指板為烏木或玫瑰木；上弦枕與下弦枕為骨材。這些步驟都能以手工完成，而在 K.Yairi 這樣的工坊，大部分正是如此。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 380" role="img" aria-label="Parts and woods of an acoustic guitar">' +
          '<rect x="0.5" y="0.5" width="759" height="379" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"AN ACOUSTIC GUITAR", ja:"アコースティックギター", zh:"一把木吉他" }) + '</text>';
        var cx = 250;
        s += '<g transform="translate(24,4)">';
        /* body */
        s += '<path d="M250 150 C290 148 322 160 322 185 C322 205 300 208 300 225 C300 240 342 250 342 285 C342 322 300 342 250 342 C200 342 158 322 158 285 C158 250 200 240 200 225 C200 208 178 205 178 185 C178 160 210 148 250 150 Z" fill="#EDE5D2" stroke="#201E1B" stroke-width="1.4"/>';
        /* bracing (hidden) */
        s += '<path d="M204 236 L296 318 M296 236 L204 318" stroke="#B4AC9C" stroke-width="2" stroke-dasharray="5 4"/>';
        /* soundhole */
        s += '<circle cx="250" cy="212" r="22" fill="#55504A"/><circle cx="250" cy="212" r="27" fill="none" stroke="#7C6B52"/>';
        /* neck & fingerboard */
        s += '<rect x="238" y="58" width="24" height="96" fill="#E7DFD2" stroke="#201E1B"/>' +
             '<rect x="240" y="58" width="20" height="130" fill="#55504A"/>';
        var fy = 64;
        for (var f = 0; f < 14; f++) { s += '<line x1="240" y1="' + fy.toFixed(1) + '" x2="260" y2="' + fy.toFixed(1) + '" stroke="#DFDAD0" stroke-width="0.8"/>'; fy += 9.5 - f * 0.35; }
        /* headstock */
        s += '<path d="M232 18 L268 18 L264 56 L236 56 Z" fill="#E7DFD2" stroke="#201E1B"/>' +
             '<rect x="238" y="54" width="24" height="4" fill="#FBFAF7" stroke="#201E1B" stroke-width="0.8"/>';
        [26, 38, 50].forEach(function (y) { s += '<circle cx="228" cy="' + y + '" r="3.5" fill="#FBFAF7" stroke="#201E1B"/><circle cx="272" cy="' + y + '" r="3.5" fill="#FBFAF7" stroke="#201E1B"/>'; });
        /* bridge */
        s += '<rect x="222" y="290" width="56" height="12" fill="#55504A"/><line x1="230" y1="294" x2="270" y2="294" stroke="#FBFAF7" stroke-width="1.6"/>';
        /* strings */
        for (var k = 0; k < 6; k++) { var x = 243 + k * 2.8; s += '<line x1="' + x + '" y1="56" x2="' + x + '" y2="294" stroke="#8B857C" stroke-width="0.5"/>'; }
        s += '</g>';
        /* labels */
        var LB = F + ' font-size="10.5" fill="#201E1B"', LS = F + ' font-size="9.5" fill="#8B857C"';
        var lab = [
          [36,  "M372 34 L300 40",  {en:"headstock and tuners",ja:"ヘッドとペグ",zh:"琴頭與弦鈕"}, {en:"nut of bone",ja:"ナットは骨",zh:"上弦枕為骨材"}],
          [104, "M372 100 L286 108", {en:"neck: mahogany",ja:"ネック：マホガニー",zh:"琴頸：桃花心木"}, {en:"fingerboard: ebony or rosewood",ja:"指板：エボニーかローズウッド",zh:"指板：烏木或玫瑰木"}],
          [176, "M372 172 L330 182", {en:"top (soundboard): spruce or cedar",ja:"表板（響板）：スプルースかシダー",zh:"面板（音板）：雲杉或雪松"}, {en:"split and book-matched",ja:"割って左右対称に接ぐ",zh:"劈開後對拼"}],
          [252, "M372 248 L310 266", {en:"braces under the top",ja:"表板裏の力木",zh:"面板下的音梁"}, {en:"carved and tapped by ear",ja:"耳で聴いて削り、叩いて調える",zh:"邊聽邊削、敲擊調整"}],
          [300, "M372 296 L304 300", {en:"bridge and bone saddle",ja:"ブリッジと骨のサドル",zh:"琴橋與骨製下弦枕"}, {en:"",ja:"",zh:""}],
          [336, "M372 332 L360 322", {en:"back and sides: rosewood or mahogany",ja:"裏板・側板：ローズウッドかマホガニー",zh:"背板與側板：玫瑰木或桃花心木"}, {en:"sides bent on a hot iron",ja:"側板は熱した鉄で曲げる",zh:"側板以熱鐵管彎曲"}]
        ];
        lab.forEach(function (a) {
          s += '<path d="' + a[1] + '" stroke="#B4AC9C"/>' +
               '<text x="378" y="' + a[0] + '" ' + LB + '>' + L(a[2]) + '</text>';
          var sub = L(a[3]);
          if (sub) s += '<text x="378" y="' + (a[0] + 14) + '" ' + LS + '>' + sub + '</text>';
        });
        s += '<text x="30" y="370" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — typical woods; models vary. Dashed: X-bracing, hidden under the top.",ja:"模式図——代表的な材。機種により異なる。破線は表板の裏に隠れたX字の力木。",zh:"示意圖——典型用材，因型號而異。虛線為隱藏在面板下的 X 形音梁。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"why",
      title:{ en:"Why here", ja:"なぜここで", zh:"為何在此" }, jp:"鈴木バイオリン · 東海の楽器づくり",
      body:[
        { t:"p", text:{
          en:"The story begins in Nagoya. In 1887 Suzuki Masakichi, a maker of shamisen, saw a violin, copied it by eye and eye alone, and finished his first instrument the next year; within a few years he had a factory, and by the First World War, when European makers could not supply the world, his company employed more than a thousand people and exported violins across the globe. Its workshops trained a generation of Nagoya instrument makers. Some of them, and their pupils, moved out into the woodworking towns of southern Gifu, and when the folk-song and guitar boom of the 1960s and 1970s made Japan one of the world's great producers of guitars, central Japan — from Hamamatsu and Nagoya through southern Gifu to the Matsumoto basin in Nagano — became its heartland.",
          ja:"物語は名古屋に始まる。1887年、三味線職人の鈴木政吉はバイオリンを目にし、見よう見まねでそれを写して、翌年に最初の一挺を完成させた。数年のうちに工場を持ち、第一次世界大戦で欧州の作り手が世界に供給できなくなったころには、その会社は千人を超える従業員を抱え、世界中にバイオリンを輸出していた。その工房は名古屋の楽器職人の一世代を育てた。彼らの一部とその弟子たちは岐阜県南部の木工の町に出ていき、1960〜70年代のフォークとギターのブームが日本を世界有数のギター生産国にしたとき、浜松と名古屋から岐阜県南部を経て長野県の松本盆地にいたる中部日本がその中心となった。",
          zh:"故事從名古屋開始。1887 年，三味線職人鈴木政吉看到一把小提琴，全憑目測仿製，隔年完成了他的第一把琴；幾年之內他就有了工廠，到第一次世界大戰期間歐洲製琴商無法供應全世界時，他的公司已擁有一千多名員工，把小提琴出口到世界各地。其工坊培養了一整代名古屋的樂器職人。他們之中有些人及其弟子遷往岐阜縣南部的木工城鎮；當 1960、70 年代的民謠與吉他熱潮使日本成為全球主要吉他產國時，從濱松、名古屋經岐阜縣南部直到長野縣松本盆地的中部日本，便成了它的中心。" } }
      ]
    },

    { t:"section", id:"yairi",
      title:{ en:"K.Yairi, Kani", ja:"K.ヤイリ（可児市）", zh:"K.Yairi（可兒市）" }, jp:"ヤイリギター · 矢入一男",
      body:[
        { t:"p", text:{
          en:"Yairi Guitar traces itself to 1935, when Yairi Giichi, who had worked at Suzuki's violin company, founded his own instrument workshop in Nagoya. During the war it made wooden goods such as boxes for shells rather than instruments, and in 1945, to escape the air raids, it moved to Imawatari, now part of Kani. After the war the second generation, Yairi Kazuo, decided that the age of the guitar was coming and went to the United States to learn how serious guitars were made — and, the company says, found Japanese mass-produced guitars there treated as toys, and resolved to build real ones. The firm became Yairi Guitar in 1965; its instruments carry the name K.Yairi, the K for Kazuo.",
          ja:"ヤイリギターの始まりは1935年、鈴木バイオリンで働いていた矢入儀市が名古屋に自らの楽器工房を開いたときにさかのぼる。戦時中は楽器ではなく砲弾の箱などの木製品を作り、1945年には空襲を避けて、いまの可児市の今渡に移った。戦後、二代目の矢入一男は「ギターの時代が来る」と考え、本格的なギターの作り方を学ぶためアメリカへ渡った。同社によれば、そこで日本の量産ギターがおもちゃのように扱われているのを目にし、本物のギターを作ると決意したという。会社は1965年にヤイリギターとなり、その楽器はK.ヤイリの名——Kは一男の頭文字——を掲げる。",
          zh:"Yairi Guitar 的起源可追溯到 1935 年：曾在鈴木小提琴公司工作的矢入儀市，在名古屋創立了自己的樂器工坊。戰時工坊不做樂器，改做砲彈箱之類的木製品；1945 年為躲避空襲，遷到今可兒市的今渡。戰後，第二代矢入一男認定「吉他的時代即將來臨」，遠赴美國學習正規吉他的製作方法——據公司的說法，他在那裡看到日本量產吉他被當成玩具看待，於是決心製作真正的吉他。公司於 1965 年改名為 Yairi Guitar，其樂器冠以 K.Yairi 之名——K 取自一男（Kazuo）的首字母。" } },
        { t:"p", text:{
          en:"The Kani workshop builds as much as possible by hand, and makes ukuleles, harps and bouzoukis as well as guitars. From the 1970s its guitars were sold in the United States under the name Alvarez-Yairi, and players who have used them include Paul McCartney, David Crosby, Graham Nash, Ritchie Blackmore, Carlos Santana and Dominic Miller. In 2005 Yairi Kazuo was named one of Japan's Contemporary Master Craftsmen by the labour ministry, and in 2006 he received the Medal with Yellow Ribbon. The similarly named S.Yairi brand was founded by a relative in the same year, 1935, and is a separate business.",
          ja:"可児の工房はできるかぎり手で作り、ギターのほかウクレレやハープやブズーキも作る。1970年代からそのギターはアメリカでアルバレス・ヤイリの名で売られ、ポール・マッカートニー、デヴィッド・クロスビー、グラハム・ナッシュ、リッチー・ブラックモア、カルロス・サンタナ、ドミニク・ミラーらが用いてきた。矢入一男は2005年に厚生労働省の「現代の名工」に選ばれ、2006年には黄綬褒章を受けた。似た名のS.ヤイリは、同じ1935年に親族が興した別の事業である。",
          zh:"可兒工坊盡可能以手工製作，除了吉他也製作烏克麗麗、豎琴與布祖基琴。從 1970 年代起，其吉他在美國以 Alvarez-Yairi 之名銷售，用過的演奏者包括保羅・麥卡尼、大衛・克羅斯比、葛拉漢・納許、李奇・布萊克摩、卡洛斯・山塔那與多明尼克・米勒。矢入一男於 2005 年獲厚生勞動省選為「現代名工」，2006 年獲頒黃綬褒章。名稱相似的 S.Yairi 品牌，是一位親族在同一年（1935 年）創立的另一家企業。" } }
      ]
    },

    { t:"section", id:"takamine",
      title:{ en:"Takamine, Sakashita", ja:"タカミネ（中津川市坂下）", zh:"Takamine（中津川市坂下）" }, jp:"高峰楽器製作所 · 高峰山",
      body:[
        { t:"p", text:{
          en:"Takamine began in 1959, when a string-instrument maker trained in Nagoya, who had suffered in the Ise Bay typhoon of that September, moved to his wife's family's town of Sakashita, in the Kiso valley at the eastern edge of Gifu. Sakashita was a timber and woodworking town, so skilled hands were easy to find. His workshop, first called Ōsone Gakki, took the name of Mount Takamine above the town in 1962. The company's reputation was made on stage: in the late 1970s it developed the Palathetic pickup, six separately shielded piezo elements under the saddle, one for each string, with a preamplifier built into the guitar, at a time when amplifying an acoustic guitar reliably was hard. Bruce Springsteen's band adopted Takamines in 1978 and has used them ever since; Glenn Frey of the Eagles played them; and electro-acoustic guitars from Sakashita became a fixture of concert stages worldwide.",
          ja:"タカミネは1959年に始まった。名古屋で弦楽器づくりを修業した職人が、その年の九月の伊勢湾台風で被災し、妻の実家のある坂下町——岐阜県東端、木曽谷の町——に移ったのである。坂下は材木と木工の町で、腕のよい職人を見つけるのはたやすかった。はじめ大曽根楽器と称した工房は、1962年に町を見下ろす高峰山の名をとった。同社の名声は舞台でつくられた。1970年代後半、アコースティックギターの音を安定して増幅するのが難しかった時代に、サドルの下に弦一本ずつに対応する六つの個別にシールドされたピエゾ素子を置き、プリアンプをギター本体に組み込んだパラシティック・ピックアップを開発したのである。ブルース・スプリングスティーンのバンドは1978年にタカミネを採用して以来使い続け、イーグルスのグレン・フライも弾いた。坂下のエレアコは世界のコンサートの舞台の定番となった。",
          zh:"Takamine 始於 1959 年：一位在名古屋學習弦樂器製作的師傅，在當年九月的伊勢灣颱風中受災，搬到妻子娘家所在的坂下町——位於岐阜縣最東端的木曾谷。坂下是木材與木工之鎮，因此很容易找到手藝好的工匠。他的工坊起初名為「大曾根樂器」，1962 年改以鎮上方的高峰山為名。公司的聲譽是在舞台上建立的：1970 年代後期，在木吉他難以穩定擴音的年代，它開發出 Palathetic 拾音器——在下弦枕底下放置六個各自屏蔽的壓電元件，每條弦各一個，並把前級放大器內建在琴身中。布魯斯・史普林斯汀的樂團自 1978 年採用 Takamine 後一直沿用至今；老鷹樂團的葛倫・佛萊也彈奏它；來自坂下的電木吉他成了全球演唱會舞台上的常見配備。" } }
      ]
    },

    { t:"section", id:"hand",
      title:{ en:"What “hand-made” means", ja:"「手工」とは何か", zh:"「手工」的意思" }, jp:"工程",
      body:[
        { t:"steps", items:[
          { title:{en:"Seasoning the wood",ja:"材を枯らす",zh:"木材乾燥"}, jp:"乾燥",
            text:{en:"Tonewoods — mostly spruce and cedar for tops, rosewood, mahogany and maple for backs and sides — are bought years ahead and stored to dry and settle before they are cut.",ja:"音響材——表板にはおもにスプルースとシダー、裏板・側板にはローズウッド、マホガニー、メイプル——は何年も前から買い入れ、切る前に寝かせて乾かし、落ち着かせる。",zh:"音材——面板多為雲杉與雪松，背板與側板為玫瑰木、桃花心木與楓木——須提前數年購入，存放乾燥、使其穩定後才裁切。"} },
          { title:{en:"Top and back",ja:"表板と裏板",zh:"面板與背板"}, jp:"ブックマッチ",
            text:{en:"A wedge of wood is sawn into two thin leaves that are opened like a book and glued edge to edge, so the grain mirrors across the centre; the plates are thicknessed by hand and ear.",ja:"くさび形の材を二枚の薄板に挽き、本を開くように広げて端どうしを接ぐ。木目は中心で左右対称になる。板の厚みは手と耳で整える。",zh:"把一塊楔形木料鋸成兩片薄板，像書本般攤開後邊對邊黏合，使木紋在中線兩側對稱；板厚則以手感與聽覺調整。"} },
          { title:{en:"Bracing",ja:"力木",zh:"音梁"}, jp:"ブレーシング",
            text:{en:"Thin spruce braces are glued under the top in an X or another pattern, then shaved while the maker taps the top and listens — the step that most shapes the voice.",ja:"表板の裏にX字などの形にスプルースの細い力木を接着し、作り手は表板を叩いて聴きながら削る。音色を最も左右する工程である。",zh:"在面板底下以 X 形或其他形式黏上細長的雲杉音梁，再由師傅一邊敲擊面板聆聽、一邊削薄——這是最能塑造音色的步驟。"} },
          { title:{en:"Bending the sides",ja:"側板を曲げる",zh:"彎曲側板"}, jp:"ベンディング",
            text:{en:"The sides are wetted and bent against a hot iron into the waisted outline, then glued into a rim with linings to which the top and back are fixed.",ja:"側板を湿らせ、熱した鉄に当ててくびれた輪郭に曲げ、ライニングとともに枠に組み、そこへ表板と裏板を貼る。",zh:"側板浸濕後貼在熱鐵上彎出有腰身的輪廓，再與內襯條組成琴框，面板與背板便黏在其上。"} },
          { title:{en:"Neck and frets",ja:"ネックとフレット",zh:"琴頸與琴格"}, jp:"ネック · 仕込み",
            text:{en:"The neck is carved, fitted to the body — traditionally with a dovetail — and fretted; the angle of the neck and the height of the strings are set by hand.",ja:"ネックを削り出し、伝統的には蟻溝で胴に仕込み、フレットを打つ。ネックの角度と弦の高さは手で調整する。",zh:"琴頸經雕削後裝入琴身——傳統上以鳩尾榫——再安裝琴格；琴頸角度與弦距都以手工調整。"} },
          { title:{en:"Finish and set-up",ja:"塗装と調整",zh:"塗裝與調校"}, jp:"塗装",
            text:{en:"Thin coats of lacquer are sprayed, dried and polished by hand; the nut and saddle are cut from bone and the guitar is strung and adjusted before it leaves.",ja:"薄い塗膜を吹き付け、乾かし、手で磨き上げる。ナットとサドルを骨から削り出し、弦を張って調整してから送り出す。",zh:"噴上薄薄的漆層，待乾後以手工拋光；上下弦枕以骨材削製，裝弦調校後才出廠。"} }
        ] },
        { t:"note", label:{en:"Makers large and small",ja:"大小の作り手",zh:"大大小小的製作者"}, text:{
          en:"Besides the two large workshops, independent luthiers in Gifu build and repair guitars to order, and several offer repairs and set-ups for players from across the Tōkai region.",
          ja:"二つの大きな工房のほかにも、岐阜では独立した製作家が注文でギターを作り、修理しており、東海一円の弾き手の修理や調整を引き受ける工房もある。",
          zh:"除了這兩家大型工坊，岐阜還有獨立製琴師接受訂製與修理，也有工坊為整個東海地區的演奏者提供修理與調校服務。" } }
      ]
    },

    { t:"related", items:[
      { href:"furniture.html", why:{ en:"Bending wood, by the chair.", ja:"椅子の曲げの技。", zh:"椅子的彎木技術。" } },
      { href:"joinery.html", why:{ en:"The dovetail, in beams and necks.", ja:"梁とネックの蟻組み。", zh:"樑與琴頸中的鳩尾榫。" } },
      { href:"wood.html", why:{ en:"The land of wood the workshops grew in.", ja:"工房が育った木の国。", zh:"孕育這些工坊的木之國。" } },
      { href:"makers.html", why:{ en:"A directory of Gifu's makers.", ja:"岐阜の作り手の名鑑。", zh:"岐阜製作者名鑑。" } }
    ] }
  ]
};
