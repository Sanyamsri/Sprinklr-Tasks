import React from "react";

function Button({ matrix, handleMatrixColor }) {
  const onClickHandler = () => {
    matrix.forEach((ele, idx) => {
      handleMatrixColor({ idx, newColor: "#ffffff" });
    });
  };
  return (
    <div className="center">
      <button type="button" onClick={onClickHandler}>
        Reset
      </button>
    </div>
  );
}

export default Button;
