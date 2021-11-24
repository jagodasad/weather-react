import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather">
        <div className="row">
          <div className="col-sm-5">
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
          <div className="col-sm-6">
            <div className="weatherTemp">
              <br /> <br />
              <WeatherIcon code={props.data.icon} size={70} />
              <WeatherTemperature
                celsius={Math.round(props.data.temperature)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
