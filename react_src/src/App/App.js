import React from "react";
import { BrowserRouter, Switch, Route, NavLink, Link, useParams} from 'react-router-dom';

import Contenu from "./Contenu/Contenu";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Signup from "./Header/Login/Signup";
import TodoHistorique from "./Contenu/Historique/TodoHistorique";
import TodoTerminer from "./Contenu/Terminer/TodoTerminer";
import TodoActif from "./Contenu/Actif/TodoActif";
import Child from "./Child";


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
          historique: true,
          isDone: true
        },
        {
          titre: "1",
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

  setItems = (items) => {
    this.setState({items: [...items]})
  }



  render() {
    let contenu;
    if (this.state.isUserConnected === true) {
      contenu = <Contenu items = {this.state.items}></Contenu>;
    } else {
      contenu = (
        <Signup
          addUser={user => {
            let newUser = {
              username: user.inputUserNameSignup,
              password: user.inputPwdSignup
            };
            let newUsers = [...this.state.users, newUser];
            this.setState({ users: newUsers });
          }}
        />)
      
    }



    console.log("i am here once if the page is reloaded", this.state.items)

    return (
      <div id="App">
      <BrowserRouter>
        <Header users={this.state.users} userConnected={this.state.userConnected} connected={this.connected} />
        <div className="content">
        <ul>
          <li>
          <Link to="/itemms">Users</Link>
          </li>
          </ul>
            <Switch>
              <Route exact path="/" component={() => <Contenu items = {this.state.items} setItems={this.setItems} ></Contenu>} />
              <Route path="/register" component={Signup} />
              <Route path="/historique" component={() => <TodoHistorique items = {this.state.items}></TodoHistorique>} />
              <Route path="/terminer" component={() => <TodoTerminer items = {this.state.items}></TodoTerminer>} />
              <Route path="/actif" component={() => <TodoActif items = {this.state.items}></TodoActif>} />
              <Route exact path="/itemms/:id" component={() => <Child items={this.state.items}/>} />
            </Switch>
          </div>
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
