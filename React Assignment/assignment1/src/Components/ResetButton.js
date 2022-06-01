import React from "react";

function ResetButton({ matrix, handleCellColorChange, undoStack, redoStack }) {
  const onClickHandler = () => {
    matrix.forEach((element, index) => {
      handleCellColorChange({ index, newColor: "#ffffff" });
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
