import "@emotion/react";
import { darkTheme } from "./theme";
type MyTheme = typeof darkTheme;

declare module "@emotion/react" {
  export interface Theme extends MyTheme {
    "": "";
  }
}
