import { useState } from "react";
const DEFAULT_COLOR = "#ffffff";
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
