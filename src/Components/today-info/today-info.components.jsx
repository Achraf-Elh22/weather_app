import React from "react";

import "./today-info.styles.css";

const TodayInfo = ({ currentlyWeather }) => {
  const { visibility, humidity, windSpeed } = currentlyWeather;
  return (
    <div className="today-info">
      <div className="precipitation">
        <span className="title">VISIBILITY</span>
        <span className="value">{parseInt(visibility)} Km/h</span>
        <div className="clear"></div>
      </div>
      <div className="humidity">
        <span className="title">HUMIDITY</span>
        <span className="value">{humidity * 100} %</span>
        <div className="clear"></div>
      </div>
      <div className="wind">
        <span className="title">WIND</span>
        <span className="value">{windSpeed} km/h</span>
        <div className="clear"></div>
      </div>
    </div>
  );
};

export default TodayInfo;
