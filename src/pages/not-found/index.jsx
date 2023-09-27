/* eslint-disable consistent-return */
import { useState, useEffect } from 'react'
import { Bar } from '../../components/Bar/Bar'
import { Search } from '../../components/Search/Search'
import Nav from '../../components/Nav/Nav'
import { NotFound } from '../../components/NotFound/NotFound'
import { Footer } from '../../components/Footer/Footer'
import * as S from './styles'

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
  return (
        <S.Wrapper>
          <S.Container>
            <S.Content>
              <Nav />
              <Search />
              <NotFound/>
            </S.Content>
            <Bar isLoaded={isLoaded} />
            <Footer />
          </S.Container>
        </S.Wrapper>
  )
}

export default Main