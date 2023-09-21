/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
import { useState, useEffect } from 'react'
// import './App.css'
import { Bar } from './components/Bar/Bar'
import { CenterBlock } from './components/CenterBlock/CenterBlock'
import Nav from './components/Nav/Nav'
import { SideBar } from './components/SideBar/SidBar'
import { Footer } from './components/Footer/Footer'
import { GlobalStyle } from './styles/global'
import * as S from './styles/styles'

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
