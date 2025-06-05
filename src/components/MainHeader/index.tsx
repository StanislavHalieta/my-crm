import { FC } from "react";
import { Header } from "./styles";
import { Typography } from "@mui/material";
import LanguageSwitcher from "../LanguageSwitcher";

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = () => {
  return (
    <Header>
      <LanguageSwitcher/>
      <Typography variant="h6">Заголовок (Header)</Typography>
    </Header>
  );
};

export default MainHeader;
