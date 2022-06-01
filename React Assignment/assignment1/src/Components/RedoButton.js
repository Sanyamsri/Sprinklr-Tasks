import React from "react";

function Button({ redoStack, handleCellColorChange, undoStack }) {
  const onClickHandler = () => {
    const lastOperation = redoStack.top();
    handleCellColorChange({
      index: lastOperation.index,
      newColor: lastOperation.color2,
    });
    undoStack.push(lastOperation);
    redoStack.pop();
  };
  return (
    <button disabled={redoStack.length() === 0} onClick={onClickHandler}>
      Redo
    </button>
  );
}

export default Button;
