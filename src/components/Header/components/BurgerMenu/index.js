import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export const BurgerMenu = () => {
  return (
      <div className="burger-menu">
          <input id="menu-toggle" type="checkbox"/>
          <label className='menu-button-container' htmlFor="menu-toggle">
              <div className='menu-button'/>
          </label>
          <ul className="menu">
              <li>
                  <NavLink className="nav__home" to="/home">
                      Home
                  </NavLink>
              </li>
             <li>
                 <NavLink className="nav__dictionary" to="/dictionary">
                     Dictionary
                 </NavLink>
             </li>
            <li>
                <NavLink className="nav__practice" to="/practice">
                    Practice
                </NavLink>
            </li>
          </ul>
      </div>
  );
};
