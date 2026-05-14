import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.premori.net',
  trailingSlash: 'ignore',
  redirects: {
    '/': '/ko',
  },
});
