<template>
  <div class="notToScale bg-primary">
    <!-- MOBIL -->
    <div v-if="isMobile" class="flex flex-col gap-y-[165px] pb-[165px]">
      <PageHero v-bind="{ ...page.hero }" :teaserMaxWidth="teaserMaxWidth" />
      <VideoStaggered v-bind="{ ...page.staggeredVideo }" />
      <ScrollGallery v-bind="{ ...page.scrollGallery }" />
      <CardModule v-bind="{ ...page.cardModule }" />
      <ImageGallery v-bind="{ ...page.imageGallery }" :sliceAmount="3" />
      <ImageLong v-bind="{ ...page.longImage }" />
    </div>

    <!-- LAPTOP -->
    <div v-else class="flex flex-col gap-y-[360px] pb-[360px]">
      <PageHero v-bind="{ ...page.hero }" :teaserMaxWidth="teaserMaxWidth" />
      <VideoStaggered v-bind="{ ...page.staggeredVideo }" />
      <ScrollGallery v-bind="{ ...page.scrollGallery }" />
      <CardModule v-bind="{ ...page.cardModule }" />
      <ImageSlider v-bind="{ ...page.imageSlider }" />
      <ImageLong v-bind="{ ...page.longImage }" />
    </div>
  </div>
</template>

<script setup>
import pageData from "/pageData.json";
import VideoStaggered from "../components/VideoStaggered.vue";
import PageHero from "../components/PageHero.vue";
import ScrollGallery from "../components/ScrollGallery.vue";
import CardModule from "../components/CardModule.vue";
import ImageSlider from "../components/ImageSlider.vue";

const page = ref(pageData.notToScale);

const teaserMaxWidth = ref("max-w-23ch");

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

<style></style>
