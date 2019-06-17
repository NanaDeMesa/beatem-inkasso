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
            ? "0,00 €"
            : value < 501
            ? "58,50 €"
            : value < 1001
            ? "104,00 €"
            : value < 1501
            ? "149,50 €"
            : value < 2001
            ? "195,00 €"
            : value < 3001
            ? "261,30 €"
            : value < 4001
            ? "327,60 €"
            : value < 5001
            ? "393,90 €"
            : value < 6001
            ? "460,20 €"
            : value < 7001
            ? "526,50 €"
            : value < 8001
            ? "592,80 €"
            : value < 9001
            ? "695,10 €"
            : value < 10001
            ? "725,40 €"
            : value < 13001
            ? "785,20 €"
            : value < 16001
            ? "845,00 €"
            : value < 19001
            ? "904,80 €"
            : value < 22001
            ? "964,60 €"
            : value < 25001
            ? "1024,40 €"
            : value < 30001
            ? "1121,90 €"
            : value < 35001
            ? "1219,40 €"
            : value < 40001
            ? "1316,90 €"
            : value < 45001
            ? "1414,40 €"
            : value < 50001
            ? "1511,90 €"
            : value < 65001
            ? "1622,40 €"
            : value < 80001
            ? "1732,90 €"
            : value < 95001
            ? "1843,40 €"
            : value < 110001
            ? "1953,90 €"
            : value < 125001
            ? "2064,40 €"
            : value < 140001
            ? "2174,90 €"
            : value < 155001
            ? "2285,40 €"
            : value < 170001
            ? "2395,90 €"
            : value < 185001
            ? "2506,40 €"
            : value < 200001
            ? "2616,90 €"
            : value < 230001
            ? "2772,90 €"
            : value < 260001
            ? "2928,90 €"
            : value < 290001
            ? "3084,90 €"
            : value < 320001
            ? "3240,90 €"
            : value < 350001
            ? "3396,90 €"
            : value < 380001
            ? "3552,90 €"
            : value < 410001
            ? "3708,90 €"
            : value < 440001
            ? "3864,90 €"
            : value < 470001
            ? "4020,90 €"
            : value < 500001
            ? "4176,90 €"
            : value < 550001
            ? "4371,90 €"
            : value < 600001
            ? "4566,90 €"
            : value < 650001
            ? "4761,90 €"
            : value < 700001
            ? "4956,90 €"
            : value < 750001
            ? "5151,90 €"
            : value < 800001
            ? "5346,90 €"
            : value < 850001
            ? "5541,90 €"
            : value < 900001
            ? "5736,90 €"
            : value < 950001
            ? "5931,90 €"
            : value < 1000001
            ? "6126,90 €"
            : value > 1000001
            ? "6126,90 €"
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
