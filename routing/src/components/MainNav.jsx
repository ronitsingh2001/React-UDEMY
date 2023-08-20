import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({isActive})=>isActive? classes.active:undefined} end to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive? classes.active:undefined} end to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
