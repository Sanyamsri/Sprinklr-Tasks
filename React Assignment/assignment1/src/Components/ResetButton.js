import React from "react";

function ResetButton({ clearUndoStack, clearRedoStack, clearMatrix }) {
  const onClickHandler = () => {
    clearMatrix();
    clearUndoStack();
    clearRedoStack();
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
