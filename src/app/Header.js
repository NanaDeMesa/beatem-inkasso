import React from "react";
import styled from "styled-components";

const StyledRandom = styled.header`
  padding: 15px;
  color: white;
  font-size: 18px;
  display: grid;
`;

function Header() {
  return (
    <>
      <StyledRandom>
        Tip:
        <br />
        Black sensitive data, if you send proofs to creditor or collection
        agency.
      </StyledRandom>
    </>
  );
}

export default Header;
