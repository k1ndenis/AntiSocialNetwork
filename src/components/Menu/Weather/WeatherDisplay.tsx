export const WeatherDisplay = (props) => {

  if (props.error) {
    return (
      <div>
        Ошибка: {props.error}
      </div>
    )
  }

  if (!props.data || props.data.cod === "404") {
    return (
      <div>
        Город не найден
      </div>
    )
  }

  const { name, main, weather } = props.data;
  const temperature = main.temp;
  const description = weather[0].description;
  const icon = weather[0].icon;

  const weatherInfo = (
    <div className="weather-info">
      <h2>{name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
      />
      <p>Температура: {temperature}</p>
      <p>Описание: {description}</p>
    </div>
  )

  return (
    <>
      {weatherInfo}
    </>
  )
}