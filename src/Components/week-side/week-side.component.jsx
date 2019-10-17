import React from "react";

import "./week-side.styles.css";

const WeekSide = () => {
  return (
    <div class="week-container">
      <ul class="week-list">
        <li class="active">
          <i class="day-icon" data-feather="sun"></i>
          <span class="day-name">Tue</span>
          <span class="day-temp">29°C</span>
        </li>
        <li>
          <i class="day-icon" data-feather="cloud"></i>
          <span class="day-name">Wed</span>
          <span class="day-temp">21°C</span>
        </li>
        <li>
          <i class="day-icon" data-feather="cloud-snow"></i>
          <span class="day-name">Thu</span>
          <span class="day-temp">08°C</span>
        </li>
        <li>
          <i class="day-icon" data-feather="cloud-rain"></i>
          <span class="day-name">Fry</span>
          <span class="day-temp">19°C</span>
        </li>
        <div class="clear"></div>
      </ul>
    </div>
  );
};

export default WeekSide;
