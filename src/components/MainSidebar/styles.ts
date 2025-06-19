import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const Sidebar = styled(Box)`
  width: 25%;
  background-color: ${({theme})=>theme.palette.background.paper};
  padding: 16px;
  box-sizing: border-box;
`;