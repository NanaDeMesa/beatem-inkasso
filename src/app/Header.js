import React from "react";
import styled from "styled-components";

const StyledRandom = styled.header`
  color: white;
  display: grid;
  font-size: 18px;
  padding: 15px;
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
