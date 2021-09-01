import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export const Navigation = () => {
  return (
    <div className="nav">
      <NavLink className="nav__home" to="/home">
        Home
      </NavLink>
      <NavLink className="nav__dictionary" to="/dictionary">
        Dictionary
      </NavLink>
      <NavLink className="nav__practice" to="/practice">
        Practice
      </NavLink>
    </div>
  );
};
