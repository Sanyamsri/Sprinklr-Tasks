import "./App.css";
import { React, useState } from "react";
import { CirclePicker } from "react-color";
function App() {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker((prevState) => !prevState);
  };
  const handleChangeComplete = (color) => {
    console.log(color.hex);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Pick Color</button>
      {displayColorPicker ? (
        <CirclePicker onChangeComplete={handleChangeComplete} />
      ) : null}
    </div>
  );
}

export default App;
