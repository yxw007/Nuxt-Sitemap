// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', 'sitemap.xml'],
      ignore: ['/tak', '/konfiguration', '/checkout'],
    },
  },

  site: {
    url: 'http://nuxtseo.com',
  },

  sitemap: {
    sources: ['/api/sitemap'],
  },

  compatibilityDate: '2024-09-03',
});