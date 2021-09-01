import './index.scss';
import React, { useEffect } from 'react';
import { withPortal } from 'hocs/withPortal';
import PropTypes from 'prop-types';
import { KEY_CODES } from 'constants/index';

export const ModalComponent = ({ onCancel, title, children, onSubmit }) => {
  const eventHandler = (event) => {
    if (event.code === KEY_CODES.ESCAPE) {
      onCancel();
    } else if (event.code === KEY_CODES.ENTER) {
      onSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', eventHandler);

    return () => {
      window.removeEventListener('keydown', eventHandler);
    };
  });

  return (
    <>
      <div className="modal" onClick={onCancel}>
        {' '}
      </div>
      <div className="modal__content">
        <span onClick={onCancel}>&times;</span>
        <p className="modal__content_title">{title}</p>
        {children}
        <div className="modal__control">
          <button className="modal__control_btn" onClick={onSubmit}>
            Ok
          </button>
        </div>
      </div>
    </>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export const Modal = withPortal(ModalComponent);
