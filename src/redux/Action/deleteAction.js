import { DELETE_TODO } from "../type";

export function deleteTodo(key) {
  return {
    type: DELETE_TODO,
    payload: key,
  };
}
