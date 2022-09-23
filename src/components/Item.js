import React, { Component } from "react";

class Item extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { item, onDelete } = this.props;
    return (
      <div>
        {item.name}
        <button onClick={onDelete}>delete</button>
      </div>
    );
  }
}

export default Item;
