<template>
  <div class="afterAugust bg-primary">
    <!-- MOBIL -->
    <div v-if="isMobile" class="flex flex-col gap-y-[165px] pb-[165px]">
      <PageHero v-bind="{ ...page.hero }" :teaserMaxWidth="teaserMaxWidth" />
      <VideoBorder v-bind="{ ...page.borderVideo.intro }" />
      <ImageSlider v-bind="{ ...page.imageSlider }" />
      <ScrollGallery v-bind="{ ...page.scrollGallery }" />
      <VideoBorder v-bind="{ ...page.borderVideo.story }" />
      <ImageGallery v-bind="{ ...page.imageGallery }" :sliceAmount="2" />
      <VideoBorder v-bind="{ ...page.borderVideo.outro }" />
    </div>

    <!-- LAPTOP -->
    <div v-else class="flex flex-col gap-y-[360px] pb-[360px]">
      <PageHero v-bind="{ ...page.hero }" />
      <VideoBorder v-bind="{ ...page.borderVideo.intro }" />
      <ImageSlider v-bind="{ ...page.imageSlider }" />
      <ScrollGallery v-bind="{ ...page.scrollGallery }" />
      <VideoBorder v-bind="{ ...page.borderVideo.story }" />
      <ImageGallery v-bind="{ ...page.imageGallery }" :sliceAmount="3" />
      <VideoBorder v-bind="{ ...page.borderVideo.outro }" />
    </div>
  </div>
</template>

<script setup>
import pageData from "/pageData.json";
import PageHero from "../components/PageHero.vue";
import ScrollGallery from "../components/ScrollGallery.vue";
import VideoBorder from "../components/VideoBorder.vue";

const page = ref(pageData.afterAugust);

const teaserMaxWidth = ref("max-w-27ch");

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
