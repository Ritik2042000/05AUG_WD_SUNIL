import { AlertTriangle, MapPin, RefreshCcw } from "lucide-react";
import { Button } from "../components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { WeatherSkeletion } from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  useForecastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "@/hooks/use-Weather";

const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeolocation();

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  const locationQuery = useReverseGeocodeQuery(coordinates);

  // log

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  };

  if (locationLoading) {
    return <WeatherSkeletion />;
  }

  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="h-4 mr-2 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!coordinates) {
    return (
      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Please Enable Your Location Access To See Your Local Weather</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="h-4 mr-2 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  const locationName = locationQuery.data?.[0];

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle />
        <AlertTitle> Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed To Fetch Weather Data.Please Try again. </p>
          <Button onClick={handleRefresh} variant={"outline"} className="w-fit">
            <MapPin className="h-4 mr-2 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data) {
    return <WeatherSkeletion/>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
          disabled={weatherQuery.isFetching || forecastQuery.isFetching}
        >
          <RefreshCcw
            className={`w-4 h-4 ${weatherQuery.isFetching && "animate-spin"}`}
          />
        </Button>
      </div>
    </div>
  );
};

export default WeatherDashboard;
