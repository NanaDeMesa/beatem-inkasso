import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import Searchbar from "./Searchbar";

export const StyledBackground = styled.main`
  background: #fbfbfb;
  border-radius: 25px 25px 0 0;
  display: grid;
  overflow-y: scroll;
  height: calc(100vh - 170px);
`;

const StyledAmountBox = styled.section`
  background: #5495b7;
  border-radius: 15px;
  box-shadow: 2px 4px 10px #979797;
  height: 180px;
  margin: 0 auto 35px auto;
  width: 200px;
`;

const StyledCreditIcon = styled.img`
  height: 50px;
  margin: 30px 0 18px 18px;
  width: 58px;
`;

const StyledResult = styled.div`
  color: white;
  font-size: 22px;
  font-weight: bold;
  height: 30px;
  margin: 0;
  padding-left: 20px;
  width: 280px;
`;

const StyledHeading = styled.h3`
  color: #fbfbfb;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  opacity: 0.7;
  padding-left: 22px;
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
