import React from "react";
import { BrowserRouter, Switch, Route, NavLink, Link, useParams} from 'react-router-dom';
import axios from 'axios';

import Contenu from "./Contenu/Contenu";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Home from './Header/Home'
import Register from "./Header/register";
import Login from './Header/Login'
import Profile from './Header/Profile'
import Terminer from "./Contenu/Terminer/Terminer";
import TerminerChild from "./Contenu/Terminer/TerminerChild";
import Actif from "./Contenu/Actif/Actif";
import ActifChild from "./Contenu/Actif/ActifChild";
import ContenuTache from "./Contenu/ContenuTache/ContenuTache";
import ContenuTacheChild from "./Contenu/ContenuTache/ContenuTacheChild";



class App extends React.Component {
  constructor(props) {
    super(props);
  // Use of Date.now() function 
  let date_now = Date.now();

  let date_ob = new Date(date_now);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();


    this.state = {
      url: ":path",
      isUserConnected: false,
      userConnected: {},
      editDisabled: false,
      users: [
        {email:"",
        password:""}
      ],
      items: [
        {
          id: "0",
          titre: "",
          date_creation: date + "/" + month + "/" + year , 
          description: "",
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
        this.state.users[i].email === user.email &&
        this.state.users[i].password === user.password
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

  insertNewList = () => {
    axios.post('http://localhost:5000/todo/')
    .then((res) => {
      console.log('request successful', res);
    })
    .catch((err) => {
      console.log('request failed', err);
    })
  }

  render() {
    let contenu;
    
      contenu = (
        <Register
          addUser={user => {
            let newUser = {
              email: user.email,
              password: user.password
            };
            let newUsers = [...this.state.users, newUser];
            this.setState({ users: newUsers });
          }}
        />)
      
    

    return (
      <div id="App">
      <BrowserRouter>
        <Header users={this.state.users} userConnected={this.state.userConnected} connected={this.connected} />
          <div className="content">
            <ul>
              <li>
              <Link to="/login">Connectez-vous</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/todo" component={() => <Contenu items = {this.state.items} setItems={this.setItems}/>} />
              <Route component={() => <ContenuTache items = {this.state.items}/>} />
              <Route exact path="/todo/:id" component={() => <ContenuTacheChild items = {this.state.items}/>} />
              <Route path="/terminers" component={() => <Terminer items = {this.state.items}/>} />
              <Route exact path="/terminer/:id" component={() => <TerminerChild items={this.state.items}/>} />
              <Route path="/actifs" component={() => <Actif items = {this.state.items}/>} />
              <Route exact path="/actif/:id" component={() => <ActifChild items={this.state.items}/>} />
            </Switch>
          </div>
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
