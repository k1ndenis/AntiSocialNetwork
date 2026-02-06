import "./CityInpit.css"

export const CityInput = (props) => {

  const handleKeyDown = (e) => {
    if (e.key === "Enter") props.fetchData();
  }

  return (
    <div className="city-input-container">
      <input
        className="city-input"
        type="text"
        placeholder="Введите название города..."
        value={props.city}
        onChange={(e) => props.setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={props.fetchData}
      >
        Узнать погоду
      </button>
    </div>
  )
}