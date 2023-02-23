import React from "react";
import { NavLink } from "react-router-dom";
import navStyles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <img className={navStyles.logo} src="..//src/assets/logo.png" alt="" />
      <ul className={navStyles.menu}>
        <li>
          <NavLink to="/">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/Locations">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/Episodes">Episodes</NavLink>
        </li>
      </ul>
    </nav>
  );
}
