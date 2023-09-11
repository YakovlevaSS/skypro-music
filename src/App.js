/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
import './App.css'
import { Bar } from './components/Bar/Bar'
import { CenterBlock } from './components/CenterBlock/CenterBlock'
import { Nav } from './components/Nav/Nav'
import { SideBar } from './components/SideBar/SidBar'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Nav/>
            <CenterBlock/>
            <SideBar/>
          </main>
          <Bar/>
          <footer className="footer" />
        </div>
      </div>
    </div>
  )
}

export default App
