import React, { useState } from "react";

const DEFAULT_COLOR = "#ffffff";

function Cell({ originalColor, index, selectedColor, onCellClickHandler }) {
  const [hoverColor, setHoverColor] = useState(DEFAULT_COLOR);

  const onClickHandler = () => {
    onCellClickHandler({ index, originalColor });
  };

  const onMouseEnterHandler = () => {
    setHoverColor(selectedColor);
  };

  const onMouseLeaveHandler = () => {
    setHoverColor(DEFAULT_COLOR);
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
