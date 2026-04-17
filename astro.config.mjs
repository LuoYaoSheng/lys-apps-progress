import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://apps.open.i2kai.com',
  output: 'static',
  integrations: [sitemap()],
});
