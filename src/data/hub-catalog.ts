import hubDatabase from './hub-apps-database.json';
import {
  apps,
  getProjectKey,
  type AppCategory,
  type AppDelivery,
  type AppProgress,
  type AppStatus,
} from './apps';
import { categoryLabels } from './site';

export type CatalogEntry = {
  id: string;
  projectKey: string;
  name: string;
  description: string;
  category: AppCategory;
  categoryLabel: string;
  slug: string;
  domain?: string;
  icon?: string;
  status: AppStatus;
  progress: number;
  delivery: AppDelivery;
  hasDetail: boolean;
  detailSlug?: string;
};

type DbApp = {
  id: string;
  name: string;
  slug: string;
  domain?: string;
  description: string;
};

const iconOverrides: Record<string, string> = {
  'install-b': '/app-icons/snapkit.png',
  'image-compress': '/app-icons/slimpic.png',
  'grid-maker': '/app-icons/gridmaker.png',
  'color-palette': '/app-icons/colorpalette.png',
  'led-barrage': '/app-icons/ledflashtext.png',
  'notes-app': '/app-icons/notes.png',
  longshot: '/app-icons/longshot.png',
  'watermark-camera': '/app-icons/watermarkcamera.png',
  beaker: '/app-icons/beaker.png',
  'cad-viewer': '/app-icons/cadviewer.png',
  mindflow: '/app-icons/mindflow.png',
  'pdf-toolbox': '/app-icons/pdf-toolbox.png',
  'emoji-maker': '/app-icons/emoji-maker.png',
  translator: '/app-icons/translator.png',
  'lianlian-jueding': '/app-icons/couple-love.png',
  'smart-ble': '/app-icons/smart-ble.png',
  'open-iot-platform': '/app-icons/open-iot-platform.png',
  'batch-image-studio': '/app-icons/batch-image-studio.png',
  'icon-gen': '/app-icons/icon-gen.jpg',
  'codex-switch': '/app-icons/codex-switch.png',
  redispilot: '/app-icons/redispilot.png',
  querylab: '/app-icons/querylab.png',
  termforge: '/app-icons/termforge.png',
};

const extraHubApps: Array<DbApp & { category: AppCategory }> = [
  {
    id: 'baby-diary',
    name: '宝宝点滴',
    slug: 'baby-diary',
    domain: 'babydiary.anxiqing.cn',
    description: '婴幼儿喂养作息记录，家庭协作与提醒',
    category: 'lifestyle',
  },
  {
    id: 'cute-meow-circle',
    name: '萌宠圈',
    slug: 'cute-meow-circle',
    domain: 'cutemeowcircle.anxiqing.cn',
    description: '萌宠内容、问候图/表情包创作与 AI 风格化',
    category: 'lifestyle',
  },
];

function resolveIcon(id: string, slug: string, tracked?: AppProgress): string | undefined {
  if (tracked?.icon) return tracked.icon;
  if (iconOverrides[id]) return iconOverrides[id];
  return `/app-icons/${slug}.png`;
}

function flattenDatabase(): Array<DbApp & { category: AppCategory }> {
  const rows: Array<DbApp & { category: AppCategory }> = [];
  for (const [category, group] of Object.entries(hubDatabase.categories)) {
    for (const app of group.apps as DbApp[]) {
      rows.push({ ...app, category: category as AppCategory });
    }
  }
  return rows;
}

const progressById = new Map(apps.map((app) => [app.id, app]));

function toCatalogEntry(
  row: DbApp & { category: AppCategory },
  tracked?: AppProgress,
): CatalogEntry {
  const status = tracked?.status ?? 'idea';
  const progress = tracked?.progress ?? 0;
  const delivery = tracked?.delivery ?? (row.id === 'lianlian-jueding' ? 'miniProgram' : 'app');

  return {
    id: row.id,
    projectKey: row.id,
    name: tracked?.name ?? row.name,
    description: tracked?.summary ?? row.description,
    category: tracked?.category ?? row.category,
    categoryLabel: categoryLabels[tracked?.category ?? row.category],
    slug: row.slug,
    domain: row.domain,
    icon: resolveIcon(row.id, row.slug, tracked),
    status,
    progress,
    delivery,
    hasDetail: Boolean(tracked),
    detailSlug: tracked?.slug,
  };
}

function buildCatalog(): CatalogEntry[] {
  const map = new Map<string, CatalogEntry>();

  for (const row of flattenDatabase()) {
    const tracked = progressById.get(row.id);
    map.set(row.id, toCatalogEntry(row, tracked));
  }

  for (const row of extraHubApps) {
    if (!map.has(row.id)) {
      const tracked = progressById.get(row.id);
      map.set(row.id, toCatalogEntry(row, tracked));
    }
  }

  for (const tracked of apps) {
    const key = getProjectKey(tracked);
    if (map.has(tracked.id) || map.has(key)) continue;
    map.set(tracked.id, {
      id: tracked.id,
      projectKey: key,
      name: tracked.name,
      description: tracked.summary,
      category: tracked.category,
      categoryLabel: categoryLabels[tracked.category],
      slug: tracked.slug,
      domain: tracked.website?.replace('https://', ''),
      icon: tracked.icon,
      status: tracked.status,
      progress: tracked.progress,
      delivery: tracked.delivery,
      hasDetail: true,
      detailSlug: tracked.slug,
    });
  }

  return sortCatalogForPlanning([...map.values()]);
}

const planningRank: Record<AppStatus, number> = {
  testing: 0,
  building: 1,
  design: 2,
  idea: 3,
  paused: 4,
  released: 5,
};

function sortCatalogForPlanning(items: CatalogEntry[]) {
  return [...items].sort((a, b) => {
    const statusDiff = planningRank[a.status] - planningRank[b.status];
    if (statusDiff !== 0) return statusDiff;
    if (a.status === 'released') return a.name.localeCompare(b.name, 'zh-CN');
    const progressDiff = b.progress - a.progress;
    if (progressDiff !== 0) return progressDiff;
    return a.name.localeCompare(b.name, 'zh-CN');
  });
}

export const catalog = buildCatalog();

export function getCatalogStats() {
  const total = catalog.length;
  const tracked = catalog.filter((item) => item.hasDetail).length;
  const released = catalog.filter((item) => item.status === 'released').length;
  const active = catalog.filter((item) =>
    ['testing', 'building', 'design'].includes(item.status),
  ).length;
  const nextUp = catalog
    .filter((item) => ['testing', 'building', 'design'].includes(item.status))
    .slice(0, 5);

  return { total, tracked, released, active, nextUp };
}
