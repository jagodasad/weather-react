import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import "./App.css";
import background from "./images/background.mp4";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "92ddd27963ffa8ab80ec517f4c65be70";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function findLocation(position) {
    const apiKey = "92ddd27963ffa8ab80ec517f4c65be70";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    navigator.geolocation.getCurrentPosition(findLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <video className="videoTag" autoPlay loop muted id="myVideo">
          <source src={background} type="video/mp4" />
        </video>
        <div className="container">
          <div className="outer-box-frame">
            <form onSubmit={handleSubmit} className="row">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Enter a city...🔍"
                    className="enter-city"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    className="btn btn-dark"
                    value="Search"
                  />
                </div>
                <div className="col-1">
                  <input
                    type="submit"
                    className="btn btn-dark"
                    value="🌎 Current"
                    onClick={getCurrentLocation}
                  />
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
