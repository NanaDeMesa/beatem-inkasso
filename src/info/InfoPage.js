import React from "react";
import styled from "styled-components";

const StyledInfoMain = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  height: ;
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

const StyledLabel = styled.label`
  color: white;
  font-size: 18px;
  margin: 9px;
  text-align: center;
`;

const StyledCalcInput = styled.input`
  display: flex;
  width: 200px;
  height: 35px;
  background: #5495b7;
  border: none;
  font-size: 22px;
  color: white;
  outline: none;
  padding-left: 4px;
  border-radius: 8px;
  border-bottom: 3px solid;

  :focus {
    border: 3px solid #F1B763;
  }
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

const StyledQuestionMark = styled.img`
padding-left: 28px;
`;

export default function InfoPage() {
  /*{ onFormSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onFormSubmit({
      result: form.result.value
    });
  }*/

  return (
    <StyledInfoMain>
      <StyledCalcBox>
        <StyledLabel>
          Principal Cost:
          <StyledCalcInput type="number" name="calcInput" placholder="Type here..." required />
        </StyledLabel>
      </StyledCalcBox>
      <StyledBackground>
        <StyledResultHeading>Allowed debt collection cost:</StyledResultHeading>
        <StyledResult>€</StyledResult>
        <StyledQuestionMark
          src="/assets/QuestionMark.svg"
          alt="note question mark"
        />
        <StyledLegalInformation>
          The debt collection cost depends on the RVG (Rechtsanwaltsvergütungsgesetz). All statements without guarantee.
        </StyledLegalInformation>
      </StyledBackground>
    </StyledInfoMain>
  );
}
