import React from "react";
import Button from "../Button";

function UndoButton({ undoStack, handleCellColorChange, redoStack }) {
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
    <Button
      disabled={undoStack.length() === 0}
      onClickFunction={onClickUndoHandler}
    >
      Undo
    </Button>
  );
}

export default UndoButton;
