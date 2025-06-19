import { FC } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";
import MainLogo from "./MainLogo";
import {
  StyledInputBase,
  StyledMainHeader,
  StyledMainHeaderContent,
  StyledSearch,
} from "./styles";
import { Search as SearchIcon } from "@mui/icons-material";
import styled from "@emotion/styled";

interface MainHeaderProps {}

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const MainHeader: FC<MainHeaderProps> = () => {
  const { t } = useTranslation();
  return (
    <StyledMainHeader>
      <MainLogo />
      <StyledMainHeaderContent>
        <Typography variant="h6">{t("header.name")}</Typography>
      </StyledMainHeaderContent>
      <StyledSearch>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </StyledSearch>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </StyledMainHeader>
  );
};

export default MainHeader;
