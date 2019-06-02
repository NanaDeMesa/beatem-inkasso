import GlobalStyle from "./GlobalStyle";
import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  getCards,
  postCard,
  getFromLocal,
  setToLocal,
  patchCard
} from "../services";
import CreatePage from "../create/CreatePage";
import CardsPage from "../cards/CardsPage";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 80px auto 80px;
  position: absolute;
  height: 100vh;
  width: 100%;
`;

export default class App extends Component {
  state = {
    cards: getFromLocal("cards") || []
  };

  componentDidMount() {
    this.loadCards();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cards !== this.state.cards) {
      setToLocal("cards", this.state.cards);
    }
  }

  loadCards() {
    getCards()
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error));
  }

  createCard = (data, history) => {
    const { cards } = this.state;

    postCard(data)
      .then(newCard => {
        this.setState({ cards: [...cards, newCard] });
        history.push("/");
      })
      .catch(error => console.log(error));
  };

  updateCardInState = changedCard => {
    const { cards } = this.state;
    const index = cards.findIndex(card => card._id === changedCard._id);
    this.setState({
      cards: [...cards.slice(0, index), changedCard, ...cards.slice(index + 1)]
    });
  };

  handleToggleBookmark = card => {
    patchCard({ bookmarked: !card.bookmarked }, card._id)
      .then(this.updateCardInState)
      .catch(error => console.log(error));
  };

  render() {
    const { cards } = this.state;

    return (
      <Grid>
        <GlobalStyle />
        <Header />
        <Router>
          <Route
            exact
            path="/"
            render={() => (
              <CardsPage
                onToggleBookmark={this.handleToggleBookmark}
                cards={cards}
              />
            )}
          />
          <Route
            path="/add"
            render={({ history }) => (
              <CreatePage
                onFormSubmit={data => this.createCard(data, history)}
              />
            )}
          />
          <Footer />
        </Router>
      </Grid>
    );
  }
}
