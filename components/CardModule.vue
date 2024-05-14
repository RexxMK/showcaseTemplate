<template>
  <!-- Her bruger jeg Vue's bindingssyntax ':class' til at tilføje en dynamisk CSS-klasse baseret på bestemte tilstande -->
  <!-- Dvs. at hvis 'isMobile' er falsk, og enten 'showLeftModule' eller 'showRightModule' er sand, -->
  <!-- så vil CSS-klassen "h-[1000px]" blive tilføjet til elementet -->
  <div
    class="c-card-module"
    :class="{ 'h-[1000px]': !isMobile && (showLeftModule || showRightModule) }"
  >
    <!-- MOBIL -->
    <!-- Jeg bruger en if-sætning til at vise elementet på denne måde hvis 'isMobile' er sand. -->
    <div v-if="isMobile" class="flex flex-wrap gap-y-[49px] justify-center">
      <!-- Venstre kort mobil -->
      <div class="relative cursor-pointer">
        <div v-if="leftCard" class="w-[346px]" @click="toggleModule('left')">
          <img
            :src="leftCard.src"
            :alt="leftCard.alt"
            class="w-[325px] absolute z-3"
            :class="{ clicked: showLeftModule }"
          />
          <div
            class="w-[325px] h-[194px] bg-secondary-variant absolute ml-[8px] mt-[8px] z-2"
          ></div>
          <div
            class="w-[325px] h-[194px] bg-secondary absolute ml-[16px] mt-[16px] z-1"
          ></div>
        </div>
      </div>

      <!-- Venstre modul -->
      <div class="z-5 mt-[206px] overflow-hidden sliderShadow">
        <div v-if="showLeftModule" class="w-full h-auto">
          <div class="flex gap-x-[13px] overflow-x-auto">
            <div v-for="(image, index) in leftModule.mobileImages" :key="index">
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-auto h-[583px] sliderShadow"
              />
            </div>
            <div v-if="leftModule.mobileVideo">
              <video
                ref="videoPlayer"
                :src="leftModule.mobileVideo.src"
                class="w-auto h-[583px] cursor-pointer sliderShadow"
                @click="toggleVideo"
                autoplay
                muted
                loop
              ></video>
            </div>
          </div>
        </div>
      </div>

      <!-- Højre kort -->
      <div class="relative cursor-pointer">
        <div v-if="rightCard" class="w-[346px]" @click="toggleModule('right')">
          <img
            :src="rightCard.src"
            :alt="rightCard.alt"
            class="w-[325px] absolute z-3"
            :class="{ clicked: showRightModule }"
          />
          <div
            class="w-[325px] h-[194px] bg-secondary-variant absolute ml-[8px] mt-[8px] z-2"
          ></div>
          <div
            class="w-[325px] h-[194px] bg-secondary absolute ml-[16px] mt-[16px] z-1"
          ></div>
        </div>
      </div>

      <!-- Højre modul -->
      <div class="z-5 mt-[206px] overflow-hidden sliderShadow">
        <div v-if="showRightModule" class="w-full h-auto">
          <div class="flex gap-x-[13px] overflow-x-auto">
            <div
              v-for="(image, index) in rightModule.mobileImages"
              :key="index"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-[317px] h-auto sliderShadow"
              />
            </div>
            <div v-if="rightModule.mobileVideo">
              <video
                ref="videoPlayer"
                :src="rightModule.mobileVideo.src"
                class="w-auto h-[583px] cursor-pointer sliderShadow"
                @click="toggleVideo"
                autoplay
                muted
                loop
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- LAPTOP -->
    <!-- Hvis 'isMobile' er falsk vises elementet på følgende måde -->
    <div v-else class="flex justify-center gap-x-[38px]">
      <!-- Venstre kort -->
      <div class="relative cursor-pointer">
        <div
          v-if="leftCard"
          class="w-[650px] h-[387px]"
          @click="toggleModule('left')"
        >
          <img
            :src="leftCard.src"
            :alt="leftCard.alt"
            class="cardContainer w-[650px] h-[387px] absolute z-3"
            :class="{ clicked: showLeftModule }"
          />
          <div
            class="w-[650px] h-[387px] bg-secondary-variant absolute top-0 ml-[10px] mt-[10px] z-2"
          ></div>
          <div
            class="w-[650px] h-[387px] bg-secondary absolute top-0 ml-[20px] mt-[20px] z-1"
          ></div>
        </div>
      </div>

      <!-- Moduler -->
      <div class="flex justify-center z-5 pt-[97px]">
        <!-- Venstre modul -->
        <div
          v-if="showLeftModule"
          class="w-[1449px] h-[882px] bg-secondary-variant absolute overflow-y-auto"
        >
          <div class="flex flex-col items-center mt-[80px]">
            <div class="flex justify-center gap-x-[68px]">
              <div class="flex flex-col gap-y-[68px]">
                <div
                  v-for="(image, index) in leftModule.mobileImages"
                  :key="index"
                >
                  <img :src="image.src" :alt="image.alt" class="w-[291px]" />
                </div>
              </div>
              <div class="flex flex-col gap-y-[97px]">
                <div
                  v-for="(image, index) in leftModule.laptopImages"
                  :key="index"
                >
                  <img :src="image.src" :alt="image.alt" class="w-[1019px]" />
                </div>
              </div>
            </div>

            <div v-if="leftModule.laptopVideo" class="pt-[232px] pb-[80px]">
              <div class="w-[1100] h-[42px] bg-secondary"></div>
              <video
                ref="videoPlayer"
                :src="leftModule.laptopVideo.src"
                class="w-[1100px] cursor-pointer"
                @click="toggleVideo"
                autoplay
                muted
                loop
              ></video>
            </div>
          </div>
        </div>

        <!-- Højre modul -->
        <div
          v-if="showRightModule"
          class="w-[1449px] h-[882px] bg-secondary-variant absolute overflow-y-auto"
        >
          <div class="flex flex-col items-center mt-[80px]">
            <div class="flex justify-center gap-x-[68px]">
              <div class="flex flex-col gap-y-[68px]">
                <div
                  v-for="(image, index) in rightModule.mobileImages"
                  :key="index"
                >
                  <img :src="image.src" :alt="image.alt" class="w-[291px]" />
                </div>
              </div>
              <div class="flex flex-col gap-y-[97px]">
                <div
                  v-for="(image, index) in rightModule.laptopImages"
                  :key="index"
                >
                  <img :src="image.src" :alt="image.alt" class="w-[1019px]" />
                </div>
              </div>
            </div>

            <div v-if="rightModule.laptopVideo" class="pt-[232px] pb-[80px]">
              <div class="w-[1100] h-[42px] bg-secondary"></div>
              <video
                ref="videoPlayer"
                :src="rightModule.laptopVideo.src"
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

      <!-- Højre kort -->

      <div class="relative cursor-pointer">
        <div
          v-if="rightCard"
          class="w-[650px] h-[387px]"
          @click="toggleModule('right')"
        >
          <img
            :src="rightCard.src"
            :alt="rightCard.alt"
            class="cardContainer w-[650px] h-[387px] absolute z-3"
            :class="{ clicked: showRightModule }"
          />
          <div>
            <div
              class="w-[650px] h-[387px] bg-secondary-variant absolute top-0 ml-[10px] mt-[10px] z-2"
            ></div>
            <div
              class="w-[650px] h-[387px] bg-secondary absolute top-0 ml-[20px] mt-[20px] z-1"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  leftCard: Object,
  rightCard: Object,
  leftModule: Object,
  rightModule: Object,
  mobileImages: Array,
  laptopImages: Array,
  mobileVideo: Object,
  laptopVideo: Object,
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

const showLeftModule = ref(false);
const showRightModule = ref(false);

// Funktionen tager en parameter 'side', som angiver, om det er venstre eller højre modul, der skal "toggles".
// Afhængigt af 'side' ændres værdierne af 'showLeftModule' og 'showRightModule', og sørger for, at kun ét af modulerne er synligt ad gangen.
// const toggleModule = (side) => {
//   if (side === "left") {
//     showLeftModule.value = !showLeftModule.value;
//     if (showLeftModule.value && showRightModule.value) {
//       showRightModule.value = false;
//     }
//   } else if (side === "right") {
//     showRightModule.value = !showRightModule.value;
//     if (showRightModule.value && showLeftModule.value) {
//       showLeftModule.value = false;
//     }
//   }
// };
const toggleModule = (side) => {
  let elementToScrollTo;

  if (side === "left") {
    showLeftModule.value = !showLeftModule.value;
    if (showLeftModule.value && showRightModule.value) {
      showRightModule.value = false;
    }
    // Rul kun hvis venstre modul er åbent
    if (showLeftModule.value) {
      elementToScrollTo = document.querySelector(".c-card-module");
    }
  } else if (side === "right") {
    showRightModule.value = !showRightModule.value;
    if (showRightModule.value && showLeftModule.value) {
      showLeftModule.value = false;
    }
    // Rul kun hvis højre modul er åbent
    if (showRightModule.value) {
      elementToScrollTo = document.querySelector(".c-card-module");
    }
  }

  // Rul kun hvis elementet er defineret
  if (elementToScrollTo) {
    elementToScrollTo.scrollIntoView({ behavior: "smooth" });
  }
};

const videoPlayer = ref(null);

const toggleVideo = () => {
  if (videoPlayer.value.paused) {
    videoPlayer.value.play();
  } else {
    videoPlayer.value.pause();
  }
};
</script>

<style scoped>
.cardContainer {
  transition: transform 0.2s ease-in-out;
}

.cardContainer:hover {
  transform: translateY(-20px);
}

.cardContainer.clicked {
  transform: translateY(-110px);
}
</style>
