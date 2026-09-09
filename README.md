# 日本 8 月 · 差点泡汤的旅行

> 13 天，3 座城市，一段差点被台风留在国内的旅程。
> 用 AI 手搓的旅行回忆版页面 · 数据驱动 · 插画风手账调性

---

## 文件结构

```
japan-trip-recap/
├── index.html      # 页面结构 + 样式 + 渲染逻辑（不用动）
├── data.js         # 所有数据在这里（这是你唯一要改的文件）
└── README.md       # 本文档
```

---

## 怎么用

### 本地预览

直接**双击 `index.html`** 就能在浏览器打开。
> 想用手机预览？把这个文件夹用 VSCode 打开，装个 `Live Server` 插件，右键 `Open with Live Server`，然后用手机扫码访问（同一局域网）。

### 修改内容

**只改 `data.js`**。`index.html` 不要动。

`data.js` 里每个字段都写了注释，照着填就行。

举例，加一天的回忆：

```js
days: [
  {
    day: 1,
    city: "大阪",
    mood: "兴奋",
    moodEmoji: "🎉",
    story: "落地大阪，关西机场的海关排了半小时。坐南海特急进城，第一口章鱼烧就这么来了。",
    spots: ["道顿堀", "心斋桥筋商店街"]
  }
  // 再加一条就再写一个花括号
]
```

保存后**刷新浏览器**就能看到效果。

---

## 部署到网上（拿到永久链接）

整个过程 **0 成本**，15-20 分钟搞定，跟着做就行。

### 步骤 1：注册 GitHub

- 打开 https://github.com 注册账号（已有跳过）

### 步骤 2：建仓库

- 右上角 + → New repository
- Repository name 填：`japan-trip-recap`（或任何你喜欢的名字）
- 选 **Public**
- 点 **Create repository**

### 步骤 3：上传文件

两种方式任选：

**方式 A：用 GitHub 网页上传**
- 进入仓库，点 **uploading an existing file**
- 把 `index.html` 和 `data.js` 两个文件拖进去
- 点 **Commit changes**

**方式 B：用 GitHub Desktop（更顺手）**
- 下载安装 https://desktop.github.com
- File → New Repository → 本地路径选你的文件夹
- 提交 + 推送到 GitHub

### 步骤 4：用 Cloudflare Pages 部署

- 打开 https://pages.cloudflare.com 用 GitHub 账号登录
- 点 **Create a project** → **Pages** → **Connect to Git**
- 选你刚建的仓库
- Build settings 留默认（不用改）
- 点 **Save and Deploy**
- 等 1-2 分钟，会得到一个 `xxx.pages.dev` 的链接

完事。把这个链接发给朋友就行。

**以后改内容**：只改 `data.js` → 推到 GitHub → 几十秒后链接自动更新。

---

## 敏感信息提醒

> 链接是**公开可访问**的。
> 别往 `data.js` 里填护照号、身份证号、银行卡这些。

---

## 想换样式 / 加功能

跟我说，红线随时候着 ✋