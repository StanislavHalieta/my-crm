import type { FC } from "react";
import Paper from "@mui/material/Paper";
import MenuBuilder from "./MenuBuilder";
import mainMenu from "../../routing/main-menu";

interface MainMenuProps {
  ""?:""
}

const MainMenu: FC<MainMenuProps> = () => {
  return (
    <Paper elevation={2}>
      <MenuBuilder menu={mainMenu} />
    </Paper>
  );
};

export default MainMenu;
