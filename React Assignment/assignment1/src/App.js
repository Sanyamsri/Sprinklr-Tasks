import "./App.css";
import { React, useState, useEffect } from "react";
import ColorPicker from "./Components/ColorPicker";
import Grid from "./Components/Grid";
import ResetButton from "./Components/ResetButton";
import Actions from "./Components/Actions";

function App() {
  const [ColorSelected, setColorSelected] = useState("#ffffff");

  const nRows = 32,
    nCols = 32;

  const [matrix, setMatrix] = useState(() => {
    if (localStorage.getItem("matrix"))
      return JSON.parse(localStorage.getItem("matrix"));
    return Array.from({ length: nRows * nCols }, () => "#FFFFFF");
  });

  const [undoStack, setundoStack] = useState([]);
  const [redoStack, setredoStack] = useState([]);

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

  const stackHandler = (action, addValue) => {
    const removeStack = (prevState) => {
      const newState = [...prevState];
      newState.pop();
      return newState;
    };

    const addStack = (prevState) => {
      const newState = [...prevState];
      newState.push(addValue);
      return newState;
    };

    if (action.type === "remove") {
      if (action.stack === "undo") setundoStack(removeStack);
      if (action.stack === "redo") setredoStack(removeStack);
    }
    if (action.type === "add") {
      if (action.stack === "undo") setundoStack(addStack);
      if (action.stack === "redo") setredoStack(addStack);
    }
  };

  return (
    <div className="App center">
      Pixel editor
      <ColorPicker handleChangeColor={handleChangeColor} />
      <Grid
        ColorSelected={ColorSelected}
        matrix={matrix}
        handleMatrixColor={handleMatrixColor}
        stackHandler={stackHandler}
        undoStack={undoStack}
      />
      <Actions
        stackHandler={stackHandler}
        undoStack={undoStack}
        redoStack={redoStack}
        handleMatrixColor={handleMatrixColor}
      />
      <ResetButton matrix={matrix} handleMatrixColor={handleMatrixColor} />
    </div>
  );
}

export default App;
