import { Card, Slider } from "@mui/material";
import styled from "@emotion/styled";

export const StyledSlider = styled(Slider)(({ theme }) => ({
  height: 8,
  pointerEvents: "none",

  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-track": {
    backgroundColor: theme.palette.primary.main,
    height: 8,
    border: "none",
  },
  "& .MuiSlider-rail": {
    backgroundColor: theme.palette.grey[300],
    height: 8,
    opacity: 1,
  },
}));

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 5px 10px;
`;