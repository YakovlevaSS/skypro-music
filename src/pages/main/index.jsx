/* eslint-disable consistent-return */
import { useState, useEffect } from 'react'
import Bar from '../../components/Bar/Bar'
import CenterBlock from '../../components/CenterBlock/CenterBlock'
import Nav from '../../components/Nav/Nav'
import SideBar from '../../components/SideBar/SidBar'
import Footer from '../../components/Footer/Footer'
import * as S from './styles'
import { getAllTracks } from '../../api'

function Main() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      const timeout = setTimeout(() => {
        setIsLoaded(true)
      }, 10000)

      return () => clearTimeout(timeout)
    }
  }, [isLoaded])

getAllTracks().then((tracks) => console.log(tracks))
  return (
        <S.Wrapper>
          <S.Container>
            <S.Content>
              <Nav />
              <CenterBlock isLoaded={isLoaded} />
              <SideBar isLoaded={isLoaded} />
            </S.Content>
            <Bar isLoaded={isLoaded} />
            <Footer />
          </S.Container>
        </S.Wrapper>
  )
}

export default Main