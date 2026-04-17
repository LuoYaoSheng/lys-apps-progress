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
  summary: string;
  highlights: string[];
};

export const apps: AppProgress[] = [
  {
    id: 'lianlian-jueding',
    slug: 'lianlian-jueding',
    name: '恋恋决定',
    tagline: '情侣日常决策小游戏',
    category: 'social',
    status: 'released',
    progress: 100,
    month: '2026-04',
    shippedAt: '2026-04-17',
    icon: '/app-icons/couple-love.png',
    summary: '用抽签、转盘、骰子和小游戏处理日常选择，让轻量互动变成稳定的小程序体验。',
    highlights: ['情侣决策', '小游戏合集', '微信小程序', '已进入公开发布节奏'],
  },
  {
    id: 'snapkit',
    slug: 'snapkit',
    name: '快拼工坊',
    tagline: '移动应用界面快速拼接',
    category: 'image',
    status: 'testing',
    progress: 82,
    month: '2026-04',
    icon: '/app-icons/snapkit.png',
    summary: '面向应用截图、商店素材和展示图的快速拼接工具，减少重复排版时间。',
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
    summary: '围绕短文本、学习和日常沟通场景设计的翻译工具，优先保证打开即用。',
    highlights: ['多语言', '短文本', '学习辅助'],
  },
  {
    id: 'slimpic',
    slug: 'slimpic',
    name: 'SlimPic',
    tagline: '图片压缩和体积管理',
    category: 'image',
    status: 'building',
    progress: 58,
    month: '2026-04',
    icon: '/app-icons/slimpic.png',
    summary: '聚焦图片体积控制、批量压缩和上传前处理，服务内容发布与项目素材整理。',
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
    summary: '把常用表情、贴纸和文字梗整理成可快速生产的移动端工具。',
    highlights: ['表情包', '贴纸', '分享素材'],
  },
  {
    id: 'ledflashtext',
    slug: 'ledflashtext',
    name: 'LED 闪字',
    tagline: '手机全屏滚动字幕',
    category: 'utility',
    status: 'testing',
    progress: 76,
    month: '2026-05',
    icon: '/app-icons/ledflashtext.png',
    summary: '用手机屏幕展示醒目的滚动文字，适合现场提醒、应援和临时展示。',
    highlights: ['滚动字幕', '颜色方向速度', '离线使用'],
  },
  {
    id: 'colorpalette',
    slug: 'colorpalette',
    name: '色卡精灵',
    tagline: '配色采集和色卡整理',
    category: 'image',
    status: 'building',
    progress: 64,
    month: '2026-05',
    icon: '/app-icons/colorpalette.png',
    summary: '为设计和内容制作场景准备的取色、色卡保存和配色参考工具。',
    highlights: ['取色', '色卡', '设计辅助'],
  },
  {
    id: 'gridmaker',
    slug: 'gridmaker',
    name: '格作',
    tagline: '九宫格图片分割',
    category: 'image',
    status: 'released',
    progress: 100,
    month: '2026-05',
    icon: '/app-icons/gridmaker.png',
    summary: '把图片快速切成社交平台常见的九宫格和多格布局。',
    highlights: ['九宫格', '社交图片', '快速导出'],
  },
  {
    id: 'watermarkcamera',
    slug: 'watermarkcamera',
    name: '智能水印相机',
    tagline: '现场记录和防篡改水印',
    category: 'life',
    status: 'design',
    progress: 44,
    month: '2026-06',
    icon: '/app-icons/watermarkcamera.png',
    summary: '围绕工作现场、打卡、巡检和记录存证设计的水印拍照工具。',
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
    summary: '处理长截图、拼接、裁切和标注，让移动端内容整理更顺手。',
    highlights: ['长截图', '裁切', '标注'],
  },
  {
    id: 'beaker',
    slug: 'beaker',
    name: '烧杯',
    tagline: '掌上化学实验室',
    category: 'education',
    status: 'design',
    progress: 35,
    month: '2026-06',
    icon: '/app-icons/beaker.png',
    summary: '用安全的交互方式模拟基础化学实验，面向学习和科普场景。',
    highlights: ['化学启蒙', '安全模拟', '互动实验'],
  },
  {
    id: 'cadviewer',
    slug: 'cadviewer',
    name: 'CAD 看图',
    tagline: '移动端轻量图纸查看',
    category: 'utility',
    status: 'idea',
    progress: 16,
    month: '2026-07',
    icon: '/app-icons/cadviewer.png',
    summary: '为临时查看图纸和现场沟通准备的轻量 CAD 查看工具。',
    highlights: ['图纸查看', '现场沟通', '轻量工具'],
  },
  {
    id: 'notes',
    slug: 'notes',
    name: '笔记应用',
    tagline: '快速记录和灵感收纳',
    category: 'productivity',
    status: 'idea',
    progress: 12,
    month: '2026-07',
    icon: '/app-icons/notes.png',
    summary: '从最小记录体验出发，优先处理打开、输入、查找和导出。',
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
    summary: '面向想法拆解、写作大纲和任务结构化的轻量思维导图工具。',
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
    summary: '覆盖日常 PDF 拆分、合并、导出和格式处理。',
    highlights: ['PDF 合并', 'PDF 拆分', '文档处理'],
  },
];

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
  const active = apps.filter((app) => ['building', 'testing', 'design'].includes(app.status)).length;
  const averageProgress = Math.round(apps.reduce((sum, app) => sum + app.progress, 0) / apps.length);

  return {
    released,
    active,
    synced: apps.length,
    averageProgress,
  };
}
