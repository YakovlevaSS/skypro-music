/* eslint-disable consistent-return */
import { useState } from "react";
import GlobalStyle from './global'
import AppRoutes from './routes'


function App() {
  const [user, setUser] = useState(false)

  const handleLogin = () => {
    localStorage.setItem('user', 'true');
    const curentLocalStorage = localStorage.getItem('user');
    setUser(curentLocalStorage);
  }

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
        onAuthButtonClick={handleLogin}
      />
    </>
  )
}

export default App
