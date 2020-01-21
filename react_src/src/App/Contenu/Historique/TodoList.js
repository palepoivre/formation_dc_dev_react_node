import React from "react";

import TodoItem from "./TodoItem";
import TodoHistorique from "./TodoHistorique";

class TodoList extends React.Component {
 
  
  render() {
    console.log("items", this.props.items)

    return (
      <ul>
        {this.props.items.map((item, index) => {
          return (
            <TodoItem
              item={item}
              key={index}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
