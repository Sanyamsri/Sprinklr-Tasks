import React from "react";
import { CirclePicker } from "react-color";
function ColorPicker({ handleChangeColor }) {
  const handleChangeComplete = (color) => {
    handleChangeColor(color.hex);
  };

  return (
    <div className="colorPicker">
      <CirclePicker onChangeComplete={handleChangeComplete} />
    </div>
  );
}

export default ColorPicker;
