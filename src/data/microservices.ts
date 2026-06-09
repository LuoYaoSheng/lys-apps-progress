export type ServiceLayer = 'entry' | 'protocol' | 'admin' | 'domain' | 'http-support';

export const serviceLayerLabels: Record<ServiceLayer, string> = {
  entry: '入口层',
  protocol: '协议与兼容层',
  admin: '管理门面层',
  domain: '领域服务层',
  'http-support': 'HTTP 支撑层',
};

export const serviceLayerOrder: ServiceLayer[] = [
  'entry',
  'protocol',
  'admin',
  'domain',
  'http-support',
];

export type ServiceKind = 'infra' | 'gateway' | 'http' | 'rpc' | 'frontend';

export const serviceKindLabels: Record<ServiceKind, string> = {
  infra: '入口',
  gateway: 'Gateway',
  http: 'HTTP',
  rpc: 'RPC',
  frontend: '前端',
};

export interface PlatformService {
  id: string;
  name: string;
  layer: ServiceLayer;
  kind: ServiceKind;
  paths: string;
  responsibility: string;
  note?: string;
}

/** 与 docs/架构/微服务索引.md 对齐（公开站摘要版） */
export const platformServices: PlatformService[] = [
  {
    id: 'apisix',
    name: 'APISIX',
    layer: 'entry',
    kind: 'infra',
    paths: '/v1/* · /app/* · /v1/storage/* · /admin-api/*',
    responsibility: '唯一公网入口、路由、TLS、限流与安全策略',
    note: 'App 只能感知 APISIX，不能感知 RPC 地址',
  },
  {
    id: 'gateway',
    name: 'gateway',
    layer: 'protocol',
    kind: 'gateway',
    paths: '/v1/* 平台代理 · /app/* app-router',
    responsibility: 'App 上下文、Token 校验、响应适配、按 appId 解析 public-api upstream',
    note: 'C 端协议层，不是领域事实源',
  },
  {
    id: 'admin-web',
    name: 'admin-web',
    layer: 'admin',
    kind: 'frontend',
    paths: '/admin/*',
    responsibility: '运营控制台前端，不拥有后端领域规则',
  },
  {
    id: 'admin-api',
    name: 'admin-api',
    layer: 'admin',
    kind: 'http',
    paths: '/admin-api/*',
    responsibility: '管理端 REST、RBAC、配置写入门面',
    note: '转发 config-rpc，不是配置事实源',
  },
  {
    id: 'storage-api',
    name: 'storage-api',
    layer: 'http-support',
    kind: 'http',
    paths: '/v1/storage/*',
    responsibility: '标准上传入口、对象存储访问，调用 file-rpc',
    note: '与 file-rpc 成对：HTTP 入口 + 元数据事实源',
  },
  {
    id: 'auth-rpc',
    name: 'auth-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/app/{appId}/v1/auth/* · /v1/auth/*',
    responsibility: '登录、token、session、设备/第三方登录、凭据安全',
    note: '部分 user/profile 兼容接口仍临时承接',
  },
  {
    id: 'channel-rpc',
    name: 'channel-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/v1/channel/*',
    responsibility: '渠道生效配置、app/channel/platform 三元配置',
  },
  {
    id: 'config-rpc',
    name: 'config-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/v1/config/* · sys_config · platform_apps',
    responsibility: 'App 公共配置、功能开关、系统配置双写 DB + ETCD',
    note: '平台级配置与 App registry 统一服务',
  },
  {
    id: 'quota-rpc',
    name: 'quota-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/v1/quota/*',
    responsibility: '配额、用量、扣减与恢复',
  },
  {
    id: 'vip-rpc',
    name: 'vip-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '经 /app/{appId}/v1/payment/* 投影',
    responsibility: '会员状态、权益、套餐与订阅有效性',
    note: '支付履约链下游',
  },
  {
    id: 'payment-rpc',
    name: 'payment-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/app/{appId}/v1/payment/* · /v1/payment/callback/*',
    responsibility: '订单、支付回调、验签、退款、商户配置',
    note: '编排 vip-rpc · promotion-rpc',
  },
  {
    id: 'promotion-rpc',
    name: 'promotion-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/v1/promotion/* · /s/*',
    responsibility: '推广归因、点击追踪、S2S 上报',
  },
  {
    id: 'notification-rpc',
    name: 'notification-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: 'internal · 可映射 /v1/notification/*',
    responsibility: '短信、邮件、推送、站内通知发送',
    note: 'auth send-code 链下游',
  },
  {
    id: 'feedback-rpc',
    name: 'feedback-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/v1/feedback/*',
    responsibility: '用户反馈、工单、问题回执',
    note: '平台共享，不按 App 复制',
  },
  {
    id: 'content-rpc',
    name: 'content-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/v1/content/*',
    responsibility: '公告、文章、Banner、帮助内容等平台内容',
  },
  {
    id: 'legal-rpc',
    name: 'legal-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/v1/legal/*',
    responsibility: '用户协议、隐私政策、订阅条款、确认记录',
  },
  {
    id: 'asset-rpc',
    name: 'asset-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/v1/asset/*',
    responsibility: '账户资产：积分、余额、资产流水',
    note: 'asset ≠ 文件资源',
  },
  {
    id: 'voice-rpc',
    name: 'voice-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/v1/voice/*',
    responsibility: '音色、语音包、ASR/TTS、变声与历史',
  },
  {
    id: 'translation-rpc',
    name: 'translation-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/v1/translation/*',
    responsibility: '多语言翻译能力（译言宝等 App 复用）',
  },
  {
    id: 'analytics-rpc',
    name: 'analytics-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: 'admin/internal · /v1/analytics/*',
    responsibility: '统计指标、趋势、报表聚合',
    note: '不应成为业务事实主库',
  },
  {
    id: 'file-rpc',
    name: 'file-rpc',
    layer: 'domain',
    kind: 'rpc',
    paths: '/v1/files/* · internal',
    responsibility: '文件元数据、上传策略、下载地址、绑定、删除',
    note: '策略事实源；storage-api 为 HTTP 入口',
  },
];

export interface MainFlow {
  id: string;
  title: string;
  summary: string;
  steps: string[];
  relatedServices: string[];
}

export const mainFlows: MainFlow[] = [
  {
    id: 'admin-config',
    title: '后台控制面写入与分发',
    summary:
      'admin-web 保存后，config-rpc 双写 PostgreSQL 与 ETCD；各 owner service 消费方式尚未完全统一。',
    steps: [
      'admin-web → admin-api POST /admin/config/system',
      'admin-api → config-rpc UpdateSystemConfig',
      'config-rpc UPSERT sys_config + PUT ETCD /hub/configs/{module}',
      'auth-rpc 经 GetSystemConfig 读 DB；storage/notification watch ETCD；payment 按需读 ETCD',
    ],
    relatedServices: [
      'admin-web',
      'admin-api',
      'config-rpc',
      'auth-rpc',
      'storage-api',
      'notification-rpc',
      'payment-rpc',
    ],
  },
  {
    id: 'storage-upload',
    title: '存储上传主链',
    summary: 'storage-api 走 HTTP 上传；file-rpc 决定策略；storage_capability 叠加 provider 选择。',
    steps: [
      'App → APISIX POST /v1/storage/upload',
      'storage-api resolveUploadContext → file-rpc ResolveUploadPolicy',
      'file-rpc 查 file_storage_policies 返回 provider/path/visibility',
      'storage-api 叠加 storage_capability → 上传 OSS → file-rpc RegisterUploadedFile',
    ],
    relatedServices: ['storage-api', 'file-rpc', 'APISIX'],
  },
  {
    id: 'payment-order',
    title: '支付下单主链',
    summary: 'payment-rpc 创建订单，读取 capability 绑定与 method config，调用 PSP prepay。',
    steps: [
      'App → /app/{appId}/v1/payment/orders',
      'payment-rpc insert payment_orders',
      '读 ETCD app_capability_bindings + payment_method_configs',
      '调用微信/支付宝 prepay → 返回 payParams',
      '回调 → 验单 → vip-rpc 履约 · promotion-rpc 归因',
    ],
    relatedServices: ['payment-rpc', 'vip-rpc', 'promotion-rpc', 'gateway'],
  },
  {
    id: 'auth-sendcode',
    title: '认证发码主链',
    summary: 'auth_identity_capability 参与 route 选择，notification-rpc 发送短信/邮件。',
    steps: [
      'App → POST /v1/auth/send-code',
      'auth-rpc GetSystemConfig(auth_identity_capability)',
      '校验 account policy · 选 route · Redis 存验证码',
      'auth-rpc → notification-rpc SendNotification(provider/template/rateLimit)',
      'notification-rpc → SMS/Email provider',
    ],
    relatedServices: ['auth-rpc', 'config-rpc', 'notification-rpc', 'gateway'],
  },
];

export const microserviceMeta = {
  updatedAt: '2026-05-16',
  source: 'docs/架构/微服务索引.md',
  topology:
    'App/Web/Admin → APISIX → gateway / admin-api / storage-api → platform RPC / app public-api',
};
