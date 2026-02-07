import { useState } from "react";
import { set } from "idb-keyval"

export const SignUpForm = (props) => {
  const [currentLogin, setCurrentLogin] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const loginHandleChange = (e) => {
    setCurrentLogin(e.target.value);
  }

  const passwordHandleChange = (e) => {
    setCurrentPassword(e.target.value);
  }

  const handleSignUp = async (e, log, pas) => {
    e.preventDefault();
    const newUser = {
      login: log,
      password: pas
    }
    if (props.users.find(user => user.login == newUser.login)) {
      alert("Логин занят")
    } else {
      const updatedUsers = [...props.users, newUser];
      props.setUsers(updatedUsers);
      await set("users", updatedUsers);
      props.setIsAuthenticated(true);
      await set("loggedUser", newUser);
    }
  }

  const form = (
    <form
      onSubmit={(e) => handleSignUp(e, currentLogin, currentPassword)}
    >
      <input
        type="text"
        placeholder="Придумайте логин"
        value={currentLogin}
        onChange={loginHandleChange}
      />
      <input
        type="password"
        placeholder="Придумайте пароль"
        value={currentPassword}
        onChange={passwordHandleChange}
      />
      <button>
        Зарегистрироваться
      </button>
    </form>
  )

  return (
    <>
      {form}
    </>
  )
}