import React, { createContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import reducer from "./reducers";
import Axios from "axios";
import TYPES from "./types"
import configs from "../settings";

const initialState = {
  todoList: [],
  fetchTodo: true,
  status: 0, // 0:loading, 1:success, 2:error
};

const TodoContext = createContext();
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const fetchTodoList = () => {
    Axios.get(configs.todoAPI)
      .then((response) =>
        dispatch({ type: TYPES.FETCH_TODO_SUCCESS, payload: response.data })
      )
      .catch(() => dispatch({ type: TYPES.FETCH_TODO_ERROR }));
  };

  // useEffect hook to fetch data from API
  useEffect(fetchTodoList, [state.fetchTodo]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, ContextProvider };
