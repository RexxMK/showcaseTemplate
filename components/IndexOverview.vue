<template>
  <div>
    <!-- MOBIL -->
    <div v-if="isMobile" class="flex flex-col items-center">
      <div v-if="title" class="capitalize header-sm text-secondary mt-[50px]">
        {{ title }}
      </div>
      <div
        v-if="teaser"
        class="capitalize body-sm text-secondary text-center pt-[18px] pb-[60px]"
      >
        {{ teaser }}
      </div>
      <div class="flex flex-col justify-center">
        <div v-for="(showcase, index) in showcases" :key="index">
          <div class="flex flex-col items-center gap-y-[24px] pb-[49px]">
            <RouterLink :to="showcase.cta.url" target="_blank">
              <img
                :src="showcase.image.src"
                :alt="showcase.image.alt"
                class="w-[291px]"
              />
            </RouterLink>

            <!-- KNAP -->
            <RouterLink :to="showcase.cta.url" target="_blank">
              <button
                v-if="showcase.cta"
                :to="showcase.cta.url"
                class="w-[213px] h-[48px] rounded-50 uppercase caption-lg cursor-pointer bg-detail text-detail-text"
              >
                {{ showcase.cta.name }}
                <span class="w-[12px] absolute ml-[14px]">
                  <svg
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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

    <!-- LAPTOP -->
    <div v-else class="flex flex-col items-center">
      <div v-if="title" class="capitalize header-lg text-secondary mt-[50px]">
        {{ title }}
      </div>
      <div
        v-if="teaser"
        class="capitalize body-lg text-secondary text-center pt-[18px] pb-[100px]"
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
                class="w-[213px] h-[48px] rounded-50 uppercase caption-lg cursor-pointer bg-detail text-detail-text"
              >
                {{ showcase.cta.name }}
                <span class="w-[12px] absolute ml-[14px]">
                  <svg
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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

<style scoped></style>
