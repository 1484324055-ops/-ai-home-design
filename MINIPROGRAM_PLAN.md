# AI Home Design 微信小程序技术方案与页面结构

> 目标：把当前网页端的 AI 家居提示词生成器，迁移成一个更适合微信用户使用的小程序版本。

## 1. 推荐结论

第一版建议采用：

- 小程序前端：微信原生小程序 + TypeScript
- 后端接口：继续复用当前 Next.js/Vercel 项目的 API
- 数据库：继续使用现有 Neon PostgreSQL
- 管理后台：继续保留网页端，不放进第一版小程序
- 小程序定位：面向普通用户的提示词生成、复制、历史记录、反馈工具

这样做的好处是：不用推倒重来，后台和数据库继续复用；小程序前端单独做一套，更符合微信生态和手机使用体验。

## 2. 为什么不是直接把网页塞进小程序

微信小程序不是普通网页容器。网页端的 Next.js 页面不能直接一键转换成小程序页面。

主要区别：

- 网页使用 HTML/CSS/React，小程序使用 WXML/WXSS/小程序组件。
- 小程序网络请求需要配置合法域名。
- 小程序外链跳转限制更多，不能像网页一样自由跳 ChatGPT、Gemini、Midjourney 等外部网站。
- 小程序审核会关注用户功能、类目、隐私和外部跳转。

所以更稳的方式是：后端复用，前端重写。

## 3. 第一版功能边界

第一版先做用户最核心的路径：

1. 用户打开小程序
2. 选择空间、柜体、风格、材质
3. 选择高级选项
4. 生成中文提示词和英文提示词
5. 复制提示词
6. 查看历史方案
7. 提交反馈建议

第一版暂不放进去：

- 资产库编辑
- 数据面板
- 管理员后台
- 外部生图平台直接跳转
- 复杂批量导出

这些功能先保留在网页端后台，避免小程序第一版过重，也降低审核风险。

## 4. 页面结构设计

### 4.1 首页：生成器

路径建议：

```text
pages/index/index
```

核心模块：

- 顶部品牌区：AI Home Design / 全屋定制效果图提示词生成器
- 步骤 1：选择空间
- 步骤 2：选择柜体
- 步骤 3：选择风格
- 步骤 4：选择材质
- 高级选项：住宅类型、镜头、光影
- 主按钮：生成提示词
- 生成结果：中文提示词、英文提示词、复制按钮

手机端体验重点：

- 单列卡片布局
- 选择项使用图标、色块、纹理
- 生成按钮固定在底部
- 结果区生成后自动滚动到可见位置

### 4.2 批量生成页

路径建议：

```text
pages/batch/index
```

核心模块：

- 当前风格
- 当前材质套餐
- 按空间分组展示柜体组合
- 单选/多选组合
- 全选全部空间
- 全选单个空间
- 批量生成结果
- 复制全部
- 保存到历史方案

这个页面适合后续作为小程序的特色功能。

### 4.3 历史方案页

路径建议：

```text
pages/history/index
```

核心模块：

- 最近生成
- 收藏方案
- 按空间筛选
- 按柜体筛选
- 按风格筛选
- 载入方案
- 删除方案

小程序里不建议做复杂左侧抽屉，改成顶部筛选 + 列表更适合手机。

### 4.4 反馈页

路径建议：

```text
pages/feedback/index
```

核心模块：

- 反馈内容输入框
- 联系方式，可选
- 提交按钮
- 提交成功提示

反馈仍然保存到当前数据库，网页端数据面板继续可以查看。

### 4.5 我的页

路径建议：

```text
pages/profile/index
```

核心模块：

- 用户信息
- 历史方案入口
- 反馈建议入口
- 使用说明
- 隐私说明
- 退出登录或清除登录状态

## 5. 小程序底部导航建议

第一版建议 4 个 Tab：

```text
首页
批量
历史
我的
```

不建议第一版放“资产库”和“数据面板”。这两个属于管理功能，继续用网页端即可。

## 6. 登录方案

第一版有两种选择：

### 方案 A：微信登录

用户点授权后，用微信身份创建账号。

优点：

- 用户体验最好
- 不用记用户名密码
- 更符合小程序习惯

需要：

- 小程序 AppID
- 小程序 AppSecret
- 后端新增微信登录接口

### 方案 B：沿用用户名密码登录

小程序内做登录页，调用现在的 `/api/auth/login`。

优点：

- 改动小
- 能复用现有账号系统

缺点：

- 对普通微信用户不够顺滑
- 手机上输入账号密码体验一般

推荐：第一版如果赶进度，可以先用方案 B；正式推广前再升级微信登录。

## 7. 后端接口复用方案

当前网页已有的 API 可以继续用：

```text
GET  /api/assets              获取空间、柜体、风格、材质资产
POST /api/history             保存历史方案
GET  /api/history             获取历史方案
PATCH /api/history            收藏/取消收藏
DELETE /api/history           删除历史方案
POST /api/feedback            提交反馈
```

小程序新增或调整：

```text
POST /api/wechat/login        微信登录，后续做
GET  /api/miniprogram/config  小程序端基础配置，可选
```

注意：

- 小程序请求域名必须是 HTTPS。
- 小程序后台需要把接口域名加入 request 合法域名。
- 如果继续使用 Vercel 域名，在国内访问稳定性可能不如国内服务器。
- 如果正式面向国内用户，建议后续考虑国内服务器和备案域名。

## 8. 小程序项目目录建议

可以在当前项目里新增一个目录：

```text
wechat-miniapp/
  app.json
  app.ts
  app.wxss
  project.config.json
  sitemap.json
  pages/
    index/
      index.wxml
      index.wxss
      index.ts
      index.json
    batch/
      index.wxml
      index.wxss
      index.ts
      index.json
    history/
      index.wxml
      index.wxss
      index.ts
      index.json
    feedback/
      index.wxml
      index.wxss
      index.ts
      index.json
    profile/
      index.wxml
      index.wxss
      index.ts
      index.json
  components/
    option-card/
    prompt-result/
    batch-picker/
  services/
    api.ts
    assets.ts
    history.ts
    feedback.ts
  utils/
    prompt-generator.ts
    storage.ts
```

## 9. 和网页端的功能对应关系

| 网页端功能 | 小程序处理方式 |
| --- | --- |
| 首页生成器 | 重做成小程序首页 |
| 批量生成 | 重做成小程序批量页 |
| 历史方案库 | 重做成历史页 |
| 反馈建议 | 重做成反馈页 |
| 生图平台链接 | 改成复制提示词 + 使用说明 |
| 资产库 | 保留网页端管理 |
| 数据面板 | 保留网页端管理 |
| 管理员入口 | 小程序第一版不做 |

## 10. 明天需要准备的资料

小程序基础资料：

- 小程序 AppID
- 小程序名称
- 小程序头像
- 小程序介绍
- 服务类目
- 主体信息是否已认证

开发配置资料：

- 微信开发者工具是否已安装
- 小程序管理员是否能扫码登录开发者工具
- 是否已有备案域名
- 是否准备使用当前 Vercel 域名，还是后续换国内域名

如果要做微信登录：

- AppSecret
- 是否允许我帮你新增微信登录接口

如果要提交审核：

- 隐私政策内容
- 用户协议内容
- 功能截图
- 测试账号，若需要

## 11. 推荐开发顺序

第一阶段：小程序壳子和首页

- 创建 `wechat-miniapp` 项目
- 接入 `/api/assets`
- 完成首页选择器
- 完成单条提示词生成和复制

第二阶段：历史和反馈

- 接入历史方案接口
- 做历史页
- 做反馈页
- 保证数据能回到网页端后台

第三阶段：批量生成

- 做批量选择器
- 支持单选/多选/全选
- 支持批量复制
- 支持批量保存到历史

第四阶段：微信体验增强

- 微信登录
- 小程序分享
- 使用说明
- 审核资料整理

## 12. 当前最推荐的下一步

等小程序资料准备好后，下一步直接开始：

```text
创建 wechat-miniapp 项目骨架 + 首页生成器 MVP
```

先让它能在微信开发者工具里跑起来，比一开始就追求完整功能更稳。

## 13. 官方参考

- 微信小程序框架文档：https://developers.weixin.qq.com/miniprogram/dev/framework/
- 微信小程序网络请求文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html
- 微信小程序备案操作指引：https://developers.weixin.qq.com/miniprogram/product/record_guidelines.html
