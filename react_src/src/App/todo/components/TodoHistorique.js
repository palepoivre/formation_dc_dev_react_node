import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [
          {
            titre: "",
            date_creation: "",
            description: "", 
            message: { 
              nom : [""],
              date_creation : [""],
              commentaire : [""],
            },
            contributeur: { nom : [""]},
            historique: false,
            isDone: false
          }
  }
  
  historique = items => {
    let i = 0;
    while (i < this.state.items.length) {
      console.log("user", items)
      if (
        this.props.items.historique === true
      ) {
        this.setState({  this.state.items.titre: this.props.items[i].titre,this.state.items.message.nom: this.props.items[i].message.nom,
            this.state.items.date_creation: this.props.items[i].date_creation,this.state.items.description: this.props.items[i].description,
            this.state.items.message.date_creation: this.props.items[i].message.date_creation,this.state.items.message.commentaire: this.props.items[i].message.commentaire,
            this.state.items.historique: this.props.items[i].historique, this.state.items.isDone: this.props.items[i].isDone });
      }
      i++;
    }
  };

  render() {
    return (
      <div>
        <p>{this.state.inputValue}</p>
        <input
          value={this.state.inputValue}
          placeholder="Ajouter un item"
          onChange={e => {
            this.setState({ inputValue: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.props.addItem(this.state.inputValue);
            this.setState({ inputValue: "" });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default TodoHistorique;