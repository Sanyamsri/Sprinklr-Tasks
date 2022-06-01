import { useState, useEffect } from "react";
export const useMatrix = () => {
  const nRows = 32,
    nCols = 32;
  const [matrix, setMatrix] = useState(() => {
    if (localStorage.getItem("matrix"))
      return JSON.parse(localStorage.getItem("matrix"));
    return Array.from({ length: nRows * nCols }, () => "#FFFFFF");
  });

  const handleCellColorChange = ({ idx, newColor }) => {
    setMatrix((prevState) => {
      const copy = [...prevState];
      copy[idx] = newColor;
      return copy;
    });
  };

  useEffect(() => {
    localStorage.setItem("matrix", JSON.stringify(matrix));
  }, [matrix]);

  return {
    matrix,
    handleCellColorChange,
  };
};
