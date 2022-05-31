import React, { useState } from "react";

function Cell({
  backgroundColor,
  idx,
  handleMatrixColor,
  ColorSelected,
  stackHandler,
}) {
  const [hoverColor, sethoverColor] = useState("#FFFFFF");

  const onClickHandler = () => {
    handleMatrixColor({ idx, newColor: ColorSelected });
    stackHandler(
      { type: "add", stack: "undo" },
      { idx, color1: backgroundColor, color2: ColorSelected }
    );
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
