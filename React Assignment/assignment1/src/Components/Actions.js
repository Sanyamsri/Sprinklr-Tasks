import React from "react";
import UndoButton from "./UndoButton";
import RedoButton from "./RedoButton";
function Actions({ stackHandler, undoStack, redoStack, handleMatrixColor }) {
  return (
    <div>
      <UndoButton
        stack={undoStack}
        handleMatrixColor={handleMatrixColor}
        stackHandler={stackHandler}
        redoStack={redoStack}
      >
        undo
      </UndoButton>
      <RedoButton
        stack={redoStack}
        handleMatrixColor={handleMatrixColor}
        stackHandler={stackHandler}
      >
        undo
      </RedoButton>
    </div>
  );
}

export default Actions;
