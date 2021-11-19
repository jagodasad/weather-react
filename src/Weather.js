import React from "react";
import "./Weather.css";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Los Angeles",
    temperature: 22,
    date: "Sunday, 11:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 10,
    wind: 5,
  };

  return (
    <div className="Weather">
      <div className="outer-box-frame">
        <form className="row">
          <div className="row">
            <div className="col-5">
              <input
                type="text"
                placeholder="Enter a city...🔍"
                className="enter-city"
                autoComplete="off"
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

              <h2>{weatherData.date}</h2>
              <h3>
                <span>{weatherData.description}</span>
                <br />
                <span>Humidity:{weatherData.humidity}%</span>
                <br />
                <span>Wind:{weatherData.wind}km/h</span>
              </h3>
            </div>
            <div className="col-6">
              <br /> <br />
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="icon"
                width="115"
              />
              <span className="today-temperature">
                {weatherData.temperature}
              </span>
              <span className="units">
                <a href="/" class="active">
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
            href="https://github.com/jagodasad/Weather-App"
            target="_blank"
            class="created-by"
          >
            Open-source code
          </a>{" "}
          This project was coded by{" "}
          <strong>
            <a
              href="https://www.linkedin.com/in/jagoda-sadowska-5352bb9b"
              target="_blank"
            >
              Jagoda Sadowska
            </a>
          </strong>
        </footer>
      </div>
    </div>
  );
}
