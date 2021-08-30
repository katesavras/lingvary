import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink className="home" to="/home">
        Home
      </NavLink>
      <NavLink className="dictionary" to="/dictionary">
        Dictionary
      </NavLink>
      <NavLink className="practice" to="/practice">
        Practice
      </NavLink>
    </div>
  );
};
