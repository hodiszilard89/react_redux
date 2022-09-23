import { connect } from "react-redux";
import App from "../components/App";
import { addTodo } from "../actions/actions";

function mapStateToProps(state, props) {
  return {
    todos: state.todos.map((e) => e.id),
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    addTodo: (text) => dispatch(addTodo("alma")),
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
