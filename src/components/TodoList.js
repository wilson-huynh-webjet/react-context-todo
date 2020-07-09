import React, { useContext } from "react";
import { TodoContext } from "../context";
import TYPES from "../context/types";

const Todolist = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleOnChange = (index) => {
    dispatch({type: TYPES.TOGGLE_TODO, payload: index})
  };
  const handleOnclick = (id) => {
    dispatch({ type: TYPES.REMOVE_TODO, payload: id});
  };

  return (
    <ul>
      {state.todoList.map((todo, index) => (
        <li key={todo.id} className={todo.complete ? 'completed' : null}>
          <input
            id={todo.id}
            type="checkbox"
            onChange={() => handleOnChange(index)}
          ></input>
          <label htmlFor={todo.id}>{todo.name}</label>
          <button onClick={() => handleOnclick(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
