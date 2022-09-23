import { connect } from "react-redux";
import Item from "../components/Item";
import { onDelete } from "../actions/actions";

function mapStateToProps(state, props) {
  let oneTodo = state.todos.filter((e) => e.id === props.id);

  return {
    item: oneTodo[0],
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onDelete: () => dispatch(onDelete(props.id)),
  };
}

const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);

export default ItemContainer;
