import { SORT_MODES } from "./bll/useTrackProcessor";
import "./SortingButtons.css"

const { 
  AUTHOR_ASC,
  AUTHOR_DESC,
  TITLE_ASC,
  TITLE_DESC
} = SORT_MODES;

export const SortingButtons = (props) => {
  const { sorting, setSorting } = props

  return (
    <div className="music-sorting-buttons">
      <button
        onClick={() => sorting === AUTHOR_ASC ? setSorting(AUTHOR_DESC) : setSorting(AUTHOR_ASC)}
      >
        Автор {sorting === AUTHOR_ASC ? "↑" : "↓"}
      </button>
      <button
        onClick={() => sorting === TITLE_ASC ? setSorting(TITLE_DESC) : setSorting(TITLE_ASC)}
      >
        Название {sorting === TITLE_ASC ? "↑" : "↓"}
      </button>
    </div>
  )
}