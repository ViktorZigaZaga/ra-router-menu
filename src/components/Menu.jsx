import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
      <nav className="menu">
        <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"}  to="/">Главная</NavLink>
        <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"} to="/drift">ДРИФТ-ТАКСИ</NavLink>
        <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"} to="/timeattack">TIME ATTACK</NavLink>
        <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"} to="/forza">FORZA KARTING</NavLink>
      </nav>

    );
}

export default Menu
  