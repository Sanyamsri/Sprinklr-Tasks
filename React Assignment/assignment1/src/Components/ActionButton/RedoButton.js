import React from "react";
import Button from "./../Button";

function RedoButton({ redoStackLength, onClickRedoHandler }) {
  return (
    <Button
      disabled={redoStackLength === 0}
      onClickFunction={onClickRedoHandler}
    >
      Redo
    </Button>
  );
}

export default RedoButton;
