export const ToggleQuestion = (props) => {
  const { questions, currentQuestion, setCurrentQuestion, val } = props;
  const length = questions.length

  const toggleQuestion = () => {
    const nextIndex = (currentQuestion + val + length) % length;
    setCurrentQuestion(nextIndex);
  }

  return (
    <button onClick={toggleQuestion}>
      {props.row}
    </button>
  )
}