import React from "react";
import Button from "./Button";
function ResetButton({ onClickResetHandler }) {
  return (
    <div className="center">
      <Button onClickFunction={onClickResetHandler} disabled={false}>
        Reset
      </Button>
    </div>
  );
}

export default ResetButton;
