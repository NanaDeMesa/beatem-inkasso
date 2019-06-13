import React from "react";
import {
  StyledInfoMain,
  StyledCalcBox,
  StyledLabel,
  StyledCalcInput,
  StyledBackground,
  StyledResultHeading,
  StyledResult,
  StyledLegalInformation,
  StyledQuestionMark,
} from "./InfoPageStyle";


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
