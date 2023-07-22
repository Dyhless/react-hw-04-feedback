import React from 'react';
import PropTypes from 'prop-types';
import { NotificationWrapper, NotificationText } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <NotificationWrapper>
      <NotificationText>{message}</NotificationText>
    </NotificationWrapper>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
