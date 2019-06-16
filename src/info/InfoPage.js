import React, { useState } from "react";
import {
  StyledInfoMain,
  StyledCalcBox,
  StyledLabel,
  StyledCalcInput,
  StyledBackground,
  StyledResultHeading,
  StyledResult,
  StyledLegalInformation,
  StyledQuestionMark
} from "./InfoPageStyle";

export default function InfoPage() {
  const inputState = useState("");
  const [value, setValue] = inputState;

  return (
    <StyledInfoMain>
      <StyledCalcBox>
        <StyledLabel>
          Principal Cost:
          <StyledCalcInput
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
            type="number"
            name="calcInput"
            placholder="Type here..."
            required
          />
        </StyledLabel>
      </StyledCalcBox>
      <StyledBackground>
        <StyledResultHeading>Allowed debt collection cost:</StyledResultHeading>
        <StyledResult>
          {value === ""
            ? "Type principal cost above."
            : value < 500
            ? "58,50 €"
            : value < 1000
            ? "104,00 €"
            : value < 1500
            ? "149,50 €"
            : value < 2000
            ? "195,00 €"
            : value < 3000
            ? "261,30 €"
            : value < 4000
            ? "327,60 €"
            : value > 4000
            ? "393,90 €"
            : ""}
        </StyledResult>
        <StyledQuestionMark
          src="/assets/QuestionMark.svg"
          alt="note question mark"
        />
        <StyledLegalInformation>
          The debt collection cost depends on the RVG
          (Rechtsanwaltsvergütungsgesetz). All statements without guarantee.
        </StyledLegalInformation>
      </StyledBackground>
    </StyledInfoMain>
  );
}
