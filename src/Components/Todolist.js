import { connect } from "react-redux";
import { deleteTodo } from "../redux/Action/deleteAction";

function Todolist({ todos, deleteTodo }) {
  return (
    <div className="css-taskdiv">
      <ul className="listul-class" id="myUl">
        {todos.map((todo, i) => (
          <li key={i} className="li-class">
            <input type="checkbox" className="checkbox-class" />
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
