export const architectureMeta = {
  updatedAt: '2026-06-09',
  title: 'HUB 多 App 生态架构',
  summary:
    '治理主仓 + 多个 App + 统一平台服务。出门协作时，打开本页即可和团队对齐整体结构与当前交付进度。',
};

export const layers = [
  {
    name: '治理主仓',
    role: '标准、模板、文档、门禁脚本',
    examples: 'docs/、scripts/management/、packages/hub_core',
  },
  {
    name: 'App 子仓',
    role: '各产品业务代码与 public-api',
    examples: 'Flutter / UniApp 客户端 + go-zero 入口服务',
  },
  {
    name: '平台共享服务',
    role: '账号、支付、文件、语音、翻译等复用能力',
    examples: 'hub-platform-core 微服务群 + APISIX 单入口',
  },
];

export const requestFlow = [
  { step: '用户', desc: '使用小程序 / APP / H5' },
  { step: '客户端', desc: 'Flutter · UniApp · 落地页' },
  { step: 'SDK', desc: 'hub_core · 设备与签名' },
  { step: 'APISIX', desc: '唯一公网入口 api.i2kai.com' },
  { step: 'gateway', desc: '协议、Token、路由聚合' },
  { step: '服务', desc: 'public-api → 共享 RPC' },
];

export const routes = [
  { path: '/app/{appId}/v1/*', desc: '单个 App 的业务 API（经 public-api）' },
  { path: '/v1/{domain}/*', desc: '平台共享 API（auth、payment、config 等）' },
  { path: '/v1/storage/*', desc: '文件上传与访问' },
  { path: '/admin-api/*', desc: '运营管理后台' },
];

export const sharedCapabilities = [
  { name: '身份 identity', apps: '登录、设备、会话、渠道配置' },
  { name: '支付 payment', apps: 'IAP、微信/支付宝、订单回调' },
  { name: '会员 vip', apps: '订阅权益、套餐状态' },
  { name: '语音 voice', apps: 'ASR、TTS、变声（如夜莺变声器）' },
  { name: '翻译 translation', apps: '多语言翻译（如译言宝）' },
  { name: '存储 storage', apps: '上传、资源分发' },
  { name: '消息 notification', apps: '推送与消息通道' },
];

export const platformModules = [
  { name: '治理主仓 docs/scripts', status: 'done' as const, note: '标准、门禁、模板已成体系' },
  { name: 'APISIX 单入口', status: 'done' as const, note: '所有正式请求统一入口' },
  { name: 'gateway + app-router', status: 'done' as const, note: 'App 专属路由分流' },
  { name: 'admin-web / admin-api', status: 'progress' as const, note: 'MVP 已上线，RBAC 持续完善' },
  { name: '共享微服务', status: 'progress' as const, note: 'auth/payment/vip 等本地可跑' },
  { name: 'hub_core SDK 迁移', status: 'planned' as const, note: '批量 App 接入统一 SDK' },
];

export const statusLabels = {
  done: '已完成',
  progress: '进行中',
  planned: '待推进',
} as const;

export const referenceApps = [
  {
    name: '宝宝点滴',
    appKey: 'baby-diary',
    tech: 'UniApp + go-zero',
    purpose: '婴幼儿喂养作息记录，家庭协作与提醒',
    slug: null,
  },
  {
    name: '萌宠圈',
    appKey: 'cute-meow-circle',
    tech: 'UniApp + go-zero',
    purpose: '萌宠内容、问候图/表情包、AI 风格化创作',
    slug: null,
  },
  {
    name: '译言宝',
    appKey: 'translator',
    tech: 'Flutter + go-zero',
    purpose: '文本/拍照/语音多模态翻译',
    slug: 'translator',
  },
  {
    name: '夜莺变声器',
    appKey: 'nightingale-voice-changer',
    tech: 'Flutter + voice 链路',
    purpose: '录音变声、音色库、会员订阅',
    slug: null,
  },
];

export const adminLayers = [
  '工作台',
  '应用中心 — App 与能力绑定',
  '能力中心 — 共享能力控制面',
  '运营配置',
  '通用设置',
];
