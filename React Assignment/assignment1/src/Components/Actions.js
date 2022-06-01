import React from "react";
import UndoButton from "./UndoButton";
import RedoButton from "./RedoButton";
function Actions({ undoStack, redoStack, handleCellColorChange }) {
  return (
    <div>
      <UndoButton
        undoStack={undoStack}
        handleCellColorChange={handleCellColorChange}
        redoStack={redoStack}
      >
        undo
      </UndoButton>
      <RedoButton
        redoStack={redoStack}
        handleCellColorChange={handleCellColorChange}
        undoStack={undoStack}
      >
        undo
      </RedoButton>
    </div>
  );
}

export default Actions;
