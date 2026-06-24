import React from "react";

const WeatherCard = ({ loading, temperature, city, weatherIcon }) => {
  return (
    <div className="px-4 py-2 flex justify-center items-center flex-col">
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt="weather"
        className="h-20 w-20 mb-3"
      />

      <h2 className="text-3xl font-bold">
        {loading
          ? "Loading..."
          : temperature !== null
            ? `${temperature}°C`
            : "--"}
      </h2>

      <h5 className="font-light">{city || "Type city name"}</h5>
    </div>
  );
};

export default WeatherCard;
