import { categoryLabels, statusMeta } from './site';

export type AppStatus = keyof typeof statusMeta;
export type AppCategory = keyof typeof categoryLabels;

export type AppProgress = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: AppCategory;
  status: AppStatus;
  progress: number;
  month: string;
  startedAt?: string;
  shippedAt?: string;
  icon?: string;
  website?: string;
  qrcode?: string;
  summary: string;
  highlights: string[];
};

export const apps: AppProgress[] = [
  {
    id: 'lianlian-jueding',
    slug: 'lianlian-jueding',
    name: '恋恋决定',
    tagline: '情侣互动决策小程序',
    category: 'lifestyle',
    status: 'released',
    progress: 100,
    month: '2026-04',
    shippedAt: '2026-04-17',
    icon: '/app-icons/couple-love.png',
    qrcode: '/app-qrcodes/lianlian-jueding.jpg',
    summary: '情侣互动决策小程序，通过小游戏解决日常选择困难。',
    highlights: ['情侣决策', '小游戏合集', '微信小程序上线', '扫码体验'],
  },
  {
    id: 'install-b',
    slug: 'snapkit',
    name: '快拼工坊',
    tagline: '移动应用界面快速拼接',
    category: 'image',
    status: 'testing',
    progress: 82,
    month: '2026-04',
    icon: '/app-icons/snapkit.png',
    website: 'https://snapkit.anxiqing.cn',
    summary: '移动应用界面快速拼接工具。',
    highlights: ['截图拼接', '素材生产', '模板化流程'],
  },
  {
    id: 'translator',
    slug: 'translator',
    name: '译言宝',
    tagline: '轻量多语言翻译',
    category: 'productivity',
    status: 'building',
    progress: 66,
    month: '2026-04',
    icon: '/app-icons/translator.png',
    website: 'https://translator.anxiqing.cn',
    summary: '多语言翻译。',
    highlights: ['多语言', '短文本', '学习辅助'],
  },
  {
    id: 'image-compress',
    slug: 'slimpic',
    name: 'SlimPic',
    tagline: '图片压缩和体积管理',
    category: 'image',
    status: 'building',
    progress: 58,
    month: '2026-04',
    icon: '/app-icons/slimpic.png',
    website: 'https://imagecompress.anxiqing.cn',
    summary: '图片无损压缩。',
    highlights: ['图片压缩', '批量处理', '本地优先'],
  },
  {
    id: 'emoji-maker',
    slug: 'emoji-maker',
    name: '颜究生',
    tagline: '自定义表情包生成',
    category: 'image',
    status: 'design',
    progress: 38,
    month: '2026-05',
    icon: '/app-icons/emoji-maker.png',
    website: 'https://emojimaker.anxiqing.cn',
    summary: '自定义表情包生成。',
    highlights: ['表情包', '贴纸', '分享素材'],
  },
  {
    id: 'led-barrage',
    slug: 'ledflashtext',
    name: 'LED闪字',
    tagline: '手机全屏滚动字幕',
    category: 'image',
    status: 'testing',
    progress: 76,
    month: '2026-05',
    icon: '/app-icons/ledflashtext.png',
    website: 'https://ledflashtext.anxiqing.cn',
    summary: 'LED滚动字幕。',
    highlights: ['滚动字幕', '颜色方向速度', '离线使用'],
  },
  {
    id: 'color-palette',
    slug: 'colorpalette',
    name: '色卡精灵',
    tagline: '配色采集和色卡整理',
    category: 'lifestyle',
    status: 'building',
    progress: 64,
    month: '2026-05',
    icon: '/app-icons/colorpalette.png',
    website: 'https://colorpalette.anxiqing.cn',
    summary: '颜色调色板工具。',
    highlights: ['取色', '色卡', '设计辅助'],
  },
  {
    id: 'grid-maker',
    slug: 'gridmaker',
    name: '格作',
    tagline: '九宫格图片分割',
    category: 'tools',
    status: 'released',
    progress: 100,
    month: '2026-05',
    icon: '/app-icons/gridmaker.png',
    website: 'https://gridmaker.anxiqing.cn',
    summary: '九宫格图片分割。',
    highlights: ['九宫格', '社交图片', '快速导出'],
  },
  {
    id: 'watermark-camera',
    slug: 'watermarkcamera',
    name: '水印相机',
    tagline: '现场记录和防篡改水印',
    category: 'image',
    status: 'design',
    progress: 44,
    month: '2026-06',
    icon: '/app-icons/watermarkcamera.png',
    website: 'https://watermarkcamera.anxiqing.cn',
    summary: '防篡改存证水印相机。',
    highlights: ['水印模板', '现场记录', '团队协作方向'],
  },
  {
    id: 'longshot',
    slug: 'longshot',
    name: '长截图大师',
    tagline: '长图整理和内容截取',
    category: 'image',
    status: 'idea',
    progress: 18,
    month: '2026-06',
    icon: '/app-icons/longshot.png',
    website: 'https://longshot.anxiqing.cn',
    summary: 'AI驱动的智能长截图工具。',
    highlights: ['长截图', '裁切', '标注'],
  },
  {
    id: 'beaker',
    slug: 'beaker',
    name: '烧杯实验',
    tagline: '掌上化学实验室',
    category: 'tools',
    status: 'design',
    progress: 35,
    month: '2026-06',
    icon: '/app-icons/beaker.png',
    website: 'https://beaker.anxiqing.cn',
    summary: '掌上化学实验室。',
    highlights: ['化学启蒙', '安全模拟', '互动实验'],
  },
  {
    id: 'cad-viewer',
    slug: 'cadviewer',
    name: 'CAD查看器',
    tagline: '移动端轻量图纸查看',
    category: 'tools',
    status: 'idea',
    progress: 16,
    month: '2026-07',
    icon: '/app-icons/cadviewer.png',
    website: 'https://cadviewer.anxiqing.cn',
    summary: '轻量级CAD图纸查看。',
    highlights: ['图纸查看', '现场沟通', '轻量工具'],
  },
  {
    id: 'notes-app',
    slug: 'notes',
    name: '笔记',
    tagline: '快速记录和灵感收纳',
    category: 'productivity',
    status: 'idea',
    progress: 12,
    month: '2026-07',
    icon: '/app-icons/notes.png',
    website: 'https://notesapp.anxiqing.cn',
    summary: '笔记与备忘录。',
    highlights: ['快速记录', '离线可用', '轻量整理'],
  },
  {
    id: 'mindflow',
    slug: 'mindflow',
    name: '心流',
    tagline: '思维导图和结构化整理',
    category: 'productivity',
    status: 'paused',
    progress: 28,
    month: '2026-07',
    icon: '/app-icons/mindflow.png',
    website: 'https://mindflow.anxiqing.cn',
    summary: '思维导图绘制。',
    highlights: ['思维导图', '写作大纲', '任务拆解'],
  },
  {
    id: 'pdf-toolbox',
    slug: 'pdf-toolbox',
    name: 'PDF 工具箱',
    tagline: '文档拆分、合并和转换',
    category: 'productivity',
    status: 'building',
    progress: 52,
    month: '2026-08',
    icon: '/app-icons/pdf-toolbox.png',
    website: 'https://pdftoolbox.anxiqing.cn',
    summary: 'PDF编辑与转换。',
    highlights: ['PDF 合并', 'PDF 拆分', '文档处理'],
  },
];

const statusRank: Record<AppStatus, number> = {
  released: 0,
  testing: 1,
  building: 2,
  design: 3,
  idea: 4,
  paused: 5,
};

export function sortAppsByStatus(items: AppProgress[]) {
  return [...items].sort((a, b) => {
    const statusDiff = statusRank[a.status] - statusRank[b.status];
    if (statusDiff !== 0) return statusDiff;

    const progressDiff = b.progress - a.progress;
    if (progressDiff !== 0) return progressDiff;

    return a.name.localeCompare(b.name, 'zh-CN');
  });
}

export const milestones = [
  {
    date: '2026-04-17',
    title: '首个公开版本进入发布节奏',
    summary: '恋恋决定完成公开发布，50 Apps 计划开始用真实应用累计进度。',
  },
  {
    date: '2026-04-20',
    title: '进度站独立成站',
    summary: '用 Astro 建立公开进度、应用列表、时间线和愿望池入口。',
  },
  {
    date: '2026-05',
    title: '第一批图像与轻工具同步',
    summary: '快拼工坊、SlimPic、颜究生、LED 闪字等进入公开展示。',
  },
  {
    date: '2026-06',
    title: '候选池公开收集',
    summary: '开放愿望池，用 Issue 承接外部应用想法和场景建议。',
  },
];

export const wishlistSeeds = [
  '适合一天内完成的小工具',
  '有明确单一场景的生活应用',
  '能用截图或短视频讲清楚价值',
  '不依赖复杂账号体系',
  '不提交隐私数据、密钥或未授权素材',
];

export function getProgressStats() {
  const released = apps.filter((app) => app.status === 'released').length;
  const active = apps.filter((app) =>
    ['building', 'testing', 'design'].includes(app.status),
  ).length;
  const averageProgress = Math.round(
    apps.reduce((sum, app) => sum + app.progress, 0) / apps.length,
  );

  return {
    released,
    active,
    synced: apps.length,
    averageProgress,
  };
}
