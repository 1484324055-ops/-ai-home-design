# AI Home Design

AI Home Design 是一个面向全屋定制和室内设计场景的提示词生成网站。

用户可以先注册登录，然后按照“空间 -> 柜体 -> 风格 -> 材质 -> 高级选项”的顺序进行选择，最后一键生成适合 AI 生图工具使用的中英文提示词。

## 现在已经具备的能力

- 用户注册、登录、退出
- 登录态保护，未登录用户不能直接使用主页面
- 多级联动选择空间、柜体、风格和材质
- 高级选项支持住宅类型、镜头、光影
- 生成中英文提示词
- 生成反向提示词，方便减少常见出图问题
- 支持复制中文、英文和完整提示词方案
- 支持主题切换
- 已部署到 Vercel，可在线访问

## 技术栈

- 前端：Next.js 16、React 19、TypeScript、Tailwind CSS
- 后端：Next.js Route Handlers
- 数据库：PostgreSQL（Neon）
- ORM：Prisma
- 认证：bcryptjs + jose（JWT）
- 部署：Vercel

## 本地开发

```bash
npm install
cp .env.example .env
npm run dev
```

默认开发地址：

```text
http://localhost:3000
```

## 环境变量

项目依赖两个核心环境变量：

- `DATABASE_URL`
  作用：连接 PostgreSQL 数据库
- `JWT_SECRET`
  作用：用于登录态签名，保证用户身份不会被随意伪造

参考示例见 [.env.example](./.env.example)。

## 部署思路

这个项目的上线流程可以简单理解为：

1. Open Code 帮你把网站代码写好
2. 代码上传到 GitHub 仓库
3. Vercel 从 GitHub 自动拉取代码并构建
4. Neon 提供在线数据库
5. Vercel 通过环境变量连接 Neon
6. 用户访问 Vercel 给你的线上网址，就能直接使用网站

## 项目结构

```text
app/
  api/                接口路由（注册、登录、获取用户信息）
  login/              登录页
  register/           注册页
  layout.tsx          全局布局
  page.tsx            主页面

src/components/
  common/             通用组件
  generator/          提示词生成相关组件
  layout/             顶部栏、主题切换、用户菜单

src/lib/
  auth.ts             JWT 和密码相关逻辑
  data.ts             空间、柜体、风格、材质等静态数据
  prisma.ts           Prisma 客户端
  prompt-generator.ts 提示词组装逻辑

prisma/
  schema.prisma       数据模型
  migrations/         数据库迁移文件
```

## 后续建议

如果要继续把这个项目打磨成更完整的产品，推荐优先做下面几件事：

- 增加历史记录，保存每次生成过的提示词
- 支持收藏和导出
- 支持更多空间类型和风格模板
- 增加更细的提示词参数，例如镜头焦段、材质质感、时间段
- 增加管理员后台或数据统计

## 许可证

MIT
