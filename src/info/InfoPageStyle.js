import styled from "styled-components";

export const StyledInfoMain = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

export const StyledCalcBox = styled.section`
  background: #5495b7;
  border-radius: 15px;
  display: flex;
  height: 77px;
  justify-content: center;
  margin: 0 auto;
  opacity: 0.7;
  width: 311px;
  text-align: center;
`;

export const StyledLabel = styled.label`
  color: white;
  font-size: 18px;
  padding: 9px;
`;

export const StyledCalcInput = styled.input`
  background: #5495b7;
  border: none;
  border-bottom: 3px solid;
  border-radius: 8px;
  color: white;
  display: flex;
  font-size: 22px;
  height: 35px;
  outline: none;
  padding-left: 4px;
  width: 200px;

  :focus {
    border: 3px solid #f1b763;
  }
`;

export const StyledBackground = styled.section`
  background: #fbfbfb;
  border-radius: 25px 25px 0 0;
`;

export const StyledResultHeading = styled.p`
  color: #a2a3a3;
  display: flex;
  font-weight: italic;
  font-size: 18px;
  padding: 30px;
`;

export const StyledResult = styled.div`
  color: #383939;
  display: flex;
  font-size: 22px;
  font-weight: bold;
  height: 77px;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  width: 311px;
`;

export const StyledDownArrow = styled.img`
  position: relative;
  top: 120px;
  right: 110px;
  width: 24px;
  height: 24px;
`;

export const StyledLegalInformation = styled.p`
  color: #a2a3a3;
  font-size: 18px;
  padding: 0 30px 0 30px;
`;

export const StyledQuestionMark = styled.img`
  padding-left: 28px;
`;
