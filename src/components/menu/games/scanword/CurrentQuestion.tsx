export const CurrentQuestion = (props) => {
  
  return (
    <div>
      {props.questions[props.currentQuestion].question}
    </div>
  )
}