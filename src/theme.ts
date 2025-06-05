import { createTheme } from "@mui/material/styles";

const colors = {
  blueLight: "#e0f0ff",
  blue: "#007bff",
  blueDark: "#003366",
  yellow: "#ffd700",
  yellowDark: "#ffcc00",
  white: "#ffffff",
  grayLight: "#f2f2f2",
  grayDark: "#444444",
  fontMain: "'Segoe UI', sans-serif",
  borderRadius: 5,
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.blue,           //#003166
      contrastText: colors.white,  // #ffffff
    },
    secondary: {
      main: colors.yellow,         // #ffd700
    },
    background: {
      default: colors.blueLight,   // #e0f0ff
      paper: colors.white,         // #ffffff
    },
    text: {
      primary: "#0d47a1",          // #0d47a1
      secondary: colors.grayDark,  // можна окремо, якщо хочеш світліший
    },
  },
  shape: {
    borderRadius: colors.borderRadius,
  },
  typography: {
    fontFamily: colors.fontMain,
    fontSize: 14,
    h1: {
      color: colors.blueDark,
    },
    h2: {
      color: colors.blueDark,
    },
    h3: {
      color: colors.blueDark,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#003166",          // замість світло-блакитного (напр.#2e2e2e) беремо твій --blue-light
      contrastText: colors.white,
    },
    secondary: {
      main: colors.yellowDark,  // теплий жовтий (#ffcc00)
    },
    background: {
      default: "#121212",       // #121212    // можна залишити темний фоновий колір
      paper: "#1e1e1e",         // #1e1e1e
    },
    text: {
      primary: colors.white,
      secondary: colors.grayLight,
    },
  },
  shape: {
    borderRadius: colors.borderRadius,
  },
  typography: {
    fontFamily: colors.fontMain,
    fontSize: 14,
  },
});
