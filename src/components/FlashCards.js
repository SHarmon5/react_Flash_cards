import React from "react";
import FlashCard from './FlashCard';
import CardForm from "./CardForm";
import { Container, Header, } from 'semantic-ui-react';




class FlashCards extends React.Component {
  state = { 
    flashCards: [
      { id: 1, title: "One", description: "one's info", },
      { id: 2, title: "Two", description: "two's info", },
      { id: 3, title: "Three", description: "Three's info", },
    ],
    showDesc: false,
  };



  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addCard = (cardData) => {
    const { flashCards, } = this.state;
    const flashCard = { id: this.getId(), ...cardData, };
    this.setState({ flashCards: [flashCard, ...flashCards], });
  };

  removeCard = (id) => {
    const flashCards = this.state.flashCards.filter( flashCard => {
      if (flashCard.id !== id)
        return flashCard
    });
    this.setState({ flashCards: [...flashCards], });
  };

  editCard = (cardData) => {
    const flashCards = this.state.flashCards.map( post => {
      if (flashCard.id === cardData.id)
        return cardData;
      return flashCard
    });
    this.setState({ flashCards, });
  }

  renderCards = () => {
    return this.state.flashCards.map( flashCard => (
      <FlashCard
      key={flashCard.id}
      {...flashCard}
      remove={this.removeCard}
      edit={this.editCard}
      />
    ))
  }

  // const FlashCards = ({ flashCards, remove, }) => (
  //   flashCards.map( flashCard => (
  //     < FlashCard key={flashCard.id} {...flashCard} remove={remove}/>
      
  //   ))
    
  //   )

  render() {
    return (
      <Container style={{ paddingTop: "25px"}}>
        <Header as="h1" textAlign="center">Flash Cards</Header>
        <CardForm add={this.addCard} />
        <hr />
        <br />
        { this.renderCards() }
      </Container>
    );
  }
}


export default FlashCards;