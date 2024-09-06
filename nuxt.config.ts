// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/seo', "@nuxtjs/i18n"],
  devtools: { enabled: true },
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
    excludeAppSources: true,
    sources: ['/api/seo/sitemap'],
  },

  i18n: {
    lazy: true,
    langDir: "lang",
    locales: [
      {
        code: "cn",
        iso: "cn",
        name: "Chinese",
        file: "cn.ts",
      },
      {
        name: "English",
        iso: "en",
        code: "en",
        file: "en.ts",
      },
    ],
    strategy: "prefix",
    defaultLocale: "cn",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },

  routeRules: {
    "/": { redirect: "/cn" },
  },

  compatibilityDate: '2024-09-03',
});
