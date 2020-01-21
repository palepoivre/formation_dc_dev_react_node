import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputNameValue: "",
      inputPasswordValue: ""
    };
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
          <NavLink activeClassName="active" to="/signup">Sign Up</NavLink><small>(Access with token only)</small>
                
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
