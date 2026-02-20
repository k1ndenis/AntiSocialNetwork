import { useState } from "react"
import dataQuestions from "./../../../../data/questions.json"
import { GridInputs } from "./GridInputs";
import { CurrentQuestion } from "./CurrentQuestion";
import { ToggleQuestion } from "./ToggleQuestion";
import './Scanword.css'

export const Scanword = () => {
  const [questions, setQuestions] = useState(dataQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="scanword-container">
      <CurrentQuestion
        questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
      <GridInputs
        questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  )
}