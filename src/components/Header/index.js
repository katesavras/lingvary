import React from 'react';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import './style.scss';
import { BurgerMenu } from './components/BurgerMenu';

export const Header = () => {
  return (
    <div className="header">
      <Logo />

      <div className="header__nav">
        <Navigation />
      </div>
      <div className="header__burger-menu">
          <BurgerMenu />
      </div>
    </div>
  );
};
