<template>
  <div class="c-video-staggered">
    <!-- MOBIL -->
    <div v-if="isMobile">
      <div class="flex justify-center">
        <div
          v-if="mobile.video"
          class="bg-amber w-[320px] h-[612px] pt-[10px] pl-[11px]"
        >
          <video
            ref="videoPlayer"
            :src="mobile.video"
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
          v-if="laptop.video"
          class="bg-amber w-[1070px] h-[630px] pt-[30px] pl-[30px]"
        >
          <video
            ref="videoPlayer"
            :src="laptop.video"
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
// 'onMounted' hooket bruges til køre en funktion, når komponentet er blev sat ind.
// Funktionen kontrollerer vinduets bredde. Hvis bredden er mindre end 768 pixels, så opdateres 'isMobile' til sand.
onMounted(() => {
  if (window.innerWidth < 768) {
    isMobile.value = true;
  }
});
</script>
