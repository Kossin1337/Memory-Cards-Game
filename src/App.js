import React, { useState, useEffect } from "react";
import "./App.css";

const cardImages = [
  { src: 1 },
  { src: 2 },
  { src: 3 },
  { src: 4 },
  { src: 5 },
  { src: 6 },
];

export const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  /* shuffle cards */
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
};
