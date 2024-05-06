<template>
  <div class="c-page-hero">
    <div class="c-page-hero_award flex flex-col items-center mt-[30px]">
      <img
        v-if="award.image"
        :src="award.image.src"
        :alt="award.image.alt"
        class="w-[43px]"
      />
      <div v-if="award.name" class="max-w-20ch text-center pt-[16px]">
        {{ award.name }}
      </div>
    </div>
    <div class="c-page-hero_content flex flex-col items-center">
      <!-- MOBIL -->
      <div v-if="isMobile" class="flex flex-col items-center pt-[99px]">
        <div v-if="title" class="text-[40px]">{{ title }}</div>
        <div
          v-if="teaser"
          class="text-[20px] text-center pt-[36px] pb-[105px] max-w-45ch"
        >
          {{ teaser }}
        </div>
      </div>

      <!-- LAPTOP -->
      <div v-else class="pt-[206px]">
        <div v-if="title" class="text-[110px]">{{ title }}</div>
        <div
          v-if="teaser"
          class="text-[28px] text-center pt-[18px] pb-[62px] max-w-45ch"
        >
          {{ teaser }}
        </div>
      </div>

      <!-- KNAP -->
      <!-- skal pakkes ind som link -->
      <button
        v-if="cta"
        class="w-[213px] h[48px] rounded-50 uppercase text-[16px] cursor-pointer"
      >
        {{ cta.name }}
        <span
          ><img
            src="/assets/svg/icon-open-in-new.svg"
            alt=""
            class="w-[11.5px] absolute ml-[14px]"
        /></span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  url: String,
  title: String,
  teaser: String,
  award: Object,
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
