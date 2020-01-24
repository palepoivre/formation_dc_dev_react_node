import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import TodoHistorique from './Historique/TodoHistorique';
import TodoActif from "./Actif/TodoActif";
import TodoTerminer from "./Terminer/TodoTerminer";
import App from "./../../App/App";
 
// import PrivateRoute from './Utils/PrivateRoute';
// import PublicRoute from './Utils/PublicRoute';
import TodoList from "./Taches/TodoList";
import TodoInput from "./Taches/TodoInput";

class Contenu extends React.Component {
  constructor(props) {
    super(props);

  }

  getDate() {
    var date = { currentTime: new Date().toLocaleString() };
  }

  handleDone(index) {
    let newItem = {
      titre: this.props.items[index].titre,
      date_creation: this.props.items[index].date,
      description: this.props.items[index].description,
      contributeur: this.props.items[index].contributeur,
      message: { 
        nom : [""],
        date_creation : [""],
        commentaire : [""]
      },
      historique: false,
      isDone: !this.props.items[index].isDone
    };
    let newItems = [...this.props.items];
    newItems.splice(index, 1, newItem);
    this.props.setItems(newItems);
    
  }
  handleRemoveItem(index) {
    let newItems = [...this.props.items];
    newItems.splice(index, 1);
    this.props.setItems(newItems);
  }
  render() {
    return (
      <div id="Todo">
        <div className="TodoList">
          <TodoList
            items={this.props.items}
            removeItem={index => {
              this.handleRemoveItem(index);
            }}
            doneItem={index => {
              this.handleDone(index);
            }}
          />
        </div>
        <div className="TodoList">
          <TodoInput
            addItem={value => {
              let newItem = { titre: value, date_creation: this.getDate(), description: "" , message: { 
                nom : [""],
                date_creation : [""],
                commentaire : [""],
              } ,
              contributeur: { nom : [this.props.items.username]} , historique: false , isDone: false };

              let newItems = [...this.props.items, newItem];

              this.props.setItems(newItems);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Contenu;
