import { useStack } from "./useStack";

export const useHistory = () => {
  const undoStack = useStack([]);

  const redoStack = useStack([]);

  const resetHistoryHandler = () => {
    undoStack.clear();
    redoStack.clear();
  };

  const undoHistoryHandler = () => {
    const lastOperation = undoStack.top();
    redoStack.push(lastOperation);
    undoStack.pop();
    return lastOperation;
  };
  const redoHistoryHandler = () => {
    const lastOperation = redoStack.top();
    undoStack.push(lastOperation);
    redoStack.pop();
    return lastOperation;
  };
  const undoStackLength = undoStack.length();
  const redoStackLength = redoStack.length();
  const insertHistoryHandler = ({ originalColor, selectedColor, index }) => {
    undoStack.push({ index, color1: originalColor, color2: selectedColor });
    redoStack.clear();
  };
  return {
    resetHistoryHandler,
    redoHistoryHandler,
    undoHistoryHandler,
    undoStackLength,
    redoStackLength,
    insertHistoryHandler,
  };
};
