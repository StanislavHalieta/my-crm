import { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import MainLayout from "../MainLayout";
import MainHeader from "../MainHeader";
import MainRouter from "../../routing/MainRouter";

import { StyledApp } from "./styles";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 0,
      xs: 640,
      md: 1024,
      xl: 1280,
      lg: 1600,
    },
  },
});

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <MainHeader />
        <MainLayout>
          <MainRouter />
        </MainLayout>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
