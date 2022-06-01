import { useState, useEffect } from "react";
const NUM_ROWS = 32,
  NUM_COLS = 32;
const DEFAULT_COLOR = "#FFFFFF";
export const useMatrix = () => {
  const [matrix, setMatrix] = useState(() => {
    if (localStorage.getItem("matrix"))
      return JSON.parse(localStorage.getItem("matrix"));
    return Array.from({ length: NUM_ROWS * NUM_COLS }, () => DEFAULT_COLOR);
  });

  const handleCellColorChange = ({ index, newColor }) => {
    setMatrix((prevState) => {
      const copy = [...prevState];
      copy[index] = newColor;
      return copy;
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
