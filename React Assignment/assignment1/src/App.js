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

  const onCellClickHandler = ({ index, originalColor }) => {
    handleCellColorChange({ index, newColor: selectedColor });
    undoStack.push({ index, color1: originalColor, color2: selectedColor });
    redoStack.clear();
  };

  const onClickResetHandler = () => {
    clearMatrix();
    undoStack.clear();
    redoStack.clear();
  };

  const onClickUndoHandler = () => {
    const lastOperation = undoStack.top();
    handleCellColorChange({
      index: lastOperation.index,
      newColor: lastOperation.color1,
    });
    redoStack.push(lastOperation);
    undoStack.pop();
  };

  const onClickRedoHandler = () => {
    const lastOperation = redoStack.top();
    handleCellColorChange({
      index: lastOperation.index,
      newColor: lastOperation.color2,
    });
    undoStack.push(lastOperation);
    redoStack.pop();
  };
  return (
    <div className="App center">
      Pixel editor
      <ColorPicker handleSelectedColorChange={handleSelectedColorChange} />
      <Grid
        onCellClickHandler={onCellClickHandler}
        selectedColor={selectedColor}
        matrix={matrix}
      />
      <Actions
        onClickUndoHandler={onClickUndoHandler}
        onClickRedoHandler={onClickRedoHandler}
        undoStackLength={undoStack.length()}
        redoStackLength={redoStack.length()}
      />
      <ResetButton onClickResetHandler={onClickResetHandler} />
    </div>
  );
}

export default App;
