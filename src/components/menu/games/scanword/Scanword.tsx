import { useState } from "react"
import dataQuestions from "./../../../../data/questions.json"
import { Cell } from "./Cell";
import { GridInputs } from "./GridInputs";

export const Scanword = () => {
  const [questions, setQuestions] = useState(dataQuestions);

  for (let i = 0; i <= 10; i++) {
    return <>{}</>
  }

  const scanwordGrid = questions.map(question => {
      return (
        <Cell
          id={question.id}
          question={question.question}
          answer={question.answer}
        />
      )
    })

  return (
    <>
      {scanwordGrid}
      <GridInputs />
    </>
  )
}