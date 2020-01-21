import React from "react";
class TodoDetail extends React.Component {
  render() {
    return (
        <div>
        <p>{ this.props.item.titre}</p>
        <p>{ this.props.item.message.nom}</p>
        <p>{ this.props.item.date_reation}</p>
        <p>{ this.props.item.description}</p>
        <p>{ this.props.item.message.date_creation}</p>
        <p>{ this.props.item.message.commentaire}</p>
        <p>{ this.props.item.isDone}{this.props.item.isDone ? "Fini":"En cours"}</p>
        <button
          onClick={() => {
            this.props.remove();
          }}
        >
          Supprimer
        </button>
        </div>
    );
  }
}

export default TodoDetail;
