import React, { Component } from 'react';
import FlashCards from "./FlashCards";
import CardForm from "./CardForm";
import './App.css';
import { Container, Header, } from "semantic-ui-react"; 

class App extends Component {
  state = { 
    flashCards: [
      { id: 1, title: "One", description: "one's info", },
      { id: 2, title: "Two", description: "two's info", },
      { id: 3, title: "Three", description: "Three's info", },
    ],
  };



  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addCard = (cardData) => {
    let flashCard = { id: this.getId(), ...cardData, };
    this.setState({ flashCards: [flashCard, ...this.state.flashCards], });
  };

  removeCard = (id) => {
    const flashCards = this.state.flashCards.filter( flashCard => {
      if (flashCard.id !== id)
        return flashCard
    });
    this.setState({ flashCards: [...flashCards], });
  };

  editCard = (id) => {
    const flashCards = this.state.flashCards;
    const newCards = flashCards.map((flashCard, i) => {
      if (i !== id)
        return flashCard
    });
    this.setState({ flashCards: newCards });
  }


  render() {
    return (
      <Container style={{ paddingTop: "25px"}}>
        <Header as="h1" textAlign="center">Flash Cards</Header>
        <CardForm add={this.addCard} />
        <hr />
        <br />
        <FlashCards flashCards={this.state.flashCards} remove={this.removeCard} />
      </Container>
    );
  }
}

export default App;
