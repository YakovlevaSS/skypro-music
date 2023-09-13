import { useState } from 'react'
// import { trackArr } from "../../utilits/trackArr";
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

  const toggleVisibilityGenre= () => {
    setVisibleAuthor(false)
    setVisibleGenre(!visibleGenre)
    setVisibleYear(false)
  }

  // создание массивов из годов, авторов и жанров из существующих массивов треков



  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <button className="filter__button button-author _btn-text" type="button" onClick={toggleVisibilityAuthor}>исполнителю</button>
      <button className="filter__button button-year _btn-text" type="button" onClick={toggleVisibilityYear}>году выпуска</button>
      <button  className="filter__button button-genre _btn-text" type="button" onClick={toggleVisibilityGenre}>жанру</button>
    </div>
  )
}
