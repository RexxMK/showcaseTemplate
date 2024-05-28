<template>
  <div class="c-video-border">
    <!-- MOBIL -->
    <div v-if="isMobile">
      <div class="flex justify-center">
        <div v-if="mobile.src" class="b-solid b-detail">
          <video
            ref="videoPlayer"
            :src="mobile.src"
            class="w-[330px] cursor-pointer m-[8px]"
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
        <div v-if="laptop.src" class="b-solid b-2 b-detail">
          <video
            ref="videoPlayer"
            :src="laptop.src"
            class="w-[1100px] cursor-pointer m-[14px]"
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
