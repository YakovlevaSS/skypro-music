import { useState } from 'react'
import trackArr from '../../utilits/trackArr'
import * as S from './styles'

function Filter() {
  // создаем переменные состояния для каждой кнопки
  const [visibleAuthor, setVisibleAuthor] = useState(false)
  const [visibleYear, setVisibleYear] = useState(false)
  const [visibleGenre, setVisibleGenre] = useState(false)

  // функции изменения состояния при клике
  const toggleVisibilityAuthor = () => {
    setVisibleAuthor(!visibleAuthor)
    setVisibleGenre(false)
    setVisibleYear(false)
  }

  const toggleVisibilityYear = () => {
    setVisibleAuthor(false)
    setVisibleGenre(false)
    setVisibleYear(!visibleYear)
  }

  const toggleVisibilityGenre = () => {
    setVisibleAuthor(false)
    setVisibleGenre(!visibleGenre)
    setVisibleYear(false)
  }

  // создание массивов из годов, авторов и жанров из существующих массивов треков
  const authorArr = Array.from(
    new Set(trackArr.map((track) => track.trackAuthorLink)),
  )
  const yearArr = Array.from(new Set(trackArr.map((track) => track.year)))
  const genrerArr = Array.from(new Set(trackArr.map((track) => track.genre)))

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>

      {/* условный рндеринг первый фильтр */}
      {visibleAuthor ? (
        <S.FilterWrap>
          <S.FilterButtonClick
            type="button"
            onClick={toggleVisibilityAuthor}
          >
            исполнителю
          </S.FilterButtonClick>
          <S.FilterLength>{authorArr.length}</S.FilterLength>
          <S.FilterMenu>
            <S.FilterListMenu>
              {authorArr.map((item) => (
                <S.FilterListMenu key={item}>
                  <S.FilterListMenuLink href="#">{item}</S.FilterListMenuLink>
                </S.FilterListMenu>
              ))}
            </S.FilterListMenu>
          </S.FilterMenu>
        </S.FilterWrap>
      ) : (
        <S.FilterButton
          type="button"
          onClick={toggleVisibilityAuthor}
        >
          исполнителю
        </S.FilterButton>
      )}

      {/* условный рндеринг первый фильтр */}
      {visibleYear ? (
        <S.FilterWrap>
          <S.FilterButtonClick
            type="button"
            onClick={toggleVisibilityYear}
          >
            году выпуска
          </S.FilterButtonClick>
          <S.FilterLength>{yearArr.length}</S.FilterLength>
          <S.FilterMenuYear>
            <S.FilterListMenu>
              {yearArr.map((item) => (
                <S.FilterListMenu key={item}>
                  <S.FilterListMenuLink href="#">{item}</S.FilterListMenuLink>
                </S.FilterListMenu>
              ))}
            </S.FilterListMenu>
          </S.FilterMenuYear>
        </S.FilterWrap>
      ) : (
        <S.FilterButton
          type="button"
          onClick={toggleVisibilityYear}
        >
          году выпуска
        </S.FilterButton>
      )}

      {/* условный рндеринг первый фильтр */}
      {visibleGenre ? (
        <S.FilterWrap>
          <S.FilterButtonClick
            type="button"
            onClick={toggleVisibilityGenre}
          >
            жанру
          </S.FilterButtonClick>
          <S.FilterLength>{genrerArr.length}</S.FilterLength>
          <S.FilterMenu>
            <S.FilterListMenu>
              {genrerArr.map((item) => (
                <S.FilterListMenu key={item}>
                  <S.FilterListMenuLink href="#">{item}</S.FilterListMenuLink>
                </S.FilterListMenu>
              ))}
            </S.FilterListMenu>
          </S.FilterMenu>
        </S.FilterWrap>
      ) : (
        <S.FilterButton
          type="button"
          onClick={toggleVisibilityGenre}
        >
          жанру
        </S.FilterButton>
      )}
    </S.CenterblockFilter>
  )
}
export default Filter