import React from "react";
import Aux from "../hoc/Aux";
import WeatherCard from "../components/WeatherCard/WeatherCard";

const weather = (props) => {
  return (
    <Aux>
      <WeatherCard
        forecast={props.forecast}
        currentWeather={props.currentWeather}
      />
    </Aux>
  );
};

export default weather;
