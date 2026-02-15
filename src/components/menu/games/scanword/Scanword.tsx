import { useState } from "react"
import dataQuestions from "./../../../../data/questions.json"
import { Cell } from "./Cell";
import { GridInputs } from "./GridInputs";

export const Scanword = () => {
  const [questions, setQuestions] = useState(dataQuestions);

  return (
    <>
      <GridInputs
        questions={questions}
      />
    </>
  )
}