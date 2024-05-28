// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/ShowcaseTemplate/",
  },
  devtools: { enabled: true },
  modules: ["@unocss/nuxt"],
  css: ["~/assets/css/main.css"],
});
