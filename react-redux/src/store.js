import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

// JSON.parse(localStorage.getItem("toDos")) ||
//   localStorage.setItem("toDos", JSON.stringify([]));

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.unshift({ text: action.payload.text, id: action.payload.id });
    // localStorage.setItem("toDos", JSON.stringify(state));
  },
  [deleteToDo]: (state, action) => {
    state.filter((toDo) => toDo.id !== action.payload);
    // localStorage.setItem("toDos", JSON.stringify(state));
  },
});
const store = configureStore({ reducer });

export default store;
