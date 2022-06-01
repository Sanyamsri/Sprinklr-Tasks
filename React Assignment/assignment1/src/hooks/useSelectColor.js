import { useState } from "react";
const DEFAULT_COLOR = "#FFFFFF";
export const useSelectColor = () => {
  const [selectedColor, setselectedColor] = useState(DEFAULT_COLOR);
  const handleSelectedColorChange = (newColor) => {
    setselectedColor(newColor);
  };
  return {
    selectedColor,
    handleSelectedColorChange,
  };
};
