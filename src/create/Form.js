import React from "react";
import styled from "styled-components";

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`;

const FormGrid = styled.form`
  background: #fbfbfb;
  border-radius: 25px 25px 0 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const FormHeadline = styled.h1`
  color: white;
  font-size: 20px;
  margin: auto;
`;

const StyledWrapper = styled.div`
  border-bottom: solid 1px #eeeeee;
  display: grid;
  margin: 10px auto;
  width: 350px;
`;

const StyledInput = styled.input`
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

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  text-align: start;
`;

const StyledButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  align-items: center;
  background: #5495b7;
  border: none;
  border-radius: 50%;
  color: #fbfbfb;
  display: flex;
  font-size: 40px;
  height: 50px;
  justify-content: center;
  padding-bottom: 25;
  width: 50px;
`;

export default function Form({ onFormSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onFormSubmit({
      creditorName: form.creditorName.value,
      amountValue: form.amountValue.value,
      dueDateValue: form.dueDateValue.value
    });
  }

  return (
    <FormContainer>
      <FormHeadline>Add new invoice:</FormHeadline>
      <FormGrid className="form" onSubmit={handleSubmit}>
        <StyledWrapper>
          <StyledLabel>
            Creditor:
            <StyledInput
              name="creditorName"
              placeholder="(e.g. Bank)"
              type="text"
              required
            />
          </StyledLabel>
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            Amount:
            <StyledInput
              name="amountValue"
              placeholder="(e.g. 100,00 €)"
              type="text"
              required
            />
          </StyledLabel>
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            Due Date:
            <StyledInput
              name="dueDateValue"
              placeholder="(e.g. 10.04.2017)"
              type="date"
            />
          </StyledLabel>
        </StyledWrapper>
        <StyledButtonContainer>
          <StyledButton>+</StyledButton>
        </StyledButtonContainer>
      </FormGrid>
    </FormContainer>
  );
}
