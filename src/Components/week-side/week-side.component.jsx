import React from "react";
import uuid from "react-uuid";

import WeekList from "../week-list/week-list.component";
import "./week-side.styles.css";

const WeekSide = ({ daily }) => {
  return (
    <div className="week-container">
      <ul className="week-list">
        {daily
          .filter((el, idx) => idx < 5)
          .map(day => (
            <WeekList key={uuid()} time={day.time} temp={day.temperatureHigh} />
          ))}
      </ul>
      <div className="clear"></div>
    </div>
  );
};

export default WeekSide;
