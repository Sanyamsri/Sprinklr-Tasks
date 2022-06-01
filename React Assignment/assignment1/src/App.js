import "./styles/App.css";
import ColorPicker from "./components/ColorPicker";
import Grid from "./components/Grid/Grid";
import ResetButton from "./components/ResetButton";
import Actions from "./components/ActionButton/Actions";
import { useStack } from "./hooks/useStack";
import { useMatrix } from "./hooks/useMatrix";
import { useSelectColor } from "./hooks/useSelectColor";

function App() {
  const undoStack = useStack([]);
  const redoStack = useStack([]);
  const { matrix, handleCellColorChange, clearMatrix } = useMatrix();
  const { selectedColor, handleSelectedColorChange } = useSelectColor();

  return (
    <div className="App center">
      Pixel editor
      <ColorPicker handleSelectedColorChange={handleSelectedColorChange} />
      <Grid
        selectedColor={selectedColor}
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
        clearMatrix={clearMatrix}
        clearUndoStack={undoStack.clear}
        clearRedoStack={redoStack.clear}
      />
    </div>
  );
}

export default App;
