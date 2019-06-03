import React from "react";
import CardList from "./CardList";

export default function CardsPage({ cards, deleteCard }) {
  return (
    <div>
      <CardList cards={cards} deleteCard={deleteCard} />
    </div>
  );
}
