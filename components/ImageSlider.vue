<template>
  <div class="c-image-slider">
    <!-- MOBIL -->
    <div v-if="isMobile" class="relative">
      <div class="flex gap-x-[16px] overflow-auto h-auto sliderShadow">
        <template v-for="(image, index) in mobileImages" :key="index">
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-[330px] sliderShadow"
          />
        </template>
      </div>
    </div>

    <!-- LAPTOP -->
    <div v-else class="flex flex-col gap-y-[97px]">
      <!-- Top row slider -->
      <div
        class="flex gap-x-[68px]"
        :style="{ transform: `translateX(${topRowTranslate}px)` }"
      >
        <template
          v-for="(image, index) in infiniteTopRowImages"
          :key="index"
          class="sliderShadow h-[385px]"
        >
          <img :src="image.src" :alt="image.alt" class="w-[650px]" />
        </template>
      </div>

      <!-- Bottom row slider -->
      <div
        class="flex gap-x-[68px]"
        :style="{ transform: `translateX(${bottomRowTranslate}px)` }"
      >
        <template
          v-for="(image, index) in infiniteBottomRowImages"
          :key="index"
          class="sliderShadow h-[383px]"
        >
          <img :src="image.src" :alt="image.alt" class="w-[650px]" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  topRowImages: Array,
  bottomRowImages: Array,
  mobileImages: Array,
  caption: String,
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

// Styrer billedernes position i slideren
const topRowTranslate = ref(0);
const bottomRowTranslate = ref(0);

// Funktionen placerer det sidste billede i bottomRowImages arrayet ved starten af viewport
onMounted(() => {
  // Den samlede bredde af alle billeder i den nederste slider beregnes ved at gange antallet af billeder med bredden af hvert billede.
  const totalWidth = props.bottomRowImages.length * 650;

  // Ved at trække 'totalWidth' fra og derefter tilføje halvdelen af viewport bredden, placeres det sidste billede i slideren ved starten af viewport.
  bottomRowTranslate.value = -totalWidth + window.innerWidth / 2;
});

let lastScrollPosition = 0;

// Funktionen registrerer den aktuelle scroll position og sammenligner den med den foregående scroll position.
// Når man scroller op eller ned på siden opdaterer funktionen positionen for billederne i slideren med en offset på 4px.
// Resultatet af dette er en glidende effekt for billederne i slideren, når man scroller på siden.
const handleScroll = () => {
  const currentScrollPosition =
    window.scrollY || document.documentElement.scrollTop;

  if (currentScrollPosition > lastScrollPosition) {
    // Scroller ned
    topRowTranslate.value -= 4;
    bottomRowTranslate.value += 4;
  } else {
    // Scroller op
    topRowTranslate.value += 4;
    bottomRowTranslate.value -= 4;
  }

  lastScrollPosition = currentScrollPosition;
};

// Denne funktion tager et billedearray som input og genererer et nyt array, hvor billederne gentages for at skabe en uendelig scrolleffekt.
const getInfiniteImages = (images) => {
  // Funktionen tjekker, om det billedearray, der sendes til funktionen er tomt.
  // Hvis det er tomt returneres et tomt array
  if (!images || images.length === 0) return [];

  // Antallet af gentagelser beregnes ud fra vinduets bredde og bredden af billederne.
  // 'Math.ceil' sikrer at der altid tages højde for mindst en fuld gentagelse af billederne, selvom der kun er plads til en del af billedet.
  const repeatCount = Math.ceil(window.innerWidth / 650) + 1;

  // Der oprettes et nyt array af længden 'repeatCount', hvor hvert element i det nye array er en kopi af 'images'.
  return Array.from({ length: repeatCount }, () => images).flat();
};

const infiniteTopRowImages = computed(() =>
  getInfiniteImages(props.topRowImages)
);

const infiniteBottomRowImages = computed(() =>
  getInfiniteImages(props.bottomRowImages)
);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
