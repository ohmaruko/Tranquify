import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import styled from 'styled-components'; // Import styled-components

import { dayList, addContent } from './dataFile'; // Import dayList and addContent functions

// Define styled-component for the Calendar
const MyCustomCalendar = styled(Calendar)`
/* Add your styles here */

width: 100%;
max-width: 600px;
margin: 0 auto;
border: 1px solid #ccc;
border-radius: 25px;

.react-calendar__tile {
  /* Add styles for individual tiles */
  // padding: 10px;
  text-align: center;
  background: transparent;
  border-radius: 25px;
  width: 10px;
  height: 70px;

}

.react-calendar__tile--now:hover,
.react-calendar__tile--now:focus {
  background: beige;
  border-radius: 25px;
}

.react-calendar__tile--now {
background: transparent !important;
}

.react-calendar__tile--active,
.react-calendar__tile--active:hover,
.react-calendar__tile--active:focus {
  background: transparent;
  border-radius: 25px;
  border: 3px solid var(--normal-green);
}

.react-calendar__navigation__label > span {
  font-size:  larger;
  font-weight: 300;
  color: black;
}
.react-calendar__navigation__label {
  background: transparent;
}

.react-calendar__tile {
  color: black;
}

.react-calendar__navigation__arrow {
  background: beige;
  width: 20px;
  border-radius: 50%;
}

.react-calendar__navigation__prev2-button,
.react-calendar__navigation__next2-button {
display: none;
}

`;


export default function CalendarComponent() {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);
  const [month, setMonth] = useState(moment().format("YYYY-MM"));

  return (
    <MyCustomCalendar
      calendarType="gregory"
      onChange={onChange}
      formatDay={(locale, date) => moment(date).format("DD")}
      value={value}
      minDetail="month"
      maxDetail="month"
      navigationLabel={null}
      showNeighboringMonth={false}
      className="mx-auto w-full text-sm border-b"
      tileContent={({ date, view }) => {
        // Use addContent function to generate content for each date tile
        return addContent({ date });
      }}
    />
  );
}

