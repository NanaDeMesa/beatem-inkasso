import React from "react";
import styled from "styled-components";
import CardDelete from "./CardDelete";

const StyledDebt = styled.section`
  border-bottom: solid 1px #eeeeee;
  color: #090a0a;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0 auto;
  padding: 10px 0 5px 0;
  width: 350px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const StyledCreditor = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  justify-content: flex-start;
`;

const StyledAmount = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: flex-end;
`;

const StyledDueDate = styled.div`
  color: #a2a3a3;
  display: flex;
  font-size: 18px;
  justify-content: flex-start;
`;

export default function Card({
  creditorName,
  amountValue,
  dueDateValue,
  deleteCard
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
