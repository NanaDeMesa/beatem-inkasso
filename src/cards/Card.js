import React from "react";
import styled from "styled-components";
import CardDelete from "./CardDelete";

const StyledDebt = styled.section`
  border-bottom: solid 1px #eeeeee;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  color: #090a0a;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  padding: 10px 0 5px 0;
  width: 350px;
`;

const StyledCreditor = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
`;

const StyledAmount = styled.div`
  display: flex;
  font-size: 20px;
  padding-left: 50px;
  padding-top: 10px;
`;

const StyledDueDate = styled.div`
  color: #a2a3a3;
  font-size: 18px;
  padding-top: 2px;
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
      <StyledAmount>{amountValue} €</StyledAmount>
      <StyledDueDate>since {dueDateValue}</StyledDueDate>
      <CardDelete deleteCard={deleteCard} />
    </StyledDebt>
  );
}
