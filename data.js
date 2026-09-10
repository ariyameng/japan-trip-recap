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
    note: "最后换成从杭州萧山出发的 GJ8077。8 月 10 日 13:00 起飞，16:45 落地关西。比原计划晚了一天，但终究是飞出去了。代价是大阪的酒店从 8 月 9 日起算——那一晚我们其实还在上海虹桥的维也纳酒店里打电话改签，而日本的酒店是不退钱的。",
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
      phase: "prologue",
      dateLabel: "8月8日（夜）",
      cityLabel: "郑州 → 上海 火车上",
      title: "出发前 · 郑州到上海",
      mood: "行程突变",
      expanded: true,
      projects: ["在火车上处理行程变动，连续改签 3 次"],
      places: ["郑州站", "开往上海的列车"],
      feeling: "内心极其慌乱，面对不断的变数感到措手不及。"
    },
    {
      phase: "prologue",
      dateLabel: "8月9日（夜）",
      cityLabel: "维也纳酒店",
      title: "出发前 · 尘埃落定",
      mood: "终于敲定",
      expanded: true,
      projects: ["拨打长达 4 小时的处理电话，最终敲定方案"],
      places: ["维也纳酒店"],
      feeling: "疲惫至极，但终于尘埃落定。"
    },
    {
      day: 1,
      city: "大阪",
      mood: "终于落地",
      title: "日本篇 Day 1",
      expanded: true,
      projects: [
        "关西国际机场落地，结束三天的行程折腾",
        "南海电铁到难波，拖行李步行入住胶囊旅馆",
        "落地第一顿：一兰拉面（道顿堀店）",
        "道顿堀夜逛、心斋桥闲晃，711 补给次日早餐"
      ],
      places: ["关西国际机场", "难波", "一兰拉面 道顿堀店", "道顿堀", "心斋桥"],
      feeling: "折腾三天，这一刻的真实感比什么都强。",
      photos: ["photos/day1-nankai-tickets.jpg", "photos/day1-ichiran.jpg"],
      captions: ["南海电铁车票 · 关西机场到难波", "落地第一顿：一兰拉面"]
    },
    {
      day: 2,
      city: "大阪",
      mood: "暴走的一天",
      title: "日本篇 Day 2",
      projects: [
        "酒店附近堂吉诃德（Donki）扫货",
        "心斋桥 うなぎの中庄 鳗鱼三吃",
        "商业街暴走，道顿堀河边撞上日落",
        "晚上章鱼烧收尾（酱的、葱的各一盒）"
      ],
      places: ["堂吉诃德 难波", "うなぎの中庄 难波店", "心斋桥筋商店街", "道顿堀"],
      feeling: "腿是废的，但道顿堀那场日落值回票价。",
      photos: [
        "photos/day2-unagi.jpg",
        "photos/day2-unagi-shop.jpg",
        "photos/day2-shinsaibashi.jpg",
        "photos/day2-dotonbori-sunset.jpg",
        "photos/day2-takoyaki.jpg"
      ],
      captions: [
        "うなぎの中庄 · 鳗鱼三吃",
        "藏在戎桥筋大楼里的鳗鱼店",
        "心斋桥筋商店街",
        "道顿堀河边，撞上一场日落",
        "章鱼烧，酱的葱的各一盒"
      ]
    },
    {
      day: 3,
      city: "大阪 → 京都",
      mood: "告别大阪",
      title: "日本篇 Day 3",
      projects: [
        "阿克罗胶囊退房，行李寄存，711 饭团咖啡解决早餐",
        "大阪城公园天守阁，绕护城河走一圈",
        "寿司郎（心斋桥）回转寿司，玉子烧鲑鱼新鲜得过分",
        "御堂筋线转阪急京都线，31 站摇到京都河原町"
      ],
      places: ["阿克罗胶囊旅馆", "大阪城公园", "寿司郎 心斋桥店", "京都河原町格兰斯特酒店"],
      feeling: "大阪翻篇，京都接棒——这一站，是慢下来的开始。",
      photos: [
        "photos/day3-station.jpg",
        "photos/day3-osakacastle.jpg",
        "photos/day3-v50.jpg",
        "photos/day3-sushiro-kitty.jpg"
      ],
      captions: [
        "站台 · 等一趟去京都的车",
        "大阪城天守阁",
        "大阪城前 · 手里的小达摩",
        "寿司郎 × Hello Kitty 联名立牌"
      ]
    },
    {
      day: 4,
      city: "京都",
      mood: "计划赶不上体力",
      title: "日本篇 Day 4",
      projects: [
        "原计划京都市区精华线，被伏见稻荷榨干全部电量",
        "伏见稻荷红漆鸟居一路向上，半山腰面店应急",
        "下山回酒店瘫着",
        "晚上两位老奶奶小店，站着吃完猪排饭"
      ],
      places: ["伏见稻荷大社", "鸭川", "H&M 河原町店"],
      feeling: "计划表里那串名字一个没见着，但意外闯进的小店比景点更难忘。",
      photos: [
        "photos/day4-fushimi-building.jpg",
        "photos/day4-fushimi-ema.jpg",
        "photos/day4-fushimi-mountain.jpg",
        "photos/day4-kamogawa.jpg"
      ],
      captions: [
        "伏见稻荷 · 楼门",
        "千本鸟居旁的绘马",
        "伏见稻荷半山腰",
        "鸭川"
      ]
    },
    {
      day: 5,
      city: "京都",
      mood: "nobody knows the bus",
      title: "日本篇 Day 5",
      projects: [
        "前一晚抢新干线票：Klook Nozomi 368 没抢到退款，改买 360",
        "17 路公交找站牌问了一圈人，被「nobody knows the bus」逗笑",
        "三千院前「松门」无预约等候，只收现金；抽到吉签",
        "19 路加睿山电车鞍马线去贵船，回程关灯像萤火之森"
      ],
      places: ["四条河原町", "大原", "三千院", "贵船神社", "睿山电车鞍马线"],
      feeling: "那一天手机没怎么掏出来，都留在眼睛里了。",
      photos: [
        "photos/day5-sanzenin-lantern.jpg",
        "photos/day5-sanzenin-garden.jpg",
        "photos/day5-matsumoto-door.jpg",
        "photos/day5-matsumoto-interior.jpg",
        "photos/day5-omikuji.jpg",
        "photos/day5-kifune-lanterns.jpg",
        "photos/day5-kifune-shrine.jpg"
      ],
      captions: [
        "三千院 · 石灯笼",
        "三千院庭园",
        "松门 · 店门口",
        "松门店内",
        "三千院抽到的吉签",
        "贵船神社 · 参道灯笼",
        "贵船神社"
      ]
    },
    {
      day: 6,
      city: "大阪",
      mood: "在日本起得最早的一天",
      title: "日本篇 Day 6 · USJ",
      projects: [
        "5 点起床，阪急京都线转大阪环状线，开园前到环球城站",
        "哈利波特禁忌之旅连刷 2 遍（日语听不懂但太牛了）",
        "超级任天堂世界：咚奇刚矿车、耀西冒险",
        "环球奇境 + 小黄人乐园，尖叫与可爱齐飞"
      ],
      places: ["日本环球影城", "大阪梅田", "环球城站"],
      feeling: "起得最早，玩得最疯——这一天超级开心。",
      photos: [
        "photos/day6-usj-globe.jpg",
        "photos/day6-hollywood-dream.jpg",
        "photos/day6-hello-kitty.jpg",
        "photos/day6-hogwarts.jpg"
      ],
      captions: [
        "USJ 大地球",
        "好莱坞美梦乘车游",
        "Hello Kitty 梦幻蛋糕杯",
        "哈利波特的魔法世界"
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
      title: "日本篇 Day 7",
      projects: [
        "新干线 Nozomi 360 到东京，下午两点多抵公寓",
        "大雨里从东京站东 42 路公交到酒店，行李湿透晾门外",
        "一兰拉面（浅草店）续命，商业街巷子闲逛",
        "酒店洗衣服，第一次用日本洗衣机拍照问 ChatGPT"
      ],
      places: ["东京站", "浅草", "一兰拉面 浅草店"],
      feeling: "雨里安顿下来，这一晚很踏实。",
      photos: [
        "photos/day7-1.jpeg",
        "photos/day7-2.jpeg",
        "photos/day7-3.jpeg"
      ],
      captions: [
        "新干线车窗外的东京，雨还没停",
        "浅草 · 奥山参道入口",
        "研究日本洗衣机，拍照问了 ChatGPT"
      ]
    },
    {
      day: 8,
      city: "东京",
      mood: "浅草与电器街",
      title: "日本篇 Day 8",
      projects: [
        "早上便利店解决，浅草寺逛逛",
        "中午 CoCo壱番屋（东武浅草駅前店）咖喱饭",
        "下午转战秋叶原",
        "晚上便利店，门口夜景好看"
      ],
      places: ["浅草寺", "秋叶原", "CoCo壱番屋 东武浅草駅前店"],
      feeling: "电器街的霓虹和浅草的香火，是东京的两副面孔。",
      photos: [
        "photos/day8-1.jpeg",
        "photos/day8-2.jpeg",
        "photos/day8-4.jpeg",
        "photos/day8-5.jpeg"
      ],
      captions: [
        "浅草寺 · 一起求来的达摩小袋",
        "浅草寺五重塔",
        "秋叶原的招牌与电波塔",
        "便利店门口的傍晚"
      ]
    },
    {
      day: 9,
      city: "东京",
      mood: "东京三连",
      title: "日本篇 Day 9",
      projects: [
        "午餐 みのる食堂（三越銀座店）",
        "涩谷看忠犬八公像，逛了些店",
        "奔东京塔，塔下看夜景",
        "晚餐罗森便利店"
      ],
      places: ["银座", "涩谷", "忠犬八公像", "东京塔", "みのる食堂 三越銀座店"],
      feeling: "三连打卡，腿是散的，但城市的天际线记住了。",
      photos: [
        "photos/day9-2.jpeg",
        "photos/day9-3.jpeg",
        "photos/day9-4.jpeg",
        "photos/day9-5.jpeg",
        "photos/day9-6.jpeg",
        "photos/day9-7.jpeg",
        "photos/day9-8.jpeg"
      ],
      captions: [
        "银座 · みのる食堂的定食",
        "抹茶白玉红豆甜碗",
        "涩谷 · 忠犬八公像",
        "涩谷街头",
        "东京塔",
        "东京塔夜景",
        "罗森便利店的晚餐"
      ]
    },
    {
      day: 10,
      city: "镰仓",
      mood: "镰仓与江之岛",
      title: "日本篇 Day 10",
      projects: [
        "远门去镰仓，KAMOKOTO KITCHEN 午饭很对胃口",
        "上江之岛，海风一吹整个人松了",
        "回东京累瘫，一兰拉面（浅草店）续命"
      ],
      places: ["镰仓", "江之岛", "KAMOKOTO KITCHEN", "一兰拉面 浅草店"],
      feeling: "海风一吹，连疲惫都轻了。",
      photos: [
        "photos/day10-2.jpeg",
        "photos/day10-3.jpeg",
        "photos/day10-4.jpeg",
        "photos/day10-5.jpeg",
        "photos/day10-6.jpeg"
      ],
      captions: [
        "镰仓 · KAMOKOTO KITCHEN 午餐",
        "江之岛 · 海边",
        "江之岛 · 海上的皮划艇",
        "江之电 · 镰仓站",
        "回东京后的浅草夜晚 · 西参道"
      ]
    },
    {
      day: 11,
      city: "东京",
      mood: "躺平自由日",
      title: "日本篇 Day 11",
      projects: [
        "没计划中午才起，鰻御食事処 九寅（浅草本店）鳗鱼饭",
        "浅草堂吉诃德闲逛，路上遇一群猫",
        "晚餐 鸟贵族（浅草六区店），便宜又热闹"
      ],
      places: ["浅草", "堂吉诃德 浅草", "鰻御食事処 九寅 浅草本店", "鸟贵族 浅草六区店"],
      feeling: "没有什么计划，反而最像旅行。",
      photos: [
        "photos/day11-2.jpeg",
        "photos/day11-3.jpeg",
        "photos/day11-4.jpeg"
      ],
      captions: [
        "鰻御食事処 九寅 · 鳗鱼饭",
        "浅草 · 一墙的招财猫",
        "鸟贵族 · 餐后甜点"
      ]
    },
    {
      day: 12,
      city: "成田 → 福州",
      mood: "启程回家",
      title: "日本篇 Day 12",
      projects: [
        "早上便利店早餐，出发去成田",
        "成田机场买白色恋人，最后日元喂了星巴克",
        "飞福州长乐下午六点多，酒店外卖睡觉"
      ],
      places: ["成田机场", "福州长乐"],
      feeling: "从日本飞回国内，胃先一步回了家。",
      photos: [
        "photos/day12-1.jpeg",
        "photos/day12-2.jpeg"
      ],
      captions: [
        "成田机场 · 白色恋人",
        "最后一点日元喂了星巴克"
      ]
    },
    {
      day: 13,
      city: "郑州",
      mood: "回家",
      title: "日本篇 Day 13",
      projects: [
        "回郑州，十五天旅程画上句号"
      ],
      places: ["郑州"],
      feeling: "从郑州出发，又回到郑州——这一圈，值了。"
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
    { name: "猪排饭", city: "京都", note: "酒店附近的小店，那天下了山太累，钻进去吃了一份猪排饭，一口接一口" },
    { name: "松门", city: "京都", note: "三千院前的午餐，没有预约等了一会儿，店里只收现金。地址：23 Ohara Shorinincho, Sakyo-Ku" },
    { name: "一兰拉面（浅草店）", city: "东京", note: "到东京第一顿还是它。台东区浅草1-1-16，回来路上又吃了一次" },
    { name: "CoCo壱番屋（东武浅草駅前店）", city: "东京", note: "8/17 浅草寺出来后的中午饭，咖喱专门店。地址：1 Chome-3-2 Hanakawado, Taito City, Tokyo 111-0033, Japan。大众点评 4.8 分，人均 ¥68，推荐咖喱猪排饭。" },
    { name: "みのる食堂（三越銀座店）", city: "东京", note: "8/18 银座午餐，吃完才有力气去涩谷和东京塔。地址：东京都中央区银座4-6-16（4-6-16 Ginza, Chuo City, Tokyo）。大众点评 4.5 分，人均 ¥133，银座/日比谷日式快餐环境榜第 3 名。" },
    { name: "KAMOKOTO KITCHEN", city: "镰仓", note: "8/19 到了镰仓吃的第一家店，很对胃口。地址：神奈川县藤泽市片濑 3-15（3-15 Katase, Fujisawa, Kanagawa 251-0032, Japan）。大众点评 4.0 分，人均 ¥85，推荐三色丼定食。" },
    { name: "鰻御食事処 九寅（浅草本店）", city: "东京", note: "8/20 自由活动日中午才起，专程去吃的鳗鱼饭。地址：东京都台东区浅草1-6-2（1-6-2 Asakusa, Taito City, Tokyo 111-0032, Japan）。大众点评 4.7 分，人均 ¥130，浅草鳗鱼饭热门榜第 2 名，推荐鳗鱼三吃。" },
    { name: "鸟贵族（浅草六区店）", city: "东京", note: "8/20 晚餐，便宜又热闹的居酒屋" }
  ],

  // ---------- 收藏 / 手信 ----------
  /* fields: name / city / type(手信|御守|店|杂货…) / note */
  souvenirs: [
    { name: "三千院神签", city: "京都", type: "御守", note: "100 円抽一次，抽到吉签。图片见 Day 5 相册。" },
    { name: "白色恋人", city: "东京", type: "手信", note: "8/21 在成田机场买的，把最后一点日元都花在了这" }
  ]
};