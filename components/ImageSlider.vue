<template>
  <div class="c-image-slider">
    <!-- Top row slider -->
    <div
      class="flex gap-x-[64px] pt-[45px] pb-[50px]"
      :style="{ transform: `translateX(${topRowTranslate}px)` }"
    >
      <div v-for="(image, index) in topRowImages" :key="index">
        <img :src="image.src" :alt="image.alt" class="w-[855px]" />
      </div>
    </div>

    <!-- Bottom row slider -->
    <div
      class="flex gap-x-[64px] pt-[45px] pb-[50px]"
      :style="{ transform: `translateX(${bottomRowTranslate}px)` }"
    >
      <div v-for="(image, index) in bottomRowImages" :key="index">
        <img :src="image.src" :alt="image.alt" class="w-[855px]" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
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

const topRowTranslate = ref(0);
const bottomRowTranslate = ref(0);

// Initialize bottomRowTranslate to start from the back of the bottomRowImages array
onMounted(() => {
  // Calculate the total width of the images in the bottom row
  const totalWidth = props.bottomRowImages.length * 855; // Assuming each image width is 855px

  // Set bottomRowTranslate to position the last image at the start of the viewport
  bottomRowTranslate.value = -totalWidth + window.innerWidth;
});

let lastScrollPosition = 0;

const handleScroll = () => {
  const currentScrollPosition =
    window.scrollY || document.documentElement.scrollTop;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    topRowTranslate.value -= 4;
    bottomRowTranslate.value += 4;
  } else {
    // Scrolling up
    topRowTranslate.value += 4;
    bottomRowTranslate.value -= 4;
  }

  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Clean up event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
