import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledFooter = styled.footer`
  align-items: center;
  background: #fbfbfb;
  display: flex;
  justify-content: space-evenly;
`;

const StyledNavLink = styled(NavLink)`
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

const StyledIcon = styled.img`
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledNavLink exact to="/">
        <StyledIcon src="/assets/HomeButton.svg" alt="Home" />
      </StyledNavLink>
      <StyledNavLink exact to="/info">
        <StyledIcon src="/assets/InfoButton.svg" alt="Info" />
      </StyledNavLink>
      <StyledNavLink to="/add">
        <StyledIcon src="/assets/AddButton.svg" alt="Add" />
      </StyledNavLink>
    </StyledFooter>
  );
}

export default Footer;
