import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import Searchbar from "./Searchbar";

export const StyledBackground = styled.main`
  background: #fbfbfb;
  border-radius: 25px 25px 0 0;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
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

export default function CardList({ cards, deleteCard }) {
  const [searchInput, setSearchInput] = useState("");

  function filterCards() {
    return cards.filter(card =>
      card.creditorName.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  function updateSearch(searchQuery) {
    setSearchInput(searchQuery);
  }

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
      <Searchbar onInput={updateSearch} value={searchInput} />
      <StyledAmountBox>
        <StyledCreditIcon src="./assets/CreditImg.svg" alt="Credit Icon" />
        <StyledResult>{getTotal()} EUR</StyledResult>
        <StyledHeading>Debt</StyledHeading>
      </StyledAmountBox>

      <section>
        {filterCards().map(card => (
          <Card key={card._id} {...card} deleteCard={() => deleteCard(card)} />
        ))}
      </section>
    </StyledBackground>
  );
}

/* {filterCards.map(card => (
  <Card key={card._id} {...card} deleteCard={() => deleteCard(card)} />
  ))}*/
