import React, { useEffect, useState } from 'react';
import './style.css';
import WeatherCard from './WeatherCard';

const Weather = () => {
  const [searchValue, setSearchValue] = useState('Talod');
  const [info, setInfo] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  const fetchWeatherData = async (city) => {
    try {
      const Api = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ee3aee9b4ee87c99e9418c10fdcb6176`;

      const res = await fetch(Api);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const weatherDetails = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        country,
        sunset,
        speed,
      };

      setInfo(weatherDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchInputChange = async (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);

    try {
      const suggestionApi = `https://api.openweathermap.org/data/2.5/find?q=${inputValue}&units=metric&appid=ee3aee9b4ee87c99e9418c10fdcb6176`;

      const res = await fetch(suggestionApi);
      const data = await res.json();

      const { list } = data;

      if (list) {
        const citySuggestions = list.map((item) => item.name);
        setSuggestions(citySuggestions);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    setSuggestions([]);
    fetchWeatherData(suggestion);
  };

  useEffect(() => {
    fetchWeatherData(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="City Name"
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
          <button className="searchButton" type="button" onClick={fetchWeatherData}>
            Search
          </button>
        </div>
        <div className="suggestions">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion}
              className="suggestion"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      </div>
      <WeatherCard info={info} />
    </>
  );
};

export default Weather;
