import React from "react";
import styled from "styled-components";
import CardDelete from "./CardDelete";

const StyledDebt = styled.section`
  border-bottom: solid 1px #eeeeee;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  color: #090a0a;
  display: flex;
  margin: 0 auto;
  padding: 10px 0 5px 0;
  width: 350px;
`;

const StyledCreditor = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const StyledAmount = styled.div`
  display: flex;
  font-size: 20px;
  padding-left: 50px;
`;

const StyledDueDate = styled.div`
  align-items: flex-end;
  color: #a2a3a3;
  font-size: 18px;
`;

export default function Card({
  amountValue,
  creditorName,
  deleteCard,
  dueDateValue
}) {
  return (
    <StyledDebt>
      <StyledCreditor>{creditorName}</StyledCreditor>
      <StyledDueDate>since {dueDateValue}</StyledDueDate>
      <StyledAmount>{amountValue} €</StyledAmount>

      <CardDelete deleteCard={deleteCard} />
    </StyledDebt>
  );
}
