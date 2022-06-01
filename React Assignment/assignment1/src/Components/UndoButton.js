import React from "react";

function Button({ undoStack, handleCellColorChange, redoStack }) {
  const onClickHandler = () => {
    const lastOperation = undoStack.top();
    handleCellColorChange({
      idx: lastOperation.idx,
      newColor: lastOperation.color1,
    });
    redoStack.push(lastOperation);
    undoStack.pop();
  };
  return (
    <button disabled={undoStack.length() === 0} onClick={onClickHandler}>
      undo
    </button>
  );
}

export default Button;
