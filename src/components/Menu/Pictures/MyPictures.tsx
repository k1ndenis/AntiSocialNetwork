import { useState } from "react";
import dataPictures from "./../../../data/pictures.json";
import { PictureList } from "./PictureList";

export const MyPictures = () => {
  const [pictures, setPictures] = useState(() => {
    const saved = localStorage.getItem("pictures");
    return saved ? JSON.parse(saved) : dataPictures;
  });

  const onAddPicture = (newPicture) => {
    const updatedPictures = [...pictures];
    updatedPictures.push(newPicture);
    setPictures(updatedPictures);
    localStorage.setItem("pictures", JSON.stringify(updatedPictures));
  }

  return (
    <>
      <PictureList
        pictures={pictures}
        onAddPicture={onAddPicture}
      />
    </>
  )
}