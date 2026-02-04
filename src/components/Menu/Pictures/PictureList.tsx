import "./PictureList.css"

export const PictureList = (props) => {

  const pictureList = (
      <ul>
      {props.dataPictures.map((picture) => (
        <li>
          <div className="card">
            <img src={picture.url} />
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      {pictureList}
    </>
  )
}