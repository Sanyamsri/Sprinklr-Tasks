import React from "react";
import Button from "../Button";

function UndoButton({ undoStackLength, onClickUndoHandler }) {
  return (
    <Button
      disabled={undoStackLength === 0}
      onClickFunction={onClickUndoHandler}
    >
      Undo
    </Button>
  );
}

export default UndoButton;
