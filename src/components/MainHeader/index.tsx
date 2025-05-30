import { FC } from "react";
import { Header } from "./styles";
import { Typography } from "@mui/material";

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = () => {
  return (
    <Header>
      <Typography variant="h6">Заголовок (Header)</Typography>
    </Header>
  );
};

export default MainHeader;
