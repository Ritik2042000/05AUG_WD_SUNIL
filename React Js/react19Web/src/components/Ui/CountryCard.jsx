import React from 'react';

const CountryCard = ({data}) => {
    const {flags,name,population,region,capital} = data
    return (
        <li key={data.id}>
            {flags}
        </li >
    );
};

export default CountryCard;