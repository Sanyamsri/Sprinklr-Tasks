import "./App.css";
import { React, useState } from "react";
import ColorPicker from "./Components/ColorPicker";
import Grid from "./Components/Grid";
function App() {
  const [ColorSelected, setColorSelected] = useState("#f44336");

  const handleChangeColor = (newColor) => {
    setColorSelected(newColor);
  };

  return (
    <div className="App center">
      Pixel editor
      <ColorPicker handleChangeColor={handleChangeColor} />
      <Grid ColorSelected={ColorSelected} />
    </div>
  );
}

export default App;
