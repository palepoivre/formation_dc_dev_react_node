import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Uuid from 'uuid/v4';

import Actif from "./Actif/Actif";
import Terminer from "./Terminer/Terminer";
import App from "./../App";
import List from "./Taches/List";
import Input from "./Taches/Input";

class Contenu extends React.Component {
  constructor(props) {
    super(props);

      // Use of Date.now() function 
  let date_now = Date.now();

  let date_ob = new Date(date_now);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  this.state = {
    date_creation: date + "/" + month + "/" + year , 
    id: this.props.items.id
  };
  }



  handleDone(index) {
    let newItem = {
      id: this.props.items[index].id,
      titre: this.props.items[index].titre,
      date_creation: this.props.items[index].date_creation,
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
              let newItem = { id: this.state.id, titre: value, date_creation: this.state.date_creation, description: value
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
