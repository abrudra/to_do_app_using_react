import { connect } from "react-redux";
import { deleteTodo } from "../redux/Action/deleteAction";
import { useState } from "react";

function Todolist({ todos, deleteTodo }) {
  const [checked, setChecked] = useState([]);
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Return classes based on whether item is checked
  const isChecked = (item) =>
    checked.includes(item) ? "checked-todo" : "not-checked-todo";
  return (
    <div className="css-taskdiv">
      <ul className="listul-class" id="myUl">
        {todos.map((todo, i) => (
          <li key={i} className={isChecked(todo)}>
            <input
              type="checkbox"
              className="checkbox-class"
              value={todo}
              onChange={handleCheck}
            />
            {todo}
            <button className="btn-class" onClick={() => deleteTodo(i)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

let mapStateToProps = (state) => ({
  todos: state.todos,
});

let mapDisPatchToProps = (dispatch) => ({
  deleteTodo: (key) => dispatch(deleteTodo(key)),
});
export default connect(mapStateToProps, mapDisPatchToProps)(Todolist);
