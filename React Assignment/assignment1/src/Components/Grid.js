import React from "react";
import Cell from "./Cell";

function Grid({
  ColorSelected,
  matrix,
  handleMatrixColor,
  stackHandler,
  undoStack,
}) {
  return (
    <div className="grid-container">
      {matrix.map((value, idx) => (
        <Cell
          key={idx}
          backgroundColor={value}
          handleMatrixColor={handleMatrixColor}
          ColorSelected={ColorSelected}
          idx={idx}
          stackHandler={stackHandler}
          undoStack={undoStack}
        />
      ))}
    </div>
  );
}

export default Grid;
