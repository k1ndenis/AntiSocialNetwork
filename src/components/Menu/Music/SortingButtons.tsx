export const SortingButtons = (props) => {
  const { sorting, setSorting } = props

  return (
    <>
      <button
        onClick={() => {
          if (sorting === 1) {
            setSorting(2);
          } else {
            setSorting(1);
          }
        }}
      >
        Автор {sorting === 1 ? "↑" : "↓"}
      </button>
      <button
        onClick={() => {
          if (sorting === 3) {
            setSorting(4);
          } else {
            setSorting(3);
          }
        }}
      >
        Название {sorting === 3 ? "↑" : "↓"}
      </button>
    </>
  )
}