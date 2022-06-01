import React, { useState } from "react";

function Cell({
  backgroundColor,
  index,
  handleCellColorChange,
  selectedColor,
  undoStack,
  redoStack,
}) {
  const [hoverColor, sethoverColor] = useState("#FFFFFF");

  const onClickHandler = () => {
    handleCellColorChange({ index, newColor: selectedColor });
    undoStack.push({ index, color1: backgroundColor, color2: selectedColor });
    redoStack.clear();
  };

  const onMouseEnterHandler = () => {
    sethoverColor(selectedColor);
  };

  const onMouseLeaveHandler = () => {
    sethoverColor("#FFFFFF");
  };

  return (
    <div
      className="cell"
      onClick={onClickHandler}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      style={{
        backgroundColor: `${
          hoverColor !== "#FFFFFF" ? hoverColor : backgroundColor
        }`,
      }}
    ></div>
  );
}

export default Cell;
