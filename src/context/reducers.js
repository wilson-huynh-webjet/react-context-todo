import TYPES from "./types"

const reducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.ADD_TODO:
      state.todoList.unshift({
        id: Math.random(),
        name: payload,
        complete: false,
      });
      return;

    case TYPES.REMOVE_TODO:
      state.todoList = state.todoList.filter((todo) => todo.id !== payload);
      return;

    case TYPES.TOGGLE_TODO:
      state.todoList[payload].complete = !state.todoList[payload].complete;
      return;

    case TYPES.FETCH_TODO:
      state.status = 0;
      state.fetchTodo = !state.fetchTodo;
      return;

    case TYPES.FETCH_TODO_SUCCESS:
      state.todoList = payload;
      state.status = 1;
      return;

    case TYPES.FETCH_TODO_ERROR:
      state.status = 2;
      return;

    default:
      return;
  }
};

export default reducer;
