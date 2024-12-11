import React from 'react';
import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country
    return (
        <li className='country-card card'>
            <div className="container-card bg-white-box card-hover-ani ">
                <img src={flags.svg} alt={flags.alt} />

                <div className="countryInfo">
                    <p className="card-title" title={name.common.length > 10 && name.common}>{name.common.length > 10 ? `${name.common.slice(0, 10)}..` : name.common}</p>
                    <p>
                        <soan className="card-description">Popluation:</soan>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <soan className="card-description">Region:</soan>
                        {region}
                    </p>
                    <p>
                        <soan className="card-description">Capital:</soan>
                        {capital[0]}
                    </p>
                    <NavLink to={`/country/${name.common}`}><button>Read More</button></NavLink>

                </div>
            </div>
        </li >
    );
};

export default CountryCard;