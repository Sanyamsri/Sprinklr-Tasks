import React from "react";
import ActionButton from "./ActionButton";

function Button({ undoStack, handleCellColorChange, redoStack }) {
  const onClickUndoHandler = () => {
    const lastOperation = redoStack.top();
    handleCellColorChange({
      index: lastOperation.index,
      newColor: lastOperation.color2,
    });
    undoStack.push(lastOperation);
    redoStack.pop();
  };
  return (
    <ActionButton
      disabled={undoStack.length() === 0}
      onClickFunction={onClickUndoHandler}
    >
      Redo
    </ActionButton>
  );
}

export default Button;
