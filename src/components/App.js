//import "./App.css";
import React, { Component } from "react";
import ItemContainer from "../containers/ItemContainer";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        {this.props.todos.map((e) => (
          <ItemContainer key={e} id={e} />
        ))}
        <input type="text" />
        <button onClick={this.props.addTodo}> Add</button>
      </div>
    );
  }
}

export default App;
