import React from "react";
import Button from "./Button";
function ResetButton({ clearUndoStack, clearRedoStack, clearMatrix }) {
  const onClickResetHandler = () => {
    clearMatrix();
    clearUndoStack();
    clearRedoStack();
  };
  return (
    <div className="center">
      <Button onClickFunction={onClickResetHandler} />
    </div>
  );
}

export default ResetButton;
