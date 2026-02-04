import "./PictureList.css"

export const PictureList = (props) => {

  const handleFileChange = (e) => {
    const currentFile = e.target.files[0];
    if (currentFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const newPicture = {
          id: Date.now(),
          url: reader.result
        }
        props.onAddPicture(newPicture);
      }
      reader.readAsDataURL(currentFile);
    }
    e.target.value = "";
  }

  const pictureList = (
      <ul>
        <li>
          <div className="card">
            <label htmlFor="file-upload">
              <img
                src="/images/add-button.png"
                className="add-button"
            />
            </label>
            <input
              id="file-upload"
              className="add-picture-input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
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