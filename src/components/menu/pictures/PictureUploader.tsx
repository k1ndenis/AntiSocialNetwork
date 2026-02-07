export const AudioUploader = (props) => {

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

  return (
    <>
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
    </>
  )
}