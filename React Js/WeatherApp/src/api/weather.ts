import { API_CONFIG } from "./config";
import {
  Coordinates,
  ForecastData,
  GeocondingResponse,
  WeatherData,
} from "./type";

class WeatherAPI {
  private createUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      apiid: API_CONFIG.API_KEY,
      ...params,
    });

    return `${endpoint} ? ${searchParams.toString()}`;
  }
  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather Api Error ${response.statusText}`);
    }

    return response.json();
  }

  async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });
    console.log(url, "inside cueWer");
    return this.fetchData<WeatherData>(url);
  }

  async getForecast({ lat, lon }: Coordinates): Promise<ForecastData> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });
    console.log(url, "inside forcast");
    return this.fetchData<ForecastData>(url);
  }

  async reverseGeocode({
    lat,
    lon,
  }: Coordinates): Promise<GeocondingResponse[]> {
    const url = this.createUrl(`${API_CONFIG.GEO}/reverse`, {
      lat: lat.toString(),
      lon: lon.toString(),
      limit: 1,
    });
    console.log(url, "inside geo");
    return this.fetchData<GeocondingResponse[]>(url);
  }
}

export const weatherAPI = new WeatherAPI();
