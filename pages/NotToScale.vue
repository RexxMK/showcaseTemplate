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

// Koden i linje 41-50 indeholder den funktion der skal bruges i løsningen generelt.
// Jeg har valgt at bruge en anden funktion til at aflæse viewportstørrelsen af siden i forbindelse med hovedopgaven
// På den måde sker skiftet til mobilvisningen automatisk uden der er behov for reload af siden

// 'ref' bruges til at lave en reaktiv variabel 'isMobile', der som udgangspunkt er falsk.
// const isMobile = ref(false);

// 'onMounted' hooket bruges til køre en funktion, når komponentet er blev sat ind.
// Funktionen kontrollerer vinduets bredde. Hvis bredden er mindre end 768 pixels, så opdateres 'isMobile' til sand.
// onMounted(() => {
//   if (window.innerWidth < 768) {
//     isMobile.value = true;
//   }
// });

const isMobile = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  updateIsMobile(); // Opdaterer ved start, baseret på vinduets bredde
  window.addEventListener("resize", updateIsMobile); // Lytter efter vinduesændringer
});
</script>

<style></style>
