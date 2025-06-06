import { alpha, Box, InputBase } from "@mui/material";
import styled from "styled-components";

export const StyledMainHeader = styled(Box)`
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const StyledMainHeaderContent = styled.div`
  flex: 5 ;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));