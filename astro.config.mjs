// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Replace with your final domain
  site: 'https://altobellidardo.dev',

  compressHTML: true,

  build: {
    inlineStylesheets: 'always'
  },

  integrations: [sitemap()]
});