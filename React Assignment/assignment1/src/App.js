import "./styles/App.css";
import { React, useState, useEffect } from "react";
import ColorPicker from "./components/ColorPicker";
import Grid from "./components/Grid";
import ResetButton from "./components/ResetButton";
import Actions from "./components/Actions";
import { useStack } from "./hooks/useStack";

function App() {
  const [ColorSelected, setColorSelected] = useState("#ffffff");

  const nRows = 32,
    nCols = 32;

  const [matrix, setMatrix] = useState(() => {
    if (localStorage.getItem("matrix"))
      return JSON.parse(localStorage.getItem("matrix"));
    return Array.from({ length: nRows * nCols }, () => "#FFFFFF");
  });

  const undoStack = useStack([]);
  const redoStack = useStack([]);

  useEffect(() => {
    localStorage.setItem("matrix", JSON.stringify(matrix));
  }, [matrix]);

  const handleChangeColor = (newColor) => {
    setColorSelected(newColor);
  };

  const handleMatrixColor = ({ idx, newColor }) => {
    setMatrix((prevState) => {
      const copy = [...prevState];
      copy[idx] = newColor;
      return copy;
    });
  };

  return (
    <div className="App center">
      Pixel editor
      <ColorPicker handleChangeColor={handleChangeColor} />
      <Grid
        ColorSelected={ColorSelected}
        matrix={matrix}
        handleMatrixColor={handleMatrixColor}
        undoStack={undoStack}
        redoStack={redoStack}
      />
      <Actions
        undoStack={undoStack}
        redoStack={redoStack}
        handleMatrixColor={handleMatrixColor}
      />
      <ResetButton
        matrix={matrix}
        handleMatrixColor={handleMatrixColor}
        undoStack={undoStack}
        redoStack={redoStack}
      />
    </div>
  );
}

export default App;
