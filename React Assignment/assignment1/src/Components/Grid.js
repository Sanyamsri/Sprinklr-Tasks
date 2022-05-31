import React, { useState } from "react";
import Cell from "./Cell";

function Grid({ ColorSelected }) {
  const nRows = 32,
    nCols = 32;
  const [matrix, setMatrix] = useState(
    Array.from({ length: nRows * nCols }, () => "#FFFFFF")
  );
  const handleMatrixColor = ({ idx, newColor }) => {
    setMatrix((prevState) => {
      const copy = [...prevState];
      copy[idx] = newColor;
      return copy;
    });
  };
  return (
    <div className="grid-container">
      {matrix.map((value, idx) => (
        <Cell
          key={idx}
          backgroundColor={value}
          handleMatrixColor={handleMatrixColor}
          ColorSelected={ColorSelected}
          idx={idx}
        />
      ))}
    </div>
  );
}

export default Grid;
