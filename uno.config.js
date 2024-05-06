// unocss.config.js
import { defineConfig } from "unocss";
import { themes } from "./assets/js/themes"; // Opdater stien til themes.js
import { useThemeConfiguration } from "./assets/js/themeConfiguration"; // Opdater stien efter din filstruktur

export default defineConfig(() => {
  const { theme } = useThemeConfiguration(); // Brug useThemeConfiguration for at få det aktuelle tema

  return {
    rules: {
      // Baggrundsfarve
      ".bg-primary": {
        background: themes[theme].bgPrimary,
      },
      // Tekstfarve
      ".text-primary": {
        color: themes[theme].textPrimary,
      },
      // Tilføj flere regler efter behov
    },
  };
});
