import {  useEffect, useRef, useState } from "react"
import { ToggleQuestion } from "./ToggleQuestion";
import { CurrentQuestion } from "./CurrentQuestion";

export const GridInputs = (props) => {
  const [cells, setCells] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [activedCell, setActivedCell] = useState(0);
  const [direction, setDirection] = useState("horizontal");
  const [solvedCells, setSolvedCells] = useState([]);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[activedCell]) {
      inputRefs.current[activedCell].focus();
    }
  }, [activedCell]);

  const chekWord = (wordIndex, currentCells) => {
    const targetWord = props.questions[wordIndex].position;

    const isCorrect = Object.entries(targetWord).every(([coord, letter]) => {
      return currentCells[coord] === letter;
    })

    if (isCorrect) {
      console.log("!");
      const newSolvedCoords = Object.keys(targetWord);
      setSolvedCells(prev => [...prev, ...newSolvedCoords]);

      const nextIndex = wordIndex + 1;
      console.log(solvedCells)
      if (nextIndex < props.questions.length) {
        const nextQuestion = props.questions[nextIndex];
        setCurrentQuestion(prev => prev + 1);
        setDirection(nextQuestion.direction)
        setActivedCell(nextQuestion.startPosition);
      } else console.log("end")
      return true;
    }
    return false;
  }

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const char = value.slice(-1).toUpperCase();

    const updatedCells = { ...cells, [name]: char };
    setCells(updatedCells);

    const isSolved = chekWord(currentQuestion, updatedCells);

    if (isSolved) return;

    if (char) {
      if (direction === "horizontal") {
        setActivedCell(i + 1);
      } else {
        setActivedCell(i + 10);
      }
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.key === 'Backspace') {
      if (direction === "horizontal") {
        setActivedCell(i - 1);
      } else {
        setActivedCell(i - 10);
      }
    }
  }

  const setCellsDisplay = (id) => {
    console.log(solvedCells[0])
    if (solvedCells.includes(id)) {
      return { background: "green", color: "white" }
    } else {
      return { background: "none", color: "white" };
    }
  }

  useEffect(() => {

  })

  return (
    <>
    <CurrentQuestion
      questions={props.questions}
      currentQuestion={currentQuestion}
    />
    <ToggleQuestion />
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${10}, 40px)` }}>
      {Array.from({ length: 100 }).map((_, i) => {
        const row = Math.floor(i / 10);
        const col = i % 10;
        const id = `${row}-${col}`;
        const isBlocked = i == activedCell ? false : true

        return (
          <input
            key={id}
            name={id}
            value={cells[id] || ''}
            disabled={isBlocked}
            ref={el => inputRefs.current[i] = el}
            style={setCellsDisplay(id)}
            onChange={(e) => handleChange(e, i)}
            onClick={() => console.log({id})}
            onKeyDown={(e) => handleKeyDown(e, i)}
          />
        )
      })}
    </div>
    </>
  )
}