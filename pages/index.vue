<template>
  <div class="overview bg-primary min-h-screen">
    <!-- MOBIL -->
    <div v-if="isMobile">
      <IndexOverview v-bind="{ ...page.overview }" />
    </div>

    <!-- LAPTOP -->
    <div v-else>
      <IndexOverview v-bind="{ ...page.overview }" />
    </div>
  </div>
</template>

<script setup>
import IndexOverview from "../components/IndexOverview.vue";
import pageData from "/pageData.json";

const page = ref(pageData.index);

// 'ref' bruges til at lave en reaktiv variabel 'isMobile', der som udgangspunkt er falsk.
const isMobile = ref(false);

// Funktionen updateIsMobile ser på bredden (clientWidth) af den synlige del af HTML-dokumentet.
// Hvis bredden er under 768 pixels, betragtes det som en mobilskærm, og 'isMobile' opdateres til sand.
const updateIsMobile = () => {
  isMobile.value = document.documentElement.clientWidth < 768;
};

onMounted(() => {
  updateIsMobile(); // Opdaterer ved start, baseret på vinduets bredde
  window.addEventListener("resize", updateIsMobile); // Lytter efter vinduesændringer
});
</script>

<style scoped>
img {
  width: 330px;
}
</style>
