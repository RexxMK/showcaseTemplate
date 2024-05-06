// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt"],
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push(
  //       {
  //         name: "NotToScale",
  //         path: "/nottoscale",
  //         component: resolve(__dirname, "pages/NotToScale.vue"),
  //       },
  //       {
  //         name: "AfterAugust",
  //         path: "/afteraugust",
  //         component: resolve(__dirname, "pages/AfterAugust.vue"),
  //       }
  //     );
  //   },
  // },
});
