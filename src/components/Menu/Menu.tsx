import { useState } from "react"
import { MyMusic } from "./Music/MyMusic";

const MENU_DATA = [
  {
    id: 1,
    title: "Music",
    item: <MyMusic />
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
    <>
      {menuItem ? (
        <>
          {currentMenuItem.item}
          <button
            onClick={() => setMenuItem(null)}
          >
            В меню
          </button>
        </>
      ) : menuList}
    </>
  )
}  