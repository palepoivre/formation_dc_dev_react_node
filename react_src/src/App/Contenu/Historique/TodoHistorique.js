import React from "react";

import TodoList from "./TodoList";

class TodoHistorique extends React.Component {
  
   historique = () => {

     let itemsHistoriques = this.props.items.filter((item, index) => {
       return item.historique == true
     })


     console.log("itemsHistoriques")


     return itemsHistoriques

   };

  render() {


    return (
      <div id="TodoHistorique">
          <TodoHistorique
            items={this.props.items}

    let itemsHistoriques = this.historique()
    console.log("itemsHistoriques", itemsHistoriques)

    return (
      <div id="TodoHistorique">
          <TodoList
            items={itemsHistoriques}

          />
        </div>
    );
  )
}

export default TodoHistorique;