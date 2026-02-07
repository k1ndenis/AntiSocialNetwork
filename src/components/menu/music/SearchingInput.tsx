import "./SearchingInput.css"

export const SearchingInput = (props) => {

  return (
    <input
      className="searching-input"
      type="text"
      placeholder="Поиск трека"
      value={props.currentValue}
      onChange={(e) => props.setCurrentValue(e.target.value)}
    />
  )
} 