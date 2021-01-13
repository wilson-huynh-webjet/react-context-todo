import React, { useState } from "react";
import { useTodoDispatchContext } from "../context";
import { addTodo } from "../context/actions";

const Todoinput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useTodoDispatchContext();

  const handleOnClick = (e) => {
    e.preventDefault();
    setTodo("");

    todo && dispatch(addTodo());
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
