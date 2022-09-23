import { ADD_TODO, ON_DELETE } from "../actions/actionsList";

export function reducer(
  state = {
    todos: [
      { id: 1, name: "Pista" },
      { id: 2, name: "Marika" },
    ],
  },
  action
) {
  if (action.type === ADD_TODO) {
    let newTodos = JSON.parse(JSON.stringify(state.todos));

    newTodos.push({
      id: Math.random(),
      name: action.newTodo,
    });
    return {
      todos: newTodos,
    };
  }

  if (action.type === ON_DELETE) {
    let newTodos = state.todos.filter((e) => e.id !== action.id);
    return {
      todos: newTodos,
    };
  }
  return state;
}
