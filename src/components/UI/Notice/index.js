import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export const Notice = ({ children }) => {
  return <p className="message">{children}</p>;
};

Notice.propTypes = {
  children: PropTypes.node.isRequired,
};
