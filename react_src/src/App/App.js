import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Contenu from "./Contenu/Contenu";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Signup from "./Header/Login/Signup";
import TodoHistorique from "./Contenu/components/TodoHistorique";

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
      ]
    };
  }
  connected = user => {
    let i = 0;
    let userFound = false;
    while (i < this.state.users.length && userFound === false) {
      console.log("user", user)
      if (
        this.state.users[i].username === user.inputNameValue &&
        this.state.users[i].password === user.inputPasswordValue
      ) {
        userFound = true;
        this.setState({ isUserConnected: userFound, userConnected: this.state.users[i] });
      }
      console.log("while iteration", i, this.state.users[i])
      i++;
    }
  };

  render() {
    let contenu;
    if (this.state.isUserConnected === true) {
      contenu = <Contenu />;
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
        />
      );
    }
    return (
      <div id="App">
      <BrowserRouter>

        <Header users={this.state.users} userConnected={this.state.userConnected} connected={this.connected} />
        <div className="content">
            <Switch>
              <Route exact path="/" component={Contenu} />
              <Route path="/historique" component={TodoHistorique} />
            </Switch>
          </div>
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
