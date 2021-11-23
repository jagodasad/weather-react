import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div>
        <div className="weather-forecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col-2" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <br />
        <br />
        <footer>
          <a
            href="https://github.com/jagodasad/weather-react"
            target="_blank"
            className="created-by"
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
        </footer>{" "}
      </div>
    );
  } else {
    let apiKey = "92ddd27963ffa8ab80ec517f4c65be70";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
