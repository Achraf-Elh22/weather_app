import React from 'react';

import './App.css';

import WeatherSide from "./Components/weather-side/weather-side.component";
import TodayInfo from './Components/today-info/today-info.components';
import WeekSide from './Components/week-side/week-side.component';
import LocationBtn from './Components/location-btn/location-btn.component';

function App() {
  return (
    <div class="container">
      <WeatherSide />
      <div class="info-side">
        <TodayInfo />
        <WeekSide />
        <LocationBtn />
      </div>
    </div>
  );
}

export default App;
