import React from 'react';
import picture from './img/pageNotFound.jpg';

export const PageNotFound = () => (
  <img
    src={picture}
    alt="page not found"
    className="pageNotFound"
    style={{ width: '100%' }}
  />
);
