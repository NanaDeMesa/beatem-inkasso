import styled from "styled-components";

export const StyledInfoMain = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

export const StyledCalcBox = styled.section`
  background: #5495b7;
  width: 311px;
  height: 77px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-radius: 15px;
  opacity: 0.7;
`;

export const StyledLabel = styled.label`
  color: white;
  font-size: 18px;
  margin: 9px;
  text-align: center;
`;

export const StyledCalcInput = styled.input`
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

export const StyledBackground = styled.section`
  background: #fbfbfb;
  border-radius: 25px 25px 0 0;
`;

export const StyledResultHeading = styled.p`
  color: #a2a3a3;
  font-weight: italic;
  font-size: 18px;
  display: flex;
  padding: 30px;
`;

export const StyledResult = styled.div`
  width: 311px;
  height: 77px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: #383939;
  font-size: 22px;
  font-weight: bold;
`;

export const StyledLegalInformation = styled.p`
  color: #a2a3a3;
  padding: 0 30px 0 30px;
  font-size: 18px; 
`;

export const StyledQuestionMark = styled.img`
padding-left: 28px;
`;

