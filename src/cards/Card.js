import React from "react";
import CardDelete from "./CardDelete";
import {
  StyledDebt,
  StyledCreditor,
  StyledAmount,
  StyledDueDate,
} from "./CardStyles";

export default function Card({
  amountValue,
  creditorName,
  deleteCard,
  dueDateValue
}) {
  return (
    <StyledDebt>
      <StyledCreditor>{creditorName}</StyledCreditor>
      <StyledAmount>{amountValue} €</StyledAmount>
      <StyledDueDate>since {dueDateValue}</StyledDueDate>
      <CardDelete deleteCard={deleteCard} />
    </StyledDebt>
  );
}
