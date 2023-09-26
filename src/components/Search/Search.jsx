import * as S from './styles'

/* eslint-disable import/prefer-default-export */
export function Search () {
    return (
              <S.CenterblockSearch>
                <S.SearchSvg>
                  <use xlinkHref="img/icon/sprite.svg#icon-search" />
                </S.SearchSvg>
                <S.SearchText
                  type="search"
                  placeholder="Поиск"
                  name="search"
                />
              </S.CenterblockSearch>
    )
    }
