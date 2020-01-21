import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Contenu from "./Contenu/Contenu";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Signup from "./Header/Login/Signup";
import TodoHistorique from "./Contenu/Historique/TodoHistorique";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ":path",
      isUserConnected: false,
      userConnected: {},
      users: [
        { username: "Alice", password: "Alice" },
        { username: "Bob", password: "Bob" },
        { username: "Claire", password: "Claire" },
        { username: "David", password: "David" }
      ],
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
          isDone: false,
          id:1,

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

          isDone: false,
          id:2,
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
          id:3,
          isDone: false
        }
      ]
    };
  }
  connected = user => {
    let i = 0;
    let userFound = false;
    while (i < this.state.users.length && userFound === false) {
      if (
        this.state.users[i].username === user.inputNameValue &&
        this.state.users[i].password === user.inputPasswordValue
      ) {
        userFound = true;
        this.setState({ isUserConnected: userFound, userConnected: this.state.users[i] });
      }
      i++;
    }
  };

  render() {
    let contenu;
    if (this.state.isUserConnected === true) {
      contenu = <Contenu items = {this.state.items}></Contenu>;
    } else {
      contenu =
        <Signup
          addUser={user => {
            let newUser = {
              username: user.inputUserNameSignup,
              password: user.inputPwdSignup
            };
            let newUsers = [...this.state.users, newUser];
            this.setState({ users: newUsers });
          }}
        />
      
    }
    return (
      <div id="App">
      <BrowserRouter>
        <Header users={this.state.users} userConnected={this.state.userConnected} connected={this.connected} />
        <div className="content">
            <Switch>
              <Route exact path="/" component={Contenu} />
              <Route path="/historique" component={()=> <TodoHistorique {...this.state.items}></TodoHistorique>} />
              <Route exact path="/" component={()=> <Contenu items = {this.state.items}></Contenu>} />
              <Route path="/register" component={Signup} />
              <Route path="/historique" component={()=> <TodoHistorique items = {this.state.items}></TodoHistorique>} />
            </Switch>
          </div>
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
