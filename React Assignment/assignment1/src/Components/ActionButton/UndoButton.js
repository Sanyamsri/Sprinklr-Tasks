import React from "react";
import ActionButton from "./ActionButton";

function Button({ undoStack, handleCellColorChange, redoStack }) {
  const onClickUndoHandler = () => {
    const lastOperation = undoStack.top();
    handleCellColorChange({
      index: lastOperation.index,
      newColor: lastOperation.color1,
    });
    redoStack.push(lastOperation);
    undoStack.pop();
  };
  return (
    <ActionButton
      disabled={undoStack.length() === 0}
      onClickFunction={onClickUndoHandler}
    >
      Undo
    </ActionButton>
  );
}

export default Button;
