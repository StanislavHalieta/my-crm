import { PaletteColorOptions, PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface GradientsColor extends PaletteColor {
    blue_06?: string;
    transperent?: string;
    outline?: string;
  }

  interface GradientColorOptions extends PaletteColorOptions {
    blue_06?: string;
    transperent?: string;
    outline?: string;
  }
  interface ChartsColors {
    "1"?: string,
    "2"?: string,
    "3"?: string,
    "4"?: string,
    "5"?: string,
    "6"?: string,
    "7"?: string
  }
  interface Palette {
    gradients: GradientsColor;
    charts: ChartsColors
  }

  interface PaletteOptions {
    gradients?: GradientColorOptions;
    charts?: ChartsColors
  }
}