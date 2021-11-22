import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather">
        <div className="row">
          <div className="col-5">
            <h1>{props.data.city}</h1>

            <h2>
              <FormattedDate date={props.data.date} />
            </h2>
            <h3>
              <span className="text-capitalize">{props.data.description}</span>
              <br />
              <span>Humidity:{props.data.humidity}%</span>
              <br />
              <span>Wind:{Math.round(props.data.wind)}km/h</span>
            </h3>
          </div>
          <div className="col-6">
            <br /> <br />
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="icon"
              width="115"
            />
            <span className="today-temperature">
              {Math.round(props.data.temperature)}
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
  );
}
