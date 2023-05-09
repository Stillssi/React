import "./App.css";
import React, { useEffect, useState, useRef, useCallback } from "react";

const useConfirm = (message, onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") {
    return;
  }
  if (typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
// function App() {
//   const deleteWord = () => console.log("Deleting the Word...");
//   const abort = () => console.log("Aborted");
//   const confirmDelete = useConfirm("Are you sure?", deleteWord, abort);
//   return (
//     <div className="App">
//       <button onClick={confirmDelete}>Delete the word</button>
//     </div>
//   );
// }

// export default App;
