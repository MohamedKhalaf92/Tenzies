import React from "react";
import { useState, useEffect } from "react";

export const TenziesCard = ({ number, index, setSelectedCards, selectedCards, setNumberList, currentCard, setCurrentCard }) => {
  const [highlight, setHighlight] = useState(false);

  const highlightClick = (index) => {
    if(!selectedCards.length){
          setSelectedCards([...selectedCards, index])
          setHighlight((prev) => !prev);
          return
    } 
      selectedCards.map((item) => {
        if (item === index) {
          setSelectedCards((prev)=> prev.splice(index,1))
        } else {
          setSelectedCards([...selectedCards, index])
          console.log(item)
          console.log(index)
          // setHighlight((prev) => !prev);
        }
      })
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
