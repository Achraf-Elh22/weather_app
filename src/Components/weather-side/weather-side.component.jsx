import React from "react";

import "./weather-side.styles.css";
import { CurrentTime } from "../utils/CurrentTime.utils";

const WeatherSide = ({ currentlyWeather, timezone }) => {
  const { time, temperature, summary } = currentlyWeather;

  //Change the type of time data from Unix,UTC to UTCString
  const { date, currentDay } = CurrentTime(time);

  return (
    <div className="weather-side">
      <div className="weather-gradient"></div>
      <div className="date-container">
        <h2 className="date-dayname">{currentDay}</h2>
        <span className="date-day">{date}</span>
        <i className="location-icon" data-feather="map-pin"></i>
        <span className="location">
          {timezone.replace("_", " ").split("/")[1]}
        </span>
      </div>
      <div className="weather-container">
        <i className="weather-icon" data-feather="sun"></i>

        <h1 className="weather-temp">{parseInt(temperature)}°C</h1>
        <h3 className="weather-desc">{summary}</h3>
      </div>
    </div>
  );
};

export default WeatherSide;
