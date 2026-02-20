import { ToggleQuestion } from "./ToggleQuestion"
import './CurrentQuestion.css'

export const CurrentQuestion = (props) => {
  
  return (
    <div className="current-question-container">
      <ToggleQuestion 
        questions={props.questions}
        currentQuestion={props.currentQuestion}
        setCurrentQuestion={props.setCurrentQuestion}
        val={-1}
        row={"←"}
      />
      <span className="current-question">
        {props.questions[props.currentQuestion].question}
      </span>
      <ToggleQuestion 
        questions={props.questions}
        currentQuestion={props.currentQuestion}
        setCurrentQuestion={props.setCurrentQuestion}
        val={1}
        row={"→"}
      />
    </div>
  )
}