import React from "react";
import picture from "./img/dictionary.jpg";
import "./style.scss";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div
      className="home__wrapper"
      style={{ backgroundImage: `url(${picture})` }}
    >
      <div className="home__content">
        <h1>
          Learn Words
          <br />
          With
          <br />
          Lingvary
        </h1>
        <p>
          This app helps you quickly and easily <br /> remember new words.
        </p>
        <NavLink to="/dictionary">
          <button>
            Let`s start <span>&rarr;</span>{" "}
          </button>
        </NavLink>
      </div>
    </div>
  );
};
