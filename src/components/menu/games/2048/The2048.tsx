import { useEffect, useState } from 'react'
import dataCells from './../../../../data/cells2048.json'
import './The2048.css'

export const The2048 = () => {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowUp': {
          console.log("'ArrowUp'");
          break;
        };
        case 'ArrowDown': {
          console.log("'ArrowDown'");
          break;
        };
        case 'ArrowLeft': {
          console.log("'ArrowLeft'");
          break;
        };
        case 'ArrowRight': {
          console.log("'ArrowRight'");
          break;
        };
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [grid])

  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className='grid-row'>
          {row.map((value, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} className='grid-cell'>
              {value !== 0 ? value : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}