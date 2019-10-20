import React from 'react';

import './App.css';
import WeatherSide from "./Components/weather-side/weather-side.component";
import TodayInfo from './Components/today-info/today-info.components';
import WeekSide from './Components/week-side/week-side.component';
import LocationBtn from './Components/location-btn/location-btn.component';


const proxy = "https://cors-anywhere.herokuapp.com/";
const api_key = "2072f1f982862345a8e0d54612d0c226";
const excluded_blocks = "minutely,alerts,hourly,flags"
const latitude = "40.71427";
const longtitude = "-74.00597"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currently: {},
      timezone: '',
      daily: []
    }
  }


  componentWillMount() {
    fetch(`${proxy}https://api.darksky.net/forecast/${api_key}/${latitude},${longtitude}?exclude=[${excluded_blocks}]&units=ca`).then(response => response.json()).then(response => {
      const { currently, daily, timezone } = response
      this.setState({ currently: currently, daily: daily.data, timezone: timezone })
    })
  }

  render() {

    const { currently, timezone, daily } = this.state
    return (
      <div className="container">

        <WeatherSide currentlyWeather={currently} timezone={timezone} />

        <div className="info-side" >
          <TodayInfo currentlyWeather={currently} />

          <WeekSide daily={daily} />

          <LocationBtn />
        </div>
      </div>
    )
  }
}

export default App;




