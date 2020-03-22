import React from "react";
import { slide as Menu } from "react-burger-menu";
import {NavLink} from "react-router-dom"

export default props => {
	
  return (
    
    <Menu {...props}>
      <NavLink className="menu-item" to="/">
        Home
      </NavLink>

      <NavLink className="menu-item" to="/todo">
        Todo
      </NavLink>

      <NavLink className="menu-item" to="/terminers">
        Taches Terminer
      </NavLink>

      <NavLink className="menu-item" to="/actifs">
        Taches En Cours
        </NavLink>
    </Menu>
  );
};
