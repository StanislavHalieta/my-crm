import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeToggle } from "../../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { toggleTheme, isDark } = useThemeToggle();

  return (
    <Tooltip title="Змінити тему">
      <IconButton onClick={toggleTheme} color="inherit">
        {isDark ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitcher;
