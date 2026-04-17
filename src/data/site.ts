export const siteMeta = {
  title: '50 Builds Progress',
  description: '一年 50 个公开交付的进度站，记录小程序、APP、开源项目从想法、设计、开发到发布的过程。',
  siteUrl: 'https://apps.open.i2kai.com',
  siteName: '50 Builds Progress',
  author: 'LuoYaoSheng',
  keywords: '50 apps, indie apps, app progress, mini program, open source, 独立开发, 应用开发, 小程序, 开源项目, 产品进度, 愿望池',
  themeColor: '#111111',
  github: 'https://github.com/LuoYaoSheng/lys-apps-progress',
  gitee: 'https://gitee.com/luoyaosheng/lys-apps-progress',
  wishlist: {
    githubIssueUrl: 'https://github.com/LuoYaoSheng/lys-apps-progress/issues/new',
    giteeIssueUrl: 'https://gitee.com/luoyaosheng/lys-apps-progress/issues/new',
  },
};

export const navItems = [
  { label: '进度', href: '/' },
  { label: '交付', href: '/apps' },
  { label: '时间线', href: '/timeline' },
  { label: '愿望池', href: '/wishlist' },
];

export const target = {
  year: 2026,
  total: 50,
  statement: '用一年时间交付 50 个公开作品：小程序、APP 和开源项目。',
};

export const statusMeta = {
  idea: { label: '想法池', tone: 'ink' },
  design: { label: '设计中', tone: 'mint' },
  building: { label: '开发中', tone: 'blue' },
  testing: { label: '测试中', tone: 'amber' },
  released: { label: '已发布', tone: 'green' },
  paused: { label: '暂停', tone: 'gray' },
} as const;

export const categoryLabels = {
  image: '图像处理',
  video: '视频处理',
  tools: '工具类',
  productivity: '效率工具',
  lifestyle: '娱乐与生活',
  security: '系统与安全',
  browser: '浏览与通讯',
  ar: 'AR与特效',
  iot: 'IoT / BLE',
  database: '数据库工具',
  ops: '运维工具',
  writing: '写作工具',
  ai: 'AI协作',
  site: '公开站点',
} as const;

export const deliveryLabels = {
  miniProgram: '小程序',
  app: 'APP',
  openSource: '开源项目',
} as const;
