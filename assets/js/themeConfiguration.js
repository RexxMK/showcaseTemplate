// // themeConfiguration.js
// import { ref } from "vue";
// import { useRoute } from "vue-router";
// import { themes } from "@/assets/js/themes"; // Opdater stien til themes.js

// export function useThemeConfiguration() {
//   const route = useRoute();
//   const theme = ref(route.meta.theme || "default"); // Fallback til 'default' tema, hvis ikke angivet i meta

//   return {
//     theme: themes[theme.value], // Brug det valgte tema fra themes.js
//   };
// }
