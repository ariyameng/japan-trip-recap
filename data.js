/* ============================================================
 *  data.js — 旅行数据集中管理
 * ------------------------------------------------------------
 *  改这个文件就行，不用动 index.html
 *  字段不知道怎么填？看注释，或者问红线
 * ============================================================ */

window.TRIP_DATA = {
  // ---------- 基础信息 ----------
  title: "日本 8 月 · 差点泡汤的旅行",
  subtitle: "三次改签、四小时客服电话，最后还是飞了",

  // 日期范围
  dateRange: {
    departFrom:  "2026-08-08",   // 郑州出发（火车）
    returnTo:    "2026-08-22",   // 回到郑州东
    japanArrive: "2026-08-10",   // 落地关西
    japanDepart: "2026-08-21"    // 成田起飞
  },

  // 全程天数（郑州出发 → 回家，含首尾）
  // 留空会自动按 dateRange 算
  totalDays: 15,

  // 封面开场白
  openingLine: "火车刚开出郑州站，手机就响了。此后三天，换了三个机场、打了四小时客服电话。",

  // ---------- 路线城市（按访问顺序）----------
  cities: [
    {
      name: "大阪",
      kana: "Osaka",
      emoji: "🏯",
      color: "#D85A30",
      days: 2,
      highlight: "道顿堀的霓虹、心斋桥的章鱼烧、夜里亮到发烫的招牌",
      // 住的地方（可点击跳 Google Maps）
      //   name    : 显示的中文名
      //   en      : 英文名（地图搜索用，定位更准）
      //   address : 英文地址（会显示在页面上）
      //   dates   : 入住日期（可选）
      stay: {
        name: "难波道顿堀阿克罗胶囊旅馆",
        en: "Acro Capsule Hotel Namba Dotonbori",
        address: "Ritz Bld, 2-2, 2-chome-2-20 Dotombori, Chuo Ward, Osaka City, Osaka Prefecture 542-0071, Japan",
        dates: "8/10 – 8/12"
      }
    },
    {
      name: "京都",
      kana: "Kyoto",
      emoji: "⛩️",
      color: "#993556",
      days: 4,
      highlight: "清晨的伏见稻荷、祗园的窄巷、抹茶一切",
      stay: {
        name: "京都河原町格兰斯特酒店",
        en: "Glansit Kyoto Kawaramachi",
        address: "380-2 Komeyacho, Shijo-Agaru, Kawaramachi, Nakagyo Ward, Kyoto 604-8026, Japan",
        dates: "8/12 – 8/16"
      }
    },
    {
      name: "东京",
      kana: "Tokyo",
      emoji: "🗼",
      color: "#0F6E56",
      days: 5,
      highlight: "涩谷的人潮、浅草寺的香火、深夜的拉面",
      stay: {
        name: "浅草明奥库",
        en: "Minn Oku Asakusa",
        address: "Kaiseki Hyoan, 3-chome-34-11, Asakusa, Taito City, Tokyo 111-0032, Japan",
        dates: "8/16 – 8/21"
      }
    }
  ],

  // ---------- 出发故事（台风「白海豚」· 三次改签）----------
  typhoon: {
    title: "出发 48 小时 · 三次改签",
    mood: "🌀",
    story: [
      "8 月 8 日傍晚在郑州站上车。刚坐下、火车刚刚开动，手机就响了——原定第二天飞大阪的 CA857，因台风「白海豚」取消。",
      "接下来的一夜基本没睡。躺在卧铺上一遍遍刷改签页面，听着铁轨声熬到天亮。",
      "8 月 9 日早上 6:39 到上海站，拖着行李直接坐地铁去浦东机场，排队两个小时改签。当天改成第二天虹桥飞北京、再从北京转关西。",
      "结果当晚刚在虹桥附近的维也纳酒店住下，短信又来了——第二天虹桥飞北京的那班，也取消了。",
      "然后是给航空公司打电话。从晚上八点多，一直打到十二点多。四个小时。"
    ],
    note: "最后换成从杭州萧山出发的 GJ8077。8 月 10 日 13:00 起飞，16:45 落地关西。比原计划晚了一天，但终究是飞出去了。代价是大阪的酒店从 8 月 9 日起算——那一晚我们还躺在中国开往上海的火车上，而日本的酒店是不退钱的。",
    // 这段经历里的关键数字，会渲染成小徽章
    stats: [
      { label: "改签次数", value: "3" },
      { label: "排队", value: "2h" },
      { label: "客服电话", value: "4h" },
      { label: "换机场", value: "3" }
    ]
  },

  // ---------- 交通行程 ----------
  /* status: "done" 正常显示 | "cancelled" 划掉 + 标红原因
   *  type: "train"(🚆) | "flight"(✈️) | "rail"(🚄) | "metro"(🚇)
   */
  transports: {
    outbound: {
      title: "去程 · 一波三折",
      legs: [
        {
          status: "done",
          type: "train",
          code: "K154",
          from: "郑州",
          to: "上海站",
          date: "8月8日",
          depart: "18:10",
          arrive: "次日 06:39",
          note: "刚坐好、车刚开动，取消短信就来了。这一夜基本没睡"
        },
        {
          status: "cancelled",
          type: "flight",
          code: "CA857",
          from: "上海浦东",
          to: "大阪关西",
          date: "8月9日",
          depart: "11:50",
          arrive: "15:25",
          reason: "台风「白海豚」",
          note: "次日到上海站后坐地铁赶去浦东，现场排队两小时改签"
        },
        {
          status: "done",
          type: "hotel",
          code: "维也纳酒店",
          from: "上海虹桥机场国家会展中心航新路店",
          date: "8月9日",
          depart: "12:00 入住",
          arrive: "次日 14:00 离店",
          note: "标准双床房两间，无早。改签方案落定后的落脚点"
        },
        {
          status: "cancelled",
          type: "flight",
          code: "虹桥 → 北京 → 关西",
          from: "上海虹桥",
          to: "大阪关西",
          date: "8月10日",
          reason: "当晚短信通知取消",
          note: "刚在酒店住下，短信就来了"
        },
        {
          status: "done",
          type: "rail",
          code: "C3135",
          from: "上海虹桥",
          to: "杭州东",
          date: "8月10日",
          depart: "07:30",
          arrive: "08:36",
          note: "酒店的免费接送车把我们送到虹桥站，赶最早那班"
        },
        {
          status: "done",
          type: "metro",
          code: "杭州地铁",
          from: "杭州东",
          to: "萧山机场",
          date: "8月10日",
          note: "地铁里的店铺解决了早餐"
        },
        {
          status: "done",
          type: "flight",
          code: "GJ8077",
          from: "杭州萧山",
          to: "大阪关西",
          date: "8月10日",
          depart: "13:00",
          arrive: "16:45",
          note: "打了四小时客服电话换来的"
        }
      ]
    },
    inbound: {
      title: "返程 · 一路顺风",
      legs: [
        {
          status: "done",
          type: "flight",
          code: "MF810",
          from: "东京成田",
          to: "福州长乐",
          date: "8月21日",
          depart: "15:30",
          arrive: "18:30"
        },
        {
          status: "done",
          type: "flight",
          code: "MF8273",
          from: "福州长乐",
          to: "郑州新郑",
          date: "8月22日",
          depart: "08:45",
          arrive: "11:05"
        },
        {
          status: "done",
          type: "rail",
          code: "C2985",
          from: "新郑机场",
          to: "郑州东",
          date: "8月22日",
          depart: "12:03",
          arrive: "12:25",
          note: "落地四十分钟后就把自己送回家了"
        }
      ]
    }
  },

  // ---------- 每日回忆 ----------
  /* 一条对应一天（day 按日本境内的天数算：落地关西那天 = Day 1）
   *  fields:
   *    day       : 第几天（数字）
   *    city      : 所在城市（写 cities 里的名字）
   *    mood      : 当天心情关键词
   *    moodEmoji : 配的 emoji
   *    story     : 一段小作文（2-4 句）
   *    spots     : 去过的地方（每个会变成 Google Maps 跳转链接）
   *    photos    : 照片路径数组，文件放 photos/ 目录下（可选）
   */
  days: [
    {
      day: 1,
      city: "大阪",
      mood: "终于落地",
      moodEmoji: "🎉",
      story: "下午四点多，终于站在了关西机场。折腾三天，这一刻的真实感比什么都强。坐南海电铁从关西空港到难波，拖着行李步行到胶囊旅馆。缓过来之后出门觅食——落地的第一顿，一兰拉面。顺着道顿堀的霓虹一路走，逛进心斋桥，回酒店前拐进附近的 711，买了牛奶和面包当作第二天的早餐。这一天就算圆满了。",
      spots: ["关西空港站", "难波", "一兰拉面 道顿堀店", "道顿堀", "心斋桥"],
      photos: ["photos/day1-nankai-tickets.jpg", "photos/day1-ichiran.jpg"]
    },
    {
      day: 2,
      city: "大阪",
      mood: "暴走的一天",
      moodEmoji: "🛍️",
      story: "早上用昨晚 711 买的牛奶和面包解决了早餐，出门先去酒店附近的堂吉诃德扫货。中午在心斋桥找了家鳗鱼饭——うなぎの中庄，鳗鱼三吃，皮脆汁多。下午继续在商业街暴走，傍晚走到道顿堀河边，正好撞上一场日落。晚上用章鱼烧收尾，酱的和葱的各来一盒。",
      spots: ["堂吉诃德 难波", "うなぎの中庄 难波店", "心斋桥筋商店街", "道顿堀"],
      photos: [
        "photos/day2-unagi.jpg",
        "photos/day2-unagi-shop.jpg",
        "photos/day2-shinsaibashi.jpg",
        "photos/day2-dotonbori-sunset.jpg",
        "photos/day2-takoyaki.jpg"
      ]
    },
    {
      day: 3,
      city: "大阪",
      mood: "告别大阪",
      moodEmoji: "🚆",
      story: "早上在阿克罗 capsule 退了房，行李寄存在前台，先用 711 的饭团和咖啡解决早餐。坐地铁去大阪城公园，天守阁立在护城河那头，上午的阳光把白墙照得发亮，绕着公园走了一圈，算是在大阪最后的悠闲。中午拐回心斋桥吃寿司郎——转盘上自己拿，玉子烧和鲑鱼都新鲜得过分。附近逛了逛，回酒店取行李，坐御堂筋线转阪急京都线去京都——31站，摇摇晃晃一个多小时。晚上七点多，站在京都河原町的格兰斯特酒店前台办入住，大阪算是翻篇了。安顿好又下楼找了家 711，买份便当当夜宵。",
      spots: ["大阪城公园", "寿司郎 心斋桥店", "难波", "京都河原町格兰斯特酒店"],
      photos: [
        "photos/day3-station.jpg",
        "photos/day3-osakacastle.jpg",
        "photos/day3-v50.jpg",
        "photos/day3-sushiro-kitty.jpg"
      ]
    },
    {
      day: 4,
      city: "京都",
      mood: "计划赶不上体力",
      moodEmoji: "⛩️",
      story: "早上靠 711 的面包和酒店自助饮品机里的热可可续命。按计划今天该串起伏见稻荷、清水寺、三年坂、八坂神社、花见小路和鸭川一整条京都市区精华线，结果光一个伏见稻荷就耗尽了全部电量。红漆鸟居一路向上，爬到半山腰又渴又饿，只好在山上找了家面店应急。下山后所有人瘫在酒店。晚上在酒店附近晃了一大圈，原本想靠 711 解决晚餐的念头也打消了，最后钻进一家两位老奶奶开的小店——没有座位，猪排饭得站着吃，吃完直接回酒店。正式行程单上那串名字，一个都没再见着。",
      spots: ["伏见稻荷大社", "鸭川", "H&M 河原町店"],
      photos: [
        "photos/day4-fushimi-building.jpg",
        "photos/day4-fushimi-ema.jpg",
        "photos/day4-fushimi-mountain.jpg",
        "photos/day4-kamogawa.jpg"
      ]
    },
    {
      day: 5,
      city: "京都",
      mood: "nobody knows the bus",
      moodEmoji: "🍵",
      story: "前一晚在酒店抢新干线票：先在 Klook 约了自动抢 16 号 Nozomi 368，醒来发现没抢到，退款；又赶紧买了 16 号 Nozomi 360。心安定下来后才出门。今天目标是三千院和贵船神社。坐 17 路公交去大原，结果找不到站牌。问了商店保安、站牌老奶奶、药妆店兼职店员，最后那位小哥来了句「nobody knows the bus」，把我们逗笑了。第一次坐日本公交也不会刷，还临时在小红书查，让山糖老师去问她在日本的朋友。从四条河原町站上车，站了一个多小时才到大原。三千院前先去吃「松门」，没有预约，等了一会儿，店里只收现金。三千院门票 200 円，神签 100 円，抽到吉签。下午换 19 路公交加睿山电车鞍马线去贵船神社。回程的电车为了配合隧道里的灯光，把车厢灯关了，沿途的树被打亮，像极了萤火之森。那一天手机没怎么掏出来，都留在眼睛里了。",
      spots: ["四条河原町", "大原", "三千院", "贵船神社", "睿山电车鞍马线"],
      photos: [
        "photos/day5-sanzenin-lantern.jpg",
        "photos/day5-sanzenin-garden.jpg",
        "photos/day5-matsumoto-door.jpg",
        "photos/day5-matsumoto-interior.jpg",
        "photos/day5-omikuji.jpg",
        "photos/day5-kifune-lanterns.jpg",
        "photos/day5-kifune-shrine.jpg"
      ]
    },
    {
      day: 6,
      city: "大阪",
      mood: "在日本起得最早的一天",
      moodEmoji: "🎢",
      story: "USJ 原本是 8 月 10 日的票，因为航班取消被迫改到 8 月 15 日。考虑到 16 号要从京都坐新干线去东京，之后再专门跑大阪成本太高，于是决定这一天从京都杀回大阪。早上五点多起床，五点半左右坐上阪急京都线，到大阪梅田换乘大阪环状线，开园前就到了环球城站，排队等入园。这一天超级开心。",
      spots: ["日本环球影城", "大阪梅田", "环球城站"],
      photos: [
        "photos/day6-usj-globe.jpg",
        "photos/day6-hollywood-dream.jpg",
        "photos/day6-hello-kitty.jpg",
        "photos/day6-hogwarts.jpg"
      ],
      rides: [
        { name: "好莱坞美梦乘车游", area: "好莱坞", tags: ["尖叫/顶级刺激"], note: "第一个就排了这个，后面鹰马飞行和飞天翼龙直接没敢排。Osaka lover 完全没听，只是一味地啊啊啊啊啊" },
        { name: "飞天史努比", area: "环球奇境", tags: ["推荐给小朋友", "可以跟幼儿一起愉快玩耍"], note: "噩梦环游记下来后，大家都表示猛女就该坐这个" },
        { name: "Hello Kitty 梦幻蛋糕杯", area: "环球奇境", tags: ["推荐给小朋友", "可以跟幼儿一起愉快玩耍"], note: "找转的地方找了半天，结束才找到" },
        { name: "史努比的王牌飞行员大冒险", area: "环球奇境", tags: ["推荐给小朋友", "可以跟幼儿一起愉快玩耍"], note: "噩梦环游的影响还在，但室内小过山车又能怕到哪去" },
        { name: "哈利波特禁忌之旅", area: "哈利波特的魔法世界", tags: ["尖叫/顶级刺激"], note: "太牛了！！！坐了 2 遍，就是日语听不懂" },
        { name: "耀西冒险", area: "超级任天堂世界", tags: ["推荐给小朋友", "可以跟幼儿一起愉快玩耍"], note: "NPC，就是太晒了，但是能看整个任天堂区域" },
        { name: "咚奇刚的疯狂矿车", area: "超级任天堂世界", tags: ["尖叫/顶级刺激"], note: "排队时间太太太太长了，但是好玩" },
        { name: "小黄人调皮闹剧任务~成为大坏蛋之路~", area: "小黄人乐园", tags: ["推荐给小朋友"], note: "有一丢丢无聊，本来腿累了，玩完胳膊也累了" },
        { name: "冰冻激光乘车游", area: "小黄人乐园", tags: ["推荐给小朋友"], note: "还可以，就是一直在研究怎么转" },
        { name: "小黄人调皮闹剧乘车游", area: "小黄人乐园", tags: ["尖叫/顶级刺激"], note: "给到劳！！！但是前提有些长，加上排队也得一会儿，是想要二刷的程度" },
        { name: "太空幻想列车", area: "好莱坞", tags: ["尖叫/顶级刺激"], note: "很好玩！刺激！" }
      ]
    },
    {
      day: 7,
      city: "东京",
      mood: "雨里安顿",
      moodEmoji: "🌧️",
      story: "坐新干线（Nozomi 360）一路到东京，下午两点多抵达订好的公寓。偏偏那天东京下着大雨，从东京站出来坐东42路公交，酒店离地铁站和公交站都挺远。到房间先收拾，行李箱里外都湿透了，干脆腾空晾到门外晒。缓过劲出门觅食——没错，我们又吃了一兰拉面，这次是浅草店（台东区浅草1-1-16）。吃完附近就是一条类似商业街的巷子，随便逛逛便回酒店洗衣服。晚上大概率是罗森便利店解决的，具体也记不清了。第一次用日本洗衣机不会操作，还拍照问了 ChatGPT。",
      spots: ["东京站", "浅草", "一兰拉面 浅草店"],
      photos: [
        "photos/day7-1.jpeg",
        "photos/day7-2.jpeg",
        "photos/day7-3.jpeg"
      ]
    },
    {
      day: 8,
      city: "东京",
      mood: "浅草与电器街",
      moodEmoji: "⛩️",
      story: "今天浅草寺加秋叶原。早上便利店解决，先去浅草寺逛了逛。中午吃了咖喱饭，下午转战秋叶原，晚上又是便利店，不过便利店门口的夜景还挺好看。",
      spots: ["浅草寺", "秋叶原"],
      photos: [
        "photos/day8-1.jpeg",
        "photos/day8-2.jpeg",
        "photos/day8-3.jpeg",
        "photos/day8-4.jpeg",
        "photos/day8-5.jpeg"
      ]
    },
    {
      day: 9,
      city: "东京",
      mood: "东京三连",
      moodEmoji: "🗼",
      story: "银座、涩谷、东京塔一站打卡。午餐在银座吃，吃完去了涩谷（到底是涩谷还是涉谷，到现在也没较真清楚），看了忠犬八公像，逛了些店，然后奔东京塔。在塔下看了会儿夜景就往回走，晚餐罗森便利店。",
      spots: ["银座", "涩谷", "忠犬八公像", "东京塔"],
      photos: [
        "photos/day9-1.jpeg",
        "photos/day9-2.jpeg",
        "photos/day9-3.jpeg",
        "photos/day9-4.jpeg",
        "photos/day9-5.jpeg",
        "photos/day9-6.jpeg",
        "photos/day9-7.jpeg",
        "photos/day9-8.jpeg"
      ]
    },
    {
      day: 10,
      city: "镰仓",
      mood: "镰仓与江之岛",
      moodEmoji: "🌊",
      story: "今天出了趟远门去镰仓。到了镰仓先吃午饭，这家店很对胃口。吃完接着上江之岛，海风一吹整个人都松了。回到东京已累瘫，晚上又钻进一兰拉面（浅草店）续命。",
      spots: ["镰仓", "江之岛", "一兰拉面 浅草店"],
      photos: [
        "photos/day10-1.jpeg",
        "photos/day10-2.jpeg",
        "photos/day10-3.jpeg",
        "photos/day10-4.jpeg",
        "photos/day10-5.jpeg",
        "photos/day10-6.jpeg"
      ]
    },
    {
      day: 11,
      city: "东京",
      mood: "躺平自由日",
      moodEmoji: "🐱",
      story: "没什么计划的一天，中午才起，去吃了鳗鱼饭。下午去浅草的堂吉诃德，路上遇到一群猫猫，觉得这座城市好多猫。晚餐鸟贵族（浅草六区店），便宜又热闹。",
      spots: ["浅草", "堂吉诃德 浅草", "鸟贵族 浅草六区店"],
      photos: [
        "photos/day11-1.jpeg",
        "photos/day11-2.jpeg",
        "photos/day11-3.jpeg",
        "photos/day11-4.jpeg"
      ]
    },
    {
      day: 12,
      city: "成田 → 福州",
      mood: "启程回家",
      moodEmoji: "✈️",
      story: "返程第一天。早上便利店对付了早餐就出发去成田，在机场买了白色恋人，把最后一点日元都喂给了星巴克。飞到福州长乐已是下午六点多，到酒店点了好久没吃的外卖，开心睡觉，准备第二天回郑州。",
      spots: ["成田机场", "福州长乐"],
      photos: [
        "photos/day12-1.jpeg",
        "photos/day12-2.jpeg"
      ]
    },
    {
      day: 13,
      city: "郑州",
      mood: "回家",
      moodEmoji: "🏠",
      story: "回郑州了，开心呢。十五天的旅程，到这里画上句号——从郑州出发，又回到郑州。",
      spots: [],
      photos: []
    }
  ],

  // ---------- 美食 ----------
  /* fields: name / city / note / spicy(1-3) */
  foods: [
    { name: "一兰拉面（道顿堀别馆）", city: "大阪", note: "落地那晚的第一顿。点单一兰3选，抹茶杏仁收尾" },
    { name: "うなぎの中庄（鳗鱼中庄）难波店", city: "大阪", note: "中午的鳗鱼三吃，皮脆汁多。藏在戎桥筋大楼四层" },
    { name: "章鱼烧", city: "大阪", note: "晚上收尾的宵夜，酱的和葱的各来一盒" },
    { name: "寿司郎（心斋桥店）", city: "大阪", note: "告别大阪前的最后一顿。玉子烧、鲑鱼都很新鲜，藏在 FPG Links Shinsaibashi 3F" },
    { name: "伏见稻荷山上的面店", city: "京都", note: "爬不动时在半山腰随便钻进的一家店，靠一碗面回血" },
    { name: "老奶奶的站立猪排饭", city: "京都", note: "酒店附近两位老奶奶开的小店，没有座位，猪排饭站着吃完，那天太累了一口接一口" },
    { name: "松门", city: "京都", note: "三千院前的午餐，没有预约等了一会儿，店里只收现金。地址：23 Ohara Shorinincho, Sakyo-Ku" },
    { name: "一兰拉面（浅草店）", city: "东京", note: "到东京第一顿还是它。台东区浅草1-1-16，回来路上又吃了一次" },
    { name: "咖喱饭", city: "东京", note: "8/17 浅草寺出来吃的中午饭" },
    { name: "银座午餐", city: "东京", note: "8/18 银座的一餐，吃完才有力气去涩谷和东京塔" },
    { name: "镰仓午餐", city: "镰仓", note: "8/19 到了镰仓吃的第一家店，很对胃口" },
    { name: "鳗鱼饭", city: "东京", note: "8/20 自由活动日中午才起，专程去吃的" },
    { name: "鸟贵族（浅草六区店）", city: "东京", note: "8/20 晚餐，便宜又热闹的居酒屋" }
  ],

  // ---------- 收藏 / 手信 ----------
  /* fields: name / city / type(手信|御守|店|杂货…) / note */
  souvenirs: [
    { name: "三千院神签", city: "京都", type: "御守", note: "100 円抽一次，抽到吉签。图片见 Day 5 相册。" },
    { name: "白色恋人", city: "东京", type: "手信", note: "8/21 在成田机场买的，把最后一点日元都花在了这" }
  ],

  // ---------- 留言板（访客可现场留言，名字 + 内容）----------
  //   name : 留言人名字 / 昵称
  //   text : 留言内容
  //   date : 日期（留空则不显示；运行时新增的会自动填当天）
  guestbook: [
    { name: "红线 🧵", text: "老大这趟差点泡汤的旅行，最后成了最难忘的一趟。来留个言吧～", date: "2026-09-09" }
  ]
};