/* =============================================================
   THE SPIRIT OF GIFU — Land & Water
   Page modules, concatenated. Each page is one
   GIFU.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ----------------------------------------------- landform */
GIFU.pages["landform"] = {
  kicker: { en: "Land & Water · 01", ja: "風土 · 01", zh: "風土 · 01" },
  title:  { en: "Mountains, Plains & Rock", ja: "山と平野と岩", zh: "山、平原與岩石" },
  jp: "地形と地質 · 飛山濃水",
  lede: {
    en: "Gifu falls more than three kilometres from north-east to south-west: from the granite and gneiss of the Northern Alps, across a high plateau of volcanic rock cut into gorges and basins, down to a delta plain that lies partly below sea level. The rocks underneath are some of the oldest in Japan, and the faults that run through them produced the largest inland earthquake in its recorded history. Almost everything else in this book — where rice could grow, where timber could be floated, where clay and limestone could be dug — follows from this ground.",
    ja: "岐阜県は北東から南西へ、三千メートル以上を下る。北アルプスの花崗岩と片麻岩から、峡谷と盆地に刻まれた火山岩の高原を経て、一部が海面より低いデルタの平野へ。その下の岩は日本でも指折りの古さを持ち、そこを走る断層は、記録に残る日本最大の内陸地震を起こした。本書のほとんどすべて——どこで米が育ち、どこで木を流せ、どこで粘土や石灰岩を掘れたか——は、この大地から導かれる。",
    zh: "岐阜縣由東北向西南，落差超過三千公尺：從北阿爾卑斯的花崗岩與片麻岩出發，越過一片被切割成峽谷與盆地的火山岩高原，直到部分低於海平面的三角洲平原。地底的岩石是日本最古老的一批，貫穿其間的斷層則引發了日本有史以來最大的內陸地震。本書幾乎所有內容——哪裡能種稻、哪裡能放流木材、哪裡能挖黏土與石灰岩——都源自這片土地。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"A schematic section from the Northern Alps to Ise Bay. Heights are real but the horizontal distance is compressed and the vertical exaggerated. The four bands of ground — alpine range, Hida basins, the plateau of the Mino–Hida highlands, and the Nōbi Plain — correspond roughly to four families of rock, the oldest in the north.",
        ja:"北アルプスから伊勢湾までの模式断面。高さは実際の値だが、水平距離は縮め、垂直方向は誇張している。四つの地帯——山岳、飛騨の盆地、美濃・飛騨の高原、濃尾平野——はおおよそ四つの岩石の系統に対応し、北ほど古い。",
        zh:"從北阿爾卑斯到伊勢灣的示意剖面。高度為實際數值，但水平距離經過壓縮、垂直方向經過誇大。四種地帶——高山山脈、飛驒盆地、美濃與飛驒的高原、濃尾平原——大致對應四類岩石，越往北越古老。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        function yv(m) { return 250 - m * 0.058; }
        var pts = [[40,3190],[70,2400],[100,3026],[130,1800],[170,900],[200,570],[240,700],[270,1200],[300,1500],[340,900],[380,600],[420,700],[460,500],[500,300],[540,120],[580,30],[620,8],[660,0],[700,-1],[730,0]];
        var d = "M40 " + yv(3190);
        for (var i = 1; i < pts.length; i++) d += " L" + pts[i][0] + " " + yv(pts[i][1]).toFixed(1);
        var s = '<svg viewBox="0 0 760 360" role="img" aria-label="Schematic north-south section of Gifu">' +
          '<rect x="0.5" y="0.5" width="759" height="359" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="26" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FROM THE ALPS TO THE SEA", ja:"アルプスから海へ", zh:"從阿爾卑斯到海" }) + '</text>' +
          '<text x="730" y="26" text-anchor="end" ' + F + ' font-size="9.5" fill="#8B857C" letter-spacing="1.2">' +
          L({ en:"SCHEMATIC · VERTICAL EXAGGERATION", ja:"模式図・垂直方向を誇張", zh:"示意・垂直方向誇大" }) + '</text>';
        /* bands of rock */
        s += '<rect x="40" y="252" width="130" height="40" fill="#E6E4E0" stroke="#CDC6B9"/>' +
             '<rect x="170" y="252" width="110" height="40" fill="#E0E6DB" stroke="#CDC6B9"/>' +
             '<rect x="280" y="252" width="240" height="40" fill="#EEE1DF" stroke="#CDC6B9"/>' +
             '<rect x="520" y="252" width="210" height="40" fill="#F0EDE4" stroke="#CDC6B9"/>';
        var bl = [[105, {en:"Hida belt · granite, gneiss",ja:"飛騨帯・花崗岩・片麻岩",zh:"飛驒帶・花崗岩・片麻岩"}],
                  [225, {en:"basins & older rock",ja:"盆地と古い岩",zh:"盆地與古老岩層"}],
                  [400, {en:"Nōhi rhyolite · Mino belt",ja:"濃飛流紋岩・美濃帯",zh:"濃飛流紋岩・美濃帶"}],
                  [625, {en:"alluvium of the Nōbi Plain",ja:"濃尾平野の沖積層",zh:"濃尾平原沖積層"}]];
        bl.forEach(function (b) {
          s += '<text x="' + b[0] + '" y="276" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L(b[1]) + '</text>';
        });
        /* profile */
        s += '<path d="' + d + ' L730 250 L40 250 Z" fill="#E7DFD2" stroke="none"/>' +
             '<path d="' + d + '" fill="none" stroke="#55504A" stroke-width="1.4"/>' +
             '<line x1="40" y1="250" x2="730" y2="250" stroke="#8FA6AE" stroke-width="1" stroke-dasharray="3 3"/>' +
             '<text x="734" y="246" text-anchor="end" ' + F + ' font-size="9" fill="#5E7780">' + L({en:"sea level",ja:"海面",zh:"海平面"}) + '</text>';
        var lab = [
          [40, 3190, {en:"Oku-Hotaka 3,190 m",ja:"奥穂高岳 3,190m",zh:"奧穗高岳 3,190m"}, "start", 6, -6],
          [100, 3026, {en:"Norikura 3,026",ja:"乗鞍岳 3,026",zh:"乘鞍岳 3,026"}, "start", 6, -6],
          [200, 570, {en:"Takayama ≈570",ja:"高山 約570",zh:"高山 約570"}, "middle", 0, -10],
          [300, 1500, {en:"Hida highlands",ja:"飛騨高地",zh:"飛驒高地"}, "middle", 0, -10],
          [460, 500, {en:"Mino highlands",ja:"美濃の丘陵・高原",zh:"美濃丘陵高原"}, "middle", 0, -10],
          [580, 30, {en:"Gifu city ≈15",ja:"岐阜市 約15",zh:"岐阜市 約15"}, "middle", 0, -12],
          [700, -1, {en:"Kaizu, below 0",ja:"海津 0m以下",zh:"海津 0m以下"}, "end", 0, -12]
        ];
        lab.forEach(function (a) {
          s += '<text x="' + (a[0] + a[4]) + '" y="' + (yv(a[1]) + a[5]).toFixed(1) + '" text-anchor="' + a[3] + '" ' + F + ' font-size="10" fill="#201E1B">' + L(a[2]) + '</text>';
        });
        s += '<text x="40" y="318" ' + F + ' font-size="10" fill="#55504A">' + L({en:"← north-east · Nagano border",ja:"← 北東・長野県境",zh:"← 東北・長野縣界"}) + '</text>' +
             '<text x="730" y="318" text-anchor="end" ' + F + ' font-size="10" fill="#55504A">' + L({en:"south-west · Ise Bay →",ja:"南西・伊勢湾 →",zh:"西南・伊勢灣 →"}) + '</text>' +
             '<text x="40" y="342" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Rock bands: older to the north. Distances not to scale.",ja:"岩石の帯は北ほど古い。距離は縮尺不同。",zh:"岩層越往北越古老。距離不按比例。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"four",
      title:{ en:"Four kinds of ground", ja:"四つの地形", zh:"四種地形" }, jp:"地形区分",
      body:[
        { t:"grid", cols:2, cells:[
          { k:{en:"North-east",ja:"北東",zh:"東北"}, h:{en:"The Hida Mountains",ja:"飛騨山脈",zh:"飛驒山脈"}, jp:"北アルプス",
            d:{en:"The Northern Alps form the border with Nagano. Oku-Hotakadake, at 3,190 m the highest point in Gifu and the third-highest peak in Japan, stands on the ridge, with Yarigatake, Kasagatake and Norikura nearby; Ontake rises alone to the south. The range is granite and older metamorphic rock, raised and still rising.",
               ja:"北アルプスは長野との県境をなす。稜線には県内最高地点で日本第三位の高峰、奥穂高岳（3,190m）が立ち、近くに槍ヶ岳・笠ヶ岳・乗鞍岳が並ぶ。南には御嶽山が独り聳える。山脈は花崗岩と古い変成岩からなり、隆起してきたし、いまも隆起している。",
               zh:"北阿爾卑斯構成與長野縣的邊界。奧穗高岳（3,190 公尺）是岐阜縣最高點、日本第三高峰，矗立在稜線上，附近有槍岳、笠岳與乘鞍岳；御嶽山則獨自聳立於南方。山脈由花崗岩與更古老的變質岩構成，曾經隆起，至今仍在隆起。"} },
          { k:{en:"North",ja:"北部",zh:"北部"}, h:{en:"The Hida basins and highlands",ja:"飛騨の盆地と高地",zh:"飛驒盆地與高地"}, jp:"飛騨高地",
            d:{en:"West of the Alps the land is a dissected plateau at roughly 1,000–1,500 m, opened by rivers into basins: Takayama at about 570 m, Furukawa, and the narrow valleys of the Shō and the Hida. Towns sit in the basins; almost everything else is forest.",
               ja:"アルプスの西は、標高およそ1,000〜1,500メートルの開析された高原で、川がそこに盆地を開く。約570メートルの高山、古川、そして庄川・飛騨川の狭い谷。町は盆地にあり、ほかはほとんどすべて森である。",
               zh:"阿爾卑斯以西，是海拔約 1,000–1,500 公尺、受侵蝕切割的高原，河川在其中切出一個個盆地：海拔約 570 公尺的高山、古川，以及庄川與飛驒川的狹長河谷。城鎮位於盆地之中，其餘幾乎全是森林。"} },
          { k:{en:"Centre and east",ja:"中部・東部",zh:"中部與東部"}, h:{en:"The Mino highlands",ja:"美濃の高原と丘陵",zh:"美濃高原與丘陵"}, jp:"美濃三河高原",
            d:{en:"South of the Hida highlands the ground steps down into rolling uplands and low mountains, drained by the Hida, Kiso and Nagara through gorges — Hisui-kyō, Ena-kyō, the upper Nagara. This is the country of Mino washi, Seki's smithies and, in the south-east, the clay pits of Tōnō.",
               ja:"飛騨高地の南で土地は一段下がり、なだらかな高原と低い山々になる。飛騨川・木曽川・長良川が飛水峡や恵那峡、長良川上流の峡谷を刻んで流れ下る。美濃和紙の里、関の鍛冶場、そして南東には東濃の粘土採掘場がある土地である。",
               zh:"飛驒高地以南，地勢下降為起伏的高原與低山，飛驒川、木曾川、長良川切出飛水峽、惠那峽與長良川上游的峽谷後流下。這裡是美濃和紙、關市鍛冶場，以及東南方東濃黏土礦坑所在的土地。"} },
          { k:{en:"South-west",ja:"南西",zh:"西南"}, h:{en:"The Nōbi Plain",ja:"濃尾平野",zh:"濃尾平原"}, jp:"濃尾平野",
            d:{en:"The Kiso Three Rivers have built one of Japan's great deltas, tilted gently to the west so that the rivers crowd towards its western edge. Its lowest part lies below sea level — the largest such zone in Japan — and was settled only behind ring levees. Rice, the old castle towns of Gifu and Ōgaki, and today most of the prefecture's people.",
               ja:"木曽三川は日本有数のデルタを築いた。平野はゆるやかに西へ傾き、川は西の縁へと寄せられる。最も低い部分は海面下にあり——日本最大のゼロメートル地帯である——輪中の堤の内側でのみ人が住めた。米、岐阜と大垣の古い城下町、そしていまは県民の大半がここにいる。",
               zh:"木曾三川堆積出日本數一數二的三角洲。平原微微向西傾斜，使河川都擠向西緣。其最低處位於海平面以下——日本面積最大的零公尺地帶——只能在輪中堤防圍起的範圍內居住。稻米、岐阜與大垣的舊城下町，以及今日大多數縣民，都在這裡。"} }
        ] }
      ]
    },

    { t:"section", id:"oldest",
      title:{ en:"Very old rock", ja:"とても古い岩", zh:"極古老的岩石" }, jp:"飛騨帯 · 上麻生礫岩",
      body:[
        { t:"p", text:{
          en:"The northern part of the prefecture belongs to the <strong>Hida belt</strong>, a block of gneiss and granite that records metamorphic and igneous events stretching back more than a billion years, and is some of the oldest continental crust in the Japanese islands. Hida gneiss is laced with thin layers of marble — metamorphosed limestone — which is why the belt was mined for zinc and lead at Kamioka.",
          ja:"県の北部は<strong>飛騨帯</strong>に属する。片麻岩と花崗岩からなる地塊で、十億年以上前にさかのぼる変成作用と火成活動を記録した、日本列島でも最古級の大陸地殻である。飛騨片麻岩には薄い大理石——変成した石灰岩——の層が挟まり、それゆえ神岡でこの帯から亜鉛や鉛が掘られた。",
          zh:"本縣北部屬於<strong>飛驒帶</strong>，是一塊由片麻岩與花崗岩構成的地塊，記錄了可追溯至十億年以上的變質與火成事件，是日本列島最古老的大陸地殼之一。飛驒片麻岩中夾有薄層大理岩——即變質的石灰岩——神岡之所以能從這個帶開採鋅與鉛，原因在此。" } },
        { t:"p", text:{
          en:"In March 1970 a conglomerate in the bed of the Hida River at Hichisō — the <strong>Kamiaso conglomerate</strong> — was found to contain pebbles of sillimanite gneiss dated to about two billion years. For almost fifty years they were Japan's oldest known rock, and the town built a museum around them. In 2019 researchers reported gneiss from Tsuwano in Shimane at about 2.5 billion years; Hichisō's museum now displays a piece of it beside its own.",
          ja:"1970年（昭和45年）3月、七宗町の飛騨川の河床で見つかった礫岩——<strong>上麻生礫岩</strong>——に、約二十億年前の珪線石片麻岩の礫が含まれていることが分かった。五十年近く、これが日本で最古の岩石とされ、町はそれを中心に博物館を建てた。2019年、島根県津和野町の片麻岩が約二十五億年前のものと報告され、七宗町の博物館はいま、その一片を自らの石の隣に展示している。",
          zh:"1970 年（昭和 45 年）3 月，在七宗町飛驒川河床發現的礫岩——<strong>上麻生礫岩</strong>——被證實含有約二十億年前的矽線石片麻岩礫石。將近五十年間，它們一直是日本已知最古老的岩石，當地還為此建了博物館。2019 年，研究者發表島根縣津和野町的片麻岩約有二十五億年；七宗町的博物館如今將一塊津和野的石頭陳列在自家石頭旁邊。" } },
        { t:"note", label:{en:"Records change",ja:"記録は変わる",zh:"紀錄會改寫"}, text:{
          en:"Hichisō's gneiss is still a two-billion-year-old stone; what changed is the ranking. Superlatives in geology — oldest, largest, first — are provisional, and this book dates them.",
          ja:"七宗の片麻岩が二十億年前の石であることに変わりはない。変わったのは順位である。地質学の最上級——最古・最大・最初——は暫定的なもので、本書はそれに日付を添える。",
          zh:"七宗的片麻岩仍是二十億年前的石頭；改變的是排名。地質學上的最高級——最古老、最大、最早——都是暫時的，本書會為它們註明日期。" } }
      ]
    },

    { t:"section", id:"volcanic",
      title:{ en:"A volcanic field a quarter of the prefecture wide", ja:"県の四分の一を覆う火山の跡", zh:"覆蓋全縣四分之一的火山遺跡" }, jp:"濃飛流紋岩",
      body:[
        { t:"p", text:{
          en:"Between about 85 and 68 million years ago, at the end of the Cretaceous, a series of enormous eruptions laid down pyroclastic flows hundreds of metres thick across what is now central Gifu. The result, the <strong>Nōhi rhyolite</strong>, is a body of welded tuff about 35 km wide and 100 km long, running from near Mount Ena in the south-east to the Furukawa area in the north-west — roughly a quarter of the prefecture's area.",
          ja:"約8,500万年前から6,800万年前、白亜紀の終わりに、巨大な噴火が繰り返され、厚さ数百メートルの火砕流が現在の岐阜県中央部に堆積した。こうしてできた<strong>濃飛流紋岩</strong>は、南東の恵那山付近から北西の古川付近まで、幅約35キロ、延長約100キロにのびる溶結凝灰岩の岩体で、県の面積のおよそ四分の一を占める。",
          zh:"約八千五百萬至六千八百萬年前的白堊紀末期，一連串巨大的噴發，在今日岐阜縣中部堆積出厚達數百公尺的火山碎屑流。其結果——<strong>濃飛流紋岩</strong>——是一塊寬約 35 公里、長約 100 公里的熔結凝灰岩體，從東南方的惠那山附近延伸至西北方的古川一帶，約占全縣面積的四分之一。" } },
        { t:"p", text:{
          en:"The hard, jointed rock gives central Gifu its gorges. At <strong>Hisui-kyō</strong>, a twelve-kilometre stretch of the Hida River between Hichisō and Shirakawa, the river has drilled more than five hundred potholes a metre or more across into the bedrock — perhaps a thousand in all — and the pothole field is a national natural monument.",
          ja:"硬く節理の発達したこの岩が、岐阜県中部の峡谷をつくる。七宗町から白川町まで約12キロにわたる飛騨川の<strong>飛水峡</strong>では、川が岩盤に直径1メートル以上の甌穴を五百以上——全体では千ほど——穿っており、甌穴群は国の天然記念物である。",
          zh:"這種堅硬、節理發達的岩石造就了岐阜中部的峽谷。在七宗町至白川町之間、長約 12 公里的飛驒川<strong>飛水峽</strong>，河水在岩床上鑽出五百多個直徑一公尺以上的壺穴——總數或達一千——這片壺穴群是國家指定的天然紀念物。" } }
      ]
    },

    { t:"section", id:"reef",
      title:{ en:"A reef in the mountains", ja:"山のなかの珊瑚礁", zh:"山中的珊瑚礁" }, jp:"金生山",
      body:[
        { t:"p", text:{
          en:"The low mountain of <strong>Kinshōzan</strong>, on the boundary of Ōgaki and Ikeda, is made entirely of Akasaka limestone — the remains of a reef that grew near the equator between about 274 and 252 million years ago and was carried to Japan on the ocean floor. Its fusulinids were described by the German palaeontologist Gümbel in 1874, the first scientific paper on a Japanese fossil, and Kinshōzan is called the birthplace of palaeontology in Japan; its giant bivalves and sea lilies are among the largest of their kind known.",
          ja:"大垣市と池田町の境にある低い山、<strong>金生山</strong>は、全体が赤坂石灰岩でできている。約2億7,400万年前から2億5,200万年前に赤道近くで育った礁の名残で、海洋底に乗って日本まで運ばれてきた。ここのフズリナは1874年にドイツの古生物学者ギュンベルが記載し、これが日本産化石に関する最初の学術論文となった。ゆえに金生山は「日本の古生物学発祥の地」と呼ばれ、ここの巨大な二枚貝やウミユリは同類で最大級である。",
          zh:"位於大垣市與池田町交界處的低山<strong>金生山</strong>，整座由赤坂石灰岩構成——那是約兩億七千四百萬至兩億五千二百萬年前在赤道附近生長的礁體遺骸，隨著海洋底板被運送到日本。其中的紡錘蟲於 1874 年由德國古生物學家居姆貝爾（Gümbel）描述，是關於日本化石的第一篇學術論文，因此金生山被稱為「日本古生物學發祥地」；這裡的巨型雙殼貝與海百合，屬同類中已知最大者。" } },
        { t:"p", text:{
          en:"The same rock made Akasaka rich. Lime was burned on the mountain in the Edo period; from 1856 kilns on a commercial scale followed, and from Meiji into early Shōwa Akasaka's lime industry was described as the finest in the East. The mountain is still quarried, and its outline has changed within living memory.",
          ja:"同じ岩が赤坂を富ませた。江戸時代には山で石灰が焼かれ、1856年（安政3年）からは商業規模の窯が続いた。明治から昭和初期にかけて、赤坂の石灰産業は「東洋一」と称された。山はいまも採掘が続き、その姿は人の記憶のうちにも変わってきた。",
          zh:"同樣的岩石也讓赤坂致富。江戶時代已在山上燒製石灰；1856 年（安政 3 年）起出現商業規模的石灰窯，從明治到昭和初期，赤坂的石灰業被譽為「東洋第一」。這座山至今仍在開採，其輪廓在人們的記憶中已有改變。" } }
      ]
    },

    { t:"section", id:"faults",
      title:{ en:"Faults and the earthquakes they made", ja:"断層と地震", zh:"斷層與地震" }, jp:"天正地震 · 濃尾地震",
      body:[
        { t:"timeline", items:[
          { year:"1586", era:{en:"Tenshō 13",ja:"天正13年",zh:"天正13年"}, title:{en:"The Tenshō earthquake buries a castle",ja:"天正地震、城を埋める",zh:"天正地震掩埋一座城"}, jp:"帰雲城",
            text:{en:"On the night of 18 January (29th day of the 11th month), an earthquake estimated at M7.8 brought down the western face of Mount Kaerikumo in Shirakawa. Kaerikumo Castle and its town of some 300 houses were buried; the lord Uchigashima Ujitoki died with his family and the house ended. The site has never been found.",
                  ja:"1月18日（天正13年11月29日）の夜、推定M7.8の地震が白川の帰雲山の西斜面を崩した。帰雲城と約300戸の城下町が埋まり、城主・内ヶ島氏理は一族とともに死して家は絶えた。城の跡はいまも見つかっていない。",
                  zh:"1 月 18 日（天正 13 年 11 月 29 日）夜，一場推估規模 M7.8 的地震震垮了白川村歸雲山的西坡。歸雲城及其約 300 戶的城下町遭到掩埋，城主內島氏理與族人一同罹難，家族就此斷絕。城址至今未能找到。"} },
          { year:"1891", era:{en:"Meiji 24",ja:"明治24年",zh:"明治24年"}, title:{en:"The Nōbi earthquake",ja:"濃尾地震",zh:"濃尾地震"}, jp:"根尾谷断層",
            text:{en:"At 06:38 on 28 October an M8.0 earthquake struck Mino — the largest inland earthquake in Japan's recorded history. It killed 7,273 people and destroyed more than 140,000 houses. The rupture ran about 80 km; at Midori in the Neo valley the ground was offset 6 m vertically and about 4 m sideways, and the scarp is a Special Natural Monument.",
                  ja:"10月28日午前6時38分、M8.0の地震が美濃を襲った。記録に残る日本最大の内陸地震である。死者7,273人、全壊家屋は14万戸を超えた。断層の長さは約80キロ。根尾谷の水鳥では地面が上下に6メートル、横に約4メートルずれ、その断層崖は特別天然記念物となっている。",
                  zh:"10 月 28 日上午 6 時 38 分，一場規模 M8.0 的地震襲擊美濃——日本有紀錄以來最大的內陸地震。死者 7,273 人，全毀房屋超過十四萬戶。斷層破裂長約 80 公里；在根尾谷的水鳥，地面垂直錯動 6 公尺、水平錯動約 4 公尺，那道斷層崖被指定為特別天然紀念物。"} },
          { year:"1959", era:{en:"Shōwa 34",ja:"昭和34年",zh:"昭和34年"}, title:{en:"The Ise Bay typhoon",ja:"伊勢湾台風",zh:"伊勢灣颱風"}, jp:"高潮",
            text:{en:"Not a fault but the plain's other hazard: a storm surge of 3.55 m at Nagoya drove the sea into the low delta shared by Aichi, Mie and southern Gifu, and parts of it stayed flooded for more than 120 days.",
                  ja:"断層ではなく、平野のもう一つの危険。名古屋港で潮位偏差3.55メートルの高潮が、愛知・三重・岐阜南部にまたがる低いデルタへ海を押し込み、一部は120日以上も水に浸かったままだった。",
                  zh:"這不是斷層，而是平原的另一種危險：名古屋港 3.55 公尺的暴潮，把海水推進愛知、三重與岐阜南部共有的低窪三角洲，部分地區淹水長達 120 天以上。"} }
        ] },
        { t:"p", text:{
          en:"The lowest part of the Nōbi Plain is the largest zero-metre zone in Japan: about 250 km² lie below mean sea level and some 400 km² below the level of spring high tides. That is the ground on which the ring-levee villages were built, and the reason the history of Mino is also a history of embankments — see <a href=\"chisui.html\">Taming the Three Rivers</a>.",
          ja:"濃尾平野の最も低い部分は日本最大のゼロメートル地帯で、約250平方キロが平均海面より低く、約400平方キロが大潮の満潮位より低い。輪中の村々が築かれたのはこの土地の上であり、美濃の歴史が堤の歴史でもあるのはそのためである。<a href=\"chisui.html\">木曽三川の治水</a>を参照。",
          zh:"濃尾平原最低的部分是日本最大的零公尺地帶：約 250 平方公里低於平均海平面，約 400 平方公里低於大潮滿潮位。輪中村落正是建在這片土地上，這也是美濃的歷史同時是一部堤防史的原因——見<a href=\"chisui.html\">木曾三川的治水</a>。" } }
      ]
    },

    { t:"related", items:[
      { href:"rivers.html", why:{ en:"What runs over this ground, and where it goes.", ja:"この大地の上を何が流れ、どこへ行くか。", zh:"流經這片土地的是什麼，又流向何方。" } },
      { href:"metal.html", why:{ en:"The mines the Hida belt made possible.", ja:"飛騨帯がもたらした鉱山。", zh:"飛驒帶所造就的礦山。" } },
      { href:"minoyaki.html", why:{ en:"The clays of the Tōnō uplands.", ja:"東濃の丘陵の粘土。", zh:"東濃丘陵的黏土。" } },
      { href:"mountains.html", why:{ en:"The same peaks, as objects of faith.", ja:"同じ山々を、信仰の対象として。", zh:"同樣的山峰，作為信仰的對象。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- rivers */
GIFU.pages["rivers"] = {
  kicker: { en: "Land & Water · 02", ja: "風土 · 02", zh: "風土 · 02" },
  title:  { en: "Rivers & Water", ja: "川と水", zh: "河川與水" },
  jp: "木曽三川 · 分水嶺 · 清流",
  lede: {
    en: "Gifu is split by the spine of Honshū. Water that falls on its northern third runs to the Sea of Japan; water that falls on the rest runs to the Pacific through the Kiso, the Nagara and the Ibi — the Kiso Three Rivers — which meet in the lowest ground in Japan. The rivers were the prefecture's roads for timber, paper and pottery, its fishing grounds, its source of power and, for most of its history, its greatest danger. They are also the reason the prefecture now calls itself the land of clear streams.",
    ja: "岐阜県は本州の背骨によって分けられている。北の三分の一に降った水は日本海へ、残りに降った水は木曽川・長良川・揖斐川——木曽三川——を通って太平洋へ流れ、日本で最も低い土地で出会う。川は県にとって木材や紙や焼き物を運ぶ道であり、漁場であり、動力の源であり、歴史の大半を通じて最大の脅威であった。そして県が自らを「清流の国」と呼ぶ理由でもある。",
    zh: "岐阜縣被本州的脊梁一分為二。落在北方三分之一的雨水流向日本海；落在其餘土地的雨水，則經木曾川、長良川、揖斐川——木曾三川——流向太平洋，三川在日本最低窪的土地上交會。河川是本縣運送木材、紙與陶器的道路，是漁場，是動力來源，也在歷史上大部分時期是最大的威脅。它們也是本縣如今自稱「清流之國」的原因。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Two sides of a divide. At Hirugano in Gujō, at about 875 m, a single stream splits: one arm becomes the Shō and flows north to the Sea of Japan, the other becomes the Nagara and flows south to the Pacific. The same divide runs across Hida, sending the Miya and Takahara north and the Hida River south. Schematic.",
        ja:"分水嶺の両側。郡上市ひるがの（標高約875m）では、一筋の流れが二つに分かれ、一方は庄川となって北の日本海へ、もう一方は長良川となって南の太平洋へ向かう。同じ分水嶺は飛騨を横切り、宮川・高原川を北へ、飛騨川を南へ送る。模式図。",
        zh:"分水嶺兩側。郡上市蛭野（ひるがの，海拔約 875 公尺）的一道溪流在此一分為二：一支成為庄川，北流入日本海；另一支成為長良川，南流入太平洋。同一道分水嶺橫越飛驒，把宮川與高原川送往北方，把飛驒川送往南方。示意圖。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"', RV = 'fill="none" stroke="#8FA6AE" stroke-width="2.2"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="The watershed divide in Gifu">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"THE DIVIDE", ja:"分水嶺", zh:"分水嶺" }) + '</text>' +
          '<rect x="30" y="44" width="700" height="34" fill="#E0E7E9" stroke="#CDC6B9"/>' +
          '<text x="380" y="66" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" letter-spacing="1.2">' + L({en:"SEA OF JAPAN (via Toyama)",ja:"日本海（富山県を経て）",zh:"日本海（經富山縣）"}) + '</text>' +
          '<rect x="30" y="262" width="700" height="34" fill="#E0E7E9" stroke="#CDC6B9"/>' +
          '<text x="380" y="284" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B" letter-spacing="1.2">' + L({en:"ISE BAY · PACIFIC (via Aichi & Mie)",ja:"伊勢湾・太平洋（愛知・三重を経て）",zh:"伊勢灣・太平洋（經愛知、三重）"}) + '</text>' +
          '<path d="M40 176 C140 150 200 186 260 166 C320 146 380 184 440 162 C500 142 560 180 620 158 C660 146 700 164 724 156" fill="none" stroke="#7C6B52" stroke-width="1.6" stroke-dasharray="7 4"/>' +
          '<text x="44" y="196" ' + F + ' font-size="10" fill="#7C6B52" letter-spacing="1.2">' + L({en:"PACIFIC–SEA OF JAPAN DIVIDE",ja:"太平洋・日本海の分水界",zh:"太平洋－日本海分水界"}) + '</text>';
        /* north-flowing */
        s += '<path d="M150 168 C146 130 142 104 140 80" ' + RV + '/>' +
             '<path d="M300 158 C300 128 304 104 306 80" ' + RV + '/>' +
             '<path d="M460 158 C466 126 474 104 478 80" ' + RV + '/>';
        /* south-flowing */
        s += '<path d="M150 172 C156 206 150 236 146 260" ' + RV + '/>' +
             '<path d="M330 162 C340 200 350 230 356 260" ' + RV + '/>' +
             '<path d="M92 212 C94 228 96 244 98 260" ' + RV + '/>' +
             '<path d="M680 150 C672 196 664 232 660 260" ' + RV + '/>';
        var RL = F + ' font-size="10.5" font-style="italic" fill="#5E7780"';
        s += '<text x="160" y="116" ' + RL + '>' + L({en:"Shō",ja:"庄川",zh:"庄川"}) + '</text>' +
             '<text x="314" y="116" ' + RL + '>' + L({en:"Miya → Jinzū",ja:"宮川→神通川",zh:"宮川→神通川"}) + '</text>' +
             '<text x="486" y="116" ' + RL + '>' + L({en:"Takahara → Jinzū",ja:"高原川→神通川",zh:"高原川→神通川"}) + '</text>' +
             '<text x="184" y="236" ' + RL + '>' + L({en:"Nagara",ja:"長良川",zh:"長良川"}) + '</text>' +
             '<text x="364" y="236" ' + RL + '>' + L({en:"Hida River → Kiso",ja:"飛騨川→木曽川",zh:"飛驒川→木曾川"}) + '</text>' +
             '<text x="106" y="252" ' + RL + '>' + L({en:"Ibi",ja:"揖斐川",zh:"揖斐川"}) + '</text>' +
             '<text x="668" y="224" ' + RL + '>' + L({en:"Kiso",ja:"木曽川",zh:"木曾川"}) + '</text>';
        s += '<circle cx="150" cy="170" r="5" fill="#FBFAF7" stroke="#201E1B" stroke-width="1.2"/>' +
             '<text x="162" y="160" ' + F + ' font-size="10.5" fill="#201E1B">' + L({en:"Hirugano ≈875 m",ja:"ひるがの 約875m",zh:"蛭野 約875m"}) + '</text>' +
             '<text x="30" y="318" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — rivers placed for legibility, not position. The Ibi rises further west, below this divide.",ja:"模式図——川の位置は見やすさを優先した。揖斐川はさらに西、分水界より下に発する。",zh:"示意圖——河川位置以易讀為準。揖斐川發源於更西處、此分水界下方。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"three",
      title:{ en:"The Kiso Three Rivers", ja:"木曽三川", zh:"木曾三川" }, jp:"木曽川 · 長良川 · 揖斐川",
      body:[
        { t:"table",
          caption:{en:"The three rivers (Ministry of Land, Infrastructure, Transport and Tourism)",ja:"三川の諸元（国土交通省）",zh:"三川數據（國土交通省）"},
          cols:[{en:"River",ja:"川",zh:"河川"},{en:"Length",ja:"幹川流路延長",zh:"幹流長度"},{en:"Basin",ja:"流域面積",zh:"流域面積"},{en:"Source",ja:"源流",zh:"源頭"}],
          numCols:[1,2],
          rows:[
            [{en:"Kiso",ja:"木曽川",zh:"木曾川"},"229 km","5,275 km²",{en:"Mount Hachimori, Nagano",ja:"鉢盛山（長野県）",zh:"鉢盛山（長野縣）"}],
            [{en:"Nagara",ja:"長良川",zh:"長良川"},"166 km","1,985 km²",{en:"Dainichigatake, Gujō",ja:"大日ヶ岳（郡上市）",zh:"大日岳（郡上市）"}],
            [{en:"Ibi",ja:"揖斐川",zh:"揖斐川"},"121 km","1,840 km²",{en:"Kanmuriyama, Ibigawa",ja:"冠山（揖斐川町）",zh:"冠山（揖斐川町）"}]
          ] },
        { t:"p", text:{
          en:"Together the three drain about 9,100 km² and carry the water of much of Gifu and parts of Nagano, Shiga and Aichi to Ise Bay. The Kiso is the largest — the Nagara and Ibi together are roughly its equal — and it gathers the Hida River at Minokamo. On the plain the three were not separate rivers at all but a braided system of channels that shifted with every flood; they were divided into the three beds they occupy today only between 1887 and 1912. See <a href=\"chisui.html\">Taming the Three Rivers</a>.",
          ja:"三川はあわせて約9,100平方キロの流域を持ち、岐阜県の大半と長野・滋賀・愛知の一部の水を伊勢湾へ運ぶ。最大は木曽川で——長良川と揖斐川を合わせてほぼ同じ規模になる——美濃加茂で飛騨川を合わせる。平野の上では、三川はもともと別々の川ではなく、洪水のたびに流路を変える網の目のような水路の群れであった。今日の三つの河道に分けられたのは、1887年から1912年のあいだのことにすぎない。<a href=\"chisui.html\">木曽三川の治水</a>を参照。",
          zh:"三川合計流域面積約 9,100 平方公里，把岐阜縣大部分地區以及長野、滋賀、愛知部分地區的水送入伊勢灣。木曾川最大——長良川與揖斐川加起來才大致與之相當——並在美濃加茂匯入飛驒川。在平原上，三川原本並非各自分流的河，而是一組隨每次洪水改道的網狀水道；它們被分成今日的三條河道，只是 1887 至 1912 年間的事。見<a href=\"chisui.html\">木曾三川的治水</a>。" } }
      ]
    },

    { t:"section", id:"nagara",
      title:{ en:"The Nagara", ja:"長良川", zh:"長良川" }, jp:"清流",
      body:[
        { t:"p", text:{
          en:"The Nagara rises on Dainichigatake above Gujō and flows 166 km through Gujō-Hachiman, Mino, Seki and Gifu city. It is routinely listed with the Shimanto and the Kakita as one of Japan's three great clear streams, and it is the river of the cormorant fishermen and of the paper-makers of Mino. In December 2015 the FAO designated the upper and middle Nagara — the basin in Gifu, Seki, Mino and Gujō — a Globally Important Agricultural Heritage System under the name <em>Ayu of the Nagara River System</em>, recognising not the fish alone but the whole arrangement of forest, clean water, fishing, paper-making and festivals that keeps them.",
          ja:"長良川は郡上の上の大日ヶ岳に発し、郡上八幡・美濃・関・岐阜を通って166キロを流れる。四万十川・柿田川とともに「日本三大清流」に数えられるのが常で、鵜飼の川であり、美濃の紙漉きの川でもある。2015年12月、国連食糧農業機関（FAO）は長良川の上中流域——岐阜市・関市・美濃市・郡上市の流域——を世界農業遺産「清流長良川の鮎」に認定した。認められたのは鮎そのものだけでなく、森・清らかな水・漁・紙漉き・祭りが一体となってそれを守る仕組みの全体である。",
          zh:"長良川發源於郡上上方的大日岳，流經郡上八幡、美濃、關與岐阜市，全長 166 公里。它常與四萬十川、柿田川並列為「日本三大清流」，是鵜飼漁夫的河，也是美濃紙匠的河。2015 年 12 月，聯合國糧農組織（FAO）將長良川上中游——岐阜市、關市、美濃市、郡上市的流域——認定為世界農業遺產「清流長良川的香魚」；受肯定的不只是魚本身，而是森林、潔淨的水、漁撈、造紙與祭典共同守護牠們的整套體系。" } },
        { t:"grid", cols:3, cells:[
          { k:{en:"Basin population",ja:"流域人口",zh:"流域人口"}, v:"≈860,000",
            d:{en:"People living in the Nagara basin, cited by the GIAHS partnership — a clear river flowing through cities.",ja:"世界農業遺産の推進協議会が示す長良川流域の人口。都市を流れる清流である。",zh:"世界農業遺產推動協議會所引用的長良川流域人口——一條流經城市的清流。"} },
          { k:{en:"Designated",ja:"認定",zh:"認定"}, v:"Dec 2015",
            d:{en:"Globally Important Agricultural Heritage System (FAO). The third conservation plan runs April 2024 – March 2029.",ja:"世界農業遺産（FAO）。第三期保全計画は2024年4月〜2029年3月。",zh:"世界農業遺產（FAO）。第三期保全計畫期間為 2024 年 4 月至 2029 年 3 月。"} },
          { k:{en:"The fish",ja:"魚",zh:"魚"}, v:"Ayu",
            d:{en:"Plecoglossus altivelis, the sweetfish — the prefectural fish, and the catch of the cormorants.",ja:"アユ（香魚）。県の魚であり、鵜が獲る魚である。",zh:"香魚（アユ）——縣魚，也是鸕鶿捕捉的魚。"} }
        ] },
        { t:"note", label:{en:"The estuary barrage",ja:"河口堰",zh:"河口堰"}, text:{
          en:"The Nagara was long described as the last major river on Honshū without a dam on its main stem. The Nagara River Estuary Barrage near its mouth, which began operating in 1995, ended that description and remains one of the most argued-over river works in Japan; its effects on fish migration are still debated.",
          ja:"長良川は長く「本州で本流にダムのない最後の大河」と言われてきた。河口近くの長良川河口堰が1995年に運用を始めたことでその言い方は終わり、河口堰はいまも日本で最も議論を呼ぶ河川事業の一つである。魚の遡上への影響については、なお議論が続いている。",
          zh:"長良川長期被形容為本州最後一條幹流上沒有水壩的大河。河口附近的長良川河口堰於 1995 年開始運作，終結了這個說法，至今仍是日本最具爭議的河川工程之一；其對魚類洄游的影響仍在爭論之中。" } }
      ]
    },

    { t:"section", id:"north",
      title:{ en:"The rivers that run north", ja:"北へ流れる川", zh:"北流之河" }, jp:"庄川 · 宮川 · 高原川",
      body:[
        { t:"p", text:{
          en:"Hida's rivers mostly leave Gifu northwards. The <strong>Shō</strong> rises near Hirugano, passes Shirakawa-gō and enters Toyama Bay; the <strong>Miya</strong> runs through Takayama and Furukawa and becomes the Jinzū in Toyama; the <strong>Takahara</strong> drains Okuhida and Kamioka and joins the Jinzū too. The northward drainage tied Hida commercially to Toyama as much as to Mino, and it carried the consequences of Kamioka's mines downstream — the cadmium behind the itai-itai disease reached the Jinzū basin in Toyama by this route.",
          ja:"飛騨の川の多くは北へ岐阜県を出ていく。<strong>庄川</strong>はひるがの近くに発して白川郷を過ぎ、富山湾に注ぐ。<strong>宮川</strong>は高山と古川を流れ、富山県で神通川となる。<strong>高原川</strong>は奥飛騨と神岡の水を集め、やはり神通川に合わさる。北への流れは飛騨を、美濃と同じくらい富山と商業的に結びつけ、また神岡の鉱山がもたらしたものを下流へ運んだ——イタイイタイ病の原因となったカドミウムは、この道筋で富山の神通川流域に達した。",
          zh:"飛驒的河川大多向北流出岐阜縣。<strong>庄川</strong>發源於蛭野附近，流經白川鄉後注入富山灣；<strong>宮川</strong>流經高山與古川，進入富山縣後稱為神通川；<strong>高原川</strong>匯集奧飛驒與神岡之水，同樣匯入神通川。向北的水系讓飛驒在商業上與富山的聯繫不下於美濃，也把神岡礦山帶來的後果送往下游——造成痛痛病的鎘，正是循此路徑抵達富山的神通川流域。" } },
        { t:"panel", tint:"moss", title:{en:"Two cherry trees and a dam",ja:"二本の桜とダム",zh:"兩棵櫻樹與一座水壩"}, body:[
          { t:"p", text:{
            en:"When the Miboro Dam was built on the upper Shō in the late 1950s, the villages of Shōkawa went under its reservoir, including two temples, Kōrin-ji and Shōren-ji, each with a great Edo-higan cherry more than four hundred years old. In 1960 Takasaki Tatsunosuke, first president of the Electric Power Development Company, persuaded the cherry expert Sasabe Shintarō to attempt what was thought impossible and move them. Both trees were lifted to the lakeshore above the waterline; both still flower there every spring as the <em>Shōkawa-zakura</em>.",
            ja:"1950年代後半、庄川上流に御母衣ダムが築かれると、荘川の集落はダム湖の底に沈むことになった。そのなかに光輪寺と照蓮寺という二つの寺があり、それぞれに樹齢四百年を超えるアズマヒガンの巨木があった。1960年、電源開発株式会社の初代総裁・高碕達之助は、不可能と思われた移植を桜研究家の笹部新太郎に託した。二本は水位より上の湖畔に移され、いまも毎春「荘川桜」として花を咲かせている。",
            zh:"1950 年代後期，庄川上游興建御母衣水壩，莊川的村落將沉入水庫，其中包括光輪寺與照蓮寺兩座寺院，各有一株樹齡四百年以上的東彼岸櫻巨木。1960 年，電源開發公司首任總裁高碕達之助說服櫻花專家笹部新太郎，嘗試當時被認為不可能的移植。兩株巨木被移到水位線以上的湖畔，至今每年春天仍以「莊川櫻」之名開花。" } }
        ] }
      ]
    },

    { t:"section", id:"springs",
      title:{ en:"Springs, wells and a waterfall of sake", ja:"湧水と井戸と酒の滝", zh:"湧泉、水井與酒之瀑" }, jp:"宗祇水 · 自噴水 · 養老",
      body:[
        { t:"defs", items:[
          { term:{en:"Sōgi-sui",ja:"宗祇水",zh:"宗祇水"}, jp:"郡上八幡", def:{
            en:"A spring in Gujō-Hachiman named after the Muromachi-period linked-verse master Iio Sōgi, who is said to have lived beside it. In 1985 it was the first water chosen for the national list of a hundred famous waters. The town's <em>mizubune</em> — stepped stone tanks in which the top basin is for drinking, the next for washing food and the last for washing dishes — are still maintained by residents' associations.",
            ja:"郡上八幡の湧水。室町時代の連歌師・飯尾宗祇がそのほとりに庵を結んだと伝えられることからこの名がある。1985年、名水百選の第一号に選ばれた。町の「水舟」——上の槽は飲み水、次は食べ物を洗う水、最後は器を洗う水とする段々の水槽——は、いまも住民の組合が守っている。",
            zh:"郡上八幡的湧泉，因相傳室町時代的連歌大師飯尾宗祇曾在旁結廬而得名。1985 年成為「名水百選」的第一號。鎮上的「水舟」——分段的石槽，最上層飲用、其次洗食材、最後洗碗盤——至今仍由居民組成的團體維護。"} },
          { term:{en:"The artesian wells of Ōgaki",ja:"大垣の自噴水",zh:"大垣的自流井"}, jp:"水の都", def:{
            en:"Ōgaki sits on an artesian belt where groundwater from the Ibi fan rises under its own pressure; at the Hachiman shrine it comes up from about 125 m below. The city calls itself the capital of water; its springs fed the castle moats and the workshops of the old town.",
            ja:"大垣は揖斐川扇状地からの地下水が自らの圧力で湧き上がる自噴帯の上にある。八幡神社では地下約125メートルから水が噴き出す。市は自らを「水の都」と称し、湧水は城の堀と城下の職人の仕事場を支えた。",
            zh:"大垣位於自流井帶之上，來自揖斐川沖積扇的地下水在自身壓力下湧出；在八幡神社，水從地下約 125 公尺處冒出。該市自稱「水之都」，湧泉滋養了城池的護城河與城下町的工坊。"} },
          { term:{en:"Yōrō Falls",ja:"養老の滝",zh:"養老瀑布"}, jp:"醴泉", def:{
            en:"In 717 Empress Genshō visited Tagi district in Mino, bathed in a spring there, and declared it a <em>reisen</em> — a sweet spring “that nourishes old age”; the era name was changed to Yōrō, “nourishing age”. A later tale, told in medieval collections, has a poor woodcutter find the falls running with sake for his aged father. The word <em>reisen</em> survives as the name of a sake brewed in Yōrō today.",
            ja:"717年（霊亀3年）、元正天皇は美濃国当耆郡に行幸してこの地の泉で身を洗い、「醴泉は美泉なり、もって老を養うべし」として元号を養老と改めた。のちの説話集には、貧しい樵が年老いた父のために、滝から酒が湧くのを見つけたという孝子の話が伝わる。「醴泉」の語は、いま養老で造られる酒の名に残る。",
            zh:"717 年（靈龜 3 年），元正天皇行幸美濃國當耆郡，在當地泉水中沐浴，頒詔稱「醴泉者，美泉也，可以養老」，並將年號改為「養老」。後世的說話集中流傳一則孝子故事：一名貧窮的樵夫為年邁的父親，發現瀑布湧出了酒。「醴泉」一詞，至今仍是養老當地所釀一款日本酒的名字。"} }
        ] }
      ]
    },

    { t:"section", id:"power",
      title:{ en:"Water as power", ja:"動力としての水", zh:"作為動力的水" }, jp:"水力",
      body:[
        { t:"p", text:{
          en:"Steep rivers and heavy snow give Gifu the largest hydroelectric potential of any prefecture — 13,861 GWh a year by the national energy agency's reckoning, of which about 9,312 GWh has been developed. The industry began early. In 1924 Fukuzawa Momosuke, the “electric power king” and son-in-law of Fukuzawa Yukichi, completed the <strong>Ōi Dam</strong> on the Kiso at Ena, the first full-scale dam-type power station in Japan; its methods shaped the dams that followed.",
          ja:"急な川と多い雪は、岐阜県に都道府県で最大の包蔵水力を与えている。資源エネルギー庁の算定で年13,861ギガワット時、うち約9,312ギガワット時が開発済みである。事業は早くから始まった。1924年、「電力王」と呼ばれた福沢諭吉の娘婿・福沢桃介が恵那の木曽川に<strong>大井ダム</strong>を完成させた。日本初の本格的なダム式発電所であり、その工法はのちのダム建設の手本となった。",
          zh:"陡峭的河川與豐沛的降雪，使岐阜縣擁有各都道府縣中最大的水力蘊藏量——依資源能源廳估算每年 13,861 GWh，其中約 9,312 GWh 已經開發。這項產業起步甚早。1924 年，被稱為「電力王」、福澤諭吉女婿的福澤桃介，在惠那的木曾川上完成<strong>大井水壩</strong>——日本第一座真正的壩式發電所，其工法成為後來水壩建設的典範。" } },
        { t:"p", text:{
          en:"The largest reservoir in Japan is also in Gifu. The <strong>Tokuyama Dam</strong> on the upper Ibi, completed in 2008, holds 660 million m³ — about twice the volume of Lake Hamana. Its lake covers the whole inhabited area of the former village of Tokuyama, whose 466 households were moved to new settlements downstream.",
          ja:"日本最大の貯水池も岐阜にある。2008年に完成した揖斐川上流の<strong>徳山ダム</strong>は総貯水容量6億6,000万立方メートル、浜名湖のおよそ二倍である。その湖は旧徳山村の人の住む土地をすべて覆い、村の466戸は下流の新しい集落へ移った。",
          zh:"日本最大的水庫也在岐阜。2008 年竣工的揖斐川上游<strong>德山水壩</strong>，總蓄水量 6 億 6,000 萬立方公尺，約為濱名湖的兩倍。水庫淹沒了舊德山村所有的居住區，村中 466 戶遷往下游的新聚落。" } }
      ]
    },

    { t:"related", items:[
      { href:"chisui.html", why:{ en:"Four centuries of embankments on the lower rivers.", ja:"下流の四百年にわたる堤防の歴史。", zh:"下游四百年的堤防史。" } },
      { href:"ukai.html", why:{ en:"The Nagara at night, with fire and cormorants.", ja:"夜の長良川、かがり火と鵜。", zh:"夜晚的長良川，篝火與鸕鶿。" } },
      { href:"rafting.html", why:{ en:"How the rivers carried timber to Nagoya.", ja:"川はいかに木材を名古屋へ運んだか。", zh:"河川如何把木材運到名古屋。" } },
      { href:"sakeland.html", why:{ en:"The water in Gifu's sake.", ja:"岐阜の酒のなかの水。", zh:"岐阜酒中的水。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- forests */
GIFU.pages["forests"] = {
  kicker: { en: "Land & Water · 03", ja: "風土 · 03", zh: "風土 · 03" },
  title:  { en: "The Forests", ja: "森林", zh: "森林" },
  jp: "木の国・山の国 · 森林率81%",
  lede: {
    en: "Eighty-one per cent of Gifu is forest — 861,169 hectares at the last national count, the fifth-largest forest estate of any prefecture and the second-highest share after Kōchi. About half of it is natural or semi-natural broadleaf and mixed woodland; almost all the rest is planted hinoki and sugi, most of it set out in the two decades after the war and now at or past the age for cutting. The prefecture calls itself <em>ki no kuni, yama no kuni</em>, the land of trees and mountains. This page describes what those forests are made of, who owns them, and what is being done with them.",
    ja: "岐阜県の81%は森林である。最新の国の集計で86万1,169ヘクタール、都道府県で五番目に広く、森林率は高知県に次ぐ二位である。その約半分は天然あるいはそれに近い広葉樹・混交林で、残りのほとんどは植えられた檜と杉であり、その大半は戦後の二十年ほどのあいだに植えられて、いま伐り時を迎え、あるいは過ぎている。県は自らを「木の国・山の国」と呼ぶ。本頁では、その森が何からなり、誰のもので、どう扱われているのかを述べる。",
    zh: "岐阜縣有 81% 是森林——依最新的全國統計為 861,169 公頃，森林面積居各都道府縣第五，森林覆蓋率僅次於高知縣，居全國第二。其中約一半是天然或近天然的闊葉林與混交林；其餘幾乎都是人工種植的檜木與杉木，大多栽於戰後二十年間，如今已到或已過伐期。本縣自稱「木之國、山之國」。本頁說明這些森林由什麼構成、屬於誰，以及人們正如何對待它們。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"What the forest is made of. Top: ownership of all forest — national forest about a fifth, private and public-private about four-fifths. Bottom: the private forest by type — hinoki plantation about 26%, sugi plantation about 16%, natural forest about 52%. Approximate shares from Gifu Prefecture's forestry reports; the remainder is other planted species, bamboo and unstocked land.",
        ja:"森が何からなるか。上：森林全体の所有——国有林が約五分の一、民有林が約五分の四。下：民有林の内訳——檜人工林約26%、杉人工林約16%、天然林約52%。岐阜県の林業資料による概数。残りはその他の植栽樹種・竹林・無立木地などである。",
        zh:"森林由什麼構成。上：全部森林的所有權——國有林約五分之一，民有林約五分之四。下：民有林的類型——檜木人工林約 26%、杉木人工林約 16%、天然林約 52%。數據為岐阜縣林業資料的概數；其餘為其他人工樹種、竹林與無立木地。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var X = 170, W = 560;
        function seg(y, parts) {
          var x = X, out = "";
          parts.forEach(function (p) {
            var w = Math.round(W * p[0] / 100);
            out += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="36" fill="' + p[2] + '" stroke="#B4AC9C"/>';
            if (w > 44) out += '<text x="' + (x + 7) + '" y="' + (y + 16) + '" ' + F + ' font-size="10.5" fill="#201E1B">' + L(p[1]) + '</text>' +
              '<text x="' + (x + 7) + '" y="' + (y + 30) + '" ' + F + ' font-size="10" fill="#55504A">' + p[0] + '%</text>';
            x += w;
          });
          return out;
        }
        var s = '<svg viewBox="0 0 760 250" role="img" aria-label="Composition of Gifu forests">' +
          '<rect x="0.5" y="0.5" width="759" height="249" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"861,169 HA OF FOREST", ja:"森林 86万1,169ha", zh:"森林 861,169 公頃" }) + '</text>' +
          '<text x="30" y="72" ' + F + ' font-size="11" fill="#55504A" font-weight="600" letter-spacing="1">' + L({en:"OWNERSHIP",ja:"所有",zh:"所有權"}) + '</text>' +
          '<text x="30" y="88" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"all forest",ja:"森林全体",zh:"全部森林"}) + '</text>' +
          seg(52, [[21, {en:"national",ja:"国有林",zh:"國有林"}, "#E9ECEE"], [79, {en:"private & public (non-national)",ja:"民有林（公有林を含む）",zh:"民有林（含公有林）"}, "#E0E6DB"]]) +
          '<text x="30" y="136" ' + F + ' font-size="11" fill="#55504A" font-weight="600" letter-spacing="1">' + L({en:"BY TYPE",ja:"林種",zh:"林種"}) + '</text>' +
          '<text x="30" y="152" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"non-national forest",ja:"民有林",zh:"民有林"}) + '</text>' +
          seg(116, [[26, {en:"hinoki planted",ja:"檜人工林",zh:"檜木人工林"}, "#E7DFD2"], [16, {en:"sugi planted",ja:"杉人工林",zh:"杉木人工林"}, "#EDE5D2"], [6, {en:"other",ja:"他",zh:"其他"}, "#F0EDE4"], [52, {en:"natural forest",ja:"天然林",zh:"天然林"}, "#E0E6DB"]]) +
          '<text x="30" y="194" ' + F + ' font-size="10" fill="#55504A">' + L({en:"Planted-forest growing stock, FY2019: 100.57 million m³ — hinoki 51.23 million, sugi 45.92 million.",ja:"人工林の蓄積（2019年度）：1億57万m³——うち檜5,123万、杉4,592万。",zh:"人工林蓄積量（2019 年度）：1 億 57 萬 m³——其中檜木 5,123 萬、杉木 4,592 萬。"}) + '</text>' +
          '<text x="30" y="214" ' + F + ' font-size="10" fill="#55504A">' + L({en:"Hinoki resource: second-largest in Japan; about 210,000 ha planted.",ja:"檜の資源量は全国二位、植栽面積は約21万ha。",zh:"檜木資源量居全國第二，種植面積約 21 萬公頃。"}) + '</text>' +
          '<text x="30" y="238" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Shares rounded; sources give slightly different splits depending on year and definition.",ja:"割合は概数。年と定義により資料間で多少異なる。",zh:"比例為約數；不同年份與定義下，各資料的數值略有出入。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"numbers",
      title:{ en:"The forest in figures", ja:"数字で見る森", zh:"數字中的森林" }, jp:"概数",
      body:[
        { t:"grid", cols:4, cells:[
          { k:{en:"Forest area",ja:"森林面積",zh:"森林面積"}, v:"861,169 ha", d:{en:"At 31 March 2022 (Forestry Agency). Fifth-largest of the 47 prefectures.",ja:"2022年3月31日現在（林野庁）。都道府県で五番目。",zh:"2022 年 3 月 31 日（林野廳）。在 47 都道府縣中居第五。"} },
          { k:{en:"Forest rate",ja:"森林率",zh:"森林覆蓋率"}, v:"81 %", d:{en:"Second only to Kōchi. Plains are about 12% of the land.",ja:"高知県に次ぐ二位。平野は県土の約12%。",zh:"僅次於高知縣。平原約占土地的 12%。"} },
          { k:{en:"Hinoki",ja:"檜の資源",zh:"檜木資源"}, v:"2nd", d:{en:"Hinoki growing stock is the second-largest in Japan; planted area about 210,000 ha.",ja:"檜の蓄積は全国二位。植栽面積は約21万ヘクタール。",zh:"檜木蓄積量居全國第二；種植面積約 21 萬公頃。"} },
          { k:{en:"Plantation age",ja:"人工林の齢級",zh:"人工林林齡"}, v:"56–60 yrs", d:{en:"The most common age class of the private planted forest — the post-war plantings, now past the usual age for felling.",ja:"民有人工林で最も多い齢級（第12齢級）。戦後の植林で、通常の伐期をすでに過ぎている。",zh:"民有人工林中最多的林齡級（第 12 齡級）——戰後所植，如今已超過一般伐期。"} }
        ] }
      ]
    },

    { t:"section", id:"natural",
      title:{ en:"The natural forest", ja:"天然の森", zh:"天然林" }, jp:"天然林",
      body:[
        { t:"p", text:{
          en:"Half of the private forest, and much of the national forest, is natural or regrown woodland whose composition follows altitude. On the Nōbi Plain's fringes and the low hills of Mino it is evergreen broadleaf — oaks, <em>shii</em> and camphor — of which the forest on Kinkazan, protected for centuries as a closed mountain of the Owari domain, is the best-known survivor. Above a few hundred metres deciduous forest takes over: beech and <em>mizunara</em> oak on the Ryōhaku mountains around Hakusan and across the Hida highlands, the timber of Hida's furniture makers. Above that are subalpine conifers, and on the highest ridges of the Alps and Norikura, creeping pine and alpine meadow, the home of the rock ptarmigan.",
          ja:"民有林の半分と国有林の多くは、天然あるいは再生した森で、その構成は標高に従う。濃尾平野の縁と美濃の低い丘では常緑広葉樹——カシ類・シイ・クスノキ——の森で、何世紀にもわたり尾張藩の御留山として守られた金華山の森が、その最もよく知られた名残である。数百メートルより上では落葉樹林に替わり、白山を囲む両白山地や飛騨高地一帯にはブナやミズナラが広がる。飛騨の家具職人の材である。その上には亜高山帯の針葉樹林があり、アルプスや乗鞍の最も高い稜線にはハイマツと高山の草原が広がる。ライチョウの棲みかである。",
          zh:"民有林的一半與國有林的大部分，是天然林或再生林，其組成隨海拔而變。在濃尾平原邊緣與美濃低丘，是常綠闊葉林——櫟類、米櫧與樟樹——其中金華山的森林數百年來作為尾張藩的禁山受到保護，是最著名的遺存。海拔數百公尺以上改為落葉林：白山周邊的兩白山地與飛驒高地遍布山毛櫸與水楢——飛驒家具匠人的木料。再往上是亞高山針葉林；在阿爾卑斯與乘鞍最高的稜線上，則是偃松與高山草原，雷鳥的棲地。" } },
        { t:"p", text:{
          en:"The most famous natural forest in the prefecture is a conifer stand. In Kashimo, in the north of Nakatsugawa, the <strong>Kiso Hinoki Reserve Forest</strong> of the Ura-Kiso national forest covers about 730 hectares between 820 and 1,820 metres. Its standing volume is about 76% hinoki and 23% sawara; the trees are three to four hundred years old, 50–80 cm across at breast height, and about 25 metres tall on average. It regenerated naturally after heavy felling in the early Edo period and survived under the Owari domain's protection. See <a href=\"hinoki.html\">Hinoki &amp; the Kiso Five</a>.",
          ja:"県で最も名高い天然林は針葉樹の森である。中津川市北部の加子母にある裏木曽国有林の<strong>木曽ヒノキ備林</strong>は、標高820〜1,820メートルに約730ヘクタールを占める。蓄積の約76%が檜、23%がサワラで、樹齢は三百〜四百年、胸高直径50〜80センチ、平均樹高約25メートルである。江戸時代初めの大量伐採ののちに自然に更新し、尾張藩の保護のもとで生き延びた。<a href=\"hinoki.html\">檜と木曽五木</a>を参照。",
          zh:"縣內最著名的天然林是一片針葉林。在中津川市北部的加子母，裏木曾國有林中的<strong>木曾檜備林</strong>位於海拔 820 至 1,820 公尺，面積約 730 公頃。其蓄積約 76% 為檜木、23% 為花柏；樹齡三到四百年，胸高直徑 50–80 公分，平均樹高約 25 公尺。它在江戶初期大量砍伐之後自然更新，並在尾張藩的保護下存活下來。見<a href=\"hinoki.html\">檜木與木曾五木</a>。" } }
      ]
    },

    { t:"section", id:"planted",
      title:{ en:"The planted forest", ja:"植えた森", zh:"人工林" }, jp:"拡大造林",
      body:[
        { t:"p", text:{
          en:"The other half is a crop. After 1945 Japan's forests had been cut hard for the war and for reconstruction, timber was scarce and expensive, and national policy encouraged owners to clear broadleaf woodland and replant it with fast-growing conifers. In Gifu that meant hinoki, which suits the dry, poor ridge soils of Tōnō and Mino, and sugi in the wetter valleys. Most of the planting was done in the 1950s and 1960s, which is why the commonest age class of the private plantation today is 56 to 60 years.",
          ja:"残りの半分は作物である。1945年以後、日本の森は戦争と復興のために激しく伐られ、木材は乏しく高価で、国の政策は所有者に広葉樹林を伐り払って成長の早い針葉樹を植えるよう促した。岐阜ではそれは、東濃や美濃の乾いた痩せた尾根に合う檜と、湿った谷に合う杉を意味した。植林の大半は1950年代と1960年代に行われ、そのため民有人工林でいま最も多い齢級は56〜60年生である。",
          zh:"另一半是一種作物。1945 年後，日本的森林因戰爭與重建遭到大量砍伐，木材稀少昂貴，國家政策鼓勵林主砍除闊葉林，改植速生針葉樹。在岐阜，這意味著適合東濃與美濃乾燥貧瘠稜線土壤的檜木，以及適合潮濕谷地的杉木。植林大多在 1950 與 1960 年代完成，因此民有人工林如今最常見的林齡是 56 至 60 年。" } },
        { t:"p", text:{
          en:"The trees matured into a different economy. Timber imports were fully liberalised by 1964, the yen rose, and domestic timber prices fell for decades; the people who planted the forests aged and their children left the villages. Many stands went unthinned. The result is a large, maturing resource — Gifu's planted forests held about 100 million m³ of timber in 2019 and grow by more each year — together with a shortage of the labour and demand needed to harvest and replant it.",
          ja:"木々は、異なる経済のなかで育ち上がった。1964年までに木材輸入は全面的に自由化され、円は高くなり、国産材の価格は何十年も下がり続けた。森を植えた人々は年老い、子どもたちは村を離れた。間伐されないままの林も多い。その結果が、大きく成熟しつつある資源——岐阜の人工林は2019年に約1億立方メートルの木を蓄え、毎年さらに増えている——と、それを伐り、植え直すための人手と需要の不足である。",
          zh:"這些樹長成時，經濟已經不同了。木材進口於 1964 年前全面自由化，日圓升值，國產木材價格連續數十年下跌；種下這些森林的人逐漸老去，子女離開了村子。許多林分從未疏伐。結果是一筆龐大且日益成熟的資源——2019 年岐阜人工林蓄積約 1 億立方公尺木材，且每年還在增加——同時卻缺乏採伐與再造林所需的人力與需求。" } },
        { t:"note", label:{en:"A hundred-year plan",ja:"百年の計",zh:"百年之計"}, text:{
          en:"Gifu's answer, set out in its forest-making basic plans, is to sort every private forest in the prefecture into one of four intended futures — forests for timber production, forests for environmental protection, forests for landscape and tourism, and forests that protect settlements — and to manage each for its purpose over the next century. The fourth plan covers the fiscal years 2022 to 2026.",
          ja:"岐阜県の答えは、森林づくり基本計画に示されている。県内のすべての民有林を、四つの目指す姿——木材生産林、環境保全林、観光景観林、生活保全林——のいずれかに振り分け、それぞれを今後百年の目的に沿って管理するというものである。第四期計画は2022〜2026年度を対象とする。",
          zh:"岐阜縣的對策寫在其「森林營造基本計畫」中：把縣內所有民有林分入四種預定的未來樣貌之一——木材生產林、環境保全林、觀光景觀林，以及保護聚落的生活保全林——並依各自目的在未來一百年間經營。第四期計畫涵蓋 2022 至 2026 年度。" } }
      ]
    },

    { t:"section", id:"paying",
      title:{ en:"Who pays for a forest", ja:"森の費用を誰が払うか", zh:"誰為森林付錢" }, jp:"森林・環境税",
      body:[
        { t:"p", text:{
          en:"Since April 2012 residents of Gifu have paid a <strong>Clear-Stream Land Gifu Forest and Environment Tax</strong> of ¥1,000 a year, added to the per-capita prefectural inhabitants' tax; companies pay between ¥2,000 and ¥80,000 according to their capital. The money funds thinning and forest restoration, river and biodiversity projects, and — characteristically — wooden toys and teaching materials for nurseries and schools. The tax has been renewed in five-year terms, and since fiscal 2024 residents also pay the national Forest Environment Tax of the same amount.",
          ja:"2012年4月から、岐阜県民は県民税均等割に上乗せする形で年1,000円の<strong>清流の国ぎふ森林・環境税</strong>を納めている。法人は資本金等に応じて年2,000円から80,000円である。税収は間伐や森林の再生、川づくりや生物多様性の事業、そしていかにも岐阜らしく、保育園や学校のための木のおもちゃや木製教材に充てられる。税は五年ごとに延長され、2024年度からは同額の国の森林環境税もあわせて課されている。",
          zh:"自 2012 年 4 月起，岐阜縣民每年繳納 1,000 日圓的<strong>清流之國岐阜森林環境稅</strong>，附加於縣民稅的均等部分；法人則依資本額每年繳納 2,000 至 80,000 日圓。稅收用於疏伐與森林復育、河川與生物多樣性計畫，以及——很有岐阜特色地——為幼兒園與學校添置木製玩具和教材。此稅以五年為期延長，且自 2024 年度起，居民另須繳納同額的國稅「森林環境稅」。" } }
      ]
    },

    { t:"section", id:"learning",
      title:{ en:"A school for the forest", ja:"森の学校", zh:"森林的學校" }, jp:"森林文化アカデミー",
      body:[
        { t:"p", text:{
          en:"In 2001 the prefecture turned its forestry college, founded in 1971, into the <strong>Gifu Academy of Forest Science and Culture</strong> in Mino city, described as the first institution in Japan to teach forestry, timber construction, woodworking and environmental education together. It runs a two-year course for school-leavers and a course for adults over twenty-two who are changing careers into the forest and wood trades, and its graduates now work across Gifu's sawmills, workshops and forest cooperatives.",
          ja:"2001年、県は1971年開校の林業短期大学校を、美濃市の<strong>岐阜県立森林文化アカデミー</strong>へと改めた。林業・木造建築・木工・環境教育をあわせて教える日本初の教育機関とされる。高校卒業程度を対象とする二年課程と、森と木の仕事へ転職する22歳以上の社会人のための課程を持ち、卒業生はいま県内の製材所・工房・森林組合で働いている。",
          zh:"2001 年，縣府把 1971 年創立的林業短期大學校改制為美濃市的<strong>岐阜縣立森林文化學院</strong>，被稱為日本第一所同時教授林業、木構造建築、木工與環境教育的機構。學院設有面向高中畢業生的兩年制課程，以及為 22 歲以上、轉行投入森林與木材產業的社會人士開設的課程；畢業生如今分布在縣內的製材廠、工坊與森林組合。" } }
      ]
    },

    { t:"related", items:[
      { href:"hinoki.html", why:{ en:"The tree at the centre of it all.", ja:"すべての中心にある木。", zh:"一切中心的那棵樹。" } },
      { href:"logging.html", why:{ en:"How the forest has been cut, from the Owari foresters to today's harvesters.", ja:"尾張藩の山守から今日の高性能林業機械まで、森はどう伐られてきたか。", zh:"從尾張藩的山林官到今日的高性能伐木機，森林如何被採伐。" } },
      { href:"furniture.html", why:{ en:"Where the beech and oak of Hida go.", ja:"飛騨のブナとナラの行き先。", zh:"飛驒的山毛櫸與水楢去了哪裡。" } },
      { href:"future.html", why:{ en:"What a maturing forest and a shrinking population mean together.", ja:"成熟する森と縮む人口が、あわせて意味すること。", zh:"日益成熟的森林與不斷縮減的人口，合起來意味著什麼。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- mountains */
GIFU.pages["mountains"] = {
  kicker: { en: "Land & Water · 04", ja: "風土 · 04", zh: "風土 · 04" },
  title:  { en: "Sacred Peaks", ja: "霊峰と山岳信仰", zh: "靈峰與山岳信仰" },
  jp: "白山 · 御嶽山 · 乗鞍岳 · 笠ヶ岳",
  lede: {
    en: "Before they were scenery, Gifu's high mountains were gods, or the homes of gods. Hakusan to the west, Ontake to the south-east and Norikura between them were climbed first by ascetics and then by crowds of lay pilgrims organised into confraternities; villages grew up to guide and lodge them, and routes were cut that the modern hiker still uses. This page follows the three great peaks of faith on the Gifu side, the monk who re-opened Kasagatake and went on to climb Yarigatake, and what happened when religion gave way to recreation.",
    ja: "景色になる前、岐阜の高い山々は神であり、あるいは神の住まいであった。西の白山、南東の御嶽山、そのあいだの乗鞍岳は、まず行者に、ついで講に組織された多くの在家の登拝者に登られた。彼らを導き泊める村が生まれ、いまの登山者が使う道が拓かれた。本頁では、岐阜側から見た三つの信仰の山、笠ヶ岳を再興して槍ヶ岳へ向かった僧、そして信仰がレクリエーションに道を譲ったときに起きたことを辿る。",
    zh: "在成為風景之前，岐阜的高山是神明，或是神明的居所。西方的白山、東南的御嶽山，以及位於兩者之間的乘鞍岳，先由修行者登臨，再由組成「講」的大批在家信徒參拜登頂；為引導與接待他們，村落應運而生，開闢出的山徑至今仍為登山者所用。本頁從岐阜這一側，追索三座信仰之山、那位重開笠岳並進而登上槍岳的僧人，以及信仰讓位給休閒娛樂時所發生的事。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The four peaks of this page, as heights. Ontake and Norikura are volcanoes; Hakusan is a volcano too, on the Ishikawa border; Kasagatake is a granite and volcanic-rock peak in the Hida range. The heights are the summits; the Gifu–Nagano and Gifu–Ishikawa borders pass over or close to each.",
        ja:"本頁の四つの山を高さで並べる。御嶽山と乗鞍岳は火山で、石川県境の白山も火山である。笠ヶ岳は飛騨山脈の峰。高さは山頂の値で、岐阜と長野・石川の県境はいずれかの山頂を通るか、そのすぐ近くを通る。",
        zh:"本頁四座山峰的高度比較。御嶽山與乘鞍岳是火山；位於石川縣界的白山也是火山；笠岳則是飛驒山脈中的山峰。高度為山頂數值；岐阜與長野、石川的縣界通過或緊鄰各山頂。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var peaks = [
          [120, 2702, {en:"Hakusan",ja:"白山",zh:"白山"}, {en:"west · Ishikawa border",ja:"西・石川県境",zh:"西・石川縣界"}],
          [300, 2898, {en:"Kasagatake",ja:"笠ヶ岳",zh:"笠岳"}, {en:"north-east · Hida range",ja:"北東・飛騨山脈",zh:"東北・飛驒山脈"}],
          [480, 3026, {en:"Norikura",ja:"乗鞍岳",zh:"乘鞍岳"}, {en:"east · Nagano border",ja:"東・長野県境",zh:"東・長野縣界"}],
          [650, 3067, {en:"Ontake",ja:"御嶽山",zh:"御嶽山"}, {en:"south-east · Nagano border",ja:"南東・長野県境",zh:"東南・長野縣界"}]
        ];
        function y(m) { return 260 - m * 0.066; }
        var s = '<svg viewBox="0 0 760 310" role="img" aria-label="Heights of four sacred peaks">' +
          '<rect x="0.5" y="0.5" width="759" height="309" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FOUR PEAKS OF FAITH", ja:"信仰の四峰", zh:"四座信仰之山" }) + '</text>';
        [1000, 2000, 3000].forEach(function (m) {
          s += '<line x1="40" y1="' + y(m) + '" x2="730" y2="' + y(m) + '" stroke="#E1DCD2" stroke-width="1"/>' +
               '<text x="36" y="' + (y(m) + 4) + '" text-anchor="end" ' + F + ' font-size="9" fill="#8B857C">' + m + '</text>';
        });
        s += '<line x1="40" y1="260" x2="730" y2="260" stroke="#B4AC9C" stroke-width="1"/>';
        peaks.forEach(function (p) {
          var top = y(p[1]);
          s += '<path d="M' + (p[0] - 70) + ' 260 L' + p[0] + ' ' + top.toFixed(1) + ' L' + (p[0] + 70) + ' 260 Z" fill="#E6E4E0" stroke="#8B857C" stroke-width="1"/>' +
               '<text x="' + p[0] + '" y="' + (top - 22).toFixed(1) + '" text-anchor="middle" ' + F + ' font-size="11.5" fill="#201E1B" font-weight="600">' + L(p[2]) + '</text>' +
               '<text x="' + p[0] + '" y="' + (top - 8).toFixed(1) + '" text-anchor="middle" ' + F + ' font-size="10.5" fill="#55504A">' + p[1].toLocaleString("en-US") + ' m</text>' +
               '<text x="' + p[0] + '" y="280" text-anchor="middle" ' + F + ' font-size="9.5" fill="#8B857C">' + L(p[3]) + '</text>';
        });
        s += '<text x="40" y="302" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Heights to scale; widths and positions schematic.",ja:"高さは比例、幅と位置は模式。",zh:"高度按比例；寬度與位置為示意。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"hakusan",
      title:{ en:"Hakusan and the Mino road", ja:"白山と美濃の道", zh:"白山與美濃之道" }, jp:"美濃馬場 · 美濃禅定道",
      body:[
        { t:"p", text:{
          en:"Hakusan, 2,702 m, on the Ishikawa border, is counted with Fuji and Tateyama among Japan's three sacred mountains. Tradition credits its opening to the monk Taichō of Echizen in 717, and three bases (<em>baba</em>) grew up to serve its pilgrims — in Kaga, in Echizen and in Mino. The Mino base was <strong>Nagataki</strong>, in the upper Nagara valley at what is now Shirotori in Gujō. Founded, by the same tradition, in 717, it became the temple-shrine complex of Hakusan Chūgū Nagataki-dera, and by the ninth century the start of the Mino pilgrim road (美濃禅定道) to the summit, about 40 km long. In its heyday more than half of the Hakusan shrines in Japan were said to belong to the Nagataki line.",
          ja:"石川県境の白山（2,702m）は、富士山・立山とともに日本三霊山に数えられる。越前の僧・泰澄が717年（養老元年）に開いたと伝えられ、登拝者のために三つの拠点——馬場——が生まれた。加賀、越前、そして美濃である。美濃の馬場は、長良川上流、いまの郡上市白鳥町の<strong>長滝</strong>であった。同じ伝承によれば717年の創建で、白山中宮長滝寺という神仏一体の大寺となり、九世紀には山頂へ至る約40キロの美濃禅定道の起点となった。隆盛期には、全国の白山神社の半数以上が長滝の系統に属したという。",
          zh:"位於石川縣界的白山（2,702 公尺）與富士山、立山並列為日本三靈山。相傳由越前僧人泰澄於 717 年開山，並為參拜者形成三處據點——「馬場」：加賀、越前與美濃。美濃馬場位於長良川上游、今郡上市白鳥町的<strong>長瀧</strong>。依同一傳說，它創建於 717 年，後成為神佛合一的大寺「白山中宮長瀧寺」，並在九世紀成為通往山頂、全長約 40 公里的美濃禪定道起點。全盛時期，據說日本半數以上的白山神社屬於長瀧一系。" } },
        { t:"p", text:{
          en:"Halfway up the road lies <strong>Itoshiro</strong>, whose people served the Hakusan Chūkyo shrine as its hereditary attendants and as <em>oshi</em> — guides and innkeepers who in summer led pilgrims up the mountain and in winter travelled the country distributing talismans. Through the Edo period the village belonged to no domain, and its men were permitted surnames and swords. Behind the shrine stands the <strong>Itoshiro Ōsugi</strong>, a cedar about 24 m high and 14 m round, estimated at more than 1,800 years old and the only tree in Gifu designated a Special Natural Monument.",
          ja:"道の中ほどに<strong>石徹白</strong>がある。住民は白山中居神社に世襲で仕える社人であり、また御師——夏は登拝者を山へ導いて泊め、冬は全国を回って御札を配る人々——でもあった。江戸時代を通じて村はいずれの藩にも属さず、男たちは名字帯刀を許されていた。神社の奥には<strong>石徹白の大杉</strong>が立つ。樹高約24メートル、幹回り約14メートル、推定樹齢1,800年余り。岐阜県で唯一、国の特別天然記念物に指定された木である。",
          zh:"山道中段是<strong>石徹白</strong>。當地居民世代擔任白山中居神社的社人，也是「御師」——夏季引導並接待參拜者登山，冬季則走遍全國分送神符。整個江戶時代，這個村子不屬於任何一藩，男子獲准擁有姓氏與佩刀。神社後方矗立著<strong>石徹白大杉</strong>，樹高約 24 公尺、幹圍約 14 公尺，推估樹齡逾 1,800 年，是岐阜縣唯一被指定為國家特別天然紀念物的樹木。" } }
      ]
    },

    { t:"section", id:"ontake",
      title:{ en:"Ontake and the confraternities", ja:"御嶽山と講", zh:"御嶽山與講社" }, jp:"御嶽講",
      body:[
        { t:"p", text:{
          en:"Ontake, 3,067 m, stands on the Nagano border above Gero. Until the late eighteenth century only those who had completed a hundred days of strict purification could climb it. In 1785 the ascetic Kakumei, from Owari, opened the Kurosawa route to lay pilgrims who had kept only a light fast, and in 1792 Fukan opened the Ōtaki route; both are on the Nagano side, but the pilgrims came overwhelmingly from Owari and Mino. Organised in <em>Ontake-kō</em> — neighbourhood confraternities that saved together and climbed together in white — they left thousands of stone monuments to their dead leaders on the mountain's flanks. On the Gifu side, the route from Nigorigō on the Gero side of the mountain served the same traffic.",
          ja:"御嶽山（3,067m）は下呂の上、長野県境にそびえる。十八世紀後半まで、百日の重い精進を終えた者しか登ることを許されなかった。1785年（天明5年）、尾張の行者・覚明が軽い精進のみの在家の登拝者に黒沢口を開き、1792年には普寛が王滝口を開いた。いずれも長野側の道だが、登拝者の多くは尾張と美濃から来た。彼らは「御嶽講」——ともに積み立て、白装束でともに登る町内の講——に組織され、山腹に亡き先達を祀る数千の霊神碑を残した。岐阜側では、下呂側の濁河から登る道が同じ人々を迎えた。",
          zh:"御嶽山（3,067 公尺）位於下呂上方的長野縣界。直到十八世紀後期，只有完成百日嚴格齋戒者才准登山。1785 年（天明 5 年），尾張出身的修行者覺明為僅行輕度齋戒的在家信徒開闢了黑澤口；1792 年普寬又開闢了王瀧口。兩條路都在長野一側，但參拜者絕大多數來自尾張與美濃。他們組成「御嶽講」——以町內為單位共同儲蓄、身著白衣一同登山的講社——並在山腰留下數以千計紀念已故領隊的「靈神碑」。在岐阜一側，從下呂方面的濁河登山的路線，也迎接著同樣的人潮。" } },
        { t:"note", label:{en:"27 September 2014",ja:"2014年9月27日",zh:"2014 年 9 月 27 日"}, text:{
          en:"At 11:52 on a Saturday in the autumn-leaf season, a phreatic eruption at the summit killed 58 people; five are still missing. It was a small eruption by volume and the deadliest volcanic disaster in post-war Japan, because it happened where and when the most people were on the mountain.",
          ja:"紅葉の季節の土曜日、11時52分に山頂で水蒸気噴火が起き、58人が亡くなった。5人はいまも行方不明である。噴出量としては小規模な噴火だったが、最も多くの人が山にいる場所と時刻に起きたため、戦後日本で最悪の火山災害となった。",
          zh:"那是紅葉季節的一個星期六，11 時 52 分，山頂發生蒸汽爆發，造成 58 人死亡，另有 5 人至今下落不明。以噴出量而言規模不大，卻因發生在山上人數最多的地點與時刻，成為日本戰後最嚴重的火山災害。" } }
      ]
    },

    { t:"section", id:"norikura",
      title:{ en:"Norikura: a road to 2,702 metres", ja:"乗鞍岳——標高2,702メートルへの道", zh:"乘鞍岳——通往 2,702 公尺的路" }, jp:"畳平",
      body:[
        { t:"p", text:{
          en:"Norikura, 3,026 m at its highest point, Kengamine, was worshipped as a whole — the mountain itself as the body of the god — with the inner shrine of Norikura Hongū on the summit and a middle shrine at Tatamidaira. In 1973 a toll road, the Norikura Skyline, was completed from the Hida side to Tatamidaira at 2,702 m, the highest point reached by a road in Japan. Thirty years of traffic followed; from 15 May 2003 the road was made a free prefectural road and closed to private cars, and since then it has been open only to buses, taxis and bicycles in season. The University of Tokyo has run a cosmic-ray observatory on the mountain since 1953.",
          ja:"乗鞍岳は最高点の剣ヶ峰で3,026メートル。山全体が御神体として崇められ、山頂に乗鞍本宮の奥宮、畳平に中之宮が置かれた。1973年、飛騨側から標高2,702メートルの畳平へ至る有料道路・乗鞍スカイラインが完成した。日本で道路が到達する最も高い地点である。三十年の車の往来ののち、2003年5月15日から道は無料の県道となってマイカーの通行が禁じられ、以後はシーズン中のバス・タクシー・自転車だけが通れる。東京大学は1953年からこの山で宇宙線観測所を運営している。",
          zh:"乘鞍岳最高點劍峰為 3,026 公尺，整座山被當作神體崇拜：山頂設有乘鞍本宮的奧宮，疊平設有中之宮。1973 年，從飛驒一側通往海拔 2,702 公尺疊平的收費道路「乘鞍天際線」完工，那是日本道路所能到達的最高點。經歷三十年的車流後，自 2003 年 5 月 15 日起，道路改為免費縣道並禁止私家車通行，此後只在開放季節供巴士、計程車與自行車通行。東京大學自 1953 年起在此山經營宇宙線觀測所。" } }
      ]
    },

    { t:"section", id:"banryu",
      title:{ en:"Kasagatake and the monk who climbed Yarigatake", ja:"笠ヶ岳と槍ヶ岳を開いた僧", zh:"笠岳與登上槍岳的僧人" }, jp:"円空 · 播隆",
      body:[
        { t:"p", text:{
          en:"Kasagatake, 2,898 m, above Okuhida, is said to have been first climbed by the wandering sculptor-monk Enkū in the seventeenth century, after which its trail fell out of use. In 1823 the Pure Land monk <strong>Banryū</strong>, working with villagers on the Hida side, cleared the route and reached the summit with a party of believers. There they saw their own shadows ringed with light on the clouds — a Brocken spectre, which they took for the Buddha Amida descending — and beyond it the spire of Yarigatake. Banryū resolved to climb it, and on the 20th day of the 7th month of 1828 he did, the first recorded ascent of the peak now crowded every summer.",
          ja:"奥飛騨の上にそびえる笠ヶ岳（2,898m）は、十七世紀に遊行の彫刻僧・円空が初めて登ったとされ、その後は道が荒れて廃れた。1823年（文政6年）、浄土宗の僧<strong>播隆</strong>が飛騨側の村人とともに道を切り拓き、信者の一行と山頂に立った。一行は雲に映る自らの影が光の輪に囲まれるのを見た——ブロッケン現象で、彼らはこれを阿弥陀如来の来迎と受けとめた——そしてその先に槍ヶ岳の穂先を見た。播隆はそこへ登ることを決意し、1828年（文政11年）7月20日（旧暦）に登頂を果たした。いま毎夏人で溢れる峰の、記録に残る最初の登頂である。",
          zh:"位於奧飛驒上方的笠岳（2,898 公尺），相傳在十七世紀由雲遊的雕刻僧圓空首度登頂，此後山路荒廢。1823 年（文政 6 年），淨土宗僧人<strong>播隆</strong>與飛驒一側的村民一同整修山道，率信徒登頂。他們在雲上看見自己的影子被光環圍繞——即布羅肯現象，一行人視之為阿彌陀佛來迎——而在光環之外，是槍岳的尖峰。播隆決心登上它，並於 1828 年（文政 11 年）舊曆 7 月 20 日實現，這是這座如今每年夏天擠滿人的山峰有紀錄以來的首登。" } }
      ]
    },

    { t:"section", id:"after",
      title:{ en:"From pilgrimage to recreation", ja:"登拝から登山へ", zh:"從參拜到登山" }, jp:"近代登山",
      body:[
        { t:"p", text:{
          en:"The confraternities did not disappear, but from the late nineteenth century they were joined and then outnumbered by a different kind of climber: students, alpinists and, after roads and ropeways, day visitors. The routes the pilgrims used became hiking trails; the <em>oshi</em> villages became lodging villages; the rest-huts became mountain huts. Gifu's side of the Alps now draws walkers from all over Japan through Okuhida and Shin-Hotaka, and the prefecture's mountain safety ordinance requires climbers on its designated peaks to file a climbing plan.",
          ja:"講が消えたわけではないが、十九世紀後半からは別の種類の登山者——学生、アルピニスト、そして道路やロープウェイができてからは日帰りの人々——が加わり、やがて数で上回った。登拝者の道は登山道に、御師の村は宿の村に、休み小屋は山小屋になった。岐阜側のアルプスはいま、奥飛騨や新穂高を経て全国から登山者を集め、県の登山安全条例は、指定された山に登る者に登山計画書の提出を求めている。",
          zh:"講社並未消失，但自十九世紀後期起，另一種登山者加入並逐漸超越了他們：學生、登山家，以及道路與纜車開通後的一日遊客。參拜者的山道成了登山步道，御師的村落成了住宿村，休息小屋成了山屋。岐阜這一側的阿爾卑斯如今經由奧飛驒與新穗高吸引全國各地的登山者；縣的登山安全條例要求攀登指定山岳者提交登山計畫書。" } }
      ]
    },

    { t:"related", items:[
      { href:"faith.html", why:{ en:"The shrines and temples at the foot of these mountains.", ja:"これらの山の麓の社寺。", zh:"這些山腳下的神社與寺院。" } },
      { href:"enku.html", why:{ en:"The sculptor-monk who is said to have climbed Kasagatake first.", ja:"笠ヶ岳に最初に登ったとされる彫刻僧。", zh:"相傳最早登上笠岳的雕刻僧。" } },
      { href:"onsen.html", why:{ en:"The hot springs the same volcanoes feed.", ja:"同じ火山が育む温泉。", zh:"同樣的火山所滋養的溫泉。" } },
      { href:"wildlife.html", why:{ en:"The rock ptarmigan of Norikura and the alpine plants.", ja:"乗鞍のライチョウと高山植物。", zh:"乘鞍的雷鳥與高山植物。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- onsen */
GIFU.pages["onsen"] = {
  kicker: { en: "Land & Water · 05", ja: "風土 · 05", zh: "風土 · 05" },
  title:  { en: "Hot Springs", ja: "温泉", zh: "溫泉" },
  jp: "下呂 · 奥飛騨 · 天下の三名泉",
  lede: {
    en: "The same volcanic ground that raised Ontake and Norikura heats the water under Hida. Gifu's two great spa districts sit on either side of the old province: Gero in the south, on the Hida River, named by a seventeenth-century scholar as one of the three finest springs in Japan; and Okuhida in the north-east, five hot-spring villages strung along the valleys under the Alps. This page describes both, the legends attached to their discovery, and how they connect to the rest of this book — through hinoki bathtubs, the Hida road and the pilgrims who once came down from the mountains.",
    ja: "御嶽山や乗鞍岳を押し上げた同じ火山の大地が、飛騨の地下の水を温めている。岐阜の二大温泉地は旧飛騨国の両端にある。南の飛騨川沿いには、十七世紀の学者が日本三名泉の一つに数えた下呂。北東にはアルプスの下の谷筋に五つの温泉地が連なる奥飛騨。本頁では両者と、その発見にまつわる伝説、そして本書のほかの部分——檜の湯船、飛騨街道、山から下りてきた登拝者たち——との結びつきを述べる。",
    zh: "托起御嶽山與乘鞍岳的同一片火山地層，也加熱著飛驒地底的水。岐阜兩大溫泉區分處舊飛驒國的兩端：南方飛驒川畔的下呂——被十七世紀一位學者列為日本三名泉之一；東北方則是奧飛驒，五座溫泉村沿著阿爾卑斯山下的溪谷串連。本頁介紹這兩處溫泉、其發現傳說，以及它們如何與本書其他部分相連——透過檜木浴槽、飛驒街道，以及昔日從山上下來的參拜者。"
  },
  body: [
    { t:"section", id:"gero",
      title:{ en:"Gero: one of the three famous springs", ja:"下呂——天下の三名泉", zh:"下呂——天下三名泉" }, jp:"下呂温泉",
      body:[
        { t:"quote",
          text:{ en:"Of the many hot springs in our provinces, the most celebrated are three: Arima in Settsu, Kusatsu in Shimotsuke, and Yushima in Hida.",
                 ja:"我が国の諸州に温泉多し。其の最も著しきは、摂津の有馬、下野の草津、飛騨の湯島、是の三処なり。",
                 zh:"我國諸州多有溫泉，其最著者，攝津之有馬、下野之草津、飛驒之湯島，是三處也。" },
          cite:{ en:"Hayashi Razan (1583–1657), in his poetry collection — the source of the phrase “three famous springs”",
                 ja:"林羅山（1583〜1657）の詩集より——「天下の三名泉」の出典",
                 zh:"林羅山（1583–1657）詩集——「天下三名泉」一語的出處" } },
        { t:"p", text:{
          en:"“Yushima of Hida” is Gero. The Confucian scholar Hayashi Razan, adviser to the first Tokugawa shoguns, set it beside Arima and Kusatsu, and the ranking has been the town's calling card ever since. The water is an alkaline simple spring, with source temperatures up to 84 °C and a pH above 9 — the slippery, soap-like feel that gives alkaline springs their reputation as “beauty baths”. The Zen monk-poet Banri Shūku recorded bathing here in 1489 and again in 1491.",
          ja:"「飛騨の湯島」とは下呂のことである。徳川初期の将軍に仕えた儒学者・林羅山がこれを有馬・草津と並べ、以来この格付けが町の看板となってきた。湯はアルカリ性単純温泉で、源泉温度は最高84℃、pHは9を超える。アルカリ性の湯が「美人の湯」と呼ばれる所以の、石鹸のようななめらかな肌触りである。詩僧・万里集九は1489年と1491年にここで湯に浸かったと記している。",
          zh:"「飛驒之湯島」即是下呂。為德川初期將軍擔任顧問的儒學者林羅山，把它與有馬、草津並列，此後這個排名一直是當地的招牌。泉質為鹼性單純溫泉，源泉溫度最高 84 °C，pH 值超過 9——鹼性泉那種如肥皂般滑溜的觸感，正是其「美人湯」美名的由來。詩僧萬里集九記載他曾於 1489 年與 1491 年在此入浴。" } },
        { t:"p", text:{
          en:"The town's founding story is the <strong>legend of the white heron</strong>. The spring is said to have flowed first near the summit of Mount Yugamine above the town, and to have stopped suddenly in 1265. Soon after, a white heron was seen returning again and again to one spot on the bed of the Hida River; villagers found the hot water there, and the heron flew off to a pine on the hillside, where a statue of Yakushi, the healing Buddha, was discovered. The Zen temple Onsen-ji, founded in 1671, enshrines that Yakushi above the town, and the spring still rises in the river flats at its centre.",
          ja:"町の由来を語るのが<strong>白鷺伝説</strong>である。湯はもともと町の背後の湯ヶ峰の頂上近くに湧いていたが、1265年（文永2年）に突然止まったという。まもなく一羽の白鷺が飛騨川の河原の一か所へ何度も舞い降りるのが見られ、村人がそこで湯を見つけた。白鷺は山腹の松へ飛び去り、そこで薬師如来の像が見つかった。1671年（寛文11年）に開かれた禅寺・温泉寺は町を見下ろす場所にその薬師を祀り、湯はいまも町の中心の河原から湧いている。",
          zh:"當地的起源故事是<strong>白鷺傳說</strong>。據說溫泉最初湧出於鎮後湯峰的山頂附近，卻在 1265 年（文永 2 年）突然斷流。不久，人們看見一隻白鷺一再飛回飛驒川河灘的同一處；村民在那裡找到了熱水，白鷺則飛向山腰的一棵松樹，人們在那裡發現了一尊藥師如來像。1671 年（寬文 11 年）創建的禪寺「溫泉寺」在俯瞰小鎮之處供奉這尊藥師，而溫泉至今仍從鎮中心的河灘湧出。" } }
      ]
    },

    { t:"section", id:"okuhida",
      title:{ en:"Okuhida: five springs under the Alps", ja:"奥飛騨——アルプスの下の五つの湯", zh:"奧飛驒——阿爾卑斯山下的五處溫泉" }, jp:"奥飛騨温泉郷",
      body:[
        { t:"p", text:{
          en:"In the far north-east of Takayama city, where the Takahara River and its tributaries come down from Hotaka and Norikura, five hot-spring villages make up <strong>Okuhida Onsen-gō</strong>: Hirayu, Fukuji, Shin-Hirayu, Tochio and Shin-Hotaka. Their promoters cite some 170 open-air baths and a combined flow among the largest of any spa district in Japan; whatever the exact ranking, the density of outdoor baths in a mountain valley is the district's character.",
          ja:"高山市の北東の端、高原川とその支流が穂高や乗鞍から下りてくるところに、五つの温泉地——平湯・福地・新平湯・栃尾・新穂高——からなる<strong>奥飛騨温泉郷</strong>がある。観光の担い手たちは、露天風呂およそ170、総湧出量は全国の温泉地でも屈指と説明する。正確な順位はともかく、山の谷に屋外の湯がこれほど密に並ぶことが、この地の性格である。",
          zh:"在高山市的東北端，高原川及其支流從穗高與乘鞍流下之處，五座溫泉村——平湯、福地、新平湯、櫪尾、新穗高——組成了<strong>奧飛驒溫泉鄉</strong>。當地觀光單位稱此地約有 170 座露天浴池，總湧出量居全國溫泉區前列；無論確切排名如何，山谷中如此密集的露天溫泉，正是這一帶的特色。" } },
        { t:"p", text:{
          en:"<strong>Hirayu</strong>, at about 1,230 m on the road over the Abō pass from Matsumoto, is the oldest. Its legend belongs to the Sengoku wars: when Takeda Shingen's army, under his general Yamagata Masakage, crossed into Hida, the exhausted soldiers were led by an old white monkey to a spring by the road and recovered in its water. <strong>Shin-Hotaka</strong>, at the head of the valley, is the start of the Shin-Hotaka Ropeway, whose second stage uses Japan's only double-decker gondola and climbs to 2,156 m under the Hotaka ridge.",
          ja:"松本から安房峠を越える道の標高約1,230メートルにある<strong>平湯</strong>が最も古い。伝説は戦国の戦に属する。武田信玄の軍が武将・山県昌景に率いられて飛騨へ攻め入ったとき、疲れ果てた兵たちを一匹の年老いた白猿が道端の湯へ導き、兵たちはその湯で力を取り戻したという。谷の奥の<strong>新穂高</strong>は新穂高ロープウェイの起点で、その第二ロープウェイは日本唯一の二階建てゴンドラで、穂高の稜線の下、標高2,156メートルまで上る。",
          zh:"位於從松本翻越安房嶺道路上、海拔約 1,230 公尺的<strong>平湯</strong>歷史最悠久。其傳說屬於戰國時代：武田信玄的軍隊在部將山縣昌景率領下攻入飛驒，筋疲力竭的士兵被一隻年老的白猿引到路旁的溫泉，泡過之後恢復了體力。谷底深處的<strong>新穗高</strong>是新穗高纜車的起點，其第二段纜車採用日本唯一的雙層纜車廂，爬升至穗高稜線下方海拔 2,156 公尺處。" } }
      ]
    },

    { t:"section", id:"others",
      title:{ en:"Other springs", ja:"そのほかの湯", zh:"其他溫泉" }, jp:"長良川温泉ほか",
      body:[
        { t:"table",
          cols:[{en:"Spring",ja:"温泉",zh:"溫泉"},{en:"Where",ja:"場所",zh:"地點"},{en:"Why it is in this book",ja:"本書との関わり",zh:"與本書的關聯"}],
          rows:[
            [{en:"Nagara River Onsen",ja:"長良川温泉",zh:"長良川溫泉"},{en:"Gifu city",ja:"岐阜市",zh:"岐阜市"},{en:"The inns along the Nagara where visitors stay to watch the cormorant boats.",ja:"鵜飼を見る客が泊まる長良川沿いの宿。",zh:"遊客為觀賞鵜飼而投宿的長良川沿岸旅館。"}],
            [{en:"Nigorigō Onsen",ja:"濁河温泉",zh:"濁河溫泉"},{en:"Gero, on Ontake",ja:"下呂市（御嶽山麓）",zh:"下呂市（御嶽山麓）"},{en:"One of the highest spa villages in Japan, at about 1,800 m, and the Gifu-side base for climbing Ontake.",ja:"標高約1,800メートル、日本で最も高い温泉地の一つで、岐阜側から御嶽山に登る拠点。",zh:"海拔約 1,800 公尺，是日本海拔最高的溫泉村之一，也是從岐阜一側攀登御嶽山的據點。"}],
            [{en:"Shirakawa-gō Onsen",ja:"白川郷温泉",zh:"白川鄉溫泉"},{en:"Shirakawa village",ja:"白川村",zh:"白川村"},{en:"A spring beside the gasshō village; see Shirakawa-gō.",ja:"合掌集落のそばの湯。白川郷の頁を参照。",zh:"合掌聚落旁的溫泉；見白川鄉頁。"}]
          ] },
        { t:"note", label:{en:"Hinoki and the bath",ja:"檜と風呂",zh:"檜木與浴池"}, text:{
          en:"Many Gifu inns build their baths of hinoki, which resists rot, stays warm to the touch and releases its scent when wet. The timber usually comes from Tōnō or the Kiso region — see <a href=\"hinoki.html\">Hinoki</a> and <a href=\"everyday.html\">Wood in Everyday Things</a>.",
          ja:"岐阜の宿の多くは湯船を檜で造る。檜は腐りにくく、手に温かく、濡れると香りを放つ。材はたいてい東濃か木曽の産である。<a href=\"hinoki.html\">檜</a>と<a href=\"everyday.html\">暮らしの木</a>を参照。",
          zh:"岐阜許多旅館以檜木打造浴池：檜木耐腐、觸感溫暖，遇水則散發香氣。木料通常來自東濃或木曾地方——見<a href=\"hinoki.html\">檜木</a>與<a href=\"everyday.html\">生活中的木</a>。" } },
        { t:"note", label:{en:"In the bath",ja:"湯に入るとき",zh:"入浴須知"}, text:{
          en:"Wash and rinse at the taps before getting into the bath, keep towels out of the water, and tie up long hair. Spring water is often over 40 °C: go in slowly, drink water afterwards, and do not stay in long after a meal or after sake.",
          ja:"湯船に入る前に洗い場で体を洗い流し、タオルは湯に入れず、長い髪はまとめる。温泉の湯はしばしば40度を超える。ゆっくり入り、上がったら水を飲み、食後や酒のあとに長湯はしない。",
          zh:"進入浴池前先在淋浴處把身體洗淨沖乾淨，毛巾不要放進池裡，長髮要綁起來。溫泉水溫常超過攝氏 40 度：請慢慢入池，起身後補充水分，飯後或飲酒後不要泡太久。" } }
      ]
    },

    { t:"related", items:[
      { href:"mountains.html", why:{ en:"The volcanoes that heat the water.", ja:"湯を温める火山。", zh:"加熱泉水的火山。" } },
      { href:"roads.html", why:{ en:"The Hida road that brought travellers to Gero.", ja:"旅人を下呂へ運んだ飛騨街道。", zh:"把旅人帶到下呂的飛驒街道。" } },
      { href:"hinoki.html", why:{ en:"The timber of the bath.", ja:"湯船の木。", zh:"浴池的木材。" } },
      { href:"journeys.html", why:{ en:"Routes that pass through both spa districts.", ja:"二つの温泉地を通る道筋。", zh:"途經兩大溫泉區的路線。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- wildlife */
GIFU.pages["wildlife"] = {
  kicker: { en: "Land & Water · 06", ja: "風土 · 06", zh: "風土 · 06" },
  title:  { en: "Living Things", ja: "生きもの", zh: "生物" },
  jp: "ギフチョウ · ハリヨ · ライチョウ · 淡墨桜",
  lede: {
    en: "A prefecture that runs from below sea level to over three thousand metres holds almost every kind of habitat found in central Japan, and several creatures are bound to Gifu by name or by history. A butterfly carries the prefecture's name into scientific literature; a small spring-water stickleback survives only in western Mino and neighbouring Shiga; the rock ptarmigan of the high ridges is the prefectural bird. This page follows them from the plain to the summits, and ends with the trees that have become monuments.",
    ja: "海面下から三千メートルを超える高さまでを含む県には、本州中部のほぼすべての生息環境がそろい、名前や歴史によって岐阜と結ばれた生きものもいくつかある。一匹の蝶は県の名を学術の世界へ運び、湧水に棲む小さなトゲウオは美濃西部と隣の滋賀にしか残らず、高い稜線のライチョウは県の鳥である。本頁では、それらを平野から山頂まで辿り、最後に記念物となった木々を挙げる。",
    zh: "一個從海平面以下延伸到三千公尺以上的縣，幾乎涵蓋了本州中部所有類型的棲地，也有好幾種生物因名字或歷史而與岐阜相連。一種蝴蝶把縣名帶進了學術文獻；一種棲息於湧泉的小型刺魚，只殘存於美濃西部與鄰近的滋賀；高聳稜線上的雷鳥則是縣鳥。本頁從平原一路追索到山頂，最後介紹那些已成為紀念物的樹木。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Life by altitude — a qualitative sketch. Evergreen broadleaf woods and spring-fed streams on the plain; deciduous beech and oak forest, with serow, bears and giant salamanders, in the uplands; subalpine conifers; and above the tree line, creeping pine, alpine flowers and the rock ptarmigan. Boundaries vary with slope and latitude.",
        ja:"標高と生きもの——定性的な略図。平野には常緑広葉樹林と湧水の小川。高原にはブナ・ミズナラの落葉樹林とカモシカ・クマ・オオサンショウウオ。その上に亜高山帯の針葉樹林、森林限界の上にはハイマツと高山植物とライチョウ。境界は斜面の向きや緯度で変わる。",
        zh:"依海拔分布的生物——定性示意。平原上是常綠闊葉林與湧泉小溪；高地是山毛櫸與水楢的落葉林，有日本長鬃山羊、黑熊與大山椒魚；其上是亞高山針葉林；林線以上則是偃松、高山植物與雷鳥。各帶界線隨坡向與緯度而異。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var bands = [
          [258, 300, {en:"0–500 m · plain and hills",ja:"0〜500m・平野と丘",zh:"0–500m・平原與丘陵"}, {en:"evergreen oaks, shii · springs, ayu, hariyo, Gifu butterfly",ja:"カシ・シイ・湧水・アユ・ハリヨ・ギフチョウ",zh:"常綠櫟、米櫧・湧泉、香魚、針魚、岐阜蝶"}, "#F0EDE4"],
          [196, 258, {en:"500–1,600 m · uplands",ja:"500〜1,600m・山地",zh:"500–1,600m・山地"}, {en:"beech, mizunara · serow, black bear, giant salamander",ja:"ブナ・ミズナラ・カモシカ・ツキノワグマ・オオサンショウウオ",zh:"山毛櫸、水楢・長鬃山羊、黑熊、大山椒魚"}, "#E0E6DB"],
          [140, 196, {en:"1,600–2,500 m · subalpine",ja:"1,600〜2,500m・亜高山",zh:"1,600–2,500m・亞高山"}, {en:"fir, spruce, larch",ja:"シラビソ・トウヒ・カラマツ",zh:"冷杉、雲杉、落葉松"}, "#E9ECEE"],
          [80, 140, {en:"above 2,500 m · alpine",ja:"2,500m以上・高山",zh:"2,500m 以上・高山"}, {en:"creeping pine, alpine flowers · rock ptarmigan",ja:"ハイマツ・高山植物・ライチョウ",zh:"偃松、高山植物・雷鳥"}, "#E6E2EC"]
        ];
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Life zones by altitude">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"LIFE BY ALTITUDE", ja:"標高と生きもの", zh:"海拔與生物" }) + '</text>' +
          '<text x="730" y="28" text-anchor="end" ' + F + ' font-size="9.5" fill="#8B857C" letter-spacing="1.2">' + L({en:"QUALITATIVE",ja:"定性図",zh:"定性示意"}) + '</text>';
        bands.forEach(function (b) {
          s += '<rect x="30" y="' + b[0] + '" width="700" height="' + (b[1] - b[0]) + '" fill="' + b[4] + '" stroke="#CDC6B9"/>' +
               '<text x="44" y="' + (b[0] + 22) + '" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(b[2]) + '</text>' +
               '<text x="44" y="' + (b[0] + 40) + '" ' + F + ' font-size="10.5" fill="#55504A">' + L(b[3]) + '</text>';
        });
        s += '<path d="M470 300 L590 140 L620 96 L650 140 L730 256 L730 300 Z" fill="none" stroke="#8B857C" stroke-width="1.2"/>' +
             '<text x="620" y="88" text-anchor="middle" ' + F + ' font-size="10" fill="#55504A">' + L({en:"summit",ja:"山頂",zh:"山頂"}) + '</text>' +
             '<text x="30" y="318" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Zones approximate; they sit lower on north-facing slopes and in Hida than in Mino.",ja:"帯の境界は概略。北向き斜面や飛騨では美濃より低くなる。",zh:"分帶為概略；在北向坡與飛驒，界線比美濃低。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"butterfly",
      title:{ en:"A butterfly named after the prefecture", ja:"県の名を持つ蝶", zh:"以縣為名的蝴蝶" }, jp:"ギフチョウ",
      body:[
        { t:"p", text:{
          en:"On 24 April 1883 the young naturalist <strong>Nawa Yasushi</strong> collected a black-and-yellow swallowtail at Soshino in the Gujō district, now Kanayama in Gero, and gave it the name <em>Gifu-chō</em>, the Gifu butterfly. It had been known in the Edo period under other names, so Nawa is best described as its rediscoverer and namer rather than its discoverer; the scientific name is <em>Luehdorfia japonica</em>. It flies only in early spring, lays its eggs on wild ginger, and has become a symbol of the <em>satoyama</em> — the managed woodland at the edge of villages — whose decline it tracks. In 1919 Nawa opened the Nawa Insect Museum in Gifu Park, the oldest museum devoted to insects in Japan, in a building designed by Takeda Goichi; it is still run by his family.",
          ja:"1883年（明治16年）4月24日、若い博物学者<strong>名和靖</strong>は郡上郡祖師野村（現・下呂市金山町祖師野）で黒と黄のアゲハチョウを採集し、「ギフチョウ」と名づけた。江戸時代には別の名で知られていたので、名和は発見者というより再発見者・命名者と言うのがふさわしい。学名は<em>Luehdorfia japonica</em>。春先にだけ飛び、カンアオイに卵を産み、村はずれの手入れされた森——里山——の象徴となって、その衰えとともに数を減らしてきた。1919年、名和は岐阜公園に名和昆虫博物館を開いた。武田五一の設計による、日本で最も古い昆虫専門の博物館で、いまも名和家が運営している。",
          zh:"1883 年（明治 16 年）4 月 24 日，年輕的博物學家<strong>名和靖</strong>在郡上郡祖師野村（今下呂市金山町祖師野）採得一隻黑黃相間的鳳蝶，將之命名為「岐阜蝶」。牠在江戶時代已以其他名稱為人所知，因此與其說名和是發現者，不如說是再發現者與命名者；學名為 <em>Luehdorfia japonica</em>。牠只在早春飛舞，把卵產在細辛屬植物上，已成為「里山」——村落邊緣經人照料的林地——的象徵，其數量也隨里山的衰退而減少。1919 年，名和在岐阜公園開設名和昆蟲博物館，由武田五一設計，是日本歷史最悠久的昆蟲專門博物館，至今仍由名和家族經營。" } }
      ]
    },

    { t:"section", id:"water",
      title:{ en:"Creatures of clear water", ja:"清らかな水の生きもの", zh:"清水中的生物" }, jp:"アユ · ハリヨ · オオサンショウウオ",
      body:[
        { t:"defs", items:[
          { term:{en:"Ayu (sweetfish)",ja:"アユ",zh:"香魚"}, jp:"鮎 · 県の魚", def:{
            en:"The prefectural fish and the catch of the cormorants. Ayu hatch in autumn, spend the winter in the sea or the estuary, run up the rivers in spring and graze algae off the stones through the summer — which is why they need clean, clear water and why they give their name to the Nagara's agricultural heritage designation.",
            ja:"県の魚であり、鵜飼の獲物である。アユは秋に孵り、冬を海や河口で過ごし、春に川を遡って、夏のあいだ石についた藻を食む。ゆえに清らかな澄んだ水を必要とし、長良川の世界農業遺産にその名を与えている。",
            zh:"縣魚，也是鸕鶿捕捉的漁獲。香魚秋天孵化，冬季在海中或河口度過，春天溯河而上，整個夏天啃食石頭上的藻類——因此牠們需要潔淨清澈的水，也因此成為長良川世界農業遺產的名稱。"} },
          { term:{en:"Hariyo",ja:"ハリヨ",zh:"針魚（ハリヨ）"}, jp:"湧水のトゲウオ", def:{
            en:"A stickleback 5–6 cm long, with six spines, that lives only where cold spring water keeps the temperature below about 20 °C. It survives today only in western Mino and neighbouring Shiga. Once common in the streams of Ōgaki and Gifu, it has declined with the drying of springs and is listed as critically endangered in the prefecture; Ōgaki has made it the city fish, and its habitats there have been protected since 1965.",
            ja:"体長5〜6センチ、六本の棘を持つトゲウオで、冷たい湧水が水温をおよそ20℃以下に保つ場所にしか棲めない。いまは美濃西部と隣の滋賀県にしか残っていない。かつては大垣や岐阜の小川のあちこちに見られたが、湧水の枯渇とともに減り、県のレッドリストでは絶滅危惧Ⅰ類である。大垣市はこれを市の魚とし、市内の生息地は1965年から天然記念物として守られている。",
            zh:"一種體長 5–6 公分、具六根棘的刺魚，只能生活在冷湧泉使水溫保持在約 20 °C 以下的地方。如今只殘存於美濃西部與鄰近的滋賀縣。牠曾遍布大垣與岐阜的小溪，但隨湧泉乾涸而減少，被列為縣內極危物種；大垣市將牠定為市魚，當地的棲地自 1965 年起即作為天然紀念物受到保護。"} },
          { term:{en:"Japanese giant salamander",ja:"オオサンショウウオ",zh:"日本大山椒魚"}, jp:"はざこ", def:{
            en:"The largest amphibian in Japan and a Special Natural Monument. In Gujō it is called <em>hazako</em>, and the Wara River and its tributaries are protected as its habitat. Environmental-DNA surveys have detected it at several points on the middle and upper Nagara — and have also detected the introduced Chinese giant salamander in the Ibi system, whose hybrids threaten the native species.",
            ja:"日本最大の両生類で、特別天然記念物。郡上では「はざこ」と呼ばれ、和良川とその支流が生息地として保護されている。環境DNAの調査では長良川の中上流の数地点で検出されたが、揖斐川水系では外来のチュウゴクオオサンショウウオも検出されており、その交雑が在来種を脅かしている。",
            zh:"日本最大的兩棲動物，特別天然紀念物。在郡上被稱為「はざこ」，和良川及其支流作為牠的棲地受到保護。環境 DNA 調查在長良川中上游的數個地點偵測到牠——但也在揖斐川水系偵測到外來的中國大鯢，其雜交正威脅著本土物種。"} }
        ] }
      ]
    },

    { t:"section", id:"mountain",
      title:{ en:"Mountain animals", ja:"山の動物", zh:"山中動物" }, jp:"カモシカ · クマ · ライチョウ",
      body:[
        { t:"p", text:{
          en:"The <strong>Japanese serow</strong>, a goat-antelope found only in Japan, was made a Special Natural Monument in 1955 after hunting had reduced it to the high forest; it has since recovered so far that it is seen on the edges of Gifu city and Kani, and the prefecture runs a management plan that allows culling where it damages young trees. The <strong>Asiatic black bear</strong> lives in almost every forested part of the prefecture and comes down into villages in years when the beech and oak fail to fruit; attacks are reported most autumns.",
          ja:"日本固有のウシ科の動物<strong>ニホンカモシカ</strong>は、狩猟で高い森へ追いやられたのち、1955年に特別天然記念物となった。以後は大きく回復し、岐阜市や可児市の縁でも見られるほどで、県は若木を食害する地域での捕獲を認める管理計画を運用している。<strong>ツキノワグマ</strong>は県内のほとんどの森に棲み、ブナやナラが実らない年には村まで下りてくる。人身事故はほぼ毎秋報告される。",
          zh:"<strong>日本長鬃山羊</strong>是日本特有的羊亞科動物，曾因狩獵而退居高山森林，1955 年被指定為特別天然紀念物；此後族群大幅恢復，甚至在岐阜市與可兒市的邊緣都看得到，縣府並執行管理計畫，允許在其啃食幼樹的地區進行捕獲。<strong>亞洲黑熊</strong>棲息於縣內幾乎所有林地，在山毛櫸與櫟樹歉收的年份會下到村落；幾乎每年秋天都有傷人事件的報告。" } },
        { t:"p", text:{
          en:"Above the tree line lives the <strong>rock ptarmigan</strong>, the prefectural bird since 1965 and a Special Natural Monument — white in winter, mottled brown in summer, and found in Japan only on the highest ranges. Its numbers fell from an estimated 3,000 in the 1980s to under 2,000 in the 2000s, and on Norikura recent counts have recorded the fewest territories ever. Warming, predators moving uphill and deer eating the alpine plants are all blamed; Gifu adopted a ptarmigan protection plan in 2019.",
          ja:"森林限界の上には<strong>ライチョウ</strong>が棲む。1965年から県の鳥で、特別天然記念物である。冬は白く、夏は褐色のまだらになり、日本では最も高い山脈にしかいない。推定数は1980年代の約3,000羽から2000年代には2,000羽弱に減り、乗鞍岳では近年、なわばり数が過去最少を記録した。温暖化、山を登ってくる捕食者、高山植物を食べるシカが原因とされ、岐阜県は2019年にライチョウ保護計画を定めた。",
          zh:"林線以上棲息著<strong>雷鳥</strong>——自 1965 年起為縣鳥，也是特別天然紀念物。冬季全白，夏季轉為褐色斑紋，在日本只見於最高的山脈。其數量估計從 1980 年代的約 3,000 隻，減少到 2000 年代的不足 2,000 隻；乘鞍岳近年的調查更記錄到有史以來最少的領域數。暖化、向上遷移的掠食者，以及啃食高山植物的鹿，都被視為原因；岐阜縣於 2019 年訂定雷鳥保護計畫。" } }
      ]
    },

    { t:"section", id:"trees",
      title:{ en:"Trees that became monuments", ja:"記念物になった木", zh:"成為紀念物的樹" }, jp:"巨樹",
      body:[
        { t:"table",
          cols:[{en:"Tree",ja:"木",zh:"樹"},{en:"Where",ja:"場所",zh:"地點"},{en:"What it is",ja:"どんな木か",zh:"簡介"}],
          rows:[
            [{en:"Usuzumi-zakura",ja:"淡墨桜",zh:"淡墨櫻"},{en:"Neo, Motosu",ja:"本巣市根尾",zh:"本巢市根尾"},{en:"An Edo-higan cherry said to be more than 1,500 years old and, by legend, planted by Emperor Keitai; 16.3 m tall, 9.91 m round. National natural monument since 12 October 1922, one of the three great cherry trees of Japan. The novelist Uno Chiyo campaigned for its rescue in the 1960s.",ja:"樹齢1,500年を超えるとされるエドヒガンで、継体天皇のお手植えと伝わる。樹高16.3m、幹回り9.91m。1922年10月12日に国の天然記念物となった日本三大桜の一つ。作家・宇野千代がその保護を訴えた。",zh:"一株據說樹齡逾 1,500 年的江戶彼岸櫻，相傳為繼體天皇親手所植；樹高 16.3 公尺，幹圍 9.91 公尺。1922 年 10 月 12 日列為國家天然紀念物，為日本三大櫻之一。作家宇野千代曾奔走呼籲保護它。"}],
            [{en:"Itoshiro Ōsugi",ja:"石徹白の大杉",zh:"石徹白大杉"},{en:"Shirotori, Gujō",ja:"郡上市白鳥町",zh:"郡上市白鳥町"},{en:"A cedar about 24 m high and 14 m round, estimated at over 1,800 years; the only tree in Gifu that is a Special Natural Monument. Half the trunk is dead; half still lives.",ja:"樹高約24m、幹回り約14m、推定樹齢1,800年余りの杉。岐阜県で唯一の特別天然記念物の木。幹の半分は枯れ、半分はなお生きている。",zh:"一株高約 24 公尺、圍約 14 公尺、推估樹齡逾 1,800 年的杉木；岐阜縣唯一被列為特別天然紀念物的樹。樹幹一半已枯，一半仍活著。"}],
            [{en:"Shōkawa-zakura",ja:"荘川桜",zh:"莊川櫻"},{en:"Shōkawa, Takayama",ja:"高山市荘川町",zh:"高山市莊川町"},{en:"Two Edo-higan cherries over 400 years old, moved above the waterline of the Miboro reservoir in 1960. See <a href=\"rivers.html\">Rivers &amp; Water</a>.",ja:"樹齢400年を超える二本のアズマヒガン。1960年に御母衣ダム湖の水位より上へ移された。<a href=\"rivers.html\">川と水</a>を参照。",zh:"兩株樹齡逾 400 年的東彼岸櫻，1960 年被移到御母衣水庫水位線以上。見<a href=\"rivers.html\">河川與水</a>。"}],
            [{en:"Ichii (Japanese yew)",ja:"イチイ",zh:"一位（紫杉）"},{en:"Hida, prefectural tree",ja:"飛騨・県の木",zh:"飛驒・縣樹"},{en:"Chosen as the prefectural tree on 1 October 1966. Its fine-grained red-and-white wood is the material of Hida's yew carving — see <a href=\"carving.html\">Carving &amp; Lacquer</a>.",ja:"1966年10月1日に県の木に選ばれた。きめ細かな赤と白の材は飛騨の一位一刀彫の材料である。<a href=\"carving.html\">彫りと塗り</a>を参照。",zh:"1966 年 10 月 1 日選為縣樹。其紋理細緻、紅白分明的木材，是飛驒一位一刀雕的材料——見<a href=\"carving.html\">雕刻與漆藝</a>。"}]
          ] }
      ]
    },

    { t:"related", items:[
      { href:"rivers.html", why:{ en:"The water the ayu and the hariyo depend on.", ja:"アユとハリヨが頼る水。", zh:"香魚與針魚所依賴的水。" } },
      { href:"forests.html", why:{ en:"The forests the serow and the bear live in.", ja:"カモシカとクマが棲む森。", zh:"長鬃山羊與黑熊所居住的森林。" } },
      { href:"ukai.html", why:{ en:"The fishery that turns ayu into a festival.", ja:"アユを祭りに変える漁。", zh:"把香魚變成一場祭典的漁法。" } },
      { href:"mountains.html", why:{ en:"The peaks above the tree line.", ja:"森林限界の上の山々。", zh:"林線以上的山峰。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- climate */
GIFU.pages["climate"] = {
  kicker: { en: "Land & Water · 07", ja: "風土 · 07", zh: "風土 · 07" },
  title:  { en: "Heat & Snow", ja: "暑さと雪", zh: "酷暑與大雪" },
  jp: "多治見の暑さ · 白川の雪 · 寒の仕事",
  lede: {
    en: "Gifu has two climates, and they are extreme in opposite directions. The plain and the basins of southern Mino have some of the hottest summers in Japan — Tajimi took the national record in 2007 — while northern Hida lies under deep snow for months, and the mountain on the western border holds the world's greatest measured snow depth. Between them they set the prefecture's working calendar: cold is an ingredient in its sake, paper, agar and pickles, and summer is the season of fishing and dancing.",
    ja: "岐阜県には二つの気候があり、それぞれ逆向きに極端である。美濃南部の平野と盆地は日本でも有数の暑い夏を迎え——多治見は2007年に日本の最高気温を記録した——飛騨北部は何か月も深い雪に埋もれ、西の県境の山は世界最深の積雪記録を持つ。両者がそろって県の仕事の暦を決めてきた。寒さは酒・紙・寒天・漬物の材料の一つであり、夏は漁と踊りの季節である。",
    zh: "岐阜縣有兩種氣候，而且各自朝相反方向走向極端。美濃南部的平原與盆地擁有日本數一數二炎熱的夏天——多治見在 2007 年創下全國最高氣溫——飛驒北部則有好幾個月埋在深雪之下，西側縣界上的山還保有世界最深的積雪觀測紀錄。兩者共同決定了本縣的工作曆：寒冷是這裡的酒、紙、寒天與醃菜的原料之一，夏天則是捕魚與跳舞的季節。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The working year. Typical seasons for the activities described in this book; exact dates vary by year, by town and by maker. Cold-weather crafts cluster from late autumn to early spring; the river and festival season fills the summer.",
        ja:"仕事の一年。本書で扱う営みの、おおよその季節。正確な日取りは年・町・作り手によって異なる。寒さを使う仕事は晩秋から早春に集まり、川と祭りの季節が夏を満たす。",
        zh:"一年的工作。本書所述各項活動的大致季節；確切日期因年份、城鎮與製作者而異。利用寒冷的工藝集中在晚秋到早春；河川與祭典的季節則填滿整個夏天。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var M = lang === "en" ? ["J","F","M","A","M","J","J","A","S","O","N","D"] : ["1","2","3","4","5","6","7","8","9","10","11","12"];
        var X = 200, CW = 44;
        /* spans in months (1-based, fractional); wrap across the new year by giving two spans */
        var rows = [
          [{en:"Sake brewing",ja:"酒造り",zh:"釀酒"}, [[10.5,13],[1,3.9]], "#E6E2EC"],
          [{en:"Agar (kanten) drying",ja:"寒天干し",zh:"寒天曝曬"}, [[12,13],[1,3]], "#E9ECEE"],
          [{en:"Winter paper (kanzuki)",ja:"寒漉き",zh:"寒漉（冬季造紙）"}, [[12,13],[1,3]], "#E0E7E9"],
          [{en:"Winter felling",ja:"冬の伐採",zh:"冬季伐木"}, [[10,13],[1,3]], "#E0E6DB"],
          [{en:"Dried persimmons",ja:"干し柿",zh:"柿乾"}, [[11,13]], "#EADCC1"],
          [{en:"Takayama festivals",ja:"高山祭",zh:"高山祭"}, [[4.43,4.52],[10.27,10.36]], "#EEE1DF"],
          [{en:"Cormorant fishing",ja:"鵜飼",zh:"鵜飼"}, [[5.35,10.5]], "#E0E7E9"],
          [{en:"Gujō Odori",ja:"郡上おどり",zh:"郡上舞"}, [[7.45,9.2]], "#F0EDE4"]
        ];
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Seasonal calendar of work">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"THE WORKING YEAR", ja:"仕事の一年", zh:"一年的工作" }) + '</text>';
        for (var m = 0; m < 12; m++) {
          var x = X + m * CW;
          s += '<rect x="' + x + '" y="44" width="' + CW + '" height="252" fill="' + ((m < 2 || m === 11) ? "#E9ECEE" : ((m === 6 || m === 7) ? "#F5F3ED" : "#FBFAF7")) + '" stroke="#E1DCD2"/>' +
               '<text x="' + (x + CW / 2) + '" y="60" text-anchor="middle" ' + F + ' font-size="10" fill="#8B857C">' + M[m] + '</text>';
        }
        rows.forEach(function (r, i) {
          var y = 74 + i * 27;
          s += '<text x="30" y="' + (y + 13) + '" ' + F + ' font-size="10.5" fill="#201E1B">' + L(r[0]) + '</text>';
          r[1].forEach(function (sp) {
            var x1 = X + (sp[0] - 1) * CW, x2 = X + (sp[1] - 1) * CW;
            s += '<rect x="' + x1.toFixed(1) + '" y="' + (y + 2) + '" width="' + Math.max(4, x2 - x1).toFixed(1) + '" height="16" fill="' + r[2] + '" stroke="#7C6B52" stroke-width="0.8"/>';
          });
        });
        s += '<text x="30" y="316" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Shaded columns: the coldest and hottest months. Typical seasons only.",ja:"網掛けの列は最も寒い月と暑い月。季節は目安。",zh:"灰底欄位為最冷與最熱的月份。季節僅供參考。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"heat",
      title:{ en:"The hot plain", ja:"暑い平野", zh:"炎熱的平原" }, jp:"多治見 · 金山 · 美濃",
      body:[
        { t:"p", text:{
          en:"At 14:20 on 16 August 2007 the thermometer at <strong>Tajimi</strong>, in a basin in south-eastern Mino, read 40.9 °C, which — with Kumagaya in Saitama on the same afternoon — broke Japan's national record for the first time in seventy-four years. The record has since been raised elsewhere, but Gifu has kept its reputation: on 6 August 2018 <strong>Kanayama</strong> in Gero reached 41.0 °C, and two days later <strong>Mino</strong> matched it. Inland basins, sheltered from sea breezes and warmed by air descending from the mountains, trap heat; the towns of the Nōbi Plain's northern rim have learned to live with it.",
          ja:"2007年8月16日14時20分、美濃南東部の盆地にある<strong>多治見</strong>の気温計は40.9℃を示し、同じ日の午後の埼玉県熊谷とともに、74年ぶりに日本の最高気温の記録を塗り替えた。記録はその後ほかの場所で更新されたが、岐阜の評判は保たれている。2018年8月6日には下呂市<strong>金山</strong>が41.0℃に達し、その二日後には<strong>美濃</strong>が並んだ。海風から隔てられ、山から吹き下りる空気に暖められる内陸の盆地は熱をため込む。濃尾平野の北の縁の町々は、それとともに暮らすすべを身につけてきた。",
          zh:"2007 年 8 月 16 日 14 時 20 分，位於美濃東南部盆地的<strong>多治見</strong>氣溫計顯示 40.9 °C，與同日下午的埼玉縣熊谷一同刷新了睽違 74 年的日本全國最高氣溫紀錄。此紀錄後來在其他地方被打破，但岐阜的名聲依舊：2018 年 8 月 6 日，下呂市<strong>金山</strong>達到 41.0 °C，兩天後<strong>美濃</strong>也追平。遠離海風、又被山上下沉氣流加熱的內陸盆地容易積熱；濃尾平原北緣的城鎮早已學會與之共處。" } }
      ]
    },

    { t:"section", id:"snow",
      title:{ en:"The snowy north and the western gap", ja:"雪の北と西の切れ目", zh:"多雪的北方與西側隘口" }, jp:"白川 · 伊吹山 · 関ケ原",
      body:[
        { t:"p", text:{
          en:"In winter the north-west monsoon brings moist air off the Sea of Japan straight up the Shō valley. <strong>Shirakawa</strong> is designated a special heavy-snowfall area, and two to three metres on the ground is not unusual in a heavy year; the steep gasshō roofs, pitched at about sixty degrees to shed it, are the architecture of that fact. Takayama, in its basin, is drier but far colder than the plain.",
          ja:"冬には北西の季節風が日本海の湿った空気をまっすぐ庄川の谷へ運び上げる。<strong>白川村</strong>は特別豪雪地帯に指定され、多い年には地上に二〜三メートルの雪が積もることも珍しくない。雪を落とすため約六十度に傾けた合掌造りの急な屋根は、その事実が形になった建築である。盆地の高山は雪はそれより少ないが、平野よりはるかに寒い。",
          zh:"冬季的西北季風把日本海的潮濕空氣直接送上庄川河谷。<strong>白川村</strong>被指定為特別豪雪地帶，大雪之年地面積雪兩到三公尺並不稀奇；為了讓雪滑落而傾斜約六十度的陡峭合掌屋頂，就是這個事實化成的建築。位於盆地的高山雪量較少，卻比平原冷得多。" } },
        { t:"p", text:{
          en:"The western border has its own extreme. On 14 February 1927 the weather station on the summit of <strong>Mount Ibuki</strong>, on the Shiga–Gifu border, measured 11.82 m of snow on the ground — still the greatest snow depth ever recorded at an observing station. The same winds pour through the low gap at <strong>Sekigahara</strong> onto the Nōbi Plain as the dry, cold <em>Ibuki-oroshi</em>, and the snow they carry is why the Tōkaidō Shinkansen and the Meishin Expressway are regularly slowed at Sekigahara in winter.",
          ja:"西の県境にも独自の極端がある。1927年（昭和2年）2月14日、滋賀・岐阜県境の<strong>伊吹山</strong>山頂の測候所は積雪11.82メートルを観測した。観測所で記録された積雪の深さとして、いまも最大である。同じ風は<strong>関ケ原</strong>の低い切れ目を通って、乾いた冷たい「伊吹おろし」として濃尾平野へ吹き下ろす。冬の東海道新幹線や名神高速道路が関ケ原でたびたび減速を強いられるのは、この風が運ぶ雪のためである。",
          zh:"西側縣界也有自己的極端。1927 年（昭和 2 年）2 月 14 日，位於滋賀、岐阜縣界的<strong>伊吹山</strong>山頂測候所測得積雪 11.82 公尺——至今仍是觀測站所記錄過的最大積雪深度。同樣的風穿過<strong>關原</strong>的低矮隘口，化為乾冷的「伊吹颪」吹向濃尾平原；冬季東海道新幹線與名神高速公路常在關原被迫減速，正是因為這股風帶來的雪。" } }
      ]
    },

    { t:"section", id:"cold",
      title:{ en:"Cold as an ingredient", ja:"材料としての寒さ", zh:"作為原料的寒冷" }, jp:"寒の仕事",
      body:[
        { t:"grid", cols:2, cells:[
          { h:{en:"Agar from Yamaoka",ja:"山岡の細寒天",zh:"山岡的細寒天"}, jp:"恵那市山岡町",
            d:{en:"In the basin of Yamaoka, in Ena, winter days are dry and sunny and nights fall well below freezing. Since 1925 the town has made <em>hosokanten</em>, thin strands of agar from boiled seaweed, by leaving them outdoors to freeze each night and dry each day; in the early Shōwa period it had about 130 workshops, and it now produces some 80% of Japan's thin agar.",
               ja:"恵那市山岡町の盆地の冬は、昼は乾いて晴れ、夜は氷点下まで大きく冷え込む。1925年から町は、煮た海藻からつくる細い糸状の寒天——細寒天——を、夜ごと凍らせ昼ごと乾かすため屋外に並べて造ってきた。昭和初期には工場が約130を数え、いまは日本の細寒天の約八割を産する。",
               zh:"惠那市山岡町的盆地，冬季白天乾燥晴朗，夜晚則遠低於冰點。自 1925 年起，當地以煮過的海藻製作細絲狀的「細寒天」，將其置於戶外，每夜冰凍、每日曬乾；昭和初期約有 130 家工坊，如今生產日本約八成的細寒天。"} },
          { h:{en:"Sake",ja:"酒",zh:"酒"}, jp:"寒造り",
            d:{en:"Brewing in winter keeps the mash cold and slow, and suppresses unwanted microbes. Hida's long, steady cold is one reason its breweries have lasted — see <a href=\"hidasake.html\">Brewing in Hida</a>.",
               ja:"冬に醸すことで、醪は冷たくゆっくりと発酵し、望まない微生物が抑えられる。飛騨の長く安定した寒さは、その蔵が続いてきた理由の一つである。<a href=\"hidasake.html\">飛騨の酒造り</a>を参照。",
               zh:"冬季釀造可讓酒醪保持低溫、緩慢發酵，並抑制不需要的微生物。飛驒漫長而穩定的寒冷，是當地酒藏得以延續的原因之一——見<a href=\"hidasake.html\">飛驒的釀酒</a>。"} },
          { h:{en:"Paper",ja:"紙",zh:"紙"}, jp:"寒漉き",
            d:{en:"Mino papermakers prize paper made in the coldest months, when clean cold water keeps the fibre and the plant mucilage in good order. See <a href=\"washi.html\">Mino Washi</a>.",
               ja:"美濃の紙漉きは、最も寒い時季に漉いた紙を尊ぶ。清らかな冷たい水が、繊維とネリ（植物の粘液）の具合をよく保つからである。<a href=\"washi.html\">美濃和紙</a>を参照。",
               zh:"美濃紙匠特別珍視最寒冷月份所造的紙，因為潔淨的冷水能讓纖維與植物黏液保持良好狀態。見<a href=\"washi.html\">美濃和紙</a>。"} },
          { h:{en:"Pickles and persimmons",ja:"漬物と干し柿",zh:"醃菜與柿乾"}, jp:"冬の保存食",
            d:{en:"In Hida, pickles that froze solid in the winter store were thawed and fried with egg — the origin of the local dish <em>tsukemono steak</em>. In Minokamo, the astringent Hachiya persimmon is peeled and dried through November and December into a sweet that was once sent as tribute.",
               ja:"飛騨では、冬の漬物小屋でかちかちに凍った漬物を解かし、卵とともに焼いた。郷土料理「漬物ステーキ」の始まりである。美濃加茂では、渋柿の蜂屋柿の皮をむき、十一月から十二月にかけて干して甘い干し柿にする。かつては献上品であった。",
               zh:"在飛驒，冬季儲藏室裡凍得硬邦邦的醃菜，解凍後與雞蛋一起煎——這就是鄉土料理「醃菜牛排」的由來。在美濃加茂，澀柿品種「蜂屋柿」去皮後，在十一、十二月間曬成甜美的柿乾，昔日曾作為貢品。"} }
        ] }
      ]
    },

    { t:"section", id:"change",
      title:{ en:"A shifting climate", ja:"動く気候", zh:"變動中的氣候" }, jp:"温暖化",
      body:[
        { t:"p", text:{
          en:"The extremes are moving. Heat records on the plain are broken more often than they were, the rock ptarmigan on Norikura is being squeezed towards the summit, and brewers and papermakers who depend on dependable cold talk about winters that no longer supply it. None of this is unique to Gifu, but a prefecture whose crafts are organised around the seasons feels it early. The pages on individual crafts note where the change is already visible.",
          ja:"極端は動いている。平野の暑さの記録は以前よりしばしば更新され、乗鞍のライチョウは山頂へと追いやられ、確かな寒さを頼りにする酒造りや紙漉きの人々は、それを与えなくなった冬について語る。どれも岐阜だけのことではないが、工芸が季節を軸に組み立てられている県は、それを早く感じる。個々の工芸の頁では、変化がすでに見えている点に触れる。",
          zh:"極端正在移動。平原的高溫紀錄比以往更頻繁地被刷新，乘鞍的雷鳥被逼向山頂，仰賴穩定寒冷的釀酒人與紙匠，談論著不再提供這份寒冷的冬天。這些都不只發生在岐阜，但一個工藝以季節為軸心組織起來的縣，會更早感受到。各項工藝的頁面，會指出變化已清晰可見之處。" } }
      ]
    },

    { t:"related", items:[
      { href:"shirakawago.html", why:{ en:"Architecture shaped by snow.", ja:"雪が形づくった建築。", zh:"由雪塑造的建築。" } },
      { href:"hidasake.html", why:{ en:"What Hida's cold does for sake.", ja:"飛騨の寒さが酒にもたらすもの。", zh:"飛驒的寒冷為酒帶來什麼。" } },
      { href:"food.html", why:{ en:"Tsukemono steak, persimmons and the rest of the table.", ja:"漬物ステーキ、干し柿、そして食卓のほかのもの。", zh:"醃菜牛排、柿乾與餐桌上的其他料理。" } },
      { href:"festivals.html", why:{ en:"The dates on the calendar, in detail.", ja:"暦の日取りを詳しく。", zh:"年曆上的日期詳解。" } }
    ] }
  ]
};
