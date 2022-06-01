import React from "react";

function ResetButton({ matrix, handleMatrixColor, undoStack, redoStack }) {
  const onClickHandler = () => {
    matrix.forEach((ele, idx) => {
      handleMatrixColor({ idx, newColor: "#ffffff" });
    });
    undoStack.clear();
    redoStack.clear();
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
