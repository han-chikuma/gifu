/* =============================================================
   THE SPIRIT OF GIFU — History
   Page modules, concatenated. Each page is one
   GIFU.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ----------------------------------------------- history */
GIFU.pages["history"] = {
  kicker: { en: "History · 01", ja: "歴史 · 01", zh: "歷史 · 01" },
  title:  { en: "History at a Glance", ja: "歴史の概観", zh: "歷史概觀" },
  jp: "美濃と飛騨の歩み · a chronology",
  lede: {
    en: "Gifu's history has two rhythms. Mino, on the main road between the Kyoto basin and the east, was repeatedly the ground on which the fate of the country was decided — in 672, in 1567 and in 1600. Hida, behind its mountains, changed slowly and paid its way in timber, ore and skilled labour. Underneath both runs a third, longer story: the struggle of the people of the lower plain with three rivers that flooded their fields almost every generation. This page sets out the whole sequence; the pages that follow take each period in turn.",
    ja: "岐阜の歴史には二つの拍子がある。京都盆地と東国を結ぶ幹線の上にある美濃は、国の命運が決まる舞台に何度もなった——672年、1567年、1600年。山の向こうの飛騨はゆっくりと変わり、木と鉱石と技を持つ労働で身を立てた。その両方の下に、もう一つ、より長い物語が流れている。ほぼ一世代ごとに田を水に浸した三つの川と、下流の平野の人々との闘いである。本頁ではその全体の流れを示し、続く各頁で時代ごとに取り上げる。",
    zh: "岐阜的歷史有兩種節奏。位於京都盆地與東國之間幹道上的美濃，一再成為決定國家命運的舞台——672 年、1567 年、1600 年。山後的飛驒則變化緩慢，以木材、礦石與技術勞力維生。在兩者之下，還流淌著第三個、更長的故事：下游平原的人們與三條河川的搏鬥——那三條河幾乎每一代都會淹沒他們的田地。本頁勾勒整體脈絡，其後各頁再依時代逐一介紹。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Gifu's history on one line. The period bands are Japan's conventional eras; the marks above are events in Mino and Hida discussed in this part of the book. The three moments when national history turned on Mino — 672, 1567 and 1600 — are shown in dark ink.",
        ja:"岐阜の歴史を一本の線で。帯は日本の一般的な時代区分、上の印は本書のこの部で扱う美濃・飛騨の出来事である。国の歴史が美濃で向きを変えた三つの瞬間——672年・1567年・1600年——を濃い色で示した。",
        zh:"一條線上的岐阜歷史。色帶為日本慣用的時代分期，上方標記為本書這一部分所談的美濃與飛驒事件。國史在美濃轉向的三個時刻——672 年、1567 年、1600 年——以深色標示。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var x0 = 40, x1 = 730, y0 = 132, t0 = 650, t1 = 2030;
        function X(yr) { return x0 + (yr - t0) / (t1 - t0) * (x1 - x0); }
        var eras = [
          [650, 710, {en:"Asuka",ja:"飛鳥",zh:"飛鳥"}, "#EDE5D2"],
          [710, 794, {en:"Nara",ja:"奈良",zh:"奈良"}, "#E7DFD2"],
          [794, 1185, {en:"Heian",ja:"平安",zh:"平安"}, "#F0EDE4"],
          [1185, 1333, {en:"Kamakura",ja:"鎌倉",zh:"鎌倉"}, "#E0E6DB"],
          [1333, 1573, {en:"Muromachi",ja:"室町",zh:"室町"}, "#E9ECEE"],
          [1573, 1603, {en:"",ja:"",zh:""}, "#EEE1DF"],
          [1603, 1868, {en:"Edo",ja:"江戸",zh:"江戶"}, "#E6E2EC"],
          [1868, 2030, {en:"Modern",ja:"近現代",zh:"近現代"}, "#E0E7E9"]
        ];
        /* [year, label, strong, level] — levels stagger markers that sit close together */
        var ev = [
          [672, {en:"Jinshin War won from Mino",ja:"壬申の乱、美濃から勝つ",zh:"壬申之亂於美濃決勝"}, 1, 0],
          [702, {en:"Mino household registers",ja:"御野国戸籍",zh:"御野國戶籍"}, 0, 1],
          [717, {en:"Yōrō era; Hakusan opened",ja:"養老改元・白山開山",zh:"養老改元・白山開山"}, 0, 2],
          [1313, {en:"Eihō-ji founded",ja:"永保寺創建",zh:"永保寺創建"}, 0, 0],
          [1552, {en:"Dōsan expels the Toki (c.)",ja:"道三、土岐氏を追う（頃）",zh:"道三逐土岐氏（約）"}, 0, 2],
          [1567, {en:"Nobunaga names Gifu",ja:"信長、岐阜と命名",zh:"信長命名岐阜"}, 1, 1],
          [1600, {en:"Battle of Sekigahara",ja:"関ヶ原の戦い",zh:"關原之戰"}, 1, 0],
          [1692, {en:"Hida under direct rule",ja:"飛騨、幕府直轄に",zh:"飛驒改為幕府直轄"}, 0, 1],
          [1754, {en:"Hōreki river works",ja:"宝暦治水",zh:"寶曆治水"}, 0, 2],
          [1876, {en:"Hida joins Gifu Prefecture",ja:"飛騨、岐阜県に編入",zh:"飛驒併入岐阜縣"}, 0, 0],
          [1891, {en:"Nōbi earthquake",ja:"濃尾地震",zh:"濃尾地震"}, 0, 1],
          [1995, {en:"Shirakawa-gō World Heritage",ja:"白川郷、世界遺産",zh:"白川鄉列入世界遺產"}, 0, 2]
        ];
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Timeline of Gifu history">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"650 – TODAY", ja:"650年から今日まで", zh:"650 年至今" }) + '</text>';
        eras.forEach(function (e) {
          var a = X(e[0]), b = X(e[1]);
          s += '<rect x="' + a.toFixed(1) + '" y="' + y0 + '" width="' + (b - a).toFixed(1) + '" height="24" fill="' + e[3] + '" stroke="#CDC6B9"/>';
          if (b - a > 34 && L(e[2])) s += '<text x="' + ((a + b) / 2).toFixed(1) + '" y="' + (y0 + 16) + '" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L(e[2]) + '</text>';
        });
        [700, 900, 1100, 1300, 1500, 1700, 1900].forEach(function (yr) {
          s += '<text x="' + X(yr).toFixed(1) + '" y="' + (y0 + 40) + '" text-anchor="middle" ' + F + ' font-size="9.5" fill="#8B857C">' + yr + '</text>' +
               '<line x1="' + X(yr).toFixed(1) + '" y1="' + (y0 + 24) + '" x2="' + X(yr).toFixed(1) + '" y2="' + (y0 + 29) + '" stroke="#B4AC9C"/>';
        });
        ev.forEach(function (e, i) {
          var x = X(e[0]), cy = y0 - 16 - e[3] * 26, strong = e[2] === 1;
          s += '<line x1="' + x.toFixed(1) + '" y1="' + y0 + '" x2="' + x.toFixed(1) + '" y2="' + (cy + 9) + '" stroke="' + (strong ? "#201E1B" : "#B4AC9C") + '" stroke-width="' + (strong ? 1.4 : 1) + '"/>' +
               '<circle cx="' + x.toFixed(1) + '" cy="' + cy + '" r="9" fill="' + (strong ? "#201E1B" : "#FBFAF7") + '" stroke="#201E1B" stroke-width="1"/>' +
               '<text x="' + x.toFixed(1) + '" y="' + (cy + 3.5) + '" text-anchor="middle" ' + F + ' font-size="9.5" fill="' + (strong ? "#FBFAF7" : "#201E1B") + '">' + (i + 1) + '</text>';
        });
        /* legend: three columns of four */
        ev.forEach(function (e, i) {
          var col = Math.floor(i / 4), row = i % 4, lx = 40 + col * 246, ly = 206 + row * 22, strong = e[2] === 1;
          s += '<circle cx="' + (lx + 8) + '" cy="' + (ly - 4) + '" r="8" fill="' + (strong ? "#201E1B" : "#FBFAF7") + '" stroke="#201E1B" stroke-width="1"/>' +
               '<text x="' + (lx + 8) + '" y="' + (ly - 0.5) + '" text-anchor="middle" ' + F + ' font-size="9" fill="' + (strong ? "#FBFAF7" : "#201E1B") + '">' + (i + 1) + '</text>' +
               '<text x="' + (lx + 22) + '" y="' + ly + '" ' + F + ' font-size="10.5" fill="#201E1B"' + (strong ? ' font-weight="600"' : '') + '>' + e[0] + ' ' + L(e[1]) + '</text>';
        });
        s += '<text x="30" y="318" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Time to scale from 650; earlier prehistory not shown. Dark markers: the three turning points.",ja:"650年以降は時間軸が比例。先史は省略。黒い印は三つの転換点。",zh:"650 年以後時間按比例；史前從略。黑色標記為三個轉捩點。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"before",
      title:{ en:"Before the provinces", ja:"国ができる前", zh:"建國之前" }, jp:"旧石器 · 縄文 · 古墳",
      body:[
        { t:"p", text:{
          en:"People crossed these mountains long before there were provinces. A black glassy andesite from Mount Yugamine above Gero — <em>Gero-ishi</em> — was worked into arrowheads and knives from the Palaeolithic to the Yayoi period and traded across central Japan as far as Shinshū and Hokuriku. In the Hida highlands, the Jōmon village at Dōnosora in Kuguno, at about 700 m, has yielded 43 dwellings arranged in a horseshoe, with pottery showing contacts with the Kantō, Shinano, Tōkai and Kinki. On the plain, the <strong>Hirui Ōtsuka</strong> tumulus at Ōgaki, 150 m long and built at the end of the fourth century, is the largest keyhole tomb in Gifu and the third-largest in the Tōkai region; excavations found about 1,500 clay haniwa that once ringed its terraces.",
          ja:"国ができるはるか前から、人々はこの山々を越えていた。下呂の湯ヶ峰に産する黒いガラス質の安山岩——<strong>下呂石</strong>——は、旧石器時代から弥生時代まで鏃や刃物に加工され、信州や北陸にまで及ぶ本州中部一円に流通した。飛騨の高地、標高約700メートルの久々野・堂之上遺跡の縄文集落からは、馬蹄形に並ぶ43の住居跡が見つかり、土器は関東・信濃・東海・近畿との交流を示す。平野では、四世紀末に築かれた大垣の<strong>昼飯大塚古墳</strong>（全長150メートル）が岐阜県最大、東海地方で三番目の前方後円墳で、発掘により段々を取り巻いていた約1,500本の埴輪が確かめられた。",
          zh:"早在國家成立之前，人們就已翻越這些山脈。下呂湯峰所產的黑色玻璃質安山岩——<strong>下呂石</strong>——從舊石器時代到彌生時代被製成箭鏃與刀刃，流通遍及本州中部，遠至信州與北陸。在飛驒高地，海拔約 700 公尺的久久野「堂之上遺址」繩文聚落，出土了 43 座呈馬蹄形排列的住居，陶器顯示與關東、信濃、東海、近畿都有往來。在平原上，四世紀末築成的大垣<strong>晝飯大塚古墳</strong>全長 150 公尺，是岐阜縣最大、東海地區第三大的前方後圓墳；發掘證實其階台曾環繞約 1,500 具埴輪。" } }
      ]
    },

    { t:"section", id:"court",
      title:{ en:"The provinces of the court: 672–1185", ja:"朝廷の国々——672〜1185年", zh:"朝廷之國：672–1185 年" }, jp:"古代",
      body:[
        { t:"p", text:{
          en:"In 672 the succession war known as the Jinshin War was decided in Mino: Prince Ōama, the future Emperor Tenmu, had troops raised on his estate in Ahachima district and sent them to hold the Fuwa pass, cutting his rival off from the east. The pass later became the Fuwa barrier, one of the three great checkpoints of the realm. Mino became an upper-rank province of eighteen districts with its capital at Tarui; its household registers of 702, written on Mino paper and preserved in the Shōsōin, are among the oldest surviving documents in Japan. Hida, too poor in rice to pay ordinary taxes, instead sent about a hundred carpenters a year to build the capitals. See <a href=\"ancient.html\">Ancient Mino &amp; Hida</a>.",
          ja:"672年、皇位を争った壬申の乱は美濃で決した。のちの天武天皇である大海人皇子は、安八磨郡の湯沐邑で兵を挙げさせ、不破の道を押さえて相手を東国から切り離した。その地はのちに天下の三関の一つ、不破関となる。美濃は十八郡からなる上国となり、国府は垂井に置かれた。美濃紙に書かれ正倉院に伝わる702年（大宝2年）の戸籍は、現存する日本最古級の文書である。米に乏しく通常の税を納められない飛騨は、代わりに年に百人ほどの大工を送り、都を造った。<a href=\"ancient.html\">古代の美濃と飛騨</a>を参照。",
          zh:"672 年，爭奪皇位的壬申之亂在美濃決勝：日後的天武天皇大海人皇子，在安八磨郡的湯沐邑起兵，並派兵扼守不破隘道，切斷對手與東國的聯繫。此隘口後來成為天下三關之一的不破關。美濃成為下轄十八郡的上等國，國府設於垂井；以美濃紙書寫、保存於正倉院的 702 年（大寶 2 年）戶籍，是日本現存最古老的文書之一。飛驒因稻米太少、繳不起一般租稅，改為每年派出約百名木匠營建京城。見<a href=\"ancient.html\">古代的美濃與飛驒</a>。" } }
      ]
    },

    { t:"section", id:"warriors",
      title:{ en:"Warriors and unifiers: 1185–1603", ja:"武士と天下人——1185〜1603年", zh:"武士與天下人：1185–1603 年" }, jp:"中世 · 戦国",
      body:[
        { t:"p", text:{
          en:"For more than two centuries Mino was the domain of the <strong>Toki</strong>, a branch of the Seiwa Minamoto who were constables of Mino and at their height of Owari and Ise as well. Under them Mino was rich and cultivated; the Zen temple Eihō-ji at Tajimi, founded in 1313, keeps two National Treasure halls from that world. In the sixteenth century the Toki were overthrown from within by the <strong>Saitō Dōsan</strong> line — a rise now thought to have taken two generations, father and son — and Dōsan's grandson lost Inabayama to <strong>Oda Nobunaga</strong> in 1567. Nobunaga renamed the town Gifu and spent nine years there preparing the campaigns that made him master of central Japan. In 1600 the decisive battle for his successors' inheritance was fought at <strong>Sekigahara</strong>, on Mino's western edge. See <a href=\"medieval.html\">The Toki &amp; the Saitō</a>, <a href=\"nobunaga.html\">Nobunaga's Gifu</a> and <a href=\"sekigahara.html\">Sekigahara</a>.",
          ja:"二世紀以上にわたり、美濃は清和源氏の流れをくむ<strong>土岐氏</strong>の国であった。土岐氏は美濃の守護を務め、最盛期には尾張・伊勢の守護も兼ねた。その時代の美濃は富み、文化が栄えた。1313年創建の多治見・永保寺は、その世界の国宝の堂を二つ伝える。十六世紀、土岐氏は内側から<strong>斎藤道三</strong>の家に取って代わられた——いまでは父子二代にわたる成り上がりと考えられている——そして道三の孫は1567年、稲葉山を<strong>織田信長</strong>に奪われる。信長は町を岐阜と改め、そこで九年を過ごして、本州中央の覇者となる戦いの準備をした。1600年、その後継をめぐる決戦が美濃の西の端、<strong>関ヶ原</strong>で戦われた。<a href=\"medieval.html\">土岐氏と斎藤氏</a>、<a href=\"nobunaga.html\">信長の岐阜</a>、<a href=\"sekigahara.html\">関ヶ原</a>を参照。",
          zh:"兩百多年間，美濃是清和源氏支流<strong>土岐氏</strong>的領地；土岐氏世任美濃守護，全盛時還兼任尾張與伊勢守護。在其治下，美濃富庶而文雅；1313 年創建的多治見永保寺，至今保存著那個世界的兩座國寶建築。十六世紀，土岐氏被<strong>齋藤道三</strong>一家由內部取代——如今認為這番崛起歷經父子兩代——而道三的孫子在 1567 年把稻葉山輸給了<strong>織田信長</strong>。信長將城鎮改名岐阜，在此度過九年，籌備讓他成為本州中央霸主的征戰。1600 年，爭奪其後繼天下的決戰，就在美濃西緣的<strong>關原</strong>展開。見<a href=\"medieval.html\">土岐氏與齋藤氏</a>、<a href=\"nobunaga.html\">信長的岐阜</a>與<a href=\"sekigahara.html\">關原</a>。" } }
      ]
    },

    { t:"section", id:"edo",
      title:{ en:"The Edo patchwork: 1603–1868", ja:"江戸の入り組んだ支配——1603〜1868年", zh:"江戶的交錯統治：1603–1868 年" }, jp:"近世",
      body:[
        { t:"p", text:{
          en:"The Tokugawa made sure that Mino, the corridor they had fought through, would never again be held by one strong lord. It was divided among small domains — Ōgaki, Kanō, Gujō, Iwamura, Naegi and others — shogunal intendancies, bannermen's fiefs and the lands of the Owari Tokugawa, whose foresters guarded the hinoki of Ura-Kiso under pain of death. Hida came under direct shogunal rule in 1692 for its timber and its mines. On the lower plain the villages walled themselves into ring levees, and in 1753–1755 the shogunate ordered the Satsuma domain, hundreds of kilometres away, to pay for and build a great river works there, at terrible cost. See <a href=\"edo.html\">The Edo Patchwork</a> and <a href=\"chisui.html\">Taming the Three Rivers</a>.",
          ja:"徳川氏は、自らが戦い抜いた回廊である美濃を、二度と一人の強い領主に握らせないようにした。美濃は大垣・加納・郡上・岩村・苗木などの小藩、幕府の代官所、旗本の知行地、そして尾張徳川家の領地に分けられた。尾張藩の山守は、裏木曽の檜を死罪をもって守った。飛騨は木材と鉱山のために1692年に幕府直轄となった。下流の平野では村々が輪中の堤で身を囲み、1753〜1755年には、幕府が何百キロも離れた薩摩藩に、そこでの大規模な治水工事の費用と工事を命じた。その代償はあまりに大きかった。<a href=\"edo.html\">江戸時代の美濃・飛騨</a>と<a href=\"chisui.html\">木曽三川の治水</a>を参照。",
          zh:"德川氏確保了美濃——這條他們一路打過來的走廊——再也不會落入單一強大領主之手。美濃被分割成大垣、加納、郡上、岩村、苗木等小藩，以及幕府代官所、旗本知行地與尾張德川家的領地；尾張藩的山林官以死罪守護裏木曾的檜木。飛驒因其木材與礦山，於 1692 年改為幕府直轄。在下游平原，村落以輪中堤防把自己圍起來；1753 至 1755 年，幕府命令遠在數百公里外的薩摩藩出資並施作一項大型治水工程，代價極其慘重。見<a href=\"edo.html\">江戶時代的美濃與飛驒</a>與<a href=\"chisui.html\">木曾三川的治水</a>。" } }
      ]
    },

    { t:"section", id:"modern",
      title:{ en:"One prefecture: 1868 to today", ja:"一つの県——1868年から今日まで", zh:"合為一縣：1868 年至今" }, jp:"近現代",
      body:[
        { t:"p", text:{
          en:"Gifu Prefecture was formed in 1871 and took in Hida in 1876. Within a generation it had its three rivers separated into their present beds under the Dutch engineer Johannis de Rijke, survived the Nōbi earthquake of 1891, and begun to industrialise: textiles on the plain, ceramics in Tōnō, cutlery at Seki, furniture at Takayama, hydroelectric power on the Kiso and aircraft at Kakamigahara. Gifu and Ōgaki were burned in the air raids of July 1945. After the war the prefecture's crafts became industries and its old towns became destinations; since the turn of the century its population has been falling. See <a href=\"modern.html\">Meiji to Now</a>.",
          ja:"岐阜県は1871年に成立し、1876年に飛騨を加えた。一世代のうちに、オランダ人技師ヨハネス・デ・レーケのもとで三川は今日の河道に分けられ、1891年の濃尾地震を乗り越え、工業化が始まった。平野の繊維、東濃の陶磁器、関の刃物、高山の家具、木曽川の水力発電、各務原の航空機。1945年7月の空襲で岐阜と大垣は焼かれた。戦後、県の工芸は産業となり、古い町並みは旅の目的地となった。世紀の変わり目から、人口は減り続けている。<a href=\"modern.html\">近代から現代へ</a>を参照。",
          zh:"岐阜縣成立於 1871 年，1876 年納入飛驒。一個世代之內，三條河川在荷蘭工程師德・雷克（Johannis de Rijke）主持下被分入今日的河道；本縣挺過了 1891 年的濃尾地震，並開始工業化：平原上的紡織、東濃的陶瓷、關市的刀具、高山的家具、木曾川的水力發電，以及各務原的飛機。1945 年 7 月的空襲燒毀了岐阜與大垣。戰後，本縣的工藝轉為產業，老街成了旅遊目的地；自世紀之交起，人口持續減少。見<a href=\"modern.html\">從明治到現在</a>。" } },
        { t:"note", label:{en:"Where sources disagree",ja:"資料が食い違うところ",zh:"資料分歧之處"}, text:{
          en:"Several dates in this history are disputed and are given here as the prevailing view: the year Nobunaga took Inabayama (1567 is standard; 1564 has been argued), the founding date of the Fuwa barrier (673 by tradition; archaeology suggests the early eighth century), and the numbers who fought at Sekigahara (commonly about 80,000 on each side, on weak evidence). The era pages note each dispute where it arises.",
          ja:"この歴史のいくつかの日付には異説があり、ここでは通説に従った。信長が稲葉山を取った年（1567年が通説、1564年説もある）、不破関の設置時期（伝承では673年、考古学的には八世紀初めとみられる）、関ヶ原の兵数（双方およそ8万とされるが根拠は弱い）などである。各時代の頁で、異説が関わるところに注記する。",
          zh:"這段歷史中有幾個年代存在爭議，此處採通行說法：信長奪取稻葉山的年份（通說為 1567 年，亦有 1564 年之說）、不破關的設置時間（傳說為 673 年，考古推斷為八世紀初），以及關原之戰的兵力（一般說雙方各約八萬，但根據薄弱）。各時代頁面會在相關之處註明爭議。" } }
      ]
    },

    { t:"related", items:[
      { href:"chronology.html", why:{ en:"Every date in the book, in one table.", ja:"本書のすべての日付を一つの表に。", zh:"本書所有年代匯於一表。" } },
      { href:"provinces.html", why:{ en:"Why the two halves of the prefecture differ.", ja:"県の二つの半分がなぜ違うのか。", zh:"本縣兩半為何不同。" } },
      { href:"people.html", why:{ en:"The people behind the dates.", ja:"日付の背後の人々。", zh:"年代背後的人物。" } },
      { href:"chisui.html", why:{ en:"The longest story of all.", ja:"すべてのなかで最も長い物語。", zh:"所有故事中最長的那一個。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- ancient */
GIFU.pages["ancient"] = {
  kicker: { en: "History · 02", ja: "歴史 · 02", zh: "歷史 · 02" },
  title:  { en: "Ancient Mino & Hida", ja: "古代の美濃と飛騨", zh: "古代的美濃與飛驒" },
  jp: "壬申の乱 · 不破関 · 御野国戸籍 · 飛騨工",
  lede: {
    en: "Between the late seventh and the tenth centuries the two provinces took the forms they would keep for a thousand years. Mino entered national history as the place where a civil war was won, received one of the realm's three great barriers, and left the oldest household registers in Japan. Hida was granted a tax arrangement found nowhere else — carpenters instead of cloth — which produced the most durable reputation in the prefecture's history. This page sets out what the documents and the excavations show.",
    ja: "七世紀後半から十世紀にかけて、二つの国は、その後千年保つことになる形を整えた。美濃は内乱の勝敗が決した地として国の歴史に登場し、天下の三関の一つを置かれ、日本最古の戸籍を残した。飛騨には他のどこにもない税の仕組み——布の代わりに大工——が与えられ、それが県の歴史で最も長く続く評判を生んだ。本頁では、史料と発掘が示すことを述べる。",
    zh: "從七世紀後半到十世紀，兩國形成了其後維持千年的樣貌。美濃以一場內戰的決勝之地進入國史，設置了天下三大關之一，並留下日本最古老的戶籍。飛驒則獲得一種他處所無的租稅安排——以木匠代替布帛——由此產生了本縣史上最持久的名聲。本頁說明史料與考古發掘所呈現的內容。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"What a province owed under the eighth-century codes, and what Hida owed instead. Ordinary provinces paid a rice tax on their fields, a labour tax usually commuted to cloth (yō), and a tribute of local products (chō). Article 39 of the Corvée Code exempted Hida from yō and chō; instead every <em>sato</em> of fifty households sent ten craftsmen to the capital for a year at a time.",
        ja:"八世紀の律令で国が負った税と、飛騨がその代わりに負ったもの。ふつうの国は田の租、多くは布で代納する庸、地方の産物を納める調を負った。賦役令第三十九条は飛騨の庸・調を免じ、代わりに五十戸からなる里ごとに十人の匠丁を、一年交代で都へ出させた。",
        zh:"八世紀律令下一般國所負擔的租稅，以及飛驒改為負擔的內容。一般國要繳交田地的「租」、通常以布折納的勞役稅「庸」，以及上繳地方物產的「調」。《賦役令》第三十九條免除飛驒的庸與調；改為每個由五十戶組成的「里」派出十名匠丁，以一年輪替的方式前往京城。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        function box(x, y, w, h, fill, t1, t2) {
          return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '" stroke="#B4AC9C"/>' +
            '<text x="' + (x + 12) + '" y="' + (y + 20) + '" ' + F + ' font-size="11.5" fill="#201E1B" font-weight="600">' + L(t1) + '</text>' +
            (t2 ? '<text x="' + (x + 12) + '" y="' + (y + 37) + '" ' + F + ' font-size="10" fill="#55504A">' + L(t2) + '</text>' : '');
        }
        var s = '<svg viewBox="0 0 760 300" role="img" aria-label="Taxes owed by an ordinary province and by Hida">' +
          '<rect x="0.5" y="0.5" width="759" height="299" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"WHAT A PROVINCE OWED", ja:"国が負ったもの", zh:"一國所負之稅" }) + '</text>' +
          '<text x="30" y="58" ' + F + ' font-size="11" fill="#55504A" letter-spacing="1.4" font-weight="600">' + L({en:"AN ORDINARY PROVINCE (e.g. MINO)",ja:"ふつうの国（例：美濃）",zh:"一般國（如美濃）"}) + '</text>' +
          '<text x="400" y="58" ' + F + ' font-size="11" fill="#55504A" letter-spacing="1.4" font-weight="600">' + L({en:"HIDA",ja:"飛騨",zh:"飛驒"}) + '</text>';
        s += box(30, 70, 330, 46, "#F0EDE4", {en:"租 so — rice tax on fields",ja:"租——田にかかる米",zh:"租——田地的稻米稅"}, {en:"paid by both",ja:"両者とも負担",zh:"兩者皆須繳納"});
        s += box(30, 124, 330, 46, "#E7DFD2", {en:"庸 yō — labour, commuted to cloth",ja:"庸——労役（多くは布で代納）",zh:"庸——勞役（多以布折納）"}, {en:"sent to the capital",ja:"都へ送る",zh:"送往京城"});
        s += box(30, 178, 330, 46, "#EDE5D2", {en:"調 chō — local products",ja:"調——地方の産物",zh:"調——地方物產"}, {en:"silk, cloth, paper, iron…",ja:"絹・布・紙・鉄など",zh:"絹、布、紙、鐵等"});
        s += box(400, 70, 330, 46, "#F0EDE4", {en:"租 so — rice tax",ja:"租——米",zh:"租——稻米"}, {en:"still owed",ja:"なお負担",zh:"仍須繳納"});
        s += '<rect x="400" y="124" width="330" height="100" fill="#E0E6DB" stroke="#201E1B" stroke-width="1.2"/>' +
             '<text x="412" y="146" ' + F + ' font-size="11.5" fill="#201E1B" font-weight="600">' + L({en:"匠丁 craftsmen — instead of yō and chō",ja:"匠丁——庸・調の代わりに",zh:"匠丁——代替庸與調"}) + '</text>' +
             '<text x="412" y="166" ' + F + ' font-size="10.5" fill="#201E1B">' + L({en:"10 men from every sato of 50 households",ja:"五十戸の里ごとに十人",zh:"每五十戶之里派出十人"}) + '</text>' +
             '<text x="412" y="184" ' + F + ' font-size="10.5" fill="#201E1B">' + L({en:"one-year terms in the capital",ja:"一年交代で都に勤める",zh:"在京城服役一年後輪替"}) + '</text>' +
             '<text x="412" y="202" ' + F + ' font-size="10.5" fill="#201E1B">' + L({en:"≈100 a year; 37 at the Bureau of Carpentry (Engishiki)",ja:"年に約百人。うち37人は木工寮（延喜式）",zh:"每年約百人；其中 37 人在木工寮（延喜式）"}) + '</text>';
        s += '<path d="M360 147 H396" stroke="#7C6B52" stroke-width="1.1" stroke-dasharray="4 3"/><path d="M360 201 H396" stroke="#7C6B52" stroke-width="1.1" stroke-dasharray="4 3"/>' +
             '<text x="30" y="258" ' + F + ' font-size="10" fill="#55504A">' + L({en:"Source: Corvée Code (賦役令), article 39 on 斐陀国, in the Yōrō codes; figures for the tenth century from the Engishiki.",ja:"出典：養老令・賦役令第三十九条（斐陀国条）。十世紀の数は延喜式による。",zh:"出處：養老令《賦役令》第三十九條（斐陀國條）；十世紀的人數據《延喜式》。"}) + '</text>' +
             '<text x="30" y="278" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Simplified: miscellaneous local corvée and other duties are omitted.",ja:"簡略図。雑徭などの負担は省略。",zh:"簡化圖：雜徭等其他負擔從略。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"jinshin",
      title:{ en:"672: the war won in Mino", ja:"672年——美濃で勝った戦", zh:"672 年：在美濃打贏的戰爭" }, jp:"壬申の乱",
      body:[
        { t:"p", text:{
          en:"When Emperor Tenji died in 671, his brother Prince Ōama withdrew to Yoshino while Tenji's son Prince Ōtomo held the court at Ōmi. In the summer of 672 Ōama moved first. According to the <em>Nihon Shoki</em>, on the 22nd day of the 6th month he sent his attendant <strong>Murakuni no Oyori</strong>, a man of Mino, and others ahead to Mino, where Ō no Homuji, steward of Ōama's estate in Ahachima district, raised troops and closed the <strong>Fuwa road</strong>. With the pass held, the eastern provinces could reinforce Ōama and not Ōtomo. Ōama set up his headquarters at Nogami, near Sekigahara, and a month later his armies won at the Seta bridge. He reigned as Emperor Tenmu.",
          ja:"671年に天智天皇が没すると、弟の大海人皇子は吉野に退き、天智の子・大友皇子が近江の朝廷を握った。672年夏、先に動いたのは大海人であった。『日本書紀』によれば、6月22日、彼は美濃出身の舎人<strong>村国男依</strong>らを美濃へ先行させ、大海人の湯沐邑がある安八磨郡の湯沐令・多品治が兵を集めて<strong>不破の道</strong>を塞いだ。峠を押さえたことで、東国の兵は大友ではなく大海人のもとへ加わることができた。大海人は関ケ原近くの野上に本営を置き、一か月後、その軍は瀬田の橋で勝った。彼は天武天皇として即位する。",
          zh:"671 年天智天皇駕崩後，其弟大海人皇子退居吉野，天智之子大友皇子掌握近江朝廷。672 年夏，大海人率先發難。據《日本書紀》，6 月 22 日他派遣出身美濃的舍人<strong>村國男依</strong>等人先行前往美濃，大海人在安八磨郡的湯沐邑之湯沐令多品治徵集兵馬，封鎖了<strong>不破道</strong>。扼住隘口，東國的兵力便能增援大海人而非大友。大海人在關原附近的野上設立大本營，一個月後，其軍隊在瀨田橋取勝。他即位為天武天皇。" } },
        { t:"p", text:{
          en:"Murakuni no Oyori's home is remembered in Kakamigahara, where the Murakuni shrine stands and where the village kabuki stage beside it — the Murakuni-za — takes its name from him. See <a href=\"kabuki.html\">Village Kabuki</a>.",
          ja:"村国男依の故郷は各務原に記憶されており、そこには村国神社があり、隣の地芝居の舞台「村国座」はその名にちなむ。<a href=\"kabuki.html\">地歌舞伎と芝居小屋</a>を参照。",
          zh:"村國男依的故鄉被記憶在各務原：那裡有村國神社，旁邊的地歌舞伎戲台「村國座」即以其為名。見<a href=\"kabuki.html\">地歌舞伎與芝居小屋</a>。" } }
      ]
    },

    { t:"section", id:"fuwa",
      title:{ en:"The Fuwa barrier", ja:"不破関", zh:"不破關" }, jp:"三関",
      body:[
        { t:"p", text:{
          en:"After the war the Fuwa pass was fortified as one of the <strong>three barriers</strong> (三関) that guarded the approaches to the capital — Fuwa on the Tōsandō, Suzuka on the Tōkaidō and Arachi on the Hokurikudō. When an emperor died or a rebellion threatened, the barriers were closed. Tradition dates Fuwa to 673; excavated finds, which are almost all of the early eighth century, and the first documentary mention of “the three barriers” in 708 suggest it was built somewhat later. The barriers were formally abolished in 789, though the ritual of closing them continued at the court for centuries.",
          ja:"乱ののち、不破の峠は都への入口を守る<strong>三関</strong>の一つとして固められた。東山道の不破、東海道の鈴鹿、北陸道の愛発である。天皇の崩御や謀反の恐れがあると、関は閉じられた（固関）。伝承では不破関の設置は673年とされるが、出土遺物のほとんどが八世紀初頭のものであること、「三関」の史料上の初見が708年（和銅元年）であることから、実際の設置はやや遅いとみられている。三関は789年（延暦8年）に廃止されたが、固関の儀式は何世紀も朝廷で続いた。",
          zh:"戰後，不破隘口被築為守衛京城要道的<strong>三關</strong>之一——東山道的不破、東海道的鈴鹿、北陸道的愛發。每逢天皇駕崩或有謀反之虞，便關閉三關（固關）。傳說不破關設於 673 年；但出土遺物幾乎都屬八世紀初，且「三關」首見於史料是在 708 年（和銅元年），顯示實際建置要晚一些。三關於 789 年（延曆 8 年）正式廢止，但固關的儀式在朝廷又延續了好幾個世紀。" } },
        { t:"quote",
          text:{ en:"No one lives here now: the board eaves of the Fuwa barrier-house have fallen in, and since they did, there is only the autumn wind.",
                 ja:"人住まぬ不破の関屋の板びさし荒れにしのちはただ秋の風",
                 zh:"無人居此處，不破關屋板簷頹；自從荒廢後，唯餘秋風吹。" },
          cite:{ en:"Fujiwara no Yoshitsune, Shin Kokin Wakashū (1205)", ja:"藤原良経『新古今和歌集』（1205年）", zh:"藤原良經《新古今和歌集》（1205 年）" } }
      ]
    },

    { t:"section", id:"mino",
      title:{ en:"The province of Mino", ja:"美濃国", zh:"美濃國" }, jp:"国府 · 国分寺 · 戸籍",
      body:[
        { t:"grid", cols:2, cells:[
          { h:{en:"Provincial capital",ja:"国府",zh:"國府"}, jp:"美濃国府跡 · 垂井町",
            d:{en:"At Fuchū in Tarui. Excavations from 1991 to 2003 found the main hall and flanking halls of the government compound in an area about 400 m by 430 m; the site is a National Historic Site.",ja:"垂井町府中。1991〜2003年の発掘で、東西約400メートル・南北約430メートルの範囲に政庁の正殿・脇殿などが見つかった。国史跡。",zh:"位於垂井町府中。1991 至 2003 年的發掘，在東西約 400 公尺、南北約 430 公尺的範圍內發現了政廳的正殿與脇殿；為國家史跡。"} },
          { h:{en:"Provincial temple",ja:"国分寺",zh:"國分寺"}, jp:"美濃国分寺跡 · 大垣市",
            d:{en:"Founded under Emperor Shōmu's edict of 741, in what is now Ōgaki. The whole precinct, about four hectares, has been laid out on the ground; the foundations of its seven-storey pagoda suggest a height of about 60 m.",ja:"聖武天皇の741年の詔により、いまの大垣市に建てられた。約4ヘクタールの寺域全体が地表に復元表示され、七重塔の基壇からは高さ約60メートルと推定される。",zh:"依聖武天皇 741 年的詔令建於今大垣市。約四公頃的整個寺域已在地面上復原標示；由七重塔的塔基推估，塔高約 60 公尺。"} },
          { h:{en:"First shrine",ja:"一宮",zh:"一之宮"}, jp:"南宮大社 · 垂井町",
            d:{en:"Nangū Taisha, whose god Kanayamahiko is the deity of mines and metalworking; it is regarded as the head shrine of the metal trades across Japan. Its eighteen Edo-period buildings are Important Cultural Properties. See <a href=\"metal.html\">Metal in Gifu</a>.",ja:"南宮大社。祭神の金山彦命は鉱山と金属の神で、全国の鉱山・金属業の総本宮とされる。江戸時代の社殿十八棟が重要文化財。<a href=\"metal.html\">岐阜の金属</a>を参照。",zh:"南宮大社，其祭神金山彥命為礦山與金屬加工之神，被視為全日本金屬業的總本宮。其江戶時代的十八棟社殿皆為重要文化財。見<a href=\"metal.html\">岐阜的金屬</a>。"} },
          { h:{en:"Registers of 702",ja:"702年の戸籍",zh:"702 年戶籍"}, jp:"御野国戸籍 · 正倉院",
            d:{en:"Household registers of 702 for six Mino villages survive in the Shōsōin, written on Mino paper — among the oldest surviving registers and paper documents in Japan. One, for Hanyū village in Kamo district, is today's Tomika.",ja:"美濃六か里の702年（大宝2年）の戸籍が正倉院に残る。美濃紙に書かれ、現存最古級の戸籍・紙の文書である。その一つ、加毛郡半布里は現在の富加町にあたる。",zh:"美濃六個里於 702 年（大寶 2 年）編成的戶籍保存在正倉院，以美濃紙書寫，是日本現存最古老的戶籍與紙本文書之一。其中加毛郡半布里即今日的富加町。"} }
        ] }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"The province of Hida", ja:"飛騨国", zh:"飛驒國" }, jp:"飛騨工",
      body:[
        { t:"p", text:{
          en:"Hida was a lower-rank province of three districts, reached by a branch of the Tōsandō that climbed from Mino along the Hida River through post stations such as Shimo-no-tomari — the origin of the name Gero. Its provincial temple still stands in Takayama: <strong>Hida Kokubunji</strong>, whose main hall dates from the Muromachi period and whose great ginkgo, more than 1,200 years old and said to have been planted at the temple's founding, is a national natural monument. The first shrine of the province is Minashi Jinja at Ichinomiya in Takayama.",
          ja:"飛騨は三郡からなる下国で、美濃から飛騨川沿いに上る東山道の支路が通じ、下留（しものとまり）——下呂の名の由来——などの駅家が置かれた。国分寺はいまも高山にある。<strong>飛騨国分寺</strong>の本堂は室町時代の建築で、寺の創建時に植えられたと伝わる樹齢1,200年を超える大イチョウは国の天然記念物である。国の一宮は高山市一之宮町の水無神社である。",
          zh:"飛驒是下轄三郡的下等國，由東山道支線從美濃沿飛驒川上行通達，沿途設有「下留（しものとまり）」等驛站——即下呂之名的由來。其國分寺至今仍在高山：<strong>飛驒國分寺</strong>的本堂建於室町時代，寺中相傳於創寺時栽下、樹齡逾 1,200 年的大銀杏，是國家天然紀念物。該國的一之宮是高山市一之宮町的水無神社。" } },
        { t:"p", text:{
          en:"What made Hida unique was its tax. Under Article 39 of the Corvée Code, Hida was excused the <em>yō</em> and <em>chō</em> that every other province paid in cloth and goods; instead each <em>sato</em> of fifty households sent ten craftsmen to the capital for a year. About a hundred <strong>Hida no takumi</strong> worked each year on the palaces, temples and offices of Fujiwara-kyō, Heijō-kyō and Heian-kyō. The records also show the strain: the tenth-century <em>Engishiki</em> fixes their number at a hundred, of whom thirty-seven served in the Bureau of Carpentry, and orders repeatedly deal with men who ran away rather than serve out their term. See <a href=\"takumi.html\">Hida no Takumi</a>.",
          ja:"飛騨を特別にしたのは税であった。賦役令第三十九条により、飛騨はほかのすべての国が布や物で納めた庸と調を免じられ、代わりに五十戸の里ごとに十人の匠丁を一年交代で都へ出した。毎年およそ百人の<strong>飛騨工</strong>が、藤原京・平城京・平安京の宮殿・寺院・官衙の造営に従った。記録はその重さも伝える。十世紀の『延喜式』は定員を百人とし、うち三十七人が木工寮に勤めるとし、また任期を終えずに逃げ出す者への対応がたびたび命じられている。<a href=\"takumi.html\">飛騨の匠</a>を参照。",
          zh:"讓飛驒與眾不同的是它的租稅。依《賦役令》第三十九條，飛驒免繳其他各國以布帛與物產繳納的庸與調；改為每五十戶之里派出十名匠丁，赴京服役一年。每年約有百名<strong>飛驒工</strong>投入藤原京、平城京與平安京的宮殿、寺院與官署營建。史料也透露出其沉重：十世紀的《延喜式》將名額定為一百人，其中三十七人在木工寮服役；而朝廷一再下令處理那些不願服滿役期而逃亡的人。見<a href=\"takumi.html\">飛驒工匠</a>。" } }
      ]
    },

    { t:"related", items:[
      { href:"takumi.html", why:{ en:"How a tax became a reputation.", ja:"税がいかにして評判になったか。", zh:"一種稅如何變成一種名聲。" } },
      { href:"washi.html", why:{ en:"The paper of the registers of 702.", ja:"702年の戸籍の紙。", zh:"702 年戶籍所用的紙。" } },
      { href:"sekigahara.html", why:{ en:"The same pass, nine centuries later.", ja:"九百年後の同じ峠。", zh:"九百年後的同一個隘口。" } },
      { href:"names.html", why:{ en:"How Mino and Hida got their characters.", ja:"美濃と飛騨の字の由来。", zh:"美濃與飛驒的用字由來。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- medieval */
GIFU.pages["medieval"] = {
  kicker: { en: "History · 03", ja: "歴史 · 03", zh: "歷史 · 03" },
  title:  { en: "The Toki & the Saitō", ja: "土岐氏と斎藤氏", zh: "土岐氏與齋藤氏" },
  jp: "鎌倉 · 室町 · 戦国 · 1185–1567",
  lede: {
    en: "For most of the Middle Ages Mino belonged to one family, the Toki, and was among the richest and most cultivated provinces outside the capital: its lords were poets and painters, its Zen temples trained the monks who founded Kyoto's great monasteries, and its smiths began to make swords. In the sixteenth century the Toki were pushed aside from within by the Saitō — the story of Saitō Dōsan, “the viper of Mino”, is Japan's archetype of the underling who overthrows his lord. Hida, meanwhile, was contested by a handful of local houses until an outside general took it for Hideyoshi in 1585.",
    ja: "中世の大半、美濃は土岐氏という一つの家のものであり、都の外では屈指の豊かで文化の高い国であった。領主は歌を詠み絵を描き、禅寺は京都の大寺を開く僧を育て、刀鍛冶が刀を打ち始めた。十六世紀、土岐氏は内側から斎藤氏に押しのけられる——「美濃のマムシ」斎藤道三の物語は、下剋上の日本における典型である。一方の飛騨は、いくつかの在地の家が争い合い、1585年に外から来た武将が秀吉のためにこれを平らげた。",
    zh: "中世大部分時間，美濃屬於一個家族——土岐氏，是京城以外最富庶、最有文化的國之一：其領主吟詩作畫，其禪寺培養出日後開創京都大寺的僧人，其鍛冶也開始打造刀劍。十六世紀，土岐氏被齋藤氏從內部排擠——「美濃之蝮」齋藤道三的故事，是日本「以下剋上」的原型。與此同時，飛驒由幾個在地家族相互爭奪，直到 1585 年一位外來的武將為豐臣秀吉平定了它。"
  },
  body: [
    { t:"section", id:"toki",
      title:{ en:"The Toki: two centuries of Mino", ja:"土岐氏——二百年の美濃", zh:"土岐氏：兩百年的美濃" }, jp:"美濃源氏",
      body:[
        { t:"p", text:{
          en:"The Toki were a branch of the Seiwa Minamoto who settled in Toki district, in the south-east of Mino, in the late Heian period and took its name. They backed Ashikaga Takauji in the wars that founded the Muromachi shogunate, and <strong>Toki Yorisada</strong> — remembered also as a <em>waka</em> poet — became constable (<em>shugo</em>) of Mino. His grandson <strong>Toki Yoriyasu</strong> held Owari and Ise as well, the family's high point. The Toki governed from the plain near modern Gifu city, and the family's many branches — among them the Akechi — spread across the province.",
          ja:"土岐氏は清和源氏の一流で、平安時代後期に美濃南東部の土岐郡に土着し、その名を名乗った。室町幕府を開く戦いで足利尊氏に与し、<strong>土岐頼貞</strong>——歌人としても知られる——が美濃守護となった。孫の<strong>土岐頼康</strong>は尾張・伊勢の守護も兼ね、これが一族の最盛期である。土岐氏は現在の岐阜市に近い平野に拠って国を治め、明智氏をはじめとする多くの庶流が国中に広がった。",
          zh:"土岐氏是清和源氏的一支，於平安時代後期落腳美濃東南部的土岐郡，並以郡名為姓。他們在開創室町幕府的戰爭中支持足利尊氏，<strong>土岐賴貞</strong>——亦以和歌詩人為人所知——出任美濃守護。其孫<strong>土岐賴康</strong>兼領尾張與伊勢，是家族的巔峰。土岐氏以今岐阜市附近的平原為據點治理全國，眾多支族——明智氏即為其一——遍布美濃各地。" } },
        { t:"p", text:{
          en:"They were a cultivated family. A tradition of hawk painting, the <em>Toki no taka</em>, runs through several of its members; paintings of hawks attributed to Toki Yorinari, the last Toki lord of Mino, survive at the temple Kaigen-in in Mizunami and elsewhere, and works signed by painters of the same name-circle are in the Tokyo National Museum.",
          ja:"土岐氏は教養ある一族であった。一族の何人かには「土岐の鷹」と呼ばれる鷹の絵の伝統が受け継がれ、美濃最後の土岐氏の守護・土岐頼芸の筆と伝わる鷹の図が瑞浪市の開元院などに残り、同じ一門の画人の落款を持つ作品は東京国立博物館にある。",
          zh:"土岐氏是個有文化的家族。「土岐之鷹」的畫鷹傳統貫穿其多位成員；相傳出自美濃最後一位土岐氏守護土岐賴藝之手的鷹圖，保存在瑞浪市的開元院等處，而同一族畫人落款的作品則收藏於東京國立博物館。" } }
      ]
    },

    { t:"section", id:"zen",
      title:{ en:"Zen in Mino", ja:"美濃の禅", zh:"美濃的禪" }, jp:"永保寺 · 正眼寺 · 瑞龍寺",
      body:[
        { t:"defs", items:[
          { term:{en:"Eihō-ji, Tajimi",ja:"永保寺（多治見市）",zh:"永保寺（多治見市）"}, jp:"虎渓山 · 1313", def:{
            en:"Founded in 1313 by Musō Soseki, the most influential Zen monk and garden-maker of his age. Its Kannon hall (1314) and founder's hall are National Treasures, the latter a prototype of the later <em>gongen</em> style of shrine building; the pond garden is a Place of Scenic Beauty. The mountain name, Kokeizan, comes from the Tiger Stream on Mount Lu in China, which the landscape was said to resemble.",
            ja:"1313年（正和2年）、当代最大の禅僧で作庭家でもあった夢窓疎石が開いた。観音堂（1314年）と開山堂は国宝で、開山堂は後の権現造の原型とされる。池泉の庭は国の名勝。山号「虎渓山」は、景色が中国廬山の虎渓に似ていることに由来するという。",
            zh:"1313 年（正和 2 年）由當代最具影響力的禪僧兼造園家夢窗疏石開創。其觀音堂（1314 年）與開山堂皆為國寶，開山堂被視為日後神社「權現造」的原型；池泉庭園為國家名勝。山號「虎溪山」，據說因景色似中國廬山的虎溪而得名。"} },
          { term:{en:"Shōgen-ji, Minokamo",ja:"正眼寺（美濃加茂市）",zh:"正眼寺（美濃加茂市）"}, jp:"伊深 · c. 1330", def:{
            en:"Around 1330 the monk Kanzan Egen retired to the village of Ibuka in Mino and lived there in seclusion for eight or nine years before being called to Kyoto to found Myōshin-ji, which became the largest Rinzai school in Japan. The temple that grew on his hermitage, Shōgen-ji, is still a strict training monastery and is called the inner temple of Myōshin-ji.",
            ja:"1330年ごろ、関山慧玄は美濃の伊深の里に隠れ住み、八、九年のあいだ修行したのち京都に招かれて妙心寺を開いた。妙心寺派はのちに日本最大の臨済宗の派となる。その庵の跡に育った正眼寺は、いまも厳しい修行道場で、妙心寺の奥の院と呼ばれる。",
            zh:"約 1330 年，僧人關山慧玄隱居於美濃的伊深村，修行八、九年後受召赴京都開創妙心寺，妙心寺派後來成為日本最大的臨濟宗派別。在其草庵舊址發展起來的正眼寺，至今仍是嚴格的修行道場，被稱為妙心寺的「奧之院」。"} },
          { term:{en:"Zuiryū-ji, Gifu",ja:"瑞龍寺（岐阜市）",zh:"瑞龍寺（岐阜市）"}, jp:"1468", def:{
            en:"Founded in 1468 by Saitō Myōchin, the deputy who ran Mino for the Toki during the Ōnin War, as the funerary temple of his lord Toki Shigeyori. It became one of the principal Myōshin-ji temples of the region.",
            ja:"1468年（応仁2年）、応仁の乱のさなかに土岐氏に代わって美濃を切り盛りした守護代・斎藤妙椿が、主君・土岐成頼の菩提所として開いた。地方における妙心寺派の中心寺院の一つとなった。",
            zh:"1468 年（應仁 2 年），在應仁之亂期間代土岐氏主持美濃政務的守護代齋藤妙椿，為其主君土岐成賴建立此寺作為菩提寺。後來成為當地妙心寺派的主要寺院之一。"} }
        ] },
        { t:"note", label:{en:"Also in these centuries",ja:"同じ時代に",zh:"同一時代"}, text:{
          en:"The first swordsmiths are recorded at Seki from the fourteenth century, and by the fifteenth the town had a guild of smiths under the protection of its Kasuga shrine; the trade grew with the wars that followed. See <a href=\"seki.html\">Seki, Town of Blades</a>.",
          ja:"関では十四世紀から刀鍛冶の名が記録に現れ、十五世紀には春日神社の庇護のもとに鍛冶の座があった。その商いは続く戦乱とともに大きくなる。<a href=\"seki.html\">刃物のまち・関</a>を参照。",
          zh:"關市自十四世紀起便有刀匠的紀錄，到十五世紀已有在春日神社庇護下的鍛冶同業組織；這門行業隨後續的戰亂而壯大。見<a href=\"seki.html\">刀刃之城・關</a>。" } }
      ]
    },

    { t:"section", id:"dosan",
      title:{ en:"Saitō Dōsan, the viper of Mino", ja:"斎藤道三——美濃のマムシ", zh:"齋藤道三——美濃之蝮" }, jp:"下剋上",
      body:[
        { t:"p", text:{
          en:"The traditional story, made famous by Shiba Ryōtarō's novel <em>Kunitori Monogatari</em>, has a single man — an oil seller, once a monk — rise by murder and betrayal from nothing to master of Mino. A letter of 1560 by the warlord Rokkaku Jōtei, which came to light in the twentieth century, tells it differently: the rise began with Dōsan's father, who came to Mino from Kyoto, entered the service of the Nagai family and became a leading retainer as Nagai Shin-zaemon-no-jō; Dōsan continued it. Historians now generally speak of a two-generation seizure. By the 1540s Dōsan controlled the province, and he finally drove out the last Toki lord, Toki Yorinari, in the early 1550s.",
          ja:"司馬遼太郎の小説『国盗り物語』で広く知られた伝統的な話では、一人の男——油売りで、もとは僧——が殺しと裏切りによって無から美濃の主にまで成り上がる。二十世紀になって知られるようになった六角承禎の1560年の書状は、別の話を伝える。成り上がりは道三の父に始まった。父は京都から美濃に来て長井氏に仕え、長井新左衛門尉として重臣になり、道三がそれを受け継いだ。いまでは歴史家の多くが、国盗りは父子二代によるものと考えている。1540年代には道三が国を握り、1550年代初めに最後の土岐氏の守護・土岐頼芸を追放した。",
          zh:"傳統故事因司馬遼太郎的小說《國盜物語》而廣為人知：一個人——賣油郎出身、曾經為僧——靠謀殺與背叛白手起家，成為美濃之主。但二十世紀才為人所知、戰國大名六角承禎於 1560 年寫的一封書信，說法不同：這番崛起始於道三的父親——他從京都來到美濃，仕於長井氏，以「長井新左衛門尉」之名成為重臣；道三則繼承並完成了它。如今史家普遍稱之為父子兩代的奪國。到 1540 年代，道三已掌控全國，並於 1550 年代初逐走了最後一位土岐氏守護土岐賴藝。" } },
        { t:"p", text:{
          en:"His end was of a piece with his rise. In 1549 he married his daughter, known as Nōhime, to the young Oda Nobunaga of Owari. In 1556 his own son Saitō Yoshitatsu turned on him, and Dōsan was killed at the Battle of the Nagara River. A letter bequeathing Mino to Nobunaga, said to have been written the night before, has been preserved; whether or not it is genuine, Nobunaga used his father-in-law's claim, and eleven years later he took the province.",
          ja:"その最期は成り上がりと同じ色をしていた。1549年、道三は娘——濃姫として知られる——を尾張の若い織田信長に嫁がせた。1556年、息子の斎藤義龍が父に背き、道三は長良川の戦いで討たれた。前夜に書かれたとされる、美濃を信長に譲るという遺言状が伝わっている。真偽はともかく、信長は舅の権利を掲げ、十一年後にこの国を取った。",
          zh:"他的結局與他的崛起如出一轍。1549 年，他把女兒——人稱濃姬——嫁給尾張的年輕人織田信長。1556 年，他的兒子齋藤義龍倒戈相向，道三在長良川之戰中被殺。一封相傳寫於戰前一夜、將美濃讓給信長的遺書保存了下來；無論其真偽，信長都援引了岳父的名分，十一年後拿下了這個國。" } },
        { t:"note", label:{en:"On dates",ja:"年代について",zh:"關於年代"}, text:{
          en:"The date of Yorinari's final expulsion is given variously as 1552 or a little later, and the details of the Dōsan story before the 1530s rest on few documents. This book follows the two-generation account.",
          ja:"頼芸の最終的な追放の年は1552年とも、それより少し後ともされ、1530年代以前の道三の話の細部を支える史料は少ない。本書は父子二代説に従う。",
          zh:"賴藝最終被逐的年份有 1552 年或稍晚之說，而 1530 年代以前道三故事的細節所依據的史料甚少。本書採父子兩代之說。" } }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"Hida in the age of war", ja:"戦国の飛騨", zh:"戰國時代的飛驒" }, jp:"姉小路 · 三木 · 江馬 · 内ヶ島 · 金森",
      body:[
        { t:"p", text:{
          en:"In the fourteenth and fifteenth centuries Hida was governed, unusually, by a court family: the Anegakōji, noble provincial governors who lived in the province. Local warrior houses divided the valleys between them — the Ema in the Takahara valley around Kamioka, whose restored residence and garden are a National Historic Site; the Uchigashima in Shirakawa, rich from gold and silver mines; and above all the Mitsuki (or Miki), who absorbed the Anegakōji name and made themselves masters of most of the province. In 1585 Toyotomi Hideyoshi sent <strong>Kanamori Nagachika</strong>, a former general of Nobunaga, into Hida; the Mitsuki fell, and the next year the Tenshō earthquake buried the Uchigashima and their castle at Kaerikumo. Kanamori received the whole province and built the castle and town of <strong>Takayama</strong>.",
          ja:"十四・十五世紀の飛騨は、珍しいことに公家に治められていた。国に住む国司の家、姉小路氏である。谷々は在地の武家が分け合った——神岡を中心とする高原川流域の江馬氏（復元された館と庭園は国史跡）、金銀山で富んだ白川の内ヶ島氏、そして何より、姉小路の名を取り込み国の大半を支配した三木氏である。1585年、豊臣秀吉は信長の旧臣<strong>金森長近</strong>を飛騨へ送り、三木氏は滅び、翌年の天正地震が内ヶ島氏を帰雲城とともに埋めた。金森は飛騨一国を与えられ、<strong>高山</strong>の城と町を築いた。",
          zh:"十四、十五世紀的飛驒，罕見地由一個公家統治：常駐在國內的國司之家——姉小路氏。各個河谷由在地武家分據：以神岡為中心的高原川流域的江馬氏（其復原的館舍與庭園為國家史跡）；因金銀礦而富有的白川內島氏；而最重要的是吞併姉小路名號、掌控全國大半的三木氏。1585 年，豐臣秀吉派信長的舊將<strong>金森長近</strong>攻入飛驒，三木氏覆滅；翌年的天正地震則把內島氏連同其歸雲城一併掩埋。金森受封飛驒一國，建立了<strong>高山</strong>的城池與城下町。" } }
      ]
    },

    { t:"related", items:[
      { href:"nobunaga.html", why:{ en:"What happened when Nobunaga took Inabayama.", ja:"信長が稲葉山を取って何が起きたか。", zh:"信長奪下稻葉山之後發生的事。" } },
      { href:"sword.html", why:{ en:"The Mino sword tradition born in these centuries.", ja:"この時代に生まれた美濃伝の刀。", zh:"誕生於這幾個世紀的美濃傳刀劍。" } },
      { href:"faith.html", why:{ en:"The temples and shrines of medieval Mino and Hida.", ja:"中世の美濃・飛騨の社寺。", zh:"中世美濃與飛驒的寺社。" } },
      { href:"towns.html", why:{ en:"Takayama, the town Kanamori built.", ja:"金森が築いた町・高山。", zh:"金森所建的城鎮——高山。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- nobunaga */
GIFU.pages["nobunaga"] = {
  kicker: { en: "History · 04", ja: "歴史 · 04", zh: "歷史 · 04" },
  title:  { en: "Nobunaga's Gifu", ja: "信長の岐阜", zh: "信長的岐阜" },
  jp: "岐阜城 · 居館 · 楽市 · 1567–1576",
  lede: {
    en: "For nine years, from 1567 to 1576, the town below Kinkazan was the seat of Oda Nobunaga, and the campaigns that brought him to Kyoto and to the mastery of central Japan were planned from it. He built a castle on the summit and a palace at the foot, freed the market of Kanō from tolls and guild monopolies, and received his guests with the cormorant fishing on the Nagara. A Portuguese Jesuit who was shown round in 1569 compared the crowded town to Babylon. Excavation since 1984 has turned that description into ground plans.",
    ja: "1567年から1576年までの九年間、金華山の麓の町は織田信長の本拠であり、彼を京都へ、そして本州中央の覇権へと導いた戦いは、ここから計画された。信長は山頂に城を、麓に館を築き、加納の市を関銭や座の独占から解き放ち、客人を長良川の鵜飼でもてなした。1569年に案内されたポルトガル人イエズス会士は、混み合う町をバビロンにたとえた。1984年以来の発掘は、その描写を地面の上の平面図に変えつつある。",
    zh: "從 1567 到 1576 年的九年間，金華山下的城鎮是織田信長的據點；那些讓他進入京都、進而稱霸本州中央的征戰，都在這裡籌劃。他在山頂築城、在山腳建造宮殿，讓加納的市集擺脫關稅與同業壟斷，並以長良川的鵜飼款待賓客。1569 年一位受邀參觀的葡萄牙耶穌會士，把擁擠的城鎮比作巴比倫。1984 年以來的考古發掘，正把那段描述轉化為地面上的平面圖。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Nobunaga's Gifu in section. The castle on the summit of Kinkazan, about 329 m; the palace at the western foot, with its stone-walled gardens and gold-leafed roof tiles; the town and its river port on the Nagara; and the market of Kanō to the south. Schematic, not to scale.",
        ja:"信長の岐阜を断面で見る。金華山（約329m）山頂の城、西麓の石垣の庭と金箔瓦をもつ館、長良川の川湊を持つ城下町、そして南の加納の市。模式図、縮尺不同。",
        zh:"剖面中的信長岐阜。金華山（約 329 公尺）山頂的城、西麓擁有石垣庭園與金箔瓦的宮殿、臨長良川河港的城下町，以及南方的加納市集。示意圖，非按比例。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 320" role="img" aria-label="Section through Kinkazan and the town of Gifu">' +
          '<rect x="0.5" y="0.5" width="759" height="319" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"KINKAZAN AND THE TOWN, c. 1570", ja:"金華山と城下町（1570年ごろ）", zh:"金華山與城下町（約 1570 年）" }) + '</text>';
        /* ground */
        s += '<path d="M30 250 L230 250 C300 250 330 238 360 220 C400 190 430 120 470 74 C490 58 510 58 530 74 C570 112 600 180 640 220 C670 246 700 250 730 250 L730 280 L30 280 Z" fill="#E0E6DB" stroke="#8B857C" stroke-width="1"/>' +
             '<rect x="30" y="250" width="110" height="10" fill="#E0E7E9" stroke="#8FA6AE"/>';
        /* castle */
        s += '<rect x="486" y="46" width="28" height="18" fill="#FBFAF7" stroke="#201E1B"/><path d="M482 46 L500 34 L518 46 Z" fill="#FBFAF7" stroke="#201E1B"/>' +
             '<text x="540" y="46" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"summit castle ≈329 m",ja:"山上の城 約329m",zh:"山頂城郭 約329m"}) + '</text>' +
             '<text x="540" y="61" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"gold-leafed tiles found 2012",ja:"2012年に金箔瓦が出土",zh:"2012 年出土金箔瓦"}) + '</text>';
        /* palace */
        s += '<rect x="330" y="214" width="46" height="20" fill="#EDE5D2" stroke="#201E1B"/><path d="M326 214 L353 200 L380 214 Z" fill="#EDE5D2" stroke="#201E1B"/>' +
             '<path d="M380 234 C388 224 394 214 402 206" stroke="#7C6B52" stroke-width="1" fill="none"/>' +
             '<text x="236" y="178" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"palace at the foot",ja:"山麓の居館",zh:"山麓宮殿"}) + '</text>' +
             '<text x="236" y="193" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"stone gardens, 4 storeys (Fróis)",ja:"巨石の庭、四階建て（フロイス）",zh:"巨石庭園、四層（佛洛伊斯）"}) + '</text>' +
             '<path d="M300 198 L338 212" stroke="#B4AC9C" stroke-width="1"/>';
        /* path up */
        s += '<path d="M376 224 C410 200 430 160 452 120 C466 96 478 76 490 64" fill="none" stroke="#7C6B52" stroke-width="1" stroke-dasharray="3 3"/>';
        /* town and river */
        s += '<text x="40" y="242" ' + F + ' font-size="10" font-style="italic" fill="#5E7780">' + L({en:"Nagara River",ja:"長良川",zh:"長良川"}) + '</text>' +
             '<rect x="150" y="238" width="12" height="12" fill="#FBFAF7" stroke="#55504A"/><rect x="170" y="238" width="12" height="12" fill="#FBFAF7" stroke="#55504A"/><rect x="190" y="238" width="12" height="12" fill="#FBFAF7" stroke="#55504A"/><rect x="210" y="238" width="12" height="12" fill="#FBFAF7" stroke="#55504A"/>' +
             '<text x="150" y="226" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"castle town",ja:"城下町",zh:"城下町"}) + '</text>' +
             '<text x="40" y="274" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"cormorant fishing for guests",ja:"客人をもてなす鵜飼",zh:"款待賓客的鵜飼"}) + '</text>';
        /* Kano */
        s += '<text x="640" y="206" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"→ Kanō market",ja:"→ 加納の市",zh:"→ 加納市集"}) + '</text>' +
             '<text x="640" y="221" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"rakuichi decree, 1567",ja:"楽市の制札（1567年）",zh:"樂市制札（1567 年）"}) + '</text>';
        s += '<text x="30" y="306" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — the market of Kanō lay south of the town, not east of the mountain.",ja:"模式図——加納の市は山の東ではなく町の南にあった。",zh:"示意圖——加納市集位於城鎮南方，而非山的東側。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"taking",
      title:{ en:"Taking Inabayama", ja:"稲葉山を取る", zh:"奪取稻葉山" }, jp:"1567",
      body:[
        { t:"p", text:{
          en:"After Saitō Dōsan's death in 1556, Nobunaga fought his brother-in-law Yoshitatsu and then Yoshitatsu's son Tatsuoki for a decade, winning over the leading Mino retainers — the three men known as the Mino Triumvirate among them — before he could take the Saitō stronghold of Inabayama. The castle fell in the eighth month of 1567 by the standard reckoning (an earlier date, 1564, has also been argued). Nobunaga moved his seat from Komaki in Owari, renamed the town Gifu and began to seal his letters with <em>tenka fubu</em>. See <a href=\"names.html\">The Name “Gifu”</a>.",
          ja:"1556年に斎藤道三が死ぬと、信長は義兄の義龍と、ついでその子・龍興と十年にわたって戦い、「美濃三人衆」と呼ばれた三人をはじめとする美濃の有力家臣を味方につけたうえで、ようやく斎藤氏の拠点・稲葉山を取った。城が落ちたのは通説で1567年（永禄10年）8月（1564年＝永禄7年とする説もある）。信長は尾張の小牧から居を移し、町を岐阜と改め、書状に「天下布武」の印を捺し始めた。<a href=\"names.html\">「岐阜」という名</a>を参照。",
          zh:"1556 年齋藤道三死後，信長與其內兄義龍、再與義龍之子龍興鏖戰十年，並爭取到美濃的重要家臣——包括人稱「美濃三人眾」的三人——才終於攻下齋藤氏的據點稻葉山。依通說，城在 1567 年（永祿 10 年）8 月陷落（亦有 1564 年之說）。信長把據點從尾張的小牧遷來，將城鎮改名岐阜，並開始在書信上蓋「天下布武」之印。見<a href=\"names.html\">「岐阜」之名</a>。" } }
      ]
    },

    { t:"section", id:"palace",
      title:{ en:"The palace at the foot of the mountain", ja:"山麓の館", zh:"山腳下的宮殿" }, jp:"信長公居館跡",
      body:[
        { t:"quote",
          text:{ en:"The palace stands at the foot of a very high mountain, on whose summit is his principal castle; it is surrounded by walls of astonishing size, built of undressed stone… The town has eight to ten thousand inhabitants, and the traffic of people coming and going on business is so great that it reminds one of the confusion of Babylon.",
                 ja:"宮殿は非常に高い山の麓にあり、その山頂に彼の主城がある。驚くべき大きさの加工されない石の壁がそれを取り囲んでいる……町の住民は八千から一万人で、商いや用向きで行き来する人々はおびただしく、バビロンの混雑を思わせる。",
                 zh:"宮殿位於一座極高之山的山腳，山頂是他的主城；四周圍繞著大得驚人、未經加工的石牆……城鎮住民約八千到一萬人，因買賣與事務往來的人潮之多，令人想起巴比倫的擁擠。" },
          cite:{ en:"Luís Fróis, on his visit of 1569, in his History of Japan (paraphrased from the Japanese translation)", ja:"ルイス・フロイス、1569年の訪問について『日本史』より（邦訳からの要約）", zh:"路易斯・佛洛伊斯記其 1569 年之行，《日本史》（據日譯本摘述）" } },
        { t:"p", text:{
          en:"Fróis, a Jesuit priest, was shown the palace by Nobunaga himself in the summer of 1569 and described four storeys of rooms, gilded fittings, fine polished timber and gardens with ponds. Excavation of the site, in what is now Gifu Park, began in 1984 and has confirmed much of it: an entrance lined with huge upright stones, terraced compounds walled with great rocks, ponds and waterfalls built against the natural cliff, and buildings roofed with gold-leafed tiles. In 2012 gold-leafed tiles decorated with chrysanthemum and peony were found on the summit as well — the earliest known use of gold-leafed tiles in a castle, before Azuchi.",
          ja:"イエズス会士フロイスは1569年夏、信長自身の案内で館を見学し、四層の座敷、金をちりばめた調度、磨き上げた上質の木材、池のある庭を書き留めた。いまの岐阜公園にあたる館跡の発掘は1984年に始まり、その多くを確かめた。巨石を立て並べた入口、大きな岩で囲まれた段々の曲輪、自然の岩壁を背にした池や滝、そして金箔瓦で葺かれた建物である。2012年には山上でも菊や牡丹の文様の金箔瓦が見つかった。安土城に先立つ、城における金箔瓦の最古の例である。",
          zh:"耶穌會士佛洛伊斯於 1569 年夏由信長親自導覽參觀宮殿，記下了四層的廳室、鍍金的陳設、打磨精良的上等木材，以及有池塘的庭園。位於今岐阜公園的遺址自 1984 年開始發掘，證實了其中許多描述：以巨石豎立排列的入口、以大岩石圍起的階梯狀曲輪、倚著天然岩壁而造的池塘與瀑布，以及鋪著金箔瓦的建築。2012 年，山頂也出土了飾有菊花與牡丹紋樣的金箔瓦——這是城郭使用金箔瓦的最早已知例子，早於安土城。" } },
        { t:"grid", cols:3, cells:[
          { k:{en:"National Historic Site",ja:"国史跡",zh:"國家史跡"}, v:"2011", d:{en:"On 7 February 2011 about 209 ha, from the foot to the summit of Kinkazan, was designated as the site of Gifu Castle.",ja:"2011年2月7日、金華山の麓から山頂まで約209ヘクタールが「岐阜城跡」として指定された。",zh:"2011 年 2 月 7 日，金華山從山腳到山頂約 209 公頃被指定為「岐阜城遺址」。"} },
          { k:{en:"Japan Heritage",ja:"日本遺産",zh:"日本遺產"}, v:"2015", d:{en:"On 24 April 2015, among the first stories named: “The castle town of Gifu, where Lord Nobunaga's hospitality lives on”.",ja:"2015年4月24日、最初の認定の一つ「『信長公のおもてなし』が息づく戦国城下町・岐阜」。",zh:"2015 年 4 月 24 日首批認定之一：「『信長公的款待』傳承至今的戰國城下町・岐阜」。"} },
          { k:{en:"The keep today",ja:"今の天守",zh:"今日天守"}, v:"1956", d:{en:"The present keep is a reconstruction of 1956; the original castle was abandoned in 1601.",ja:"現在の天守は1956年の再建。もとの城は1601年に廃された。",zh:"現今的天守閣為 1956 年重建；原本的城於 1601 年廢棄。"} }
        ] }
      ]
    },

    { t:"section", id:"rakuichi",
      title:{ en:"A free market at Kanō", ja:"加納の楽市", zh:"加納的自由市集" }, jp:"楽市楽座",
      body:[
        { t:"p", text:{
          en:"In the tenth month of 1567, within weeks of taking the castle, Nobunaga issued a decree to the market at Kanō, south of the town. Written on a wooden board and still preserved, with three later boards, at the temple of Entoku-ji, it guaranteed the market's traders freedom of passage through his lands, relief from debts and from certain taxes, and protection from forced purchases, violence and arbitrary demands by officials. This is the policy known as <em>rakuichi rakuza</em> — free markets and free guilds. Nobunaga did not invent it; the Rokkaku had issued a similar decree in Ōmi in 1549. But the Kanō decree is one of the earliest and best-preserved, and Nobunaga applied the idea on a scale that changed commerce in central Japan.",
          ja:"1567年10月、城を取って数週間のうちに、信長は町の南の加納の市に制札を下した。木の札に書かれ、のちの三枚とともに円徳寺にいまも伝わる。市の商人に、領内の自由な往来、借銭・借米や一部の税の免除、押買・乱暴・役人の不当な要求からの保護を保証するものである。これが「楽市楽座」と呼ばれる政策である。信長の発明ではない。近江の六角氏が1549年に同様の定めを出している。だが加納の制札は最初期の、最もよく残った例の一つであり、信長はこの考えを本州中央の商業を変える規模で広げた。",
          zh:"1567 年 10 月，拿下城池才數週，信長便對城鎮南方的加納市集頒布制札。制札寫在木板上，連同其後的三塊一起保存在圓德寺至今。它保證市集商人可在其領地內自由往來、免除借貸與部分稅賦，並保護他們免於強買、暴力與官吏的無理要求。這就是被稱為「樂市樂座」的政策——自由市集與自由行會。這並非信長首創，近江的六角氏在 1549 年已發布過類似命令；但加納制札是最早、保存最完好的例子之一，而信長把這個理念推廣到足以改變本州中央商業的規模。" } }
      ]
    },

    { t:"section", id:"ukai",
      title:{ en:"Hospitality by firelight", ja:"かがり火のもてなし", zh:"篝火下的款待" }, jp:"鵜飼",
      body:[
        { t:"p", text:{
          en:"Among the things Nobunaga showed his guests was the cormorant fishing on the Nagara, already centuries old. The tradition in Gifu is that he took the cormorant fishermen under his protection, gave them the title of <em>ushō</em>, cormorant master, and sent ayu from the river as gifts to other lords — the start of a relationship between the fishery and the rulers of Japan that the Imperial Household Agency maintains today. See <a href=\"ukai.html\">Cormorant Fishing</a>.",
          ja:"信長が客人に見せたものの一つが、すでに何百年の歴史を持つ長良川の鵜飼であった。岐阜の言い伝えでは、信長は鵜飼の漁師を保護し、「鵜匠」の名を与え、川の鮎を他の大名への贈り物にしたという。鵜飼と日本の支配者との関係の始まりであり、いまは宮内庁がそれを受け継いでいる。<a href=\"ukai.html\">鵜飼</a>を参照。",
          zh:"信長展示給賓客的事物之一，是當時已有數百年歷史的長良川鵜飼。岐阜的傳統說法是，他庇護鵜飼漁夫，授予「鵜匠」之名，並把河裡的香魚當作禮物送給其他大名——這開啟了鵜飼與日本統治者之間的關係，如今由宮內廳延續。見<a href=\"ukai.html\">鵜飼</a>。" } }
      ]
    },

    { t:"section", id:"after",
      title:{ en:"After Nobunaga", ja:"信長のあと", zh:"信長之後" }, jp:"1576–1601",
      body:[
        { t:"timeline", items:[
          { year:"1576", era:{en:"Tenshō 4",ja:"天正4年",zh:"天正4年"}, title:{en:"Nobunaga moves to Azuchi",ja:"信長、安土へ",zh:"信長移居安土"}, text:{en:"Gifu passes to his heir, Oda Nobutada.",ja:"岐阜は嫡男・織田信忠に譲られる。",zh:"岐阜交給嫡子織田信忠。"} },
          { year:"1582", era:{en:"Tenshō 10",ja:"天正10年",zh:"天正10年"}, title:{en:"Honnō-ji",ja:"本能寺の変",zh:"本能寺之變"}, text:{en:"Nobunaga and Nobutada are killed in Kyoto by Akechi Mitsuhide, whose family came from a branch of Mino's Toki.",ja:"信長と信忠は京都で明智光秀に討たれる。明智氏は美濃の土岐氏の庶流である。",zh:"信長與信忠在京都被明智光秀所殺；明智氏出自美濃土岐氏的支族。"} },
          { year:"1600", era:{en:"Keichō 5",ja:"慶長5年",zh:"慶長5年"}, title:{en:"Gifu Castle falls",ja:"岐阜城落城",zh:"岐阜城陷落"}, text:{en:"On the 23rd day of the 8th month Nobunaga's grandson Oda Hidenobu, on the western side, loses the castle to Fukushima Masanori and Ikeda Terumasa, three weeks before Sekigahara.",ja:"8月23日、西軍についた信長の孫・織田秀信が、福島正則・池田輝政に城を落とされる。関ヶ原の三週間前である。",zh:"8 月 23 日，投向西軍的信長之孫織田秀信，被福島正則與池田輝政攻下城池，此時距關原之戰僅三週。"} },
          { year:"1601", era:{en:"Keichō 6",ja:"慶長6年",zh:"慶長6年"}, title:{en:"The castle is abandoned",ja:"廃城",zh:"城郭廢棄"}, text:{en:"Its keep and turrets are moved to the new castle of Kanō, built by Okudaira Nobumasa; Gifu becomes a merchant town without a lord.",ja:"天守や櫓は奥平信昌が築いた加納城へ移される。岐阜は領主のいない商人の町となる。",zh:"天守與櫓被移到奧平信昌新建的加納城；岐阜成為沒有領主的商人城鎮。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"sekigahara.html", why:{ en:"The battle for Nobunaga's inheritance.", ja:"信長の遺したものをめぐる決戦。", zh:"爭奪信長遺產的決戰。" } },
      { href:"ukai.html", why:{ en:"The fishery Nobunaga showed his guests.", ja:"信長が客人に見せた漁。", zh:"信長展示給賓客的漁法。" } },
      { href:"lanterns.html", why:{ en:"What the merchant town of Gifu made after the castle was gone.", ja:"城がなくなったあと、商人の町・岐阜が作ったもの。", zh:"城池消失後，商人之城岐阜製作了什麼。" } },
      { href:"people.html", why:{ en:"Dōsan, Nōhime, Mitsuhide and the others.", ja:"道三、濃姫、光秀ほか。", zh:"道三、濃姬、光秀等人。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- sekigahara */
GIFU.pages["sekigahara"] = {
  kicker: { en: "History · 05", ja: "歴史 · 05", zh: "歷史 · 05" },
  title:  { en: "Sekigahara", ja: "関ヶ原", zh: "關原" },
  jp: "天下分け目 · 1600年9月15日",
  lede: {
    en: "Sekigahara is a small basin on the western edge of Mino where three roads meet — the Nakasendō, the road north to Hokuriku and the road south to Ise — in the gap between the Ibuki and Suzuka mountains. Twice that gap decided who would rule Japan. In 672 it was the Fuwa pass of the Jinshin War. On the 15th day of the 9th month of 1600 — 21 October in the modern calendar — it was the field where the armies of Tokugawa Ieyasu and Ishida Mitsunari met, and where, by the early afternoon, the order of the next 268 years had been settled.",
    ja: "関ヶ原は美濃の西の端にある小さな盆地で、伊吹と鈴鹿の山々のあいだの切れ目に三つの道——中山道、北陸へ向かう北国街道、伊勢へ向かう伊勢街道——が交わる。この切れ目は二度、日本を誰が治めるかを決めた。672年、そこは壬申の乱の不破の道であった。1600年（慶長5年）9月15日——新暦の10月21日——には、徳川家康と石田三成の軍勢がぶつかった野となり、昼過ぎまでには、その後268年の秩序が定まっていた。",
    zh: "關原是美濃西緣的一個小盆地，位於伊吹與鈴鹿山脈之間的缺口，三條道路在此交會——中山道、北往北陸的北國街道，以及南往伊勢的伊勢街道。這個缺口曾兩度決定由誰統治日本。672 年，它是壬申之亂中的不破道；1600 年（慶長 5 年）9 月 15 日——即新曆 10 月 21 日——它成了德川家康與石田三成兩軍交鋒的原野，到了午後，其後 268 年的秩序已經底定。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The field on the morning of 15 September 1600, schematic. The western army (dark outline) held the hills on three sides of the basin — Ishida Mitsunari on Sasao-yama, Ukita Hideie on Tenma-yama, Ōtani Yoshitsugu to the south-west, Kobayakawa Hideaki on Matsuo-yama; the Mōri group sat far to the east on Nangū-san. The eastern army filled the basin, with Ieyasu first on Momokubari-yama. Kobayakawa's attack on Ōtani's flank, around midday, broke the western line.",
        ja:"1600年9月15日朝の戦場（模式図）。西軍（濃い輪郭）は盆地の三方の丘を押さえた——笹尾山に石田三成、天満山に宇喜多秀家、南西に大谷吉継、松尾山に小早川秀秋。毛利勢ははるか東の南宮山にいた。東軍は盆地を埋め、家康ははじめ桃配山に陣した。昼ごろの小早川による大谷隊の側面への攻撃が、西軍の線を崩した。",
        zh:"1600 年 9 月 15 日早晨的戰場（示意圖）。西軍（深色外框）占據盆地三面的丘陵——笹尾山的石田三成、天滿山的宇喜多秀家、西南方的大谷吉繼、松尾山的小早川秀秋；毛利一方則遠在東方的南宮山。東軍布滿盆地，家康起初在桃配山布陣。約正午時，小早川攻擊大谷隊的側翼，擊潰了西軍陣線。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        function hill(cx, cy, rx, ry) { return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="#E0E6DB" stroke="#B4AC9C"/>'; }
        function west(x, y, t) { return '<rect x="' + (x - 7) + '" y="' + (y - 7) + '" width="14" height="14" fill="#EEE1DF" stroke="#201E1B" stroke-width="1.6"/>' +
          '<text x="' + (x + 12) + '" y="' + (y + 4) + '" ' + F + ' font-size="10.5" fill="#201E1B">' + L(t) + '</text>'; }
        function east(x, y, t, left) { return '<rect x="' + (x - 6) + '" y="' + (y - 6) + '" width="12" height="12" fill="#E9ECEE" stroke="#8B857C"/>' +
          '<text x="' + (left ? x - 10 : x + 10) + '" y="' + (y + 4) + '" ' + (left ? 'text-anchor="end" ' : '') + F + ' font-size="10" fill="#55504A">' + L(t) + '</text>'; }
        var s = '<svg viewBox="0 0 760 380" role="img" aria-label="Schematic map of the Battle of Sekigahara">' +
          '<rect x="0.5" y="0.5" width="759" height="379" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"SEKIGAHARA, 15 SEPT. 1600 (LUNAR)", ja:"関ヶ原 慶長5年9月15日", zh:"關原 慶長5年9月15日" }) + '</text>';
        s += hill(110, 110, 60, 34) + hill(150, 210, 58, 30) + hill(170, 300, 70, 34) + hill(620, 290, 90, 44) + hill(560, 150, 40, 24);
        /* roads */
        s += '<path d="M30 190 C200 190 400 196 730 186" fill="none" stroke="#7C6B52" stroke-width="1.4"/>' +
             '<path d="M300 192 C250 150 190 90 140 44" fill="none" stroke="#7C6B52" stroke-width="1.1" stroke-dasharray="5 3"/>' +
             '<path d="M330 194 C330 250 320 310 300 366" fill="none" stroke="#7C6B52" stroke-width="1.1" stroke-dasharray="5 3"/>' +
             '<text x="726" y="204" text-anchor="end" ' + F + ' font-size="9.5" fill="#7C6B52">' + L({en:"Nakasendō → Ōgaki, Gifu",ja:"中山道 → 大垣・岐阜",zh:"中山道 → 大垣、岐阜"}) + '</text>' +
             '<text x="36" y="182" ' + F + ' font-size="9.5" fill="#7C6B52">' + L({en:"← Ōmi, Kyoto",ja:"← 近江・京",zh:"← 近江、京都"}) + '</text>' +
             '<text x="150" y="44" ' + F + ' font-size="9.5" fill="#7C6B52">' + L({en:"Hokkoku road",ja:"北国街道",zh:"北國街道"}) + '</text>' +
             '<text x="306" y="362" ' + F + ' font-size="9.5" fill="#7C6B52">' + L({en:"Ise road",ja:"伊勢街道",zh:"伊勢街道"}) + '</text>';
        /* hill names */
        s += '<text x="70" y="140" ' + F + ' font-size="9" fill="#8B857C">' + L({en:"Sasao-yama",ja:"笹尾山",zh:"笹尾山"}) + '</text>' +
             '<text x="104" y="238" ' + F + ' font-size="9" fill="#8B857C">' + L({en:"Tenma-yama",ja:"天満山",zh:"天滿山"}) + '</text>' +
             '<text x="118" y="330" ' + F + ' font-size="9" fill="#8B857C">' + L({en:"Matsuo-yama",ja:"松尾山",zh:"松尾山"}) + '</text>' +
             '<text x="590" y="330" ' + F + ' font-size="9" fill="#8B857C">' + L({en:"Nangū-san",ja:"南宮山",zh:"南宮山"}) + '</text>' +
             '<text x="534" y="176" ' + F + ' font-size="9" fill="#8B857C">' + L({en:"Momokubari-yama",ja:"桃配山",zh:"桃配山"}) + '</text>';
        /* west */
        s += west(110, 104, {en:"Ishida Mitsunari",ja:"石田三成",zh:"石田三成"}) +
             west(150, 204, {en:"Ukita Hideie",ja:"宇喜多秀家",zh:"宇喜多秀家"}) +
             west(96, 258, {en:"Ōtani Yoshitsugu",ja:"大谷吉継",zh:"大谷吉繼"}) +
             west(170, 294, {en:"Kobayakawa Hideaki",ja:"小早川秀秋",zh:"小早川秀秋"}) +
             west(606, 284, {en:"Mōri, Kikkawa",ja:"毛利・吉川",zh:"毛利、吉川"});
        /* east */
        s += east(560, 144, {en:"Ieyasu (first camp)",ja:"家康（最初の陣）",zh:"家康（初陣）"}, false) +
             east(300, 150, {en:"Kuroda, Hosokawa",ja:"黒田・細川",zh:"黑田、細川"}, false) +
             east(260, 214, {en:"Fukushima",ja:"福島",zh:"福島"}, false) +
             east(290, 250, {en:"Tōdō, Kyōgoku",ja:"藤堂・京極",zh:"藤堂、京極"}, false) +
             east(380, 180, {en:"Ii, Matsudaira",ja:"井伊・松平",zh:"井伊、松平"}, false);
        /* kobayakawa arrow */
        s += '<path d="M168 280 C150 272 130 266 112 262" fill="none" stroke="#201E1B" stroke-width="1.8"/>' +
             '<path d="M112 262 l9 -1 l-4 7 z" fill="#201E1B"/>' +
             '<text x="30" y="370" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"■ western army   □ eastern army   → Kobayakawa's attack · SCHEMATIC, positions approximate",ja:"■ 西軍　□ 東軍　→ 小早川の攻撃・模式図、位置は概略",zh:"■ 西軍　□ 東軍　→ 小早川的攻擊・示意圖，位置為概略"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"why",
      title:{ en:"How the armies came to Mino", ja:"両軍が美濃に来たわけ", zh:"兩軍為何來到美濃" }, jp:"前哨戦",
      body:[
        { t:"p", text:{
          en:"After Toyotomi Hideyoshi died in 1598, the regency council he left for his young son split. In the summer of 1600 Tokugawa Ieyasu marched north-east against Uesugi Kagekatsu in Aizu; in his absence Ishida Mitsunari raised the western daimyo in the Toyotomi name. Ieyasu turned back. The first fighting in Mino came in the 8th month, when the eastern vanguard crossed the Kiso and on the 23rd stormed <strong>Gifu Castle</strong>, held for the west by Nobunaga's grandson Oda Hidenobu. Mitsunari made the castle of <strong>Ōgaki</strong> his base. On the night of the 14th of the 9th month, fearing Ieyasu would bypass Ōgaki and march on his castle at Sawayama in Ōmi, he moved his army west through rain to Sekigahara, and the eastern army followed.",
          ja:"1598年に豊臣秀吉が没すると、幼い嫡子のために残した合議の体制は割れた。1600年夏、徳川家康は会津の上杉景勝を討つため北東へ向かい、その留守に石田三成が豊臣の名のもとに西国の大名を挙兵させた。家康は引き返す。美濃での最初の戦いは8月、東軍の先鋒が木曽川を渡り、23日に西軍の信長の孫・織田秀信が守る<strong>岐阜城</strong>を攻め落としたことに始まる。三成は<strong>大垣城</strong>を拠点とした。9月14日夜、家康が大垣を素通りして近江の佐和山城へ向かうのを恐れた三成は、雨のなか軍を西の関ヶ原へ移し、東軍がそれを追った。",
          zh:"1598 年豐臣秀吉死後，他為年幼的兒子留下的合議體制隨即分裂。1600 年夏，德川家康北上討伐會津的上杉景勝；趁其不在，石田三成以豐臣之名號召西國大名起兵。家康回師。美濃的首戰發生在 8 月：東軍先鋒渡過木曾川，並於 23 日攻陷由信長之孫織田秀信為西軍據守的<strong>岐阜城</strong>。三成以<strong>大垣城</strong>為據點。9 月 14 日夜，三成擔心家康繞過大垣、直取他在近江的佐和山城，遂冒雨率軍西移至關原，東軍隨後跟進。" } }
      ]
    },

    { t:"section", id:"day",
      title:{ en:"The day", ja:"その日", zh:"那一天" }, jp:"9月15日",
      body:[
        { t:"steps", items:[
          { n:"dawn", title:{en:"Fog in the basin",ja:"盆地の霧",zh:"盆地之霧"}, text:{en:"The western army is drawn up on the hills around the basin in a wide arc; the eastern army moves into the valley floor in fog.",ja:"西軍は盆地を囲む丘に大きな弧を描いて布陣し、東軍は霧のなか谷底へ進む。",zh:"西軍沿盆地周圍的丘陵布成一道寬闊的弧形陣；東軍在霧中進入谷底。"} },
          { n:"≈8:00", title:{en:"The fighting begins",ja:"開戦",zh:"開戰"}, text:{en:"Ii Naomasa's unit, with Matsudaira Tadayoshi, opens the battle against the Ukita; Fukushima Masanori's troops engage and the centre becomes a melee. Kuroda and Hosokawa attack Mitsunari's position on Sasao-yama.",ja:"井伊直政の隊が松平忠吉とともに宇喜多勢に仕掛けて戦いが始まり、福島正則の兵も加わって中央は乱戦となる。黒田・細川は笹尾山の三成の陣を攻める。",zh:"井伊直政所部與松平忠吉對宇喜多軍發起攻擊，揭開戰幕；福島正則的部隊加入後，中央陷入混戰。黑田與細川進攻三成在笹尾山的陣地。"} },
          { n:"noon", title:{en:"Kobayakawa turns",ja:"小早川の寝返り",zh:"小早川倒戈"}, text:{en:"Kobayakawa Hideaki, who had been negotiating with Ieyasu, comes down from Matsuo-yama against Ōtani Yoshitsugu's flank; several smaller western units defect with him. The Mōri group on Nangū-san, held back by Kikkawa Hiroie's understanding with the east, never engages.",ja:"家康と通じていた小早川秀秋が松尾山を下り、大谷吉継の側面を突く。西軍のいくつかの小部隊もそれに続いて寝返る。南宮山の毛利勢は、東軍と通じた吉川広家に押しとどめられ、ついに戦わない。",zh:"一直與家康秘密交涉的小早川秀秋，從松尾山殺下，攻擊大谷吉繼的側翼；西軍數支小部隊也隨之倒戈。南宮山上的毛利一方，因吉川廣家與東軍的默契而按兵不動，始終未參戰。"} },
          { n:"afternoon", title:{en:"The western army breaks",ja:"西軍の崩壊",zh:"西軍潰敗"}, text:{en:"Ōtani's force is destroyed and he takes his own life; the Ukita and then Mitsunari's line give way. The Shimazu, surrounded, cut their way out eastward through the enemy — the famous “Shimazu retreat”. Mitsunari escapes, is captured days later and is executed in Kyoto on the 1st day of the 10th month.",ja:"大谷隊は壊滅し、吉継は自害する。宇喜多、ついで三成の陣が崩れる。囲まれた島津勢は敵中を東へ突破して退く——名高い「島津の退き口」である。三成は逃れたが数日後に捕らえられ、10月1日に京都で処刑された。",zh:"大谷隊覆滅，吉繼自盡；宇喜多隊、繼而三成的陣線相繼崩潰。被包圍的島津軍向東殺穿敵陣撤退——即著名的「島津退卻」。三成脫逃，數日後被捕，於 10 月 1 日在京都被處決。"} }
        ] },
        { t:"note", label:{en:"How many, and how long",ja:"兵数と時間",zh:"兵力與時間"}, text:{
          en:"The figures usually quoted — about 80,000 on each side and six hours of fighting — come from accounts written after the event and are weak evidence. Some historians now argue that the decisive fighting was over within a couple of hours of Kobayakawa's attack. What is not disputed is the outcome.",
          ja:"よく引かれる数字——双方およそ8万、戦いは六時間——は、事後に書かれた記録によるもので根拠は弱い。小早川の攻撃から二時間ほどで勝敗が決したとみる研究者もいる。争いがないのは結果だけである。",
          zh:"常被引用的數字——雙方各約八萬、激戰六小時——出自事後撰寫的記載，根據薄弱。如今有史家主張，決定性的戰鬥在小早川出擊後約兩小時內便已結束。沒有爭議的只有結果。" } }
      ]
    },

    { t:"section", id:"today",
      title:{ en:"The battlefield today", ja:"今日の古戦場", zh:"今日的古戰場" }, jp:"関ケ原古戦場",
      body:[
        { t:"p", text:{
          en:"The town of Sekigahara keeps markers at each commander's position, the mounds where the heads of the dead were buried, and the remains of the Fuwa barrier of 672. On 21 October 2020, the 420th anniversary of the battle by the modern calendar, the prefecture opened the <strong>Gifu Sekigahara Battlefield Memorial Museum</strong> near Ieyasu's final camp, with a theatre that plays the battle on the floor beneath the visitor and an observation deck over the field.",
          ja:"関ケ原町には各武将の陣跡、戦死者の首を葬った首塚、そして672年の不破関の跡が残る。新暦での合戦420年にあたる2020年10月21日、県は家康最後陣地の近くに<strong>岐阜関ケ原古戦場記念館</strong>を開いた。足もとの床に合戦を映し出すシアターと、古戦場を見渡す展望室がある。",
          zh:"關原町保留了各將領的陣地標示、埋葬陣亡者首級的首塚，以及 672 年不破關的遺跡。2020 年 10 月 21 日——以新曆計算的合戰 420 週年——縣府在家康最後陣地附近開設了<strong>岐阜關原古戰場紀念館</strong>，館內有把戰役投影在參觀者腳下地板的劇場，以及俯瞰古戰場的展望台。" } },
        { t:"p", text:{
          en:"Other traces of the campaign are scattered across Mino: the Ōgaki castle Mitsunari used as his base (its keep, burned in 1945, was rebuilt in 1959), the site of Gifu Castle, and the Nangū Taisha shrine below the hill where the Mōri waited.",
          ja:"戦役の痕跡は美濃各地に散っている。三成が拠点とした大垣城（1945年に焼けた天守は1959年に再建）、岐阜城跡、そして毛利勢が待機した山の麓の南宮大社である。",
          zh:"這場戰役的痕跡散布美濃各地：三成作為據點的大垣城（天守 1945 年焚毀，1959 年重建）、岐阜城遺址，以及毛利軍等候的那座山下的南宮大社。" } }
      ]
    },

    { t:"related", items:[
      { href:"ancient.html", why:{ en:"The same gap in 672.", ja:"672年の同じ切れ目。", zh:"672 年的同一個缺口。" } },
      { href:"edo.html", why:{ en:"How the victors divided Mino.", ja:"勝者は美濃をどう分けたか。", zh:"勝利者如何瓜分美濃。" } },
      { href:"climate.html", why:{ en:"Why Sekigahara is still famous for snow.", ja:"関ケ原がいまも雪で知られるわけ。", zh:"關原至今仍以大雪聞名的原因。" } },
      { href:"museums.html", why:{ en:"The memorial museum and other places to see.", ja:"記念館とほかの見どころ。", zh:"紀念館與其他景點。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- edo */
GIFU.pages["edo"] = {
  kicker: { en: "History · 06", ja: "歴史 · 06", zh: "歷史 · 06" },
  title:  { en: "The Edo Patchwork", ja: "江戸時代の美濃・飛騨", zh: "江戶時代的美濃與飛驒" },
  jp: "小藩 · 天領 · 尾張藩の森 · 1603–1868",
  lede: {
    en: "The peace that followed Sekigahara left Mino deliberately fragmented and Hida in the shogunate's own hands. Neither half of the future prefecture had a great lord of its own for two and a half centuries. That absence shaped almost everything that followed: forests managed by an outside domain with a death penalty for theft, a merchant class in Takayama with no castle to answer to, peasants who took their grievances over their lords' heads to Edo, and craft towns that grew rich on roads and rivers rather than on a court.",
    ja: "関ヶ原ののちの泰平は、美濃を意図的に細かく分け、飛騨を幕府自身の手に置いた。のちの県のどちらの半分にも、二百五十年にわたって自前の大大名はいなかった。その不在が、その後のほとんどすべてを形づくった。盗伐に死罪を科す外部の藩が管理した森、仕えるべき城を持たない高山の商人、領主の頭越しに江戸へ訴え出た百姓、そして宮廷ではなく道と川で富んだ職人の町である。",
    zh: "關原之後的太平，刻意把美濃切得零碎，並把飛驒收歸幕府自己掌管。兩百五十年間，日後本縣的兩半都沒有屬於自己的大大名。這種缺席塑造了此後幾乎一切：由外藩管理、盜伐處死的森林；沒有城池可效忠的高山商人；越過領主直接向江戶申訴的百姓；以及靠道路與河川、而非宮廷致富的工藝之城。"
  },
  body: [
    { t:"section", id:"mino",
      title:{ en:"Mino in pieces", ja:"分けられた美濃", zh:"被切割的美濃" }, jp:"小藩と幕府領",
      body:[
        { t:"p", text:{
          en:"Mino was one of the richer provinces of the realm, but no single lord held more than a small share of it. The largest domain was <strong>Ōgaki</strong>, held by the Toda family at 100,000 koku from 1635; around it were small domains — Kanō, Gujō, Iwamura, Naegi, Takatomi, Nomura, Takasu and others — each with a few thousand to a few tens of thousands of koku. Scattered between them lay shogunal territory administered by an intendant at Kasamatsu, the estates of bannermen, and large holdings of the Owari Tokugawa of Nagoya. The Mino intendancy at Kasamatsu also had charge of the rivers, which made it one of the most important offices in the province.",
          ja:"美濃は天下でも豊かな国の一つであったが、その大きな部分を一人で持つ領主はいなかった。最大の藩は1635年から戸田氏が治めた10万石の<strong>大垣藩</strong>で、そのまわりに加納・郡上・岩村・苗木・高富・野村・高須などの小藩が並び、石高は数千から数万石であった。そのあいだには、笠松の代官（郡代）が治める幕府領、旗本の知行地、そして名古屋の尾張徳川家の広い所領が散らばっていた。笠松の美濃郡代は川の管理も受け持ち、国で最も重要な役所の一つであった。",
          zh:"美濃是天下較富庶的國之一，但沒有任何一位領主持有其中的大部分。最大的是自 1635 年起由戶田氏統治的十萬石<strong>大垣藩</strong>；其周圍是加納、郡上、岩村、苗木、高富、野村、高須等小藩，石高從數千到數萬石不等。在它們之間，散布著由笠松代官（郡代）管理的幕府領、旗本的知行地，以及名古屋尾張德川家的大片領地。笠松的美濃郡代同時負責河川事務，是國內最重要的官署之一。" } },
        { t:"note", label:{en:"Why so fragmented",ja:"なぜこれほど細かく",zh:"為何如此零碎"}, text:{
          en:"A great lord in Mino would have sat astride the Nakasendō between Edo and Kyoto. The division is usually read as a deliberate security measure — the same corridor that had decided 672, 1567 and 1600 was not to be held by anyone who might use it again.",
          ja:"美濃に大大名がいれば、江戸と京都のあいだの中山道にまたがることになる。この分割は通常、意図的な安全策と読まれる。672年・1567年・1600年を決めた同じ回廊を、再びそれを使うかもしれない者に握らせないためである。",
          zh:"若美濃有一位大大名，他將橫跨江戶與京都之間的中山道。這種分割通常被解讀為刻意的安全措施——那條決定了 672、1567 與 1600 年命運的走廊，不能讓任何可能再次利用它的人掌握。" } }
      ]
    },

    { t:"section", id:"owari",
      title:{ en:"The Owari forests", ja:"尾張藩の森", zh:"尾張藩之森" }, jp:"木曽五木 · 裏木曽",
      body:[
        { t:"p", text:{
          en:"In 1615 the Kiso valley and the three Ura-Kiso villages of Kawaue, Tsukechi and Kashimo — now in Nakatsugawa — were given to the Owari domain. The early seventeenth century had consumed timber on an enormous scale for castles and cities, and by mid-century the forests were exhausted. Owari's response was one of the earliest systematic forest-protection regimes in Japan: in 1665 it closed reserved forests to entry; in 1708 it forbade the felling of hinoki, sawara, asunaro and kōyamaki throughout the valley; in 1728 it added nezuko. These became the <strong>Kiso five trees</strong>, and the penalty for cutting one was summed up in the phrase <em>ki ippon, kubi hitotsu</em> — one tree, one head.",
          ja:"1615年（元和元年）、木曽谷と、いまの中津川市にあたる裏木曽の三か村——川上・付知・加子母——は尾張藩の領地となった。十七世紀初めの城や町の建設は途方もない量の木材を消費し、世紀半ばには森は疲弊していた。尾張藩の対応は、日本で最も早い体系的な森林保護の一つであった。1665年（寛文5年）に留山を設けて立ち入りを禁じ、1708年（宝永5年）には谷全域で檜・サワラ・アスナロ・コウヤマキの伐採を禁じ、1728年（享保13年）にネズコを加えた。これが<strong>木曽五木</strong>であり、一本を伐った罰は「木一本、首一つ」という言葉で語られた。",
          zh:"1615 年（元和元年），木曾谷與裏木曾三村——川上、付知、加子母，今屬中津川市——劃歸尾張藩。十七世紀初的築城與建城消耗了巨量木材，到世紀中葉森林已枯竭。尾張藩的對策是日本最早的系統性森林保護制度之一：1665 年（寬文 5 年）設「留山」禁止進入；1708 年（寶永 5 年）禁止在全谷砍伐檜木、花柏、羅漢柏與日本金松；1728 年（享保 13 年）再加上黑檜。這就是<strong>木曾五木</strong>，盜伐一株的懲罰，被概括為「木一本，首一顆」。" } },
        { t:"p", text:{
          en:"The regime worked. The natural hinoki forests that survive today in Ura-Kiso, and that supply the timber for the Ise Shrine's rebuilding every twenty years, regenerated under it. See <a href=\"hinoki.html\">Hinoki &amp; the Kiso Five</a> and <a href=\"rafting.html\">Timber Down the Rivers</a>.",
          ja:"この制度は効果を上げた。いま裏木曽に残り、二十年ごとの伊勢神宮の造替に木材を供している天然の檜林は、そのもとで再生したものである。<a href=\"hinoki.html\">檜と木曽五木</a>と<a href=\"rafting.html\">川を下った木</a>を参照。",
          zh:"這套制度奏效了。今日殘存於裏木曾、每二十年為伊勢神宮式年遷宮供應木材的天然檜林，就是在它的保護下再生的。見<a href=\"hinoki.html\">檜木與木曾五木</a>與<a href=\"rafting.html\">順流而下的木材</a>。" } }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"Hida under the intendant", ja:"代官・郡代の飛騨", zh:"代官治下的飛驒" }, jp:"天領 · 高山陣屋",
      body:[
        { t:"p", text:{
          en:"In 1692 the shogunate moved the Kanamori from Takayama to Dewa and took Hida as its own, above all for its timber and its mines. The province was governed for the next 176 years from the <strong>Takayama Jinya</strong>, first by an intendant (<em>daikan</em>) and, from 1777, by a higher-ranking district intendant (<em>gundai</em>). The castle was demolished; Takayama became a town of merchants, brewers and carpenters with no lord in residence. The Jinya's office buildings, rice storehouse and courtyard survive — the only complete intendancy of its kind left in Japan.",
          ja:"1692年（元禄5年）、幕府は金森氏を高山から出羽へ移し、主に木材と鉱山のために飛騨を直轄とした。以後176年、国は<strong>高山陣屋</strong>から治められ、はじめは代官が、1777年（安永6年）からはより格の高い郡代が置かれた。城は取り壊され、高山は領主の住まない商人・酒造家・大工の町となった。陣屋の役所の建物、米蔵、白洲はいまも残り、この種の役所が完全な形で残る日本で唯一の例である。",
          zh:"1692 年（元祿 5 年），幕府將金森氏從高山轉封出羽，把飛驒收為直轄，主要是為了木材與礦山。此後 176 年間，全國由<strong>高山陣屋</strong>治理，起初是代官，1777 年（安永 6 年）起改由地位更高的郡代主持。城池遭拆除，高山成為沒有領主常駐、由商人、釀酒家與木匠組成的城鎮。陣屋的官署建築、米倉與庭院至今保存，是日本唯一完整留存的此類官署。" } },
        { t:"p", text:{
          en:"Direct rule was not gentle. Between 1771 and 1789 Hida went through three waves of uprisings known together as the <strong>Ōhara Disturbance</strong>, after the intendant Ōhara Hikoshirō and his son. The causes were a halt to the timber felling on which many villages depended for wages, increased rice taxes, a new land survey ordered in 1773 and, later, the son's misuse of funds. In the first two waves more than nine thousand peasants were punished; in the third, the shogunate investigated the intendant instead, and in 1789 the younger Ōhara was exiled to Hachijō island.",
          ja:"直轄の支配はやさしくはなかった。1771年から1789年にかけて、飛騨は代官・大原彦四郎とその子にちなんで<strong>大原騒動</strong>と総称される三度の一揆の波を経験した。原因は、多くの村が賃金を頼っていた材木伐り出しの停止、年貢の増徴、1773年に命じられた新たな検地、そしてのちには子の公金流用であった。最初の二度では九千人を超える百姓が処罰されたが、三度目には幕府が逆に郡代を取り調べ、1789年に大原の子は八丈島へ流された。",
          zh:"直轄統治並不溫和。1771 至 1789 年間，飛驒經歷了三波合稱<strong>大原騷動</strong>的百姓一揆，名稱來自代官大原彥四郎及其子。起因包括：許多村落賴以賺取工資的伐木作業遭到停止、年貢加徵、1773 年下令的新檢地，以及後來其子挪用公款。前兩波中有九千多名百姓受罰；第三波時幕府反過來調查郡代，1789 年小大原被流放八丈島。" } }
      ]
    },

    { t:"section", id:"gujo",
      title:{ en:"The peasants who brought down a lord", ja:"領主を倒した百姓", zh:"扳倒領主的百姓" }, jp:"郡上一揆",
      body:[
        { t:"p", text:{
          en:"The most remarkable Edo-period uprising in Mino happened in Gujō between 1754 and 1758. The lord, Kanamori Yorikane, had been given a costly post at the shogunal court and tried to pay for it by changing the way rice tax was assessed and by taxing newly cleared fields. His peasants resisted for four years, marching on the castle town, stopping a senior councillor's palanquin in Edo to hand him a petition, and finally placing a petition in the box at the shogunate's supreme court. In 1758 the shogunate ruled: Kanamori's domain was confiscated, and a senior councillor, a junior councillor, an inspector-general and a finance commissioner were removed from office. The peasants paid too — thirteen of their leaders, among them Mihara Sadajirō of Maedani, were executed. The Aoyama family, who replaced the Kanamori, are remembered for trying to reconcile the domain.",
          ja:"江戸時代の美濃で最も際立った一揆は、1754年から1758年にかけて郡上で起きた。藩主・金森頼錦は幕府の出費のかさむ役職に就き、その費用を、年貢の取り方を検見法に変え、新たに切り開いた田畑にも課税することで賄おうとした。百姓は四年にわたって抵抗し、城下に押し寄せ、江戸で老中の駕籠に訴状を差し出し、ついには評定所の目安箱に訴状を投じた。1758年、幕府の裁きが下った。金森家は領地を没収され、老中・若年寄・大目付・勘定奉行が職を解かれた。百姓も代償を払った——前谷村の三原定次郎をはじめ十三人の頭取が死罪となった。金森に代わった青山氏は、領内の融和に努めたことで記憶されている。",
          zh:"江戶時代美濃最引人注目的一揆，發生在 1754 至 1758 年的郡上。藩主金森賴錦被任命為幕府一個花費龐大的職位，便試圖以改變年貢評定方式、並對新墾田地課稅來支應。百姓抗爭長達四年：湧向城下、在江戶攔下老中的轎子遞交訴狀，最後把訴狀投入幕府評定所的目安箱。1758 年幕府裁決：沒收金森家領地，並將一名老中、一名若年寄、一名大目付與一名勘定奉行免職。百姓也付出了代價——包括前谷村的三原定次郎在內，十三名首領被處死。取代金森氏的青山氏，則因致力於弭平領內對立而為人所記。" } },
        { t:"note", label:{en:"A dance and a riot",ja:"踊りと一揆",zh:"舞蹈與一揆"}, text:{
          en:"Gujō tradition connects the Aoyama's efforts at reconciliation with the encouragement of the summer dances that became the Gujō Odori; the link is a tradition rather than a documented policy. See <a href=\"festivals.html\">Festivals &amp; Floats</a>.",
          ja:"郡上の言い伝えは、青山氏の融和の努力を、のちの郡上おどりとなる夏の踊りの奨励と結びつける。これは記録された政策というより伝承である。<a href=\"festivals.html\">祭りと屋台</a>を参照。",
          zh:"郡上的傳說把青山氏的和解努力，與鼓勵後來成為郡上舞的夏季舞蹈連結在一起；這種關聯屬於傳說，而非有文獻記載的政策。見<a href=\"festivals.html\">祭典與屋台</a>。" } }
      ]
    },

    { t:"section", id:"roads",
      title:{ en:"Roads, rivers and markets", ja:"道と川と市", zh:"道路、河川與市集" }, jp:"中山道 · 川湊",
      body:[
        { t:"p", text:{
          en:"What Edo Mino lacked in great lords it made up for in traffic. Sixteen post towns of the Nakasendō, from Ochiai to Imasu, lived on travellers and the official relay system; river ports such as Kōzuchi on the Nagara, laid out as a castle town by Kanamori Nagachika in his last years after Sekigahara, shipped paper and timber downstream; the pottery villages of the Toki valley supplied everyday ware to much of eastern Japan through Nagoya merchants; and Gifu, a lordless merchant town after 1601, and neighbouring Kanō came to specialise in lanterns, fans and umbrellas. See <a href=\"roads.html\">The Nakasendō &amp; Old Roads</a> and <a href=\"towns.html\">Old Towns</a>.",
          ja:"大大名のいない江戸の美濃は、往来の多さでそれを補った。落合から今須までの中山道十六宿は旅人と公用の伝馬で暮らし、関ヶ原ののち晩年の金森長近が城下町として整えた長良川の上有知湊は、紙や木材を下流へ積み出した。土岐川の谷の焼き物の村々は、名古屋の商人を通じて東日本の広い範囲に日用の器を送り、1601年以後に領主のいない商人の町となった岐阜と、隣の加納は、提灯・団扇・和傘に特化していった。<a href=\"roads.html\">中山道と街道</a>と<a href=\"towns.html\">町並み</a>を参照。",
          zh:"江戶時代的美濃沒有大大名，卻以往來交通彌補。從落合到今須的中山道十六宿，靠旅人與官方傳馬制度維生；長良川上的上有知湊——由金森長近在關原之後的晚年規劃為城下町——把紙與木材運往下游；土岐川谷地的陶瓷村落，透過名古屋商人向東日本大片地區供應日用器皿；而 1601 年後成為無主商人城鎮的岐阜與鄰近的加納，則逐漸專精於燈籠、團扇與和傘。見<a href=\"roads.html\">中山道與古道</a>與<a href=\"towns.html\">老街町並</a>。" } }
      ]
    },

    { t:"related", items:[
      { href:"chisui.html", why:{ en:"The Hōreki river works of 1754–55.", ja:"1754〜55年の宝暦治水。", zh:"1754–55 年的寶曆治水。" } },
      { href:"hinoki.html", why:{ en:"The forests the Owari domain protected.", ja:"尾張藩が守った森。", zh:"尾張藩所守護的森林。" } },
      { href:"towns.html", why:{ en:"Takayama, the town without a lord.", ja:"領主のいない町・高山。", zh:"沒有領主的城鎮——高山。" } },
      { href:"modern.html", why:{ en:"What came after the domains.", ja:"藩のあとに来たもの。", zh:"諸藩之後到來的一切。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- chisui */
GIFU.pages["chisui"] = {
  kicker: { en: "History · 07", ja: "歴史 · 07", zh: "歷史 · 07" },
  title:  { en: "Taming the Three Rivers", ja: "木曽三川の治水", zh: "木曾三川的治水" },
  jp: "輪中 · 宝暦治水 · 三川分流",
  lede: {
    en: "On the lower Nōbi Plain the Kiso, the Nagara and the Ibi once ran together in a shifting web of channels over land that was partly below sea level, and floods came almost every generation. The people who farmed there enclosed their villages in rings of embankment — the <em>wajū</em> — and for four centuries the politics of the plain was the politics of levees: who could build them, how high, and at whose expense. This page follows that struggle from the ring-levee villages through the Satsuma domain's tragic river works of 1754–55 to the Dutch-planned separation of the three rivers completed in 1912, and on to the floods of living memory.",
    ja: "濃尾平野の下流では、木曽川・長良川・揖斐川が、一部が海面より低い土地の上を、流路を変えながら網の目のように絡み合って流れ、洪水はほとんど一世代ごとに来た。そこで田を耕す人々は、集落を堤の輪で囲んだ——輪中である。四百年のあいだ、この平野の政治は堤の政治であった。誰が築けるのか、どれほどの高さに、誰の負担で。本頁では、その闘いを、輪中の村々から、1754〜55年の薩摩藩による悲劇的な宝暦治水、オランダ人の計画で1912年に完成した三川分流、そして人々の記憶に残る水害まで辿る。",
    zh: "在濃尾平原下游，木曾川、長良川與揖斐川曾在部分低於海平面的土地上，以不斷改道的網狀水道交纏奔流，洪水幾乎每一代都會來。在此耕作的人們用一圈圈堤防把村落圍起——這就是「輪中」。四百年間，平原上的政治就是堤防的政治：誰能築堤、築多高、由誰出錢。本頁追索這場搏鬥：從輪中村落，到 1754–55 年薩摩藩悲壯的寶曆治水，再到依荷蘭人規劃、於 1912 年完成的三川分流，直至人們記憶猶新的水災。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Before and after, schematic. Left: before the Meiji works, the three rivers shared channels and cross-links on the lower plain, and villages protected themselves with ring levees. Right: after 1912, the three flow in separate beds divided by long partition levees, and the cross-links are closed. Not to scale; the real channels are far more intricate.",
        ja:"前と後（模式図）。左：明治の工事以前、下流の平野で三川は流路を共有し、互いにつながり、村々は輪中の堤で身を守った。右：1912年以後、三川は長い背割堤で仕切られた別々の河道を流れ、連絡する流れは締め切られた。縮尺不同。実際の流路ははるかに複雑である。",
        zh:"改修前後對照（示意圖）。左：明治工程以前，三川在下游平原共用河道、彼此相連，村落以輪中堤防自保。右：1912 年以後，三川在長長的分隔堤（背割堤）之間各自流入獨立河道，相連的水道皆被封堵。非按比例；實際河道遠比此複雜。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"', RV = 'fill="none" stroke="#8FA6AE" stroke-width="3"';
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="The three rivers before and after separation">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"BEFORE AND AFTER THE SEPARATION", ja:"三川分流の前と後", zh:"三川分流前後" }) + '</text>' +
          '<rect x="30" y="44" width="340" height="250" fill="#F0EDE4" stroke="#CDC6B9"/><rect x="390" y="44" width="340" height="250" fill="#F0EDE4" stroke="#CDC6B9"/>' +
          '<text x="42" y="62" ' + F + ' font-size="11" fill="#55504A" font-weight="600" letter-spacing="1.2">' + L({en:"BEFORE 1887",ja:"1887年以前",zh:"1887 年以前"}) + '</text>' +
          '<text x="402" y="62" ' + F + ' font-size="11" fill="#55504A" font-weight="600" letter-spacing="1.2">' + L({en:"AFTER 1912",ja:"1912年以後",zh:"1912 年以後"}) + '</text>';
        /* before: braided */
        s += '<path d="M90 70 C100 130 120 170 140 290" ' + RV + '/>' +
             '<path d="M200 70 C190 130 160 190 150 290" ' + RV + '/>' +
             '<path d="M320 70 C300 140 260 200 230 290" ' + RV + '/>' +
             '<path d="M112 150 C140 160 170 150 186 142" ' + RV + '/>' +
             '<path d="M170 210 C200 214 230 206 262 196" ' + RV + '/>' +
             '<path d="M130 240 C150 236 170 240 190 250" ' + RV + '/>';
        [[250,120,26,16],[85,210,22,14],[210,250,20,12],[290,240,22,14],[60,130,18,12]].forEach(function (w) {
          s += '<ellipse cx="' + w[0] + '" cy="' + w[1] + '" rx="' + w[2] + '" ry="' + w[3] + '" fill="#E0E6DB" stroke="#7C6B52" stroke-width="1.4"/>';
        });
        s += '<text x="232" y="148" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"wajū",ja:"輪中",zh:"輪中"}) + '</text>';
        /* after: three separate */
        s += '<path d="M450 70 C460 150 470 220 480 290" ' + RV + '/>' +
             '<path d="M560 70 C556 150 552 220 550 290" ' + RV + '/>' +
             '<path d="M690 70 C660 150 640 220 620 290" ' + RV + '/>' +
             '<path d="M515 120 L515 290" stroke="#201E1B" stroke-width="3"/><path d="M586 150 L584 290" stroke="#201E1B" stroke-width="3"/>' +
             '<text x="520" y="112" ' + F + ' font-size="9.5" fill="#201E1B">' + L({en:"partition levee",ja:"背割堤",zh:"背割堤"}) + '</text>';
        var RL = F + ' font-size="10.5" font-style="italic" fill="#5E7780"';
        s += '<text x="430" y="84" ' + RL + '>' + L({en:"Ibi",ja:"揖斐川",zh:"揖斐川"}) + '</text>' +
             '<text x="566" y="84" ' + RL + '>' + L({en:"Nagara",ja:"長良川",zh:"長良川"}) + '</text>' +
             '<text x="656" y="84" ' + RL + '>' + L({en:"Kiso",ja:"木曽川",zh:"木曾川"}) + '</text>' +
             '<text x="66" y="84" ' + RL + '>' + L({en:"Ibi",ja:"揖斐川",zh:"揖斐川"}) + '</text>' +
             '<text x="206" y="84" ' + RL + '>' + L({en:"Nagara",ja:"長良川",zh:"長良川"}) + '</text>' +
             '<text x="290" y="84" ' + RL + '>' + L({en:"Kiso",ja:"木曽川",zh:"木曾川"}) + '</text>';
        s += '<text x="30" y="316" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC. West is left. Ise Bay lies below both panels.",ja:"模式図。左が西。伊勢湾は両図の下方にある。",zh:"示意圖。左為西。伊勢灣位於兩圖下方。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"waju",
      title:{ en:"Villages inside rings", ja:"輪の内側の村", zh:"環內的村落" }, jp:"輪中 · 水屋",
      body:[
        { t:"p", text:{
          en:"From the medieval period onwards, villages on the lower plain began to join their scattered embankments into closed rings, so that a whole community — its houses, fields and shrine — sat inside a single levee. These <strong>wajū</strong> multiplied through the Edo period; in the Gifu part of the plain there were some forty-five, large and small, from near Gifu city down to Ise Bay. Inside them people built <strong>mizuya</strong>, storehouses on raised stone platforms where rice, tools and a boat could be kept above the flood, and many households kept a boat hung under the eaves. The ring gave a village a common enemy and a common duty; maintaining it was the first obligation of every household.",
          ja:"中世以降、下流の平野の村々は、ばらばらの堤をつないで閉じた輪にし始めた。家も田も社も含めて、一つの共同体が一本の堤の内側に収まるようにしたのである。この<strong>輪中</strong>は江戸時代を通じて増え、平野の岐阜県側には、岐阜市の近くから伊勢湾まで、大小およそ四十五の輪中があった。その内側で人々は<strong>水屋</strong>を建てた。石を積み上げた高い基壇の上の倉で、米や道具や舟を洪水の上に保った。軒下に舟を吊るしておく家も多かった。輪は村に共通の敵と共通の義務を与えた。それを守ることが、すべての家の第一の務めであった。",
          zh:"從中世開始，下游平原的村落把零散的堤防連接成封閉的環，讓整個共同體——房屋、田地與神社——都位在同一道堤防之內。這些<strong>輪中</strong>在江戶時代不斷增加；在平原的岐阜縣一側，從岐阜市附近直到伊勢灣，大小輪中約有四十五個。人們在其中建造<strong>水屋</strong>——建在高石台上的倉庫，把米、工具與小船保存在洪水之上；許多人家還在屋簷下吊著一艘船。環堤給了村落共同的敵人與共同的義務；維護它，是每一戶人家的首要責任。" } },
        { t:"note", label:{en:"Three feet lower",ja:"三尺低く",zh:"低三尺"}, text:{
          en:"In 1609 Tokugawa Ieyasu had a great embankment built along the Owari side of the Kiso to protect Owari and the new castle town of Nagoya. It is often said that Mino's levees were forbidden to be higher than Owari's by three <em>shaku</em> (about 90 cm), so that floods would spill west into Mino; the rule is widely quoted but its documentary basis is weak. What is not in doubt is that the Owari embankment pushed floodwater towards the Mino side.",
          ja:"1609年（慶長14年）、徳川家康は尾張と新しい城下町・名古屋を守るため、木曽川の尾張側に長大な堤——御囲堤——を築かせた。美濃の堤は尾張の堤より三尺（約90センチ）低くせよと定められ、洪水が西の美濃へあふれるようにされた、とよく言われる。この定めは広く引かれるが、史料上の根拠は弱い。確かなのは、尾張側の堤が洪水を美濃側へ押しやったことである。",
          zh:"1609 年（慶長 14 年），德川家康下令沿木曾川的尾張一側修築一道長堤——御圍堤——以保護尾張與新建的城下町名古屋。常有人說，美濃的堤防被規定必須比尾張低三尺（約 90 公分），好讓洪水往西溢入美濃；此說廣為流傳，但文獻根據薄弱。無可懷疑的是，尾張一側的長堤把洪水推向了美濃一側。" } }
      ]
    },

    { t:"section", id:"horeki",
      title:{ en:"The Hōreki river works, 1754–1755", ja:"宝暦治水——1754〜1755年", zh:"寶曆治水：1754–1755 年" }, jp:"薩摩藩",
      body:[
        { t:"p", text:{
          en:"In 1753 the shogunate ordered the Satsuma domain, at the far south-western end of Japan, to carry out a major flood-control project on the three rivers — a <em>tetsudai-bushin</em>, a “helping construction” that was also a way of draining the treasury of a powerful outside lord. Satsuma sent 947 men under the chief retainer <strong>Hirata Yukie</strong>. Work ran from February 1754 to May 1755, on levees, cut-offs and the partial closure between the Kiso and the Ibi at Aburajima. The shogunate's officials made the work harder at every turn; dysentery broke out in the summer of 1754; and the cost rose from an estimated 140,000–150,000 ryō to about 400,000, most of it borrowed from Osaka merchants.",
          ja:"1753年（宝暦3年）、幕府は日本の南西の果ての薩摩藩に、三川の大規模な治水工事を命じた。「御手伝普請」——手伝いの普請であると同時に、有力な外様大名の財政を削ぐ手段でもあった。薩摩は家老・<strong>平田靱負</strong>を総奉行に947人を送った。工事は1754年2月から1755年5月まで続き、堤、流路の付け替え、そして油島での木曽川と揖斐川の締め切りなどが行われた。幕府の役人は事あるごとに工事を難しくし、1754年夏には赤痢が発生し、費用は当初見積もりの14万〜15万両から約40万両に膨らんだ。その大半は大坂の商人からの借金であった。",
          zh:"1753 年（寶曆 3 年），幕府命令位於日本西南盡頭的薩摩藩，對三川施作一項大型治水工程——「御手傳普請」，名為協助施工，實則也是消耗強大外樣大名財力的手段。薩摩以家老<strong>平田靱負</strong>為總奉行，派出 947 人。工程自 1754 年 2 月持續到 1755 年 5 月，包括堤防、河道改道，以及在油島將木曾川與揖斐川部分截斷等。幕府官員處處刁難；1754 年夏爆發痢疾；費用從原估的十四萬至十五萬兩膨脹到約四十萬兩，大部分向大坂商人借貸。" } },
        { t:"p", text:{
          en:"The human cost is what is remembered. By tradition fifty-one Satsuma men took their own lives during the works — many, it is said, in protest at the shogunate's obstruction — and thirty-three died of disease. The day after the final inspection, on 25 May 1755, Hirata Yukie himself died, by tradition by his own hand, taking responsibility for the cost. The Satsuma men planted pines along the partition levee they built; the <strong>Senbon Matsubara</strong>, the thousand-pine shore, still stands on it, and the Chisui Jinja, the shrine of river works, founded in 1938, enshrines Hirata beside it. Gifu and Kagoshima prefectures have been sister prefectures since 1971 because of this history.",
          ja:"記憶されているのは人の代償である。伝えられるところでは、工事中に薩摩の藩士五十一人が自害し——多くは幕府の妨害への抗議であったという——三十三人が病に倒れた。最後の検分の翌日、1755年5月25日、平田靱負自身も亡くなった。伝承では、費用の責めを負って自ら命を絶ったとされる。薩摩の人々は自らが築いた背割堤に松を植えた。<strong>千本松原</strong>はいまもその上に立ち、1938年創建の治水神社が、その傍らに平田を祀る。この歴史ゆえに、岐阜県と鹿児島県は1971年から姉妹県盟約を結んでいる。",
          zh:"人們記住的是人命的代價。依傳統說法，工程期間有五十一名薩摩藩士自盡——據說多是抗議幕府的阻撓——另有三十三人病歿。最終驗收後的次日，1755 年 5 月 25 日，平田靱負本人也過世了；傳說他為工程費用負責而自盡。薩摩人在他們築起的背割堤上種植松樹；<strong>千本松原</strong>至今仍立於堤上，1938 年創建的治水神社則在旁邊供奉平田。因這段歷史，岐阜縣與鹿兒島縣自 1971 年起締結為姊妹縣。" } },
        { t:"note", label:{en:"On the numbers",ja:"数について",zh:"關於數字"}, text:{
          en:"The counts of fifty-one suicides and thirty-three deaths from illness are the traditional figures, repeated by the municipalities and memorials of the region. Satsuma's own records often describe deaths discreetly, and historians have debated how many were suicides; the scale of the loss is not in question.",
          ja:"自害五十一人、病死三十三人という数は、地域の自治体や記念施設が繰り返す伝統的な数字である。薩摩側の記録は死をしばしば婉曲に記しており、自害が何人だったかについては研究者のあいだで議論がある。損失の大きさそのものに疑いはない。",
          zh:"自盡五十一人、病歿三十三人，是當地各市町與紀念設施一再引用的傳統數字。薩摩方面的紀錄往往以委婉方式記述死亡，究竟多少人是自盡，學者之間仍有爭論；但損失之慘重毋庸置疑。" } }
      ]
    },

    { t:"section", id:"derijke",
      title:{ en:"The Dutch engineer and the separation", ja:"オランダの技師と三川分流", zh:"荷蘭工程師與三川分流" }, jp:"デ・レーケ",
      body:[
        { t:"p", text:{
          en:"The Meiji government brought in Dutch hydraulic engineers in the 1870s. <strong>Johannis de Rijke</strong> (1842–1913), who arrived in 1873 and stayed in Japan for some thirty years, surveyed the Kiso system and concluded that the three rivers had to be separated completely and that flood control had to begin in the mountains, with erosion control and forest protection upstream. Construction of the separation began in April 1887. The partition levees between the Kiso and the Nagara and between the Nagara and the Ibi were completed in 1898, the closure at Aburajima the next year, and the works as a whole by 1912. The three rivers have flowed in their present beds since.",
          ja:"明治政府は1870年代にオランダの河川技術者を招いた。1873年に来日し約三十年日本に滞在した<strong>ヨハネス・デ・レーケ</strong>（1842〜1913）は、木曽川水系を調査し、三川を完全に分けること、そして治水は山から始めねばならないこと——上流での砂防と森林の保護——を結論とした。分流工事は1887年（明治20年）4月に本格的に始まり、木曽川と長良川、長良川と揖斐川のあいだの背割堤は1898年に、油島の締め切りは翌年に完成し、工事全体は1912年までに終わった。以来、三川は今日の河道を流れている。",
          zh:"明治政府在 1870 年代延聘荷蘭水利工程師。1873 年來日、在日本停留約三十年的<strong>德・雷克</strong>（Johannis de Rijke，1842–1913）調查木曾川水系後得出結論：三川必須完全分開，而且治水必須從山上做起——在上游進行砂防與森林保護。分流工程於 1887 年（明治 20 年）4 月正式開工；木曾川與長良川之間、長良川與揖斐川之間的背割堤於 1898 年完成，油島截流於翌年竣工，整體工程於 1912 年前全部完成。此後三川便沿今日的河道奔流。" } }
      ]
    },

    { t:"section", id:"since",
      title:{ en:"Floods in living memory", ja:"記憶のなかの水害", zh:"記憶中的水災" }, jp:"伊勢湾台風 · 9.12水害",
      body:[
        { t:"timeline", items:[
          { year:"1959", era:{en:"Shōwa 34",ja:"昭和34年",zh:"昭和34年"}, title:{en:"The Ise Bay typhoon",ja:"伊勢湾台風",zh:"伊勢灣颱風"}, text:{en:"A storm surge floods the low delta of Aichi, Mie and southern Gifu; parts stay under water for months.",ja:"高潮が愛知・三重・岐阜南部の低いデルタを襲い、一部は何か月も水に浸かる。",zh:"暴潮淹沒愛知、三重與岐阜南部的低窪三角洲，部分地區積水長達數月。"} },
          { year:"1976", era:{en:"Shōwa 51",ja:"昭和51年",zh:"昭和51年"}, title:{en:"The 12 September flood",ja:"9.12水害",zh:"9.12 水災"}, text:{en:"After a week of record rain from typhoon 17, the right-bank levee of the Nagara gives way over about 50 m at Anpachi at 10:28 on 12 September; some 3,500 households in Anpachi and Sunomata are flooded.",ja:"台風17号による記録的な雨が一週間続いたのち、9月12日10時28分、安八町で長良川右岸の堤防が約50メートルにわたって決壊し、安八町と墨俣町の約3,500戸が浸水する。",zh:"颱風 17 號帶來連續一週的破紀錄降雨後，9 月 12 日 10 時 28 分，長良川右岸堤防在安八町潰決約 50 公尺，安八町與墨俁町約 3,500 戶淹水。"} },
          { year:"1995", era:{en:"Heisei 7",ja:"平成7年",zh:"平成7年"}, title:{en:"The Nagara estuary barrage",ja:"長良川河口堰",zh:"長良川河口堰"}, text:{en:"Begins operation near the river mouth, for flood control and water supply, amid long opposition.",ja:"長い反対運動のなか、治水と利水のため河口近くで運用を開始。",zh:"在長期反對聲浪中，於河口附近開始運作，用於治水與供水。"} },
          { year:"2008", era:{en:"Heisei 20",ja:"平成20年",zh:"平成20年"}, title:{en:"Tokuyama Dam",ja:"徳山ダム",zh:"德山水壩"}, text:{en:"Completed on the upper Ibi — the largest reservoir in Japan.",ja:"揖斐川上流に完成。日本最大の貯水池である。",zh:"於揖斐川上游竣工——日本最大的水庫。"} }
        ] },
        { t:"p", text:{
          en:"The ring-levee landscape can still be read on the ground: in the old mizuya that survive in Kaizu and Ōgaki, in the Wajū-kan museum in Ōgaki, and in the National Kiso Sansen Park at Kaizu, where a restored farmhouse compound shows how a wajū household lived.",
          ja:"輪中の風景はいまも地上で読むことができる。海津や大垣に残る古い水屋、大垣の輪中館、そして輪中の農家の暮らしを復元して見せる海津市の国営木曽三川公園である。",
          zh:"輪中的地景至今仍可在地面上讀出：海津與大垣殘存的舊水屋、大垣的輪中館，以及海津市的國營木曾三川公園——那裡復原了一處輪中農家，展示其生活樣貌。" } }
      ]
    },

    { t:"related", items:[
      { href:"rivers.html", why:{ en:"The three rivers themselves.", ja:"三川そのもの。", zh:"三川本身。" } },
      { href:"landform.html", why:{ en:"Why the plain lies below sea level.", ja:"平野がなぜ海面下にあるのか。", zh:"平原為何低於海平面。" } },
      { href:"edo.html", why:{ en:"The patchwork of lords who could not agree on a levee.", ja:"堤について合意できなかった領主たちの入り組み。", zh:"那些無法就一道堤防達成共識的交錯領主。" } },
      { href:"modern.html", why:{ en:"The prefecture that the separation made possible.", ja:"分流が可能にした県の姿。", zh:"分流工程所成就的本縣樣貌。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- modern */
GIFU.pages["modern"] = {
  kicker: { en: "History · 08", ja: "歴史 · 08", zh: "歷史 · 08" },
  title:  { en: "Meiji to Now", ja: "近代から現代へ", zh: "從明治到現在" },
  jp: "1868年から今日まで",
  lede: {
    en: "In the century and a half since the domains were abolished, the two old provinces became one prefecture, the rivers were separated, the railway and then the expressway reached the mountains, and the crafts of Edo became industries — cutlery, ceramics, furniture, apparel — alongside newer ones such as aircraft. The prefecture's population grew until 2000 and has been falling since. This page follows that arc, and the costs it carried: the Hida girls who crossed a mountain pass to the silk mills, the cities burned in 1945, the villages drowned for dams.",
    ja: "藩が廃されてからの百五十年で、二つの旧国は一つの県となり、川は分けられ、鉄道が、ついで高速道路が山に届き、江戸の工芸は、航空機のような新しいものと並んで、刃物・陶磁器・家具・アパレルといった産業になった。県の人口は2000年まで増え、以後は減り続けている。本頁では、その弧と、それが背負った代償——峠を越えて製糸工場へ向かった飛騨の娘たち、1945年に焼かれた町々、ダムに沈んだ村々——を辿る。",
    zh: "廢藩以來的一百五十年間，兩個舊國合為一縣，河川被分開，鐵路、繼而高速公路通到了山區，江戶時代的工藝成為產業——刀具、陶瓷、家具、成衣——並與飛機等新興產業並列。本縣人口增加至 2000 年，此後持續減少。本頁追索這條弧線，以及它所承擔的代價：翻越山口前往製絲工廠的飛驒少女、1945 年被焚毀的城市、為水壩而沉沒的村落。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Population of Gifu Prefecture, schematic. The count rose through the twentieth century to a peak of about 2.11 million at the 2000 census, fell below two million in 2018 and was about 1.95 million in 2025. Intermediate points are drawn as a smooth curve and are indicative only.",
        ja:"岐阜県の人口（模式図）。人口は二十世紀を通じて増え、2000年の国勢調査で約211万人の頂点に達し、2018年に200万人を割り、2025年には約195万人となった。途中の点はなめらかな曲線で示した目安である。",
        zh:"岐阜縣人口（示意圖）。人口在二十世紀持續增長，於 2000 年國勢調查達到約 211 萬人的高峰，2018 年跌破兩百萬，2025 年約為 195 萬人。中間各點以平滑曲線表示，僅供參考。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var x0 = 70, x1 = 720, y0 = 230, y1 = 50;
        function X(t) { return x0 + (t - 1920) / (2030 - 1920) * (x1 - x0); }
        function Y(m) { return y0 - (m - 1.0) / (2.3 - 1.0) * (y0 - y1); }
        var pts = [[1920,1.07],[1935,1.23],[1950,1.54],[1960,1.64],[1970,1.76],[1980,1.96],[1990,2.07],[2000,2.108],[2010,2.08],[2018,1.99],[2025,1.95]];
        var d = "", i;
        for (i = 0; i < pts.length; i++) d += (i ? " L" : "M") + X(pts[i][0]).toFixed(1) + " " + Y(pts[i][1]).toFixed(1);
        var s = '<svg viewBox="0 0 760 280" role="img" aria-label="Population of Gifu Prefecture over time">' +
          '<rect x="0.5" y="0.5" width="759" height="279" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"POPULATION, MILLIONS", ja:"人口（百万人）", zh:"人口（百萬）" }) + '</text>';
        [1.0, 1.5, 2.0].forEach(function (m) {
          s += '<line x1="' + x0 + '" y1="' + Y(m).toFixed(1) + '" x2="' + x1 + '" y2="' + Y(m).toFixed(1) + '" stroke="#E1DCD2"/>' +
               '<text x="' + (x0 - 8) + '" y="' + (Y(m) + 4).toFixed(1) + '" text-anchor="end" ' + F + ' font-size="10" fill="#8B857C">' + m.toFixed(1) + '</text>';
        });
        [1920, 1950, 1980, 2000, 2025].forEach(function (t) {
          s += '<text x="' + X(t).toFixed(1) + '" y="' + (y0 + 18) + '" text-anchor="middle" ' + F + ' font-size="10" fill="#8B857C">' + t + '</text>';
        });
        s += '<path d="' + d + '" fill="none" stroke="#7C6B52" stroke-width="2"/>' +
             '<circle cx="' + X(2000).toFixed(1) + '" cy="' + Y(2.108).toFixed(1) + '" r="4" fill="#201E1B"/>' +
             '<text x="' + (X(2000) - 8).toFixed(1) + '" y="' + (Y(2.108) - 10).toFixed(1) + '" text-anchor="end" ' + F + ' font-size="10.5" fill="#201E1B">' + L({en:"2000 · 2.11 m (peak)",ja:"2000年・211万人（頂点）",zh:"2000 年・211 萬（高峰）"}) + '</text>' +
             '<circle cx="' + X(2025).toFixed(1) + '" cy="' + Y(1.95).toFixed(1) + '" r="4" fill="#FBFAF7" stroke="#201E1B"/>' +
             '<text x="' + (X(2025) - 6).toFixed(1) + '" y="' + (Y(1.95) + 20).toFixed(1) + '" text-anchor="end" ' + F + ' font-size="10.5" fill="#201E1B">' + L({en:"2025 · 1.95 m",ja:"2025年・195万人",zh:"2025 年・195 萬"}) + '</text>' +
             '<text x="30" y="270" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"Endpoints from census and prefectural estimates; the curve between them is indicative.",ja:"端点は国勢調査と県の推計による。あいだの曲線は目安。",zh:"端點數據出自國勢調查與縣府推估；其間曲線僅供參考。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"meiji",
      title:{ en:"The Meiji prefecture", ja:"明治の県", zh:"明治時代的縣" }, jp:"1868–1912",
      body:[
        { t:"p", text:{
          en:"The first years were not smooth. In Hida, the new government's governor Umemura Hayami pushed reforms so fast that in 1869 the province rose against him, and he was removed. The prefecture took its final shape in 1876 and spent the next generation on the rivers — the separation of the three rivers under Johannis de Rijke ran from 1887 to 1912 — and on recovery from the Nōbi earthquake of 1891. The Tōkaidō railway reached Ōgaki and Gifu in the 1880s and gave Mino's makers of lanterns, umbrellas, fans and pottery a national market.",
          ja:"最初の数年は平坦ではなかった。飛騨では新政府の知事・梅村速水が改革をあまりに急いだため、1869年（明治2年）に国中が立ち上がり、梅村は罷免された（梅村騒動）。県は1876年に最終的な形をとり、その後の一世代を川——デ・レーケのもとで1887年から1912年まで続いた三川分流——と、1891年の濃尾地震からの復興に費やした。1880年代には東海道線が大垣と岐阜に達し、美濃の提灯・和傘・団扇・焼き物の作り手に全国の市場を与えた。",
          zh:"最初幾年並不順遂。在飛驒，新政府派任的知事梅村速水推行改革過於急躁，1869 年（明治 2 年）全國起而反抗，梅村遭到撤換（梅村騷動）。本縣於 1876 年定形，其後一整個世代都投注在河川上——在德・雷克主持下自 1887 年延續至 1912 年的三川分流——以及 1891 年濃尾地震後的重建。1880 年代，東海道鐵路通到大垣與岐阜，為美濃的燈籠、和傘、團扇與陶器製作者打開了全國市場。" } },
        { t:"panel", tint:"plum", title:{en:"The road over Nomugi Pass",ja:"野麦峠の道",zh:"野麥嶺之路"}, body:[
          { t:"p", text:{
            en:"From the late nineteenth century into the Taishō period, thousands of Hida farm girls, many in their early teens, walked each winter over the Nomugi Pass, at about 1,670 m on the Nagano border, to work in the silk-reeling mills of Suwa and Okaya, and walked back each spring with their wages. The journalist Yamamoto Shigemi interviewed hundreds of former mill girls for <em>Ā Nomugi Tōge</em> (1968), subtitled “a sad history of silk-mill girls”; the 1979 film made it a national story. The book has been criticised for overstating the misery and defended as the only record of women who otherwise left none.",
            ja:"十九世紀後半から大正期にかけて、何千人もの飛騨の農家の娘——多くは十代前半——が、毎年冬に長野県境の標高約1,670メートルの野麦峠を歩いて越え、諏訪や岡谷の製糸工場へ働きに出て、春に賃金を持って歩いて帰った。記者・山本茂実は数百人の元工女に話を聞いて『あゝ野麦峠——ある製糸工女哀史』（1968年）を書き、1979年の映画化で全国に知られた。この本は悲惨を誇張していると批判される一方、ほかに記録を残さなかった女性たちの唯一の記録として擁護されてもいる。",
            zh:"從十九世紀後期到大正時期，數以千計的飛驒農家少女——許多才十二、三歲——每年冬天徒步翻越長野縣界上海拔約 1,670 公尺的野麥嶺，前往諏訪與岡谷的製絲工廠工作，春天再帶著工資走回家。記者山本茂實訪問了數百名前女工，寫成《啊，野麥嶺——一部製絲女工的哀史》（1968 年），1979 年改編成電影後舉國皆知。此書被批評誇大了悲慘，也被辯護為這些未曾留下其他紀錄的女性唯一的紀錄。" } }
        ] }
      ]
    },

    { t:"section", id:"industry",
      title:{ en:"Crafts into industries", ja:"工芸から産業へ", zh:"從工藝到產業" }, jp:"産業化",
      body:[
        { t:"grid", cols:3, cells:[
          { h:{en:"Cutlery, Seki",ja:"関の刃物",zh:"關的刀具"}, d:{en:"After the 1876 sword ban the smiths turned to pocket knives, kitchen knives and razors; by the 1930s Seki was exporting pocket knives worldwide. See <a href=\"cutlery.html\">The Cutlery Industry</a>.",ja:"1876年の廃刀令ののち、鍛冶はポケットナイフ・包丁・剃刀へ転じ、1930年代には関のポケットナイフが世界へ輸出されていた。<a href=\"cutlery.html\">刃物産業</a>を参照。",zh:"1876 年廢刀令後，刀匠轉向摺疊刀、菜刀與剃刀；到 1930 年代，關的摺疊刀已外銷全球。見<a href=\"cutlery.html\">刀具產業</a>。"} },
          { h:{en:"Ceramics, Tōnō",ja:"東濃の陶磁器",zh:"東濃的陶瓷"}, d:{en:"Kilns in Tajimi, Toki and Mizunami moved to mass production of tableware and tiles for home and export; Mino ware now supplies most of Japan's ceramic tableware. See <a href=\"minoyaki.html\">Mino Ware</a>.",ja:"多治見・土岐・瑞浪の窯は国内と輸出向けの食器やタイルの量産へ移り、美濃焼はいまや日本の陶磁器食器の大半を供する。<a href=\"minoyaki.html\">美濃焼</a>を参照。",zh:"多治見、土岐、瑞浪的窯場轉向大量生產內銷與外銷的餐具和磁磚；美濃燒如今供應日本大部分的陶瓷餐具。見<a href=\"minoyaki.html\">美濃燒</a>。"} },
          { h:{en:"Furniture, Takayama",ja:"高山の家具",zh:"高山的家具"}, d:{en:"Bentwood chairs from Hida beech from 1920, and a regional furniture industry after the war. See <a href=\"furniture.html\">Hida Furniture</a>.",ja:"1920年から飛騨のブナで曲木椅子を作り、戦後は地域の家具産業となった。<a href=\"furniture.html\">飛騨の家具</a>を参照。",zh:"自 1920 年起以飛驒山毛櫸製作曲木椅，戰後發展為地方家具產業。見<a href=\"furniture.html\">飛驒家具</a>。"} },
          { h:{en:"Apparel, Gifu city",ja:"岐阜のアパレル",zh:"岐阜市的成衣"}, d:{en:"After 1945, repatriates from Manchuria sold used clothing and army surplus in the burned-out ground in front of Gifu station — the “Harbin Street”. From it grew the Gifu textile wholesalers' district, organised in 1951, one of Japan's great ready-to-wear centres of the post-war decades.",ja:"1945年以後、満州からの引揚者が焼け野原の岐阜駅前で古着や軍服を売った——「ハルピン街」である。そこから1951年に組織された岐阜繊維問屋町が育ち、戦後の数十年、日本有数の既製服の産地となった。",zh:"1945 年後，從滿洲撤回的引揚者在岐阜車站前的焦土上販售舊衣與軍服——即「哈爾濱街」。由此發展出 1951 年組織起來的岐阜纖維批發街，成為戰後數十年日本重要的成衣產地之一。"} },
          { h:{en:"Aircraft, Kakamigahara",ja:"各務原の航空機",zh:"各務原的飛機"}, d:{en:"An army airfield opened on the Kakamigahara plain in 1917 and aircraft manufacturing followed; Kawasaki's Gifu works, heavily bombed in 1945, still builds aircraft, and the city has a museum of aerospace.",ja:"1917年に各務原の原野に陸軍の飛行場が開かれ、航空機の製造が続いた。1945年に激しく爆撃された川崎の岐阜工場はいまも航空機を造り、市には航空宇宙の博物館がある。",zh:"1917 年，陸軍在各務原的原野上開設機場，飛機製造隨之而來；1945 年遭猛烈轟炸的川崎岐阜工廠至今仍在製造飛機，市內並設有航空宇宙博物館。"} },
          { h:{en:"Power, the Kiso",ja:"木曽川の電力",zh:"木曾川的電力"}, d:{en:"Fukuzawa Momosuke's Ōi Dam of 1924 was the first of the hydroelectric dams that fed the factories of the Chūkyō region. See <a href=\"rivers.html\">Rivers &amp; Water</a>.",ja:"1924年の福沢桃介の大井ダムは、中京の工場を支えた水力発電ダム群の最初のものであった。<a href=\"rivers.html\">川と水</a>を参照。",zh:"福澤桃介 1924 年的大井水壩，是為中京地區工廠供電的一系列水力水壩之首。見<a href=\"rivers.html\">河川與水</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"war",
      title:{ en:"1945", ja:"1945年", zh:"1945 年" }, jp:"空襲",
      body:[
        { t:"p", text:{
          en:"On the night of 9 July 1945 about 130 B-29s dropped more than ten thousand incendiaries on Gifu city. Around 900 people were killed, more than a thousand injured and some 20,000 houses burned — about seven-tenths of the city. On 29 July Ōgaki was bombed; the keep of Ōgaki Castle, designated a National Treasure in 1936, was destroyed. Kakamigahara's airfield and aircraft factories were attacked more than ten times. The cities were rebuilt on new street plans; Ōgaki's keep was reconstructed in 1959.",
          ja:"1945年7月9日夜、約130機のB29が岐阜市に一万発を超える焼夷弾を投下した。死者約900人、負傷者千人以上、焼失家屋約2万戸、市街地の約七割が焼けた。7月29日には大垣が空襲を受け、1936年に国宝に指定されていた大垣城の天守が焼失した。各務原の飛行場と航空機工場は十数回の空襲を受けた。町々は新しい街路計画のもとに再建され、大垣城の天守は1959年に再建された。",
          zh:"1945 年 7 月 9 日夜，約 130 架 B-29 對岐阜市投下一萬多枚燒夷彈，約 900 人死亡、逾千人受傷、約兩萬戶房屋焚毀——市區約七成付之一炬。7 月 29 日大垣遭空襲，1936 年被指定為國寶的大垣城天守被毀。各務原的機場與飛機工廠則遭到十餘次空襲。各城市依新的街道計畫重建；大垣城天守於 1959 年重建。" } }
      ]
    },

    { t:"section", id:"postwar",
      title:{ en:"Roads, heritage and fewer people", ja:"道と遺産と減る人口", zh:"道路、遺產與減少的人口" }, jp:"戦後",
      body:[
        { t:"timeline", items:[
          { year:"1934", era:{en:"Shōwa 9",ja:"昭和9年",zh:"昭和9年"}, title:{en:"Takayama Line completed",ja:"高山本線全通",zh:"高山本線全線通車"}, text:{en:"On 25 October the railway from Gifu through Takayama to Toyama is completed, ending Hida's isolation.",ja:"10月25日、岐阜から高山を経て富山へ至る鉄道が全通し、飛騨の孤立が終わる。",zh:"10 月 25 日，從岐阜經高山到富山的鐵路全線通車，終結了飛驒的孤立。"} },
          { year:"1964", era:{en:"Shōwa 39",ja:"昭和39年",zh:"昭和39年"}, title:{en:"Shinkansen and expressway",ja:"新幹線と高速道路",zh:"新幹線與高速公路"}, text:{en:"The Tōkaidō Shinkansen opens with a station at Gifu-Hashima; the Meishin Expressway opens through Sekigahara in the same years.",ja:"東海道新幹線が岐阜羽島駅とともに開業し、同じころ名神高速道路が関ケ原を通って開通する。",zh:"東海道新幹線通車，設岐阜羽島站；同一時期名神高速公路也經關原通車。"} },
          { year:"1995", era:{en:"Heisei 7",ja:"平成7年",zh:"平成7年"}, title:{en:"Shirakawa-gō inscribed",ja:"白川郷、世界遺産に",zh:"白川鄉列入世界遺產"}, text:{en:"The gasshō villages of Shirakawa-gō and Gokayama become a UNESCO World Heritage Site.",ja:"白川郷・五箇山の合掌造り集落がユネスコ世界遺産となる。",zh:"白川鄉與五箇山的合掌造聚落列入聯合國教科文組織世界遺產。"} },
          { year:"2000", era:{en:"Heisei 12",ja:"平成12年",zh:"平成12年"}, title:{en:"Population peaks",ja:"人口の頂点",zh:"人口達到高峰"}, text:{en:"The census counts about 2.11 million; the number falls at every census thereafter.",ja:"国勢調査で約211万人。以後は国勢調査のたびに減少する。",zh:"國勢調查約 211 萬人；此後每次調查都在減少。"} },
          { year:"2008", era:{en:"Heisei 20",ja:"平成20年",zh:"平成20年"}, title:{en:"Tōkai-Hokuriku Expressway completed",ja:"東海北陸自動車道全通",zh:"東海北陸自動車道全線通車"}, text:{en:"On 5 July the last section, between Hida-Kiyomi and Shirakawa-gō, opens, linking the Pacific and Sea of Japan coasts through Hida.",ja:"7月5日、最後の区間である飛騨清見〜白川郷が開通し、飛騨を通って太平洋側と日本海側が結ばれる。",zh:"7 月 5 日，最後一段飛驒清見至白川鄉開通，經由飛驒連結太平洋與日本海兩岸。"} },
          { year:"2014–16", era:{en:"UNESCO",ja:"ユネスコ",zh:"聯合國教科文組織"}, title:{en:"Intangible heritage",ja:"無形文化遺産",zh:"非物質文化遺產"}, text:{en:"Hon-minoshi paper (2014) and the float festivals of Takayama, Furukawa and Ōgaki (2016) are inscribed as intangible cultural heritage; the Nagara's ayu fishery becomes a GIAHS in 2015.",ja:"本美濃紙（2014年）と、高山・古川・大垣の山・鉾・屋台の祭り（2016年）が無形文化遺産に、長良川の鮎が2015年に世界農業遺産になる。",zh:"本美濃紙（2014 年）與高山、古川、大垣的山鉾屋台祭典（2016 年）列入非物質文化遺產；長良川的香魚漁業於 2015 年成為世界農業遺產。"} }
        ] },
        { t:"note", label:{en:"The line not yet open",ja:"まだ開かない線",zh:"尚未通車的路線"}, text:{
          en:"A station for the Chūō maglev line between Tokyo and Nagoya is under construction near Nakatsugawa. The line's opening, first planned for 2027, has been postponed, and no firm date has been set.",
          ja:"東京と名古屋を結ぶリニア中央新幹線の岐阜県駅（仮称）が中津川市に建設中である。当初2027年とされた開業は延期され、確定した時期は示されていない。",
          zh:"連結東京與名古屋的中央磁浮新幹線，其岐阜縣站（暫稱）正在中津川市興建。原訂 2027 年的通車時程已延後，至今尚未公布確定日期。" } }
      ]
    },

    { t:"related", items:[
      { href:"economy.html", why:{ en:"The prefecture's industries in figures.", ja:"数字で見る県の産業。", zh:"數字中的本縣產業。" } },
      { href:"future.html", why:{ en:"What the falling population means for the crafts.", ja:"人口の減少が工芸に意味すること。", zh:"人口減少對工藝意味著什麼。" } },
      { href:"shirakawago.html", why:{ en:"The first World Heritage Site in the prefecture.", ja:"県で最初の世界遺産。", zh:"本縣第一處世界遺產。" } },
      { href:"chisui.html", why:{ en:"The river works that made modern Mino possible.", ja:"近代の美濃を可能にした治水。", zh:"成就近代美濃的治水工程。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- people */
GIFU.pages["people"] = {
  kicker: { en: "History · 09", ja: "歴史 · 09", zh: "歷史 · 09" },
  title:  { en: "People", ja: "人物", zh: "人物" },
  jp: "美濃と飛騨にゆかりの人々",
  lede: {
    en: "The people on this page were born in Mino or Hida, or did the work that made them remembered there. They are arranged by period, with a line on why each belongs in a book about Gifu. Birthplaces in this part of Japan are often disputed — several towns claim the same person — and where they are, the page says so rather than choosing.",
    ja: "この頁の人々は、美濃や飛騨に生まれたか、そこで記憶される仕事をした人々である。時代順に並べ、なぜ岐阜の本に載るのかを一行添えた。この地方では出生地にしばしば異説があり——いくつもの町が同じ人物を名乗る——その場合は一方を選ばず、そのことを記す。",
    zh: "本頁人物或生於美濃、飛驒，或在此完成了讓他們被記住的事業。依時代排列，並附上一行說明其為何屬於一本關於岐阜的書。這一帶的出生地常有爭議——好幾個城鎮宣稱同一個人——遇到這種情形，本頁照實說明，而不代為選擇。"
  },
  body: [
    { t:"section", id:"ancient",
      title:{ en:"Before 1500", ja:"1500年以前", zh:"1500 年以前" }, jp:"古代・中世",
      body:[
        { t:"defs", items:[
          { term:{en:"Murakuni no Oyori",ja:"村国男依",zh:"村國男依"}, jp:"むらくにのおより · d. 676", def:{
            en:"A Mino-born attendant of Prince Ōama who secured the Fuwa pass in the Jinshin War of 672 and commanded at the decisive battle. Remembered at the Murakuni shrine in Kakamigahara.",
            ja:"美濃出身の大海人皇子の舎人。672年の壬申の乱で不破の道を押さえ、決戦で軍を率いた。各務原の村国神社に記憶される。",
            zh:"出身美濃的大海人皇子舍人，在 672 年壬申之亂中扼守不破道，並於決戰中領軍。各務原的村國神社紀念著他。"} },
          { term:{en:"Taichō",ja:"泰澄",zh:"泰澄"}, jp:"たいちょう · 682–767 (trad.)", def:{
            en:"The Echizen monk credited by tradition with opening Hakusan in 717, and with founding Nagataki, the Mino base of the Hakusan pilgrimage.",
            ja:"717年に白山を開き、白山登拝の美濃の拠点・長滝を開いたと伝えられる越前の僧。",
            zh:"相傳於 717 年開闢白山、並創建白山參拜美濃據點「長瀧」的越前僧人。"} },
          { term:{en:"Musō Soseki",ja:"夢窓疎石",zh:"夢窗疏石"}, jp:"むそうそせき · 1275–1351", def:{
            en:"The most influential Zen monk and garden-maker of his age; founded Eihō-ji at Tajimi in 1313, whose halls are National Treasures.",
            ja:"当代最大の禅僧で作庭家。1313年に多治見の永保寺を開き、その堂は国宝である。",
            zh:"當代最具影響力的禪僧兼造園家；1313 年創建多治見的永保寺，其殿堂為國寶。"} },
          { term:{en:"Kanzan Egen",ja:"関山慧玄",zh:"關山慧玄"}, jp:"かんざんえげん · 1277–1361", def:{
            en:"Lived in seclusion at Ibuka in Mino for eight or nine years before founding Myōshin-ji in Kyoto; Shōgen-ji grew on his hermitage.",
            ja:"美濃の伊深で八、九年隠棲したのち京都に妙心寺を開いた。その庵の跡に正眼寺が育った。",
            zh:"在美濃伊深隱居八、九年後，赴京都開創妙心寺；正眼寺即在其草庵舊址上發展而成。"} },
          { term:{en:"Toki Yoriyasu",ja:"土岐頼康",zh:"土岐賴康"}, jp:"ときよりやす · 1318–1388", def:{
            en:"Constable of Mino, Owari and Ise at the height of the Toki family's power.",
            ja:"土岐氏の最盛期に美濃・尾張・伊勢の守護を兼ねた。",
            zh:"土岐氏權勢鼎盛時，兼任美濃、尾張、伊勢三國守護。"} }
        ] }
      ]
    },

    { t:"section", id:"sengoku",
      title:{ en:"The age of war", ja:"戦国と安土桃山", zh:"戰國與安土桃山" }, jp:"1500–1615",
      body:[
        { t:"defs", items:[
          { term:{en:"Saitō Dōsan",ja:"斎藤道三",zh:"齋藤道三"}, jp:"さいとうどうさん · d. 1556", def:{
            en:"“The viper of Mino”, who with his father took the province from the Toki; killed by his son at the Nagara River in 1556. See <a href=\"medieval.html\">The Toki &amp; the Saitō</a>.",
            ja:"「美濃のマムシ」。父とともに土岐氏から国を奪い、1556年に長良川で息子に討たれた。<a href=\"medieval.html\">土岐氏と斎藤氏</a>を参照。",
            zh:"「美濃之蝮」，與其父一同從土岐氏手中奪取美濃；1556 年在長良川被兒子所殺。見<a href=\"medieval.html\">土岐氏與齋藤氏</a>。"} },
          { term:{en:"Nōhime",ja:"濃姫",zh:"濃姬"}, jp:"のうひめ · dates unknown", def:{
            en:"Dōsan's daughter, married to Oda Nobunaga in 1549. Almost nothing about her later life is documented; her name itself means “the lady from Mino”.",
            ja:"道三の娘で、1549年に織田信長に嫁いだ。その後の生涯はほとんど記録がない。名そのものが「美濃から来た姫」を意味する。",
            zh:"道三之女，1549 年嫁給織田信長。其後半生幾乎沒有記載；這個名字本身就是「來自美濃的姬君」之意。"} },
          { term:{en:"Oda Nobunaga",ja:"織田信長",zh:"織田信長"}, jp:"おだのぶなが · 1534–1582", def:{
            en:"Born in Owari, not Mino, but Gifu's name and its castle town are his work: he took Inabayama in 1567 and ruled from it until 1576. See <a href=\"nobunaga.html\">Nobunaga's Gifu</a>.",
            ja:"美濃ではなく尾張の生まれだが、岐阜の名とその城下町は彼の仕事である。1567年に稲葉山を取り、1576年までそこから治めた。<a href=\"nobunaga.html\">信長の岐阜</a>を参照。",
            zh:"生於尾張而非美濃，但岐阜之名與其城下町出自他手：1567 年奪取稻葉山，直到 1576 年都以此為據點。見<a href=\"nobunaga.html\">信長的岐阜</a>。"} },
          { term:{en:"Takenaka Hanbei",ja:"竹中半兵衛",zh:"竹中半兵衛"}, jp:"たけなかはんべえ · 1544–1579", def:{
            en:"A Mino retainer famous as a strategist, who seized Inabayama Castle from his own lord with a handful of men in 1564 and later served Hideyoshi. His family's seat at Tarui survives as the Takenaka jinya gate.",
            ja:"軍師として名高い美濃の武士。1564年、わずかな手勢で主君の稲葉山城を奪い、のちに秀吉に仕えた。一族の拠点だった垂井には竹中陣屋の門が残る。",
            zh:"以軍師聞名的美濃武士，1564 年僅率少數人手便奪取了主君的稻葉山城，後來效力於秀吉。其家族位於垂井的據點，至今留有竹中陣屋的門。"} },
          { term:{en:"Akechi Mitsuhide",ja:"明智光秀",zh:"明智光秀"}, jp:"あけちみつひで · d. 1582", def:{
            en:"Of the Akechi, a branch of Mino's Toki; the man who killed Nobunaga at Honnō-ji in 1582. His birthplace is disputed — the Kani and Ena areas both claim him — and his early life is barely documented.",
            ja:"美濃の土岐氏の庶流・明智氏の出で、1582年に本能寺で信長を討った。出生地には異説があり——可児と恵那の双方がゆかりを唱える——若年期はほとんど記録がない。",
            zh:"出身美濃土岐氏的支族明智氏，1582 年在本能寺殺了信長。其出生地有爭議——可兒與惠那兩地都宣稱與他有關——早年事蹟幾乎沒有記載。"} },
          { term:{en:"Furuta Oribe",ja:"古田織部",zh:"古田織部"}, jp:"ふるたおりべ · 1543–1615", def:{
            en:"A Mino-born warrior and tea master, Sen no Rikyū's most original pupil; the bold Oribe ware of the Mino kilns is named after his taste. Ordered to commit suicide in 1615. See <a href=\"minoyaki.html\">Mino Ware</a>.",
            ja:"美濃生まれの武将で茶人。千利休の弟子のなかで最も独創的な人物で、美濃の窯の大胆な織部焼はその好みにちなむ。1615年に切腹を命じられた。<a href=\"minoyaki.html\">美濃焼</a>を参照。",
            zh:"生於美濃的武將兼茶人，千利休門下最具獨創性的弟子；美濃窯大膽的「織部燒」即以其品味命名。1615 年奉命切腹。見<a href=\"minoyaki.html\">美濃燒</a>。"} },
          { term:{en:"Kanamori Nagachika",ja:"金森長近",zh:"金森長近"}, jp:"かなもりながちか · 1524–1608", def:{
            en:"A former general of Nobunaga who took Hida for Hideyoshi in 1585 and built Takayama's castle and town; in his last years he laid out the river port of Kōzuchi, now Mino city.",
            ja:"信長の旧臣で、1585年に秀吉のために飛騨を平定し、高山の城と町を築いた。晩年には上有知（現・美濃市）の川湊の町を整えた。",
            zh:"信長的舊將，1585 年為秀吉平定飛驒，並建造高山的城池與城下町；晚年又規劃了上有知（今美濃市）的河港城鎮。"} }
        ] }
      ]
    },

    { t:"section", id:"edo",
      title:{ en:"The Edo period", ja:"江戸時代", zh:"江戶時代" }, jp:"1603–1868",
      body:[
        { t:"defs", items:[
          { term:{en:"Enkū",ja:"円空",zh:"圓空"}, jp:"えんくう · 1632–1695", def:{
            en:"A wandering Buddhist monk from Mino who is said to have vowed to carve 120,000 images and left thousands of roughly hewn wooden Buddhas across Japan, many in Gifu. His birthplace is claimed by both Hashima and Gujō. See <a href=\"enku.html\">Enkū's Buddhas</a>.",
            ja:"美濃出身の遊行僧。十二万体の像を彫ると誓ったと伝えられ、荒々しく彫った木の仏を全国に数千体残した。その多くが岐阜にある。出生地は羽島と郡上の双方が唱える。<a href=\"enku.html\">円空仏</a>を参照。",
            zh:"出身美濃的雲遊僧，相傳曾發願雕刻十二萬尊佛像，在日本各地留下數千尊粗獷的木雕佛，許多在岐阜。羽島與郡上都宣稱是其出生地。見<a href=\"enku.html\">圓空佛</a>。"} },
          { term:{en:"Matsuo Bashō",ja:"松尾芭蕉",zh:"松尾芭蕉"}, jp:"まつおばしょう · 1644–1694", def:{
            en:"Not a native, but Gifu keeps two of his moments: the 1688 haiku on the cormorant boats of the Nagara, and Ōgaki, where the journey of <em>Oku no Hosomichi</em> ended in 1689.",
            ja:"土地の人ではないが、岐阜はその二つの瞬間を保つ。1688年の長良川の鵜舟の句と、1689年に『おくのほそ道』の旅が結ばれた大垣である。",
            zh:"並非本地人，但岐阜保有他的兩個時刻：1688 年詠長良川鵜舟的俳句，以及 1689 年《奧之細道》旅程的終點——大垣。"} },
          { term:{en:"Hirata Yukie",ja:"平田靱負",zh:"平田靱負"}, jp:"ひらたゆきえ · 1704–1755", def:{
            en:"Chief retainer of Satsuma who led the Hōreki river works on the three rivers and died the day after their completion. Enshrined at the Chisui Jinja in Kaizu. See <a href=\"chisui.html\">Taming the Three Rivers</a>.",
            ja:"薩摩藩の家老。三川の宝暦治水を総奉行として率い、完成の翌日に没した。海津の治水神社に祀られる。<a href=\"chisui.html\">木曽三川の治水</a>を参照。",
            zh:"薩摩藩家老，以總奉行身分率領三川的寶曆治水，於竣工次日辭世。供奉於海津的治水神社。見<a href=\"chisui.html\">木曾三川的治水</a>。"} },
          { term:{en:"Mihara Sadajirō",ja:"三原定次郎",zh:"三原定次郎"}, jp:"みはらさだじろう · d. 1758", def:{
            en:"A leader of the Gujō peasants' uprising of 1754–58, executed with twelve others; remembered as one of the region's <em>gimin</em>, righteous commoners.",
            ja:"1754〜58年の郡上一揆の頭取の一人で、ほか十二人とともに処刑された。地域の義民の一人として記憶される。",
            zh:"1754–58 年郡上一揆的首領之一，與另外十二人一同被處死；被當地人紀念為「義民」之一。"} },
          { term:{en:"Banryū",ja:"播隆",zh:"播隆"}, jp:"ばんりゅう · 1786–1840", def:{
            en:"A Pure Land monk who re-opened the trail on Kasagatake from the Hida side in 1823 and made the first recorded ascent of Yarigatake in 1828.",
            ja:"浄土宗の僧。1823年に飛騨側から笠ヶ岳の道を再興し、1828年に槍ヶ岳の記録に残る初登頂を果たした。",
            zh:"淨土宗僧人，1823 年從飛驒一側重開笠岳山道，1828 年完成槍岳有紀錄以來的首登。"} }
        ] }
      ]
    },

    { t:"section", id:"modern",
      title:{ en:"Since Meiji", ja:"明治以降", zh:"明治以後" }, jp:"1868–",
      body:[
        { t:"defs", items:[
          { term:{en:"Johannis de Rijke",ja:"ヨハネス・デ・レーケ",zh:"德・雷克"}, jp:"1842–1913", def:{
            en:"The Dutch engineer who designed the separation of the Kiso Three Rivers (1887–1912) and argued that flood control begins in the mountains.",
            ja:"木曽三川分流（1887〜1912年）を計画し、「治水は治山にあり」と説いたオランダ人技師。",
            zh:"規劃木曾三川分流（1887–1912 年）、主張「治水始於治山」的荷蘭工程師。"} },
          { term:{en:"Nawa Yasushi",ja:"名和靖",zh:"名和靖"}, jp:"なわやすし · 1857–1926", def:{
            en:"Entomologist who named the Gifu butterfly in 1883 and founded Japan's oldest insect museum in Gifu Park in 1919.",
            ja:"1883年にギフチョウを命名し、1919年に岐阜公園に日本最古の昆虫博物館を開いた昆虫学者。",
            zh:"1883 年為岐阜蝶命名、1919 年在岐阜公園創立日本最古老昆蟲博物館的昆蟲學家。"} },
          { term:{en:"Tsubouchi Shōyō",ja:"坪内逍遥",zh:"坪內逍遙"}, jp:"つぼうちしょうよう · 1859–1935", def:{
            en:"Born at Ōta, now Minokamo; critic, novelist and the first translator of the complete works of Shakespeare into Japanese.",
            ja:"太田（現・美濃加茂市）の生まれ。評論家・小説家で、シェイクスピア全集を初めて日本語に訳した。",
            zh:"生於太田（今美濃加茂市）；評論家、小說家，也是第一位將莎士比亞全集譯成日文的人。"} },
          { term:{en:"Shimazaki Tōson",ja:"島崎藤村",zh:"島崎藤村"}, jp:"しまざきとうそん · 1872–1943", def:{
            en:"Born at Magome on the Nakasendō — then in Nagano, since 2005 in Gifu's Nakatsugawa. His novel <em>Before the Dawn</em> is set in the Kiso post towns in the years around the Meiji Restoration.",
            ja:"中山道の馬籠の生まれ。当時は長野県、2005年からは岐阜県中津川市である。小説『夜明け前』は明治維新前後の木曽路の宿場を舞台とする。",
            zh:"生於中山道的馬籠——當時屬長野縣，2005 年起屬岐阜縣中津川市。其小說《黎明之前》以明治維新前後的木曾路宿場為背景。"} },
          { term:{en:"Kumagai Morikazu",ja:"熊谷守一",zh:"熊谷守一"}, jp:"くまがいもりかず · 1880–1977", def:{
            en:"Painter born at Tsukechi in the Ura-Kiso hinoki country; known for flat, simplified pictures of insects, cats and flowers. A museum in his birthplace is devoted to him.",
            ja:"裏木曽の檜の里・付知に生まれた画家。虫や猫や花を平らに簡潔に描いた絵で知られる。生地に記念館がある。",
            zh:"生於裏木曾檜木之鄉付知的畫家，以平塗、簡化的昆蟲、貓與花卉畫作聞名。其出生地設有紀念館。"} },
          { term:{en:"Arakawa Toyozō",ja:"荒川豊蔵",zh:"荒川豐藏"}, jp:"あらかわとよぞう · 1894–1985", def:{
            en:"Tajimi-born potter who in 1930 found a Shino shard at the Momoyama kiln site of Ōgaya, proving that Shino had been made in Mino, not Seto; later a Living National Treasure for Shino and Setoguro.",
            ja:"多治見生まれの陶芸家。1930年に大萱の桃山時代の窯跡で志野の陶片を見つけ、志野が瀬戸ではなく美濃で焼かれたことを明らかにした。のちに志野・瀬戸黒で人間国宝。",
            zh:"生於多治見的陶藝家，1930 年在大萱的桃山時代窯址發現志野陶片，證明志野燒出自美濃而非瀨戶；後以志野與瀨戶黑獲認定為人間國寶。"} },
          { term:{en:"Sugihara Chiune",ja:"杉原千畝",zh:"杉原千畝"}, jp:"すぎはらちうね · 1900–1986", def:{
            en:"The diplomat who, as consul in Kaunas in 1940, issued transit visas that saved thousands of Jewish refugees. Born in Gifu Prefecture on 1 January 1900; his birthplace is given as Kōzuchi (now Mino city) in some records, and Yaotsu, which has built a memorial museum and hill, also claims him.",
            ja:"1940年、カウナスの領事代理として通過査証を発給し、数千人のユダヤ人難民を救った外交官。1900年1月1日に岐阜県で生まれた。出生地は記録によって上有知（現・美濃市）とされ、記念館と記念の丘を設けた八百津町もゆかりを唱える。",
            zh:"1940 年任考納斯領事代理時，簽發過境簽證、救了數千名猶太難民的外交官。1900 年 1 月 1 日生於岐阜縣；部分紀錄記其出生地為上有知（今美濃市），而建有紀念館與紀念山丘的八百津町也宣稱與他有淵源。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"history.html", why:{ en:"The periods these people lived in.", ja:"これらの人々が生きた時代。", zh:"這些人物所處的時代。" } },
      { href:"enku.html", why:{ en:"The most prolific carver in Japanese history.", ja:"日本史上最も多作な彫り手。", zh:"日本史上最多產的雕刻者。" } },
      { href:"minoyaki.html", why:{ en:"Oribe, Arakawa and the potters of Tōnō.", ja:"織部、荒川、そして東濃の陶工たち。", zh:"織部、荒川與東濃的陶工們。" } },
      { href:"museums.html", why:{ en:"Where their work can be seen.", ja:"彼らの仕事を見られる場所。", zh:"可以看到他們作品的地方。" } }
    ] }
  ]
};
