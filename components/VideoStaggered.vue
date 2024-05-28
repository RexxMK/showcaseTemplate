<template>
  <div class="c-video-staggered">
    <!-- MOBIL -->
    <div v-if="isMobile">
      <div class="flex justify-center">
        <div
          v-if="mobile.src"
          class="bg-primary-variant w-[320px] h-[612px] pt-[10px] pl-[11px]"
        >
          <video
            ref="videoPlayer"
            :src="mobile.src"
            class="w-[330px] cursor-pointer"
            @click="toggleVideo"
            autoplay
            muted
            loop
          ></video>
        </div>
      </div>
    </div>

    <!-- LAPTOP -->
    <div v-else>
      <div class="flex justify-center">
        <div
          v-if="laptop.src"
          class="bg-primary-variant w-[1070px] h-[630px] pt-[30px] pl-[30px]"
        >
          <video
            ref="videoPlayer"
            :src="laptop.src"
            class="w-[1100px] cursor-pointer"
            @click="toggleVideo"
            autoplay
            muted
            loop
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  laptop: Object,
  mobile: Object,
});

const videoPlayer = ref(null);

const toggleVideo = () => {
  if (videoPlayer.value.paused) {
    videoPlayer.value.play();
  } else {
    videoPlayer.value.pause();
  }
};

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
