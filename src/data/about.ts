export const publicBoundary = {
  title: '公开与对内边界',
  summary:
    '本站在线地址 apps.open.i2kai.com，只展示可公开的交付元数据。内部开发台账、门禁脚本、私有源码和具体排期不在此站维护。',
  publicIncludes: [
    '年度交付进度与每个公开作品的状态',
    'HUB 整体架构速览（三层结构、请求链路、平台模块）',
    '样板 App 与产品线说明（每个 App 干什么）',
    '落地页、项目站、体验二维码等公开入口',
    '愿望池（GitHub / Gitee Issue）',
  ],
  notIncluded: [
    '100+ App 完整内部台账与私有排期',
    '密钥、商户配置、生产环境细节',
    '门禁脚本与内部 API 配置',
  ],
};

export const ecosystemLinks = [
  {
    label: '开源项目汇总',
    href: 'https://open.i2kai.com',
    desc: 'Smart BLE、IoT Platform、RedisPilot 等开源体系入口',
  },
  {
    label: '个人站',
    href: 'https://i2kai.com',
    desc: '博客、作品档案与交付案例',
  },
  {
    label: '本仓库',
    href: 'https://github.com/LuoYaoSheng/lys-apps-progress',
    desc: '站点源码，MIT 开源',
  },
];

export const deliveryTypes = [
  {
    key: 'miniProgram',
    title: '小程序',
    desc: '微信等平台的轻量交付，优先扫码体验，不默认公开业务源码。',
  },
  {
    key: 'app',
    title: 'APP',
    desc: 'Flutter / UniApp 等移动应用。对外展示落地页与商店入口，源码按单项目决定是否开源。',
  },
  {
    key: 'openSource',
    title: '开源项目',
    desc: '工具、平台与样板项目。通常有独立项目站 xxx.open.i2kai.com 与 Gitee/GitHub 双远端。',
  },
];

/** 公开可说的平台能力摘要（不涉及内部实现细节） */
export const platformPublic = {
  title: '统一能力，快速交付',
  summary:
    '多个 APP 复用同一套平台能力（账号、支付、配置、文件等），让每个产品专注自己的场景，而不是重复造轮子。这里只说明公开产品如何受益，不展开内部服务拓扑。',
  capabilities: [
    { name: '账号与设备', note: '登录、会话、渠道化配置' },
    { name: '支付与会员', note: 'IAP、微信/支付宝、订阅权益' },
    { name: '语音与翻译', note: 'ASR、TTS、多语言翻译等共享能力' },
    { name: '文件与存储', note: '上传、资源分发' },
  ],
};

export const appFamilies = [
  {
    title: '图像与素材',
    examples: '快拼工坊、色卡精灵、格作、SlimPic、Batch Image Studio',
    desc: '拼接、取色、九宫格、压缩与批量出图，服务设计与运营素材生产。',
  },
  {
    title: '效率与工具',
    examples: '译言宝、PDF 工具箱、Icon Gen',
    desc: '翻译、文档处理、图标生成等日常高频小工具。',
  },
  {
    title: '生活与创意',
    examples: '恋恋决定、颜究生、LED 闪字',
    desc: '情侣互动、表情包、场景化趣味工具。',
  },
  {
    title: '开源与基础设施',
    examples: 'Smart BLE、Open IoT Platform、RedisPilot、TermForge',
    desc: 'BLE、IoT、数据库与运维向开源项目，有独立项目站与文档。',
  },
];
