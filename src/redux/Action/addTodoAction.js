import { ADDING_TODO } from "../type";

export function addTodo(todo) {
  return {
    type: ADDING_TODO,
    payload: todo,
  };
}
