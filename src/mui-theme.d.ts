import { PaletteColorOptions, PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface MyCustomColor extends PaletteColor {
    blue_06?: string;
    transperent?: string;
    outline?: string;
  }

  interface MyCustomColorOptions extends PaletteColorOptions {
    blue_06?: string;
    transperent?: string;
    outline?: string;
  }

  interface Palette {
    gradients: MyCustomColor;
  }

  interface PaletteOptions {
    gradients?: MyCustomColorOptions;
  }
}