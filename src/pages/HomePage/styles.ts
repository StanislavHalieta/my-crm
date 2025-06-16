import { Box, Slider } from "@mui/material";
import { Grid } from "@mui/system";
import styled from "@emotion/styled";

export const QuoteItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: 8px;
  background-color: lightblue;
  padding: 8px;
`;

export const StyledHomePage = styled(Box)`
  padding: 24px;
  background: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const StyledHomePageGrid = styled(Grid)``;

export const StyledAirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
}));