<template>
  <div class="c-image-long">
    <!-- MOBIL -->
    <div v-if="isMobile">
      <div v-if="mobile" class="flex justify-center">
        <img :src="mobile.src" :alt="mobile.alt" class="w-[330px]" />
      </div>
    </div>

    <!-- LAPTOP -->
    <div v-else>
      <div v-if="laptop" class="flex justify-center">
        <img :src="laptop.src" :alt="laptop.alt" class="w-[1100px]" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  laptop: Object,
  mobile: Object,
});

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
