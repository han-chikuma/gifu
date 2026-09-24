/* =============================================================
   THE SPIRIT OF GIFU — Culture
   Page modules, concatenated. Each page is one
   GIFU.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ----------------------------------------------- festivals */
GIFU.pages["festivals"] = {
  kicker: { en: "Culture · 01", ja: "文化 · 01", zh: "文化 · 01" },
  title:  { en: "Festivals & Floats", ja: "祭りと屋台", zh: "祭典與屋台" },
  jp: "高山祭 · 古川祭 · 大垣祭 · 郡上おどり",
  lede: {
    en: "Gifu has an unusually large share of Japan's festivals on UNESCO's intangible heritage list: three of the thirty-three float festivals inscribed in 2016 — Takayama, Furukawa and Ōgaki — and two of the forty-one <em>furyū</em> dances inscribed in 2022, among them the Gujō Odori. They are the most public form the prefecture's crafts take. A Takayama float is carpentry, carving, lacquer, metalwork, textile and clockwork at once, maintained by a neighbourhood for two centuries; a night of the Gujō Odori is thousands of people dancing the same ten dances until dawn.",
    ja: "ユネスコ無形文化遺産に記載された日本の祭りのうち、岐阜県のものが占める割合は際立って大きい。2016年に記載された三十三の「山・鉾・屋台行事」のうち高山・古川・大垣の三件、そして2022年に記載された四十一の「風流踊」のうち郡上おどりを含む二件。祭りは県の工芸がとる最も公の姿である。高山の屋台一台は、大工・彫刻・漆・金工・染織・からくりが一つになったもので、二百年にわたり一つの町内に守られてきた。郡上おどりの一夜は、何千人もが同じ十曲を夜明けまで踊り続けることである。",
    zh: "在列入聯合國教科文組織非物質文化遺產的日本祭典中，岐阜縣所占的比例格外高：2016 年登錄的三十三項「山、鉾、屋台行事」中的高山、古川、大垣三項，以及 2022 年登錄的四十一項「風流踊」中包括郡上舞在內的兩項。祭典是本縣工藝最公開的展現形式。一台高山屋台同時是木作、雕刻、漆藝、金工、染織與機關人偶，由一個町內守護了兩百年；郡上舞的一夜，則是數千人把同樣的十支舞跳到天明。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"A Takayama festival float (yatai), schematic elevation. Most have three tiers on a wheeled base, under a gabled or flat roof; the upper tier may carry mechanical puppets (karakuri) worked by strings from inside. The panels, brackets and fittings are the work of different trades. Proportions indicative only; each float differs.",
        ja:"高山祭の屋台（模式的な立面図）。多くは車輪のついた台の上に三層を重ね、屋根をかける。上段にはからくり人形を載せ、内側から糸で操る屋台もある。彫刻・飾り金具・幕などはそれぞれ別の職人の仕事である。比率は目安で、屋台ごとに異なる。",
        zh:"高山祭屋台（示意立面圖）。大多在帶輪的底座上疊起三層，覆以屋頂；上層可能載有由內部以繩線操縱的機關人偶（からくり）。雕板、斗栱與飾件出自不同的匠人之手。比例僅供參考，各台皆不相同。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 380" role="img" aria-label="Elevation of a Takayama festival float">' +
          '<rect x="0.5" y="0.5" width="759" height="379" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"A FESTIVAL FLOAT", ja:"祭屋台", zh:"祭典屋台" }) + '</text>';
        /* float body */
        s += '<path d="M230 78 L380 56 L530 78 Z" fill="#E7DFD2" stroke="#201E1B" stroke-width="1.2"/>' +
             '<rect x="246" y="78" width="268" height="12" fill="#EADCC1" stroke="#201E1B"/>' +
             '<rect x="262" y="90" width="236" height="70" fill="#FBFAF7" stroke="#201E1B"/>' +
             '<circle cx="350" cy="126" r="10" fill="#EEE1DF" stroke="#55504A"/><rect x="343" y="136" width="14" height="18" fill="#EEE1DF" stroke="#55504A"/>' +
             '<circle cx="410" cy="120" r="8" fill="#E6E2EC" stroke="#55504A"/><rect x="404" y="128" width="12" height="16" fill="#E6E2EC" stroke="#55504A"/>' +
             '<rect x="250" y="160" width="260" height="12" fill="#EADCC1" stroke="#201E1B"/>' +
             '<rect x="270" y="172" width="220" height="70" fill="#EDE5D2" stroke="#201E1B"/>' +
             '<path d="M270 190 H490 M270 224 H490" stroke="#B4AC9C"/>' +
             '<rect x="254" y="242" width="252" height="12" fill="#EADCC1" stroke="#201E1B"/>' +
             '<rect x="262" y="254" width="236" height="60" fill="#EEE1DF" stroke="#201E1B"/>' +
             '<path d="M262 254 C300 276 340 262 380 280 C420 262 460 276 498 254" fill="none" stroke="#7C6B52"/>' +
             '<circle cx="290" cy="330" r="22" fill="#FBFAF7" stroke="#201E1B" stroke-width="1.4"/><circle cx="470" cy="330" r="22" fill="#FBFAF7" stroke="#201E1B" stroke-width="1.4"/>' +
             '<circle cx="290" cy="330" r="4" fill="#201E1B"/><circle cx="470" cy="330" r="4" fill="#201E1B"/>' +
             '<line x1="210" y1="352" x2="550" y2="352" stroke="#B4AC9C"/>';
        var lab = [
          [228, 70, {en:"roof — carpentry, lacquer, metal fittings",ja:"屋根——大工・漆・飾り金具",zh:"屋頂——木作、漆、飾件"}, "end"],
          [228, 126, {en:"upper tier — karakuri puppets",ja:"上段——からくり人形",zh:"上層——機關人偶"}, "end"],
          [228, 206, {en:"middle tier — carved panels",ja:"中段——彫刻",zh:"中層——雕板"}, "end"],
          [228, 284, {en:"lower tier — embroidered hangings",ja:"下段——見送り・幕",zh:"下層——刺繡垂幕"}, "end"],
          [532, 330, {en:"wheels — pulled by the neighbourhood",ja:"車輪——町内の人々が曳く",zh:"車輪——由町內居民拉動"}, "start"]
        ];
        lab.forEach(function (a) {
          s += '<text x="' + a[0] + '" y="' + a[1] + '" text-anchor="' + a[3] + '" ' + F + ' font-size="10.5" fill="#201E1B">' + L(a[2]) + '</text>';
        });
        s += '<path d="M232 70 L246 76" stroke="#B4AC9C"/><path d="M232 122 L262 122" stroke="#B4AC9C"/><path d="M232 202 L270 202" stroke="#B4AC9C"/><path d="M232 280 L262 280" stroke="#B4AC9C"/><path d="M528 326 L492 328" stroke="#B4AC9C"/>' +
             '<text x="30" y="370" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — proportions indicative; each float differs.",ja:"模式図——比率は目安。屋台ごとに異なる。",zh:"示意圖——比例僅供參考，各台不同。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"three",
      title:{ en:"Three float festivals on the UNESCO list", ja:"ユネスコに記載された三つの屋台行事", zh:"列入教科文組織名錄的三項屋台行事" }, jp:"山・鉾・屋台行事",
      body:[
        { t:"table",
          caption:{en:"Inscribed 2016 as part of “Yama, Hoko, Yatai, float festivals in Japan”",ja:"2016年「山・鉾・屋台行事」の一部として記載",zh:"2016 年作為「山、鉾、屋台行事」的一部分登錄"},
          cols:[{en:"Festival",ja:"祭り",zh:"祭典"},{en:"When",ja:"時期",zh:"時間"},{en:"Shrine",ja:"神社",zh:"神社"},{en:"Floats",ja:"屋台",zh:"屋台"},{en:"Known for",ja:"見どころ",zh:"看點"}],
          rows:[
            [{en:"Takayama, spring (Sannō)",ja:"高山祭（春・山王祭）",zh:"高山祭（春・山王祭）"},{en:"14–15 April",ja:"4月14〜15日",zh:"4 月 14–15 日"},{en:"Hie Jinja",ja:"日枝神社",zh:"日枝神社"},"12",{en:"Karakuri performances, night floats hung with lanterns",ja:"からくり奉納、提灯をともした夜祭",zh:"機關人偶表演、掛滿燈籠的夜祭"}],
            [{en:"Takayama, autumn (Hachiman)",ja:"高山祭（秋・八幡祭）",zh:"高山祭（秋・八幡祭）"},{en:"9–10 October",ja:"10月9〜10日",zh:"10 月 9–10 日"},{en:"Sakurayama Hachimangū",ja:"櫻山八幡宮",zh:"櫻山八幡宮"},"11",{en:"The float procession through the old town",ja:"古い町並みを行く屋台の曳き廻し",zh:"屋台行經老街的巡行"}],
            [{en:"Furukawa",ja:"古川祭",zh:"古川祭"},{en:"19–20 April",ja:"4月19〜20日",zh:"4 月 19–20 日"},{en:"Keta Wakamiya Jinja",ja:"気多若宮神社",zh:"氣多若宮神社"},"9",{en:"The okoshi-daiko, the “waking drum”, at night",ja:"夜の起し太鼓",zh:"夜間的「起太鼓」"}],
            [{en:"Ōgaki",ja:"大垣祭",zh:"大垣祭"},{en:"Weekend nearest 15 May",ja:"5月15日に近い土日",zh:"最接近 5 月 15 日的週末"},{en:"Ōgaki Hachiman Jinja",ja:"大垣八幡神社",zh:"大垣八幡神社"},"13",{en:"Puppet and dance offerings; lanterns lit together at night",ja:"からくりと踊りの奉芸、夜の一斉点灯",zh:"機關人偶與舞蹈奉納、夜間同時點燈"}]
          ] },
        { t:"p", text:{
          en:"The Takayama festivals are the oldest and most elaborate. The floats were built mostly in the eighteenth and nineteenth centuries by the town's own carpenters, carvers, lacquerers and metalworkers, paid for by the merchant neighbourhoods that own them; each neighbourhood keeps its float in a tall, narrow storehouse, a <em>yatai-gura</em>, that can still be seen standing among the houses. Twenty-three floats, the spring and autumn sets together, are Important Tangible Folk Cultural Properties. Takayama is counted with the Gion festival of Kyoto and the night festival of Chichibu as one of Japan's three most beautiful festivals.",
          ja:"高山祭は最も古く、最も手の込んだものである。屋台の多くは十八・十九世紀に町の大工・彫刻師・塗師・金工によって造られ、それを所有する商人の町内が費用を出した。各町内は屋台を背の高い細長い蔵——屋台蔵——に納め、家並みのあいだにいまもその姿を見ることができる。春と秋あわせて二十三台の屋台が国の重要有形民俗文化財である。高山祭は、京都の祇園祭、秩父の夜祭とともに日本三大美祭に数えられる。",
          zh:"高山祭歷史最悠久，也最為繁複。屋台多造於十八、十九世紀，出自當地的木匠、雕刻師、漆匠與金工之手，由擁有它們的商人町內出資；各町內把屋台收在高而窄的倉庫——屋台藏——之中，至今仍可在街屋之間看見。春秋兩季合計二十三台屋台，均為國家重要有形民俗文化財。高山祭與京都祇園祭、秩父夜祭並稱日本三大美祭。" } },
        { t:"p", text:{
          en:"<strong>Furukawa</strong>, in the next basin north, is the rough counterpart. On the night of 19 April a great drum is carried through the town on a scaffold with two men astride it, while teams with smaller drums try to fight their way in and attach themselves to it — the <em>okoshi-daiko</em>. The next day its nine floats process in daylight. <strong>Ōgaki</strong>'s festival dates from 1648, when the lord Toda Ujikane rebuilt the Hachiman shrine and the ten townships of the castle town made a float each; the third lord added three more in 1679.",
          ja:"北隣の盆地の<strong>古川祭</strong>は、その荒々しい対になる。4月19日の夜、二人の男がまたがる大太鼓を櫓に載せて町を練り、小さな太鼓を持った組が割って入り、それに付けようと競り合う——起し太鼓である。翌日、九台の屋台が昼の町を行く。<strong>大垣祭</strong>は、1648年（慶安元年）に藩主・戸田氏鉄が八幡神社を再建し、城下十か町がそれぞれ軕を造ったことに始まり、1679年に三代藩主がさらに三両を加えた。",
          zh:"北邊鄰近盆地的<strong>古川祭</strong>，是其粗獷的對照。4 月 19 日夜，一面大鼓架在木架上、由兩名男子跨坐其上在鎮中穿行，而扛著小鼓的隊伍則奮力擠入，想把小鼓附掛上去——這就是「起太鼓」。次日，九台屋台在白晝中巡行。<strong>大垣祭</strong>始於 1648 年（慶安元年）：藩主戶田氏鐵重建八幡神社，城下十個町各造一台山車；1679 年第三代藩主又增添了三台。" } }
      ]
    },

    { t:"section", id:"gujo",
      title:{ en:"Gujō Odori: thirty nights of dancing", ja:"郡上おどり——三十夜の踊り", zh:"郡上舞：三十夜的舞蹈" }, jp:"郡上おどり · 風流踊",
      body:[
        { t:"p", text:{
          en:"From mid-July to early September the castle town of Gujō-Hachiman dances on more than thirty nights — the longest-running summer dance season in Japan. On the four nights of the Bon festival, 13 to 16 August, the <em>tetsuya odori</em> goes on until dawn. There are ten dances, among them <em>Kawasaki</em> and <em>Harukoma</em>, sung and played from a moving float, and anyone may join the circle; dancers judged good by the preservation society are given a certificate. Tradition gives two origins: the Kawasaki song brought from Ise in the 1580s, and encouragement by the lords of Gujō — Endō Yoshitaka in the early seventeenth century, or the Aoyama after the uprising of the 1750s — as a way of reconciling the town. The dance is a national Important Intangible Folk Cultural Property and, with the Kanzu no Kake-odori of the Meihō district of Gujō, part of the <em>Furyū-odori</em> inscribed by UNESCO in 2022.",
          ja:"七月中旬から九月上旬まで、城下町・郡上八幡は三十夜以上にわたって踊る。日本で最も長い夏の踊りの季節である。盆の四夜、8月13日から16日は、夜明けまで踊る「徹夜おどり」となる。踊りは「かわさき」「春駒」をはじめとする十曲で、動く屋形から唄と囃子が送られ、誰でも輪に加わることができる。保存会が上手と認めた踊り手には免許状が与えられる。起源について伝承は二つを語る。1580年代に伊勢から伝わった川崎音頭と、城下の融和のための郡上の領主による奨励——十七世紀初めの遠藤慶隆とも、1750年代の一揆のあとの青山氏ともいう——である。郡上踊は国の重要無形民俗文化財であり、郡上市明宝の寒水の掛踊とともに、2022年にユネスコに記載された「風流踊」の一部である。",
          zh:"從七月中旬到九月上旬，城下町郡上八幡在三十多個夜晚起舞——日本最長的夏季舞蹈季。盂蘭盆節的四夜，即 8 月 13 至 16 日，是跳到天亮的「徹夜舞」。舞蹈共十支，包括「川崎」與「春駒」，由移動的屋形傳出歌聲與伴奏，任何人都可以加入舞圈；被保存會認定跳得好的舞者會獲頒證書。傳說中的起源有二：1580 年代從伊勢傳入的川崎音頭，以及郡上領主為促進城下和諧而加以鼓勵——或說是十七世紀初的遠藤慶隆，或說是 1750 年代一揆之後的青山氏。郡上舞是國家重要無形民俗文化財，並與郡上市明寶的「寒水掛踊」一同，屬於 2022 年列入教科文組織名錄的「風流踊」。" } }
      ]
    },

    { t:"section", id:"year",
      title:{ en:"A festival year", ja:"祭りの一年", zh:"祭典的一年" }, jp:"年中行事",
      body:[
        { t:"table",
          cols:[{en:"When",ja:"時期",zh:"時間"},{en:"Festival",ja:"祭り",zh:"祭典"},{en:"Where",ja:"場所",zh:"地點"},{en:"What happens",ja:"内容",zh:"內容"}],
          rows:[
            [{en:"6 January",ja:"1月6日",zh:"1 月 6 日"},{en:"Nagataki Ennen",ja:"長滝の延年",zh:"長瀧延年"},{en:"Nagataki Hakusan Jinja, Gujō",ja:"郡上市・長滝白山神社",zh:"郡上市・長瀧白山神社"},{en:"Medieval temple performances, ending with a scramble for paper-flower hats hung from the ceiling",ja:"中世の寺院芸能。最後に天井から吊るした花笠を奪い合う",zh:"中世寺院藝能，最後爭奪從天花板垂吊的紙花笠"}],
            [{en:"April",ja:"4月",zh:"4 月"},{en:"Takayama (spring), Furukawa",ja:"高山祭（春）・古川祭",zh:"高山祭（春）・古川祭"},{en:"Hida",ja:"飛騨",zh:"飛驒"},{en:"Floats and the waking drum",ja:"屋台と起し太鼓",zh:"屋台與起太鼓"}],
            [{en:"May",ja:"5月",zh:"5 月"},{en:"Ōgaki Matsuri",ja:"大垣祭",zh:"大垣祭"},{en:"Ōgaki",ja:"大垣市",zh:"大垣市"},{en:"Thirteen floats",ja:"十三両の軕",zh:"十三台山車"}],
            [{en:"11 May – 15 October",ja:"5月11日〜10月15日",zh:"5 月 11 日至 10 月 15 日"},{en:"Cormorant fishing",ja:"鵜飼",zh:"鵜飼"},{en:"Gifu city; Oze, Seki",ja:"岐阜市・関市小瀬",zh:"岐阜市・關市小瀨"},{en:"Nightly, except at full harvest moon and high water",ja:"毎夜。中秋の名月と増水時を除く",zh:"每夜舉行，中秋名月與漲水時除外"}],
            [{en:"Mid-July – early September",ja:"7月中旬〜9月上旬",zh:"7 月中旬至 9 月上旬"},{en:"Gujō Odori",ja:"郡上おどり",zh:"郡上舞"},{en:"Gujō-Hachiman",ja:"郡上八幡",zh:"郡上八幡"},{en:"Thirty-plus nights; all night 13–16 August",ja:"三十夜以上。8月13〜16日は徹夜",zh:"三十多夜；8 月 13–16 日通宵"}],
            [{en:"October",ja:"10月",zh:"10 月"},{en:"Takayama (autumn); Seki cutlery festival; Mino washi lantern exhibition",ja:"高山祭（秋）・関刃物まつり・美濃和紙あかりアート展",zh:"高山祭（秋）・關刀具祭・美濃和紙燈光藝術展"},{en:"Takayama; Seki; Mino",ja:"高山・関・美濃",zh:"高山・關・美濃"},{en:"Floats; blade markets and sword-forging demonstrations; paper lanterns along the udatsu street",ja:"屋台、刃物市と古式鍛錬、うだつの町並みに並ぶ和紙のあかり",zh:"屋台；刀具市集與古式鍛刀示範；卯建街道上的和紙燈"}],
            [{en:"October",ja:"10月",zh:"10 月"},{en:"Doburoku festivals",ja:"どぶろく祭",zh:"濁酒祭"},{en:"Shirakawa-gō",ja:"白川郷",zh:"白川鄉"},{en:"Shrine-brewed unfiltered sake served to all comers — see <a href=\"doburoku.html\">Doburoku</a>",ja:"神社で醸した濁り酒を誰にでも振る舞う。<a href=\"doburoku.html\">どぶろく</a>の頁を参照",zh:"以神社釀造的濁酒招待所有來客——見<a href=\"doburoku.html\">濁酒</a>頁"}]
          ] },
        { t:"note", label:{en:"Dates",ja:"日程",zh:"日期"}, text:{
          en:"Fixed dates are the traditional ones. Weekend-based festivals move from year to year, and all are cancelled or reduced in bad weather; check the organisers' announcements for the current year.",
          ja:"固定の日付は伝統的なものである。週末に合わせる祭りは年ごとに動き、どの祭りも悪天候で中止・縮小されることがある。その年の日程は主催者の告知で確かめられたい。",
          zh:"固定日期為傳統日期。配合週末的祭典每年日期不同，且任何祭典都可能因天候不佳而取消或縮小；當年日期請以主辦單位公告為準。" } }
      ]
    },

    { t:"related", items:[
      { href:"takumi.html", why:{ en:"The carpenters who built the floats.", ja:"屋台を造った大工たち。", zh:"建造屋台的木匠。" } },
      { href:"towns.html", why:{ en:"The streets the floats are pulled through.", ja:"屋台が曳かれる通り。", zh:"屋台行經的街道。" } },
      { href:"carving.html", why:{ en:"The carvers and lacquerers of Hida.", ja:"飛騨の彫師と塗師。", zh:"飛驒的雕刻師與漆匠。" } },
      { href:"ukai.html", why:{ en:"The summer's other nightly ritual.", ja:"夏のもう一つの夜の儀礼。", zh:"夏季的另一項夜間儀式。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- ukai */
GIFU.pages["ukai"] = {
  kicker: { en: "Culture · 02", ja: "文化 · 02", zh: "文化 · 02" },
  title:  { en: "Cormorant Fishing", ja: "鵜飼", zh: "鵜飼" },
  jp: "ぎふ長良川の鵜飼 · 小瀬鵜飼 · 宮内庁式部職鵜匠",
  lede: {
    en: "On summer nights on the Nagara, boats come down the river with iron baskets of burning pine hanging from their bows, and in the firelight trained cormorants dive for ayu. The fishery is at least thirteen centuries old, has been patronised by rulers since the Middle Ages, and is today conducted by nine fishermen who hold posts in the Imperial Household Agency. It is the Nagara's most famous sight, the reason for the river's agricultural-heritage designation, and a working fishery that still sends its catch to the Imperial Palace.",
    ja: "夏の夜の長良川を、舳先に松明を燃やす鉄の篝をさげた舟が下ってくる。その火明かりのなかで、訓練された鵜が鮎を追って潜る。この漁は少なくとも千三百年の歴史を持ち、中世以来支配者の庇護を受け、いまは宮内庁の職を持つ九人の漁師によって行われている。長良川で最も名高い眺めであり、川が世界農業遺産に選ばれた理由であり、いまも獲物を皇居へ納める現役の漁である。",
    zh: "夏夜的長良川上，一艘艘小船順流而下，船首吊著燃燒松木的鐵製篝籃，受過訓練的鸕鶿在火光中潛水捕捉香魚。這種漁法至少已有一千三百年歷史，自中世起便受歷代統治者庇護，如今由九位在宮內廳任職的漁夫執行。它是長良川最著名的景致，是這條河獲選世界農業遺產的理由，也是一項至今仍把漁獲送進皇居的現役漁業。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"A cormorant boat at work, schematic. The ushō, the cormorant master, stands near the bow beside the fire basket and works ten to twelve birds on leashes; a ring at the base of each bird's neck stops it swallowing larger fish. Two boatmen — the <em>nakanori</em> amidships and the <em>tomonori</em> at the stern — steer and drive the fish with their poles and by knocking on the hull.",
        ja:"漁をする鵜舟（模式図）。鵜匠は舳先近く、篝のそばに立ち、手縄で十〜十二羽の鵜を操る。鵜の首の付け根に結んだ首結が、大きな魚を飲み込ませない。二人の船頭——舟の中ほどの中乗り、艫の艫乗り——が舟を操り、竿や舟べりを叩く音で魚を追う。",
        zh:"作業中的鵜舟（示意圖）。鵜匠站在船首附近的篝籃旁，以繩牽引十到十二隻鸕鶿；每隻鳥頸根部繫著的「首結」，使牠無法吞下較大的魚。兩名船夫——船中的「中乘」與船尾的「艫乘」——負責操船，並以篙與敲擊船舷的聲響驅趕魚群。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 320" role="img" aria-label="A cormorant fishing boat and its crew">' +
          '<rect x="0.5" y="0.5" width="759" height="319" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"THE CORMORANT BOAT", ja:"鵜舟", zh:"鵜舟" }) + '</text>';
        /* water */
        s += '<rect x="30" y="206" width="700" height="80" fill="#E0E7E9" stroke="none"/>' +
             '<path d="M30 206 H730" stroke="#8FA6AE" stroke-width="1.2"/>';
        /* hull */
        s += '<path d="M150 196 L610 196 L660 170 L640 214 L170 222 Z" fill="#E7DFD2" stroke="#201E1B" stroke-width="1.3"/>';
        /* fire basket on pole at bow (right) */
        s += '<path d="M600 196 L660 110" stroke="#55504A" stroke-width="2"/>' +
             '<path d="M648 112 L676 112 L670 136 L654 136 Z" fill="#EADCC1" stroke="#201E1B"/>' +
             '<path d="M656 112 C654 100 662 96 660 86 C668 94 672 102 668 112" fill="#EEE1DF" stroke="#7C6B52"/>' +
             '<text x="664" y="72" text-anchor="middle" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"kagari — fire basket",ja:"篝",zh:"篝籃"}) + '</text>';
        /* usho */
        s += '<circle cx="572" cy="140" r="9" fill="#55504A"/><path d="M566 150 L562 184 L584 184 L578 150 Z" fill="#55504A"/>' +
             '<path d="M562 170 L586 170 L590 194 L558 194 Z" fill="#EADCC1" stroke="#7C6B52"/>' +
             '<text x="450" y="106" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L({en:"ushō",ja:"鵜匠",zh:"鵜匠"}) + '</text>' +
             '<text x="450" y="121" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"head-cloth, dark robe, straw skirt",ja:"風折烏帽子・紺の装束・腰蓑",zh:"風折烏帽子・深藍衣・草裙"}) + '</text>';
        /* leashes and birds */
        var birds = [[520,250],[560,262],[600,248],[640,266],[680,252],[496,272]];
        birds.forEach(function (b) {
          s += '<path d="M576 164 C' + (b[0] + 10) + ' 210 ' + b[0] + ' 230 ' + b[0] + ' ' + (b[1] - 8) + '" fill="none" stroke="#8B857C" stroke-width="0.8"/>' +
               '<ellipse cx="' + b[0] + '" cy="' + b[1] + '" rx="12" ry="5" fill="#201E1B"/><circle cx="' + (b[0] + 12) + '" cy="' + (b[1] - 5) + '" r="3.5" fill="#201E1B"/>';
        });
        s += '<text x="420" y="302" ' + F + ' font-size="10" fill="#201E1B">' + L({en:"10–12 cormorants on leashes (tenawa), neck rings (kubiyui)",ja:"手縄につないだ10〜12羽の鵜・首結",zh:"以手繩牽引的 10–12 隻鸕鶿・首結"}) + '</text>';
        /* crew */
        s += '<circle cx="380" cy="150" r="8" fill="#8B857C"/><path d="M374 158 L372 194 L390 194 L386 158 Z" fill="#8B857C"/><path d="M360 120 L400 230" stroke="#8B857C" stroke-width="1.5"/>' +
             '<text x="340" y="112" ' + F + ' font-size="10.5" fill="#201E1B">' + L({en:"nakanori",ja:"中乗り",zh:"中乘"}) + '</text>' +
             '<circle cx="200" cy="150" r="8" fill="#8B857C"/><path d="M194 158 L192 194 L210 194 L206 158 Z" fill="#8B857C"/><path d="M180 116 L226 236" stroke="#8B857C" stroke-width="1.5"/>' +
             '<text x="160" y="108" ' + F + ' font-size="10.5" fill="#201E1B">' + L({en:"tomonori (stern)",ja:"艫乗り（艫）",zh:"艫乘（船尾）"}) + '</text>' +
             '<text x="44" y="276" ' + F + ' font-size="9.5" fill="#5E7780">' + L({en:"downstream is to the right →",ja:"下流は右 →",zh:"下游在右 →"}) + '</text>' +
             '<text x="30" y="312" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC",ja:"模式図",zh:"示意圖"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"history",
      title:{ en:"Thirteen centuries", ja:"千三百年", zh:"一千三百年" }, jp:"歴史",
      body:[
        { t:"p", text:{
          en:"The claim to thirteen hundred years rests on a name. Among the Mino household registers of 702 preserved in the Shōsōin is a woman called <em>Ukaibe no Metsurame</em> — “of the cormorant-keepers' group” — which implies that cormorant fishing was an organised occupation in Mino by then. Through the medieval period the fishery was patronised by the lords of Mino; the tradition in Gifu is that Oda Nobunaga gave the fishermen the title <em>ushō</em>, cormorant master, and used the spectacle to entertain his guests, and that the Tokugawa shoguns received Nagara ayu as tribute. After 1890 the fishermen were given posts in the imperial household, and since then the six masters of the Nagara at Gifu and the three at Oze in Seki have held the formal title of <strong>cormorant masters of the Board of Ceremonies of the Imperial Household Agency</strong> — the only people in Japan who do.",
          ja:"千三百年という主張は、一つの名に拠っている。正倉院に伝わる702年の御野国戸籍に「鵜養部目都良売」という女性の名があり、この時代すでに美濃で鵜飼が組織だった生業であったことを示している。中世を通じて鵜飼は美濃の領主の庇護を受けた。岐阜の言い伝えでは、織田信長が漁師に「鵜匠」の名を与え、客をもてなすためにこれを見せ、徳川の将軍は長良川の鮎を献上させた。1890年以後、鵜匠は皇室の職を与えられ、以来、岐阜の長良川の六人と関市小瀬の三人の鵜匠が「宮内庁式部職鵜匠」の正式な職名を持つ。日本でこの職名を持つのは彼らだけである。",
          zh:"一千三百年的說法，源於一個名字。正倉院所藏 702 年御野國戶籍中，有一名女子叫「鵜養部目都良賣」——意即「屬於飼鸕鶿者之部」——顯示當時美濃已有組織化的鵜飼職業。整個中世，鵜飼都受美濃領主的庇護；岐阜的傳統說法是，織田信長授予漁夫「鵜匠」之稱，並以此款待賓客，德川將軍則收受長良川的香魚為貢品。1890 年後，漁夫獲授皇室職位；此後，岐阜長良川的六位鵜匠與關市小瀨的三位鵜匠，擁有「宮內廳式部職鵜匠」的正式職銜——全日本只有他們擁有這個職銜。" } },
        { t:"quote",
          text:{ en:"Delightful, and then, before long, so sad — the cormorant boats.",
                 ja:"おもしろうてやがて悲しき鵜舟かな",
                 zh:"有趣繼而悲，鵜舟燈火夜。" },
          cite:{ en:"Matsuo Bashō, at Gifu, 1688", ja:"松尾芭蕉、岐阜にて、1688年", zh:"松尾芭蕉，於岐阜，1688 年" } },
        { t:"p", text:{
          en:"Bashō's haiku, written on a visit in the summer of 1688, borrows from the Nō play <em>Ukai</em>, in which the ghost of a cormorant fisherman relives the pleasure and the guilt of his trade; it catches the mood of the thing better than any description. Charlie Chaplin watched the fishing on visits in 1936 and 1961 and is quoted as calling it one of the finest things Japan had to show.",
          ja:"1688年夏の訪問で詠まれた芭蕉の句は、鵜使いの亡霊がその生業の楽しさと罪深さを追体験する謡曲『鵜飼』を踏まえており、どんな描写よりもこの漁の気分をよくとらえている。チャールズ・チャップリンは1936年と1961年の訪問でこれを見物し、日本が見せうる最もすばらしいものの一つと語ったと伝えられる。",
          zh:"芭蕉這首俳句寫於 1688 年夏天的造訪，化用了能劇《鵜飼》——劇中一名鵜飼漁夫的亡魂，重溫其營生的樂趣與罪孽——比任何描述都更能捕捉此情此景。查理・卓別林曾在 1936 年與 1961 年兩度來訪觀賞，據說他稱之為日本所能展示的最美好事物之一。" } }
      ]
    },

    { t:"section", id:"how",
      title:{ en:"How the fishing works", ja:"漁のしくみ", zh:"捕魚的原理" }, jp:"鵜 · 手縄 · 首結",
      body:[
        { t:"steps", items:[
          { title:{en:"The birds",ja:"鵜",zh:"鸕鶿"}, jp:"海鵜",
            text:{en:"The birds are wild Japanese cormorants (umi-u), a sea cormorant larger than the river species, caught on the Pacific coast and trained over years. Each master keeps a flock of about twenty in bamboo baskets at his house, and each bird is handled daily; the relationship between master and bird is the core of the craft.",ja:"鵜は野生の海鵜で、川の鵜より大きい海の鵜を太平洋岸で捕らえ、何年もかけて慣らす。鵜匠はそれぞれ二十羽ほどを家の鳥籠で飼い、毎日一羽ずつ手をかける。鵜匠と鵜の関係が、この技の核心である。",zh:"所用的鳥是野生的海鸕鶿（ウミウ），體型比河鸕鶿大，在太平洋沿岸捕獲後經數年馴養。每位鵜匠在家中以竹籠飼養約二十隻，每天逐一照料；鵜匠與鳥之間的關係，是這門技藝的核心。"} },
          { title:{en:"The fire",ja:"篝火",zh:"篝火"}, jp:"篝",
            text:{en:"Split pine burns in an iron basket hung from a pole at the bow. The light startles the ayu, which flash in the water and are easier for the birds to see and catch; it also lights the master's work for the watching boats.",ja:"割った松を舳先の竿にさげた鉄の篝で燃やす。火に驚いた鮎が水中で光り、鵜に見つけやすく捕りやすくなる。火はまた、見物の舟に鵜匠の手さばきを照らし出す。",zh:"劈開的松木在船首竿頭懸掛的鐵篝中燃燒。火光驚動香魚，使牠們在水中閃爍，更容易被鸕鶿看見與捕捉；火光也為觀賞船照亮鵜匠的手法。"} },
          { title:{en:"The leash and the neck ring",ja:"手縄と首結",zh:"手繩與首結"}, jp:"手縄 · 首結",
            text:{en:"Each bird wears a cord tied loosely at the base of its neck, the <em>kubiyui</em>: small fish pass, but larger ayu stay in the throat. The master holds the leashes of ten to twelve birds in one hand and manages them with the other, untangling and drawing each bird in to make it give up its catch.",ja:"鵜は首の付け根にゆるく結んだ紐——首結——をつける。小さな魚は通るが、大きな鮎は喉にとどまる。鵜匠は片手で十〜十二羽の手縄を持ち、もう一方の手でそれをさばいて、もつれを解きながら一羽ずつ引き寄せ、獲物を吐かせる。",zh:"每隻鳥頸根部鬆鬆地繫著一條繩，稱為「首結」：小魚可以通過，較大的香魚則留在喉中。鵜匠一手握著十到十二隻鳥的手繩，另一手加以調度，解開纏繞，並逐一把鳥拉近，使其吐出漁獲。"} },
          { title:{en:"The drive",ja:"総がらみ",zh:"總圍捕"}, jp:"総がらみ",
            text:{en:"At the end of the evening the boats line up across the river and drive downstream together, penning the fish against the shallows — the <em>sōgarami</em>, the climax that visitors wait for.",ja:"夜の終わりに、舟は川幅いっぱいに横一列に並び、そろって下流へ魚を追い込む。見物客が待ちかまえる最高潮、「総がらみ」である。",zh:"夜晚將盡時，各船橫排一列布滿河面，一同向下游驅趕魚群，把魚逼向淺灘——這就是遊客等待的高潮「總圍捕」。"} }
        ] },
        { t:"note", label:{en:"Why ayu caught this way are prized",ja:"鵜が捕った鮎が珍重されるわけ",zh:"為何鸕鶿捕的香魚特別珍貴"}, text:{
          en:"A cormorant kills its fish instantly with a single grip of the beak, so ayu caught this way are said to be unbruised and very fresh. The season's catch from eight nights of fishing on the imperial reserve — the <em>goryō ukai</em> — is sent to the Imperial Palace and to shrines.",
          ja:"鵜は一度くちばしで挟むだけで魚を瞬時に仕留めるため、鵜で捕った鮎は傷がなく鮮度がよいといわれる。御料場で行う八回の漁——御料鵜飼——の獲物は皇居や神社に納められる。",
          zh:"鸕鶿以喙一夾便瞬間殺死魚，因此以此法捕獲的香魚據說毫無瘀傷、極為新鮮。每季在御料場進行的八次捕撈——「御料鵜飼」——漁獲會送往皇居與神社。" } }
      ]
    },

    { t:"section", id:"seeing",
      title:{ en:"Seeing it", ja:"見物する", zh:"觀賞" }, jp:"観覧船",
      body:[
        { t:"grid", cols:3, cells:[
          { k:{en:"Season",ja:"期間",zh:"期間"}, v:"11 May – 15 Oct", d:{en:"Every night, except on the night of the harvest moon and when the river is high.",ja:"毎夜。ただし中秋の名月の夜と増水時は休み。",zh:"每夜舉行，中秋名月之夜與河水高漲時暫停。"} },
          { k:{en:"Where",ja:"場所",zh:"地點"}, v:{en:"Nagara · Oze",ja:"長良・小瀬",zh:"長良・小瀨"}, d:{en:"Below Kinkazan in Gifu city (six masters), and upstream at Oze in Seki (three), a quieter fishery with fewer boats.",ja:"岐阜市の金華山の下（鵜匠六人）と、上流の関市小瀬（三人）。小瀬は舟が少なく静かである。",zh:"岐阜市金華山下（六位鵜匠），以及上游的關市小瀨（三位），後者船少而較為寧靜。"} },
          { k:{en:"Protected as",ja:"指定",zh:"指定"}, v:{en:"National",ja:"国指定",zh:"國家指定"}, d:{en:"The fishing technique is an Important Intangible Folk Cultural Property (2015); 122 items of Nagara cormorant-fishing gear are an Important Tangible Folk Cultural Property.",ja:"長良川の鵜飼漁の技術は重要無形民俗文化財（2015年）、鵜飼用具一式122点は重要有形民俗文化財。",zh:"長良川鵜飼漁法為重要無形民俗文化財（2015 年）；鵜飼用具一套 122 件為重要有形民俗文化財。"} }
        ] },
        { t:"p", text:{
          en:"Most visitors watch from roofed viewing boats hired at the landing below Kinkazan, eating on board and drifting alongside the fishing boats for the <em>sōgarami</em>. The Nagaragawa Ukai Museum on the riverbank explains the fishery out of season.",
          ja:"多くの見物客は金華山下の乗り場で屋形の観覧船に乗り、舟上で食事をしながら、総がらみのときには鵜舟と並んで川を下る。川岸の長良川うかいミュージアムは、季節外にもこの漁を紹介している。",
          zh:"大多數遊客在金華山下的碼頭租用有頂棚的觀覽船，在船上用餐，並在「總圍捕」時與鵜舟並排順流而下。河岸上的長良川鵜飼博物館，在非漁季也介紹這項漁法。" } }
      ]
    },

    { t:"related", items:[
      { href:"rivers.html", why:{ en:"The river and its agricultural-heritage designation.", ja:"川と世界農業遺産。", zh:"這條河與其世界農業遺產認定。" } },
      { href:"wildlife.html", why:{ en:"The ayu and the other creatures of clear water.", ja:"鮎と清らかな水の生きもの。", zh:"香魚與清水中的其他生物。" } },
      { href:"nobunaga.html", why:{ en:"The ruler who made the fishery a spectacle for guests.", ja:"鵜飼を客へのもてなしにした領主。", zh:"把鵜飼變成待客盛事的領主。" } },
      { href:"food.html", why:{ en:"How ayu is eaten in Gifu.", ja:"岐阜での鮎の食べ方。", zh:"岐阜人如何吃香魚。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- faith */
GIFU.pages["faith"] = {
  kicker: { en: "Culture · 03", ja: "文化 · 03", zh: "文化 · 03" },
  title:  { en: "Shrines & Temples", ja: "社寺と信仰", zh: "神社、寺院與信仰" },
  jp: "南宮大社 · 谷汲山 · 岐阜大仏 · 両面宿儺",
  lede: {
    en: "Gifu's religious landscape is not dominated by one great sanctuary but made of many local ones, several of them unusual: the head shrine of the god of metals, the last temple of Japan's oldest pilgrimage route, a Great Buddha built of bamboo basketwork and scripture paper, a Pure Land hall rescued from a reservoir, and a two-faced figure that the national chronicle calls a rebel and Hida calls a founder. Many of them are also works of the crafts this book is about.",
    ja: "岐阜の信仰の風景は、一つの大きな聖地に支配されるのではなく、多くの土地の社寺から成り、そのいくつかは珍しいものである。金属の神の総本宮、日本最古の巡礼路の最後の寺、竹の籠と経文の紙で造られた大仏、ダム湖から救い出された浄土真宗の本堂、そして国の史書が逆賊と呼び、飛騨が開祖と呼ぶ二つの顔を持つ人物。その多くは、本書が扱う工芸の作品でもある。",
    zh: "岐阜的信仰地景並非由一處大聖地主導，而是由許多地方寺社組成，其中幾處頗為特別：金屬之神的總本宮、日本最古老巡禮路線的最後一座寺、以竹編籠架與經文紙張造成的大佛、從水庫中搶救出來的淨土真宗本堂，以及一位被國史稱為叛逆、卻被飛驒奉為開山祖的雙面人物。它們之中許多也是本書所談工藝的作品。"
  },
  body: [
    { t:"section", id:"shrines",
      title:{ en:"Shrines", ja:"神社", zh:"神社" }, jp:"一宮と山の社",
      body:[
        { t:"defs", items:[
          { term:{en:"Nangū Taisha",ja:"南宮大社",zh:"南宮大社"}, jp:"垂井町 · 美濃国一宮", def:{
            en:"The first shrine of Mino, at the foot of Nangū-san in Tarui. Its god, Kanayamahiko, is the deity of mines and metalworking, and the shrine is regarded as the head shrine of the metal trades across Japan; smiths and foundry owners come to it from all over the country. Its buildings, rebuilt after the wars of 1600, form a set of eighteen Important Cultural Properties. See <a href=\"metal.html\">Metal in Gifu</a>.",
            ja:"美濃国一宮。垂井町の南宮山の麓にある。祭神の金山彦命は鉱山と金属の神で、全国の鉱山・金属業の総本宮とされ、全国から鍛冶や鋳物業の人々が詣でる。1600年の戦乱ののちに再建された社殿は、十八棟が重要文化財である。<a href=\"metal.html\">岐阜の金属</a>を参照。",
            zh:"美濃國一之宮，位於垂井町南宮山麓。祭神金山彥命是礦山與金屬加工之神，本社被視為全日本金屬業的總本宮，各地的鍛冶與鑄造業者都會前來參拜。1600 年戰亂後重建的社殿，共有十八棟列為重要文化財。見<a href=\"metal.html\">岐阜的金屬</a>。"} },
          { term:{en:"Minashi Jinja",ja:"水無神社",zh:"水無神社"}, jp:"高山市一之宮町 · 飛騨国一宮", def:{
            en:"The first shrine of Hida, in the upper Miya valley below Mount Kurai. Its sacred mountain is the source of the Ichii yew used for Takayama's carving and for the ceremonial batons (<em>shaku</em>) presented to the imperial court.",
            ja:"飛騨国一宮。宮川上流、位山の麓にある。神体山の位山は、高山の一刀彫に使われるイチイの産地で、朝廷に献上される笏の材ともなった。",
            zh:"飛驒國一之宮，位於宮川上游、位山山麓。其神體山位山出產一位（紫杉），既用於高山的雕刻，也用來製作進獻朝廷的笏。"} },
          { term:{en:"Nagataki Hakusan Jinja",ja:"長滝白山神社",zh:"長瀧白山神社"}, jp:"郡上市白鳥町", def:{
            en:"The Mino base of the Hakusan pilgrimage, founded by tradition in 717. Its New Year performances, the <em>Nagataki Ennen</em> on 6 January, preserve medieval temple entertainments. See <a href=\"mountains.html\">Sacred Peaks</a>.",
            ja:"白山登拝の美濃の拠点で、伝承では717年の創建。1月6日の「長滝の延年」は中世の寺院芸能を伝える。<a href=\"mountains.html\">霊峰と山岳信仰</a>を参照。",
            zh:"白山參拜的美濃據點，相傳創建於 717 年。1 月 6 日的「長瀧延年」保存了中世的寺院藝能。見<a href=\"mountains.html\">靈峰與山岳信仰</a>。"} },
          { term:{en:"Kasuga Jinja, Seki",ja:"春日神社（関市）",zh:"春日神社（關市）"}, jp:"関鍛冶の氏神", def:{
            en:"The shrine of Seki's swordsmiths, under whose protection their guild organised itself in the Middle Ages. It holds swords offered by smiths over the centuries. See <a href=\"seki.html\">Seki, Town of Blades</a>.",
            ja:"関の刀鍛冶の氏神。中世、鍛冶の座はその庇護のもとに組織された。何世紀にもわたり鍛冶が奉納した刀を蔵する。<a href=\"seki.html\">刃物のまち・関</a>を参照。",
            zh:"關市刀匠的氏神社，中世的鍛冶同業組織在其庇護下成形。社中收藏歷代刀匠奉納的刀劍。見<a href=\"seki.html\">刀刃之城・關</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"temples",
      title:{ en:"Temples", ja:"寺院", zh:"寺院" }, jp:"寺",
      body:[
        { t:"defs", items:[
          { term:{en:"Tanigumi-san Kegon-ji",ja:"谷汲山華厳寺",zh:"谷汲山華嚴寺"}, jp:"揖斐川町 · 798", def:{
            en:"Founded in 798, this is the thirty-third and last temple of the Saigoku pilgrimage, the oldest Kannon pilgrimage in Japan, traditionally established by the retired emperor Kazan. Pilgrims who finish the circuit here leave behind the white over-vest (<em>oizuru</em>) they wore on the road, and receive three final seals for past, present and future. The approach street still serves the “purification-ending” meal pilgrims eat after completing the route.",
            ja:"798年（延暦17年）創建。花山法皇が定めたと伝えられる日本最古の観音霊場、西国三十三所の第三十三番、満願の寺である。巡礼を終えた人はここで道中に着た笈摺を納め、過去・現在・未来を表す三つの御朱印を受ける。参道ではいまも、満願を果たした巡礼者が食べる「精進落とし」の料理がふるまわれる。",
            zh:"創建於 798 年，是相傳由花山法皇訂定的日本最古老觀音巡禮——西國三十三所——的第三十三號、也是最後一座「滿願」寺院。完成巡禮的人在此留下沿途所穿的白色笈摺，並領取象徵過去、現在、未來的三枚御朱印。參道上至今仍供應巡禮者完成全程後享用的「精進落」料理。"} },
          { term:{en:"Gifu Daibutsu (Shōhō-ji)",ja:"岐阜大仏（正法寺）",zh:"岐阜大佛（正法寺）"}, jp:"岐阜市 · 1832", def:{
            en:"A seated Buddha 13.63 m high, the largest dry-lacquer Buddha in Japan and one of the country's three Great Buddhas. It took thirty-eight years to make and was completed in 1832. Over a timber frame, the shape was woven in bamboo like a basket, coated with clay, papered over with sutras written on Mino paper — some forty thousand scrolls were collected for it — and finished in lacquer and gold leaf. It is sometimes called the basket Buddha. Few objects combine so many of Gifu's materials.",
            ja:"高さ13.63メートルの坐像で、乾漆仏として日本最大、日本三大仏の一つに数えられる。完成まで三十八年を要し、1832年（天保3年）に仕上がった。木で骨組みを組み、籠を編むように竹で形を編み、粘土を塗り、美濃紙に書かれた経文——四万巻が集められたという——を貼り重ね、漆と金箔で仕上げた。「籠大仏」とも呼ばれる。これほど多くの岐阜の素材を一つにしたものは少ない。",
            zh:"一尊高 13.63 公尺的坐佛，是日本最大的乾漆佛像，列名日本三大佛之一。歷時三十八年，於 1832 年（天保 3 年）完成。先以木材搭骨架，再像編籃子一樣以竹編出大致形狀，塗上黏土，貼上以美濃紙書寫的經文——據說為此收集了四萬卷——最後施以漆與金箔。它有時被稱為「籠大佛」。很少有一件東西能結合這麼多岐阜的材料。"} },
          { term:{en:"Senkō-ji",ja:"千光寺",zh:"千光寺"}, jp:"高山市丹生川町", def:{
            en:"A mountain temple north-east of Takayama whose founding is attributed to <strong>Ryōmen Sukuna</strong>. The <em>Nihon Shoki</em> describes Sukuna as a two-faced, four-armed rebel of Hida defeated by the court; in Hida he is remembered as a local hero and founder. The temple keeps some sixty Buddhas carved by Enkū in his last years, among them a seated Ryōmen Sukuna 87.7 cm high. See <a href=\"enku.html\">Enkū's Buddhas</a>.",
            ja:"高山の北東の山寺で、開山は<strong>両面宿儺</strong>とされる。『日本書紀』は宿儺を、朝廷に討たれた飛騨の二つの顔と四本の腕を持つ逆賊として描くが、飛騨では土地の英雄、寺の開祖として記憶されている。寺には円空が晩年に彫った六十体余りの仏が伝わり、高さ87.7センチの両面宿儺坐像もその一つである。<a href=\"enku.html\">円空仏</a>を参照。",
            zh:"高山東北方的一座山寺，相傳由<strong>兩面宿儺</strong>開山。《日本書紀》把宿儺描寫為被朝廷討伐的飛驒叛逆，有兩張臉、四隻手臂；在飛驒，他卻被記為地方英雄與開山祖。寺中收藏圓空晚年所雕的六十餘尊佛像，其中包括高 87.7 公分的兩面宿儺坐像。見<a href=\"enku.html\">圓空佛</a>。"} },
          { term:{en:"Shōren-ji main hall",ja:"照蓮寺本堂",zh:"照蓮寺本堂"}, jp:"高山市 · 1504", def:{
            en:"Built in 1504 at Nakano in the Shō valley, this is the oldest surviving main hall of the Jōdo Shinshū school. When the Miboro Dam was built its village was flooded, and between 1958 and 1960 the hall was dismantled and re-erected in Takayama's castle park. It is an Important Cultural Property.",
            ja:"1504年（永正元年）に庄川流域の中野に建てられた、浄土真宗の現存最古の本堂。御母衣ダムの建設で村が水没することになり、1958年から1960年にかけて解体され、高山の城山公園に移築された。重要文化財である。",
            zh:"1504 年（永正元年）建於庄川流域的中野，是淨土真宗現存最古老的本堂。興建御母衣水壩時村落被淹沒，本堂於 1958 至 1960 年間拆解，移建到高山的城山公園。為重要文化財。"} },
          { term:{en:"Hida Kokubunji",ja:"飛騨国分寺",zh:"飛驒國分寺"}, jp:"高山市", def:{
            en:"The provincial temple of Hida, in the middle of Takayama, with a Muromachi-period main hall and a ginkgo said to be over 1,200 years old.",
            ja:"高山の中心にある飛騨の国分寺。室町時代の本堂と、樹齢1,200年を超えるとされる大イチョウがある。",
            zh:"位於高山市中心的飛驒國分寺，有室町時代的本堂，以及據說樹齡逾 1,200 年的大銀杏。"} },
          { term:{en:"Eihō-ji",ja:"永保寺",zh:"永保寺"}, jp:"多治見市 · 1313", def:{
            en:"Musō Soseki's Zen temple of 1313, with two National Treasure halls and a pond garden. See <a href=\"medieval.html\">The Toki &amp; the Saitō</a>.",
            ja:"1313年に夢窓疎石が開いた禅寺。国宝の二つの堂と池泉の庭がある。<a href=\"medieval.html\">土岐氏と斎藤氏</a>を参照。",
            zh:"夢窗疏石於 1313 年創建的禪寺，擁有兩座國寶殿堂與池泉庭園。見<a href=\"medieval.html\">土岐氏與齋藤氏</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"crafts",
      title:{ en:"Faith as a client of the crafts", ja:"工芸の顧客としての信仰", zh:"作為工藝委託者的信仰" }, jp:"祈りと技",
      body:[
        { t:"p", text:{
          en:"The shrines and temples of Gifu were among the great employers of its craftsmen. Carpenters built the halls and festival floats; smiths offered swords to Kasuga and Nangū; papermakers supplied the sutra sheets of the basket Buddha; potters made ritual vessels; carvers made the gods themselves, from the rough axe-work of Enkū to the fine yew figures of Takayama. Shrine timber — the hinoki of Ura-Kiso cut for the Ise Shrine every twenty years — is still the most prestigious commission a Gifu forest can receive. See <a href=\"hinoki.html\">Hinoki &amp; the Kiso Five</a>.",
          ja:"岐阜の社寺は、職人たちの大きな雇い主の一つであった。大工は堂と屋台を建て、鍛冶は春日神社や南宮大社に刀を奉納し、紙漉きは籠大仏の経文の紙を供し、陶工は祭器を焼き、彫り手は神仏そのものを刻んだ——円空の荒々しい鉈彫りから、高山の精緻な一位の像まで。社の木材——二十年ごとに伊勢神宮のために伐られる裏木曽の檜——は、いまも岐阜の森が受けうる最も誉れ高い注文である。<a href=\"hinoki.html\">檜と木曽五木</a>を参照。",
          zh:"岐阜的寺社是當地工匠的主要雇主之一。木匠建造殿堂與祭典屋台；刀匠向春日神社與南宮大社奉納刀劍；紙匠為籠大佛提供經文用紙；陶工燒製祭器；雕刻師則雕出神佛本身——從圓空粗獷的鉈雕，到高山精緻的一位木像。神社用材——每二十年為伊勢神宮砍伐的裏木曾檜木——至今仍是岐阜森林所能接到最尊榮的委託。見<a href=\"hinoki.html\">檜木與木曾五木</a>。" } }
      ]
    },

    { t:"related", items:[
      { href:"mountains.html", why:{ en:"The mountain faiths of Hakusan, Ontake and Norikura.", ja:"白山・御嶽・乗鞍の山岳信仰。", zh:"白山、御嶽與乘鞍的山岳信仰。" } },
      { href:"enku.html", why:{ en:"The monk who carved the gods of Senkō-ji.", ja:"千光寺の神仏を彫った僧。", zh:"雕刻千光寺神佛的僧人。" } },
      { href:"washi.html", why:{ en:"The paper of the basket Buddha.", ja:"籠大仏の紙。", zh:"籠大佛所用的紙。" } },
      { href:"metal.html", why:{ en:"The god of metals at Nangū.", ja:"南宮の金属の神。", zh:"南宮的金屬之神。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- shirakawago */
GIFU.pages["shirakawago"] = {
  kicker: { en: "Culture · 04", ja: "文化 · 04", zh: "文化 · 04" },
  title:  { en: "Shirakawa-gō", ja: "白川郷", zh: "白川鄉" },
  jp: "合掌造り · 荻町 · 結 · 世界遺産 1995",
  lede: {
    en: "In the deep snow valley of the upper Shō, the village of Ogimachi keeps the largest surviving group of <em>gasshō-zukuri</em> farmhouses — tall, steep-roofed timber houses whose thatched roofs, pitched like hands pressed together in prayer, were built to shed snow and to hold several storeys of silkworm-rearing floors beneath them. With the villages of Ainokura and Suganuma in neighbouring Gokayama, Toyama, it was inscribed as a UNESCO World Heritage Site in December 1995. It is Gifu's most visited place and the clearest demonstration of <em>yui</em>, the reciprocal labour described at the start of this book.",
    ja: "庄川上流の深い雪の谷にある荻町には、合掌造りの民家が最大の規模で残っている。合わせた手のように急に傾けた茅葺きの屋根を持つ、高く大きな木造家屋で、屋根は雪を落とし、その下に何層もの養蚕の床を抱えるために造られた。富山県五箇山の相倉・菅沼とともに、1995年12月にユネスコ世界遺産に登録された。岐阜で最も多くの人が訪れる場所であり、本書の冒頭で述べた「結」——互いの労力の貸し借り——を最もはっきりと示す場所である。",
    zh: "在庄川上游的深雪河谷中，荻町村保留了現存規模最大的「合掌造」農家群——高大、屋頂陡峭的木造房屋，其茅草屋頂斜得像合十的雙手，為的是讓積雪滑落，並在屋頂下容納好幾層養蠶的樓板。它與鄰近富山縣五箇山的相倉、菅沼兩村，於 1995 年 12 月一同列入聯合國教科文組織世界遺產。這裡是岐阜遊客最多的地方，也最清楚地展現了本書開頭所說的「結」——村民之間相互出工的互助。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"A gasshō house in section, schematic. The lower frame of posts and beams was the work of professional carpenters; the great roof, an A-frame of paired rafters (<em>sasu</em>) resting on the beams and lashed with rope and witch-hazel withies rather than nailed, was raised and thatched by the villagers themselves. Smoke from the hearth rose through slatted floors, drying the silkworm floors and preserving the thatch and ropes.",
        ja:"合掌造りの家の断面（模式図）。柱と梁からなる下部は専門の大工の仕事である。大屋根——梁の上に載せた一対の叉首からなる三角の骨組みを、釘を使わず縄とネソ（マンサクの若枝）で結ぶ——は村人自身が組み、葺いた。囲炉裏の煙はすのこの床を抜けて上り、養蚕の床を乾かし、茅や縄を長持ちさせた。",
        zh:"合掌造房屋剖面（示意圖）。下部的柱樑骨架由專業木匠建造；巨大的屋頂——由架在樑上的成對「叉首」構成的三角框架，不用釘子，而以繩索與金縷梅嫩枝綁紮——則由村民親手搭建並葺上茅草。地爐的煙穿過格柵樓板上升，烘乾養蠶的樓層，也讓茅草與繩索更耐久。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 400" role="img" aria-label="Section of a gassho-zukuri house">' +
          '<rect x="0.5" y="0.5" width="759" height="399" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"A GASSHŌ HOUSE", ja:"合掌造り", zh:"合掌造" }) + '</text>';
        /* roof thatch */
        s += '<path d="M180 290 L380 44 L580 290 Z" fill="#EADCC1" stroke="#7C6B52" stroke-width="1.2"/>' +
             '<path d="M204 290 L380 74 L556 290" fill="none" stroke="#FBFAF7" stroke-width="10" opacity="0.6"/>';
        /* rafters sasu */
        s += '<path d="M226 290 L380 98 L534 290" fill="none" stroke="#201E1B" stroke-width="3"/>';
        /* attic floors */
        [230, 182, 138].forEach(function (y, i) {
          var half = (290 - y) * (154 / 192);
          s += '<line x1="' + (380 - half + 8).toFixed(0) + '" y1="' + y + '" x2="' + (380 + half - 8).toFixed(0) + '" y2="' + y + '" stroke="#55504A" stroke-width="1.6" stroke-dasharray="' + (i === 0 ? "none" : "6 3") + '"/>';
        });
        /* lower frame */
        s += '<rect x="226" y="290" width="308" height="80" fill="#E7DFD2" stroke="#201E1B" stroke-width="1.3"/>' +
             '<line x1="226" y1="290" x2="534" y2="290" stroke="#201E1B" stroke-width="4"/>' +
             '<line x1="300" y1="290" x2="300" y2="370" stroke="#55504A" stroke-width="2"/><line x1="460" y1="290" x2="460" y2="370" stroke="#55504A" stroke-width="2"/>' +
             '<rect x="354" y="352" width="52" height="12" fill="#EEE1DF" stroke="#7C6B52"/>' +
             '<path d="M372 350 C366 336 378 328 372 316 M388 350 C394 334 382 326 390 312" fill="none" stroke="#8B857C" stroke-width="1"/>' +
             '<line x1="30" y1="370" x2="730" y2="370" stroke="#B4AC9C"/>';
        /* labels */
        var lab = [
          [592, 146, {en:"thatch, about 60°",ja:"茅葺き屋根、約60度",zh:"茅草屋頂，約60度"}, "start"],
          [592, 161, {en:"renewed together (yui)",ja:"村で葺き替える（結）",zh:"全村合力翻修（結）"}, "start"],
          [592, 208, {en:"sasu — paired rafters",ja:"叉首——対の合掌材",zh:"叉首——成對椽木"}, "start"],
          [592, 223, {en:"lashed, not nailed",ja:"釘を使わず結ぶ",zh:"綁紮而不用釘"}, "start"],
          [592, 334, {en:"hearth (irori)",ja:"囲炉裏",zh:"地爐"}, "start"],
          [592, 349, {en:"smoke preserves the roof",ja:"煙が屋根を守る",zh:"煙可保護屋頂"}, "start"],
          [190, 180, {en:"attic floors for silkworms",ja:"養蚕の屋根裏",zh:"養蠶的閣樓"}, "end"],
          [190, 195, {en:"slatted, open to the smoke",ja:"すのこ床で煙が通る",zh:"格柵樓板，讓煙穿過"}, "end"],
          [190, 292, {en:"main beam",ja:"梁",zh:"主樑"}, "end"],
          [190, 307, {en:"carpenters' work below",ja:"ここから下は大工の仕事",zh:"以下為木匠的工作"}, "end"]
        ];
        lab.forEach(function (a) {
          s += '<text x="' + a[0] + '" y="' + a[1] + '" text-anchor="' + a[3] + '" ' + F + ' font-size="10.5" fill="#201E1B">' + L(a[2]) + '</text>';
        });
        s += '<path d="M586 146 L520 160" stroke="#B4AC9C"/><path d="M586 208 L498 214" stroke="#B4AC9C"/><path d="M196 180 L300 182" stroke="#B4AC9C"/><path d="M196 292 L226 291" stroke="#B4AC9C"/><path d="M586 334 L408 356" stroke="#B4AC9C"/>' +
             '<text x="30" y="392" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — real houses vary in size, floors and orientation.",ja:"模式図——実際の家は規模・階数・向きがさまざまである。",zh:"示意圖——實際房屋的規模、樓層與朝向各不相同。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"house",
      title:{ en:"How a gasshō house works", ja:"合掌造りのしくみ", zh:"合掌造的構造原理" }, jp:"叉首 · 茅 · 結",
      body:[
        { t:"p", text:{
          en:"The name means “hands pressed together”, from the shape of the roof. Its structure is two systems stacked. The lower house — posts, beams and the living floor around the hearth — was built by hired carpenters. On top of it the villagers raised the roof: pairs of long rafters, the <em>sasu</em>, whose feet rest in sockets on the ends of the beams, tied to purlins and to each other with straw rope and supple withies of witch-hazel, with no nails. The joints can flex under a metre of snow and in an earthquake. The thatch, of <em>kaya</em> grasses cut from communal grass-lands, is laid thick and steep so that snow slides off.",
          ja:"名は屋根の形——合わせた手——から来ている。構造は二つの仕組みを重ねたものである。下の家——柱、梁、囲炉裏を囲む生活の床——は雇われた大工が建てた。その上に村人が屋根を組んだ。長い合掌材の対、叉首の足を梁の端のくぼみに載せ、藁縄とマンサクのしなやかな若枝（ネソ）で母屋や互いに結び、釘は使わない。継ぎ目は一メートルの雪の重みにも地震にもしなる。茅は共有の茅場から刈った茅を厚く急に葺き、雪を滑り落とす。",
          zh:"這個名稱意指「雙手合十」，來自屋頂的形狀。其結構是兩套系統的疊加。下方的房屋——柱、樑，以及圍繞地爐的起居樓板——由受僱的木匠建造。村民再在上方搭起屋頂：一對對長椽木「叉首」，其腳端落在樑端的凹槽裡，以稻草繩與柔韌的金縷梅嫩枝（ネソ）綁在桁條上並彼此相連，不用一根釘子。接合處在一公尺厚的積雪下或地震中都能彎曲。茅草取自共有的茅草場，鋪得又厚又陡，讓雪滑落。" } },
        { t:"p", text:{
          en:"Under the roof were two to four floors of slatted boards for rearing silkworms, which paid in cash where rice was scarce. Smoke from the hearth rose through them, keeping the floors dry, discouraging insects and preserving the ropes and thatch. Under the house, the villages of Shirakawa and Gokayama also produced saltpetre for gunpowder by composting soil, grass and silkworm droppings in pits beneath the floor — a trade that the Kaga domain controlled in Gokayama.",
          ja:"屋根の下には、すのこを張った二〜四層の養蚕の床があった。米の乏しい土地で、養蚕は現金になった。囲炉裏の煙はその床を抜けて上り、床を乾かし、虫を遠ざけ、縄と茅を長持ちさせた。家の下では、白川や五箇山の村々は床下の穴で土・草・蚕の糞を寝かせて火薬の原料となる焔硝も造った。五箇山ではこの仕事を加賀藩が管理していた。",
          zh:"屋頂下是兩到四層鋪著格柵板、用來養蠶的樓層；在稻米稀少之地，養蠶能換取現金。地爐的煙穿過這些樓層上升，使其保持乾燥、驅除蟲害，並讓繩索與茅草更耐久。在屋子底下，白川與五箇山的村落還在地板下的坑中堆肥土壤、草與蠶糞，製造火藥原料「焰硝」——在五箇山，這項產業由加賀藩掌控。" } }
      ]
    },

    { t:"section", id:"yui",
      title:{ en:"A roof in a day", ja:"一日で屋根を葺く", zh:"一天葺好一個屋頂" }, jp:"結",
      body:[
        { t:"p", text:{
          en:"A gasshō roof needs re-thatching every few decades, and no household can do it alone. Under <strong>yui</strong>, the family whose roof is due asks the other households for help and owes each of them the same labour when their turn comes; on the day, a hundred or two hundred people may be on the roof and in the yard, and the work is finished between morning and evening. The village keeps records of who has given how many days. In the second half of the twentieth century, as fewer people lived in the houses and more worked elsewhere, yui was supplemented by a preservation foundation and by professional thatchers, but the big communal re-thatchings still happen.",
          ja:"合掌の屋根は何十年かごとに葺き替えが必要で、一軒だけではとてもできない。<strong>結</strong>のもとでは、葺き替えの番が来た家がほかの家々に手伝いを頼み、それぞれの家の番が来たときに同じだけの労力を返す。当日は百人、二百人が屋根と庭に集まり、朝から夕方までに仕事を終える。村は誰が何日を出したかを記録する。二十世紀後半、家に住む人が減り、外で働く人が増えると、結は保存財団や専門の茅葺き職人に補われるようになったが、大がかりな村総出の葺き替えはいまも行われている。",
          zh:"合掌屋頂每隔幾十年就得重新葺草，沒有任何一戶能獨力完成。在<strong>結</strong>的制度下，輪到翻修的人家請其他各戶幫忙，並在各戶輪到時回報同樣的勞力；當天可能有一兩百人在屋頂與院子裡工作，從早到晚就完工。村裡會記錄誰出了幾天工。二十世紀後半，住在屋裡的人變少、外出工作的人增多，結開始由保存財團與專業葺草匠人補充，但全村出動的大規模翻修至今仍在進行。" } },
        { t:"note", label:{en:"Water curtains",ja:"水のカーテン",zh:"水幕"}, text:{
          en:"A village of thatch is a village at risk of fire. Ogimachi keeps some sixty water cannons hidden in small huts among the houses, and every autumn, before the season of hearth fires, it tests them all at once — a curtain of water arching over the roofs that has become one of the sights of the year.",
          ja:"茅の村は火に弱い村である。荻町は家々のあいだの小屋に六十基ほどの放水銃を備え、毎年秋、囲炉裏を多く使う季節の前に、それを一斉に試す。屋根の上に弧を描く水のカーテンは、一年の見ものの一つになっている。",
          zh:"茅草的村落是容易失火的村落。荻町在房屋之間的小屋裡藏有約六十座放水槍，每年秋天、地爐頻繁使用的季節到來前，會一次全部試射——在屋頂上劃出拱形的水幕，已成為一年中的一道景觀。" } }
      ]
    },

    { t:"section", id:"family",
      title:{ en:"Big houses, big families", ja:"大きな家、大きな家族", zh:"大房子，大家族" }, jp:"大家族制",
      body:[
        { t:"p", text:{
          en:"The largest gasshō houses sheltered households of several dozen people. In parts of the Shirakawa valley a distinctive large-family system survived into the twentieth century: only the heir married formally and lived as head of the house, while his brothers and sisters stayed on as members of the household and their children were raised within it. Scholars have linked the system to the scarcity of land for new households and to the labour needs of sericulture. Several of the great houses, among them the Wada house in Ogimachi, now an Important Cultural Property, are open to visitors.",
          ja:"最も大きな合掌の家には、数十人の家族が暮らした。白川谷の一部では、独特の大家族制が二十世紀まで残った。正式に結婚して家長となるのは跡取りだけで、兄弟姉妹は家の成員として家にとどまり、その子どもたちも家のなかで育てられた。研究者はこの制度を、新たな家を立てる土地の乏しさと、養蚕に必要な労働力と結びつけている。荻町の和田家（重要文化財）をはじめ、いくつかの大きな家は公開されている。",
          zh:"最大的合掌屋住著數十口人的家庭。在白川谷部分地區，一種獨特的大家族制一直延續到二十世紀：只有繼承人正式結婚並成為家長，其兄弟姊妹則以家庭成員身分留在家中，他們的子女也在家中撫養長大。學者把這種制度與建立新家戶的土地稀缺，以及養蠶所需的勞動力連結起來。包括荻町和田家（重要文化財）在內的幾座大宅已對外開放。" } }
      ]
    },

    { t:"section", id:"today",
      title:{ en:"A living village and a destination", ja:"生きた村と観光地", zh:"活著的村落與觀光地" }, jp:"世界遺産",
      body:[
        { t:"p", text:{
          en:"Ogimachi is not a museum: people live in most of its houses, grow rice in its fields and run its inns. The villagers adopted a charter in 1971 not to sell, rent or destroy the houses — a decision taken, remarkably, before any national designation — and the village became a national Important Preservation District for Groups of Traditional Buildings in 1976 and a World Heritage Site in 1995. Since the Tōkai-Hokuriku Expressway was completed in 2008 the numbers of day visitors, including large numbers from overseas, have grown sharply, and the village now manages traffic and crowding as carefully as it manages fire.",
          ja:"荻町は博物館ではない。家々の多くに人が住み、田で米を作り、宿を営んでいる。村人は1971年、家を「売らない・貸さない・壊さない」という住民憲章を定めた——驚くべきことに、国のいかなる指定よりも前の決断である。村は1976年に国の重要伝統的建造物群保存地区となり、1995年に世界遺産となった。2008年に東海北陸自動車道が全通すると、海外からの大勢を含む日帰り客が急増し、村はいまや火と同じくらい慎重に、交通と混雑を管理している。",
          zh:"荻町不是博物館：大部分房屋仍有人居住，田裡種著稻米，村民經營著民宿。1971 年，村民訂立「不賣、不租、不拆」房屋的住民憲章——值得注意的是，這個決定早於任何國家指定——1976 年村落成為國家「重要傳統建造物群保存地區」，1995 年列入世界遺產。2008 年東海北陸自動車道全線通車後，一日遊客（包括大量海外遊客）急遽增加，村子如今管理交通與人潮，就像管理火災一樣謹慎。" } }
      ]
    },

    { t:"related", items:[
      { href:"spirit.html", why:{ en:"Yui as one of the words of the book's title.", ja:"書名の言葉の一つとしての結。", zh:"作為書名關鍵字之一的「結」。" } },
      { href:"architecture.html", why:{ en:"Gasshō among Gifu's other wooden buildings.", ja:"岐阜のほかの木造建築のなかの合掌造り。", zh:"岐阜其他木造建築中的合掌造。" } },
      { href:"doburoku.html", why:{ en:"The shrine sake of Shirakawa's October festivals.", ja:"白川郷の十月の祭りの神酒。", zh:"白川鄉十月祭典的神酒。" } },
      { href:"climate.html", why:{ en:"The snow the roofs are built for.", ja:"屋根が備える雪。", zh:"屋頂所要對付的雪。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- towns */
GIFU.pages["towns"] = {
  kicker: { en: "Culture · 05", ja: "文化 · 05", zh: "文化 · 05" },
  title:  { en: "Old Towns", ja: "町並み", zh: "老街町並" },
  jp: "高山 · 美濃 · 郡上八幡 · 岩村 · 重要伝統的建造物群保存地区",
  lede: {
    en: "Gifu's old towns were made by trade and by water. Takayama's merchants lived under the shogun's direct rule, Mino's in a paper market on the Nagara, Gujō-Hachiman's in a castle town threaded with spring water, and Iwamura's below the highest castle in Japan. Six of the prefecture's streets and villages are now national preservation districts, and much of its history can be read in the houses that line them.",
    ja: "岐阜の古い町は、商いと水がつくった。高山の商人は幕府の直轄のもとに、美濃の商人は長良川の紙の市に、郡上八幡の人々は湧き水の走る城下町に、岩村の人々は日本一高い山城の下に暮らした。県内の六つの町並みと集落はいま国の重要伝統的建造物群保存地区であり、この県の歴史の多くは、そこに並ぶ家々から読み取ることができる。",
    zh: "岐阜的老街，是由商業與水所造就的。高山的商人生活在幕府直轄之下，美濃的商人生活在長良川畔的紙市，郡上八幡的居民生活在湧泉流貫的城下町，岩村的居民則生活在日本海拔最高的山城之下。縣內有六處街區與聚落如今是國家重要傳統建造物群保存地區，這個縣的許多歷史，都能從沿街的房屋中讀出來。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"Three streets, schematic elevations. In Takayama the merchant house is low, dark and latticed, with a short upper storey under deep eaves, and water runs in the gutters; a ball of cedar sprigs hangs outside a brewery. In Mino the ends of each roof carry <em>udatsu</em>, raised firewalls with their own small roofs. In Gujō-Hachiman channels of spring water run along the lanes, with steps down to them for washing.",
        ja:"三つの町並み（模式立面図）。高山の町家は低く、黒く、格子を立て、深い軒の下に低い二階を持ち、道の側溝には水が流れる。酒蔵の軒には杉玉が下がる。美濃では屋根の両端に、小さな屋根をのせて高く立ち上げた防火壁——うだつ——が上がる。郡上八幡では湧き水の用水が小路に沿って流れ、洗い場へ下りる石段がある。",
        zh:"三種街景（示意立面圖）。在高山，商家低矮、色深、立著格子，深簷之下是低矮的二樓，街邊溝渠流著水；酒藏簷下掛著杉玉。在美濃，屋頂兩端豎起「卯建」——一種頂上另有小屋頂、高出屋面的防火牆。在郡上八幡，湧泉引來的水渠沿著小巷流淌，並有石階下到水邊供人洗濯。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 400" role="img" aria-label="Schematic elevations of townhouses in Takayama, Mino and Gujo-Hachiman">' +
          '<rect x="0.5" y="0.5" width="759" height="399" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"THREE STREETS", ja:"三つの町並み", zh:"三種街景" }) + '</text>';
        var panels = [
          { x: 30,  name:{en:"TAKAYAMA",ja:"高山",zh:"高山"}, sub:{en:"Sanmachi · 1979",ja:"三町 · 1979年",zh:"三町 · 1979 年"},
            d1:{en:"low upper storey, deep eaves",ja:"低い二階と深い軒",zh:"低矮二樓與深簷"},
            d2:{en:"latticed front; water in the gutter",ja:"格子の表構え、側溝の水",zh:"格子門面；溝渠流水"} },
          { x: 270, name:{en:"MINO",ja:"美濃",zh:"美濃"}, sub:{en:"Mino-machi · 1999",ja:"美濃町 · 1999年",zh:"美濃町 · 1999 年"},
            d1:{en:"udatsu: raised, roofed firewalls",ja:"うだつ——屋根付きの防火壁",zh:"卯建：帶小屋頂的防火牆"},
            d2:{en:"a street of paper merchants",ja:"紙問屋の町",zh:"紙商之街"} },
          { x: 510, name:{en:"GUJŌ-HACHIMAN",ja:"郡上八幡",zh:"郡上八幡"}, sub:{en:"Kitamachi · 2012",ja:"北町 · 2012年",zh:"北町 · 2012 年"},
            d1:{en:"spring water led along the lanes",ja:"小路に沿う湧水の用水",zh:"沿巷引流的湧泉水渠"},
            d2:{en:"steps down to wash (kawado)",ja:"洗い場へ下りる川戸",zh:"下到水邊洗濯的「川戶」"} }
        ];
        panels.forEach(function (p) {
          s += '<text x="' + p.x + '" y="62" ' + F + ' font-size="11" fill="#201E1B" letter-spacing="1.6" font-weight="600">' + L(p.name) + '</text>' +
               '<text x="' + p.x + '" y="78" ' + F + ' font-size="9.5" fill="#8B857C">' + L(p.sub) + '</text>' +
               '<line x1="' + p.x + '" y1="300" x2="' + (p.x + 220) + '" y2="300" stroke="#B4AC9C"/>' +
               '<text x="' + p.x + '" y="332" ' + F + ' font-size="10" fill="#201E1B">' + L(p.d1) + '</text>' +
               '<text x="' + p.x + '" y="348" ' + F + ' font-size="10" fill="#201E1B">' + L(p.d2) + '</text>';
        });
        /* A — Takayama */
        var a = 30;
        s += '<rect x="' + (a + 10) + '" y="302" width="200" height="7" fill="#E0E7E9" stroke="#8FA6AE"/>' +
             '<rect x="' + (a + 30) + '" y="240" width="160" height="60" fill="#E7DFD2" stroke="#201E1B" stroke-width="1.2"/>';
        for (var i = a + 36; i <= a + 184; i += 6) s += '<line x1="' + i + '" y1="246" x2="' + i + '" y2="296" stroke="#7C6B52" stroke-width="0.8"/>';
        s += '<path d="M' + (a + 14) + ' 242 L' + (a + 206) + ' 242 L' + (a + 196) + ' 230 L' + (a + 24) + ' 230 Z" fill="#E6E4E0" stroke="#55504A"/>' +
             '<rect x="' + (a + 42) + '" y="204" width="136" height="26" fill="#F0EDE4" stroke="#201E1B" stroke-width="1.2"/>' +
             '<rect x="' + (a + 84) + '" y="209" width="52" height="16" fill="none" stroke="#7C6B52"/>';
        for (var j = a + 90; j <= a + 130; j += 6) s += '<line x1="' + j + '" y1="209" x2="' + j + '" y2="225" stroke="#7C6B52" stroke-width="0.7"/>';
        s += '<path d="M' + (a + 16) + ' 206 L' + (a + 204) + ' 206 L' + (a + 184) + ' 188 L' + (a + 36) + ' 188 Z" fill="#E6E4E0" stroke="#55504A"/>' +
             '<line x1="' + (a + 172) + '" y1="242" x2="' + (a + 172) + '" y2="252" stroke="#55504A"/>' +
             '<circle cx="' + (a + 172) + '" cy="261" r="9" fill="#E0E6DB" stroke="#7C6B52"/>' +
             '<text x="' + (a + 172) + '" y="160" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"sugidama",ja:"杉玉",zh:"杉玉"}) + '</text>' +
             '<path d="M' + (a + 172) + ' 164 L' + (a + 172) + ' 186" stroke="#B4AC9C"/>';
        /* B — Mino */
        var b = 270;
        s += '<rect x="' + (b + 14) + '" y="236" width="192" height="64" fill="#E7DFD2" stroke="#201E1B" stroke-width="1.2"/>' +
             '<line x1="' + (b + 110) + '" y1="236" x2="' + (b + 110) + '" y2="300" stroke="#201E1B"/>' +
             '<rect x="' + (b + 30) + '" y="252" width="30" height="48" fill="#F0EDE4" stroke="#55504A"/>' +
             '<rect x="' + (b + 150) + '" y="252" width="30" height="48" fill="#F0EDE4" stroke="#55504A"/>' +
             '<path d="M' + (b + 8) + ' 238 L' + (b + 212) + ' 238 L' + (b + 204) + ' 228 L' + (b + 16) + ' 228 Z" fill="#E6E4E0" stroke="#55504A"/>' +
             '<rect x="' + (b + 20) + '" y="200" width="180" height="28" fill="#F0EDE4" stroke="#201E1B" stroke-width="1.2"/>' +
             '<path d="M' + (b + 10) + ' 202 L' + (b + 210) + ' 202 L' + (b + 194) + ' 184 L' + (b + 26) + ' 184 Z" fill="#E6E4E0" stroke="#55504A"/>';
        [b + 16, b + 104, b + 192].forEach(function (x) {
          s += '<rect x="' + x + '" y="176" width="12" height="54" fill="#FBFAF7" stroke="#201E1B"/>' +
               '<path d="M' + (x - 5) + ' 178 L' + (x + 17) + ' 178 L' + (x + 12) + ' 170 L' + x + ' 170 Z" fill="#55504A"/>';
        });
        s += '<text x="' + (b + 110) + '" y="140" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"udatsu",ja:"うだつ",zh:"卯建"}) + '</text>' +
             '<path d="M' + (b + 110) + ' 144 L' + (b + 110) + ' 166" stroke="#B4AC9C"/>';
        /* C — Gujo-Hachiman */
        var c = 510;
        s += '<rect x="' + (c + 60) + '" y="236" width="150" height="64" fill="#E7DFD2" stroke="#201E1B" stroke-width="1.2"/>';
        for (var k = c + 66; k <= c + 120; k += 6) s += '<line x1="' + k + '" y1="242" x2="' + k + '" y2="296" stroke="#7C6B52" stroke-width="0.8"/>';
        s += '<rect x="' + (c + 140) + '" y="250" width="40" height="50" fill="#F0EDE4" stroke="#55504A"/>' +
             '<path d="M' + (c + 50) + ' 238 L' + (c + 216) + ' 238 L' + (c + 208) + ' 228 L' + (c + 58) + ' 228 Z" fill="#E6E4E0" stroke="#55504A"/>' +
             '<rect x="' + (c + 66) + '" y="202" width="138" height="26" fill="#F0EDE4" stroke="#201E1B" stroke-width="1.2"/>' +
             '<path d="M' + (c + 54) + ' 204 L' + (c + 216) + ' 204 L' + (c + 200) + ' 186 L' + (c + 70) + ' 186 Z" fill="#E6E4E0" stroke="#55504A"/>' +
             '<rect x="' + (c + 4) + '" y="282" width="46" height="18" fill="#E0E7E9" stroke="#8FA6AE"/>' +
             '<path d="M' + (c + 50) + ' 300 L' + (c + 50) + ' 294 L' + (c + 42) + ' 294 L' + (c + 42) + ' 288 L' + (c + 34) + ' 288" fill="none" stroke="#55504A"/>' +
             '<ellipse cx="' + (c + 16) + '" cy="292" rx="5" ry="2" fill="#7C6B52"/><ellipse cx="' + (c + 28) + '" cy="296" rx="5" ry="2" fill="#7C6B52"/>' +
             '<text x="' + (c + 4) + '" y="268" ' + F + ' font-size="9.5" fill="#5E7780">' + L({en:"channel",ja:"用水",zh:"水渠"}) + '</text>';
        s += '<text x="30" y="386" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — typical features, not particular buildings. Year = selection as a national preservation district.",ja:"模式図——典型的な特徴を示し、特定の建物ではない。年は国の保存地区に選定された年。",zh:"示意圖——表示典型特徵，並非特定建築。年份為獲選國家保存地區之年。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"districts",
      title:{ en:"Six protected places", ja:"六つの保存地区", zh:"六處保存地區" }, jp:"重要伝統的建造物群保存地区",
      body:[
        { t:"p", text:{
          en:"Since 1975 Japanese law has let towns protect a whole street or village, not just single buildings, as a <em>preservation district for groups of traditional buildings</em>; the best are selected by the national government as Important Preservation Districts. Gifu has six. The village of Ogimachi at Shirakawa-gō was among the first in the country, in 1976; the most recent, Kitamachi in Gujō-Hachiman, was selected in December 2012 as the 102nd in Japan.",
          ja:"1975年以来、日本の法律は、単体の建物だけでなく町並みや集落の全体を「伝統的建造物群保存地区」として守ることを認めてきた。そのうち優れたものを国が重要伝統的建造物群保存地区に選定する。岐阜県には六つある。白川郷の荻町集落は1976年に全国で最初期に選ばれ、最も新しい郡上八幡北町は2012年12月に全国102番目として選定された。",
          zh:"自 1975 年起，日本法律允許地方把整條街道或整個聚落——而不只是單棟建築——作為「傳統建造物群保存地區」加以保護；其中最優秀者由國家選定為「重要傳統建造物群保存地區」。岐阜縣有六處。白川鄉的荻町聚落於 1976 年成為全國最早的一批，最新的郡上八幡北町則於 2012 年 12 月獲選，是全國第 102 處。" } },
        { t:"table",
          caption:{en:"National Important Preservation Districts in Gifu, in order of selection",ja:"岐阜県の重要伝統的建造物群保存地区（選定順）",zh:"岐阜縣的重要傳統建造物群保存地區（依選定順序）"},
          cols:[{en:"District",ja:"地区",zh:"地區"},{en:"Kind",ja:"種別",zh:"類型"},{en:"Selected",ja:"選定",zh:"選定"},{en:"Look for",ja:"見どころ",zh:"看點"}],
          rows:[
            [{en:"Ogimachi, Shirakawa village",ja:"白川村荻町",zh:"白川村荻町"},{en:"Mountain village",ja:"山村集落",zh:"山村聚落"},"1976",{en:"Gasshō-roofed farmhouses — see <a href=\"shirakawago.html\">Shirakawa-gō</a>",ja:"合掌造りの民家——<a href=\"shirakawago.html\">白川郷</a>を参照",zh:"合掌造民家——見<a href=\"shirakawago.html\">白川鄉</a>"}],
            [{en:"Sanmachi, Takayama",ja:"高山市三町",zh:"高山市三町"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"1979",{en:"Dark latticed fronts, breweries, float storehouses",ja:"黒い格子の町家、酒蔵、屋台蔵",zh:"深色格子町家、酒藏、屋台藏"}],
            [{en:"Honmachi, Iwamura (Ena)",ja:"恵那市岩村町本通り",zh:"惠那市岩村町本通"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"1998",{en:"The castle-town street below Iwamura castle",ja:"岩村城下の町人町の通り",zh:"岩村城下的町人街"}],
            [{en:"Mino-machi, Mino",ja:"美濃市美濃町",zh:"美濃市美濃町"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"1999",{en:"Udatsu firewalls; the paper merchants' houses",ja:"うだつ、紙問屋の家",zh:"卯建防火牆、紙商宅邸"}],
            [{en:"Shimo-ninomachi & Ōshinmachi, Takayama",ja:"高山市下二之町大新町",zh:"高山市下二之町大新町"},{en:"Merchant town",ja:"商家町",zh:"商家町"},"2004",{en:"The great Meiji merchant houses of the Kusakabe and Yoshijima",ja:"日下部家・吉島家の明治の大町家",zh:"日下部家、吉島家的明治大町家"}],
            [{en:"Kitamachi, Gujō-Hachiman",ja:"郡上市郡上八幡北町",zh:"郡上市郡上八幡北町"},{en:"Castle town",ja:"城下町",zh:"城下町"},"2012",{en:"Water channels and townhouses rebuilt after the 1919 fire",ja:"用水と、1919年の大火後に再建された町家",zh:"水渠，以及 1919 年大火後重建的町家"}]
          ] }
      ]
    },

    { t:"section", id:"takayama",
      title:{ en:"Takayama: a merchant town without a lord", ja:"高山——殿様のいない商人の町", zh:"高山：沒有藩主的商人之城" }, jp:"三町 · 高山陣屋",
      body:[
        { t:"p", text:{
          en:"Kanamori Nagachika laid out Takayama as a castle town from 1586, with the castle on the hill to the east, the samurai around it and the merchants in three parallel streets by the Miya river — Ichi-no-machi, Ni-no-machi and San-no-machi, the “three streets” that give Sanmachi its name. In 1692 the shogunate moved the Kanamori to the north of Japan and took Hida under its own rule for its timber and its mines. The castle was pulled down; the town was governed from the <strong>Takayama Jin'ya</strong>, the office of the shogun's intendant, which is the only such office in Japan whose main buildings still stand.",
          ja:"金森長近は1586年から高山を城下町として整え、東の山に城を、そのまわりに武家を、宮川のほとりの三筋の平行な通り——一之町・二之町・三之町、三町の名の由来——に町人を置いた。1692年、幕府は金森氏を出羽へ移し、木材と鉱山のために飛騨を直轄領とした。城は取り壊され、町は幕府の代官・郡代の役所である<strong>高山陣屋</strong>から治められた。主要な建物が現存する郡代・代官所は全国でここだけである。",
          zh:"金森長近自 1586 年起把高山規劃為城下町：城建在東邊的山上，武士住在城的周圍，商人則住在宮川畔三條平行的街道——一之町、二之町、三之町，即「三町」之名的由來。1692 年，幕府把金森氏移封到日本北方，為了木材與礦山把飛驒收為直轄領。城被拆除，城鎮改由幕府代官（郡代）的官署<strong>高山陣屋</strong>治理；主要建築至今仍存的此類官署，全日本僅此一處。" } },
        { t:"p", text:{
          en:"Without a daimyo's court, the town's money stayed with its merchants — timber dealers, brewers, lenders, dealers in rice and salt from the Japan Sea coast. Their houses are low at the front, stained dark, with lattices that let the family see out and the street not see in, a short upper storey under deep eaves, and an earth-floored passage running back past the living rooms to the storehouses. Small channels of running water lie along the streets, once for fire and for melting snow. The breweries still hang a <em>sugidama</em>, a ball of cedar sprigs, under their eaves when the new sake is pressed. The float storehouses of the <a href=\"festivals.html\">Takayama festival</a> stand among the houses. In the northern quarter, Shimo-ninomachi and Ōshinmachi, the Kusakabe house (1879) and the Yoshijima house (1907), both Important Cultural Properties, show what the carpenters of Hida could do with a merchant's money; see <a href=\"takumi.html\">Hida no Takumi</a>.",
          ja:"大名の城がないため、町の富は商人の手に残った——材木商、酒造家、金貸し、米や日本海側の塩を扱う商人である。その家は表が低く、黒く染められ、格子は内から外は見えるが外から内は見えない。深い軒の下に低い二階を持ち、土間の通り庭が居室の脇を奥の蔵まで続く。通りに沿って小さな水路が流れ、かつては火事と雪解けのために使われた。酒蔵は新酒を搾ると軒に杉玉を吊るす。<a href=\"festivals.html\">高山祭</a>の屋台蔵が家並みのあいだに立つ。北の下二之町・大新町にある日下部家住宅（1879年）と吉島家住宅（1907年）はともに重要文化財で、飛騨の大工が商人の財で何をなしえたかを示している。<a href=\"takumi.html\">飛騨の匠</a>を参照。",
          zh:"由於沒有大名的城廷，城鎮的財富留在商人手中——木材商、釀酒家、放貸者、經營稻米與日本海沿岸食鹽的商人。他們的房屋正面低矮、塗成深色，格子讓屋內的人看得見外面，外面卻看不見屋內；深簷之下是低矮的二樓，一條泥土地面的通道從起居室旁一路延伸到後方的倉庫。街邊有小水渠流過，昔日用於防火與融雪。每當新酒榨成，酒藏便在簷下掛起杉玉。<a href=\"festivals.html\">高山祭</a>的屋台藏矗立在房屋之間。北邊下二之町、大新町的日下部家住宅（1879 年）與吉島家住宅（1907 年）均為重要文化財，展現了飛驒木匠在商人財力支持下所能達到的境界；見<a href=\"takumi.html\">飛驒工匠</a>。" } }
      ]
    },

    { t:"section", id:"mino",
      title:{ en:"Mino: udatsu and paper", ja:"美濃——うだつと紙", zh:"美濃：卯建與紙" }, jp:"うだつの上がる町並み · 上有知湊",
      body:[
        { t:"p", text:{
          en:"After Sekigahara Kanamori Nagachika, the founder of Takayama, was given the valley of the middle Nagara as well. He built a castle on Mount Ogura, moved the town of Kōzuchi up from the flood-prone low ground, laid it out as two long streets joined by four cross streets, set six market days a month and opened a river port with forty licensed boats. For three centuries the paper of the surrounding valleys — see <a href=\"washi.html\">Mino Washi</a> — went down the Nagara from Kōzuchi to Kuwana and the Ise Bay. The stone lighthouse of the port, about nine metres tall, still stands by the river; the port died when the electric railway arrived in 1911. The town took the name Mino in 1911.",
          ja:"関ヶ原の後、高山を開いた金森長近は長良川中流の谷も与えられた。長近は小倉山に城を築き、水の出やすい低地から上有知の町を高台へ移し、二本の長い通りを四本の横町で結ぶ町割りとし、月六回の市を立て、四十艘の舟を置いた川湊を開いた。三百年にわたり、周囲の谷の紙（<a href=\"washi.html\">美濃和紙</a>を参照）は、上有知から長良川を下って桑名と伊勢湾へ運ばれた。高さ約九メートルの湊の灯台はいまも川辺に立つ。湊は1911年の電気鉄道の開通で役目を終えた。町が美濃と名を改めたのも1911年である。",
          zh:"關原之戰後，開創高山的金森長近又獲封長良川中游的河谷。他在小倉山築城，把上有知的町從易淹的低地遷到高處，規劃成由四條橫街連接的兩條長街，每月定六次市集，並開設擁有四十艘持證船隻的河港。三百年間，周邊河谷所產的紙（見<a href=\"washi.html\">美濃和紙</a>）從上有知順長良川而下，運往桑名與伊勢灣。港口那座高約九公尺的石燈塔至今仍立在河邊；1911 年電氣鐵路開通後，河港便走入歷史。同樣在 1911 年，這座城鎮改名為美濃。" } },
        { t:"p", text:{
          en:"The paper merchants built big, and at the ends of their roofs they raised <strong>udatsu</strong>: short firewalls of plastered earth that stand up through the roof line and carry little tiled roofs of their own, meant to stop a fire jumping from house to house. Because they were expensive, they became a sign of success, and a man who never gets on in life is still said to be one whose “udatsu never go up” — <em>udatsu ga agaranai</em>. The largest merchant house in the town, that of the Imai, paper wholesalers and village headmen, is now the Mino history museum. Each October the street is lit with lanterns made in the town's own paper for the Mino washi lantern art exhibition.",
          ja:"紙問屋は大きな家を建て、屋根の両端に<strong>うだつ</strong>を上げた。漆喰塗りの土の短い壁が屋根の線から立ち上がり、それ自体が小さな瓦屋根を載せる。隣家から隣家へ火が移るのを防ぐためのものである。費用がかかったため、それは成功のしるしとなり、いつまでも出世しない人をいまも「うだつが上がらない」という。町で最も大きな商家、紙問屋で庄屋も務めた今井家の住宅は、いま美濃史料館になっている。毎年十月、この通りは町の紙でつくった灯りでともされる——美濃和紙あかりアート展である。",
          zh:"紙商們蓋起了大宅，並在屋頂兩端豎起<strong>卯建</strong>：一種抹灰土造的短牆，穿出屋頂線，頂上另有一個小小的瓦屋頂，用來阻止火勢從一戶延燒到另一戶。由於造價昂貴，卯建成了成功的象徵；日語至今仍把一輩子不得志的人說成「卯建立不起來」（うだつが上がらない）。鎮上最大的商家——身兼紙批發商與村長的今井家——如今是美濃史料館。每年十月，這條街會點起以當地和紙製成的燈，這便是美濃和紙燈光藝術展。" } }
      ]
    },

    { t:"section", id:"gujo",
      title:{ en:"Gujō-Hachiman: a town of water", ja:"郡上八幡——水の町", zh:"郡上八幡：水之町" }, jp:"宗祇水 · 用水 · 食品サンプル",
      body:[
        { t:"p", text:{
          en:"Gujō-Hachiman sits where the Yoshida and the Kodara join the upper Nagara, under a castle on a steep hill. Its keep, rebuilt in wood in 1933 on the model of Ōgaki's, is the oldest wooden reconstructed castle keep in Japan. Water drawn from the rivers runs along the lanes in stone channels, with steps down to them — <em>kawado</em> — where vegetables were washed and pots scoured. Some houses still use a <em>mizubune</em>, a two- or three-chambered tank fed by a spring: drinking water and food in the first, dishes in the second, and the scraps flowing on to a pool where carp eat them before the water returns to the river. The spring called <strong>Sōgi-sui</strong>, after the fifteenth-century linked-verse master Iio Sōgi, who is said to have lived beside it, was the first on the Environment Agency's list of Japan's hundred finest waters in 1985.",
          ja:"郡上八幡は、吉田川と小駄良川が長良川上流に合わさる場所に、険しい山の上の城を戴いて位置する。天守は1933年に大垣城を手本に木造で再建されたもので、木造の再建天守としては日本最古である。川から引いた水が石の用水となって小路を流れ、そこへ下りる石段——川戸——で野菜を洗い、鍋を磨いた。いまも水舟を使う家がある。湧き水を引いた二槽か三槽の水槽で、一槽目は飲み水と食べ物、二槽目は食器に使い、流れ出た残りかすは下の池で鯉が食べ、水は川へ戻っていく。十五世紀の連歌師・飯尾宗祇がそのほとりに庵を結んだと伝わる湧水<strong>宗祇水</strong>は、1985年、環境庁の名水百選の第一号に選ばれた。",
          zh:"郡上八幡位於吉田川與小駄良川匯入長良川上游之處，頭頂一座建於陡峭山上的城。其天守於 1933 年仿大垣城以木材重建，是日本現存最古老的木造重建天守。從河川引來的水沿著小巷在石砌水渠中流淌，渠邊有石階下到水面——稱為「川戶」——供人洗菜、刷鍋。有些人家至今仍使用「水舟」——引湧泉注入的兩槽或三槽水槽：第一槽用於飲水與食物，第二槽洗碗盤，殘渣則流入下方的池子由鯉魚吃掉，水再流回河中。湧泉<strong>宗祇水</strong>，得名於傳說曾在泉邊結廬的十五世紀連歌大師飯尾宗祇，1985 年成為環境廳「名水百選」的第一號。" } },
        { t:"p", text:{
          en:"A fire in 1919 burned about six hundred buildings in the north of the town; they were rebuilt on the old plots in the old manner, and that rebuilt townscape of the Taishō and early Shōwa years is what the preservation district of 2012 protects. The town has a second, stranger craft: the plastic and wax food replicas that stand in the windows of Japanese restaurants. The business was pioneered in the 1930s by Iwasaki Takizō, a Gujō man, and makers in Gujō are said to produce about sixty per cent of Japan's replicas. In summer the town dances — see <a href=\"festivals.html#gujo\">Gujō Odori</a>.",
          ja:"1919年の大火で町の北側の約六百棟が焼けた。家々は元の敷地割りのまま伝統的な様式で建て直され、2012年の保存地区が守っているのは、その大正から昭和初期にかけて再建された町並みである。この町にはもう一つ、変わった産業がある。日本の飲食店の店先に並ぶ、合成樹脂や蠟の食品サンプルである。1930年代に郡上出身の岩崎瀧三がこれを事業化し、郡上の業者は全国の食品サンプルの約六割を生産するといわれる。夏には町が踊る——<a href=\"festivals.html#gujo\">郡上おどり</a>を参照。",
          zh:"1919 年的一場大火燒毀了鎮北約六百棟建築；它們在原有的地塊上依舊式重建，而 2012 年劃定的保存地區所保護的，正是這片大正至昭和初年重建的街景。這座城鎮還有第二種、更奇特的工藝：擺在日本餐廳櫥窗裡的樹脂與蠟製食物模型。這門生意由郡上出身的岩崎瀧三在 1930 年代開創，據說郡上的業者生產了全日本約六成的食物模型。夏天，全鎮起舞——見<a href=\"festivals.html#gujo\">郡上舞</a>。" } }
      ]
    },

    { t:"section", id:"others",
      title:{ en:"Iwamura, Ōgaki and the rest", ja:"岩村、大垣、そしてほかの町", zh:"岩村、大垣及其他" }, jp:"岩村城 · 水都大垣 · 飛騨古川",
      body:[
        { t:"grid", cols:2, cells:[
          { k:{en:"Iwamura",ja:"岩村",zh:"岩村"}, jp:"恵那市",
            body:{en:"A castle town under Iwamura castle, whose summit stands at 717 m — said to be the highest-sited castle in Japan, counted with Takatori and Bitchū-Matsuyama as one of the three great mountain castles, and known as the castle of mist. In the 1570s it was held for a time by a woman, Lady Otsuya, Oda Nobunaga's aunt and the widow of its lord, before it fell to the Takeda. The merchant street below was selected in 1998.",ja:"岩村城の城下町。城の本丸は標高717メートルにあり、日本で最も高い所に築かれた城といわれる。高取城・備中松山城とともに日本三大山城に数えられ、霧ヶ城とも呼ばれる。1570年代には、織田信長の叔母で城主の未亡人であったおつやの方という女性が一時城を守り、やがて武田方の手に落ちた。城下の町人町の通りは1998年に選定された。",zh:"岩村城下的城下町。城的本丸位於海拔 717 公尺，據說是日本建在最高處的城，與高取城、備中松山城並稱日本三大山城，又稱「霧之城」。1570 年代，一位女性——織田信長的姑母、城主的遺孀阿艷夫人（おつやの方）——曾一度守城，之後城落入武田方之手。城下的町人街於 1998 年獲選。"} },
          { k:{en:"Ōgaki",ja:"大垣",zh:"大垣"}, jp:"水都",
            body:{en:"The “water capital”: a castle town on the Ibi plain where artesian wells rise all over the town. Bashō ended the journey of <em>The Narrow Road to the Deep North</em> here in 1689. Its summer sweet, <em>mizu-manjū</em>, is chilled in the well water; see <a href=\"food.html\">Food</a>.",ja:"「水都」。揖斐川の平野の城下町で、町のいたるところで自噴の井戸が湧く。芭蕉は1689年、『おくのほそ道』の旅をここで結んだ。夏の菓子、水まんじゅうは井戸水で冷やす。<a href=\"food.html\">食</a>を参照。",zh:"「水都」。揖斐川平原上的城下町，全城各處都有自噴井湧出。芭蕉於 1689 年在此結束了《奧之細道》之旅。夏季甜點水饅頭便是以井水冰鎮；見<a href=\"food.html\">飲食</a>。"} },
          { k:{en:"Hida-Furukawa",ja:"飛騨古川",zh:"飛驒古川"}, jp:"瀬戸川と白壁土蔵街",
            body:{en:"A small castle town north of Takayama, quieter and rougher, with white-walled storehouses along the Seto river canal, carp in the canal, and two old breweries. Its festival's night drum is on the <a href=\"festivals.html\">Festivals</a> page.",ja:"高山の北の小さな城下町。より静かで、より素朴である。瀬戸川の用水沿いに白壁の土蔵が並び、水には鯉が泳ぎ、古い酒蔵が二軒ある。祭りの夜の太鼓は<a href=\"festivals.html\">祭り</a>の頁に。",zh:"高山以北的小城下町，更安靜也更質樸：瀨戶川水渠沿岸排列著白牆土藏，渠中有鯉魚，還有兩家老酒藏。其祭典的夜鼓，見<a href=\"festivals.html\">祭典</a>頁。"} },
          { k:{en:"Kawaramachi, Gifu",ja:"岐阜・川原町",zh:"岐阜・川原町"}, jp:"湊町",
            body:{en:"The old river-port quarter under Mount Kinka, where timber and paper were landed from the upper Nagara; latticed houses line the street down to the cormorant-fishing landing. See <a href=\"ukai.html\">Cormorant Fishing</a>.",ja:"金華山の下の古い川湊の町。長良川上流からの材木や紙がここで陸揚げされた。格子の家並みが鵜飼の乗船場へ続く。<a href=\"ukai.html\">鵜飼</a>を参照。",zh:"金華山下的古老河港街區，長良川上游的木材與紙在此卸貨；格子町家沿街排列，一直延伸到鵜飼的上船處。見<a href=\"ukai.html\">鵜飼</a>。"} }
        ] },
        { t:"note", label:{en:"Visiting",ja:"訪ねるとき",zh:"參訪須知"}, text:{
          en:"These are lived-in streets. Most houses are private homes and shops; the museum houses — Kusakabe, Yoshijima, Imai, the Takayama Jin'ya — are the ones open inside.",
          ja:"これらは人が暮らす町並みである。ほとんどの家は私邸や商店であり、内部を公開しているのは日下部家、吉島家、今井家、高山陣屋などの施設である。",
          zh:"這些是有人居住的街道。大多數房屋是私宅與商店；開放內部參觀的是日下部家、吉島家、今井家、高山陣屋等設施。" } }
      ]
    },

    { t:"related", items:[
      { href:"roads.html", why:{ en:"The post towns of the Nakasendō.", ja:"中山道の宿場町。", zh:"中山道的宿場町。" } },
      { href:"shirakawago.html", why:{ en:"The first of the six districts.", ja:"六つの地区の最初の一つ。", zh:"六處保存地區中的第一處。" } },
      { href:"edo.html", why:{ en:"Why Hida was ruled by the shogun.", ja:"飛騨が幕府の直轄となった理由。", zh:"飛驒為何由幕府直轄。" } },
      { href:"washi.html", why:{ en:"The paper that built Mino.", ja:"美濃の町をつくった紙。", zh:"造就美濃的紙。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- roads */
GIFU.pages["roads"] = {
  kicker: { en: "Culture · 06", ja: "文化 · 06", zh: "文化 · 06" },
  title:  { en: "The Nakasendō & Old Roads", ja: "中山道と街道", zh: "中山道與古道" },
  jp: "東山道 · 中山道 · 美濃路 · 飛騨街道 · 野麦峠",
  lede: {
    en: "Mino has always been a corridor. The ancient road to the east crossed it and was guarded at Fuwa; in the Edo period seventeen of the sixty-nine post towns of the Nakasendō, the inland highway from Edo to Kyoto, lay in what is now Gifu, and a branch road, the Minoji, joined it to the Tōkaidō. Hida, by contrast, was reached over passes, and its roads carried timber and yellowtail and, in the Meiji era, the girls who went over the Nomugi pass to the silk mills.",
    ja: "美濃は昔から回廊であった。東へ向かう古代の道はここを通り、不破で守られた。江戸時代には、江戸と京を内陸で結ぶ中山道六十九次のうち十七の宿場がいまの岐阜県にあり、脇街道の美濃路が中山道と東海道をつないだ。対して飛騨へは峠を越えて入った。その道は材木と鰤を運び、明治には野麦峠を越えて製糸工場へ向かう娘たちが通った。",
    zh: "美濃自古就是一條走廊。通往東方的古代道路穿過此地，並在不破設關把守；江戶時代，連接江戶與京都的內陸幹道中山道共六十九宿，其中十七宿位於今日的岐阜縣，而支線美濃路則把中山道與東海道連接起來。相對地，飛驒必須翻越山口才能抵達；它的道路運送木材與鰤魚，明治時代，還有翻越野麥嶺前往製絲工廠的少女們走過。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"The Nakasendō in Gifu, schematic, from Magome in the east to Imasu on the border of Ōmi. Numbers are each station's place among the 69 counted from Edo. Magome was a Kiso station in Shinano and joined Gifu in 2005; the other sixteen are the Mino stations. The three great rivers were crossed by ferry.",
        ja:"岐阜県内の中山道（模式図）。東の馬籠から近江との境の今須まで。数字は江戸から数えた六十九次のうちの順番。馬籠は信濃の木曽の宿で、2005年に岐阜県となった。ほかの十六宿が美濃の宿である。三つの大河は渡し船で渡った。",
        zh:"岐阜縣境內的中山道（示意圖），東起馬籠，西至與近江交界的今須。數字為各宿在從江戶起算六十九宿中的順序。馬籠原是信濃木曾的宿場，2005 年劃入岐阜縣；其餘十六宿為美濃之宿。三條大河以渡船橫渡。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 500" role="img" aria-label="The post towns of the Nakasendo in Gifu">' +
          '<rect x="0.5" y="0.5" width="759" height="499" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"THE NAKASENDŌ IN GIFU", ja:"岐阜県内の中山道", zh:"岐阜縣境內的中山道" }) + '</text>' +
          '<text x="236" y="54" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"↑ east — the Kiso valley, Edo",ja:"↑ 東——木曽谷、江戸",zh:"↑ 東——木曾谷、江戶"}) + '</text>' +
          '<text x="236" y="482" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"↓ west — Ōmi, Kyoto",ja:"↓ 西——近江、京",zh:"↓ 西——近江、京都"}) + '</text>';
        var st = [
          [43, {en:"Magome",ja:"馬籠",zh:"馬籠"}, {en:"Shimazaki Tōson's birthplace; in Gifu since 2005",ja:"島崎藤村の生地。2005年から岐阜県",zh:"島崎藤村出生地；2005 年起屬岐阜縣"}],
          [44, {en:"Ochiai",ja:"落合",zh:"落合"}, {en:"stone-paved slope through the woods",ja:"林を抜ける石畳の坂",zh:"穿林而過的石板坡道"}],
          [45, {en:"Nakatsugawa",ja:"中津川",zh:"中津川"}, {en:"market town of eastern Mino",ja:"東美濃の商いの町",zh:"東美濃的商業城鎮"}],
          [46, {en:"Ōi",ja:"大井",zh:"大井"}, {en:"six right-angle turns (masugata)",ja:"六か所の枡形",zh:"六處直角轉彎（枡形）"}],
          [47, {en:"Ōkute",ja:"大湫",zh:"大湫"}, {en:"the Biwa pass: long stone paving",ja:"琵琶峠の長い石畳",zh:"琵琶嶺：長段石板路"}],
          [48, {en:"Hosokute",ja:"細久手",zh:"細久手"}, {en:"a small station on the ridge",ja:"尾根の小さな宿",zh:"山脊上的小宿"}],
          [49, {en:"Mitake",ja:"御嵩",zh:"御嵩"}, {en:"temple town of Gankyō-ji",ja:"願興寺の門前",zh:"願興寺門前"}],
          [50, {en:"Fushimi",ja:"伏見",zh:"伏見"}, {en:"",ja:"",zh:""}],
          [51, {en:"Ōta",ja:"太田",zh:"太田"}, {en:"the Ōta ferry: one of the road's three worst places",ja:"太田の渡し——中山道三大難所の一つ",zh:"太田渡口——中山道三大難關之一"}],
          [52, {en:"Unuma",ja:"鵜沼",zh:"鵜沼"}, {en:"facing Inuyama castle across the Kiso",ja:"木曽川を挟み犬山城と向き合う",zh:"隔木曾川與犬山城相望"}],
          [53, {en:"Kanō",ja:"加納",zh:"加納"}, {en:"castle town beside Gifu; the largest in Mino",ja:"岐阜の隣の城下町。美濃最大の宿",zh:"岐阜旁的城下町；美濃最大的宿"}],
          [54, {en:"Gōdo",ja:"河渡",zh:"河渡"}, {en:"",ja:"",zh:""}],
          [55, {en:"Mieji",ja:"美江寺",zh:"美江寺"}, {en:"",ja:"",zh:""}],
          [56, {en:"Akasaka",ja:"赤坂",zh:"赤坂"}, {en:"river port; limestone of Kinshōzan",ja:"川湊。金生山の石灰",zh:"河港；金生山的石灰"}],
          [57, {en:"Tarui",ja:"垂井",zh:"垂井"}, {en:"the Minoji branches off to the Tōkaidō",ja:"美濃路が分かれ東海道へ",zh:"美濃路由此分出通往東海道"}],
          [58, {en:"Sekigahara",ja:"関ケ原",zh:"關原"}, {en:"the Fuwa barrier (673–789); the battlefield of 1600",ja:"不破関（673〜789年）、1600年の戦場",zh:"不破關（673–789 年）；1600 年的戰場"}],
          [59, {en:"Imasu",ja:"今須",zh:"今須"}, {en:"last station before Ōmi; its toiya office survives",ja:"近江手前の最後の宿。問屋場が現存",zh:"進入近江前的最後一宿；問屋場現存"}]
        ];
        var y0 = 76, dy = 23.4, X = 216;
        s += '<line x1="' + X + '" y1="64" x2="' + X + '" y2="466" stroke="#201E1B" stroke-width="2"/>';
        /* river crossings: between index i and i+1 */
        var rivers = [
          [8,  {en:"Kiso — Ōta ferry",ja:"木曽川——太田の渡し",zh:"木曾川——太田渡口"}],
          [10, {en:"Nagara — Gōdo ferry",ja:"長良川——河渡の渡し",zh:"長良川——河渡渡口"}],
          [12, {en:"Ibi — Roku ferry",ja:"揖斐川——呂久の渡し",zh:"揖斐川——呂久渡口"}]
        ];
        rivers.forEach(function (r) {
          var y = y0 + (r[0] + 0.5) * dy;
          s += '<line x1="' + (X - 40) + '" y1="' + y + '" x2="' + (X + 40) + '" y2="' + y + '" stroke="#8FA6AE" stroke-width="3"/>' +
               '<text x="' + (X - 46) + '" y="' + (y + 3.5) + '" text-anchor="end" ' + F + ' font-size="9.5" font-style="italic" fill="#5E7780">' + L(r[1]) + '</text>';
        });
        /* Jusan-toge bracket between Oi (3) and Okute (4) */
        var jy1 = y0 + 3 * dy + 5, jy2 = y0 + 4 * dy - 5;
        s += '<path d="M' + (X - 26) + ' ' + jy1 + ' L' + (X - 32) + ' ' + jy1 + ' L' + (X - 32) + ' ' + jy2 + ' L' + (X - 26) + ' ' + jy2 + '" fill="none" stroke="#7C6B52"/>' +
             '<text x="' + (X - 38) + '" y="' + ((jy1 + jy2) / 2 + 3.5) + '" text-anchor="end" ' + F + ' font-size="9.5" fill="#7C6B52">' + L({en:"Jūsan-tōge: “13 passes and 7 more”",ja:"十三峠におまけが七つ",zh:"十三峠「外加七個」"}) + '</text>';
        st.forEach(function (a, i) {
          var y = y0 + i * dy;
          var mag = (i === 0);
          s += '<rect x="' + (X - 4) + '" y="' + (y - 4) + '" width="8" height="8" fill="' + (mag ? "#FBFAF7" : "#201E1B") + '" stroke="#201E1B" stroke-width="1.2"/>' +
               '<text x="' + (X - 12) + '" y="' + (y + 3.5) + '" text-anchor="end" ' + F + ' font-size="9" fill="#8B857C">' + a[0] + '</text>' +
               '<text x="' + (X + 12) + '" y="' + (y + 4) + '" ' + F + ' font-size="11" fill="#201E1B" font-weight="600">' + L(a[1]) + '</text>' +
               '<text x="' + (X + 104) + '" y="' + (y + 4) + '" ' + F + ' font-size="9.5" fill="#55504A">' + L(a[2]) + '</text>';
        });
        s += '<text x="30" y="482" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"■ Mino station  □ Kiso station",ja:"■ 美濃の宿　□ 木曽の宿",zh:"■ 美濃之宿　□ 木曾之宿"}) + '</text>' +
             '<text x="730" y="482" text-anchor="end" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — stations evenly spaced",ja:"模式図——宿の間隔は等間隔に描く",zh:"示意圖——各宿以等距繪製"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"four",
      title:{ en:"Four roads", ja:"四つの道", zh:"四條道路" }, jp:"東山道 · 中山道 · 美濃路 · 飛騨街道",
      body:[
        { t:"defs", items:[
          { term:{en:"Tōsandō",ja:"東山道",zh:"東山道"}, jp:"古代の官道",
            def:{en:"The ancient state road from the capital to the eastern provinces, laid out in the seventh and eighth centuries with relay stations for official messengers. It entered Mino through the <strong>Fuwa barrier</strong> at Sekigahara, one of the three great barriers set up in 673 to guard the capital and abolished in 789, and left it over the <strong>Misaka pass</strong> (1,569 m) into Shinano, remembered as the worst place on the whole road; offerings left by travellers have been dug up at the summit.",ja:"都と東国を結んだ古代の官道。七〜八世紀に整えられ、公用の使者のための駅家が置かれた。関ヶ原の<strong>不破関</strong>——673年に都を守るため置かれた三関の一つで、789年に廃止——から美濃に入り、<strong>神坂峠</strong>（1,569メートル）で信濃へ抜けた。神坂峠は東山道第一の難所とされ、頂上からは旅人の手向けの品が出土している。",zh:"從都城通往東國的古代官道，七至八世紀間修築，並設有供公務使者使用的驛站。它經由關原的<strong>不破關</strong>進入美濃——不破關是 673 年為守衛都城而設的三關之一，789 年廢止——再翻越<strong>神坂嶺</strong>（1,569 公尺）進入信濃；神坂嶺被視為整條道路上最險的一段，山頂曾出土旅人留下的祭祀供品。"} },
          { term:{en:"Nakasendō",ja:"中山道",zh:"中山道"}, jp:"六十九次",
            def:{en:"One of the five highways of the Tokugawa shogunate: 69 post towns between Nihonbashi in Edo and Sanjō Ōhashi in Kyoto, through the mountains rather than along the coast. Sixteen stations lay in Mino; Magome, the last of the eleven Kiso stations, came into Gifu when its village joined Nakatsugawa in 2005, the only merger across a prefectural border in the Heisei era.",ja:"徳川幕府の五街道の一つ。江戸日本橋から京三条大橋まで、海沿いではなく山中を通る六十九の宿場があった。美濃には十六宿があり、木曽十一宿の最後の宿である馬籠は、2005年に旧山口村が中津川市に編入されて岐阜県に入った。平成の時代に県境を越えた唯一の合併である。",zh:"德川幕府五街道之一：從江戶日本橋到京都三條大橋，不沿海岸而穿山而行，共六十九個宿場。美濃境內有十六宿；木曾十一宿的最後一宿馬籠，則在 2005 年其所屬村併入中津川市時劃入岐阜縣——這是平成年間唯一一次跨縣合併。"} },
          { term:{en:"Minoji",ja:"美濃路",zh:"美濃路"}, jp:"脇往還",
            def:{en:"A branch road of seven stations — Nagoya, Kiyosu, Inaba, Hagiwara, Okoshi, Sunomata and Ōgaki — joining the Tōkaidō at Miya (Atsuta) to the Nakasendō at Tarui. Tokugawa Ieyasu came back this way after Sekigahara in 1600, and it was called the road of good omen. Daimyo processions, the Korean embassies, the Ryūkyū missions and the tea-jar procession from Uji all used it.",ja:"宮（熱田）で東海道に、垂井で中山道につながる七宿——名古屋・清須・稲葉・萩原・起・墨俣・大垣——の脇往還。1600年、徳川家康は関ヶ原の戦いの後この道を通って凱旋し、以来「吉例街道」と呼ばれた。大名行列、朝鮮通信使、琉球使節、宇治の御茶壺道中が通った。",zh:"一條有七個宿場——名古屋、清須、稻葉、萩原、起、墨俁、大垣——的支線道路，在宮（熱田）連接東海道，在垂井連接中山道。1600 年關原之戰後，德川家康由此凱旋，此後被稱為「吉例街道」。大名行列、朝鮮通信使、琉球使節與宇治的御茶壺行列都走這條路。"} },
          { term:{en:"The Hida roads",ja:"飛騨の街道",zh:"飛驒的街道"}, jp:"飛騨街道 · 越中街道 · 野麦街道",
            def:{en:"Takayama was the hub of a web of mountain roads rather than a stop on a highway: south down the Hida river valley to Mino, north along the Miya and Jinzū rivers to Toyama, and east over the Nomugi pass to Matsumoto in Shinano. They were walked by porters and packhorses and were shut for months by snow.",ja:"高山は幹線の宿場というより、山の街道の網の結び目であった。南は飛騨川の谷を下って美濃へ、北は宮川・神通川沿いに富山へ、東は野麦峠を越えて信濃の松本へ。歩荷と馬が荷を運び、雪で何か月も閉ざされた。",zh:"高山與其說是幹道上的一站，不如說是山間道路網的樞紐：向南沿飛驒川河谷下到美濃，向北沿宮川、神通川通往富山，向東翻越野麥嶺抵達信濃的松本。這些道路靠挑夫與馱馬通行，每年都會被大雪封閉數月。"} }
        ] }
      ]
    },

    { t:"section", id:"stations",
      title:{ en:"Walking the Mino stations", ja:"美濃の宿を歩く", zh:"走過美濃諸宿" }, jp:"石畳 · 枡形 · 十三峠 · 渡し",
      body:[
        { t:"p", text:{
          en:"The eastern stations are hill towns. From Magome — the birthplace of the novelist Shimazaki Tōson, whose <em>Before the Dawn</em> is set there — a stone-paved path goes down through cedar woods to Ochiai. Ōi, in Ena, had six <em>masugata</em>, right-angle turns in the street meant to slow an attacking force, more than any other station on the road. West of Ōi the road ran along a broken ridge, the <strong>Jūsan-tōge</strong>: “thirteen passes and seven more thrown in”, more than twenty climbs and descents to Ōkute. Beyond Ōkute the Biwa pass keeps about seven hundred metres of old stone paving.",
          ja:"東の宿は山の町である。小説家・島崎藤村の生地で、『夜明け前』の舞台となった馬籠から、石畳の道が杉林を下って落合へ向かう。恵那の大井宿には、攻め手の勢いをそぐため道を直角に曲げた枡形が六か所あり、中山道の宿場で最も多い。大井の西、道は起伏の多い尾根を行く——「十三峠におまけが七つ」といわれた<strong>十三峠</strong>で、大湫までに二十を超える上り下りがある。大湫の先の琵琶峠には、約七百メートルの古い石畳が残る。",
          zh:"東段的宿場都是山城。從小說家島崎藤村的出生地、也是其小說《黎明之前》舞台的馬籠出發，一條石板路穿過杉林下到落合。惠那的大井宿有六處「枡形」——為減緩敵軍攻勢而讓街道直角轉彎的設計——是中山道諸宿中最多的。大井以西，道路沿著起伏破碎的山脊前行，這就是<strong>十三峠</strong>：「十三個山口，外加七個」，到大湫為止上下坡超過二十次。過了大湫，琵琶嶺仍保留約七百公尺的古石板路。" } },
        { t:"p", text:{
          en:"In the lowlands the obstacles were rivers. At Ōta the road crossed the Kiso by ferry, and a traveller's saying named the <strong>Ōta ferry</strong> with the hanging bridges of Kiso and the Usui pass as the three worst places on the Nakasendō; a rising river could hold travellers at Ōta for days. The Nagara was crossed at Gōdo and the Ibi at Roku, where in the tenth month of 1861 the imperial princess Kazunomiya, on her way to marry the shogun Iemochi, crossed in boats prepared by the Ōgaki domain and wrote a poem on the autumn leaves across the water. The Roku ferry ran until river works moved the channel in 1925.",
          ja:"平地では、難所は川であった。太田宿で道は木曽川を渡し船で渡り、旅人の言葉は<strong>太田の渡し</strong>を、木曽の桟、碓氷峠とともに中山道の三大難所に数えた。川が増水すれば、旅人は何日も太田に足止めされた。長良川は河渡で、揖斐川は呂久で渡った。1861年10月、将軍家茂に嫁ぐため下向する皇女和宮は、大垣藩が用意した御座船で呂久の渡しを渡り、対岸の紅葉を歌に詠んだ。呂久の渡しは1925年、河川改修で流路が移るまで続いた。",
          zh:"到了平地，障礙便是河流。在太田宿，道路以渡船橫越木曾川；旅人的俗諺把<strong>太田渡口</strong>與木曾的棧道、碓冰嶺並列為中山道三大難關——河水一漲，旅人便可能在太田滯留數日。長良川在河渡渡過，揖斐川則在呂久渡過：1861 年十月，前往嫁給將軍家茂的皇女和宮，乘坐大垣藩準備的御座船渡過呂久，並為對岸的紅葉詠了一首和歌。呂久渡口一直使用到 1925 年河川整治使河道改移為止。" } },
        { t:"p", text:{
          en:"West of the rivers come Akasaka, a river port at the foot of the limestone hill of Kinshōzan; Tarui, where the Minoji branches off; Sekigahara, with the site of the Fuwa barrier and the battlefield of 1600 — see <a href=\"sekigahara.html\">Sekigahara</a>; and Imasu, the last station in Mino, where the office of the Yamazaki family, who ran the post-horse and porter service, still stands — the only such building among the sixteen to survive.",
          ja:"川の西には、石灰の山・金生山のふもとの川湊である赤坂、美濃路が分かれる垂井、不破関跡と1600年の戦場のある関ヶ原（<a href=\"sekigahara.html\">関ヶ原</a>を参照）、そして美濃最後の宿・今須が続く。今須では人馬の継立を担った山崎家の問屋場がいまも残り、美濃十六宿で当時のまま現存する唯一のものである。",
          zh:"過了河川，依序是：位於石灰岩山金生山山腳的河港赤坂；美濃路由此分出的垂井；有不破關遺址與 1600 年古戰場的關原（見<a href=\"sekigahara.html\">關原</a>）；以及美濃最後一宿今須——負責人馬接力的山崎家問屋場至今猶存，是美濃十六宿中唯一保存原貌的一處。" } }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"Over the passes to Hida", ja:"峠を越えて飛騨へ", zh:"翻山越嶺到飛驒" }, jp:"鰤街道 · 野麦峠",
      body:[
        { t:"p", text:{
          en:"The Hida roads carried what the mountains lacked. In winter, yellowtail caught in Toyama Bay was salted and carried south on the Etchū road to Takayama; what went on over the Nomugi pass to Matsumoto and the villages of Shinano was sold there as “Hida yellowtail”, and a salted buri was the centre of the New Year meal in towns that never saw the sea. Rice, salt and cloth came up the valleys; timber went down them, mostly by water — see <a href=\"rafting.html\">Timber Down the Rivers</a>.",
          ja:"飛騨の街道は、山にないものを運んだ。冬、富山湾でとれた鰤は塩をして越中街道を高山へ南下し、さらに野麦峠を越えて松本や信濃の村々へ運ばれたものは、かの地で「飛騨鰤」として売られた。海を見ることのない町で、塩鰤は正月の膳の中心であった。米・塩・布が谷をさかのぼり、材木は谷を下った。その多くは水の道によった。<a href=\"rafting.html\">川を下った木</a>を参照。",
          zh:"飛驒的道路運送的是山中所缺之物。冬天，富山灣捕獲的鰤魚經鹽漬後，沿越中街道南運到高山；再翻越野麥嶺運往松本與信濃各村的，在當地以「飛驒鰤」之名販售——在那些從未見過海的城鎮，一尾鹽鰤就是新年宴席的主角。稻米、鹽與布匹沿河谷而上，木材則順河谷而下，大多走水路；見<a href=\"rafting.html\">順流而下的木材</a>。" } },
        { t:"p", text:{
          en:"The same Nomugi pass, 1,672 m high between Norikura and the ridges to the south, is remembered for another traffic. From the early Meiji era into the Taishō era, girls from Hida farms, many in their early teens, walked over it each year in late winter to work in the silk-reeling mills of Okaya and Suwa, and walked back at the year's end with their wages. Yamamoto Shigemi's oral history <em>Ah, Nomugi Pass</em> (1968) and the film made from it in 1979 made the pass a national memorial to them.",
          ja:"乗鞍岳と南の尾根のあいだにある標高1,672メートルの同じ野麦峠は、もう一つの往来でも記憶されている。明治初めから大正にかけて、飛騨の農家の娘たち——多くは十代前半——が毎年冬の終わりにこの峠を越えて岡谷や諏訪の製糸工場へ働きに行き、年の暮れに賃金を持って歩いて帰った。山本茂実の聞き書き『あゝ野麦峠』（1968年）と、1979年のその映画化によって、峠は彼女たちを記憶する国民的な場所となった。",
          zh:"同一座野麥嶺，海拔 1,672 公尺，位於乘鞍岳與南方山脊之間，還因另一種往來而為人銘記。從明治初年到大正年間，飛驒農家的少女們——許多才十出頭——每年冬末翻越此嶺，前往岡谷與諏訪的製絲工廠做工，年底再帶著工資步行回家。山本茂實根據口述訪談寫成的《啊，野麥嶺》（1968 年）及 1979 年改編的電影，使這座山口成為全國紀念她們的地方。" } }
      ]
    },

    { t:"section", id:"now",
      title:{ en:"From footpath to expressway", ja:"歩く道から高速道路へ", zh:"從步道到高速公路" }, jp:"鉄道 · 高速道路 · リニア",
      body:[
        { t:"timeline", items:[
          { year:"1880s", title:{en:"Railway through Sekigahara",ja:"関ヶ原を抜ける鉄道",zh:"穿越關原的鐵路"}, text:{en:"The line that became the Tōkaidō main line comes through the Sekigahara gap to Ōgaki and Gifu and on to Nagoya, taking the old corridor's traffic.",ja:"のちの東海道本線が関ヶ原の谷を抜けて大垣と岐阜に達し、名古屋へ延びて、古い回廊の往来を引き継ぐ。",zh:"日後成為東海道本線的鐵路穿過關原隘口抵達大垣與岐阜，再延伸到名古屋，承接了這條古老走廊的往來。"} },
          { year:"1934", title:{en:"Railway to Hida",ja:"飛騨へ鉄道",zh:"鐵路通往飛驒"}, text:{en:"The Takayama line is completed from Gifu to Toyama, and the Hida roads lose their porters.",ja:"高山本線が岐阜から富山まで全通し、飛騨の街道から歩荷が消える。",zh:"高山本線從岐阜全線通車至富山，飛驒古道上的挑夫從此消失。"} },
          { year:"1964", title:{en:"Shinkansen",ja:"新幹線",zh:"新幹線"}, text:{en:"The Tōkaidō Shinkansen opens with a station at Gifu-Hashima; the Meishin Expressway follows the old barrier route through Sekigahara.",ja:"東海道新幹線が開業し、岐阜羽島駅が置かれる。名神高速道路は古の関の道筋をたどって関ヶ原を抜ける。",zh:"東海道新幹線通車，設岐阜羽島站；名神高速公路則循古代關隘的路線穿越關原。"} },
          { year:"2008", title:{en:"Through the mountains",ja:"山を抜ける",zh:"穿越群山"}, text:{en:"On 5 July the Tōkai-Hokuriku Expressway is completed, 185 km from Ichinomiya to Toyama, with the Hida tunnel, then the second-longest road tunnel in Japan, under the Hida mountains.",ja:"7月5日、東海北陸自動車道が一宮から富山県まで185キロ全通。飛騨山地の下を抜ける飛騨トンネルは、当時日本で二番目に長い道路トンネルであった。",zh:"7 月 5 日，東海北陸自動車道全線通車，從一宮至富山全長 185 公里；穿越飛驒山地的飛驒隧道，當時是日本第二長的公路隧道。"} },
          { year:"2030s", title:{en:"Maglev",ja:"リニア",zh:"磁浮"}, text:{en:"A station of the Chūō Shinkansen maglev line between Tokyo and Nagoya is under construction near Nakatsugawa, a few kilometres from the Nakasendō; the opening date is not yet fixed.",ja:"東京—名古屋間の中央新幹線（リニア）の駅が、中山道から数キロの中津川市内に建設中である。開業時期は未定。",zh:"連接東京與名古屋的中央新幹線（磁浮）車站正在中津川市興建，距中山道僅數公里；通車時間尚未確定。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"towns.html", why:{ en:"The old towns the roads ran through.", ja:"街道が通った古い町。", zh:"道路穿過的老街。" } },
      { href:"sekigahara.html", why:{ en:"Where the roads met in 1600.", ja:"1600年、道の交わる場所で。", zh:"1600 年，道路交會之處。" } },
      { href:"food.html", why:{ en:"What the porters carried.", ja:"歩荷が運んだもの。", zh:"挑夫所運之物。" } },
      { href:"rafting.html", why:{ en:"The roads made of water.", ja:"水でできた道。", zh:"以水為路。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- food */
GIFU.pages["food"] = {
  kicker: { en: "Culture · 07", ja: "文化 · 07", zh: "文化 · 07" },
  title:  { en: "Food of Mino & Hida", ja: "美濃と飛騨の食", zh: "美濃與飛驒的飲食" },
  jp: "鮎 · 朴葉味噌 · 飛騨牛 · 栗きんとん · 富有柿 · 干し柿 · 寒天",
  lede: {
    en: "Gifu has no coast, and its cooking is the cooking of rivers, mountains and long winters. Mino, on the plain, eats sweetfish from the Nagara, persimmons from its orchards and chestnuts from the eastern hills; Hida, in the mountains, grills miso on dry magnolia leaves, eats its pickles hot in winter and raises the beef that now carries its name. Many of the dishes began as ways to keep food, and several were sent as tribute to emperors and shoguns.",
    ja: "岐阜には海がなく、その料理は川と山と長い冬の料理である。平野の美濃は長良川の鮎、果樹園の柿、東の丘の栗を食べ、山の飛騨は枯れた朴の葉で味噌を焼き、冬には漬物を熱くして食べ、いまその名を冠する牛を育てる。多くの料理は食べものを保たせるための工夫から始まり、いくつかは朝廷や将軍への献上品となった。",
    zh: "岐阜不靠海，它的菜餚是河流、山地與漫長冬季的菜餚。平原上的美濃吃長良川的香魚、果園的柿子與東部丘陵的栗子；山中的飛驒在乾燥的朴樹葉上烤味噌，冬天把醃菜加熱來吃，並飼養如今冠上其名的牛。許多菜餚起源於保存食物的方法，有幾樣還曾作為貢品獻給天皇與將軍。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"A year of Gifu food, schematic. Bars show the usual season for each food; dates move with the weather and the maker. Hida beef, hōba miso and gohei-mochi are eaten all year.",
        ja:"岐阜の食の一年（模式図）。帯はそれぞれの食べものの通常の季節を示す。時期は天候や作り手によって前後する。飛騨牛、朴葉味噌、五平餅は一年中食べられる。",
        zh:"岐阜飲食的一年（示意圖）。橫條表示各種食物的一般季節；實際時間會因天候與製作者而前後移動。飛驒牛、朴葉味噌與五平餅全年都吃得到。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 380" role="img" aria-label="Seasonal calendar of Gifu foods">' +
          '<rect x="0.5" y="0.5" width="759" height="379" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"A YEAR OF GIFU FOOD", ja:"岐阜の食の一年", zh:"岐阜飲食的一年" }) + '</text>';
        var X0 = 250, W = 40;
        var months = { en:["J","F","M","A","M","J","J","A","S","O","N","D"], ja:["1","2","3","4","5","6","7","8","9","10","11","12"], zh:["1","2","3","4","5","6","7","8","9","10","11","12"] };
        var ml = months[lang] || months.en;
        for (var m = 0; m < 12; m++) {
          s += '<text x="' + (X0 + m * W + W / 2) + '" y="62" text-anchor="middle" ' + F + ' font-size="10" fill="#8B857C">' + ml[m] + '</text>';
          if (m > 0) s += '<line x1="' + (X0 + m * W) + '" y1="70" x2="' + (X0 + m * W) + '" y2="336" stroke="#EAE6DD"/>';
        }
        s += '<rect x="' + X0 + '" y="70" width="' + (12 * W) + '" height="266" fill="none" stroke="#DFDAD0"/>';
        /* [label, where, ranges [[startMonth(1-12), endMonth], ...], fill] — month ends inclusive */
        var rows = [
          [{en:"Ayu (sweetfish)",ja:"鮎",zh:"香魚"}, {en:"Nagara, Gujō",ja:"長良川・郡上",zh:"長良川、郡上"}, [[5.4, 10.5]], "#E0E7E9"],
          [{en:"Hōba-zushi, fresh leaves",ja:"朴葉寿司（青葉）",zh:"朴葉壽司（新葉）"}, {en:"Hida, Gujō",ja:"飛騨・郡上",zh:"飛驒、郡上"}, [[6, 7.5]], "#E0E6DB"],
          [{en:"Mizu-manjū",ja:"水まんじゅう",zh:"水饅頭"}, {en:"Ōgaki",ja:"大垣",zh:"大垣"}, [[4.5, 9.5]], "#E9ECEE"],
          [{en:"Kuri-kinton",ja:"栗きんとん",zh:"栗金團"}, {en:"Nakatsugawa, Ena",ja:"中津川・恵那",zh:"中津川、惠那"}, [[9, 12.99], [1, 1.99]], "#EADCC1"],
          [{en:"Fuyū persimmon",ja:"富有柿",zh:"富有柿"}, {en:"Mizuho, Motosu, Ōno",ja:"瑞穂・本巣・大野",zh:"瑞穗、本巢、大野"}, [[10.6, 12.5]], "#EEE1DF"],
          [{en:"Hachiya dried persimmon",ja:"堂上蜂屋柿",zh:"堂上蜂屋柿"}, {en:"Minokamo",ja:"美濃加茂",zh:"美濃加茂"}, [[11, 12.99], [1, 1.5]], "#EDE5D2"],
          [{en:"Kanten (agar)",ja:"寒天づくり",zh:"寒天製作"}, {en:"Yamaoka, Ena",ja:"恵那市山岡",zh:"惠那市山岡"}, [[12, 12.99], [1, 2.99]], "#F0EDE4"],
          [{en:"Tsukemono steak",ja:"漬物ステーキ",zh:"醃菜排"}, {en:"Hida",ja:"飛騨",zh:"飛驒"}, [[12, 12.99], [1, 3.5]], "#E6E4E0"],
          [{en:"Hida beef, hōba miso, gohei-mochi",ja:"飛騨牛・朴葉味噌・五平餅",zh:"飛驒牛、朴葉味噌、五平餅"}, {en:"all year",ja:"通年",zh:"全年"}, [[1, 12.99]], "#E7DFD2"]
        ];
        rows.forEach(function (r, i) {
          var y = 82 + i * 28;
          s += '<text x="30" y="' + (y + 10) + '" ' + F + ' font-size="10.5" fill="#201E1B" font-weight="600">' + L(r[0]) + '</text>' +
               '<text x="30" y="' + (y + 22) + '" ' + F + ' font-size="9" fill="#8B857C">' + L(r[1]) + '</text>';
          r[2].forEach(function (g) {
            var x1 = X0 + (g[0] - 1) * W, x2 = X0 + g[1] * W;
            if (x2 > X0 + 12 * W) x2 = X0 + 12 * W;
            s += '<rect x="' + x1.toFixed(1) + '" y="' + (y + 3) + '" width="' + (x2 - x1).toFixed(1) + '" height="16" fill="' + r[3] + '" stroke="#7C6B52" stroke-width="0.8"/>';
          });
        });
        s += '<text x="30" y="364" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — usual seasons, not exact dates.",ja:"模式図——通常の季節を示し、正確な日付ではない。",zh:"示意圖——表示一般季節，並非確切日期。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"river",
      title:{ en:"The river: ayu", ja:"川の恵み——鮎", zh:"河的恩賜：香魚" }, jp:"鮎 · 鮎鮨 · 御鮨街道",
      body:[
        { t:"p", text:{
          en:"The sweetfish, <em>ayu</em>, lives one year: it hatches in autumn, goes down to the sea for the winter, comes back up the clear rivers in spring and grazes algae off the stones, which gives its flesh the faint smell of melon or cucumber that is prized. The Nagara's ayu is the centre of the river's designation as a Globally Important Agricultural Heritage System in 2015 — “the ayu of the clear-stream Nagara” — which recognises the whole chain of forest, water, fishing and eating along the river. It is caught by the cormorant fishers, by anglers with live decoys and by weirs, and eaten salt-grilled on a skewer, as sweetfish rice, or as <em>ayu-zōsui</em>.",
          ja:"鮎の命は一年である。秋に孵り、冬を海で過ごし、春に清流をのぼって石の苔を食む。そのために身は瓜や胡瓜に似たかすかな香りを帯び、それが尊ばれる。2015年、長良川は「清流長良川の鮎」として世界農業遺産に認定された。森と水と漁と食の、川に沿ったつながり全体が認められたのである。鮎は鵜飼で、友釣りで、簗で獲られ、串打ちの塩焼き、鮎飯、鮎雑炊として食べられる。",
          zh:"香魚的生命只有一年：秋天孵化，冬天下到海中，春天再溯清流而上，啃食石上的藻類，因而魚肉帶有類似香瓜或黃瓜的淡淡香氣，備受珍視。長良川的香魚是 2015 年該河獲認定為世界農業遺產——「清流長良川的香魚」——的核心，這項認定肯定的是沿河的森林、水、漁撈與飲食這整條連結。香魚以鵜飼、友釣（以活香魚作誘餌）與魚梁捕獲，做成串燒鹽烤、香魚飯或香魚雜炊來吃。" } },
        { t:"p", text:{
          en:"From the early Edo period to the first years of Meiji, the Owari domain sent Nagara ayu to the shogun as <em>nare-zushi</em>, fish packed with rice to ferment. The cormorants' catch was salted at the sushi office in Gifu, packed with rice into tubs and carried to Edo — six times a month from the fifth month to the eighth — timed to be ripe on arrival four or five days later. The first stretch of the route, south from Gifu through Kasamatsu, is still called the <strong>Osushi-kaidō</strong>, the sushi road.",
          ja:"江戸時代の初めから明治の初年まで、尾張藩は長良川の鮎を、飯とともに漬けて発酵させる「なれ鮨」にして将軍に献上した。鵜が獲った鮎は岐阜の御鮨所で塩漬けにされ、飯を詰めて桶に並べられ、五月から八月まで毎月六回、江戸へ運ばれた。四、五日後に着くころ食べごろになるよう計算されていたという。岐阜から笠松へ南下する最初の道筋は、いまも<strong>御鮨街道</strong>と呼ばれる。",
          zh:"從江戶初期到明治初年，尾張藩把長良川的香魚做成「熟壽司」（なれ鮨）——與米飯一起醃漬發酵的魚——獻給將軍。鸕鶿捕得的香魚在岐阜的御鮨所鹽漬，填入米飯排入木桶，從五月到八月每月送六次到江戶，據說經過計算，四五天後抵達時正好發酵到最佳時刻。從岐阜向南經笠松的第一段路線，至今仍叫作<strong>御鮨街道</strong>。" } }
      ]
    },

    { t:"section", id:"hida",
      title:{ en:"Hida: leaves, miso and pickles", ja:"飛騨——葉と味噌と漬物", zh:"飛驒：葉子、味噌與醃菜" }, jp:"朴葉味噌 · 漬物ステーキ · 高山ラーメン",
      body:[
        { t:"p", text:{
          en:"The big leaves of the Japanese magnolia, <em>hō</em>, are Hida's plate and wrapper. In early summer the fresh leaves wrap <em>hōba-zushi</em>, rice with trout or vegetables; in autumn the fallen leaves are gathered and dried, and through the year <strong>hōba miso</strong> is cooked on them — a dried leaf laid on a small charcoal brazier, spread with miso mixed with leeks and sometimes mushrooms or beef, and grilled at the table until it bubbles. In winter the pickled Chinese cabbage and red turnips of Hida freeze in their tubs, and the frozen pickles are fried with egg and eaten hot: <strong>tsukemono steak</strong>. <em>Mitarashi dango</em> in Takayama are glazed with soy sauce, not the sweet syrup used elsewhere.",
          ja:"朴の木の大きな葉は、飛騨の皿であり包みである。初夏には青葉で鱒や山菜の朴葉寿司を包み、秋には落ち葉を拾って干し、一年を通してその上で<strong>朴葉味噌</strong>を焼く。小さな七輪に枯れ葉をのせ、葱と、ときに茸や牛肉を混ぜた味噌をのせて、食卓でぐつぐついうまで焼く。冬には飛騨の白菜漬けや赤かぶ漬けが桶のなかで凍り、その凍った漬物を卵でとじて熱々で食べる——<strong>漬物ステーキ</strong>である。高山のみだらし団子は、よその甘いたれではなく醤油で焼く。",
          zh:"日本厚朴（朴樹）的大葉子，是飛驒的盤子與包裝。初夏以新鮮葉子包裹鱒魚或山菜做成朴葉壽司；秋天拾起落葉曬乾，一年到頭都在上面烤<strong>朴葉味噌</strong>——把乾葉放在小炭爐上，鋪上拌了蔥、有時再加菇類或牛肉的味噌，在餐桌上烤到冒泡。冬天，飛驒的醃白菜與紅蕪菁在桶中結凍，人們把凍醃菜加蛋煎熱來吃：這就是<strong>醃菜排</strong>。高山的御手洗糰子刷的是醬油，而不是其他地方的甜醬。" } },
        { t:"p", text:{
          en:"<strong>Takayama ramen</strong> — the locals say <em>chūka soba</em> — dates from 1938, when a cook named Sakaguchi Tokimune, who had seen Chinese cooks making noodles in Tokyo, began selling them from a street stall; the style is thin, curly noodles in a light soy broth in which stock and seasoning are simmered together. South of Hida, in Gero and Gujō, the family dish is <strong>keichan</strong>: chicken marinated in miso or soy and garlic and grilled with cabbage on an iron plate, a way of using hens that had stopped laying. Across the east of the prefecture <strong>gohei-mochi</strong>, pounded rice on a flat skewer brushed with a sauce of miso or soy with walnut or sesame and grilled, is sold at every roadside stall; its name is said to come either from the shape of the <em>gohei</em> wands offered at shrines or from a man called Gohei.",
          ja:"<strong>高山ラーメン</strong>——地元では中華そばという——は1938年、東京で中国人の料理人が麺を打つのを見た坂口時宗という料理人が屋台で売り出したのが始まりとされる。細い縮れ麺に、だしとたれを一緒に煮込んだあっさりした醤油味の汁が特徴である。飛騨の南、下呂や郡上の家庭料理は<strong>鶏ちゃん</strong>——味噌や醤油とにんにくのたれに漬けた鶏肉をキャベツと鉄板で焼く。卵を産まなくなった鶏を食べるための料理であった。県の東部一帯では、つぶした飯を平たい串に付け、胡桃や胡麻を合わせた味噌や醤油のたれを塗って焼く<strong>五平餅</strong>が、どの道端の店でも売られている。その名は神前に供える御幣の形から、あるいは五平という人の名からといわれる。",
          zh:"<strong>高山拉麵</strong>——當地人叫「中華蕎麥」——始於 1938 年：一位名叫坂口時宗的廚師在東京看過中國廚師打麵，便開始在路邊攤賣麵。其特色是細卷麵，配上高湯與醬汁一同熬煮的清淡醬油湯。飛驒以南的下呂與郡上，家常菜是<strong>雞醬燒</strong>（鶏ちゃん）：把雞肉浸在味噌或醬油加大蒜的醬汁裡，再與高麗菜一起在鐵板上烤——原本是為了吃掉不再下蛋的母雞。在縣東部各地，路邊小店都賣<strong>五平餅</strong>：把搗碎的米飯捏在扁平的竹籤上，刷上加了核桃或芝麻的味噌或醬油醬汁來烤；其名據說來自神社供奉的「御幣」形狀，或來自一位名叫五平的人。" } },
        { t:"note", label:{en:"Hida beef",ja:"飛騨牛",zh:"飛驒牛"}, text:{
          en:"To be sold as <strong>Hida beef</strong>, an animal must be a Japanese Black raised for at least fourteen months, for longest in Gifu, by a registered farmer, and graded 3, 4 or 5 for meat quality with a yield grade of A or B. The modern brand rests on one bull: <em>Yasufuku</em>, a Tajima bull born in Hyōgo in 1980 and bought by Gifu Prefecture in 1981, which sired more than 39,000 calves.",
          ja:"<strong>飛騨牛</strong>として売られるには、岐阜県内での飼養期間が最も長く、登録された生産者が十四か月以上肥育した黒毛和種で、肉質等級3・4・5、歩留等級AまたはBに格付けされなければならない。現在のブランドは一頭の牛の上に立っている。1980年に兵庫県で生まれ、1981年に岐阜県が購入した但馬牛の種雄牛<em>安福</em>で、その子は三万九千頭を超える。",
          zh:"要以<strong>飛驒牛</strong>之名販售，必須是由登記農家育肥至少十四個月、且在岐阜縣飼養時間最長的黑毛和種，肉質等級為 3、4 或 5 級，步留等級為 A 或 B。今天的品牌建立在一頭牛身上：<em>安福</em>——1980 年生於兵庫縣、1981 年由岐阜縣購入的但馬種公牛，其後代超過三萬九千頭。" } }
      ]
    },

    { t:"section", id:"sweet",
      title:{ en:"Chestnuts, persimmons and cold sweets", ja:"栗と柿と冷たい菓子", zh:"栗子、柿子與冰涼的點心" }, jp:"栗きんとん · 富有柿 · 堂上蜂屋柿 · 水まんじゅう · 寒天",
      body:[
        { t:"grid", cols:2, cells:[
          { k:{en:"Kuri-kinton",ja:"栗きんとん",zh:"栗金團"}, jp:"中津川",
            body:{en:"Steamed chestnuts mashed with a little sugar and squeezed in a cloth into the shape of a chestnut — nothing else. Nakatsugawa, on the Nakasendō, claims it; its oldest makers include Suya, whose family came to the post town in the Genroku era (1688–1704) and first ran a vinegar shop, and Kawakamiya, founded in 1864. It is made only from September into winter.",ja:"蒸した栗をつぶしてわずかな砂糖を加え、布巾で栗の形に絞る——それだけの菓子である。中山道の中津川が発祥を名乗り、老舗には、元禄年間（1688〜1704年）に宿場に来て酢屋を営んだのが始まりという「すや」や、1864年創業の「川上屋」がある。九月から冬にかけてだけつくられる。",zh:"把蒸熟的栗子搗碎、加少許糖，再用布巾擰成栗子的形狀——除此之外什麼都沒有。中山道上的中津川自稱是發源地；老字號包括「すや」——其家族於元祿年間（1688–1704 年）來到這個宿場，起初經營醋鋪——以及 1864 年創業的「川上屋」。只在九月到冬季製作。"} },
          { k:{en:"Fuyū persimmon",ja:"富有柿",zh:"富有柿"}, jp:"瑞穂",
            body:{en:"A large, flat, sweet persimmon selected from an old Gosho-type tree at Igura, in what is now Mizuho. Fukushima Saiji propagated it by grafting and named it in 1898 from a phrase in the <em>Book of Rites</em>, “wealth within the four seas”. It became Japan's leading sweet persimmon; Gifu ranked fourth among the prefectures for persimmons in 2023.",ja:"いまの瑞穂市居倉にあった御所柿系の古木から選ばれた、大きく扁平な甘柿。福嶌才治が接ぎ木でふやし、1898年、『礼記』の一節「富有四海之内」から名づけた。日本を代表する甘柿となり、岐阜県は2023年の柿の収穫量で全国四位である。",zh:"一種大而扁平的甜柿，選自今瑞穗市居倉一棵御所柿系的老樹。福嶌才治以嫁接繁殖，並在 1898 年取《禮記》中「富有四海之內」一語為其命名。它成了日本最具代表性的甜柿；2023 年岐阜縣的柿子收穫量居全國第四。"} },
          { k:{en:"Dōjō Hachiya-gaki",ja:"堂上蜂屋柿",zh:"堂上蜂屋柿"}, jp:"美濃加茂",
            body:{en:"Large astringent persimmons from Hachiya in Minokamo, peeled, hung to dry for about a month and hand-rubbed until they are sweet and coated in white sugar bloom. A Heian letter already thanks Mino for dried persimmons, and tradition says Minamoto no Yoritomo named the village <em>Hachiya</em>, “honey house”, for their sweetness. It is protected under Japan's geographical-indication system.",ja:"美濃加茂市蜂屋の大きな渋柿の皮をむき、ひと月ほど吊るして干し、手で揉みながら甘く、白い粉をふかせたもの。平安時代の書簡にすでに美濃から干し柿が届いた礼が見え、源頼朝がその甘さから村に「蜂屋」の名を与えたと伝わる。日本の地理的表示（GI）に登録されている。",zh:"將美濃加茂市蜂屋的大型澀柿去皮，吊掛風乾約一個月，並以手揉搓，直到變甜、表面覆上一層白色糖霜。平安時代的書信中已有感謝美濃送來柿餅的記載；相傳源賴朝因其甜美，賜村名為「蜂屋」（蜜蜂之家）。它已登錄為日本地理標示（GI）產品。"} },
          { k:{en:"Mizu-manjū and kaki-yōkan",ja:"水まんじゅうと柿羊羹",zh:"水饅頭與柿羊羹"}, jp:"大垣",
            body:{en:"Ōgaki's summer sweet: bean paste in a clear skin of kudzu and bracken starch, set in small cups and chilled in the town's cold well water, made since the Meiji era. In winter the town eats <em>kaki-yōkan</em>, persimmon jelly poured into split bamboo, the speciality of Tsuchiya, founded in 1755.",ja:"大垣の夏の菓子。葛粉とわらび粉の透きとおった皮で餡を包み、小さな器に入れて町の冷たい井戸水で冷やす。明治時代からつくられている。冬には、1755年創業の「つちや」の名物、割った竹に流し込んだ柿羊羹を食べる。",zh:"大垣的夏季點心：以葛粉與蕨粉製成的透明外皮包住豆沙，裝在小杯中，放進鎮上冰涼的井水裡冰鎮，自明治時代起製作。冬天，大垣人吃柿羊羹——把柿子羊羹倒入剖開的竹筒中，是 1755 年創業的「つちや」的招牌。"} },
          { k:{en:"Hoso-kanten",ja:"細寒天",zh:"細寒天"}, jp:"恵那市山岡",
            body:{en:"Thin strips of agar made in the open fields of Yamaoka in Ena from December to February. Seaweed jelly is cut into strips and set out on racks, where it freezes at night — the basin falls to about −15 °C before dawn — and thaws and dries by day. Yamaoka makes about eighty per cent of Japan's thin agar.",ja:"恵那市山岡町の野天で、十二月から二月にかけてつくられる細い寒天。天草を煮て固めたところてんを細く突き出して棚に並べると、夜には凍り——盆地は明け方に零下十五度ほどまで冷えこむ——昼には解けながら乾いていく。山岡は全国の細寒天の約八割を生産する。",zh:"惠那市山岡町從十二月到二月在露天田野製作的細條寒天。把煮石花菜凝成的凍切成細條，擺上架子，夜裡結冰——這個盆地黎明前會降到約攝氏零下十五度——白天再邊融化邊乾燥。山岡生產全日本約八成的細寒天。"} },
          { k:{en:"Coffee with breakfast",ja:"喫茶とモーニング",zh:"咖啡與早餐"}, jp:"岐阜市",
            body:{en:"Order a coffee in a Gifu café in the morning and toast, an egg and often much more come with it free. Gifu City led all Japan's major cities in household spending at coffee shops for several years in the early 2020s — about twice the national average in 2022 — until Nagoya overtook it.",ja:"朝、岐阜の喫茶店でコーヒーを頼むと、トーストや卵、ときにそれ以上のものが無料で付いてくる。岐阜市は2020年代初めの数年間、家計調査の喫茶代で主要都市の首位に立ち、2022年には全国平均のほぼ二倍であった。その後、名古屋市に抜かれている。",zh:"早上在岐阜的咖啡館點一杯咖啡，吐司、雞蛋，往往還有更多東西會免費附上。2020 年代初的幾年間，岐阜市在家計調查的咖啡館支出上居日本各主要城市之首——2022 年約為全國平均的兩倍——之後才被名古屋超越。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"sake.html", why:{ en:"What to drink with it.", ja:"合わせて飲むもの。", zh:"佐餐之酒。" } },
      { href:"ukai.html", why:{ en:"How the ayu for the shogun were caught.", ja:"将軍への鮎の獲り方。", zh:"獻給將軍的香魚如何捕得。" } },
      { href:"roads.html", why:{ en:"The yellowtail road over the mountains.", ja:"山を越えた鰤の道。", zh:"翻山越嶺的鰤魚之路。" } },
      { href:"doburoku.html", why:{ en:"Shirakawa's festival brew.", ja:"白川の祭りの酒。", zh:"白川祭典之酒。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- kabuki */
GIFU.pages["kabuki"] = {
  kicker: { en: "Culture · 08", ja: "文化 · 08", zh: "文化 · 08" },
  title:  { en: "Village Kabuki", ja: "地歌舞伎と芝居小屋", zh: "地歌舞伎與芝居小屋" },
  jp: "地歌舞伎 · 芝居小屋 · 農村舞台 · 能郷の能・狂言",
  lede: {
    en: "In the villages of Mino and Hida, farmers, carpenters and shopkeepers have played kabuki for their neighbours for four centuries, in theatres they built themselves. Gifu once had more rural stages than any other prefecture, still has about ten working playhouses and some thirty amateur companies — perhaps one in seven of all those left in Japan — and keeps an audience that throws coins wrapped in paper at the actors and shouts “Best in Japan!” at the right moments.",
    ja: "美濃と飛騨の村々では、農民や大工や商店主が四百年にわたって、自分たちで建てた芝居小屋で隣人のために歌舞伎を演じてきた。岐阜県はかつて全国で最も多くの農村舞台を持ち、いまも十ほどの現役の芝居小屋と、全国に残る地歌舞伎の保存会のおよそ七分の一にあたる三十ほどの保存会を擁する。そして客席は、役者に紙で包んだおひねりを投げ、ここぞというところで「日本一！」と声をかける。",
    zh: "在美濃與飛驒的村落，農夫、木匠與店家四百年來一直在自己親手蓋的戲棚裡，為鄉親演出歌舞伎。岐阜縣曾擁有全國最多的農村舞台，如今仍有約十座仍在使用的芝居小屋與約三十個業餘劇團——大約占全日本現存者的七分之一——而觀眾至今仍會向演員拋擲用紙包著的賞錢，並在恰當的時刻高喊「日本第一！」。"
  },
  body: [
    { t:"figure",
      caption:{
        en:"A village playhouse in plan, schematic, modelled on the larger Meiji-era houses such as the Kashimo Meiji-za. The stage has a revolving centre turned by hand from the pit below; the main runway, the <em>hanamichi</em>, runs through the audience on its left, with a trap lift at the point where actors stop to pose; a narrower second runway runs on the right. The audience sits on the floor in square boxes, with raised galleries at the sides and above.",
        ja:"芝居小屋の平面（模式図）。かしも明治座のような明治期の大きな小屋にならう。舞台には、下の奈落から人の手で回す回り舞台がある。本花道は客席の左手を貫き、役者が見得を切る位置にせり上げのすっぽんがある。右手にはより細い仮花道が通る。観客は床の升席に座り、両脇と上に一段高い桟敷がある。",
        zh:"芝居小屋平面圖（示意），以かしも明治座等明治時期的大型戲棚為範本。舞台中央有旋轉舞台，由下方奈落以人力轉動；主要的走道「花道」從觀眾席左側穿過，在演員停步亮相之處設有升降口「すっぽん」；右側另有一條較窄的臨時花道。觀眾席地坐在方形的升席中，兩側與上層則有架高的桟敷。" },
      svg: function (lang, L) {
        var F = 'font-family="system-ui,sans-serif"';
        var s = '<svg viewBox="0 0 760 430" role="img" aria-label="Plan of a village kabuki playhouse">' +
          '<rect x="0.5" y="0.5" width="759" height="429" fill="none" stroke="#DFDAD0"/>' +
          '<text x="30" y="28" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">' +
          L({ en:"A VILLAGE PLAYHOUSE, IN PLAN", ja:"芝居小屋の平面", zh:"芝居小屋平面圖" }) + '</text>';
        /* outer walls */
        s += '<rect x="180" y="52" width="400" height="336" fill="#FBFAF7" stroke="#201E1B" stroke-width="1.6"/>';
        /* stage */
        s += '<rect x="180" y="52" width="400" height="96" fill="#E7DFD2" stroke="#201E1B" stroke-width="1.2"/>' +
             '<circle cx="380" cy="100" r="38" fill="#EDE5D2" stroke="#7C6B52" stroke-dasharray="5 3" stroke-width="1.3"/>' +
             '<path d="M380 70 A30 30 0 0 1 406 86" fill="none" stroke="#7C6B52" stroke-width="1"/><path d="M406 86 l-1 -7 M406 86 l-7 -1" stroke="#7C6B52" stroke-width="1"/>';
        /* side galleries */
        s += '<rect x="180" y="148" width="44" height="240" fill="#E6E4E0" stroke="#55504A"/>' +
             '<rect x="536" y="148" width="44" height="240" fill="#E6E4E0" stroke="#55504A"/>';
        /* hanamichi main (left) and kari (right) */
        s += '<rect x="232" y="148" width="18" height="240" fill="#EADCC1" stroke="#201E1B"/>' +
             '<rect x="238" y="206" width="8" height="12" fill="#201E1B"/>' +
             '<rect x="514" y="148" width="12" height="240" fill="#EADCC1" stroke="#55504A"/>';
        /* masu seats */
        for (var yy = 156; yy < 380; yy += 28) {
          for (var xx = 258; xx < 506; xx += 31) {
            s += '<rect x="' + xx + '" y="' + yy + '" width="27" height="24" fill="#F0EDE4" stroke="#CDC6B9" stroke-width="0.8"/>';
          }
        }
        /* entrance */
        s += '<rect x="352" y="386" width="56" height="6" fill="#FBFAF7" stroke="#FBFAF7"/>' +
             '<text x="380" y="404" text-anchor="middle" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"entrance (kido)",ja:"木戸（入口）",zh:"木戶（入口）"}) + '</text>';
        /* labels */
        var LB = F + ' font-size="10.5" fill="#201E1B"';
        s += '<text x="596" y="78" ' + LB + '>' + L({en:"stage",ja:"舞台",zh:"舞台"}) + '</text>' +
             '<text x="596" y="96" ' + LB + '>' + L({en:"revolving stage",ja:"回り舞台",zh:"旋轉舞台"}) + '</text>' +
             '<text x="596" y="110" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"turned by hand from the pit",ja:"奈落から人力で回す",zh:"由奈落以人力轉動"}) + '</text>' +
             '<path d="M590 92 L420 98" stroke="#B4AC9C"/>' +
             '<text x="596" y="226" ' + LB + '>' + L({en:"second runway",ja:"仮花道",zh:"臨時花道"}) + '</text>' +
             '<path d="M590 222 L526 222" stroke="#B4AC9C"/>' +
             '<text x="596" y="300" ' + LB + '>' + L({en:"galleries (sajiki)",ja:"桟敷",zh:"桟敷（看台）"}) + '</text>' +
             '<text x="596" y="314" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"at the sides and upstairs",ja:"両脇と二階",zh:"兩側與二樓"}) + '</text>' +
             '<path d="M590 296 L580 296" stroke="#B4AC9C"/>' +
             '<text x="164" y="186" text-anchor="end" ' + LB + '>' + L({en:"hanamichi",ja:"本花道",zh:"花道"}) + '</text>' +
             '<path d="M168 182 L232 182" stroke="#B4AC9C"/>' +
             '<text x="164" y="216" text-anchor="end" ' + LB + '>' + L({en:"suppon — trap lift",ja:"すっぽん",zh:"すっぽん——升降口"}) + '</text>' +
             '<path d="M168 212 L238 212" stroke="#B4AC9C"/>' +
             '<text x="164" y="300" text-anchor="end" ' + LB + '>' + L({en:"box seats (masu)",ja:"升席",zh:"升席"}) + '</text>' +
             '<text x="164" y="314" text-anchor="end" ' + F + ' font-size="9.5" fill="#55504A">' + L({en:"on the floor, with bento",ja:"床に座り、弁当を広げる",zh:"席地而坐，打開便當"}) + '</text>' +
             '<path d="M168 296 L262 296" stroke="#B4AC9C"/>';
        s += '<text x="30" y="420" ' + F + ' font-size="9.5" fill="#8B857C">' + L({en:"SCHEMATIC — each playhouse differs; not to scale.",ja:"模式図——小屋ごとに異なる。縮尺不同。",zh:"示意圖——各戲棚不盡相同；未按比例。"}) + '</text></svg>';
        return s;
      }
    },

    { t:"section", id:"history",
      title:{ en:"A land of village theatre", ja:"地芝居の国", zh:"村戲之鄉" }, jp:"地芝居 · 奉納 · 農村舞台",
      body:[
        { t:"p", text:{
          en:"Kabuki reached Mino early. There are records of plays in the province from 1621, and from 1687 onwards a steady run of documents about plays offered at village shrines. Touring actors from Kamigata and Nagoya passed along the Nakasendō and the Minoji, and villagers who had seen them wanted to perform themselves. The authorities of the Edo period often forbade village plays as an extravagance that kept farmers from work; the villages answered by presenting them as offerings to their shrine gods at the autumn festival, on stages built within the shrine grounds, which is why so many old stages stand beside shrines.",
          ja:"歌舞伎は早くから美濃に届いた。国内での芝居の記録は1621年からあり、1687年以降は村の神社に奉納された芝居についての記録が途切れず続く。上方や名古屋の旅役者が中山道や美濃路を行き交い、それを見た村人は自ら演じたいと望んだ。江戸時代の為政者は、村の芝居を農民の仕事を妨げる贅沢としてしばしば禁じた。村々はそれを秋祭りに氏神へ捧げる奉納芝居として、境内に建てた舞台で演じることで応じた。古い舞台の多くが神社の傍らに立つのはそのためである。",
          zh:"歌舞伎很早就傳到了美濃。美濃境內從 1621 年起便有演戲的記載，1687 年以後，關於在村社奉納演戲的文書更是連綿不斷。來自上方與名古屋的巡迴演員往來於中山道與美濃路，看過他們演出的村民也想親自登台。江戶時代的當局常以「妨礙農事的奢侈」為由禁止村戲；村民的對策，是把戲作為秋祭時獻給氏神的奉納，在神社境內搭建的舞台上演出——這正是許多古老舞台都立在神社旁邊的原因。" } },
        { t:"p", text:{
          en:"The high point came in the Meiji era, when the bans were gone and silk and timber had put money in the villages. Communities pooled rice and labour to build proper theatres, with revolving stages, runways and galleries; several of the playhouses still in use were built between 1885 and 1894. A survey in 1971 counted 264 rural stages, standing or lost, in Gifu, the largest number of any prefecture.",
          ja:"最盛期は明治時代に訪れた。禁令は消え、生糸と材木が村に金をもたらしていた。村々は米と労力を出し合って、回り舞台や花道や桟敷を備えた本格的な芝居小屋を建てた。いまも使われている小屋のいくつかは1885年から1894年のあいだに建てられている。1971年の調査は、現存・廃絶を合わせて岐阜県の農村舞台を264棟と数えた。全国で最も多い数である。",
          zh:"鼎盛期出現在明治時代：禁令已經解除，蠶絲與木材為村子帶來了財富。各村集資出米、出力，蓋起具備旋轉舞台、花道與看台的正式戲棚；目前仍在使用的戲棚中，有好幾座建於 1885 年至 1894 年之間。1971 年的調查統計，岐阜縣的農村舞台（含現存與已毀）共有 264 棟，為全國之冠。" } }
      ]
    },

    { t:"section", id:"meijiza",
      title:{ en:"Kashimo Meiji-za", ja:"かしも明治座", zh:"加子母明治座" }, jp:"明治二十七年 · 中津川市加子母",
      body:[
        { t:"p", text:{
          en:"The village of Kashimo, in the hinoki forests at the northern tip of Nakatsugawa, built its theatre in 1894 by subscription and by hand. Its main beam came from a tree about four hundred years old, which a hundred villagers brought down from the mountain; households gave boards and timber from their own stocks. It has a revolving stage about 5.5 metres across over a pit, a trap lift on the runway, two runways and an upper gallery. In the restoration completed in 2015 the tiled roof was replaced by what the builders had first put on it — shingles of sawara cypress held down with stones. The Kashimo kabuki company has played there every autumn for half a century.",
          ja:"中津川市の北端、檜の森のなかの加子母村は、1894年、寄付と自らの手で芝居小屋を建てた。大梁は樹齢四百年ほどの木で、百人の村人が山から運び出した。家々は手持ちの板や材木を持ち寄った。奈落を備えた直径約5.5メートルの回り舞台、花道のすっぽん、両花道、二階桟敷を備える。2015年に完成した大改修では、瓦屋根を、創建時の姿であるサワラの榑板を石で押さえた石置き屋根に戻した。加子母歌舞伎保存会は半世紀にわたり、毎年秋にここで公演を続けている。",
          zh:"位於中津川市最北端、身處檜木森林中的加子母村，於 1894 年靠捐款與村民雙手蓋起了自己的戲棚。主樑取自一棵約四百年的大樹，由一百名村民從山上運下；各戶則拿出自家的木板與木料。戲棚擁有直徑約 5.5 公尺、下有奈落的旋轉舞台、花道上的升降口、兩條花道與二樓看台。2015 年完成的大修中，瓦屋頂被恢復為創建時的樣貌——以石塊壓住的花柏木片屋頂。加子母歌舞伎保存會半個世紀以來，每年秋天都在此公演。" } },
        { t:"table",
          caption:{en:"Some of Gifu's surviving playhouses",ja:"岐阜県に残る主な芝居小屋",zh:"岐阜縣現存的部分芝居小屋"},
          cols:[{en:"Playhouse",ja:"芝居小屋",zh:"芝居小屋"},{en:"Where",ja:"所在地",zh:"所在地"},{en:"Built",ja:"建築",zh:"建造"},{en:"Notes",ja:"備考",zh:"備註"}],
          rows:[
            [{en:"Hōō-za",ja:"鳳凰座",zh:"鳳凰座"},{en:"Mimayano, Gero",ja:"下呂市御厩野",zh:"下呂市御廄野"},{en:"moved 1827; enlarged 1885",ja:"1827年移築、1885年増築",zh:"1827 年遷建；1885 年擴建"},{en:"A shrine stage later given an auditorium",ja:"神社の舞台に、のちに客席を加えた",zh:"神社舞台，後來加建觀眾席"}],
            [{en:"Murakuni-za",ja:"村国座",zh:"村國座"},{en:"Kakamigahara",ja:"各務原市",zh:"各務原市"},{en:"c. 1877",ja:"1877年ごろ",zh:"約 1877 年"},{en:"In the grounds of Murakuni shrine; national Important Tangible Folk Cultural Property (1974); children's kabuki",ja:"村国神社の境内。国の重要有形民俗文化財（1974年）。子ども歌舞伎",zh:"位於村國神社境內；國家重要有形民俗文化財（1974 年）；兒童歌舞伎"}],
            [{en:"Hakuun-za",ja:"白雲座",zh:"白雲座"},{en:"Kadowasa, Gero",ja:"下呂市門和佐",zh:"下呂市門和佐"},"1890",{en:"Built to replace an Edo-period shrine stage; hinoki, with a revolving stage",ja:"江戸時代の神社の舞台に代わって建てられた。檜造り、回り舞台",zh:"為取代江戶時代的神社舞台而建；檜木造，有旋轉舞台"}],
            [{en:"Tokiwa-za",ja:"常盤座",zh:"常盤座"},{en:"Nakatsugawa",ja:"中津川市",zh:"中津川市"},"1891",{en:"Built with rice donated by the villagers",ja:"村人が米を出し合って建てた",zh:"村民捐米建成"}],
            [{en:"Kashimo Meiji-za",ja:"かしも明治座",zh:"加子母明治座"},{en:"Kashimo, Nakatsugawa",ja:"中津川市加子母",zh:"中津川市加子母"},"1894",{en:"Revolving stage, two runways, upper gallery; restored 2015",ja:"回り舞台・両花道・二階桟敷。2015年改修",zh:"旋轉舞台、雙花道、二樓看台；2015 年修復"}],
            [{en:"Aioi-za (Mino Kabuki Museum)",ja:"相生座（美濃歌舞伎博物館）",zh:"相生座（美濃歌舞伎博物館）"},{en:"Mizunami",ja:"瑞浪市",zh:"瑞浪市"},{en:"reassembled 1976",ja:"1976年移築再建",zh:"1976 年遷建"},{en:"Rebuilt from two older playhouses; museum of costumes and wigs",ja:"二つの古い小屋を移して再建。衣裳と鬘の博物館",zh:"以兩座舊戲棚遷建而成；戲服與假髮博物館"}]
          ] },
        { t:"p", text:{
          en:"Others include the Ebisu-za in Nakatsugawa, the Higashi-za at Kurogawa in Shirakawa-chō and several smaller stages in Ena and Kakamigahara; together about ten still see performances.",
          ja:"ほかに中津川市の蛭子座、白川町黒川の東座、恵那市や各務原市のいくつかの小さな舞台があり、あわせて十ほどでいまも上演が行われている。",
          zh:"其他還有中津川市的蛭子座、白川町黑川的東座，以及惠那市與各務原市的幾座小型舞台；合計約有十座至今仍有演出。" } }
      ]
    },

    { t:"section", id:"keeping",
      title:{ en:"Who keeps it going", ja:"誰が支えているのか", zh:"由誰傳承" }, jp:"保存会 · 振付師 · 衣裳 · おひねり",
      body:[
        { t:"p", text:{
          en:"About thirty preservation societies are active in Gifu, out of some two hundred amateur kabuki companies left in Japan; fifteen of them in the Tōnō region belong to a joint Tōnō kabuki association. The actors are local people of every age — Murakuni-za is known for its children's kabuki — and they are taught by a handful of professional choreographers, <em>furitsukeshi</em>, who carry the movements, make-up and staging of each play from village to village.",
          ja:"全国に約二百残る地歌舞伎の保存会のうち、約三十が岐阜県で活動しており、東濃地方ではそのうち十五団体が東濃歌舞伎保存会を結成している。演じ手はあらゆる年齢の地元の人々で——村国座は子ども歌舞伎で知られる——、少数のプロの振付師が、それぞれの演目の所作・化粧・舞台運びを村から村へ伝えている。",
          zh:"全日本現存約兩百個業餘歌舞伎團體，其中約三十個在岐阜縣活動；東濃地區有十五個團體組成了東濃歌舞伎保存會。演員是各個年齡層的在地居民——村國座以兒童歌舞伎聞名——由少數幾位職業「振付師」（編舞兼指導）傳授，他們把每齣戲的身段、化妝與舞台調度，從一個村子帶到另一個村子。" } },
        { t:"p", text:{
          en:"Costumes were hired from specialist dealers. When a local dealer closed, its stock — costumes and wigs from the Edo and Meiji periods — went to Oguri Katsusuke, who ran a golf course at Mizunami, and his daughter Sachie. In 1972 they founded the Mino Kabuki preservation society, at first with the golf course's staff as actors, and in 1976 they moved two old playhouses from elsewhere in the prefecture, both about to be pulled down, onto their land and rebuilt them as the Aioi-za, a theatre and museum. It now keeps more than 4,500 pieces, and the collection is protected as a national folk cultural property; Oguri Sachie, who can dress, make up, narrate and play shamisen for a performance, has become the tradition's principal teacher.",
          ja:"衣裳は専門の貸衣裳屋から借りた。地元の衣裳屋が店を閉じたとき、その在庫——江戸・明治の衣裳と鬘——は、瑞浪でゴルフ場を営む小栗克介と娘の幸江に引き継がれた。二人は1972年に美濃歌舞伎保存会をおこし、はじめはゴルフ場の従業員が役者を務めた。1976年には、取り壊し寸前だった県内の二つの芝居小屋を敷地に移して復元し、芝居小屋兼博物館の相生座とした。いまは四千五百点を超える品を収め、その衣裳は国の民俗文化財として守られている。衣裳付け・化粧・語り・三味線のすべてをこなす小栗幸江は、この伝統の中心的な指導者となった。",
          zh:"戲服原本向專門的租賃商租借。當地一家戲服商歇業時，其庫存——江戶與明治時期的戲服與假髮——由在瑞浪經營高爾夫球場的小栗克介與女兒小栗幸江接手。兩人於 1972 年成立美濃歌舞伎保存會，起初由球場員工擔任演員；1976 年，又把縣內兩座即將拆除的舊戲棚遷到自家土地上復原，成為兼作劇場與博物館的相生座。如今館藏超過四千五百件，這批戲服已列為國家民俗文化財加以保護；能穿衣、化妝、說唱並彈奏三味線的小栗幸江，已成為這項傳統的主要傳承者。" } },
        { t:"note", label:{en:"In the audience",ja:"客席で",zh:"在觀眾席上"}, text:{
          en:"Take a cushion and a boxed lunch. At a good moment the regulars call out the actor's house name or “Nippon-ichi!” — best in Japan — and throw <em>ohineri</em>, coins twisted up in paper, onto the stage. Performances are usually on a single day in spring or autumn, and many are free or nearly so.",
          ja:"座布団と弁当を持って行く。見せ場では常連が屋号や「日本一！」と声をかけ、紙に包んでひねった小銭——おひねり——を舞台に投げる。公演はたいてい春か秋の一日だけで、無料かそれに近いものが多い。",
          zh:"帶上坐墊與便當。到了精彩時刻，常客會高喊演員的屋號或「日本一！」（日本第一），並把用紙扭包的零錢——「おひねり」——拋上舞台。演出通常只在春季或秋季的某一天，許多場次免費或近乎免費。" } }
      ]
    },

    { t:"section", id:"no",
      title:{ en:"Nō in a mountain village", ja:"山の村の能", zh:"山村裡的能劇" }, jp:"能郷の能・狂言",
      body:[
        { t:"p", text:{
          en:"Older than any of the kabuki is the <strong>Nō and kyōgen of Nōgō</strong>, in the upper Neo valley of Motosu. On 13 April each year the men of the village perform at the Hakusan shrine a programme handed down by word of mouth within sixteen households of <em>sarugaku</em> players, each family keeping the part of the Nō actors, the kyōgen actors or the musicians. Twenty-two pieces survive, including <em>Okina</em> and <em>Takasago</em> and farmers' comedies; the masks and costumes are said to date from the Muromachi period. It is a national Important Intangible Folk Cultural Property.",
          ja:"どの地歌舞伎よりも古いのが、本巣市根尾の谷の奥に伝わる<strong>能郷の能・狂言</strong>である。毎年4月13日、村の男たちが白山神社で演じる。十六戸の猿楽衆のなかで口伝えに受け継がれ、家ごとに能方・狂言方・囃子方の役を守ってきた。「翁」「高砂」や百姓狂言など二十二曲が伝わり、面や装束は室町時代のものといわれる。国の重要無形民俗文化財である。",
          zh:"比任何地歌舞伎都更古老的，是本巢市根尾谷深處的<strong>能鄉之能・狂言</strong>。每年 4 月 13 日，村中男子在白山神社演出一套劇目，由十六戶「猿樂眾」口耳相傳，各家分別世襲能方、狂言方或囃子方的角色。流傳下來的有二十二曲，包括〈翁〉、〈高砂〉與農民狂言；面具與裝束據說出自室町時代。這是國家重要無形民俗文化財。" } }
      ]
    },

    { t:"related", items:[
      { href:"festivals.html", why:{ en:"The shrine festivals the plays belong to.", ja:"芝居が奉納される祭り。", zh:"戲劇所屬的神社祭典。" } },
      { href:"hinoki.html", why:{ en:"The forests that built Kashimo's theatre.", ja:"加子母の小屋を建てた森。", zh:"建造加子母戲棚的森林。" } },
      { href:"textiles.html", why:{ en:"Dye and cloth in Mino.", ja:"美濃の染めと布。", zh:"美濃的染與布。" } },
      { href:"roads.html", why:{ en:"The roads the touring actors walked.", ja:"旅役者が歩いた道。", zh:"巡迴演員走過的道路。" } }
    ] }
  ]
};
