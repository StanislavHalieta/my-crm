import { Box } from "@mui/material";
import styled from "styled-components";

export const Header = styled(Box)`
  height: 60px;
  width: 100%;
  background-color:${({theme})=>theme.palette.primary.main};
  color: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;