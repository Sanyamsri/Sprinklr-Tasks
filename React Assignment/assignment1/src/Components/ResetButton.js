import React from "react";

function ResetButton({ matrix, handleCellColorChange, undoStack, redoStack }) {
  const onClickHandler = () => {
    matrix.forEach((ele, idx) => {
      handleCellColorChange({ idx, newColor: "#ffffff" });
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
