import { StyledMainCard } from "./components/MainCard/styles";
import { createTheme } from "@mui/material/styles";

const colors = {
  blueLight: "#e0f0ff", // #e0f0ff
  blue: "#007bff", // #007bff
  blueDark: "#003366", // #003366
  yellow: "#ffd700", // #ffd700
  yellowDark: "#ffcc00", // #ffcc00
  white: "#ffffff", // #ffffff
  grayLight: "#f2f2f2", // #f2f2f2
  grayDark: "#444444", // #444444
  bgDark: "#121212", // #121212
  paperDark: "#1e1e1e", // #1e1e1e
  textPrimary: "#0d47a1", // #0d47a1
  blue_06: "#2196f399", // #2196f399
  transperent: "#00000000", // #00000000
  fontMain: "'Roboto SemiCondensed', 'Segoe UI', sans-serif",
  borderRadius: 5,
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.blue, // #007bff
      contrastText: colors.white, // #ffffff
      dark: "",
      light: "",
    },
    gradients: {
      blue_06: colors.blue_06, // #2196f399
      transperent: colors.transperent, // #00000000
    },
    secondary: {
      main: colors.yellow, // #ffd700
    },
    background: {
      default: colors.blueLight, // #e0f0ff
      paper: colors.white, // #ffffff
    },
    text: {
      primary: colors.textPrimary, // #0d47a1
      secondary: colors.grayDark, // можна окремо, якщо хочеш світліший
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
    h4: {
      color: colors.blueDark,
    },
    h5: {
      color: colors.blueDark,
    },
    h6: {
      color: colors.blueDark,
    },
    body1: {
      color: colors.blueDark,
    },
    body2: {
      color: colors.blueDark,
    },
    button: {
      color: colors.blue_06,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.blueDark, // #003166 замість світло-блакитного (напр. #2e2e2e) беремо твій --blue-light
      contrastText: colors.white,
    },
    secondary: {
      main: colors.yellowDark, // теплий жовтий (#ffcc00)
    },
    background: {
      default: colors.bgDark, // #121212    // можна залишити темний фоновий колір
      paper: colors.paperDark, // #1e1e1e
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
