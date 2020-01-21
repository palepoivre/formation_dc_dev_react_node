import React from "react";

class TodoItem extends React.Component {
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
  }
}

export default TodoItem;
