
import axios from 'axios';
import React from 'react';

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
})

export const getCountryData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags");
}

export const getCountryIndivData = (name) =>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}