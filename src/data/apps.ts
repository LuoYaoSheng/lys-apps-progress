import { categoryLabels, deliveryLabels, statusMeta } from './site';

export type AppStatus = keyof typeof statusMeta;
export type AppCategory = keyof typeof categoryLabels;
export type AppDelivery = keyof typeof deliveryLabels;

export type AppProgress = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  delivery: AppDelivery;
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
    delivery: 'miniProgram',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
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
    delivery: 'app',
    category: 'productivity',
    status: 'building',
    progress: 52,
    month: '2026-08',
    icon: '/app-icons/pdf-toolbox.png',
    website: 'https://pdftoolbox.anxiqing.cn',
    summary: 'PDF编辑与转换。',
    highlights: ['PDF 合并', 'PDF 拆分', '文档处理'],
  },
  {
    id: 'smart-ble',
    slug: 'smart-ble',
    name: 'Smart BLE',
    tagline: '跨平台 BLE 调试工具与实践样板',
    delivery: 'openSource',
    category: 'iot',
    status: 'released',
    progress: 100,
    month: '2026-04',
    icon: '/app-icons/smart-ble.png',
    website: 'https://lightble.i2kai.com',
    summary: '围绕 BLE 调试、学习和多平台实现展开的开源产品家族。',
    highlights: ['BLE 调试', '微信小程序', 'Flutter', '桌面端', '开源项目'],
  },
  {
    id: 'open-iot-platform',
    slug: 'open-iot-platform',
    name: 'Open IoT Platform',
    tagline: '端到端 IoT 设备管理平台',
    delivery: 'openSource',
    category: 'iot',
    status: 'building',
    progress: 78,
    month: '2026-04',
    icon: '/app-icons/open-iot-platform.png',
    website: 'https://iot.open.i2kai.com',
    summary: '覆盖设备接入、BLE 配网、MQTT 通信、移动端和 ESP32 固件的开源 IoT 平台。',
    highlights: ['Go 服务端', 'Flutter App', 'MQTT', 'ESP32', '开源项目'],
  },
  {
    id: 'redispilot',
    slug: 'redispilot',
    name: 'RedisPilot',
    tagline: '本地优先 Redis 桌面管理工具',
    delivery: 'openSource',
    category: 'database',
    status: 'building',
    progress: 72,
    month: '2026-04',
    icon: '/app-icons/redispilot.png',
    website: 'https://redis.open.i2kai.com',
    summary: '轻量、安全、跨平台的 Redis 桌面管理工具。',
    highlights: ['Redis', 'Tauri', 'Svelte', 'Rust', '开源项目'],
  },
  {
    id: 'querylab',
    slug: 'querylab',
    name: 'QueryLab',
    tagline: '本地优先数据库客户端',
    delivery: 'openSource',
    category: 'database',
    status: 'building',
    progress: 62,
    month: '2026-04',
    icon: '/app-icons/querylab.png',
    website: 'https://query.open.i2kai.com',
    summary: '聚焦 MySQL / MariaDB 的数据库客户端工作台。',
    highlights: ['MySQL', 'Tauri', 'Svelte', 'SQL 编辑', '开源项目'],
  },
  {
    id: 'termforge',
    slug: 'termforge',
    name: 'TermForge',
    tagline: 'SSH / SFTP / Runbook 运维工作台',
    delivery: 'openSource',
    category: 'ops',
    status: 'building',
    progress: 58,
    month: '2026-04',
    icon: '/app-icons/termforge.png',
    website: 'https://term.open.i2kai.com',
    summary: '面向开发者和运维场景的跨平台桌面工作台。',
    highlights: ['SSH', 'SFTP', 'Runbook', 'Tauri', '开源项目'],
  },
  {
    id: 'batch-image-studio',
    slug: 'batch-image-studio',
    name: 'Batch Image Studio',
    tagline: '模板驱动的批量图片处理工具',
    delivery: 'openSource',
    category: 'image',
    status: 'released',
    progress: 100,
    month: '2026-04',
    icon: '/app-icons/batch-image-studio.png',
    website: 'https://batch.open.i2kai.com',
    summary: '用于项目素材和发布图生产的本地优先图片处理工具。',
    highlights: ['图片处理', 'AI 修复', 'Tauri', '下载发布', '开源项目'],
  },
  {
    id: 'icon-gen',
    slug: 'icon-gen',
    name: 'Icon Gen',
    tagline: '多平台图标生成工具',
    delivery: 'openSource',
    category: 'tools',
    status: 'released',
    progress: 100,
    month: '2026-04',
    icon: '/app-icons/icon-gen.jpg',
    website: 'https://icon.open.i2kai.com',
    summary: '快速生成 iOS、Android、macOS、Windows 和 watchOS 所需的图标资源。',
    highlights: ['图标生成', 'Web 工具', 'Electron', '开源项目'],
  },
  {
    id: 'papermd',
    slug: 'papermd',
    name: 'PaperMD',
    tagline: '原生 macOS Markdown 编辑器',
    delivery: 'openSource',
    category: 'writing',
    status: 'building',
    progress: 64,
    month: '2026-04',
    website: 'https://paper.open.i2kai.com',
    summary: '专注长文写作、技术文档和极致输入体验的原生 macOS Markdown 编辑器。',
    highlights: ['Markdown', 'macOS', 'AppKit', '写作工具', '开源项目'],
  },
  {
    id: 'codex-switch',
    slug: 'codex-switch',
    name: 'CodexSwitch',
    tagline: 'AI 客户端配置切换工具',
    delivery: 'openSource',
    category: 'ai',
    status: 'paused',
    progress: 45,
    month: '2026-04',
    icon: '/app-icons/codex-switch.png',
    website: 'https://codex.open.i2kai.com',
    summary: '本地优先的 AI 客户端配置切换与诊断工具，当前公开保留但暂停维护。',
    highlights: ['AI 协作', '配置切换', '本地优先', '暂停维护', '开源项目'],
  },
  {
    id: 'apps-progress',
    slug: 'apps-progress',
    name: '50 Builds Progress',
    tagline: '年度公开交付进度站',
    delivery: 'openSource',
    category: 'site',
    status: 'released',
    progress: 100,
    month: '2026-04',
    icon: '/favicon.svg',
    website: 'https://apps.open.i2kai.com',
    summary: '同步小程序、APP 和开源项目的年度公开交付进度。',
    highlights: ['年度进度', '公开站点', 'Astro', '开源项目'],
  },
];

const deliveryRank: Record<AppDelivery, number> = {
  miniProgram: 0,
  app: 1,
  openSource: 2,
};

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

    const deliveryDiff = deliveryRank[a.delivery] - deliveryRank[b.delivery];
    if (deliveryDiff !== 0) return deliveryDiff;

    const progressDiff = b.progress - a.progress;
    if (progressDiff !== 0) return progressDiff;

    return a.name.localeCompare(b.name, 'zh-CN');
  });
}

export const milestones = [
  {
    date: '2026-04-17',
    title: '首个公开版本进入发布节奏',
    summary: '恋恋决定完成公开发布，50 Builds 计划开始用真实交付累计进度。',
  },
  {
    date: '2026-04-20',
    title: '进度站独立成站',
    summary: '用 Astro 建立公开进度、交付列表、时间线和愿望池入口。',
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
  '有明确单一场景的小应用',
  '能用截图或短视频讲清楚价值',
  '不依赖复杂账号体系',
  '不提交隐私数据、密钥或未授权素材',
];

export function getProgressStats() {
  const released = apps.filter((app) => app.status === 'released').length;
  const active = apps.filter((app) =>
    ['building', 'testing', 'design'].includes(app.status),
  ).length;
  const miniPrograms = apps.filter((app) => app.delivery === 'miniProgram').length;
  const appCount = apps.filter((app) => app.delivery === 'app').length;
  const openSource = apps.filter((app) => app.delivery === 'openSource').length;
  const averageProgress = Math.round(
    apps.reduce((sum, app) => sum + app.progress, 0) / apps.length,
  );

  return {
    released,
    active,
    miniPrograms,
    appCount,
    openSource,
    synced: apps.length,
    averageProgress,
  };
}
