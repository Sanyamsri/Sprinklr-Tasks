import React from "react";
import Button from "./../Button";

function RedoButton({ undoStack, handleCellColorChange, redoStack }) {
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
    <Button
      disabled={redoStack.length() === 0}
      onClickFunction={onClickUndoHandler}
    >
      Redo
    </Button>
  );
}

export default RedoButton;
