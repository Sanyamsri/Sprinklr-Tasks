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
      />
      <RedoButton
        redoStack={redoStack}
        handleCellColorChange={handleCellColorChange}
        undoStack={undoStack}
      />
    </div>
  );
}

export default Actions;
