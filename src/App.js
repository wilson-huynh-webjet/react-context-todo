import React from "react";
import TodoCounter from "./components/TodoCounter";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Toggle from "./components/Toggle";
import { useTodoContext } from "./context";
import TYPES from "./context/types";

function App() {
  const [state, dispatch] = useTodoContext();

  return (
    <div className="App">
      <h1>Todo</h1>
      <Toggle show={state.status === 0}>loading...</Toggle>
      <Toggle show={state.status === 1}>
        <TodoCounter />
        <TodoInput />
        <TodoList />
        <button onClick={() => dispatch({ type: TYPES.FETCH_TODO })}>Reset</button>
      </Toggle>
      <Toggle show={state.status === 2}>
        <div className='error'>Error while loading data</div>
        <button onClick={() => dispatch({ type: TYPES.FETCH_TODO })}>Retry</button>
      </Toggle>
    </div>
  );
}

export default App;
