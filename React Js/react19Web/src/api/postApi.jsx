
import axios from 'axios';
import React from 'react';

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
})

export const getCountryData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags");
}
