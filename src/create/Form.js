import React from "react";
import styled from "styled-components";

const FormContainer = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

const FormGrid = styled.form`
  background: #fbfbfb;
  border-radius: 25px 25px 0 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const FormHeadline = styled.h1`
  margin: auto;
  color: white;
  font-size: 20px;
`;

const StyledWrapper = styled.div`
  border-bottom: solid 1px #eeeeee;
  width: 350px;
  display: grid;
  margin: 10px auto;
`;

const StyledInput = styled.input`
  border: none;
  color: #18171a;
  background: #fbfbfb;
  font-size: 18px;
  padding: 5px 0;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
  text-align: start;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  color: #fbfbfb;
  border: none;
  display: flex;
  background: #5495b7;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
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
              placeholder="(e.g. 04/20/2017)"
              type="text"
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
