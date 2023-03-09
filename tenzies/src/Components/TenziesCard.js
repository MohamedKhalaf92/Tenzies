import React from "react";
import { useState, useEffect } from "react";

export const TenziesCard = ({ number, index, setSelectedCards, selectedCards, setNumberList, currentCard, setCurrentCard,updated }) => {
  const [highlight, setHighlight] = useState(false);


  const highlightClick = (index) => {
    console.log(index)
    if (!updated.length) {
      setSelectedCards([...updated, index])
      setHighlight((prev) => !prev);
      return
    }
    if (updated.includes(index)) {
      updated.splice(updated.indexOf(index), 1)
      setSelectedCards([...updated])
      setHighlight((prev) => !prev);
      console.log('condition met')
    } else {
      setSelectedCards([...updated, index])
      setHighlight((prev) => !prev);
      console.log('condition not met')
    }
  };

  return (
    <div
      className={highlight ? "Highlighted" : "TenziesNumbers"}
      onClick={() => highlightClick(index)}
    >
      {number}
    </div>
  );
};
