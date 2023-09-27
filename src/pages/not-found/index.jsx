/* eslint-disable consistent-return */
import { useState, useEffect } from 'react'
import { Bar } from '../../components/Bar/Bar'
import { Search } from '../../components/Search/Search'
import Nav from '../../components/Nav/Nav'
import { NotFoundContent } from '../../components/NotFoundContent/NotFound'
import { Footer } from '../../components/Footer/Footer'
import * as S from './styles'

export function NotFound() {

  return (
        <S.Wrapper>
          <S.Container>
            <S.Content>
              <Nav />
              <Search />
              <NotFoundContent/>
            </S.Content>
            <Bar isLoaded={isLoaded} />
            <Footer />
          </S.Container>
        </S.Wrapper>
  )
}
