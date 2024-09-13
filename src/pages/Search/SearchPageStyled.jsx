import styled from 'styled-components';
import theme from '../../styles/theme';

export const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 480px;
  display: flex;
  box-sizing: border-box;
  padding: 1.5rem 1rem 0px;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const SearchWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
`;

export const SearchBox = styled.div`
  width: 85%;
  height: 2.75rem;
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled.input`
  height: 2.75rem;
  width: 100%;
  border-radius: 1.875rem;
  border: 0.5px solid #ccc;
  padding-inline-start: 1.45rem;
  padding-inline-end: 2rem;
  background: linear-gradient(
    135deg,
    rgba(214, 235, 255, 0.8) 0%,
    rgba(194, 199, 255, 0.8) 100%
  );
  outline: none;
`;

export const SearchButton = styled.img`
  width: 1.57444rem;
  height: 1.5rem;
  position: absolute;
  right: 1.2rem;
`;

export const Exit = styled.img`
  width: 16px;
  height: 16px;
  padding-right: 1rem;
`;

export const PreSearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 60px;
  p {
    color: rgba(131, 131, 131, 0.2);
    text-align: center;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.0175rem;
  }
`;

export const SearchResultContainer = styled.section`
  display: block;
  width: 100%;
`;

export const LastText = styled.span`
  color: #b8b8b8;
  text-align: center;
  font-family: Inter;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ONIconSVG = styled.svg`
  margin: 1.69rem 0 0.5rem;
`;

//svg 파일
export const PreSearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="137"
      height="123"
      viewBox="0 0 137 123"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.8272 35.548C40.738 35.1601 38.3772 34.8453 36.3686 35.5385C34.1853 36.292 31.9431 36.4742 29.8047 36.1644C25.6481 42.6865 22.9621 50.2371 22.2139 58.3491C23.2732 58.1204 24.3727 58 25.5004 58C32.4608 58 38.3497 62.5879 40.3078 68.9045C40.8621 70.6925 42.6285 72 44.5004 72C45.9492 72 47.2724 71.0213 47.9948 69.7655C49.2894 67.5152 51.718 66 54.5004 66C58.6426 66 62.0004 69.3579 62.0004 73.5C62.0004 73.5919 61.9988 73.6835 61.9955 73.7746C61.9223 75.8084 61.4674 78.0443 61.0105 80.2905C60.5067 82.7671 60.0004 85.2561 60.0004 87.5C60.0004 89.8938 61.6814 92.2975 63.4729 93.8852C65.0232 95.2592 66.0004 97.2655 66.0004 99.5C66.0004 103.642 62.6426 107 58.5004 107C56.4928 107 54.1469 107.82 52.538 109.071C58.52 111.601 65.0968 113 72.0004 113C99.6147 113 122 90.6142 122 63C122 35.3858 99.6147 13 72.0004 13C70.5297 13 69.0738 13.0635 67.6353 13.1879C68.8905 19.8946 65.0798 26.6878 58.4365 28.9805C57.9254 29.1569 57.4112 29.3019 56.8958 29.4167C54.4711 29.9567 51.929 31.7243 49.667 33.2971C49.0479 33.7275 48.4498 34.1434 47.8809 34.5155C47.409 34.8241 46.8891 35.0814 46.3275 35.2752C45.1502 35.6815 43.9447 35.7555 42.8272 35.548Z"
        fill="#C2C7FF"
        fillOpacity="0.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M72 123C105.137 123 132 96.1371 132 63C132 29.8629 105.137 3 72 3C38.8629 3 12 29.8629 12 63C12 96.1371 38.8629 123 72 123ZM72 120C103.48 120 129 94.4802 129 63C129 31.5198 103.48 6 72 6C40.5198 6 15 31.5198 15 63C15 94.4802 40.5198 120 72 120Z"
        fill="#C2C7FF"
        fillOpacity="0.5"
      />
      <mask
        id="path-3-outside-1_1073_5880"
        maskUnits="userSpaceOnUse"
        x="77"
        y="0"
        width="60"
        height="67"
        fill="black"
      >
        <rect
          fill="white"
          x="77"
          width="60"
          height="67"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M111.884 55.5421C123.909 53.2568 133 42.6901 133 30C133 15.6406 121.359 4 107 4C92.6406 4 81 15.6406 81 30C81 42.6904 90.0919 53.2573 102.117 55.5423L106.134 62.5C106.519 63.1667 107.482 63.1667 107.866 62.5L111.884 55.5421Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.884 55.5421C123.909 53.2568 133 42.6901 133 30C133 15.6406 121.359 4 107 4C92.6406 4 81 15.6406 81 30C81 42.6904 90.0919 53.2573 102.117 55.5423L106.134 62.5C106.519 63.1667 107.482 63.1667 107.866 62.5L111.884 55.5421Z"
        fill="#E1E3FF"
      />
      <path
        d="M111.884 55.5421L111.137 51.6124L109.336 51.9546L108.419 53.5421L111.884 55.5421ZM102.117 55.5423L105.581 53.5423L104.665 51.9547L102.864 51.6126L102.117 55.5423ZM106.134 62.5L109.598 60.5L109.598 60.5L106.134 62.5ZM107.866 62.5L111.331 64.5L107.866 62.5ZM129 30C129 40.7334 121.309 49.6792 111.137 51.6124L112.63 59.4718C126.508 56.8345 137 44.6469 137 30H129ZM107 8C119.15 8 129 17.8497 129 30H137C137 13.4315 123.569 0 107 0V8ZM85 30C85 17.8497 94.8497 8 107 8V0C90.4315 0 77 13.4315 77 30H85ZM102.864 51.6126C92.6909 49.6796 85 40.7337 85 30H77C77 44.6472 87.493 56.8351 101.371 59.4719L102.864 51.6126ZM109.598 60.5L105.581 53.5423L98.6532 57.5423L102.67 64.5L109.598 60.5ZM104.402 60.5C105.557 58.5 108.444 58.5 109.598 60.5L102.67 64.5C104.595 67.8333 109.406 67.8333 111.331 64.5L104.402 60.5ZM108.419 53.5421L104.402 60.5L111.331 64.5L115.348 57.5421L108.419 53.5421Z"
        fill="white"
        mask="url(#path-3-outside-1_1073_5880)"
      />
      <path
        d="M127 30C127 41.0457 118.046 50 107 50C95.9543 50 87 41.0457 87 30C87 18.9543 95.9543 10 107 10C118.046 10 127 18.9543 127 30Z"
        fill="white"
      />
      <path
        d="M120 30C120 37.1797 114.18 43 107 43C99.8203 43 94 37.1797 94 30C94 22.8203 99.8203 17 107 17C114.18 17 120 22.8203 120 30Z"
        fill="#E1E3FF"
      />
      <mask
        id="path-7-outside-2_1073_5880"
        maskUnits="userSpaceOnUse"
        x="75"
        y="76"
        width="54"
        height="33"
        fill="black"
      >
        <rect
          fill="white"
          x="75"
          y="76"
          width="54"
          height="33"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M83.5789 92.4737C83.5789 92.9173 83.5989 93.3563 83.638 93.7897L83.5789 93.7895C79.9455 93.7895 77 96.735 77 100.368C77 104.002 79.9455 106.947 83.5789 106.947H98.0526H110.553H120.421C124.055 106.947 127 104.002 127 100.368C127 96.735 124.055 93.7895 120.421 93.7895C120.235 93.7895 120.05 93.7972 119.868 93.8124C118.626 90.2711 115.422 87.6526 111.559 87.2612C109.467 81.8432 104.209 78 98.0526 78C90.059 78 83.5789 84.4801 83.5789 92.4737Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M83.5789 92.4737C83.5789 92.9173 83.5989 93.3563 83.638 93.7897L83.5789 93.7895C79.9455 93.7895 77 96.735 77 100.368C77 104.002 79.9455 106.947 83.5789 106.947H98.0526H110.553H120.421C124.055 106.947 127 104.002 127 100.368C127 96.735 124.055 93.7895 120.421 93.7895C120.235 93.7895 120.05 93.7972 119.868 93.8124C118.626 90.2711 115.422 87.6526 111.559 87.2612C109.467 81.8432 104.209 78 98.0526 78C90.059 78 83.5789 84.4801 83.5789 92.4737Z"
        fill="#EBEBEB"
      />
      <path
        d="M83.638 93.7897L85.6299 93.6102L85.8272 95.7994L83.6291 95.7897L83.638 93.7897ZM83.5789 93.7895V91.7895L83.5878 91.7895L83.5789 93.7895ZM119.868 93.8124L120.034 95.8055L118.492 95.9339L117.98 94.4742L119.868 93.8124ZM111.559 87.2612L111.358 89.2511L110.136 89.1273L109.694 87.9817L111.559 87.2612ZM81.6461 93.9693C81.6016 93.4762 81.5789 92.9773 81.5789 92.4737H85.5789C85.5789 92.8573 85.5962 93.2364 85.6299 93.6102L81.6461 93.9693ZM83.5878 91.7895L83.6468 91.7898L83.6291 95.7897L83.5701 95.7895L83.5878 91.7895ZM75 100.368C75 95.6304 78.8409 91.7895 83.5789 91.7895V95.7895C81.0501 95.7895 79 97.8395 79 100.368H75ZM83.5789 108.947C78.8409 108.947 75 105.106 75 100.368H79C79 102.897 81.0501 104.947 83.5789 104.947V108.947ZM83.5789 104.947H98.0526V108.947H83.5789V104.947ZM98.0526 104.947H110.553V108.947H98.0526V104.947ZM110.553 104.947H120.421V108.947H110.553V104.947ZM129 100.368C129 105.106 125.159 108.947 120.421 108.947V104.947C122.95 104.947 125 102.897 125 100.368H129ZM120.421 91.7895C125.159 91.7895 129 95.6304 129 100.368H125C125 97.8395 122.95 95.7895 120.421 95.7895V91.7895ZM119.702 91.8193C119.939 91.7995 120.179 91.7895 120.421 91.7895V95.7895C120.29 95.7895 120.161 95.7949 120.034 95.8055L119.702 91.8193ZM111.761 85.2714C116.412 85.7427 120.262 88.8931 121.755 93.1506L117.98 94.4742C116.99 91.649 114.431 89.5625 111.358 89.2511L111.761 85.2714ZM98.0526 76C105.062 76 111.045 80.3774 113.425 86.5408L109.694 87.9817C107.889 83.309 103.355 80 98.0526 80V76ZM81.5789 92.4737C81.5789 83.3755 88.9545 76 98.0526 76V80C91.1636 80 85.5789 85.5847 85.5789 92.4737H81.5789Z"
        fill="white"
        mask="url(#path-7-outside-2_1073_5880)"
      />
      <mask
        id="path-9-outside-3_1073_5880"
        maskUnits="userSpaceOnUse"
        x="0"
        y="47"
        width="54"
        height="33"
        fill="black"
      >
        <rect
          fill="white"
          y="47"
          width="54"
          height="33"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.4211 63.4737C45.4211 63.9173 45.4011 64.3563 45.362 64.7897L45.4211 64.7895C49.0545 64.7895 52 67.735 52 71.3684C52 75.0019 49.0545 77.9474 45.4211 77.9474H30.9474H18.4474H8.57895C4.9455 77.9474 2 75.0019 2 71.3684C2 67.735 4.9455 64.7895 8.57895 64.7895C8.76534 64.7895 8.94993 64.7972 9.1324 64.8124C10.3742 61.2711 13.5784 58.6526 17.4407 58.2612C19.533 52.8432 24.7913 49 30.9474 49C38.941 49 45.4211 55.4801 45.4211 63.4737Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.4211 63.4737C45.4211 63.9173 45.4011 64.3563 45.362 64.7897L45.4211 64.7895C49.0545 64.7895 52 67.735 52 71.3684C52 75.0019 49.0545 77.9474 45.4211 77.9474H30.9474H18.4474H8.57895C4.9455 77.9474 2 75.0019 2 71.3684C2 67.735 4.9455 64.7895 8.57895 64.7895C8.76534 64.7895 8.94993 64.7972 9.1324 64.8124C10.3742 61.2711 13.5784 58.6526 17.4407 58.2612C19.533 52.8432 24.7913 49 30.9474 49C38.941 49 45.4211 55.4801 45.4211 63.4737Z"
        fill="#EBEBEB"
      />
      <path
        d="M45.362 64.7897L43.3701 64.6102L43.1728 66.7994L45.3709 66.7897L45.362 64.7897ZM45.4211 64.7895V62.7895L45.4122 62.7895L45.4211 64.7895ZM9.1324 64.8124L8.96639 66.8055L10.5079 66.9339L11.0197 65.4742L9.1324 64.8124ZM17.4407 58.2612L17.6423 60.2511L18.864 60.1273L19.3064 58.9817L17.4407 58.2612ZM47.3539 64.9693C47.3984 64.4762 47.4211 63.9773 47.4211 63.4737H43.4211C43.4211 63.8573 43.4038 64.2364 43.3701 64.6102L47.3539 64.9693ZM45.4122 62.7895L45.3532 62.7898L45.3709 66.7897L45.4299 66.7895L45.4122 62.7895ZM54 71.3684C54 66.6304 50.1591 62.7895 45.4211 62.7895V66.7895C47.9499 66.7895 50 68.8395 50 71.3684H54ZM45.4211 79.9474C50.1591 79.9474 54 76.1064 54 71.3684H50C50 73.8973 47.9499 75.9474 45.4211 75.9474V79.9474ZM45.4211 75.9474H30.9474V79.9474H45.4211V75.9474ZM30.9474 75.9474H18.4474V79.9474H30.9474V75.9474ZM18.4474 75.9474H8.57895V79.9474H18.4474V75.9474ZM0 71.3684C0 76.1064 3.84093 79.9474 8.57895 79.9474V75.9474C6.05006 75.9474 4 73.8973 4 71.3684H0ZM8.57895 62.7895C3.84093 62.7895 0 66.6304 0 71.3684H4C4 68.8395 6.05006 66.7895 8.57895 66.7895V62.7895ZM9.29841 62.8193C9.0608 62.7995 8.82083 62.7895 8.57895 62.7895V66.7895C8.70986 66.7895 8.83906 66.7949 8.96639 66.8055L9.29841 62.8193ZM17.2391 56.2714C12.5881 56.7427 8.738 59.8931 7.24507 64.1506L11.0197 65.4742C12.0104 62.649 14.5687 60.5625 17.6423 60.2511L17.2391 56.2714ZM30.9474 47C23.9375 47 17.9551 51.3774 15.575 57.5408L19.3064 58.9817C21.1109 54.309 25.6451 51 30.9474 51V47ZM47.4211 63.4737C47.4211 54.3755 40.0455 47 30.9474 47V51C37.8364 51 43.4211 56.5847 43.4211 63.4737H47.4211Z"
        fill="white"
        mask="url(#path-9-outside-3_1073_5880)"
      />
    </svg>
  );
};

export const ONIcon = () => {
  return (
    <ONIconSVG
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="25"
      viewBox="0 0 43 25"
      fill="none"
    >
      <path
        d="M0 12.4806C0 10.4588 0.287115 8.67029 0.861346 7.11508C1.4595 5.55987 2.26103 4.26387 3.26594 3.22706C4.29477 2.16433 5.49108 1.36081 6.85488 0.816484C8.2426 0.272161 9.73799 0 11.3411 0C12.9441 0 14.4275 0.272161 15.7913 0.816484C17.1791 1.36081 18.3873 2.16433 19.4162 3.22706C20.445 4.26387 21.2465 5.55987 21.8208 7.11508C22.4189 8.67029 22.718 10.4588 22.718 12.4806C22.718 14.5023 22.4309 16.3038 21.8567 17.8849C21.2824 19.4401 20.4809 20.7491 19.4521 21.8118C18.4472 22.8486 17.2508 23.6392 15.8631 24.1835C14.4754 24.7278 12.968 25 11.3411 25C9.71407 25 8.20671 24.7278 6.81899 24.1835C5.43126 23.6133 4.23495 22.7968 3.23005 21.7341C2.22514 20.6713 1.43558 19.3624 0.861346 17.8072C0.287115 16.2519 0 14.4764 0 12.4806ZM6.46009 12.4806C6.46009 14.8393 6.90273 16.6019 7.788 17.7683C8.67327 18.9347 9.85762 19.5179 11.3411 19.5179C12.8484 19.5179 14.0447 18.9347 14.93 17.7683C15.8153 16.6019 16.2579 14.8393 16.2579 12.4806C16.2579 10.1477 15.8153 8.39813 14.93 7.23173C14.0686 6.06532 12.8843 5.48211 11.3769 5.48211C9.89351 5.48211 8.6972 6.06532 7.788 7.23173C6.90273 8.37221 6.46009 10.1218 6.46009 12.4806Z"
        fill="url(#paint0_linear_1073_5928)"
      />
      <path
        d="M36.8988 12.325C36.8988 11.5215 36.6835 10.9383 36.2528 10.5754C35.846 10.1866 35.2838 9.99222 34.566 9.99222C34.0875 9.99222 33.6089 10.057 33.1304 10.1866C32.6758 10.3162 32.281 10.5106 31.9461 10.7698V24.2613C31.7068 24.339 31.324 24.4168 30.7976 24.4946C30.2951 24.5723 29.7688 24.6112 29.2185 24.6112C28.6921 24.6112 28.2136 24.5723 27.7829 24.4946C27.3761 24.4168 27.0292 24.2613 26.7421 24.028C26.455 23.7947 26.2277 23.4837 26.0602 23.0949C25.9166 22.6801 25.8449 22.1488 25.8449 21.5008V9.8367C25.8449 9.13686 25.9765 8.56661 26.2396 8.12597C26.5268 7.68533 26.9096 7.28357 27.3881 6.92068C28.2016 6.2986 29.2185 5.79316 30.4387 5.40435C31.6829 5.01555 33.0586 4.82115 34.566 4.82115C37.2697 4.82115 39.3512 5.46915 40.8107 6.76516C42.2702 8.03525 43 9.81078 43 12.0918V24.2613C42.7607 24.339 42.3779 24.4168 41.8515 24.4946C41.3491 24.5723 40.8227 24.6112 40.2724 24.6112C39.746 24.6112 39.2675 24.5723 38.8368 24.4946C38.4301 24.4168 38.0831 24.2613 37.796 24.028C37.5089 23.7947 37.2816 23.4837 37.1141 23.0949C36.9706 22.6801 36.8988 22.1488 36.8988 21.5008V12.325Z"
        fill="url(#paint1_linear_1073_5928)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1073_5928"
          x1="0"
          y1="0"
          x2="21.7259"
          y2="37.3686"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#D6EBFF"
            stopOpacity="0.8"
          />
          <stop
            offset="1"
            stopColor="#C2C7FF"
            stopOpacity="0.8"
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1073_5928"
          x1="0"
          y1="0"
          x2="21.7259"
          y2="37.3686"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#D6EBFF"
            stopOpacity="0.8"
          />
          <stop
            offset="1"
            stopColor="#C2C7FF"
            stopOpacity="0.8"
          />
        </linearGradient>
      </defs>
    </ONIconSVG>
  );
};