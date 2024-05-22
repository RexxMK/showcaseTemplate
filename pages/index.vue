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

const isMobile = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
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
