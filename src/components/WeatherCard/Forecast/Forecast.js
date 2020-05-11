import React from "react";
import "./Forecast.css";

const Forecast = (props) => {
  const time = props.forecast.dt_txt;
  let forecastDates = new Date(time);
  let icon = props.forecast.icon;
  icon = icon.replace(/n/g, "d");
  const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  forecastDates = forecastDates.toDateString();
  forecastDates = forecastDates.slice(0, 4);
  return (
    <div className="days">
      <div>{forecastDates}</div>
      <img src={weatherIcon} alt="weather icon" />
      <div>{Math.round(props.forecast.temperature)}°</div>
    </div>
  );
};

export default Forecast;
