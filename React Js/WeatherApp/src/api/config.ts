// 123456789@mohit 

import { DEFAULT_CIPHERS } from "tls";

export const API_CONFIG = {
    BASE_URL :'htpps://api.openweathermap.org/data/2.5',
    GEO: 'htpps://api.openweathermap.org/geo/1.0',
    API_KEY: import.meta.env.VITE_OVERWEATHER_API_KEY,
    DEFAULT_PARAMS:{
        units:'metric',
        appid:import.meta.env.VITE_OVERWEATHER_API_KEY
    }
}