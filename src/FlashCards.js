import React from "react";
import FlashCard from "./FlashCard";
import { Button, Card, } from 'semantic-ui-react';

// const description = [
//   // toggled description will go here.
// ].join(' ')

const FlashCards = ({ flashCards, remove, }) => (
flashCards.map( flashCard => (
  < FlashCard key={flashCard.id} {...flashCard} remove={remove}/>
  
))

)




export default FlashCards;