import React from "react";
import FlashCard from "./FlashCard";
import { Button, Card, } from 'semantic-ui-react';

// const description = [
//   // toggled description will go here.
// ].join(' ')

const FlashCards = ({ flashCards, remove, update }) => (
flashCards.map( flashCard => (
  < FlashCard key={flashCard.id} {...flashCard} remove={remove} update={update}/>
  
))

)




export default FlashCards;