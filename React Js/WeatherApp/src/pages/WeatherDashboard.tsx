import { RefreshCcw } from "lucide-react";
import { Button } from "../components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { WeatherSkeletion } from "@/components/loading-skeleton";

const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeolocation();

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      //
    }
  };

  if (locationLoading) {
    return <WeatherSkeletion />;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
          // disabled={}
        >
          <RefreshCcw />
        </Button>
      </div>
    </div>
  );
};

export default WeatherDashboard;
