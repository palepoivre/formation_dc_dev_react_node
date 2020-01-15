import React from "react";
import { slide as Menu } from "react-burger-menu";
import {NavLink} from "react-router-dom"

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <NavLink className="menu-item" to="/">
        Home
      </NavLink>

      <NavLink className="menu-item" to="/historique">
        Fait
      </NavLink>

      <a className="menu-item" href="/recherche">
        En attente
      </a>

      <a className="menu-item" href="/historique">
        Historique
      </a>
    </Menu>
  );
};
