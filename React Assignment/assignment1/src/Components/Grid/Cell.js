import React, { useState } from "react";

const DEFAULT_COLOR = "#ffffff";

function Cell({
  originalColor,
  index,
  handleCellColorChange,
  selectedColor,
  undoStack,
  redoStack,
}) {
  const [hoverColor, setHoverColor] = useState(DEFAULT_COLOR);

  const onClickHandler = () => {
    handleCellColorChange({ index, newColor: selectedColor });
    undoStack.push({ index, color1: originalColor, color2: selectedColor });
    redoStack.clear();
  };

  const onMouseEnterHandler = () => {
    setHoverColor(selectedColor);
  };

  const onMouseLeaveHandler = () => {
    setHoverColor("#ffffff");
  };
  return (
    <div
      className="cell"
      onClick={onClickHandler}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      style={{
        backgroundColor: `${
          hoverColor !== DEFAULT_COLOR ? hoverColor : originalColor
        }`,
      }}
    ></div>
  );
}

export default Cell;
