<template>
  <div class="c-image-gallery">
    <div>
      <!-- MOBIL -->
      <div v-if="isMobile" class="flex justify-center">
        <div class="grid gap-[49px]">
          <div
            v-for="(image, index) in mobileImages.slice(0, sliceAmount)"
            :key="index"
          >
            <img :src="image.src" :alt="image.alt" class="w-[330px]" />
          </div>
        </div>
      </div>

      <!-- LAPTOP -->
      <div v-else class="flex justify-center">
        <div class="grid grid-cols-3 gap-[68px]">
          <div
            v-for="(image, index) in laptopImages.slice(0, sliceAmount)"
            :key="index"
          >
            <img :src="image.src" :alt="image.alt" class="w-[430px]" />
          </div>
        </div>
      </div>
    </div>

    <!-- KNAP -->
    <div class="flex justify-center pt-[58px]">
      <button
        v-if="cta"
        class="caption-lg w-[213px] h[48px] rounded-50 cursor-pointer bg-detail text-detail-text"
        @click="toggleImages"
      >
        {{ buttonLabel }}
      </button>
    </div>
  </div>
</template>

<script setup>
// Selvom jeg bruger de samme billeder til galleriet på både mobil og laptop i After August casen,
// vælger jeg at definere både mobileImages og laptopImages, da man så har muligheden for at bruge forskellige billeder på mobil og laptop.
const props = defineProps({
  mobileImages: Array,
  laptopImages: Array,
  cta: Object,
  sliceAmount: {
    type: Number,
    default: 3,
  },
});

const sliceAmount = ref(props.sliceAmount);

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

const isAllImagesVisible = ref(false);

// Funktionen ændrer antallet af viste billeder, og skifter mellem at vise alle billeder eller kun et begrænset antal billeder, når der trykkes på knappen.
const toggleImages = () => {
  if (isAllImagesVisible.value) {
    sliceAmount.value = props.sliceAmount;
  } else {
    sliceAmount.value = isMobile.value
      ? props.mobileImages.length
      : props.laptopImages.length;
  }
  isAllImagesVisible.value = !isAllImagesVisible.value;
};

// Det resterende antal billeder og det viste antal billeder beregnes afhængigt af skærmstørrelsen og det aktuelle antal viste billeder ('sliceAmount').
// 'Math.max(0, ...)' bruges til at sikre, at værdien der returneres altid er mindst 0.
// Det forhindrer også negative værdier, hvis 'sliceAmount' er større end antallet af billeder.
const remainingAmount = computed(() => {
  if (isMobile.value) {
    return Math.max(0, props.mobileImages.length - sliceAmount.value);
  } else {
    return Math.max(0, props.laptopImages.length - sliceAmount.value);
  }
});

const shownAmount = computed(() => {
  if (isMobile.value) {
    return Math.max(0, props.mobileImages.length - props.sliceAmount);
  } else {
    return Math.max(0, props.laptopImages.length - props.sliceAmount);
  }
});

// Jeg laver et label til knappen baseret på om alle billeder er synlige eller ej, samt hvor mange billeder der er tilbage eller vist.
const buttonLabel = computed(() => {
  return isAllImagesVisible.value
    ? props.cta.isActive + " " + shownAmount.value
    : props.cta.name + " " + remainingAmount.value;
});
</script>
