import React from "react";

class TodoItem extends React.Component {
  
  render() {
    return (
        <div>
          <h1>{this.props.item.titre}</h1>
          <p>{this.props.item.date_creation}</p>
          <p>{this.props.item.description}</p>
          <p>{this.props.item.message.nom}</p>
          <p>{this.props.item.message.date_creation}</p>
          <p>{this.props.item.message.commentaire}</p>
          <p>{this.props.item.contributeur.nom}</p>
          <p>{this.props.item.isDone}</p>
          <a href={"/"+this.props.item.titre}>Lien {this.props.item.titre}</a>
        </div>
      )
  }
}

export default TodoItem;
