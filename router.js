// router.js (i en Nuxt-app)
import { createRouter, createWebHistory } from "vue-router";
import NotToScale from "@/pages/NotToScale.vue";
import AfterAugust from "@/pages/AfterAugust.vue";

const routes = [
  { path: "/nottoscale", component: NotToScale },
  { path: "/afteraugust", component: AfterAugust },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
