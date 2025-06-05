import { Box } from "@mui/material";
import styled from "styled-components";

export const Content = styled(Box)`
  width: 75%;
  background-color: ${({theme})=>theme.palette.background.default};
  padding: 16px;
  box-sizing: border-box;
  overflow: auto;
`;