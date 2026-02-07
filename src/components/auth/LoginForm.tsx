import { useState } from "react";
import { set } from "idb-keyval"

export const LoginForm = (props) => {
  const [currentLogin, setCurrentLogin] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const loginHandleChange = (e) => {
    setCurrentLogin(e.target.value)
  }

  const passwordHandleChange = (e) => {
    setCurrentPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = props.users.find(user => user.login === currentLogin && user.password === currentPassword);
    if (currentUser) {
      props.setIsAuthenticated(true)
      await set("loggedUser", currentUser)
    } else alert("Аккаунт не найден")
  }

  const form = (
    <form
      onSubmit={(e) => handleLogin(e)}
    >
      <input
        type="text"
        placeholder="Введите логин"
        value={currentLogin}
        onChange={loginHandleChange}
      />
      <input
        type="password"
        placeholder="Введите пароль"
        value={currentPassword}
        onChange={passwordHandleChange}
      />
      <button>
        Войти
      </button>
    </form>
  )

  return (
    <>
      {form}
    </>
  )
}