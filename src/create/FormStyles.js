import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`;

export const FormGrid = styled.form`
  background: #fbfbfb;
  border-radius: 25px 25px 0 0;
  display: grid;
  grid-template-rows: 1fr;
  padding-top: 30px;
`;

export const FormHeadline = styled.h1`
  color: white;
  font-size: 20px;
  margin: auto;
`;

export const StyledWrapper = styled.div`
  border-bottom: solid 1px #eeeeee;
  display: grid;
  margin: 10px auto;
  width: 350px;
`;

export const StyledInput = styled.input`
  background: #fbfbfb;
  border: none;
  color: #18171a;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  padding: 5px 0;

  ::-webkit-datetime-edit-month-field {
    color: grey;
  }
  ::-webkit-datetime-edit-day-field {
    color: grey;
  }
  ::-webkit-datetime-edit-year-field {
    color: grey;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  text-align: start;
`;

export const StyledButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  align-items: center;
  background: #5495b7;
  border: none;
  border-radius: 50%;
  color: #fbfbfb;
  display: block;
  font-size: 40px;
  height: 50px;
  justify-content: center;
  max-width: 50px;
  min-width: 0;
  padding: 0;
  user-select: none;
  width: 50px;

  ::-webkit-appearance {
    display: none;
  }
`;
