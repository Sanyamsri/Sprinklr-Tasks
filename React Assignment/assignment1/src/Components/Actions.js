import React from "react";
import Button from "./UndoButton";
function Actions({ stackHandler, undoStack, redoStack, handleMatrixColor }) {
  return (
    <div>
      <Button
        stack={undoStack}
        handleMatrixColor={handleMatrixColor}
        stackHandler={stackHandler}
        redoStack={redoStack}
      >
        undo
      </Button>
    </div>
  );
}

export default Actions;
