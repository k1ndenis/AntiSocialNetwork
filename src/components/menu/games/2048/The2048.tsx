import './The2048.css'
import { use2048 } from './bll/use2048'

export const The2048 = () => {
  const { grid, startGame } = use2048()

  return (
    <div className="grid-container">
      <button
        onClick={startGame}
      >Новая игра</button>
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