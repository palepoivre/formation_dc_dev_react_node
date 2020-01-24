import React from "react";

import TodoList from "./../ContenuTache/TodoList";

class TodoTerminer extends React.Component {
  
   terminer = () => {

     let itemsTerminers = this.props.items.filter((item, index) => {
       return item.isDone == true
     })
     return itemsTerminers
   };

  render() {
    let itemsTerminers = this.terminer()
    console.log("itemsTerminers", itemsTerminers)

    return (
      <div id="TodoTerminer">
          <TodoList
            items={itemsTerminers}
          />
        </div>
    );
  }
}

export default TodoTerminer;