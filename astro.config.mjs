import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://personal-portfolio-sage-delta-47.vercel.app',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  adapter: vercel(),
});
