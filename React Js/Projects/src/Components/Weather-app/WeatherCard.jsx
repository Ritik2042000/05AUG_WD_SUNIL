import React, { useEffect, useState } from 'react';

const WeatherCard = ({ info }) => {
    const [weatherIcon, setWeatherIcon] = useState()

    const {
        temp, humidity, pressure, weathermood, name, country, sunset, speed
    } = info

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeSunset = `${date.getHours()}:${date.getMinutes()}`

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherIcon("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherIcon("wi-fog");
                    break;
                case "Clear":
                    setWeatherIcon("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherIcon("wi-dust");
                    break;

                default:
                    setWeatherIcon("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);
    return (
        <>
            <section className=''>
                <article className='widget '>
                    <div className="weatherIcon">
                        <i className={`wi ${weatherIcon} `}></i>
                    </div>
                    <div className="weatherInfo">
                        <div className="temperature">
                            <span>{temp}&deg;</span>
                        </div>
                        <div className="description">
                            <div className="weatherCondition">
                                {weathermood}
                            </div>
                            <div className="place">
                                {name},{country}
                            </div>
                        </div>
                    </div>
                    <div className="date">{new Date().toLocaleString()}</div>
                    <div className="extra-temp">
                        <div className="temp-info-minmax">
                            <div className="two-sided-section">
                                <p>
                                    <i className={'wi wi-sunset'}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {timeSunset} PM<br />
                                    Sunset
                                </p>
                            </div>

                            <div className="two-sided-section">
                                <p>
                                    <i className={'wi wi-humidity'}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {humidity} %<br />
                                    Humidity
                                </p>
                            </div>
                        </div>
                        <div className="weather-extra-info">
                            <div className="two-sided-section">
                                <p>
                                    <i className={'wi wi-rain'}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {pressure} P.A<br />
                                    Pressure
                                </p>
                            </div>
                            <div className="two-sided-section">
                                <p>
                                    <i className={'wi wi-strong-wind'}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {speed} k.m <br />
                                    Wind
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};

export default WeatherCard;