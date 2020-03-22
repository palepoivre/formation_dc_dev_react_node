import React from "react";

import ContenuTache from "../ContenuTache/ContenuTache";
import Terminer from "../Terminer/Terminer";
import Actif from "../Actif/Actif";
import Item from "../Item/Item";

class List extends React.Component {
 
  
  render() {
    
    return (
      <ul>
        {this.props.items.map((item, index) => {
          return (
            <Item
              item={item}
              key={index}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
