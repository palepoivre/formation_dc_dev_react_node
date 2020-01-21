import React from "react";

import TodoItem from "./TodoItem";

class TodoList extends React.Component {

  render() {
    return (
      <ul>
        {itemsHistoriques.map((item, index) => {
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
