import React from "react";
import { Switch, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="topnav">
      <Switch>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </Switch>

      <Switch>
        <NavLink to="contact">Contact</NavLink>
      </Switch>

      <Switch>
        <NavLink to="/about">About</NavLink>
      </Switch>
    </div>
  );
}
