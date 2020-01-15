import React from "react";

import App from "./../../App/App";
import SideBar from "./Sidebar/sidebar";
import Login from "./Login/Login";
import { ReactComponent as Logo } from "./Image/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div id="Header">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"Todo"} />
        <div className="Titre">
          <h1>Ma Todo</h1>
        </div>
        <div className="Login">
          <Login
            Users={this.props.users}
            userConnected={this.props.userConnected}
            connect={user => this.props.connected(user)}
          />
        </div>
      </div>
    );
  }
}
export default Header;
