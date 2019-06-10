import React from "react";
import styled from "styled-components";

const StyledInfoMain = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

const StyledCalcBox = styled.section`
  background: #5495b7;
  width: 311px;
  height: 77px;
  display: flex;
`;

const StyledCalcInput = styled.input`
  width: 150px;
  height: 35px;
`;

const StyledBackground = styled.section`
  background: white;
  border-radius: 25px 25px 0 0;
`;

function InfoPage() {
  return (
    <StyledInfoMain>
      <StyledCalcBox>
        <StyledCalcInput placholder="" />
      </StyledCalcBox>
      <StyledBackground />
    </StyledInfoMain>
  );
}

export default InfoPage;
