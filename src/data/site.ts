export const siteMeta = {
  title: '50 Apps Progress',
  description: '一年 50 个应用的公开进度站，记录从想法、设计、开发到发布的持续交付过程。',
  siteUrl: 'https://apps.open.i2kai.com',
  siteName: '50 Apps Progress',
  author: 'LuoYaoSheng',
  keywords: '50 apps, indie apps, app progress, 独立开发, 应用开发, 产品进度, 愿望池',
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
  { label: '应用', href: '/apps' },
  { label: '时间线', href: '/timeline' },
  { label: '愿望池', href: '/wishlist' },
];

export const target = {
  year: 2026,
  total: 50,
  statement: '用一年时间交付 50 个小而完整的应用。',
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
  productivity: '效率工具',
  life: '生活记录',
  education: '教育启蒙',
  utility: '实用工具',
  social: '互动娱乐',
} as const;
