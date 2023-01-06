import { ADDING_TODO,DELETE_TODO } from "../type";

let initialState = {
  todos: [],
};

export function addToDoReducer(state = initialState, action) {
  switch (action.type) {
    case ADDING_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, i) => i !== action.payload),
      };
    default:
      return state;
  }
}
