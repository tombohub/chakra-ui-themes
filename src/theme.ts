import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const base: ThemeOverride = {
  colors: {
    yellow: {
      50: "#fefce6",
      100: "#fdf9ce",
      200: "#fbf39d",
      300: "#f9ed6c",
      400: "#f7e73b",
      500: "#f5e20a",
      600: "#c4b408",
      700: "#938706",
      800: "#625a04",
      900: "#312d02",
    },
  },
};

export const theme = extendTheme(base);
