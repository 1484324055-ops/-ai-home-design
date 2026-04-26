# AI Home Design 微信小程序

这是网页项目的微信小程序版本。第一阶段先实现首页生成器 MVP：读取资产库、选择空间/柜体/风格/材质、生成提示词并复制。

## 如何在微信开发者工具打开

1. 打开微信开发者工具。
2. 选择“导入项目”。
3. 项目目录选择：

```text
wechat-miniapp
```

4. AppID 使用你的小程序 AppID。
5. 当前项目已把开发配置设为不校验合法域名，方便本地预览。

正式上线前，需要在微信小程序后台配置 request 合法域名。

## 当前接口地址

默认接口地址在这里修改：

```text
miniprogram/services/config.ts
```

当前默认使用：

```text
https://ai-home-design-wine.vercel.app
```

如果后续换成国内备案域名，只需要改这里。

开发阶段默认先用小程序内置资产，不请求线上接口，避免合法域名未配置时控制台反复报错：

```text
miniprogram/services/config.ts
```

```ts
export const ENABLE_REMOTE_ASSETS = false;
```

等你在微信后台配置好 request 合法域名后，再把它改成：

```ts
export const ENABLE_REMOTE_ASSETS = true;
```

## 微信后台需要配置的域名

进入小程序后台：

```text
开发管理 -> 开发设置 -> 服务器域名 -> request 合法域名
```

开发测试阶段可以先添加：

```text
https://ai-home-design-wine.vercel.app
```

正式上线更推荐换成国内备案域名，再把国内域名添加到这里。

## 第一版功能

- 首页生成器
- 空间/柜体/风格/材质选择
- 高级选项默认值
- 中文/英文提示词生成
- 一键复制提示词
- 批量/历史/我的页面占位

## 下一步

- 接入微信登录
- 接入历史记录
- 接入反馈建议
- 完成批量生成页
