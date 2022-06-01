import React from "react";
import Cell from "./Cell";

function Grid({
  ColorSelected,
  matrix,
  handleCellColorChange,
  undoStack,
  redoStack,
}) {
  return (
    <div className="grid-container">
      {matrix.map((value, idx) => (
        <Cell
          key={idx}
          backgroundColor={value}
          handleCellColorChange={handleCellColorChange}
          ColorSelected={ColorSelected}
          idx={idx}
          undoStack={undoStack}
          redoStack={redoStack}
        />
      ))}
    </div>
  );
}

export default Grid;
