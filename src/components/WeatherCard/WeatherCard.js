import React from "react";
import Forecast from "./Forecast/Forecast";
import { english_ordinal_suffix } from "../../helpers/functions";
import "./WeatherCard.css";

const weatherCard = (props) => {
  const iconUrl = "https://openweathermap.org/img/wn/";
  const fullIconPath = `${iconUrl}${props.currentWeather.icon}@2x.png`;
  let dateTimeStamp = props.currentWeather.date;
  let dateObject = new Date(dateTimeStamp * 1000);
  let sDate = dateObject.toString();

  const currentDate = `${sDate.slice(3, 8)} ${english_ordinal_suffix(
    dateObject
  )},${sDate.slice(10, 16)}`;

  return (
    <div className="weather">
      <div className="wrapper">
        <div className="location-weather">
          <div className="location-info">
            <div>{currentDate}</div>
            <div>{props.currentWeather.city}</div>
          </div>
          <div className="current-weather">
            <div className="current-temp">
              {Math.round(props.currentWeather.temperature)}°
            </div>
            <div>
              <div className="current-weather-info">
                <p>{props.currentWeather.description}</p>
                <img src={fullIconPath} alt="weather icon" />
              </div>
              <p>
                The high today will be {Math.round(props.currentWeather.max)}°
                with wind speeds up to{" "}
                {Math.round(props.currentWeather.wind_speed)} m/s
              </p>
            </div>
          </div>

          <div className="forecast row">
            {props.forecast.map((weekForecast) => {
              return <Forecast key={weekForecast.id} forecast={weekForecast} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default weatherCard;
