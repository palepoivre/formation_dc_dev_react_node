import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li key={this.props.item.index}>
        <button
          onClick={() => {
            this.props.done();
          }}
        >
          Terminer
        </button>
        {this.props.item.titre}
        {this.props.item.message.nom}
        {this.props.item.date_creation}
        {this.props.item.description}
        {this.props.item.isDone}{this.props.item.isDone ? "Fini" : "En cours"}
        <button
          onClick={(e) => {
            this.props.remove();
            e.preventDefault();
          }}
        >
          Supprimer
        </button>
      </li>
    );
  }
}

export default TodoItem;
