import "./SearchingInput.css"

export const SearchingInput = (props) => {
  const { currentValue, setCurrentValue } = props;
  

  return (
    <input
      className="searching-input"
      type="text"
      placeholder="Поиск трека"
      value={currentValue}
      onChange={(e) => setCurrentValue(e.target.value)}
    />
  )
} 