import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { IMainMenu } from "../../../routing/main-menu";
import { StyledNavLink } from "./styles";

interface MainMenuBuiderProps {
  menu: IMainMenu[];
  depth?: number;
}

const MenuBuilder: FC<MainMenuBuiderProps> = ({ menu, depth = 0 }) => {
  const { t } = useTranslation();

  return (
    <List
      disablePadding
      sx={{ maxHeight: "calc(100vh - 64px)", overflow: "auto" }}
    >
      {menu.map(({ key, label, Icon, children }) => {
        const translated = children ? t(`${label}_key`) : t(label);

        return (
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
              <ListItemText primary={translated} />
            </ListItemButton>

            {children && children.length > 0 && (
              <MenuBuilder menu={children} depth={depth + 1} />
            )}
          </div>
        );
      })}
    </List>
  );
};

export default MenuBuilder;
