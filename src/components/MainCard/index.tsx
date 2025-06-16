import { FC, MouseEventHandler, useState } from "react";
import { StyledMainCard } from "./styles";
import { CardActionArea, CardContent, Typography } from "@mui/material";

export interface ICard {
  id: number | string;
  title: string;
  description: string;
}

interface MainCardProps {
  card: ICard;
}

const MainCard: FC<MainCardProps> = ({ card }) => {
  const [selectedCard, setSelectedCard] = useState<string | number>(0);
  const { id, title, description } = card;

  return (
    <StyledMainCard>
      <CardActionArea
        data-active={selectedCard === id ? "" : undefined}
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
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledMainCard>
  );
};

export default MainCard;
