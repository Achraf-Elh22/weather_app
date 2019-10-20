import React from "react";

import { CurrentTime, CurrentDayName } from "../utils/CurrentTime.utils";

const WeekList = ({ time, temp }) => {
  const { currentDay } = CurrentTime(time);

  return (
    <li className={currentDay == CurrentDayName() ? "active" : ""}>
      <i className="day-icon" data-feather="cloud"></i>
      <span className="day-name">{currentDay}</span>
      <span className="day-temp">{parseInt(temp)}°C</span>
    </li>
  );
};

export default WeekList;
