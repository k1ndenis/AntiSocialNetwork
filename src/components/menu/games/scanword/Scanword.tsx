import { useState } from "react"
import dataQuestions from "./../../../../data/questions.json"
import { GridInputs } from "./GridInputs";
import { CurrentQuestion } from "./CurrentQuestion";
import './Scanword.css'

export const Scanword = () => {
  const [questions] = useState(dataQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [activedCell, setActivedCell] = useState(0);
  const [currentCells, setCurrentCells] = useState(questions[0].coordinates);
  const [solvedCells, setSolvedCells] = useState([]);

  return (
    <div className="scanword-container">
      <CurrentQuestion
        questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        solvedCells={solvedCells}
      />
      <GridInputs
        questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        activedCell={activedCell}
        setActivedCell={setActivedCell}
        currentCells={currentCells}
        setCurrentCells={setCurrentCells}
        solvedCells={solvedCells}
        setSolvedCells={setSolvedCells}
      />
    </div>
  )
}