import React from "react";

function Button({ stack, stackHandler, handleMatrixColor }) {
  const onClickHandler = () => {
    if (stack.length > 0) {
      const lastOperation = stack[stack.length - 1];
      handleMatrixColor({
        idx: lastOperation.idx,
        newColor: lastOperation.color2,
      });
      stackHandler({ type: "add", stack: "undo" }, stack[stack.length - 1]);
      stackHandler({ type: "remove", stack: "redo" });
    }
  };
  return (
    <button disabled={stack.length === 0} onClick={onClickHandler}>
      Redo
    </button>
  );
}

export default Button;
