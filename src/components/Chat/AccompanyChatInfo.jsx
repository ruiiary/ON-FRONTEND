import * as s from './AccompanyChatInfoStyled';

const AccompanyChatInfo = ({
  messageInitiator,
  pointColor,
  userName,
  infoResult,
}) => {
  // const [infoResult, setInfoResult] = useState([]);

  const pointColorOpacity = (e) => {
    return `${pointColor.replace('1)', ` ${e})`)}`;
  };

  return (
    <s.InfoWrapper color={pointColorOpacity(0.2)}>
      {messageInitiator ? (
        <s.Info>
          <span style={{ color: pointColor, fontWeight: '900' }}>
            {userName}
          </span>
          <span>님께 궁금한 점을 물어보세요!</span>
        </s.Info>
      ) : (
        <s.Info>
          <span style={{ color: pointColor, fontWeight: '900' }}>
            {userName}
          </span>
          님이 해당 여정에 대해 채팅을 시작했습니다. 동행 모집이 완료되면 상단의
          <span
            style={{
              color: 'white',
              background: 'linear-gradient(135deg, #c2c7ff 0%, #ad99ff 100%)',
              borderRadius: '0.5rem',
              fontWeight: '900',
              padding: '0 0.4rem',
            }}
          >
            모집 완료
          </span>
          를 눌러주세요.
        </s.Info>
      )}
      <s.PreferredIcon />
      <s.PreferredPeriod>
        <s.Category>희망 시기</s.Category>
        <s.Content>
          {infoResult.startDate} ~ {infoResult.endDate}
        </s.Content>
      </s.PreferredPeriod>
      <s.LocationIcon />
      <s.Location>
        <s.Category>지역</s.Category>
        <s.LocationContent>
          {infoResult?.location?.map((data, index) => (
            <span key={index}>
              {data}
              {index < infoResult.location.length - 1 && ', '}
            </span>
          ))}
        </s.LocationContent>
      </s.Location>
      <s.NumIcon />
      <s.NumberOfPeople>
        <s.Category>모집 인원</s.Category>
        <s.Content>
          ( {infoResult.participantNumber} / {infoResult.recruitNumber} )
        </s.Content>
      </s.NumberOfPeople>
    </s.InfoWrapper>
  );
};

export default AccompanyChatInfo;
