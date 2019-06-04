import React from "react";
import Card from "./Card";
import styled from "styled-components";

const StyledBackground = styled.main`
  border-radius: 25px 25px 0 0;
  background: #fbfbfb;
  height: 100%;
  display: grid;
`;

const StyledAmountBox = styled.section`
  background: #5495b7;
  box-shadow: 2px 4px 10px #979797;
  width: 220px;
  height: 200px;
  margin: 50px auto;
  border-radius: 15px;
`;

const StyledCreditIcon = styled.img`
  margin: 18px;
  width: 65px;
  height: 72px;
`;

const StyledResult = styled.div`
  display: flex;
  margin-left: 20px;
  height: 30px;
  width: 150px;
  font-weight: bold;
  font-size: 22px;
  color: white;
  padding-top: 10px;
`;

const StyledHeading = styled.p`
  color: white;
  opacity: 0.7;
  font-weight: bold;
  padding-left: 20px;
`;

export default function CardList({ cards, deleteCard, amountValue }) {
  return (
    <StyledBackground>
      <StyledAmountBox>
        <StyledCreditIcon src="./assets/CreditImg.svg" alt="Credit Icon" />
        <StyledResult>{amountValue}</StyledResult>
        <StyledHeading>Debt</StyledHeading>
      </StyledAmountBox>
      <section>
        {cards.map(card => (
          <Card key={card._id} {...card} deleteCard={() => deleteCard(card)} />
        ))}
      </section>
    </StyledBackground>
  );
}
