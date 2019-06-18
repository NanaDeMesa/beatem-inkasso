import React from "react";
import {
  FormContainer,
  FormGrid,
  FormHeadline,
  StyledWrapper,
  StyledInput,
  StyledLabel,
  StyledButtonContainer,
  StyledButton
} from "./FormStyles";

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
