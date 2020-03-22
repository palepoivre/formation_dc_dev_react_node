import React from "react";

import List from "../Item/List";

class Terminer extends React.Component {
  
   terminer = () => {

     let itemsTerminers = this.props.items.filter((item, index) => {
       return item.isDone == true
     })
     return itemsTerminers
   };

  render() {
    let itemsTerminers = this.terminer()

    return (
      <div id="TodoTerminer">
          <List
            items={itemsTerminers}
          />
        </div>
    );
  }
}

export default Terminer;