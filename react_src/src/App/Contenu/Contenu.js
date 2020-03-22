import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Actif from "./Actif/Actif";
import Terminer from "./Terminer/Terminer";
import App from "./../../App/App";
import List from "./Taches/List";
import Input from "./Taches/Input";

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
          <List
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
          <Input
            addItem={value => {
              let newItem = { titre: value, date_creation: this.getDate(), description: value
              , isDone: false };

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
