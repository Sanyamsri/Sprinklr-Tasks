import React from "react";

function ActionButton({ disabled, onClickFunction, children }) {
  return (
    <button disabled={disabled} onClick={onClickFunction}>
      {children}
    </button>
  );
}

export default ActionButton;
