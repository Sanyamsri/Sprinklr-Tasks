import React, { useState } from "react";

function Cell({
  backgroundColor,
  index,
  handleCellColorChange,
  ColorSelected,
  undoStack,
  redoStack,
}) {
  const [hoverColor, sethoverColor] = useState("#FFFFFF");

  const onClickHandler = () => {
    handleCellColorChange({ index, newColor: ColorSelected });
    undoStack.push({ index, color1: backgroundColor, color2: ColorSelected });
    redoStack.clear();
  };

  const onMouseEnterHandler = () => {
    sethoverColor(ColorSelected);
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
