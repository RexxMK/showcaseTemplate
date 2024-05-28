<template>
  <div class="c-scroll-gallery">
    <!-- MOBIL -->
    <div v-if="isMobile">
      <div class="flex flex-col items-center gap-y-[84px]">
        <div v-for="(image, index) in mobileImages" :key="index">
          <img :src="image.src" :alt="image.alt" class="w-[330px]" />
        </div>
      </div>
    </div>

    <!-- LAPTOP -->
    <div v-else class="flex justify-center gap-x-[68px]">
      <div
        ref="leftColumn"
        class="flex flex-col gap-y-[97px] h-full sticky top-0"
      >
        <div v-for="(image, index) in mobileImages" :key="index">
          <img :src="image.src" :alt="image.alt" class="w-[291px]" />
        </div>
      </div>
      <div
        ref="rightColumn"
        class="flex flex-col gap-y-[97px] h-full sticky top-0"
      >
        <div v-for="(image, index) in laptopImages" :key="index">
          <img :src="image.src" :alt="image.alt" class="w-[1019px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mobileImages: Array,
  laptopImages: Array,
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

// Nedenstående kode er del af en bedre og mere glat løsning til scroll i kolonnerne

// const leftColumn = ref(null);
// const rightColumn = ref(null);

// onMounted(() => {
//   if (leftColumn.value && rightColumn.value) {
//     setTimeout(() => {
//       const leftColumnHeight = leftColumn.value.offsetHeight;
//       const rightColumnHeight = rightColumn.value.offsetHeight;

//       console.log("Left column height:", leftColumnHeight);
//       console.log("Right column height:", rightColumnHeight);
//     }, 500);
//   } else {
//     console.error("One or both columns are not found.");
//   }
// });
</script>
