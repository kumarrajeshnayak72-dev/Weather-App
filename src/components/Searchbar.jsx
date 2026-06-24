import React from "react";
import axios from "axios";
import { Search } from "lucide-react";

const Searchbar = ({
  search,
  setSearch,
  setLoading,
  setTemperature,
  setHumidity,
  setWindSpeed,
  setWeatherIcon,
  setCity,
}) => {
  const API_KEY = "014476564d8da0151465289d8e3eeb76";

  const fetchWeather = async () => {
    if (!search) return;

    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`,
      );

      if (response.data.cod === 200) {
        setTemperature(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setWindSpeed(response.data.wind.speed);
        setCity(response.data.name);
        setWeatherIcon(response.data.weather[0].icon);
      }
    } catch (error) {
      console.log(error);
      setCity("City not found");
      setTemperature(null);
      setHumidity(null);
      setWindSpeed(null);
      setWeatherIcon("01d");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center bg-white rounded-full px-4 py-2 mb-6 w-80 shadow-lg">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none flex-1 px-2 text-black"
      />

      <Search
        onClick={fetchWeather}
        className="text-gray-500 cursor-pointer"
        size={18}
      />
    </div>
  );
};

export default Searchbar;
