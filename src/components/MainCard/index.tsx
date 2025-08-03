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
<<<<<<< HEAD
=======
  const [selectedCard, setSelectedCard] = useState<string | number>(0);
>>>>>>> 4aecd837a40a3190a031f8a1b2cc7bf4842badc3
  const { id, title, description } = card;

  return (
    <StyledMainCard key={id}>
      <CardActionArea
<<<<<<< HEAD
=======
        data-active={selectedCard === id ? "" : undefined}
>>>>>>> 4aecd837a40a3190a031f8a1b2cc7bf4842badc3
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
