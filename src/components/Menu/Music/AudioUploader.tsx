import { useState } from "react";
import "./AudioUploader.css"

export const AudioUploader = (props) => {

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const currentFile = e.target.files[0]
    if (currentFile) {
      setFile(currentFile)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) return alert("Выберите файл");

    const newTrack = {
      id: Date.now(),
      author: author,
      title: title,
      url: URL.createObjectURL(file)
    }

    props.onAddTrack(newTrack)

    setAuthor("");
    setTitle("")
    setFile(null);
    e.target.reset();
  }

  return (
    <>
      <form 
        className="track-upload-form"
        onSubmit={handleSubmit}
      >
        Загрузить трек
        <input
          type="text"
          placeholder="Имя автора"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Название песни"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          required
        />
        <button
          type="submit"
        >Добавить трек</button>
      </form>
    </>
  )
}