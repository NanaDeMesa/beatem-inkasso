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
  justify-content: center;
  margin: 0 auto;
  border-radius: 15px;
  opacity: 0.7;
`;

const StyledHeading = styled.p`
  color: white;
  font-size: 18px;
  margin: 9px;
  text-align: center;
`;

const StyledCalcInput = styled.input`
  display: flex;
  width: 150px;
  height: 35px;
  background: #5495b7;
  border: none;
  font-size: 22px;
  color: white;
`;

const StyledBackground = styled.section`
  background: #fbfbfb;
  border-radius: 25px 25px 0 0;
`;

const StyledResultHeading = styled.p`
  color: #a2a3a3;
  font-weight: italic;
  font-size: 18px;
  display: flex;
  padding: 30px;
`;

const StyledResult = styled.div`
  width: 311px;
  height: 77px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: #383939;
  font-size: 22px;
  font-weight: bold;
`;

const StyledLegalInformation = styled.p`
  color: #a2a3a3;
  padding: 0 30px 0 30px;
  font-size: 18px;
`;

const StyledQuestionMark = styled.img``;

function InfoPage() {
  return (
    <StyledInfoMain>
      <StyledCalcBox>
        <StyledHeading>
          Principal Cost:
          <StyledCalcInput type="text" placholder="Type here..." />
        </StyledHeading>
      </StyledCalcBox>
      <StyledBackground>
        <StyledResultHeading>Allowed debt collection cost:</StyledResultHeading>
        <StyledResult>0,00 €</StyledResult>
        <StyledQuestionMark
          src="/assets/QuestionMark.svg"
          alt="note question mark"
        />
        <StyledLegalInformation>
          The debt collection cost depends on the RVG (Rechtsanwaltsvergütungs-
          gesetz). All statements without guarantee.
        </StyledLegalInformation>
      </StyledBackground>
    </StyledInfoMain>
  );
}

export default InfoPage;
