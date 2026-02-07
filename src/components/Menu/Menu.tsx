import { useState } from "react"
import "./Menu.css"
import { MyMusic } from "./music/MyMusic";
import { MyVideos } from "./videos/MyVideos";
import { MyWeather } from "./weather/MyWeather";
import { MyPictures } from "./pictures/MyPictures";

const MENU_DATA = [
  {
    id: 1,
    title: "Музыка",
    item: <MyMusic />
  },
  {
    id: 2,
    title: "Картинки",
    item: <MyPictures />
  },
  {
    id: 3,
    title: "Видео",
    item: <MyVideos />
  },
  {
    id: 4,
    title: "Погода",
    item: <MyWeather />
  }
]

export const Menu = () => {

  const [menuItem, setMenuItem] = useState(null);

  const menuList = (
    MENU_DATA.map((item) => 
      <button
        key={item.id}
        onClick={() => setMenuItem(item.id)}
      >
        {item.title}
      </button>
    )
  )

  const currentMenuItem = MENU_DATA.find(item => item.id === menuItem);

  return ( 
    <div className="menu">
      {menuItem ? (
        <>
          <button
            onClick={() => setMenuItem(null)}
          >
            В меню
          </button>
          {currentMenuItem.item}
          <button
            onClick={() => setMenuItem(null)}
          >
            В меню
          </button>
        </>
      ) : menuList}
    </div>
  )
}  