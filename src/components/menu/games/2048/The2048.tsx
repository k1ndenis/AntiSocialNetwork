import './The2048.css'
import { use2048 } from './bll/use2048'
import { StartGameBtn } from './startGameBtn'

export const The2048 = () => {
  const { grid, startGame } = use2048()

  return (
    <>
      <StartGameBtn
        startGame={startGame}
      />
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
    </>
  )
}