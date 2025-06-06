import { FC, useState } from "react";
import { StyledMainCard } from "./styles";
import { CardActionArea, CardContent, Typography } from "@mui/material";


interface ICard{
    id: number | string,
    title: string,
    description: string,
}

interface MainCardProps {
    card: ICard
}


const MainCard: FC<MainCardProps> = ({card}) => {
  const [selectedCard, setSelectedCard] = useState<string | number>(0);

  return (
    <StyledMainCard>
      <CardActionArea
        onClick={() => setSelectedCard(card.id)}
        data-active={selectedCard === card.id ? "" : undefined}
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
          <Typography variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledMainCard>
  );
};

export default MainCard;
