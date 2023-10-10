/* eslint-disable consistent-return */

import { useState, useEffect } from "react";
import GlobalStyle from './global'
import AppRoutes from './routes'


function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || null,
  
  )
  const [isLoginMode, setIsLoginMode] = useState(false);

  useEffect(() => {
    const currentIsLoginMode = localStorage.getItem('isLoginMode');
    setIsLoginMode(currentIsLoginMode  || false);
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
