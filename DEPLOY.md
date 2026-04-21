# AI Home Design - 部署指南

## 项目概述
全屋定制AI效果图生成器，帮助设计师快速生成AI生图提示词。

## 本地开发

```bash
# 安装依赖
npm install

# 设置数据库
npx prisma migrate dev

# 启动开发服务器
npm run dev
```

## 部署到 Vercel

### 1. 注册 Vercel 账号
- 访问 https://vercel.com
- 使用 GitHub 账号登录

### 2. 安装 Vercel CLI
```bash
npm i -g vercel
```

### 3. 登录 Vercel
```bash
vercel login
```

### 4. 配置环境变量
在 Vercel Dashboard 中设置以下环境变量：
- `DATABASE_URL`: PostgreSQL 数据库连接字符串
- `JWT_SECRET`: JWT 密钥（随机字符串）

### 5. 部署
```bash
vercel --prod
```

## 数据库配置

### 选项 1: Neon PostgreSQL (推荐)
1. 访问 https://neon.tech
2. 创建免费账号
3. 创建新项目
4. 获取连接字符串
5. 在 Vercel 环境变量中设置 `DATABASE_URL`

### 选项 2: Supabase
1. 访问 https://supabase.com
2. 创建免费项目
3. 获取连接字符串
4. 在 Vercel 环境变量中设置 `DATABASE_URL`

## 更新 Prisma Schema

如果使用 PostgreSQL，需要更新 `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  password  String
  createdAt DateTime @default(now())
}
```

然后重新生成客户端：
```bash
npx prisma generate
```

## 功能特性

- ✅ 用户注册/登录
- ✅ 5套主题切换
- ✅ 级联选择器（空间→柜体→风格→材质）
- ✅ 高级选项（住宅类型、镜头、光影）
- ✅ 中英对照提示词生成
- ✅ 可编辑提示词
- ✅ 一键复制（中文/英文）
- ✅ 重置功能
- ✅ 响应式设计

## 技术栈

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS
- Prisma + SQLite/PostgreSQL
- bcryptjs + jose (认证)

## 注意事项

1. 生产环境务必更换 `JWT_SECRET`
2. 定期备份数据库
3. 如需添加图片展示，可将图片上传至 CDN
