import React from "react";

function ResetButton({ undoStack, redoStack, clearMatrix }) {
  const onClickHandler = () => {
    clearMatrix();
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
