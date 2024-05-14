<!-- App.vue -->
<template>
  <div>
    <NuxtPage :theme="currentTheme" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { themes } from "./assets/js/themes";

const route = useRoute();

// Definer temaer for hver side
const currentTheme = computed(() => {
  if (route.path === "/nottoscale") {
    return themes.notToScale;
  } else if (route.path === "/afteraugust") {
    return themes.afterAugust;
  }
  // Tilføj flere betingelser for andre sider efter behov
});
</script>
<style></style>
