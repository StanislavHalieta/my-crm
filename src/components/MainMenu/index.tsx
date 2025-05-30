import { FC, ReactElement } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import {
  Delete,
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

interface MainMenuProps {}

interface IMenuItem {
  Icon?: ReactElement;
  text: string;
  value: string;
}

export const mainMenuItems: IMenuItem[] = [
  {
    text: "Додому",
    Icon: <Home />,
    value: "",
  },
  {
    text: "Управління складом",
    Icon: <Warehouse />,
    value: "products",
  },
  {
    text: "Закупівлі",
    Icon: <ShoppingCartCheckout />,
    value: "procurement",
  },
  {
    text: "Виробництво",
    Icon: <Factory />,
    value: "manufacture",
  },
  {
    text: "Продажі",
    Icon: <Storefront />,
    value: "sales",
  },
  {
    text: "Клієнти / Контрагенти",
    Icon: <SupervisorAccount />,
    value: "clients",
  },
  {
    text: "Фінанси",
    Icon: <Payments />,
    value: "finances",
  },
  {
    text: "Аналітика та звітність",
    Icon: <TrendingUp />,
    value: "reporting",
  },
  {
    text: "Управління персоналом",
    Icon: <Engineering />,
    value: "personnel_management",
  },
  {
    text: "Інтеграції",
    Icon: <IntegrationInstructions />,
    value: "integrations",
  },
  {
    text: "Системні можливості",
    Icon: <Settings />,
    value: "system",
  },
];

const MainMenu: FC<MainMenuProps> = () => {
  return (
    <Paper elevation={2}>
      <nav>
        <MenuList>
          {mainMenuItems.map(({ text, Icon, value }) => (
            <StyledNavLink to={`/${value}`} key={value}>
              <MenuItem>
                <ListItemIcon>{Icon}</ListItemIcon>
                <Typography variant="inherit">{text}</Typography>
              </MenuItem>
            </StyledNavLink>
          ))}
        </MenuList>
      </nav>
    </Paper>
  );
};

export default MainMenu;
