import './index.scss';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { withPortal } from 'hocs/withPortal';
import React, { useEffect } from 'react';

export const NotificationComponent = ({ onClose, text }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(id);
  }, [onClose]);

  return ReactDom.createPortal(
    <div className="notification_wrapper">
      <div>{text}</div>
    </div>,
    document.getElementById('root'),
  );
};

NotificationComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export const Notification = withPortal(NotificationComponent);
