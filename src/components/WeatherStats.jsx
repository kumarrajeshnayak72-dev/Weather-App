import React from "react";
import { WindArrowDown, Droplet } from "lucide-react";

const WeatherStats = ({ humidity, windSpeed }) => {
  return (
    <div className="flex justify-between items-center w-90 px-4 py-3">
      <div className="flex flex-col items-center justify-center">
        <Droplet size={18} />

        <h5 className="mt-2">{humidity !== null ? `${humidity}%` : "--"}</h5>

        <h6>Humidity</h6>
      </div>

      <div className="flex flex-col items-center justify-center">
        <WindArrowDown size={18} />

        <h5 className="mt-2">
          {windSpeed !== null ? `${windSpeed} km/hr` : "--"}
        </h5>

        <h6>Wind Speed</h6>
      </div>
    </div>
  );
};

export default WeatherStats;
