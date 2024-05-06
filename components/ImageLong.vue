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
// 'onMounted' hooket bruges til køre en funktion, når komponentet er blev sat ind.
// Funktionen kontrollerer vinduets bredde. Hvis bredden er mindre end 768 pixels, så opdateres 'isMobile' til sand.
onMounted(() => {
  if (window.innerWidth < 768) {
    isMobile.value = true;
  }
});
</script>
