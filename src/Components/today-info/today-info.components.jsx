import React from "react";

import "./today-info.styles.css";

const TodayInfo = () => {
  return (
    <div class="today-info">
      <div class="precipitation">
        <span class="title">PRECIPITATION</span>
        <span class="value">0 %</span>
        <div class="clear"></div>
      </div>
      <div class="humidity">
        <span class="title">HUMIDITY</span>
        <span class="value">34 %</span>
        <div class="clear"></div>
      </div>
      <div class="wind">
        <span class="title">WIND</span>
        <span class="value">0 km/h</span>
        <div class="clear"></div>
      </div>
    </div>
  );
};

export default TodayInfo;
