import GlobalStyle from "./GlobalStyle";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  postCard,
  getFromLocal,
  setToLocal,
  findIndexOfCard
} from "../services";
import CreatePage from "../create/CreatePage";
import CardsPage from "../cards/CardsPage";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 90px auto 80px;
  height: 100vh;
  position: absolute;
  width: 100%;
`;

export default function App() {
  const [cards, setCards] = useState(getFromLocal("cards") || []);

  useEffect(() => {
    setToLocal("cards", cards);
  }, [cards]);

  function deleteCard(card) {
    const index = findIndexOfCard(card, cards);
    const newCards = [...cards.slice(0, index), ...cards.slice(index + 1)];
    setCards(newCards);
  }

  const createCard = (data, history) => {
    postCard(data)
      .then(newCard => {
        setCards([...cards, newCard]);
        history.push("/");
      })
      .catch(error => console.log(error));
  };

  const updateCardInState = changedCard => {
    const index = cards.findIndex(card => card._id === changedCard._id);
    setCards([
      ...cards.slice(0, index),
      changedCard,
      ...cards.slice(index + 1)
    ]);
  };

  return (
    <Grid>
      <GlobalStyle />
      <Header />
      <Router>
        <Route
          exact
          path="/"
          render={() => <CardsPage cards={cards} deleteCard={deleteCard} />}
        />
        <Route
          path="/add"
          render={({ history }) => (
            <CreatePage onFormSubmit={data => createCard(data, history)} />
          )}
        />
        <Footer />
      </Router>
    </Grid>
  );
}
