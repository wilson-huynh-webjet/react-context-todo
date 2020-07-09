import React, { useState, useContext } from "react";
import { TodoContext } from "../context";
import TYPES from "../context/types";

const Todoinput = () => {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleOnClick = (e) => {
    e.preventDefault();
    setTodo("");

    todo && dispatch({ type: TYPES.ADD_TODO, payload: todo });
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
};

export default Todoinput;
