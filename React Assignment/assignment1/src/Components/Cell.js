import React, { useState } from "react";

function Cell({ backgroundColor, idx, handleMatrixColor, ColorSelected }) {
  const [highlighted, setHighlighted] = useState(false);
  const [hoverColor, sethoverColor] = useState("#FFFFFF");
  const onClickHandler = () => {
    if (!highlighted) setHighlighted((prevState) => !prevState);
    handleMatrixColor({ idx, newColor: ColorSelected });
  };
  const onMouseEnterHandler = () => {
    sethoverColor(ColorSelected);
  };
  const onMouseLeaveHandler = () => {
    sethoverColor("#FFFFFF");
  };

  return (
    <div
      className={`cell ${highlighted ? "highlight" : ""}`}
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
