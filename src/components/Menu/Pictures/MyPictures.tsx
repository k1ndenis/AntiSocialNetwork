import dataPictures from "./../../../data/pictures.json";
import { PictureList } from "./PictureList";

export const MyPictures = () => {

  return (
    <>
      <PictureList
        dataPictures={dataPictures}
      />
    </>
  )
}