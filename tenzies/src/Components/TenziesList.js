import React from "react";
import { useState } from "react";
import { TenziesCard } from "./TenziesCard";
import { useEffect } from "react";

export const TenziesList = () => {
  const [test, setTest] = useState(0);
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

  const handleClick = () => {
    setTest((prev) => prev + 1);
  };
  console.log(numberList);
  console.log(test);
  return (
    <div className="TenziesContainer">
      <h1>Tenzies</h1>
      <h3>Roll Dice</h3>
      <div className="TenziesCard-container">
        {numberList.map((number) => {
          return <TenziesCard number={number} />;
        })}
      </div>
      <button onClick={handleClick}>Roll Dice</button>
    </div>
  );
};
