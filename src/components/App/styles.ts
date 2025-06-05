import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledApp = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({theme})=>theme?.palette?.background?.default};
  color: ${({theme})=>theme?.palette?.background?.default};
`;