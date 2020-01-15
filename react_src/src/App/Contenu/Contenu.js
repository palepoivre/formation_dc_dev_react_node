import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import TodoHistorique from './components/TodoHistorique';
 
// import PrivateRoute from './Utils/PrivateRoute';
// import PublicRoute from './Utils/PublicRoute';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

class Contenu extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      items: [
        {
          titre: "Faire les courses",
          date_creation: "26/11/2019",
          description: "description", 
          message: { 
            nom : ["palepoivre","javahl"],
            date_creation : ["26/11/2019","27/11/2019"],
            commentaire : ["commentaire 1","commentaire 2"],
          },
          contributeur: { nom : ["palepoivre","javahl"]},
          historique: false,
          isDone: false
        },
        {
          titre: "Faire le ménage",
          date_creation: "26/11/2019",
          description: "description", 
          message: { 
            nom : ["palepoivre","javahl"],
            date_creation : ["26/11/2019","27/11/2019"],
            commentaire : ["commentaire 1","commentaire 2"],
          },
          contributeur: { nom : ["palepoivre","javahl"]},
          historique: false,
          isDone: false
        },
        {
          titre: "Acheter un yacht",
          date_creation: "26/11/2010",
          description: "description", 
          message: { 
            nom : ["palepoivre","javahl"],
            date_creation : ["26/11/2019","27/11/2019"],
            commentaire : ["commentaire 1","commentaire 2"],
          },
          contributeur: { nom : ["palepoivre","javahl"]},
          historique: false,
          isDone: false
        }
      ]
    };
  }

  getDate() {
    var date = { currentTime: new Date().toLocaleString() };
  }

  handleDone(index) {
    let newItem = {
      titre: this.state.items[index].titre,
      date_creation: this.state.items[index].date,
      description: this.state.items[index].description,
      contributeur: this.state.items[index].contributeur,
      message: { 
        nom : [""],
        date_creation : [""],
        commentaire : [""]
      },
      historique: false,
      isDone: !this.state.items[index].isDone
    };
    let newItems = [...this.state.items];
    newItems.splice(index, 1, newItem);

    this.setState({ items: newItems });
  }
  handleRemoveItem(index) {
    let newItems = [...this.state.items];
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  }
  render() {
    return (
      <div id="Todo">
        <div className="TodoList">
          <TodoList
            items={this.state.items}
            removeItem={index => {
              this.handleRemoveItem(index);
            }}
            doneItem={index => {
              this.handleDone(index);
            }}
          />
        </div>
        <div class="TodoList">
          <TodoInput
            addItem={value => {
              let newItem = { titre: value, date_creation: value, description: value , message: { 
                nom : [""],
                date_creation : [""],
                commentaire : [""],
              } ,
              contributeur: { nom : [this.props.user.username]} , historique: false , isDone: false };

              let newItems = [...this.state.items, newItem];

              this.setState({ items: newItems });

              console.log("newItem", newItem);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Contenu;
