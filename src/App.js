/* eslint-disable consistent-return */

import { useState, useEffect } from "react";
import GlobalStyle from './global'
import AppRoutes from './routes'


function App() {
  const [user, setUser] = useState(null)
  const [isLoginMode, setIsLoginMode] = useState(true);

  if (user) {
    setUser(localStorage.getItem('user'))
  }

  useEffect(() => {
    const isLoginModeFromStorage = JSON.parse(
      localStorage.getItem('isLoginMode'),
    );
    setIsLoginMode(isLoginModeFromStorage || true);
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem('user');
  //   const curentLocalStorage = localStorage.getItem('user');
  //   console.log(curentLocalStorage)
  //   setUser(curentLocalStorage);
  // }
  return (
    <>
      <GlobalStyle />
      <AppRoutes
        user={user}
        setUser={setUser}
        isLoginMode={isLoginMode}
      />
    </>
  )
}

export default App
