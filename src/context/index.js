import React, { createContext, useContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import reducer from "./reducers";
import Axios from "axios";
import configs from "../settings";
import { fetchTodoSuccess, fetchTodoError } from "./actions";

const initialState = {
  todoList: [],
  fetchTodo: true,
  status: 0, // 0:loading, 1:success, 2:error
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

const useTodoStateContext = () => useContext(TodoStateContext);
const useTodoDispatchContext = () => useContext(TodoDispatchContext);
const useTodoContext = () => [useTodoStateContext(), useTodoDispatchContext()];

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const fetchTodoList = () => {
    Axios.get(configs.todoAPI)
      .then((response) => dispatch(fetchTodoSuccess(response.data)))
      .catch(() => dispatch(fetchTodoError()));
  };

  // useEffect hook to fetch data from API
  useEffect(fetchTodoList, [state.fetchTodo]);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export {
  useTodoContext,
  useTodoStateContext,
  useTodoDispatchContext,
  ContextProvider,
};
