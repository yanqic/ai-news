import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://ai-news-dbd.pages.dev',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
    mdx()
  ],
  adapter: cloudflare({
    platform: {
      type: 'pages'
    }
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
