/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { trackArr } from '../../utilits/trackArr'
import './filter.css'
/* eslint-disable import/prefer-default-export */

export function Filter() {
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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

{/* условный рндеринг первый фильтр */}
      {visibleAuthor ? (
        <div className="filter__wrap"><button
          className="filter__button button-author _btn-text_active"
          type="button"
          onClick={toggleVisibilityAuthor}
        >
          исполнителю
        </button>
        <div className="filter__length">{authorArr.length}</div>
        <div className = "filter__menu">
          <ul className = "filter__list">
            {authorArr.map((item) =>(
              <li key={item}>
                <a href='#'>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      ) : (
        <button
          className="filter__button button-author _btn-text"
          type="button"
          onClick={toggleVisibilityAuthor}
        >
          исполнителю
        </button>
      )}

{/* условный рндеринг первый фильтр */}
{visibleYear ? (
        <div className="filter__wrap"><button
          className="filter__button button-year _btn-text_active"
          type="button"
          onClick={toggleVisibilityYear}
        >
          году выпуска
        </button>
        <div className="filter__length">{yearArr.length}</div>
        <div className = "filter__menu filter__menu-year">
          <ul className = "filter__list">
            {yearArr.map((item) =>(
              <li className='filter__list-item' key={item} >
                <a href='#'>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      ) : (
        <button
        className="filter__button button-year _btn-text"
        type="button"
        onClick={toggleVisibilityYear}
      >
        году выпуска
      </button>
      )}

{/* условный рндеринг первый фильтр */}
{visibleGenre ? (
      <div className="filter__wrap"><button
          className="filter__button button-genre _btn-text_active"
          type="button"
          onClick={toggleVisibilityGenre}
        >
          жанру
        </button>
        <div className="filter__length">{genrerArr.length}</div>
        <div className = "filter__menu">
          <ul className = "filter__list">
            {genrerArr.map((item) =>(
              <li key={item}>
                <a href='#'>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      ) : (
        <button
        className="filter__button button-genre _btn-text"
        type="button"
        onClick={toggleVisibilityGenre}
      >
        жанру
      </button>
      )}

    </div>
  )
}
