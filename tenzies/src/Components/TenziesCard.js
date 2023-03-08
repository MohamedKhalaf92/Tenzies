import React from "react";
import { useState, useEffect } from "react";

export const TenziesCard = ({ number }) => {
  const [highlight, setHighlight] = useState(false);

  const highlightClick = () => {
    setHighlight((prev) => !prev);
  };

  return (
    <div
      className={highlight ? "Highlighted" : "TenziesNumbers"}
      onClick={highlightClick}
    >
      {number}
    </div>
  );
};
