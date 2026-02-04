import { useEffect, useState } from "react";
import { get, set } from "idb-keyval"
import dataPictures from "./../../../data/pictures.json";
import { PictureList } from "./PictureList";

export const MyPictures = () => {
  const [pictures, setPictures] = useState(dataPictures);

  useEffect(() => {
    const loadPictures = async () => {
      const savedPictures = await get("pictures");
      if (savedPictures) {
        setPictures(savedPictures);
      }
    };
    loadPictures()
  }, []);

  const onAddPicture = async (newPicture) => {
    const updatedPictures = [...pictures];
    updatedPictures.unshift(newPicture);
    setPictures(updatedPictures);
    await set("pictures", updatedPictures);
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