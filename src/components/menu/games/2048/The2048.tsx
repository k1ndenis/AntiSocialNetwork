import { useEffect, useState } from 'react'
import dataCells from './../../../../data/cells2048.json'
import './The2048.css'

export const The2048 = () => {
  const [grid, setGrid] = useState([
    [0, 2, 0, 0],
    [0, 0, 2, 2],
    [2, 2, 0, 0],
    [0, 0, 0, 2],
  ]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }

      setGrid(prevGrid => {
        const newGrid = JSON.parse(JSON.stringify(prevGrid));
        switch (e.key) {
          case 'ArrowUp': {
            for (let col = 0; col < 4; col++) {
              const column = [];
              for (let row = 0; row < 4; row++) {
                if (newGrid[row][col] !== 0) column.push(newGrid[row][col]);
              };

              while (column.length < 4) column.push(0);

              for (let row = 0; row < 4; row++) {
                newGrid[row][col] = column[row];
              };
            }
            break;
          };
          case 'ArrowDown': {
            for (let col = 0; col < 4; col++) {
              const column = [];
              for (let row = 3; row >= 0; row--) {
                if (newGrid[row][col] !== 0) column.push(newGrid[row][col]);
              };

              while (column.length < 4) column.push(0);

              for (let row = 3, k = 0; row >= 0; row--, k++) {
                newGrid[row][col] = column[k];
              };
            }
            break;
          };
          case 'ArrowLeft': {
            for (let row = 0; row < 4; row ++) {
              const currentRow = [];
              for (let col = 0; col < 4; col++) {
                if (newGrid[row][col] !== 0) currentRow.push(newGrid[row][col]);
              };

              while (currentRow.length < 4) currentRow.push(0);

              for (let col = 0; col < 4; col++) {
                newGrid[row][col] = currentRow[col];
              };
            }
            break;
          };
          case 'ArrowRight': {
            for (let row = 0; row < 4; row ++) {
              const currentRow = [];
              for (let col = 3; col >= 0; col--) {
                if (newGrid[row][col] !== 0) currentRow.push(newGrid[row][col]);
              };

              while (currentRow.length < 4) currentRow.push(0);

              for (let col = 3, k = 0; col >= 0; col--, k++) {
                newGrid[row][col] = currentRow[k];
              };
            }
            break;
          };
        }
        return newGrid;
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

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