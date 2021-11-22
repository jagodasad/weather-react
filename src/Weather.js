import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import "./App.css";
import background from "./images/background.mp4";

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
                <div className="col-5">
                  <input
                    type="search"
                    placeholder="Enter a city...🔍"
                    className="enter-city"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2">
                  <input type="submit" class="btn btn-dark" value="Search" />
                </div>
                <div className="col-1">
                  <input
                    type="submit"
                    className="btn btn-dark"
                    value="🌎 Current"
                  />
                </div>
              </div>
            </form>
            <div className="weather">
              <div className="row">
                <div className="col-5">
                  <h1>{weatherData.city}</h1>

                  <h2>
                    <FormattedDate date={weatherData.date} />
                  </h2>
                  <h3>
                    <span className="text-capitalize">
                      {weatherData.description}
                    </span>
                    <br />
                    <span>Humidity:{weatherData.humidity}%</span>
                    <br />
                    <span>Wind:{Math.round(weatherData.wind)}km/h</span>
                  </h3>
                </div>
                <div className="col-6">
                  <br /> <br />
                  <img
                    src={weatherData.icon}
                    alt={weatherData.description}
                    className="icon"
                    width="115"
                  />
                  <span className="today-temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="units">
                    <a href="/" className="active">
                      °C
                    </a>{" "}
                    | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="weather-forecast">
              <div className="row">
                <div className="col-2">
                  <div className="weather-forecast-date">Fri </div>

                  <br />
                  <img
                    src="http://openweathermap.org/img/wn/04d@2x.png"
                    alt=""
                    width="70"
                  />
                  <span className="weather-forecast-temp-max">21°/</span>
                  <span className="weather-forecast-temp-min">14°</span>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Sat </div>

                  <br />
                  <img
                    src="http://openweathermap.org/img/wn/04d@2x.png"
                    alt=""
                    width="70"
                  />
                  <span className="weather-forecast-temp-max">22°/</span>
                  <span className="weather-forecast-temp-min">16°</span>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Sun </div>

                  <br />
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    width="70"
                  />
                  <span className="weather-forecast-temp-max">27°/</span>
                  <span className="weather-forecast-temp-min">18°</span>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Mon </div>

                  <br />
                  <img
                    src="http://openweathermap.org/img/wn/04d@2x.png"
                    alt=""
                    width="70"
                  />
                  <span className="weather-forecast-temp-max">24°/</span>
                  <span className="weather-forecast-temp-min">18°</span>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Tue </div>

                  <br />
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    width="70"
                  />
                  <span className="weather-forecast-temp-max">20°/</span>
                  <span className="weather-forecast-temp-min">16°</span>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Wed </div>

                  <br />
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    width="70"
                  />
                  <span className="weather-forecast-temp-max">20°/</span>
                  <span className="weather-forecast-temp-min">14°</span>
                </div>
              </div>
            </div>
            <br />
            <br />
            <footer>
              <a
                href="https://github.com/jagodasad/weather-react"
                target="_blank"
                class="created-by"
                rel="noreferrer"
              >
                Open-source code
              </a>{" "}
              This project was coded by{" "}
              <strong>
                <a
                  href="https://www.linkedin.com/in/jagoda-sadowska-5352bb9b"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jagoda Sadowska
                </a>
              </strong>
            </footer>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
