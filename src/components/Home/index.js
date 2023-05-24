import React from 'react';
import picture from './img/dictionary.png';
import './style.scss';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home__wrapper" style={{ backgroundImage: `url(${picture})` }}>
      <div className="home__content">
        <h1>
          Unlock the power of words with Lingvary
        </h1>
        <p>
          Start your vocabulary adventure today and watch your language skills reach new heights!
        </p>
        <NavLink to="/dictionary">
          <button>
            Let`s start <span>&rarr;</span>{' '}
          </button>
        </NavLink>
      </div>
    </div>
  );
};
