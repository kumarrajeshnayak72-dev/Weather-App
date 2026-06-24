import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import WeatherCard from "./components/WeatherCard";
import WeatherStats from "./components/WeatherStats";

const App = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("01d");
  const [city, setCity] = useState("");

  return (
    <div className="h-screen bg-linear-to-br from-green-950 to-black text-white flex flex-col justify-center items-center font-sans">
      <Searchbar
        search={search}
        setSearch={setSearch}
        setLoading={setLoading}
        setTemperature={setTemperature}
        setHumidity={setHumidity}
        setWindSpeed={setWindSpeed}
        setWeatherIcon={setWeatherIcon}
        setCity={setCity}
      />

      <WeatherCard
        loading={loading}
        temperature={temperature}
        city={city}
        weatherIcon={weatherIcon}
      />

      <WeatherStats humidity={humidity} windSpeed={windSpeed} />
    </div>
  );
};

export default App;
