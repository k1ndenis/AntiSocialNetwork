export const ToggleQuestion = (props) => {

  return (
    <button onClick={() => console.log(props.solvedCells.length)}>
      Следующий вопрос
    </button>
  )
}