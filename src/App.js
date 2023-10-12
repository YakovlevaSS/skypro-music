/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable consistent-return */

import { useState, useEffect } from "react";
import GlobalStyle from './global'
import AppRoutes from './routes'
import UserContext from "./Context/UserContext";


function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || null,
  
  )
  const [isLoginMode, setIsLoginMode] = useState(false);

  useEffect(() => {
    const currentIsLoginMode = localStorage.getItem('isLoginMode');
    console.log(currentIsLoginMode);
    setIsLoginMode(currentIsLoginMode  || false);
    console.log(isLoginMode)
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
      <UserContext.Provider value={{ user, setUser }}>
      <AppRoutes
        user={user}
        setUser={setUser}
        isLoginMode={isLoginMode}
      />
      </UserContext.Provider>
    </>
  )
}

export default App
