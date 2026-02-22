import "./PictureList.css"
import { PictureUploader } from "./PictureUploader"

export const PictureList = (props) => {

  const pictureList = (
      <ul>
        <li>
          <div className="add-button-container">
            <PictureUploader
              onAddPicture={props.onAddPicture}
            />
          </div>
        </li>
      {props.pictures.map((picture) => (
        <li key={picture.id}>
          <div className="card">
            <img src={picture.url} />
            <button
              onClick={() => {
                if (confirm("Подтвердите действие")) {
                  props.onDeletePicture(picture.id)}
                }
              }
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