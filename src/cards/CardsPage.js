import React from "react";
import CardList from "./CardList";

export default function CardsPage({ cards }) {
  return (
    <div>
      <CardList cards={cards} />
    </div>
  );
}
