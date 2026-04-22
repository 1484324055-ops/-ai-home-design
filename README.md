# AI Home Design

AI Home Design 是一个面向全屋定制和室内设计场景的提示词生成网站。

用户先注册登录，然后按照“空间 -> 柜体 -> 风格 -> 材质 -> 高级选项”的顺序完成选择，最后一键生成更自然、可直接用于生图的中英文提示词。

## 当前功能

- 用户注册、登录、退出
- 登录态保护，未登录用户不能直接进入主页面
- 多级联动选择空间、柜体、风格和材质
- 高级选项支持住宅类型、镜头、光影
- 生成中英文正向提示词
- 支持复制中文、英文和完整方案
- 自动保存历史记录，支持收藏、载入、删除
- 反馈建议入口，方便持续收集用户意见
- 提供外部生图网站入口，方便直接跳转继续出图
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
  作用：用于登录态签名，保证用户身份不被伪造

参考示例见 `.env.example`。

## 上线流程

这个项目的上线流程可以简单理解为：

1. Open Code 负责把网站代码写出来
2. 代码上传到 GitHub 仓库
3. Vercel 从 GitHub 自动拉取代码并构建部署
4. Neon 提供线上 PostgreSQL 数据库
5. Vercel 通过环境变量连接 Neon
6. 用户通过 Vercel 提供的网址在线使用网站

## 项目结构

```text
app/
  api/                接口路由（注册、登录、用户、历史记录、反馈）
  login/              登录页
  register/           注册页
  layout.tsx          全局布局
  page.tsx            主页面

src/components/
  common/             通用组件
  feedback/           反馈入口组件
  generator/          提示词生成、历史记录、生图入口相关组件
  layout/             顶部栏、主题切换、用户菜单

src/lib/
  auth.ts             JWT 和密码相关逻辑
  data.ts             空间、柜体、风格、材质等静态数据
  history.ts          历史记录转换逻辑
  prisma.ts           Prisma 客户端
  prompt-generator.ts 提示词组装逻辑
  session.ts          登录态读取逻辑

prisma/
  schema.prisma       数据模型
  migrations/         数据库迁移文件
```

## 后续建议

如果要继续把这个项目打磨成更完整的产品，建议优先做下面几项：

- 继续优化移动端交互和排版
- 增加更多平台适配的提示词格式
- 加强账号安全和接口限流
- 增加数据统计和后台管理能力
- 支持导出方案或分享方案链接

## 许可证

MIT
