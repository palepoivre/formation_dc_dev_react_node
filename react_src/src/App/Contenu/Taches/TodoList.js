import React from "react";

import TodoItem from "./TodoItem";

class TodoList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => {
          return (
            <TodoItem
              item={item}
              remove={() => this.props.removeItem(index)}
              done={() => this.props.doneItem(index)}
              key={index}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
