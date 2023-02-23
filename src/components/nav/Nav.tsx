import React from "react";
import navStyles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <img className={navStyles.logo} src="..//src/assets/logo.png" alt="" />
      <ul className={navStyles.menu}>
        <li>
          <a href="#">Characters</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Episodes</a>
        </li>
      </ul>
    </nav>
  );
}
