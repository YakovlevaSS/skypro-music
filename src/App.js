/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import { Bar } from './components/Bar/Bar'
import { CenterBlock } from './components/CenterBlock/CenterBlock'
import Nav  from './components/Nav/Nav'
import { SideBar } from './components/SideBar/SidBar'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      const timeout = setTimeout(() => {
        setIsLoaded(true);
      }, 10000);

      console.log(isLoaded);

      return () => clearTimeout(timeout); 
    }
  }, [isLoaded]);
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Nav/>
            <CenterBlock isLoaded={isLoaded}/>
            <SideBar isLoaded={isLoaded}/>
          </main>
          <Bar isLoaded={isLoaded}/>
          <footer className="footer" />
        </div>
      </div>
    </div>
  )
}

export default App
