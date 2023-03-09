import React from "react";
import { useState } from "react";
import { TenziesCard } from "./TenziesCard";
import { useEffect } from "react";

export const TenziesList = () => {
  const [test, setTest] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentCard,setCurrentCard] = useState()
  const [numberList, setNumberList] = useState([
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
    Math.floor(Math.random() * 6 + 1),
  ]);
  let updated = [...selectedCards]
  const handleClick = () => {
    setNumberList([
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1),
    ]);
    console.log(numberList);
  };
  console.log(numberList);
  console.log(selectedCards);
  console.log(updated);
  return (
    <div className="TenziesContainer">
      <h1>Tenzies</h1>
      <h3>Roll Dice</h3>
      <div className="TenziesCard-container">
        {numberList.map((number,index) => {
          return <TenziesCard number={number} selectedCards={selectedCards} setSelectedCards={setSelectedCards} index={index} currentCard={currentCard} setCurrentCard={setCurrentCard} updated={updated}/>;
        })}
      </div>
      <button onClick={handleClick}>Roll Dice</button>
    </div>
  );
};
