import * as S from './styles'
 
export default function Search ({setSearchValue,}) {
    return (
              <S.CenterblockSearch>
                <S.SearchSvg>
                  <use xlinkHref="/img/icon/sprite.svg#icon-search" />
                </S.SearchSvg>
                <S.SearchText
                  type="search"
                  placeholder="Поиск"
                  name="search"
                  onChange={(e) => {
                    setSearchValue(e.target.value)
                  }}
                />
              </S.CenterblockSearch>
    )
    }
