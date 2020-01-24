import React from "react";

import TodoList from "./../ContenuTache/TodoList";

class TodoActif extends React.Component {
  
   actif = () => {

     let itemsActifs = this.props.items.filter((item, index) => {
       return item.isDone == false
     })
     return itemsActifs
   };

  render() {
    let itemsActifs = this.actif()
    console.log("itemsActifs", itemsActifs)

    return (
      <div id="TodoActif">
          <TodoList
            items={itemsActifs}
          />
        </div>
    );
  }
}

export default TodoActif;