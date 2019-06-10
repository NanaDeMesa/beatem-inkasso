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
  color: grey;
  display: flex;
  font-size: 35px;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledNavLink exact to="/">
        <img src="/assets/HomeButton.svg" alt="Home" />
      </StyledNavLink>
      <StyledNavLink exact to="/info">
        <img src="/assets/InfoButton.svg" alt="Info" />
      </StyledNavLink>
      <StyledNavLink to="/add">
        <img src="/assets/AddButton.svg" alt="Add" />
      </StyledNavLink>
    </StyledFooter>
  );
}

export default Footer;
