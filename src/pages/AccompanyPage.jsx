import styled from 'styled-components';
import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';

import AccompanyHomeComponent from '../components/AccompanyHomeComponent';
import DateRangePicker from '../components/CompanyCalendar/CompanyCalendar.jsx';
import closeIcon from '../assets/images/close_button.svg';
import GenderChoice from '../components/GenderChoice.jsx';
import SelectCountry from './SelectCountry/SelectCountry.jsx';

import Loading from '../components/Loading/Loading.jsx';

import { getData } from '../api/Functions';
import { GET_ALL_ACCOMPANY, GET_FILTER_ACCOMPANY, GET_USER_INFO } from '../api/urls';
function AccompanyPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUserLoading, setIsUserLoading] = useState(true);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isDateClicked, setIsDateClicked] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [showGender, setShowGender] = useState(false);
  const [gender, setGender] = useState(null);
  const [isGenderClicked, setIsGenderClicked] = useState(false);

  const [showCountry, setShowCountry] = useState(false);
  const [country, setCountry] = useState(null);
  const [isCountryClicked, setIsCountryClicked] = useState(false);
  const [allData, setAllData] = useState([]);
  const [isValidated, setIsValidated] = useState(null);
  const [page, setPage] = useState(0);

  const handleFilterClick = useCallback(() => {
    console.log("handleFilterClick");
    setPage(0);
    setAllData([]); 
 }, []);
 
 const handleIsDateClickedChange = useCallback(() => {
  console.log("handleIsDateClickedChange");
    setIsDateClicked(false);
    setStartDate(null);
    setEndDate(null);
    handleFilterClick();
 }, [handleFilterClick]);
 
 const resetGenderClick = useCallback(() => {
  console.log("resetGenderClick");
    setIsGenderClicked(false);
    setGender(null);
    handleFilterClick();
 }, [handleFilterClick]);
 
 const resetCountryClick = useCallback(() => {
  console.log("resetCountryClick");
    setIsCountryClicked(false);
    setCountry(null);
    handleFilterClick();
 }, [handleFilterClick]);
 
 const handleResetAll = useCallback(() => {
  console.log("handleResetAll");
    setIsDateClicked(false);
    setIsGenderClicked(false);
    setIsCountryClicked(false);
    setStartDate(null);
    setEndDate(null);
    setGender(null);
    setCountry(null);
    setPage(0);
    setAllData([]);
 }, []);
 
 const handleApplyClick = useCallback((start, end) => {
  console.log("handleApplyClick");
    setStartDate(moment(start).format('YYYY-MM-DD'));
    setEndDate(moment(end).format('YYYY-MM-DD'));
    setIsDateClicked(true);
    setShowCalendar(false);
    handleFilterClick();
 }, [handleFilterClick]);
 
 const handleGetGender = useCallback((gender) => {
  console.log("handleGetGender");
    setGender(gender);
    setIsGenderClicked(true);
    setShowGender(false);
    handleFilterClick();
 }, [handleFilterClick]);
 
 const handleGetCountry = useCallback((country) => {
  console.log("handleGetCountry");
    setCountry(country);
    setIsCountryClicked(true);
    setShowCountry(false);
    handleFilterClick();
 }, [handleFilterClick]);

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleGenderClick = () => {
    setShowGender(!showGender);
  };

  const handleCountryClick = () => {
    setShowCountry(!showCountry);
  };

  const fetchData = async () => { 
      try {
          setIsLoading(true);
          
          const params = {};
          
          if (startDate) params.startDate = startDate;
          if (endDate) params.endDate = endDate;
          if (gender) params.gender = gender === "여자" ? 'FEMALE' : 'MALE';
          if (country) params.country = country;

          console.log('Current params:', params); // 디버깅용

          const all_data = await getData(GET_FILTER_ACCOMPANY, {
            Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          },
          {
              page: page,
              size: 4,
              ...params
          });

          // console.log("param is " + params);
          console.log("params:", params);
          // console.log("all data is " + all_data);

          if (page === 0) {
            console.log("all data");
            console.log(all_data.data.content);
              setAllData(all_data.data.content);
          } else {
            console.log("extra data");
            console.log(all_data.data.content);
              setAllData(prevData => [...prevData, ...all_data.data.content]);
          }


          const user_data = await getData(GET_USER_INFO, {
              Authorization: `${localStorage.getItem('grantType')} ${localStorage.getItem('AToken')}`,
          });

          setIsValidated(user_data.data.country);

      } catch (error) {
          console.error('Error fetching data:', error);
      } finally {
          setIsLoading(false);
      }
  };

  // 필터 상태나 페이지가 변경될 때만 데이터를 가져옴
  useEffect(() => {
    console.log("Fetching data with", { page, startDate, endDate, gender, country });
    fetchData();
}, [page, startDate, endDate, gender, country, isGenderClicked, isCountryClicked, isDateClicked]);

  const handleScroll = useCallback(() => {
      const scrolledToBottom = 
          window.innerHeight + document.documentElement.scrollTop 
          >= document.documentElement.offsetHeight - 10;

      if (scrolledToBottom && !isLoading) {
          setPage(prevPage => prevPage + 1);
      }
  }, [isLoading]);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (isLoading && page === 0) {
      return <Loading/>
  }


    return (
      <>
        <AccompanyHomeComponent
          allData={allData}
          startDate={startDate}
          endDate={endDate}
          isDateClicked={isDateClicked}
          calendarClick={handleCalendarClick}
          updateIsDateClicked={handleIsDateClickedChange}
          genderClick={handleGenderClick}
          gender={gender}
          isGenderClicked={isGenderClicked}
          updateIsGenderClicked={resetGenderClick}
          countryClick={handleCountryClick}
          country={country}
          isCountryClicked={isCountryClicked}
          updateIsCountryClicked={resetCountryClick}
          updateEverything={handleResetAll}
          isValidated={isValidated}
        />
        
        {showCalendar && 
          <>
            <Overlay onClick={handleCalendarClick} />
            <BottomTabLayout $height="53vh">
              <TopHeader>
                날짜
              </TopHeader>
              <Close src={closeIcon} onClick={handleCalendarClick} />
              <DateRangePicker onApply={handleApplyClick} />
            </BottomTabLayout>
          </>
        }

        {showGender && 
          <>
            <Overlay onClick={handleGenderClick} />
            <BottomTabLayout>
              <Close src={closeIcon} onClick={handleGenderClick} />
              <GenderChoice getGender={handleGetGender}/>
            </BottomTabLayout>
          </>
        }

        {showCountry &&
          <SelectCountry closeModal={handleCountryClick} getCountry={handleGetCountry}/>
        }
      </>
    );
}

export default AccompanyPage;

const TopHeader = styled.div`
  font-size: 12px;
  color: #CCCCCC;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

const Close = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const BottomTabLayout = styled.div`
  width: 100%;
  max-width: 480px;
  height: ${props => props.$height || 'auto'};
  position: fixed;
  bottom: 0;
  border-radius: 14px 14px 0px 0px;
  border: 1px solid white;
  background: #ffffff;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0px -1px 4px 0px #e2e2e2;
`;
