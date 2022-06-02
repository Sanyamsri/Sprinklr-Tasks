import "./styles/App.css";
import ColorPicker from "./components/ColorPicker";
import Grid from "./components/Grid/Grid";
import ResetButton from "./components/ResetButton";
import Actions from "./components/ActionButton/Actions";
import { useMatrix } from "./hooks/useMatrix";
import { useSelectColor } from "./hooks/useSelectColor";
import { useHistory } from "./hooks/useHistory";

function App() {
  const {
    resetHistoryHandler,
    redoHistoryHandler,
    undoHistoryHandler,
    undoStackLength,
    redoStackLength,
    insertHistoryHandler,
  } = useHistory();
  const { matrix, handleCellColorChange, clearMatrix } = useMatrix();
  const { selectedColor, handleSelectedColorChange } = useSelectColor();

  const onCellClickHandler = ({ index, originalColor }) => {
    insertHistoryHandler({ index, selectedColor, originalColor });
    handleCellColorChange({ index, newColor: selectedColor });
  };

  const onClickResetHandler = () => {
    clearMatrix();
    resetHistoryHandler();
  };

  const onClickUndoHandler = () => {
    const lastOperation = undoHistoryHandler();
    handleCellColorChange({
      index: lastOperation.index,
      newColor: lastOperation.color1,
    });
  };

  const onClickRedoHandler = () => {
    const lastOperation = redoHistoryHandler();
    handleCellColorChange({
      index: lastOperation.index,
      newColor: lastOperation.color2,
    });
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
        undoStackLength={undoStackLength}
        redoStackLength={redoStackLength}
      />
      <ResetButton onClickResetHandler={onClickResetHandler} />
    </div>
  );
}

export default App;
