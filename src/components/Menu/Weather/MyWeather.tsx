import { useEffect, useState } from "react";

export const MyWeather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");

  const API_KEY = "9fe668fe853fc4dd8a6fe164ff909381";
  const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?appid=" +
  API_KEY +
  "&units=metric&lang=ru";

  const fetchData = async () => {
    if (!city) return;

    setLoading(true);
    const url = `${API_URL}&q=${city}`;
    
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error("Ошибка при загрузке: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  // if (loading) return <p>Загрузка...</p>
  // return <div>{JSON.stringify(data)}</div>

  const cityInput = (
    <>
      <input
        type="text"
        placeholder="Введите название города..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={fetchData}
      >
        Узнать погоду
      </button>
    </>
  )

  return (
    <>
      {cityInput}
    </>
  )
}