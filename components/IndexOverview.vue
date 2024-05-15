<template>
  <div class="flex flex-col items-center">
    <div
      v-if="title"
      class="capitalize header-lg text-secondary text-[110px] mt-[50px]"
    >
      {{ title }}
    </div>
    <div
      v-if="teaser"
      class="capitalize body-lg text-secondary text-[28px] text-center pt-[18px] pb-[100px]"
    >
      {{ teaser }}
    </div>
    <div class="flex justify-center gap-[68px]">
      <div v-for="(showcase, index) in showcases" :key="index">
        <div class="flex flex-col items-center gap-y-[36px]">
          <RouterLink :to="showcase.cta.url" target="_blank">
            <img
              :src="showcase.image.src"
              :alt="showcase.image.alt"
              class="w-[450px]"
            />
          </RouterLink>

          <!-- KNAP -->
          <RouterLink :to="showcase.cta.url" target="_blank">
            <button
              v-if="showcase.cta"
              :to="showcase.cta.url"
              class="w-[213px] h-[48px] rounded-50 uppercase text-[16px] cursor-pointer bg-detail text-detail-text"
            >
              {{ showcase.cta.name }}
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
              </span></button
          ></RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  teaser: String,
  showcases: Object,
  cta: Object,
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

<style scoped></style>
