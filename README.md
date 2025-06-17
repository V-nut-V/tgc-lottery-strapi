以下中文部分是有关倒出抽奖记录的使用说明 - 英文部分是官方Strapi这个App的启动（开发/部署）使用说明
## 📤 历史记录导出接口说明

该接口用于导出 `history` 数据为 `.csv` 文件，支持多种筛选条件与自定义导出数量。

### 🔗 请求地址 GET /api/history/export
---

### ✅ 支持的查询参数

| 参数名     | 功能描述                                                               | 示例值                        |
|------------|---------------------------------------------------------------------|-------------------------------|
| `start`    | 开始日期（包含当天）                                                    | `2025-06-01`                 |
| `end`      | 结束日期（包含当天）                                                    | `2025-06-09`                 |
| `store`    | 导出指定 Store_ID 的记录（支持多个，用`,`分隔）                           | `123` 、`123,456`             |
| `exclude`  | 排除指定 Store_ID 的记录（支持多个）                                     | `123` 、`123,456`             |
| `sort`     | 按照 `Create_Date` 排序 `asc` = 最旧在前，`desc` = 最近在前（默认 asc）   | `asc` 或 `desc`               |
| `limit`    | 导出数量上限（默认 `99999` 条）                                         | `100`, `5000`                 |

> ⚠️ 注意：当 `store` 和 `exclude` 同时传入时，`exclude` 优先生效。

---

### 📘 示例请求
后端服务器域名域名 + /api/history/export?start=2025-06-01&end=2025-06-10&store=1234&sort=desc

#### ✅ 全部导出（默认升序）
/api/history/export

#### ✅ 按时间倒序导出（最新在前）
/api/history/export?sort=desc

#### ✅ 筛选指定时间范围
/api/history/export?start=2025-06-01&end=2025-06-09

#### ✅ 指定门店 + 时间范围 + 倒序
/api/history/export?store=1234&start=2025-06-01&end=2025-06-09&sort=desc

#### ✅ 导出指定门店（多个）
/api/history/export?store=123,456

#### ✅ 排除指定门店（多个）
/api/history/export?exclude=123,456

#### ✅ 限制导出数量
/api/history/export?limit=100

---

### 📁 返回结果

返回 `.csv` 文件下载，内容包括字段：

- `Create_Date`
- `Spent`
- `Prize_Name`
- `Code`
- `Store_ID`
- `Store_Name`

---


# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
