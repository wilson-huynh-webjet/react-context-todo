import React from "react";
import { useTodoStateContext } from "../context";

const Todocounter = () => {
  const state = useTodoStateContext();
  const todoCount = state.todoList.filter((i) => i.complete === false).length;
  const doneCount = state.todoList.filter((i) => i.complete === true).length;

  return (
    <div className='counter'>
      <span>Completed: {doneCount}</span>
      <span>Todo: {todoCount}</span>
    </div>
  );
};

export default Todocounter;
