import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search/Search";
import Weather from "./containers/Weather";
import Error from "./components/Error";

const App = () => {
  const [zip, setZip] = useState(3500);
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const countryCode = "DK";
  const apiKey = "a3b0755ce308bdd5b6b20382c8352be8";
  const baseUrl = `https://api.openweathermap.org/data/2.5/`;

  useEffect(() => {
    getWeather(zip)
      .then((weather) => {
        setCurrentWeather(weather);
        setError(null);
      })
      .catch((err) => {
        setError(`Error fetching weather forecast. Please try again later`);
      });
  }, [zip]);

  useEffect(() => {
    getForecast(zip)
      .then((data) => {
        setForecast(data);
        setError(null);
      })
      .catch(() => {
        setError(
          `Error fetching forecast. Please type in the correct zip code`
        );
      });
  }, [zip]);

  //Get and Set Zip from Search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setZip(e.target.value);
    }
  };

  const handleResponse = (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error: Location " + response.statusText);
    }
  };

  //Get Current Weather
  const getWeather = () => {
    return axios
      .get(
        `${baseUrl}weather?zip=${zip},${countryCode}&appid=${apiKey}&units=metric`
      )
      .then((res) => handleResponse(res))
      .then((weather) => {
        if (Object.entries(weather).length) {
          const mappedData = mapDataToWeatherInterface(weather);
          return mappedData;
        }
      });
  };

  //Get Next 5 Days Forecast
  const getForecast = () => {
    return axios
      .get(
        `${baseUrl}forecast?zip=${zip},${countryCode}&appid=${apiKey}&units=metric`
      )
      .then((res) => handleResponse(res))
      .then((result) => {
        if (Object.entries(result).length) {
          const forecast = [];

          for (let i = 0; i < result.list.length; i += 7) {
            forecast.push(mapDataToWeatherInterface(result.list[i]));
          }
          forecast.shift();
          return forecast;
        }
      });
  };

  const mapDataToWeatherInterface = (data) => {
    const id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const mapped = {
      id: id,
      city: data.name,
      country: data.sys.country,
      date: data.dt,
      humidity: data.main.humidity,
      icon_id: data.weather[0].id,
      temperature: data.main.temp,
      description: data.weather[0].description,
      wind_speed: data.wind.speed,
      condition: data.cod,
    };

    if (data.dt_txt) {
      mapped.dt_txt = data.dt_txt;
    }

    if (data.weather[0].icon) {
      mapped.icon = data.weather[0].icon;
    }

    if (data.main.temp_min && data.main.temp_max) {
      mapped.max = data.main.temp_max;
      mapped.min = data.main.temp_min;
    }

    // remove fields which are undefined
    Object.keys(mapped).forEach(
      (key) => mapped[key] === undefined && delete mapped[key]
    );
    return mapped;
  };

  let weather = null;

  if (
    (currentWeather && Object.keys(currentWeather).length) ||
    (forecast && Object.keys(forecast).length)
  ) {
    weather = (
      <Weather
        zip={zip}
        currentWeather={currentWeather}
        forecast={forecast}
        setZip={setZip}
        error={error}
      />
    );
  }

  return (
    <div className="App">
      <div className="container">
        <Search handleKeyDown={handleKeyDown} />
        <Error error={error} />
        <div className="weather-app">{weather}</div>
      </div>
    </div>
  );
};

export default App;
