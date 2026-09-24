/* =============================================================
   THE SPIRIT OF GIFU — Foundations
   Page modules, concatenated. Each page is one
   GIFU.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ----------------------------------------------- index */
GIFU.pages["index"] = {
  kicker: { en: "Foundations · 01", ja: "基礎 · 01", zh: "基礎 · 01" },
  title:  { en: "Gifu", ja: "岐阜", zh: "岐阜" },
  jp: "ぎふ · 美濃 Mino · 飛騨 Hida · 飛山濃水",
  lede: {
    en: "Gifu is a landlocked prefecture at the centre of Honshū, made of two old provinces: Mino, a country of rivers and plain opening south towards Ise Bay, and Hida, a high basin walled in by the Japanese Alps. Four-fifths of it is forest. For centuries its rivers carried timber, paper and pottery to market, and its long winters gave people time to carve, forge and brew. This book sets out the land, the history and the culture of Gifu, and then follows what its people have made from them — wood, blades, paper, clay and sake — in English, Japanese and Chinese.",
    ja: "岐阜県は本州のほぼ中央にある海のない県で、二つの旧国からなる。南の美濃は伊勢湾へ向かって開く川と平野の国、北の飛騨は日本アルプスに囲まれた高い盆地の国である。県土の五分の四は森林である。川は何百年ものあいだ木材や紙や焼き物を市場へ運び、長い冬は人々に彫り、鍛え、醸す時間を与えた。本書は岐阜の風土・歴史・文化を示したうえで、人々がそこから生み出してきたもの——木、刃物、紙、土、酒——を、英語・日本語・中国語の三つの言葉で辿る。",
    zh: "岐阜縣位於本州正中央，是不臨海的內陸縣，由兩個舊國組成：南方的美濃，是朝伊勢灣敞開的河川與平原之國；北方的飛驒，則是被日本阿爾卑斯群山圍住的高地盆地之國。全縣五分之四是森林。數百年來，河川把木材、紙與陶器送往市場，漫長的冬季則讓人們有時間雕刻、鍛打與釀造。本書先說明岐阜的風土、歷史與文化，再追索人們從中造出的東西——木、刀刃、紙、土與酒——以英文、日文、中文三種語言寫成。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Gifu as a schematic map — not to scale. The prefecture's five planning regions are drawn as blocks: Hida across the north, and the four Mino regions (Seinō, Gifu, Chūnō, Tōnō) across the south. Hida's rivers run north to the Sea of Japan; Mino's run south to Ise Bay, which is why the old saying pairs the two halves as <em>hisan nōsui</em> — “the mountains of Hida, the waters of Mino”.",
        ja:"岐阜県の模式図（縮尺は正確ではない）。県が計画に用いる五つの圏域を区画として示した。北に飛騨、南に美濃の四圏域（西濃・岐阜・中濃・東濃）。飛騨の川は北へ流れて日本海に、美濃の川は南へ流れて伊勢湾に注ぐ。古くから両者を「飛山濃水」——飛騨の山、美濃の水——と対にして呼ぶのはこのためである。",
        zh:"岐阜縣示意圖（非按比例）。縣府規劃所用的五個圈域以區塊表示：北方為飛驒，南方為美濃的四個圈域（西濃、岐阜、中濃、東濃）。飛驒的河川北流入日本海，美濃的河川南流入伊勢灣——這正是自古以「飛山濃水」（飛驒之山、美濃之水）並稱兩地的原因。" },
      svg: function (lang, L) {
        function t(o) { return L(o); }
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 470" role="img" aria-label="Schematic map of Gifu Prefecture">' +
          '<rect x="0.5" y="0.5" width="759" height="469" fill="none" stroke="#DFDAD0"/>' +
          '<text x="34" y="30" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
            t({ en:"GIFU — A SCHEMATIC MAP", ja:"岐阜県 · 模式図", zh:"岐阜縣 · 示意圖" }) + '</text>' +
          '<text x="726" y="30" text-anchor="end" ' + F + ' font-size="9.5" fill="#8B857C" letter-spacing="1.4">' +
            t({ en:"SCHEMATIC · NOT TO SCALE", ja:"模式図・縮尺不同", zh:"示意・非按比例" }) + '</text>' +
          '<text x="380" y="56" text-anchor="middle" ' + F + ' font-size="10" fill="#8B857C">' +
            t({ en:"↑ north to the Sea of Japan, through Toyama", ja:"↑ 北へ、富山を経て日本海へ", zh:"↑ 向北，經富山流入日本海" }) + '</text>' +
          /* regions */
          '<rect x="60" y="66" width="640" height="170" fill="#E0E6DB" stroke="#CDC6B9"/>' +
          '<rect x="60" y="248" width="150" height="160" fill="#F0EDE4" stroke="#CDC6B9"/>' +
          '<rect x="210" y="248" width="130" height="160" fill="#EDE5D2" stroke="#CDC6B9"/>' +
          '<rect x="340" y="248" width="190" height="160" fill="#E7DFD2" stroke="#CDC6B9"/>' +
          '<rect x="530" y="248" width="170" height="160" fill="#EEE1DF" stroke="#CDC6B9"/>';
        var regs = [
          [72, 84, { en:"HIDA", ja:"飛騨", zh:"飛驒" }],
          [72, 266, { en:"SEINŌ", ja:"西濃", zh:"西濃" }],
          [222, 266, { en:"GIFU", ja:"岐阜", zh:"岐阜" }],
          [352, 266, { en:"CHŪNŌ", ja:"中濃", zh:"中濃" }],
          [542, 266, { en:"TŌNŌ", ja:"東濃", zh:"東濃" }]
        ];
        regs.forEach(function (r) {
          s += '<text x="' + r[0] + '" y="' + r[1] + '" ' + F + ' font-size="11" fill="#55504A" letter-spacing="1.8" font-weight="600">' + t(r[2]) + '</text>';
        });
        s += '<text x="72" y="100" ' + F + ' font-size="9.5" fill="#8B857C">' +
          t({ en:"old province of Hida", ja:"旧飛騨国", zh:"舊飛驒國" }) + '</text>' +
          '<text x="72" y="400" ' + F + ' font-size="9.5" fill="#8B857C">' +
          t({ en:"old province of Mino →", ja:"旧美濃国 →", zh:"舊美濃國 →" }) + '</text>';
        /* rivers */
        var RV = 'fill="none" stroke="#8FA6AE" stroke-width="2"';
        s += '<path d="M470 252 C466 276 430 284 410 292 C390 300 372 306 350 314 C300 330 262 334 246 372 C236 396 230 420 228 446" ' + RV + '/>' +
             '<path d="M118 252 C124 290 150 320 156 360 C160 392 164 420 166 446" ' + RV + '/>' +
             '<path d="M720 290 C680 292 630 296 590 306 C548 318 500 346 450 358 C360 374 300 392 262 446" ' + RV + '/>' +
             '<path d="M420 206 C424 250 434 300 448 356" ' + RV + '/>' +
             '<path d="M366 146 C362 118 356 92 352 60" ' + RV + '/>' +
             '<path d="M246 186 C236 150 224 100 218 60" ' + RV + '/>';
        var RL = F + ' font-size="10" font-style="italic" fill="#5E7780"';
        s += '<text x="282" y="322" ' + RL + '>' + t({ en:"Nagara", ja:"長良川", zh:"長良川" }) + '</text>' +
             '<text x="162" y="304" ' + RL + '>' + t({ en:"Ibi", ja:"揖斐川", zh:"揖斐川" }) + '</text>' +
             '<text x="600" y="294" ' + RL + '>' + t({ en:"Kiso", ja:"木曽川", zh:"木曾川" }) + '</text>' +
             '<text x="432" y="236" ' + RL + '>' + t({ en:"Hida River", ja:"飛騨川", zh:"飛驒川" }) + '</text>' +
             '<text x="370" y="96" ' + RL + '>' + t({ en:"Miya", ja:"宮川", zh:"宮川" }) + '</text>' +
             '<text x="228" y="112" ' + RL + '>' + t({ en:"Shō", ja:"庄川", zh:"庄川" }) + '</text>';
        /* peaks */
        var peaks = [
          [148, 132, { en:"Hakusan 2,702", ja:"白山 2,702", zh:"白山 2,702" }],
          [604, 104, { en:"Hotaka 3,190", ja:"奥穂高岳 3,190", zh:"奧穗高岳 3,190" }],
          [536, 156, { en:"Norikura 3,026", ja:"乗鞍岳 3,026", zh:"乘鞍岳 3,026" }],
          [506, 214, { en:"Ontake 3,067", ja:"御嶽山 3,067", zh:"御嶽山 3,067" }]
        ];
        peaks.forEach(function (p) {
          s += '<path d="M' + p[0] + ' ' + p[1] + ' l7 -12 l7 12 z" fill="none" stroke="#7C6B52" stroke-width="1.1"/>' +
               '<text x="' + (p[0] + 18) + '" y="' + p[1] + '" ' + F + ' font-size="9.5" fill="#55504A">' + t(p[2]) + '</text>';
        });
        /* towns */
        var towns = [
          [246, 176, { en:"Shirakawa-gō", ja:"白川郷", zh:"白川鄉" }, 1],
          [350, 126, { en:"Hida-Furukawa", ja:"飛騨古川", zh:"飛驒古川" }, -1],
          [366, 150, { en:"Takayama", ja:"高山", zh:"高山" }, 1],
          [420, 208, { en:"Gero", ja:"下呂", zh:"下呂" }, -1],
          [96, 344, { en:"Sekigahara", ja:"関ケ原", zh:"關原" }, 1],
          [140, 372, { en:"Ōgaki", ja:"大垣", zh:"大垣" }, 1],
          [258, 336, { en:"Gifu", ja:"岐阜", zh:"岐阜" }, -1],
          [300, 358, { en:"Kakamigahara", ja:"各務原", zh:"各務原" }, 1],
          [470, 272, { en:"Gujō-Hachiman", ja:"郡上八幡", zh:"郡上八幡" }, 1],
          [410, 292, { en:"Mino", ja:"美濃", zh:"美濃" }, 1],
          [350, 314, { en:"Seki", ja:"関", zh:"關" }, 1],
          [448, 356, { en:"Minokamo", ja:"美濃加茂", zh:"美濃加茂" }, 1],
          [470, 388, { en:"Kani", ja:"可児", zh:"可兒" }, 1],
          [556, 396, { en:"Tajimi", ja:"多治見", zh:"多治見" }, 1],
          [600, 380, { en:"Toki", ja:"土岐", zh:"土岐" }, 1],
          [622, 358, { en:"Mizunami", ja:"瑞浪", zh:"瑞浪" }, -1],
          [644, 334, { en:"Ena", ja:"恵那", zh:"惠那" }, -1],
          [688, 312, { en:"Nakatsugawa", ja:"中津川", zh:"中津川" }, -1]
        ];
        towns.forEach(function (w) {
          var right = w[3] > 0;
          s += '<rect x="' + (w[0] - 2.5) + '" y="' + (w[1] - 2.5) + '" width="5" height="5" fill="#201E1B"/>' +
               '<text x="' + (w[0] + (right ? 7 : -7)) + '" y="' + (w[1] + 4) + '" text-anchor="' + (right ? "start" : "end") + '" ' + F + ' font-size="10.5" fill="#201E1B">' + t(w[2]) + '</text>';
        });
        s += '<text x="500" y="432" text-anchor="middle" ' + F + ' font-size="10" fill="#8B857C">' +
            t({ en:"↓ south to Ise Bay and the Pacific, through Aichi and Mie", ja:"↓ 南へ、愛知・三重を経て伊勢湾へ", zh:"↓ 向南，經愛知、三重流入伊勢灣" }) + '</text>' +
          '<text x="60" y="456" ' + F + ' font-size="9.5" fill="#8B857C">' +
            t({ en:"■ town   ▲ peak (m)   — river", ja:"■ 町　▲ 山（m）　— 川", zh:"■ 城鎮　▲ 山峰（m）　— 河川" }) + '</text>' +
          '</svg>';
        return s;
      }
    },

    { t:"section", id:"figures",
      title:{ en:"Gifu in figures", ja:"数字で見る岐阜", zh:"數字中的岐阜" }, jp:"概数",
      body:[
        { t:"grid", cols:4, cells:[
          { k:{en:"Area",ja:"面積",zh:"面積"}, v:"10,621 km²",
            d:{en:"Seventh largest of the forty-seven prefectures, 2.8% of Japan's land (Gifu Prefecture, 2025).",ja:"四十七都道府県で七番目の広さ。国土の2.8%（岐阜県、2025年）。",zh:"在四十七個都道府縣中面積排名第七，占日本國土的 2.8%（岐阜縣，2025 年）。"} },
          { k:{en:"Forest",ja:"森林率",zh:"森林覆蓋率"}, v:"81 %",
            d:{en:"861,169 ha of forest at 31 March 2022 — the second-highest share in Japan, after Kōchi (Forestry Agency).",ja:"森林面積86万1,169ヘクタール（2022年3月31日現在）。森林率は高知県に次ぐ全国二位（林野庁）。",zh:"森林面積 861,169 公頃（2022 年 3 月 31 日），覆蓋率僅次於高知縣，居全國第二（林野廳）。"} },
          { k:{en:"Elevation",ja:"標高差",zh:"海拔落差"}, v:"0–3,190 m",
            d:{en:"From below sea level in the ring-levee country of Kaizu to the summit of Oku-Hotakadake on the Nagano border.",ja:"海津の輪中地帯の海抜ゼロメートル以下から、長野県境の奥穂高岳山頂まで。",zh:"從海津輪中地帶的海平面以下，到長野縣界上的奧穗高岳山頂。"} },
          { k:{en:"People",ja:"人口",zh:"人口"}, v:"≈1.95 m",
            d:{en:"About 1.95 million in 2025, 184 to the km². More than nine in ten live in Mino; Hida holds two-fifths of the land.",ja:"2025年に約195万人、1平方キロあたり184人。九割以上が美濃に住み、飛騨は県土の五分の二を占める。",zh:"2025 年約 195 萬人，每平方公里 184 人。九成以上住在美濃；飛驒則占全縣土地的五分之二。"} },
          { k:{en:"Municipalities",ja:"市町村",zh:"市町村"}, v:"42",
            d:{en:"21 cities, 19 towns and 2 villages, grouped into five planning regions.",ja:"21市19町2村。五つの圏域に分けられる。",zh:"21 市、19 町、2 村，分屬五個圈域。"} },
          { k:{en:"Hydro potential",ja:"包蔵水力",zh:"水力蘊藏量"}, v:"No. 1",
            d:{en:"13,861 GWh a year of exploitable hydroelectric energy, the largest of any prefecture (Agency for Natural Resources and Energy).",ja:"年13,861ギガワット時。都道府県で最大（資源エネルギー庁）。",zh:"每年 13,861 GWh 的可開發水力能量，居各都道府縣之首（資源能源廳）。"} },
          { k:{en:"Ceramic tableware",ja:"陶磁器食器",zh:"陶瓷餐具"}, v:"71 %",
            d:{en:"Gifu's share of Japan's shipments of Western-style ceramic tableware — Mino ware. For Japanese-style tableware the share is 44.8% (Gifu Prefecture, 2025).",ja:"洋飲食器の全国出荷に占める岐阜県（美濃焼）の割合は71.1%、和飲食器は44.8%（岐阜県、2025年）。",zh:"日本西式陶瓷餐具出貨量中岐阜縣（美濃燒）占 71.1%，和式餐具占 44.8%（岐阜縣，2025 年）。"} },
          { k:{en:"Kitchen knives",ja:"家庭用刃物",zh:"家用刀具"}, v:"55 %",
            d:{en:"Seki's share of Japan's household knife shipments in 2020. The city shipped ¥45.6 billion of cutlery, more than any other municipality.",ja:"2020年の家庭用刃物（包丁・食卓用ナイフ等）出荷額に占める関市の割合。刃物出荷額456億円は全国の市町村で首位。",zh:"2020 年日本家用刀具（菜刀、餐刀等）出貨額中關市所占比例。該市刀具出貨額 456 億日圓，居全國市町村之冠。"} }
        ] },
        { t:"p", text:{
          en:"Two more numbers are worth carrying. The <strong>population centre of Japan</strong> — the point on which the country's people would balance — has fallen inside the city of Seki at every census since 2000; in 2020 it lay in the hills of Nakanoho. And the city of <strong>Takayama</strong>, at 2,178 km², is the largest municipality in Japan by area, almost the size of the whole of Tokyo Metropolis.",
          ja:"あと二つ、覚えておきたい数字がある。国民一人ひとりが同じ重さを持つとして日本の人口が釣り合う点——<strong>人口重心</strong>——は、2000年以降の国勢調査で毎回関市内に落ちており、2020年には中之保の山あいにあった。そして<strong>高山市</strong>は面積2,178平方キロで、市町村としては日本最大、東京都全体にほぼ匹敵する。",
          zh:"還有兩個數字值得記住。<strong>日本的人口重心</strong>——假設每個人重量相同時全國人口的平衡點——自 2000 年起每次國勢調查都落在關市境內，2020 年位於中之保的山間。而<strong>高山市</strong>面積 2,178 平方公里，是日本面積最大的市町村，幾乎與整個東京都相當。" } },
        { t:"note", label:{en:"On the numbers",ja:"数字について",zh:"關於數字"}, text:{
          en:"Every figure in this book carries its year and its source. Statistics move — population falls every year, shipment values follow the economy — so where a number matters the date matters with it. The sources are listed on the <a href=\"sources.html\">Sources</a> page, government and primary sources first.",
          ja:"本書の数値には、すべて年と出典を付した。統計は動く——人口は毎年減り、出荷額は景気に従う——ゆえに、数字が意味を持つところでは日付も同じだけ意味を持つ。出典は<a href=\"sources.html\">出典</a>の頁に、公的・一次資料を先にして掲げる。",
          zh:"本書的每一個數字都附有年份與出處。統計會變動——人口逐年減少，出貨額隨景氣起伏——因此凡數字重要之處，日期同樣重要。出處列於<a href=\"sources.html\">資料來源</a>頁，官方與一手資料列在前面。" } }
      ]
    },

    { t:"section", id:"two",
      title:{ en:"Two provinces, one prefecture", ja:"二つの国、一つの県", zh:"兩個國，一個縣" }, jp:"美濃と飛騨",
      body:[
        { t:"p", text:{
          en:"Gifu Prefecture took its present shape in 1876, when the former province of Hida was joined to the prefecture that had been formed from Mino. The two had almost nothing in common except a border. Mino was a province of rice, rivers and roads, crossed by the Nakasendō and fought over by every power that wanted to hold central Japan. Hida was a mountain province so short of paddy land that, under the eighth-century legal codes, it paid its taxes in carpenters.",
          ja:"岐阜県が今の形になったのは1876年（明治9年）、美濃から成った県に旧飛騨国が合わさったときである。両者には、境を接していること以外ほとんど共通点がなかった。美濃は米と川と道の国で、中山道が貫き、日本の中央を握ろうとする勢力が代々争った土地である。飛騨は水田に乏しい山国で、八世紀の律令のもとでは、税を大工で納めた。",
          zh:"岐阜縣於 1876 年（明治 9 年）成為今日的樣貌：舊飛驒國併入由美濃組成的縣。兩者除了邊界相接，幾乎沒有共同點。美濃是米、河川與道路之國，中山道貫穿其間，凡欲掌握日本中央的勢力無不爭奪此地。飛驒則是水田稀少的山國，在八世紀的律令之下，是以木匠來繳稅的。" } },
        { t:"compare", cols:2, items:[
          { title:{en:"Mino",ja:"美濃",zh:"美濃"}, jp:"みの · 濃州",
            text:{
              en:"The southern three-fifths of the prefecture and nine-tenths of its people. The Nōbi Plain and the lower reaches of the Kiso, Nagara and Ibi; castle towns, river ports and the sixteen Mino post towns of the Nakasendō. Its crafts are the crafts of a trading country: paper at Mino, pottery at Tajimi and Toki, blades at Seki, umbrellas and lanterns in Gifu city. In the Edo period it was divided among many small domains and a patchwork of shogunal and bannermen's lands.",
              ja:"県の南側五分の三を占め、県民の九割が住む。濃尾平野と木曽・長良・揖斐の下流域、城下町と川湊、そして中山道の美濃十六宿。その工芸は交易の国のものである——美濃の紙、多治見・土岐の焼き物、関の刃物、岐阜の和傘と提灯。江戸時代には多くの小藩と、幕府領・旗本領が入り組む土地であった。",
              zh:"占全縣南側五分之三、居住著九成縣民。濃尾平原與木曾、長良、揖斐三川的下游，城下町、河港，以及中山道上的美濃十六宿。其工藝是交易之國的工藝：美濃的紙、多治見與土岐的陶器、關的刀刃、岐阜市的和傘與燈籠。江戶時代，這裡分屬眾多小藩，加上幕府領與旗本領交錯其間。" } },
          { title:{en:"Hida",ja:"飛騨",zh:"飛驒"}, jp:"ひだ · 飛州",
            text:{
              en:"The northern two-fifths of the land and well under a tenth of the people. A high basin ringed by peaks over 3,000 metres, whose rivers — the Miya, the Takahara, the Shō — flow north to the Sea of Japan. Timber, mines and carpentry rather than rice. From 1692 the shogunate ruled it directly from the Takayama Jinya, and its merchant town, its festival floats and its furniture industry all descend from that long, quiet wealth.",
              ja:"県土の北側五分の二を占めるが、人口は一割にはるかに満たない。三千メートル級の山々に囲まれた高い盆地で、宮川・高原川・庄川はいずれも北へ流れて日本海に注ぐ。米ではなく、木と鉱山と大工の国である。1692年（元禄5年）からは幕府が高山陣屋を通じて直轄し、商人の町並みも祭りの屋台も家具産業も、その長く静かな富から生まれた。",
              zh:"占全縣土地北側五分之二，人口卻遠不及一成。被三千公尺級群山環繞的高地盆地，宮川、高原川、庄川皆北流注入日本海。這裡不以稻米、而以木材、礦山與木匠為生。自 1692 年（元祿 5 年）起由幕府透過高山陣屋直轄，商人町並、祭典屋台與家具產業，皆源自那段悠長而安靜的富庶。" } }
        ] },
        { t:"p", text:{
          en:"The pairing survives in a four-character phrase the prefecture still uses: <strong>飛山濃水</strong>, <em>hisan nōsui</em> — the mountains of Hida, the waters of Mino. Most of what follows in this book can be read as a consequence of one or the other.",
          ja:"この対は、県がいまも用いる四字の言葉に残っている——<strong>飛山濃水</strong>、飛騨の山と美濃の水。本書で以下に述べることの大半は、そのどちらかの帰結として読むことができる。",
          zh:"這組對照保留在縣府至今仍在使用的四字詞裡：<strong>飛山濃水</strong>——飛驒之山，美濃之水。本書以下所述，大半都可以讀作其中之一的結果。" } }
      ]
    },

    { t:"section", id:"covers",
      title:{ en:"What this book covers", ja:"本書が扱うこと", zh:"本書涵蓋的內容" }, jp:"構成",
      body:[
        { t:"table",
          cols:[{en:"Part",ja:"部",zh:"部分"},{en:"What it covers",ja:"内容",zh:"內容"}],
          rows:[
            [{en:"Foundations",ja:"基礎",zh:"基礎"},{en:"The shape of the prefecture, where to start, the idea of “spirit” in six words, the name Gifu, and the two provinces it was made from.",ja:"県の輪郭、読み始め方、六つの言葉で読む「魂」、岐阜という名、そして県を成す二つの国。",zh:"縣的輪廓、從何讀起、以六個字理解的「魂」、岐阜之名，以及組成本縣的兩個國。"}],
            [{en:"Land & Water",ja:"風土",zh:"風土"},{en:"Mountains and rock, the Kiso Three Rivers and the springs, the forests that cover four-fifths of the land, the sacred peaks, hot springs, wildlife and climate.",ja:"山と岩、木曽三川と湧水、県土の五分の四を覆う森、霊峰、温泉、生きもの、気候。",zh:"山與岩、木曾三川與湧泉、覆蓋五分之四土地的森林、靈峰、溫泉、生物與氣候。"}],
            [{en:"History",ja:"歴史",zh:"歷史"},{en:"From the ancient provinces through the Toki and Saitō, Nobunaga's Gifu, Sekigahara, the Edo patchwork and the long struggle with the rivers, to the present.",ja:"古代の国々から、土岐氏と斎藤氏、信長の岐阜、関ヶ原、江戸の入り組んだ支配と川との長い闘いを経て、現代まで。",zh:"從古代諸國，經土岐氏與齋藤氏、信長的岐阜、關原之戰、江戶時代的交錯統治與治水長戰，直到今日。"}],
            [{en:"Culture",ja:"文化",zh:"文化"},{en:"Festivals and floats, cormorant fishing, faith, Shirakawa-gō, old towns and roads, food, and the village kabuki stages.",ja:"祭りと屋台、鵜飼、信仰、白川郷、町並みと街道、食、そして地歌舞伎の芝居小屋。",zh:"祭典與屋台、鵜飼、信仰、白川鄉、老街與古道、飲食，以及地歌舞伎的戲棚。"}],
            [{en:"Wood",ja:"木",zh:"木"},{en:"Hinoki and the sacred forests, logging and rafting, the Hida carpenters and their joinery, furniture, carving and lacquer, Enkū, wooden architecture and hand-made guitars.",ja:"檜と神宮の森、林業と川下げ、飛騨の匠と継手仕口、家具、彫りと塗り、円空、木の建築、そして手工ギター。",zh:"檜木與神宮之森、伐木與放流、飛驒工匠與其榫卯、家具、雕刻與漆藝、圓空、木造建築，以及手工吉他。"}],
            [{en:"Metal & Blades",ja:"金と刃",zh:"金屬與刀刃"},{en:"The metal god of Nangū, the mines of Kamioka, and seven centuries of blades at Seki: the Mino sword, how one is made and mounted, and the modern cutlery industry.",ja:"南宮の金山の神、神岡の鉱山、そして関の七百年の刃物——美濃伝の刀、その作刀と拵、現代の刃物産業。",zh:"南宮的金屬之神、神岡的礦山，以及關市七百年的刀刃：美濃傳之刀、其鍛造與刀裝，以及現代刀具產業。"}],
            [{en:"Paper, Clay & Cloth",ja:"紙・土・布",zh:"紙・土・布"},{en:"Mino washi, Mino ware, Gifu's lanterns, umbrellas and fans, dye and cloth, and the register of designated crafts.",ja:"美濃和紙、美濃焼、岐阜提灯・和傘・団扇、染めと織り、そして指定工芸品の一覧。",zh:"美濃和紙、美濃燒、岐阜的燈籠、和傘與團扇、染織，以及指定工藝品一覽。"}],
            [{en:"Sake",ja:"酒",zh:"酒"},{en:"The sake of Gifu: its rice, water and yeast, brewing in the mountains of Hida, the breweries by region, a directory, and doburoku, masu and cups.",ja:"岐阜の酒——米と水と酵母、飛騨の山の酒造り、地域別の蔵、名鑑、そしてどぶろく・枡・酒器。",zh:"岐阜的酒：米、水與酵母，飛驒山中的釀造，各地酒藏、名鑑，以及濁酒、枡與酒器。"}],
            [{en:"Journeys & Reference",ja:"旅と資料",zh:"旅程與資料"},{en:"The five regions, five journeys, museums and workshops, a directory of makers, industry, the next twenty years, chronology, tables, questions, glossary, diagrams and sources.",ja:"五つの圏域、五つの旅、博物館と工房、作り手名鑑、産業、これからの二十年、年表、早見表、問答、用語集、図版、出典。",zh:"五大圈域、五段旅程、博物館與工坊、製作者名鑑、產業、未來二十年、年表、速查表、問答、詞彙表、圖表與資料來源。"}]
          ] }
      ]
    },

    { t:"section", id:"read",
      title:{ en:"How to read this book", ja:"本書の読み方", zh:"如何閱讀本書" }, jp:"凡例",
      body:[
        { t:"ul", plain:true, items:[
          { en:"<strong>Three languages, written together.</strong> The English, Japanese and Chinese texts are written side by side rather than translated one from another. Switch at any time from the menu; nothing reloads, and your choice is remembered.",
            ja:"<strong>三つの言葉は並べて書いた。</strong>英語・日本語・中国語の本文は、一方から他方へ訳したのではなく、並行して書いている。メニューからいつでも切り替えられ、再読み込みはなく、選択は記憶される。",
            zh:"<strong>三種語言並行撰寫。</strong>英文、日文與中文並非由一種翻譯成另一種，而是並排寫成。可隨時從選單切換，頁面不會重新載入，選擇也會被記住。" },
          { en:"<strong>Names.</strong> Japanese names are given family name first. Long vowels are marked in English (Tōnō, Chūnō, Ōgaki) except in names with an established spelling (Gifu, Hida). Chinese text uses traditional forms, so 飛騨 is written 飛驒 and 関 is written 關.",
            ja:"<strong>人名と地名。</strong>日本人の名は姓・名の順とする。英文では長音を示す（Tōnō、Chūnō、Ōgaki）。ただし定着した綴り（Gifu、Hida）は除く。中国語文は繁体字を用い、飛騨や関などの地名も繁体字の字形で書く。",
            zh:"<strong>人名與地名。</strong>日本人名採姓在前、名在後。英文標示長音（Tōnō、Chūnō、Ōgaki），已有固定拼法者（Gifu、Hida）除外。中文採繁體字，故「飛騨」寫作「飛驒」，「関」寫作「關」。" },
          { en:"<strong>Numbers carry their year and their unit</strong>, or they are not used. Where sources disagree — several dates in Gifu's history are disputed — the disagreement is stated rather than resolved.",
            ja:"<strong>数値には年と単位を付す</strong>。付せないものは用いない。資料が食い違う場合——岐阜の歴史にはそうした日付がいくつもある——は、一方に決めずに食い違いをそのまま記す。",
            zh:"<strong>數字必附年份與單位</strong>，否則不用。資料之間有出入時——岐阜史上有好幾個這樣的年代——照實陳述分歧，而不強作裁斷。" },
          { en:"<strong>Every diagram is drawn, not photographed</strong>, and redrawn in the language you are reading. Diagrams that show proportions only roughly say so on their face.",
            ja:"<strong>図はすべて写真ではなく描いたもので</strong>、読んでいる言語で描き直される。比率を概略でしか示さない図は、そのことを図中に明記する。",
            zh:"<strong>所有圖表皆為繪製而非照片</strong>，並會以你正在閱讀的語言重新繪出。僅呈現大致比例的示意圖，會在圖上註明。" },
          { en:"<strong>Search</strong> from the box at the top, or press <kbd>/</kbd> anywhere. Every page, section, table row, glossary term and directory entry is indexed in all three languages.",
            ja:"<strong>検索</strong>は上部の欄から、またはどこでも <kbd>/</kbd> キーで。すべての頁・節・表の行・用語・名鑑の項目が、三言語で索引されている。",
            zh:"<strong>搜尋</strong>可使用頂端的欄位，或在任何地方按 <kbd>/</kbd>。所有頁面、章節、表格列、詞彙與名鑑條目，皆以三種語言建立索引。" }
        ] }
      ]
    },

    { t:"section", id:"whole",
      title:{ en:"The whole book", ja:"全体の構成", zh:"全書架構" }, jp:"目次",
      body:[
        { t:"sitemap", cols:3 }
      ]
    },

    { t:"related", items:[
      { href:"start.html", why:{ en:"Five ways into the book, depending on what brought you to Gifu.", ja:"岐阜へ来た理由に応じた、本書への五つの入口。", zh:"依你來到岐阜的理由，進入本書的五個入口。" } },
      { href:"spirit.html", why:{ en:"The book's title, unpacked into six words that recur on every page.", ja:"書名を、どの頁にも現れる六つの言葉にほどく。", zh:"把書名拆解成貫穿每一頁的六個字。" } },
      { href:"provinces.html", why:{ en:"Mino and Hida side by side: land, people, rule and craft.", ja:"美濃と飛騨を並べて——土地、人、支配、工芸。", zh:"美濃與飛驒並列：土地、人民、統治與工藝。" } },
      { href:"wood.html", why:{ en:"The heart of the book: what four-fifths forest does to a people.", ja:"本書の核心——県土の五分の四が森であることは、人に何をもたらすか。", zh:"本書的核心：五分之四土地是森林，會如何塑造一群人。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- start */
GIFU.pages["start"] = {
  kicker: { en: "Foundations · 02", ja: "基礎 · 02", zh: "基礎 · 02" },
  title:  { en: "Where to Start", ja: "始め方", zh: "從何開始" },
  jp: "五つの入口 · 六つの体験",
  lede: {
    en: "Nobody needs to read this book from front to back. People come to Gifu for different reasons — a knife, a bottle, a festival, a family name, a piece of furniture — and each reason is a good door. What follows are five routes through the book, each a handful of pages long, and six things to do with your own hands and eyes that will teach more about Gifu than any chapter here.",
    ja: "本書を初めから終わりまで読み通す必要はない。人が岐阜に来る理由はさまざまだ——一本の包丁、一本の酒、祭り、家の名、一脚の椅子。どの理由もよい入口になる。以下は、数頁ずつからなる本書の五つの道筋と、本書のどの章よりも多くを教えてくれる、自分の手と目で確かめる六つのことである。",
    zh: "這本書不必從頭讀到尾。人們來到岐阜的理由各不相同——一把刀、一瓶酒、一場祭典、一個姓氏、一張椅子——每一個理由都是好的入口。以下是穿越本書的五條路線，每條只有幾頁；以及六件用自己的手與眼去做的事，它們能教你的，比本書任何一章都多。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Five routes through the book. Each begins with the page that frames its subject and ends where the subject meets the present day. They cross at two points — the forests, which every craft here depends on, and the rivers, which carried everything to market — so a reader who follows any one route will meet the others on the way.",
        ja:"本書の五つの道筋。それぞれ主題の枠組みを示す頁から始まり、主題が現在と出会う頁で終わる。道筋は二か所で交わる——ここでのあらゆる工芸が頼る森と、すべてを市場へ運んだ川である。ゆえに、どの一本をたどっても、途中でほかの道筋と出会う。",
        zh:"穿越本書的五條路線。每條從勾勒主題輪廓的頁面開始，在主題與當代相遇之處結束。路線在兩處交會——此地所有工藝都仰賴的森林，以及把一切送往市場的河川——因此無論循哪一條走，途中都會遇見其他路線。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var rows = [
          { h:{en:"WOOD",ja:"木",zh:"木"}, fill:"#E7DFD2", p:[
            {en:"Forests",ja:"森林",zh:"森林"},{en:"Hinoki",ja:"檜",zh:"檜木"},{en:"Hida no Takumi",ja:"飛騨の匠",zh:"飛驒工匠"},{en:"Furniture",ja:"家具",zh:"家具"},{en:"Guitars",ja:"ギター",zh:"吉他"}] },
          { h:{en:"BLADES",ja:"刃",zh:"刀刃"}, fill:"#E9ECEE", p:[
            {en:"Metal",ja:"金属",zh:"金屬"},{en:"Seki",ja:"関",zh:"關"},{en:"Mino sword",ja:"美濃伝",zh:"美濃傳"},{en:"Forging",ja:"作刀",zh:"鍛刀"},{en:"Cutlery",ja:"刃物産業",zh:"刀具產業"}] },
          { h:{en:"SAKE",ja:"酒",zh:"酒"}, fill:"#E6E2EC", p:[
            {en:"Rivers",ja:"川と水",zh:"河川"},{en:"Sake of Gifu",ja:"岐阜の酒",zh:"岐阜的酒"},{en:"Rice & yeast",ja:"米と酵母",zh:"米與酵母"},{en:"Hida brewing",ja:"飛騨の酒造り",zh:"飛驒釀造"},{en:"Directory",ja:"名鑑",zh:"名鑑"}] },
          { h:{en:"JOURNEY",ja:"旅",zh:"旅"}, fill:"#E0E6DB", p:[
            {en:"Five regions",ja:"五圏域",zh:"五圈域"},{en:"Old towns",ja:"町並み",zh:"老街"},{en:"Festivals",ja:"祭り",zh:"祭典"},{en:"Ukai",ja:"鵜飼",zh:"鵜飼"},{en:"Journeys",ja:"旅",zh:"旅程"}] },
          { h:{en:"HISTORY",ja:"歴史",zh:"歷史"}, fill:"#EEE1DF", p:[
            {en:"Two provinces",ja:"二つの国",zh:"兩國"},{en:"Nobunaga",ja:"信長",zh:"信長"},{en:"Sekigahara",ja:"関ヶ原",zh:"關原"},{en:"River works",ja:"治水",zh:"治水"},{en:"Meiji to now",ja:"近現代",zh:"近現代"}] }
        ];
        var s = '<svg viewBox="0 0 760 330" role="img" aria-label="Five routes through the book">' +
          '<rect x="0.5" y="0.5" width="759" height="329" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="30" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FIVE ROUTES", ja:"五つの道筋", zh:"五條路線" }) + '</text>';
        var x0 = 130, bw = 108, gap = 16, y0 = 50, rh = 52;
        rows.forEach(function (r, i) {
          var y = y0 + i * rh;
          s += '<text x="30" y="' + (y + 26) + '" ' + F + ' font-size="11" fill="#55504A" letter-spacing="1.6" font-weight="600">' + L(r.h) + '</text>';
          r.p.forEach(function (p, j) {
            var x = x0 + j * (bw + gap);
            s += '<rect x="' + x + '" y="' + (y + 6) + '" width="' + bw + '" height="30" fill="' + r.fill + '" stroke="#B4AC9C"/>' +
                 '<text x="' + (x + bw / 2) + '" y="' + (y + 25) + '" text-anchor="middle" ' + F + ' font-size="10.5" fill="#201E1B">' + L(p) + '</text>';
            if (j < r.p.length - 1) {
              s += '<path d="M' + (x + bw) + ' ' + (y + 21) + ' H' + (x + bw + gap - 3) + '" stroke="#7C6B52" stroke-width="1"/>' +
                   '<path d="M' + (x + bw + gap - 3) + ' ' + (y + 21) + ' l-5 -3 v6 z" fill="#7C6B52"/>';
            }
          });
        });
        s += '<text x="30" y="318" ' + F + ' font-size="10" fill="#8B857C">' +
          L({ en:"Each box is a page; follow any row left to right.", ja:"箱は一つの頁。どの行も左から右へ読む。", zh:"每個方框是一頁；任何一行都由左往右讀。" }) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"routes",
      title:{ en:"Five ways in", ja:"五つの入口", zh:"五個入口" }, jp:"道筋",
      body:[
        { t:"steps", items:[
          { title:{en:"If you came for wood",ja:"木に惹かれて来たなら",zh:"若你為木而來"}, jp:"木",
            text:{ en:"Start with <a href=\"forests.html\">The Forests</a> for the scale of it — four-fifths of the land — then <a href=\"hinoki.html\">Hinoki</a> for the tree that built Ise's shrines, <a href=\"takumi.html\">Hida no Takumi</a> for the carpenters who paid their taxes in labour, <a href=\"furniture.html\">Hida Furniture</a> for what their descendants make now, and <a href=\"guitars.html\">Hand-made Guitars</a> for the most unexpected thing Gifu's wood has become.",
                   ja:"まず<a href=\"forests.html\">森林</a>で規模をつかむ——県土の五分の四である。次に伊勢の社を建てた木としての<a href=\"hinoki.html\">檜</a>、労役で税を納めた大工たちの<a href=\"takumi.html\">飛騨の匠</a>、その子孫がいま作る<a href=\"furniture.html\">飛騨の家具</a>、そして岐阜の木がたどり着いた最も意外な姿としての<a href=\"guitars.html\">手工ギター</a>。",
                   zh:"先讀<a href=\"forests.html\">森林</a>掌握規模——五分之四的土地；再讀建造伊勢神宮之木的<a href=\"hinoki.html\">檜木</a>、以勞役繳稅的木匠<a href=\"takumi.html\">飛驒工匠</a>、其後代今日所做的<a href=\"furniture.html\">飛驒家具</a>，最後是岐阜之木最出人意表的去處：<a href=\"guitars.html\">手工吉他</a>。" } },
          { title:{en:"If you came for a blade",ja:"刃物に惹かれて来たなら",zh:"若你為刀刃而來"}, jp:"刃",
            text:{ en:"Begin with <a href=\"metal.html\">Metal in Gifu</a> and the mountain shrine of the metal god, then <a href=\"seki.html\">Seki</a>, <a href=\"sword.html\">The Mino Sword</a> and <a href=\"forging.html\">Making a Sword</a>. <a href=\"cutlery.html\">The Cutlery Industry</a> explains how a town of swordsmiths became the source of half of Japan's kitchen knives.",
                   ja:"<a href=\"metal.html\">岐阜の金属</a>と金属の神を祀る山の社から始め、<a href=\"seki.html\">刃物のまち・関</a>、<a href=\"sword.html\">美濃伝の刀</a>、<a href=\"forging.html\">作刀</a>へ。<a href=\"cutlery.html\">刃物産業</a>は、刀鍛冶の町がいかにして日本の家庭用包丁の半分を生む町になったかを説明する。",
                   zh:"從<a href=\"metal.html\">岐阜的金屬</a>與供奉金屬之神的山中神社開始，接著讀<a href=\"seki.html\">刀刃之城・關</a>、<a href=\"sword.html\">美濃傳之刀</a>與<a href=\"forging.html\">鍛刀</a>。<a href=\"cutlery.html\">刀具產業</a>則說明一座刀匠之城如何變成日本半數家用菜刀的產地。" } },
          { title:{en:"If you came for sake",ja:"酒に惹かれて来たなら",zh:"若你為酒而來"}, jp:"酒",
            text:{ en:"Read <a href=\"rivers.html\">Rivers &amp; Water</a> first: Gifu's sake is a function of its water. Then <a href=\"sake.html\">The Sake of Gifu</a>, <a href=\"sakeland.html\">Rice, Water &amp; Yeast</a>, <a href=\"hidasake.html\">Brewing in Hida</a> and the <a href=\"directory.html\">Directory</a>, which lists the houses and their standing bottles.",
                   ja:"まず<a href=\"rivers.html\">川と水</a>を読む。岐阜の酒は水の関数である。つづいて<a href=\"sake.html\">岐阜の酒</a>、<a href=\"sakeland.html\">米と水と酵母</a>、<a href=\"hidasake.html\">飛騨の酒造り</a>、そして蔵とその定番の酒を並べた<a href=\"directory.html\">名鑑</a>へ。",
                   zh:"先讀<a href=\"rivers.html\">河川與水</a>：岐阜的酒是其水的函數。接著是<a href=\"sake.html\">岐阜的酒</a>、<a href=\"sakeland.html\">米、水與酵母</a>、<a href=\"hidasake.html\">飛驒的釀酒</a>，以及列出各酒藏與其常備酒款的<a href=\"directory.html\">名鑑</a>。" } },
          { title:{en:"If you came to travel",ja:"旅をしに来たなら",zh:"若你為旅行而來"}, jp:"旅",
            text:{ en:"<a href=\"regions.html\">Five Regions</a> gives the shape of the prefecture town by town. <a href=\"towns.html\">Old Towns</a>, <a href=\"festivals.html\">Festivals &amp; Floats</a> and <a href=\"ukai.html\">Cormorant Fishing</a> tell you what to see and when; <a href=\"journeys.html\">Five Journeys</a> strings them into routes.",
                   ja:"<a href=\"regions.html\">五つの圏域</a>で県の形を町ごとにつかむ。<a href=\"towns.html\">町並み</a>、<a href=\"festivals.html\">祭りと屋台</a>、<a href=\"ukai.html\">鵜飼</a>は、何をいつ見るかを教える。<a href=\"journeys.html\">五つの旅</a>はそれらを道筋につなぐ。",
                   zh:"<a href=\"regions.html\">五大圈域</a>逐鎮勾勒縣的樣貌。<a href=\"towns.html\">老街町並</a>、<a href=\"festivals.html\">祭典與屋台</a>與<a href=\"ukai.html\">鵜飼</a>告訴你看什麼、何時看；<a href=\"journeys.html\">五段旅程</a>則把它們串成路線。" } },
          { title:{en:"If you came for history",ja:"歴史に惹かれて来たなら",zh:"若你為歷史而來"}, jp:"史",
            text:{ en:"<a href=\"provinces.html\">Mino and Hida</a> explains why the prefecture has two personalities. <a href=\"nobunaga.html\">Nobunaga's Gifu</a> and <a href=\"sekigahara.html\">Sekigahara</a> are the two moments when all of Japan turned on this ground; <a href=\"chisui.html\">Taming the Three Rivers</a> is the longer, quieter story that shaped more lives than either.",
                   ja:"<a href=\"provinces.html\">美濃と飛騨</a>は、県が二つの顔を持つ理由を説く。<a href=\"nobunaga.html\">信長の岐阜</a>と<a href=\"sekigahara.html\">関ヶ原</a>は、日本全体がこの地で向きを変えた二つの瞬間である。<a href=\"chisui.html\">木曽三川の治水</a>は、そのどちらよりも多くの暮らしを形づくった、長く静かな物語である。",
                   zh:"<a href=\"provinces.html\">美濃與飛驒</a>說明本縣為何有兩種性格。<a href=\"nobunaga.html\">信長的岐阜</a>與<a href=\"sekigahara.html\">關原</a>，是全日本在這片土地上轉向的兩個時刻；<a href=\"chisui.html\">木曾三川的治水</a>則是一段更長、更安靜的故事，它形塑的生命比前兩者都多。" } }
        ] }
      ]
    },

    { t:"section", id:"six",
      title:{ en:"Six things to do with your own hands", ja:"自分の手で確かめる六つのこと", zh:"用自己的手去做的六件事" }, jp:"体験",
      body:[
        { t:"p", text:{
          en:"None of these needs special access, and each one connects a page of this book to something you can smell, hold or taste. They are listed roughly from spring to winter.",
          ja:"どれも特別な伝手を要さず、いずれも本書の一頁を、嗅ぎ、手に取り、味わえる何かに結びつける。おおむね春から冬の順に並べた。",
          zh:"這些都不需要特殊門路，每一件都把本書的某一頁，連結到你能聞、能握、能嚐的東西。大致依春到冬的順序排列。" } },
        { t:"ol", items:[
          { en:"<strong>Wash your hands at Sōgi-sui</strong> in Gujō-Hachiman, the first spring on the national list of a hundred famous waters. Then walk the town's channels and notice how much of daily life is arranged around running water. — <a href=\"rivers.html\">Rivers &amp; Water</a>",
            ja:"<strong>郡上八幡の宗祇水で手を洗う。</strong>名水百選の第一号に選ばれた湧水である。そのあと町の水路を歩き、日々の暮らしがどれほど流れる水を中心に組み立てられているかを見る。——<a href=\"rivers.html\">川と水</a>",
            zh:"<strong>在郡上八幡的宗祇水洗手。</strong>這是「名水百選」選出的第一號湧泉。然後沿著鎮上的水道散步，留意日常生活有多少是圍繞著流水安排的。——<a href=\"rivers.html\">河川與水</a>" },
          { en:"<strong>Watch a cormorant boat at night</strong> on the Nagara in Gifu city, between 11 May and 15 October. Six fishermen here, and three more at Oze in Seki, hold the title of cormorant master of the Imperial Household Agency. — <a href=\"ukai.html\">Cormorant Fishing</a>",
            ja:"<strong>夜の長良川で鵜舟を見る。</strong>岐阜市で5月11日から10月15日まで。ここの鵜匠六人と、関市小瀬の三人が、宮内庁式部職鵜匠の職名を持つ。——<a href=\"ukai.html\">鵜飼</a>",
            zh:"<strong>在夜晚的長良川看鵜舟。</strong>岐阜市每年 5 月 11 日至 10 月 15 日舉行。這裡的六位鵜匠，加上關市小瀨的三位，擁有「宮內廳式部職鵜匠」的職銜。——<a href=\"ukai.html\">鵜飼</a>" },
          { en:"<strong>Put your nose to a hinoki board</strong> — in a lumber yard in Tōnō, a bath in Gero, or a new masu cup from Ōgaki. The smell is the reason hinoki has been the timber of shrines for thirteen centuries. — <a href=\"hinoki.html\">Hinoki</a>",
            ja:"<strong>檜の板に鼻を寄せる。</strong>東濃の製材所でも、下呂の風呂でも、大垣の新しい枡でもよい。千三百年にわたり檜が社の木であり続けた理由は、その香りにある。——<a href=\"hinoki.html\">檜</a>",
            zh:"<strong>把鼻子湊近一塊檜木板。</strong>在東濃的製材所、下呂的浴池，或大垣的新木枡都可以。檜木一千三百年來一直是神社之木，原因就在那香氣裡。——<a href=\"hinoki.html\">檜木</a>" },
          { en:"<strong>Hold a Seki knife and look at the edge</strong> under light. Then visit the swordsmiths' hall in Seki on a demonstration day, when a traditional forging is shown in public, and see where that edge came from. — <a href=\"seki.html\">Seki</a>",
            ja:"<strong>関の包丁を手に取り、光にかざして刃先を見る。</strong>そして関の鍛冶伝承館で古式日本刀鍛錬が公開される日に訪れ、その刃がどこから来たのかを見る。——<a href=\"seki.html\">刃物のまち・関</a>",
            zh:"<strong>拿起一把關市的菜刀，對著光看刀刃。</strong>再挑一個關鍛冶傳承館公開古式日本刀鍛鍊的日子造訪，看看那道刃口從何而來。——<a href=\"seki.html\">刀刃之城・關</a>" },
          { en:"<strong>Sit in a Hida chair</strong> — in a showroom in Takayama, or anywhere one is in use — and turn it over. The joinery underneath is the direct descendant of the carpentry that built Nara. — <a href=\"furniture.html\">Hida Furniture</a>",
            ja:"<strong>飛騨の椅子に座り、裏返してみる。</strong>高山のショールームでも、使われているどこででもよい。裏側の組み手は、奈良の都を建てた大工仕事の直系の子孫である。——<a href=\"furniture.html\">飛騨の家具</a>",
            zh:"<strong>坐上一張飛驒椅子，再把它翻過來看。</strong>在高山的展示間，或任何正在使用它的地方皆可。底下的接合工法，是建造奈良都城的木工直系後裔。——<a href=\"furniture.html\">飛驒家具</a>" },
          { en:"<strong>Drink new sake in Takayama in winter</strong>, when the cedar balls hang green over the brewery doors to say that this season's sake is pressed. The cold outside is the same cold that made it. — <a href=\"hidasake.html\">Brewing in Hida</a>",
            ja:"<strong>冬の高山で新酒を飲む。</strong>蔵の軒先に青い杉玉が吊るされ、今季の酒が搾られたことを告げる季節である。外の寒さは、その酒を造った寒さと同じものだ。——<a href=\"hidasake.html\">飛騨の酒造り</a>",
            zh:"<strong>冬天在高山喝新酒。</strong>那時酒藏門簷掛上青綠的杉玉，告訴人們本季的酒已經榨好。外頭的寒冷，正是造出這酒的那股寒冷。——<a href=\"hidasake.html\">飛驒的釀酒</a>" }
        ] },
        { t:"note", label:{en:"Seasons and dates",ja:"季節と日付",zh:"季節與日期"}, text:{
          en:"Dates and demonstration days change from year to year and are set by the organisers; the pages linked above give the pattern, and the organisers' own announcements give the current year.",
          ja:"日程や公開日は年ごとに変わり、主催者が定める。上の各頁は例年の型を示すもので、その年の日取りは主催者の告知で確かめられたい。",
          zh:"日期與公開日每年不同，由主辦單位訂定。上面連結的各頁說明的是慣例，當年的日期請以主辦單位的公告為準。" } }
      ]
    },

    { t:"section", id:"oneday",
      title:{ en:"If you have one evening", ja:"一晩しかないなら", zh:"若你只有一個晚上" }, jp:"六頁",
      body:[
        { t:"p", text:{
          en:"Six pages, in this order, give the argument of the whole book in about two hours of reading.",
          ja:"次の六頁をこの順に読めば、およそ二時間で本書全体の論旨がつかめる。",
          zh:"依序讀以下六頁，約兩小時即可掌握全書的論旨。" } },
        { t:"table",
          cols:[{en:"Order",ja:"順",zh:"順序"},{en:"Page",ja:"頁",zh:"頁面"},{en:"Why this one",ja:"理由",zh:"理由"}],
          numCols:[0],
          rows:[
            ["1",{en:"<a href=\"spirit.html\">The Spirit in Six Words</a>",ja:"<a href=\"spirit.html\">六つの言葉で読む魂</a>",zh:"<a href=\"spirit.html\">六個字讀岐阜之魂</a>"},{en:"The book's frame: six verbs of making.",ja:"本書の枠組み——ものを作る六つの動詞。",zh:"本書的框架：六個「造物」的動詞。"}],
            ["2",{en:"<a href=\"provinces.html\">Mino and Hida</a>",ja:"<a href=\"provinces.html\">美濃と飛騨</a>",zh:"<a href=\"provinces.html\">美濃與飛驒</a>"},{en:"Why there are two Gifus.",ja:"岐阜が二つある理由。",zh:"為什麼有兩個岐阜。"}],
            ["3",{en:"<a href=\"forests.html\">The Forests</a>",ja:"<a href=\"forests.html\">森林</a>",zh:"<a href=\"forests.html\">森林</a>"},{en:"The resource beneath every craft.",ja:"あらゆる工芸の下にある資源。",zh:"一切工藝底下的資源。"}],
            ["4",{en:"<a href=\"takumi.html\">Hida no Takumi</a>",ja:"<a href=\"takumi.html\">飛騨の匠</a>",zh:"<a href=\"takumi.html\">飛驒工匠</a>"},{en:"Thirteen centuries of one reputation.",ja:"千三百年続く一つの評判。",zh:"延續一千三百年的名聲。"}],
            ["5",{en:"<a href=\"seki.html\">Seki, Town of Blades</a>",ja:"<a href=\"seki.html\">刃物のまち・関</a>",zh:"<a href=\"seki.html\">刀刃之城・關</a>"},{en:"How a craft survives the end of its market.",ja:"市場が消えたとき、工芸はいかに生き延びるか。",zh:"一門工藝如何在市場消失後存活。"}],
            ["6",{en:"<a href=\"future.html\">The Next Twenty Years</a>",ja:"<a href=\"future.html\">これからの二十年</a>",zh:"<a href=\"future.html\">未來二十年</a>"},{en:"What is at risk, and what is being done.",ja:"何が失われかけ、何がなされているか。",zh:"什麼正面臨危機，又有哪些行動。"}]
          ] }
      ]
    },

    { t:"related", items:[
      { href:"index.html", why:{ en:"The overview, the map and the figures.", ja:"概観、地図、数字。", zh:"總覽、地圖與數字。" } },
      { href:"spirit.html", why:{ en:"Six verbs that organise everything else.", ja:"ほかのすべてを整理する六つの動詞。", zh:"統整其餘一切的六個動詞。" } },
      { href:"journeys.html", why:{ en:"The same routes, on the ground.", ja:"同じ道筋を、現地で。", zh:"同樣的路線，實地走一遍。" } },
      { href:"glossary.html", why:{ en:"Every term used in the book, in three languages.", ja:"本書で使う用語を三言語で。", zh:"本書所用詞彙的三語對照。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- spirit */
GIFU.pages["spirit"] = {
  kicker: { en: "Foundations · 03", ja: "基礎 · 03", zh: "基礎 · 03" },
  title:  { en: "The Spirit in Six Words", ja: "六つの言葉で読む魂", zh: "六個字讀岐阜之魂" },
  jp: "伐る · 組む · 鍛える · 漉く · 焼く · 醸す",
  lede: {
    en: "“Spirit” is a word that invites vagueness. This page tries to pin it down. Most of what Gifu is known for — its carpenters, its blades, its paper, its pottery and its sake — can be described with six verbs of making, each one tied to something the land supplies. Read together, they describe a people whose character was formed less by what they believed than by what they did with timber, iron, fibre, clay, rice and cold.",
    ja: "「魂」は曖昧さを招く言葉である。この頁では、それを具体的に押さえてみたい。岐阜が知られるものの大半——大工、刃物、紙、焼き物、酒——は、ものを作る六つの動詞で言い表すことができ、そのどれもが土地の与える何かと結びついている。六つを並べて読むと、信じたことよりも、木と鉄と繊維と土と米と寒さを相手に何をしたかによって気質を形づくられた人々の姿が見えてくる。",
    zh: "「魂」是一個容易流於含糊的字。本頁試著把它說清楚。岐阜為人所知的大多數東西——木匠、刀刃、紙、陶器與酒——都可以用六個「造物」的動詞來描述，而每一個都與這片土地所供給的某樣東西相連。把它們放在一起讀，會看見一群人：塑造他們性格的，與其說是他們相信什麼，不如說是他們如何對待木材、鐵、纖維、黏土、稻米與寒冷。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"From land to thing. Each row runs from a resource the prefecture supplies, through the verb that transforms it, to what is made and where. Qualitative: the rows are not equal in size or age, and most towns practise more than one.",
        ja:"土地からものへ。各行は、県が与える資源から、それを変える動詞を経て、作られるものとその場所へと進む。定性的な図であり、各行の規模や歴史の長さは等しくない。多くの町は二つ以上を営む。",
        zh:"從土地到器物。每一行從本縣供給的資源出發，經過轉化它的動詞，到達所造之物及其產地。此為定性示意：各行的規模與歷史長短並不相等，許多城鎮也不只從事一項。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var rows = [
          [{en:"forest",ja:"森",zh:"森林"}, "伐る", {en:"to fell",ja:"きる",zh:"伐"}, {en:"timber",ja:"木材",zh:"木材"}, {en:"Tōnō · Hida",ja:"東濃・飛騨",zh:"東濃・飛驒"}, "#E0E6DB"],
          [{en:"timber",ja:"木材",zh:"木材"}, "組む", {en:"to join",ja:"くむ",zh:"組"}, {en:"houses · floats · chairs",ja:"家・屋台・椅子",zh:"房屋・屋台・椅子"}, {en:"Takayama · Hida",ja:"高山・飛騨",zh:"高山・飛驒"}, "#E7DFD2"],
          [{en:"iron · charcoal",ja:"鉄・炭",zh:"鐵・炭"}, "鍛える", {en:"to forge",ja:"きたえる",zh:"鍛"}, {en:"swords · knives",ja:"刀・包丁",zh:"刀・菜刀"}, {en:"Seki",ja:"関",zh:"關"}, "#E9ECEE"],
          [{en:"kōzo · water",ja:"楮・水",zh:"楮・水"}, "漉く", {en:"to lay paper",ja:"すく",zh:"漉"}, {en:"washi · lanterns",ja:"和紙・提灯",zh:"和紙・燈籠"}, {en:"Mino · Gifu",ja:"美濃・岐阜",zh:"美濃・岐阜"}, "#E0E7E9"],
          [{en:"clay · fire",ja:"土・火",zh:"土・火"}, "焼く", {en:"to fire",ja:"やく",zh:"燒"}, {en:"tableware · tiles",ja:"食器・タイル",zh:"餐具・磁磚"}, {en:"Tajimi · Toki",ja:"多治見・土岐",zh:"多治見・土岐"}, "#EEE1DF"],
          [{en:"rice · cold",ja:"米・寒さ",zh:"米・寒冷"}, "醸す", {en:"to brew",ja:"かもす",zh:"釀"}, {en:"sake",ja:"酒",zh:"酒"}, {en:"Hida · Mino",ja:"飛騨・美濃",zh:"飛驒・美濃"}, "#E6E2EC"]
        ];
        var s = '<svg viewBox="0 0 760 360" role="img" aria-label="Six verbs of making">' +
          '<rect x="0.5" y="0.5" width="759" height="359" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="30" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"FROM LAND TO THING", ja:"土地からものへ", zh:"從土地到器物" }) + '</text>';
        var hd = [[30, {en:"RESOURCE",ja:"資源",zh:"資源"}], [200, {en:"VERB",ja:"動詞",zh:"動詞"}], [390, {en:"WHAT IS MADE",ja:"作られるもの",zh:"所造之物"}], [600, {en:"WHERE",ja:"主な産地",zh:"主要產地"}]];
        hd.forEach(function (h) {
          s += '<text x="' + h[0] + '" y="58" ' + F + ' font-size="9.5" fill="#8B857C" letter-spacing="1.4">' + L(h[1]) + '</text>';
        });
        rows.forEach(function (r, i) {
          var y = 70 + i * 46;
          s += '<rect x="30" y="' + y + '" width="140" height="34" fill="#FBFAF7" stroke="#CDC6B9"/>' +
               '<text x="100" y="' + (y + 22) + '" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B">' + L(r[0]) + '</text>' +
               '<path d="M170 ' + (y + 17) + ' H196" stroke="#7C6B52" stroke-width="1.1"/><path d="M196 ' + (y + 17) + ' l-6 -3.5 v7 z" fill="#7C6B52"/>' +
               '<rect x="200" y="' + y + '" width="160" height="34" fill="' + r[5] + '" stroke="#B4AC9C"/>' +
               '<text x="216" y="' + (y + 24) + '" font-family="Georgia,serif" font-size="17" fill="#201E1B">' + r[1] + '</text>' +
               '<text x="344" y="' + (y + 22) + '" text-anchor="end" ' + F + ' font-size="10" fill="#55504A">' + L(r[2]) + '</text>' +
               '<path d="M360 ' + (y + 17) + ' H386" stroke="#7C6B52" stroke-width="1.1"/><path d="M386 ' + (y + 17) + ' l-6 -3.5 v7 z" fill="#7C6B52"/>' +
               '<rect x="390" y="' + y + '" width="190" height="34" fill="#FBFAF7" stroke="#CDC6B9"/>' +
               '<text x="485" y="' + (y + 22) + '" text-anchor="middle" ' + F + ' font-size="11" fill="#201E1B">' + L(r[3]) + '</text>' +
               '<text x="600" y="' + (y + 22) + '" ' + F + ' font-size="11" fill="#55504A">' + L(r[4]) + '</text>';
        });
        s += '<text x="30" y="350" ' + F + ' font-size="9.5" fill="#8B857C">' +
          L({ en:"QUALITATIVE — rows are not to scale", ja:"定性図——各行の規模は比例しない", zh:"定性示意——各行規模不按比例" }) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"six",
      title:{ en:"Six verbs", ja:"六つの動詞", zh:"六個動詞" }, jp:"六字",
      body:[
        { t:"grid", cols:3, cells:[
          { k:{en:"kiru · to fell",ja:"きる",zh:"伐"}, v:"伐る", h:{en:"The forest",ja:"森",zh:"森林"},
            d:{en:"Four-fifths of the prefecture is forest, and the hinoki of Ura-Kiso and Tōnō has been cut for shrines and castles since the Middle Ages. Felling is where every other craft begins: charcoal for the smith, fuel for the kiln, casks and vats for the brewer.",
               ja:"県土の五分の四は森であり、裏木曽と東濃の檜は中世以来、社や城のために伐られてきた。伐ることは、ほかのすべての工芸の始まりである——鍛冶の炭、窯の薪、酒屋の桶と樽。",
               zh:"全縣五分之四是森林，裏木曾與東濃的檜木自中世以來便為神社與城郭而伐。伐木是其他一切工藝的起點：鍛冶的木炭、窯的燃料、釀酒的木桶與酒槽。"} },
          { k:{en:"kumu · to join",ja:"くむ",zh:"組"}, v:"組む", h:{en:"The carpenter",ja:"大工",zh:"木匠"},
            d:{en:"Hida's carpenters were sent to build the capitals of the eighth century in place of taxes. What they carried was joinery — timber locked to timber without nails — and it runs unbroken from temple halls to Takayama's festival floats and the chairs made there today.",
               ja:"飛騨の大工は八世紀、税の代わりに都の造営へ送られた。彼らが携えたのは継手・仕口——釘を用いず木と木を組み合わせる技——であり、それは寺の堂から高山の祭屋台、今日そこで作られる椅子まで途切れずに続く。",
               zh:"八世紀時，飛驒的木匠以勞役代替租稅，被派去營建都城。他們帶去的是榫卯——不用釘子、讓木與木互相咬合的技術——從寺院殿堂到高山的祭典屋台，再到今日當地製作的椅子，一脈相承。"} },
          { k:{en:"kitaeru · to forge",ja:"きたえる",zh:"鍛"}, v:"鍛える", h:{en:"The smith",ja:"鍛冶",zh:"鍛冶"},
            d:{en:"Seki had pine charcoal, good river water and the right clay for the tempering coat, and roads to bring in steel; from the fourteenth century it had swordsmiths. The Mino tradition was prized for blades that would neither break nor bend; when the swords were banned, the smiths turned to knives.",
               ja:"関には松炭と良い川の水、焼刃土に使う粘土があり、鋼を運び込む道があった。十四世紀には刀鍛冶がいた。美濃伝は「折れず曲がらず」の刃で重んじられた。帯刀が禁じられると、鍛冶たちは包丁へ向かった。",
               zh:"關市有松炭、優質的河水與燒刃時塗抹的黏土，也有運入鋼材的道路；十四世紀起便有刀匠。美濃傳以「不折不彎」的刀身見重於世；禁刀令頒布後，匠人們轉而打造菜刀。"} },
          { k:{en:"suku · to lay paper",ja:"すく",zh:"漉"}, v:"漉く", h:{en:"The papermaker",ja:"紙漉き",zh:"造紙匠"},
            d:{en:"Mino paper is recorded from the early eighth century and was the shōji paper of choice in Edo. It needs paper-mulberry fibre, very clean cold water and patience; the Nagara and its tributaries supplied the water, and the river carried the paper out.",
               ja:"美濃紙は八世紀初めから記録に現れ、江戸では障子紙の筆頭であった。必要なのは楮の繊維と、きわめて清らかな冷たい水と、根気である。長良川とその支流が水を与え、同じ川が紙を運び出した。",
               zh:"美濃紙自八世紀初即見於記載，在江戶是紙拉門用紙的首選。它需要楮樹纖維、極潔淨的冷水與耐心；長良川及其支流供給了水，也把紙運了出去。"} },
          { k:{en:"yaku · to fire",ja:"やく",zh:"燒"}, v:"焼く", h:{en:"The potter",ja:"陶工",zh:"陶工"},
            d:{en:"The clays of Tōnō gave Japan the tea wares of the late sixteenth century — Shino, Oribe, Yellow Seto — and give it most of its everyday tableware now. Firing needed fuel, which the forests supplied until coal and gas replaced them.",
               ja:"東濃の粘土は、十六世紀末の日本に志野・織部・黄瀬戸といった茶の器をもたらし、いまは日常の食器の大半をもたらしている。焼くには燃料が要り、石炭とガスに替わるまでは森がそれを供した。",
               zh:"東濃的黏土在十六世紀末為日本帶來了志野、織部、黃瀨戶等茶器，如今則供應日本大部分的日常餐具。燒窯需要燃料，在煤與瓦斯取而代之以前，一直由森林提供。"} },
          { k:{en:"kamosu · to brew",ja:"かもす",zh:"釀"}, v:"醸す", h:{en:"The brewer",ja:"醸造家",zh:"釀酒人"},
            d:{en:"Around fifty breweries work along the rivers of Mino and in the cold basins of Hida. Brewing is a winter craft: it needs rice, soft water and steady cold, and Hida has had more of the last than almost anywhere in central Japan.",
               ja:"美濃の川沿いと飛騨の寒い盆地に、五十ほどの蔵がある。酒造りは冬の仕事で、米と軟らかな水と安定した寒さを要する。最後の一つについて、飛騨は本州中部で指折りの恵まれた土地である。",
               zh:"約五十家酒藏分布在美濃的河畔與飛驒寒冷的盆地。釀酒是冬季的工藝：需要稻米、軟水與穩定的寒冷；而論寒冷，飛驒在本州中部幾乎無處可及。"} }
        ] }
      ]
    },

    { t:"section", id:"yui",
      title:{ en:"And one noun: yui", ja:"そして一つの名詞——結", zh:"再加一個名詞：結" }, jp:"結",
      body:[
        { t:"p", text:{
          en:"Every one of the six verbs is, in practice, done by a group. The word Gifu uses for that is <strong>結</strong>, <em>yui</em>: the reciprocal labour by which a village re-thatches one house in a day and then moves on to the next. It is most visible in Shirakawa-gō, where a steep gasshō roof still takes a crowd of neighbours to renew, but the same logic organised the ring-levee villages of the lower rivers, which had to maintain one embankment together or drown separately, and the festival neighbourhoods of Takayama, each of which keeps one float.",
          ja:"六つの動詞は、実際にはいずれも集団で行われる。岐阜でそれを指す言葉が<strong>結</strong>である。一日で一軒の屋根を葺き替え、次の家へ移っていく、村の互いの労力の貸し借り。白川郷では、急勾配の合掌屋根の葺き替えにいまも大勢の近隣が集まるので最もよく見える。だが同じ論理は、一本の堤をともに守るか、ばらばらに水に沈むかしかなかった下流の輪中の村々をも、屋台を一台ずつ守る高山の祭りの町内をも組み立ててきた。",
          zh:"這六個動詞，實際上都是由一群人完成的。岐阜用來指稱這件事的字是<strong>結</strong>（yui）：村人彼此出工相助，一天之內把一戶人家的屋頂重新葺好，再移到下一戶。在白川鄉最為顯眼——陡峭的合掌屋頂至今仍需一大群鄰居才能翻新；但同樣的邏輯也組織了下游的輪中村落——他們只能一起維護一道堤防，否則就各自被淹沒——也組織了高山的祭典町內，每個町內守護一台屋台。" } },
        { t:"quote",
          text:{ en:"“Hida no takumi” — the craftsman of Hida — was already a proverb for skill in the Heian court. The phrase has outlived the tax system that produced it by more than a thousand years.",
                 ja:"「飛騨の匠」は、平安の宮廷ですでに巧みさの代名詞であった。この言葉は、それを生んだ税の制度より千年以上長く生きている。",
                 zh:"「飛驒工匠」在平安朝廷裡便已是技藝精湛的代名詞。這個詞，比催生它的稅制多活了一千多年。" },
          cite:{ en:"See Hida no Takumi", ja:"「飛騨の匠」の頁を参照", zh:"見「飛驒工匠」頁" } }
      ]
    },

    { t:"section", id:"not",
      title:{ en:"What the word does not mean", ja:"この言葉が意味しないこと", zh:"這個字不代表什麼" }, jp:"注意",
      body:[
        { t:"p", text:{
          en:"It would be easy to turn six verbs into a story about timeless artisans. The record does not support that. Every craft on this page has been, at some point, an industry under pressure: Mino paper lost most of its makers to machine paper in the twentieth century; the Seki smiths lost their market overnight in 1876; Hida's modern furniture industry was founded in 1920 on a borrowed Western bentwood technique; Mino ware lives or dies by export prices. What persists is not a mystique but a set of skills, a set of resources, and a habit of adapting one to the other.",
          ja:"六つの動詞を、時を超えた職人の物語に仕立てるのはたやすい。だが記録はそれを支持しない。この頁の工芸はどれも、いずれかの時点で圧迫を受ける産業であった。美濃紙は二十世紀に機械漉きの紙に押されて漉き手の大半を失い、関の鍛冶は1876年に一夜で市場を失い、飛騨の近代家具産業は1920年、西洋から借りた曲木の技術のうえに興され、美濃焼は輸出価格とともに浮き沈みする。続いてきたのは神秘ではなく、技の束と資源の束、そして一方を他方に合わせていく習いである。",
          zh:"把六個動詞寫成一則關於永恆匠人的故事並不難，但史料並不支持這種說法。本頁的每一項工藝，都曾在某個時期是承受壓力的產業：美濃紙在二十世紀因機器造紙而失去大部分紙匠；關的鍛冶在 1876 年一夜之間失去市場；飛驒的近代家具產業則是在 1920 年借用西方曲木技術才得以創立；美濃燒則隨出口價格浮沉。延續下來的不是神秘感，而是一套技藝、一組資源，以及讓前者適應後者的習慣。" } },
        { t:"note", label:{en:"A test",ja:"一つの試金石",zh:"一個檢驗"}, text:{
          en:"When a page in this book uses a word like “spirit”, “tradition” or “takumi”, it should be possible to point to a document, a date or a technique behind it. Where that is not possible, the page says so.",
          ja:"本書のある頁が「魂」「伝統」「匠」のような言葉を使うとき、その背後にある文書・日付・技法を指し示せなければならない。示せない場合は、頁のうえでそう断る。",
          zh:"本書任何一頁使用「魂」、「傳統」或「匠」這類字眼時，都應能指出其背後的文獻、日期或技法。若無法指出，頁面上會如實說明。" } }
      ]
    },

    { t:"related", items:[
      { href:"forests.html", why:{ en:"The first verb, at the scale of the prefecture.", ja:"最初の動詞を、県の規模で。", zh:"第一個動詞，放大到全縣的尺度。" } },
      { href:"takumi.html", why:{ en:"The second verb, and where the proverb came from.", ja:"二つ目の動詞と、その言葉の出どころ。", zh:"第二個動詞，以及那句俗語的來歷。" } },
      { href:"seki.html", why:{ en:"The third, and what happened when its market vanished.", ja:"三つ目と、その市場が消えたときに起きたこと。", zh:"第三個，以及其市場消失時發生的事。" } },
      { href:"shirakawago.html", why:{ en:"Yui, on a roof, in a single day.", ja:"一日の屋根の上の「結」。", zh:"一天之內、屋頂上的「結」。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- names */
GIFU.pages["names"] = {
  kicker: { en: "Foundations · 04", ja: "基礎 · 04", zh: "基礎 · 04" },
  title:  { en: "The Name “Gifu”", ja: "「岐阜」という名", zh: "「岐阜」之名" },
  jp: "岐阜 · 美濃 · 飛騨 · 地名の由来",
  lede: {
    en: "Few Japanese prefectures carry a name chosen for a political programme. Gifu does: the story is that Oda Nobunaga renamed the town below his new castle in 1567 after the mountain from which an ancient Chinese dynasty had set out to unify its world. The story is partly true. This page sets out what the names Gifu, Mino and Hida mean, where they come from, and which parts of the familiar accounts rest on documents and which on later retelling.",
    ja: "政治的な意図のもとに選ばれた名を持つ県は多くない。岐阜はその一つである。1567年、織田信長が新たな居城の城下を、古代中国の王朝が天下統一へと起った山にちなんで改名した——そう語られてきた。この話は半ば正しい。本頁では岐阜・美濃・飛騨という名が何を意味し、どこから来たのか、そして広く知られた説明のどこが史料に拠り、どこが後の語り直しに拠るのかを示す。",
    zh: "以政治綱領為名的日本縣並不多，岐阜是其中之一：據說 1567 年，織田信長把新城下的城鎮，改名為一座山的名字——古代中國某個王朝正是從那座山出發、統一天下的。這個故事只對了一半。本頁說明岐阜、美濃、飛驒這幾個名字的意思與來歷，以及那些耳熟能詳的說法中，哪些根據史料、哪些出自後人的轉述。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The two characters. 岐 is the first character of Qishan (岐山), the mountain from which King Wen of Zhou began the rise of his house; 阜, a hill or mound, is the second character of Qufu (曲阜), the birthplace of Confucius. The pairing is usually read as “the place from which the realm is set in order” — a gloss attributed to the Zen monk Takugen Sōon.",
        ja:"二つの文字。「岐」は周の文王が興った山、岐山の岐。「阜」は丘・盛り土を意味し、孔子の生地、曲阜の阜である。二字の組み合わせは「天下を治める起点となる地」と読まれるのが通例で、この解釈は禅僧・沢彦宗恩に帰せられる。",
        zh:"兩個字。「岐」是岐山的岐——周文王由此興起；「阜」意為丘陵、土山，是孔子故里曲阜的阜。兩字合讀通常解為「平定天下之起點」，此一解釋被歸於禪僧澤彥宗恩。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"', S = 'font-family="Georgia,serif"';
        var s = '<svg viewBox="0 0 760 300" role="img" aria-label="The characters of the name Gifu">' +
          '<rect x="0.5" y="0.5" width="759" height="299" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="30" ' + S + ' font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"GI · FU", ja:"岐 · 阜", zh:"岐 · 阜" }) + '</text>';
        function block(x, ch, head, a, b, fill) {
          return '<rect x="' + x + '" y="50" width="330" height="210" fill="' + fill + '" stroke="#CDC6B9"/>' +
            '<text x="' + (x + 64) + '" y="170" text-anchor="middle" ' + S + ' font-size="96" fill="#201E1B">' + ch + '</text>' +
            '<text x="' + (x + 128) + '" y="86" ' + F + ' font-size="10.5" fill="#55504A" letter-spacing="1" font-weight="600">' + L(head) + '</text>' +
            '<text x="' + (x + 128) + '" y="112" ' + F + ' font-size="11" fill="#201E1B">' + L(a[0]) + '</text>' +
            '<text x="' + (x + 128) + '" y="130" ' + F + ' font-size="10.5" fill="#55504A">' + L(a[1]) + '</text>' +
            '<text x="' + (x + 128) + '" y="164" ' + F + ' font-size="11" fill="#201E1B">' + L(b[0]) + '</text>' +
            '<text x="' + (x + 128) + '" y="182" ' + F + ' font-size="10.5" fill="#55504A">' + L(b[1]) + '</text>' +
            '<text x="' + (x + 128) + '" y="200" ' + F + ' font-size="10.5" fill="#55504A">' + L(b[2]) + '</text>';
        }
        s += block(30, "岐", { en:"GI — FORK, BRANCHING", ja:"岐——分かれ道", zh:"岐——分岔" },
          [{ en:"as in 岐山 Qishan", ja:"岐山の岐", zh:"岐山之岐" }, { en:"seat of the early Zhou", ja:"周が興った地", zh:"周朝興起之地" }],
          [{ en:"King Wen of Zhou", ja:"周の文王", zh:"周文王" }, { en:"“rose from Qi and", ja:"「岐山より起こり", zh:"「起於岐山，" }, { en:"settled the realm”", ja:"天下を定む」", zh:"而定天下」" }], "#EDE5D2");
        s += block(400, "阜", { en:"FU — HILL, MOUND", ja:"阜——丘・盛り土", zh:"阜——丘陵、土山" },
          [{ en:"as in 曲阜 Qufu", ja:"曲阜の阜", zh:"曲阜之阜" }, { en:"birthplace of Confucius", ja:"孔子の生地", zh:"孔子故里" }],
          [{ en:"learning and order", ja:"学問と秩序の", zh:"學問與秩序" }, { en:"the second half", ja:"象徴として", zh:"作為象徵" }, { en:"of the pairing", ja:"添えられた字", zh:"所配之字" }], "#E7DFD2");
        s += '<text x="30" y="286" ' + F + ' font-size="10" fill="#8B857C">' +
          L({ en:"The classical allusions are the traditional reading; see below for what the documents actually show.",
              ja:"古典への連想は伝統的な読み方である。史料が実際に示すことは下記を参照。",
              zh:"上述典故屬傳統解讀；史料實際呈現的情形請見下文。" }) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"gifu",
      title:{ en:"Gifu: a name for a conqueror", ja:"岐阜——征服者のための名", zh:"岐阜——為征服者而取的名" }, jp:"信長と沢彦",
      body:[
        { t:"p", text:{
          en:"In the autumn of 1567 (Eiroku 10) Oda Nobunaga took Inabayama Castle from the Saitō and moved his seat there from Komaki in Owari. The town at the foot of the mountain had been called Inokuchi (井口). According to the account that has become standard, Nobunaga asked Takugen Sōon, a Rinzai monk of Seishū-ji in Owari who had once been his tutor, for a new name; Takugen offered three — <em>Gizan</em> (岐山), <em>Giyō</em> (岐陽) and <em>Gifu</em> (岐阜) — and Nobunaga chose the last.",
          ja:"1567年（永禄10年）秋、織田信長は斎藤氏から稲葉山城を奪い、尾張の小牧から居を移した。山麓の町は井口（いのくち）と呼ばれていた。定説となった話によれば、信長はかつての師で尾張・政秀寺の臨済僧、沢彦宗恩に新しい名を求め、沢彦は「岐山」「岐陽」「岐阜」の三つを示し、信長は最後のものを選んだ。",
          zh:"1567 年（永祿 10 年）秋，織田信長從齋藤氏手中奪下稻葉山城，並將居城從尾張的小牧遷到此地。山腳下的城鎮原名井口（いのくち）。依已成定說的記載，信長請曾任其師的尾張政秀寺臨濟宗僧人澤彥宗恩另取新名；澤彥提出「岐山」、「岐陽」、「岐阜」三個候選，信長選了最後一個。" } },
        { t:"p", text:{
          en:"The allusion was to the Zhou dynasty. In the Chinese tradition King Wen rose from Mount Qi and his son founded the dynasty that settled the realm; to name a town Gifu was to announce a similar intention. In the same year Nobunaga began to use a vermilion seal reading <strong>天下布武</strong>, <em>tenka fubu</em> — usually rendered “to spread martial rule across the realm”, though some historians read <em>tenka</em> here as the home provinces around Kyoto rather than all of Japan. Takugen is also credited with that phrase.",
          ja:"典拠は周王朝である。中国の伝承では、文王が岐山より起こり、その子が天下を定める王朝を開いた。町を岐阜と名づけることは、同じ志を掲げることであった。同じ年から信長は「<strong>天下布武</strong>」の朱印を用い始める。「武をもって天下に号令する」と訳されるのが普通だが、ここでの「天下」を日本全国ではなく京都を中心とする畿内とみる研究者もいる。この文言もまた沢彦の案とされる。",
          zh:"典故出自周朝。依中國傳統說法，周文王起於岐山，其子建立了平定天下的王朝；把城鎮命名為岐阜，等於宣告同樣的志向。同一年，信長開始使用印文為「<strong>天下布武</strong>」的朱印——通常譯為「以武力號令天下」，但也有學者認為此處的「天下」指的是以京都為中心的畿內，而非整個日本。這四個字同樣被歸功於澤彥。" } },
        { t:"note", label:{en:"What the documents show",ja:"史料が示すこと",zh:"史料所示"}, text:{
          en:"The name was not invented in 1567. Zen monks in Mino were already using <em>Giyō</em> and <em>Gifu</em> as literary names for the district decades earlier — the forms appear in the late-fifteenth-century collection <em>Baika mujinzō</em> of the monk-poet Banri Shūku and in the <em>Jinshū-roku</em>. What Nobunaga did was adopt a name current among the learned and make it the official name of his castle and town. The three-candidate story first appears in later sources and is best treated as tradition.",
          ja:"この名は1567年に発明されたのではない。美濃の禅僧たちは、それより何十年も前から、この地の雅名として「岐陽」「岐阜」を用いていた。十五世紀末の詩僧・万里集九の『梅花無尽蔵』や『仁岫録』にその形が見える。信長がしたのは、学識ある人々のあいだで通じていた名を採り、自らの城と町の正式な名にしたことである。三案から選んだという話は後代の史料に初めて現れ、伝承として扱うのが妥当である。",
          zh:"這個名字並非 1567 年才發明。早在數十年前，美濃的禪僧便已把「岐陽」、「岐阜」當作此地的雅稱——十五世紀末詩僧萬里集九的《梅花無盡藏》與《仁岫錄》中都可見到。信長所做的，是採用一個在知識階層間已通行的名稱，並將之定為自己城池與城鎮的正式名稱。「三選一」的故事首見於較晚的史料，宜視為傳說。" } },
        { t:"timeline", items:[
          { year:"late 15th c.", era:{en:"Muromachi",ja:"室町",zh:"室町"}, title:{en:"Giyō and Gifu in monks' writing",ja:"禅僧の詩文に岐陽・岐阜",zh:"禪僧詩文中的岐陽與岐阜"},
            text:{en:"Literary names for the Inokuchi district appear in the works of Zen monks in Mino.",ja:"井口一帯を指す雅名が、美濃の禅僧の著作に現れる。",zh:"指稱井口一帶的雅稱，出現在美濃禪僧的著作中。"} },
          { year:"1567", era:{en:"Eiroku 10",ja:"永禄10年",zh:"永祿10年"}, title:{en:"Nobunaga takes Inabayama",ja:"信長、稲葉山城を取る",zh:"信長奪取稻葉山城"},
            text:{en:"Inokuchi becomes Gifu; the tenka fubu seal comes into use.",ja:"井口が岐阜となり、「天下布武」の印が使われ始める。",zh:"井口改名岐阜，「天下布武」印開始使用。"} },
          { year:"1871", era:{en:"Meiji 4",ja:"明治4年",zh:"明治4年"}, title:{en:"Gifu Prefecture formed",ja:"岐阜県の成立",zh:"岐阜縣成立"},
            text:{en:"On 22 November (lunar calendar) the prefectures created from the Mino domains are merged into one, named after its seat.",ja:"11月22日（旧暦）、美濃の諸藩から生まれた県が統合され、県庁所在地の名をとって岐阜県となる。",zh:"11 月 22 日（舊曆），由美濃諸藩改設的各縣合併為一，以縣廳所在地為名，稱岐阜縣。"} },
          { year:"1876", era:{en:"Meiji 9",ja:"明治9年",zh:"明治9年"}, title:{en:"Hida joins",ja:"飛騨の編入",zh:"飛驒併入"},
            text:{en:"On 21 August the three Hida districts of the abolished Chikuma Prefecture — Ōno, Yoshiki and Masuda — are transferred to Gifu.",ja:"8月21日、廃止された筑摩県から飛騨の三郡（大野・吉城・益田）が岐阜県に移る。",zh:"8 月 21 日，已廢止的筑摩縣所轄飛驒三郡（大野、吉城、益田）移入岐阜縣。"} },
          { year:"1889", era:{en:"Meiji 22",ja:"明治22年",zh:"明治22年"}, title:{en:"Gifu becomes a city",ja:"岐阜市の誕生",zh:"岐阜市誕生"},
            text:{en:"Under the new municipal system the town of Gifu becomes one of the first cities in Japan.",ja:"市制の施行により、岐阜町は日本で最初期の市の一つとなる。",zh:"隨市制施行，岐阜町成為日本最早設立的市之一。"} }
        ] }
      ]
    },

    { t:"section", id:"mino",
      title:{ en:"Mino: three plains, or a noble one", ja:"美濃——三つの野か、御野か", zh:"美濃——三片原野，或御野" }, jp:"三野 · 御野 · 美濃",
      body:[
        { t:"p", text:{
          en:"The province's name was written three ways in forty years. The earliest certain example is a wooden tax tag excavated at the Fujiwara palace site and dated to 683, which writes <strong>三野</strong>, “three plains”. From around 702 the official form became <strong>御野</strong>, “the honoured plain” — the form on the Mino household registers of that year preserved in the Shōsōin. Around 708 the characters <strong>美濃</strong>, “beautiful and rich”, were fixed, in line with an order that province names be written with two auspicious characters.",
          ja:"国名の表記は四十年のうちに三度変わった。確実な初見は藤原宮跡から出土した683年（癸未年）の荷札木簡で、「<strong>三野</strong>」と書く。702年（大宝2年）ころには公式の表記が「<strong>御野</strong>」となり、正倉院に伝わる同年の御野国戸籍にこの形が見える。そして708年（和銅元年）前後に「<strong>美濃</strong>」が定まった。国名を好字二字で記せという方針に沿うものである。",
          zh:"這個國名在四十年間換過三種寫法。最早可確認的例子，是藤原宮遺址出土、紀年為 683 年的貢納木簡，寫作「<strong>三野</strong>」。約 702 年起，官方寫法改為「<strong>御野</strong>」——正倉院所藏同年的御野國戶籍即作此形。約 708 年前後，定為「<strong>美濃</strong>」二字，這與「國名須以兩個吉祥字書寫」的方針一致。" } },
        { t:"p", text:{
          en:"Why “three plains” is disputed. One explanation names them — Aono, Kamono (or Ōno) and Kagamino, three open lands of the southern plain; another derives <em>mino</em> from <em>mano</em>, a broad plain; a third reads it as land sloping gently away from mountains. None is certain. What is certain is the abbreviation: Mino became <strong>濃州</strong>, <em>Nōshū</em>, and its first character survives everywhere — in the Nōbi Plain (濃尾, Mino and Owari), in Seinō, Chūnō and Tōnō (west, central and east Mino), and in the Nōhi bus company (濃飛, Mino and Hida).",
          ja:"なぜ「三つの野」なのかには諸説ある。一つは青野・賀茂野（または大野）・各務野という南の平野の三つの野を挙げる説、一つは広い野を意味する「真野」から転じたとする説、もう一つは山から緩やかに下る土地をいうとする説で、いずれも定かでない。確かなのは略称のほうである。美濃は「<strong>濃州</strong>」となり、その「濃」の字はいまも至るところに残る——濃尾平野（美濃と尾張）、西濃・中濃・東濃（美濃の西・中・東）、そして濃飛バス（美濃と飛騨）。",
          zh:"為何是「三片原野」，說法不一。一說列舉南方平原的三片原野——青野、賀茂野（或大野）、各務野；一說源自意為廣闊原野的「真野」；另一說則指從山地緩緩下降的土地。皆無定論。可以確定的是它的簡稱：美濃稱為「<strong>濃州</strong>」，這個「濃」字至今隨處可見——濃尾平原（美濃與尾張）、西濃、中濃、東濃（美濃的西、中、東部），以及濃飛巴士（美濃與飛驒）。" } }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"Hida: from 斐陀 to 飛驒", ja:"飛騨——斐陀から飛驒へ", zh:"飛驒——從斐陀到飛驒" }, jp:"斐太 · 飛驒 · 飛騨",
      body:[
        { t:"p", text:{
          en:"Until the early eighth century the northern province was usually written with phonetic characters — <strong>斐陀</strong> or <strong>斐太</strong>. The form <strong>飛驒</strong>, “flying horse”, appears from the Wadō era (708–715) onwards, again as part of the move to fixed two-character names. The second character is rare; in modern Japanese usage it is normally printed in the simplified form <strong>騨</strong>, which is how the prefecture, Takayama and Hida city write it today. Chinese text, including this book's, keeps 驒. The abbreviation is <strong>飛州</strong>, <em>Hishū</em>.",
          ja:"八世紀初めまで、北の国はたいてい音を写す文字で書かれた——「<strong>斐陀</strong>」「<strong>斐太</strong>」。「<strong>飛驒</strong>」の形は和銅年間（708〜715年）以降に現れ、これも二字の国名を定める動きの一環である。二字目は珍しい字で、現代の日本語では通常、略した形の「<strong>騨</strong>」で書かれる。県も高山市も飛騨市も、いまはこの字を使う。中国語の文章は本書も含めて「驒」を保つ。略称は「<strong>飛州</strong>」である。",
          zh:"直到八世紀初，北方這個國多半以表音的漢字書寫——「<strong>斐陀</strong>」或「<strong>斐太</strong>」。「<strong>飛驒</strong>」的寫法自和銅年間（708–715 年）以後出現，同樣是固定兩字國名的一環。第二個字頗為罕見；現代日文通常印作簡化的「<strong>騨</strong>」，縣府、高山市與飛驒市今日都這樣寫。中文（包括本書）則保留「驒」。其簡稱為「<strong>飛州</strong>」。" } },
        { t:"note", label:{en:"A word, not a place",ja:"場所ではなく言葉",zh:"一個詞，而非一個地方"}, text:{
          en:"“Hida” is also half of a word: <em>Hida no takumi</em>, the craftsman of Hida, which had become a byword for skilled carpentry by the Heian period. See <a href=\"takumi.html\">Hida no Takumi</a>.",
          ja:"「飛騨」は一つの言葉の半分でもある——「飛騨の匠」。平安時代にはすでに、巧みな大工仕事の代名詞になっていた。<a href=\"takumi.html\">飛騨の匠</a>を参照。",
          zh:"「飛驒」也是一個詞的一半：「飛驒工匠」，到平安時代已成為精湛木工的代名詞。見<a href=\"takumi.html\">飛驒工匠</a>。" } }
      ]
    },

    { t:"section", id:"places",
      title:{ en:"Names on the map", ja:"地図の上の名", zh:"地圖上的名字" }, jp:"地名",
      body:[
        { t:"table",
          cols:[{en:"Name",ja:"地名",zh:"地名"},{en:"Reading",ja:"読み",zh:"讀音"},{en:"Where it comes from",ja:"由来",zh:"由來"}],
          jpCols:[1],
          rows:[
            [{en:"Gero",ja:"下呂",zh:"下呂"},"げろ",{en:"From <em>Shimo-no-tomari</em> (下留), a post station of the eighth-century Hida branch of the Tōsandō highway. Read in Sino-Japanese as <em>geru</em>, it became <em>gero</em>, and the characters 下呂 were in use by the Muromachi period.",ja:"八世紀の官道・東山道飛騨支路の駅家「下留（しものとまり）」に由来する。音読みで「げる」、さらに「げろ」となり、室町時代には「下呂」の字が当てられていた。",zh:"源自八世紀官道東山道飛驒支路上的驛站「下留（しものとまり）」。以音讀念作「げる」，再轉為「げろ」，室町時代已使用「下呂」二字。"}],
            [{en:"Sekigahara",ja:"関ケ原",zh:"關原"},"せきがはら",{en:"“The plain of the barrier”: the Fuwa barrier (不破関), one of the three great checkpoints guarding the approaches to the capital, was established here after 672.",ja:"「関のある原」。都への入口を守る三関の一つ、不破関が672年以後この地に置かれた。",zh:"「關口所在的原野」：守護通往京城要道的三大關之一——不破關，於 672 年後設於此地。"}],
            [{en:"Seki",ja:"関",zh:"關"},"せき",{en:"The city's own account derives the name from a barrier that stood in the area; the details are not documented.",ja:"市の説明では、この地にあった関所に由来するとされる。詳細は史料で確かめられない。",zh:"依該市自身的說法，名稱源自當地曾設的關所；細節無法以史料確認。"}],
            [{en:"Kinkazan",ja:"金華山",zh:"金華山"},"きんかざん",{en:"The 329-metre mountain behind Gifu city, formerly Inabayama (稲葉山). In the Edo period it was a closed forest of the Owari domain, which is one reason its natural woodland survives.",ja:"岐阜市の背後にそびえる標高329メートルの山。旧名は稲葉山。江戸時代には尾張藩の御留山として立ち入りが禁じられ、それが自然林が残る理由の一つである。",zh:"岐阜市後方標高 329 公尺的山，舊名稻葉山。江戶時代為尾張藩的「御留山」，禁止入山，這也是其天然林得以保存的原因之一。"}],
            [{en:"Nōbi",ja:"濃尾",zh:"濃尾"},"のうび",{en:"Mino (濃) and Owari (尾): the plain shared by Gifu and Aichi, and the name of the 1891 earthquake.",ja:"美濃（濃）と尾張（尾）。岐阜・愛知が共有する平野の名で、1891年の地震の名でもある。",zh:"美濃（濃）與尾張（尾）：岐阜與愛知共有的平原之名，也是 1891 年大地震之名。"}],
            [{en:"Tōnō · Chūnō · Seinō",ja:"東濃・中濃・西濃",zh:"東濃・中濃・西濃"},"とうのう・ちゅうのう・せいのう",{en:"East, central and west Mino — regional names still used for administration, weather forecasts and sake associations.",ja:"美濃の東・中・西。行政区分、天気予報、酒造組合の名にいまも使われる。",zh:"美濃的東、中、西部——至今仍用於行政區劃、天氣預報與酒造組合的名稱。"}]
          ] }
      ]
    },

    { t:"section", id:"seiryu",
      title:{ en:"The newest name: “the land of clear streams”", ja:"最も新しい名——「清流の国」", zh:"最新的名字：「清流之國」" }, jp:"清流の国ぎふ",
      body:[
        { t:"p", text:{
          en:"In the twenty-first century the prefecture gave itself a byname. When Gifu was chosen to host the 2012 National Sports Festival, the name <em>Gifu Seiryū Kokutai</em> — “the clear-stream games” — was picked on 4 August 2007 from 10,074 public entries, and a water-sprite mascot, Minamo, followed in 2008. The phrase outlived the games: in 2014 the prefecture adopted a <em>Charter of the Land of Clear Streams, Gifu</em> (清流の国ぎふ憲章), and <strong>清流の国ぎふ</strong> now heads its publications, its forest-and-environment tax and its 2024 national culture festival.",
          ja:"二十一世紀に入り、県は自らに別名を与えた。2012年の国民体育大会の開催地に決まると、2007年8月4日、一般公募10,074件のなかから「ぎふ清流国体」の名が選ばれ、2008年には水面の妖精のマスコット「ミナモ」が加わった。この言葉は大会の後も生き続け、2014年に県は「清流の国ぎふ憲章」を定めた。いまや「<strong>清流の国ぎふ</strong>」は、県の刊行物、森林・環境税、2024年の国民文化祭の冠となっている。",
          zh:"進入二十一世紀，本縣為自己取了別名。岐阜獲選為 2012 年國民體育大會主辦地後，2007 年 8 月 4 日從 10,074 件民眾投稿中選出「ぎふ清流國體」（清流國體）之名，2008 年又推出水面精靈吉祥物「ミナモ」。這個詞在賽事結束後依然沿用：2014 年縣府制定《清流之國岐阜憲章》，如今「<strong>清流の国ぎふ</strong>」冠於縣府的出版品、森林環境稅，以及 2024 年的國民文化祭之上。" } }
      ]
    },

    { t:"related", items:[
      { href:"nobunaga.html", why:{ en:"What Nobunaga built on the mountain he renamed.", ja:"信長が改名した山に何を築いたか。", zh:"信長在他改名的山上建了什麼。" } },
      { href:"provinces.html", why:{ en:"The two provinces behind the two names.", ja:"二つの名の背後にある二つの国。", zh:"兩個名字背後的兩個國。" } },
      { href:"ancient.html", why:{ en:"The household registers of 702 and the Fuwa barrier.", ja:"702年の戸籍と不破関。", zh:"702 年的戶籍與不破關。" } },
      { href:"rivers.html", why:{ en:"The clear streams the newest name refers to.", ja:"最も新しい名が指す清流。", zh:"最新名字所指的清流。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- provinces */
GIFU.pages["provinces"] = {
  kicker: { en: "Foundations · 05", ja: "基礎 · 05", zh: "基礎 · 05" },
  title:  { en: "Mino and Hida", ja: "美濃と飛騨", zh: "美濃與飛驒" },
  jp: "濃州 · 飛州 · 二国一県",
  lede: {
    en: "For eleven hundred years Mino and Hida were separate provinces with separate histories, and for most of that time they looked in opposite directions — Mino south and west towards Kyoto and the Pacific coast, Hida north towards the Sea of Japan and inward to its own basins. They have shared a prefecture only since 1876. This page sets them side by side: land and people, how each was classed and ruled, and why their crafts differ.",
    ja: "千百年にわたり、美濃と飛騨は別々の歴史を持つ別々の国であり、その大半の時代、互いに反対の方角を向いていた——美濃は南と西、京都と太平洋岸へ、飛騨は北の日本海と、自らの盆地の内へ。二つが一つの県になったのは1876年のことにすぎない。本頁では両者を並べる。土地と人、それぞれがどう位置づけられどう治められたか、そして工芸がなぜ異なるのか。",
    zh: "一千一百年來，美濃與飛驒是各有歷史的兩個國，而且大部分時間面朝相反的方向——美濃向南、向西，望著京都與太平洋沿岸；飛驒向北望著日本海，並向內收進自己的盆地。兩者同屬一縣，不過是 1876 年以來的事。本頁將兩國並列：土地與人口、各自的等級與統治方式，以及工藝為何不同。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Land against people, 2025. Hida — Takayama, Hida, Gero and Shirakawa — covers about 39% of the prefecture but holds about 7% of its population; Mino covers about 61% and holds about 93%. Shares computed from municipal areas and April 2025 resident registers.",
        ja:"土地と人口（2025年）。飛騨（高山市・飛騨市・下呂市・白川村）は県土の約39%を占めるが、人口は約7%にすぎない。美濃は約61%の土地に約93%が住む。市町村の面積と2025年4月の住民基本台帳人口から算出。",
        zh:"土地與人口（2025 年）。飛驒（高山市、飛驒市、下呂市、白川村）占全縣面積約 39%，人口卻只占約 7%；美濃占約 61% 的土地，住著約 93% 的人口。依各市町村面積與 2025 年 4 月住民基本台帳人口計算。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 230" role="img" aria-label="Share of land and population, Mino and Hida">' +
          '<rect x="0.5" y="0.5" width="759" height="229" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="30" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"LAND AND PEOPLE", ja:"土地と人", zh:"土地與人口" }) + '</text>';
        var X = 150, W = 570;
        function bar(y, label, hida, fillH, fillM) {
          var wh = Math.round(W * hida / 100);
          return '<text x="30" y="' + (y + 22) + '" ' + F + ' font-size="11" fill="#55504A" letter-spacing="1.2" font-weight="600">' + L(label) + '</text>' +
            '<rect x="' + X + '" y="' + y + '" width="' + wh + '" height="34" fill="' + fillH + '" stroke="#B4AC9C"/>' +
            '<rect x="' + (X + wh) + '" y="' + y + '" width="' + (W - wh) + '" height="34" fill="' + fillM + '" stroke="#B4AC9C"/>' +
            '<text x="' + (X + 8) + '" y="' + (y + 22) + '" ' + F + ' font-size="11" fill="#201E1B">' + L({ en:"Hida", ja:"飛騨", zh:"飛驒" }) + ' ' + hida + '%</text>' +
            '<text x="' + (X + W - 8) + '" y="' + (y + 22) + '" text-anchor="end" ' + F + ' font-size="11" fill="#201E1B">' + L({ en:"Mino", ja:"美濃", zh:"美濃" }) + ' ' + (100 - hida) + '%</text>';
        }
        s += bar(56, { en:"LAND", ja:"面積", zh:"面積" }, 39, "#E0E6DB", "#F0EDE4");
        s += bar(110, { en:"PEOPLE", ja:"人口", zh:"人口" }, 7, "#E0E6DB", "#F0EDE4");
        s += '<text x="' + X + '" y="176" ' + F + ' font-size="10" fill="#8B857C">' +
          L({ en:"Hida ≈ 4,178 km² · ≈ 134,000 people      Mino ≈ 6,443 km² · ≈ 1.81 million people",
              ja:"飛騨 約4,178km²・約13.4万人　　美濃 約6,443km²・約181万人",
              zh:"飛驒 約 4,178 km²・約 13.4 萬人　　美濃 約 6,443 km²・約 181 萬人" }) + '</text>' +
          '<text x="' + X + '" y="200" ' + F + ' font-size="10" fill="#8B857C">' +
          L({ en:"Takayama alone is 2,178 km² — the largest municipality in Japan.",
              ja:"高山市だけで2,178km²——日本で最も広い市町村である。",
              zh:"光是高山市就有 2,178 km²——日本面積最大的市町村。" }) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"side",
      title:{ en:"Side by side", ja:"並べて見る", zh:"並列比較" }, jp:"比較",
      body:[
        { t:"table",
          caption:{en:"The two provinces compared",ja:"二つの国の比較",zh:"兩國比較"},
          cols:[{en:"Item",ja:"項目",zh:"項目"},{en:"Mino 美濃",ja:"美濃",zh:"美濃"},{en:"Hida 飛騨",ja:"飛騨",zh:"飛驒"}],
          rows:[
            [{en:"Rank under the codes",ja:"律令の等級",zh:"律令等級"},{en:"Upper province (上国)",ja:"上国",zh:"上國"},{en:"Lower province (下国)",ja:"下国",zh:"下國"}],
            [{en:"Districts",ja:"郡",zh:"郡"},{en:"18 (after 855)",ja:"十八郡（855年以後）",zh:"十八郡（855 年以後）"},{en:"3 — Ōno, Arashiro (later Yoshiki), Masuda",ja:"三郡——大野・荒城（のち吉城）・益田",zh:"三郡——大野、荒城（後稱吉城）、益田"}],
            [{en:"Provincial capital",ja:"国府",zh:"國府"},{en:"Fuwa district — modern Tarui",ja:"不破郡（現・垂井町）",zh:"不破郡（今垂井町）"},{en:"Modern Takayama (Kokufu)",ja:"現・高山市（国府町）",zh:"今高山市（國府町）"}],
            [{en:"First shrine (ichinomiya)",ja:"一宮",zh:"一之宮"},{en:"Nangū Taisha, Tarui — god of metals and mines",ja:"南宮大社（垂井町）——金属・鉱山の神",zh:"南宮大社（垂井町）——金屬與礦山之神"},{en:"Minashi Jinja, Takayama",ja:"水無神社（高山市）",zh:"水無神社（高山市）"}],
            [{en:"Provincial temple",ja:"国分寺",zh:"國分寺"},{en:"Mino Kokubunji, Ōgaki (site)",ja:"美濃国分寺（大垣市、跡）",zh:"美濃國分寺（大垣市，遺址）"},{en:"Hida Kokubunji, Takayama (still active)",ja:"飛騨国分寺（高山市、現存）",zh:"飛驒國分寺（高山市，現存）"}],
            [{en:"Rivers flow to",ja:"川の行き先",zh:"河川流向"},{en:"Ise Bay, south",ja:"南の伊勢湾",zh:"南方的伊勢灣"},{en:"Mostly the Sea of Japan, north; the Hida River south",ja:"多くは北の日本海へ。飛騨川のみ南へ",zh:"大多北流入日本海；僅飛驒川南流"}],
            [{en:"Edo-period rule",ja:"江戸時代の支配",zh:"江戶時代的統治"},{en:"Many small domains, shogunal lands, Owari holdings",ja:"小藩・幕府領・尾張藩領などが入り組む",zh:"眾多小藩、幕府領與尾張藩領交錯"},{en:"Kanamori domain to 1692, then direct shogunal rule",ja:"1692年まで金森氏、以後は幕府直轄",zh:"1692 年前為金森氏，其後由幕府直轄"}],
            [{en:"Signature crafts",ja:"代表的な工芸",zh:"代表性工藝"},{en:"Paper, pottery, blades, umbrellas, lanterns",ja:"紙・焼き物・刃物・和傘・提灯",zh:"紙、陶器、刀刃、和傘、燈籠"},{en:"Carpentry, furniture, lacquer, yew carving",ja:"大工・家具・漆器・一位一刀彫",zh:"木作、家具、漆器、一位一刀雕"}],
            [{en:"Share of prefecture today",ja:"現在の県内比",zh:"今日占全縣比例"},{en:"≈61% of land · ≈93% of people",ja:"面積約61%・人口約93%",zh:"面積約 61%・人口約 93%"},{en:"≈39% of land · ≈7% of people",ja:"面積約39%・人口約7%",zh:"面積約 39%・人口約 7%"}]
          ] }
      ]
    },

    { t:"section", id:"mino",
      title:{ en:"Mino: a province in the way", ja:"美濃——通り道の国", zh:"美濃——位於要衝之國" }, jp:"美濃",
      body:[
        { t:"p", text:{
          en:"Mino's geography made it a corridor. The Tōsandō, the ancient highway to the east, entered it through the Fuwa pass at Sekigahara, and its successor the Nakasendō crossed it with sixteen post towns. Anyone moving between the Kyoto basin and the Kantō had to pass through, and anyone who wanted to hold central Japan had to hold it. The saying attributed to the Sengoku period, “whoever controls Mino controls the realm” (美濃を制する者は天下を制す), is proverbial rather than documented, but it describes the history accurately: the Jinshin War of 672 was won from Mino, Nobunaga launched his unification from it, and the decisive battle of 1600 was fought on its western edge.",
          ja:"美濃の地理は、この国を回廊にした。東へ向かう古代の官道・東山道は関ケ原の不破を越えて入り、その後継の中山道は十六の宿場を連ねてここを横切った。京都盆地と関東を行き来する者は必ずここを通り、日本の中央を握ろうとする者は必ずここを握らねばならなかった。戦国時代の言葉とされる「美濃を制する者は天下を制す」は史料に拠る言葉というより俚諺だが、歴史をよく言い当てている。672年の壬申の乱は美濃から勝ち取られ、信長はここから天下統一へ乗り出し、1600年の決戦はその西の端で戦われた。",
          zh:"美濃的地理使它成為一條走廊。通往東國的古代官道東山道，從關原的不破隘口進入美濃；其後繼者中山道則以十六個宿場橫越此地。往來京都盆地與關東之間的人都必須經過這裡，想掌握日本中央的人也都必須掌握這裡。據說出自戰國時代的「制美濃者制天下」一語，與其說有史料根據，不如說是俗諺，卻準確描述了歷史：672 年的壬申之亂是從美濃打贏的，信長從這裡展開統一大業，1600 年的決戰也發生在它的西緣。" } },
        { t:"p", text:{
          en:"The same openness made Mino rich in trade and poor in unity. Its crafts grew up beside roads and rivers — paper at the river port of Kōzuchi, pottery along the Toki River, blades at Seki where roads met — and its Edo-period map was so divided among domains, shogunal intendancies and the holdings of the Owari Tokugawa that a single village could owe dues to more than one lord.",
          ja:"同じ開けた地勢が、美濃を交易に富ませ、統一には乏しくさせた。工芸は道と川のほとりに育った——上有知（こうずち）の川湊の紙、土岐川沿いの焼き物、道の交わる関の刃物。江戸時代の地図は、諸藩・幕府の代官所・尾張徳川家の所領などにあまりに細かく分かれ、一つの村が二人以上の領主に年貢を納めることさえあった。",
          zh:"同樣開闊的地勢，使美濃富於商貿，卻難以統一。它的工藝沿著道路與河川生長——上有知（こうずち）河港的紙、土岐川沿岸的陶器、道路交會處關市的刀刃。江戶時代的美濃地圖，被諸藩、幕府代官所與尾張德川家的領地切割得極為細碎，甚至一個村子要向不只一位領主繳納年貢。" } }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"Hida: a province apart", ja:"飛騨——隔てられた国", zh:"飛驒——自成一方之國" }, jp:"飛騨",
      body:[
        { t:"p", text:{
          en:"Hida is a high plateau cut by rivers into basins, the largest of them Takayama's at about 570 metres. It had too little paddy to pay the ordinary rice-based taxes of the eighth-century codes, and the codes accepted labour instead: each year Hida sent carpenters to the capital. The arrangement lasted for centuries and gave the province a reputation that has never left it. See <a href=\"takumi.html\">Hida no Takumi</a>.",
          ja:"飛騨は、川によっていくつもの盆地に刻まれた高原で、最大の高山盆地は標高約570メートルにある。八世紀の律令が定める米を基本とした税を納めるには水田があまりに乏しく、律令は代わりに労役を認めた。飛騨は毎年、大工を都へ送った。この仕組みは何世紀も続き、国に決して消えない評判を与えた。<a href=\"takumi.html\">飛騨の匠</a>を参照。",
          zh:"飛驒是一片被河川切割成多個盆地的高原，其中最大的高山盆地海拔約 570 公尺。這裡水田太少，繳不起八世紀律令以稻米為本的一般租稅，律令於是改收勞役：飛驒每年派木匠前往京城。這項安排延續了好幾個世紀，也為此地留下一份從未褪去的名聲。見<a href=\"takumi.html\">飛驒工匠</a>。" } },
        { t:"p", text:{
          en:"After the Sengoku wars Hida was given to Kanamori Nagachika, who took it for Toyotomi Hideyoshi in 1585 and built the castle town of Takayama. In 1692 the shogunate moved the Kanamori to another fief and took Hida under direct rule, chiefly for its timber and its mines. For the next 176 years it was administered by an intendant from the Takayama Jinya — now the only surviving building of its kind in Japan. The absence of a resident lord concentrated wealth in merchant families, and it is their houses, their festival floats and their patronage of carpenters and lacquerers that make up Takayama's old town.",
          ja:"戦国の争乱ののち、飛騨は1585年に豊臣秀吉のためにこの国を平定した金森長近に与えられ、長近は高山の城下町を築いた。1692年、幕府は金森氏を転封し、主として木材と鉱山のために飛騨を直轄領とした。以後176年間、飛騨は高山陣屋に置かれた代官・郡代によって治められた。陣屋はいま、この種の建物として日本で唯一現存するものである。常駐する大名がいないことは富を商家に集め、その家々と祭屋台、大工や塗師への庇護が、高山の古い町並みを形づくっている。",
          zh:"戰國亂世之後，飛驒封給了金森長近——他在 1585 年為豐臣秀吉平定此國，並建立了高山的城下町。1692 年，幕府將金森氏轉封他處，把飛驒收為直轄領地，主要是為了它的木材與礦山。此後 176 年間，飛驒由駐在高山陣屋的代官（後為郡代）治理；高山陣屋是日本同類建築中唯一現存者。沒有常駐的大名，使財富集中於商家；正是這些商家的宅邸、祭典屋台，以及他們對木匠與漆匠的贊助，構成了高山的老街。" } }
      ]
    },

    { t:"section", id:"joined",
      title:{ en:"How they were joined", ja:"どのように一つになったか", zh:"兩國如何合而為一" }, jp:"廃藩置県",
      body:[
        { t:"steps", items:[
          { n:"1868", title:{en:"Hida becomes a prefecture of its own",ja:"飛騨、単独の県となる",zh:"飛驒自成一縣"}, jp:"飛騨県 · 高山県",
            text:{en:"With the fall of the shogunate, the Takayama Jinya passes to the new government; Hida is organised briefly as Hida Prefecture and then Takayama Prefecture.",ja:"幕府の瓦解とともに高山陣屋は新政府に引き継がれ、飛騨は短期間、飛騨県、ついで高山県となる。",zh:"幕府瓦解後，高山陣屋移交新政府；飛驒短暫設為飛驒縣，隨後改稱高山縣。"} },
          { n:"1871", title:{en:"Gifu Prefecture; Chikuma Prefecture",ja:"岐阜県と筑摩県",zh:"岐阜縣與筑摩縣"}, jp:"廃藩置県",
            text:{en:"After the abolition of the domains, Kasamatsu Prefecture and the prefectures made from the Mino domains — Ōgaki, Kanō, Gujō, Iwamura, Naegi, Takatomi, Nomura, Imao and others — are merged as Gifu Prefecture on 22 November (lunar). Hida goes the other way: it is joined to southern Shinano as Chikuma Prefecture, governed from Matsumoto.",ja:"廃藩置県ののち、11月22日（旧暦）に笠松県と、美濃の諸藩から生まれた大垣・加納・郡上・岩村・苗木・高富・野村・今尾などの県が統合されて岐阜県となる。飛騨は別の道をたどり、信濃南部とともに松本に庁を置く筑摩県となる。",zh:"廢藩置縣後，11 月 22 日（舊曆）笠松縣與由美濃諸藩改設的大垣、加納、郡上、岩村、苗木、高富、野村、今尾等縣合併為岐阜縣。飛驒則走上另一條路：與信濃南部合為筑摩縣，縣廳設於松本。"} },
          { n:"1876", title:{en:"Hida joins Gifu",ja:"飛騨、岐阜県へ",zh:"飛驒併入岐阜縣"}, jp:"第二次府県統合",
            text:{en:"In the second nationwide consolidation, Chikuma Prefecture — whose office in Matsumoto had burned that summer — is abolished. On 21 August its Shinano districts go to Nagano and the three Hida districts to Gifu, giving the prefecture roughly its present shape.",ja:"全国的な第二次の府県統合で、その夏に松本の県庁が焼失していた筑摩県が廃止される。8月21日、信濃の諸郡は長野県へ、飛騨三郡は岐阜県へ移り、県はほぼ現在の形となる。",zh:"在全國第二次府縣整併中，縣廳於當年夏天在松本焚毀的筑摩縣遭到廢止。8 月 21 日，其信濃各郡劃歸長野縣，飛驒三郡劃歸岐阜縣，本縣大致成為今日的形狀。"} },
          { n:"2005", title:{en:"Magome crosses the border",ja:"馬籠、県境を越える",zh:"馬籠越過縣界"}, jp:"越県合併",
            text:{en:"The Nakasendō post town of Magome, historically in Shinano, is transferred from Nagano to Gifu when the village of Yamaguchi merges into Nakatsugawa — one of the few prefectural boundary changes of the post-war period.",ja:"歴史的には信濃に属した中山道の宿場・馬籠が、山口村の中津川市への編入により長野県から岐阜県へ移る。戦後では数少ない県境の変更である。",zh:"歷史上屬於信濃的中山道宿場馬籠，隨山口村併入中津川市，由長野縣改屬岐阜縣——這是戰後少數幾次縣界變更之一。"} }
        ] },
        { t:"note", label:{en:"Two personalities",ja:"二つの気質",zh:"兩種性格"}, text:{
          en:"People in the prefecture still say “Mino” and “Hida” more naturally than “Gifu” when they mean where someone is from, and the two halves keep separate weather forecasts, sake associations and dialects. The rest of this book follows that habit and names the half wherever it matters.",
          ja:"県の人々は、出身を言うとき、いまも「岐阜」より「美濃」「飛騨」と言うほうが自然で、両者は天気予報も酒造組合も方言も別々である。本書もこの習いに従い、意味のあるところでは必ずどちらの側かを記す。",
          zh:"縣民談到某人的出身時，至今仍更自然地說「美濃」或「飛驒」，而非「岐阜」；兩地的天氣預報、酒造組合與方言也各自分開。本書也依循這個習慣，凡有意義之處都會註明是哪一邊。" } }
      ]
    },

    { t:"related", items:[
      { href:"ancient.html", why:{ en:"How the two provinces began.", ja:"二つの国の始まり。", zh:"兩國的起源。" } },
      { href:"edo.html", why:{ en:"Domains, intendants and the Owari forests.", ja:"藩と代官と尾張藩の森。", zh:"諸藩、代官與尾張藩之森。" } },
      { href:"takumi.html", why:{ en:"The tax that was paid in carpenters.", ja:"大工で納めた税。", zh:"以木匠繳納的稅。" } },
      { href:"regions.html", why:{ en:"The five regions of the modern prefecture.", ja:"現代の県の五つの圏域。", zh:"現代本縣的五大圈域。" } }
    ] }
  ]
};
