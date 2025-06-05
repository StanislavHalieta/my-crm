import { Box } from "@mui/material";
import styled from "styled-components";

export const Sidebar = styled(Box)`
  width: 25%;
  background-color: ${({theme})=>theme.palette.background.paper};
  padding: 16px;
  box-sizing: border-box;
`;