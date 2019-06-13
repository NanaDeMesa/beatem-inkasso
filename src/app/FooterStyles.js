import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const StyledFooter = styled.footer`
  align-items: center;
  background: #fbfbfb;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledNavLink = styled(NavLink)`
  align-items: center;
  background: rgba(192, 192, 192, 0.12);
  display: flex;
  font-size: 35px;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  user-select: none;
  width: 100%;
  &.active {
    background: transparent;
    color: white;
  }
`;

export const StyledIcons = styled.img`
`;