import { useEffect, useState } from 'react';
import * as s from './SingleNotificationStyled';
import theme from '../../styles/theme';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../api/Functions';
import { POST_READ_ALERT } from '../../api/urls';

const SingleNotification = ({
  id,
  title,
  content,
  alertType,
  alertConnectId,
  read,
}) => {
  const navigate = useNavigate();

  const clickNotification = () => {
    if (read == false) {
      try {
        postData(
          POST_READ_ALERT(id),
          { alertId: id },
          {
            Authorization: `Bearer ${localStorage.getItem('AToken')}`,
          },
          {},
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    if (alertType === 'COMPANY') {
      navigate(`/accompany/detail/${alertConnectId}`);
    } else if (alertType === 'INFORMATION') {
      navigate(`/community/info/detail/${alertConnectId}`);
    } else if (alertType === 'FREE') {
      navigate(`/community/general/detail/${alertConnectId}`);
    } //추가 필요
  };
  if (read == true) {
    return (
      <s.ReadNotificationContainer onClick={() => clickNotification()}>
        <s.ReadNotificationTitle>{title}</s.ReadNotificationTitle>
        <s.NotificationText>{content}</s.NotificationText>
      </s.ReadNotificationContainer>
    );
  } else if (read == false) {
    return (
      <s.NotificationContainer onClick={() => clickNotification()}>
        <s.NotificationTitle>{title}</s.NotificationTitle>
        <s.NotificationText>{content}</s.NotificationText>
        <s.NotificationCircle />
      </s.NotificationContainer>
    );
  }
};

export default SingleNotification;