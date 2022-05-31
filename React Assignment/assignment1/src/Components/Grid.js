import React, { useState } from "react";
import Cell from "./Cell";

function Grid({ ColorSelected }) {
  const nRows = 6,
    nCols = 6;
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
    <div>
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
