import React from "react";
import UndoButton from "./UndoButton";
import RedoButton from "./RedoButton";
function Actions({ undoStack, redoStack, handleMatrixColor }) {
  return (
    <div>
      <UndoButton
        undoStack={undoStack}
        handleMatrixColor={handleMatrixColor}
        redoStack={redoStack}
      >
        undo
      </UndoButton>
      <RedoButton
        redoStack={redoStack}
        handleMatrixColor={handleMatrixColor}
        undoStack={undoStack}
      >
        undo
      </RedoButton>
    </div>
  );
}

export default Actions;
