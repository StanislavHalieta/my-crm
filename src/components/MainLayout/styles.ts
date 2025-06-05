import styled from "styled-components";
import { Box } from "@mui/material";

export const Main = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: ${({theme})=>theme.palette.background.default};
`;
