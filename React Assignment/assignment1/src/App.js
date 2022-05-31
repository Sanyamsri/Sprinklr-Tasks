import "./App.css";
import { React, useState, useEffect } from "react";
import ColorPicker from "./Components/ColorPicker";
import Grid from "./Components/Grid";
import Button from "./Components/Button";

function App() {
  const [ColorSelected, setColorSelected] = useState("#ffffff");
  const nRows = 32,
    nCols = 32;
  const [matrix, setMatrix] = useState(() => {
    if (localStorage.getItem("matrix"))
      return JSON.parse(localStorage.getItem("matrix"));
    return Array.from({ length: nRows * nCols }, () => "#FFFFFF");
  });
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
      />
      <Button matrix={matrix} handleMatrixColor={handleMatrixColor} />
    </div>
  );
}

export default App;
