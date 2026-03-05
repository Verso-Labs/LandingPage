// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://get-verso.ai',
  integrations: [tailwindcss()],
});
