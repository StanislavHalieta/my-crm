import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { IMainMenu } from "../../../routing/main-menu";
import { StyledNavLink } from "./styles";

interface MainMenuBuiderProps {
  menu: IMainMenu[];
  depth?: number;
}

const MenuBuilder: FC<MainMenuBuiderProps> = ({ menu, depth = 0 }) => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleOpen = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <List
      disablePadding
      sx={{ maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}
    >
      {menu.map(({ key, label, Icon, children }) => {
        const translated = children ? t(`${label}_key`) : t(label);
        const hasChildren = children && children.length > 0;
        const isOpen = openItems[key];

        return (
          <div key={key}>
            <ListItemButton
              component={!hasChildren ? StyledNavLink : "button"}
              to={!hasChildren ? `/${key.replaceAll(".", "/")}` : undefined}
              onClick={hasChildren ? () => toggleOpen(key) : undefined}
              sx={{ pl: 2 + depth * 2 }}
            >
              {Icon && (
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
              )}
              <ListItemText primary={translated} />
              {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {hasChildren && (
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <MenuBuilder menu={children} depth={depth + 1} />
              </Collapse>
            )}
          </div>
        );
      })}
    </List>
  );
};

export default MenuBuilder;
