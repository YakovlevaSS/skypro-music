/* eslint-disable consistent-return */
// import React from 'react';
import { useState, useEffect } from 'react'
// import './App.css'
import { Bar } from './components/Bar/Bar'
import { CenterBlock } from './components/CenterBlock/CenterBlock'
import Nav from './components/Nav/Nav'
import { SideBar } from './components/SideBar/SidBar'
import { Footer } from './components/Footer/Footer'
import * as S from './styles/styles'
import { GlobalStyle } from './global'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      const timeout = setTimeout(() => {
        setIsLoaded(true)
      }, 10000)

      return () => clearTimeout(timeout)
    }
  }, [isLoaded])
  return (
    <>
      <GlobalStyle />
      <S.App>
        <S.Wrapper>
          <S.Container>
            <S.Main>
              <Nav />
              <CenterBlock isLoaded={isLoaded} />
              <SideBar isLoaded={isLoaded} />
            </S.Main>
            <Bar isLoaded={isLoaded} />
            <Footer />
          </S.Container>
        </S.Wrapper>
      </S.App>
    </>
  )
}

export default App
