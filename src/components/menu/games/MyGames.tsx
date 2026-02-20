import { useState } from "react"
import { Scanword } from "./scanword/Scanword"

export const MyGames = () => {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <>
      <button
        onClick={() => setActiveGame("scanword")}
      >
        Сканворд
      </button>
      <div>
        {activeGame === "scanword" && <Scanword />}
        {activeGame && (
          <button onClick={() => setActiveGame(null)}>
            Выйти из игры
          </button>
        )}
      </div>
    </>
  )
}