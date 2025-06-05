// src/contexts/ThemeContext.tsx
import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider as StyledProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";

const ThemeToggleContext = createContext({
  toggleTheme: () => {},
  isDark: false,
});

export const useThemeToggle = () => useContext(ThemeToggleContext);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, isDark }}>
      <MuiThemeProvider theme={theme}>
        <StyledProvider theme={theme}>
          <CssBaseline />
          {children}
        </StyledProvider>
      </MuiThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
