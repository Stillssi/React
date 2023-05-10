import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToDo, deleteToDo } from "../store";

function Home() {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  const onClick = (e) => {
    e.preventDefault();
    setText("");
  };
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state); //getState()랑 같은 기능

  const btnOnClick = (e) => {
    const targetId = parseInt(e.target.parentNode.id);
    dispatch(deleteToDo(targetId));
  };

  const onSubmit = () => {
    const id = Date.now();
    dispatch(addToDo({ text, id }));
  };

  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={onClick}>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onSubmit}>Add</button>
      </form>
      <ul>
        {currentState.map((state) => (
          <li key={state.id} id={state.id}>
            <Link to={`${state.id}`}>{state.text}</Link>
            <button onClick={btnOnClick}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
