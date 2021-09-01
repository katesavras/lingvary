import './index.scss';
import PropTypes from 'prop-types';
import { withPortal } from 'hocs/withPortal';
import React, { useEffect } from 'react';

export const NotificationComponent = ({ onClose, text }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(id);
  }, [onClose]);

  return (
    <div className="notification_wrapper">
      <div>{text}</div>
    </div>
  );
};

NotificationComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export const Notification = withPortal(NotificationComponent);