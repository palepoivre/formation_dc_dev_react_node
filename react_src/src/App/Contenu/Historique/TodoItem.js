import React from "react";

class TodoItem extends React.Component {
<<<<<<< HEAD
  render() {
    return (

      let itemsHistoriques = this.historique()

      let ItemH = ({item}) => (
        <div>
          <h1>{item.titre}</h1>
          <p>{item.date_creation}</p>
          <p>{item.description}</p>
          <p>{item.message.nom}</p>
          <p>{item.message.date_creation}</p>
          <p>{item.message.commentaire}</p>
          <p>{item.contributeur.nom}</p>
          <p>{item.isDone}</p>
          <a href={"/"+item.titre}>Lien {item.titre}</a>
        </div>
      )
        <button
          onClick={() => {
            this.props.remove();
          }}
        >
          Supprimer
        </button>
      </li>
    );
=======
  
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
>>>>>>> master
  }
}

export default TodoItem;
