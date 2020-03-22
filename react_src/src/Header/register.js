import React from "react";

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Link} from "react-router-dom";
import {register} from './UserFunctions'

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
	  email: "",
      password: "",
      errors: {},
      redirectAfterRegister: false
    };

	this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    this.getErrors = this.getErrors.bind(this);
  }
  
  getErrors = () => {
    let errors = {};

    if (this.state.username === "") {
      errors.username = "Username vide";
    }
	if (this.state.email === "") {
      errors.email = "Email vide";
    }
    if (this.state.password === "") {
      errors.password = "Le mot de passe est vide";
    }
    return errors;
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  onSubmit(event) {
    // Je crée un objet user
    let user = {
      username: this.state.username,
	  email: this.state.email,
      password: this.state.password
    };

    //la gestion d'erreur
    let errors = this.getErrors();
    let newState = { errors: errors };


	
    if (Object.entries(errors).length === 0) {
      //j'ajoute l'utilisateur

    register(user).then(res => {
      this.props.history.push(`/login`)
    })
	}
  }

  render() {
    return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 mt-5 mx-auto">
		  <form noValidate onSubmit={this.onSubmit}>
        <h2>Création d'un compte</h2>
        <div className="username">
          <div className="form-group">
          <label>
            <span>Username</span>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Saisir username"
              value={this.state.username}
              onChange={this.onChange}
            />
          </label>
          </div>
          <div className="form-group">
            <span className="errors">{this.state.errors.username}</span>
            <label>
            <span>Email</span>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onChange}
            />
            </label>
            <span className="errors">{this.state.errors.email}</span>
          </div>  
          <div className="form-group">
            <label>
            <span>Mot de passe</span>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Mot de passe"
              value={this.state.password}
              onChange={this.onChange}
            />
            </label>
            <span className="errors">{this.state.errors.password}</span>
            </div>
        </div>
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
          >
            Enregistrement !
          </button>
        </form>
        </div>
      </div>
      </div>
    );
  }
}
export default Register
