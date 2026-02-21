import { useState } from "react"
import { Scanword } from "./scanword/Scanword"
import { The2048 } from "./2048/The2048";

export const MyGames = () => {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <>
      <button
        onClick={() => setActiveGame("scanword")}
      >
        Сканворд
      </button>
      <button
        onClick={() => setActiveGame("2048")}
      >
        2048
      </button>
      <div>
        {activeGame === "scanword" && <Scanword />}
        {activeGame === "2048" && <The2048 />}
        {activeGame && (
          <button onClick={() => setActiveGame(null)}>
            Выйти из игры
          </button>
        )}
      </div>
    </>
  )
}