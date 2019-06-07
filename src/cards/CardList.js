import React from "react";
import Card from "./Card";
import styled from "styled-components";

export const StyledBackground = styled.main`
  background: #fbfbfb;
  border-radius: 25px 25px 0 0;
  height: 100%;
  display: grid;
`;

const StyledAmountBox = styled.section`
  background: #5495b7;
  border-radius: 15px;
  box-shadow: 2px 4px 10px #979797;
  height: 200px;
  margin: 0 auto 35px auto;
  width: 220px;
`;

const StyledCreditIcon = styled.img`
  height: 72px;
  margin-top: 30px;
  margin-left: 25px;
  width: 80px;
`;

const StyledResult = styled.div`
  color: white;
  display: flex;
  font-size: 22px;
  font-weight: bold;
  height: 30px;
  margin: 0;
  padding-left: 30px;
  padding-top: 12px;
  width: 280px;
`;

const StyledHeading = styled.h3`
  color: #fbfbfb;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  opacity: 0.7;
  padding-left: 30px;
  padding-top: 8px;
`;

const StyledInputLabel = styled.label`
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 326px;
  height: 36px;
  background: #eeeeee;
  border-radius: 2em;
  margin-top: 35px;
  border: solid 1px #d3d3d3;
  font-size: 18px;
`;

const StyledButton = styled.img`
  width: 28px;
  height: 28px;
  position: relative;
  left: 310px;
  top: -34px;
`;

export default function CardList({ cards, deleteCard }) {
  function getTotal() {
    const totalInvoiceAmount = cards
      .map(card => parseFloat(card.amountValue.replace(/,/, ".")))
      .map(Number)
      .reduce((a, b) => a + b, 0)
      .toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });

    return totalInvoiceAmount;
  }

  return (
    <StyledBackground>
      <StyledInputLabel>
        <StyledInput
          type="text"
          placeholder="                             Search"
        />
      </StyledInputLabel>
      <StyledButton src="./assets/SearchButton.svg" />
      <StyledAmountBox>
        <StyledCreditIcon src="./assets/CreditImg.svg" alt="Credit Icon" />
        <StyledResult>{getTotal()} EUR</StyledResult>
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
