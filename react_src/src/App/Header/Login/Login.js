import React, { Component } from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorLogin: ''
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
      axios.post("http://localhost:3001/login", {
        email: this.state.email,
        password: this.state.password
      },
      {
        withCredentials: true
      });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.connect(this.state);
          }}
        >
          <div className="login">
            <div>
              <input
                placeholder="Username"
                onChange={e => {
                  this.setState({ inputNameValue: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                placeholder="Password"
                type="password"
                onChange={e => {
                  this.setState({ inputPasswordValue: e.target.value });
                }}
              />
            </div>
          </div>
          <button>Login</button>
          <button>
          <NavLink activeClassName="active" to="/register">Sign Up</NavLink><small>(Access with token only)</small>
                
          </button>
        </form>
        <a href={`/users/${this.props.userConnected.username}`}>
          {this.props.userConnected.username}
        </a>
      </div>
    );
  }
}

export default Login;
