import { FC } from "react";
import Paper from "@mui/material/Paper";
<<<<<<< HEAD
import { mainMenu } from "../../routing/main-menu";
import MenuBuilder from "./MenuBuilder";
=======
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import {
  Engineering,
  Factory,
  Home,
  IntegrationInstructions,
  Payments,
  Settings,
  ShoppingCartCheckout,
  Storefront,
  SupervisorAccount,
  TrendingUp,
  Warehouse,
} from "@mui/icons-material";

import { StyledNavLink } from "./styles";
// import { OverridableComponent } from "@mui/material/OverridableComponent";
// import { SvgIconTypeMap } from "@mui/material";
>>>>>>> ed4027380f1194450543ea99beebdcc3fb1c16d1

interface MainMenuProps {}

const MainMenu: FC<MainMenuProps> = () => {
  return (
    <Paper elevation={2}>
      <MenuBuilder menu={mainMenu}/>
    </Paper>
  );
};

export default MainMenu;
