import { useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { StyledNavLink } from "./styles";
import type { IMainMenu } from "../../../routing/main-menu";

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
      sx={{
        maxHeight: "calc(100vh - 120px)",
        overflow: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {menu.map(({ key, label, Icon, children }) => {
        const translated = children ? t(`${label}_key`) : t(label);
        const hasChildren = children && children.length > 0;
        const isOpen = openItems[key];

        return (
          <Box key={key} sx={{ overflow: "auto" }}>
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
              <Collapse
                in={isOpen}
                timeout="auto"
                unmountOnExit
              >
                <MenuBuilder menu={children} depth={depth + 1} />
              </Collapse>
            )}
          </Box>
        );
      })}
    </List>
  );
};

export default MenuBuilder;
