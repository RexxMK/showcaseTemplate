// unocss.config.js
// import { defineConfig } from "unocss";
// import { themes } from "./assets/js/themes"; // Opdater stien til themes.js
// import { useThemeConfiguration } from "./assets/js/themeConfiguration"; // Opdater stien efter din filstruktur

// export default defineConfig(() => {
//   const { theme } = useThemeConfiguration(); // Brug useThemeConfiguration for at få det aktuelle tema

//   return {
//     rules: {
//       // Baggrundsfarve
//       ".bg-primary": {
//         background: "var(--primary)",
//       },
//       // Tekstfarve
//       ".text-primary": {
//         color: "var(--primary)",
//       },
//       // Tilføj flere regler efter behov
//     },
//   };
// });

// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      primaryVariant: "var(--primary-variant)",
      secondaryVariant: "var(--secondary-variant)",
      detail: "var(--detail)",
      detailText: "var(--detail-text)",
    },
  },
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
