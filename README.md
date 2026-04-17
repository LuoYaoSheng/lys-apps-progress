# lys-apps-progress

一年 50 个应用的公开进度站。

这个仓库只展示公开信息：应用名称、定位、阶段、宣传文案、截图或图标、公开进展。它不承载内部台账、私有排期、云服务器部署脚本或具体应用源码。

## 站点定位

- 公开展示 50 Apps 年度目标
- 记录应用从想法到发布的进度
- 同步可公开的应用故事和发布节点
- 收集外部小应用想法

## 技术栈

- Astro
- TypeScript
- 静态输出

## 页面

- `/`
- `/apps`
- `/apps/[slug]`
- `/timeline`
- `/wishlist`

## 数据

公开应用数据在 `src/data/apps.ts`。

站点配置在 `src/data/site.ts`，包括站点域名、导航、GitHub/Gitee 链接和愿望池提交入口。

## 愿望池

`/wishlist` 是公开想法提交入口。当前实现不自建后端，表单会生成 GitHub Issue 草稿，Gitee Issue 作为备用入口。

提交内容默认可以被维护者整理、引用并加入公开候选池。不要提交账号、密码、密钥、手机号、私人地址或未授权素材。

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 代码规范

```bash
npm run format
npm run verify
```

`verify` 会依次执行格式检查、Astro 类型检查和静态构建。

## 开源边界

可以公开：

- 站点源码
- 公开应用元数据
- 公开图标和截图
- 公开进展记录

不应公开：

- HUB 内部台账
- 具体应用私有源码
- 云服务器部署脚本
- 密钥、账号、证书和 `.env`
- 未发布产品的完整商业排期
- 未授权素材

## License

MIT License

应用名称、商标、图标和截图的品牌权利不因 MIT License 自动转让。
