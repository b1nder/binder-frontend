import { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from '@emotion/styled';

type Props = {
  value: Date | Date[] | null;
  onChange: (value: Date | Date[] | null) => void;
};

const StyledCalendar = styled(ReactCalendar)`
  width: 100%;
  border: none;
  box-shadow: 0px 10px 20px 0px #0000000d;
  background: #ffffff;
  font-family: var(--font-pretendard) !important;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  /*navigation*/
  .react-calendar__navigation button {
    border: none;
    background: none;
  }
  /*두 번째 이전 버튼 클릭 안되게*/
  .react-calendar__navigation__prev2-button {
    display: none;
  }
  /*두 번째 다음 버튼 클릭 안되게*/
  .react-calendar__navigation__next2-button {
    display: none;
  }

  /*calendar title*/
  .react-calendar__navigation__label__labelText {
    font-family: var(--font-pretendard);
  }

  /*요일 부분*/
  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
  }

  /*월 화 수 목 금 토 일 밑줄 없애기*/
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }

  .react-calendar__year-view__months {
    display: flex;
  }
  /*각 월별 컴포넌트*/
  .react-calendar__year-view__months__month {
    width: 36px;
    height: 60px !important;
    padding: 0px 12px;
    background: none;
  }
  .react-calendar__year_view__months .react-calendar__tile--range {
    height: 30px !important;
    margin: 15px 0px;
    background: #a8f1ab;
  }
  /*기간 첫, 끝 날짜 배경 색 입히기*/
  .react-calendar__year-view__months .react-calendar__tile--rangeStart {
    position: relative;
    height: 30px;
    color: black;
    background: linear-gradient(to right, white 50%, #cfffd1 50%) !important;
  }

  .react-calendar__year-view__months .react-calendar__tile--rangeEnd {
    position: relative;
    height: 30px;
    color: black;
    background: linear-gradient(to right, #cfffd1 50%, white 50%);
  }
  .react-calendar__tile--active {
    background: #dbffdc;
    color: black;
  }

  /*기간 첫 날짜 배경 원 그리기*/
  .react-calendar__year-view__months .react-calendar__tile--rangeStart abbr {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background: #8cd98f;
    color: white;
    border-radius: 50%;
    align-content: center;
  }

  /*기간 끝 날짜 배경 원 그리기*/
  .react-calendar__year-view__months .react-calendar__tile--rangeEnd abbr {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background: #8cd98f;
    color: white;
    border-radius: 50%;
    align-content: center;
  }

  /*달력 일 컴포넌트*/
  .react-calendar__month-view__days__day {
    width: 36px;
    height: 36px;
    padding: 0px 12px;
    border: none;
  }

  /*기간 첫, 끝 날짜 배경 색 입히기*/
  .react-calendar__month-view__days .react-calendar__tile--rangeStart {
    position: relative;
    color: white;
    background: linear-gradient(to right, white 50%, #cfffd1 50%) !important;
  }

  .react-calendar__month-view__days .react-calendar__tile--rangeEnd {
    position: relative;
    color: white;
    background: linear-gradient(to right, #cfffd1 50%, white 50%);
  }

  /*기간 첫, 끝 날짜 배경 원 그리기*/
  .react-calendar__month-view__days .react-calendar__tile--rangeStart abbr {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: #8cd98f;
    color: white;
    border-radius: 50%;
    align-content: center;
  }

  .react-calendar__month-view__days .react-calendar__tile--rangeEnd abbr {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: #8cd98f;
    color: white;
    border-radius: 50%;
    align-content: center;
  }
`;

const Calendar = ({ value, onChange }: Props) => {
  return (
    <>
      <StyledCalendar
        locale="ko"
        value={value}
        onChange={onChange}
        selectRange={true}
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        showNeighboringMonth={false}
      />
    </>
  );
};
export default Calendar;
