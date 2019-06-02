import React from "react";
import Card from "./Card";
import styled from "styled-components";

const StyledBackground = styled.main`
  border-radius: 25px 25px 0 0;
  background: #fbfbfb;
  height: 100%;
`;

export default function CardList({ cards }) {
  return (
    <StyledBackground>
      <section className="card-list">
        {cards.map(card => (
          <Card key={card._id} {...card} />
        ))}
      </section>
    </StyledBackground>
  );
}
