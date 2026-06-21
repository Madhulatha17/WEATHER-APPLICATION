import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/weather/${city}`
    );

    setWeather(res.data);
  };

  return (
    <div className="container">
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={fetchWeather}>
        Get Weather
      </button>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
