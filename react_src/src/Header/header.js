import React, { Component } from 'react'
import App from "./../App";
import SideBar from "./Sidebar/sidebar";
import Login from "./Login";
import { ReactComponent as Logo } from "./Image/logo.png";
import { Link, withRouter } from 'react-router-dom'

class Home extends Component {
	
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  
  render() {
	  
	const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>        
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )
	
    return (
      <div id="Header">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"Todo"} />
        <div className="Titre">
          
		  <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
			<div
			  className="navbar-collapse justify-content-md-center"
			  id="navbarsExample10"
			>
			  <ul className="nav-ul">
				<li className="nav-item">
				  <Link to="/" className="nav-link">
					<h1>Just To do </h1>
				  </Link>
				</li>
			  </ul>
			  {localStorage.usertoken ? userLink : loginRegLink}
			</div>
		  </nav>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
