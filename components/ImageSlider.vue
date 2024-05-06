<template>
  <div class="c-image-slider">
    <!-- Top row slider -->
    <div
      class="overflow-x-auto max-w-full flex gap-x-[64px] pt-[45px] pb-[50px]"
    >
      <div v-for="(image, index) in topRowImages" :key="index">
        <img :src="image.src" :alt="image.alt" class="w-[655px]" />
      </div>
    </div>

    <!-- Bottom row slider -->
    <div
      class="overflow-x-auto max-w-full flex gap-x-[64px] pt-[45px] pb-[50px]"
    >
      <div v-for="(image, index) in bottomRowImages" :key="index">
        <img :src="image.src" :alt="image.alt" class="w-[655px]" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  topRowImages: Array,
  bottomRowImages: Array,
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
