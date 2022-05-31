import React from "react";

function Button({ stack, stackHandler, handleMatrixColor }) {
  const onClickHandler = () => {
    if (stack.length > 0) {
      const lastOperation = stack[stack.length - 1];
      handleMatrixColor({
        idx: lastOperation.idx,
        newColor: lastOperation.color1,
      });
      stackHandler({ type: "add", stack: "redo" }, stack[stack.length - 1]);
      stackHandler({ type: "remove", stack: "undo" });
    }
  };
  return (
    <button disabled={stack.length === 0} onClick={onClickHandler}>
      undo
    </button>
  );
}

export default Button;
