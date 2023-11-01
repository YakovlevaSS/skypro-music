/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter'
import PlayListTitle from '../../components/PlayListTitle/PlayListTitle'
import PlayList from '../../components/PlayList/PlayList'
// import { allTracksSelector } from '../../store/selectors/player';
import { useGetAllTracksQuery } from '../../services/player'
import { setCurrentPlaylist } from '../../store/slices/player'
import { compare } from '../../utilits/helpToFilter'

export default function MainPage({ isPlaying }) {
  const dispatch = useDispatch()
  const { data = [], isError, isLoading } = useGetAllTracksQuery()
  // const [tracks, setTracks] = useState([])
  // const [originalPlayList, setOriginalPlayList] = useState([])
  const [isActiveSortYear, setIsActiveSortYear] = useState('По умолчанию')
  const [activeFilterAuthor, setActiveFilterAuthor] = useState([])
  const [activeFilterGenre, setActiveFilterGenre] = useState([])
  const [searchValue, setSearchValue] = useState('')

  dispatch(setCurrentPlaylist(data))

  const originalPlayList = data
  let sortPlaylist = originalPlayList

  useEffect(() => {
    // Сортировка по дате
    if (isActiveSortYear === 'Сначала новые') {
      sortPlaylist = sortPlaylist?.slice(0).sort(compare)
    } else if (isActiveSortYear === 'Сначала старые') {
      sortPlaylist = sortPlaylist?.slice(0).sort(compare).reverse()
    }

    // Сортировка по автору
    if (activeFilterAuthor.length !== 0) {
      sortPlaylist = sortPlaylist?.filter((track) =>
        activeFilterAuthor.includes(track.author),
      )
    }
    // Сортировка по жанру
    if (activeFilterGenre.length !== 0) {
      sortPlaylist = sortPlaylist?.filter((track) =>
        activeFilterGenre.includes(track.genre),
      )
    }
    if (searchValue) {
      sortPlaylist = sortPlaylist?.filter((track) =>
      track.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    }
    console.log(sortPlaylist);

    // dispatch(setCurrentPlaylist(sortPlaylist))
  }, [isActiveSortYear, activeFilterAuthor, activeFilterGenre, searchValue])

  console.log(searchValue);

  return (
    <S.MainCenterblock>
      <Search 
      setSearchValue={setSearchValue}/>
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter
        isActiveSortYear={isActiveSortYear}
        setIsActiveSortYear={setIsActiveSortYear}
        activeFilterAuthor={activeFilterAuthor}
        setActiveFilterAuthor={setActiveFilterAuthor}
        activeFilterGenre={activeFilterGenre}
        setActiveFilterGenre={setActiveFilterGenre}
      />
      <S.CenterblockContent>
        <PlayListTitle />

        {isError ? (
          <S.ErrorBlock>
            <S.ErrorMessage>
              Не удалось загрузить плейлист, попробуйте позже
            </S.ErrorMessage>
          </S.ErrorBlock>
        ) : (
          <PlayList
            isLoading={isLoading}
            isPlaying={isPlaying}
            tracks={sortPlaylist}
          />
        )}
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}
