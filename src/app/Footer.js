import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledFooter = styled.footer`
  background: #fbfbfb;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: grey;
  font-size: 35px;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledNavLink exact to="/">
        <img src="/assets/HomeButton.svg" alt="Home" />
      </StyledNavLink>

      <StyledNavLink to="/add">
        <img src="/assets/AddButton.svg" alt="Add" />
      </StyledNavLink>
    </StyledFooter>
  );
}

export default Footer;
