<template>
  <div class="c-page-hero text-secondary">
    <div class="c-page-hero_award flex flex-col items-center mt-[30px]">
      <img
        v-if="award.image"
        :src="award.image.src"
        :alt="award.image.alt"
        class="w-[100px] shadow-none"
      />

      <div v-if="award.name" class="max-w-22ch text-center pt-[23px]">
        {{ award.name }}
      </div>
    </div>
    <div class="c-page-hero_content flex flex-col items-center">
      <!-- MOBIL -->
      <div v-if="isMobile" class="flex flex-col items-center pt-[99px]">
        <div v-if="title" class="header-sm">{{ title }}</div>
        <div class="flex justify-center">
          <div
            v-if="teaser"
            class="body-sm text-center pt-[36px] pb-[105px]"
            :class="teaserMaxWidth"
          >
            {{ teaser }}
          </div>
        </div>
      </div>

      <!-- LAPTOP -->
      <div v-else class="pt-[206px]">
        <div v-if="title" class="header-lg">{{ title }}</div>
        <div class="flex justify-center">
          <div
            v-if="teaser"
            class="body-lg text-center pt-[18px] pb-[62px]"
            :class="teaserMaxWidth"
          >
            {{ teaser }}
          </div>
        </div>
      </div>

      <!-- KNAP -->
      <button
        v-if="cta"
        class="w-[213px] h-[48px] rounded-50 uppercase text-[16px] cursor-pointer bg-detail text-detail-text"
        @click="openUrlInNewTab"
      >
        {{ cta.name }}
        <span>
          <svg
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[11.5px] absolute ml-[14px]"
          >
            <path
              d="M0.166504 12.3337V0.666992H5.74248V1.6964H1.19592V11.3042H10.8038V6.75768H11.8332V12.3337H0.166504ZM4.43856 8.78219L3.71797 8.0616L10.0832 1.6964H7.37239V0.666992H11.8332V5.12778H10.8038V2.41699L4.43856 8.78219Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  teaser: String,
  award: Object,
  cta: Object,
  teaserMaxWidth: {
    type: String,
    default: "max-w-45ch", // Standard max-width
  },
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

const url = ref(props.cta.url);

const openUrlInNewTab = () => {
  const url = typeof props.cta === "object" ? props.cta.url : null; // Man får kun URL'en, hvis cta er et objekt
  if (url) {
    window.open(url, "_blank"); // Åbner URL'en i en ny fane
  }
};
</script>
