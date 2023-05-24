import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const handleCheckboxChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleShadowClick = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  return (
    <>
      { isMenuOpen &&
        <div className="burger-shadow" onClick={handleShadowClick}>
          {' '}
        </div>
      }

      <div className="burger-menu">
        <input id="menu-toggle"
               type="checkbox"
               checked={isMenuOpen}
               onChange={handleCheckboxChange}
        />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button" />
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
            <NavLink className="nav__my-dictionary" to="/mydictionary">
              My Dictionary
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__practice" to="/practice">
              Practice
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
