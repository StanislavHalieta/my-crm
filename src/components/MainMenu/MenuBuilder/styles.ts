<<<<<<< HEAD
import { ListItemButton } from "@mui/material";
import { NavLink } from "react-router";
import styled from "@emotion/styled";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;

  &.active {
    font-weight: bold;
    background-color: ${({theme}) => theme.palette.secondary.main}; /* жовтий */
    color:  ${({theme}) => theme.palette.text.primary}; /* темно-синій */
  }
`;

export const StyledListItemButton = styled(ListItemButton)`
  border-radius: 8px;
  margin: 2px 8px;
  color: ${({theme}) => theme.palette.text.primary};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({theme}) => theme.palette.primary.contrastText}; /* світлий жовтий */
  }

  &.active {
    background-color: ${({theme}) => theme.palette.secondary.main};
    font-weight: bold;
  }
`;
=======
import { NavLink } from "react-router";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;

  &.active {
    font-weight: bold;
    background-color: ${({theme}) => theme.palette.secondary.main}; /* жовтий */
    color:  ${({theme}) => theme.palette.text.primary}; /* темно-синій */
  }
`;
>>>>>>> c61f093 (main menu drawer)
