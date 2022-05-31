import React from "react";

function ResetButton({ matrix, handleMatrixColor, stackHandler }) {
  const onClickHandler = () => {
    matrix.forEach((ele, idx) => {
      handleMatrixColor({ idx, newColor: "#ffffff" });
    });
    stackHandler({ type: "clear", stack: "undo" });
    stackHandler({ type: "clear", stack: "redo" });
  };
  return (
    <div className="center">
      <button type="button" onClick={onClickHandler}>
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
