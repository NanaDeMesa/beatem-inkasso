import React, { useState } from "react";
import Card from "./Card";
import Searchbar from "./Searchbar";
import {
  StyledBackground,
  StyledAmountBox,
  StyledCreditIcon,
  StyledResult, 
  StyledHeading} from "./CardStyles";

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
