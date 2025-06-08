import { FC } from "react";
import Paper from "@mui/material/Paper";
import mainMenu from "../../routing/main-menu";
import MenuBuilder from "./MenuBuilder";

interface MainMenuProps {}

const MainMenu: FC<MainMenuProps> = () => {
  return (
    <Paper elevation={2}>
      <MenuBuilder menu={mainMenu}/>
    </Paper>
  );
};

export default MainMenu;
