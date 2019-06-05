import React from "react";
import styled from "styled-components";

const StyledRandomTips = styled.header`
  color: white;
  display: grid;
  font-size: 18px;
  padding: 15px;
`;

function Header() {
  return (
    <>
      <StyledRandomTips>
        Tip:
        <br />
        Black sensitive data, when you send proofs to creditor or collection
        agency.
      </StyledRandomTips>
    </>
  );
}

export default Header;
