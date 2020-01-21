import React from "react";
class TodoDetail extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            inputValueDes: ""
        }
    }
  render() {
    return (
        <div>
        <p>{ this.props.item.titre}</p>
        <p>{ this.props.item.message.nom}</p>
        <p>{ this.props.item.date_creation}</p>
        <p>{ this.props.item.description}</p>
        <input
          value={this.state.inputValueDes}
          placeholder="Ajouter une Description"
          onChange={e => {
            this.setState({ inputValueDes: e.target.value });
          }}
        />
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
