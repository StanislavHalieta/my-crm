import { FC } from "react";
import { StyledMainCard } from "./styles";
import { CardActionArea, CardContent, Typography } from "@mui/material";

export interface ICard {
  id: number | string;
  title: string;
  description: string;
export interface ICard {
  id: number | string;
  title: string;
  description: string;
}

interface MainCardProps {
  card: ICard;
  card: ICard;
}

const MainCard: FC<MainCardProps> = ({ card }) => {
  const { title, description } = card;

  return (
    <StyledMainCard key={id}>
      <CardActionArea
        // data-active={selectedCard === id ? "" : undefined}
        sx={{
          height: "100%",
          "&[data-active]": {
            backgroundColor: "action.selected",
            "&:hover": {
              backgroundColor: "action.selectedHover",
            },
          },
        }}
      >
        <CardContent sx={{ height: "100%" }}>
          <Typography variant="h5" component="h5">
            {title}
          <Typography variant="h5" component="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledMainCard>
  );
};

export default MainCard;
