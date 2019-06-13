import React from "react";
import {
  StyledFooter,
  StyledNavLink,
  StyledIcons,}
   from "./FooterStyles";


function Footer() {
  return (
    <StyledFooter>
      <StyledNavLink exact to="/">
        <StyledIcons src="/assets/HomeButton.svg" alt="Home" />
      </StyledNavLink>
      <StyledNavLink exact to="/info">
        <StyledIcons src="/assets/InfoButton.svg" alt="Info" />
      </StyledNavLink>
      <StyledNavLink to="/add">
        <StyledIcons src="/assets/AddButton.svg" alt="Add" />
      </StyledNavLink>
    </StyledFooter>
  );
}

export default Footer;
