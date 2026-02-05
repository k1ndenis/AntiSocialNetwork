import "./PictureList.css"
import { AudioUploader } from "./PictureUploader"

export const PictureList = (props) => {

  const pictureList = (
      <ul>
        <li>
          <div className="card">
            <AudioUploader
              onAddPicture={props.onAddPicture}
            />
          </div>
        </li>
      {props.pictures.map((picture) => (
        <li key={picture.id}>
          <div className="card">
            <img src={picture.url} />
            <button
              onClick={() => props.onDeletePicture(picture.id)}
            >
              x
            </button>
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