# Vercel 部署步骤

## 方法 1: 使用 Vercel CLI (推荐)

### 1. 安装 Vercel CLI
```bash
npm install -g vercel
```

### 2. 登录 Vercel
```bash
vercel login
```
按提示完成登录。

### 3. 部署项目
```bash
cd ai-home-design
vercel --prod
```

### 4. 配置环境变量
部署后，在 Vercel Dashboard 中设置环境变量：
- `DATABASE_URL`: 你的 PostgreSQL 连接字符串
- `JWT_SECRET`: 随机生成的密钥

## 方法 2: 使用 Vercel Dashboard

### 1. 准备代码
确保代码已推送到 GitHub/GitLab/Bitbucket。

### 2. 导入项目
1. 访问 https://vercel.com/dashboard
2. 点击 "Add New Project"
3. 选择你的仓库
4. 选择 "Next.js" 框架预设

### 3. 配置环境变量
在项目设置中添加：
- `DATABASE_URL`
- `JWT_SECRET`

### 4. 部署
点击 "Deploy" 按钮。

## 数据库设置

### 使用 Neon PostgreSQL (免费)

1. 访问 https://neon.tech
2. 注册账号
3. 创建新项目
4. 获取连接字符串（格式如下）:
```
postgresql://username:password@hostname/database?sslmode=require
```

5. 在 Vercel 环境变量中设置 `DATABASE_URL`

### 数据库迁移

部署后，在本地运行：
```bash
# 设置生产环境数据库连接字符串
export DATABASE_URL="你的PostgreSQL连接字符串"

# 运行迁移
npx prisma migrate deploy
```

## 验证部署

1. 访问 Vercel 提供的域名
2. 测试注册/登录功能
3. 测试提示词生成功能
4. 检查主题切换是否正常

## 故障排除

### 问题 1: 数据库连接失败
- 检查 `DATABASE_URL` 是否正确
- 确保数据库允许外部连接
- 检查 SSL 设置

### 问题 2: 构建失败
- 检查 Node.js 版本（需要 18+）
- 检查依赖是否完整
- 查看 Vercel 构建日志

### 问题 3: 认证失败
- 检查 `JWT_SECRET` 是否设置
- 确保 Cookie 设置正确

## 自定义域名 (可选)

1. 在 Vercel Dashboard 中选择项目
2. 进入 "Settings" → "Domains"
3. 添加你的域名
4. 按提示配置 DNS

## 持续部署

Vercel 会自动部署 Git 仓库的更改：
- 推送到 `main` 分支 → 生产环境
- 创建 Pull Request → 预览环境

## 监控

- 使用 Vercel Analytics 监控性能
- 使用 Vercel Logs 查看应用日志
