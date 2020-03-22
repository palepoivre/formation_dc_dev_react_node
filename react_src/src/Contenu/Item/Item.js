import React from "react";


class Item extends React.Component {
  
  render() {
    return (
        <div className="container p-3 my-3 border">
          <h2>Tache :{this.props.item.titre}</h2>
          <p>Date de création :{this.props.item.date_creation}</p>
          <p>Description :{this.props.item.description}</p>
          <a href={"/"+this.props.item.id}>Lien vers la tache {this.props.item.titre}</a>
        </div>
      )
  }
}

export default Item;