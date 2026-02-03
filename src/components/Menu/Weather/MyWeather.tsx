import { useState } from "react";
import { GetWeather } from "./GetWeather";
import { WeatherDisplay } from "./WeatherDisplay";

export const MyWeather = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <WeatherDisplay
        data={data}
        loading={loading}
        error={error}
      />
      <GetWeather
        data={data}
        setData={setData}
        city={city}
        setCity={setCity}
        setLoading={setLoading}
        setError={setError}
      />
    </>
  )
} 