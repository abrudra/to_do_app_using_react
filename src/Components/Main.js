import { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/Action/addTodoAction";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }

  handleInput = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };
  render() {
    return (
      <div className="headerDIv">
        <div className="todo-name">todos</div>
        <form className="checkbox-Div" onSubmit={this.handleSubmit}>
          <input className="checkboxall-class" type="checkbox" />
          <input
            className="css-inputBox"
            type="text"
            id="filter"
            value={this.state.todo}
            placeholder="What needs to be done?"
            onChange={this.handleInput}
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
}
export default connect(null, mapDispatchToProps)(Main);
