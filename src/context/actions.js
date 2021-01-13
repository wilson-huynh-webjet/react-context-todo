import TYPES from "./types";

export const toggleTodo = (payload) => {
  return { type: TYPES.TOGGLE_TODO, payload };
};

export const removeTodo = (payload) => {
  return { type: TYPES.REMOVE_TODO, payload };
};

export const fetchTodoSuccess = (payload) => {
  return { type: TYPES.FETCH_TODO_SUCCESS, payload };
};

export const fetchTodoError = () => {
  return { type: TYPES.FETCH_TODO_ERROR };
};

export const addTodo = (payload) => {
  return { type: TYPES.ADD_TODO, payload };
};

export const fetchTodo = () => {
  return { type: TYPES.FETCH_TODO };
};
