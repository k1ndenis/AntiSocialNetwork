export const ToggleQuestion = (props) => {
  const {
    questions,
    currentQuestion,
    setCurrentQuestion,
    val,
    solvedCells
  } = props;
  const length = questions.length

  const toggleQuestion = () => {
    let nextIndex = (currentQuestion + val + length) % length;
    let attempts = 0;
    const chekSolved = (idx) => {
      return questions[idx].coordinates.every(coord => solvedCells.includes(coord))
    }
    while (chekSolved(nextIndex) && attempts < length) {
      nextIndex = (nextIndex + val + length) % length;
      attempts++;
    }
    setCurrentQuestion(nextIndex);
  }

  return (
    <button onClick={toggleQuestion}>
      {props.row}
    </button>
  )
}