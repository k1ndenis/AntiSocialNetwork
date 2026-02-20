import {  useEffect, useRef, useState } from "react"
import './GridInputs.css'

export const GridInputs = (props) => {
  const [isSolved, setIsSolved] = useState(false);
  const [cells, setCells] = useState({});
  const [activedCell, setActivedCell] = useState(0);
  const [direction, setDirection] = useState("horizontal");
  const [solvedCells, setSolvedCells] = useState([]);
  const [currentCells, setCurrentCells] = useState(props.questions[0].coordinates);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[activedCell]) {
      inputRefs.current[activedCell].focus();
    }
  }, [activedCell]);

  if (!props.questions || props.questions.length === 0) return <div>Загрузка...</div>;

  const chekWord = (wordIndex, currentCells) => {
    const targetWord = props.questions[wordIndex].position;

    const isCorrect = Object.entries(targetWord).every(([coord, letter]) => {
      return currentCells[coord] === letter;
    })

    if (isCorrect) {
      const newSolvedCoords = Object.keys(targetWord);
      setSolvedCells(prev => [...prev, ...newSolvedCoords]);

      const nextIndex = wordIndex + 1;
      console.log(solvedCells)
      if (nextIndex < props.questions.length) {
        const nextQuestion = props.questions[nextIndex];
        props.setCurrentQuestion(nextIndex);
        setCurrentCells(nextQuestion.coordinates);
        setDirection(nextQuestion.direction)
        setActivedCell(nextQuestion.startPosition);
      } else setIsSolved(true);
      return true;
    }
    return false;
  }

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const endPos = props.questions[props.currentQuestion].endPosition
    const step = direction === "horizontal" ? 1 : 10;

    if (solvedCells.includes(name)) {
      let nextIndex = i;

      while (nextIndex < endPos) {
        nextIndex += step;
        const nextId = `${Math.floor(nextIndex / 10)}-${nextIndex % 10}`;

        if (!solvedCells.includes(nextId)) {
          setActivedCell(nextIndex);
          break;
        }
      }
      return;
    }

    const char = value.slice(-1).toUpperCase();
    if (!char) return;

    const updatedCells = { ...cells, [name]: char };
    setCells(updatedCells);

    const isSolved = chekWord(props.currentQuestion, updatedCells);
    if (isSolved) return;

    let nextIndex = i;

    while (nextIndex < endPos) {
      nextIndex += step;
      const nextId = `${Math.floor(nextIndex / 10)}-${nextIndex % 10}`;

      if (!solvedCells.includes(nextId)) {
        setActivedCell(nextIndex);
        break;
      }
    }
  }

  const handleKeyDown = (e, i) => {
    if (e.key === 'Backspace') {
      const startPos = props.questions[props.currentQuestion].startPosition
      const name = e.target.name
      if (i > startPos) {
        if (!solvedCells.includes(name)) {
          setCells(prev => ({ ...prev, [name]: "" }));
        }

        let prevIndex = i;
        const step = direction === "horizontal" ? 1 : 10;

        while (prevIndex > startPos) {
          prevIndex -= step;
          const prevId = `${Math.floor(prevIndex / 10)}-${prevIndex % 10}`;

          if (!solvedCells.includes(prevId)) {
            setActivedCell(prevIndex);
            break;
          }
          if (prevIndex <= startPos) {
            setActivedCell(startPos);
            break;
          }
        }
      }
    }
  }

  const setCellsDisplay = (id) => {
    if (currentCells.includes(id) && !solvedCells.includes(id)) {
      return { background: "grey", color: "white", boxShadow: "0 0 1rem rgba(172, 172, 172, 0.75)" }
    }
    if (solvedCells.includes(id)) {
      return { background: "green", color: "white" }
    } else {
      return { background: "none", color: "white" };
    }
  }

  return isSolved ? (
    <>
      <div>Всё</div>
      <button
        onClick={() => {
          setIsSolved(!isSolved);
        }}
      >
        Начать сначала
      </button>
    </>
  ) : (
    <>
      <div className="grid-inputs-container">
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
              className="input-cell"
              style={setCellsDisplay(id)}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          )
        })}
      </div>
    </>
  )
}