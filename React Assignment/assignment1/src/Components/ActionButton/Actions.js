import React from "react";
import UndoButton from "./UndoButton";
import RedoButton from "./RedoButton";
function Actions({
  undoStackLength,
  redoStackLength,
  onClickUndoHandler,
  onClickRedoHandler,
}) {
  return (
    <div>
      <UndoButton
        undoStackLength={undoStackLength}
        onClickUndoHandler={onClickUndoHandler}
      />
      <RedoButton
        redoStackLength={redoStackLength}
        onClickRedoHandler={onClickRedoHandler}
      />
    </div>
  );
}

export default Actions;
