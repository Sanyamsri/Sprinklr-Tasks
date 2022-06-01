import { useState, useEffect } from "react";

const NUM_ROWS = 32,
  NUM_COLS = 32;
const DEFAULT_COLOR = "#ffffff";

export const useMatrix = () => {
  const [matrix, setMatrix] = useState(() => {
    if (localStorage.getItem("matrix"))
      return JSON.parse(localStorage.getItem("matrix"));
    return Array.from({ length: NUM_ROWS * NUM_COLS }, () => DEFAULT_COLOR);
  });

  const handleCellColorChange = ({ index, newColor }) => {
    setMatrix((prevState) => {
      const newState = [...prevState];
      newState[index] = newColor;
      return newState;
    });
  };

  const clearMatrix = () => {
    setMatrix(() => {
      return Array.from({ length: NUM_ROWS * NUM_COLS }, () => DEFAULT_COLOR);
    });
  };

  useEffect(() => {
    localStorage.setItem("matrix", JSON.stringify(matrix));
  }, [matrix]);

  return {
    matrix,
    handleCellColorChange,
    clearMatrix,
  };
};
