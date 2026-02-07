import { useEffect, useState } from "react"
import { get, set } from "idb-keyval"
import { SignUpForm } from "./SignUpForm";
import { LoginForm } from "./LoginForm";
import { Menu } from "../Menu/Menu";

export const AuthPage = () => {
  const [users, setUsers] = useState([]);
  const [isLogining, setIsLogining] = useState(false);
  const [isReg, setIsReg] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loadLoggedUser = async () => {
      const loggedUser = await get("loggedUser");
      if (loggedUser) {
        setIsAuthenticated(true);
      }
    }
    loadLoggedUser();
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      const savedUsers = await get("users");
      if (savedUsers) {
        setUsers(savedUsers);
      }
    }
    loadUsers();
  }, []);

  const handleLogout = async () => {
    await set("loggedUser", null);
    setIsAuthenticated(false);
  }

  if (isAuthenticated) return (
    <Menu
      handleLogout={handleLogout}
    />
  )

  if (!isLogining && !isReg) return (
    <>
      <button
        onClick={(() => setIsLogining(true))}
      >
        Войти
      </button>
      <button
        onClick={() => setIsReg(true)}
      >
        Зарегистрироваться
      </button>
    </>
  )

  if (isLogining) return (
    <LoginForm
      setIsAuthenticated={setIsAuthenticated}
      users={users}
    />
  )

  if (isReg) return (
    <SignUpForm
      setIsAuthenticated={setIsAuthenticated}
      users={users}
      setUsers={setUsers}
    />
  )
}

