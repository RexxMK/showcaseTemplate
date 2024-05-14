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

    <!-- {{ page }} -->
  </div>
</template>

<script setup>
import { themes } from "@/assets/js/themes.js";
import pageData from "/pageData.json";
import PageHero from "../components/PageHero.vue";
import ScrollGallery from "../components/ScrollGallery.vue";
import VideoBorder from "../components/VideoBorder.vue";

const page = ref(pageData.afterAugust);

const teaserMaxWidth = ref("max-w-27ch");

// Koden i linje 44-53 indeholder den funktion der skal bruges i løsningen generelt.
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
