import React from 'react';
import '../css/Notification.css';

const Notification = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="notification">
      <span>{message}</span>
      <button className="notification-close" onClick={onClose}>×</button>
    </div>
  );
};

export default Notification;
