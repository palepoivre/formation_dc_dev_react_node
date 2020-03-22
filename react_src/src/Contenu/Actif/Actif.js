import React from "react";

import List from "../Item/List";

class Actif extends React.Component {
  
   actif = () => {

     let itemsActifs = this.props.items.filter((item, index) => {
       return item.isDone == false
     })
     return itemsActifs
   };

  render() {
    let itemsActifs = this.actif()

    return (
      <div id="TodoActif">
          <List
            items={itemsActifs}
          />
        </div>
    );
  }
}

export default Actif;