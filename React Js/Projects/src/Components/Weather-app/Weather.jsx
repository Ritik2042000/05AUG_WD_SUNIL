import React, { useEffect, useState } from 'react';
import './style.css'
import WeatherCard from './WeatherCard';

const Weather = () => {

    const [searchValue, setSearchValue] = useState('Talod')
    const [info, setInfo] = useState({})
    const WeatherInfo = async () => {
        try {
            let Api = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ee3aee9b4ee87c99e9418c10fdcb6176`

            const res = await fetch(Api);
            const data = await res.json();


            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;
            console.log(data);

            const WeatherDeatils = {
                temp, humidity, pressure, weathermood, name, country, sunset, speed
            }
            setInfo(WeatherDeatils)

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        WeatherInfo();
    }, [])

    return (
        <>
        <section className='height'>
            <div className="wrap ">
                <div className="search">
                    <input type="search" placeholder='City Name' autoFocus id="search" className='searchTerm' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button className="searchButton" type='' onClick={WeatherInfo}>Search</button>
                </div>
            </div>
            <WeatherCard info={info} />
            </section>
          
        </>
    );
};

export default Weather;