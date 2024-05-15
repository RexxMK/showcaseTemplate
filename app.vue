<!-- App.vue -->
<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

// // Definer temaer for hver side
// const currentTheme = computed(() => {
//   if (route.path === "/nottoscale") {
//     return themes.notToScale;
//   } else if (route.path === "/afteraugust") {
//     return themes.afterAugust;
//   }
//   // Tilføj flere betingelser for andre sider efter behov
// });
</script>
<style></style>
