import { createTheme } from "@mui/material/styles";

// #0057B7 — офіційний синій (прапор України)
// #FFD700 — яскравий жовтий (прапор України)
// #00C2FF — сучасний бірюзово-блакитний, як акцент (для hover/світіння)
// #FF6B00 — теплий помаранчевий для контрасту
// #7DFF7A — м’ятно-зелений, добре читається на темному тлі
// #E91E63 — насичений рожево-малиновий, додає життя
// #CCCCCC — нейтральний сірий для неакцентних елементів, осі, фону

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
  chart_1: "#0057B7", // #0057B7
  chart_2: "#FFD700", // #FFD700
  chart_3: "#00C2FF", // #00C2FF
  chart_4: "#FF6B00", // #FF6B00
  chart_5: "#7DFF7A", // #7DFF7A
  chart_6: "#E91E63", // #E91E63
  chart_7: "#CCCCCC", // #CCCCCC
  fontMain: "'Roboto SemiCondensed', 'Segoe UI', sans-serif",
  borderRadius: 5,
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.blue, // #007bff
      contrastText: colors.white, // #ffffff
      dark: "#333",
      light: "#999",
    },
    charts: {
      "1": colors.chart_1, // #0057B7
      "2": colors.chart_2, // #FFD700
      "3": colors.chart_3, // #00C2FF
      "4": colors.chart_4, // #FF6B00
      "5": colors.chart_5, // #7DFF7A
      "6": colors.chart_6, // #E91E63
      "7": colors.chart_7  // #CCCCCC
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
      dark: "#333",
      light: "#999",
    },
    charts: {
      "1": colors.chart_1, // #0057B7
      "2": colors.chart_2, // #FFD700
      "3": colors.chart_3, // #00C2FF
      "4": colors.chart_4, // #FF6B00
      "5": colors.chart_5, // #7DFF7A
      "6": colors.chart_6, // #E91E63
      "7": colors.chart_7  // #CCCCCC
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
