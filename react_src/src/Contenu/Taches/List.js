import React from "react";

import Item from "../Taches/Item";

class List extends React.Component {

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => {
          return (
            <Item
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

export default List;
