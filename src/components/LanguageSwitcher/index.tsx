import { Language } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { StyledLanguageSwitcher } from "./styles";

interface ILang {
  key: string;
  label: string;
}

const langs: ILang[] = [
  {
    key: "uk",
    label: "Укр",
  },
  {
    key: "en",
    label: "Eng",
  },
  {
    key: "de",
    label: "De",
  },
  {
    key: "fr",
    label: "Fr",
  },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentLang, setCurrentLang] = useState<ILang>({
    key: "uk",
    label: "Укр",
  });

  const open = Boolean(anchorEl);

  useEffect(() => {
    i18n.changeLanguage(currentLang.key);
  }, [currentLang, i18n]);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (langKey: string) => {
    const currentLng = langs.find((lng)=>lng.key === langKey);
    setCurrentLang(currentLng!);
    setAnchorEl(null);
  };

  return (
    <StyledLanguageSwitcher>
      <Button
        prefix="{<Language />}"
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "white" }}
      >
        <Language/> {currentLang.label}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {langs.map(({ label, key }) => (
          <MenuItem onClick={() => handleClose(key)} key={key}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </StyledLanguageSwitcher>
  );
};

export default LanguageSwitcher;
