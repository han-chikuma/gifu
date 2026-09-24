/* =============================================================
   THE SPIRIT OF GIFU — Metal & Blades
   Page modules, concatenated. Each page is one
   GIFU.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ----------------------------------------------- metal */
GIFU.pages["metal"] = {
  kicker: { en: "Metal & Blades · 01", ja: "金と刃 · 01", zh: "金屬與刀刃 · 01" },
  title:  { en: "Metal in Gifu", ja: "岐阜の金属", zh: "岐阜的金屬" },
  jp: "南宮大社 · 金山彦命 · 神岡鉱山 · スーパーカミオカンデ · 金生山",
  lede: {
    en: "Gifu is the home of the god of metals, whose shrine at Tarui is honoured by smiths and foundries all over Japan. Its mountains held gold, silver, lead and zinc, and the greatest of its mines, at Kamioka, both poisoned a river and, after the ore ran out, became the site of some of the most important physics experiments of the age. Its most famous metalworkers, the smiths of Seki, never had a mine at all: they had charcoal, water, clay and a crossroads.",
    ja: "岐阜は金属の神の地であり、垂井のその社は全国の鍛冶や鋳物師に崇められている。その山々には金・銀・鉛・亜鉛があり、最大の鉱山である神岡は、川を汚し、鉱石が尽きたあとには、この時代で最も重要な物理学の実験の場となった。そして最も名高い金属の職人である関の鍛冶は、鉱山をまったく持たなかった。持っていたのは炭と水と土と、道の交わる場所であった。",
    zh: "岐阜是金屬之神的故鄉，其位於垂井的神社受到全日本鍛冶與鑄造業者的崇敬。它的山中蘊藏金、銀、鉛與鋅，其中最大的礦山——神岡——既曾污染一條河流，又在礦石採盡之後，成為這個時代最重要的幾項物理實驗的所在地。而它最著名的金屬匠人——關的刀匠——卻根本沒有礦山：他們擁有的是炭、水、黏土，以及一個道路交會之處。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Super-Kamiokande in the old Kamioka mine, schematic section. A stainless-steel tank about 39 m across and 41 m high, filled with 50,000 tonnes of ultra-pure water and lined with some eleven thousand photomultiplier tubes, sits about 1,000 m below the summit of Mount Ikeno, where the rock screens out cosmic rays. It began observing in 1996.",
        ja:"旧神岡鉱山のスーパーカミオカンデ（模式断面図）。直径約39メートル、高さ約41メートルのステンレスのタンクに五万トンの超純水を満たし、内壁に約一万一千本の光電子増倍管を並べる。池ノ山の山頂から約千メートルの地下にあり、岩盤が宇宙線を遮る。1996年に観測を始めた。",
        zh:"舊神岡礦山中的超級神岡探測器（示意剖面圖）。一座直徑約 39 公尺、高約 41 公尺的不鏽鋼水槽，裝滿五萬噸超純水，內壁排列約一萬一千支光電倍增管，位於池之山山頂下方約一千公尺處，由岩層遮擋宇宙射線。1996 年開始觀測。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 380" role="img" aria-label="Schematic section of Super-Kamiokande under Mount Ikeno">' +
          '<rect x="0.5" y="0.5" width="759" height="379" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"PHYSICS IN A MINE", ja:"鉱山の物理学", zh:"礦坑裡的物理學" }) + '</text>';
        /* mountain */
        s += '<path d="M30 330 L150 250 L260 150 L330 70 L400 140 L520 220 L640 290 L730 330 Z" fill="#E0E6DB" stroke="#7C6B52" stroke-width="1.2"/>' +
             '<text x="330" y="60" text-anchor="middle" ' + F + ' font-size="10.5" fill="#201E1B">' + L({en:"Mount Ikeno (Ikenoyama)",ja:"池ノ山",zh:"池之山"}) + '</text>';
        /* depth arrow */
        s += '<line x1="300" y1="74" x2="300" y2="262" stroke="#55504A" stroke-dasharray="3 3"/>' +
             '<path d="M300 262 l-4 -8 l8 0 z" fill="#55504A"/><path d="M300 74 l-4 8 l8 0 z" fill="#55504A"/>' +
             '<text x="292" y="170" text-anchor="end" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"about 1,000 m of rock",ja:"岩盤 約1,000m",zh:"岩層約 1,000 公尺"}) + '</text>';
        /* tank */
        s += '<rect x="330" y="262" width="60" height="62" fill="#E0E7E9" stroke="#201E1B" stroke-width="1.4"/>';
        for (var i = 0; i < 6; i++) {
          for (var j = 0; j < 6; j++) {
            s += '<circle cx="' + (336 + i * 9.6) + '" cy="' + (268 + j * 10.2) + '" r="1.6" fill="#8FA6AE"/>';
          }
        }
        /* access tunnel */
        s += '<path d="M390 300 L560 300 L700 318" fill="none" stroke="#55504A" stroke-width="3"/>' +
             '<text x="560" y="292" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"mine tunnel",ja:"坑道",zh:"坑道"}) + '</text>';
        /* labels */
        s += '<text x="400" y="248" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"Super-Kamiokande (1996)",ja:"スーパーカミオカンデ（1996年）",zh:"超級神岡（1996 年）"}) + '</text>' +
             '<text x="400" y="262" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"50,000 t of ultra-pure water · ~11,000 sensors",ja:"超純水5万トン・光センサー約1万1千本",zh:"超純水五萬噸・光感測器約一萬一千支"}) + '</text>';
        /* note */
        s += '<text x="40" y="356" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"tank not to scale — drawn several times larger so it can be seen",ja:"タンクは縮尺外——見えるよう数倍大きく描く",zh:"水槽未按比例——為便於辨識放大數倍繪製"}) + '</text>' +
             '<text x="30" y="372" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — mountain profile invented; depth and tank dimensions as published.",ja:"模式図——山の形は仮のもの。深さとタンクの寸法は公表値。",zh:"示意圖——山形為示意；深度與水槽尺寸依公開數據。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"nangu",
      title:{ en:"The god of metals", ja:"金属の神", zh:"金屬之神" }, jp:"南宮大社 · 金山彦命",
      body:[
        { t:"p", text:{
          en:"<strong>Nangū Taisha</strong>, at the foot of Mount Nangū in Tarui, is the first shrine of Mino. Its god, <strong>Kanayamahiko</strong>, is the deity of mines and metalworking, and the shrine is regarded as the head of all the shrines of the metal trades in Japan: smiths, foundry owners and steel companies come to it from across the country. Its buildings, burned in the wars around Sekigahara and rebuilt in the seventeenth century, are a set of eighteen Important Cultural Properties, and in November it holds a festival for metalworkers with a ceremonial forging. See <a href=\"faith.html\">Shrines & Temples</a>.",
          ja:"垂井の南宮山のふもとにある<strong>南宮大社</strong>は美濃国一宮である。祭神の<strong>金山彦命</strong>は鉱山と金属加工の神で、社は日本の金属業の神社の総本宮とされ、鍛冶や鋳物師や製鉄の会社が全国から参拝する。関ヶ原前後の戦乱で焼けた社殿は十七世紀に再建され、十八棟が一括して重要文化財となっている。十一月には金属業者のための祭りが行われ、古式の鍛錬が奉納される。<a href=\"faith.html\">社寺と信仰</a>を参照。",
          zh:"位於垂井南宮山山腳的<strong>南宮大社</strong>是美濃國一宮。祭神<strong>金山彥命</strong>是礦山與金屬加工之神，此社被視為日本所有金屬行業神社的總本宮：刀匠、鑄造業者與鋼鐵公司從全國各地前來參拜。其社殿在關原前後的戰亂中燒毀，於十七世紀重建，十八棟建築整體列為重要文化財；每年十一月舉行金屬業者的祭典，並奉納古式鍛鍊。見<a href=\"faith.html\">神社、寺院與信仰</a>。" } }
      ]
    },

    { t:"section", id:"mines",
      title:{ en:"Mines and a poisoned river", ja:"鉱山と汚された川", zh:"礦山與受污染的河" }, jp:"神岡鉱山 · イタイイタイ病 · 金生山",
      body:[
        { t:"p", text:{
          en:"The Hida mountains were mined for gold and silver in the Middle Ages, when the lords of the Shirakawa valley grew rich on them, and for lead, zinc and silver at <strong>Kamioka</strong>, in the north of the province, where the ore lies in the marble layers of the ancient Hida gneiss. From the 1870s the Mitsui company developed Kamioka into one of the largest zinc and lead mines in Asia. Its waste went into the Takahara river, which flows north into the Jinzū and the rice fields of Toyama, and the cadmium it carried caused <strong>itai-itai disease</strong> — “it hurts, it hurts” — a crippling softening of the bones among the farming women of the Jinzū basin. In 1968 it became the first disease the Japanese government officially recognised as caused by industrial pollution. Mining at Kamioka ended in 2001.",
          ja:"飛騨の山々では、中世には金と銀が掘られ、白川の谷の領主はそれで富んだ。国の北部の<strong>神岡</strong>では、古い飛騨片麻岩の結晶質石灰岩の層に眠る鉛・亜鉛・銀が掘られた。1870年代から三井が神岡を開発し、アジア有数の亜鉛・鉛鉱山に育てた。その廃水は北へ流れて神通川と富山の水田に注ぐ高原川に入り、そこに含まれたカドミウムが、神通川流域の農家の女性たちの骨をもろくする<strong>イタイイタイ病</strong>を引き起こした。1968年、それは日本政府が公害によると公式に認めた最初の病気となった。神岡での採掘は2001年に終わった。",
          zh:"中世時，飛驒山區開採金銀，白川河谷的領主因此致富；而在飛驒北部的<strong>神岡</strong>，則開採蘊藏在古老飛驒片麻岩大理岩層中的鉛、鋅與銀。1870 年代起，三井公司把神岡發展成亞洲最大的鋅鉛礦之一。礦山的廢水流入高原川，高原川向北匯入神通川，注入富山的稻田；其中所含的鎘，在神通川流域的農家婦女之間引發了使骨骼軟化、令人痛不欲生的<strong>痛痛病</strong>。1968 年，它成為日本政府正式認定的第一種公害病。神岡的採礦作業於 2001 年結束。" } },
        { t:"p", text:{
          en:"At the other end of the prefecture, the limestone hill of <strong>Kinshōzan</strong> at Akasaka in Ōgaki has been quarried for lime for centuries and is famous among geologists for its fossils — reef creatures of the Permian period, some 260 million years ago, when the rock lay in a tropical sea.",
          ja:"県の反対の端、大垣市赤坂の石灰岩の山<strong>金生山</strong>は何世紀にもわたって石灰のために掘られてきた。地質学者のあいだでは化石で名高い。岩が熱帯の海にあった約二億六千万年前、ペルム紀の礁の生きものたちである。",
          zh:"在縣的另一端，大垣市赤坂的石灰岩山<strong>金生山</strong>數百年來一直為燒製石灰而開採，並因化石而在地質學家之間聞名——那是約兩億六千萬年前二疊紀、岩層仍位於熱帶海洋時的礁岩生物。" } }
      ]
    },

    { t:"section", id:"physics",
      title:{ en:"Physics under the mountain", ja:"山の下の物理学", zh:"山底下的物理學" }, jp:"カミオカンデ · スーパーカミオカンデ · KAGRA",
      body:[
        { t:"p", text:{
          en:"The deep galleries of Kamioka offered physicists something rare: a thousand metres of rock to shield detectors from cosmic rays. <strong>Kamiokande</strong>, a tank of 3,000 tonnes of water built in the mine in 1983 to look for proton decay, instead caught neutrinos from a supernova in February 1987, the birth of neutrino astronomy; its leader Koshiba Masatoshi shared the Nobel Prize in Physics in 2002. Its successor, <strong>Super-Kamiokande</strong>, began in 1996; in 1998 it showed that neutrinos change type as they travel and so must have mass, work for which Kajita Takaaki shared the Nobel Prize in 2015. The mine also houses <strong>KAGRA</strong>, an underground, cryogenically cooled gravitational-wave detector with arms three kilometres long, and a still larger neutrino detector, <strong>Hyper-Kamiokande</strong>, is under construction nearby.",
          ja:"神岡の深い坑道は、物理学者にまれなものを与えた。検出器を宇宙線から守る千メートルの岩盤である。陽子崩壊を探すために1983年に鉱山内に造られた三千トンの水タンク<strong>カミオカンデ</strong>は、代わりに1987年2月の超新星からのニュートリノをとらえ、ニュートリノ天文学を誕生させた。率いた小柴昌俊は2002年にノーベル物理学賞を受けた。後継の<strong>スーパーカミオカンデ</strong>は1996年に観測を始め、1998年にニュートリノが飛びながら種類を変えること——すなわち質量を持つこと——を示し、梶田隆章が2015年にノーベル賞を受けた。鉱山には、地下で極低温に冷やす腕の長さ三キロメートルの重力波望遠鏡<strong>KAGRA</strong>もあり、さらに大きなニュートリノ検出器<strong>ハイパーカミオカンデ</strong>が近くで建設中である。",
          zh:"神岡的深層坑道給了物理學家一樣罕見的東西：一千公尺厚、足以替探測器遮擋宇宙射線的岩層。<strong>神岡探測器</strong>是 1983 年在礦坑內建造、容量三千噸的水槽，原本用來尋找質子衰變，卻在 1987 年 2 月捕捉到來自一顆超新星的微中子，開啟了微中子天文學；主持者小柴昌俊於 2002 年共同獲得諾貝爾物理學獎。其後繼者<strong>超級神岡探測器</strong>於 1996 年開始觀測，1998 年證明微中子在飛行中會改變種類、因而具有質量，梶田隆章憑此於 2015 年共同獲得諾貝爾獎。礦坑中還有<strong>KAGRA</strong>——一座位於地下、以超低溫冷卻、臂長三公里的重力波探測器；而更大的微中子探測器<strong>超超級神岡（Hyper-Kamiokande）</strong>正在附近興建。" } }
      ]
    },

    { t:"section", id:"steel",
      title:{ en:"Steel for Seki", ja:"関の鋼", zh:"關的鋼材" }, jp:"玉鋼 · たたら · 刃物鋼",
      body:[
        { t:"p", text:{
          en:"Seki's smiths were not miners or smelters. Most of their steel is thought to have come from the <em>tatara</em> furnaces of the Chūgoku mountains in western Japan, where iron sand was smelted with charcoal into <em>tamahagane</em>, and what Seki supplied was pine charcoal for the forge, clean water from the Nagara and Tsubo rivers for quenching, clay for the tempering coat, and a place on the roads between Kyoto, Owari and the east. Swordsmiths today still forge tamahagane, much of it from a traditional tatara in Shimane run by a society for the preservation of Japanese swords; the cutlery factories use modern stainless and laminated steels from specialist steelmakers. See <a href=\"seki.html\">Seki, Town of Blades</a>.",
          ja:"関の鍛冶は鉱石を掘りも製錬もしなかった。鋼の多くは西日本の中国山地のたたら——砂鉄を木炭で製錬して玉鋼をつくる炉——から来たと考えられている。関が供したのは、火床のための松炭、焼き入れのための長良川と津保川の清らかな水、焼刃土、そして京・尾張・東国を結ぶ道の上の場所であった。今日の刀鍛冶もなお玉鋼を鍛え、その多くは日本刀の保存団体が島根で操業する伝統のたたらから来る。刃物工場は専門の製鋼会社のステンレス鋼や積層鋼を使う。<a href=\"seki.html\">刃物のまち・関</a>を参照。",
          zh:"關的刀匠既不採礦也不冶煉。一般認為他們的鋼材大多來自日本西部中國山地的「踏鞴」（たたら）爐——以木炭熔煉砂鐵，製成「玉鋼」；關所提供的，是鍛爐用的松炭、淬火用的長良川與津保川清水、燒刃土，以及位於連接京都、尾張與東國道路上的地利。今日的刀匠仍以玉鋼鍛刀，其中大部分來自一個日本刀保存團體在島根經營的傳統踏鞴爐；刀具工廠則使用專業鋼廠生產的現代不鏽鋼與積層鋼。見<a href=\"seki.html\">刀刃之城・關</a>。" } }
      ]
    },

    { t:"related", items:[
      { href:"seki.html", why:{ en:"The town of blades.", ja:"刃物のまち。", zh:"刀刃之城。" } },
      { href:"landform.html", why:{ en:"The ancient rocks of Hida.", ja:"飛騨の古い岩。", zh:"飛驒的古老岩層。" } },
      { href:"rivers.html", why:{ en:"Where Kamioka's waste went.", ja:"神岡の廃水が流れた先。", zh:"神岡廢水的去向。" } },
      { href:"faith.html", why:{ en:"The shrines of Gifu.", ja:"岐阜の社寺。", zh:"岐阜的神社寺院。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- seki */
GIFU.pages["seki"] = {
  kicker: { en: "Metal & Blades · 02", ja: "金と刃 · 02", zh: "金屬與刀刃 · 02" },
  title:  { en: "Seki, Town of Blades", ja: "刃物のまち・関", zh: "刀刃之城・關" },
  jp: "関鍛冶 · 春日神社 · 廃刀令 · 刃物まつり · 関鍛冶伝承館",
  lede: {
    en: "For seven centuries the town of Seki, where the Tsubo river meets the Nagara, has made blades: swords for the warriors of the Muromachi and Sengoku wars, then — after the swords were banned in 1876 — pocket knives, razors, scissors and kitchen knives. Today it ships more cutlery than any other municipality in Japan, more than half of the country's household knives, and it still keeps a smithy where swords are forged in public.",
    ja: "津保川が長良川に合わさる関の町は、七百年にわたって刃物を作ってきた。室町・戦国の戦の武士のための刀、そして1876年に刀が禁じられてからは、ポケットナイフ、剃刀、はさみ、包丁である。いま関は日本の市町村で最も多くの刃物を出荷し、国内の家庭用刃物の半分以上を占め、なお人前で刀を鍛える鍛冶場を守っている。",
    zh: "位於津保川與長良川交會處的關，七百年來一直在製作刀刃：先是為室町與戰國時代戰爭中的武士打造刀劍，1876 年禁刀之後，改做折刀、剃刀、剪刀與菜刀。如今它是日本出貨刀具最多的市町村，占全國家用刀具的一半以上，而且仍保有一處公開鍛刀的鍛冶場。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Seven centuries of blades at Seki, schematic. Swordsmiths are recorded from the fourteenth century and flourished with the wars of the fifteenth and sixteenth; demand fell in the long Edo peace; the ban on wearing swords in 1876 turned the smiths to knives, razors and scissors; after the Second World War stainless steel and mass production made Seki the largest cutlery town in Japan.",
        ja:"関の刃物七百年（模式図）。刀鍛冶は十四世紀から記録に現れ、十五・十六世紀の戦乱とともに栄えた。江戸の長い泰平で需要は落ち、1876年の廃刀令で鍛冶は包丁・剃刀・はさみへ転じた。第二次世界大戦後、ステンレスと量産によって関は日本最大の刃物の町となった。",
        zh:"關的刀刃七百年（示意圖）。刀匠自十四世紀起見於記載，並隨十五、十六世紀的戰亂而興盛；江戶時代長期太平，需求下降；1876 年的廢刀令使刀匠轉向菜刀、剃刀與剪刀；第二次世界大戰後，不鏽鋼與量產使關成為日本最大的刀具之城。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Timeline of blade-making in Seki">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"SEVEN CENTURIES OF BLADES", ja:"刃物の七百年", zh:"刀刃七百年" }) + '</text>';
        var X0 = 60, X1 = 720;
        function px(y) { return X0 + (y - 1300) / (2030 - 1300) * (X1 - X0); }
        /* swords band: activity curve */
        var sw = [[1300,6],[1350,20],[1400,40],[1450,62],[1500,86],[1550,96],[1600,80],[1650,52],[1700,40],[1800,32],[1860,34],[1876,8],[1900,4],[1950,3],[2030,3]];
        var kn = [[1876,2],[1900,14],[1930,30],[1945,22],[1960,50],[1980,78],[2000,90],[2030,92]];
        function area(pts, base, col) {
          var d = "M" + px(pts[0][0]).toFixed(1) + " " + base;
          pts.forEach(function (p) { d += " L" + px(p[0]).toFixed(1) + " " + (base - p[1]).toFixed(1); });
          d += " L" + px(pts[pts.length - 1][0]).toFixed(1) + " " + base + " Z";
          return '<path d="' + d + '" fill="' + col + '" stroke="#7C6B52" stroke-width="1"/>';
        }
        s += area(sw, 160, "#E6E4E0") + area(kn, 270, "#E9ECEE");
        s += '<text x="' + px(1320) + '" y="72" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"SWORDS",ja:"刀",zh:"刀劍"}) + '</text>' +
             '<text x="' + px(1320) + '" y="196" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"KNIVES, RAZORS, SCISSORS",ja:"包丁・剃刀・はさみ",zh:"菜刀、剃刀、剪刀"}) + '</text>';
        /* axis */
        s += '<line x1="' + X0 + '" y1="282" x2="' + X1 + '" y2="282" stroke="#55504A"/>';
        [1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000].forEach(function (y) {
          s += '<line x1="' + px(y) + '" y1="282" x2="' + px(y) + '" y2="286" stroke="#55504A"/>' +
               '<text x="' + px(y) + '" y="298" text-anchor="middle" ' + F + ' font-size="9.5" fill="#8B857C">' + y + '</text>';
        });
        /* events */
        var ev = [
          [1400, 100, {en:"guild under Kasuga shrine",ja:"春日神社のもとの鍛冶座",zh:"春日神社下的鍛冶座"}],
          [1550, 52,  {en:"Sengoku wars: peak",ja:"戦国の最盛期",zh:"戰國：鼎盛"}],
          [1876, 118, {en:"1876 sword ban",ja:"1876年 廃刀令",zh:"1876 年廢刀令"}],
          [1908, 210, {en:"1908 Kai founded",ja:"1908年 貝印創業",zh:"1908 年貝印創立"}],
          [2020, 168, {en:"2020: ¥45.6 bn",ja:"2020年：456億円",zh:"2020 年：456 億日圓"}]
        ];
        ev.forEach(function (e) {
          var x = px(e[0]);
          s += '<line x1="' + x + '" y1="' + (e[1] + 4) + '" x2="' + x + '" y2="282" stroke="#B4AC9C" stroke-dasharray="2 2"/>' +
               '<text x="' + (e[0] > 1990 ? x - 4 : x + 4) + '" y="' + e[1] + '" text-anchor="' + (e[0] > 1990 ? "end" : "start") + '" ' + F + ' font-size="9.5" fill="#201E1B">' + L(e[2]) + '</text>';
        });
        s += '<text x="30" y="320" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — heights show the relative importance of each trade, not measured output.",ja:"模式図——高さは各業の相対的な重みを示し、実際の生産量ではない。",zh:"示意圖——高度表示各行業的相對比重，並非實際產量。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"why",
      title:{ en:"Why Seki", ja:"なぜ関なのか", zh:"為何是關" }, jp:"松炭 · 焼刃土 · 水 · 道",
      body:[
        { t:"p", text:{
          en:"Seki had what a swordsmith needed apart from the steel itself: pine forests for charcoal, clean water from the Nagara and Tsubo rivers for quenching, a fine clay for the coating that gives a blade its hardened edge, and a position on the roads that joined Kyoto, Owari, Hida and the east. Local tradition names a smith called Motoshige as the first to settle in the Kamakura period; smiths are recorded at Seki from the fourteenth century, and by the fifteenth they had organised themselves as a guild under the protection of the town's Kasuga shrine, which regulated the trade and kept the smiths' ceremonies. With the wars of the fifteenth and sixteenth centuries Seki became, with Osafune in Bizen, one of the two great sword-making centres of Japan. Its blades were praised in a phrase still used in the town today — they “neither break nor bend, and cut well”.",
          ja:"関には、鋼そのもののほかに刀鍛冶に必要なものがそろっていた。炭にする松林、焼き入れのための長良川と津保川の清らかな水、刃に焼きを入れるときに塗るきめの細かい焼刃土、そして京・尾張・飛騨・東国を結ぶ道の上の場所である。地元の伝承は、鎌倉時代に元重という刀工が初めて住みついたとする。刀鍛冶は十四世紀から関の記録に現れ、十五世紀には町の春日神社の庇護のもとに鍛冶座を組織し、座は商いを取り締まり、鍛冶の祭祀を守った。十五・十六世紀の戦乱とともに、関は備前長船とならぶ日本の二大刀剣産地となった。その刀は、いまも町で使われる言葉で讃えられた——「折れず、曲がらず、よく切れる」。",
          zh:"除了鋼材本身之外，關擁有刀匠所需的一切：可燒製木炭的松林、供淬火用的長良川與津保川清水、塗在刀身上使刃口硬化的細緻燒刃土，以及位於連接京都、尾張、飛驒與東國道路上的地利。當地傳說認為，一位名叫元重的刀工在鎌倉時代最先定居於此；十四世紀起關便有刀匠的記載，到了十五世紀，他們在鎮上春日神社的庇護下組成「鍛冶座」，負責管理行業並主持刀匠的祭祀。隨著十五、十六世紀的戰亂，關與備前的長船並列為日本兩大刀劍產地。其刀以一句至今仍在鎮上流傳的話受到讚譽——「不折、不彎、鋒利好斬」。" } }
      ]
    },

    { t:"section", id:"knives",
      title:{ en:"From swords to knives", ja:"刀から包丁へ", zh:"從刀劍到菜刀" }, jp:"廃刀令 · ポケットナイフ · ステンレス",
      body:[
        { t:"p", text:{
          en:"The long peace of the Edo period cut the demand for swords, and many Mino smiths left for the castle towns of the new domains; those who stayed made farm tools and kitchen knives alongside their blades. The decisive break came in 1876, when the Meiji government forbade the wearing of swords. Seki's smiths turned to pocket knives, razors, scissors and table knives, and by the 1930s Seki pocket knives were exported around the world. In 1908 a pocket-knife maker was founded in the town that grew into Kai, today one of Japan's largest makers of kitchen knives, razors and beauty tools. After the Second World War the town moved into stainless steel and mass production, and into making knives under other companies' names for markets abroad.",
          ja:"江戸時代の長い泰平は刀の需要を減らし、美濃の鍛冶の多くは新しい藩の城下町へ去った。残った者は刀のかたわら農具や包丁を作った。決定的な断絶は1876年、明治政府が帯刀を禁じたときに来た。関の鍛冶はポケットナイフ、剃刀、はさみ、テーブルナイフへ転じ、1930年代には関のポケットナイフは世界中に輸出されていた。1908年には町でポケットナイフの作り手が創業し、それがのちの貝印——いまや日本最大級の包丁・剃刀・美容用品の会社——となった。第二次世界大戦後、町はステンレスと量産へ、そして海外市場向けに他社の名で刃物を作る仕事へと進んだ。",
          zh:"江戶時代的長期太平減少了對刀劍的需求，許多美濃刀匠遷往新設諸藩的城下町；留下來的人在刀劍之外兼做農具與菜刀。決定性的斷裂出現在 1876 年，明治政府禁止佩刀。關的刀匠轉而製作折刀、剃刀、剪刀與餐刀，到 1930 年代，關的折刀已出口到世界各地。1908 年，鎮上一家折刀製造商創立，日後發展成貝印——如今日本最大的菜刀、剃刀與美容用品製造商之一。第二次世界大戰後，這座城鎮轉向不鏽鋼與量產，並為海外市場以其他公司的品牌代工製造刀具。" } },
        { t:"table",
          caption:{en:"Seki in numbers, 2020",ja:"数字で見る関（2020年）",zh:"數字中的關（2020 年）"},
          cols:[{en:"Measure",ja:"項目",zh:"項目"},{en:"Value",ja:"値",zh:"數值"},{en:"Note",ja:"注",zh:"備註"}],
          numCols:[1],
          rows:[
            [{en:"Cutlery shipments",ja:"刃物出荷額",zh:"刀具出貨額"},{en:"¥45.6 billion",ja:"456億円",zh:"456 億日圓"},{en:"Highest of any municipality in Japan",ja:"全国の市町村で最多",zh:"全國市町村之冠"}],
            [{en:"Share of household knives",ja:"家庭用刃物の全国シェア",zh:"家用刀具全國占比"},"55%",{en:"Kitchen and table knives, by shipment value",ja:"包丁・食卓用ナイフ等、出荷額ベース",zh:"菜刀與餐刀等，以出貨額計"}],
            [{en:"Kitchen knives",ja:"包丁",zh:"菜刀"},{en:"¥9.63 billion",ja:"96億3千万円",zh:"96.3 億日圓"},{en:"Industrial statistics",ja:"工業統計",zh:"工業統計"}],
            [{en:"Scissors (incl. barbers')",ja:"はさみ（理美容用含む）",zh:"剪刀（含理髮用）"},{en:"¥4.86 billion",ja:"48億6千万円",zh:"48.6 億日圓"},{en:"Industrial statistics",ja:"工業統計",zh:"工業統計"}],
            [{en:"Pocket knives",ja:"ポケットナイフ",zh:"折刀"},{en:"¥1.24 billion",ja:"12億4千万円",zh:"12.4 億日圓"},{en:"Industrial statistics",ja:"工業統計",zh:"工業統計"}]
          ] },
        { t:"note", label:{en:"On the numbers",ja:"数字について",zh:"關於數字"}, text:{
          en:"The product figures come from the national industrial statistics for Seki and the total from the city's own summary; the scopes differ, so the products do not add up to the total, which also includes razors, nail clippers, table cutlery and industrial blades.",
          ja:"品目別の数字は国の工業統計による関市の値、総額は市のまとめによる。範囲が異なるため品目の合計は総額にならない。総額には剃刀・爪切り・食卓用刃物・工業用刃物なども含まれる。",
          zh:"各品項數字取自國家工業統計中關市的數值，總額則取自市政府的彙整；兩者範圍不同，因此品項加總不等於總額——總額還包括剃刀、指甲剪、餐具刀與工業用刀刃等。" } }
      ]
    },

    { t:"section", id:"today",
      title:{ en:"Seki today", ja:"いまの関", zh:"今日的關" }, jp:"関鍛冶伝承館 · 刃物まつり · 春日神社",
      body:[
        { t:"p", text:{
          en:"The town calls itself one of the world's three great cutlery towns, with Solingen in Germany and Sheffield in England. Its museum of swordsmithing, the <strong>Seki Traditional Swordsmith Museum</strong> (Seki Kaji Denshōkan), shows swords and fittings by the Seki smiths and, on set days — the first working of the year in January and the October festival among them — a licensed smith and his assistants forge a sword in the old way in front of visitors. The <strong>Seki Cutlery Festival</strong> in October fills the streets with blade markets. At the Kasuga shrine, the patron shrine of the smiths, the guild of the Middle Ages is remembered in the swords its members offered over the centuries.",
          ja:"町は、ドイツのゾーリンゲン、イギリスのシェフィールドとならぶ世界三大刃物産地の一つを名乗る。<strong>関鍛冶伝承館</strong>は関の刀工の刀や刀装具を展示し、決められた日——一月の打ち初めや十月の刃物まつりなど——には、作刀の許可を持つ刀匠が弟子とともに来館者の前で古式の日本刀鍛錬を見せる。十月の<strong>関刃物まつり</strong>では、通りが刃物市で埋まる。鍛冶の氏神である春日神社では、中世の鍛冶座が、座の者たちが何世紀にもわたって奉納した刀のなかに偲ばれる。",
          zh:"這座城鎮自稱與德國的索林根、英國的雪菲爾並列為世界三大刀具產地。<strong>關鍛冶傳承館</strong>展示關的刀匠所鍛的刀劍與刀裝具；在特定的日子——例如一月的開鍛與十月的祭典——持有鍛刀許可的刀匠會帶著弟子，在參觀者面前以古法鍛造日本刀。十月的<strong>關刀具祭</strong>讓街道擠滿了刀具市集。在刀匠的守護神社春日神社，中世的鍛冶座透過其成員數百年來奉納的刀劍，至今仍被人們懷念。" } }
      ]
    },

    { t:"related", items:[
      { href:"sword.html", why:{ en:"What made a Mino sword.", ja:"美濃伝の刀とは。", zh:"美濃傳之刀的特色。" } },
      { href:"forging.html", why:{ en:"How a sword is forged.", ja:"刀はどう鍛えられるか。", zh:"刀如何鍛造。" } },
      { href:"cutlery.html", why:{ en:"The modern cutlery industry.", ja:"現代の刃物産業。", zh:"現代刀具產業。" } },
      { href:"knives.html", why:{ en:"Choosing and caring for a knife.", ja:"包丁の選び方と手入れ。", zh:"菜刀的挑選與保養。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- sword */
GIFU.pages["sword"] = {
  kicker: { en: "Metal & Blades · 03", ja: "金と刃 · 03", zh: "金屬與刀刃 · 03" },
  title:  { en: "The Mino Sword", ja: "美濃伝の刀", zh: "美濃傳之刀" },
  jp: "五箇伝 · 美濃伝 · 志津兼氏 · 金重 · 孫六兼元 · 和泉守兼定",
  lede: {
    en: "Japanese swordsmiths are grouped into five great traditions, each named after the province where it began — Yamashiro, Yamato, Bizen, Sōshū and Mino. Mino was the last to form, in the fourteenth century, and the most practical: its smiths supplied the armies of the civil wars with blades famous for cutting well and surviving hard use. Two Seki names became legends — Magoroku Kanemoto, with his hamon of three cedar trees, and Izumi-no-kami Kanesada.",
    ja: "日本の刀工は五つの大きな伝法に分けられ、それぞれ始まった国の名で呼ばれる——山城伝、大和伝、備前伝、相州伝、美濃伝である。美濃伝は十四世紀に最後に成立し、最も実用的であった。その鍛冶は内乱の軍勢に刀を供し、その刀はよく切れ、手荒な使用に耐えることで名高かった。関の二つの名は伝説となった。三本杉の刃文の孫六兼元と、和泉守兼定である。",
    zh: "日本刀匠分為五大傳統，各以其發源的國名命名——山城、大和、備前、相州與美濃。美濃傳最晚形成，始於十四世紀，也最講求實用：其刀匠為內戰中的軍隊供應刀劍，以鋒利好斬、經得起粗重使用而聞名。關有兩個名字成為傳奇——以「三本杉」刃文著稱的孫六兼元，以及和泉守兼定。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"How to read a Mino blade, schematic. The <em>hamon</em>, the pale hardened zone along the edge, is formed when the smith coats the blade with clay before quenching; its outline is a signature of school and maker. Kanemoto's line is known for <em>sanbon-sugi</em>, “three cedars”, a repeating group of three pointed peaks. The grain of the steel in the flat of the blade near the back often runs straight, <em>masame</em>, in Mino work. The signature is cut into the tang, which is hidden in the hilt.",
        ja:"美濃の刀の見方（模式図）。刃文——刃に沿う白く硬い部分——は、焼き入れの前に刀身に土を置くことで生まれ、その輪郭は流派と刀工の署名のようなものである。兼元の系統は「三本杉」——尖った山が三つずつ繰り返す刃文——で知られる。美濃物では、棟寄りの鎬地の地鉄にしばしば柾目が現れる。銘は、柄に隠れる茎に切られる。",
        zh:"如何觀賞美濃刀（示意圖）。「刃文」——沿著刃口的淺色硬化帶——是刀匠在淬火前於刀身塗土而形成的，其輪廓猶如流派與刀匠的簽名。兼元一派以「三本杉」著稱：三個尖峰為一組反覆出現的刃文。美濃刀在靠近刀背的鎬地，地鐵紋理常呈筆直的「柾目」。銘文刻在刀莖上，平時藏於刀柄之中。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 300" role="img" aria-label="Parts of a Japanese sword blade with a sanbon-sugi hamon">' +
          '<rect x="0.5" y="0.5" width="759" height="299" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"READING A MINO BLADE", ja:"美濃の刀を見る", zh:"觀賞美濃刀" }) + '</text>';
        /* blade: edge down, so the curve (sori) makes the middle sag */
        function bz(t, P) {
          var u = 1 - t;
          return [u*u*u*P[0][0] + 3*u*u*t*P[1][0] + 3*u*t*t*P[2][0] + t*t*t*P[3][0],
                  u*u*u*P[0][1] + 3*u*u*t*P[1][1] + 3*u*t*t*P[2][1] + t*t*t*P[3][1]];
        }
        var EDGE = [[60,168],[260,186],[470,184],[700,150]];
        s += '<path d="M60 142 C260 164 470 162 690 128 L716 138 L700 150 C470 184 260 186 60 168 Z" fill="#E9ECEE" stroke="#201E1B" stroke-width="1.3"/>';
        /* shinogi line */
        s += '<path d="M120 154 C300 172 480 170 664 138" fill="none" stroke="#8B857C" stroke-width="0.8"/>';
        /* masame grain between back and ridge */
        for (var g = 0; g < 3; g++) { s += '<path d="M' + (140 + g * 4) + ' ' + (150 + g * 2) + ' C300 ' + (164 + g * 2) + ' 480 ' + (162 + g * 2) + ' 650 ' + (133 + g * 2) + '" fill="none" stroke="#B4AC9C" stroke-width="0.5"/>'; }
        /* hamon: sanbon-sugi peaks above the edge */
        var pts = [], N = 54;
        for (var i = 0; i <= N; i++) {
          var t = 0.08 + i * (0.84 / N), e = bz(t, EDGE);
          var off = 5 + ((i % 2) ? ((Math.floor(i / 2) % 3 === 1) ? 13 : 9) : 0);
          pts.push([e[0], e[1] - off]);
        }
        var hp = "M" + pts.map(function (q) { return q[0].toFixed(1) + " " + q[1].toFixed(1); }).join(" L");
        var back = [];
        for (var j = N; j >= 0; j--) { var tt = 0.08 + j * (0.84 / N), ee = bz(tt, EDGE); back.push(ee[0].toFixed(1) + " " + ee[1].toFixed(1)); }
        s += '<path d="' + hp + ' L' + back.join(" L") + ' Z" fill="#FBFAF7" stroke="#7C6B52" stroke-width="0.8"/>';
        /* tang */
        s += '<path d="M20 136 L60 142 L60 168 L24 160 Z" fill="#8B857C" stroke="#201E1B"/>' +
             '<rect x="58" y="138" width="8" height="34" fill="#EADCC1" stroke="#201E1B"/>';
        /* labels */
        var LB = F + ' font-size="10.5" fill="#201E1B"';
        s += '<text x="330" y="96" ' + LB + '>' + L({en:"back (mune)",ja:"棟",zh:"刀背（棟）"}) + '</text><path d="M350 100 L352 154" stroke="#B4AC9C"/>' +
             '<text x="470" y="96" ' + LB + '>' + L({en:"straight grain (masame) near the back",ja:"鎬地の柾目",zh:"近刀背的柾目紋"}) + '</text><path d="M500 100 L510 158" stroke="#B4AC9C"/>' +
             '<text x="250" y="222" ' + LB + '>' + L({en:"hamon: “three cedars” (sanbon-sugi)",ja:"刃文：三本杉",zh:"刃文：三本杉"}) + '</text><path d="M300 210 L306 176" stroke="#B4AC9C"/>' +
             '<text x="560" y="222" ' + LB + '>' + L({en:"cutting edge (ha)",ja:"刃",zh:"刃口"}) + '</text><path d="M590 210 L594 176" stroke="#B4AC9C"/>' +
             '<text x="20" y="222" ' + LB + '>' + L({en:"tang (nakago), signed",ja:"茎（銘を切る）",zh:"刀莖（刻銘）"}) + '</text><path d="M40 210 L40 160" stroke="#B4AC9C"/>' +
             '<text x="120" y="130" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"collar (habaki)",ja:"はばき",zh:"鎺（はばき）"}) + '</text><path d="M118 134 L66 142" stroke="#B4AC9C"/>' +
             '<text x="30" y="288" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — hamon exaggerated; real blades are about 70 cm long and vary widely.",ja:"模式図——刃文は誇張。実際の刀は長さ約70センチで、さまざまである。",zh:"示意圖——刃文經誇大；真刀長約 70 公分，樣式差異很大。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"five",
      title:{ en:"The five traditions", ja:"五箇伝", zh:"五大傳統" }, jp:"山城 · 大和 · 備前 · 相州 · 美濃",
      body:[
        { t:"table",
          cols:[{en:"Tradition",ja:"伝法",zh:"傳統"},{en:"Province",ja:"国",zh:"國"},{en:"Flourished",ja:"盛期",zh:"盛期"},{en:"Character",ja:"特徴",zh:"特色"}],
          rows:[
            [{en:"Yamashiro-den",ja:"山城伝",zh:"山城傳"},{en:"Kyoto",ja:"京都",zh:"京都"},{en:"Heian–Kamakura",ja:"平安〜鎌倉",zh:"平安至鎌倉"},{en:"Elegant, deeply curved court blades",ja:"優美で反りの深い都の刀",zh:"優雅、彎度深的京城之刀"}],
            [{en:"Yamato-den",ja:"大和伝",zh:"大和傳"},{en:"Nara",ja:"奈良",zh:"奈良"},{en:"Kamakura–Nanbokuchō",ja:"鎌倉〜南北朝",zh:"鎌倉至南北朝"},{en:"Sturdy blades for temple warriors",ja:"寺院の僧兵のための剛健な刀",zh:"為寺院僧兵打造的剛健之刀"}],
            [{en:"Bizen-den",ja:"備前伝",zh:"備前傳"},{en:"Okayama",ja:"岡山",zh:"岡山"},{en:"Heian–Muromachi",ja:"平安〜室町",zh:"平安至室町"},{en:"The largest output; clove-like hamon",ja:"最大の産地。丁子の刃文",zh:"產量最大；丁子狀刃文"}],
            [{en:"Sōshū-den",ja:"相州伝",zh:"相州傳"},{en:"Kamakura",ja:"鎌倉",zh:"鎌倉"},{en:"Late Kamakura–Nanbokuchō",ja:"鎌倉末〜南北朝",zh:"鎌倉末至南北朝"},{en:"Bold, bright steel; Masamune's school",ja:"豪壮で明るい地鉄。正宗の一派",zh:"豪壯明亮的地鐵；正宗一派"}],
            [{en:"Mino-den",ja:"美濃伝",zh:"美濃傳"},{en:"Gifu (Seki, Shizu)",ja:"岐阜（関・志津）",zh:"岐阜（關、志津）"},{en:"Nanbokuchō–Sengoku",ja:"南北朝〜戦国",zh:"南北朝至戰國"},{en:"Practical, sharp; sanbon-sugi and gunome hamon",ja:"実用的でよく切れる。三本杉や互の目の刃文",zh:"實用鋒利；三本杉與互目刃文"}]
          ] },
        { t:"p", text:{
          en:"Collectors look for a set of signs in Mino work: a high ridge line with a narrow flat above it, straight grain near the back, a hamon of pointed or grouped peaks, and a hamon in the point shaped like the rounded head of a Jizō statue — the <em>Jizō bōshi</em>, which is almost a signature of Seki.",
          ja:"収集家は美濃物に一連のしるしを探す。高い鎬とその上の狭い鎬地、棟寄りの柾目、尖った、あるいは群れた刃文、そして地蔵の丸い頭のような切先の刃文——関のほとんど署名ともいえる地蔵帽子である。",
          zh:"收藏家會在美濃刀上尋找一系列特徵：高挺的鎬線與其上方狹窄的鎬地、靠近刀背的筆直柾目、尖峰或成組的刃文，以及刀尖處形如地藏菩薩圓頭的刃文——「地藏帽子」，幾乎可說是關的簽名。" } },
        { t:"p", text:{
          en:"Mino-den traces itself to two smiths of the fourteenth century: <strong>Kaneuji</strong>, who is said to have studied under Masamune in Sagami and moved from Yamato to Shizu in Mino, and <strong>Kinjū</strong>, who settled at Seki. Their followers mixed the robust Yamato tradition with the bold Sōshū style, and their descendants — almost all using the character <em>kane</em> in their names — made Seki the busiest sword town of the civil-war century.",
          ja:"美濃伝は十四世紀の二人の刀工にさかのぼる。相模の正宗に学び、大和から美濃の志津に移ったと伝わる<strong>兼氏</strong>と、関に住んだ<strong>金重</strong>である。その弟子たちは剛健な大和伝に豪壮な相州伝を合わせ、その子孫——ほとんどが名に「兼」の字を用いる——は、関を戦国の世紀で最も忙しい刀の町にした。",
          zh:"美濃傳追溯至十四世紀的兩位刀匠：據說曾在相模師事正宗、從大和遷至美濃志津的<strong>兼氏</strong>，以及定居於關的<strong>金重</strong>。他們的弟子把剛健的大和傳與豪壯的相州傳融合在一起，其後代——名字幾乎都用「兼」字——使關成為戰國那個世紀最繁忙的刀劍之城。" } }
      ]
    },

    { t:"section", id:"names",
      title:{ en:"Two famous names", ja:"二つの名", zh:"兩個名字" }, jp:"孫六兼元 · 和泉守兼定",
      body:[
        { t:"grid", cols:2, cells:[
          { k:{en:"Magoroku Kanemoto",ja:"孫六兼元",zh:"孫六兼元"}, jp:"二代兼元 · 三本杉",
            body:{en:"The second master of the Kanemoto line, active in the early sixteenth century, known by his common name Magoroku. His blades were prized by warriors for their cutting power, and his hamon of <em>sanbon-sugi</em>, three cedars, repeated along the blade, became the mark of his school. The name lives on as a kitchen-knife brand made in Seki.",ja:"十六世紀初めに活躍した兼元の二代目で、通称の孫六で知られる。その刀は切れ味によって武士に重んじられ、刀身に沿って繰り返す「三本杉」の刃文は一派のしるしとなった。その名は、関で作られる包丁のブランドとしていまも生きている。",zh:"兼元一派的第二代，活躍於十六世紀初，以通稱「孫六」為人所知。其刀以鋒利受到武士珍視，沿刀身反覆出現的「三本杉」刃文成為這一派的標誌。這個名字至今仍作為關市出品的菜刀品牌延續著。"} },
          { k:{en:"Izumi-no-kami Kanesada",ja:"和泉守兼定",zh:"和泉守兼定"}, jp:"之定",
            body:{en:"The second master of the Kanesada line, working at Seki around 1500, who held the honorary title Izumi-no-kami and is called <em>No-Sada</em> from the way he wrote his name. His blades were owned by great warlords. A branch of the line later worked for the Aizu domain, and a sword by its eleventh master was carried by Hijikata Toshizō of the Shinsengumi.",ja:"1500年ごろ関で活躍した兼定の二代目で、和泉守の受領名を持ち、銘の書き方から「之定（のさだ）」と呼ばれる。その刀は名だたる大名が所持した。系統の一派はのちに会津藩に仕え、その十一代の刀を新選組の土方歳三が佩いた。",zh:"兼定一派的第二代，約 1500 年前後在關活躍，擁有「和泉守」的受領名，因其刻銘寫法而被稱為「之定」。其刀為著名大名所持有。這一派的一支後來為會津藩效力，其第十一代所鍛之刀，曾由新選組的土方歲三佩帶。"} }
        ] }
      ]
    },

    { t:"section", id:"after",
      title:{ en:"After the wars", ja:"戦のあとで", zh:"戰爭之後" }, jp:"新刀 · 登録 · 美術品",
      body:[
        { t:"p", text:{
          en:"When the wars ended, Mino smiths spread out to the new castle towns and seeded the traditions of the Edo period, so that Mino technique runs through much of the <em>shintō</em>, the “new swords” made after about 1600. Since 1876 the Japanese sword has lived as an art object. Every one in private hands must be registered with a prefectural board of education as an object of artistic or historical value, and new swords can be made only by licensed smiths, who are limited in how many long blades they may forge each month.",
          ja:"戦が終わると、美濃の鍛冶は新しい城下町へ散って江戸時代の諸流の種をまき、1600年ごろ以後の「新刀」の多くには美濃の技法が流れている。1876年以後、日本刀は美術品として生きてきた。個人が持つ刀はすべて、美術的・歴史的価値のある品として都道府県の教育委員会に登録しなければならず、新しい刀は許可を受けた刀匠だけが作ることができ、一か月に鍛えられる長い刀の数には上限がある。",
          zh:"戰爭結束後，美濃刀匠分散到新建的城下町，為江戶時代各流派播下種子，因此約 1600 年以後所鑄的「新刀」中，許多都流淌著美濃的技法。1876 年以後，日本刀便以藝術品的身分存續。私人持有的每一把刀，都必須作為具藝術或歷史價值之物，向都道府縣教育委員會登錄；新刀只能由持有許可的刀匠製作，且每月可鍛造的長刀數量有上限。" } }
      ]
    },

    { t:"section", id:"terms",
      title:{ en:"Words for looking at a sword", ja:"刀を見るための言葉", zh:"觀賞刀劍的用語" }, jp:"鑑賞の用語",
      body:[
        { t:"defs", items:[
          { term:{en:"Hamon",ja:"刃文",zh:"刃文"}, jp:"はもん", def:{en:"The pale, hardened zone along the edge, whose outline — straight, wavy, clove-like, or Mino's “three cedars” — is set by the smith's clay.",ja:"刃に沿う白く硬い部分。その輪郭——直刃、湾れ、丁子、美濃の三本杉——は刀匠の置く土によって決まる。",zh:"沿刃口分布的淺色硬化帶；其輪廓——直刃、湾刃、丁子，或美濃的「三本杉」——由刀匠塗土的方式決定。"} },
          { term:{en:"Jigane / jihada",ja:"地鉄・地肌",zh:"地鐵・地肌"}, jp:"じがね", def:{en:"The steel of the body and the grain pattern the folding leaves in it — wood-grain, burl, or the straight <em>masame</em> often seen in Mino work.",ja:"刀身の鋼と、折り返しの鍛錬がそこに残す肌模様——板目、杢目、美濃物にしばしば見える柾目。",zh:"刀身的鋼材，以及摺疊鍛打在其中留下的紋理——板目、杢目，或美濃刀常見的筆直「柾目」。"} },
          { term:{en:"Sori",ja:"反り",zh:"反り（彎度）"}, jp:"そり", def:{en:"The curvature of the blade, measured as the greatest distance between the back and a straight line from the point to the base of the tang area.",ja:"刀身の曲がり。切先と区（まち）を結ぶ直線から棟までの最大の距離で測る。",zh:"刀身的彎曲程度，以刀尖與刀根（區）之間的直線到刀背的最大距離來測量。"} },
          { term:{en:"Kissaki",ja:"切先",zh:"切先（刀尖）"}, jp:"きっさき", def:{en:"The point section, whose size and shape help date a blade.",ja:"刀の先端部。その大きさと形は、刀の時代を推し量る手がかりとなる。",zh:"刀尖部分，其大小與形狀有助於判斷刀的年代。"} },
          { term:{en:"Mei",ja:"銘",zh:"銘"}, jp:"めい", def:{en:"The signature cut into the tang — the smith's name and often a date; many old blades have been shortened and lost it.",ja:"茎に切られた署名。刀匠の名と、しばしば年紀。古い刀の多くは磨り上げられて銘を失っている。",zh:"刻在刀莖上的署名——刀匠姓名，常附年月；許多古刀因被截短而失去了銘。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"forging.html", why:{ en:"How the blade is made.", ja:"刀はどう作られるか。", zh:"刀如何製成。" } },
      { href:"fittings.html", why:{ en:"Polish, mounts and fittings.", ja:"研ぎと拵。", zh:"研磨與刀裝。" } },
      { href:"seki.html", why:{ en:"The town of the Mino smiths.", ja:"美濃鍛冶の町。", zh:"美濃刀匠之城。" } },
      { href:"medieval.html", why:{ en:"The wars that made the demand.", ja:"需要を生んだ戦乱。", zh:"創造需求的戰亂。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- forging */
GIFU.pages["forging"] = {
  kicker: { en: "Metal & Blades · 04", ja: "金と刃 · 04", zh: "金屬與刀刃 · 04" },
  title:  { en: "Making a Sword", ja: "作刀", zh: "鍛刀" },
  jp: "玉鋼 · 鍛錬 · 甲伏せ · 素延べ · 土置き · 焼き入れ",
  lede: {
    en: "A Japanese sword is made from a bloomery steel called tamahagane, folded and hammered until it is clean and even, wrapped soft inside hard, drawn out, shaped, coated with clay and quenched. The quench does two things at once: it hardens the edge into the bright band of the hamon, and it bends the straight bar into the sword's curve. In Seki a licensed smith shows the whole process in public on set days each year.",
    ja: "日本刀は玉鋼という鋼から作られる。清らかで均一になるまで折り返して鍛え、柔らかい鋼を硬い鋼で包み、延ばし、形を作り、土を置いて焼き入れする。焼き入れは二つのことを一度に行う。刃を硬くして刃文の明るい帯を生み、まっすぐな棒を刀の反りへと曲げるのである。関では、作刀の許可を持つ刀匠が毎年決まった日に、その工程のすべてを公開している。",
    zh: "日本刀以一種稱為「玉鋼」的塊煉鋼製成：反覆摺疊鍛打，直到鋼質潔淨均勻，以硬鋼包覆軟鋼，拉長，塑形，塗上黏土後淬火。淬火一次完成兩件事：使刃口硬化，形成明亮的刃文帶；同時把筆直的鋼條彎成刀的弧度。在關，持有許可的刀匠每年在固定的日子公開示範整個過程。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"From steel to sword, schematic. Left: in the common <em>kobuse</em> construction, a core of softer, lower-carbon steel (<em>shingane</em>) is wrapped in a jacket of hard, high-carbon steel (<em>kawagane</em>), so that the blade is both tough and sharp. Right: before the quench the smith spreads clay thinly over the edge and thickly over the body; the thinly coated edge cools fastest and hardens, and because hardened steel takes up more room, the edge lengthens and the blade curves back.",
        ja:"鋼から刀へ（模式図）。左：一般的な甲伏せの造りでは、炭素の少ない柔らかい心鉄を、炭素の多い硬い皮鉄で包む。こうして刀は粘りと切れ味をあわせ持つ。右：焼き入れの前に、刀匠は刃には薄く、地には厚く焼刃土を置く。薄く塗った刃が最も速く冷えて硬くなり、硬くなった鋼は体積を増すので、刃が伸びて刀身は棟の側へ反る。",
        zh:"從鋼到刀（示意圖）。左：常見的「甲伏」構造，是以含碳量較高、堅硬的「皮鐵」包覆含碳量較低、較柔韌的「心鐵」，使刀身兼具韌性與鋒利。右：淬火前，刀匠在刃口薄薄塗上一層黏土、在刀身厚厚塗上一層；塗得薄的刃口冷卻最快而硬化，由於硬化的鋼體積會增大，刃口因此伸長，刀身便向刀背一側彎曲。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Kobuse construction and clay coating before quenching">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FROM STEEL TO SWORD", ja:"鋼から刀へ", zh:"從鋼到刀" }) + '</text>';
        /* left: cross-section kobuse */
        s += '<text x="170" y="66" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Kobuse construction, in section",ja:"甲伏せ（断面）",zh:"甲伏構造（剖面）"}) + '</text>';
        s += '<path d="M150 90 L190 90 L196 230 L170 290 L144 230 Z" fill="#55504A" stroke="#201E1B" stroke-width="1.2"/>' +
             '<path d="M160 100 L180 100 L184 220 L170 244 L156 220 Z" fill="#EADCC1" stroke="#201E1B"/>';
        s += '<text x="215" y="160" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"core: softer steel (shingane)",ja:"心鉄：柔らかい鋼",zh:"心鐵：較軟的鋼"}) + '</text><path d="M212 156 L182 156" stroke="#B4AC9C"/>' +
             '<text x="215" y="206" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"jacket: hard steel (kawagane)",ja:"皮鉄：硬い鋼",zh:"皮鐵：堅硬的鋼"}) + '</text><path d="M212 202 L194 202" stroke="#B4AC9C"/>' +
             '<text x="215" y="276" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"edge: hard steel only",ja:"刃：硬い鋼のみ",zh:"刃口：只有硬鋼"}) + '</text><path d="M212 272 L176 280" stroke="#B4AC9C"/>' +
             '<text x="120" y="96" text-anchor="end" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"back",ja:"棟",zh:"刀背"}) + '</text>';
        /* right: clay coating + curve */
        s += '<text x="560" y="66" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L({en:"Clay coat and quench",ja:"土置きと焼き入れ",zh:"塗土與淬火"}) + '</text>';
        /* straight blade before */
        s += '<rect x="410" y="96" width="300" height="24" fill="#E9ECEE" stroke="#201E1B"/>' +
             '<path d="M410 96 L710 96 L710 108 L410 108 Z" fill="#B4AC9C" fill-opacity="0.7"/>' +
             '<path d="M410 108 L430 112 L450 108 L470 112 L490 108 L510 112 L530 108 L550 112 L570 108 L590 112 L610 108 L630 112 L650 108 L670 112 L690 108 L710 112 L710 114 L410 114 Z" fill="#B4AC9C" fill-opacity="0.35"/>' +
             '<text x="410" y="88" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"before: straight, clay thick on the body, thin at the edge",ja:"前：まっすぐ。地に厚く、刃に薄く土を置く",zh:"之前：筆直；刀身塗土厚，刃口塗土薄"}) + '</text>';
        /* arrow to water */
        s += '<path d="M560 130 L560 162" stroke="#55504A" stroke-width="1.4"/><path d="M560 166 l-5 -8 l10 0 z" fill="#55504A"/>' +
             '<text x="572" y="152" ' + F + ' font-size="9.5" fill="#5E7780">' + L({en:"quench in water",ja:"水に入れて焼き入れ",zh:"入水淬火"}) + '</text>';
        /* curved blade after: the edge has lengthened, so the blade bows (edge down => sags in the middle) */
        s += '<path d="M410 190 C510 208 610 206 710 180 L710 204 C610 232 510 234 410 214 Z" fill="#E9ECEE" stroke="#201E1B"/>';
        var hz = "M410 208";
        for (var q = 0; q <= 15; q++) {
          var xq = 410 + q * 20, tq = q / 15, uq = 1 - tq;
          var yq = uq*uq*uq*214 + 3*uq*uq*tq*234 + 3*uq*tq*tq*232 + tq*tq*tq*204;
          hz += " L" + xq + " " + (yq - (q % 2 ? 12 : 5)).toFixed(1);
        }
        s += '<path d="' + hz + ' L710 204 C610 232 510 234 410 214 Z" fill="#FBFAF7" stroke="#7C6B52" stroke-width="0.8"/>' +
             '<text x="410" y="256" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"after: the hardened edge (hamon) has grown, and the blade curves",ja:"後：硬くなった刃（刃文）が伸び、刀身が反る",zh:"之後：硬化的刃口（刃文）伸長，刀身隨之彎曲"}) + '</text>' +
             '<text x="30" y="318" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — constructions vary by smith and school; proportions exaggerated.",ja:"模式図——造り込みは刀工と流派によって異なる。比率は誇張。",zh:"示意圖——構造因刀匠與流派而異；比例經誇大。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"steps",
      title:{ en:"The stages", ja:"工程", zh:"工序" }, jp:"作刀の流れ",
      body:[
        { t:"steps", items:[
          { title:{en:"Choosing the steel",ja:"鋼を選ぶ",zh:"選鋼"}, jp:"水へし · 小割り",
            text:{en:"Lumps of tamahagane are heated, hammered flat and quenched, then broken into small pieces; the smith sorts them by the grain of the break into harder, higher-carbon pieces for the jacket and softer ones for the core.",ja:"玉鋼の塊を熱して打ち延べ、水に入れて冷やし（水へし）、小さく割る（小割り）。刀匠は割れ口の肌合いを見て、皮鉄にする炭素の多い硬いものと、心鉄にする柔らかいものに選り分ける。",zh:"把玉鋼塊加熱、打扁後浸水冷卻（水減），再敲成小塊（小割）；刀匠依斷面的紋理，把含碳量高、較硬的挑作皮鐵，較軟的留作心鐵。"} },
          { title:{en:"Stacking and welding",ja:"積み沸かし",zh:"積沸"}, jp:"積み沸かし",
            text:{en:"The pieces are stacked on a steel plate, wrapped in paper, coated with clay and ash, and brought to welding heat in the charcoal fire, then hammered into a single block.",ja:"小片を梃子台の上に積み、紙で包み、泥と藁灰をまぶし、炭火で沸かして、一つの塊に打ち固める。",zh:"把小塊堆疊在鋼板上，用紙包起，塗上泥漿與稻草灰，在炭火中加熱到可鍛接的溫度，再鍛打成一整塊。"} },
          { title:{en:"Folding",ja:"鍛錬",zh:"摺疊鍛打"}, jp:"下鍛え · 上鍛え",
            text:{en:"The block is repeatedly drawn out, cut, folded back on itself and welded — often a dozen or more times — driving out slag and evening the carbon. Fifteen folds give over thirty thousand layers, which appear on the polished blade as the grain of the steel.",ja:"塊を延ばし、切れ目を入れて折り返し、また沸かして打つことを繰り返す——しばしば十数回——。鉱滓を追い出し、炭素を均す。十五回折り返せば三万を超える層になり、研ぎ上げた刀身に地鉄の肌となって現れる。",zh:"把鋼塊一再拉長、切口、對摺、再鍛接——常達十多次——以排出雜渣、使含碳量均勻。摺疊十五次便有三萬多層，在研磨後的刀身上呈現為鋼的紋理（地鐵）。"} },
          { title:{en:"Building the blade",ja:"造り込み",zh:"組合構造"}, jp:"甲伏せ · 素延べ",
            text:{en:"The soft core is wrapped in the hard jacket, welded, and drawn out under the hammer into a long bar of the sword's length — <em>sunobe</em>.",ja:"柔らかい心鉄を硬い皮鉄で包んで沸かし、槌で刀の長さの細長い棒に打ち延ばす——素延べである。",zh:"以硬皮鐵包住軟心鐵，鍛接後用鎚打延成刀身長度的細長鋼條——即「素延」。"} },
          { title:{en:"Shaping",ja:"火造り",zh:"火造"}, jp:"火造り",
            text:{en:"The point, the ridge line, the back and the edge are hammered out, and the blade is filed and scraped smooth.",ja:"切先、鎬、棟、刃を打ち出し、鑢とせんで整える。",zh:"打出刀尖、鎬線、刀背與刃口，再以銼刀與刮刀修平。"} },
          { title:{en:"Clay and quench",ja:"土置き・焼き入れ",zh:"塗土與淬火"}, jp:"土置き · 焼き入れ",
            text:{en:"The smith paints clay thinly on the edge and thickly on the body, in the pattern he wants the hamon to take, heats the blade evenly in a darkened smithy — judging the colour by eye — and plunges it into water. The edge hardens and the blade curves.",ja:"刀匠は刃文にしたい形に、刃には薄く地には厚く焼刃土を置き、暗くした鍛冶場で刀身を均一に熱し——色を目で見極めて——水に沈める。刃は硬くなり、刀身は反る。",zh:"刀匠依想要的刃文形狀，在刃口薄塗、刀身厚塗燒刃土，在昏暗的鍛冶場裡把刀身均勻加熱——憑肉眼判斷火色——然後插入水中。刃口硬化，刀身彎曲。"} },
          { title:{en:"Signing",ja:"銘切り",zh:"刻銘"}, jp:"銘",
            text:{en:"After a rough grinding to check the result, the smith files the tang and cuts his name and the date into it with a chisel, and the blade goes to the polisher — see <a href=\"fittings.html\">Polish, Mounts & Fittings</a>.",ja:"鍛冶押しで出来を確かめたのち、刀匠は茎に鑢をかけ、鏨で名と年紀を切る。刀身は研師のもとへ送られる——<a href=\"fittings.html\">研ぎと拵</a>を参照。",zh:"經粗磨檢查成果後，刀匠在刀莖上銼出紋路，以鏨刻下姓名與年月，刀身隨即送往研師——見<a href=\"fittings.html\">研磨與刀裝</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"watch",
      title:{ en:"Watching a forging", ja:"鍛錬を見る", zh:"觀看鍛刀" }, jp:"古式日本刀鍛錬",
      body:[
        { t:"p", text:{
          en:"At the Seki Traditional Swordsmith Museum, on the demonstration days, a smith in white robes and a court cap works at the forge with two or three assistants swinging sledgehammers in turn, and the folding of the steel sends showers of sparks across the smithy. The work is a Shintō rite as much as a craft: the smithy has a shrine, and the fire is treated as sacred. The steel most smiths use today comes from a traditional tatara furnace in Shimane, run by a society for the preservation of Japanese swords, which smelts iron sand and charcoal for three days and nights in the winter.",
          ja:"関鍛冶伝承館では、公開の日に、白装束に烏帽子の刀匠が火床に向かい、二、三人の向こう槌が交互に大槌を振るう。鋼を折り返すたびに火花が鍛冶場を舞う。この仕事は技であると同時に神事でもあり、鍛冶場には神棚が祀られ、火は神聖なものとして扱われる。今日の多くの刀匠が使う鋼は、日本刀の保存団体が島根で操業する伝統のたたらから来る。冬に三日三晩、砂鉄と木炭を燃やして鋼をつくる炉である。",
          zh:"在關鍛冶傳承館，公開示範的日子裡，身穿白衣、頭戴烏帽子的刀匠守在鍛爐前，兩三名助手輪流揮動大鎚，每一次摺疊鋼材，都讓火花飛濺整個鍛冶場。這項工作既是技藝，也是神道儀式：鍛冶場設有神龕，火被視為神聖。今日大多數刀匠使用的鋼，來自一個日本刀保存團體在島根經營的傳統踏鞴爐——冬季時以砂鐵與木炭連燒三天三夜煉成。" } }
      ]
    },

    { t:"section", id:"license",
      title:{ en:"Becoming a swordsmith", ja:"刀匠になる", zh:"成為刀匠" }, jp:"修業 · 作刀承認",
      body:[
        { t:"p", text:{
          en:"No one in Japan may make a sword simply by learning how. A would-be smith serves an apprenticeship of at least five years under a licensed master, then attends a training course held by the Agency for Cultural Affairs, and only after passing it may forge swords under his own name. Every new blade, like every old one, must then be registered as an art object before it can be sold or owned. The rules keep the numbers small: a few hundred licensed smiths work in the whole country, and only a handful of them in Seki.",
          ja:"日本では、作り方を学んだだけで刀を作ることはできない。刀匠を志す者は、許可を持つ師のもとで少なくとも五年の修業を積み、文化庁の研修会を修了して、はじめて自らの名で刀を鍛えることができる。新しい刀も古い刀と同じく、売ったり所持したりする前に美術品として登録しなければならない。こうした決まりのため数は少なく、許可を持つ刀匠は全国で数百人、関ではそのうちわずかである。",
          zh:"在日本，光是學會方法並不能製刀。有志成為刀匠的人，必須在持有許可的師傅門下至少修業五年，再參加文化廳舉辦的研修並通過，才能以自己的名義鍛刀。每一把新刀和古刀一樣，在出售或持有之前都必須登錄為美術品。這些規定使刀匠人數維持在少數：全國持有許可的刀匠只有數百人，其中在關的更是寥寥可數。" } }
      ]
    },

    { t:"related", items:[
      { href:"sword.html", why:{ en:"What the finished blade should show.", ja:"仕上がった刀に見るもの。", zh:"成刀應呈現的特徵。" } },
      { href:"fittings.html", why:{ en:"What happens after the smith.", ja:"刀匠のあとの工程。", zh:"刀匠之後的工序。" } },
      { href:"metal.html", why:{ en:"Where the steel comes from.", ja:"鋼はどこから来るか。", zh:"鋼材從何而來。" } },
      { href:"knives.html", why:{ en:"The same layering in a kitchen knife.", ja:"包丁に生きる同じ重ねの技。", zh:"菜刀中同樣的層疊技法。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- fittings */
GIFU.pages["fittings"] = {
  kicker: { en: "Metal & Blades · 05", ja: "金と刃 · 05", zh: "金屬與刀刃 · 05" },
  title:  { en: "Polish, Mounts & Fittings", ja: "研ぎと拵", zh: "研磨與刀裝" },
  jp: "研師 · 白銀師 · 鞘師 · 柄巻師 · 金工 · 美濃彫",
  lede: {
    en: "A sword leaves the smith grey and dull. Before it can be seen, let alone carried, it passes through the hands of half a dozen other specialists: the polisher, who brings out the steel's grain and the hamon over two or three weeks; the maker of the collar; the scabbard maker; the hilt wrapper; the lacquerer; and the metalworkers who make the guard and fittings. Mino had its own school of fittings, Mino-bori, known for autumn grasses and insects carved in high relief.",
    ja: "刀は、刀匠の手を離れるときには灰色で鈍い。人に見せる前に、まして佩く前に、それはさらに六人ほどの専門職の手を経る。二、三週間をかけて地鉄の肌と刃文を引き出す研師、はばきを作る白銀師、鞘を作る鞘師、柄を巻く柄巻師、塗師、そして鐔や小道具を作る金工である。美濃には独自の刀装具の流派、美濃彫があり、高肉彫りの秋草と虫で知られる。",
    zh: "刀剛離開刀匠之手時，灰暗無光。在能供人觀賞、更遑論佩帶之前，它還要經過約六種專業匠師之手：花兩三週磨出鋼紋與刃文的研師、製作刀鎺的白銀師、製作刀鞘的鞘師、纏繞刀柄的柄卷師、漆師，以及製作刀鐔與各種配件的金工。美濃有自己的刀裝具流派「美濃雕」，以高浮雕的秋草與昆蟲聞名。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"A sword and its mounting, taken apart, schematic. The blade slides into the hilt and is held by a single bamboo peg through the tang; the collar, spacers and guard sit between blade and hilt. For storage a blade is kept in a plain scabbard of magnolia wood, the <em>shirasaya</em>; for wearing it is fitted with a lacquered mounting, the <em>koshirae</em>.",
        ja:"刀とその拵を分解したところ（模式図）。刀身は柄に差し込まれ、茎を貫く一本の竹の目釘で留められる。はばき・切羽・鐔は刀身と柄のあいだにおさまる。保管のときは朴の木の白鞘に納め、佩くときには漆塗りの拵に入れる。",
        zh:"拆開的刀與刀裝（示意圖）。刀身插入刀柄，以一根貫穿刀莖的竹製目釘固定；鎺、切羽與刀鐔位於刀身與刀柄之間。保存時刀身收在朴木製的素面刀鞘「白鞘」中；佩帶時則裝入上漆的外裝「拵」。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Exploded view of a Japanese sword mounting">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"A SWORD, TAKEN APART", ja:"刀を分解する", zh:"拆開一把刀" }) + '</text>';
        var y = 120;
        /* blade + tang */
        s += '<path d="M330 ' + (y - 6) + ' C460 ' + (y - 12) + ' 600 ' + (y - 16) + ' 720 ' + (y - 22) + ' L728 ' + (y - 14) + ' C600 ' + (y - 2) + ' 460 ' + (y + 4) + ' 330 ' + (y + 8) + ' Z" fill="#E9ECEE" stroke="#201E1B"/>' +
             '<path d="M270 ' + (y - 4) + ' L330 ' + (y - 6) + ' L330 ' + (y + 8) + ' L274 ' + (y + 6) + ' Z" fill="#8B857C" stroke="#201E1B"/>' +
             '<circle cx="292" cy="' + (y + 1) + '" r="2.5" fill="#FBFAF7" stroke="#201E1B" stroke-width="0.8"/>';
        /* habaki, seppa, tsuba, seppa */
        s += '<rect x="318" y="' + (y - 9) + '" width="12" height="20" fill="#EADCC1" stroke="#201E1B"/>';
        var parts = [[240, "#E6E4E0", 4, 30], [224, "#55504A", 8, 60], [210, "#E6E4E0", 4, 30]];
        parts.forEach(function (p) { s += '<rect x="' + p[0] + '" y="' + (y + 1 - p[3] / 2) + '" width="' + p[2] + '" height="' + p[3] + '" fill="' + p[1] + '" stroke="#201E1B"/>'; });
        /* hilt */
        s += '<rect x="60" y="' + (y - 10) + '" width="130" height="22" fill="#FBFAF7" stroke="#201E1B"/>';
        for (var d = 0; d < 7; d++) { s += '<path d="M' + (66 + d * 18) + ' ' + (y - 10) + ' L' + (76 + d * 18) + ' ' + (y + 1) + ' L' + (66 + d * 18) + ' ' + (y + 12) + '" fill="none" stroke="#55504A" stroke-width="1.6"/>'; }
        s += '<rect x="52" y="' + (y - 11) + '" width="10" height="24" fill="#7C6B52" stroke="#201E1B"/><rect x="188" y="' + (y - 11) + '" width="8" height="24" fill="#7C6B52" stroke="#201E1B"/>' +
             '<ellipse cx="128" cy="' + (y + 1) + '" rx="9" ry="4" fill="#EADCC1" stroke="#201E1B" stroke-width="0.8"/>';
        /* scabbard below */
        var ys = 230;
        s += '<path d="M200 ' + (ys - 10) + ' C380 ' + (ys - 16) + ' 560 ' + (ys - 22) + ' 720 ' + (ys - 30) + ' L724 ' + (ys - 12) + ' C560 ' + (ys - 2) + ' 380 ' + (ys + 6) + ' 200 ' + (ys + 10) + ' Z" fill="#55504A" stroke="#201E1B"/>' +
             '<rect x="714" y="' + (ys - 30) + '" width="10" height="18" fill="#EADCC1" stroke="#201E1B"/>' +
             '<rect x="262" y="' + (ys - 16) + '" width="12" height="7" fill="#EADCC1" stroke="#201E1B"/>' +
             '<path d="M268 ' + (ys - 16) + ' C250 ' + (ys - 40) + ' 230 ' + (ys - 30) + ' 214 ' + (ys - 44) + '" fill="none" stroke="#7C6B52" stroke-width="2"/>';
        /* labels */
        var LB = F + ' font-size="10" fill="#201E1B"';
        var lab = [
          [560, 80,  "M560 84 L560 104", {en:"blade — polished by the togishi",ja:"刀身——研師が研ぐ",zh:"刀身——由研師研磨"}],
          [300, 170, "M300 160 L292 126", {en:"tang and bamboo peg (mekugi)",ja:"茎と目釘",zh:"刀莖與竹目釘"}],
          [344, 76,  "M350 80 L326 110", {en:"collar (habaki)",ja:"はばき",zh:"鎺"}],
          [196, 58,  "M228 62 L228 90", {en:"guard (tsuba) and spacers",ja:"鐔と切羽",zh:"刀鐔與切羽"}],
          [40,  76,  "M90 80 L110 110", {en:"hilt: ray skin, braided silk",ja:"柄：鮫皮と組紐",zh:"刀柄：鮫皮與編繩"}],
          [60,  170, "M120 160 L128 126", {en:"ornament (menuki)",ja:"目貫",zh:"目貫"}],
          [420, 272, "M440 262 L450 226", {en:"lacquered scabbard (saya)",ja:"漆塗りの鞘",zh:"上漆刀鞘"}],
          [150, 272, "M200 262 L226 196", {en:"cord (sageo)",ja:"下緒",zh:"下緒"}]
        ];
        lab.forEach(function (a) {
          s += '<path d="' + a[2] + '" stroke="#B4AC9C"/><text x="' + a[0] + '" y="' + a[1] + '" ' + LB + '>' + L(a[3]) + '</text>';
        });
        s += '<text x="30" y="318" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — not to scale; mountings vary by period and owner.",ja:"模式図——縮尺不同。拵は時代と持ち主によって異なる。",zh:"示意圖——未按比例；刀裝因時代與持有者而異。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"polish",
      title:{ en:"The polisher", ja:"研師", zh:"研師" }, jp:"研ぎ · 下地研ぎ · 仕上げ研ぎ",
      body:[
        { t:"p", text:{
          en:"The <strong>togishi</strong> works the blade by hand over a sequence of natural and synthetic whetstones, from coarse stones that correct the shape to fine stones that bring out the texture of the steel, then finishes with slivers of stone pressed under the fingertips — one kind to whiten the hamon, another to darken the body — and a steel burnisher to mirror-polish the back and the ridge. A full polish takes two or three weeks. The polisher's work decides what anyone will ever see of the smith's: a poor polish can hide the grain and hamon of a fine blade, and an aggressive one removes steel that can never be put back.",
          ja:"<strong>研師</strong>は、天然と人工の砥石を順に使って手で刀身を研ぐ。形を正す荒い砥石から、地鉄の肌を引き出す細かい砥石へ進み、最後は指先に当てた薄い砥石の小片——刃文を白く起こすものと、地を黒く沈めるもの——と、棟や鎬地を鏡のように磨く鋼の磨き棒で仕上げる。一振りを研ぎ上げるには二、三週間かかる。研師の仕事は、刀匠の仕事のうち人の目に触れるものを決める。拙い研ぎは名刀の地鉄と刃文を隠し、研ぎすぎれば二度と戻らない鋼を削り取る。",
          zh:"<strong>研師</strong>依序使用天然與人造砥石，以手工研磨刀身：先用粗砥修正形狀，再用細砥磨出鋼的肌理，最後以壓在指尖下的薄砥片——一種讓刃文泛白，一種讓刀身沉黑——以及一支鋼製磨棒把刀背與鎬地磨成鏡面。完整研磨一把刀需時兩三週。研師的工作決定了人們能看到多少刀匠的功夫：研得不好，會掩蓋名刀的地鐵與刃文；研得過度，則會磨掉永遠無法補回的鋼材。" } }
      ]
    },

    { t:"section", id:"mount",
      title:{ en:"Scabbards, hilts and fittings", ja:"鞘・柄・金具", zh:"刀鞘、刀柄與金具" }, jp:"白銀師 · 鞘師 · 柄巻師 · 金工",
      body:[
        { t:"defs", items:[
          { term:{en:"Shirogane-shi",ja:"白銀師",zh:"白銀師"}, jp:"はばき",
            def:{en:"Makes the <em>habaki</em>, the copper or silver collar that locks the blade in its scabbard and keeps the edge from touching the wood.",ja:"刀身を鞘に留め、刃が木に触れないようにする銅や銀の鎺（はばき）を作る。",zh:"製作「鎺」——一種銅或銀製的刀頸套環，把刀身卡在鞘中，並使刃口不碰觸木料。"} },
          { term:{en:"Sayashi",ja:"鞘師",zh:"鞘師"}, jp:"白鞘 · 朴",
            def:{en:"Carves the scabbard from two halves of <em>hō</em>, Japanese magnolia — the same tree whose leaves Hida uses for hōba miso — a soft, resin-free wood that will not rust the blade. The plain storage scabbard is the <em>shirasaya</em>.",ja:"二つ割りにした朴の木——飛騨が朴葉味噌に葉を使う、あの木——から鞘を彫る。柔らかく脂がなく、刀を錆びさせない木である。保管用の飾りのない鞘が白鞘である。",zh:"以對剖的朴木——就是飛驒用其葉子做朴葉味噌的那種樹——雕出刀鞘；這種木材柔軟、不含樹脂，不會使刀生鏽。保存用的素面刀鞘稱為「白鞘」。"} },
          { term:{en:"Tsukamaki-shi",ja:"柄巻師",zh:"柄卷師"}, jp:"鮫皮 · 柄糸",
            def:{en:"Covers the wooden hilt with the skin of a ray, <em>samegawa</em>, and wraps it with flat silk or cotton braid in a diamond pattern that gives a sure grip.",ja:"木の柄にエイの皮（鮫皮）を着せ、平たい絹や木綿の組紐を菱形に巻いて、握りを確かにする。",zh:"在木製刀柄上包覆魟魚皮（鮫皮），再以扁平的絲或棉編繩纏出菱形紋，讓握持穩固。"} },
          { term:{en:"Kinkō",ja:"金工",zh:"金工"}, jp:"鐔 · 目貫 · 小柄 · 笄",
            def:{en:"Metalworkers who make the guard, the hilt ornaments, the collar and pommel caps and the small knife and skewer carried in the scabbard, in iron, copper and alloys, carved, inlaid and coloured.",ja:"鐔、目貫、縁頭、鞘に差す小柄や笄を、鉄・銅・合金で作り、彫り、象嵌し、色をつける金属の工人。",zh:"以鐵、銅與合金製作刀鐔、目貫、柄頭與柄尾的金具，以及插在鞘上的小刀與笄的金屬工匠，並施以雕刻、鑲嵌與著色。"} }
        ] }
      ]
    },

    { t:"section", id:"minobori",
      title:{ en:"Mino-bori", ja:"美濃彫", zh:"美濃雕" }, jp:"秋草 · 虫 · 高肉彫",
      body:[
        { t:"p", text:{
          en:"Beside the swordsmiths, Mino had a school of fittings-makers, <strong>Mino-bori</strong>, “Mino carving”, active from the late Muromachi into the Edo period. Its makers worked in soft metals — copper and the dark gold-copper alloy <em>shakudō</em> — and are known above all for autumn grasses, flowers and insects carved in high, crisp relief and picked out in gold. Mino-bori guards and ornaments are sought by collectors today, and can be seen with Seki blades in the museums of the town.",
          ja:"刀鍛冶のかたわらで、美濃には刀装具の流派<strong>美濃彫</strong>があり、室町時代後期から江戸時代にかけて活動した。その工人は銅や、黒みを帯びた金と銅の合金である赤銅など柔らかい金属を用い、何よりも、高く鋭い肉彫りで刻み金で彩った秋草・花・虫で知られる。美濃彫の鐔や目貫はいまも収集家に求められ、町の博物館では関の刀とともに見ることができる。",
          zh:"在刀匠之外，美濃還有一個刀裝具流派——<strong>美濃雕</strong>，活躍於室町時代後期至江戶時代。其匠人使用銅以及色澤深沉的金銅合金「赤銅」等軟金屬，尤以高而銳利的浮雕秋草、花卉與昆蟲並以金色點綴而聞名。美濃雕的刀鐔與目貫至今仍受收藏家青睞，在鎮上的博物館裡可與關的刀劍一同觀賞。" } }
      ]
    },

    { t:"section", id:"care",
      title:{ en:"Caring for a sword", ja:"刀の手入れ", zh:"刀的保養" }, jp:"打粉 · 拭い紙 · 丁子油",
      body:[
        { t:"steps", items:[
          { title:{en:"Remove the old oil",ja:"古い油を拭う",zh:"拭去舊油"}, jp:"拭い紙", text:{en:"Holding the blade by the hilt, edge up, wipe it from the collar to the point with soft paper.",ja:"柄を持ち、刃を上にして、はばき元から切先へやわらかな紙で拭う。",zh:"握住刀柄、刃口朝上，用柔軟的紙從刀鎺處往刀尖擦拭。"} },
          { title:{en:"Powder and wipe",ja:"打粉を打つ",zh:"撲粉擦拭"}, jp:"打粉", text:{en:"Tap a fine polishing powder along both faces and wipe it off with clean paper; this lifts the remaining oil.",ja:"細かな砥の粉の打粉を両面に軽く打ち、きれいな紙で拭い取る。残った油が取れる。",zh:"在刀身兩面輕拍細緻的打粉，再以乾淨的紙拭去，可去除殘油。"} },
          { title:{en:"Look",ja:"鑑賞する",zh:"欣賞"}, jp:"", text:{en:"Hold the blade to a single light source to see the hamon and grain; never touch the steel with bare fingers.",ja:"一つの光源にかざして刃文と地肌を見る。鋼に素手で触れてはならない。",zh:"對著單一光源觀看刃文與地肌；切勿以手指直接觸碰鋼面。"} },
          { title:{en:"Oil again",ja:"油を引く",zh:"重新上油"}, jp:"丁子油", text:{en:"Apply a thin film of clove-scented oil with soft paper or cloth and return the blade to its plain scabbard.",ja:"やわらかな紙や布で丁子油を薄く引き、白鞘に納める。",zh:"以柔軟的紙或布薄薄塗上丁子油，再把刀收回白鞘。"} }
        ] },
        { t:"note", label:{en:"Etiquette",ja:"作法",zh:"禮節"}, text:{
          en:"When shown a sword, bow slightly before taking it, keep the edge towards yourself, do not speak over the blade, and ask before drawing it from its scabbard.",
          ja:"刀を見せてもらうときは、受け取る前に軽く礼をし、刃を自分の側に向け、刀身の上で話さず、鞘から抜く前には断りを入れる。",
          zh:"受人展示刀劍時，接刀前先輕輕行禮，刃口朝向自己，不要對著刀身說話，拔刀出鞘前要先徵得同意。" } }
      ]
    },

    { t:"related", items:[
      { href:"forging.html", why:{ en:"How the blade was made.", ja:"刀身はどう作られたか。", zh:"刀身如何製成。" } },
      { href:"sword.html", why:{ en:"The Mino tradition.", ja:"美濃伝。", zh:"美濃傳。" } },
      { href:"food.html", why:{ en:"The other use of magnolia.", ja:"朴のもう一つの使い道。", zh:"朴木的另一種用途。" } },
      { href:"carving.html", why:{ en:"Lacquer in Hida.", ja:"飛騨の漆。", zh:"飛驒的漆藝。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- cutlery */
GIFU.pages["cutlery"] = {
  kicker: { en: "Metal & Blades · 06", ja: "金と刃 · 06", zh: "金屬與刀刃 · 06" },
  title:  { en: "The Cutlery Industry", ja: "刃物産業", zh: "刀具產業" },
  jp: "包丁 · はさみ · 爪切り · 剃刀 · ステンレス · 分業",
  lede: {
    en: "Modern Seki is an industrial town that happens to have a swordsmith. Its factories and workshops turn out kitchen and table knives, scissors, nail clippers, razors, pocket and outdoor knives and industrial blades, for their own brands and for companies around the world. In 2020 the city shipped ¥45.6 billion of cutlery, more than any other municipality in Japan, and 55 per cent of the country's household knives by value.",
    ja: "現代の関は、たまたま刀匠もいる工業の町である。その工場と工房は、包丁や食卓用ナイフ、はさみ、爪切り、剃刀、ポケットナイフやアウトドアナイフ、工業用の刃を、自社のブランドと世界中の会社のために作っている。2020年、市の刃物出荷額は456億円で日本の市町村で最も多く、国内の家庭用刃物の出荷額の55パーセントを占めた。",
    zh: "現代的關，是一座碰巧也有刀匠的工業城鎮。它的工廠與工坊生產菜刀與餐刀、剪刀、指甲剪、剃刀、折刀與戶外刀，以及工業用刀刃，供自家品牌與世界各地的公司使用。2020 年，該市刀具出貨額達 456 億日圓，居全國市町村之冠，並占全國家用刀具出貨額的 55%。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"How a factory kitchen knife is made, schematic. Blanks are cut from sheet steel — often a laminated stainless with a hard core — and hardened in a controlled furnace, then ground, fitted with a handle, sharpened and honed. Many Seki firms specialise in one or two of these stages and pass the work between them; hand work returns at the grinding and edging, where the quality of a knife is decided.",
        ja:"工場の包丁ができるまで（模式図）。鋼板——しばしば硬い芯をもつ積層のステンレス——から生地を抜き、管理された炉で焼き入れし、研削し、柄をつけ、刃付けし、仕上げる。関の多くの会社はこのうち一つか二つの工程を専門とし、工程の間で仕事を受け渡す。手の仕事が戻ってくるのは研削と刃付けで、そこで包丁の良し悪しが決まる。",
        zh:"工廠菜刀的製作流程（示意圖）。從鋼板——常為帶硬芯的積層不鏽鋼——裁出刀坯，在溫控爐中淬火硬化，接著研削、裝柄、開刃與精磨。關的許多公司專精其中一兩道工序，彼此之間轉手加工；手工在研削與開刃時再度登場，而一把刀的好壞就在這裡決定。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 300" role="img" aria-label="Stages of factory kitchen knife production">' +
          '<rect x="0.5" y="0.5" width="759" height="299" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"SHEET TO KNIFE", ja:"鋼板から包丁へ", zh:"從鋼板到菜刀" }) + '</text>';
        var steps = [
          [{en:"Blank",ja:"型抜き",zh:"裁坯"}, {en:"laser or press",ja:"レーザー・プレス",zh:"雷射或沖壓"}],
          [{en:"Harden",ja:"焼き入れ",zh:"淬火"}, {en:"quench, temper",ja:"焼き入れ・焼き戻し",zh:"淬火、回火"}],
          [{en:"Grind",ja:"研削",zh:"研削"}, {en:"shape the bevels",ja:"刃の面を作る",zh:"磨出刃面"}],
          [{en:"Handle",ja:"柄付け",zh:"裝柄"}, {en:"rivet or fit",ja:"鋲留め・差し込み",zh:"鉚接或嵌入"}],
          [{en:"Edge",ja:"刃付け",zh:"開刃"}, {en:"by hand or machine",ja:"手または機械",zh:"手工或機械"}],
          [{en:"Finish",ja:"仕上げ",zh:"精修"}, {en:"hone, inspect",ja:"小刃付け・検品",zh:"精磨、檢驗"}]
        ];
        steps.forEach(function (st, i) {
          var x = 40 + i * 118;
          s += '<rect x="' + x + '" y="70" width="100" height="44" fill="' + (i === 2 || i === 4 ? "#EADCC1" : "#F0EDE4") + '" stroke="#7C6B52"/>' +
               '<text x="' + (x + 50) + '" y="90" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(st[0]) + '</text>' +
               '<text x="' + (x + 50) + '" y="106" text-anchor="middle" ' + F + ' font-size="9" fill="#55504A">' + L(st[1]) + '</text>';
          if (i < 5) s += '<path d="M' + (x + 100) + ' 92 L' + (x + 118) + ' 92" stroke="#55504A"/><path d="M' + (x + 118) + ' 92 l-6 -4 l0 8 z" fill="#55504A"/>';
        });
        /* knife evolving silhouettes */
        function knife(x, y, w, full, handle) {
          var d = 'M' + x + ' ' + y + ' L' + (x + w) + ' ' + y + ' L' + (x + w + 14) + ' ' + (y + 6) + ' C' + (x + w * 0.7) + ' ' + (y + 22) + ' ' + (x + 10) + ' ' + (y + 22) + ' ' + x + ' ' + (y + 22) + ' Z';
          var out = '<path d="' + d + '" fill="' + (full ? "#E9ECEE" : "#DFDAD0") + '" stroke="#201E1B" stroke-width="0.9"/>';
          if (handle) out += '<rect x="' + (x - 34) + '" y="' + (y + 2) + '" width="34" height="14" fill="#55504A" stroke="#201E1B" stroke-width="0.8"/>';
          else out += '<rect x="' + (x - 30) + '" y="' + (y + 6) + '" width="30" height="7" fill="#DFDAD0" stroke="#201E1B" stroke-width="0.8"/>';
          return out;
        }
        for (var i = 0; i < 6; i++) {
          s += knife(76 + i * 118, 150, 48, i >= 1, i >= 3);
          if (i >= 4) s += '<path d="M' + (76 + i * 118) + ' 172 C' + (76 + i * 118 + 34) + ' 172 ' + (76 + i * 118 + 48) + ' 170 ' + (76 + i * 118 + 62) + ' 156" fill="none" stroke="#FBFAF7" stroke-width="1.4"/>';
        }
        s += '<text x="40" y="222" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"Shaded boxes: the stages where hand skill matters most.",ja:"色付きの工程：手の技が最も効くところ。",zh:"著色的工序：最講究手藝之處。"}) + '</text>' +
             '<text x="30" y="288" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — sequences differ between products and makers.",ja:"模式図——工程の順は製品と作り手によって異なる。",zh:"示意圖——工序依產品與製造者而異。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"what",
      title:{ en:"What Seki makes", ja:"関が作るもの", zh:"關製造什麼" }, jp:"品目",
      body:[
        { t:"p", text:{
          en:"The range is wider than knives. Seki makes scissors of every kind — kitchen, sewing, hairdressing and barber's shears among them — nail clippers and nippers, safety-razor and disposable-razor blades, surgical and laboratory blades, pocket knives and hunting and outdoor knives, and machine knives for industry, as well as kitchen knives in every Japanese and Western pattern. In 2020 kitchen knives alone accounted for about ¥9.6 billion of the city's shipments, scissors for about ¥4.9 billion and pocket knives for about ¥1.2 billion. See the table on <a href=\"seki.html\">Seki, Town of Blades</a>.",
          ja:"品目は包丁にとどまらない。関は、台所用・裁縫用・理美容用などあらゆるはさみ、爪切りやニッパー、安全剃刀や使い捨て剃刀の刃、医療用・研究用の刃、ポケットナイフや狩猟用・アウトドアのナイフ、工業用の機械刃、そして和洋あらゆる型の包丁を作る。2020年には包丁だけで市の出荷額の約96億円、はさみが約49億円、ポケットナイフが約12億円を占めた。<a href=\"seki.html\">刃物のまち・関</a>の表を参照。",
          zh:"產品範圍不只菜刀。關生產各式剪刀——包括廚房剪、裁縫剪、美髮剪與理髮剪——指甲剪與剪鉗、安全剃刀與拋棄式剃刀的刀片、醫療與實驗用刀片、折刀與狩獵、戶外刀，以及工業用機械刀，還有各種日式與西式的菜刀。2020 年，光是菜刀就占該市出貨額約 96 億日圓，剪刀約 49 億日圓，折刀約 12 億日圓。見<a href=\"seki.html\">刀刃之城・關</a>的表格。" } },
        { t:"p", text:{
          en:"Hand skill survives where machines struggle. A good pair of scissors is not flat: each blade is very slightly curved and hollowed so that the two touch at a single point that travels along the cut, and setting that curve and the tension of the pivot is still done by eye and hand. The same is true of the final edge on a premium knife.",
          ja:"手の技は、機械が苦手なところに生きている。良いはさみは平らではない。二枚の刃はそれぞれごくわずかに反り、裏をすかれていて、切り進むにつれて一点で触れ合う接点が移っていく。その反りと要のしめ具合の調整は、いまも目と手で行われる。高級な包丁の最後の刃付けも同じである。",
          zh:"手藝在機器難以勝任之處延續著。一把好剪刀並不是平的：兩片刀刃各自帶有極細微的彎曲與凹面，使兩刃只在一點接觸，而這個接觸點隨著剪切向前移動；調整這道彎度與支點的鬆緊，至今仍靠眼力與手感。高級菜刀最後的開刃也是如此。" } },
        { t:"p", text:{
          en:"Most of it is made by small and middle-sized firms. Some sell under their own names — the largest, Kai, founded in the town in 1908, is known worldwide for its kitchen knives — but much of the industry works to order for brands at home and abroad, and many firms specialise in one or two stages of the work, such as heat treatment, grinding or edging, passing the work between them.",
          ja:"その大半は中小の会社によって作られる。自社の名で売る会社もあり——最大の貝印は1908年に町で創業し、その包丁は世界で知られる——、しかし産業の多くは国内外のブランドの注文で作り、多くの会社が熱処理・研削・刃付けといった一つか二つの工程を専門にし、工程の間で仕事を受け渡している。",
          zh:"大部分產品出自中小企業。有些以自家名義銷售——其中最大的貝印於 1908 年在鎮上創立，其菜刀聞名全球——但產業中很大一部分是接受國內外品牌的訂單生產，許多公司只專精熱處理、研削或開刃等一兩道工序，彼此之間轉手加工。" } }
      ]
    },

    { t:"section", id:"steel",
      title:{ en:"Steels", ja:"鋼材", zh:"鋼材" }, jp:"ステンレス · 積層鋼 · 炭素鋼",
      body:[
        { t:"p", text:{
          en:"Seki's knives are mostly stainless. The typical premium blade is laminated: a thin core of very hard stainless steel, which takes and holds the edge, clad on both sides with softer, tougher stainless layers that protect it, often in many thin alternating layers that show as a rippled, wood-grain pattern when etched — the look sold as “Damascus”. The idea is the swordsmith's, a hard edge in a softer body, carried out with steel made by specialist mills rather than folded in the forge. Carbon-steel knives, sharper still but prone to rust, are made in smaller numbers for professional cooks.",
          ja:"関の包丁の多くはステンレスである。典型的な高級品の刃は積層で、刃をつけて保つ非常に硬いステンレスの薄い芯を、両側からより柔らかく粘りのあるステンレスの層で挟んで守る。しばしば多数の薄い層を交互に重ね、腐食させると木目のような波紋が現れる——「ダマスカス」として売られる見た目である。硬い刃を柔らかい地で包むという考えは刀鍛冶のものであり、それを鍛冶場で折り返すかわりに専門の製鋼会社の鋼で実現している。さらによく切れるが錆びやすい炭素鋼の包丁は、料理人のために少量作られる。",
          zh:"關的刀大多是不鏽鋼。典型的高級刀身為積層結構：以一層極硬、能開出並保持鋒利刃口的不鏽鋼為薄芯，兩側包覆較軟、較韌的不鏽鋼層加以保護；常見的是許多薄層交替疊合，蝕刻後呈現如木紋般的波紋——即以「大馬士革」之名銷售的外觀。以軟質刀身包覆硬刃的構想來自刀匠，只是不再於鍛爐中摺疊，而是由專業鋼廠的鋼材實現。更鋒利但容易生鏽的碳鋼刀，則為專業廚師少量生產。" } }
      ]
    },

    { t:"section", id:"future",
      title:{ en:"Pressures", ja:"課題", zh:"壓力" }, jp:"競争 · 担い手 · 観光",
      body:[
        { t:"p", text:{
          en:"Like every Japanese craft industry, Seki's faces cheaper production abroad, an ageing workforce and small firms without successors. Its answers have been to move up-market into premium kitchen knives for export, where the “made in Seki” name counts, and to sell the town itself: factory outlets, the October cutlery festival, the swordsmiths' museum and forging demonstrations bring visitors who can see how a blade is made before they buy one.",
          ja:"日本のあらゆる工芸産業と同じく、関の刃物産業も、海外のより安い生産、働き手の高齢化、後継者のいない小さな会社という課題を抱える。その答えは、「関製」の名が効く輸出向けの高級包丁へと上を目指すことと、町そのものを売ることであった。工場直売の店、十月の刃物まつり、鍛冶伝承館と鍛錬の公開が、刃物がどう作られるかを見てから買う訪問者を呼んでいる。",
          zh:"與日本所有工藝產業一樣，關的刀具業也面臨海外更便宜的生產、勞動力老化，以及後繼無人的小企業等問題。其對策是往上走，發展出口導向的高級菜刀——在這個市場，「關製」的名號具有分量——同時推銷這座城鎮本身：工廠直營店、十月的刀具祭、鍛冶傳承館與鍛刀示範，吸引遊客先看看刀如何製成，再決定購買。" } }
      ]
    },

    { t:"section", id:"range",
      title:{ en:"The range at a glance", ja:"品目の一覧", zh:"產品一覽" }, jp:"品目",
      body:[
        { t:"grid", cols:3, cells:[
          { k:{en:"Kitchen knives",ja:"包丁",zh:"菜刀"}, body:{en:"Western and Japanese patterns, from supermarket knives to premium laminated blades for export.",ja:"洋包丁と和包丁。量販品から輸出向けの高級積層刃まで。",zh:"西式與日式刀型，從量販店商品到出口用的高級積層刀。"} },
          { k:{en:"Scissors",ja:"はさみ",zh:"剪刀"}, body:{en:"Kitchen, sewing, office, and fine hairdressing and barber's shears.",ja:"台所用、裁縫用、事務用、そして精密な理美容用のはさみ。",zh:"廚房、裁縫、辦公用剪刀，以及精密的美髮與理髮剪。"} },
          { k:{en:"Nail clippers",ja:"爪切り",zh:"指甲剪"}, body:{en:"Lever clippers and nippers, often sold under cosmetics and household brands.",ja:"てこ式の爪切りやニッパー。化粧品や日用品のブランドで売られることも多い。",zh:"槓桿式指甲剪與剪鉗，常以美妝或日用品品牌販售。"} },
          { k:{en:"Razors",ja:"剃刀",zh:"剃刀"}, body:{en:"Blades for safety, disposable and barber's razors, and precise blades for medicine and laboratories.",ja:"安全剃刀・使い捨て剃刀・理容用の刃、そして医療や研究のための精密な刃。",zh:"安全剃刀、拋棄式剃刀與理容用刀片，以及醫療與實驗室用的精密刀片。"} },
          { k:{en:"Pocket and outdoor knives",ja:"ポケット・アウトドアナイフ",zh:"折刀與戶外刀"}, body:{en:"The trade that carried Seki's name abroad in the 1930s, now also custom knives by independent makers.",ja:"1930年代に関の名を海外へ運んだ品。いまは独立した作り手のカスタムナイフもある。",zh:"1930 年代把關的名號帶到海外的產品；如今也有獨立製刀師的訂製刀。"} },
          { k:{en:"Industrial blades",ja:"工業用刃物",zh:"工業用刀刃"}, body:{en:"Machine knives for cutting paper, film, food and other materials in factories.",ja:"工場で紙・フィルム・食品などを切る機械刃。",zh:"工廠中裁切紙張、薄膜、食品等材料的機械刀。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"knives.html", why:{ en:"Choosing and caring for a kitchen knife.", ja:"包丁の選び方と手入れ。", zh:"菜刀的挑選與保養。" } },
      { href:"seki.html", why:{ en:"The town and its numbers.", ja:"町とその数字。", zh:"城鎮與其數字。" } },
      { href:"forging.html", why:{ en:"The swordsmith's version of the same idea.", ja:"同じ考えの刀鍛冶版。", zh:"同一理念的刀匠版本。" } },
      { href:"economy.html", why:{ en:"Gifu's industries in figures.", ja:"数字で見る岐阜の産業。", zh:"數字中的岐阜產業。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- knives */
GIFU.pages["knives"] = {
  kicker: { en: "Metal & Blades · 07", ja: "金と刃 · 07", zh: "金屬與刀刃 · 07" },
  title:  { en: "The Kitchen Knife", ja: "包丁", zh: "廚刀" },
  jp: "牛刀 · 三徳 · 菜切 · ペティ · 出刃 · 柳刃 · 片刃と両刃",
  lede: {
    en: "Japanese kitchen knives come in two families. The traditional single-bevel knives of the professional kitchen — the deba for fish, the long yanagiba for sashimi, the usuba for vegetables — are ground on one side only and are the descendants of the swordsmith's craft. The double-bevel knives of the home — the santoku, the gyūtō and the nakiri — adapted Western shapes to Japanese cooking in the twentieth century, and are what Seki makes most.",
    ja: "日本の包丁には二つの系統がある。料理屋の伝統的な片刃の包丁——魚をおろす出刃、刺身を引く長い柳刃、野菜を切る薄刃——は片面だけを研ぎ、刀鍛冶の技の子孫である。家庭の両刃の包丁——三徳、牛刀、菜切——は二十世紀に洋包丁の形を日本の料理に合わせたもので、関が最も多く作るのはこちらである。",
    zh: "日本菜刀分為兩大類。專業廚房的傳統單刃刀——剖魚的出刃、切生魚片的長柳刃、切蔬菜的薄刃——只在一面開刃，是刀匠技藝的後裔。家庭用的雙刃刀——三德、牛刀與菜切——則是在二十世紀把西式刀形調整以適應日本料理而來，也是關生產最多的一類。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Seven common Japanese kitchen knives, schematic, drawn to about the same scale, with their edge sections. Single-bevel knives (below) are ground on one face and nearly flat on the other, which lets them cut very thin, clean slices; double-bevel knives (above) are ground symmetrically and cut straight for most people.",
        ja:"よく使われる七つの包丁（模式図）。ほぼ同じ縮尺で描き、刃の断面を添える。片刃の包丁（下）は片面だけを研ぎ、裏はほぼ平らで、非常に薄くきれいに切れる。両刃の包丁（上）は左右対称に研がれ、多くの人にとってまっすぐ切れる。",
        zh:"七種常見的日本菜刀（示意圖），大致以相同比例繪製，並附刃口剖面。單刃刀（下排）只研磨一面、另一面近乎平直，能切出極薄而乾淨的切片；雙刃刀（上排）兩面對稱研磨，對多數人來說能切得筆直。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 380" role="img" aria-label="Seven Japanese kitchen knives and their edge profiles">' +
          '<rect x="0.5" y="0.5" width="759" height="379" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"SEVEN KNIVES", ja:"七つの包丁", zh:"七把菜刀" }) + '</text>' +
          '<text x="30" y="56" ' + F + ' font-size="10" fill="#8B857C" letter-spacing="1.4">' + L({en:"DOUBLE BEVEL · HOME",ja:"両刃・家庭",zh:"雙刃・家庭"}) + '</text>' +
          '<text x="30" y="226" ' + F + ' font-size="10" fill="#8B857C" letter-spacing="1.4">' + L({en:"SINGLE BEVEL · PROFESSIONAL",ja:"片刃・料理人",zh:"單刃・專業"}) + '</text>';
        function handle(x, y, h) { return '<rect x="' + (x - 46) + '" y="' + (y + h / 2 - 7) + '" width="46" height="14" fill="#7C6B52" stroke="#201E1B" stroke-width="0.8"/>'; }
        var knives = [
          /* x, y, path-builder, name, sub */
          [80, 80, function (x, y) { return 'M' + x + ' ' + y + ' L' + (x + 118) + ' ' + y + ' C' + (x + 130) + ' ' + (y + 6) + ' ' + (x + 118) + ' ' + (y + 30) + ' ' + (x + 60) + ' ' + (y + 34) + ' L' + x + ' ' + (y + 34) + ' Z'; }, 34, {en:"Santoku",ja:"三徳",zh:"三德"}, {en:"all-purpose; “three virtues”",ja:"万能。「三つの徳」",zh:"萬用；「三德」"}],
          [330, 84, function (x, y) { return 'M' + x + ' ' + y + ' L' + (x + 170) + ' ' + (y + 4) + ' C' + (x + 150) + ' ' + (y + 20) + ' ' + (x + 90) + ' ' + (y + 30) + ' ' + x + ' ' + (y + 30) + ' Z'; }, 30, {en:"Gyūtō",ja:"牛刀",zh:"牛刀"}, {en:"the chef's knife",ja:"洋包丁の基本形",zh:"主廚刀"}],
          [600, 80, function (x, y) { return 'M' + x + ' ' + y + ' L' + (x + 110) + ' ' + y + ' L' + (x + 112) + ' ' + (y + 34) + ' L' + x + ' ' + (y + 34) + ' Z'; }, 34, {en:"Nakiri",ja:"菜切",zh:"菜切"}, {en:"vegetables",ja:"野菜用",zh:"切蔬菜"}],
          [80, 160, function (x, y) { return 'M' + x + ' ' + y + ' L' + (x + 96) + ' ' + (y + 3) + ' C' + (x + 80) + ' ' + (y + 12) + ' ' + (x + 50) + ' ' + (y + 16) + ' ' + x + ' ' + (y + 16) + ' Z'; }, 16, {en:"Petty",ja:"ペティ",zh:"小刀（Petty）"}, {en:"small work",ja:"小回りの仕事",zh:"精細工作"}],
          [80, 250, function (x, y) { return 'M' + x + ' ' + y + ' L' + (x + 96) + ' ' + (y + 8) + ' C' + (x + 80) + ' ' + (y + 30) + ' ' + (x + 50) + ' ' + (y + 38) + ' ' + x + ' ' + (y + 38) + ' Z'; }, 38, {en:"Deba",ja:"出刃",zh:"出刃"}, {en:"heavy; fish and bones",ja:"厚く重い。魚と骨",zh:"厚重；剖魚斷骨"}],
          [330, 258, function (x, y) { return 'M' + x + ' ' + y + ' L' + (x + 210) + ' ' + (y + 4) + ' C' + (x + 190) + ' ' + (y + 14) + ' ' + (x + 120) + ' ' + (y + 20) + ' ' + x + ' ' + (y + 20) + ' Z'; }, 20, {en:"Yanagiba",ja:"柳刃",zh:"柳刃"}, {en:"long; sashimi in one pull",ja:"長い。刺身を一引きで",zh:"長刃；一拉切成生魚片"}],
          [620, 252, function (x, y) { return 'M' + x + ' ' + y + ' L' + (x + 100) + ' ' + y + ' L' + (x + 100) + ' ' + (y + 34) + ' L' + x + ' ' + (y + 34) + ' Z'; }, 34, {en:"Usuba",ja:"薄刃",zh:"薄刃"}, {en:"thin; vegetable cuts",ja:"薄い。野菜の飾り切り",zh:"薄；蔬菜雕切"}]
        ];
        knives.forEach(function (k) {
          var x = k[0], y = k[1];
          s += handle(x, y, k[3]) + '<path d="' + k[2](x, y) + '" fill="#E9ECEE" stroke="#201E1B" stroke-width="1.1"/>' +
               '<text x="' + (x - 46) + '" y="' + (y + k[3] + 18) + '" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(k[4]) + '</text>' +
               '<text x="' + (x - 46) + '" y="' + (y + k[3] + 32) + '" ' + F + ' font-size="9.5" fill="#8B857C">' + L(k[5]) + '</text>';
        });
        /* edge sections */
        s += '<path d="M600 160 L612 160 L606 196 Z" fill="#E9ECEE" stroke="#201E1B"/>' +
             '<text x="622" y="176" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"double bevel",ja:"両刃",zh:"雙刃"}) + '</text>' +
             '<path d="M500 322 L512 322 L512 358 Z" fill="#E9ECEE" stroke="#201E1B"/>' +
             '<text x="522" y="340" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"single bevel (for right hand)",ja:"片刃（右利き用）",zh:"單刃（右手用）"}) + '</text>' +
             '<text x="30" y="372" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — outlines typical; each maker's patterns differ.",ja:"模式図——輪郭は典型的なもの。型は作り手ごとに異なる。",zh:"示意圖——輪廓為典型形狀；各製造者樣式不同。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"choose",
      title:{ en:"Choosing a knife", ja:"包丁を選ぶ", zh:"挑選菜刀" }, jp:"選び方",
      body:[
        { t:"p", text:{
          en:"For a home kitchen one good double-bevel knife does most of the work: a <strong>santoku</strong> of about 16–18 cm, the shape most Japanese households use, or a <strong>gyūtō</strong> of 18–21 cm for those used to a Western chef's knife, with a small <strong>petty</strong> knife for fruit and fine work. Single-bevel knives reward practice and a sharpening habit and are best bought for a particular job — a deba for breaking down whole fish, a yanagiba for slicing raw fish. Stainless and laminated stainless blades forgive neglect; carbon steel takes a keener edge but will stain and rust if left wet.",
          ja:"家庭の台所では、よい両刃の包丁が一本あれば大半の仕事は足りる。日本の多くの家庭が使う16〜18センチほどの<strong>三徳</strong>、あるいは洋包丁に慣れた人には18〜21センチの<strong>牛刀</strong>に、果物や細かな仕事のための小さな<strong>ペティ</strong>を添える。片刃の包丁は練習と研ぐ習慣に応えてくれるもので、特定の仕事のために買うのがよい——一尾の魚をおろすなら出刃、刺身を引くなら柳刃である。ステンレスや積層ステンレスの刃は多少の手抜きを許すが、炭素鋼はより鋭い刃がつく代わりに、濡れたまま置けば色が変わり、錆びる。",
          zh:"家庭廚房裡，一把好的雙刃刀就能應付大部分工作：大多數日本家庭使用的約 16–18 公分<strong>三德刀</strong>，或是習慣西式主廚刀者適用的 18–21 公分<strong>牛刀</strong>，再加一把處理水果與精細工作的小型<strong>Petty 刀</strong>。單刃刀需要練習與磨刀的習慣，最好針對特定用途購買——處理整條魚用出刃，切生魚片用柳刃。不鏽鋼與積層不鏽鋼刀身能容忍疏於照顧；碳鋼能開出更鋒利的刃口，但若濕著放置便會變色生鏽。" } }
      ]
    },

    { t:"section", id:"care",
      title:{ en:"Care and sharpening", ja:"手入れと研ぎ", zh:"保養與研磨" }, jp:"砥石 · 手入れ",
      body:[
        { t:"steps", items:[
          { title:{en:"Wash by hand, dry at once",ja:"手で洗い、すぐ拭く",zh:"手洗後立即擦乾"}, jp:"",
            text:{en:"Dishwashers dull and chip edges and loosen handles. Wash with a sponge, dry, and store in a block, on a magnetic strip or in a sheath.",ja:"食器洗い機は刃を鈍らせ、欠けさせ、柄をゆるめる。スポンジで洗って拭き、包丁立てやマグネットや鞘に収める。",zh:"洗碗機會使刃口變鈍、崩口，也會讓刀柄鬆動。以海綿清洗、擦乾，收在刀座、磁條或刀套中。"} },
          { title:{en:"Cut on wood or soft board",ja:"木や柔らかいまな板で",zh:"在木製或軟質砧板上切"}, jp:"まな板",
            text:{en:"Glass, stone and ceramic boards destroy an edge. Do not twist a thin blade in bone or frozen food.",ja:"ガラス・石・陶器のまな板は刃を傷める。薄い刃を骨や冷凍食品のなかでこじらない。",zh:"玻璃、石材與陶瓷砧板會毀損刃口。不要把薄刃在骨頭或冷凍食品中扭轉撬動。"} },
          { title:{en:"Sharpen on a whetstone",ja:"砥石で研ぐ",zh:"用磨刀石研磨"}, jp:"荒砥 · 中砥 · 仕上げ砥",
            text:{en:"A medium stone of about #1000 restores a working edge; a fine stone of #3000–6000 polishes it. Soak or wet the stone, hold a steady angle — for a double-bevel knife roughly the thickness of two coins under the spine — and sharpen both sides evenly. A single-bevel knife is sharpened mostly on its bevel side, with only a light pass on the flat back.",ja:"#1000前後の中砥で使える刃を取り戻し、#3000〜6000の仕上げ砥で磨く。砥石を水に浸すか濡らし、角度を一定に保つ——両刃なら峰の下に硬貨二枚ほどの高さ——、両面を均等に研ぐ。片刃はおもに切刃の側を研ぎ、平らな裏は軽くあてる程度にする。",zh:"約 #1000 的中砥可恢復堪用的刃口；#3000–6000 的細砥用來拋光。先把磨刀石泡水或打濕，保持穩定的角度——雙刃刀大約是在刀背下墊兩枚硬幣的高度——兩面均勻研磨。單刃刀主要研磨斜刃那一面，平直的背面只需輕輕帶過。"} },
          { title:{en:"Or have it sharpened",ja:"研ぎに出す",zh:"或送去研磨"}, jp:"研ぎ直し",
            text:{en:"Many Seki makers and shops will resharpen the knives they sell, and sharpening services are a fixture of the October cutlery festival.",ja:"関の多くの作り手や店は、売った包丁の研ぎ直しを引き受ける。十月の刃物まつりでも研ぎの店は欠かせない。",zh:"關的許多製造者與店家會為自己售出的刀提供重新研磨服務，十月的刀具祭上也少不了磨刀攤位。"} }
        ] }
      ]
    },

    { t:"section", id:"words",
      title:{ en:"Words on a knife", ja:"包丁の言葉", zh:"菜刀用語" }, jp:"本焼 · 霞 · 割込 · 三枚",
      body:[
        { t:"defs", items:[
          { term:{en:"Honyaki",ja:"本焼",zh:"本燒"}, jp:"ほんやき", def:{en:"A blade made entirely of one high-carbon steel and hardened, like a sword, only at the edge. The most demanding to make and to use.",ja:"一種類の高炭素鋼だけで作り、刀のように刃だけに焼きを入れた包丁。作るのも使うのも最も難しい。",zh:"整把刀只用一種高碳鋼製成，並像日本刀一樣只在刃口淬硬。製作與使用都最具難度。"} },
          { term:{en:"Kasumi",ja:"霞",zh:"霞"}, jp:"かすみ", def:{en:"A traditional single-bevel blade of hard steel forge-welded to a softer iron back; the soft iron polishes to a misty finish, hence the name.",ja:"硬い鋼をやわらかい地金に鍛接した伝統的な片刃。地金が霞のような肌に研ぎ上がることから名がある。",zh:"一種傳統單刃刀，以硬鋼鍛接在較軟的鐵背上；軟鐵研磨後呈霧狀光澤，故名「霞」。"} },
          { term:{en:"Warikomi",ja:"割込",zh:"割込"}, jp:"わりこみ", def:{en:"Hard steel inserted into a split in a softer jacket — the double-bevel cousin of the sword's construction.",ja:"やわらかい地金に割れ目を入れ、そこへ硬い鋼を差し込んだ造り。刀の造り込みの両刃版の親戚である。",zh:"把硬鋼插入切開的軟鋼外層之中——相當於日本刀構造的雙刃版近親。"} },
          { term:{en:"Sanmai",ja:"三枚",zh:"三枚"}, jp:"さんまい", def:{en:"Three layers: a hard core between two soft outer layers; the usual construction of laminated stainless knives.",ja:"三層。硬い芯を二枚の柔らかい外層で挟む。積層ステンレス包丁のふつうの造り。",zh:"三層：以兩片較軟的外層夾住硬芯；積層不鏽鋼刀的常見構造。"} },
          { term:{en:"Hagane",ja:"鋼",zh:"鋼（刃鋼）"}, jp:"はがね", def:{en:"The hard edge steel of a knife, as against <em>jigane</em>, the softer body metal.",ja:"包丁の刃になる硬い鋼。やわらかい地の金属である地金に対していう。",zh:"刀上形成刃口的硬鋼，相對於較軟的刀身金屬「地金」而言。"} }
        ] }
      ]
    },

    { t:"note", label:{en:"Left-handed cooks",ja:"左利きの人へ",zh:"左撇子廚師"}, text:{
      en:"Double-bevel knives work in either hand. Single-bevel knives are made for the right hand unless ordered otherwise; left-handed deba, yanagiba and usuba are made as mirror images and usually have to be ordered.",
      ja:"両刃の包丁はどちらの手でも使える。片刃の包丁は、特に注文しないかぎり右利き用に作られる。左利き用の出刃・柳刃・薄刃は鏡に映したように作られ、ふつうは注文が必要である。",
      zh:"雙刃刀左右手皆可使用。單刃刀除非特別訂製，否則都是為右手而做；左手用的出刃、柳刃與薄刃是以鏡像方式製作，通常需要訂購。" } },

    { t:"related", items:[
      { href:"cutlery.html", why:{ en:"How Seki's knives are made.", ja:"関の包丁の作り方。", zh:"關的菜刀如何製造。" } },
      { href:"forging.html", why:{ en:"The single-bevel knife's ancestor.", ja:"片刃の祖先。", zh:"單刃刀的祖先。" } },
      { href:"food.html", why:{ en:"What to cut.", ja:"何を切るか。", zh:"要切什麼。" } },
      { href:"seki.html", why:{ en:"Where to buy one.", ja:"どこで買うか。", zh:"去哪裡買。" } }
    ] }
  ]
};
