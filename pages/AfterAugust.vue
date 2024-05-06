<template>
  <div>
    <!-- MOBIL -->
    <div v-if="isMobile" class="flex flex-col gap-y-[165px]">
      <PageHero v-bind="{ ...page.hero }" />
      <VideoBorder v-bind="{ ...page.borderVideo.intro }" />
      <ImageSlider v-bind="{ ...page.imageSlider }" />
      <ScrollGallery v-bind="{ ...page.scrollGallery }" />
      <VideoBorder v-bind="{ ...page.borderVideo.story }" />
      <ImageGallery v-bind="{ ...page.imageGallery }" :sliceAmount="2" />
      <VideoBorder v-bind="{ ...page.borderVideo.outro }" />
    </div>

    <!-- LAPTOP -->
    <div v-else class="flex flex-col gap-y-[360px]">
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
import VideoStaggered from "../components/VideoStaggered.vue";
import PageHero from "../components/PageHero.vue";
import ScrollGallery from "../components/ScrollGallery.vue";
import VideoBorder from "../components/VideoBorder.vue";

const page = ref(pageData.afterAugust);

const props = defineProps({
  theme: Object,
  title: String,
  content: String,
});

// 'ref' bruges til at lave en reaktiv variabel 'isMobile', der som udgangspunkt er falsk.
const isMobile = ref(false);
// 'onMounted' hooket bruges til køre en funktion, når komponentet er blev sat ind.
// Funktionen kontrollerer vinduets bredde. Hvis bredden er mindre end 768 pixels, så opdateres 'isMobile' til sand.
onMounted(() => {
  if (window.innerWidth < 768) {
    isMobile.value = true;
  }
});
</script>
