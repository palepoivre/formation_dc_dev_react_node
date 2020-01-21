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

      <NavLink className="menu-item" to="/Terminer">
        Taches Terminer
      </NavLink>

      <NavLink className="menu-item" to="/recherche">
        Taches En Cours
        </NavLink>

      <NavLink className="menu-item" to="/historique">
        Historique
        </NavLink>
    </Menu>
  );
};
