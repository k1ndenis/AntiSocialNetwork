export const SortingButtons = (props) => {
  const { isSortingByTitle, setIsSortingByTitle, isSortingByAuthor, setIsSortingByAuthor } = props



  return (
    <>
      <button
        onClick={() => {
          setIsSortingByAuthor(!isSortingByAuthor);
          setIsSortingByTitle(false);
        }}
      >
        Сортировать по автору
      </button>
      <button
        onClick={() => {
          setIsSortingByTitle(!isSortingByTitle);
          setIsSortingByAuthor(false);
        }}
      >
        Сортировать по названию
      </button>
    </>
  )
}