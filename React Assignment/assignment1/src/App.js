import "./styles/App.css";
import { React, useState } from "react";
import ColorPicker from "./components/ColorPicker";
import Grid from "./components/Grid";
import ResetButton from "./components/ResetButton";
import Actions from "./components/Actions";
import { useStack } from "./hooks/useStack";
import { useMatrix } from "./hooks/useMatrix";

function App() {
  const [ColorSelected, setColorSelected] = useState("#ffffff");
  const handleChangeColor = (newColor) => {
    setColorSelected(newColor);
  };
  const undoStack = useStack([]);
  const redoStack = useStack([]);
  const { matrix, handleCellColorChange } = useMatrix();

  return (
    <div className="App center">
      Pixel editor
      <ColorPicker handleChangeColor={handleChangeColor} />
      <Grid
        ColorSelected={ColorSelected}
        matrix={matrix}
        handleCellColorChange={handleCellColorChange}
        undoStack={undoStack}
        redoStack={redoStack}
      />
      <Actions
        undoStack={undoStack}
        redoStack={redoStack}
        handleCellColorChange={handleCellColorChange}
      />
      <ResetButton
        matrix={matrix}
        handleCellColorChange={handleCellColorChange}
        undoStack={undoStack}
        redoStack={redoStack}
      />
    </div>
  );
}

export default App;
