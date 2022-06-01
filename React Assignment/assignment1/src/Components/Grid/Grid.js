import React from "react";
import Cell from "./Cell";

function Grid({ selectedColor, matrix, onCellClickHandler }) {
  return (
    <div className="grid-container">
      {matrix.map((initialColor, index) => (
        <Cell
          key={index}
          originalColor={initialColor}
          selectedColor={selectedColor}
          index={index}
          onCellClickHandler={onCellClickHandler}
        />
      ))}
    </div>
  );
}

export default Grid;
