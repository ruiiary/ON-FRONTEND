import PageHeader from '../../components/PageHeader/PageHeader';
import * as s from './NotificationPageStyled';
import NoContent from '../../components/NoContent/NoContent';
import { getData } from '../../api/Functions';
import { useState } from 'react';
import { GET_ALERT_LIST } from '../../api/urls';
import Loading from '../../components/Loading/Loading';
import SingleNotification from '../../components/Notification/SingleNotification';
import { useInfiniteQuery } from 'react-query';
import ErrorScreen from '../../components/ErrorScreen';

const Notification = () => {
  const [error, setError] = useState(false);

  const fetchNotifications = async ({ pageParam = 0 }) => {
    const response = await getData(
      GET_ALERT_LIST,
      {
        Authorization: `Bearer ${localStorage.getItem('AToken')}`,
      },
      { page: pageParam, size: 20, sort: 'createdAt%2Cdesc' },
    );
    return response.data;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery('notifications', fetchNotifications, {
    staleTime: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 20) return undefined; // 데이터가 없으면 멈춤
      return allPages.length; // 다음 페이지 번호 반환
    },
  });

  const handleScroll = (e) => {
    if (
      e.target.scrollHeight - e.target.scrollTop <=
        e.target.clientHeight + 50 &&
      hasNextPage
    ) {
      fetchNextPage();
    }
  };

  const isEmpty =
    !data || (data.pages.length === 1 && data.pages[0].length === 0);

  if (isError || error) {
    return <ErrorScreen />;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <s.NotificationLayout
      style={{ overflowY: 'auto', height: '100vh' }}
      onScroll={handleScroll}
    >
      <PageHeader pageName="알림" />
      <s.NotificationWrapper>
        {isEmpty ? (
          <NoContent content="알림 내역" />
        ) : (
          data?.pages.map((page, i) =>
            page.map((data) => (
              <SingleNotification
                key={data.alertId}
                id={data.alertId}
                title={data.title}
                content={data.content}
                alertType={data.alertType}
                alertConnectId={data.alertConnectId}
                read={data.read}
                setError={setError}
              />
            )),
          )
        )}
        {isFetchingNextPage && <Loading />}
        {!isEmpty ? (
          <s.NotificationEnd>알람 내역의 마지막이에요</s.NotificationEnd>
        ) : null}
      </s.NotificationWrapper>
    </s.NotificationLayout>
  );
};

export default Notification;
