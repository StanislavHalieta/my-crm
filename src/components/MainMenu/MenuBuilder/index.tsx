import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { StyledNavLink } from "./styles";
import { IMainMenu } from "../../../routing/main-menu";

interface MainMenuBuiderProps {
  menu: IMainMenu[];
  depth?: number;
}
const MenuBuilder: FC<MainMenuBuiderProps> = ({ menu, depth = 0 }) => {
  const { t } = useTranslation();

  return (
    <List disablePadding>
      {menu.map(({ key, label, Icon, children }) => (
        <div key={key}>
          <ListItemButton
            component={StyledNavLink}
            to={`/${key.replaceAll(".", "/")}`}
            sx={{ pl: 2 + depth * 2 }}
          >
            {Icon && (
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
            )}
            <ListItemText primary={t(label)} />
          </ListItemButton>

          {children && children.length > 0 && (
            <MenuBuilder menu={children} depth={depth + 1} />
          )}
        </div>
      ))}
    </List>
  );
};

export default MenuBuilder;
