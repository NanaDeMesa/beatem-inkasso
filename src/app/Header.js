import React from "react";
import styled from "styled-components";

const GridHeader = styled.header`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

const StyledRandom = styled.div`
  padding: 15px;
  color: white;
  font-size: 18px;
`;

function Header() {
  return (
    <GridHeader>
      <StyledRandom>
        Tip:
        <br />
        Offer a fair comparison. It’s worth a try!
      </StyledRandom>
    </GridHeader>
  );
}

export default Header;
